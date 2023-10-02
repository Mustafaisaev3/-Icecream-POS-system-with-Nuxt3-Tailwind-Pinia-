<template>
    <button :class="['btn', `btn_${color}`]">{{ label }}</button>
  </template>
  
  <script setup>
  
  const props = defineProps({
      label: {
          type: String,
          default: 'Button'
      },
      color: {
          type: String,
          default: 'primary'
      },
  })
  </script>
  
  <style scoped>
  .btn {
      /* margin-right: 10px; */
      /* margin-bottom: 10px; */
      width: 100%;
      padding: 0 20px;
      height: 50px;
      color: #fff;
      border-radius: 7px;
      border: none;
      cursor: pointer;
      font-size: 15px;
      transition: .2s;
      margin-top: 5px;
      transition: all 0.3s ease 0s
  }
  
  /* Primary Button */
  .btn_primary {
      background: #fc5a95;
      /* background: rgb(252,90,149);
      background: linear-gradient(0deg, rgba(252,90,149,1) 0%, rgba(252,90,149,1) 35%, rgba(250,166,197,1) 100%); */
  }
  .btn_primary:hover {
      background: #fc5a95c8;
      /* background: rgb(252,90,149);
      background: linear-gradient(0deg, rgba(252,90,149,1) 0%, rgba(252,90,149,1) 35%, rgba(244,127,169,1) 100%); */
  }
  
  /* Secondary Button */
  .btn_secondary {
      background: #fff;
      color: #fc5a95;
      border: 1px solid #fc5a95;
  }
  .btn_secondary:hover {
      background: #f9b5ce5a;
      color: #fc5a95;
  }
  
  /* Success Button */
  .btn_success {
      background: #00C48C;
  }
  .btn_success:hover {
      background: #7DDFC3;
  }
  
  /* Info Button */
  .btn_info {
      background: #0084F4;
  }
  .btn_info:hover {
      background: #66B5F8;
  }
  
  /* Warning Button */
  .btn_warning {
      background: #FFA26B;
  }
  .btn_warning:hover {
      background: #FFC7A6;
  }
  
  /* Danger Button */
  .btn_danger {
      background: #FF647C;
  }
  .btn_danger:hover {
      background: #FDAFBB;
  }
  </style>