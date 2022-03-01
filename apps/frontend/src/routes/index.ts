import { forward } from '$lib/forward'
import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler = async ({ request }) => ({
  body: await forward(request, '/api/stuff').then((r) => r.json()),
})
