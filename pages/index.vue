<template>
  <div class="container">
    <!-- スクロールしなくて済む範囲内にトランプ52枚を緑のDivの中にImage52個で描画する -->
    <div
      v-for="filename in filenamesArray"
      :key="filename.string"
      class="field"
    >
      <img :src="require(`@/assets/png/${filename}.png`)" class="trump" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'
import { TRUMP_MARKS, TRUMP_NUMBERS } from '~/store/constants'

@Component
export default class Trump extends Vue {
  @Prop({ type: Array }) filenamesArray: String[] = []

  // 52枚カードを作成する
  created() {
    for (let index = 0; index < TRUMP_MARKS.length; index++) {
      this.trumpNums(TRUMP_MARKS[index].mark)
    }
  }

  trumpNums(mark: string) {
    for (let num = 0; num < TRUMP_NUMBERS.length; num++) {
      const imageName = mark + `00${TRUMP_NUMBERS[num].number}`.slice(-2)

      this.filenamesArray.push(imageName)
    }
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
