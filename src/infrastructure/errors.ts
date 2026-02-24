import { AppError } from '../utils/AppErrors';

export class DatabaseConnectionError extends AppError {
    constructor(detail = 'The connection to database failed') {
        super(500, 'DATABASE_CONNECTION', detail);
    }
}

export class UserNotFound extends AppError {
    constructor(detail = 'User not found') {
        super(404, 'USER_NOT_FOUND', detail);
    }
}
