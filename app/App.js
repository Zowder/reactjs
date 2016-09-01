const React = require('react');
const ReactDOM = require('react-dom');
var Mount = require('./Mount')

var List = React.createClass({
  getInitialState: function() {
    this.connection = new WebSocket('wss://echo.websocket.org');
    return {value: '', message: []};
  },
    handleChange: function(event) {
      this.setState({value: event.target.value});
    },
    sendMsg: function (event) {
      this.connection.send(event.target.value)
      console.log(event.target.value);
      this.connection.onmessage = function (ev) {
        this.setState({ message: this.state.message.concat([ev.data + " - Response WS"])});
      }.bind(this);
    },
    clear: function() {
      this.setState({message: []})
    },
    render: function() {
      return(
        <Mount
        value={this.state.value}
        message={this.state.message}
        onChange={this.handleChange}
        sendMsg={this.sendMsg}
        clear={this.clear}
        />
      );
    }
});

ReactDOM.render(
    <List />,
    document.getElementById('app')
);
