//支付宝积分获取
//常量定义
var screen_width = device.width;
var screen_height = device.height;

device.wakeUp();

app.launchApp("支付宝")

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

swipe(screen_width / 2, screen_height - 300, screen_width / 2, screen_height - 1500, 800)

sleep(3000)


if (!textContains("借呗").exists()) {
    toastLog("【借呗】没找到,任务结束")
    exit()
}

var 借呗 = text("借呗").findOne()
var 借呗_bound = 借呗.bounds()
x1 = 借呗_bound.left
y1 = 借呗_bound.top
x2 = 借呗_bound.right
y2 = 借呗_bound.bottom

click(x1 + 5, y2 - 8)

sleep(5000)

if (!textContains("呗壳").exists()) {
    toastLog("【呗壳】没找到,任务结束")
    exit()
}

var 呗壳 = text("呗壳").findOne()
var 呗壳_bound = 呗壳.bounds()
x1 = 呗壳_bound.left
y1 = 呗壳_bound.top
x2 = 呗壳_bound.right
y2 = 呗壳_bound.bottom

click(x1 + 5, y2 - 8)

sleep(3000)

if (!textContains("免息额度").exists()) {
    toastLog("【免息额度】没找到,任务结束")
    exit()
}

click( screen_width/2, screen_height/2)

toastLog("【支付宝借呗额度领取】任务执行完毕")