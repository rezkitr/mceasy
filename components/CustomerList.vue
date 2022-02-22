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
          v-model="name"
          @change="onSearch"
        />
      </div>
    </div>

    <div class="px-8 mt-6 flex-1 flex flex-col">
      <CustTable @addCustomer="onAddCustomer" :nameKeyword="name" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  methods: {
    onAddCustomer() {
      this.$emit('addCustomer')
    },
    onSearch() {
      this.$store.commit('filterCustomer', { name: this.name })
    },
  },
}
</script>

<style></style>
