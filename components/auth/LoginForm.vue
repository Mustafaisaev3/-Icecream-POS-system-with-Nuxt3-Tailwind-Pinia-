<template>
  <div class="w-[500px] h-auto flex flex-col items-center p-8 bg-white bg-opacity-30 backdrop-blur-[10px] rounded-lg drop-shadow-2xl relative">
    <img src="~~/public/logo.svg" class="w-auto h-[100px]" />
    <h2 class="pt-4 text-xxl text-[#f47b97]">Sign in to your account</h2>
    <div class="w-full h-auto pt-4">
        <Input :label="'Email'" />
        <Input :label="'Password'" />
    </div>
    <div class="w-full mt-6">
        <Button :label="'Login'" />
    
        <div className="w-full my-4">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600" />
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="bg-white bg-opacity-30 backdrop-blur-[10px] px-3 text-gray">
                    Or continue with
                    </span>
                </div>
            </div>
        </div>
    
        <Button :label="'Register'" :color="'secondary'" />
    </div>
  </div>
</template>

<script setup>
import Input from '~~/components/UI/Input'
import Button from '~~/components/UI/Button'

</script>

<style>

</style>

<!-- #fac8d4 -->