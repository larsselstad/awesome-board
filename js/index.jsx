/*global require, document*/

var React = require('react');
var EventEmitter = require("events").EventEmitter;
var model = require('./model');
var AwesomeList = require('./awesomeList/awesomeList.jsx');
var navigation = require('./navigation');

var ee = new EventEmitter();

var App = React.createClass({
    getInitialState: function () {
        return {
            data: model.get()
        };
    },

    componentDidMount: function () {
        this.props.eventEmitter.on('url', function (data) {
            this.setState({
                data: data
            });
        }.bind(this));
        
        model.on('change', function (currentModel) {
            this.setState({data: currentModel});
        }.bind(this));
    },

    render: function () {
        return (
            <AwesomeList boards={this.state.data.boards} />
        );
    }
});

var app = React.createElement(App, {eventEmitter: ee});

React.render(app, document.body);

navigation.init(ee, model);