/**
 * 美团-免费领水果
 */
//常量定义
var screen_width = device.width;
var screen_height = device.height;
//地鼠位置 设置
var ys = new Array(770, 1090, 1412, 1730);
var xs = new Array(230, 533, 840);
//地鼠颜色
var mouse1Color = "#dad7f6";
var mouse2Color = "#f7f0d6";

// device.wakeUp()

// app.launchApp("美团")

// //存在广告 时间等待
// sleep(5000)

// if (!textContains("扫一扫").exists()) {
//     toastLog("【扫一扫】没找到,任务结束")
//     exit()
// }

// className("android.view.View").desc("免费领水果").findOne().click()

// sleep(3000)

//签到
// click( screen_width/10, screen_height/7 )

// sleep(1500)

// click( screen_width/2, screen_height*0.75 )

// sleep(1500)

// click( screen_width/2, screen_height*0.75 )

// sleep(2000)

if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}
for (; ;) {
    img = captureScreen();
    getPreMouse(img);
}

function getPreMouse(img) {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 4; j++) {
            if (images.detectsColor(img, mouse1Color, xs[i], ys[j]) || images.detectsColor(img, mouse2Color, xs[i], ys[j])) {
                click(xs[i], ys[j])
                click(xs[i], ys[j])
            }
        }
    }
}

// toastLog("【美团-免费领水果】,任务结束")