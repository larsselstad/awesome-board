/*global require, document*/

var React = require('react');
var model = require('../model');

var AwesomeBoardTask = React.createClass({
    handleChange: function (evt) {
        model.setChange(evt.target.name, evt.target.checked);
    },

    render: function() {
        var id = this.props.prefix + '-task-' + this.props.id;
        
        return (
            <li className="board-list-li">
                <label htmlFor={id}>
                    <input type="checkbox" id={id} checked={this.props.done} onChange={this.handleChange} name={id} /> {this.props.text}
                </label>
            </li>
        );
    }
});

module.exports = AwesomeBoardTask;