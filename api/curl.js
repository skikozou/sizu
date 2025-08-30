export default function handler(req, res) {
  const { path = '' } = req.query
  const userAgent = req.headers['user-agent'] || ''
  
  // curlリクエストの確認（念のため二重チェック）
  if (!userAgent.toLowerCase().includes('curl')) {
    // curlでない場合は通常のサイトにリダイレクト
    return res.redirect(302, `/${path}`)
  }

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

Current path: /${path}
Requested at: ${new Date().toISOString()}
Your IP: ${req.headers['x-forwarded-for'] || req.connection?.remoteAddress || 'unknown'}
`

  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.status(200).send(curlResponse)
}
