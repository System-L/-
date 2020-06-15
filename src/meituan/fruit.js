//美团-免费领水果
//常量定义
var screen_width = device.width;
var screen_height = device.height;
//地鼠位置
var xs = new Array(230, 535, 840);
var ys = new Array(840, 1115, 1470, 1745)
//地鼠颜色
var mouseColor = "#E8D79C";
var mouseColor1 = "#dad7f6";
var mouseColor2 = "#f7f0d6";
var mouseColor3 = "#d73532";

// device.wakeUp();

// app.launchApp("美团");

// sleep(5000)

// if (!textContains("实时公交").exists()) {
//     toastLog("【实时公交】没找到,任务结束")
//     exit()
// }

// className("android.view.View").desc("免费领水果").findOne().click()

// sleep(3000)

if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit()
}

for (; ;) {
    img = images.captureScreen();
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 4; j++) {
            if (images.detectsColor(img, mouseColor3, xs[i], ys[j]) 
            || images.detectsColor(img, mouseColor2, xs[i], ys[j]) 
            || images.detectsColor(img, mouseColor1, xs[i], ys[j])) {
                press(xs[i], ys[j], 1)
                press(xs[i], ys[j], 1)
                press(xs[i], ys[j], 1)
            }

        }
    }
}

toastLog("【美团-免费领水果】任务执行完毕");