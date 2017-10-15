function $(select){
	return new aa(select)
}
function aa(select){
	if(typeof select=='string'){
		let reg=/^<[a-z][a-z1-6]{0,7}>$/;
		if(reg.test(select)){
			this[0]=document.createElement(select.slice(1,-1))
			this.length=1;
		}else{
			let obj=document.querySelectorAll(select);
			for(let i=0;i<obj.length;i++){
				this[i]=obj[i];
			}
			this.length=obj.length;
		}
		
	}else if(typeof select=='function'){
		document.addEventListener('DOMContentLoaded', function(){
			aa();
		}, false)
	}else if(typeof select=='object' && select.nodeType==1){
		this[0]=select;
		this.length=1;
	}
}
aa.prototype.each=function(callback){
	for(let i=0;i<this.length;i++){
		callback(i,this[i]);
	}
}
aa.prototype.css=function(attr){
	this.each(function(index,obj){
		for(let j in attr){
			obj.style[j]=attr[j];
		}
	})
	return this;		
}
aa.prototype.html=function(value){
	this.each(function(index,obj){
		obj.innerHTML=value;
	})
	return this;
}
aa.prototype.click=function(attr){
	this.each(function(index,obj){
		obj.addEventListener('click',function(){
			attr.call(obj);
		})
	})
	return this;
}
aa.prototype.addClass=function(classes){
	this.each(function(index,obj){
		obj.classList.add(classes);
	})
	return this;
}
aa.prototype.removeClass=function(calsses){
	this.each(function(index,obj){
		obj.classList.remove(calsses);
	})
	return this;
}
aa.prototype.appendTo=function(div){
	let parent=document.querySelectorAll(div);
	this.length=parent.length;
	let element=this[0];
	for(let i=0;i<parent.length;i++){
		let temp=element.cloneNode(true);
		this[i]=temp;
		parent[i].appendChild(temp);
	}
	console.log(this);
	return this;
}
aa.prototype.attr=function(name,value){
	this.each(function(index,obj){
		if(value==='undefined'){
			obj.getAttribute(name);
		}
		obj.setAttribute(name,value);
	})
	return this;
}

