alert("My First JavaScript");

//封装一个代替getElementById()的方法
function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
//	typeof(id)==="string"?  判断参数类型是否为字符串
//	是就输出ID参数 
//	ruturn返回后面数据
}

//定时器和索引设置为全局 
var index=0,
	timer=null,  /*定时器*/
	pics=byId("banner").getElementsByTagName("div"), /* 获取ID为banner下的div标签*/
	/*dots=byId("dots").getElementsByTagName ("span"),
	prev=byId("prev"),
	next=byId("next"),*/
	len=pics.length,  /*获取ID为banner下的div标签个数*/
	/*menu=byId("menu-content"),	
	subMenu=byId("sub-menu"),
	innerBox=subMenu.getElementsByClassName("inner-box"),
	menuItems=menu.getElementsByClassName( "menu-item");*/
	
function slideImg(){   /*设置函数*/
	设置函数
	var main=byId("top");
	main.onmouseover = function(){
		//鼠标滑过清除定时器
		if(timer)clearInterval(timer);    /* clearInterval:清除定时器*/
		
	}
	main.onmouseout = function(){
		//离开继续定时器
		timer= setInterval(   /*setInterval：间隙调用:即每隔一段时间调用  setTimeout：超时调用：即多久之后调用*/
			function(){
			index++;  /*利用索引切换到下一个div*/
			if(index>=len){
				index=0;  
			}
		changeImg(index);    /*当在第几个div中调用切换图片的函数*/ 
			},1000    /*3000即每隔3秒调用*/
		);
	}
	
	//自动在main触发事件
	main.onmouseout();
	
	
	for(var d=0;d<len;d++){
		dots[d].id=d;
		dots[d].onclick=function(){
			index=this.id; 
			
			changeImg();
		}
		
	}
	/*
	next.onclick=function(){
		index++;
		if(index>=len) index=0;
		changeImg();
		
	}
	
	prev.onclick=function(){
		index--;
		if(index<0) index=len-1;
		changeImg();
		
	}*/
	
//	导航菜单
	/*	for(var m=0;m<menuItems.length;m++){
			menuItems[m].setAttribute("data-index",m);			
			menuItems[m].onmouseover=function(){
				subMenu.className="sub-menu";
				var idx=this.getAttribute("data-index");
				for(var j=0;j<innerBox.length;j++){
					innerBox[j].style.display="none";
					menuItems[j].style.background ="none"
				}
				menuItems[idx].style.background= "rgba(255,255,255,0.1)";
				innerBox[idx].style.display="block";
				
			}
		}
		
	menu.onmouseout = function(){
		subMenu.className = "sub-menu hide";
	}
	subMenu.onmouseover=function(){
		this.className = "sub-menu";
	}
	subMenu.onmouseout=function(){
		this.className ="sub-menu hide";
	}
}
*/
//切换图片
function changeImg(){
	//遍历banner下所有的div，将其隐藏
	for(var i=0;i<len;i++){
		pics[i].style.display="none"; /*设置所有块级元素隐藏*/
//		dots[i].className="";
	}
	//根据index索引找到当前div，将其显示
	pics[index].style.display="block";  /*设置当前块级元素可见*/
//	dots[index].className="active ";
}


slideImg();  /*调用函数*/ 