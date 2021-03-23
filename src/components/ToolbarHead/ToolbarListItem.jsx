import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  link: {
    display: 'contents',
    color: 'black',
    textDecoration: 'none',
  },
}));

const ToolbarListItem = ({ data, child }) => {
  const classes = useStyles();

  const [openList, setOpenList] = useState(false);

  const handleClick = () => {
    setOpenList(!openList);
  };

  const renderLineExtand = (children) => {
    if (children) {
      return openList ? <ExpandLess /> : <ExpandMore />;
    }
  };

  return (
    <>
      <ListItem
        button
        key={data.title}
        className={child && classes.nested}
        onClick={handleClick}
      >
        <Link to={data.link || '#'} className={classes.link}>
          <ListItemIcon>
            <Icon>{data.icon}</Icon>
          </ListItemIcon>
          <ListItemText primary={data.title} />
        </Link>
        {renderLineExtand(data.children)}
      </ListItem>

      {data.children && (
        <Collapse in={openList} timeout='auto'>
          <List>
            {data.children.map((data, index) =>
              data !== 'divider' ? (
                <ToolbarListItem data={data} key={index} child />
              ) : (
                <Divider key={index} />
              )
            )}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default ToolbarListItem;
