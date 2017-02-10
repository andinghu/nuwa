import ActionTypes from '../constants/ActionTypes';
import Immutable from 'immutable';

export default function reducer(
  state = Immutable.Map({
    error: false,
    favorites: Immutable.Set(),
    postIndex: Immutable.Map(),
    posts: Immutable.Set(),
    search: Immutable.Map({
      blogName: '',
      tag: '',
      isPending: false,
    }),
  }),
  action
) {
  switch (action.type) {
    case ActionTypes.BLOG_NAME_CHANGE: {
      return state.setIn(['search', 'blogName'], action.blogName);
    }

    case ActionTypes.MISSING_DATA: {
      return state
        .setIn(['search', 'isPending'], false)
        .set('error', true);
    }

    case ActionTypes.REMOVE_POST: {
      return state
        .set('favorites', state.get('favorites').filter(postId => postId !== action.id));
    }

    case ActionTypes.SAVE_POST: {
      return state
        .set('favorites', state.get('favorites').add(action.id));
    }

    case ActionTypes.SEARCH_POSTS: {
      return state
        .set('error', false)
        .setIn(['search', 'isPending'], true);
    }

    case ActionTypes.SEARCH_POSTS_SUCCESSFULLY: {
      return state
        .set('postIndex', state.get('postIndex').merge(action.postIndex))
        .set('posts', action.posts)
        .setIn(['search', 'isPending'], false);
    }

    case ActionTypes.TAG_CHANGE: {
      return state.setIn(['search', 'tag'], action.tag);
    }

    default: {
      return state;
    }
  }
}
