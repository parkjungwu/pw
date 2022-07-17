$(document).ready(function() {
//	var form = new FormData();
//	
//	form.append("Param", "{\"Name\":\"Jung\",\"Number\":\"122212\",\"Test\":\"테스트데이터1\",\"Test2\":\"테스트데이터2\"}");
//
//	var settings = {
//	  "url": "http://http://192.168.0.7:8080/TRACER/",
//	  "method": "POST",
//	  "timeout": 0,
//	  "processData": false,
//	  "mimeType": "multipart/form-data",
//	  "contentType": false,
//	  "data": form
//	};
//
//	$.ajax(settings).done(function (response) {
//	  console.log(response);
//	});
//	
//	$.ajax(settings).fail(function (response){
//		console.log("FAIL");
//	});
	
	/* $.ajax({
	    type: 'POST',
	    url: 'http://localhost:8080/KJBANK/CallRestAPI.do',
	    data: { },
	    success: function(data) {
	    	//$("#resultText").html(data);
	    	$("#resultText").text(data);
	    },
	    error: function(data) {
	    	//$("#resultText").html(data.responseText);
	        $("#resultText").text(data.responseText);
	    }
	});
	
	$(".resetApiV").css("display",""); */
	
	
	var settings = 'toolbar=0, status=0, scrollbars=no, height=600, width=400';
	var target = 'popupmsg.jsp'
	$(".waitPage").css("display","none");
	
//	setTimeout(function(){
//		window.open(target, settings, 'about:blank', 'popup_name');
//		$(".waitPage").css("display","none");
//	}, 10000);
	
	/* $.load("url", function(){
		popup.location = target;
	}); */
	
	Kakao.init('20a35ef4c88052558a0a47c7cc835042'); //앱 키
	
	// 창 닫기, 새로고침 구분
	window.onunload = function() {
	    console.log('unload');
	    kill(true);
	}
	  
	$(function() {
	  kill(false);
	});
	  
	function kill(isClose) {
	  $.ajax({
	      url: '/kill?isClose=' + isClose,
	      method: 'get'
	  }).done(function(resp) {
	      //do nothing
	  });
	}
	
	// 브라우저 새로고침, 닫힘 탐지
	 window.addEventListener('beforeunload', (event) => {
         // 명세에 따라 preventDefault는 호출해야하며, 기본 동작을 방지합니다.
         event.preventDefault();
         
         $.ajax({
        	url: '' 
         });
         
         console.log("브라우저 닫힘");
         // 대표적으로 Chrome에서는 returnValue 설정이 필요합니다.
         event.returnValue = '';
     });
	
	
});