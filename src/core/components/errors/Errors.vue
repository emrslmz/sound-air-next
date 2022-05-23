<template>
  <div v-if="errors" :key="`${name}-errors`" class="d-flex flex-column justify-content-start w-100 pt-1">
    <div v-for="(error, key) in errors" :key="`${name}-${key}`">
      <div
class="d-flex justify-content-start row no-gutters w-100"
           :class="error.field ? 'field-errors' : 'p-3 main-errors'">
        <template v-if="name === 'general'">
          {{ error.message }}
        </template>
        <template v-else>
          <p class="text-sm text-red-600 dark:text-red-500">
            {{ error.message }}
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Errors',
  props: {
    errors: {
      type: Array,
      required: false,
      default: () => [],
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.main-errors {
  color: #86181d;
  background: #FFDCE0;
  border-radius: 4px;
}

.field-errors {
  color: red;
}
</style>
