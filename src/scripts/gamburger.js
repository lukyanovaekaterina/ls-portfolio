import Vue from "vue";
import $ from "jquery";

new Vue({
  el: "#hamburger",
  data: {
    active: false
  },
 methods: {
   changeCaption: function() {
      this.active = !this.active;
      $("#hero__nav").toggleClass("hero__nav--active");
    }
  }
});

new Vue({
  el: "#MenuNav",
  data: {
    active: true
  },
  methods: {
    changeCaption2: function() {
      this.active = !this.active;
      $("#hero__nav").toggleClass("hero__nav--active");
    }
  }
});