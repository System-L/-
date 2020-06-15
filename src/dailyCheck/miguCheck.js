/**
 * 咪咕阅读-每日签到
 */
//常量定义
var screen_width = device.width;
var screen_height = device.height;

device.wakeUp();

app.launchApp("咪咕阅读");

//存在广告 时间等待
sleep(6000)

// 1.处于阅读模式
if (!textContains("读过还读").exists()) {
    toastLog("【读过还读】没找到,任务结束")
    //返回主页面
    back()
}

if (!textContains("畅销必读").exists()) {
    toastLog("【畅销必读】没找到,任务结束")
    exit()
}

//返回到书架
back()

sleep(3000)

if (!textContains("签到领书券").exists()) {
    toastLog("【签到领书券】没找到,任务结束")
    exit()
}
var 签到领书券 = text("签到领书券").findOne()
var 签到领书券_bound = 签到领书券.bounds()
x1 = 签到领书券_bound.left
y1 = 签到领书券_bound.top
x2 = 签到领书券_bound.right
y2 = 签到领书券_bound.bottom
click(x1 + 5, y2 - 8)

toastLog("【咪咕阅读】签到任务结束")