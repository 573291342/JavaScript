# Git 命令

## 设置用户签名
- 设置签名(此处的用户名和邮箱和GitHub里的没有关系)
- 项目级别/仓库级别：仅在当前本地仓库范围内有效 不设置参数
- 系统用户级别：登录当前操作系统的用户范围 设置 --global
- 优先级就近原则，二者都有是采用项目级别签名
  ### git config --global user.name 用户名 
  ### git config --global user.email 邮箱 

## 初始化本地库
  ### git init
- 查看目录下的文件，不包括隐藏的文件 ll
- 查看目录下的文件，包括隐藏的文件 ls -lA
- .git 目录存放的是本地库相关的子目录和文件，不要删除，也不要修改

## 查看本地库状态
  ### git status

## 步骤：
  ### git init - 初始化仓库。
  ### git add . - 添加文件到暂存区。
  ### git rm --cached <file>...删除暂存区的文件
  ### git -m "版本信息" commit - 将暂存区内容添加到仓库中(-m 版本信息，一定写)

## 查看版本信息
  ### git reflog(精简)
  ### git ref(详细)

## 版本穿梭
  ### git reset --hard 版本号

## 分支
  ### 创建分支 git branch 分支名
  ### 查看分支 git branch -v
  ### 切换分支 git checkout 分支名
  ### 把指定的分支合并到当前分支 git merge 分支名
## 合并冲突
  ### 修改文件中的特殊字符，决定保留哪些字符，然后提交，注意提交不要带文件名称

## 创建GitHub地址别名
  ### git remote -v 查看别名
  ### git remote add 别名 地址 //创建别名
  ### git remote rename old new 改仓库地址

## 推送本地库到远程库
  ### git push 地址别名 分支名
## 拉取远程库到本地库
  ### git pull 地址别名 分支名
## 克隆远程仓库
  ### git clone [url] 
  - git clone 拷贝一个 Git 仓库到本地，让自己能够查看该项目，或者进行修改。

# JavaScript

### 1.  JavaScript是什么

- JavaScript是脚本语言
- 不需要编译，由js解释器（js引擎）逐行解释并执行
- 现在也可以基于Node.js技术进行客户端编程

### 2.  浏览器执行 JS 简介

- 渲染引擎：用来解析HTML与CSS ,俗称内核，比如chrome浏览器的blink,老版的webkit
- js引擎：也称为JS解析器，用来读取网页中的JavaScript代码，对其处理后运行，比如chrome浏览器的v8

> 1、IE浏览器内核：Trident内核，也是俗称的IE内核；
>
> 2、Chrome浏览器内核：统称为Chromium内核或Chrome内核，以前是Webkit内核，现在是Blink内核；
>
> 3、Firefox浏览器内核：Gecko内核，俗称Firefox内核；
>
> 4、苹果Safari浏览器内核：Webkit内核，特点是不受IE、Firefox等内核的约束，比较安全；
>
> 5、Opera浏览器内核：最初是自己的Presto内核，后来加入谷歌大军，从Webkit又到了Blink内核；
>
> 6、360浏览器、猎豹浏览器内核：IE+Chrome双内核；
>
> 7、搜狗、遨游、QQ浏览器内核：Trident（兼容模式）+Webkit（高速模式）；
>
> 8、百度浏览器、世界之窗内核：IE内核；
>
> 9、2345浏览器内核：好像以前是IE内核，现在也是IE+Chrome双内核了；
>
> 10、UC浏览器内核：这个众口不一，UC说是他们自己研发的U3内核，但好像还是基于Webkit和Trident，还有说是基于火狐内核。

### 3.  JS的组成

- ECMAScript   JavaScript语法
- DOM  页面文档对象模型
- BOM  浏览器对象模型

### 4. 书写位置

行内，内嵌和外部

### 5. 输入输出

`prompt();` 输入框

`alert();` 警示框

`console.log();` 控制台输出

### 6. 变量

js变量是程序运行时根据等号右边的值确定的

七种基本数据类型：null, undefined,Number, Boolean, BigInt, String, Symbol

一种对象类型：Object

1. Number

   ```js
   console.log(Number.MAX_VALUE); //最大正数
   console.log(-Number.MAX_VALUE); //最小负数
   console.log(Number.MIN_VALUE); //最小正数
   console.log(Number.NEGATIVE_INFINITY); //负无穷
   console.log(Number.POSITIVE_INFINITY); //正无穷
   console.log('2' -'a'); //NaN
   ```

   **注意：Number对象里的isNaN()和全局isNaN()有区别**

2. null

   ```js
   console.log(typeof null); //object
   ```

3. String

   **'12'+12=‘1212’**

   模板字符串

   new String()

4. Boolean

5. undefined

### 数字转字符

- toString()；
- newString(); 
- 加号拼接法





# 数据可视化

1. D3.js
2. Echarts.js
3. Highcharts.js
4. AntV

### 1. Echarts五部曲

1. 下载并引入二charts.js
2. 准备一个具备大小的DOM容器
3. 初始化echarts实例对象
4. 指定配置项和数据
5. 将配置项设施给echarts实例对象

### 2. 边框图片

使用场景，盒子的大小不一，但边框一样

切图原理，切四个角，按照上右下左的顺序切出去

| 属性                | 描述                                    |
| ------------------- | --------------------------------------- |
| border-image-source | 边框图片路径                            |
| border-image-slice  | 图片边框的内偏移                        |
| border-image-width  | 图片边框宽度                            |
| border-image-repeat | 图像边框是否平铺（repeat,round,stretch) |

```css
width: 400px;
height: 300px;
border: 15px solid pink;
border-image-source: url(./项目实例/images/border.jpg);
/* border-image-slice: 160 160 160 160; */
border-image-slice: 166;
/* 这个属性默认是border宽度  不会挤压文字*/
border-image-width: 30px;
/* border-image-repeat: repeat; */
border-image-repeat: round;
```

