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

if (!textContains("支付宝会员").exists()) {
    toastLog("【支付宝会员】没找到,任务结束")
    exit()
}

var 支付宝会员 = text("支付宝会员").findOne()
var 支付宝会员_bound = 支付宝会员.bounds()
x1 = 支付宝会员_bound.left
y1 = 支付宝会员_bound.top
x2 = 支付宝会员_bound.right
y2 = 支付宝会员_bound.bottom
click(x1 + 5, y2 - 8)

sleep(3000)

if (!textContains("支付宝会员").exists()) {
    toastLog("【支付宝会员】没找到,任务结束")
    exit()
}

className("android.view.View").text("领积分").findOne().click()

sleep(3000)

while(1){
    if (!textContains("点击领取").exists()) {
        toastLog("【点击领取】没找到,任务结束")
        exit()
    }

    var 点击领取 = text("点击领取").findOne()
    var 点击领取_bound = 点击领取.bounds()
    x1 = 点击领取_bound.left
    y1 = 点击领取_bound.top
    x2 = 点击领取_bound.right
    y2 = 点击领取_bound.bottom
    click(x1 + 5, y2 - 8)

}