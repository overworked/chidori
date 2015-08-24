var React = require( 'react' );

var Main = React.createClass( {
	displayName: 'Main',
	render: function() {
		return (
			<div>
				Welcome to Chidori!
				<ul>
					<li>Challenge Mode</li>
					<li>Solo Play</li>
				</ul>
				<div>Options</div>
			</div>
		);
	}
} );

module.exports = Main;
