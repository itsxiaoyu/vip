window.onload=function(){
    var oT1=document.getElementById('t1');
    var oT2=document.getElementById('t2');
    var oTshow1=document.getElementById('tab1');
    var oTshow2=document.getElementById('tab2');

    var oExtent=document.getElementById('extent');
    var oEshow=document.getElementById('eShow');

    oT1.onclick=function(){
        oT2.className='';
        oTshow2.style.display='none';
        oTshow1.style.display='block';
        oT1.className='active';
    }
    oT2.onclick=function(){
        oT1.className='';
        oTshow1.style.display='none';
        oTshow2.style.display='block';
        oT2.className='active';
    }
   
    oExtent.onclick=function(){
        if( oEshow.style.display=='none'){
            oExtent.innerHTML='收起';
            oEshow.style.display='block';     
        }
          else{
            oExtent.innerHTML='更多';
            oEshow.style.display='none';
           
          }  
    }
};
