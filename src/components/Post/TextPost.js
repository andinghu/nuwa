import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import React from 'react';
import { removePost, savePost } from '../../actions/index';
import renderHTML from 'react-render-html';
import styles from './DefaultPost.scss';

function TextPost({
  body,
  className,
  favorites,
  id,
  summary,
  ...props,
}) {
  return (
    <div className={classNames(styles.post, className)}>
      <div className={styles.content}>
        <h3>
          {summary}
        </h3>
        <div className={styles.body}>
          {renderHTML(body)}
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
})(TextPost);
