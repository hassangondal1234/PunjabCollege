<template>
  <header class="navbar">
    <div class="logo">Punjab College</div>

    <nav>
      <ul class="nav-links">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/admission">Admission</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// No JS needed for now
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  width: 94.92%;
  padding: 15px 40px;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: #00c6ff;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 25px;
}

.nav-links a {
  text-decoration: none;
  color: white;
  transition: 0.3s;
}

.nav-links a:hover {
  color: #00c6ff;
}
</style>