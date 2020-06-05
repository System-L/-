device.wakeUp();
    app.launchApp("手机淘宝")
    toastLog("正在打开手机淘宝...")
    
    sleep(7500)

    if(!textContains("手机淘宝").exists){
        toastLog("【手机淘宝】没找到,任务结束...")
        return
    }
    click(screen_width - 80, screen_height - 80)
    
    sleep(5000)

    if(!textContains("会员中心").exists){
        toastLog("【会员中心】没找到,任务结束...")
        return
    }

    swipe(screen_width / 2, screen_height - 300, screen_width / 2, screen_height - 1800, 800)
    
    sleep(5000)

    if(!textContains("我的运动").exists()) {
        toastLog("【我的运动】没找到,任务结束...")
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