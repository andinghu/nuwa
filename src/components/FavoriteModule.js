import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PostList from './Post/PostList';
import React from 'react';
import removePost from '../actions/index';
import styles from './FavoriteModule.scss';

function FavoriteModule({
  className,
  favorites,
}) {
  return (
    <div className={classNames(styles.favoriteModule, className)}>
      <h1 className={styles.title}>
        Favorites:
      </h1>
      <div className={styles.postList}>
        <PostList
          className={className}
          posts={favorites}
        />
      </div>
    </div>
  );
}

FavoriteModule.propTypes = {
  className: React.PropTypes.string,
};

const selector = createStructuredSelector({
  postIndex: state => state.get('postIndex'),
  favorites: state => state.get('favorites'),
});

export default connect(selector, {
  removePost,
})(FavoriteModule);
