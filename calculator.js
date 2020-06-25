
var button_1 = document.getElementsByClassName("button1");
var editor_1 = document.getElementById("editor");

var exp1="";
var exp2="";
var flag=1;


for(var i=0;i<button_1.length;i++){

button_1[i].addEventListener('click', function() {
        
    
		if(this.getElementsByTagName("p")[0].textContent=="AC"){
			editor_1.innerHTML="";
			exp1="";
			exp2="";
		}
		else if(this.getElementsByTagName("p")[0].textContent=="+" || this.getElementsByTagName("p")[0].textContent=="%"  || this.getElementsByTagName("p")[0].textContent=="-" || this.getElementsByTagName("p")[0].textContent=="*" || this.getElementsByTagName("p")[0].textContent=="/" ){
			exp1=editor_1.textContent+this.getElementsByTagName("p")[0].textContent;
			flag=2;
			// editor_1.innerHTML=editor_1.textContent+button_1.getElementByTag("p").textContent;
			editor_1.innerHTML="";
		}
		else if(this.getElementsByTagName("p")[0].textContent=="="){
			exp2 = editor_1.textContent;
			if(exp1 == "" || exp2 == ""){
				editor_1.innerHTML = "error";
			}
			else{
				var ans = eval(exp1+exp2);
			editor_1.innerHTML = ans; 	
			}
				
			}
		else{
			editor_1.innerHTML=editor_1.textContent+this.getElementsByTagName("p")[0].textContent;
			}	

        // button_1[i].style.backgroundColor="green";
   	
        
    } );

}
