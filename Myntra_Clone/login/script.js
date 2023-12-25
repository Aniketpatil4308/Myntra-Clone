const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


// Registration Form 

function addData(){
   
    var name = document.getElementById('nm').value
    var email = document.getElementById('em').value
    var pass = document.getElementById('ps').value

    localStorage.setItem('userName',name)
    localStorage.setItem('email',email)
    localStorage.setItem('Password',pass)

        alert("Ragistation Successfull")

}


// LogIn Form


function checkData(){
    var enterEmail = document.getElementById('email').value;
    var enterPwd = document.getElementById('pwd').value;


    let em = document.getElementById('email');
    let pw = document.getElementById('pwd');


    var getEmail = localStorage.getItem('email');
    var getpwd = localStorage.getItem('Password');



    let button = document.getElementById('next'); 

    let ch = document.querySelector('.change')

    if(enterEmail == getEmail)
    {
        if(enterPwd == getpwd){
        
            button.setAttribute("href","../index.html");
            // ch.innerHTML ='aniket'

        
        }else{
            alert(" Invalid password ");
        // pw.style.border = "2px solid red"
        }
    }else{
        
        // em.style.border = "2px solid red"
        alert(" Invalid Email ");

    }

}








