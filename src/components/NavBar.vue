<script setup lang="ts">
 import AppTitle from "./AppTitle.vue";
</script>

<template>
 <navbar>
      <AppTitle></AppTitle>
      <div class="app-right">
        <section>
        <ul class="locale">
          <li class="active">English</li>
          <li>Français</li>
        </ul>
        </section>
        <section>
          <label class="theme">Light</label>
        </section>
        <section>
          <img src="../assets/settings_dark.svg" class="settings-btn" />
        </section>
      </div>
    </navbar>
</template>

<style scoped>
navbar{
  display:flex; 
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
 }
 
 .app-right{
  display: flex;
  gap:2rem; 
  justify-content: flex-end;
  align-items: center;
 }
 .locale{
  display: flex;
  gap: 0.5rem;
  text-decoration: none;
 }
 .locale > li{
  list-style: none;
  cursor: pointer;
 }
 .active{
  font-weight: bold;
 }
 .theme{
  cursor: pointer;
 }
 .settings-btn{
  cursor: pointer;
 }
</style>
