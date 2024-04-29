<script>
  import { base } from "$app/paths";
</script>

<svelte:head>
  <!-- Bootstrap CSS -->
  <link
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  />
</svelte:head>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <a class="navbar-brand" href="{base}/"
        >Stack プログラミング言語　チュートリアル</a
      >
    </li>
  </ul>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="navbar-brand" href="https://stack-community.github.io/stack-ja">
        公式サイト
      </a>
    </li>
    <li class="nav-item">
      <a
        class="navbar-brand"
        href="https://github.com/stack-community/stack-tutorial"
      >
        <img
          alt="このサイトのリポジトリ"
          src="/github-mark-white.png"
          style="height: 1.5em;"
        />
      </a>
    </li>
  </ul>
</nav>

<slot />
