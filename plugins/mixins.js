import Vue from 'vue'

const mixins = {
  methods: {
    keyGen: function(length, prefix = '') {
      let key           = '';
      let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        key += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return prefix !== '' ? prefix + '_' + key : key;
    },
    cutString: function (string, length = 36) {
      if (string.length > length) {
        return string.substr(0, length) + '...';
      }

      return string;
    },
    isEmpty: function (obj) {
      return Object.keys(obj).length === 0 ? true : false;
    }
  }
}

Vue.mixin(mixins);
