$(document).ready(function() {
	$("#last_li").hover(function() {
		$("#list").toggle();
	});
	$(".subnav li a").each(function(index, el) {
		var num=index*48-144;
		$(this).css("background-position",""+num+"px 0")
	
	$(el).hover(function() {
		$(this).css("background-position",""+num+"px -48px")
	}, function() {
		$(this).css("background-position",""+num+"px 0")
	});
	$(".subnav li").eq(1).hover(function() {
		$(".erwei").show();
	}, function() {
		$(".erwei").hide();
	});
});
	$(".program_tools").each(function(index, el) {
		var num=-index*40;
		$(el).css("background-position",""+num+"px 0")
	});
	/*$(".circle").each(function(index, el) {
		var num=index*12.5%;
		$(el):before.css("left",""+num+"px");
		$(el):after.css("left",""+num*2+"px");
	});*/
	/*	$(".circle")hover(function() {
			$(this).css({"border-color":"#3AB94E","width":"20px","height":"20px"})
		}, function() {
			$(this).css({"border-color":"#C3EACB","width":"15px","height":"15px"})
		});*/
		$(".main_one p:last-child").hover(function() {
			$(this).css({"width":"30%"}).html("HTML+CSS基础课程1-1")
		}, function() {
			$(this).css({"width":"15%"}).html("开始学习")
		});
		$(".jquery_content").hover(function() {
			$(this).children('h4').css("font-size","14px")
		}, function() {
			$(this).children('h4').css("font-size","16px")
		});
		/*第三块*/
		$(".jquery_one").hover(function() {
			$(this).children('h4').html("加入jQuery基础课程学习，有效提高网站前端开发速度！")
			$(this).find('i').eq(0).html("2015-04-14").find('i').eq(1).html("13819人学习")
		}, function() {
			$(this).children('h4').html("jQuery基础课程").css("font-size","16px")
			$(this).find('i').eq(0).html("更新至12-14").find('i').eq(1).html("课程时长：8小时0分")
			});
		$(".jquery_two").hover(function() {
			$(this).children('h4').html("仿天猫版地狗购物网，酷炫网页定位导航特效，你值得拥有！")
			$(this).find('i').eq(0).html("2015-04-14").find('i').eq(1).html("3903人学习")
		}, function() {
			$(this).children('h4').html("网页定位导航特效")
			$(this).find('i').eq(0).html("更新至8-1").find('i').eq(1).html("课程时长：1小时0分")
			});
		/*第四块*/
		$(".main_four .jquery_four").hover(function() {
			$(this).find('h4').html("通过详细分析网站结构，以轻松、易懂的方式，让你快速学会网站布局");
			$(this).find('i').eq(0).html("2015-04-14").find('i').eq(1).html("9473人学习")
		}, function() {
			$(this).find('h4').html("企业网站综合布局实践");
			$(this).find('i').eq(0).html("更新至7-1").find('i').eq(1).html("课程时长：2小时55分")
		});$(".main_four .jquery_three").hover(function() {
			$(this).find('h4').html("Tab切换风格多样，但实现思路大同小异，教程由浅入深教你实现简洁思路的选项卡。");
			$(this).find('i').eq(0).html("2015-04-14").find('i').eq(1).html("5842人学习")
		}, function() {
			$(this).find('h4').html("Tab选项卡切换效果");
			$(this).find('i').eq(0).html("更新至4-1").find('i').eq(1).html("课程时长：1小时34分")
		});$(".main_four .jquery_two").hover(function() {
			$(this).find('h4').html("让大咖告诉您，怎样以不同方式展现网页内容，教您节约网页空间的方法。");
			$(this).find('i').eq(0).html("2015-04-14").find('i').eq(1).html("3879人学习")
		}, function() {
			$(this).find('h4').html("信息排列效果");
			$(this).find('i').eq(0).html("更新至4-1").find('i').eq(1).html("课程时长：30分")
		});$(".main_four .jquery_one").hover(function() {
			$(this).find('h4').html("让你精通CSS中三大定位机制—标准文档流、浮动及绝对定位，彻底掌握布局所有技能！");
			$(this).find('i').eq(0).html("2015-04-14").find('i').eq(1).html("12927人学习")
		}, function() {
			$(this).find('h4').html("网页布局基础");
			$(this).find('i').eq(0).html("更新至5-1").find('i').eq(1).html("课程时长：1小时30分")
		});
		/*第一块*/
		$(".main_two_content .jquery_one").hover(function() {
			$(this).find('h4').html("8小时带领大家步步深入学习标签的基础知识，掌握各种样式的基本用法。")
			$(this).find('i').eq(0).html("2015-04-14").find('i').eq(1).html("28852人学习")
		}, function() {
			$(this).find('h4').html("HTML+CSS基础课程");
			$(this).find('i').eq(0).html("更新至13-3").find('i').eq(1).html("课程时长：8小时0分")
		});$(".main_two_content .jquery_two").hover(function() {
			$(this).find('h4').html("你真的确认会使用Dreamweaver了吗？菜鸟逆袭第一步，从掌握这个工具开始！")
			$(this).find('i').eq(0).html("2015-04-14").find('i').eq(1).html("7415人学习")
		}, function() {
			$(this).find('h4').html("前端开发工具技巧介绍—DW篇");
			$(this).find('i').eq(0).html("更新至9-1").find('i').eq(1).html("课程时长：40分")
		});
		/*第二块*/
		$(".la .jquery_one").hover(function() {
			$(this).find('h4').html("做为一名Web攻程师的必备技术，让您从糊涂到明白，快速认识JavaScript。")
			$(this).find('i').eq(0).html("2015-04-14").find('i').eq(1).html("17143人学习")
		}, function() {
			$(this).find('h4').html("JavaScript入门篇");
			$(this).find('i').eq(0).html("更新至4-1").find('i').eq(1).html("课程时长：1小时30分")
		});$(".la .jquery_two").hover(function() {
			$(this).find('h4').html("JavaScript带您进入网页动态交互世界，为网页增色，为技术加分。")
			$(this).find('i').eq(0).html("2015-04-14").find('i').eq(1).html("13214人学习")
		}, function() {
			$(this).find('h4').html("JavaScript进阶篇");
			$(this).find('i').eq(0).html("更新至10-1").find('i').eq(1).html("课程时长：8小时55分")
		});
		$(window).scroll(function(event) {
                    var val=$(document).scrollTop();
                    if(val>380){
                        $("#last_fade").stop().fadeIn("slow")
                    }else{
                        $("#last_fade").stop().fadeOut("slow")
                    }
                });
		
});