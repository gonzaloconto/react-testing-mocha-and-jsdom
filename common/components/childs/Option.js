import React, {
    Component,
    PropTypes,
} from 'react';

class option extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {label, id, onChangeHandler} = this.props;
        return (
            <div>
                <input data-country-code={id} type="checkbox" onChange={onChangeHandler}/>
                <span className={'country-flag ' +'flag-'+ id.toLowerCase()}></span>
                <label>{label} {'('}{id}{')'}</label>
            </div>
        )
    }
}

option.propTypes = {};
option.defaultProps = {};

export default option;
