import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Link from '@material-ui/core/Link'
import green from '@material-ui/core/colors/green'

const styles = theme => ({
  card: {
    maxWidth: 800,
    margin: theme.spacing.unit
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  button: {
    margin: theme.spacing.unit,
    color: 'white',
    backgroundColor: green[700]
  },
  avatar: {
    width: 80,
    height: 80
  },
  link: {
    color: green[800]
  }
});

class PersonCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({expanded: !state.expanded}));
  };

  render(){
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
      <CardHeader
        avatar = {
          <Avatar alt="Tom Pywell" src={require("./images/avatar.jpg")} className={classes.avatar}/>
        }
        title = "Tom Pywell"
        subheader = "Dublin, Ireland"
      />
      <CardMedia
        className = {classes.media}
        image = {require("./images/background.jpg")}
        title = "Tom Pywell"
      />
      <CardContent>
        <Typography component="p">
          I'm a <b>Computer Science Graduate</b> from <b>Trinity College Dublin</b>.
          Currently I work as a private <b>Math Tutor</b>. I really enjoy teaching and <b>Riding Bikes</b>.
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} disableActionSpacing>
        <Button variant="contained" href="https://www.github.com/tompywell" className={classes.button}>
          GitHub
        </Button>
        <Button variant="contained" href="https://www.linkedin.com/in/tompywell" className={classes.button}>
          LinkedIn
        </Button>
        <Button variant="contained" href="https://www.instagram.com/_to.m" className={classes.button}>
          Instagram
        </Button>
        <IconButton
          className={classnames(classes.expand, {
            [classes.expandOpen]: this.state.expanded,
          })}
          onClick={this.handleExpandClick}
          aria-expanded={this.state.expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon/>
        </IconButton>
      </CardActions>
      <Collapse in={this.state.expanded} timeout="3" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Hi. Thanks for visiting.
          </Typography>
          <Typography paragraph>
            This site is written in <Link href={"https://reactjs.org"} className={classes.link}>React</Link>, using components from <Link href={"https://material-ui.com"} className={classes.link}>Material-UI</Link>.
          </Typography>
          <Typography paragraph>
            You can probably find the source on my GitHub with the link above.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    );
  }
}

PersonCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonCard);
