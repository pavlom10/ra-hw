import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export default class WatchesClock extends React.Component {

    constructor (props) {

        super(props);

        let time = this.calcTime(this.props.timeZone)

        this.state = {
            time: time
        }          

    }

    calcTime = timeZone => {

        let date = new Date();
        let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
        let newDate = new Date(utc + (3600000 * Number(timeZone)));

        return newDate;
    }

    timeTick = () => {

        let newDate = this.calcTime(this.props.timeZone)

        this.setState({
            time: newDate
        });
    }

    componentDidMount() {
        this.interval = setInterval(
          () => this.timeTick(),
          1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }    

    render() {

        const {id, name, timeZone, onDelete} = this.props
        const {time} = this.state;

        // const t = time.toLocaleTimeString();
        // console.log(t);

        return (
            <div className="clock">
                <div>{name} ({timeZone})</div>
                {moment(time).format('hh:mm:ss')}
                <button onClick={() => onDelete(id)}>Удалить</button>
            </div>
        )
    }
}

WatchesClock.propTypes = {
    onDelete: PropTypes.func.isRequired,
    name: PropTypes.string,
    timeZone: PropTypes.string
}