function tab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = $(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    	if(i%2==0)
    	document.getElementById("content").style.display = "none";
    else
    	document.getElementById("content2").style.display = "none";
        tabcontent[i].style.display = "none";
    }
    tablinks = $(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += "active";
}

function show(evt,linkName){
	console.log(linkName);
	if(linkName=="Link1"){
		document.getElementById("content2").style.display = "none";
		document.getElementById("content").style.display = "block";
	}

	if(linkName=="Link2"){
		document.getElementById("content").style.display = "none";
		document.getElementById("content2").style.display = "block";
	}
} 