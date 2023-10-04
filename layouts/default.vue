<template>
  <div class="w-full h-screen flex bg-[#f8f8f8]">
    <Sidebar />
    <div class="w-full h-screen">
        <Header />
        <slot></slot>
    </div>
    </div>
</template>

<script setup>
import Sidebar from '~/components/layout/Sidebar.vue';
import Header from '~/components/layout/Header.vue';

</script>

<style>
</style>