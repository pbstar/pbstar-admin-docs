# 部署

## 部署流程

1. 配置 apps/app.json 文件，配置子应用的线上地址（以 http/https 开头）。
2. 分别打包并部署主应用和子应用。

## nginx 配置

主应用：

```nginx
server {
    listen 8800;
    server_name pbstar-admin.pbstar.cn;
    location / {
        root   /www/wwwroot/pbstar-admin;
        index  index.html index.htm;

        # h5 路由配置
        try_files $uri $uri/ /index.html;
    }

    #接口代理
    location ^~ /api/  {
        proxy_pass http://pbstar-admin-server.pbstar.cn/;
        proxy_set_header Host pbstar-admin-server.pbstar.cn;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

子应用：

```nginx
server {
    listen 8801;
    server_name pbstar-admin-example.pbstar-admin.cn;
    location / {
        root   /www/wwwroot/pbstar-admin-example;
        index  index.html index.htm;

        # h5 路由配置
        try_files $uri $uri/ /index.html;

        # 允许来自主应用的跨域请求
        add_header 'Access-Control-Allow-Origin' 'http://pbstar-admin.pbstar.cn/';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS';
        add_header 'Access-Control-Allow-Headers' '*';

        # 处理预检请求
        if ($request_method = 'OPTIONS') {
            return 204;
        }
    }

    #接口代理
    location /api/ {
        proxy_pass http://pbstar-admin-server.pbstar.cn/;
        proxy_set_header Host pbstar-admin-server.pbstar.cn;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        # 允许来自主应用的跨域请求
        add_header 'Access-Control-Allow-Origin' 'http://pbstar-admin.pbstar.cn/';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS';
        add_header 'Access-Control-Allow-Headers' '*';

        # 处理预检请求
        if ($request_method = 'OPTIONS') {
            return 204;
        }
    }
}
```
