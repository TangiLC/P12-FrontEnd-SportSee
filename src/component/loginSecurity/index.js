//This is a placeholder for a true secured login, there is no security in there !

export default function matchingId(first, last) {

    const capitalize=(string) =>{
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }

    const thisDataBaseIsAbsolutlyUnsafe = [
        { firstName: "Thomas", lastName: "Mockdata", id: 9 },
        { firstName: "Karl", lastName:"Dovineau", id:12},
        { firstName: "Cecilia", lastName:"Ratorez", id:18},

    ];
    
	first = capitalize(first);
	last = capitalize(last);
	for (const user of thisDataBaseIsAbsolutlyUnsafe) {
		if (user.firstName === first && user.lastName === last) {
			return user.id;
		}
	}
	return null;
}