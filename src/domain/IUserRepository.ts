import { UserEntity } from './userEntity';
export interface IUserRepository {
    createUser(user: UserEntity): Promise<UserEntity>;
    isEmailAlreadySaved(email: string): Promise<boolean>;
}
