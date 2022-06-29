/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
	people.sort(([aH, aK], [bH, bK]) => {
		return bH - aH || aK - bK;
	});

	return people.reduce((queue, item) => {
		const [h, k] = item;

		queue.splice(k, 0, item);
		return queue;
	}, []);
};