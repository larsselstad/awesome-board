/*global require, document*/

var React = require('react');

var AwesomeBoardTask = React.createClass({
    handleChange: function (evt) {
        console.log(evt.target.checked);
    },

    render: function() {
        var id = this.props.prefix + '_task_' + this.props.id;
        
        return (
            <li className="board-list-li">
                <label htmlFor={id}>
                    <input type="checkbox" id={id} checked={this.props.done} onChange={this.handleChange} /> {this.props.text}
                </label>
            </li>
        );
    }
});

module.exports = AwesomeBoardTask;