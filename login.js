function clickOpen(buttonId,regContainerId,registerId,regDetailId,closeBtnId){
    var button = document.getElementById(buttonId);
    var regContainer = document.getElementById(regContainerId);
    var register = document.getElementById(registerId);
    var regDetail = document.getElementById(regDetailId);
    var close = document.getElementById(closeBtnId);
    
    regContainer.style.transform="translate(-250px,0px)";
    regContainer.style.borderRadius="5px";
    regContainer.style.height="350px";
    regContainer.style.width="300px";
    regContainer.style.animationIterationCount="0";
    regContainer.style.transition="1s";

    register.style.display="inline-block";

    regDetail.style.display="inline-block";

    button.style.display="none";

    close.style.display="inline-block";
}
function clickClose(buttonId,regContainerId,registerId,regDetailId,closeBtnId){
    var button = document.getElementById(buttonId);
    var regContainer = document.getElementById(regContainerId);
    var register = document.getElementById(registerId);
    var regDetail = document.getElementById(regDetailId);
    var close = document.getElementById(closeBtnId);

    regContainer.style.borderRadius="50%";
    regContainer.style.height="80px";
    regContainer.style.width="80px";
    regContainer.style.position="absolute";
    regContainer.style.top="-10%";
    regContainer.style.animationIterationCount="infinite";
    regContainer.style.transition="1s";
    register.style.display="none";

    regDetail.style.display="none";
    regDetail.style.transition="1s";

    button.style.display="inline-block";

    close.style.display="none";
}