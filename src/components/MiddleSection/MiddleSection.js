import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import classes from './MiddleSection.module.scss';
import {Slider} from "antd";
import login from "../../services/services";
import {service} from "../../services/services";

const MiddleSection = ({ SP_T, SP_L}) => {
    const onChangeLight = (lightValue) => {
        service.setVar({var: "P5_N2_SP_L", value: lightValue})
            .catch((error)=>alert(`Something wrong: ${error}`));
    }

    const onChangeTemp = (tempValue) => {
        service.setVar({var: "P5_N2_SP_T", value: tempValue})
            .catch((error)=>alert(`Something wrong: ${error}`));
    }

    const railStyleObj = { backgroundColor: '#69777d'};
    return (
        <div className={classes.blackSecondLayer}>
            <div className={classes.imageBlock}>
                <div className={classes.imageBlockImage}></div>
            </div>
            <div className={classes.blackControlBlock}>
                <div className={classes.blackLightAndTempBlock}>
                    <div className={classes.blackLight}>
                        <p className={classes.blackHeadText}>ОСВЕЩЕНИЕ</p>
                        <div className={classes.blackStatsValue}>
                            {SP_L}
                            <div className={classes.blackStatsValueUnit}>%</div>
                        </div>
                        <div className={classes.sliderBlock}>
                            <div className={classes.sliderImageLightLeft}></div>
                            <Slider
                                className={classes.slider}
                                trackStyle={{
                                    backgroundColor: '#5fc5ab',
                                }}
                                handleStyle={{
                                    boxShadow: '0 0 0 4px #5fc5ab',
                                    borderRadius: '50px',
                                }}
                                railStyle={railStyleObj}
                                defaultValue={SP_L}
                                onChangeComplete={onChangeLight}
                            />
                            <div className={classes.sliderImageLightRight}></div>
                        </div>
                    </div>
                    <div className={classes.blackTemp}>
                        <p className={classes.blackHeadText}>ТЕМПЕРАТУРА</p>
                        <div className={classes.blackStatsValue}>
                            {SP_T}
                            <div className={classes.blackStatsValueUnit}>°C</div>
                        </div>
                        <div className={classes.sliderBlock}>
                            <div className={classes.sliderImageTempLeft}></div>
                            <Slider
                                className={classes.slider}
                                trackStyle={{
                                    backgroundColor: '#5fc5ab',
                                }}
                                handleStyle={{
                                    boxShadow: '0 0 0 4px #5fc5ab',
                                    borderRadius: '50px',
                                }}
                                railStyle={railStyleObj}
                                min={16}
                                max={35}
                                defaultValue={SP_T}
                                onChangeComplete={onChangeTemp}
                            />
                            <div className={classes.sliderImageTempRight}></div>
                        </div>
                    </div>
                </div>
                <div className={classes.blackBlinds}>
                    <p className={classes.blackHeadText}>ЖАЛЮЗИ</p>
                </div>
            </div>
        </div>
    )
        ;
};


const mapStateToProps = (state) => {     //для переменных из стейта
    return {
        SP_T: state.SP_T,
        SP_L: state.SP_L,
    }
};
export default connect(mapStateToProps, actions)(MiddleSection);

