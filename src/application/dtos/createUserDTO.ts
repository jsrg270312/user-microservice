import { UserStatus } from '../../domain';

export interface CreateUserInputDto {
    firstName: string;
    email: string;
    lastName?: string;
    age?: number;
}
export interface CreateUserOutputDto {
    id: number;
    firstName: string;
    lastName?: string;
    age?: number;
    status: UserStatus;
    email: string;
}
