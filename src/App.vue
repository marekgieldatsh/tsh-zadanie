<template>
  <div id="app">
    <Button title="Button" @onClick="onButtonClick" />
    <Button title="Button [disabled]" disabled @onClick="onButtonClick" />
    <br />
    <Button outlined title="Outlined" @onClick="onButtonClick" />
    <Button
      outlined
      title="Outlined [disabled]"
      disabled
      @onClick="onButtonClick"
    />
    <br />
    <TextInput placeholder="Search" @onChange="onTextChange">
      <SearchIcon height="24" width="24" />
    </TextInput>
    <br />
    <ArrowDropUpIcon />
    <ArrowDropDownIcon />
    <CheckIcon />
    <CloseIcon />
    <SearchIcon />
    <StarBorderIcon />
    <StarIcon />
    <GroupIcon />
  </div>
</template>

<script lang="ts">
import Button from "./components/common/Button.vue";
import TextInput from "./components/common/TextInput.vue";
import ArrowDropUpIcon from "./components/icons/ArrowDropUpIcon.vue";
import ArrowDropDownIcon from "./components/icons/ArrowDropDownIcon.vue";
import CheckIcon from "./components/icons/CheckIcon.vue";
import CloseIcon from "./components/icons/CloseIcon.vue";
import SearchIcon from "./components/icons/SearchIcon.vue";
import StarBorderIcon from "./components/icons/StarBorderIcon.vue";
import StarIcon from "./components/icons/StarIcon.vue";
import GroupIcon from "./components/icons/GroupIcon.vue";

export default {
  components: {
    Button,
    TextInput,
    ArrowDropUpIcon,
    ArrowDropDownIcon,
    CheckIcon,
    CloseIcon,
    SearchIcon,
    StarBorderIcon,
    StarIcon,
    GroupIcon
  },
  methods: {
    onButtonClick() {
      console.log("hello");
    },
    onTextChange() {
      console.log("text changed");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Nunito", sans-serif;
}
</style>
