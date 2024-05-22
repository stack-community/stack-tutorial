<script>
  import Markdown from "svelte-exmarkdown";
  import { base } from "$app/paths";
  import Oxe from "$lib/Oxe.svelte";
  export let data;
</script>

<svelte:head>
  <title>{data.article.title} | Stack プログラミング言語 チュートリアル</title>
  <style>
    pre {
      background-color: #eeeeee;
      padding-left: 1em;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
    }
  </style>
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
    padding-top: 20px;
    padding-bottom: 30px;
    padding-left: 35px;
    overflow: auto;
    margin-top: 50px;
  }
</style>
