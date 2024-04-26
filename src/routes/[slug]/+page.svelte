<script>
  import Markdown from "svelte-exmarkdown";
  import { base } from "$app/paths";
  import Oxe from "$lib/Oxe.svelte";
  export let data;
</script>

<svelte:head>
  <title>{data.article.title} | Stack プログラミング言語 チュートリアル</title>
</svelte:head>

<div class="main">
  <div class="explain">
    <h2>{data.article.title}</h2>
    <Markdown md={data.article.content} />
    {#if data.article.next != null}
      <a href="{base}/{data.article.next}">次のページへ</a>
    {:else}
      <a href="{base}/">TOPページへ</a>
    {/if}
  </div>
  <Oxe code={data.article.code} />
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
