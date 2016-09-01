const React = require('react');

var Mount = React.createClass({
  render: function () {
    var msgList = this.props.message.map(function(name, i){
                      return <li key={i}>{name}</li>
                    });
    return (
    <div>
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}/>
        <button value={this.props.value} onClick={this.props.sendMsg}>Send</button>
        <button onClick={this.props.clear}>Clear</button>
        <ul>{ msgList }</ul>
    </div>
    )
  }
});
module.exports = Mount;
