export default ParsingError;
declare class ParsingError extends Error {
    constructor(key: any, message: any);
    key: any;
}
