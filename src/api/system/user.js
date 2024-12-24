
// 查询用户列表
export function listUser(query) {
  return Promise.resolve({
    "total": 2,
    "rows": [
      {
        "createBy": "admin",
        "createTime": "2024-12-12 16:17:09",
        "updateBy": null,
        "updateTime": null,
        "remark": "管理员",
        "userId": 1,
        "deptId": 103,
        "userName": "admin",
        "nickName": "超级管理员",
        "email": "ry@163.com",
        "phonenumber": "15888888888",
        "sex": "1",
        "avatar": "",
        "password": null,
        "status": "0",
        "delFlag": "0",
        "loginIp": "127.0.0.1",
        "loginDate": "2024-12-23T21:11:31.000+08:00",
        "dept": {
          "createBy": null,
          "createTime": null,
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "deptId": 103,
          "parentId": null,
          "ancestors": null,
          "deptName": "研发商铺",
          "orderNum": null,
          "leader": "超级管理员",
          "phone": null,
          "email": null,
          "status": null,
          "delFlag": null,
          "parentName": null,
          "children": []
        },
        "roles": [],
        "roleIds": null,
        "postIds": null,
        "roleId": null,
        "admin": true
      },
      {
        "createBy": "admin",
        "createTime": "2024-12-23 21:33:59",
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "userId": 100,
        "deptId": null,
        "userName": "test",
        "nickName": "测试",
        "email": "",
        "phonenumber": "13171836375",
        "sex": "0",
        "avatar": "",
        "password": null,
        "status": "0",
        "delFlag": "0",
        "loginIp": "",
        "loginDate": null,
        "dept": null,
        "roles": [],
        "roleIds": null,
        "postIds": null,
        "roleId": null,
        "admin": false
      }
    ],
    "code": 200,
    "msg": "查询成功"
  })
}

// 查询用户详细
export function getUser(userId) {
  if (userId) {
    return Promise.resolve({
      "msg": "操作成功",
      "code": 200,
      "roleIds": [
        2
      ],
      "data": {
        "createBy": "admin",
        "createTime": "2024-12-23 21:33:59",
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "userId": 100,
        "deptId": null,
        "userName": "test",
        "nickName": "测试",
        "email": "",
        "phonenumber": "13171836375",
        "sex": "0",
        "avatar": "",
        "password": "$2a$10$70ZmaY7QdVCxTA83iDGn.eSwEFbwSjga6.X6yfLqhmFJPTvKeEZWG",
        "status": "0",
        "delFlag": "0",
        "loginIp": "",
        "loginDate": null,
        "dept": null,
        "roles": [
          {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "roleId": 2,
            "roleName": "普通角色",
            "roleKey": "common",
            "roleSort": 2,
            "dataScope": "2",
            "menuCheckStrictly": false,
            "deptCheckStrictly": false,
            "status": "0",
            "delFlag": null,
            "flag": false,
            "menuIds": null,
            "deptIds": null,
            "permissions": null,
            "admin": false
          }
        ],
        "roleIds": null,
        "postIds": null,
        "roleId": null,
        "admin": false
      },
      "postIds": [],
      "roles": [
        {
          "createBy": null,
          "createTime": "2024-12-12 16:17:09",
          "updateBy": null,
          "updateTime": null,
          "remark": "普通角色",
          "roleId": 2,
          "roleName": "普通角色",
          "roleKey": "common",
          "roleSort": 2,
          "dataScope": "2",
          "menuCheckStrictly": true,
          "deptCheckStrictly": true,
          "status": "0",
          "delFlag": "0",
          "flag": false,
          "menuIds": null,
          "deptIds": null,
          "permissions": null,
          "admin": false
        }
      ],
      "posts": [
        {
          "createBy": "admin",
          "createTime": "2024-12-12 16:17:09",
          "updateBy": null,
          "updateTime": null,
          "remark": "",
          "postId": 1,
          "postCode": "ceo",
          "postName": "董事长",
          "postSort": 1,
          "status": "0",
          "flag": false
        },
        {
          "createBy": "admin",
          "createTime": "2024-12-12 16:17:09",
          "updateBy": null,
          "updateTime": null,
          "remark": "",
          "postId": 2,
          "postCode": "se",
          "postName": "项目经理",
          "postSort": 2,
          "status": "0",
          "flag": false
        },
        {
          "createBy": "admin",
          "createTime": "2024-12-12 16:17:09",
          "updateBy": null,
          "updateTime": null,
          "remark": "",
          "postId": 3,
          "postCode": "hr",
          "postName": "人力资源",
          "postSort": 3,
          "status": "0",
          "flag": false
        },
        {
          "createBy": "admin",
          "createTime": "2024-12-12 16:17:09",
          "updateBy": null,
          "updateTime": null,
          "remark": "",
          "postId": 4,
          "postCode": "user",
          "postName": "普通员工",
          "postSort": 4,
          "status": "0",
          "flag": false
        }
      ]
    })
  } else {
    return Promise.resolve({
      "msg": "操作成功",
      "code": 200,
      "roles": [
        {
          "createBy": null,
          "createTime": "2024-12-12 16:17:09",
          "updateBy": null,
          "updateTime": null,
          "remark": "普通角色",
          "roleId": 2,
          "roleName": "普通角色",
          "roleKey": "common",
          "roleSort": 2,
          "dataScope": "2",
          "menuCheckStrictly": true,
          "deptCheckStrictly": true,
          "status": "0",
          "delFlag": "0",
          "flag": false,
          "menuIds": null,
          "deptIds": null,
          "permissions": null,
          "admin": false
        }
      ],
      "posts": [
        {
          "createBy": "admin",
          "createTime": "2024-12-12 16:17:09",
          "updateBy": null,
          "updateTime": null,
          "remark": "",
          "postId": 1,
          "postCode": "ceo",
          "postName": "董事长",
          "postSort": 1,
          "status": "0",
          "flag": false
        },
        {
          "createBy": "admin",
          "createTime": "2024-12-12 16:17:09",
          "updateBy": null,
          "updateTime": null,
          "remark": "",
          "postId": 2,
          "postCode": "se",
          "postName": "项目经理",
          "postSort": 2,
          "status": "0",
          "flag": false
        },
        {
          "createBy": "admin",
          "createTime": "2024-12-12 16:17:09",
          "updateBy": null,
          "updateTime": null,
          "remark": "",
          "postId": 3,
          "postCode": "hr",
          "postName": "人力资源",
          "postSort": 3,
          "status": "0",
          "flag": false
        },
        {
          "createBy": "admin",
          "createTime": "2024-12-12 16:17:09",
          "updateBy": null,
          "updateTime": null,
          "remark": "",
          "postId": 4,
          "postCode": "user",
          "postName": "普通员工",
          "postSort": 4,
          "status": "0",
          "flag": false
        }
      ]
    })
  }
}

// 新增用户
export function addUser(data) {
  return Promise.resolve({"msg": "操作成功", "code": 200})
}

// 修改用户
export function updateUser(data) {
  return Promise.resolve({"msg": "操作成功", "code": 200})
}

// 删除用户
export function delUser(userId) {
  return Promise.resolve({"msg": "操作成功", "code": 200})
}

// 用户密码重置
export function resetUserPwd(userId, password) {
  const data = {
    userId,
    password
  }
  return Promise.resolve({"msg": "操作成功", "code": 200})
}

// 用户状态修改
export function changeUserStatus(userId, status) {
  const data = {
    userId,
    status
  }
  return Promise.resolve({"msg": "操作成功", "code": 200})
}

// 查询用户个人信息
export function getUserProfile() {
  return Promise.resolve({
    "msg": "操作成功",
    "postGroup": "董事长",
    "code": 200,
    "data": {
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
      "loginDate": "2024-12-23T21:11:31.000+08:00",
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
    },
    "roleGroup": "超级管理员"
  })
}

// 修改用户个人信息
export function updateUserProfile(data) {
  return Promise.resolve({"msg": "操作成功", "code": 200})
}

// 用户密码重置
export function updateUserPwd(oldPassword, newPassword) {
  const data = {
    oldPassword,
    newPassword
  }
  return Promise.resolve({"msg": "操作成功", "code": 200})
}

// 用户头像上传
export function uploadAvatar(data) {
  return Promise.resolve({
    "msg": "操作成功",
    "imgUrl": "/profile/avatar/2024/12/23/avatar_20241223215019A001.png",
    "code": 200
  })
}

// 查询授权角色
export function getAuthRole(userId) {
  return Promise.resolve({
    "msg": "操作成功",
    "code": 200,
    "roles": [
      {
        "createBy": null,
        "createTime": "2024-12-12 16:17:09",
        "updateBy": null,
        "updateTime": null,
        "remark": "普通角色",
        "roleId": 2,
        "roleName": "普通角色",
        "roleKey": "common",
        "roleSort": 2,
        "dataScope": "2",
        "menuCheckStrictly": true,
        "deptCheckStrictly": true,
        "status": "0",
        "delFlag": "0",
        "flag": false,
        "menuIds": null,
        "deptIds": null,
        "permissions": null,
        "admin": false
      }
    ],
    "user": {
      "createBy": "admin",
      "createTime": "2024-12-23 21:33:59",
      "updateBy": null,
      "updateTime": null,
      "remark": null,
      "userId": 100,
      "deptId": null,
      "userName": "test",
      "nickName": "测试",
      "email": "",
      "phonenumber": "13171836375",
      "sex": "0",
      "avatar": "",
      "password": "$2a$10$70ZmaY7QdVCxTA83iDGn.eSwEFbwSjga6.X6yfLqhmFJPTvKeEZWG",
      "status": "0",
      "delFlag": "0",
      "loginIp": "",
      "loginDate": null,
      "dept": null,
      "roles": [],
      "roleIds": null,
      "postIds": null,
      "roleId": null,
      "admin": false
    }
  })
}

// 保存授权角色
export function updateAuthRole(data) {
  return Promise.resolve({"msg": "操作成功", "code": 200})
}

// 查询商铺下拉树结构
export function deptTreeSelect() {
  return Promise.resolve({
    "msg": "操作成功",
    "code": 200,
    "data": [
      {
        "id": 100,
        "label": "若依科技",
        "disabled": false,
        "children": [
          {
            "id": 101,
            "label": "深圳总公司",
            "disabled": false,
            "children": [
              {
                "id": 103,
                "label": "研发商铺",
                "disabled": false
              },
              {
                "id": 104,
                "label": "市场商铺",
                "disabled": false
              },
              {
                "id": 105,
                "label": "测试商铺",
                "disabled": false
              },
              {
                "id": 106,
                "label": "财务商铺",
                "disabled": false
              },
              {
                "id": 107,
                "label": "运维商铺",
                "disabled": false
              }
            ]
          },
          {
            "id": 102,
            "label": "长沙分公司",
            "disabled": false,
            "children": [
              {
                "id": 108,
                "label": "市场商铺",
                "disabled": false
              },
              {
                "id": 109,
                "label": "财务商铺",
                "disabled": false
              }
            ]
          }
        ]
      }
    ]
  })
}
