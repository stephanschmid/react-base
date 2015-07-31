var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var PropTypes = React.PropTypes;

var Navigation = React.createClass({

    render: function() {
        return (
            <div>
                <Link to="about">About</Link>
                <Link to="info">Info</Link>
                <RouteHandler />
            </div>
        );
    }

});

module.exports = Navigation;
