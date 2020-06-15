/* eslint-disable prettier/prettier */
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="iconWidth"
    :height="iconHeight"
    viewBox="0 0 14 14"
  >
    <g fill="none" fill-rule="evenodd">
      <path d="M0 0L24 0 24 24 0 24z" transform="translate(-5 -5)" />
      <path
        :fill="iconColor"
        fill-rule="nonzero"
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        transform="translate(-5 -5)"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconWidth: {
      type: [Number, String],
      default: 14
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
