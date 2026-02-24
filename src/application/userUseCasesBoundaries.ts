import { CreateUserInputDto, CreateUserOutputDto } from './dtos/createUserDTO';

export interface ICreateUserUseCaseBoundary {
    execute(userData: CreateUserInputDto): Promise<CreateUserOutputDto>;
}
