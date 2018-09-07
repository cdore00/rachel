<!--

function initPageGalerie(){
setFontSize();
}

function validOrientation(){
var showPhoto = document.getElementById('showPhoto');
var objImg = document.getElementById('objImg');

if (showPhoto.style.visibility == "visible"){
	objImg.style.maxWidth  = (getWindowWidth() - 30) + 'px';
	objImg.scrollIntoView (true);
	}
//alert(window.orientation);
}

function hideShow(){
var showPhoto = document.getElementById('showPhoto');

	showPhoto.style.visibility="hidden";
}

function expansion(obj, photoName, desc){
var showPhoto = document.getElementById('showPhoto');
var objImg = document.getElementById('objImg');
var imgDesc = document.getElementById('imgDesc');

	objImg.src=photoName;
	showPhoto.style.top = (GetCoordY(obj)) + 'px';
	imgDesc.innerHTML = '<b>' + desc + '</b></br>Fichier : <a target="_blank" href="' + photoName + '">' + photoName + '</a>';
	objImg.style.maxWidth  = (getWindowWidth() - 30) + 'px';
	obj.scrollIntoView (true);
	showPhoto.style.visibility="visible";
//alert(objImg.style.maxWidth);
//screen.availHeight
}

// -->