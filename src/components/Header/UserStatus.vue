<template>
  <div class="userStatus">
    <Button
      v-if="!isUserLoggedIn"
      title="Login"
      outlined
      @onClick="onClickLogin()"
    />
    <Dropdown v-if="isUserLoggedIn" text="Logout" @onClick="onClickLogout()">
      <Avatar />
    </Dropdown>
  </div>
</template>

<script>
import Dropdown from "@/components/common/Dropdown.vue";
import Button from "@/components/common/Button.vue";
import Avatar from "@/components/common/Avatar.vue";

export default {
  name: "Header",
  components: {
    Dropdown,
    Button,
    Avatar
  },
  data() {
    return {
      isUserLoggedIn: false
    };
  },
  mounted() {
    this.isUserLoggedIn = localStorage.getItem("token");
  },
  methods: {
    onClickLogout() {
      this.$store.dispatch("logout");
      this.$store.dispatch("fetchProducts");
      this.isUserLoggedIn = false;
    },
    onClickLogin() {
      this.$router.push("login", () => {});
    }
  }
};
</script>

<style lang="scss" scoped>
.userStatus {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: $tabletLandscape) {
    order: 2;
  }
}
</style>
