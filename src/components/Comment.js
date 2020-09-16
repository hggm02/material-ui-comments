import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Card,
  IconButton,
} from "@material-ui/core";
import Faker from "faker";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    maxWidth: "60ch",
  },
  fonts: {
    fontWeight: "bold",
  },
  inline: {
    display: "inline",
  },
}));

const Comment = ({ comments }) => {
  const classes = useStyles();
  return (
    <Card style={{ maxHeight: 200, overflow: "auto", maxWidth: "70ch" }}>
      <List className={classes.root}>
        {comments.map((comment) => {
          console.log("Comment", comment);
          return (
            <React.Fragment key={comment.id}>
              <ListItem key={comment.id} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="avatar" src={Faker.image.avatar()} />
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <Typography className={classes.fonts}>
                      {comment.name}
                    </Typography>
                  }
                  secondary={comment.body}
                />
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <Divider Light />
            </React.Fragment>
          );
        })}
      </List>
    </Card>
  );
};

export default Comment;
