import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  return isLoading ? (
    <div className={classes.loadingIcon}>
      <CircularProgress size="4rem" />
    </div>
  ) : (
    <Grid className={classes.container} container alignItems="stretch" spacing={2}>
      {posts?.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} lg={4}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
