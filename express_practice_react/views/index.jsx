var React=require('react');
var DefaultLayout=require('./layout/master');
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

var IndexComponent=React.createClass({
	
	render: function(){

		return(
			<DefaultLayout>
				<h1>This was built using react {this.props.name}</h1>

				<div>
				    <Badge
				      badgeContent={4}
				      primary={true}
				    >
				      <NotificationsIcon />
				    </Badge>
				    <Badge
				      badgeContent={10}
				      secondary={true}
				      badgeStyle={{top: 12, right: 12}}
				    >
				      <IconButton tooltip="Notifications">
				        <NotificationsIcon />
				      </IconButton>
				    </Badge>
				</div>
			</DefaultLayout>
		);
	}
});

module.exports= IndexComponent;