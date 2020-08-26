<template>
  <h1 class="red">Hello {{ name }}!</h1>
</template>
<script>
  export default {
    asyncData (context) {
      // コンポーネントをロードする前に毎回呼び出されます
      // 名前の通り非同期にすることができます
      // また、返されたオブジェクトはデータオブジェクトとマージされます
      return { name: 'World' }
    },
    fetch () {
      // `fetch` メソッドはページの描画前にストアを満たすために使用されます
    },
    head () {
      // このページ向けにメタタグを設定します
    },
    // そしてもっと多くの機能を見つける
    // ...
  }
</script>

<style>
  .red {
    color: red;
  }
</style>