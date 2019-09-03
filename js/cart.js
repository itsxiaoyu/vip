var n=$("#input").val()
$(".max").click(function(){
    n++;
  $(this).prev().children().val(n);
  var p=$(this).parent().parent().prev().children().children().html();
  p=p.slice(2)
  var sum=(p*n).toFixed(2);
  $(this).parent().parent().next().children().html(`￥${sum}`)
  subtotal()
})
$(".min").click(function(){
    if(n==0){
        n=0;
    }else{
        n--;
    }
    $(this).next().children().val(n);
    var p=$(this).parent().parent().prev().children().children().html();
    p=p.slice(2)
    var sum=(p*n).toFixed(2);
    $(this).parent().parent().next().children().html(`￥${sum}`) 
    subtotal()  
})

function subtotal(){
  var subs=document.querySelectorAll(".subtotal_item>p")
  var subtotal=0
  for(var sub of subs){
    var s=parseFloat(sub.innerHTML.slice(1));
    subtotal+=s;
    var total=subtotal.toFixed(2);
  }
  $(".payment_right a").html(`￥${total}`);
}
// 删除
$(".action_item>p>a").click(function(){
  $(this).parent().parent().parent().css("display","none");
})