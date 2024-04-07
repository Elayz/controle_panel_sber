import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import classes from './Footer.module.scss';
import {service} from "../../services/services";

const Footer = (
    {
        changeState_offAllActive_PullOutToReserve,
        changeState_offAllActive_pullInToReserve,
        offLightActiveReserve,
        coolingActiveReserve,
        heatingActiveReserve,
        offLightActive,
        offAllActive,
        heatingActive,
        coolingActive
    }) => {
    const onClickOffAllActive = () => {
        if(offAllActive===0){
            service.setVar({var: "P5_N2_SCENA_OFF_ALL", value: 1})
                .then(() => {
                    changeState_offAllActive_pullInToReserve();
                })
                .then(() => {
                    service.setVar({var: "P5_N2_SCENA_OFF_LIGHTS", value: 0});
                    service.setVar({var: "P5_N2_SCENA_COOLING", value: 0});
                    service.setVar({var: "P5_N2_SCENA_HEATING", value: 0});
                })
                 .catch((error)=>alert(`Something wrong: ${error}`));
        }else if(offAllActive===1){
            service.setVar({var: "P5_N2_SCENA_OFF_ALL", value: 0})
                .then(() => {
                    changeState_offAllActive_PullOutToReserve();
                })
                .then(() => {
                    service.setVar({var: "P5_N2_SCENA_OFF_LIGHTS", value: offLightActiveReserve});
                    service.setVar({var: "P5_N2_SCENA_COOLING", value: coolingActiveReserve});
                    service.setVar({var: "P5_N2_SCENA_HEATING", value: heatingActiveReserve});
                })
                .catch((error)=>alert(`Something wrong: ${error}`));
        }else{
            alert(`Something wrong with onClickOffAllActive insert value`);
        }
    };
    const onClickOffLightActive = () => {
        if(offLightActive===0){
            service.setVar({var: "P5_N2_SCENA_OFF_LIGHTS", value: 1})
                .catch((error)=>alert(`Something wrong: ${error}`));
        }else if(offLightActive===1){
            service.setVar({var: "P5_N2_SCENA_OFF_LIGHTS", value: 0})
                .catch((error)=>alert(`Something wrong: ${error}`));
        }else{
            alert(`Something wrong with onClickOffAllActive insert value`)
        }
    };
    const onClickHeatingActive = () => {
        if(heatingActive===0){
            service.setVar({var: "P5_N2_SCENA_HEATING", value: 1})
                .then(()=>service.setVar({var: "P5_N2_SCENA_COOLING", value: 0}))
                .catch((error)=>alert(`Something wrong: ${error}`));
        }else if(heatingActive===1){
            service.setVar({var: "P5_N2_SCENA_HEATING", value: 0})
                .catch((error)=>alert(`Something wrong: ${error}`));
        }else{
            alert(`Something wrong with onClickOffAllActive insert value`)
        }
    };
    const onClickCoolingActive = () => {
        if(coolingActive===0){
            service.setVar({var: "P5_N2_SCENA_COOLING", value: 1})
                .then(()=>service.setVar({var: "P5_N2_SCENA_HEATING", value: 0}))
                .catch((error)=>alert(`Something wrong: ${error}`));
        }else if(coolingActive===1){
            service.setVar({var: "P5_N2_SCENA_COOLING", value: 0})
                .catch((error)=>alert(`Something wrong: ${error}`));
        }else{
            alert(`Something wrong with onClickOffAllActive insert value`)
        }
    };


    const OffAllButtonText = 'Выкл.всё';
    const OffLightButtonText = 'Выкл.свет';
    const OnHeatButtonText = 'Нагрев';
    const OnCoolingButtonText = 'Охлаждение';

    return (
        <div className={classes.blackSecondLayer}>
            <div className={classes.blackLogoBlock}>
                <p className={classes.footerLogoText}>Powered<br/>by Albacore®</p>
                <div className={classes.logoImage}></div>
            </div>
            <div className={classes.blackScenariosBlock}>
                <div className={classes.blackScenario}>
                    <div className={classes.blackScenarioText}>
                        <p>СЦЕНАРИИ</p>
                    </div>
                    <div onClick={onClickOffAllActive} className={!offAllActive ? classes.blackOffAllModes : classes.scenarioActiveButton}>
                        <div className={classes.blackOffAllModesImage}></div>
                        <p className={classes.scenarioBottomText}>{OffAllButtonText}</p>
                    </div>
                </div>
                <div className={classes.blackModesBlock}>
                    <div onClick={onClickOffLightActive} className={!offLightActive ? classes.blackOffLightMode : classes.scenarioActiveButton}>
                        <div className={!offAllActive ? classes.blackOffLightModeImage : classes.blackOffLightModeImageDisabled}></div>
                        <p className={!offAllActive ? classes.scenarioBottomText : classes.scenarioBottomTextDisabled}>{OffLightButtonText}</p>
                    </div>
                    <div onClick={onClickHeatingActive} className={ !heatingActive ? classes.blackOnHeatingMode : classes.scenarioActiveButton}>
                        <div className={!offAllActive ? classes.blackOnHeatingModeImage : classes.blackOnHeatingModeImageDisabled}></div>
                        <p className={!offAllActive ? classes.scenarioBottomText : classes.scenarioBottomTextDisabled}>{OnHeatButtonText}</p>
                    </div>
                    <div onClick={onClickCoolingActive} className={ !coolingActive ? classes.blackOnCoolingMode : classes.scenarioActiveButton}>
                        <div className={!offAllActive ? classes.blackOnCoolingModeImage : classes.blackOnCoolingModeImageDisabled}></div>
                        <p className={!offAllActive ? classes.scenarioBottomText : classes.scenarioBottomTextDisabled}>{OnCoolingButtonText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};


const mapStateToProps = (state) => {     //для переменных из стейта
    return {
        offAllActive: state.offAllActive,
        offLightActive: state.offLightActive,
        heatingActive: state.heatingActive,
        coolingActive: state.coolingActive,
        offLightActiveReserve: state.offLightActiveReserve,
        heatingActiveReserve: state.heatingActiveReserve,
        coolingActiveReserve: state.coolingActiveReserve,
    }
};
export default connect(mapStateToProps, actions)(Footer);

