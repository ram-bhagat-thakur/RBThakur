const menuToggle = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuToggle.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});



document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel"); // Select all carousels
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const wrappers = document.querySelectorAll(".wrapper");

    carousels.forEach(carousel => {
        const firstCard = carousel.querySelector(".card");
        const firstCardWidth = firstCard.offsetWidth;

        let isDragging = false,
            startX,
            startScrollLeft,
            timeoutId;

        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        };

        const dragging = (e) => {
            if (!isDragging) return;

            const newScrollLeft = startScrollLeft - (e.pageX - startX);

            if (newScrollLeft <= 0 || newScrollLeft >=
                carousel.scrollWidth - carousel.offsetWidth) {
                isDragging = false;
                return;
            }

            carousel.scrollLeft = newScrollLeft;
        };

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        };

        const autoPlay = () => {
            if (window.innerWidth < 800) return;
            const totalCardWidth = carousel.scrollWidth;
            const maxScrollLeft = totalCardWidth - carousel.offsetWidth;
            if (carousel.scrollLeft >= maxScrollLeft) return;

            timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
        };

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);

        wrappers.forEach(wrapper => {
            wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
            wrapper.addEventListener("mouseleave", autoPlay);
        });

        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
            });
        });
    });
});

/* Accordino*/
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.closest('.accordion-item').querySelector('.accordion-content');

        // Close all other open accordions
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.style.display = "none";
            }
        });

        // Toggle the current accordion section
        content.style.display = (content.style.display === "block") ? "none" : "block";
    });
});
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== button.parentElement) {
                item.classList.remove('active'); // Close other sections
            }
        });

        button.parentElement.classList.toggle('active'); // Open the clicked section
    });
});






/* Contact Form */

$(document).ready(function () {
    $('[id^="icon"]').hover(
        function () {
            let popupId = $(this).data('popup');
            $('#' + popupId).css('display', 'block');
        },
        function () {
            let popupId = $(this).data('popup');
            $('#' + popupId).css('display', 'none');
        }
    );
});

function validatename(name) {
    let re = /^[a-zA-Z ]{2,30}$/;
    return re.test(name);
}
function validateemail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validatenum(number) {
    let re = /^\d{10}$/;
    return re.test(number);
}


$("#submit").click(function () {
    let name, email, number, message;
    name = $("#name").val();
    email = $("#email").val();
    number = $("#phone-number").val();
    message = $("#message").val();
    const count = 0;

    if (!validatename(name) || name == "") {
        $("#icon").css("display", "block");
        $("#name").css("border", "2px solid red");
        $("#name").on("focus", function () {
            $("#icon").css("display", "none");
            $("#name").css("border", "2px solid green");
        });
        count++;
    }

    if (!validateemail(email) || email == "") {
        $("#icon1").css("display", "block");
        $("#email").css("border", "2px solid red");
        $("#email").on("focus", function () {
            $("#icon1").css("display", "none");
            $("#email").css("border", "2px solid green");
        });
        count++;
    }

    if (!validatenum(number) || number == "") {
        $("#icon2").css("display", "block");
        $("#phone-number").css("border", "2px solid red");
        $("#phone-number").on("focus", function () {
            $("#icon2").css("display", "none");
            $("#phone-number").css("border", "2px solid green");
        });
        count++;
    }

    if (message == "") {
        $("#icon3").css("display", "block");
        $("#message").css("border", "2px solid red");
        $("#message").on("focus", function () {
            $("#icon3").css("display", "none");
            $("#message").css("border", "2px solid green");
        });
        count++;
    }


if (count == 0) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";

    // Auto-close popup after 3 seconds (optional)
    setTimeout(() => {
      document.getElementById("popup").style.display = "none";
      document.getElementById("overlay").style.display = "none";
    }, 3000);
}

});




// Wait for the page to fully load
  window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("mainContent");

    // Fade out the loader after 2 seconds
    setTimeout(() => {
      loader.style.animation = "fadeOut 1s forwards";
      content.style.display = "block";
    }, 2000); // 2 seconds
  });