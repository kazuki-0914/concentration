<template>
  <div class="container">

    <!-- ・スクロールしなくて済む範囲内にトランプ52枚を緑のDivの中にImage52個で描画する -->
    <div v-for="icon in icons" :key="icon" class="field">
      <img :src="icon" class="trump"/>
      <!-- <img v-bind:src="require('../assets/' + img)" /> -->
    </div>
<!-- -->
    <div v-for="filename in filenameArray" :key="filename">
      <p>{{ filename }}</p>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import {TRUMP_MARKS} from '~/store/constants'
import {TRUMP_NUMBERS} from '~/store/constants'

@Component
export default class Trump extends Vue {

  //カードを表示する 
  mounted() {
      msg: 'hello'
      // let filenameArray = []
    for (let index = 0; index < TRUMP_MARKS.length; index++) {
      let filenameNumArray = []
      for (let num = 0; num < TRUMP_NUMBERS.length; num++) {
        let imageName = TRUMP_MARKS[index].mark + ( '00' + TRUMP_NUMBERS[num].number ).slice( -2 )
        console.log(imageName)
        
        //filenameArray.push(imageName)        
      }
    }
    console.log("test")
    
  }

  icons = [
    require('@/assets/png/c01.png'),
    require('@/assets/png/c02.png'),
    require('@/assets/png/c03.png'),
    require('@/assets/png/c04.png'),
    require('@/assets/png/c05.png'),
    require('@/assets/png/c06.png'),
    require('@/assets/png/c07.png'),
    require('@/assets/png/c08.png'),
    require('@/assets/png/c09.png'),
    require('@/assets/png/c10.png'),
    require('@/assets/png/c11.png'),
    require('@/assets/png/c12.png'),
    require('@/assets/png/c13.png'),
    require('@/assets/png/d01.png'),
    require('@/assets/png/d02.png'),
    require('@/assets/png/d03.png'),
    require('@/assets/png/d04.png'),
    require('@/assets/png/d05.png'),
    require('@/assets/png/d06.png'),
    require('@/assets/png/d07.png'),
    require('@/assets/png/d08.png'),
    require('@/assets/png/d09.png'),
    require('@/assets/png/d10.png'),
    require('@/assets/png/d11.png'),
    require('@/assets/png/d12.png'),
    require('@/assets/png/d13.png'),
    require('@/assets/png/h01.png'),
    require('@/assets/png/h02.png'),
    require('@/assets/png/h03.png'),
    require('@/assets/png/h04.png'),
    require('@/assets/png/h05.png'),
    require('@/assets/png/h06.png'),
    require('@/assets/png/h07.png'),
    require('@/assets/png/h08.png'),
    require('@/assets/png/h09.png'),
    require('@/assets/png/h10.png'),
    require('@/assets/png/h11.png'),
    require('@/assets/png/h12.png'),
    require('@/assets/png/h13.png'),
    require('@/assets/png/s01.png'),
    require('@/assets/png/s02.png'),
    require('@/assets/png/s03.png'),
    require('@/assets/png/s04.png'),
    require('@/assets/png/s05.png'),
    require('@/assets/png/s06.png'),
    require('@/assets/png/s07.png'),
    require('@/assets/png/s08.png'),
    require('@/assets/png/s09.png'),
    require('@/assets/png/s10.png'),
    require('@/assets/png/s11.png'),
    require('@/assets/png/s12.png'),
    require('@/assets/png/s13.png')
  ]
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
