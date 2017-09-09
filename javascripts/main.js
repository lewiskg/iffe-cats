CatStore.catXHR();

document.getElementById("fancyPetStore").addEventListener("click", (event) => {
	if(event.target.id.indexOf("adopt") === 0) {
		console.log("event", event);
		let catIndex = event.target.id.split("-")[1];
		CatStore.adoptCat(catIndex)

	}
});

document.getElementById("all").addEventListener("click", (event) => {
	let cats = CatStore.getAllCats();
	let owners = CatStore.getAllOwners();
	CatStore.combineArrays(cats, owners);
});
document.getElementById("none").addEventListener("click", (event) => {
	CatStore.getCatsByOwner(0);
});
document.getElementById("zoe").addEventListener("click", (event) => {
	CatStore.getCatsByOwner(1);
});
document.getElementById("callan").addEventListener("click", (event) => {
	CatStore.getCatsByOwner(2);
});
document.getElementById("lauren").addEventListener("click", (event) => {
	CatStore.getCatsByOwner(3);
});