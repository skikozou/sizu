import { DotGrid } from '../components/DotGrid'

export default function About() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <DotGrid />
      
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <div className="theme-bg-simple rounded-lg p-8 max-w-xl w-full relative flex items-center">
          <div className="absolute inset-0 theme-bg-shadow rounded-lg -z-10 translate-x-[var(--shadow-location)] translate-y-[var(--shadow-location)]"/>
          
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold mb-4 text-center theme-text-simple">About Me</h1>
            <h2 className="text-2xl font-bold theme-text-simple">skikozou (sizu)</h2>
            <ul className="space-y-2 theme-text-simple">
              <li><span className="font-semibold">職業：</span>学生</li>
              <li><span className="font-semibold">使用言語：</span>Golang / C#</li>
              <li><span className="font-semibold">得意分野：</span>CLI Appの作成</li>
              <li><span className="font-semibold">趣味：</span>BattleField 2042 / Blender</li>
              <li><span className="font-semibold">最近の活動：</span>ゲーム / コード / モデリング</li>
            </ul>
            <p className="text-sm italic text-zinc-400">だいたい気分で動いてる  : )</p>
          </div>
          
          <div className="w-50 h-50 shrink-0 ml-6 rounded-full overflow-hidden shadow-md">
            <img src="favicon.ico" alt="icon" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
