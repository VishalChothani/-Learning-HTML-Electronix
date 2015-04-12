$(document).ready(function(){
	$("#slide-botton1").click(function()
	{	
		var object2;
	
	if(window.XMLHttpRequest)
		object2 = new XMLHttpRequest();
	else
		object2 = new ActiveXObject("Microsoft.XMLHTTP");



	

		object2.open("POST", "../xml/laptop.xml", true);
		object2.send();

		object2.onreadystatechange = function()
		{	
			if(object2.readyState == 4 && object2.status == 200)
			{
				doc = object2.responseXML;	
				options2 = doc.getElementsByTagName("disp");
				options3 = doc.getElementsByTagName("gara");
				options4 = doc.getElementsByTagName("tip");
				options5 = doc.getElementsByTagName("pretul");
				
				
						
				$("#disp").text(options2[0].firstChild.data);
				$("#gara").text(options3[0].firstChild.data);
				$("#tip").text(options4[0].firstChild.data);
				$("#pretul").text(options5[0].firstChild.data);
				$("#image-xml").attr({"src":"../images/laptop.png"});

			}
		}

		
	});

});	
$(document).ready(function(){
	$("#slide-botton2").click(function()
	{	
		var object2;
	
			if(window.XMLHttpRequest)
				object2 = new XMLHttpRequest();
			else
				object2 = new ActiveXObject("Microsoft.XMLHTTP");

		object2.open("POST", "../xml/laptop.xml", true);
		object2.send();
		object2.onreadystatechange = function()
		{	
			if(object2.readyState == 4 && object2.status == 200)
			{
				doc = object2.responseXML;	
				options2 = doc.getElementsByTagName("disp");
				options3 = doc.getElementsByTagName("gara");
				options4 = doc.getElementsByTagName("tip");
				options5 = doc.getElementsByTagName("pretul");
				
				
						
				$("#disp").text(options2[1].firstChild.data);
				$("#gara").text(options3[1].firstChild.data);
				$("#tip").text(options4[1].firstChild.data);
				$("#pretul").text(options5[1].firstChild.data);
				$("#image-xml").attr({"src":"../images/p4.gif"});

			}
		}

	});

});	
$(document).ready(function(){
	$("#slide-botton3").click(function()
	{	
		var object2;
	
			if(window.XMLHttpRequest)
				object2 = new XMLHttpRequest();
			else
				object2 = new ActiveXObject("Microsoft.XMLHTTP");

		object2.open("POST", "../xml/laptop.xml", true);
		object2.send();
		object2.onreadystatechange = function()
		{	
			if(object2.readyState == 4 && object2.status == 200)
			{
				doc = object2.responseXML;	
				options2 = doc.getElementsByTagName("disp");
				options3 = doc.getElementsByTagName("gara");
				options4 = doc.getElementsByTagName("tip");
				options5 = doc.getElementsByTagName("pretul");
				
				
						
				$("#disp").text(options2[2].firstChild.data);
				$("#gara").text(options3[2].firstChild.data);
				$("#tip").text(options4[2].firstChild.data);
				$("#pretul").text(options5[2].firstChild.data);
				$("#image-xml").attr({"src":"../images/camera.png"});

			}
		}
		
	});

});	

$(document).ready(function(){
	$("#slide-botton4").click(function()
	{	
		
		var object2;
	
	if(window.XMLHttpRequest)
		object2 = new XMLHttpRequest();
	else
		object2 = new ActiveXObject("Microsoft.XMLHTTP");



	

		object2.open("POST", "../xml/laptop.xml", true);
		object2.send();

		object2.onreadystatechange = function()
		{	
			if(object2.readyState == 4 && object2.status == 200)
			{
				doc = object2.responseXML;	
				options2 = doc.getElementsByTagName("disp");
				options3 = doc.getElementsByTagName("gara");
				options4 = doc.getElementsByTagName("tip");
				options5 = doc.getElementsByTagName("pretul");
				
				
						
				$("#disp").text(options2[0].firstChild.data);
				$("#gara").text(options3[0].firstChild.data);
				$("#tip").text(options4[0].firstChild.data);
				$("#pretul").text(options5[0].firstChild.data);
				$("#image-xml").attr({"src":"../images/laptop.png"});

			}
		}


	});

});	
$(document).ready(function(){
	$("#slide-botton5").click(function()
	{	
		var object2;
	
			if(window.XMLHttpRequest)
				object2 = new XMLHttpRequest();
			else
				object2 = new ActiveXObject("Microsoft.XMLHTTP");

		object2.open("POST", "../xml/laptop.xml", true);
		object2.send();
		object2.onreadystatechange = function()
		{	
			if(object2.readyState == 4 && object2.status == 200)
			{
				doc = object2.responseXML;	
				options2 = doc.getElementsByTagName("disp");
				options3 = doc.getElementsByTagName("gara");
				options4 = doc.getElementsByTagName("tip");
				options5 = doc.getElementsByTagName("pretul");
				
				
						
				$("#disp").text(options2[1].firstChild.data);
				$("#gara").text(options3[1].firstChild.data);
				$("#tip").text(options4[1].firstChild.data);
				$("#pretul").text(options5[1].firstChild.data);
				$("#image-xml").attr({"src":"../images/p4.gif"});

			}
		}

	});

});	


$(document).ready(function(){
	
	$("#laptop-details").click(function()
	{	
		$.cookie('the_cookie', '1');
		window.location.replace("../html/details.html");
	});

});	

$(document).ready(function(){
	
	$("#iphone-details").click(function()
	{	
		$.cookie('the_cookie', '2');
		window.location.replace("../html/details.html");
	});

});	


$(document).ready(function(){
	
	$("#camera-details").click(function()
	{	
		$.cookie('the_cookie', '3');
		window.location.replace("../html/details.html");
	});

});	

$(document).ready(function(){
	
	$("#laptop-details1").click(function()
	{	
		$.cookie('the_cookie', '1');
		window.location.replace("../html/details.html");
	});

});	

$(document).ready(function(){
	
	$("#iphone-details1").click(function()
	{	
		$.cookie('the_cookie', '2');
		window.location.replace("../html/details.html");
	});

});	


$(document).ready(function(){
	
	$("#camera-details1").click(function()
	{	
		$.cookie('the_cookie', '3');
		window.location.replace("../html/details.html");
	});

});

$(document).ready(function(){
	
	$("#laptop-details2").click(function()
	{	
		$.cookie('the_cookie', '1');
		window.location.replace("../html/details.html");
	});

});	

$(document).ready(function(){
	
	$("#iphone-details2").click(function()
	{	
		$.cookie('the_cookie', '2');
		window.location.replace("../html/details.html");
	});

});	


$(document).ready(function(){
	
	$("#camera-details2").click(function()
	{	
		$.cookie('the_cookie', '3');
		window.location.replace("../html/details.html");
	});

});	

/* -------------------------------------------------------------------------- */	



$(document).ready(function()
{	

	var object2;
	
	if(window.XMLHttpRequest)
		object2 = new XMLHttpRequest();
	else
		object2 = new ActiveXObject("Microsoft.XMLHTTP");



	if($.cookie('the_cookie')==1)
	{

		object2.open("POST", "../xml/laptop.xml", true);
		object2.send();

		object2.onreadystatechange = function()
		{	
			if(object2.readyState == 4 && object2.status == 200)
			{
				doc = object2.responseXML;	
				options2 = doc.getElementsByTagName("disp");
				options3 = doc.getElementsByTagName("gara");
				options4 = doc.getElementsByTagName("tip");
				options5 = doc.getElementsByTagName("pretul");
				
				
						
				$("#disp").text(options2[0].firstChild.data);
				$("#gara").text(options3[0].firstChild.data);
				$("#tip").text(options4[0].firstChild.data);
				$("#pretul").text(options5[0].firstChild.data);
				$("#image-xml").attr({"src":"../images/laptop.png"});

			}
		}

		
	}
	else if($.cookie('the_cookie')==2)
	{
		object2.open("POST", "../xml/laptop.xml", true);
		object2.send();
		object2.onreadystatechange = function()
		{	
			if(object2.readyState == 4 && object2.status == 200)
			{
				doc = object2.responseXML;	
				options2 = doc.getElementsByTagName("disp");
				options3 = doc.getElementsByTagName("gara");
				options4 = doc.getElementsByTagName("tip");
				options5 = doc.getElementsByTagName("pretul");
				
				
						
				$("#disp").text(options2[1].firstChild.data);
				$("#gara").text(options3[1].firstChild.data);
				$("#tip").text(options4[1].firstChild.data);
				$("#pretul").text(options5[1].firstChild.data);
				$("#image-xml").attr({"src":"../images/p4.gif"});

			}
		}


	}	
	else if($.cookie('the_cookie')==3)
	{
		object2.open("POST", "../xml/laptop.xml", true);
		object2.send();
		object2.onreadystatechange = function()
		{	
			if(object2.readyState == 4 && object2.status == 200)
			{
				doc = object2.responseXML;	
				options2 = doc.getElementsByTagName("disp");
				options3 = doc.getElementsByTagName("gara");
				options4 = doc.getElementsByTagName("tip");
				options5 = doc.getElementsByTagName("pretul");
				
				
						
				$("#disp").text(options2[2].firstChild.data);
				$("#gara").text(options3[2].firstChild.data);
				$("#tip").text(options4[2].firstChild.data);
				$("#pretul").text(options5[2].firstChild.data);
				$("#image-xml").attr({"src":"../images/camera.png"});

			}
		}

	}	
});	


