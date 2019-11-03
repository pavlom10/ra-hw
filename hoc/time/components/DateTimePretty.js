import React from 'react';
import DateTime from './DateTime';
import moment from 'moment';

function withPretty(Component) {

    return class extends React.Component {

        prettyTime(date) {
            return moment(date).fromNow();
        }

        render() {      
            //console.log(this.props);

            const {date} = this.props;

            return <Component {...this.props} date={this.prettyTime(date)} />;
        } 
    }
}

const DateTimePretty = withPretty(DateTime);
export default DateTimePretty;