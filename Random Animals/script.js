const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const fox_btn = document.getElementById('fox_btn');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const fox_result = document.getElementById('fox_result');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);
fox_btn.addEventListener('click', getRandomFox);

function getRandomCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			// console.log(data);
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}

function getRandomFox() {
	fetch('https://randomfox.ca/floof/')
		.then(res => res.json())
		.then(data => {
			fox_result.innerHTML = `<img src=${data.image} alt="fox" />`
		});
}