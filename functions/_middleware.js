export async function onRequest(context) {
  const { request, env, next } = context
  const userAgent = request.headers.get('user-agent') || ''
  
  // curlリクエストの検出
  if (userAgent.toLowerCase().includes('curl')) {
    const url = new URL(request.url)
    const curlResponse = `
Format: UTF-8
Language: ja-JP

[1;37m==============================================[0m
[1;36m                 ~ About Me ~[0m
[1;37m==============================================[0m

[1;32mskikozou[0m ([1;35msizu[0m)

  [1;34m職業    [0m: 学生
  [1;34m使用言語[0m: [36mGolang[0m / [33mC#[0m
  [1;34m得意分野[0m: CLI Appの作成
  [1;34m趣味    [0m: [35mBattleField 2042[0m / Blender
  [1;34m最近の活動[0m: Game, Coding, Modeling

[2mだいたい気分で動いてる :)[0m

[1;37m==============================================[0m
[1;36m                 ~ Contact ~[0m
[1;37m==============================================[0m

  [1;37m[GitHub ][0m   [36mgithub.com/skikozou[0m
  [1;37m[Twitter][0m   [36mtwitter.com/sizu_any[0m
  [1;37m[Discord][0m   [36m@skikozou1596[0m
  [1;37m[YouTube][0m   [36myoutube.com/@skikozou[0m
  [1;37m[ Email ][0m   [36mdev@skikozou.me[0m

[1;37m==============================================[0m
[1;36m              ~ Link Exchange ~[0m
[1;37m==============================================[0m

   [1;37m- t3tra.dev                [0m [36mt3tra.dev[0m
   [1;37m- 371tti.net               [0m [36m371tti.net[0m
   [1;37m- _akku_                   [0m [36makku1139.github.io[0m
   [1;37m- tako's / takos.jp        [0m [36mtakoserver.com[0m
   [1;37m- nagisa kazetomari's page.[0m [36mkzng.f5.si[0m
   [1;37m- ActiveTK.                [0m [36mprofile.activetk.jp[0m
   [1;37m- skikozou                 [0m [36mmain.skikozou.me[0m

Current path: ${url.pathname}
Requested at: ${new Date().toISOString()}
Server: Cloudflare

Have a good one.
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
