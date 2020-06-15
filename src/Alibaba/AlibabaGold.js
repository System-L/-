//支付宝积分获取
//常量定义
var screen_width = device.width;
var screen_height = device.height;

device.wakeUp();

// app.launchApp("支付宝")

// sleep(5000)

// if (!textContains("理财").exists()) {
//     toastLog("【理财】没找到,任务结束")
//     exit()
// }

// var 理财 = text("理财").findOne()
// var 理财_bound = 理财.bounds()
// x1 = 理财_bound.left
// y1 = 理财_bound.top
// x2 = 理财_bound.right
// y2 = 理财_bound.bottom

// click(x1 + 5, y2 - 8)

// if (!textContains("黄金").exists()) {
//     toastLog("【黄金】没找到,任务结束")
//     exit()
// }

//执行两次
// for(var i = 0; i < 2; i++){
//     var 黄金 = text("黄金").findOne()
//     var 黄金_bound = 黄金.bounds()
//     x1 = 黄金_bound.left
//     y1 = 黄金_bound.top
//     x2 = 黄金_bound.right
//     y2 = 黄金_bound.bottom

//     click(x1 + 5, y2 - 8)
//     sleep(3000)
// }

if (!textContains("黄金票").exists()) {
    toastLog("【黄金票】没找到,任务结束")
    exit()
}

var 黄金票 = text("黄金票").findOne()
var 黄金票_bound = 黄金票.bounds()
x1 = 黄金票_bound.left
y1 = 黄金票_bound.top
x2 = 黄金票_bound.right
y2 = 黄金票_bound.bottom

click(x1 + 5, y2 - 8)


toastLog("执行完毕")