let value = document.querySelector("#value");
let btns=document.querySelectorAll(".btn");

let count=0;

btns.forEach(element => {
});

btns.forEach(element => {
    console.log(element);
    element.addEventListener('click',(e)=>{
        let prop=e.target.classList;
        if(prop.contains("increase")){
            count++;
        }
        else if(prop.contains("decrease")){
            count--;
        }
        else{
            count=0;
        }
        value.textContent=count;
        if(count > 0){
            value.style.color="green";
        }
        else if(count < 0){
            value.style.color="red";
        }
        else{
            value.style.color="#222222";    
        }
    })
});
