;(function(){
    var _global=function(){
        return this
    }()
    
    function Select(obj){
        this.position = obj.position
        this.arr=obj.arr
        this.wid=obj.width
        this.hei=obj.height
        this.drop=obj.drop
        this.add()
        var _this=this
        this.position.on('click','.select-active',function(){
            _this.click()
        })
        this.position.on('click','.select-child',function(){
            _this.onchild(this)
        })
    }
    // 初始化
    Select.prototype.add=function(){
        var len=this.arr.length
        var _height=parseInt(this.hei)/3
        this.position.addClass('select-box').css({'width':this.wid,'height':this.hei,'line-height':this.hei})
        $("<img class='select-img' src='images/Arrow.png'>").appendTo(this.position).css({'right':'3px','top':_height,'width':_height})
        $("<div class='select-active'></div>").appendTo(this.position).html(this.arr[0])
        $("<div class='select-childbox'></div>").appendTo(this.position).css({'overflow':'auto','height':this.drop})
        for(let i=0;i<len;i++){
            $("<div></div>").appendTo(this.position.children('.select-childbox')).html(this.arr[i]).addClass('select-child')
        }
    }
    // 打开选项
    Select.prototype.click=function(){
        if(this.position.css('overflow')=='hidden'){
            this.position.css({'overflow':'visible','height':'100%'})
        }else{
            this.position.css({'overflow':'hidden','height':this.hei})
        }
    }
    // 点击展开的元素
    Select.prototype.onchild=function(_this){
        if(this.position.css('overflow')!='hidden'){
            this.position.css({'overflow':'hidden','height':this.hei})
        }
        this.position.children('.select-active').eq(0).html(_this.innerHTML)
    }
    !('Select' in _global) && (_global.Select=Select)
    
})()
// 传对象过去
// 需要传position盒子的位置比如：$('#box')
// arr数组arr:["幼儿1","一年级","二年级","三年级","四年级","五年级","六年级","初一","初二","初三","高一","高二","高三"]
// 要求的宽高width:'100px',height:'20px'
// 传的是点击下拉的宽度drop:'200px'，超出的隐藏
