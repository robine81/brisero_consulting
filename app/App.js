var React = require ('react');
//this component will be in charge of the rendering, thus import ReactDom
var ReactDOM = require ('react-dom');
var  Router = require('react-router').Router;
var routes = require('./config/routes');

ReactDOM.render(
	<Router>{routes}</Router>,
	document.getElementById('app')
	)