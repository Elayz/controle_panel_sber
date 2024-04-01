import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import classes from './header.module.scss';
import {Flex, Progress} from "antd";
const Header = () => {
    const twoColors = {
        '0%': '#ffffff',
        '100%': '#ffffff',
    };
    const fontSize = '1em';
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
                <Flex gap="small" wrap="wrap">
                    <Progress type="circle" percent={75} trailColor={circleTrailColor} format={(percent) => <span style={{color: fontColor}}>CO₂</span>} strokeColor={twoColors} size={circleSize} strokeWidth={circleWidth}/>
                    <span>75</span>
                    <span>ppm</span>
                </Flex>
                <Flex gap="small" wrap="wrap">
                    <Progress type="circle" percent={75} trailColor={circleTrailColor} format={(percent) => <span></span>} strokeColor={twoColors} size={circleSize} strokeWidth={circleWidth}/>
                    <span className={classes.currentTempDark}></span>
                    <span>°C</span>
                </Flex>
                <Flex gap="small" wrap="wrap">
                    <Progress type="circle" percent={75} trailColor={circleTrailColor} format={(percent) => <span></span>} strokeColor={twoColors} size={circleSize} strokeWidth={circleWidth}/>
                    <span className={classes.currentHumpDark}></span>
                    <span>%</span>
                </Flex>
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
export default (Header);

