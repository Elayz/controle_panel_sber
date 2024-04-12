import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import classes from './MiddleSection.module.scss';
import { Slider } from "antd";
import { service } from "../../services/services";

const MiddleSection = ({ SP_T, SP_L, BLIND_POS_SP, blindMoveValue, BLIND_CMD_command_value, changeState_badRealisation, changeState_sliderValue, sliderValue }) => {
    const onChangeLight = (lightValue) => {
        service.setVar({var: "P5_N2_SP_L", value: lightValue})
            .catch((error)=>alert(`Something wrong: ${error}`));
    };

    const onChangeTemp = (tempValue) => {
        service.setVar({var: "P5_N2_SP_T", value: tempValue})
            .catch((error)=>alert(`Something wrong: ${error}`));
    };
    const onChangeBlind = (blindPosition) => {
        changeState_badRealisation(blindPosition);
        service.setVar({var: "P5_N2_BLIND_POS_SP", value: blindPosition})
            .catch((error)=>alert(`Something wrong: ${error}`));
    };
    const onChangeUp = () => {
        service.setVar({var: "P5_N2_BLIND_CMD", value: 3})
            .catch((error)=>alert(`Something wrong: ${error}`));
    };
    const onChangeStop = () => {
        service.setVar({var: "P5_N2_BLIND_CMD", value: 2})
            .catch((error)=>alert(`Something wrong: ${error}`));
    };
    const onChangeDown = () => {
        service.setVar({var: "P5_N2_BLIND_CMD", value: 1})
            .catch((error)=>alert(`Something wrong: ${error}`));
    };
    const handleChange = (e) => {
        changeState_sliderValue(e);
    };
    const railStyleObj = { backgroundColor: '#69777d'};
    const blindMoveStyle = {
        transform: `translateY(-${blindMoveValue * 1.5}px)`,
    };
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
                            {SP_L===-1
                                ?<div></div>
                                :<Slider
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
                            }
                            <div className={classes.sliderImageLightRight}></div>
                        </div>
                    </div>
                    <div className={classes.blackTemp}>
                        <p className={classes.blackHeadText}>ТЕМПЕРАТУРА</p>
                        <div className={classes.blackStatsValue}>
                            {SP_T}
                            <div className={classes.blackStatsValueUnitTemp}>°C</div>
                        </div>
                        <div className={classes.sliderBlock}>
                            <div className={classes.sliderImageTempLeft}></div>
                            {SP_T===-1
                                ?<div></div>
                                :<Slider
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
                            }
                            <div className={classes.sliderImageTempRight}></div>
                        </div>
                    </div>
                </div>
                <div className={classes.blackBlinds}>
                    <p className={classes.blackHeadText}>ЖАЛЮЗИ</p>
                    <div className={classes.blindsFrameBlock}>

                        <div style={blindMoveStyle} className={classes.blindsMove}></div>
                    </div>
                    {blindMoveValue===null
                        ?<div></div>
                        : <Slider
                            className={classes.blindsSlider}
                            trackStyle={{
                                backgroundColor: '#5fc5ab',
                            }}
                            handleStyle={{
                                boxShadow: '0 0 0 4px #5fc5ab',
                                borderRadius: '50px',
                            }}
                            {...(BLIND_CMD_command_value === 1 || BLIND_CMD_command_value === 3
                                ?{ value: blindMoveValue }
                                : BLIND_CMD_command_value===2
                                        ? {value: blindMoveValue}
                                        : {value: sliderValue}
                            )}
                            railStyle={railStyleObj}
                            defaultValue={blindMoveValue}
                            onChangeComplete={onChangeBlind}
                            onChange={handleChange}
                        />
                    }
                    <div className={classes.buttonsBlock}>
                        <div onClick={onChangeDown} className={blindMoveValue===0 ? classes.buttonsBlockDownDisabled : BLIND_CMD_command_value===1 ? classes.buttonsBlockDownActive : classes.buttonsBlockDown}></div>
                        <div onClick={onChangeStop} className={BLIND_CMD_command_value===1 || BLIND_CMD_command_value===3 || blindMoveValue!==BLIND_POS_SP
                            ? classes.buttonsBlockStop
                            : classes.buttonsBlockStopDisabled}></div>
                        <div onClick={onChangeUp} className={blindMoveValue===100 ? classes.buttonsBlockUpDisabled :BLIND_CMD_command_value===3? classes.buttonsBlockUpActive : classes.buttonsBlockUp}></div>
                    </div>
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
        blindMoveValue: state.blindMoveValue,
        BLIND_CMD_command_value: state.BLIND_CMD_command_value,
        sliderValue: state.sliderValue,
        badRealisation: state.badRealisation,
        BLIND_POS_SP: state.BLIND_POS_SP,
    }
};
export default connect(mapStateToProps, actions)(MiddleSection);

