var ReactBackbone = {
  getInitialState: function () {
    return this.getBackboneState(this.props);
  },

  componentDidMount: function () {
    if (!_.isFunction(this.getBackboneState)) {
      throw new Error('You must provide getBackboneState(props).');
    }

    this.bindBackboneEvents(this.props);
  },

  componentWillReceiveProps: function (newProps) {
    this.unbindBackboneEvents();
    this.bindBackboneEvents(newProps);
  },

  componentWillUnmount: function () {
    this.unbindBackboneEvents();
  },

  updateBackboneState: function () {
    var state = this.getBackboneState(this.props);
    this.setState(state);
  },

  bindBackboneEvents: function (props) {
    if (!_.isFunction(this.watchBackboneProps)) {
      return;
    }

    if (this.backboneListener) {
      throw new Error('Listener already exists.');
    }

    if (!props) {
      throw new Error('Passed props are empty');
    }

    var listener = _.extend({}, Backbone.Events),
        listenTo = _.partial(listener.listenTo.bind(listener), _, _, this.updateBackboneState);

    this.watchBackboneProps(props, listenTo);
    this.backboneListener = listener;
  },

  unbindBackboneEvents: function () {
    if (!_.isFunction(this.watchBackboneProps)) {
      return;
    }

    if (!this.backboneListener) {
      throw new Error('Listener does not exist.');
    }

    this.backboneListener.stopListening();
    delete this.backboneListener;
  }
};

module.exports = _.extend(ReactBackbone, Backbone.Events);
