<template>
    <div id="app">
        <ul v-for="i of 10" :key="i">
            <li>{{ i }}</li>
        </ul>
    </div>
</template>

<script lang="ts" defer>
import Vue from 'vue'
export default Vue.extend({

})
document.addEventListener("DOMContentLoaded", function(event) {
    var app = new Vue({
        el: "#app"
    })
    console.log(app.$data);
});

</script>