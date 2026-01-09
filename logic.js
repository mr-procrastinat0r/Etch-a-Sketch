
const container = document.querySelector(".grid-container");

function creategrid(size){

	for(let i = 0; i < size * size; i++){
	const cells = document.createElement("div");
	cells.style.width = (960 / size) + "px";
	cells.style.height = (960/ size) + "px";
	cells.classList.add("cell");
	container.appendChild(cells);
	}
	
}

function deletegrid(){
	
	container.innerHTML = "";
}
/* function grid(){

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
*/

function clearSketch(){

	const clear = document.querySelectorAll(".cell").forEach(cell => {
		cell.style.background = "";
	})
}
function random(number){
	return Math.floor(Math.random() * (number + 1));
}

const randomC = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

function addGlobalEventListener(type, selector, callback){
	document.addEventListener(type, e => {
		if(e.target.matches(selector)){
			callback(e);
		}
	});
}

addGlobalEventListener("mouseover", ".cell", e => {
	e.target.style.background = randomC;
})

const newgrid = document.querySelector(".new");
newgrid.addEventListener("click", () => {
	let size = prompt("Enter a grid size 1-100");
	deletegrid();
	creategrid(size);

});

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearSketch);

creategrid(16);


