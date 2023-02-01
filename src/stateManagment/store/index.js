export function createStore() {
    let count = 0;
    const subscribes = [];

    return {
        get count() {
            return count;
        },
        increment() {
            count++;
            subscribes.forEach((fn) => fn());
        },

        subscribe(fn) {
            subscribes.push(fn)
        }
    }
}

const changeMaster = true;