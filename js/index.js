$(document).ready(function(){
	/*头部导航切换*/
	$("div.tabs span").click(function() {
		$("div.tabs span").removeClass("active");
		$("div.tabs span").find("a").css("color","#FFFFFF");
		$(this).addClass("active");
		$(this).find("a").css("color","#51B7B0");
		$(".tab_content").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
	/*点击保存按钮*/
	$(".bcBtn").click(function(){
		var r = confirm("确定保存该选课记录吗?")
		if (r == true) {
			$(this).hide();
		    $(".tjBtn").hide();
		    $(".chBtn").show();
		} 
		
	});
	/*点击提交按钮*/
	$(".tjBtn").click(function() {
		var r = confirm("确定提交该选课吗?")
		if (r == true) {
			$(this).hide();
		    $(".bcBtn").hide();
		    $(".chBtn").show();
		} 
	});
	/*点击撤回按钮*/
	$(".chBtn").click(function () {
		var r = confirm("撤回后将取消原有的选择,确定要进行撤回吗?")
		if (r == true) {
			$(this).hide();
		    $(".bcBtn").show();
		    $(".tjBtn").show();
		} 
	});
	/*选课*/
	$(document).on("click",".changeCource",function(e) {
		if($(this).hasClass("active")) {
			$(this).attr("src","img/选择（未选）.png");
			$(this).removeClass("active");
			$(this).parent().parent().parent().parent().css("border-color","");
		}else{
			$(this).attr("src","img/选择（选中）.png");
			$(this).addClass("active");
			$(this).parents().css("border-color","red");
		}
		
	});
	$(document).on("click",".course-bottom",function(e) {
		if ($(this).hasClass("active")) {
			$(this).find(".xq").text("详情");
			$(this).find("img").attr("src","img/详细（下拉）.png");
			$(this).parents(".oneCourse").find(".courseTs").css("height","40px");
			$(this).removeClass("active");
		}else {
			$(this).find(".xq").text("收起");
			$(this).find("img").attr("src","img/收起.png");
			$(this).parents(".oneCourse").find(".courseTs").css("height","auto");
			$(this).addClass("active");
		}
		
	});
})