<template>
  <div class="w-full h-full flex items-center justify-center">
    <LoginForm />
  </div>
</template>

<script setup>
import LoginForm from "../../components/auth/LoginForm.vue"

definePageMeta({
    layout: 'auth'
})

</script>

<style>

</style>