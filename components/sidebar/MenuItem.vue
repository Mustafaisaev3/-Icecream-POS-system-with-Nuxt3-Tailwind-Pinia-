<template>
  <div class="
    menu-item
    relative
    w-full 
    h-auto 
    flex 
    items-end 
    gap-4 
    py-2
    px-8
    rounded-md 
    border-white 
    hover:bg-[#f8f8f8] 
    cursor-pointer"
  >
    <div class=" text-[#fc5a95] rounded-md">
      <slot></slot>
    </div>
    <div class="text-lg text-[#fc5a95] flex-1 hidden md:block">
        {{ label }}
    </div>
  </div>
</template>

<script setup>
import IconProduct from '~icons/mdi/purse'

const props = defineProps({
    label: {
        type: String,
    }
})

</script>

<style scoped>
.menu-item:hover::after {
    content: '';
    height: 100%;
    width: 5px;
    position: absolute;
    top: 0;
    right: 0;
    background: #fc5a95;
    border-left: 5px #fc5a95;
    border-radius: 5px 0px 0px 5px;
}
</style>