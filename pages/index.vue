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
import { addZero } from '~/utils/formatUtils'

@Component
export default class Trump extends Vue {
  // トランプ52枚のリスト
  filenamesArray = TRUMP_MARKS.flatMap((trump) =>
    TRUMP_NUMBERS.map((value) => `${trump.mark}${addZero(value.number)}`)
  )
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
