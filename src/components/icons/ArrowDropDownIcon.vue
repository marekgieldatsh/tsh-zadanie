/* eslint-disable prettier/prettier */
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 10 5"
  >
    <g fill="none" fill-rule="evenodd">
      <path d="M0 0L24 0 24 24 0 24z" transform="translate(-7 -10)" />
      <path
        :fill="color"
        fill-rule="nonzero"
        d="M7 10L12 15 17 10z"
        transform="translate(-7 -10)"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: 10
    },
    height: {
      type: [Number, String],
      default: 5
    },
    color: {
      type: String,
      default: "#1A1B1D"
    }
  }
};
</script>
