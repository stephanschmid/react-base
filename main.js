var React = require('react');
var Navigation = require('./components/Navigation/Navigation');
var PageRouter = require('./components/PageRouter/PageRouter');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;


var App = React.createClass({

    render: function() {
        return (
            <PageRouter />
        );
    }

});


React.render(<App/>, document.body);
