
for (let i = 0; i < localStorage.length; i++) {
    let tabBodyRef = document
        .getElementById("table")
        .getElementsByTagName("tbody")[0];
    let newRow = tabBodyRef.insertRow();
    let keyName = "answers" + String(i);
    let answers = JSON.parse(localStorage.getItem(keyName));
    j = 0;
    for (let a in answers) {
        newRow.insertCell(j).appendChild(document.createTextNode(answers[a]));
        j++;
    }
}

// span.onclick = function () {
// 	modal.style.display = "none";
// 	for (; document.getElementById('table').getElementsByTagName('tr').length > 1;) {
// 		document.getElementById('table').deleteRow(1);
// 	}
// 	document.getElementById('datalist').innerHTML = '';
// }


// window.onclick = function (event) {
// 	if (event.target == modal) {
// 		for (; document.getElementById('table').getElementsByTagName('tr').length > 1;) {
// 			document.getElementById('table').deleteRow(1);
// 		}
// 		document.getElementById('datalist').innerHTML = '';
// 		modal.style.display = "none";

// 	}
// }

const formElement = document.getElementById('button_clear');
formElement.addEventListener('click', () => {
	for (; document.getElementById('table').getElementsByTagName('tr').length > 1;) {
		document.getElementById('table').deleteRow(1);
	}
	document.getElementById('datalist').innerHTML = '';
	localStorage.clear();
})

