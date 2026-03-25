<template>
  <div class="home">

    <!-- Hero Section -->
    <section class="hero">
      <div class="content">
        <h1 class="title">Welcome to Our College</h1>
        <p class="subtitle">
          Build Your Future With Quality Education & Modern Learning
        </p>
        <button class="btn">Explore Now</button>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Why Choose Us</h2>

      <div class="feature-box">
        <div class="card" v-for="(item, index) in features" :key="index">
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="stat" v-for="(stat, index) in stats" :key="index">
        <h1>{{ stat.number }}</h1>
        <p>{{ stat.label }}</p>
      </div>
    </section>

    <!-- Call To Action -->
    <section class="cta">
      <h2>Start Your Journey Today</h2>
      <p>Admissions are open. Apply now and secure your future.</p>
      <button>Apply Now</button>
    </section>

  </div>
</template>

<script setup>
const features = [
  { title: "Qualified Teachers", desc: "Highly experienced and professional faculty." },
  { title: "Modern Labs", desc: "Latest equipment and practical learning." },
  { title: "Scholarships", desc: "Financial support for talented students." },
  { title: "Career Guidance", desc: "We help you choose the right path." }
]

const stats = [
  { number: "10K+", label: "Students" },
  { number: "500+", label: "Teachers" },
  { number: "50+", label: "Programs" },
  { number: "100%", label: "Success Rate" }
]
</script>

<style scoped>

/* General */
.home {
  font-family: 'Poppins', sans-serif;
  color: white;
}

/* HERO */
.hero {
  height: 100vh;
  background: url("../assets/punjab-img.jpg") no-repeat center/cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* https://scontent.flhe2-4.fna.fbcdn.net/v/t39.30808-6/473222080_1024020919742774_8475328420418101190_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=2a1932&_nc_ohc=hbQLlMjmx5AQ7kNvwGegLZs&_nc_oc=AdlXT9Hzgdu1Cxuw8yRTKt4qJ4kQi8QP5l-N_F_47Br-xRFoaIOkrEKKo4qTV6lba0I&_nc_zt=23&_nc_ht=scontent.flhe2-4.fna&_nc_gid=skK-pjXyo4RTEe7iWG9WKA&_nc_ss=8&oh=00_Afw324RJAM7dnMn5fkyjoJuZeb2kEAmvfcwCUx_vQTkYMw&oe=69C06C62c */
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
}

/* Content */
.content {
  position: relative;
  text-align: center;
  animation: fadeUp 1.5s ease;
}

.title {
  font-size: 60px;
  margin-bottom: 15px;
}

.subtitle {
  font-size: 22px;
  margin-bottom: 20px;
}

/* Button */
.btn {
  padding: 14px 30px;
  background: linear-gradient(45deg, #00c6ff, #0072ff);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

/* FEATURES */
.features {
  background: #0f2027;
  padding: 60px 20px;
  text-align: center;
}

.feature-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
  gap: 20px;
  margin-top: 30px;
}

.card {
  background: #1e1e1e;
  padding: 25px;
  border-radius: 12px;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-10px);
  background: #2a2a2a;
}

/* STATS */
.stats {
  display: flex;
  justify-content: space-around;
  padding: 50px;
  background: #111;
  text-align: center;
}

.stat h1 {
  font-size: 40px;
  color: #00c6ff;
}

/* CTA */
.cta {
  background: linear-gradient(135deg, #203a43, #2c5364);
  padding: 60px 20px;
  text-align: center;
}

.cta button {
  margin-top: 20px;
  padding: 12px 25px;
  border: none;
  background: #00c6ff;
  color: white;
  cursor: pointer;
  border-radius: 8px;
}

/* Animation */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .title { font-size: 35px; }
  .stats { flex-direction: column; gap: 20px; }
}

</style>