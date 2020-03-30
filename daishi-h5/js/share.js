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


new TimeCount({
    parent: document.getElementsByClassName("time1")[0],
    date: "2020-06-01"
})

new TimeCount({
    parent: document.getElementsByClassName("time2")[0],
    date: "2020-06-07"
})

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