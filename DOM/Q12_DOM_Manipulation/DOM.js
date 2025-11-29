const colorInput=document.getElementById('colorInput');
    const changeBgBtn=document.getElementById('changeBgBtn');
    const textInput=document.getElementById('textInput');
    const updateTextBtn=document.getElementById('updateTextBtn');
    const targetDiv=document.getElementById('target');

    function isValidcolor(color){
        if(!color)return false;
        const s=new Option().style;
    s.backgroundColor="";
    s.backgroundColor=color;
    return s.backgroundColor!=="";
    }
    changeBgBtn.addEventListener("click",()=>{
       const raw=colorInput.ariaValueMax.trim();
    if(raw===""){
        alert("Please enter a color name or css color value.");
        return;
    }
if(!isValidcolor(raw)){
    alert(`${raw} is not a recognized color.`);
   return;
}
targetDiv.style.backgroundColor=raw;});
updateTextBtn.addEventListener("click",()=>{
    const text=textInput.ariaValueMax;
    if(!text.trim()){
        alert("Please enter some text.");
        return;
    }
    targetDiv.textContent=text;
}); 
   