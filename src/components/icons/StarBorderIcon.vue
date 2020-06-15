/* eslint-disable prettier/prettier */
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="iconWidth"
    :height="iconHeight"
    viewBox="0 0 20 19"
  >
    <g fill="none" fill-rule="evenodd">
      <path d="M0 0L24 0 24 24 0 24z" transform="translate(-2 -2)" />
      <path
        :fill="iconColor"
        fill-rule="nonzero"
        d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
        transform="translate(-2 -2)"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconWidth: {
      type: [Number, String],
      default: 20
    },
    iconHeight: {
      type: [Number, String],
      default: 19
    },
    iconColor: {
      type: String,
      default: "#1A1B1D"
    }
  }
};
</script>
