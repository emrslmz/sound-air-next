<template>
  <component :is="tag" :type="type" :disabled="disabledStatus" :data-action="dataAction" :class="[btnClass, colorVariants]" :variant="variant" :variant-type="variantType" :size="size" :target="target" :href="to" :to="to" @click="onButtonClicked()">
    <slot />
  </component>
</template>

<script>
// eslint-disable

export default {
  name: 'GrButton',
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'primary',
    },
    variantType: {
      type: String,
      default: 'normal',
    },
    size: {
      type: String,
      default: 'normal',
    },
    rounded: {
      type: String,
      default: 'medium',
    },
    type: {
      type: String,
      default: '',
    },
    to: {
      type: [String, Object],
      default: '',
    },

    executableFunction: {
      type: Function,
      required: false,
      default: () => {},
    },

    time: {
      type: Number,
      required: false,
      default: 500,
    },

    isLoadingDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    externalLoading: {
      required: false,
      type: Boolean,
      default: false,
    },

    dataAction: {
      required: false,
      type: String,
      default: '',
    },

    target: {
      required: false,
      type: String,
      default: '_self',
    },
  },
  emits: ['onDone'],
  data() {
    return {
      loading: false,
      disableButton: this.disabled,
    };
  },

  computed: {
    loadingStatus() {
      return this.loading || this.externalLoading;
    },

    disabledStatus() {
      return this.disableButton || this.externalLoading;
    },

    btnClass() {
      return {
        'base-spinner': this.loadingStatus === true,
        'cursor-not-allowed': this.disabledStatus === true,
        'inline-flex align-middle align-items-center justify-center font-medium focus:outline-none border-1': true,

        'rounded-lg': this.rounded === 'medium',
        'rounded-full': this.rounded === 'large',

        'px-6 py-3': this.size === 'normal',
        'px-4 py-2 text-xs': this.size === 'small',

        'shadow-md hover:shadow-lg transition duration-150 ease-in-out focus:ring-offset-2 focus:ring-2': true,
      };
    },

    // eslint-disable-next-line vue/return-in-computed-property
    colorVariants() {
      switch (this.variant) {
        case 'primary':
          switch (this.variantType) {
            case 'normal':
              switch (this.disableButton) {
                case true:
                  return 'border-blue-300 bg-blue-300 text-white';
                  break;
                default:
                  break;
              }
              return 'border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700 text-white';
              break;
            case 'outline':
              return 'border-gray-200 text-blue-500 hover:text-blue-700';
              break;
            default:
              break;
          }
          break;
        case 'danger':
          switch (this.variantType) {
            case 'normal':
              switch (this.disableButton) {
                case true:
                  return 'border-red-300 bg-red-300 text-white';
                  break;
                default:
                  break;
              }
              return 'border-red-600 bg-red-600 hover:bg-red-700 hover:border-red-700 text-white';
              break;
            case 'outline':
              return 'border-gray-200 text-red-500 hover:text-red-600';
              break;
            default:
              break;
          }
          break;

        case 'warning':
          switch (this.variantType) {
            case 'normal':
              return 'border-orange-600 bg-orange-600 hover:bg-orange-700 hover:border-orange-700 text-white';
              break;
            default:
              break;
          }
          break;

        case 'success':
          switch (this.variantType) {
            case 'normal':
              switch (this.disableButton) {
                case true:
                  return 'border-green-300 bg-green-300 text-white';
                  break;
                default:
                  break;
              }
              return 'border-green-600 bg-green-600 hover:bg-green-700 hover:border-green-700 text-white';
              break;
            case 'outline':
              return 'border-2 border-gray-200 text-green-500 hover:text-green-700';
              break;
            default:
              break;
          }
          break;

        case 'white':
          switch (this.variantType) {
            case 'normal':
              return 'border-white bg-white bg-white text-blue-600 hover:text-blue-800';
              break;
            default:
              break;
          }
          break;

        case 'secondary':
          switch (this.variantType) {
            case 'outline':
              return 'border-gray-300 text-gray-500 hover:text-blue-500';
              break;
            default:
              break;
          }
          break;

        case 'cancel':
          return 'w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm';

        case 'done':
          return 'w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-auto sm:text-sm';

        case 'done-secondary':
          return 'w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500';

        default:
          break;
      }
    },
  },

  methods: {
    startLoading() {
      this.loading = true;
      this.disableButton = true;
    },
    stopLoading() {
      this.loading = false;
      this.disableButton = false;
    },

    async onButtonClicked() {
      if (!this.isLoadingDisabled) {
        try {
          await this.startLoading();
          await setTimeout(async () => {
            await this.executableFunction();
            this.stopLoading();
            this.$emit('onDone');
          }, this.time);
        } catch (e) {
          await setTimeout(() => this.stopLoading(), this.time);
          throw e;
        }
      }
    },
  },
};
</script>

<style scoped>
.base-button + .base-button {
  margin-left: 1em;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.base-spinner {
  position: relative;
  overflow: hidden;
}

.base-spinner:before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  background-color: inherit;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
  top: 0;
  left: 0;
}

.base-spinner:after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.45);
  border-top-color: inherit;
  animation: spinner 0.6s linear infinite;
  z-index: 2;
}
</style>
