export default {
  breakpoint: function (state) {
    return state.breakpoint;
  },
  userAgent: function (state) {
    return state.userAgent;
  },
  token: function (state) {
    return state.token;
  },
  user: function (state) {
    return state.user;
  },

  usersIndex: state => payload => {
    let collect = state.usersIndex.find(collect => collect.meta['current_page'] === payload.page);
    return typeof collect === 'object' ? collect : {};
  },
}
