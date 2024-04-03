import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import classes from './MiddleSection.module.scss';
import {Slider} from "antd";

const MiddleSection = ({ SP_T, SP_L}) => {
    const onChange = (a) => {
        console.log(a)
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
                        <Slider
                            trackStyle={{
                                backgroundColor: '#5fc5ab',
                            }}
                            handleStyle={{
                                boxShadow: '0 0 0 4px #5fc5ab',
                                borderRadius: '50px',
                            }}
                            railStyle={railStyleObj}
                            defaultValue={SP_L}
                            onAfterChange={onChange}
                        />
                    </div>
                    <div className={classes.blackTemp}>
                        <p className={classes.blackHeadText}>ТЕМПЕРАТУРА</p>
                        <div className={classes.blackStatsValue}>
                            {SP_T}
                            <div className={classes.blackStatsValueUnit}>°C</div>
                        </div>
                        <Slider
                            trackStyle={{
                                backgroundColor: '#5fc5ab',
                            }}
                            handleStyle={{
                                boxShadow: '0 0 0 4px #5fc5ab',
                                borderRadius: '50px',
                            }}
                            railStyle={railStyleObj}
                            defaultValue={30}
                            onAfterChange={onChange}
                        />
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

