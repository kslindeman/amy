var express = require('express'),
    logger = require('morgan'),
    app = express(),
    port = process.env.NODE_PORT || 8000,
    env = process.env.NODE_ENV || 'development';

function render(view) {
    return function(req, res) {
        res.render(view);
    };
}

app.enable('verbose errors');

if (env === 'development') {
    app.use(logger('dev'));
    app.locals.pretty = true;
} else if (env === 'production') {
    app.disable('verbose errors');
}

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', render('home'));
app.get('/about', render('about'));

app.listen(port, function() {
    console.log('Listening on port ' + port);
});
