import{m as v,o as g,c as _,F as h,a as r}from"./index.acc7403b.js";const u=r("video",{class:"layer",src:"",muted:"","webkit-playsinline":"",playsinline:"","x5-playsinline":"",style:{left:"1000%"}},null,-1),m=r("canvas",{id:"canvaselement",width:"1920",height:"1080"},null,-1),y={__name:"test",setup(p){return v(()=>{const e=document.querySelector("video");console.log(e);const o=t=>{console.log(t),"srcObject"in e?(e.src="",e.srcObject=t):e.src=URL.createObjectURL(t),e.play()};var i={audio:!1,video:{facingMode:"environment"}};const s=t=>{console.error(t)};navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(i).then(o,s):navigator.getUserMedia?navigator.getUserMedia(i,o,s):a(new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6253\u5F00\u6444\u50CF\u5934"));const n=document.querySelector("canvas");n.height=window.innerHeight,n.width=window.innerWidth;var c=n.getContext("2d",{alpha:!1});function l(t){c.drawImage(t,0,0,n.width,n.height)}var d=60;window.setInterval(()=>{l(e)},1e3/d)}),(e,o)=>(g(),_(h,null,[u,m],64))}};export{y as default};