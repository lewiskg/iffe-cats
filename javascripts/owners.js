console.log("in xhr.js");

var CatStore = ((oldCatStore) => {
let owners = [];

	oldCatStore.getAllOwners = () => {
		return owners;
	};

	oldCatStore.setAllOwners = (allMyOwners) => {
		owners = allMyOwners;
	};


	return oldCatStore;
})(CatStore || {});