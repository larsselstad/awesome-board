/*global require, module*/

var EventEmitter = require("events").EventEmitter;

function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

var model = require('../sb1.json');
var currentBoard;

function singleBoard(index) {
    var jsonClone = copy(model);

    jsonClone.boards = jsonClone.boards.slice(index, index + 1);

    return jsonClone;
}

module.exports = {
    emit: EventEmitter.prototype.emit,
    on: EventEmitter.prototype.on,
    get: function () {
        return model;
    },
    getBoard: function (index) {
        currentBoard = index;

        return singleBoard(index);
    },
    setChange: function (field, value) {
        var splitFields = field.split('-');

        var name = splitFields[0];
        var index = splitFields[2];

        console.log(splitFields);

        model.boards[currentBoard].steps[0][name][index].done = value;

        console.log(model.boards[currentBoard]);

        this.emit('change', singleBoard(currentBoard));
    }
};