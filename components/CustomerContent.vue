<template>
  <div class="h-full flex flex-col bg-indigo-900 px-8 py-8">
    <ContentHeader
      v-if="!showAddForm"
      title="Customers"
      subtitle="Manage your customers here"
    />
    <ContentHeader
      v-if="showAddForm"
      title="Add New Customer"
      subtitle="Fill the form to add new customer"
    />

    <div class="bg-white rounded-md flex-1 flex flex-col">
      <CustomerList v-if="!showAddForm" @addCustomer="setShowAddForm(true)" />
      <FormAddCustomer v-if="showAddForm" @backAction="setShowAddForm(false)" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAddForm: false,
    }
  },
  methods: {
    setShowAddForm(value) {
      this.showAddForm = value
    },
  },
}
</script>

<style></style>
