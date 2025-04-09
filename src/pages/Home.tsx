import { DotGrid } from '../components/DotGrid'
import { ShadedText } from '../components/ShadedText'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden">
      <DotGrid />
      <div className="select-none z-10 relative">
        <ShadedText text="Hello, world!" />
      </div>
    </main>
  );
}
