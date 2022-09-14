const nonNullObject = <T extends object>(
	objectToTest: object
): objectTotest is T =>
	Object.values(objectToTest).every((value) => value !== null);
