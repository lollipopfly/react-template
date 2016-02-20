var React         = require('react');
var SomeComponent = require('./SomeComponent.jsx');

var Application = React.createClass({
	render: function() {
		return (
			<div>
				<SomeComponent />
			</div>
		);
	}
});

module.exports = Application;








