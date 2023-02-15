const getcolor = () => {
    const randomNuber = Math.floor(Math.random()*16777215);
    const randomColor = "#"+randomNuber.toString(16);
    document.body.style.backgroundColor=randomColor
    document.getElementById("color-code").innerHTML=randomColor
}
document.getElementById('btn').addEventListener(
    "click",
    getcolor
)
getcolor()