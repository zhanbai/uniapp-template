import Vue from "vue";
import App from "./App";
import http from "./api/http";
import api from "./api/api";
import common from "./common/common";

uni.$http = http;
uni.$api = api;
uni.$common = common;

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  ...App,
});
app.$mount();
