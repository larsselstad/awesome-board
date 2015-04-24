/*global require, document*/

var React = require('react');
var json = require('../eksempel.json');
var AwesomeList = require('./awesomeList/awesomeList.jsx');

var App = React.createClass({
    render: function() {
        return (
            <AwesomeList boards={this.props.data.boards} />
        );
    }
});

var app = React.createElement(App, {data: json});

React.render(app, document.body);