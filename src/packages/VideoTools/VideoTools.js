var liveVideoNode; // 直播video标签节点
var isInput = false;
let videotools_num = 0;
function initPkg_VideoTools() {
    let timer = setInterval(() => {
        if (document.getElementsByClassName("right-e7ea5d").length > 0) {
            clearInterval(timer);
            liveVideoNode = document.querySelector(".layout-Player-videoEntity video");
            initPkg_VideoTools_Module();
            initPkg_VideoTools_Func();
        }
        videotools_num++;
        if (videotools_num >= 15) {
            clearInterval(timer);
        }
    }, 1500);
}

function initPkg_VideoTools_Module() {
    // 添加模块
    initPkg_VideoTools_VideoSpeed();
    initPkg_VideoTools_Cinema();
    initPkg_VideoTools_VideoSync();
    initPkg_VideoTools_VideoRecall();
    initPkg_VideoTools_Filter();
}

function initPkg_VideoTools_Func() {
    document.getElementById("js-player-toolbar").addEventListener("mouseover", () => {
        document.getElementsByClassName("cinema__wrap")[0].style.display = "none";
        document.getElementsByClassName("videospeed__wrap")[0].style.display = "none";
        document.getElementsByClassName("filter__wrap")[0].style.display = "none";
    });
    document.getElementById("js-player-asideMain").addEventListener("mouseover", () => {
        document.getElementsByClassName("cinema__wrap")[0].style.display = "none";
        document.getElementsByClassName("videospeed__wrap")[0].style.display = "none";
        document.getElementsByClassName("filter__wrap")[0].style.display = "none";
    });
    document.getElementsByClassName("inputView-2a65aa")[0].addEventListener("focus", () => {
        isInput = true;
    });
    document.getElementsByClassName("inputView-2a65aa")[0].addEventListener("blur", () => {
        isInput = false;
    });
    let m = new DomHook(".app-f0f9c7", false, (m) => {
        if (m.length > 0) {
            if (m[0].addedNodes.length > 0) {
                isInput = true;
            } else if (m[0].removedNodes.length > 0) {
                isInput = false;
            }
        }
    });
}
