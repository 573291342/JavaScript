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


