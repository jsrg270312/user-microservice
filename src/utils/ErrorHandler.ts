import { AppError } from './AppErrors';

export function errorHandler(error: unknown) {
    if (error instanceof AppError)
        return {
            statusCode: error.code,
            body: JSON.stringify({
                ...error,
            }),
        };

    if (error instanceof Error)
        return {
            statusCode: 500,
            body: JSON.stringify({
                title: 'Internal Server Error',
                type: 'ERROR_THREW',
                detail: error.message,
            }),
        };

    return {
        statusCode: 500,
        body: JSON.stringify({
            title: 'Internal Server Error',
            type: 'UNEXPECTED_ERROR',
            detail: 'Something went wrong.',
        }),
    };
}
