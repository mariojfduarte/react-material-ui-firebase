import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

import EditIcon from '@material-ui/icons/Edit';

const styles = (theme) => ({
  profile: {
    marginTop: `${theme.spacing.unit * 2}px`,
    textAlign: 'center'
  },

  profileExtraTopMargin: {
    marginTop: `${theme.spacing.unit * 3}px`,
    textAlign: 'center'
  },

  changeAvatarContainer: {
    position: 'relative',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  avatar: {
    width: `${theme.spacing.unit * 12}px`,
    height: `${theme.spacing.unit * 12}px`,
    marginRight: 'auto',
    marginLeft: 'auto'
  },

  changeAvatar: {
    position: 'absolute',
    top: '-7.5%',
    left: '60%',
  },

  info: {
    marginTop: `${theme.spacing.unit * 0.5}px`
  },

  emailAddress: {
    marginTop: `-${theme.spacing.unit * 0.5}px`
  },
});

class Profile extends Component {
  render() {
    // Styling
    const { classes } = this.props;

    // Properties
    const { user, isPerformingAuthAction, extraTopMargin } = this.props;

    // Events
    const { onChangeAvatarClick } = this.props;

    if (!user.photoURL || !user.displayName || !user.email) {
      return null;
    }

    return (
      <div className={extraTopMargin ? classes.profileExtraTopMargin : classes.profile}>
        <div className={classes.changeAvatarContainer}>
          <Avatar className={classes.avatar} alt="Avatar" src={user.photoURL} />

          {onChangeAvatarClick &&
            <Tooltip title="Change avatar">
              <Fab className={classes.changeAvatar} color="primary" disabled={isPerformingAuthAction} size="small" onClick={onChangeAvatarClick}>
                <EditIcon />
              </Fab>
            </Tooltip>
          }
        </div>

        <div className={classes.info}>
          <Typography variant="h6">{user.displayName}</Typography>
          <Typography className={classes.emailAddress} color="textSecondary" variant="body1">{user.email}</Typography>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,

  user: PropTypes.object.isRequired,
  isPerformingAuthAction: PropTypes.bool,
  extraTopMargin: PropTypes.bool,

  onChangeAvatarClick: PropTypes.func
};

export default withStyles(styles)(Profile);