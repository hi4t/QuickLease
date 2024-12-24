import request from '@/utils/request'

// 查询商铺列表
export function listDept(query) {
  return Promise.resolve({
    "msg": "操作成功",
    "code": 200,
    "data": [
      {
        "createBy": "admin",
        "createTime": "2024-12-12 16:17:09",
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "deptId": 100,
        "parentId": 0,
        "ancestors": "0",
        "deptName": "廊坊市物产集团",
        "orderNum": 0,
        "leader": "管理员",
        "phone": "",
        "email": "",
        "status": "0",
        "delFlag": "0",
        "parentName": null,
        "children": []
      },
      {
        "createBy": "admin",
        "createTime": "2024-12-12 16:17:09",
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "deptId": 101,
        "parentId": 100,
        "ancestors": "0,100",
        "deptName": "保龙仓商铺",
        "orderNum": 1,
        "leader": "",
        "phone": "",
        "email": "",
        "status": "0",
        "delFlag": "0",
        "parentName": null,
        "children": []
      },
      {
        "createBy": "admin",
        "createTime": "2024-12-24 08:51:39",
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "deptId": 200,
        "parentId": 100,
        "ancestors": "0,100",
        "deptName": "天和古玩城商铺",
        "orderNum": 2,
        "leader": null,
        "phone": null,
        "email": null,
        "status": "0",
        "delFlag": "0",
        "parentName": null,
        "children": []
      },
      {
        "createBy": "admin",
        "createTime": "2024-12-24 08:51:54",
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "deptId": 201,
        "parentId": 100,
        "ancestors": "0,100",
        "deptName": "天和机电市场商铺",
        "orderNum": 3,
        "leader": null,
        "phone": null,
        "email": null,
        "status": "0",
        "delFlag": "0",
        "parentName": null,
        "children": []
      },
      {
        "createBy": "admin",
        "createTime": "2024-12-24 08:52:07",
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "deptId": 202,
        "parentId": 100,
        "ancestors": "0,100",
        "deptName": "物业公司商铺",
        "orderNum": 4,
        "leader": null,
        "phone": null,
        "email": null,
        "status": "0",
        "delFlag": "0",
        "parentName": null,
        "children": []
      },
      {
        "createBy": "admin",
        "createTime": "2024-12-24 08:52:18",
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "deptId": 203,
        "parentId": 100,
        "ancestors": "0,100",
        "deptName": "燃料公司商铺",
        "orderNum": 5,
        "leader": null,
        "phone": null,
        "email": null,
        "status": "0",
        "delFlag": "0",
        "parentName": null,
        "children": []
      }
    ]
  })
}

// 查询商铺列表（排除节点）
export function listDeptExcludeChild(deptId) {
  return Promise.resolve({
    "msg": "操作成功",
    "code": 200,
    "data": [
      {
        "createBy": "admin",
        "createTime": "2024-12-12 16:17:09",
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "deptId": 100,
        "parentId": 0,
        "ancestors": "0",
        "deptName": "廊坊市物产集团",
        "orderNum": 0,
        "leader": "管理员",
        "phone": "",
        "email": "",
        "status": "0",
        "delFlag": "0",
        "parentName": null,
        "children": []
      },
      {
        "createBy": "admin",
        "createTime": "2024-12-24 08:51:39",
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "deptId": 200,
        "parentId": 100,
        "ancestors": "0,100",
        "deptName": "天和古玩城商铺",
        "orderNum": 2,
        "leader": null,
        "phone": null,
        "email": null,
        "status": "0",
        "delFlag": "0",
        "parentName": null,
        "children": []
      },
      {
        "createBy": "admin",
        "createTime": "2024-12-24 08:51:54",
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "deptId": 201,
        "parentId": 100,
        "ancestors": "0,100",
        "deptName": "天和机电市场商铺",
        "orderNum": 3,
        "leader": null,
        "phone": null,
        "email": null,
        "status": "0",
        "delFlag": "0",
        "parentName": null,
        "children": []
      },
      {
        "createBy": "admin",
        "createTime": "2024-12-24 08:52:07",
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "deptId": 202,
        "parentId": 100,
        "ancestors": "0,100",
        "deptName": "物业公司商铺",
        "orderNum": 4,
        "leader": null,
        "phone": null,
        "email": null,
        "status": "0",
        "delFlag": "0",
        "parentName": null,
        "children": []
      },
      {
        "createBy": "admin",
        "createTime": "2024-12-24 08:52:18",
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "deptId": 203,
        "parentId": 100,
        "ancestors": "0,100",
        "deptName": "燃料公司商铺",
        "orderNum": 5,
        "leader": null,
        "phone": null,
        "email": null,
        "status": "0",
        "delFlag": "0",
        "parentName": null,
        "children": []
      }
    ]
  })
}

// 查询商铺详细
export function getDept(deptId) {
  return Promise.resolve({
    "msg": "操作成功",
    "code": 200,
    "data": {
      "createBy": null,
      "createTime": null,
      "updateBy": null,
      "updateTime": null,
      "remark": null,
      "deptId": 101,
      "parentId": 100,
      "ancestors": "0,100",
      "deptName": "保龙仓商铺",
      "orderNum": 1,
      "leader": "",
      "phone": "",
      "email": "",
      "status": "0",
      "delFlag": null,
      "parentName": "廊坊市物产集团",
      "children": []
    }
  })
}

// 新增商铺
export function addDept(data) {
  return Promise.resolve({ msg: '操作成功', code: 200 })
}

// 修改商铺
export function updateDept(data) {
  return Promise.resolve({msg: '操作成功', code: 200})
}

// 删除商铺
export function delDept(deptId) {
  return Promise.resolve({msg: '操作成功', code: 200})
}
