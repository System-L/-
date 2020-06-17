//软件签到合集
//ui 引用
"ui";
//常量定义
var screen_width = device.width;
var screen_height = device.height;

device.wakeUp();

ui.statusBarColor("#ff4040")
ui.layout(
    <vertical>
        <appbar>
            <toolbar title="和我信·捡币小工v1.0.0·By System L" bg="#ff4040" />
        </appbar>
        //设置界面
        <frame>
            <ScrollView>
                <vertical>
                    //无障碍服务 开启
                    <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp" />
                    <horizontal>
                        <checkbox id="jifenCheck" text="支付宝-积分签到" />
                    </horizontal>
                    <horizontal>
                        <checkbox id="jiebeiCheck" text="支付宝-借呗签到" />
                    </horizontal>
                    <horizontal>
                        <checkbox id="miguCheck" text="咪咕阅读-每日签到" />
                    </horizontal>
                    <text text="手机开启无障碍才能运行！！！" textSize="18sp" color="#ff4040" gravity="center" padding="10" />
                    <text text="按手机“音量+键”可以结束程序" textSize="18sp" gravity="center" padding="10" />
                </vertical>
            </ScrollView>
        </frame>
        <button id="start" text="开始运行" />
        <button id="exit" text="退出" />
    </vertical>
)

//这里是无障碍触发方式
ui.autoService.on("check", function (checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启 
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});
// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
    // 此时根据无障碍服务的开启情况，同步开关的状态 
    ui.autoService.checked = auto.service != null;
});

