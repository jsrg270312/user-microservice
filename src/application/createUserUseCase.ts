import { UserEntity, UserStatus } from '../domain';
import { IUserRepository } from '../domain/IUserRepository';
import { ICreateUserUseCaseBoundary } from './userUseCasesBoundaries';
import { CreateUserInputDto, CreateUserOutputDto } from './dtos/createUserDTO';
import { EmailAlreadyExists } from './errors';
export class CreateUserUseCase implements ICreateUserUseCaseBoundary {
    constructor(private readonly userRepository: IUserRepository) {}

    public async execute(
        userData: CreateUserInputDto,
    ): Promise<CreateUserOutputDto> {
        let emailExist = await this.userRepository.isEmailAlreadySaved(
            userData.email,
        );
        if (emailExist) throw new EmailAlreadyExists();
        const userToSave: UserEntity = {
            ...userData,
        };
        const userSaved = await this.userRepository.createUser(userToSave);
        return {
            id: userSaved.id as number,
            firstName: userSaved.firstName,
            lastName: userSaved.lastName,
            age: userSaved.age,
            email: userSaved.email,
            status: userSaved.status as UserStatus,
        };
    }
}
