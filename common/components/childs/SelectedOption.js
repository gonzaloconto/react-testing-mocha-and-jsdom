import React, {
    Component,
    PropTypes,
} from 'react';

class SelectedOption extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let counter = 1;
        return (
            <div className={"js-tags-container"}>
                {this.props.selectedOptions.map(function (option, index) {
                    {if (index > 3) {
                        counter++;
                        return;
                    }}
                    return <div className={"js-tag"} key={index} ><span>{(index > 2) ? ('+ ' + counter) : option.id}</span></div>
                })}
            </div>
        );
    }
}

SelectedOption.propTypes = {};
SelectedOption.defaultProps = {};

export default SelectedOption;
