export async function onRequest(context) {
  const { request, env, next } = context
  const userAgent = request.headers.get('user-agent') || ''
  
  // curlリクエストの検出
  if (userAgent.toLowerCase().includes('curl')) {
    const url = new URL(request.url)
    const curlResponse = `Hello from sizu!

This is skikozou's personal website.
Visit ${url.origin} in your browser for the full experience.

About:
- Name: skikozou (sizu)
- Occupation: Student
- Languages: Golang / C#
- Hobbies: BattleField 2042 / Blender

Contact:
- GitHub: https://github.com/skikozou
- Twitter: @skikozou1596
- YouTube: https://youtube.com/@skikozou
- Discord: @skikozou1596

Current path: ${url.pathname}
Requested at: ${new Date().toISOString()}
Server: Cloudflare Pages
`

    return new Response(curlResponse, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    })
  }

  // 通常のリクエストは静的ファイルを返す
  return next()
}
