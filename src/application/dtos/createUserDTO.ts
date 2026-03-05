import { UserStatus } from '../../domain';

export type CreateUserInputDto = {
    firstName: string;
    email: string;
    lastName?: string;
    age?: number;
};
export type CreateUserOutputDto = {
    id: number;
    firstName: string;
    status: UserStatus;
    email: string;
    lastName?: string;
    age?: number;
};
