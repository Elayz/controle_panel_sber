import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import classes from './MiddleSection.module.scss';
import {Slider} from "antd";

const MiddleSection = () => {
    const onChange = (a) => {
        console.log(a)
    }
    const handleColor = '#ffffff'
    return (
        <div className={classes.blackSecondLayer}>
            <div className={classes.imageBlock}>
                <p>ИЗОБРАЖЕНИЕ</p>
            </div>
            <div className={classes.blackControlBlock}>
                <div className={classes.blackLightAndTempBlock}>
                    <div className={classes.blackLight}>
                        ОСВЕЩЕНИЕ
                        <Slider
                            trackStyle={{ backgroundColor: '#5fc5ab' }}
                            handleStyle={{boxShadow: '0 0 0 4px #5fc5ab', borderRadius: '50px'}}

                            defaultValue={30}  onChangeComplete={onChange} />
                    </div>
                    <div className={classes.blackTemp}>ТЕМПЕРАТУРА</div>
                </div>
                <div className={classes.blackBlinds}>ШТОРЫ</div>
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

