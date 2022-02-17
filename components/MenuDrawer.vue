<template>
  <div>
    <div class="pt-8 pl-6 mb-8">
      <img src="~/assets/mceasylogo.png" alt="mceasylogo" width="140" />
    </div>

    <MenuItem
      title="Dashboard"
      itemKey="dsb"
      iconName="home"
      :activeItem="activeItem"
      @onSelect="onSelectMenuItem"
    />

    <div class="px-6 mt-6 mb-2">Main Menu</div>
    <MenuItem
      title="Analytics"
      itemKey="anl"
      iconName="line-chart"
      :activeItem="activeItem"
      @onSelect="onSelectMenuItem"
    />
    <MenuItem
      title="Customers"
      itemKey="cust"
      iconName="user"
      :activeItem="activeItem"
      @onSelect="onSelectMenuItem"
    />
    <MenuItem
      title="Products"
      itemKey="prd"
      iconName="tag"
      :activeItem="activeItem"
      @onSelect="onSelectMenuItem"
    />
    <MenuItem
      title="Orders"
      itemKey="ord"
      iconName="shopping-cart"
      :activeItem="activeItem"
      @onSelect="onSelectMenuItem"
    />
    <MenuItem
      title="Reports"
      itemKey="rpt"
      iconName="file-text"
      :activeItem="activeItem"
      @onSelect="onSelectMenuItem"
    />

    <div class="px-6 mt-6 mb-2">Support</div>
    <MenuItem
      title="Settings"
      itemKey="stg"
      iconName="setting"
      :activeItem="activeItem"
      @onSelect="onSelectMenuItem"
    />
    <MenuItem
      title="Support"
      itemKey="spt"
      iconName="customer-service"
      :activeItem="activeItem"
      @onSelect="onSelectMenuItem"
    />
  </div>
</template>

<script>
export default {
  props: ['activeItem'],
  methods: {
    onSelectMenuItem(key) {
      this.$emit('onSelectItem', key)
    },
  },
}
</script>

<style></style>
