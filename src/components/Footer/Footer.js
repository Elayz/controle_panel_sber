import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import classes from './Footer.module.scss';

const Footer = () => {

    return (
        <div className={classes.blackSecondLayer}>
            <div className={classes.blackLogoBlock}>
                <p>ЛОГО</p>
            </div>
            <div className={classes.blackScenariosBlock}>
                <div className={classes.blackScenario}>
                    <div className={classes.blackScenarioText}>
                        <p>СЦЕНАРИИ</p>
                    </div>
                    <div className={classes.blackOffAllModes}>6</div>
                </div>
                <div className={classes.blackModesBlock}>
                    <div className={classes.blackOffLightMode}>3</div>
                    <div className={classes.blackOnHeatingMode}>4</div>
                    <div className={classes.blackOnCoolingMode}>5</div>
                </div>
            </div>
        </div>
    )
        ;
};


// const mapStateToProps = (state) => {     //для переменных из стейта
//     return {
//         countValue: state.count,
//     }
// };
// export default connect(mapStateToProps, actions)(Panel);
export default (Footer);

