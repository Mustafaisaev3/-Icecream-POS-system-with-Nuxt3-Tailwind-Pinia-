<template>
  <div class="w-[300px] h-screen flex flex-col bg-white border-r-[1px] border-gray-200">
    <div class="w-full h-[100px] border-b-[1px] border-gray-200">
      <div class="w-full h-full flex items-center justify-center">
        <img src="~~/public/logo.svg" class="w-auto h-[70px]" />
      </div>
    </div>
    <div class="w-full h-full flex flex-col flex-1 py-8">
        <nav class="flex flex-col gap-5">
            <MenuItem :label="'Home'">
              <IconHome class="text-[24px] text-[#fc5a95]" />
            </MenuItem>
            <MenuItem :label="'Menu'">
              <IconMenu class="text-[24px] text-[#fc5a95]" />
            </MenuItem>
            <MenuItem :label="'Orders'">
              <IconOrder class="text-[24px] text-[#fc5a95]" />
            </MenuItem>
            <MenuItem :label="'Blog'">
              <IconBlog class="text-[24px] text-[#fc5a95]" />
            </MenuItem>
        </nav>
    </div>
    <div class="w-full h-[100px]">
      <MenuItem :label="'Logout'">
        <IconLogout class="text-[24px] text-[#fc5a95]" />
      </MenuItem>
    </div>
  </div>
</template>

<script setup>
import MenuItem from '../sidebar/MenuItem.vue';
import IconHome from '~icons/mdi/home'
import IconMenu from '~icons/mdi/list-box'
import IconOrder from '~icons/mdi/receipt-text-check'
import IconBlog from '~icons/mdi/blogger'
import IconLogout from '~icons/mdi/logout'

</script>

<style>

</style>