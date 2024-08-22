var a;

function signup(){
    var lname = document.getElementById('lname'). value
    var lemail = document.getElementById('lemail'). value
    var pass = document.getElementById('lpass'). value
    localStorage.setItem('Name',lname)
    localStorage.setItem('Email',lemail)
    localStorage.setItem('password',pass)
     location.href = './signin.html'
 

}


function signin(){
    
    var semail = document.getElementById('semail'). value
    var spass  = document.getElementById('spass'). value
    if(localStorage.getItem('Email') == semail && localStorage.getItem('password') == spass){
    location.href = './welcome.html'

    }
    else{
       alert('pass and email not matched')
        location.href ='./signin.html'
    }

}

