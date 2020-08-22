export default {
  setWindowSize(state, payload) {
    state.windowSize = payload.windowSize;
  },

  setBreakpoint(state, payload) {
    state.breakpoint = payload.breakpoint;
  },

  setUserAgent(state, payload) {
    state.userAgent = payload.userAgent;
  },

  setToken(state, payload) {
    state.token = payload.token;
  },

  setUser(state, payload) {
    state.user = payload.user;
  },

  setUsersIndex(state, payload) {
    state.usersIndex.push(payload.usersIndex);
  },
}
