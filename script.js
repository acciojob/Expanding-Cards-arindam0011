document.addEventListener("DOMContentLoaded", function() {
    const panels = document.querySelectorAll(".card");

    panels.forEach(card => {
        const para = card.querySelector(".img-text");
        para.style.display = card.classList.contains("active") ? "block" : "none";

	});

	const imgs=document.querySelectorAll(".img");

	imgs.forEach(img=>{
		img.addEventListener("click", function(){
			let activeImg=document.querySelector(".active");
			activeImg.classList.remove("active");
			let card=img.parentElement;
			card.classList.add("active")
		panels.forEach(card => {
        const para = card.querySelector(".img-text");
        para.style.display = card.classList.contains("active") ? "block" : "none";

	});
		})
	});
});