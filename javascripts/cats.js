var CatStore = ((oldCatStore) => {
let cats = [];

	oldCatStore.getAllCats = () => {
		return cats;
	};

	oldCatStore.setAllCats = (allMyCats) => {
		cats = allMyCats;
	};

	oldCatStore.adoptCat = (catIndex) => {
		cats[catIndex].ownerId = 1;
		let myCats = CatStore.getAllCats();
		let myOwners = CatStore.getAllOwners();
		CatStore.combineArrays(myCats, myOwners)
	};

	oldCatStore.getCatsByOwner = (ownerId) => {
		let callansCats = [];

		cats.forEach((cat) => {
			if(cat.ownerId === ownerId) {
				callansCats.push(cat);
			}
		});

		let myOwners = CatStore.getAllOwners();
		CatStore.combineArrays(callansCats, myOwners);

	};

	return oldCatStore;
})(CatStore || {});