//美团-红包签到
//常量定义
var screen_width = device.width;
var screen_height = device.height;

device.wakeUp();

app.launchApp("美团");

sleep(5000);

if (!textContains("实时公交").exists()) {
    toastLog("【实时公交】没找到,任务结束");
    exit();
}

className("android.view.View").desc("红包签到").findOne().click();

sleep(3000);

if (!textContains("每日福利").exists()) {
    toastLog("【每日福利】没找到,任务结束");
    exit();
}

//此处点击需优化
click(screen_width / 2, screen_height * 0.65);

//翻牌子
click(screen_width / 2, screen_height * 0.65);

toastLog("【美团-红包签到】任务完成");