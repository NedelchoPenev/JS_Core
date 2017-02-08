function validateRequest(obj) {
    const METHODS = ['GET', 'POST', 'DELETE', 'CONNECT'];
    if (!obj.hasOwnProperty('method') || !METHODS.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    let uriRegex = /^([a-zA-Z0-9.]+)$|^(\*)$/g;
    if (!obj.hasOwnProperty('uri') || !uriRegex.test(obj.uri)){
        throw new Error('Invalid request header: Invalid URI')
    }

    let versionRegex = /HTTP\/0.9|HTTP\/1.0|HTTP\/1.1|HTTP\/2.0/g
    if (!obj.hasOwnProperty('version') || !versionRegex.test(obj.version)){
        throw new Error('Invalid request header: Invalid Version');
    }

    let messageRegex = /^[^<>\\&'"]*$/g;
    if (!obj.hasOwnProperty('message') || !messageRegex.test(obj.message)){
        throw new Error('Invalid request header: Invalid Message')
    }

    return obj;
}
