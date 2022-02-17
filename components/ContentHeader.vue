<template>
  <div class="flex justify-between items-center mb-8">
    <div>
      <h3 class="text-2xl text-white">{{ title }}</h3>
      <h5 class="font-light text-white text-gray-400">
        {{ subtitle }}
      </h5>
    </div>
    <div class="flex items-center text-white">
      <div class="mr-8">
        <a-badge dot>
          <a-icon type="bell" class="text-2xl" />
        </a-badge>
      </div>
      <div class="flex items-center">
        <div class="mr-4">
          <a-avatar :size="48" icon="user" />
        </div>

        <a-popover
          trigger="click"
          placement="bottomRight"
          class="flex items-center"
        >
          <div class="mr-8 cursor-default">Rezki</div>
          <a slot="content">Logout</a>
          <a-icon type="down" />
        </a-popover>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle'],
}
</script>

<style></style>
