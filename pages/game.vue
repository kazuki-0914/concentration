<template>
  <div class="container">
    <!-- フィールドのカード無くなったら遷移-->
    <nuxt-link to="/end">終了</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    // 画面表示時に初期化
    // カードを並べる

//ループ　フィールドのカードが無くなるまで
    // 各プレイヤーの処理
    // カードを2枚選択する
    // 表示変更
    // 条件分岐　カードの判定をする
    // true 
    //  カードをゲットする
    //  プレイヤーのカウンタを上げる
    // false
    //  表示を戻す 
    //  次のプレイヤー名をセットし、continue
    
    
    // フィールドのカード無くなったら勝敗を判定する
    //終了画面へ遷移
})
</script>

<style>

</style>
