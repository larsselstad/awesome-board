/*global require, document*/

var React = require('react');

var HelloWorld = React.createClass({
    displayName: "HelloWorld",
    render: function() {
        return (
            <h1>Hello {this.props.message}</h1>
        );
    }
});

React.render(<HelloWorld message="world" />, document.body);