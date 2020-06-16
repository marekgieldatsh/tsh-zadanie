/* eslint-disable prettier/prettier */
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 38 48"
  >
    <path
      :fill="color"
      d="M19 .522c4.353 0 7.942 3.272 8.441 7.499L34 8.022c2.142 0 3.891 1.684 3.995 3.8l.005.2v31.5c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4v-31.5c0-2.21 1.79-4 4-4l6.558-.001c.49-4.144 3.95-7.37 8.187-7.495zm0 2c-3.59 0-6.5 2.91-6.5 6.5 0 .552-.448 1-1 1H4c-1.105 0-2 .895-2 2v31.5c0 1.105.895 2 2 2h30c1.105 0 2-.895 2-2v-31.5c0-1.105-.895-2-2-2h-7.5c-.552 0-1-.448-1-1 0-3.59-2.91-6.5-6.5-6.5zm0 4l.144.006c.899.073 1.606.826 1.606 1.744 0 .966-.784 1.75-1.75 1.75s-1.75-.784-1.75-1.75c0-.918.707-1.671 1.606-1.744L19 6.522z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: 38
    },
    height: {
      type: [Number, String],
      default: 48
    },
    color: {
      type: String,
      default: "#B9BDCF"
    }
  }
};
</script>
