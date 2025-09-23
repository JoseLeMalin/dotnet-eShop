import { createServerFileRoute } from '@tanstack/react-start/server'
export const ServerRoute = createServerFileRoute('/customScript.js').methods({
  GET: async ({ request }) => {
    console.log('GET /customScript.js @', request.url);
    
    return new Response('console.log("Hello from customScript.js!")', {
      headers: {
        'Content-Type': 'application/javascript',
      },
    })
  },
})
