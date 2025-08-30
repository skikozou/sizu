import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // User-Agentヘッダーを取得
  const userAgent = request.headers.get('user-agent') || ''
  
  // curlからのリクエストかチェック
  if (userAgent.toLowerCase().includes('curl')) {
    const curlResponse = `Hello from sizu!

This is skikozou's personal website.
Visit https://main.skikozou.me in your browser for the full experience.

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

Current path: ${request.nextUrl.pathname}
Requested at: ${new Date().toISOString()}
Your IP: ${request.ip || 'unknown'}
`

    return new NextResponse(curlResponse, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    })
  }

  // 通常のリクエストは続行
  return NextResponse.next()
}

// ミドルウェアを全てのパスで実行
export const config = {
  matcher: '/(.*)',
}
