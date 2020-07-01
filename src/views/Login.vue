<template>
  <div class="loginPage">
    <div class="loginPage__imageWrapper">
      <img :src="require('../assets/login_image.png')" alt="Image" />
    </div>
    <div class="loginPage__content">
      <Logo />
      <div class="loginPage__content__title">
        <h1>Login</h1>
      </div>
      <span class="loginPage__content__label">Username</span>
      <SearchInput
        class="loginPage__content__input"
        placeholder="Enter username"
        :value="login"
        @onChange="onChangeLogin"
        :disabled="$store.state.isLoginLoading"
      />
      <span class="loginPage__content__label">Password</span>
      <SearchInput
        class="loginPage__content__input"
        placeholder="Enter password"
        :value="password"
        @onChange="onChangePassword"
        type="password"
        :disabled="$store.state.isLoginLoading"
      />
      <Button
        class="loginPage__content__button"
        title="Log in"
        @onClick="onClickLogin()"
        :disabled="isButtonDisabled"
      />
      <router-link
        class="loginPage__content__forgotPassword"
        to="/passwordRecovery"
        >Forgot password?</router-link
      >
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/common/SearchInput.vue";
import Button from "@/components/common/Button.vue";
import Logo from "@/components/common/Logo.vue";

export default {
  components: {
    SearchInput,
    Button,
    Logo
  },
  data() {
    return {
      login: "user101",
      password: "P@ssword"
    };
  },
  computed: {
    isButtonDisabled() {
      return (
        this.$store.state.isLoginLoading ||
        this.login.length === 0 ||
        this.password.length === 0
      );
    }
  },
  methods: {
    onClickLogin() {
      this.$store.dispatch("login", {
        login: this.login,
        password: this.password
      });
    },
    onChangeLogin(value) {
      this.login = value;
    },
    onChangePassword(value) {
      this.password = value;
    }
  }
};
</script>

<style lang="scss" scoped>
.loginPage {
  display: flex;
  flex-direction: row;

  &__imageWrapper {
    display: none;
    max-width: 42%;

    img {
      max-width: 100%;
      object-fit: cover;
      height: 100vh;
    }

    @media only screen and (min-width: $tablet) {
      display: block;
    }
  }

  &__content {
    padding: rem(40px) rem(24px);
    display: flex;
    flex-direction: column;
    width: 100%;

    @media only screen and (min-width: $tablet) {
      padding: rem(52px) rem(128px);
      max-width: rem(496px);
    }

    &__title {
      margin-top: rem(103px);
      margin-bottom: rem(7px);
      font-size: rem(30px);
    }

    &__label {
      padding-top: rem(22px);
      padding-bottom: rem(8px);
      font-size: rem(14px);
    }

    &__input {
    }

    &__button {
      margin-top: rem(56px);
    }

    &__forgotPassword {
      @include clickable;
      margin-top: rem(16px);
      color: $grey4;
      font-size: rem(14px);
      text-decoration: underline;
    }
  }
}
</style>
