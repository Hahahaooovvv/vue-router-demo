<template>
  <div style="height:20000px;">
    关于我
    <hr>
    <ul class="nav">
      <router-link :to="{name: 'about'}" tag="li" exact class="nav-item">study</router-link>
      <router-link :to="{name: 'work'}" tag="li" class="nav-item">work</router-link>
      <router-link :to="{name: 'hobby'}" tag="li" class="nav-item">hobby</router-link>
    </ul>
    <router-view/>
  </div>
</template>
