<script lang="ts">
  import { createGetAxiosAxios } from "../query";

  import svelteLogo from "../assets/svelte.svg";
  import viteLogo from "/vite.svg";

  const query = createGetAxiosAxios();
</script>

<main>
  {#if $query.isLoading}
    <p>Loading...</p>
  {:else if $query.isError}
    <p>Error: {$query.error.message}</p>
  {:else if $query.isSuccess}
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} class="logo" alt="Vite Logo" />
      </a>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
    </div>

    <h1>Repo: {$query.data.name}</h1>

    <p className="read-the-docs">
      {$query.data.description}
    </p>

    <strong>👀 {$query.data.subscribers_count}</strong>
    <strong>✨ {$query.data.stargazers_count}</strong>
    <strong>🍴 {$query.data.forks_count}</strong>
  {/if}
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
