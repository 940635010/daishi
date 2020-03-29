//胶靴
$('.list-li').on('click',function(){
    var index=$(this).index();
	// console.log(index);
	$(this).addClass("active").siblings().removeClass("active");
    $(".step-content").eq(index).addClass("show").siblings().removeClass("show");
})

// 戴氏资讯
$('.infor-list').on('click',function(){
    var index=$(this).index();
	// console.log(index);
	$(this).addClass("nav-active").siblings().removeClass("nav-active");
    $(".l-text").eq(index).addClass("infor-show").siblings().removeClass("infor-show");
})


