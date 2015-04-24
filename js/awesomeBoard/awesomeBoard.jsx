/*global require, document*/

var React = require('react');
var AwesomeBoardNow = require('./awesomeBoardNow.jsx');
var AwesomeBoardStep = require('./awesomeBoardStep.jsx');
var AwesomeBoardAwesome = require('./awesomeBoardAwesome.jsx');
var AwesomeBoardTasks = require('./awesomeBoardTasks.jsx');

var AwesomeBoard = React.createClass({
    render: function() {
        var board = this.props.board;
        
        console.log(board.steps[0]);
        
        return (
            <div id="board" className="base-margin-down">
                <AwesomeBoardNow now={board.now} />
                <AwesomeBoardStep step={board.steps[0]} />
                <AwesomeBoardAwesome awesome={board.awesome} />
                <AwesomeBoardTasks step={board.steps[0]} />
            </div>
        );
    }
});

module.exports = AwesomeBoard;