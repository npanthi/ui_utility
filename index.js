

function isValidResponse(value){
    console.log("Hey its working");
    return (value !== '' && value !== 'null' && value !== undefined && value !== null)
}
module.exports = {
    isValidResponse:isValidResponse
}