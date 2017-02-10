import classNames from 'classnames';
import FavoriteModule from './FavoriteModule';
import PostModule from './Post/PostModule';
import React from 'react';
import Search from './Search';
import styles from './App.scss';

class App extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
  }

  render() {
    const { className } = this.props;

    return (
      <div className={classNames(styles.app, className)}>
        <div className={styles.content}>
          <div className={styles.leftPanel}>
            <Search className={styles.search} />
            <PostModule className={styles.posts} />
          </div>
          <div className={styles.rightPanel}>
            <FavoriteModule className={styles.favorites} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
