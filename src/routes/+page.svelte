<script>
  import Oxe from "$lib/Oxe.svelte";
</script>

<svelte:head>
  <title>Stack プログラミング言語 チュートリアル</title>
</svelte:head>

<div class="main">
  <div class="explain">
    <h2>Stackプログラミング言語チュートリアル</h2>
    <p>強力なスタック指向プログラミング言語、Stackのチュートリアルです。</p>
    <a href="/">次のページへ</a>
  </div>
  <Oxe code={""} />
</div>

<style>
  .main {
    display: flex;
    height: 100%;
  }

  .explain {
    width: 50%;
    height: 100%;
    padding: 20px;
    margin-top: 50px;
  }
</style>
