---
title: Docker安装Napcat
published: 2025-03-09
description: "使用Docker安装Napcat"
image: "./logo.png"
tags: ["Docker", "Napcat"]
category: Guides
draft: false
---
<!-- markdownlint-disable MD033 -->
## `安装Docker及Docker-Compose`

执行以下命令

```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```

:::caution
一键安装(可能会出现网络错误)，建议使用上面的脚本自行选择
:::

```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh) \
  --source repo.huaweicloud.com/docker-ce \
  --source-registry registry.hub.docker.com \
  --protocol https \
  --install-latest true \
  --close-firewall true \
  --ignore-backup-tips
  ```

执行完成后会提示

```shell
当前安装版本：Docker version 28.0.1, build 068a01e
              Docker Compose version v2.33.1

✔ 安装完成
```

## `安装NapCat`

创建一个文件名为`docker-compose.yml`
填入以下内容：

```shell
services:
    napcat:
        image: hub.161122.xyz/mlikiowa/napcat-docker:latest
        container_name: napcat
        restart: always
        network_mode: host
        mac_address: 00:e0:70:9a:5d:2b
        privileged: true
        environment:
            - TZ=Asia/Shanghai
            - NAPCAT_UID=0
            - NAPCAT_GID=0
        volumes:
            - /app/.config/QQ:/app/.config/QQ
            - /app/napcat/config:/app/napcat/config
            - /app/napcat/config:/app/napcat/logs
```

:::note
其中<br>
`hub.161122.xyz`是我搭建的镜像代理地址<br>你可以改成你自己的或者直接使用原版`mlikiowa/napcat-docker:latest`<br>
`container_name`随意取<br>
`NAPCAT_UID`和`NAPCAT_GID` 一般来说都是`0`，可通过`id -u`和`id -g`获取<br>
`mac_address`记得修改为你自己设备的，可以通过以下命令获取

```bash
ip addr show $(ip route | awk '/default/ {print $5}') | grep link/ether | awk '{print $2}'
```

`volumes`映射`:`前面的文件夹可以自己选择，比如可以改成<br>
`- /opt/napcat/QQ:/app/.config/QQ:/app/.config/QQ`
:::

### 启动

在`docker-compose.yml`文件同目录下执行

```bash
docker-compose up -d
```

:::tip
初始密钥为`napcat`<br>
通过`http://ip:6099/webui?token=napcat`直接访问`WebUi`进行配置<br>
第一次登录会提示你修改密钥,记得修改哦~
:::

### 关闭

```bash
docker-compose stop
```

### 更新

```bash
docker-compose stop && docker-compose up -d
```

### 移除

```bash
docker-compose down
```
