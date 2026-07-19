function sendEmail(){ 
    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,   
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
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

function contactForm() {
    var myWindow = window.open("contact.html", "MsgWindow", "width=200,height=100");
    
}