"use strict";
// 漢堡鍵
$(".hamburger").click(function () {
	if ($(this).hasClass("open")) {
		$(this).removeClass("open");
		$(".menu").slideUp(300);
	} else {
		$(this).addClass("open");
		$(".menu").slideDown(300);
	}
});

// 手風琴
$(".main-title-box").click(function () {
	if ($(this).children(".fa-angle-down").hasClass("rotate")) {
		$(this).children(".fa-angle-down").removeClass("rotate");
		$(this).parents(".main-menu").children("ul").slideUp(300);
	} else {
		$(this).children(".fa-angle-down").addClass("rotate");
		$(this).parents(".main-menu").children("ul").slideDown(300);
	}
});

// 導覽列
// $(".main-menu").click(function () {
// 	if ($(this).hasClass("open")) {
// 		$(this).removeClass("open");
// 		$(this).children("ul").hide();
// 		$(".main-menu").css("background-color", "#84b356");
// 	} else {
// 		$(".main-menu").removeClass("open");
// 		$(this).addClass("open");
// 		$(".main-menu").children("ul").hide();
// 		$(this).children("ul").show();
// 		$(".main-menu").css("background-color", "#84b356");
// 		$(this).css("background-color", "#a1cc77");
// 	}
// });

// $(document).click(function (event) {
// 	var m_con = $(".drop-down-menu");
// 	if (!m_con.is(event.target) && m_con.has(event.target).length === 0) {
// 		$(".drop-down-menu").children(".main-menu").children("ul").hide();
// 		$(".main-menu").css("background-color", "#84b356");
// 		$(".main-menu").removeClass("open");
// 	}
// });

$(".btn-box")
	.children("button")
	.click(function () {
		$(this).parents(".btn-box").children("button").removeClass("active");
		$(this).addClass("active");
	});


// 案場介紹、案場現場
$(".introduce").click(function () {
	$(".intr-cont").show();
	$(".pic-cont").hide();
});

$(".picture").click(function () {
	$(".intr-cont").hide();
	$(".pic-cont").show();
});

// 最新消息、活動快訊
$(".new").click(function () {
	$(".new-cont").show();
	$(".acti-cont").hide();
});

$(".activity").click(function () {
	$(".new-cont").hide();
	$(".acti-cont").show();
});

// 下拉選單
$(".select-box").click(function () {
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		$(this).parents(".select").children(".option-box").slideUp(100);
	} else {
		$(this).addClass("active");
		$(this).parents(".select").children(".option-box").slideDown(100);
	}
});

$(document).click(function (event) {
	var y_con = $(".select-year");
	if (!y_con.is(event.target) && y_con.has(event.target).length === 0) {
		$(".select-year").children(".option-box").slideUp(100);
		$(".select-year").children(".select-box").removeClass("active");
	}
});

$(document).click(function (event) {
	var d_con = $(".select-declare");
	if (!d_con.is(event.target) && d_con.has(event.target).length === 0) {
		$(".select-declare").children(".option-box").slideUp(100);
		$(".select-declare").children(".select-box").removeClass("active");
	}
});

// 宣告專區顯示更多
$(".declare-box")
	.children(".more")
	.click(function () {
		$(this)
			.parents(".declare-box")
			.children("ul")
			.children(".hide-list")
			.slideDown(200);
		$(this).hide();
		$(this).parents(".declare-box").children(".less").show();
		$(this).parents(".declare-box").children(".less").css("display", "block");
		var dH = $(this).parents(".table-content").height() + 30;
		$(this).parents(".table-content").children(".detail-btn").css("height", dH);
	});
$(".declare-box")
	.children(".less")
	.click(function () {
		$(this)
			.parents(".declare-box")
			.children("ul")
			.children(".hide-list")
			.slideUp(200);
		$(this).hide();
		$(this).parents(".declare-box").children(".more").show();
		$(this)
			.parents(".table-content")
			.children(".detail-btn")
			.css("height", "200px");
	});

$(".drop-down-icon").click(function () {
	if ($(this).children(".straight").hasClass("rotate")) {
		$(this).children(".straight").removeClass("rotate");
		$(this).parents(".drop-down-qa").children(".cont").slideDown(300);
	} else {
		$(this).children(".straight").addClass("rotate");
		$(this).parents(".drop-down-qa").children(".cont").slideUp(300);
	}
});

// footer在最下方
var mH =
	$(window).height() - $("header").height() - $("footer").height() - 120 - 32;
$(".understand").css("min-height", mH);
console.log("window height:" + $(window).height());
console.log("header height:" + $("header").height());
console.log("footer height:" + $("footer").height());
console.log(mH);

var Bswiper = new Swiper(".banner", {
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".banner-sp",
		clickable: true,
	},
});

// 滑鼠滑入後停止輪播
$(".banner").mouseenter(function () {
	Bswiper.autoplay.stop();
});
$(".banner").mouseleave(function () {
	Bswiper.autoplay.start();
});
