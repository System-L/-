var screen_width = device.width
var screen_height = device.height //设置屏幕的高度，像素值

device.wakeUp()
app.launchApp("支付宝")
toastLog("正在打开支付宝...")

sleep(5000)
if(!textContains("体育服务").exists()) {
    toastLog("【体育服务】没找到,任务结束...")
    return
}
//此处体育服务存在 点击搜索框 问题
// var 体育服务 = text("体育服务").findOne()
// var 体育服务_bound = 体育服务.bounds()
// x1 = 体育服务_bound.left
// y1 = 体育服务_bound.top
// x2 = 体育服务_bound.right
// y2 = 体育服务_bound.bottom
// click(x1 + 5, y2 - 8)
click(screen_width - 800, screen_height /2 - 80)
sleep(5000)

if(!textContains("早起打卡").exists()) {
    toastLog("【早起打卡】没找到,任务结束...")
    return
}
var 早起打卡 = text("早起打卡").findOne()
var 早起打卡_bound = 早起打卡.bounds()
x1 = 早起打卡_bound.left
y1 = 早起打卡_bound.top
x2 = 早起打卡_bound.right
y2 = 早起打卡_bound.bottom
click(x1 + 5, y2 - 8)
sleep(5000)

if(!textContains("早起打卡挑战赛").exists()) {
    toastLog("【早起打卡挑战赛】没找到,任务结束...")
    return
}
click(screen_width /2 , screen_height/2 - 50);

sleep(5000)