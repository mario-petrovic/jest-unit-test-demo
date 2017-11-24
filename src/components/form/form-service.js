export function fetchData(callback) {
    callback('Some data');
}

export function fetchDataAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Some data')
        }, 1000)
    })
}

