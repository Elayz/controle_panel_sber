import * as React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import classes from './apppanel.module.scss';
import Header from "../Header/Header";
import MiddleSection from "../MiddleSection/MiddleSection";
import Footer from "../Footer/Footer";
import login from "../../services/services";


const Panel = () => {
    const data = login();
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

