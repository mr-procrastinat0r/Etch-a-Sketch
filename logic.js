
const container = document.querySelector(".grid-container");

let size = 16;

for(let i = 0; i < size * size; i++){
	const cells = document.createElement("div");
	cells.style.width = (960 / size) + "px";
	cells.style.height = (960 / size) + "px";
	cells.classList.add("cell");
	container.appendChild(cells);
}
function grid(){

	container.innerHTML = ""
	do {
		size = prompt("Enter grid size under 100");
	}while(size > 100);
	for(let i = 0; i < size * size; i++){
		const cells = document.createElement("div");
		cells.style.width = (960 / size) + "px";
		cells.style.height = (960 / size) + "px";
		cells.classList.add("cell");
		container.appendChild(cells);
	}
}

function addGlobalEventListener(type, selector, callback){
	document.addEventListener(type, e => {
		if(e.target.matches(selector)){
			callback(e);
		}
	})
}

addGlobalEventListener("mouseover", ".cell", e => {
	e.target.style.background = "red";
})

const newgrid = document.querySelector(".new");
newgrid.addEventListener("click", grid);


