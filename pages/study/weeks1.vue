<template>
<div id="app">
  <span>Message: {{ msg }}</span>
  <p>{{1 + 5}}</p>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
document.addEventListener('DOMContentLoaded', function() {
  var obj = {
    foo: 'bar'
  }

  Object.freeze(obj)

  new Vue({
    el: '#app',
    data: obj
  })
});



</script>>
