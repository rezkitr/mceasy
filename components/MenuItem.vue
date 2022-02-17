<template>
  <div
    class="flex items-center px-6 py-3 cursor-pointer text-gray-400"
    :class="{
      'border-l-4 border-red-400 font-semibold text-red-400':
        itemKey === activeItem,
    }"
    @click="selectItem"
  >
    <div>
      <a-icon :type="iconName" class="text-xl mr-4" />
    </div>
    <div class="text-lg">{{ title }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['title', 'iconName', 'itemKey', 'activeItem'],
  methods: {
    selectItem() {
      this.$emit('onSelect', this.itemKey)
    },
  },
}
</script>

<style></style>
