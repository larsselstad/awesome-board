/*global require, document*/

var React = require('react');
var AwesomeBarStep = require('./awesomeBarStep.jsx');

var AwesomeBar = React.createClass({
    getInitialState: function () {
        return { 
            steps: [
                {
                    text: "Steps Bullet 1",
                    done: true,
                    user: "Maybe"
                },
                {
                    text: "Steps Bullet 2",
                    done: "false",
                    user: "Maybe"
                }
            ]
        };
    },
    
    render: function() {
        var awesomeBarSteps = this.state.steps.map(function(el, i) {
            return (
                <AwesomeBarStep number={i + 1} key={i} done={el.done} />
            );     
        });
        
        return (
            <ul className="awesome-bar no-bullets">
                <li>
                    <h3 className="awesome-bar-li-title text-center color-text-now">Now</h3>
                    <div className="awesome-bar-now color-bg-now"></div>
                </li>
            
                {awesomeBarSteps}
                
                <li>
                   <h3 className="awesome-bar-li-title text-right color-text-awesome">Awesome</h3>
                    <svg className="awesome-star-small awesome-bar-awesome" xmlns="http://www.w3.org/2000/svg" width="84" height="75" viewBox="0 0 51 48">
                        <path fill="#0f0" stroke="#0f0" strokeWidth="2" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
                    </svg>
                </li>
            </ul>
        );
    }
});

module.exports = AwesomeBar;