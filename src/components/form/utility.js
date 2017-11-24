export function addTwoNumbers(a, b) {
    return a + b;
}

export function devideTwoNumbers(a, b) {
    return a / b;
}

export function toUpperCase(value) {
    return value.toUpperCase();
}

export function transformObjectToArray(object) {
    var resultArray = [];
    for(let key of Object.keys(object)) {
        resultArray.push(object[key]);
    }
    return resultArray;
}