import { UserStatus } from './userStatusEnum';

export interface UserEntity {
    firstName: string;
    email: string;
    id?: number;
    lastName?: string;
    age?: number;
    status?: UserStatus;
}
