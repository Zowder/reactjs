const React = require('react');
const ReactDOM = require('react-dom');

var List = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!', message: []};
  },
    componentDidMount: function () {
      this.connection = new WebSocket('wss://echo.websocket.org');
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
      var msgList = this.state.message.map(function(name, i){
                        return <li key={i}>{name}</li>;
                      })
      return(
        <div>
          <input
            type="text"
            defaultValue={this.state.value}
            onChange={this.handleChange}/>
            <button value={this.state.value} onClick={this.sendMsg}> Send</button>
            <button onClick={this.clear}>Clear</button>
            <ul>{ msgList }</ul>
        </div>
      );
    }
});

ReactDOM.render(
    <List />,
    document.getElementById('app')
);
