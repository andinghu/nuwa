import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PostList from './PostList';
import React from 'react';
import styles from './PostModule.scss';

function PostModule({
  className,
  posts,
}) {
  return (
    <div className={classNames(styles.postModule, className)}>
      <h1 className={styles.title}>
        Posts:
      </h1>
      <div className={styles.postList}>
        <PostList
          className={className}
          posts={posts}
        />
      </div>
    </div>
  );
}

PostModule.propTypes = {
  className: React.PropTypes.string,
};

const selector = createStructuredSelector({
  posts: state => state.get('posts'),
});

export default connect(selector, {
})(PostModule);
