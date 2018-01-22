{
	let imgs=document.querySelectorAll('.el-carousel .carousel')
	let pagers=document.querySelectorAll('.indicators ul li')
	let banner=document.querySelector('.el-carousel')
	let xiayi=document.querySelector('.arrowright')
	let shangyi=document.querySelector('.arrowleft')
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				pagers[i].classList.remove('active');
				imgs[i].classList.remove('active')
			}
			this.classList.add('active');
			imgs[index].classList.add('active')
			n=index
		}
	})
    let n=0
	function bannerFn(dir){
		if(dir){
			n--
		}else{
		n++;
		}
		if(n===-1){
			n=imgs.length-1
		}
		if(n===imgs.length){
			n=0
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].classList.remove('active')
			pagers[i].classList.remove('active');
		}
		pagers[n].classList.add('active');
	    imgs[n].classList.add('active')
	}
	let st=setInterval(bannerFn,2000)
	banner.onmouseover=function(){
		clearInterval(st)
	}
	banner.onmouseout=function(){
		st=setInterval(bannerFn,2000)
	}
	xiayi.onclick=function(){
		bannerFn()
	}
	shangyi.onclick=function(){
		bannerFn()
	}
	let flat=true
	xiayi.onclick=function(){
		if(flat){
			flat=false
			bannerFn()
		}
	}
	shangyi.onclick=function(){
		if(flat){
			flat=false
			bannerFn(1)
		}
	}
	imgs.forEach(function(ele){
		ele.addEventListener("transitionend",function(){
			flat=true
		})
	})
}
{
	let inner=document.querySelector(".cols1")
	console.log(inner)
		let m=0;
	function starfn(){
		m++;
		if (m%2==0){
		inner.style.transform="translateX(-1175px)"
			
		}else{
		inner.style.transform="translateX(0)"

		}
	}
	let t=setInterval(starfn,2000);
	inner.onmouseover=function(){
		clearInterval(t)
	}
	inner.onmouseout=function(){
		t=setInterval(starfn,2000);
	}
}
//返回顶部
{
	let toptop=document.querySelector(".topbar")
	window.onscroll=function(){
        let st=document.documentElement.scrollTop;
		
		 if(st>1000){
				 	toptop.style.display="block"
				 }else{
				 	toptop.style.display="none"
				 }
	}
   toptop.onclick=function(){
        let st=document.documentElement.scrollTop;
        let speed=st*30/500;
        let t=setInterval(function () {
            st-=speed;
            if(st<=0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },30)
    }
}
//{
//	let inenr=document.querySelector(".bannerinner")
//		let item=document.querySelectorAll(".item")
//		console.log(item)
//		let l=document.querySelectorAll(".item").length
//		let n=0
//		let st=setInterval(function(){
//			n++;
//			if(n==1){
//				inenr.style.transition="all 1s"
//			}
////			if(n==l){
////				n=0
////			}
//			inenr.style.marginLeft=-n*400+"px"
//		},2000)
//		inenr.addEventListener("transitionend",function(){
//			if(n==8){
////				alert(1)
//				inenr.style.transition="none";
//				inenr.style.marginLeft=0;
//				n=0
//			}
//		})
//}

