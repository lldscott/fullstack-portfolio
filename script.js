
window.onload =  function() {
    const form = document.querySelector("#form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
    })
}

function sendEmail(){ 
    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,   
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
};

emailjs
.send('service_7h6c0k3', 'template_fua6uym', templateParams)
.then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    alert("Email sent successfully!");
}, function(error) {
    console.log('FAILED...', error);
    alert("Failed to send email. Please try again later.");
},)

}

const floatingBtn =document.querySelector(".floating-btn");

floatingBtn.addEventListener("click", () => {
    floatingBtn.classList.toggle("active");

});

document.addEventListener("click", (e) => {
    if (!floatingBtn.contains(e.target)) {
        floatingBtn.classList.remove("active");
    }
})
//const contact_btn = document.querySelector('.contact');

//for (const btn of contact) {
   // btn.onclick =() => btn.classList.toggle('show');

  //  btn.addEventListener('click', (event) => {
    

   // if(!btn.classList.toggle('contact.html')) {
  //      btn.classList.add('contact.html');

   // } else {
   //     time.classList.remove('contact.html');
  //  }
//});
const timeline_wrapper = document.querySelector('.timeline-wrapper')

const timelines = document.querySelectorAll('.timeline li .data');

for (const time of timelines) {
    time.onclick =() => time.classList.toggle('show');

    time.addEventListener('touchstart', (event) => {
    

    if(!time.classList.toggle('show')) {
        time.classList.add('show');

        hideTimer = setTimeout(() => {
            time.classList.remove('show');

        }, 10000);

    } else {
        time.classList.remove('show');
    }
});
}


    
    

