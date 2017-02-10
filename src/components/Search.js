import { blogNameChange, searchPosts, tagChange } from '../actions/index';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import React from 'react';
import styles from './Search.scss';

function Search({
  blogName,
  className,
  error,
  tag,
  ...props,
}) {
  return (
    <div className={styles.searchModule}>
      <form
        className={classNames(styles.search, className)}
        onSubmit={(e) => props.searchPosts(e)}
      >
        <div className={styles.left}>
          <label className={styles.label}>Blog Name:</label>
          <input
            onChange={props.blogNameChange}
            value={blogName}
          />
        </div>
        <div className={styles.right}>
          <label className={styles.label}>Tag:</label>
          <input
            onChange={props.tagChange}
            value={tag}
          />
          <div className={styles.searchButton}>
            <input className={styles.searchButton} type="submit" value="Search" />
          </div>
        </div>
      </form>
      {error && <div className={styles.error}>
        Sorry, no matches found.
      </div>}
    </div>
  );
}

Search.propTypes = {
  blogNameChange: React.PropTypes.func,
  className: React.PropTypes.string,
  searchPosts: React.PropTypes.func,
  tagChange: React.PropTypes.func,
};

const selector = createStructuredSelector({
  blogName: state => state.getIn(['search', 'blogName']),
  error: state => state.get('error'),
  tag: state => state.getIn(['search', 'tag']),
});

export default connect(selector, {
  blogNameChange,
  searchPosts,
  tagChange,
})(Search);
