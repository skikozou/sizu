export function DotGrid() {
	return (
	  <div className="absolute inset-0 w-full h-full z-10">
		<div className="relative w-full h-full theme-background overflow-hidden">
		  <div
			className="absolute inset-0"
			style={{
			  backgroundImage: "radial-gradient(var(--dot-color) 2px, transparent 0)",
			  backgroundSize: "50px 50px",
			  backgroundPosition: "0 0",
			  width: "100%",
			  height: "100%",
			}}
		  />
		</div>
	  </div>
	)
  }
  