var OSName="Unknown";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="mac";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="unix";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="linux";

$("body").addClass("os-" + OSName)
