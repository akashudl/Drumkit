const input=document.querySelectorAll('.controls input')

console.log(input)

function handelUpdate(){
  const suffix=this.dataset.sizing || "" // to get the data attribue from the inout tag 
  
  document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix)
}


input.forEach(input => {
    input.addEventListener('change',handelUpdate)
});