<template>
  <div class="page-sider">
    <PageSider />
  </div>
  <router-view></router-view>
</template>

<script>
import PageSider from "@/components/Sider/index.vue";
export default {
  components: {
    PageSider,
  },
};
</script>
