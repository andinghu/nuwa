import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import React from 'react';
import { removePost, savePost } from '../../actions/index';
import renderHTML from 'react-render-html';
import styles from './DefaultPost.scss';

function PhotoPost({
  className,
  favorites,
  id,
  photos,
  summary,
  ...props,
}) {
  return (
    <div className={classNames(styles.post, className)}>
      <div className={styles.content}>
        <h3>
          {summary}
        </h3>
        <div className={styles.caption}>
          {renderHTML(props.caption)}
        </div>
        <div className={styles.photoList}>
          {photos.map((photo, imgIndex) => {
            const altSizePhotos = photo.get('alt_sizes');
            const smallestPhoto = altSizePhotos.get(altSizePhotos.size - 1);
            const imgHeight = smallestPhoto.get('height');
            const imgWidth = smallestPhoto.get('width');
            return (
              <div className={classNames(styles.image, imgIndex, id, className)}>
                <img
                  style={{ width: { imgWidth }, height: { imgHeight } }}
                  src={smallestPhoto.get('url')}
                />
              </div>
            );
          })}
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
})(PhotoPost);
