<template>
<div>
  
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
  var data = { a: 1}

var vm = new Vue({
  data: data
})
vm.a == data.a

vm.a = 5
console.log(vm.a)
console.log(data.a)

</script>>
