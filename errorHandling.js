// https://www.youtube.com/watch?v=XpMW-gxNYD8

function CustomError(name, message) {
    this.name = name;
    this.message = message;
    this.stack = new Error().stack;
}

CustomError.prototype = Object.create(Error.prototype);

function checkInfo(info) {
    try {
        console.log("Processing Info");
        if (!info) {
            throw new CustomError("ReferenceError", "There's no information available!");
        }
        console.log(info);
    } catch (error) {
        console.log(`${error.name}: ${error.message}`);
    } finally {
        console.log("Program execution completed.");
    }
}

checkInfo("");
