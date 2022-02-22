<template>

  <li class="nav-item active animated fadeInDown">
    <RouterLink class="nav-link" :to="link" active-class="active">{{ text }}</RouterLink>
  </li>

</template>

<script lang="ts">

export default {
  props: ["link", "text"],
}
</script>