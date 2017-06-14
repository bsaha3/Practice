var React=require('react');
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

var DefaultLayout=React.createClass({
	
	render: function(){

		return(
			<MuiThemeProvider>
				<html>
					<head>
						<title>Hello</title>
					</head>
					<body>
						{this.props.children}
					</body>
				</html>
			</MuiThemeProvider>
		);
	}
});

module.exports= DefaultLayout;