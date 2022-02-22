<template>
  <div class="flex flex-col flex-1 justify-between pb-6">
    <div>
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center">
          <div class="flex items-center justify-center">
            <div class="mr-4">Gender</div>
            <div>
              <a-select
                placeholder="All Gender"
                style="width: 140px"
                size="large"
                @change="onGenderChange"
                v-model="selectedGender"
              >
                <a-select-option value="a"> All Gender </a-select-option>
                <a-select-option value="m"> Male </a-select-option>
                <a-select-option value="f"> Female </a-select-option>
              </a-select>
            </div>
          </div>
          <div class="flex items-center justify-center ml-10">
            <div class="mr-4">Address</div>
            <div>
              <a-select
                placeholder="All country, province, city, region, postal code"
                style="width: 420px"
                size="large"
              >
              </a-select>
            </div>
          </div>
        </div>

        <div
          class="flex justify-center items-center px-4 py-2 rounded text-white font-semibold cursor-pointer success-btn"
          @click="addCustomer"
        >
          <a-icon type="plus" />
          <div class="ml-2">Add Customer</div>
        </div>
      </div>
      <div>
        <a-table
          :columns="columns"
          :data-source="dataSource"
          rowKey="id"
          :row-selection="{
            selectedRowKeys: selectedRowKeys,
            onChange: onSelectChange,
          }"
          :pagination="false"
        >
          <span slot="gender" slot-scope="gender">{{
            gender === 'f' ? 'Female' : 'Male'
          }}</span>

          <span slot="action">
            <a-button type="link">
              <a-icon type="edit" class="text-lg" />
            </a-button>
            <a-button type="link">
              <a-icon type="delete" class="text-lg" />
            </a-button>
          </span>
        </a-table>
      </div>
    </div>

    <div class="flex justify-between items-center">
      <a-space class="text-gray-400">
        Showing
        <a-select default-value="10" style="width: 60px">
          <a-select-option value="10"> 10 </a-select-option>
          <a-select-option value="20"> 20 </a-select-option>
        </a-select>
        of 100
      </a-space>

      <div>
        <a-pagination
          :total="100"
          :item-render="itemRender"
          :defaultPageSize="20"
        />
      </div>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => parseInt(a.id) - parseInt(b.id),
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    scopedSlots: { customRender: 'gender' },
    sorter: (a, b) => a.gender.localeCompare(b.gender),
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    sorter: (a, b) => a.address.localeCompare(b.address),
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    sorter: (a, b) => a.phone.localeCompare(b.phone),
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
]

export default {
  props: ['nameKeyword'],
  data() {
    return {
      columns,
      selectedRowKeys: [],
      selectedGender: 'a',
    }
  },
  computed: {
    dataSource() {
      if (!this.nameKeyword.length && this.selectedGender === 'a') {
        return this.$store.state.customers
      } else {
        return this.$store.state.filteredCustomers
      }
    },
  },
  methods: {
    onSelectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
    },
    onGenderChange(value) {
      this.selectedGender = value
      this.$store.commit('filterCustomer', { gender: value })
    },
    itemRender(current, type, originalElement) {
      if (type === 'prev') {
        return (
          <a class="items-center">
            <a-icon type="left" class="pgn-icon" /> Previous
          </a>
        )
      } else if (type === 'next') {
        return (
          <a>
            Next <a-icon type="right" class="pgn-icon" />
          </a>
        )
      }
      return originalElement
    },
    addCustomer() {
      this.$emit('addCustomer')
    },
  },
}
</script>

<style>
.success-btn {
  background: #f95f5f;
}
.success-btn:hover {
  background-color: #84cc16;
}

.pgn-icon {
  vertical-align: middle !important;
}

.ant-pagination-item {
  border: none !important;
}

.ant-pagination-item-active {
  border: 1px solid salmon !important;
  background: #f95f5f !important;
  border-radius: 50% !important;
}

.ant-pagination-item-active a {
  color: #fff !important;
}
</style>
