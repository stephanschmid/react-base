var React = require('react');

// Pages
var About = require('.././Pages/About');
var Home = require('.././Pages/Home');
var Info = require('.././Pages/Info');

// Router
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var routes = (
    <Router.Route name="home" path="/" handler={Home}>
        <Router.Route name="about" path="/about" handler={About}/>
        <Router.Route name="info" path="/info" handler={Info}/>
    </Router.Route>
);
var PropTypes = React.PropTypes;

class PageRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { handler: null };
    }
    componentDidMount() {
        Router.run(routes, this.handleNavigation.bind(this));
    }
    handleNavigation(Handler, state) {
        this.setState({
            handler: Handler
        });
    }
    render() {
        if(!this.state.handler) return null;

        var Handler = this.state.handler;
        return <Handler/>;
    }
}

module.exports = PageRouter;
