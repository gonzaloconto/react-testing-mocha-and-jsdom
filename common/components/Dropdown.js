import React, {
    Component,
    PropTypes,
} from 'react';
import BackboneMixin from '../mixins/ReactBackbone';
import SelectTemplate from 'childs/ComboBox';

React.Backbone = BackboneMixin;

class Dropdown extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SelectTemplate
                multiselect={this.props.multiselect}
                state={this.state}
                content={content}
                selectedOptions={selectedOptions}
                onClickHandler={this.show}
                onChangeHandler={onChange}>
            </SelectTemplate>
        );
    }
}

Dropdown.propTypes = {
    model: React.PropTypes.object.isRequired,
    localization_prefix: React.PropTypes.string,
    multiselect: React.PropTypes.bool
};
Dropdown.mixins = [
    React.Backbone
];
Dropdown.defaultProps = {};

export default Dropdown;
