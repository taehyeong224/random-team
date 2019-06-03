export const isExist = (value) => {
 return !(value === null || value === undefined)
}

export const isExistOrThrow = (value) => {
    if (value === null || value === undefined) {
        throw "value is null or undefined";
    } else {
        return true;
    }
}