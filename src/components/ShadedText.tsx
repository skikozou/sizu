interface ShadedTextProps {
	text: string
  }
  
  export function ShadedText({ text }: ShadedTextProps) {
	const characters = text.split("")
  
	return (
	  <div className="relative">
		<div className="flex">
		  {characters.map((char, index) => (
			<div key={index} className="relative">
			  {/* Main character - now orange */}
			  <span className="text-[12rem] font-bold tracking-tight theme-maincolor text-stroke relative z-10">{char}</span>
  
			  {/* Shadow for each character - now white */}
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
	)
  }
  
  