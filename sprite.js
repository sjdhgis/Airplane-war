var explosionImg=[];

for(var i=1;i<=19;i++){
	var str=`images/explosion${i}.png`;
	var img=new Image();
	img.src=str;
	explosionImg.push(img)
}

//爆炸构造函数
function Explosion(x,y,width,height){
	this.x=x;
	this.y=y;
	this.width = width;
	this.height = height;
	this.imgArr = explosionImg;
	//计数器
	this.num=0;
	//改变计数器的值
	this.move=function(){
		if(this.num<18){
			this.num++
		}else{
			arrRemove(explosionArr,this);
		}
	}
	//爆炸图绘制在画布上
	this.draw=function(){
		ctx.drawImage(this.imgArr[this.num],this.x,this.y,this.width,this.height);
		this.move()
	}
}
//子弹构造函数
function Bullet(direction,x,y,width,height,speed){
	this.direction=direction;
	this.x=x;
	this.y=y;
	this.width = width;
	this.height = height;
	this.speed = speed;
	this.img=img;
	
	this.move=function(){
		if(this.direction===0){
			this.y-=this.speed
		}else if(this.direction===1){
			this.y-=this.speed;
			this.x-=this.speed
		}else if(this.direction===2){
			this.y-=this.speed;
			this.x+=this.speed
		}
	}
	//子弹绘制绘制在画布上
	this.draw=function(){
		ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
		this.move();
	}
}