<template>
    <el-dialog :title="title" :model-value="props.showDialog" width="600px" append-to-body @close="emits('update:showDialog', false)">
        <el-form ref="formRef" :model="form" label-width="80px" :rules="rules">
            <el-form-item label="所属商铺" prop="storeName">
                <el-select v-model="form.storeName" placeholder="请选择商铺" clearable filterable>
                    <el-option v-for="item in storeList" :key="item.storeId" :label="item.storeName" :value="item.storeName"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="摊位名称" prop="stallName">
                <el-input v-model="form.stallName" placeholder="请输入摊位名称" clearable></el-input>
            </el-form-item>
            <el-form-item label="摊位类型" prop="stallType">
                <el-select v-model="form.stallType" placeholder="请选择摊位类型" clearable filterable>
                    <el-option v-for="item in stallTypeList" :key="item.value" :label="item.label" :value="item.label"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="摊位编号" prop="stallCode">
                <el-input v-model="form.stallCode" placeholder="请输入摊位编号" clearable></el-input>
            </el-form-item>
            <el-form-item label="租金" prop="rent">
                <el-input v-model="form.rent" placeholder="请输入租金" clearable></el-input>
            </el-form-item>
            <el-form-item label="户型" prop="houseType">
                <el-input v-model="form.houseType" placeholder="请输入户型" clearable></el-input>
            </el-form-item>
            
            <el-form-item label="备注" prop="remark">
                <el-input type="textarea" :rows="3" v-model="form.remark" placeholder="请输入备注" clearable></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <el-button @click="emits('update:showDialog', false)">取 消</el-button>
            <el-button type="primary" @click="submit">保 存</el-button>
        </template>
  </el-dialog>
</template>

<script lang="ts" setup name="StoreEdit">
import {ElForm, ElMessage} from "element-plus";
import {onMounted} from "vue";

const emits = defineEmits(["refresh", "update:showDialog"])
const props = defineProps({
    showDialog: Boolean,
    row: Object,
})

const title = ref("")
const formRef = ref()
const storeList = ref<any[]>([
    {storeId: 1, storeName: "保龙仓商铺"},
    {storeId: 2, storeName: "天和古玩城商铺"},
    {storeId: 3, storeName: "天和机电市场商铺"},
    {storeId: 4, storeName: "物业公司商铺"},
    {storeId: 5, storeName: "燃料公司商铺"},
])
const stallTypeList = ref<any[]>([
    {value: 1, label: "类型一"},
    {value: 2, label: "类型二"},
    {value: 3, label: "类型三"},
    {value: 4, label: "类型四"},
    {value: 5, label: "类型五"},
])
const form = ref<any>({})
const rules = {
    storeName: [{required: true, message: "请选择所属商铺", trigger: "blur"}],
    stallName: [{required: true, message: "请输入摊位名称", trigger: "blur"}],
    stallType: [{required: true, message: "请选择摊位类型", trigger: "blur"}],
    stallCode: [{required: true, message: "请输入摊位编号", trigger: "blur"}],
    rent: [{required: true, message: "请输入租金", trigger: "blur"}],
}

const submit = () => {
    formRef.value.validate(valid => {
        if (valid) {
            ElMessage.success("提交成功")
            emits("refresh", props.row ? null : form.value)
            emits("update:showDialog", false)
         }
    })
}

watch(() => props.showDialog, (newVal) => {
    if (newVal) {
        if (props.row) {
            title.value = "编辑摊位"
            form.value = props.row
        } else {
            title.value = "新增摊位"
        }
    }
    
})

onMounted(() => {

})
</script>

<style lang="scss" scoped>
.edit {

}
</style>
