var React = require('react');
var Router = require('react-router');
var UserProfile = require('./GitHub/UserProfile');
var Repos = require('./GitHub/Repos');
var Notes = require('./Notes/Notes');

var Profile = React.createClass({
	
	//initialize each child component with empty data
	getInitialState: function(){
		return{
			
			bio: {
				name: 'Tyler' 
			},
			
			repos: ['a','b','c'],
			
			notes: [1,2,3]
		}
	},

	render: function(){
		return (
			<div className="row">
				<div className="col-md-4">
					<UserProfile username={this.props.params.username} bio={this.state.bio} />
				</div>
				<div className="col-md-4">
					<Repos repos={this.state.repos}/>
				</div>
				<div className="col-md-4">
					<Notes notes={this.state.notes}/>
				</div>
			</div>
		)
	}

});

module.exports = Profile;