<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <div class="mb-8">
      <img src="~/assets/mceasylogo.png" alt="mceasylogo" width="160" />
    </div>

    <a-card title="Login" hoverable :bordered="false" style="width: 360px">
      <a-form-model
        layout="vertical"
        ref="loginForm"
        :model="form"
        :rules="rules"
      >
        <a-form-model-item label="Username" prop="username">
          <a-input v-model="form.username" />
        </a-form-model-item>
        <a-form-model-item label="Password" prop="password">
          <a-input-password v-model="form.password" />
        </a-form-model-item>
        <a-form-model-item>
          <a-button block type="primary" @click="onLogin"> Login </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: 'Please input your username',
            trigger: 'change',
          },
        ],
        password: [
          {
            required: true,
            message: 'Please input password',
            trigger: 'change',
          },
        ],
      },
    }
  },
  methods: {
    onLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$router.push('/dashboard')
          this.$store.commit('setUsername', this.form.username)
        } else {
          return false
        }
      })
    },
  },
}
</script>

<style></style>
