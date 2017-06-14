import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};


const tilesData = [
  {
    img: 'https://www.google.com/logos/doodles/2014/world-cup-2014-54-6495277649231872-hp.gif',
    title: 'Breakfast',
    author: 'jill111',
  }
];



export default class Grids extends React.Component
{
  render()
  {
    return(
    	<div>
    	<div style={styles.root}>
		    <GridList
		      cellHeight={180}
		      style={styles.gridList}
		    >
		      <Subheader>December</Subheader>
		      {tilesData.map((tile) => (
		        <GridTile
		          key={tile.img}
		          title={tile.title}
		          subtitle={<span>by <b>{tile.author}</b></span>}
		          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
		        >
		          <img src={tile.img} />
		        </GridTile>
		      ))}
		    </GridList>
		  </div>
		  </div>
    );
  }
}