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
  <a class="navbar-brand" href="{base}/">
    Stack プログラミング言語　チュートリアル
  </a>
</nav>

<slot />
