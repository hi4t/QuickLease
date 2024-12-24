import request from '@/utils/request'

// 查询角色列表
export function listRole(query) {
  return Promise.resolve({
    "total": 2,
    "rows": [
      {
        "createBy": null,
        "createTime": "2024-12-12 16:17:09",
        "updateBy": null,
        "updateTime": null,
        "remark": "超级管理员",
        "roleId": 1,
        "roleName": "超级管理员",
        "roleKey": "admin",
        "roleSort": 1,
        "dataScope": "1",
        "menuCheckStrictly": true,
        "deptCheckStrictly": true,
        "status": "0",
        "delFlag": "0",
        "flag": false,
        "menuIds": null,
        "deptIds": null,
        "permissions": null,
        "admin": true
      },
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
    "code": 200,
    "msg": "查询成功"
  })
}

// 查询角色详细
export function getRole(roleId) {
  return Promise.resolve({
    "msg": "操作成功",
    "code": 200,
    "data": {
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
  })
}

// 新增角色
export function addRole(data) {
  return Promise.resolve({ msg: '操作成功', code: 200 })
}

// 修改角色
export function updateRole(data) {
  return Promise.resolve({msg: '操作成功', code: 200})
}

// 角色数据权限
export function dataScope(data) {
  return Promise.resolve({msg: '操作成功', code: 200})
}

// 角色状态修改
export function changeRoleStatus(roleId, status) {
  const data = {
    roleId,
    status
  }
  return Promise.resolve({msg: '操作成功', code: 200})
}

// 删除角色
export function delRole(roleId) {
  return Promise.resolve({msg: '操作成功', code: 200})
}

// 查询角色已授权用户列表
export function allocatedUserList(query) {
  return Promise.resolve({
    "total": 1,
    "rows": [
      {
        "createBy": null,
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
        "sex": null,
        "avatar": null,
        "password": null,
        "status": "0",
        "delFlag": null,
        "loginIp": null,
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

// 查询角色未授权用户列表
export function unallocatedUserList(query) {
  return Promise.resolve({
    "total": 1,
    "rows": [
      {
        "createBy": null,
        "createTime": "2024-12-12 16:17:09",
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "userId": 1,
        "deptId": 103,
        "userName": "admin",
        "nickName": "超级管理员",
        "email": "ry@163.com",
        "phonenumber": "15888888888",
        "sex": null,
        "avatar": null,
        "password": null,
        "status": "0",
        "delFlag": null,
        "loginIp": null,
        "loginDate": null,
        "dept": {
          "createBy": null,
          "createTime": null,
          "updateBy": null,
          "updateTime": null,
          "remark": null,
          "deptId": 103,
          "parentId": null,
          "ancestors": null,
          "deptName": null,
          "orderNum": null,
          "leader": null,
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
      }
    ],
    "code": 200,
    "msg": "查询成功"
  })
}

// 取消用户授权角色
export function authUserCancel(data) {
  return Promise.resolve({msg: '操作成功', code: 200})
}

// 批量取消用户授权角色
export function authUserCancelAll(data) {
  return Promise.resolve({msg: '操作成功', code: 200})
}

// 授权用户选择
export function authUserSelectAll(data) {
  return Promise.resolve({msg: '操作成功', code: 200})
}

// 根据角色ID查询商铺树结构
export function deptTreeSelect(roleId) {
  return request({
    url: '/system/role/deptTree/' + roleId,
    method: 'get'
  })
}
