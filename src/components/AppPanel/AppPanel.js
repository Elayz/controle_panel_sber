import * as React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import classes from './apppanel.module.scss';
import Header from "../Header/Header";
import MiddleSection from "../MiddleSection/MiddleSection";
import Footer from "../Footer/Footer";
import login from "../../services/services";


const Panel = ({addToState_SENS_T}) => {
    // console.log("changes", a.filter(() => {
    //     const pattern = /SENS_T$/;
    //     if (pattern.test(a[0])){
    //         console.log(a);
    //     }
    // }))
    const data = login();
    // console.log(data);
    // addToState_SENS_T('fffffffffffffffffffffffff')

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

