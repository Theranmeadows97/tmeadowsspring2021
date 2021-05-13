const form = document.getElementById('signup-form');
const firstName = document.getElementById('firstName');
const errorElement = document.getElementById('errorMessage');

form.addEventListener('submit', (e) =>{
    let messages = [];
    if (firstName.value.length < 3) {
        messages.push("You need more than 3 characters for a name.")
    }

    if(messages.length > 0){
    e.preventDefault();
    errorElement.innerHTML = messages.join(', ')
    } 
});





/*-------chapter 8-------- */

/* const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/

form.addEventListener('submit', e => {
  e.preventDefault();
  //console.log(username.value);
  //console.log(form.username.value);
// VALIDATION
const username = form.username.value;

if(usernamePattern.test(username)){
    //feedback passed
    feedback.textContent = 'That username is valid!';
} else {
    // feedback not passed
    feedback.textContent = 'Your username must contain letters only and be 6-12 characters long';
}
});

//LIVE FEEDBACK
form.username.addEventListener('keyup', e => {
    //console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)){
        //console.log('passed!')
        form.username.setAttribute('class','success' )
    } else {
        //console.log('failed!')
        form.username.setAttribute('class','error' )
    }
});


//Testing RegEx

// const username = 'jimmy';
// const pattern = /^[a-z]{6,}$/ 

// let result = pattern.test(username);
// console.log(result);
// if(result){
//     console.log('RegEx test passed!');
// } else {
//     console.log('RegEx test failed!');
// }

//let result = username.search(pattern);
//console.log(result); // 0 is a true, -1 is false, it will return where it starts in the string */