<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
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
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import ArrowDropUpIcon from "./components/icons/ArrowDropUpIcon.vue";
import ArrowDropDownIcon from "./components/icons/ArrowDropDownIcon.vue";
import CheckIcon from "./components/icons/CheckIcon.vue";
import CloseIcon from "./components/icons/CloseIcon.vue";
import SearchIcon from "./components/icons/SearchIcon.vue";
import StarBorderIcon from "./components/icons/StarBorderIcon.vue";
import StarIcon from "./components/icons/StarIcon.vue";
import GroupIcon from "./components/icons/GroupIcon.vue";

@Component({
  components: {
    HelloWorld,
    ArrowDropUpIcon,
    ArrowDropDownIcon,
    CheckIcon,
    CloseIcon,
    SearchIcon,
    StarBorderIcon,
    StarIcon,
    GroupIcon
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
$primary: #4460f7;
$darker: #2140e8;
$active: #f9a52b;
$grey1: #f0f1f5;
$grey2: #e0e2ea;
$grey3: #b9bdcf;
$grey4: #9194a5;
$grey5: #1a1b1d;

#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
