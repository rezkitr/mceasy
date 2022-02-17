<template>
  <div class="h-screen">
    <a-row type="flex" class="h-full">
      <!-- drawer -->
      <a-col flex="320px" class="bg-white">
        <MenuDrawer
          :activeItem="activeMenuItem"
          @onSelectItem="selectMenuItem"
        />
      </a-col>

      <!-- content -->
      <a-col flex="auto">
        <CustomerContent v-if="activeMenuItem === 'cust'" />
        <div
          v-else
          class="h-full flex flex-col items-center justify-center text-yellow-500"
        >
          <a-icon type="code" class="text-6xl" />
          <h3 class="text-2xl mt-4 text-yellow-500">Page Under Construction</h3>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenuItem: 'cust',
    }
  },

  methods: {
    selectMenuItem(key) {
      this.activeMenuItem = key
    },
  },
}
</script>

<style scoped>
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

.anticon {
  vertical-align: middle !important;
}
</style>
