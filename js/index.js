window.onload=function(){
    var oUl=document.getElementById('mul');
    var aLi=oUl.getElementsByTagName('li');
    var oShow=document.getElementsByClassName('menu_show');
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onclick=function(){
            for(var i=0;i<aLi.length;i++){
                oShow[i].style.display='none';
            }
            oShow[this.index].style.display='block';
        }
    }
};