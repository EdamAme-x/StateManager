const createState = (defaultState, callback) => {
    let state = defaultState;
    return {
        set(target) {
            state = target;
            if (callback) {
                callback(state);
            }
        },
        get() {
            return state;
        }
    }
}
