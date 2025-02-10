---
title: 安装运行NoneBot
date: 2024-11-12
tags: [NapCatQQ, NoneBot, OneBotV11]
head:
  - - meta
    - name: description
      content: 安装运行NoneBot
  - - meta
    - name: keywords
      content: 安装运行NoneBot
---

使用nb创建nonebot并与NapCat建立通信

---
[NoneBot官网](https://nonebot.dev/)
本文主要针对于Debian系系统，如Debian，Ubuntu。
# 安装基础依赖
## 一、安装Python3
### 1.包管理器安装
对于高版本系统来说，默认可安装的Python3版本符合nonebot的最低要求，只需执行以下命令即可
```bash
sudo apt update -y
sudo apt install python3
```
输入以下命令可查看当前Python3版本
```bash
sudo python3 -V
```
比如这样
```shell
root@DESKTOP-2PCRF51:~# python3 -V
Python 3.8.10
```
输出的Python3版本为3.8.10<br>
如果你的Python3版本低于3.9，那么就需要手动编译安装高版本Python3
### 2.编译安装
这里我就需要安装高版本Python。这里选择安装Python3.11<br>
先安装基础依赖<br>
```bash
apt-get update -y && apt-get install -y \
    software-properties-common \
    build-essential \
    wget \
    uuid-dev \
    tk-dev \
    binutils \
    zlib1g-dev \
    libncurses5-dev \
    libgdbm-dev \
    libnss3-dev \
    libssl-dev \
    libsqlite3-dev \
    libreadline-dev \
    libffi-dev \
    libbz2-dev \
    liblzma-dev \
    && apt-get clean && \
    rm -rf /var/lib/apt/lists/*
```
安装较慢可以使用[第三方脚本](https://linuxmirrors.cn/)进行换源
```bash
bash <(curl -sSL https://linuxmirrors.cn/main.sh)
```
去[Python官网](https://www.python.org/)下载源码压缩包<br>
执行以下命令编译安装
```bash
wget https://www.python.org/ftp/python/3.11.10/Python-3.11.10.tar.xz
tar -xf Python-3.11.10.tar.xz
cd Python-3.11.10/
./configure --enable-optimizations --enable-shared
make -j$(nproc)
make altinstall
```
编译安装比较缓慢，请耐心等待<br>
编译完成后通过以下命令获取版本
```shell
root@DESKTOP-2PCRF51:~/Python-3.11.10# python3.11 -V
python3.11: error while loading shared libraries: libpython3.11.so.1.0: cannot open shared object file: No such file or directory
```
如果遇到上面这种错误，请执行以下命令
```bash
cp /usr/local/lib/libpython3.11.so* /usr/lib/
```
再去查看版本
```shell
root@DESKTOP-2PCRF51:~/Python-3.11.10# python3.11 -V
Python 3.11.10
```
得到了我们想要的结果<br>
如果需要将默认的Python3指向当前编译安装的Python3.11，请执行以下命令<br>
查看python3 指向
```bash
cd /usr/bin
ls -l | grep python
```
输出结果为
```shell
root@DESKTOP-2PCRF51:/usr/bin# ls -l | grep python
lrwxrwxrwx 1 root   root           23 Sep 12 00:02 pdb3.8 -> ../lib/python3.8/pdb.py
lrwxrwxrwx 1 root   root           31 Mar 13  2020 py3versions -> ../share/python3/py3versions.py
lrwxrwxrwx 1 root   root            9 Mar 13  2020 python3 -> python3.8
-rwxr-xr-x 1 root   root      5478168 Sep 12 00:02 python3.8
```
可以看到当前python3指向的是python3.8<br>
删除
```bash
sudo rm /usr/bin/python3
```
新建
```bash
sudo ln -s /usr/local/bin/python3.11 /usr/bin/python3
```
这时再去输入python3 -V得到期望的结果
```shell
root@DESKTOP-2PCRF51:/usr/bin# python3 -V
Python 3.11.10
```
## 安装nb脚手架
确保你已经安装了 Python 3.9 及以上版本，然后在命令行中执行以下命令：<br>
#### 安装 pipx
```bash
python3 -m pip install --user pipx
python3 -m pipx ensurepath
```
如果在此步骤的输出中出现了"open a new terminal"或者"re-login"字样，那么请关闭当前终端并重新打开一个新的终端。<br>
对于包管理器安装的Python3来说可能没有安装pip，手动执行以下命令安装pip
```bash
sudo apt install python3-pip
```
如果pip安装pipx时报错"error: externally-managed-environment"，请执行以下命令(注意修改为自己的Python3版本)
```bash
sudo mv /usr/lib/python3.11/EXTERNALLY-MANAGED /usr/lib/python3.11/EXTERNALLY-MANAGED.bak
```
#### 安装脚手架
```bash
pipx install nb-cli
```
安装完成后，你可以在命令行使用 nb 命令来使用脚手架。如果不显示输出请关闭当前终端并重新打开一个新的终端。
# 运行NoneBot
## 安装NoneBot
在当前终端输入nb，可以看到以下输出
通过上下键移动，回车确认，这里选择第一个(默认)
<img src="/nonebot_1.png" data-fancybox="gallery"/>
依旧选择第一个(默认),回车确认
<img src="/nonebot_2.png" data-fancybox="gallery"/>
这一步输入你的机器人项目名称，也是你的机器人文件夹名称，会在当前路径创建一个同名的文件夹，随意
<img src="/nonebot_3.png" data-fancybox="gallery"/>
注意通过上下键移动，空格键选中，选中后会变绿色<br>
这里选择第一项OneBot V11，回车下一步，如图所示
<img src="/nonebot_4.png" data-fancybox="gallery"/>
这里和上一步一样通过空格键选中<br>
选择FastAPI以及websockets并回车下一步，如图所示
<img src="/nonebot_5.png" data-fancybox="gallery"/>
接下来两项均按回车默认即可
<img src="/nonebot_6.png" data-fancybox="gallery"/>
这里空格选中echo插件并回车启用
<img src="/nonebot_7.png" data-fancybox="gallery"/>
最终得到以下输出
```shell
Done!
Add following packages to your project using dependency manager like poetry or pdm:
  nonebot-adapter-onebot nonebot2[fastapi] nonebot2[websockets]
Run the following command to start your bot:
  cd mybot
  nb run --reload
```
至此完成NoneBot的安装，接下来配置环境变量并于NapCat建立通信

## 连接NapCat
### 配置NoneBot
进入刚刚创建的NoneBot文件夹，并列出所有文件
```bash
cd mybot
ls -la
```
```shell
root@DESKTOP-2PCRF51:~/mybot# ls -la
total 24
drwxr-xr-x  3 root root 4096 Nov 12 14:20 .
drwx------ 11 root root 4096 Nov 12 14:20 ..
-rw-r--r--  1 root root   28 Nov 12 14:20 .env.prod
drwxr-xr-x  4 root root 4096 Nov 12 14:20 .venv
-rw-r--r--  1 root root  198 Nov 12 14:20 README.md
-rw-r--r--  1 root root  279 Nov 12 14:22 pyproject.toml
```
其中.env.prod就是你的配置文件
查看文件内容可以看到它已经帮我们配置好了驱动器
```shell
root@DESKTOP-2PCRF51:~/mybot# cat .env.prod
DRIVER=~fastapi+~websockets
```
我们还需要填写以下内容,可以通过vim或者本地上传的形式修改
```shell
HOST=0.0.0.0 #默认是127.0.0.1,填0.0.0.0方便一点
PORT=8080 #运行的端口，想怎么改就怎么改，不冲突进行
SUPERUSERS=["1233211234"] #主人QQ
LOG_LEVEL=DEBUG #日志等级，非必填，如INFO，ERROR，DEBUG
NICKNAME=["bot"] #机器人昵称，想怎么改就怎么改
COMMAND_START=["/", ""] #命令消息的起始符，非必填
COMMAND_SEP=[".", " "] #命令消息的分隔符，非必填
```
完整的配置文件如下
```shell
root@DESKTOP-2PCRF51:~/mybot# cat .env.prod
DRIVER=~fastapi+~websockets
HOST=0.0.0.0
PORT=8080
SUPERUSERS=["1975969493"]
LOG_LEVEL=DEBUG
NICKNAME=["bot"]
COMMAND_START=["/", ""]
```
### 配置NapCat
进入NapCat的webui界面
<img src="/napcat_1.png" data-fancybox="gallery"/>
打开 启用反向 WebSocket 服务 ，点击添加，在方框内填入以下内容

```shell
ws://127.0.0.1:8080/onebot/v11/ws
```
如果是修改配置文件(onebot11_QQ号.json)则文件中对于内容如下，其他不需要修改
```shell
"reverseWs": {
    "enable": true,
    "urls": [
      "ws://127.0.0.1:8080/onebot/v11/ws"
    ]
  },
```
其中127.0.0.1是你的nonebot机器人所处环境的ip地址，如果是本地运行的napcat或者使用host模式运行的napcat容器填127.0.0.1即可<br>
如果是桥接模式的容器则改为 host.docker.internal 或者 172.17.0.1 或者你的公网ip 或者路由器分配的子网ip<br>

8080是你在nonebot配置文件中填写的[PORT](#配置nonebot)<br>
/onebot/v11/ws是固定内容，无需更改<br>
点击保存，此时在NoneBot项目文件夹中执行nb run即可运行机器人并成功连接NapCat

```shell
root@DESKTOP-2PCRF51:~/mybot# nb run
Using python: /root/mybot/.venv/bin/python
11-12 14:55:43 [SUCCESS] nonebot | NoneBot is initializing...
11-12 14:55:43 [INFO] nonebot | Current Env: prod
11-12 14:55:43 [DEBUG] nonebot | Loaded Config: {'driver': '~fastapi+~websockets', 'host': IPv4Address('0.0.0.0'), 'port': 8080, 'log_level': 'DEBUG', 'api_timeout': 30.0, 'superusers': {'1975969493'}, 'nickname': {'bot'}, 'command_start': {'', '/'}, 'command_sep': {'.'}, 'session_expire_timeout': datetime.timedelta(seconds=120)}
11-12 14:55:43 [DEBUG] nonebot | Succeeded to load adapter "OneBot V11"
11-12 14:55:43 [SUCCESS] nonebot | Succeeded to load plugin "echo" from "nonebot.plugins.echo"
11-12 14:55:43 [SUCCESS] nonebot | Running NoneBot...
11-12 14:55:43 [DEBUG] nonebot | Loaded adapters: OneBot V11
11-12 14:55:43 [INFO] uvicorn | Started server process [1959]
11-12 14:55:43 [INFO] uvicorn | Waiting for application startup.
11-12 14:55:43 [INFO] uvicorn | Application startup complete.
11-12 14:55:43 [INFO] uvicorn | Uvicorn running on http://0.0.0.0:8080 (Press CTRL+C to quit)
11-12 14:55:47 [INFO] uvicorn | ('127.0.0.1', 60268) - "WebSocket /onebot/v11/ws" [accepted]
11-12 14:55:47 [INFO] nonebot | OneBot V11 | Bot 481262889 connected
11-12 14:55:47 [INFO] websockets | connection open
```
在QQ中发送消息成功响应

<img src="/nonebot_8.png" data-fancybox="gallery"/>


