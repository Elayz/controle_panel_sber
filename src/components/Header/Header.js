import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import classes from './header.module.scss';
import {Flex, Progress} from "antd";
import login from "../../services/services";
const Header = ({ SENS_T, SENS_H, SENS_Q }) => {
    const twoColors = {
        '0%': '#ffffff',
        '100%': '#ffffff',
    };
    const fontColor = 'rgba(255, 255, 255, 255)';
    const circleSize = 60;
    const circleWidth = 10;
    const circleTrailColor = 'rgb(105,119,125)';


    return (
        <div className={classes.blackSecondLayer}>
            <div className={classes.blackPlaceInfoBlock}>
                <p>ПЕРЕГОВОРНАЯ П1</p>
            </div>
            <div className={classes.blackStatsInfoBlock}>
                <Flex gap="small" wrap="wrap" className={classes.circleInfoQ}>
                    <Progress type="circle" percent={SENS_Q/10} trailColor={circleTrailColor} format={(percent) => <span style={{color: fontColor}}>CO₂</span>} strokeColor={twoColors} size={circleSize} strokeWidth={circleWidth}/>
                    <span>{SENS_Q}</span>
                    <span className={classes.circleInfoTextQ}>ppm</span>
                </Flex>
                <Flex gap="small" wrap="wrap" className={classes.circleInfoT}>
                    <Progress type="circle" percent={SENS_T * 2} trailColor={circleTrailColor} format={(percent) => <span></span>} strokeColor={twoColors} size={circleSize} strokeWidth={circleWidth}/>
                    <span className={classes.currentTempDark}></span>
                    <span>{SENS_T}</span>
                    <span className={classes.circleInfoTextT}>°C</span>
                </Flex>
                <Flex gap="small" wrap="wrap" className={classes.circleInfoH}>
                    <Progress type="circle" percent={SENS_H} trailColor={circleTrailColor} format={(percent) => <span></span>} strokeColor={twoColors} size={circleSize} strokeWidth={circleWidth}/>
                    <span className={classes.currentHumpDark}></span>
                    <span>{SENS_H}</span>
                    <span className={classes.circleInfoTextH}>%</span>
                </Flex>
            </div>
        </div>
    )
        ;
};

const mapStateToProps = (state) => {     //для переменных из стейта
    return {
        SENS_T: state.SENS_T,
        SENS_H: state.SENS_H,
        SENS_Q: state.SENS_Q,
    }
};
export default connect(mapStateToProps, actions)(Header);

