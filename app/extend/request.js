'use strict';

// request的扩展

module.exports = {
  get token() {
    console.log('token', this.get('host'));
    // console.log('token', this.get('token'));
    return this.get('token');
  },
};

