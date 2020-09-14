<template>
  <div class="container">
    <!-- スクロールしなくて済む範囲内にトランプ52枚を緑のDivの中にImage52個で描画する -->
    <div v-for="filename in filenamesArray" :key="filename" class="field">
      <img :src="require(`@/assets/png/${filename}.png`)" class="trump" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { TRUMP_MARKS, TRUMP_NUMBERS } from '~/store/constants'

@Component
export default class Trump extends Vue {
  filenamesArray: String[] = []

  // 52枚カードを作成する
  created() {
    TRUMP_MARKS.forEach((trump) => this.trumpNums(trump.mark))
  }

  trumpNums(mark: string) {
    const filenamesArray = TRUMP_NUMBERS.map(function (value) {
      const filename = mark + `00${value.number}`.slice(-2)
      return filename
    })
    this.filenamesArray = this.filenamesArray.concat(filenamesArray)
  }
}
</script>

<style scoped>
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
