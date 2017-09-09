var CatStore = ((oldCatStore) => {

	oldCatStore.catLoadWorks = function() {
		let catData = JSON.parse(this.responseText).cats;
		CatStore.setAllCats(catData);
		CatStore.ownerXHR();

	};
	oldCatStore.ownerLoadWorks = function() {
		let ownerData = JSON.parse(this.responseText).owners;
		CatStore.setAllOwners(ownerData);
		let catArray = CatStore.getAllCats();
		let ownerArray = CatStore.getAllOwners();
		CatStore.combineArrays(catArray, ownerArray);
 	
	};
	oldCatStore.loadBroken = () => {
		//console.log("Broken Load");
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