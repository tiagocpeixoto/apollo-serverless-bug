exports.generateEvent = body => ({
    body: body ? JSON.stringify(body) : null,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    multiValueHeaders: {},
    httpMethod: "POST",
    isBase64Encoded: false,
    path: "/",
    pathParameters: null,
    queryStringParameters: null,
    multiValueQueryStringParameters: null,
    stageVariables: null,
    requestContext: {
        accountId: "1234567890",
        apiId: "appid",
        httpMethod: "POST",
        identity: {},
        authorizer: {},
        protocol: "HTTP/1.1",
        path: "/",
        stage: "dev",
        requestId: "test",
        requestTimeEpoch: 0,
        resourceId: "none",
        resourcePath: "/",
    },
    resource: "/",
    // version: "2.0"
});
