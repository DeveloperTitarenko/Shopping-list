import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: theme.spacing(2),
    },
    '& .MuiBadge-root': {
      marginRight: theme.spacing(4),
    },
  },
}));

export default function BadgeVisibility() {
  const classes = useStyles();
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <div className="BadgeVisibility">
      <FormControlLabel control={
        <button onClick={() => handleBadgeVisibility()}>
          <Badge color="primary" variant="dot" invisible={invisible}>
            <NotificationsNoneIcon/>
          </Badge>
        </button>
      }>
      </FormControlLabel>
    </div>
  );
}