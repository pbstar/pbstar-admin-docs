# Server 服务端

本项目提供 nodejs+mysql 的服务端代码，同时欢迎使用其他后端语言的同学贡献其他版本的后端代码。
项目地址：[https://github.com/pbstar/pbstar-admin-nodejs](https://github.com/pbstar/pbstar-admin-nodejs)

## 快速开始

1. 克隆仓库

```bash
git clone https://github.com/pbstar/pbstar-admin-nodejs.git
```

2. 安装依赖

```bash
npm install
```

3. 配置数据库
   修改`src/db/config.js`中的数据库配置

4. 运行

```bash
npm run dev
```

## 项目结构

```
src/
├── controllers/      # 控制器
├── db/               # 数据库配置
├── middlewares/      # 中间件
├── routes/           # 路由
├── utils/            # 工具函数
├── main.js           # 服务入口
└── app.js            # Express应用入口
```

## 接口文档

### Main 模块

<details>
<summary>登录</summary>

- 接口：POST /main/login
- 请求参数：

```
{
    "username": "admin",
    "password": "123456"
}
```

- 响应参数：

```
{
    "code": 200,//401-账号或密码错误
    "data": {
        "token":"xxxxxxxxxxxxxxxx",
        "id":1,
        "username":"admin",
        "name":"管理员",
        "avatar":"https://avatars.githubusercontent.com/u/11055953?s=40&v=4",
        "role":"admin",
        "btns":"list_add,list_edit,list_del"
    },
    "msg": "成功"
}
```

</details>
<details>
<summary>Token 登录</summary>

- 接口：POST /main/loginByToken
- 请求参数：

```
{}
```

- 响应参数：

```
{
    "code": 200,//401-token失效
    "data": {
        "token":"xxxxxxxxxxxxxxxx",
        "id":1,
        "username":"admin",
        "name":"管理员",
        "avatar":"https://avatars.githubusercontent.com/u/11055953?s=40&v=4",
        "role":"admin",
        "btns":"list_add,list_edit,list_del"
    },
    "msg": "成功"
}
```

</details>
<details>
<summary>退出登录</summary>

- 接口：POST /main/logout
- 请求参数：

```
{}
```

- 响应参数：

```
{
    "code": 200,//401-token失效,500-服务器错误
    "data": {},
    "msg": "成功"
}
```

</details>
<details>
<summary>获取左侧菜单</summary>

- 接口：GET /main/getMyNavTreeList
- 请求参数：

```
{}
```

- 响应参数：

```
{
    "code": 200,
    "data": [
        {
            "id": 1,
            "name": "系统管理",
            "children": [
                {
                    "id": 2,
                    "name": "用户管理",
                    "icon": "HomeFilled",
                    "url": "/system/user",
                    "children": [
                        {
                            "id": 3,
                            "name": "用户列表",
                            "url": "/system/user/list"
                        }
                    ]
                }
            ]
        }
    ],
    "msg": "成功"
}
```

</details>
<details>
<summary>修改个人信息</summary>

- 接口：POST /main/updateMyInfo
- 请求参数：

```
{
    username:"admin",
    name:"管理员",
    avatar:"https://avatars.githubusercontent.com/u/11055953?s=40&v=4",
    password:"123456"
}
```

- 响应参数：

```
{
    "code": 200,
    "data": null,
    "msg": "成功"
}
```

</details>
<details>
<summary>获取枚举值</summary>

- 接口：GET /main/getEnum
- 请求参数：

```
{
    enumKey: "sys_role,boolean"
}
```

- 响应参数：

```
{
    "code": 200,
    "data": {
        "sys_role": [
            {
                "id": 2,
                "label": "管理员",
                "value": "admin",
            }
        ],
        "boolean": [
            {
                "id": 1,
                "label": "是",
                "value": "1",
            },
            {
                "id": 2,
                "label": "否",
                "value": "0",
            }
        ]
    },
    "msg": "成功"
}
```

</details>

### System 模块

**代码生成器**

<details>
<summary>代码生成</summary>
</details>

**枚举管理**

<details>
<summary>获取枚举列表</summary>
</details>
<details>
<summary>新增枚举</summary>
</details>
<details>
<summary>删除枚举</summary>
</details>
<details>
<summary>修改枚举</summary>
</details>
<details>
<summary>获取枚举详情</summary>
</details>
<details>
<summary>获取枚举值列表</summary>
</details>
<details>
<summary>新增枚举值</summary>
</details>
<details>
<summary>删除枚举值</summary>
</details>
<details>
<summary>修改枚举值</summary>
</details>
<details>
<summary>获取枚举值详情</summary>
</details>

**菜单管理**

<details>
<summary>获取全部菜单</summary>
</details>
<details>
<summary>获取菜单列表</summary>
</details>
<details>
<summary>新增菜单</summary>
</details>
<details>
<summary>删除菜单</summary>
</details>
<details>
<summary>修改菜单</summary>
</details>
<details>
<summary>获取菜单详情</summary>
</details>

**用户管理**

<details>
<summary>获取用户列表</summary>
</details>
<details>
<summary>新增用户</summary>
</details>
<details>
<summary>删除用户</summary>
</details>
<details>
<summary>修改用户</summary>
</details>
<details>
<summary>获取用户详情</summary>
</details>

**角色管理**

<details>
<summary>获取角色列表</summary>
</details>
<details>
<summary>新增角色</summary>
</details>
<details>
<summary>删除角色</summary>
</details>
<details>
<summary>修改角色</summary>
</details>
<details>
<summary>获取角色详情</summary>
</details>

### Example 模块

<details>
<summary>获取示例人员列表</summary>

- 接口：POST /example/test/getList
- 请求参数：

```
{
    "pageNum": 1,
    "pageSize": 10,
    "name": "张三",
}
```

- 响应参数：

```
{
    "code": 200,//401-token失效,500-服务器错误
    "data": {
        list:[],
        total:0,
    },
    "msg": "成功"
}
```

</details>
<details>
<summary>新增示例人员</summary>
</details>
<details>
<summary>删除示例人员</summary>
</details>
<details>
<summary>获取示例人员详情</summary>
</details>
<details>
<summary>修改示例人员</summary>
</details>
<details>
<summary>获取示例人员教育子表列表</summary>
</details>
<details>
<summary>新增示例人员教育子表</summary>
</details>
<details>
<summary>删除示例人员教育子表</summary>
</details>
<details>
<summary>修改示例人员教育子表</summary>
</details>
<details>
<summary>获取示例人员教育子表详情</summary>
</details>
