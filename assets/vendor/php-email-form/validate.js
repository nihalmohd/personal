
function validateform(){
  var name = document.form.name.value;
  var email = document.form.email.value;
  var subject = document.form.subject.value;
  var message = document.form.message.value;
  var regex = /^[a-zA-Z]\w+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/gm;
  var display=document.getElementById("error");

  if(name==""){
    display.innerHTML="Name is empty";
    return false;
    }
    if(name.length<5){
      display.innerHTML="Enter full name at leaset five letter";
      return false;
    
    } 
    if(email==""){
      display.innerHTML="Email is empty";
      return false;
    }
    if(subject==""){
      display.innerHTML="subject is empty";
      return false;
    }
    if(message==""){
      display.innerHTML="Message is empty";
      return false;
    }
    if(regex.test(email)==false){
      display.innerHTML="Invalied Email ";
      return false;
    }

      if(subject.legth< 5){
        display.innerHTML="Enter Atleast 5 Letters Subject";
        return false;
    }
        if(message.legth<10){
          display.innerHTML="Enter Atleast 10 Letters Subject";
          return false;
    }
    display.innerHTML = "Email sent!"
    return true;


  }
