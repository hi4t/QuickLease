
// 查询菜单下拉树结构
export function treeselect() {
  return Promise.resolve({
    "msg": "操作成功",
    "code": 200,
    "data": [
      {
        "id": 2000,
        "label": "商铺管理",
        "disabled": false
      },
      {
        "id": 2001,
        "label": "商铺租赁",
        "disabled": false
      },
      {
        "id": 1,
        "label": "系统管理",
        "disabled": false,
        "children": [
          {
            "id": 100,
            "label": "用户管理",
            "disabled": false,
            "children": [
              {
                "id": 1000,
                "label": "用户查询",
                "disabled": false
              },
              {
                "id": 1001,
                "label": "用户新增",
                "disabled": false
              },
              {
                "id": 1002,
                "label": "用户修改",
                "disabled": false
              },
              {
                "id": 1003,
                "label": "用户删除",
                "disabled": false
              },
              {
                "id": 1004,
                "label": "用户导出",
                "disabled": false
              },
              {
                "id": 1005,
                "label": "用户导入",
                "disabled": false
              },
              {
                "id": 1006,
                "label": "重置密码",
                "disabled": false
              }
            ]
          },
          {
            "id": 101,
            "label": "角色管理",
            "disabled": false,
            "children": [
              {
                "id": 1007,
                "label": "角色查询",
                "disabled": false
              },
              {
                "id": 1008,
                "label": "角色新增",
                "disabled": false
              },
              {
                "id": 1009,
                "label": "角色修改",
                "disabled": false
              },
              {
                "id": 1010,
                "label": "角色删除",
                "disabled": false
              },
              {
                "id": 1011,
                "label": "角色导出",
                "disabled": false
              }
            ]
          },
        ]
      }
    ]
  })
}

// 根据角色ID查询菜单下拉树结构
export function roleMenuTreeselect(roleId) {
  return Promise.resolve({
    "msg": "操作成功",
    "code": 200,
    "menus": [
      {
        "id": 2000,
        "label": "商铺管理",
        "disabled": false
      },
      {
        "id": 2001,
        "label": "商铺租赁",
        "disabled": false
      },
      {
        "id": 1,
        "label": "系统管理",
        "disabled": false,
        "children": [
          {
            "id": 100,
            "label": "用户管理",
            "disabled": false,
            "children": [
              {
                "id": 1000,
                "label": "用户查询",
                "disabled": false
              },
              {
                "id": 1001,
                "label": "用户新增",
                "disabled": false
              },
              {
                "id": 1002,
                "label": "用户修改",
                "disabled": false
              },
              {
                "id": 1003,
                "label": "用户删除",
                "disabled": false
              },
              {
                "id": 1004,
                "label": "用户导出",
                "disabled": false
              },
              {
                "id": 1005,
                "label": "用户导入",
                "disabled": false
              },
              {
                "id": 1006,
                "label": "重置密码",
                "disabled": false
              }
            ]
          },
          {
            "id": 101,
            "label": "角色管理",
            "disabled": false,
            "children": [
              {
                "id": 1007,
                "label": "角色查询",
                "disabled": false
              },
              {
                "id": 1008,
                "label": "角色新增",
                "disabled": false
              },
              {
                "id": 1009,
                "label": "角色修改",
                "disabled": false
              },
              {
                "id": 1010,
                "label": "角色删除",
                "disabled": false
              },
              {
                "id": 1011,
                "label": "角色导出",
                "disabled": false
              }
            ]
          },
        ]
      }
    ],
    "checkedKeys": [
      2000,
      2001,
      111,
      112,
      113,
      114,
      115,
      117,
      1000,
      1001,
      1002,
      1003,
      1004,
      1005,
      1006,
      1007,
      1008,
      1009,
      1010,
      1011,
      1012,
      1013,
      1014,
      1015,
      1016,
      1017,
      1018,
      1019,
      1020,
      1021,
      1022,
      1023,
      1024,
      1025,
      1026,
      1027,
      1028,
      1029,
      1030,
      1031,
      1032,
      1033,
      1034,
      1035,
      1036,
      1037,
      1038,
      1046,
      1047,
      1048,
      1049,
      1050,
      1051,
      1052,
      1053,
      1054,
      1055,
      1056,
      1057,
      1058,
      1059,
      1060,
      1039,
      1040,
      1041,
      1042,
      1043,
      1044,
      1045
    ]
  })
}

