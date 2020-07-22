export default function ({ store, redirect, route, req, app, $axios }) {
  if (process.server) {
    let tokenCookie = app.$cookies.get('token');
    let userCookie = app.$cookies.get('user');

    store.dispatch('setUserAgent', { userAgent: req.headers['user-agent'] });
    store.dispatch('setToken', { token: tokenCookie });
    store.dispatch('setUser', { user: userCookie });
  }

  let tokenStore = store.getters.token;
  let userStore = store.getters.user;

  if (typeof tokenStore === 'undefined' && /dashboard/i.test(route.name)) {
    return redirect({ name: 'login' });
  }

  if (typeof tokenStore !== 'undefined') {
    $axios.setToken(tokenStore, 'Bearer');

    app.$cookies.set('token', tokenStore, {
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });
    app.$cookies.set('user', userStore, {
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    if (/login/i.test(route.name)) {
      return redirect({ name: 'dashboard' });
    }
  }
}
