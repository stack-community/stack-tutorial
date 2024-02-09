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

  /**
   * @type {string}
   */
  let output;
  let log;

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
      output = r.output();
      log = r.log()
    }
  }
</script>

<div id="main">
  <textarea id="code" rows="10" bind:value={code}></textarea>
  <button class="btn form-control btn-primary" on:click={() => run()}>
    実行
  </button>
  <div class="split">
    <textarea id="output" rows="15" bind:value={output}></textarea>
    <textarea id="log" rows="15" bind:value={log}></textarea>
  </div>
</div>

<style>
  #main {
    width: 50%;
    padding: 20px;
    margin-top: 50px;
  }

  .btn {
    margin-bottom: 5px;
    background-color: lightslategray;
    border-color: lightslategray;
  }

  .split {
      display: flex;
      height: 200px; /* 任意の高さに調整 */
  }

  .split textarea {
    resize: horizontal;
  }

  #output {
      flex-grow: 15; /* outputテキストエリアの伸縮性を1に設定 */
  }
  #log {
      flex-grow: 15; /* logテキストエリアの伸縮性を2に設定 */
  }

  #code {
    background-color: lightgray;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
  }

   #code, #output, #log {
        background-color:lightgray;
        width: 100%;
        margin-bottom: 10px;
        padding: 10px;
    }
</style>
