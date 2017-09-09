console.log("in xhr.js");

var CatStore = ((oldCatStore) => {

	oldCatStore.catLoadWorks = function() {
		let catData = JSON.parse(this.responseText).cats;
		console.log("catData", catData);

	};
	oldCatStore.ownerLoadWorks = function() {
		let ownerData = JSON.parse(this.responseText).owners;
		console.log("ownerData", ownerData);
 
	};
	oldCatStore.loadBroken = () => {
		console.log("Broken Load");
	};

	oldCatStore.catXHR = () => {
		let myCats = new XMLHttpRequest;
		myCats.addEventListener("load", CatStore.catLoadWorks);
		myCats.addEventListener("load", CatStore.loadBroken);
		myCats.open("GET","./db/cats.json");
		myCats.send();
	};

	oldCatStore.ownerXHR = () => {
		let myOwners = new XMLHttpRequest;
		myOwners.addEventListener("load", CatStore.ownerLoadWorks);
		myOwners.addEventListener("load", CatStore.loadBroken);
		myOwners.open("GET","./db/owners.json");
		myOwners.send();
	};

	return oldCatStore;
})(CatStore || {});