<template>
  <div class="flex justify-between items-end mb-2">
    <div class="text-gray-400 text-base">{{ title.toUpperCase() }}</div>
    <div class="text-xs text-red-600">*required</div>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style></style>
