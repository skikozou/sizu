interface ShadedTextProps {
	text: string;
  }
  
  export function ShadedText({ text }: ShadedTextProps) {
	// スペースを非改行スペース（&nbsp;）に置き換え
	const characters = text.split("").map(char => (char === " " ? "\u00A0" : char));
  
	return (
	  <div className="relative">
		<div className="flex">
		  {characters.map((char, index) => (
			<div key={index} className="relative inline-block">
			  {/* Main character */}
			  <span className="text-[12rem] font-bold tracking-tight theme-maincolor text-stroke relative z-10">
				{char}
			  </span>
  
			  {/* Shadow for each character */}
			  <span
				className="absolute top-[var(--shadow-location)] left-[var(--shadow-location)] text-[12rem] font-bold tracking-tight theme-shadow z-0"
				style={{
				  display: "block",
				  position: "absolute",
				}}
			  >
				{char}
			  </span>
			</div>
		  ))}
		</div>
	  </div>
	);
  }
  