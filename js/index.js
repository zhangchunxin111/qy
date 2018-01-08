let inenr=document.querySelector(".bannerinner")
console.log(inenr)
		let item=document.querySelectorAll(".banner-item")
		console.log(item)
		let l=document.querySelectorAll(".banner-item").length
		let n=0
		let st=setInterval(function(){
			n++;
			if(n==1){
				inenr.style.transition="all 1s"
			}
			if(n==l){
				n=0
			}
			inenr.style.marginLeft=-n*1519+"px"
		},3000)
		inenr.addEventListener("transitionend",function(){
			if(n==4){
				inenr.style.transition="none";
				inenr.style.marginLeft=0;
				n=0
			}
		})