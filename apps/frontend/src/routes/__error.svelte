<script lang="ts" context="module">
  import type { ErrorLoad } from '@sveltejs/kit'

  export const load: ErrorLoad = ({ error, status }) => {
    return {
      props: {
        title: `${status} ${error?.message}`,
      },
    }
  }
</script>

<script lang="ts">
  export let title: string
</script>

<main>
  <h1>{title}</h1>
</main>

<style>
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
</style>
