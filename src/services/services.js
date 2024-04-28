import jsonRpcService from './json_rpc.min';
import store from "../index";
import {
    addToState_SENS_H,
    addToState_SENS_Q,
    addToState_SENS_T,
    addToState_SP_L,
    addToState_SP_T, changeState_BLIND_CMD_command_value, changeState_BLIND_POS_SP, changeState_blindMoveValue,
    changeState_coolingActive,
    changeState_heatingActive,
    changeState_offAllActive,
    changeState_offLightActive
} from "../redux/actions";


export const service = new jsonRpcService("wss://test1.albacore.ru:443", 10000);
export const matches = [];
await service.connectWS();
export default async function login() {

    const strGet = window.location.search.replace('?', '');
    const regex = /(?:title=([^&]+)|node=([^&]+))/g;
    let match;
    while ((match = regex.exec(strGet)) !== null) {
        matches.push(match[1] || match[2]);
    }

    const vars = [
        "SENS_T",
        "BLIND_POS",
        "BLIND_CMD",
        "SENS_H",
        "SENS_Q",
        "SP_T",
        "SP_L",
        "SCENA_OFF_ALL",
        "SCENA_OFF_LIGHTS",
        "SCENA_HEATING",
        "SCENA_COOLING",
        "BLIND_CMD",
        "BLIND_POS_SP",
        "BLIND_POS",
        "BLIND_CMD"
    ];

    const login = 'A28_guest';
    const password = '12345678'
    const browser = 'chrome'
    const patternSENS_T = /SENS_T$/;
    const patternSENS_Q = /SENS_Q$/;
    const patternSENS_H = /SENS_H$/;
    const patternSP_T = /SP_T$/;
    const patternSP_L = /SP_L$/;
    const patternSCENA_OFF_ALL = /SCENA_OFF_ALL$/;
    const patternSCENA_OFF_LIGHTS = /SCENA_OFF_LIGHTS$/;
    const patternSCENA_COOLING = /SCENA_COOLING$/;
    const patternSCENA_HEATING = /SCENA_HEATING$/;
    const patternBLIND_POS = /BLIND_POS$/;
    const patternBLIND_POS_SP = /BLIND_POS_SP$/;
    const patternBLIND_CMD = /BLIND_CMD$/;

    try{
        const res = await service.loginUser(
            {login: login, password: password, browser: browser});
        if (res.result) {
            const res2 = await service.verifyTokenUser(
                {login: login, token: res.result, browser: ""});
            if (res2.result) {
                localStorage.setItem("login", login);
                localStorage.setItem("token", res.result);
            } else {
                alert(`Ошибка входа: ${res2.error.message}`);
            }
        } else {
            alert(`Ошибка входа: ${res.error.message}`);
        }
        const subscription = await service.subscribeVars({
            as_index: false,
            vars: vars.map((x) => matches[1] + "_" + x)
        }, (changes) => {
            changes.map((el) => {
                el.filter(() => {
                    if (patternBLIND_POS_SP.test(el[0])){
                        store.dispatch(changeState_BLIND_POS_SP(el[2]))
                    }
                    if (patternBLIND_CMD.test(el[0])){
                        store.dispatch(changeState_BLIND_CMD_command_value(el[2]))
                    }
                    if (patternBLIND_POS.test(el[0])){
                        store.dispatch(changeState_blindMoveValue(el[2]))
                    }
                    if (patternSENS_T.test(el[0])){
                        store.dispatch(addToState_SENS_T(Math.ceil(el[2])))
                    }
                    if(patternSENS_Q.test(el[0])){
                        store.dispatch(addToState_SENS_Q(Math.ceil(el[2])))
                    }
                    if(patternSENS_H.test(el[0])){
                        store.dispatch(addToState_SENS_H(Math.ceil(el[2])))
                    }
                    if(patternSP_T.test(el[0])){
                        store.dispatch(addToState_SP_T(Math.ceil(el[2])))
                    }
                    if(patternSP_L.test(el[0])){
                        store.dispatch(addToState_SP_L(Math.ceil(el[2])))
                    }

                    if(patternSCENA_OFF_ALL.test(el[0])){
                        store.dispatch(changeState_offAllActive(el[2]))
                    }
                    if(patternSCENA_OFF_LIGHTS.test(el[0])){
                        store.dispatch(changeState_offLightActive(el[2]))
                    }
                    if(patternSCENA_COOLING.test(el[0])){
                        store.dispatch(changeState_coolingActive(el[2]))
                    }
                    if(patternSCENA_HEATING.test(el[0])){
                        store.dispatch(changeState_heatingActive(el[2]))
                    }

                })
            });
        });
    } catch(error) {
        alert(`Error in login function (service.js): ${error}`)
    }
}

