// const onInput = document.querySelector("#validation-input");
// const valueLength = onInput.getAttribute('data-length');
// onInput.addEventListener("blur", event => {
//     if (event.currentTarget.value.length == valueLength) {
//         onInput.classList.add("valid");
//         if (onInput.classList.contains('invalid')) {
// 			    onInput.classList.remove('invalid')
// 		}
// 	    } else {
// 		    if (onInput.classList.contains('valid')) {
// 			    onInput.classList.remove('valid')
// 		    }
// 		onInput.classList.add('invalid')
// 	}
// });

// console.log(onInput);
// console.log(onInput.classList);
const input = document.querySelector("#validation-input"); 
const valueLength = input.getAttribute('data-length'); 
	input.addEventListener("blur", (event) => {
	if (event.currentTarget.value.length == valueLength) {
		input.classList.add("valid");
		input.classList.remove("invalid");
	} else {
		input.classList.add("invalid");
		input.classList.remove("valid");
	}
}); 
// Цей метод теж працює :)
