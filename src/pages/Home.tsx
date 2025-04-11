import { isCookie } from 'react-router-dom';
import { DotGrid } from '../components/DotGrid'
import { ShadedText } from '../components/ShadedText'
import { useState, useEffect } from 'react';

const IsCustom = false
const textlist = [
  "Hello World",
  "Stay curious",
  "Dream big",
  "Believe in yourself",
  "Make today amazing",
  "Work hard, stay humble",
  "Keep pushing forward",
  "Stay focused",
  "Success is a journey",
  "Be the change",
  "Create, innovate",
  "Stay strong",
  "Don't give up",
  "The best is yet to come",
  "Seize the day",
  "Make it happen",
  "Live your dreams",
  "Enjoy the process",
  "Be fearless",
  "Keep moving forward"
];

export default function Home() {
  let displayText = "Hello, world!"

  if (IsCustom) {
    const [randomText, setRandomText] = useState<string>("");

    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * textlist.length);
      setRandomText(textlist[randomIndex]);

      if (Math.floor(Math.random()*100) < 1) {
        setRandomText("やりますねぇ！");
      }

      displayText = randomText
    }, []);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden">
      <DotGrid />
      <div className="select-none z-10 relative">
      <ShadedText text={displayText} />
      </div>
    </main>
  );
}
