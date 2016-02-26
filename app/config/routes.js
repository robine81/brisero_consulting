var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

//describe what this component will export
module.exports = (
	//everyone that enters at / will be servered the component Main
	<Route path="/" component={Main}>
	console.log("hello")
		<Route path="profile/:username" component={Profile} />
	  <IndexRoute component={Home} />
	</Route>
	);