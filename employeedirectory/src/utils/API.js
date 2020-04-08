const axios = require("axios");

export default {
  getUser: function () {
   return axios.get("https://randomuser.me/api/?nat=us&results=20")
  },
};


