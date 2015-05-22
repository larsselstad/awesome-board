/*globals module, document, history, window*/

function getIndex(str) {
    var i = str.split('/')[2];

    return parseInt(i, 10);
}

function getTargetUri(href, origin) {
    return href.replace(origin, '');
}

module.exports = {
    init: function (eventEmitter, model) {
        var body = document.querySelector('body');

        body.addEventListener('click', function (e) {
            var target = e.target;

            if (target.nodeName === 'A') {
                e.preventDefault();

                var uri = getTargetUri(target.href, target.origin);
                var index = getIndex(uri);

                var board = model.getBoard(index);

                // TODO: Kanskje bare la modelen sende dette eventet når modelen endres
                eventEmitter.emit('url', board);

                history.pushState(board, uri, uri);
            }
        });

        // TODO: Håndter state ved root. Må være oppdatert model
        history.replaceState(model.get(), '', '/');

        window.onpopstate = function (event) {
            debugger;
            
            eventEmitter.emit('url', event.state);
        };
    }
};