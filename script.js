


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

const timeline_wrapper = document.querySelector('.timeline-wrapper')

const timelines = document.querySelectorAll('.timeline li .data');

for (const time of timelines) {
    time.onclick =() => time.classList.toggle('show');

    time.addEventListener('click', (event) => {
    

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
timeline_wrapper.addEventListener('mousemove', (event) => {
        const timeline = document.querySelector('.timeline');
        let scroll_width = event.pageX / timeline_wrapper.clientWidth 
        * ( timeline_wrapper.clientWidth - timeline.clientWidth);
        
        timeline.style.left = scroll_width.toFixed(1) + 'px';
    })
    
    

    
    


