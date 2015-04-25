/*global require*/

var React = require('react');

var AwesomeStar = React.createClass({
    render: function () {
        var fillColor = this.props.done ? '#00f' : '#fff';
        
        return (
            <svg className="awesome-star-small" xmlns="http://www.w3.org/2000/svg" width="65" height="55" viewBox="0 0 51 48">
                <path fill={fillColor} stroke="#00f" strokeWidth="2" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
            </svg>
        );
    }
});

module.exports = AwesomeStar;