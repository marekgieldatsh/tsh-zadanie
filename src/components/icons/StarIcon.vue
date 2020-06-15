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
        d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z"
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
