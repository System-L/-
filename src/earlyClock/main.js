var screen_width = device.width
var screen_height = device.height //设置屏幕的高度，像素值
var x1, x2, y1, y2, alibaba_result, jd_result, taobao_result

//执行京东金融任务
JD()
//执行支付宝任务
Alibaba()
//执行淘宝任务(存在无法唤醒问题)
taobao()
toastLog("支付宝：" + alibaba_result + " 京东金融：" + jd_result + " 手机淘宝：" + taobao_result)
//退出脚本
exit()

/**
 * 支付宝模块
 */
 function Alibaba(){
    device.wakeUp()
    app.launchApp("支付宝")

    sleep(5000)
    if(!textContains("体育服务").exists()) {
        alibaba_result = "【任务失败】";
        return
    }
    click(screen_width - 800, screen_height /2 - 80)
    sleep(5000)

    if(!textContains("早起打卡").exists()) {
        alibaba_result = "【任务失败】";
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
        alibaba_result = "【任务失败】";
        return
    }
    click(screen_width /2 , screen_height/2 - 50);

    sleep(5000)
    alibaba_result = "【任务成功】";
}


/**
 * 京东金融模块
 */
function JD(){
    device.wakeUp();
    app.launchApp("京东金融")

    //存在广告等待
    sleep(10000)

    if(!textContains("早起打卡").exists()) {
        jd_result = "【任务失败】"
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
        jd_result = "【任务失败】"
        return
    }
    click(screen_width / 2, screen_height / 2 - 50)
    
    sleep(5000)

    jd_result = "【任务成功】"
}

/**
 * 淘宝模块
 */
function taobao(){
    device.wakeUp();
    app.launchApp("手机淘宝")
    
    sleep(7500)

    if(!textContains("手机淘宝").exists){
        taobao_result = "【任务失败】"
        return
    }
    click(screen_width - 80, screen_height - 80)
    
    sleep(5000)

    if(!textContains("会员中心").exists){
        taobao_result = "【任务失败】"
        return
    }

    swipe(screen_width / 2, screen_height - 300, screen_width / 2, screen_height - 1800, 800)
    
    sleep(5000)

    if(!textContains("我的运动").exists()) {
        taobao_result = "【任务失败】"
        return
    }
    var 我的运动 = text("我的运动").findOne()
    var 我的运动_bound = 我的运动.bounds()
    x1 = 我的运动_bound.left
    y1 = 我的运动_bound.top
    x2 = 我的运动_bound.right
    y2 = 我的运动_bound.bottom
    click(x1 + 5, y2 - 8)

    sleep(5000)

    if(!textContains("早起打卡").exists()) {
        taobao_result = "【任务失败】"
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
        taobao_result = "【任务失败】"
        return
    }
    click(screen_width /2 , screen_height/2 - 50);

    sleep(5000)
    taobao_result = "【任务成功】"
}