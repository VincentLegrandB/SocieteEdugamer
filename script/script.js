const textA = document.getElementById("s1")

const textB = document.getElementById("s2")

const textC = document.getElementById("s3")

const scrollToA = document.getElementById("pag1")

const scrollToB = document.getElementById("pag2")

const scrollToC = document.getElementById("pag3")

const scrollToD = document.getElementById("pag4")

const scrollToE = document.getElementById("pag5")

const scrollToZ = document.getElementById("retourAuTop")

function callbackFunction(entries) {
	
	entries.forEach(entry => {
		if(entry.isIntersecting){
			entry.target.classList.add('visible')
			scrollToZ.style.opacity = 1;
			observer.unobserve(entry.target)
		}
	})
}

const options = {rootMargin: "0px", threshold:0.25}

const observer = new IntersectionObserver(callbackFunction, options)

observer.observe(textA)

observer.observe(textB)

observer.observe(textC)


scrollToA.addEventListener("click", () => {
  document.getElementById("a").scrollIntoView({ behavior: "smooth", block: "start" });
});

scrollToB.addEventListener("click", () => {
  document.getElementById("b").scrollIntoView({ behavior: "smooth", block: "start" });
});

scrollToC.addEventListener("click", () => {
  document.getElementById("c").scrollIntoView({ behavior: "smooth", block: "start" });
});

scrollToD.addEventListener("click", () => {
  document.getElementById("d").scrollIntoView({ behavior: "smooth", block: "start" });
});

scrollToE.addEventListener("click", () => {
  document.getElementById("e").scrollIntoView({ behavior: "smooth", block: "start" });
});

scrollToZ.addEventListener("click", () => {
  document.getElementById("z").scrollIntoView({ behavior: "smooth", block: "start" });
});



