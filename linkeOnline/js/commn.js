window.onload=function(){
	var bodyH= $(window).height();			
	var headH=$(".store-head").outerHeight();
	var bannerH=$("#banner").outerHeight();
	var notice=$(".notice").outerHeight();
	var menuH=$(".goods-menu").outerHeight();
	var wrap=$(".goods-wrap").outerHeight();
	var footerH=$(".goods-car").outerHeight();			
	wrap=bodyH-(headH + bannerH + notice + menuH + footerH);
	var hH=$(".g-right h2").outerHeight()
	var list=wrap-hH;
	$(".goods-wrap").css("height",wrap+"px");
	$(".g-left").css("height",wrap+"px");
	$(".g-right").css("height",wrap+"px");
	$(".goods-list").css("height",list+"px");
}
$(document).ready(function() {
			var pre=$(".sold i");
			var preW=$(".sold em");			
			for(i=0;i<pre.length;i++){
				var p=parseInt(pre.eq(i).text());
				for(j=i;j<preW.length;j++){
					preW.eq(j).css("width",p+"%");
				}					
				//console.log(p);
			}	
			$(".c-img em").click(function(event) {
								
				if($(".c-wrap").hasClass('none-img')){
					return false;					
				}else{
					$(".gd-list").slideToggle();					
				}
			});
		});