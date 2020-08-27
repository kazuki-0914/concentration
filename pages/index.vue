<template>
  <div class="container">
    <!-- ・スクロールしなくて済む範囲内にトランプ52枚を緑のDivの中にImage52個で描画する -->
    <button v-on:click="disp">Click</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Trump extends Vue {
  message = 'カードを表示しました'

  //カードを表示する 
  disp() {

    console.log(this.message)
  }

}
</script>

<style>
.container {
  min-height: 100vh;
  background-color: green;
}
</style>
