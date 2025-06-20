const showFirst = (entries) => {
	const keyframes = {
		opacity: [0, 1],
		translate: ['200px 0', 0],
	};
	entries[0].target.animate(keyframes, 600);
};

const firstObserver = new IntersectionObserver(showFirst);

firstObserver.observer(document.querySelector('#first'));
