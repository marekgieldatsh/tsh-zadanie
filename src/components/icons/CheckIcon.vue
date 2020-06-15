/* eslint-disable prettier/prettier */
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="iconWidth"
    :height="iconHeight"
    viewBox="0 0 18 14"
  >
    <g fill="none" fill-rule="evenodd">
      <path d="M0 0L24 0 24 24 0 24z" transform="translate(-3 -5)" />
      <path
        :fill="iconColor"
        fill-rule="nonzero"
        d="M9 16.17L4.83 12 3.41 13.41 9 19 21 7 19.59 5.59z"
        transform="translate(-3 -5)"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconWidth: {
      type: [Number, String],
      default: 18
    },
    iconHeight: {
      type: [Number, String],
      default: 14
    },
    iconColor: {
      type: String,
      default: "#1A1B1D"
    }
  }
};
</script>
