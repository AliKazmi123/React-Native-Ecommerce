import {createSelector} from 'reselect';

export const module = state => state.module;
export const moduleSelector = createSelector(
  module,
  data => data,
);

export const isLoginSelector = createSelector(
  module,
  data => data.isLogin,
);

/**
 * Get user
 */
export const userSelector = createSelector(
  module,
  data => data.user,
);

/**
 * Get posts
 */
 export const postsSelector = createSelector(
  module,
  data => data.posts,
);