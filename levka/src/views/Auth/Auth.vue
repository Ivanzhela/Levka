<script>
import { useVuelidate } from "@vuelidate/core";
import Input from "../../components/Input.vue";
import formAction from "./formType.js"

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      formData: formAction.formData,
      formTypeAction: "login",
    };
  },
  methods: {
    async onSubmit() {

      const isValid = await this.v$.$validate();

      if (isValid) {
        this.formData = JSON.stringify(
          this.data.formData[this.formTypeAction],
          null,
          4
        );
      }
    },
    changeFormTypeAction(newFormType) {
      this.formTypeAction = newFormType;
      this.v$.$reset();
    },
  },
  validations() {
    return formAction.validator(this.formData.register.password, this.formTypeAction)
  },
  components: { Input },
};
</script>

<template>
  <section class="auth">
    <h1 :class="formTypeAction">
      {{ formTypeAction == "login" ? "ВХОД" : "РЕГИСТРАЦИЯ" }}
    </h1>
    <form action="" @submit.prevent="onSubmit">
      <Input
        v-model="v$.formData[formTypeAction].username.$model"
        placeholder="име"
        name="username"
        :error="v$.formData[formTypeAction].username.$errors"
      />
      <Input
        v-model="v$.formData[formTypeAction].password.$model"
        placeholder="парола"
        name="password"
        :error="v$.formData[formTypeAction].password.$errors"
        type="password"
      />
      <template v-if="formTypeAction == 'register'">
        <Input
          v-model="v$.formData[formTypeAction].rePass.$model"
          placeholder="повторете паролата"
          name="rePass"
          :error="v$.formData[formTypeAction].rePass.$errors"
          type="password"
        />
      </template>
      <div class="terms">
        <p>Съгласявате ли се с общите условия на сайта</p>
        <Input
          v-model="v$.formData[formTypeAction].terms.$model"
          name="terms"
          :error="v$.formData[formTypeAction].terms.$errors"
          type="checkbox"
        />
      </div>
      <div class="buttons">
        <button class="catalogBtn">
          {{ formTypeAction == "login" ? "ВХОД" : "РЕГИСТРАЦИЯ" }}
        </button>
        <p class="catalogBtn"
          @click="
            changeFormTypeAction(
              formTypeAction == 'login' ? 'register' : 'login'
            )
          "
        > {{ formTypeAction == "login" ? "РЕГИСТРАЦИЯ" : "ВХОД" }}
        </p>
      </div>
    </form>
  </section>
</template>

<style lang="css" scoped>
.auth {
  background-color: #101010;
  color: #f4f4f4;
  padding: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.auth .login {
  font-size: 82px;
  letter-spacing: 6px;
}
.auth .register {
  font-size: 62px;
  letter-spacing: 6px;
}
.auth form {
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.auth .terms {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 40px 0;
}

.auth .terms input {
  margin: 0;
}

.auth .buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
.auth button,
.auth .buttons p {
  text-align: center;
  margin-top: 20px;
  width: 200px;
  align-self: center;
}

.auth .buttons p {
  background-color: #400101;
}
</style>
