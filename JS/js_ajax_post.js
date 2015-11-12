//ajax使用post方式传送数据
//URL:接收的路径
//Data:传送的数据
//SuccessCallBack:成功时的回调函数
//errorCallBack:失败时的回调函数
//Methods:是异步或者同步 true为异步，false为同步
/*
调用实例：
function button2_click() {
    var ss ="aa="+ document.getElementById("text1").value;
    var URL = "Default.ashx";
    
    ajaxPost(URL, ss, success, error,true);
}
function success(data) {
    console.log(data);
};
function error() {
    console.log("执行出错");
};
*/
function ajaxPost(URL,Data,SuccessCallBack,errorCallBack,Methods){
	var xmlhttp;//创建异步对象
	if(XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}else{
		if(window.ActiveXObject){
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}else{
			return;//浏览器不支持异步对象
		}
	}
	if(xmlhttp!=null){		
		xmlhttp.open("post",URL,Methods);
		xmlhttp.setRequestHeader("CONTENT-TYPE", "application/x-www-form-urlencoded");		
		xmlhttp.onreadystatechange=function(){
			if(xmlhttp.readyState==4&&xmlhttp.status==200){
				SuccessCallBack(xmlhttp.responseText);
			}else{
				errorCallBack();
			}
		}
		xmlhttp.send(Data);
	}
}