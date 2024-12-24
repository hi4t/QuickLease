import request from '@/utils/request'

// 登录方法
export function login(username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid
  }
  return Promise.resolve({
    "msg": "操作成功",
    "code": 200,
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImU4N2RhOGRiLWE2NTAtNDk1ZS1iZjAxLTU1NWIyMGE0NmM4MiJ9.rkSB8qUdCEvkYJIeTteoAnYe-7-9KG9XMGtCdO4nATcLpUnvMgrbjhBx_dIlybNeRIBBURqRC4vZ8BSpXKfHsw"
  })
}

// 注册方法
export function register(data) {
  return Promise.resolve({"msg": "当前系统没有开启注册功能！", "code": 500})
}

// 获取用户详细信息
export function getInfo() {
  return Promise.resolve({
    "msg": "操作成功",
    "code": 200,
    "permissions": [
      "*:*:*"
    ],
    "roles": [
      "admin"
    ],
    "user": {
      "createBy": "admin",
      "createTime": "2024-12-12 16:17:09",
      "updateBy": null,
      "updateTime": null,
      "remark": "管理员",
      "params": {
        "@type": "java.util.HashMap"
      },
      "userId": 1,
      "deptId": 103,
      "userName": "admin",
      "nickName": "超级管理员",
      "email": "ry@163.com",
      "phonenumber": "15888888888",
      "sex": "1",
      "avatar": null,
      "password": "$2a$10$7JB720yubVSZvUI0rEqK/.VqGOZTH.ulu33dHOiBE8ByOhJIrdAu2",
      "status": "0",
      "delFlag": "0",
      "loginIp": "127.0.0.1",
      "loginDate": "2024-12-23T20:50:41.000+08:00",
      "dept": {
        "createBy": null,
        "createTime": null,
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "params": {
          "@type": "java.util.HashMap"
        },
        "deptId": 103,
        "parentId": 101,
        "ancestors": "0,100,101",
        "deptName": "研发商铺",
        "orderNum": 1,
        "leader": "超级管理员",
        "phone": null,
        "email": null,
        "status": "0",
        "delFlag": null,
        "parentName": null,
        "children": []
      },
      "roles": [
        {
          "createBy": null,
          "createTime": null,
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "params": {
            "@type": "java.util.HashMap"
          },
          "roleId": 1,
          "roleName": "超级管理员",
          "roleKey": "admin",
          "roleSort": 1,
          "dataScope": "1",
          "menuCheckStrictly": false,
          "deptCheckStrictly": false,
          "status": "0",
          "delFlag": null,
          "flag": false,
          "menuIds": null,
          "deptIds": null,
          "permissions": null,
          "admin": true
        }
      ],
      "roleIds": null,
      "postIds": null,
      "roleId": null,
      "admin": true
    }
  })
}

// 退出方法
export function logout() {
  return Promise.resolve({"msg": "退出成功", "code": 200})
}

// 获取验证码
export function getCodeImg() {
  return Promise.resolve({
    "msg": "操作成功",
    "img": "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",
    "code": 200,
    "captchaEnabled": true,
    "uuid": "9cf40746ad164a09bcbefd539140b0a1"
  })
}
