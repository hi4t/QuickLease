<template>
   <div class="app-container">
      <el-form :model="queryParams" ref="queryRef" v-show="showSearch" :inline="true" label-width="68px">
         <el-form-item label="商铺名称" prop="storeName">
            <el-input
               v-model="queryParams.storeName"
               placeholder="请输入商铺名称"
               clearable
               style="width: 240px"
               @keyup.enter="handleQuery"
            />
         </el-form-item>
         <el-form-item label="摊位名称" prop="stallName">
            <el-input
               v-model="queryParams.stallName"
               placeholder="请输入摊位名称"
               clearable
               style="width: 240px"
               @keyup.enter="handleQuery"
            />
         </el-form-item>
          <el-form-item label="摊位编码" prop="stallCode">
              <el-input
                      v-model="queryParams.stallCode"
                      placeholder="请输入摊位名称"
                      clearable
                      style="width: 240px"
                      @keyup.enter="handleQuery"
              />
          </el-form-item>
         <el-form-item>
            <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
            <el-button icon="Refresh" @click="resetQuery">重置</el-button>
         </el-form-item>
      </el-form>
      <el-row :gutter="10" class="mb8">
         <el-col :span="1.5">
            <el-button
               type="primary"
               plain
               icon="Plus"
               @click="handleAdd"
               v-hasPermi="['system:role:add']"
            >新增</el-button>
         </el-col>
         <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
      </el-row>

      <!-- 表格数据 -->
      <el-table v-loading="loading" :data="stallList">
<!--         <el-table-column type="selection" width="55" align="center" />-->
         <el-table-column label="摊位名称" prop="stallName" min-width="120" show-overflow-tooltip />
         <el-table-column label="摊位编码" prop="stallCode" :show-overflow-tooltip="true" min-width="150" />
         <el-table-column label="租客姓名" prop="tenantName" :show-overflow-tooltip="true" min-width="150" />
         <el-table-column label="联系方式" prop="phone" :show-overflow-tooltip="true" min-width="150" />
         <el-table-column label="家庭住址" prop="address" :show-overflow-tooltip="true" min-width="150" />
         <el-table-column label="租赁开始时间" prop="startDate" :show-overflow-tooltip="true" min-width="150" />
         <el-table-column label="租赁结束时间" prop="endDate" :show-overflow-tooltip="true" min-width="150" />
         <el-table-column label="租赁时长" prop="days" :show-overflow-tooltip="true" min-width="150" />
         <el-table-column label="每月租金" prop="monthRent" :show-overflow-tooltip="true" min-width="150" />
         <el-table-column label="租金总额" prop="totalRent" :show-overflow-tooltip="true" min-width="150" />
         <el-table-column label="押金" prop="deposit" :show-overflow-tooltip="true" min-width="150" />
         <el-table-column label="付款方式" prop="payWay" :show-overflow-tooltip="true" min-width="150" />
          <el-table-column label="备注" prop="remark" :show-overflow-tooltip="true" min-width="150"/>
         <el-table-column label="操作" align="center" class-name="small-padding fixed-width" fixed="right">
            <template #default="scope">
              <el-tooltip content="修改" placement="top" v-if="scope.row.roleId !== 1">
                <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)" v-hasPermi="['system:role:edit']"></el-button>
              </el-tooltip>
              <el-tooltip content="删除" placement="top" v-if="scope.row.roleId !== 1">
                <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row, scope.$index)" v-hasPermi="['system:role:remove']"></el-button>
              </el-tooltip>
            </template>
         </el-table-column>
      </el-table>

      <pagination
         v-show="total > 0"
         :total="total"
         v-model:page="queryParams.pageNum"
         v-model:limit="queryParams.pageSize"
         @pagination="getList"
      />
       
       <shop v-model:showDialog="editDialog.show" :row="editDialog.data" @refresh="refresh" />
      
   </div>
</template>

<script setup name="storeManage">
import {useRouter} from "vue-router";
import {ElMessage, ElMessageBox} from "element-plus";
import shop from "./edit.vue"

const router = useRouter();
const { proxy } = getCurrentInstance();

const stallList = ref([]);
const loading = ref(true);
const showSearch = ref(true);
const total = ref(0);
const data = reactive({
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    stallCode: undefined,
    stallName: undefined,
    storeName: undefined
  },
});

const editDialog = reactive({
  show: false,
  data: {},
  type: "add"
});

const { queryParams } = toRefs(data);

const getList = () => {
  loading.value = false
}

const handleQuery = () => {
  getList();
}

const resetQuery = () => {
  proxy.resetForm("queryRef");
  getList();
}

const handleAdd = () => {
    editDialog.data = null;
    editDialog.show = true;
}

const handleUpdate = (row) => {
    editDialog.data = row;
    editDialog.show = true;
}

const handleDelete = (row, index) => {
    ElMessageBox.confirm('是否确认删除摊位名称为"' + row.stallName + '"的数据项?', "警告", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    }).then(function () {
      stallList.value.splice(index, 1);
      ElMessage.success("删除成功");
    })
}

const refresh = (row) => {
    if (row) stallList.value.push(row);
}

onMounted(() => {
  getList();
})
</script>
