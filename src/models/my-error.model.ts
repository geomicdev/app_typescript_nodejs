export class MyError extends Error {
    constructor(message: any, public statusCode: any) {
        super(message);
    }
}

