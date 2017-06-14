import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Grids from './grid.js';

export default class HelloMessage extends React.Component
{
  render()
  {
    return(
    	<MuiThemeProvider>
    	<div>
			<AppBar
			    title="Biswajit"
			    iconClassNameRight="muidocs-icon-navigation-expand-more"
			  />
		<Grids/>
		</div>
    	</MuiThemeProvider>
    );
  }
}

ReactDOM.render(<HelloMessage name='Biswajit'/>,document.getElementById('root'));
