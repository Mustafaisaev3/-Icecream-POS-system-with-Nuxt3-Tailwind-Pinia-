<template>
    <div class="w-full h-full flex items-center justify-center">
      <RegisterForm />
    </div>
</template>
  
<script setup>
  import RegisterForm from "../../components/auth/RegisterForm.vue"
  
  definePageMeta({
      layout: 'auth'
  })
  
</script>

<style>

</style>