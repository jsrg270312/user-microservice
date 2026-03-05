import { DataBase, UserModel, UserRepositoryImpl } from '../infrastructure';
import { CreateUserUseCase } from '../application';
import { IUserRepository } from '../domain';
import { configuration } from './configuration';

const { databaseConfig } = configuration;
const dataBase = new DataBase(databaseConfig);
const userRepository: IUserRepository = new UserRepositoryImpl(UserModel);
export const container = {
    createUserUseCase: new CreateUserUseCase(userRepository),
};
export const startDataBaseConnection = () => dataBase.startConnection();
