import ActionTypes from '../constants/ActionTypes';
import Immutable from 'immutable';
import TumblrAPIUtils from '../utils/TumblrAPIUtils';

export function blogNameChange(e) {
  return {
    type: ActionTypes.BLOG_NAME_CHANGE,
    blogName: e.target.value,
  };
}

export function removePost(id) {
  return {
    type: ActionTypes.REMOVE_POST,
    id,
  };
}

export function savePost(id) {
  return {
    type: ActionTypes.SAVE_POST,
    id,
  };
}

export function searchPosts(e) {
  e.preventDefault();

  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SEARCH_POSTS,
    });

    const state = getState();
    const blogName = state.getIn(['search', 'blogName']);
    const tag = state.getIn(['search', 'tag']);
    if (!blogName || blogName === '') {
      return dispatch({
        type: ActionTypes.MISSING_DATA,
      });
    }

    return TumblrAPIUtils
      .getPosts(blogName, tag)
      .then(response => {
        const postIndex = Immutable
          .fromJS(response)
          .getIn(['response', 'posts'])
          .reduce((postMap, post) => {
            return postMap.set(post.get('id'), post);
          }, Immutable.Map());
        const posts = Immutable
          .fromJS(response)
          .getIn(['response', 'posts'])
          .map(post => post.get('id'));

        dispatch({
          type: ActionTypes.SEARCH_POSTS_SUCCESSFULLY,
          postIndex,
          posts,
        });
      })
      .catch(reason => {
        return dispatch({
          type: ActionTypes.MISSING_DATA,
          reason,
        });
      });
  };
}

export function tagChange(e) {
  return {
    type: ActionTypes.TAG_CHANGE,
    tag: e.target.value,
  };
}
