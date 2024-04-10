

const initState = {
    count: 0,
    SENS_T: 0,
    BLIND_POS:0,
    BLIND_POS_SP:0,
    SENS_H: 0,
    SENS_Q: 0,
    SP_T: -1,
    SP_L: -1,
    offAllActive: 0,
    offLightActive: 0,
    heatingActive: 0,
    coolingActive: 0,
    offLightActiveReserve: 0,   //используется для хранения данных offLightActive, если включается режим offAllActive т.к. эта функция не реализована на сервере
    heatingActiveReserve: 0,    //используется для хранения данных heatingActive, если включается режим offAllActive т.к. эта функция не реализована на сервере
    coolingActiveReserve: 0,    //используется для хранения данных coolingActive, если включается режим offAllActive т.к. эта функция не реализована на сервере
    blindMoveValue: null,
    BLIND_CMD_command_value:0,
    sliderValue: 0,
    badRealisation: 0,
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'changeState_BLIND_POS_SP':
            return {
                ...state,
                BLIND_POS_SP: action.payload,
            };
        case 'changeState_badRealisation':
            return {
                ...state,
                badRealisation: action.payload,
            };
        case 'changeState_sliderValue':
            return {
                ...state,
                sliderValue: action.payload,
            };
        case 'changeState_BLIND_CMD_command_value':
            return {
                ...state,
                BLIND_CMD_command_value: action.payload,
            };
        case 'changeState_blindMoveValue':
            return {
                ...state,
                blindMoveValue: action.payload,
                sliderValue: action.payload,
                badRealisation: action.payload,
            };
        case 'changeState_offAllActive':
            return {
                ...state,
                offAllActive: action.payload,
            };
        case 'changeState_offAllActive_pullInToReserve':
            return {
                ...state,
                offLightActiveReserve: state.offLightActive,
                heatingActiveReserve: state.heatingActive,
                coolingActiveReserve: state.coolingActive,
            };
        case 'changeState_offAllActive_PullOutToReserve':
            return {
                ...state,
                offLightActive: state.offLightActiveReserve,
                heatingActive: state.heatingActiveReserve,
                coolingActive: state.coolingActiveReserve,
            };
        case 'changeState_offLightActive':
            return {
                ...state,
                offLightActive: action.payload,
            };
        case 'changeState_heatingActive':
            return {
                ...state,
                heatingActive: action.payload,
            };
        case 'changeState_coolingActive':
            return {
                ...state,
                coolingActive: action.payload,
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