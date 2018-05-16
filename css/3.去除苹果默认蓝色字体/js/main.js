// JavaScript Document
window.onload=function(){
	document.getElementsByTagName("html")[0].style.fontSize=document.documentElement.clientWidth/2+"px";
    var aImg=document.getElementsByClassName("pic");
	var viewWidth=document.documentElement.clientWidth;
	
	for(var i=0;i<aImg.length;i++)
	{
		aImg[i].style.width=viewWidth+"px";
		aImg[i].style.opacity=100;
	}
	


	function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}
		else{
			return getComputedStyle(obj,false)[attr];
		}
	}
	
}
