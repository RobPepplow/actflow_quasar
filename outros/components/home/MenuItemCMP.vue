<template>
  <li>
    <router-link v-bind:to="link">
      <a
        v-ripple
        class="
          flex
          align-items-center
          cursor-pointer
          p-3
          hover:bg-red-500
          border-round
          text-bluegray-900
          hover:text-bluegray-50
          transition-duration-150 transition-colors
          p-ripple
        "
      >
        <i :class="' pi '+' mr-2 '+ icon" ></i>
        <span class="font-medium">{{name}}</span>
      </a>
    </router-link>
  </li>
</template>

<script>
export default {
    name: "MenuItemCMP",
    props: ['link', 'icon', 'name' ]
};
</script>

<style>
</style>