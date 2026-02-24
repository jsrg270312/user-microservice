import {
    APIGatewayProxyEvent,
    APIGatewayProxyHandler,
    APIGatewayProxyResult,
    Context,
} from 'aws-lambda';
import { startDataBaseConnection, container } from '../../config/container';
import { errorHandler } from '../../utils/ErrorHandler';
const useCase = container.createUserUseCase;

export const handler: APIGatewayProxyHandler = async (
    event: APIGatewayProxyEvent,
    context: Context,
): Promise<APIGatewayProxyResult> => {
    try {
        //console.time('databaseConnection');
        await startDataBaseConnection();
        //console.timeEnd('databaseConnection');
        //console.log(JSON.stringify(event, null, 2), 'Event recived');
        const { firstName, lastName, email, age } = JSON.parse(
            event.body as string,
        );
        const newUser = await useCase.execute({
            firstName,
            lastName,
            email,
            age,
        });
        return {
            statusCode: 201,
            body: JSON.stringify(newUser),
        };
    } catch (error: unknown) {
        return errorHandler(error);
    }
};
