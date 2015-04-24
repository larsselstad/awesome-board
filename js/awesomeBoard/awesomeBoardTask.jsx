/*global require, document*/

var React = require('react');

var AwesomeBoardTask = React.createClass({
    render: function() {
        var id = this.props.prefix + '_task_' + this.props.id;
        
        return (
            <li className="board-list-li">
                <label htmlFor={id}>
                    <input type="checkbox" id={id} /> {this.props.text}
                </label>
            </li>
        );
    }
});

module.exports = AwesomeBoardTask;

// {this.props.done ? 'checked' : ''}