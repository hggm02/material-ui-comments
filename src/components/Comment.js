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
  TextField,
} from "@material-ui/core";
import Faker from "faker";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    maxWidth: "60ch",
  },
  card: {
    maxHeight: 200,
    overflow: "auto",
    maxWidth: "65ch",
  },
  fonts: {
    fontWeight: "bold",
  },
  inline: {
    display: "inline",
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: 450,
    },
  },
}));

const Comment = ({ comments }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Card className={classes.card}>
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
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          variant="outlined"
          width="100%"
          InputProps={{
            endAdornment: (
              <IconButton edge="end" aria-label="submit">
                <ArrowUpwardIcon />
              </IconButton>
            ),
          }}
        />
      </form>
    </Card>
  );
};

export default Comment;
