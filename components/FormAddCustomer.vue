<template>
  <div class="flex-1 flex flex-col px-8 pt-6 pb-10">
    <a-space>
      <div
        class="text-lg font-semibold cursor-default"
        style="color: #f95f5f"
        @click="onBack"
      >
        Customers
      </div>
      <a-icon type="right" class="text-lg" />
      <div class="text-xl font-semibold text-indigo-900">Add New Customer</div>
    </a-space>

    <div class="mt-6 flex-1 flex gap-12">
      <!-- section 1 -->
      <div class="flex flex-col text-center">
        <div
          class="w-52 h-52 bg-gray-200 text-gray-500 flex flex-col justify-center items-center mb-5"
        >
          <a-icon type="picture" class="text-4xl" />
          <div class="mt-2 font-light">Browse Photo</div>
          <div class="font-light">(JPEG,JPG,PNG)</div>
        </div>

        <a-space direction="vertical">
          <div
            class="w-52 bg-gray-200 text-gray-500 rounded-md py-2 font-light cursor-pointer"
          >
            Upload
          </div>
          <div
            class="w-52 bg-gray-200 text-gray-500 rounded-md py-2 font-light cursor-pointer"
          >
            Remove
          </div>
        </a-space>
      </div>

      <!-- section 2 -->
      <div class="flex-1 flex flex-col justify-between">
        <div class="flex flex-col">
          <FormItemLabel title="full name" />
          <a-form-model-item>
            <a-input size="large" placeholder="Enter full name" />
          </a-form-model-item>
        </div>

        <div class="flex flex-col">
          <FormItemLabel title="Gender" />
          <a-form-model-item>
            <a-radio-group>
              <a-radio value="m">Male</a-radio>
              <a-radio value="f">Female</a-radio>
            </a-radio-group>
          </a-form-model-item>
        </div>

        <div class="flex flex-col">
          <FormItemLabel title="date of birth" />
          <a-form-model-item>
            <a-date-picker
              type="date"
              size="large"
              placeholder="dd/mm/yyyy"
              style="width: 100%"
              format="DD/MM/YYYY"
            />
          </a-form-model-item>
        </div>

        <div class="flex flex-col">
          <FormItemLabel title="identity type" />
          <a-form-model-item>
            <a-select
              placeholder="KTP/SIM/OTHER"
              size="large"
              style="width: 100%"
            >
              <a-select-option value="ktp"> KTP </a-select-option>
              <a-select-option value="sim"> SIM </a-select-option>
              <a-select-option value="other"> OTHER </a-select-option>
            </a-select>
          </a-form-model-item>
        </div>

        <div class="flex flex-col">
          <FormItemLabel title="identity number" />
          <a-form-model-item>
            <a-input size="large" placeholder="Enter identity number" />
          </a-form-model-item>
        </div>

        <div class="flex flex-col">
          <FormItemLabel title="email" />
          <a-form-model-item>
            <a-input size="large" placeholder="Enter email" />
          </a-form-model-item>
        </div>

        <div class="flex flex-col">
          <FormItemLabel title="phone number" />
          <a-form-model-item style="margin-bottom: 0">
            <a-input-group compact size="large">
              <a-select default-value="62" style="width: 20%" size="large">
                <a-select-option value="62">+62</a-select-option>
                <a-select-option value="65">+65</a-select-option>
              </a-select>
              <a-input style="width: 80%" placeholder="Enter phone number" />
            </a-input-group>
          </a-form-model-item>
        </div>
      </div>

      <!-- section 3 -->
      <div class="flex-1 flex flex-col justify-between">
        <div class="flex flex-col">
          <FormItemLabel title="address" />
          <a-form-model-item>
            <a-textarea placeholder="Enter address" :rows="5" />
          </a-form-model-item>
        </div>

        <div class="flex flex-col">
          <FormItemLabel title="detail address" />
          <a-form-model-item>
            <a-textarea
              placeholder="Enter detail address: (Street, Block, Number, etc)"
              :rows="4"
            />
          </a-form-model-item>
        </div>

        <div
          class="flex-1 bg-gray-200 rounded text-white relative"
          style="margin-bottom: 20px"
        >
          <div class="py-2 px-4 bg-yellow-200 flex items-center">
            <a-icon type="environment" />
            <div class="ml-2">Select pin from map</div>
          </div>

          <div
            class="success-btn rounded px-4 py-2 inline-block cursor-pointer text-xs absolute bottom-4 right-4"
          >
            See Maps
          </div>
        </div>

        <div class="flex flex-col">
          <FormItemLabel title="instagram" />
          <a-form-model-item>
            <a-input size="large" placeholder="Enter instagram" />
          </a-form-model-item>
        </div>

        <div class="flex justify-end">
          <div
            class="success-btn rounded px-6 py-2 text-white inline-block cursor-pointer"
          >
            Add Customer
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onBack() {
      this.$emit('backAction')
    },
  },
}
</script>

<style scoped>
/* .ant-form-item:last-of-type {
  margin-bottom: 0 !important;
} */
.success-btn {
  background: #f95f5f;
}
.success-btn:hover {
  background-color: #84cc16;
}
</style>
