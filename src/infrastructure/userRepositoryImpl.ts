import { ModelStatic } from '@sequelize/core';
import { IUserRepository } from '../domain/IUserRepository';
import { UserModel } from './database/user.model';
import { UserEntity } from '../domain';
import { InternalServerError } from '../utils/AppErrors';

export class UserRepositoryImpl implements IUserRepository {
    constructor(private userModel: ModelStatic<UserModel>) {}

    async createUser(user: UserEntity): Promise<UserEntity> {
        try {
            const { firstName, lastName, age, email } = user;
            const newUser = this.userModel.build({
                firstName,
                lastName,
                age,
                email,
            });
            await newUser.save();
            return {
                id: newUser.id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                age: newUser.age,
                status: newUser.status,
                email: newUser.email,
            };
        } catch (error) {
            throw new InternalServerError('Error saving user');
        }
    }

    async isEmailAlreadySaved(email: string): Promise<boolean> {
        try {
            let user = await this.userModel.findOne({
                where: { email: email },
            });
            return Boolean(user);
        } catch (error) {
            throw new InternalServerError('Error finding user');
        }
    }
}
