
// var obj = {
//     1:"obj1",
//     2:"obj2"
// }
// str= `<li class="list">123</li><li class="list">${obj[1]}</li>`
// $('ul').append(str)
// console.log($('ul'))
// console.log(obj[1])

setInterval(() => {
    console.log('aa')
}, 2000);
// for(var i =0 ;i<=1000;i++){
//     console.log('b')
// }
// setInterval(() =>{
//     console.log('b')
// },1000)

// setTimeout(() => {
//     console.log('bb')
// }, 2000);

$(this).css({propertyName}, value);
$('li').click(function(){
    $(this).css({"background":"red"});
})
