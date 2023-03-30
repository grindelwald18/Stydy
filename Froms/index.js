// выбрать форму на странице index.hyml И добавить addEventListener 
// добавть addEventListener на событие submit
// в функции-обработчике мы достаем данные из события и отправляем их
// в result.js  мы достанем данные из localStorage и адрессовываем   


const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	var answers = new Object();

	answers.name = form.elements.name.value;
	answers.fio = form.elements.fio.value;
	answers.time = form.elements.time.value;
	answers.your_number = form.elements.your_number.value;
	answers.adres = form.elements.adres.value;
	
	answers.like = ""
	let like = form.elements.products;
	let flag = true;
	for (let i = 0; i < like.length; i++) {
		if (like[i].checked == true) {
			if (!flag)
				answers.like += ', '
			answers.like += like[i].value;
			flag = false;
		}
	}
	if (flag)
		answers.like = "Не выбрано"

	answers.check = ''
	let check = form.elements.survey;
	for (let i = 0; i < check.length; i++) {
		if (check[i].checked == true) {
			answers.check += check[i].value;
		}
	}

	var counter = localStorage.length;
	var keyName = "answers" + String(counter);
    console.log(answers);
	localStorage.setItem(keyName, JSON.stringify(answers));

	form.reset();
	alert("Данные успешно отправлены")
});

