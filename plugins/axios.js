export default function ({ $axios, redirect, store }) {

  // Set token
  let tokenStore = store.getters.token;
  $axios.setToken(tokenStore, 'Bearer');

  $axios.onError(error => {
    if(error.response.status === 401) {
      // redirect('/sorry')
      console.log('error axios');
    }
  });
}
