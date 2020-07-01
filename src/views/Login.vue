<template>
  <div class="loginPage">
    <Container class="loginPage__container">
      <div class="loginPage__container__imageWrapper">
        <img :src="require('../assets/login_image.png')" alt="Image" />
      </div>
      <div class="loginPage__container__content">
        <Header />
        <div class="loginPage__container__title">
          <h1>Login</h1>
        </div>
        <span class="loginPage__container__label">Username</span>
        <SearchInput
          class="loginPage__container__input"
          placeholder="Enter username"
        />
        <span class="loginPage__container__label">Password</span>
        <SearchInput
          class="loginPage__container__input"
          placeholder="Enter password"
        />
        <Button class="loginPage__container__button" title="Log in" />
        <a class="loginPage__container__forgotPassword">Forgot password?</a>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "@/components/common/Container.vue";
import SearchInput from "@/components/common/SearchInput.vue";
import Button from "@/components/common/Button.vue";

export default {
  components: {
    Container,
    SearchInput,
    Button
  }
};
</script>

<style lang="scss" scoped>
.loginPage {
  &__container {
    padding-top: rem(55px);
    display: flex;

    &__imageWrapper {
      display: none;

      img {
        max-width: 42vw;
      }

      @media only screen and (min-width: $tablet) {
        display: block;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
    }

    &__title {
      padding-bottom: rem(7px);
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
      margin-top: rem(16px);
      color: $grey4;
      font-size: rem(14px);
      text-decoration: underline;
    }
  }
}
</style>
