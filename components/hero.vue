<template v-once>
  <section id="hero" class="hero is-relative">
    <header class="header">
      <h1 class="header__title">Code_Swirls</h1>
      <h2 class="header__subtitle">Work in progress.</h2>
    </header>
  </section>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: '/scripts/trishape.js',
          defer: true
        },
        {
          src: '/scripts/triangle-tunnel.js',
          defer: true
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.hero {
  margin-bottom: 2rem;
}

.header {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 100;
  text-align: center;
  text-shadow: #000 0 0 16px;
  pointer-events: none;
}

.header__title {
  font-family: $family-monospace;
  font-size: 2rem;
  margin: 0;
}

.header__subtitle {
  font-size: 1.5rem;
}
</style>
