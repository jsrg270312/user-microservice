export class AppError extends Error {
    constructor(
        public code: number,
        public type: string,
        public detail: string,
    ) {
        super(detail);
        Error.captureStackTrace(this, this.constructor);
    }
}

export class BadRequest extends AppError {
    constructor(detail = 'Client side error') {
        super(400, 'BAD_REQUEST', detail);
    }
}

export class NotFound extends AppError {
    constructor(detail = 'Resource not found') {
        super(404, 'NOT_FOUND', detail);
    }
}

export class InternalServerError extends AppError {
    constructor(detail = 'Unexpected error') {
        super(500, 'INTERNAL_SERVER_ERROR', detail);
    }
}
