function Block() {
	this.upDivWrap = null;
	this.downDivWrap = null;
	this.downHeight =  baseObj.randomNum(100,500);
	this.gapHeight = baseObj.randomNum(100,260);
	this.upHeight = 900 - this.downHeight - this.gapHeight;

	// 用来生成Div的方法 1743
	this.createDiv = function(url, height, positionType, left, top,bottom) {
		let newDiv = document.createElement("div");
		newDiv.style.width = "180px";
		newDiv.style.height = height;
		newDiv.style.position = positionType;
		newDiv.style.left = left;
		newDiv.style.top = top;
		newDiv.style.bottom = bottom;
		newDiv.style.backgroundImage = url; 
		newDiv.style.backgroundSize = "100% 100%"; 
		newDiv.style.backgroundRepeat = "no-repeat"; 

		console.log(newDiv)
		return newDiv;
	};

	this.createBlock = function() {
		let upDiv1 = this.createDiv("url(img/up_mod.png)", this.upHeight + "px");
		let upDiv2 = this.createDiv("url(img/up_pipe.png)", "200px",);
		this.upDivWrap = this.createDiv(null, null, "absolute", "450px",0);
		this.upDivWrap.appendChild(upDiv1);
		this.upDivWrap.appendChild(upDiv2);//生成上方管道
		
		let downDiv1 = this.createDiv("url(img/down_pipe.png)", "200px");
		let downDiv2 = this.createDiv("url(img/down_mod.png)", this.downHeight +"px");
		this.downDivWrap = this.createDiv(null, null, "absolute", "450px", null, '198px');
		this.downDivWrap.appendChild(downDiv1);
		this.downDivWrap.appendChild(downDiv2); //生成下方的管道
		jsWrapBg.appendChild(this.upDivWrap);
		jsWrapBg.appendChild(this.downDivWrap);
	};
	
	this.moveBlock = function() { //控制管道移动的方法
		this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 3 + "px";
		this.downDivWrap.style.left = this.downDivWrap.offsetLeft - 3 + "px";
	};	
}
