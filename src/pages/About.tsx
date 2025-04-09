import { DotGrid } from '../components/DotGrid'

export default function About() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <DotGrid />
      
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-lg p-8 max-w-xl w-full relative">
          <div className="absolute inset-0 bg-gray-300 rounded-lg -z-10 translate-x-[var(--shadow-location)] translate-y-[var(--shadow-location)]"/>
          <h1 className="text-3xl font-bold mb-4 text-center">自己紹介</h1>
          <p className="text-gray-700">
            こんにちは！私は〇〇です。プログラミングが大好きで、特にWeb開発に情熱を持っています。
            最近はReactやTypeScriptを使ったフロントエンドの開発に力を入れています。
            趣味は映画鑑賞や音楽を聴くことです。今後も技術を深め、より良いアプリケーションを作っていきたいと思っています！
          </p>
        </div>
      </div>
    </div>
  )
}
