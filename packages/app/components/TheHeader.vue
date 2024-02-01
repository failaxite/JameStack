<script lang="ts" setup>
const search = useSearchStore();
</script>

<template>
  <nav class="w-full" style="background-color: #131921;">
    <div class="container">
      <div class="flex items-center space-between w-full">
        <NuxtLink to="/">
          <NuxtImg alt="" aria-hidden="true" class="h-16 test" src="https://cdn.discordapp.com/attachments/512761795459416065/1202252198734463018/images-removebg-preview_1.png?ex=65ccc79c&is=65ba529c&hm=e440a9ab4bee046025a6a910c00d1bd46ea048c748bfdf39f436a3a4f3213ecf&" style="top: 8px; left: 78px; width: 113px; height: 113px; background: transparent url('img/images-removebg-preview (1).png') 0% 0% no-repeat padding-box; opacity: 1;" />
        </NuxtLink>

      </div>
    </div>
  </nav>
</template>

<style>

.test {
  margin-left: 78px;
}
</style>