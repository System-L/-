//支付宝股市竞猜
var screen_width = device.width;
var screen_height = device.height;

device.wakeUp();

app.launchApp("支付宝");

sleep(5000)

if (!textContains("我的").exists()) {
    toastLog("【我的】没找到,任务结束")
    exit()
}

var 我的 = text("我的").findOne()
var 我的_bound = 我的.bounds()
x1 = 我的_bound.left
y1 = 我的_bound.top
x2 = 我的_bound.right
y2 = 我的_bound.bottom
click(x1 + 5, y2 - 8)

sleep(3000)