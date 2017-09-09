var CatStore = ((oldCatStore) => {
let cats = [];

	oldCatStore.getAllCats = () => {
		return cats;
	};

	oldCatStore.setAllCats = (allMyCats) => {
		cats = allMyCats;
	};

	return oldCatStore;
})(CatStore || {});