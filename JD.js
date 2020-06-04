device.wakeUp();
app.launchApp("京东金融")
toastLog("正在打开京东金融...")

//存在广告等待
sleep(10000)

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

if(!textContains("今日战况").exists()) {
    toastLog("【今日战况】没找到,任务结束...")
    return
}
click(screen_width / 2, screen_height / 2 - 50)

sleep(5000)