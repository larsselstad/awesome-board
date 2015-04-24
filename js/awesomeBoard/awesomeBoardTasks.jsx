/*global require, document*/

var React = require('react');
var AwesomeBoardTask = require('./awesomeBoardTask.jsx');

var AwesomeBoardTasks = React.createClass({
    render: function() {
        var tasks = this.props.step.tasks.map(function (el, i) {
            return (
                <AwesomeBoardTask id={i} text={el.text} done={el.done} prefix="tasks" />
            );    
        });
        
        return (
            <div className="board-section" id="tasks">
                <h2 className="base-margin-down">Tasks</h2>

                <ul className="no-bullets">
                    {tasks}
                </ul>
            </div>
        );
    }
});

module.exports = AwesomeBoardTasks;