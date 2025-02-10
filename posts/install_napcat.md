---
title: Docker安装NapCat
date: 2024-11-11
tags: [NapCatQQ, Docker, Bot]
head:
  - - meta
    - name: description
      content: Docker安装NapCat
  - - meta
    - name: keywords
      content: Docker安装NapCat
---

Docker安装NapCat

---
# 使用Docker安装NapCat
## 一、安装Docker
### 使用[官方脚本](https://get.docker.com)安装
```bash
curl -fsSL https://get.docker.com -o install-docker.sh
sudo chmod +x install-docker.sh
sudo sh install-docker.sh
```
### 使用[第三方脚本](https://linuxmirrors.cn/)安装
```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```

## 二、安装NapCat容器
本文推荐新手使用host模式运行，简单方便，如遇端口冲突直接修改对应端口即可<br>
多开webui端口会依次递增，如6099,6100...无需手动修改

```bash
docker run -d \
--name <容器名称> \
--restart=always \
-e ACCOUNT=<机器人qq> \
-e TZ=Asia/Shanghai \
-e NAPCAT_GID=$(id -g) \
-e NAPCAT_UID=$(id -u) \
--network=host \
--mac-address <Mac地址> \
-v /opt/napcat/QQ:/app/.config/QQ \
-v /opt/napcat/config:/app/napcat/config \
-v /opt/napcat/logs:/app/napcat/logs \
mlikiowa/napcat-docker:latest
```

### 具体含义如下:

<font color="#00FFFF">容器名称</font> 随意填写，但要注意多开不能重名，否则无法运行<br>
<font color="#00FFFF">机器人qq</font> 顾名思义就是需要登录的机器人的QQ账号，在配置QQ持久化数据路径后可以实现快速登录<br>
<font color="#00FFFF">Mac地址</font>  就是本机的Mac地址，可通过以下指令获取
```bash
ip addr show $(ip route | awk '/default/ {print $5}') | grep link/ether | awk '{print $2}'
```

这里
```bash
-v /opt/napcat/QQ:/app/.config/QQ \
-v /opt/napcat/config:/app/napcat/config \
-v /opt/napcat/logs:/app/napcat/logs \
```
是固化路径，你也可以自定义，注意只能自定义<font color="#FF0000">:</font>前面的内容，后面的内容是容器内的路径，禁止修改<br>
同时你也可以添加自定义路径，比如你的BOT需要发送本地文件，你就可以通过映射的方式让NapCatQQ能够获取本地文件<br>
例如在上面三行后面添加,这里要注意<font color="#FF0000">:</font>前后保持一致  
```bash
-v /root/zhenxun:/root/zhenxun \
```
### 示例
```bash
docker run -d \
--name napcat \
--restart=always \
-e ACCOUNT=3116556127 \
-e TZ=Asia/Shanghai \
-e NAPCAT_GID=$(id -g) \
-e NAPCAT_UID=$(id -u) \
--network=host \
--mac-address 00:e0:70:9a:5d:2b \
-v /opt/napcat/QQ:/app/.config/QQ \
-v /opt/napcat/config:/app/napcat/config \
-v /opt/napcat/logs:/app/napcat/logs \
mlikiowa/napcat-docker:latest
```
如果mac-address报错请升级您的Docker  

## 三、对容器的一些操作
### 进入容器内部
```bash
docker exec -it <容器名称> /bin/bash
```
### 查看容器日志(扫码登录)
```bash
docker logs -f <容器名称>
```
### 暂停容器
```bash
docker stop <容器名称>
```
### 删除容器
```bash
docker rm <容器名称>
```
### 删除镜像
```bash
docker rmi mlikiowa/napcat-docker:latest
```
### 升级容器
先执行[暂停容器](#暂停容器)的操作，然后重新执行创建容器时的指令

# 使用Docker-Compose安装NapCat
## 一、安装Docker-Compose
首先确保你已正确安装Docker
### 使用包管理器安装
Ubuntu/Debian
```bash
sudo apt install docker-compose
```
使用[官方](https://github.com/docker/compose)编译的可执行文件
```bash
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-linux-$(uname -m) -o /usr/bin/docker-compose
sudo chmod +x /usr/bin/docker-compose
```
如遇下载失败或其他情况请使用第三方代理(如https://ghp.ci/)或自行去[官方release](https://github.com/docker/compose/releases/latest)下载对应系统的可执行文件并重命名为docker-compose放入/usr/bin/下再执行上面第二条命令
## 二、安装NapCat容器
对于新版docker-compose而言，去掉了version的声明<br>
创建一个名为docker-compose.yml的文件并写入以下内容
```shell
services:
    napcat:
        container_name: <容器名称>
        restart: always
        network_mode: host
        mac_address: <Mac地址>
        environment:
            - TZ=Asia/Shanghai
            - NAPCAT_UID=${NAPCAT_UID}
            - NAPCAT_GID=${NAPCAT_GID}
            - ACCOUNT=<机器人qq>
        volumes:
            - /opt/napcat/QQ:/app/.config/QQ
            - /opt/napcat/config:/app/napcat/config
            - /opt/napcat/logs:/app/napcat/logs
        image: mlikiowa/napcat-docker:latest
```
[变量含义](#具体含义如下)在前面已有说明，这里不再过多赘述。  
### 使用以下命令运行Dokcer容器  
```bash
NAPCAT_UID=$(id -u); NAPCAT_GID=$(id -g); docker-compose up -d
```
我个人建议先获取NAPCAT_UID和NAPCAT_GID的值填入docker-compose.yml文件中，方便后面更新等指令
```bash
id -u # NAPCAT_UID的值
id -g # NAPCAT_GID的值
```
root用户或sudo执行两值均为0
## 三、对容器的一些操作
注意在docker-compose.yml文件同目录下执行<br>  
如果没有写入NAPCAT_UID和NAPCAT_GID的值，执行命令时均要在前面加上  
```bash
NAPCAT_UID=$(id -u); NAPCAT_GID=$(id -g); 
```
### 暂停容器
```bash
docker-compose stop
```
### 移除容器
```bash
docker-compose down
```
### 升级容器
```bash
docker-compose stop
docker-compose up -d
```
其他操作与Dokcer安装相同

### 代理
如果无法拉去docker镜像可以将命令中的mlikiowa/napcat-docker:latest修改为镜像地址
如
```bash
docker.rainbond.cc/mlikiowa/napcat-docker:latest
docker.1panel.dev/mlikiowa/napcat-docker:latest
hub.021212.xyz:8080/mlikiowa/napcat-docker:latest
```
有其他的或者自建的也可自行修改代理地址<br>
