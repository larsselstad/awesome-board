/*global require, document*/

var React = require('react');
var AwesomeBoardTask = require('./awesomeBoardTask.jsx');

var AwesomeBoardStep = React.createClass({
    render: function() {
        var step = this.props.step.bullets.map(function (el, i) {
            return (
                <AwesomeBoardTask id={i} text={el.text} done={el.done} prefix="bullets" />
            );    
        });
        
        return (
            <div className="board-section color-text-step" id="step">
                <h2 className="base-margin-down">Next step</h2>

                <ul className="no-bullets">
                    {step}
                </ul>
            </div>
        );
    }
});

module.exports = AwesomeBoardStep;