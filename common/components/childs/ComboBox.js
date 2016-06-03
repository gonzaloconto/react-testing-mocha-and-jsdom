import React, {
    Component,
    PropTypes,
} from 'react';

import SelectedOptions from './SelectedOption';
import CountriesDropDownList from './CountriesList';

class ComboBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {content, state, selectedOptions, multiselect, onChangeHandler, onClickHandler} = this.props;

        return (
            <div className={"dropdown-container"}>
                <div className={"dropdown-display" + (state.listVisible ? " clicked": "")} onClick={onClickHandler}>
                    <SelectedOptions selectedOptions={selectedOptions}></SelectedOptions>
                    <i className="js-arrow fa fa-angle-down">
                        <svg className="svg-icon-triangle react-dropdown-arrow" >
                            <use xlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-icon-triangle"></use>
                        </svg>
                    </i>
                </div>
                {state.listVisible ? <CountriesDropDownList countries={content} onChangeHandler={onChangeHandler}/> : ''}
            </div>
        );
    }
}

ComboBox.propTypes = {};
ComboBox.defaultProps = {};

export default ComboBox;
