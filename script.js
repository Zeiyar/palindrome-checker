const button=document.getElementById("check-btn");
const textInput=document.getElementById("text-input");
const hidingText=document.getElementById("hideWhenButton");
const result=document.getElementById("result");

button.addEventListener("click",()=>{
  if (textInput.value){
    inputCheck()
  } else {
    alert("Please input a value");
  }
})

const inputCheck=()=>{
  const withoutSpaceText=textInput.value.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g,"");
  const half = Math.floor(withoutSpaceText.length/2);
    if (withoutSpaceText.length%2===0){
      const premiere=withoutSpaceText.slice(0, half);
      const deuxieme=withoutSpaceText.slice(half).split("").reverse().join("")
      if (premiere===deuxieme){
        result1()
      } else {
        result2()
      }
    } else {
      const premiere=withoutSpaceText.slice(0, half);
      const deuxieme=withoutSpaceText.slice(half+1).split("").reverse().join("")
      if (premiere===deuxieme){
        result1()
      } else {
        result2()
      }
    }
}

const result1=()=>{
  hidingText.style.display="none"
  result.innerText=`${textInput.value} is a palindrome`
}
const result2=()=>{
  hidingText.style.display="none"
  result.innerText=`${textInput.value} is not a palindrome`
}