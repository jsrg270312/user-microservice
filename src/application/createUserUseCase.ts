import { UserEntity, UserStatus, IUserRepository } from '../domain';
import {
    ICreateUserUseCaseBoundary,
    CreateUserInputDto,
    CreateUserOutputDto,
    EmailAlreadyExists,
} from './';
export class CreateUserUseCase implements ICreateUserUseCaseBoundary {
    constructor(private readonly userRepository: IUserRepository) {}

    public async execute(
        userInformation: CreateUserInputDto,
    ): Promise<CreateUserOutputDto> {
        let emailExist = await this.userRepository.isEmailAlreadySaved(
            userInformation.email,
        );
        if (emailExist) throw new EmailAlreadyExists();
        const userToSave: UserEntity = {
            ...userInformation,
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
