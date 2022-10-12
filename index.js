const PromiseAll = (promises) => {
    const outputs = [];
    let selectedPromiseCounter = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((promise, i) => {
            promise.then((value) => {
                outputs[i] = value;
                selectedPromiseCounter++;
                if (selectedPromiseCounter === promises.length) {
                    resolve(outputs);
                }
            })
                .catch(reject)
        })
    })
}

const promise = [
    Promise.resolve(1999),
    Promise.resolve('Hello'),
];

PromiseAll(promise)
    .then(resp => {
        console.log(resp, 'resp')
    })
    .catch(error => {
        console.log(error)
    })