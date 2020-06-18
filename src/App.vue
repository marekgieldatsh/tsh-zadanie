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
    <div style="width: 100%; display: flex; justify-content: flex-end;">
      <Dropdown text="Logout" @onClick="onDropdownClick">
        <Avatar image="photo.png" />
      </Dropdown>
    </div>
    <br />
    <Checkbox label="Toggle" @onToggle="onCheckboxToggle" />
    <br />
    <Checkbox label="Toggle" @onToggle="onCheckboxToggle" />
    <br />
    <Checkbox label="Toggle" @onToggle="onCheckboxToggle" />
    <br />
    <ArrowDropUpIcon />
    <ArrowDropDownIcon />
    <CheckIcon />
    <CloseIcon />
    <SearchIcon />
    <StarBorderIcon />
    <StarIcon />
    <GroupIcon />
    <a target="_blank" href="https://icons8.com/icons/set/user">User icon</a>
    icon by
    <a target="_blank" href="https://icons8.com">Icons8</a>
  </div>
</template>

<script lang="ts">
import Button from "./components/common/Button.vue";
import TextInput from "./components/common/TextInput.vue";
import Dropdown from "./components/common/Dropdown.vue";
import Avatar from "./components/common/Avatar.vue";
import Checkbox from "./components/common/Checkbox.vue";
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
    Dropdown,
    Avatar,
    Checkbox,
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
    },
    onDropdownClick() {
      console.log("dropdown clicked");
    },
    onCheckboxToggle(isChecked: boolean) {
      console.log(isChecked);
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
}

#app {
  font-family: "Nunito", sans-serif;
}
</style>
