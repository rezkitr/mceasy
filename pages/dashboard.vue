<template>
  <div class="h-screen">
    <a-row type="flex" class="h-full">
      <!-- drawer -->
      <a-col flex="320px" class="bg-white">
        <MenuDrawer />
      </a-col>

      <!-- content -->
      <a-col flex="auto">
        <div class="h-full flex flex-col bg-indigo-900 px-8 py-8">
          <ContentHeader
            title="Customers"
            subtitle="Manage your customers here"
          />

          <div class="bg-white rounded-md flex-1 flex flex-col">
            <div
              class="flex justify-between items-center px-8 py-6 border-b border-gray-300"
            >
              <div class="text-lg font-semibold">Customers List</div>
              <div>
                <a-input-search
                  placeholder="Search customer"
                  style="width: 320px"
                  size="large"
                />
              </div>
            </div>

            <div class="px-8 mt-6 flex-1 flex flex-col">
              <CustTable />
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenuItem: 'dsb',
    }
  },

  methods: {
    selectMenuItem(key) {
      this.activeMenuItem = key
    },
  },
}
</script>

<style>
input[type='text'] {
  background-color: #f6f6f6;
  outline: none;
  border: 0 !important;
}
input[type='text']:focus,
input[type='text']:hover {
  outline: none !important;
  border: 0 !important;
}
</style>
