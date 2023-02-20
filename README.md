
随着信息化社会的不断发展，各种线下展开的活动都可以在线上执行，在疫情的这段时间中，可以看到很多学校的学生都居家学习课程，而这样就会带来区别于传统的考试方式，老师们不能对学生进行现场发卷考试，所以开发一个线上的考试系统变得尤为必要，便于老师们直接在线上发布试卷，学生们直接在线上进行答题，同时老师可在线上看到学生们的试卷。本系统基于Vue.js技术栈实现。实现的功能如下：

①权限模块：分教师和学生两个不同的端口，用于发放试卷和答卷

②试卷模块：本系统的核心模块，用于发放试卷和学生答卷

③成绩模块：用于查询学生考试的成绩

④课程管理模块：用于展现每个科目的学生列表

⑤个人模块：用于修改个人信息



## 环境配置

### 安装node.js

https://nodejs.org/zh-cn/download/

### 安装mongodb 4.2版本

https://www.mongodb.com/try/download/community

安装在C盘

在C盘根目录下创建data文件夹，在data文件夹下面创建db文件夹

```bash
md '\data\db'
```


C:\Program Files\MongoDB\Server\4.2\bin

启动mongod，启动mongo

```bash
use test_system
//测试
db.adminusers.insert({name:"root",password:"root"})
```


登录管理员端

用户名：root

密码：root

## 启动项目

启动项目前先安装依赖

```bash
npm cache clear --force // 清除缓存
npm install
```

启动顺序:server→admin端→学生端
修改成绩页面，修改学生端页面
先启动server，再启动管理员端，最后启动学生端


文件名:

node_modules 为依赖包（不用看）
pubilc 框架自带的（不用看）

src→assets→放置静态文件例如图片
src→network→axios配置文件
...待完善