<template>
    <SHeader/>
    <main class="main">
      <router-view/>
    </main>
    <SFooter/>
</template>

<script>

  import "./assets/styles/global.scss";
  import SHeader from "@/components/SHeader/SHeader";
  import SFooter from "@/components/SFooter/SFooter";

  export default {
    components: {
      SHeader,
      SFooter
    },
  };
  </script>
