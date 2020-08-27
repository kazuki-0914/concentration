<template>
  <div class="container">
    <p>プレイヤーの名前を入力してください。</p>
    <input type="text" name="name" id="name" required value="test">
    <button>ゲーム開始</button>

    <!-- ゲーム開始ボタン押下して、条件で遷移-->
    <nuxt-link to="/game">geme</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    // ゲーム開始ボタンが押されるのを待つ
    // ユーザーを用意
    // 2人揃ったら、画面遷移
})
</script>

<style>

</style>
