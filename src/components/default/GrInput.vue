<template>
  <div class="relative w-full">
    <label :for="vmId" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <div class="mt-1 flex rounded-md shadow-sm">
      <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm" v-if="icon">
        <i :class="icon"></i>
      </span>
      <input type="email" v-bind="$attrs" :id="vmId" v-model="model" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full sm:text-sm border-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed" :class="icon ? 'rounded-none rounded-r-md' : 'rounded-md'">
      <errors v-if="isError" :name="name" :errors="fieldErrors"/>
    </div>
  </div>
</template>

<script>
import { randomString } from '@/core/utils/string.utils';

import Errors from '@/core/components/errors/Errors.vue';

export default {
  name: 'GrInput',

  components: {
    Errors,
  },

  inheritAttrs: false,

  props: {
    name: {
      required: true,
      type: String,
      default: '',
    },

    label: {
      required: true,
      type: String,
      default: '',
    },

    modelValue: {
      type: [String, Boolean, Number],
      default: '',
      description: 'Radio value',
    },

    errors: {
      required: false,
      type: Object,
      default: () => {},
    },

    icon: {
      required: false,
      type: String,
      default: '',
    }
  },
  emits: ['input', 'update:modelValue'],

  data() {
    return {
      vmId: '',
    };
  },

  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },

    isError() {
      return !!(this.errors && this.errors[this.name]);
    },

    fieldErrors() {
      if (this.isError) {
        return this.errors[this.name];
      }
      return [];
    },
  },

  mounted() {
    this.vmId = randomString();
  },
};
</script>

<style scoped></style>
