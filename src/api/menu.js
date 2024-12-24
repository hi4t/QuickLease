import request from '@/utils/request'

// 获取路由
export const getRouters = () => {
  return Promise.resolve({
    "msg": "操作成功",
    "code": 200,
    "data": [
      {
        "path": "/",
        "hidden": false,
        "component": "Layout",
        "children": [
          {
            "name": "StoreManagement",
            "path": "storeManagement",
            "hidden": false,
            "component": "storeManage/index",
            "meta": {
              "title": "商铺管理",
              "icon": "tree-table",
              "noCache": false,
              "link": null
            }
          }
        ]
      },
      {
        "path": "/",
        "hidden": false,
        "component": "Layout",
        "children": [
          {
            "name": "ShopRental",
            "path": "shopRental",
            "hidden": false,
            "component": "shopRental/index",
            "meta": {
              "title": "商铺租赁",
              "icon": "shopping",
              "noCache": false,
              "link": null
            }
          }
        ]
      },
      {
        "name": "System",
        "path": "/system",
        "hidden": false,
        "redirect": "noRedirect",
        "component": "Layout",
        "alwaysShow": true,
        "meta": {
          "title": "系统管理",
          "icon": "system",
          "noCache": false,
          "link": null
        },
        "children": [
          {
            "name": "User",
            "path": "user",
            "hidden": false,
            "component": "system/user/index",
            "meta": {
              "title": "用户管理",
              "icon": "user",
              "noCache": false,
              "link": null
            }
          },
          {
            "name": "Role",
            "path": "role",
            "hidden": false,
            "component": "system/role/index",
            "meta": {
              "title": "角色管理",
              "icon": "peoples",
              "noCache": false,
              "link": null
            }
          },
          {
            "name": "Dept",
            "path": "dept",
            "hidden": false,
            "component": "system/dept/index",
            "meta": {
              "title": "商铺管理",
              "icon": "tree",
              "noCache": false,
              "link": null
            }
          }
        ]
      }
    ]
  })
}
