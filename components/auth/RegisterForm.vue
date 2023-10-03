<template>
    <form @submit.prevent="signUp" class="w-[500px] h-auto flex flex-col items-center p-8 bg-white bg-opacity-30 backdrop-blur-[10px] rounded-lg drop-shadow-2xl relative">
      <img src="~~/public/logo.svg" class="w-auto h-[100px]" />
      <h2 class="pt-4 text-xxl text-[#f47b97]">Create new account</h2>
      <div class="w-full h-auto pt-4">
          <Input :label="'Name'" v-model="name" />
          <Input :label="'Email'" v-model="email"/>
          <Input :label="'Password'" v-model="password" type="password"/>
          <div class="mt-2 text-[red] text-lg">{{ errorMsg }}</div>
      </div>
      <div class="w-full mt-6">
          <Button :label="'Register'" type="submit" />
      
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
      
          <Button :label="'Login'" :color="'secondary'" @click="router.push('/auth/login')" />
      </div>
    </form>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import Input from '~~/components/UI/Input'
  import Button from '~~/components/UI/Button'

  const client = useSupabaseClient()
  const router = useRouter()

  const name = ref('')
  const email = ref('')
  const password = ref('')
  const errorMsg = ref('')

  const signUp = async () => {
    try {
        const { data, error } = await client.auth.signUp({
            email: email.value,
            password: password.value,
            name: name.value
        })

        if (error) throw error

        router.push('/auth/login')
    } catch (error) {
        errorMsg.value = error.message
    }
  }

  
  </script>
  
  <style>
  
  </style>
  
  <!-- #fac8d4 -->