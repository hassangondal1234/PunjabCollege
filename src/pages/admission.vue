<template>
  <div class="admission">

    <!-- Hero Section -->
    <section class="hero">
      <div class="overlay"></div>
      <div class="hero-content">
        <h1>Admissions Open</h1>
        <p>Start your journey with us and build a bright future</p>
      </div>
    </section>

    <!-- Admission Info -->
    <section class="info">
      <div class="box">
        <h3>📅 Last Date</h3>
        <p>30 September</p>
      </div>

      <div class="box">
        <h3>🎓 Programs</h3>
        <p>Intermediate & Bachelor</p>
      </div>

      <div class="box">
        <h3>📍 Campus</h3>
        <p>All Punjab Campuses</p>
      </div>
    </section>

    <!-- Programs -->
    <section class="programs">
      <h2>Available Programs</h2>

      <div class="program-box">
        <div class="card" v-for="(item, index) in programs" :key="index">
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Admission Form -->
    <section class="form-section">
      <h2>Apply Now</h2>

      <form class="form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Phone Number" />

        <select>
          <option>Select Program</option>
          <option>FSc Pre-Medical</option>
          <option>FSc Pre-Engineering</option>
          <option>ICS</option>
          <option>I.Com</option>
          <option>FA</option>
          <option>B.Com</option>
          <option>BSc</option>
        </select>

        <textarea placeholder="Your Message"></textarea>

        <button type="submit">Submit Application</button>
      </form>
    </section>

  </div>
</template>

<script setup>
const programs = [
  { title: "FSc Pre-Medical", desc: "Best for medical students." },
  { title: "FSc Pre-Engineering", desc: "For future engineers." },
  { title: "ICS", desc: "Computer science and IT." },
  { title: "I.Com", desc: "Business and commerce." },
  { title: "FA", desc: "Arts and humanities." },
  { title: "B.Com / BSc", desc: "Bachelor programs." }
]
</script>

<style scoped>

/* General */
.admission {
  font-family: 'Poppins', sans-serif;
  color: white;
}

/* HERO */
.hero {
  height: 60vh;
 
  background: url("https://scontent.flhe2-2.fna.fbcdn.net/v/t39.30808-6/647132352_1368316961979833_400037271414434867_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=07cZNhZTUPUQ7kNvwE3yqPn&_nc_oc=AdrUI3HlNKXLK0dFBKu280wMjcXMV4_w-baQsjP2FJ5a2b991h-QueVVDgdXeOd9jEU&_nc_zt=23&_nc_ht=scontent.flhe2-2.fna&_nc_gid=oxhkqRtmazKTasLo27cbyA&_nc_ss=7a30f&oh=00_AfyZ4yCxmS_BL_rvlF7Q87GJA_OJS65A_nGjhv6Gf65gVw&oe=69C83FA0") no-repeat center/cover;
  position: small;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.582);
}

.hero-content {
  position: relative;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

/* INFO BOX */
.info {
  display: flex;
  justify-content: space-around;
  padding: 40px;
  background: #0f2027;
}

.box {
  background: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

/* PROGRAMS */
.programs {
  padding: 60px 20px;
  background: #111;
  text-align: center;
}

.program-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
  gap: 20px;
  margin-top: 30px;
}

.card {
  background: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-10px);
}

/* FORM */
.form-section {
  padding: 60px 20px;
  background: #203a43;
  text-align: center;
}

.form {
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form input,
.form select,
.form textarea {
  padding: 12px;
  border: none;
  border-radius: 8px;
}

.form button {
  padding: 12px;
  border: none;
  background: #00c6ff;
  color: white;
  cursor: pointer;
  border-radius: 8px;
}

/* Responsive */
@media (max-width: 768px) {
  .info {
    flex-direction: column;
    gap: 15px;
  }
}

</style>