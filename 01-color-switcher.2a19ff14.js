document.querySelector("button[data-start]").addEventListener("click",(()=>{intervalId=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),document.querySelector("button[data-stop]").addEventListener("click",(()=>{clearTimeout(intervalId)}));
//# sourceMappingURL=01-color-switcher.2a19ff14.js.map
