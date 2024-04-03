import jsonRpcService from './json_rpc.min';
import {connect} from "react-redux";
import * as actions from "../redux/actions";
import store from "../index";
import {
    addToState_SENS_H,
    addToState_SENS_Q,
    addToState_SENS_T,
    addToState_SP_L,
    addToState_SP_T
} from "../redux/actions";

export default async function login() {
    const service = new jsonRpcService("wss://test1.albacore.ru:443", 10000);
    await service.connectWS();
    const vars = [
        "SENS_T",
        "BLIND_POS",
        "BLIND_CMD",
        "SENS_H",
        "SENS_Q",
        "SP_T",
        "SP_L",
    ];

    const login = 'A28_guest';
    const password = '12345678'
    const browser = 'chrome'

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
            vars: vars.map((x) => "P5_N2" + "_" + x)
        }, (changes) => {
            console.log(changes);
            changes.map((el) => {
                el.filter(() => {
                    const patternSENS_T = /SENS_T$/;
                    const patternSENS_Q = /SENS_Q$/;
                    const patternSENS_H = /SENS_H$/;
                    const patternSP_T = /SP_T$/;
                    const patternSP_L = /SP_H$/;

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
                })
            });
        });
    } catch(error) {
        alert('fdfdfdf')
    }

}

