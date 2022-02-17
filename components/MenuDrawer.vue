<template>
  <div>
    <div class="pt-8 pl-6 mb-8">
      <img src="~/assets/mceasylogo.png" alt="mceasylogo" width="140" />
    </div>

    <MenuItem
      title="Dashboard"
      itemKey="dsb"
      iconName="home"
      :activeItem="activeMenuItem"
      @onSelectItem="selectMenuItem"
    />

    <div class="px-6 mt-6 mb-2">Main Menu</div>
    <MenuItem
      title="Analytics"
      itemKey="anl"
      iconName="line-chart"
      :activeItem="activeMenuItem"
      @onSelectItem="selectMenuItem"
    />
    <MenuItem
      title="Customers"
      itemKey="cust"
      iconName="user"
      :activeItem="activeMenuItem"
      @onSelectItem="selectMenuItem"
    />
    <MenuItem
      title="Products"
      itemKey="prd"
      iconName="tag"
      :activeItem="activeMenuItem"
      @onSelectItem="selectMenuItem"
    />
    <MenuItem
      title="Orders"
      itemKey="ord"
      iconName="shopping-cart"
      :activeItem="activeMenuItem"
      @onSelectItem="selectMenuItem"
    />
    <MenuItem
      title="Reports"
      itemKey="rpt"
      iconName="file-text"
      :activeItem="activeMenuItem"
      @onSelectItem="selectMenuItem"
    />

    <div class="px-6 mt-6 mb-2">Support</div>
    <MenuItem
      title="Settings"
      itemKey="stg"
      iconName="setting"
      :activeItem="activeMenuItem"
      @onSelectItem="selectMenuItem"
    />
    <MenuItem
      title="Support"
      itemKey="spt"
      iconName="customer-service"
      :activeItem="activeMenuItem"
      @onSelectItem="selectMenuItem"
    />
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

<style></style>
