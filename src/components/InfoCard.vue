<template>
  <div class="infoCard">
    <GroupIcon class="infoCard__icon" width="36" height="46" />
    <h2 class="infoCard__title">Ooops… It’s empty here</h2>
    <p class="infoCard__subtitle">There are no products on the list</p>
  </div>
</template>

<script>
import GroupIcon from "@/components/icons/GroupIcon.vue";

export default {
  props: {},
  components: {
    GroupIcon
  }
};
</script>

<style lang="scss" scoped>
.infoCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: $white;
  padding: rem(118px) rem(197px);
  border-radius: 8px;

  &__title {
    margin-top: rem(22px);
    font-size: rem(18px);
  }

  &__subtitle {
    margin-top: rem(8px);
    color: $grey4;
    font-size: rem(14px);
  }
}
</style>
