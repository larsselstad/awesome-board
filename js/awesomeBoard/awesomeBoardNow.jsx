/*global require, document*/

var React = require('react');

var AwesomeBoardNow = React.createClass({
    render: function() {
        var nows = this.props.now.map(function (el, i) {
            return (
                <li className="board-list-li" key={i}>{el.text}</li>
            );    
        });
        
        return (
            <div className="board-section color-text-now" id="now">
                <h2 className="base-margin-down">Now</h2>

                <ul className="board-list">
                    {nows}
                </ul>
            </div>
        );
    }
});

module.exports = AwesomeBoardNow;