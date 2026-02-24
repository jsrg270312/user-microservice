import { AppError } from '../utils/AppErrors';

export class EmailAlreadyExists extends AppError {
    constructor(detail = 'The email is already registered') {
        super(409, 'EMAIL_ALREADY_EXISTS', detail);
    }
}
