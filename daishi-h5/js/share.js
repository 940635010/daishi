/*
        date:未来的时间，
        style: 样式类名,
        pre: 前缀
    */



function checkTime(i) { //将0-9的数字前面加上0，例1变为01 
    return i < 10 ? "0" + i : i
}


function TimeCount(options) {

    this.dom = document.createElement("div"),
        this.parent = options.parent;
    this.date = options.date || new Date();
    this.style = options.style;
    this.pre = options.pre;
    this.dot = options.dot
    this.init(); //初始化数据

}


TimeCount.prototype.init = function () {

    this.dom.classList.add("times")
    this.dayDom = document.createElement("div");

    var dot = document.createElement("span");
    dot.classList.add("dot")
    var text = this.dot ? document.createTextNode(this.dot) : document.createTextNode(":")
    dot.appendChild(text)

    if (this.style) {
        this.dayDom.classList.add(this.style)
    } else {
        this.dayDom.classList.add("timeItem")
    }
    this.hourDom = this.dayDom.cloneNode();
    this.minuteDom = this.dayDom.cloneNode();

    var {
        days,
        hours,
        minutes
    } = this.updateTime()
    this.render(days, hours, minutes)

    this.dom.appendChild(this.dayDom)
    this.dom.appendChild(dot.cloneNode(true))
    this.dom.appendChild(this.hourDom)
    this.dom.appendChild(dot.cloneNode(true))
    this.dom.appendChild(this.minuteDom)

    this.parent.appendChild(this.dom)

    //开启定时

    this.time = setInterval(() => {

        var {
            days,
            hours,
            minutes
        } = this.updateTime()
        this.render(days, hours, minutes)

    }, 1000)


}

TimeCount.prototype.render = function (days, hours, minutes) {

    this.dayDom.innerHTML = checkTime(days) + "天";
    this.hourDom.innerHTML = checkTime(hours) + "时";
    this.minuteDom.innerHTML = checkTime(minutes) + "分"



}

TimeCount.prototype.updateTime = function () {

    var leftTime = (new Date(this.date)) - (new Date()); //计算剩余的毫秒数 
    var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
    var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时 
    var minutes = parseInt(leftTime / 1000 / 60 % 60, 10); //计算剩余的分钟 
    return {
        days,
        hours,
        minutes
    }

}


/* new TimeCount({
    parent: document.getElementsByClassName("time1")[0],
    date: "2020-06-01"
})

new TimeCount({
    parent: document.getElementsByClassName("time2")[0],
    date: "2020-06-07"
}) */

/* 轮播图swiper */

var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: true,
    autoplay: {
        disableOnInteraction: false
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

$('.tab span').on('click', function () {
    var index = $(this).index()
    $(this).addClass('show1').siblings().removeClass('show1')
    $('.tab-items').eq(index).addClass('show2').siblings().removeClass('show2')
})
$('.hot-tab-title-item').on('click', function () {
    var index = $(this).index()
    $(this).addClass('show').siblings().removeClass('show')
    $('.hot-tab-content-item').eq(index).addClass('current').siblings().removeClass('current')
})

$('.chunji-tab span').on('click', function () {
    var index = $(this).index()
    $(this).addClass('show1').siblings().removeClass('show1')
    $('.chunji-tab-items').eq(index).addClass('show2').siblings().removeClass('show2')
})
$('.hot-tab-title-item').on('click', function () {
    var index = $(this).index()
    $(this).addClass('show').siblings().removeClass('show')
    $('.hot-tab-content-item').eq(index).addClass('current').siblings().removeClass('current')
})


/* zhezhao */
function showdiv() {
    document.getElementById("bg").style.display = "block";
}

function hidediv() {
    document.getElementById("bg").style.display = 'none';
}
document.getElementById("bgone").addEventListener('click', function (e) {
    document.getElementById("bg").style.top = e.pageY - e.clientY + "px";
})
document.getElementById('bg').addEventListener('touchmove', function (e) { 
    e.preventDefault(); 
    e.stopPropagation();
},false) 

/* 商务通 */
$('.kefu').on('click', function () {
    window.open(
        'http://ddt.zoosnet.net/LR/Chatpre.aspx?id=DDT72038452&lng=cn',
        "newwindow",
        "alwaysRaised=yes, height=600,width=800,top=100,left=300,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no,z-look=yes"
    );
    return false;
})

// liuyan
new Select({
    position:$('.liuyan-select1'),
    arr:["年级","幼儿","一年级","二年级","三年级","四年级","五年级","六年级","初一","初二","初三","高一","高二","高三"],
    width:'45%',
    height:'35px',
    drop:'90px'
})
$('.liuyan-btn').on('click',function(){
    $('.liuyan').css({'display':'none'})
})
$('.ly-bnt').on('click',function(){
    $('.liuyan').css({'display':'block'})
})