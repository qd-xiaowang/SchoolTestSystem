
## 实现的功能如下：

技术栈:vue3+mongodb+node.js

①权限模块：分教师和学生两个不同的端口，用于发放试卷和答卷

②试卷模块：本系统的核心模块，用于发放试卷和学生答卷

③成绩模块：用于查询学生考试的成绩

④课程管理模块：用于展现每个科目的学生列表

⑤个人模块：用于修改个人信息


## 环境配置

### 安装node.js
注意版本为16.14.2

https://nodejs.org/zh-cn/download/
http://nodejs.cn/download/


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
//连接数据库
use test_system
//测试
db.adminusers.insert({name:"root",password:"root"})
```

## 安装依赖
server/adminorteacher/student
```bash
npm i
```

如果报错可以先清除缓存
```bash
npm cache clear --force
```

## 启动项目

启动顺序:server→admin端→学生端

