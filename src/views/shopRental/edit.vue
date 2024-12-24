<template>
    <el-dialog :title="title" :model-value="props.showDialog" width="600px" append-to-body @close="emits('update:showDialog', false)">
        <el-form ref="formRef" :model="form" label-width="80px" :rules="rules">
            <el-form-item label="摊位名称" prop="stallName">
                <el-select v-model="form.stallName" placeholder="请选择摊位" clearable>
                    <el-option v-for="item in stallList" :key="item.stallId" :label="item.stallName" :value="item.stallName"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="租客姓名" prop="tenantName">
                <el-input v-model="form.tenantName" placeholder="请输入租客姓名" clearable></el-input>
            </el-form-item>
            <el-form-item label="租客电话" prop="phone">
                <el-input v-model="form.phone" placeholder="请输入租客电话" clearable></el-input>
            </el-form-item>
            <el-form-item label="家庭住址" prop="address">
                <el-input v-model="form.address" placeholder="请输入家庭住址" clearable></el-input>
            </el-form-item>
            <el-form-item label="开始时间" prop="startDate">
                <el-date-picker v-model="form.startDate" type="date" placeholder="选择日期" value-format="YYYY-MM-DD" clearable></el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间" prop="endDate">
                <el-date-picker v-model="form.endDate" type="date" placeholder="选择日期" value-format="YYYY-MM-DD" clearable></el-date-picker>
            </el-form-item>
            <el-form-item label="天数" prop="days">
                <el-input v-model="form.days" placeholder="请输入天数" clearable>
                    <template #append>天</template>
                </el-input>
            </el-form-item>
            <el-form-item label="月租金" prop="monthRent">
                <el-input v-model="form.monthRent" placeholder="请输入月租金" clearable>
                    <template #append>元</template>
                </el-input>
            </el-form-item>
            <el-form-item label="总金额" prop="totalRent">
                <el-input v-model="form.totalRent" placeholder="请输入总金额" clearable>
                    <template #append>元</template>
                </el-input>
            </el-form-item>
            <el-form-item label="押金" prop="deposit">
                <el-input v-model="form.deposit" placeholder="请输入押金" clearable>
                    <template #append>元</template>
                </el-input>
            </el-form-item>
            <el-form-item label="付款方式" prop="payWay">
                <el-select v-model="form.payWay" placeholder="请选择付款方式" clearable>
                    <el-option v-for="item in ['现金', '微信', '支付宝']" :key="item" :label="item" :value="item"></el-option>
                </el-select>
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

<script lang="ts" setup name="SHopEdit">
import {ElForm, ElMessage} from "element-plus";
import {onMounted} from "vue";

const emits = defineEmits(["refresh", "update:showDialog"])
const props = defineProps({
    showDialog: Boolean,
    row: Object,
})

const title = ref("")
const formRef = ref()
const stallList = ref([
    {stallName: "摊位1", stallId: "摊位1" }
])
const form = ref<any>({})
const rules = {
    stallName: [{required: true, message: "请选择摊位", trigger: "blur"}],
    tenantName: [{required: true, message: "请输入租客姓名", trigger: "blur"}],
    phone: [{required: true, message: "请输入租客电话", trigger: "blur"}],
    address: [{required: true, message: "请输入家庭住址", trigger: "blur"}],
    startDate: [{required: true, message: "请选择开始时间", trigger: "blur"}],
    endDate: [{required: true, message: "请选择结束时间", trigger: "blur"}],
    days: [{required: true, message: "请输入天数", trigger: "blur"}],
    monthRent: [{required: true, message: "请输入月租金", trigger: "blur"}],
    totalRent: [{required: true, message: "请输入总金额", trigger: "blur"}],
    deposit: [{required: true, message: "请输入押金", trigger: "blur"}],
    payWay: [{required: true, message: "请输入付款方式", trigger: "blur"}],
    
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
            title.value = "编辑租赁信息"
            form.value = props.row
        } else {
            title.value = "新增租赁信息"
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
