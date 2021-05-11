

function isValidResponse(value){
    return (value !== '' && value !== 'null' && value !== undefined && value !== null)
}

function isValidString(value){
    return (isValidResponse(value) && typeof value === "string")
}

function isValidObj(value){
    return (isValidResponse(value) && typeof value === "object")
}

function isValidObjWithLength(value){
    return (isValidResponse(value) && typeof value === "object" && value.length > 0);
}


module.exports = {
    isValidResponse:isValidResponse,
    isValidString:isValidString,
    isValidObject:isValidObj,
    isValidObjectWithLength:isValidObjWithLength
}