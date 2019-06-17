function calc()
{
    var timezonet = document.getElementById("txtselect"); 

    if(timezonet.value == "est")
    {
        calcTime('-5');
    }
    else if (timezonet.value == "cet")
    {
        calcTime('+1');
    }
    else if (timezonet.value == "pst")
    {
        calcTime('-8');
    }
    else if (timezonet.value == "cdt")
    {
        calcTime('-5');
    }
    else if (timezonet.value == "cest")
    {
        calcTime('+2');
    }
    else if (timezonet.value == "bst")
    {
        calcTime('+1');
    }
    else if (timezonet.value == "gst")
    {
        calcTime('+4');
    }
    else if (timezonet.value == "jst")
    {
        calcTime('+9');
    }
    else
    {
        alert("Input is Invalid!")
    }
}

// Function for Time Conversion //
function calcTime(offset) 
{
    var dt = document.getElementById("txtdate").value;
    d = new Date(dt);
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    nd = new Date(utc + (3600000*offset));
    var ndate = nd.toLocaleString();
    document.getElementById("txtconvert").value = ndate; 
}

// Current Time Zone //
var tz = new Date();
document.getElementById("lblctz").innerText = tz;

// Screen Resolution //
document.getElementById("lblsr").innerHTML = window.screen.width + "x" + window.screen.height;

// Device Pixel Ratio //
document.getElementById("lbldpr").innerHTML = window.devicePixelRatio;

// Browser Information //
var Agent = navigator.userAgent;
var vendor = navigator.vendor;
var browser  = navigator.appName;
var objOffsetVersion;
if ((objOffsetVersion=Agent.indexOf("Chrome"))!=-1) 
{ 
    browser = "Chrome";
} 
else if ((objOffsetVersion=Agent.indexOf("MSIE"))!=-1) 
{ 
    browser = "Microsoft Internet Explorer";  
} 
else if ((objOffsetVersion=Agent.indexOf("Firefox"))!=-1) 
{ 
    browser = "Firefox"; 
}
document.getElementById("lblbi").innerHTML = browser;

// Device/OS //
var device = Agent || vendor || window.opera;

if (/windows /i.test(device)) {
    document.getElementById("lbldos").innerHTML = "Windows ";
}
if (/android/i.test(device)) {
    document.getElementById("lbldos").innerHTML = "Android";
}
if (/iPad|iPhone|iPod/.test(device) && !window.MSStream) {
    document.getElementById("lbldos").innerHTML = "iOS";
}