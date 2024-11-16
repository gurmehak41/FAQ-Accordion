const myHeaders = document.querySelectorAll("h2");
const myParagraphs = document.querySelectorAll("p");
const myImages = document.querySelectorAll("img");

for (let step = 0; step < 4; step++) {
  myHeaders[step].addEventListener("click", function(){

  	myParagraphs[step].classList.toggle("temp");

  	if(myParagraphs[step].classList.contains("temp")){
			myImages[step+1].src = 'assets/images/icon-plus.svg';
		}
		else{
			myImages[step+1].src = 'assets/images/icon-minus.svg';
		}

  })

  myImages[step+1].addEventListener("click",function(){
  	myParagraphs[step].classList.toggle("temp");

  	if(myParagraphs[step].classList.contains("temp")){
			myImages[step+1].src = 'assets/images/icon-plus.svg';
		}
		else{
			myImages[step+1].src = 'assets/images/icon-minus.svg';
		}
	
  })
}