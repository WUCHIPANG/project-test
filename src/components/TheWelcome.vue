<template>
  <div class="m-5 w-[50%] space-y-3 space-x-3">
    <el-button type="primary" size="default" class="bg-green-500 hover:bg-red-500">click</el-button>
    <!-- <button class="bg-green-500">123</button> -->
    <el-switch v-model="value1" />
    <el-switch v-model="value2" class="ml-2 " style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName"  class="my-3" :header-cell-style="{'background-color':'#b5b5b5','color':'white'}">
      <el-table-column prop="date" label="Date" width="180" class="text-green-600"/>
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <el-tag class="ml-2" type="success">Tag 2</el-tag>
    <el-tag class="ml-2" type="info">Tag 3</el-tag>
    <div class="p-2 border border-black rounded-lg w-20 text-center my-3">Hello</div>
    <el-popconfirm title="Are you sure to delete this?">
      <template #reference>
        <el-button class="bg-purple-700 text-white rounded-2xl hover:bg-red-400 hover:text-white">Delete</el-button>
      </template>
    </el-popconfirm>
    <div class="mt-2">
      <el-button text @click="dialogVisible = true">
        click to open the Dialog
      </el-button>
    </div>
    <div class="mt-2">
      <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
        <span>This is a message</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogVisible = false">
              Confirm
            </el-button>
          </span>
        </template>
      </el-dialog>
      <div class="demo-collapse">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="Consistency" name="1">
            <div>
              Consistent with real life: in line with the process and logic of real
              life, and comply with languages and habits that the users are used to;
            </div>
            <div>
              Consistent within interface: all elements should be consistent, such
              as: design style, icons and texts, position of elements, etc.
            </div>
          </el-collapse-item>
          <el-collapse-item title="Feedback" name="2">
            <div>
              Operation feedback: enable the users to clearly perceive their
              operations by style updates and interactive effects;
            </div>
            <div>
              Visual feedback: reflect current state by updating or rearranging
              elements of the page.
            </div>
          </el-collapse-item>
          <el-collapse-item title="Efficiency" name="3">
            <div>
              Simplify the process: keep operating process simple and intuitive;
            </div>
            <div>
              Definite and clear: enunciate your intentions clearly so that the
              users can quickly understand and make decisions;
            </div>
            <div>
              Easy to identify: the interface should be straightforward, which helps
              the users to identify and frees them from memorizing and recalling.
            </div>
          </el-collapse-item>
          <el-collapse-item title="Controllability" name="4">
            <div>
              Decision making: giving advices about operations is acceptable, but do
              not make decisions for the users;
            </div>
            <div>
              Controlled consequences: users should be granted the freedom to
              operate, including canceling, aborting or terminating current
              operation.
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>

    </div>
    <div>
      <el-steps :active="active" finish-status="success">
        <el-step title="Step 1" />
        <el-step title="Step 2" />
        <el-step title="Step 3" />
      </el-steps>
      <el-button style="margin-top: 12px" @click="next">Next step</el-button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
const value1 = ref(true)
const value2 = ref(true)

const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex === 1) {
    return 'warning-row';
    // return 'bg-red-200';
  } else if (rowIndex === 3) {
    return 'success-row';
    // return 'bg-green-200';
  }
  return '';
};
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const dialogVisible = ref(false)
const handleClose = (done) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};
const activeName = ref('1')
const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}
</script>
<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>