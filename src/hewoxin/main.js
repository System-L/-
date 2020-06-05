//常量定义
var x1, x2, y1, y2
//定义获取金币轮数
var times = 5
//定义用户信息位置
var users = [
    {x1: 52, y1: 1067, x2: 307, y2: 1322},
    {x1: 412, y1: 1067, x2: 667, y2: 1322},
    {x1: 722, y1: 1067, x2: 1027, y2: 1322},
    {x1: 52, y1: 1367, x2: 307, y2: 1622},
    {x1: 412, y1: 1367, x2: 667, y2: 1622},
    {x1: 722, y1: 1367, x2: 1027, y2: 1622}
]

device.wakeUp()
app.launchApp("和我信")
toastLog("正在打开和我信...")

//存在广告信息，等待时间延长
sleep(10000)

if(!textContains("金币").exists()){
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

for(var time = 1; time<=times; time++){
    toastLog("第" + time + "次执行捡金币任务")
    if(!textContains("换一批").exists()){
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
}

toastLog("和我信捡金币任务结束!")

//遍历点击
function getGolds(){
    for(var i = 0; i<users.length; i++){
        click(users[i].x1 +5, users[i].y2 -8)
        sleep(1000)
    }
}