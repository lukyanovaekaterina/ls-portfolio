import Vue from "vue";
import $ from "jquery";

new Vue({
  el: "#hamburger",
  data: {
    active: false
  },
 methods: {
   changeCaption: function() {
     console.log("click")
      this.active = !this.active;
      $("#hero__nav").toggleClass("hero__nav--active");
    }
  }
});