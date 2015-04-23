/*global require, document*/

var React = require('react');
var AwesomeBarStep = require('./awesomeBarStep.jsx');

var AwesomeBar = React.createClass({
    render: function() {
        return (
            <ul className="awesome-bar no-bullets">
                <li>
                    <h3 className="awesome-bar-li-title text-center color-text-now">Now</h3>
                    <div className="awesome-bar-now color-bg-now"></div>
                </li>
            
                <AwesomeBarStep tittel="Step 1" done="true" />
                <AwesomeBarStep tittel="Step 2" done="false" />
                
                <li>
                   <h3 class="awesome-bar-li-title text-right color-text-awesome">Awesome</h3>
                    <svg class="awesome-star-small awesome-bar-awesome" xmlns="http://www.w3.org/2000/svg" width="84" height="75" viewBox="0 0 51 48">
                        <path fill="#0f0" stroke="#0f0" stroke-width="2" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
                    </svg>
                </li>
            </ul>
        );
    }
});

module.exports = AwesomeBar;

/*

<ul class="awesome-bar no-bullets">
                <li>
                   <h3 class="awesome-bar-li-title color-text-now">Now</h3>
                   <div class="awesome-bar-now color-bg-now"></div>
                </li>
                <li>
                   <h3 class="awesome-bar-li-title text-center color-text-step">Step 1</h3>
                    <svg class="awesome-star-small" xmlns="http://www.w3.org/2000/svg" width="65" height="55" viewBox="0 0 51 48">
                        <path fill="#00f" stroke="#00f" stroke-width="2" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
                    </svg>
                </li>
                <li>
                   <h3 class="awesome-bar-li-title text-center color-text-step">Step 2</h3>
                    <svg class="awesome-star-small" xmlns="http://www.w3.org/2000/svg" width="65" height="55" viewBox="0 0 51 48">
                        <path fill="#fff" stroke="#00f" stroke-width="2" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
                    </svg>
                </li>
                <li>
                   <h3 class="awesome-bar-li-title text-center color-text-step">Step 3</h3>
                    <svg class="awesome-star-small" xmlns="http://www.w3.org/2000/svg" width="65" height="55" viewBox="0 0 51 48">
                        <path fill="#fff" stroke="#00f" stroke-width="2" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
                    </svg>
                </li>
                <li>
                   <h3 class="awesome-bar-li-title text-right color-text-awesome">Awesome</h3>
                    <svg class="awesome-star-small awesome-bar-awesome" xmlns="http://www.w3.org/2000/svg" width="84" height="75" viewBox="0 0 51 48">
                        <path fill="#0f0" stroke="#0f0" stroke-width="2" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
                    </svg>
                </li>
            </ul>

*/