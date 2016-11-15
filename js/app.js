/**
 * Created by Administrator on 2016/11/15.
 */
(function(){
   $('.more').on('click',function(){
       if( $('#guide >ul').hasClass('active')){
         $('#guide >ul').removeClass("active");
       }else{
           $('#guide >ul').addClass("active");
       }
   });
})();