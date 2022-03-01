/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/typescript
// for information about these interfaces
global {
  declare namespace App {
    interface Locals {}

    interface Platform {}

    interface Session {}

    interface Stuff {
      title: string
    }
  }
}
