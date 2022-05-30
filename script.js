console.log("page loaded...");

function playvideo (e)
{ e.play();  console.log("inside playvideo..")}

function pausevideo (e)
{ e.pause(); console.log("inside pausevideo..")}

function mutevideo (e)
{ e.play(); e.muted = !(e.muted); console.log(e.muted)}