---
title: Docker安装Napcat
published: 2025-03-09
description: "使用Docker安装Napcat"
#image: "./cover.jpeg"
tags: ["Docker", "Napcat"]
category: Guides
draft: false
---
## 安装Docker及Docker-Compose
执行以下命令
```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```
## 安装NapCat
创建一个文件名为docker-compose.yml
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
其中mac_address可以通过以下命令获取
```bash
ip addr show $(ip route | awk '/default/ {print $5}') | grep link/ether | awk '{print $2}'
```
### 启动
```bash
docker-compose up -d
```
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