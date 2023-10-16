//This is a placeholder for a true secured login, for dev use only !


const absolutelyUnsafeDataBase = [
	{ firstName: "Thomas", lastName: "Mockdata", id: 9 },
	{ firstName: "Karl", lastName: "Dovineau", id: 12 },
	{ firstName: "Cecilia", lastName: "Ratorez", id: 18 },
	{ firstName : "Cheikh", lastName: "Mbacke", id: 99}
];

export default function matchingId(first, last) {
	const capitalize = (string) => {
		return string[0].toUpperCase() + string.slice(1).toLowerCase();
	};
	first = capitalize(first);
	last = capitalize(last);
	for (const user of absolutelyUnsafeDataBase) {
		if (user.firstName === first && user.lastName === last) {
			return user.id;
		}
	}
	return null;
}
