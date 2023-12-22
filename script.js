var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 20,
    stretch: 10,
    depth: 100,
    modifier: 3,
    slideShadows: true
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
      600: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      },
    }
});

  const btnEl = document.getElementById("btn");
  const weightConditionEl = document.getElementById("weight-condition");
  const bmiValue = document.getElementById("bmi-result")

  function calculateBMI() {
    const heightValue = document.getElementById("height").value / 100;
    const weightValue = document.getElementById("weight").value;

    const bmiValue = weightValue / (heightValue * heightValue);

    if (bmiValue < 18.5) {
      weightConditionEl.innerText = "Under weight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      weightConditionEl.innerText = "Normal weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      weightConditionEl.innerText = "Overweight";
    } else if (bmiValue >= 30) {
      weightConditionEl.innerText = "Obesity";
    }
    

    // Call sendMail function here
    sendMail(bmiValue);
  }

  btnEl.addEventListener("click", calculateBMI);

  function sendMail(bmiValue) {
    (function(){
      emailjs.init("v4lJHzwJd0X1BYtMu");
      console.log("Email Initialized")
    })();
  
    var params = {
      from_name: "pedrito.parrilla05@gmail.com",
      to_email: document.querySelector("#email_id").value, 
      bmi: bmiValue.toFixed(2),
      condition: weightConditionEl.innerText
    };
    var serviceID = "service_pgffasw";
    var templateID = "template_alpcjmi";
  
    emailjs.send(serviceID, templateID, params)
      .then( res => {
        alert("Email Sent Successfully!");
      })
      .catch(error => {
        console.error('Error sending email:', error);
      });
  }
