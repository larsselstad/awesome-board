/*globals module, document, history, window*/

function copy (obj) {
    return JSON.parse(JSON.stringify(obj));
}

function getIndex(str) {
    var i = str.split('/')[2];
    
    return parseInt(i, 10);
}

function getTargetUri(href, origin) {
    return href.replace(origin, '');
}

module.exports = {
    init: function (eventEmitter, json) {
        var body = document.querySelector('body');

        body.addEventListener('click', function (e) {
            var target = e.target;

            if (target.nodeName === 'A') {
                e.preventDefault();

                var uri = getTargetUri(target.href, target.origin);
                var index = getIndex(uri);
                
                var jsonClone = copy(json);
                
                jsonClone.boards = jsonClone.boards.slice(index, index + 1);
                
                eventEmitter.emit('url', jsonClone);

                history.pushState(jsonClone, uri, uri);
            }
        });

        history.replaceState(json, '', '/');

        window.onpopstate = function(event) {
            eventEmitter.emit('url', event.state);
        };
    }
};