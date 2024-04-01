import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import classes from './MiddleSection.module.scss';
import {Slider} from "antd";

const MiddleSection = () => {
    const onChange = (a) => {
        console.log(a)
    }
    const handleColor = '#ffffff';
    const railStyleObj = { backgroundColor: '#69777d'};
    return (
        <div className={classes.blackSecondLayer}>
            <div className={classes.imageBlock}>
                <p>ИЗОБРАЖЕНИЕ</p>
            </div>
            <div className={classes.blackControlBlock}>
                <div className={classes.blackLightAndTempBlock}>
                    <div className={classes.blackLight}>
                        <p className={classes.blackHeadtText}>ОСВЕЩЕНИЕ</p>
                        <div className={classes.blackStatsValue}>
                            00
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
                            defaultValue={30}
                            onChange={onChange}
                        />
                    </div>
                    <div className={classes.blackTemp}>
                        <p className={classes.blackHeadtText}>ТЕМПЕРАТУРА</p>
                        <div className={classes.blackStatsValue}>
                            00
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
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className={classes.blackBlinds}>
                    <p className={classes.blackHeadtText}>ЖАЛЮЗИ</p>
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
export default (MiddleSection);

