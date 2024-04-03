

const initState = {
    count: 0,
    SENS_T: 0,
    BLIND_POS:0,
    SENS_H: 0,
    SENS_Q: 800,
    SP_T: 0,
    SP_L: 0,
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'counter':
            return {
                ...state,
                count: state.count + 1,
            };
        case 'addToState_SENS_T':
            return {
                ...state,
                SENS_T: action.payload,
            };
        case 'addToState_BLIND_POS':
            return {
                ...state,
                BLIND_POS: action.payload,
            };
        case 'addToState_SENS_H':
            return {
                ...state,
                SENS_H: action.payload,
            };
        case 'addToState_SENS_Q':
            return {
                ...state,
                SENS_Q: action.payload,
            };
        case 'addToState_SP_T':
            return {
                ...state,
                SP_T: action.payload,
            };
        case 'addToState_SP_L':
            return {
                ...state,
                SP_L: action.payload,
            };
        default:
            return state;
    }
}
export default reducer;