function createHeader() {
	
	// Constant strings
	var sp = "&nbsp\;";
	var sp2 = "&nbsp\;&nbsp\;";
	
	var menus = ["Home", "Chi siamo", "Statuto"];
	var links = ["index.html", "chisiamo.html", "statuto.html"];
	
	var pageIds = ["home", "chisiamo", "statuto"];
	var menuIds = [		0,			1,	2];

	//// Get the current page filename
	var pageId = document.getElementsByTagName("html")[0].getAttribute("id"); 	
	
	var currentPage = 0;
	
	var selectedMenu = 0;
	for (i=0; i<pageIds.length; i++) {
		if (pageId === pageIds[i]) {
			selectedMenu = menuIds[i];
			break;
		}
	}	
	
	// Create the header
			var headerTxt = "<div class=\"navbar\">";
		//headerTxt += "<div class=\"navbartop\"><img style=\"position: absolute; top:0; left:0;\" src=\"images/fcm_banner2.jpeg\"></div>";
		headerTxt += "<div class=\"navbartop\"><img style=\"margin: 0; padding:0;\" src=\"images/fcm_banner720.jpg\"></div>";

	
	//var d = new Date();
	//var vDay = d.getDate();
	//var vMon = d.getMonth();
	//if ((vMon === 11) || ((vMon === 0) && (vDay < 8))) {  // is it xmas?
	//var headerTxt = "<div class=\"navbar\">";
	//headerTxt += "<div class=\"navbartop\"><img style=\"position: absolute; bottom:0; right:0;\" src=\"images/fcm_banner2.jpeg\"></div>";
	//headerTxt += "<div class=\"navbartop\"><img src=\"images/fcm_banner2.jpeg\"></div>";
	//} else { // no xmas
		//var headerTxt = "<div class=\"navbar\">";
		//headerTxt += "<div class=\"navbartop\"><h2 style=\"display: inline;\">Dario Madeo</h2> web page</div>";
	//}	
	
	//src=\"/~madeo/images/tree.svg

	// General header
	
	headerTxt += "<div class=\"navbarmenu\">";
	
	var active = "";
	for (i=0; i<menus.length; i++) {
		if (i == selectedMenu) {
			active = " class=\"active\" ";
		} else {
			active = "";
		}
		headerTxt += "<a " + active + "href=\"" + links[i] + "\">" + sp2 + menus[i] + sp2 + "</a>";
	} 	
	
	
	headerTxt += "<div class=\"navbarmenu_placeholder\">&nbsp;</div>";
	//headerTxt += "<a class=\"institutional\" target=\"_blank\" href=\"https://www.facebook.com/groups/4816940935046898\">" + sp + "FACEBOOK" + sp + "</a>";
	headerTxt += "<a class=\"institutional\" target=\"_blank\" href=\"https://www.facebook.com/groups/4816940935046898\">" + sp + "Gruppo Facebook" + sp + "</a>";
	//headerTxt += "<a class=\"institutional\" target=\"_blank\" href=\"https://www.diism.unisi.it/en\">" + sp + "DIISM" + sp + "</a>";
	headerTxt += "</div></div>";
	
	// Insert the header in the current page
	document.write(headerTxt);
}

function createFooter() {
	
	// Create the footer
	
	var d = new Date();
	var vDay = d.getDate();
	var vMon = d.getMonth();	

	if ((vMon === 11) || ((vMon === 0) && (vDay < 8))) { // is it xmas?
		var headerTxt = "<div class=\"footerXMAS\">";
	} else { // no xmas
		var headerTxt = "<div class=\"footer\">";
	}		
	
	//headerTxt += "Last update on November 13, 2020.<br>";
	headerTxt += "<hr>";
	headerTxt += "Creato da Dario Madeo (2021).<br>";
	//headerTxt += "No frameworks have been abused in the making of this website.";
	headerTxt += "<hr>";
	headerTxt += "</div>";
	
	// Insert the footer in the current page
	document.write(headerTxt);	
}

