import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import React from 'react';
import { removePost, savePost } from '../../actions/index';
import styles from './DefaultPost.scss';

function DefaultPost({
  className,
  favorites,
  id,
  ...props,
}) {
  return (
    <div className={classNames(styles.post, className)}>
      <div className={styles.content}>
        <h3 className={styles.caption}>
          {props.caption}
        </h3>
        <h4 className={styles.summary}>
          {props.summary}
        </h4>
        <div className={styles.url}>
          {props.url}
        </div>
      </div>
      <div className={styles.add}>
        <button
          onClick={() => {
            return favorites.has(id) ? props.removePost(id) : props.savePost(id);
          }}
        >
          {favorites.has(id) ? 'Remove' : 'Add'}
        </button>
      </div>
    </div>
  );
}

const selector = createStructuredSelector({
  favorites: state => state.get('favorites'),
});

export default connect(selector, {
  removePost,
  savePost,
})(DefaultPost);
