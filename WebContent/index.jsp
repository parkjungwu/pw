<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>TRACER 기능 테스트</title>
<%-- <link rel=" shortcut icon" href="${pageContext.request.contextPath}/resource/images/favicon.ico">
<link rel="icon" href="${pageContext.request.contextPath}/resource/images/favicon.ico"> --%>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resource/css/style.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resource/css/style2.css">
<script src="${pageContext.request.contextPath}/resource/assets/js/jquery.min.js"></script>
<script src="${pageContext.request.contextPath}/resource/js/index.js"></script>
<!-- <script src="https://developers.kakao.com/sdk/js/kakao.js"></script> -->
<script async src="https://www.google-analytics.com/analytics.js"></script>
</head>
<body>
<script id="javascript-sdk" src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
<div style="height:0px;">
	<div class="container">
		<img alt="트레이서로고" src="${pageContext.request.contextPath}/resource/images/TRACER.png" width="200px;">
	</div>
</div>
<div class="container">
	<div class="bold18 blue mt18 resetApiV" style="display: none;">
		<span>결과값</span>
	</div>
	<div class="resetApiV" style="display: none; margin-top: 10px;">
		<span id="resultText"></span>
	</div>
</div>
<!-- <div style="float: right;">
	<a id="channel-add-button" href="#" onclick="void addChannel();">
  <img
    src="https://developers.kakao.com/tool/resource/static/img/button/channel/add/channel_add_small.png"
    alt="카카오톡 채널 추가 버튼"
  />
</a> -->
</div>
<div class="waitPage">
	<img alt="대기페이지" src="${pageContext.request.contextPath}/resource/images/tarcer_waitPage.PNG" width="400px;">
	<!-- <div class="right" style="line-height: 74px;">
		<input type="button" value="알림 받기" class="button" onclick="CallRestAPI();">
	</div> -->
</div>
<script type="text/javascript">
	function addChannel() {
		Kakao.Auth.login({
		      success: function(authObj) {
		        alert(JSON.stringify(authObj))
		      },
		      fail: function(err) {
		        alert(JSON.stringify(err))
		      },
		    });
		Kakao.Channel.addChannel({
			channelPublicId: '_ZeUTxl', // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
		});
		
		Kakao.API.request({
			  url: '/v1/api/talk/channels',
			  success: function(response) {
			  console.log(response);
			  },
			  fail: function(error) {
			  console.log(error);
			  }
		});
	}
</script>
</body>
</html>