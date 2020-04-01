//胶靴
$('.list-li').on('click',function(){
    var index=$(this).index();
	// console.log(index);
	$(this).addClass("active").siblings().removeClass("active");
    $(".step-content").eq(index).addClass("show").siblings().removeClass("show");
    $('.step-line').eq(index).addClass('flow').siblings().removeClass("flow");
    console.log($('.step-line').eq(index))
})

// 戴氏资讯
$('.infor-list').on('click',function(){
    var index=$(this).index();
	// console.log(index);
	$(this).addClass("nav-active").siblings().removeClass("nav-active");
    $(".l-text").eq(index).addClass("infor-show").siblings().removeClass("infor-show");
})

$('.xb-grow1').delegate('div','click',function(){
    $(this).removeClass('xb-grow12')
    $(this).addClass("xb-grow11")
    $(this).siblings().removeClass('xb-grow11')
    $(this).siblings().addClass("xb-grow12")
})
 $('#fifteen').on('click',function(){
     $('#seeblue').css('display','block')
     $('.xb-grow2').css('display','none')
     $('.xb-grow3').css('display','none')
     $('#anotherpic').css('display','none')
     $('#innerbtn').css('display','none')
     $('#innerbt').css('display','block')
 }) 
 $('#eleven').on('click',function(){
     $('#seeblue').css('display','none')
     $('.xb-grow2').css('display','flex')
     $('.xb-grow3').css('display','flex')
     $('#anotherpic').css('display','none')
     $('#innerbtn').css('display','none')
     $('#innerbt').css('display','none')
 }) 
 $('#twelve').on('click',function(){
     $('#seeblue').css('display','none')
     $('#anotherpic').css('display','block')
     $('.xb-grow2').css('display','none')
     $('.xb-grow3').css('display','none')
     $('#innerbtn').css('display','block')
     $('#innerbt').css('display','none')
 })

