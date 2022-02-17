<template>
  <div class="flex-1 flex flex-col">
    <div
      class="flex justify-between items-center px-8 py-6 border-b border-gray-300"
    >
      <div class="text-lg font-semibold">Customers List</div>
      <div>
        <a-input-search
          placeholder="Search customer"
          style="width: 320px"
          size="large"
          @search="onSearch"
        />
      </div>
    </div>

    <div class="px-8 mt-6 flex-1 flex flex-col">
      <CustTable @addCustomer="onAddCustomer" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onAddCustomer() {
      this.$emit('addCustomer')
    },
    onSearch(value) {
      console.log(value)
    },
  },
}
</script>

<style></style>
