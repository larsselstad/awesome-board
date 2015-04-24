/*global require, document*/

var React = require('react');

var AwesomeBoardAwesome = React.createClass({
    render: function() {
        var awesomes = this.props.awesome.map(function (el, i) {
            return (
                <li className="board-list-li" key={i}>{el.text}</li>
            );    
        });
        
        return (
            <div className="board-section color-text-awesome" id="awesome">
                <h2 className="base-margin-down">Awesome</h2>

                <ul className="board-list">
                    {awesomes}
                </ul>
            </div>
        );
    }
});

module.exports = AwesomeBoardAwesome;