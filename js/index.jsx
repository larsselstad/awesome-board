/*global require, document*/

var React = require('react');
var AwesomeBar = require('./awesomeBar/awesomeBar.jsx');

var HelloWorld = React.createClass({
    render: function() {
        return (
            <div>
                <AwesomeBar />
            </div>
        );
    }
});

React.render(<HelloWorld message="world" />, document.body);