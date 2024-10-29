const btn1 = document.getElementById("mybtn");
const btn2 = document.getElementById("mybtn2");
const copyCode = document.getElementsByClassName("copycode")[0];

let rgb1 = `rgb(81, 130, 234)` , rgb2 = `rgb(89 ,198 ,45)`;

const hexColor = ()=>{
    let myHexaValues = "0123456789abcdef";
    let s = "#";
    for(let i=0;i<6;i++){
        let r = Math.floor(Math.random()*16 );
        s+= myHexaValues[r];
    }
    console.log(s);
   
    return s;
}
const handleBtn1 = ()=>{
   
    rgb1 = hexColor();
    btn1.innerHTML = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right , ${rgb1} , ${rgb2})`;
    copyCode.innerHTML = `background-image: linear-gradient(to right , ${rgb1} , ${rgb2})`;



}
const handleBtn2 = () =>{
    rgb2 = hexColor();
    btn2.innerHTML = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right , ${rgb1} , ${rgb2})`;
    copyCode.innerHTML = `background-image: linear-gradient(to right , ${rgb1} , ${rgb2})`;

}


const copyToClipBoard = () =>{
    const text = copyCode.textContent;
    navigator.clipboard.writeText(text).then(()=>{
        alert("Copied to clipboard!!");
    }).catch(err =>{
        alert("Not Copied :/");
    });
    

}
btn1.addEventListener("click" , handleBtn1)
btn2.addEventListener('click' , handleBtn2);

copyCode.addEventListener('click' , copyToClipBoard);

