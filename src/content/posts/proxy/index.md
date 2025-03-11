---
title: 一些代理与镜像
published: 2025-03-09
tags: ["Proxy"]
category: Proxy
draft: false
---
<!-- markdownlint-disable MD033 -->

## Github 代理

### Cloudflare Pages

<https://gh.161122.xyz><br>
<https://gh.spoli.cn><br>

### VPS自建

<https://ghproxy.161122.xyz><br>
<https://ghproxy.021212.xyz><br>
<https://ghproxy.spoli.cn><br>

### api代理

<https://ghapi.161122.xyz><br>
<https://ghapi.021212.xyz><br>
<https://ghapi.spoli.cn><br>

## Docker 代理

### 镜像UI

<https://ui.161122.xyz><br>
<https://ui.021212.xyz><br>
<https://ui.spoli.cn><br>

### 镜像地址

<https://hub.161122.xyz><br>
<https://hub.021212.xyz><br>
<https://hub.spoli.cn><br>

## 我的NGINX配置

```text
server {
    listen       80;
    listen       443 ssl;
    server_name  ui.021212.xyz;
    ssl_certificate 021212.pem;
    ssl_certificate_key 021212.key;
    ssl_session_timeout 1d;
    ssl_session_cache   shared:SSL:50m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_buffer_size 8k;
    proxy_connect_timeout 600;
    proxy_send_timeout    600;
    proxy_read_timeout    600;
    send_timeout          600;
    location / {
        proxy_pass   http://localhost:50000;
        proxy_set_header  Host $host;
        proxy_set_header  Origin $scheme://$host;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header  X-Forwarded-Proto $scheme;
        proxy_set_header  X-Forwarded-Ssl on; 
        proxy_set_header  X-Forwarded-Port $server_port;
        proxy_set_header  X-Forwarded-Host $host;
    }
}
server {
    listen       80;
    listen       443 ssl;
    server_name  hub.021212.xyz;
    ssl_certificate 021212.pem;
    ssl_certificate_key 021212.key;
    ssl_session_timeout 1d;
    ssl_session_cache   shared:SSL:50m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_buffer_size 8k;
    proxy_connect_timeout 600;
    proxy_send_timeout    600;
    proxy_read_timeout    600;
    send_timeout          600;
    location / {
        proxy_pass   http://localhost:51000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;        
        proxy_set_header X-Nginx-Proxy true;
        proxy_buffering off;
        proxy_redirect off;
    }
}
server {
    listen       80;
    listen       443 ssl;
    server_name  ghproxy.021212.xyz;
    ssl_certificate 021212.pem;
    ssl_certificate_key 021212.key;
    ssl_session_timeout 1d;
    ssl_session_cache   shared:SSL:50m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_buffer_size 8k;
    proxy_connect_timeout 600;
    proxy_send_timeout    600;
    proxy_read_timeout    600;
    send_timeout          600;
    location / {
        proxy_pass   http://localhost:52000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;        
        proxy_set_header X-Nginx-Proxy true;
        proxy_buffering off;
        proxy_redirect off;
    }
}
server {
    listen       80;
    listen       443 ssl;
    server_name  ghapi.021212.xyz;
    ssl_certificate 021212.pem;
    ssl_certificate_key 021212.key;
    ssl_session_timeout 1d;
    ssl_session_cache   shared:SSL:50m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_buffer_size 8k;
    proxy_connect_timeout 600;
    proxy_send_timeout    600;
    proxy_read_timeout    600;
    send_timeout          600;
    location / {
        proxy_pass   http://localhost:53000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;        
        proxy_set_header X-Nginx-Proxy true;
        proxy_buffering off;
        proxy_redirect off;
    }
}
server {
    listen       80;
    listen       443 ssl;
    server_name  nginxui.021212.xyz;
    ssl_certificate 021212.pem;
    ssl_certificate_key 021212.key;
    ssl_session_timeout 1d;
    ssl_session_cache   shared:SSL:50m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_buffer_size 8k;
    proxy_connect_timeout 600;
    proxy_send_timeout    600;
    proxy_read_timeout    600;
    send_timeout          600;
    location / {
        proxy_pass   http://localhost:9000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;        
        proxy_set_header X-Nginx-Proxy true;
        proxy_buffering off;
        proxy_redirect off;
    }
}
server {
    listen       80;
    listen       443 ssl;
    server_name  ui.161122.xyz;
    ssl_certificate 161122.pem;
    ssl_certificate_key 161122.key;
    ssl_session_timeout 1d;
    ssl_session_cache   shared:SSL:50m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_buffer_size 8k;
    proxy_connect_timeout 600;
    proxy_send_timeout    600;
    proxy_read_timeout    600;
    send_timeout          600;
    location / {
        proxy_pass   http://localhost:50000;
        proxy_set_header  Host $host;
        proxy_set_header  Origin $scheme://$host;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header  X-Forwarded-Proto $scheme;
        proxy_set_header  X-Forwarded-Ssl on; 
        proxy_set_header  X-Forwarded-Port $server_port;
        proxy_set_header  X-Forwarded-Host $host;
    }
}
server {
    listen       80;
    listen       443 ssl;
    server_name  hub.161122.xyz;
    ssl_certificate 161122.pem;
    ssl_certificate_key 161122.key;
    ssl_session_timeout 1d;
    ssl_session_cache   shared:SSL:50m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_buffer_size 8k;
    proxy_connect_timeout 600;
    proxy_send_timeout    600;
    proxy_read_timeout    600;
    send_timeout          600;
    location / {
        proxy_pass   http://localhost:51000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;        
        proxy_set_header X-Nginx-Proxy true;
        proxy_buffering off;
        proxy_redirect off;
    }
}
server {
    listen       80;
    listen       443 ssl;
    server_name  ghproxy.161122.xyz;
    ssl_certificate 161122.pem;
    ssl_certificate_key 161122.key;
    ssl_session_timeout 1d;
    ssl_session_cache   shared:SSL:50m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_buffer_size 8k;
    proxy_connect_timeout 600;
    proxy_send_timeout    600;
    proxy_read_timeout    600;
    send_timeout          600;
    location / {
        proxy_pass   http://localhost:52000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;        
        proxy_set_header X-Nginx-Proxy true;
        proxy_buffering off;
        proxy_redirect off;
    }
}
server {
    listen       80;
    listen       443 ssl;
    server_name  ghapi.161122.xyz;
    ssl_certificate 161122.pem;
    ssl_certificate_key 161122.key;
    ssl_session_timeout 1d;
    ssl_session_cache   shared:SSL:50m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_buffer_size 8k;
    proxy_connect_timeout 600;
    proxy_send_timeout    600;
    proxy_read_timeout    600;
    send_timeout          600;
    location / {
        proxy_pass   http://localhost:53000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;        
        proxy_set_header X-Nginx-Proxy true;
        proxy_buffering off;
        proxy_redirect off;
    }
}
server {
    listen       80;
    listen       443 ssl;
    server_name  nginxui.161122.xyz;
    ssl_certificate 161122.pem;
    ssl_certificate_key 161122.key;
    ssl_session_timeout 1d;
    ssl_session_cache   shared:SSL:50m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_buffer_size 8k;
    proxy_connect_timeout 600;
    proxy_send_timeout    600;
    proxy_read_timeout    600;
    send_timeout          600;
    location / {
        proxy_pass   http://localhost:9000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;        
        proxy_set_header X-Nginx-Proxy true;
        proxy_buffering off;
        proxy_redirect off;
    }
}
server {
    listen       80;
    listen       443 ssl;
    server_name  ui.spoli.cn;
    ssl_certificate spoli.pem;
    ssl_certificate_key spoli.key;
    ssl_session_timeout 1d;
    ssl_session_cache   shared:SSL:50m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_buffer_size 8k;
    proxy_connect_timeout 600;
    proxy_send_timeout    600;
    proxy_read_timeout    600;
    send_timeout          600;
    location / {
        proxy_pass   http://localhost:50000;
        proxy_set_header  Host $host;
        proxy_set_header  Origin $scheme://$host;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header  X-Forwarded-Proto $scheme;
        proxy_set_header  X-Forwarded-Ssl on; 
        proxy_set_header  X-Forwarded-Port $server_port;
        proxy_set_header  X-Forwarded-Host $host;
    }
}
server {
    listen       80;
    listen       443 ssl;
    server_name  hub.spoli.cn;
    ssl_certificate spoli.pem;
    ssl_certificate_key spoli.key;
    ssl_session_timeout 1d;
    ssl_session_cache   shared:SSL:50m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_buffer_size 8k;
    proxy_connect_timeout 600;
    proxy_send_timeout    600;
    proxy_read_timeout    600;
    send_timeout          600;
    location / {
        proxy_pass   http://localhost:51000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;        
        proxy_set_header X-Nginx-Proxy true;
        proxy_buffering off;
        proxy_redirect off;
    }
}
server {
    listen       80;
    listen       443 ssl;
    server_name  ghproxy.spoli.cn;
    ssl_certificate spoli.pem;
    ssl_certificate_key spoli.key;
    ssl_session_timeout 1d;
    ssl_session_cache   shared:SSL:50m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_buffer_size 8k;
    proxy_connect_timeout 600;
    proxy_send_timeout    600;
    proxy_read_timeout    600;
    send_timeout          600;
    location / {
        proxy_pass   http://localhost:52000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;        
        proxy_set_header X-Nginx-Proxy true;
        proxy_buffering off;
        proxy_redirect off;
    }
}
server {
    listen       80;
    listen       443 ssl;
    server_name  ghapi.spoli.cn;
    ssl_certificate spoli.pem;
    ssl_certificate_key spoli.key;
    ssl_session_timeout 1d;
    ssl_session_cache   shared:SSL:50m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_buffer_size 8k;
    proxy_connect_timeout 600;
    proxy_send_timeout    600;
    proxy_read_timeout    600;
    send_timeout          600;
    location / {
        proxy_pass   http://localhost:53000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;        
        proxy_set_header X-Nginx-Proxy true;
        proxy_buffering off;
        proxy_redirect off;
    }
}
server {
    listen       80;
    listen       443 ssl;
    server_name  nginxui.spoli.cn;
    ssl_certificate spoli.pem;
    ssl_certificate_key spoli.key;
    ssl_session_timeout 1d;
    ssl_session_cache   shared:SSL:50m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_buffer_size 8k;
    proxy_connect_timeout 600;
    proxy_send_timeout    600;
    proxy_read_timeout    600;
    send_timeout          600;
    location / {
        proxy_pass   http://localhost:9000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;        
        proxy_set_header X-Nginx-Proxy true;
        proxy_buffering off;
        proxy_redirect off;
    }
}
```
