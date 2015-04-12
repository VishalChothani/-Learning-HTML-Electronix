jQuery(document).ready(function()
{


	jQuery("#laptop-xml").click(function()
	{
		jQuery("#image-xml").attr("src","../images/laptop.gif");
		var xmlhttp;

		var options2 ,options3 ,options4 ,options5;
		if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		}
		else
		{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("GET","../xml/laptop.xml",true);
		xmlhttp.send();

		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				doc = xmlhttp.responseXML;	
				options2 = doc.getElementsByTagName("disp");
				options3 = doc.getElementsByTagName("gara");
				options4 = doc.getElementsByTagName("tip");
				options5 = doc.getElementsByTagName("pretul");
			
				
				$("#disp").text(options2[0].firstChild.data);
				$("#gara").text(options3[0].firstChild.data);
				$("#tip").text(options4[0].firstChild.data);
				$("#pretul").text(options5[0].firstChild.data);
			}
		}

	});


	jQuery("#iphone-xml").click(function()
	{
	
		jQuery("#image-xml").attr("src","../images/p4.gif");

		var xmlhttp;

		var options2 ,options3 ,options4 ,options5;
		if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		}
		else
		{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("GET","../xml/laptop.xml",true);
		xmlhttp.send();

		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				doc = xmlhttp.responseXML;	
				options2 = doc.getElementsByTagName("disp");
				options3 = doc.getElementsByTagName("gara");
				options4 = doc.getElementsByTagName("tip");
				options5 = doc.getElementsByTagName("pretul");
			
				
				$("#disp").text(options2[1].firstChild.data);
				$("#gara").text(options3[1].firstChild.data);
				$("#tip").text(options4[1].firstChild.data);
				$("#pretul").text(options5[1].firstChild.data);
			}
		}
	});

	jQuery("#webcam-xml").click(function()
	{
	
		jQuery("#image-xml").attr("src","../images/camera.png");

		var xmlhttp;

		var options2 ,options3 ,options4 ,options5;
		if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		}
		else
		{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("GET","../xml/laptop.xml",true);
		xmlhttp.send();

		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				doc = xmlhttp.responseXML;	
				options2 = doc.getElementsByTagName("disp");
				options3 = doc.getElementsByTagName("gara");
				options4 = doc.getElementsByTagName("tip");
				options5 = doc.getElementsByTagName("pretul");
			
				
				$("#disp").text(options2[2].firstChild.data);
				$("#gara").text(options3[2].firstChild.data);
				$("#tip").text(options4[2].firstChild.data);
				$("#pretul").text(options5[2].firstChild.data);
			}
		}
	});

});
