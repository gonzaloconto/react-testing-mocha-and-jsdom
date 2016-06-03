/*
 describe('Dropdown component', function(){
 before('render and locate element', function() {
 let renderedComponent = TestUtils.renderIntoDocument(
 <Dropdown model={countriesModel} localization_prefix={'country_'} multiselect={true}/>
 );

 // Searching for <input> tag within rendered React component
 // Throws an exception if not found
 var inputComponent = TestUtils.findRenderedDOMComponentWithTag(
 renderedComponent,
 'input'
 );

 this.inputElement = inputComponent.getDOMNode();
 });

 it('<input> should be of type "checkbox"', function() {
 assert(this.inputElement.getAttribute('type') === 'checkbox');
 });

 it('<input> should not be checked', function() {
 assert(this.inputElement.checked === false);
 });
 });
 */