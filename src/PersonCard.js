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

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: theme.spacing.unit,
    backgroundColor: '#26252c',
    color: '#666666'
  },
  media: {
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
  github: {
    margin: theme.spacing.unit,
    color: '#26252c',
    backgroundColor: '#c9354e'
  },
  instagram: {
    margin: theme.spacing.unit,
    color: '#26252c',
    backgroundColor: '#44b5d9'
  },
  linkedin: {
    margin: theme.spacing.unit,
    color: '#26252c',
    backgroundColor: '#fec870'
  },
  avatar: {
    width: 80,
    height: 80
  },
  link: {
    color: '#AAAAAA'
  },
  aboutMe: {
    paddingBottom: 0
  },
  aboutMeText: {
    color: '#666666',
  },
  aboutThisSite: {
    paddingTop: 0,
    paddingBottom: '16px !important'
  },
  aboutThisSiteText: {
    color: '#666666'
  },
  title: {
    color: '#AAAAAA'
  },
  subheader: {
    color: '#666666'
  }
});

class PersonCard extends React.Component {
  state = { expanded: false, age: 0};

  componentDidMount = () => {
    this.setAge()
    this.interval = setInterval(() => this.setAge(), 100);
  }

  handleExpandClick = () => {
    this.setState(state => ({expanded: !state.expanded}));
  };

  setAge = () => {
    let msInYear = 1000 * 60 * 60 * 24 * 365.25
    let now = new Date();
    let birthDate = new Date(1996, 2, 31, 22, 40, 0, 0)
    let age = ((now - birthDate) / msInYear).toFixed(8)
    this.setState(state => ({age: age}))
  }

  render(){
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
      <CardHeader
        classes={{
          title: classes.title,
          subheader: classes.subheader
        }}
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
      <CardContent className={classes.aboutMe}>
        <Typography className={classes.aboutMeText} variant="body1">
          I'm a {this.state.age} year old <b>Computer Science Graduate</b> from <b>Trinity College Dublin</b>.
          Currently I work as a private <b>Math Tutor</b>. I really enjoy teaching and <b>Riding Bikes</b>.
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button className={classes.github} variant="contained" href="https://www.github.com/tompywell">
          GitHub
        </Button>
        <Button className={classes.instagram} variant="contained" href="https://www.linkedin.com/in/tompywell">
          LinkedIn
        </Button>
        <Button className={classes.linkedin} variant="contained" href="https://www.instagram.com/_to.m">
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
      <Collapse in={this.state.expanded} unmountOnExit>
        <CardContent className={classes.aboutThisSite}>
          <Typography className={classes.aboutThisSiteText} variant="body1">
            Hi. Thanks for visiting my website. The site is written in <Link href={"https://reactjs.org"} className={classes.link}>React</Link>, using components from <Link href={"https://material-ui.com"} className={classes.link}>Material-UI</Link>.
            You can probably find the source on my GitHub with the link above. I'm hosting it for free on <Link href={"https://firebase.google.com/"} className={classes.link}>Firebase</Link>.
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
