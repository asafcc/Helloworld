setTimeout(()=>{
const input = document.getElementsByClassName("qa-email-textbox")[0];
console.log("from script");
if(input){
  input.addEventListener('input',()=>{
    console.log("heeeeresdf");
    console.log(input.value);
  });

}

},2000);
