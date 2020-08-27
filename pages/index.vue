<template>
  <div class="container">
    
    <!-- ・スクロールしなくて済む範囲内にトランプ52枚を緑のDivの中にImage52個で描画する -->
    <div v-for="icon in icons" :key="icon" class="field">
      <img :src="icon" class="trump"/>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

// const images = require.context('../assets/png/', false, /\.png$/);

@Component
export default class Trump extends Vue {
  
  message = 'カードを表示しました'
  imageurl = require('@/assets/png/c01.png')
  icons = [
    require('@/assets/png/h01.png'),
    require('@/assets/png/h02.png'),
    require('@/assets/png/h03.png')
  ]
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
.field {
  display: inline-block;
}
.trump {

  height: 150px;
  width: 100px;
}
</style>
