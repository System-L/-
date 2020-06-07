"ui";
//常量定义
var screen_width = device.width;
var screen_height = device.height;
var x1, x2, y1, y2;
//定义获取金币轮数
var times = 5;
//定义用户信息位置
// var users = [
//     {x1: 52, y1: 1067, x2: 307, y2: 1322},
//     {x1: 412, y1: 1067, x2: 667, y2: 1322},
//     {x1: 722, y1: 1067, x2: 1027, y2: 1322},
//     {x1: 52, y1: 1367, x2: 307, y2: 1622},
//     {x1: 412, y1: 1367, x2: 667, y2: 1622},
//     {x1: 722, y1: 1367, x2: 1027, y2: 1622}
// ]

device.wakeUp()

ui.layout(
    <vertical>
        <appbar>
            <toolbar title="和我信·捡币小工v1.0.0·By System L" />
        </appbar>
        <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp" />
        <frame height="200" gravity="center">
            <text text="配置信息：" textSize="20" />
            <horizontal gravity="center"> //水平布局
                <text text="请输入捡币次数(默认为5)：" />
                <input id="timesText" inputType="number" w="60" />
            </horizontal>
        </frame>
        <button id="start" text="开始运行" />
        <button id="exit" text="退出" />
    </vertical>
)

ui.autoService.on("check", function (checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启s
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });

        auto.service = true
    }

    if (!checked && auto.service != null) {
        //关闭自己service的方法，在设置界面可以看到辅助功能状态被关闭
        auto.service.disableSelf();
    }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});

ui.start.on("click", function () {
    //程序开始运行之前判断无障碍服务
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }
    //设置捡币次数
    if(ui.timesText.getText() != null){
        times = ui.timesText.getText();
    }
    main();
});

ui.exit.on("click", function () {
    //程序开始运行之前判断无障碍服务
    toast("感谢使用！");
    exit()
});

function main() {
    threads.start(function () { 
        dialogs.alert("请确认无障碍已开启\n作者:System L\n");

        app.launchApp("和我信")
        toastLog("正在打开和我信...")

        //存在广告信息，等待时间延长
        sleep(10000)

        if (!textContains("金币").exists()) {
            toastLog("【金币】没找到,任务结束")
            exit()
        }
        var 金币 = text("金币").findOne()
        var 金币_bound = 金币.bounds()
        x1 = 金币_bound.left
        y1 = 金币_bound.top
        x2 = 金币_bound.right
        y2 = 金币_bound.bottom
        click(x1 + 5, y2 - 8)

        sleep(5000)

        for (var time = 1; time <= times; time++) {
            toastLog("第" + time + "次执行捡金币任务")
            if (!textContains("换一批").exists()) {
                toastLog("【换一批】没找到,任务结束")
                exit()
            }
            getGolds()
            //点击换一批
            var 换一批 = text("换一批").findOne()
            var 换一批_bound = 换一批.bounds()
            x1 = 换一批_bound.left
            y1 = 换一批_bound.top
            x2 = 换一批_bound.right
            y2 = 换一批_bound.bottom

            click(x1 + 5, y2 - 8)

            sleep(5000)
            log("换一批")
        }

        toastLog("和我信捡金币任务结束!")
        exit()
    })
}


//通过判断用户金币余额
function getGolds() {
    className("android.widget.TextView").find().forEach(function (child) {
        if (child.id() == "com.jx.cmcc.ict.ibelieve:id/x3") {
            // log(child.text())
            if (child.text() != '0' && child.text().indexOf("邀请") == -1) {
                var 金币_bound = child.bounds()
                x1 = 金币_bound.left
                y1 = 金币_bound.top
                x2 = 金币_bound.right
                y2 = 金币_bound.bottom
                click(x1 + 5, y2 - 8)

                sleep(3000)
                log("获取金币个数:" + child.text())
            }
        }
    })
}

// //遍历点击
// function getGolds(){
//     for(var i = 0; i<users.length; i++){
//         click(users[i].x1 +5, users[i].y2 -8)
//         sleep(1000)
//     }
// }
