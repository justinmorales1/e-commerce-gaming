import  React,{ Fragment } from 'react';
import  ListItem from '@material-ui/core/ListItem';
import ListItemText  from '@material-ui/core/ListItemText';
import List from'@material-ui/core/List';
import Grid from '@material-ui/core/Grid'; 
import { Paper, Typography } from '@material-ui/core';

//import { ListItem, ListItemText } from '@material-ui/List';

const styles = {
  Paper: { 
    padding: 20, 
    marginTop: 10, 
    marginBottom: 10, 
    height: 500, 
    overflowY: 'auto'}
};

export default ({ games }) =>(
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>   
      {games.map(([group, games]) => (
          <Fragment>
            <Typography
              variant="headline"
              style={{ textTransform: "capitalize" }}
            >
              {group}
            </Typography>
            <List component="ul">
            {games.map(({title}) =>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>      
            )}
            </List>
          </Fragment>
        ))}   
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography
        variant="display1"
        >
        Welcome!
        </Typography>
        <Typography
          variant="subheading"
          style={{marginTop: 20}}
        >
          Please select a game on the left.
        </Typography>
      </Paper>
    </Grid>
  </Grid>
); 

