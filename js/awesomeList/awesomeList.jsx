/*global require, document*/

var React = require('react');
var AwesomeBar = require('../awesomeBar/awesomeBar.jsx');
var AwesomeBoard = require('../awesomeBoard/awesomeBoard.jsx');

var AwesomeListLi = React.createClass({
    render: function() {
        var board = this.props.board;
        
        return (
            <li>
                <h1>{this.props.tittel}</h1>
                <AwesomeBar steps={this.props.steps} />
                {this.props.showBoard ? <AwesomeBoard board={board} /> : null}
                <div>Awesome people: <a href="/user/stian">Stian</a>, <a href="/user/Lars">Lars</a>, <a href="/user/mats">Mats</a></div>
            </li>
        );
    }
});

var AwesomeList = React.createClass({
    render: function() {
        var listItems = this.props.boards.map(function (el, i, boards) {
                return (
                    // show awesome board if there is just 1 board
                    <AwesomeListLi tittel={el.tittel} steps={el.steps} showBoard={boards.length === 1} board={el} key={i} />
                );
            });
        
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
});

module.exports = AwesomeList;