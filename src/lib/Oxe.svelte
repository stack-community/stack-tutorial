<script>
  import { onMount } from "svelte";
  import init, { run_stack } from "$lib/pkg/web_stack.js";

  /**
   * @type {((src: string) => string) | null}
   */
  let run_stk = null;

  onMount(() => {
    // WebAssemblyを初期化 --- (*1)
    init().then(() => {
      run_stk = run_stack;
    });
  });

  /**
   * @type {string}
   */
  export let code;
  /*let code =
    "( (name) var\n\
(Hello, name !) (name) name replace print\n\
) (hello) var\n\
\n\
(world) hello eval";*/

  /**
   * @type {string}
   */
  let result;

  // 実行ボタンを押した時にプログラムを実行 --- (*2)
  function run() {
    if (!run_stk) {
      // 読み込み完了判定 --- (*3)
      alert("WebAssemblyの読み込みが完了していません。");
      return;
    } else {
      // 実行 --- (*4)
      // プログラムを実行
      console.log(code);
      const r = run_stk(code);
      // 結果を出力
      //console.log(r);
      result = r;
    }
  }
</script>

<div id="main">
  <textarea id="code" rows="10" bind:value={code}></textarea>
  <button class="btn form-control btn-primary" on:click={() => run()}>
    実行
  </button>
  <hr />
  <textarea id="result" rows="15" bind:value={result}></textarea>
</div>

<style>
  #main {
    width: 50%;
    padding: 20px;
    margin-top: 50px;
  }

  .btn {
    margin: 5px;
    background-color: lightslategray;
    border-color: lightslategray;
  }

  #code,
  #result {
    background-color: lightgray;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
  }
</style>
