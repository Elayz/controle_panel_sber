import * as React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import classes from './apppanel.module.scss';
import Header from "../Header/Header";
import MiddleSection from "../MiddleSection/MiddleSection";
import Footer from "../Footer/Footer";
// import jsonRpcService from '../../services/json_rpc.min';


const Panel = ({countValue, counter}) => {




    // async function login() {
    //     const service = new jsonRpcService("wss://test1.albacore.ru:443", 10000);
    //     await service.connectWS();
    //     const vars = ["SENS_T", "BLIND_POS", "BLIND_CMD"];
    //
    //
    //     const login = 'A28_guest';
    //     const password = '12345678'
    //     const browser = 'chrome'
    //
    //
    //
    //     const res = await service.loginUser(
    //         {login: login, password: password, browser: browser});
    //     // console.log(res);
    //     if (res.result) {
    //         const res2 = await service.verifyTokenUser(
    //             {login: login, token: res.result, browser: ""});
    //         if (res2.result) {
    //             localStorage.setItem("login", login);
    //             localStorage.setItem("token", res.result);
    //         } else {
    //             alert(`Ошибка входа: ${res2.error.message}`);
    //         }
    //     } else {
    //         alert(`Ошибка входа: ${res.error.message}`);
    //     }
    //     const subscription = await service.subscribeVars({
    //         as_index: false,
    //         vars: vars.map((x) => "P5_N1" + "_" + x)
    //     }, (changes) => {
    //         console.log("changes", changes)
    //     })
    // }
    // console.log(login());





    return (
        <section className={classes.blackMainLayer}>
            <Header></Header>
            <MiddleSection></MiddleSection>
            <Footer></Footer>
        </section>
)
    ;
};


const mapStateToProps = (state) => {     //для переменных из стейта
    return {
        countValue: state.count,
    }
};
export default connect(mapStateToProps, actions)(Panel);

