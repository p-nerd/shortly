class Response {
    body: any;
    status: number;

    constructor(body: any, status: number) {
        this.body = body;
        this.status = status;
    }
}

export default Response;
