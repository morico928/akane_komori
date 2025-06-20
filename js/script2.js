const items = document.querySelectorAll('.heading');

for (let i = 0; i < items.length; i++){
const keyframes = {
	opacity: [0,1],
	translate: ['0 50px', 0],
};
const options = {
	duration: 5000,
	delay: i * 300,
	fill: 'forwards',
	easing: 'ease',
};

items[i].animate(keyframes, options);
}
