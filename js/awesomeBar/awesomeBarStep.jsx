/*global require*/

var React = require('react');
var AwesomeStepStar = require('./awesomeStepStar.jsx')

var AwesomeBarLi = React.createClass({
    render: function () {
        var done = this.props.done;
        var tittel = this.props.tittel;
        
        return (
            <li>
                <h3 className="awesome-bar-li-title text-center color-text-step">{tittel}</h3>
                <AwesomeStepStar done={done} />
            </li>
        );
    }
});

module.exports = AwesomeBarLi;