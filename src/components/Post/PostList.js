import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import DefaultPost from './DefaultPost';
import LinkPost from './LinkPost';
import PhotoPost from './PhotoPost';
import React from 'react';
import styles from './PostList.scss';
import TextPost from './TextPost';

function PostList({
  className,
  postIndex,
  posts,
}) {
  return (
    <div className={classNames(styles.postList, className)}>
        {posts.map((postId, i) => {
          const post = postIndex.get(postId);
          switch (post.get('type')) {
            case 'photo':
              return (
                <PhotoPost
                  caption={post.get('caption')}
                  id={postId}
                  key={i}
                  summary={post.get('summary')}
                  photos={post.get('photos')}
                />
              );
            case 'text':
              return (
                <TextPost
                  body={post.get('body')}
                  id={postId}
                  key={i}
                  summary={post.get('summary')}
                />
              );
            case 'link':
              return (
                <LinkPost
                  description={post.get('description')}
                  id={postId}
                  key={i}
                  title={post.get('title')}
                />
              );
            default:
              return (
                <DefaultPost
                  caption={post.get('caption')}
                  id={postId}
                  key={i}
                  summary={post.get('summary')}
                  url={post.get('postUrl')}
                />
              );
          }
        })}
    </div>
  );
}

PostList.propTypes = {
  className: React.PropTypes.string,
};

const selector = createStructuredSelector({
  postIndex: state => state.get('postIndex'),
});

export default connect(selector, {
})(PostList);
