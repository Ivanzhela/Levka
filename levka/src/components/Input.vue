<script>
export default {
  props: {
    modelValue: {
      type: [String, Boolean],
    },
    name: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
    },
    error: {
      type: Array,
    },
  },
  emits: ["update:modelValue"]
};
</script>

<template>
  <template v-if="type === 'checkbox'">
    <input
      :type="type"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
  </template>
  <template v-else>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </template>
  <p v-for="err of error" :key="err.$message" class="error">
    * {{ err.$message }}
  </p>
</template>

<style lang="css" scoped>
input {
  width: 500px;
  border: none;
  border-bottom: 1px solid #d9a273;
  background-color: #101010;
  margin-top: 20px;
  color: #f4f4f4;
  padding: 10px;
  font-size: 24px;
}

input[type="checkbox"] {
  width: auto;
}
input::placeholder {
  color: #f4f4f47e;
  font-size: 20px;
}

input:focus {
  outline: none;
}

.error {
  font-size: 16px;
  color: #bf0413;
  margin-top: 10px;
}
</style>
