export default {
  resize({ commit }) {
    if (process.client) {
      let breakpoint;
      let windowSize = { x: window.innerWidth, y: window.innerHeight };

      switch (true) {
        case windowSize.x < 600: breakpoint = 'xs'; break;
        case windowSize.x > 600 && windowSize.x < 960: breakpoint = 'sm'; break;
        case windowSize.x > 960 && windowSize.x < 1264: breakpoint = 'md'; break;
        case windowSize.x > 1264 && windowSize.x < 1904: breakpoint = 'lg'; break;
        case windowSize.x > 1904: breakpoint = 'xl'; break;
        default: breakpoint = '';
      };

      commit('setWindowSize', { windowSize: windowSize });
      commit('setBreakpoint', { breakpoint: breakpoint });
    }
  },

  setUserAgent({ commit }, payload) {
    commit('setUserAgent', payload);
  },

  setToken({ commit }, payload) {
    commit('setToken', payload);
  },

  setUser({ commit }, payload) {
    commit('setUser', payload);
  },

  async login({ commit, state }, payload) {
    payload.device_name = state.userAgent;
    await this.$axios.$post('/auth/token', payload).then((response) => {
      commit('setToken', { token: response.date.token });
      commit('setUser', { user: response.date.user });
    });
  },

  logout({ commit }) {
    this.$cookies.remove('token');
    commit('setToken', { token: undefined });
    commit('setUser', {
      user: {
        name: 'guest',
        email: 'guest@mail.ru',
      },
    });
  },

  async usersIndex({ state, commit }) {
    if (Object.keys(state.usersIndex).length === 0) {
      await this.$axios.$get('/dashboard/users').then((response) => {
        commit('setUsersIndex', { usersIndex: response });
      });
    }
  }
}
