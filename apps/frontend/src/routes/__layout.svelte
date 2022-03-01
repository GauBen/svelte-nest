<script lang="ts">
  import { page } from '$app/stores'
</script>

<svelte:head>
  <title>{$page.stuff.title}</title>
  <meta name="description" content={$page.stuff.title} />
</svelte:head>

<slot />
