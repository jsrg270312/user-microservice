import { DataBase } from '../infrastructure/database/postgresql';
import { CreateUserUseCase } from '../application/createUserUseCase';
import { UserModel } from '../infrastructure/database/user.model';
import { UserRepositoryImpl } from '../infrastructure/userRepositoryImpl';
import { configuration } from './configuration';

const { databaseConfig } = configuration;
const dataBase = new DataBase(databaseConfig);
const userRepository = new UserRepositoryImpl(UserModel);
export const container = {
    createUserUseCase: new CreateUserUseCase(userRepository),
};
export const startDataBaseConnection = () => dataBase.startConnection();
