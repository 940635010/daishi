// 收费NEW的select
new Select({
    position:$('#charge-select1'),
    arr:["年级","幼儿","一年级","二年级","三年级","四年级","五年级","六年级","初一","初二","初三","高一","高二","高三"],
    width:'148px',
    height:'60px',
    drop:'180px'
})
new Select({
    position:$('#charge-select2'),
    arr:["科目",'语文','数学','英语','物理','化学','语言表演','情商美术'],
    width:'133px',
    height:'60px',
    drop:'180px'
})
new Select({
    position:$('#charge-select3'),
    arr:["班级",'一对一','3~6人精品','15人大师班'],
    width:'133px',
    height:'60px',
    drop:'180px'
})
window.onload=function(){
    if(sessionStorage.getItem("key")){
        $('#shoufei-box').css('display','none')
    }
}
$('.shoufei-i').on('click',function(){
    console.log($('#shoufei-box').css('display'))
    if($('#shoufei-box').css('display')=='block'){
        sessionStorage.setItem("key", "ture");
        $('#shoufei-box').css('display','none')
    }
})

new Select({
    position:$('.liuyan-select1'),
    arr:['年级','小学','初一 | 初二','初三','高一 | 高二','高三'],
    width:'234px',
    height:'57px',
    drop:'180px'
})
$('.close-btn').on('click',function(){
    $('#liuyan-box').css({'display':'none'})
})

$('.footer-inp').children('p').on('click',function(){
    $('#liuyan-box').css({'display':'block'})
})