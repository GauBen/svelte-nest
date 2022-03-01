<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit"

  export const load: Load = ({ props }) => ({
    props,
    stuff: { title: 'Home' },
  })
</script>

<script lang="ts">
  export let env: string
  export let now: string
</script>

<h1>Hello World!</h1>
<ul>
  <li><strong>Current environment:</strong> {env}</li>
  <li><strong>Page rendered at:</strong> {now}</li>
</ul>
