function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

if (getUrlVars()["accesstoken1"]!=undefined && getUrlVars()["accesstoken2"]!=undefined && getUrlVars()["accesstoken3"]!=undefined) {
    createCookie("cookie1", getUrlVars()["accesstoken1"], 30);
    createCookie("cookie2", getUrlVars()["accesstoken2"], 30);
    createCookie("cookie3", getUrlVars()["accesstoken3"], 30);
}
else if (getUrlVars()["accesstoken1"]!=undefined && getUrlVars()["accesstoken2"]!=undefined) {
    createCookie("cookie1", getUrlVars()["accesstoken1"], 30);
    createCookie("cookie2", getUrlVars()["accesstoken2"], 30);
}
else if (getUrlVars()["accesstoken1"]!=undefined && getUrlVars()["accesstoken3"]!=undefined) {
    createCookie("cookie1", getUrlVars()["accesstoken1"], 30);
    createCookie("cookie3", getUrlVars()["accesstoken3"], 30);
}
else if (getUrlVars()["accesstoken1"]!=undefined ) {
    createCookie("cookie1", getUrlVars()["accesstoken1"], 30);
}
else if (getUrlVars()["accesstoken2"]!=undefined) {
    createCookie("cookie2", getUrlVars()["accesstoken2"], 30);
}
else if (getUrlVars()["accesstoken3"]!=undefined) {
    createCookie("cookie3", getUrlVars()["accesstoken3"], 30);
}

accessToken1 = readCookie("cookie1");
accessToken2 = readCookie("cookie2");
accessToken3 = readCookie("cookie3");

if (accessToken1==undefined && accessToken2==undefined && accessToken3==undefined) {
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/CLIENT_ID/g, "<span class='span-code' data-toggle='tooltip' data-placement='top' title='Login to automatically see your own credential.'>CLIENT_ID</span>") );
        console.log('The client_id is undefined');
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/CLIENT_SECRET/g, "<span class='span-code' data-toggle='tooltip' data-placement='top' title='Login to automatically see your own credential.'>CLIENT_SECRET</span>") );
        console.log('The client_secret is undefined');
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/ACCESS_TOKEN/g, "<span class='span-code' data-toggle='tooltip' data-placement='top' title='Login to automatically see your own credential.'>ACCESS_TOKEN</span>") );
        console.log('The access_token is undefined');
    });
    document.getElementById("login-link").innerHTML = "<a class='page-link' id='login-link' href='https://q.daskeyboard.com/signin'>Login</a>";
}
    
else if(accessToken1==undefined && accessToken2==undefined){    
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/CLIENT_ID/g, "<span class='span-code' data-toggle='tooltip' data-placement='top' title='Login to automatically see your own credential.'>CLIENT_ID</span>") );
        console.log('The client_id is undefined');
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/CLIENT_SECRET/g, "<span class='span-code' data-toggle='tooltip' data-placement='top' title='Login to automatically see your own credential.'>CLIENT_SECRET</span>") );
        console.log('The client_secret is undefined');
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/ACCESS_TOKEN/g, accessToken3) );
    });
    document.getElementById("login-link").innerHTML = "<a class='page-link' id='login-link' onclick='logout()'>Logout</a>";
    document.getElementById("login-link").href = "/DasKeyboard.github.io/";
}
    
else if(accessToken1==undefined && accessToken3==undefined){    
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/CLIENT_ID/g, "<span class='span-code' data-toggle='tooltip' data-placement='top' title='Login to automatically see your own credential.'>CLIENT_ID</span>") );
        console.log('The client_id is undefined');
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/CLIENT_SECRET/g, accessToken2) );
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/ACCESS_TOKEN/g, "<span class='span-code' data-toggle='tooltip' data-placement='top' title='Login to automatically see your own credential.'>ACCESS_TOKEN</span>") );
        console.log('The access_token is undefined');
    });
    document.getElementById("login-link").innerHTML = "<a class='page-link' id='login-link' onclick='logout()'>Logout</a>";
    document.getElementById("login-link").href = "/DasKeyboard.github.io/";
}

else if(accessToken2==undefined && accessToken3==undefined){    
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/CLIENT_ID/g, accessToken1) );
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/CLIENT_SECRET/g, "<span class='span-code' data-toggle='tooltip' data-placement='top' title='Login to automatically see your own credential.'>CLIENT_SECRET</span>") );
        console.log('The client_secret is undefined');
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/ACCESS_TOKEN/g, "<span class='span-code' data-toggle='tooltip' data-placement='top' title='Login to automatically see your own credential.'>ACCESS_TOKEN</span>") );
        console.log('The access_token is undefined');
    });
    document.getElementById("login-link").innerHTML = "<a class='page-link' id='login-link' onclick='logout()'>Logout</a>";
    document.getElementById("login-link").href = "/DasKeyboard.github.io/";
}

else if(accessToken1 ==undefined) {
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/CLIENT_ID/g, "<span class='span-code' data-toggle='tooltip' data-placement='top' title='Login to automatically see your own credential.'>CLIENT_ID</span>") );
        console.log('The client_id is undefined');
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/CLIENT_SECRET/g, accessToken2) );
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/ACCESS_TOKEN/g, accessToken3) );
    });
    document.getElementById("login-link").innerHTML = "<a class='page-link' id='login-link' onclick='logout()'>Logout</a>";
    document.getElementById("login-link").href = "/DasKeyboard.github.io/";
}

else if(accessToken2 ==undefined) {
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/CLIENT_ID/g, accessToken1) );
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/CLIENT_SECRET/g, "<span class='span-code' data-toggle='tooltip' data-placement='top' title='Login to automatically see your own credential.'>CLIENT_SECRET</span>") );
        console.log('The client_secret is undefined');
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/ACCESS_TOKEN/g, accessToken3) );
    });
    document.getElementById("login-link").innerHTML = "<a class='page-link' id='login-link' onclick='logout()'>Logout</a>";
    document.getElementById("login-link").href = "/DasKeyboard.github.io/";
}

else if(accessToken3==undefined){    
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/CLIENT_ID/g, accessToken1) );
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/CLIENT_SECRET/g, accessToken2) );
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/ACCESS_TOKEN/g, "<span class='span-code' data-toggle='tooltip' data-placement='top' title='Login to automatically see your own credential.'>ACCESS_TOKEN</span>") );
        console.log('The access_token is undefined');
    });
    document.getElementById("login-link").innerHTML = "<a class='page-link' id='login-link' onclick='logout()'>Logout</a>";
    document.getElementById("login-link").href = "/DasKeyboard.github.io/";
}

else{
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/CLIENT_ID/g, accessToken1) );
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/CLIENT_SECRET/g, accessToken2) );
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/ACCESS_TOKEN/g, accessToken3) );
    });
    document.getElementById("login-link").innerHTML = "<a class='page-link' id='login-link' onclick='logout()'>Logout</a>";
    document.getElementById("login-link").href = "/DasKeyboard.github.io/";
}

function logout(){
    eraseCookie("cookie1");
    eraseCookie("cookie2");
    eraseCookie("cookie3");
}


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })