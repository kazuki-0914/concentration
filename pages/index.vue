<template>
  <div class="container">
    <!-- ・スクロールしなくて済む範囲内にトランプ52枚を緑のDivの中にImage52個で描画する -->
    <div v-for="filename in filenameArray" :key="filename" class="field">
      <img v-bind:src="require('@/assets/png/' + filename + '.png')" class="trump" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { TRUMP_MARKS } from '~/store/constants'
import { TRUMP_NUMBERS } from '~/store/constants'

@Component
export default class Trump extends Vue {
  data() {
    return {
      filenameArray: []
    }
  }
  //カードを表示する
  created() {
    let filenamesArray = []
    for (let index = 0; index < TRUMP_MARKS.length; index++) {
      let filenameNumArray = []
      for (let num = 0; num < TRUMP_NUMBERS.length; num++) {
        let imageName =
          TRUMP_MARKS[index].mark + ('00' + TRUMP_NUMBERS[num].number).slice(-2)
        console.log(imageName)

        filenamesArray.push(imageName)
      }
    }
    console.log('test')
    this.$data.filenameArray = filenamesArray
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
