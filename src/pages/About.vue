<template>
  <div class="about">

    <!-- Hero Section -->
    <section class="hero">
      <div class="overlay"></div>
      <div class="hero-content">
        <h1>About Our College</h1>
        <p>Empowering students with knowledge, skills, and success</p>
      </div>
    </section>

    <!-- About Info -->
    <section class="about-info">
      <div class="text">
        <h2>Who We Are</h2>
        <p>
          Our college is one of the leading institutions providing quality 
          education with modern teaching methods. We focus on building strong 
          foundations for students to achieve their career goals.
        </p>
        <p>
          With experienced faculty and advanced facilities, we ensure every 
          student gets the best learning experience.
        </p>
      </div>

      <div class="image">
        <img src="https://scontent.flhe2-2.fna.fbcdn.net/v/t39.30808-6/647132352_1368316961979833_400037271414434867_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=07cZNhZTUPUQ7kNvwE3yqPn&_nc_oc=AdrUI3HlNKXLK0dFBKu280wMjcXMV4_w-baQsjP2FJ5a2b991h-QueVVDgdXeOd9jEU&_nc_zt=23&_nc_ht=scontent.flhe2-2.fna&_nc_gid=oxhkqRtmazKTasLo27cbyA&_nc_ss=7a30f&oh=00_AfyZ4yCxmS_BL_rvlF7Q87GJA_OJS65A_nGjhv6Gf65gVw&oe=69C83FA0" />
      </div>
    </section>

    <!-- Mission Vision -->
    <section class="mission">
      <div class="card">
        <h3>Our Mission</h3>
        <p>To provide high-quality education and shape future leaders.</p>
      </div>

      <div class="card">
        <h3>Our Vision</h3>
        <p>To become a globally recognized institution of excellence.</p>
      </div>
    </section>

    <!-- Achievements -->
    <section class="stats">
      <div class="stat" v-for="(item, index) in stats" :key="index">
        <h1>{{ item.number }}</h1>
        <p>{{ item.label }}</p>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team">
      <h2>Our Faculty</h2>

      <div class="team-box">
        <div class="member" v-for="(member, index) in team" :key="index">
          <img :src="member.img" />
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const stats = [
  { number: "25+", label: "Years Experience" },
  { number: "10K+", label: "Students" },
  { number: "500+", label: "Teachers" }
]

const team = [
  { name: "faisal shahzad", role: "Professor", img: "https://scontent.flhe2-4.fna.fbcdn.net/v/t39.30808-6/585565171_1280389270772603_7300932479361934338_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=J6BMqzpEhEgQ7kNvwGZ_prC&_nc_oc=AdrOHkGYF3MerfX2_G5ICud4F7Of4AE6OdPJC92pGNHLOcA5iW7qc_0kAU8nzTwafiQ&_nc_zt=23&_nc_ht=scontent.flhe2-4.fna&_nc_gid=RocccUA7JHsFnCmM26k1sw&_nc_ss=7a30f&oh=00_Afz2gE39caVSXCuQc1gsCeJMYpC1NPyNSWvR5w_t77VJXA&oe=69C85D69" },
  { name: "Sadaf sultana", role: "professor", img: "https://scontent.flhe2-2.fna.fbcdn.net/v/t39.30808-6/583722362_1280389090772621_6101917373858623982_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=NAuM87Fq0-8Q7kNvwHQBL7m&_nc_oc=Adp-66cKH74tQRopZ9IqsWEZCAYC7z-mZUdtM5OOasTKglqRtGmkcds1qaD6YPUWWwc&_nc_zt=23&_nc_ht=scontent.flhe2-2.fna&_nc_gid=5UQSCC5ytmoJfpgy_OlBBg&_nc_ss=7a30f&oh=00_Afyw_K9CP8DGbTbZdRRqtM2NiMZi2ieGkddNYrVwO12lAg&oe=69C82C7E" },
  { name: "muhammad zia farooqi", role: "lecturer", img: "https://scontent.flhe2-4.fna.fbcdn.net/v/t39.30808-6/579994777_1276585707819626_8649018459771239633_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Djv147SRvQUQ7kNvwFixZjc&_nc_oc=AdqqnR7m1Q7KYoIgihvGbEwN0CfiyaJ-SpFum-7UfFZys7zbDkjX5jU_ljsj2i_R4Xk&_nc_zt=23&_nc_ht=scontent.flhe2-4.fna&_nc_gid=f4T-1S_A7355t2Pn_WG5Bg&_nc_ss=7a30f&oh=00_AfzYcHZR5tUbIy0dbm8byeqYwCXIAAfGNQFDcpMp4UzrUw&oe=69C85F45" }
]
</script>

<style scoped>

/* General */
.about {
  font-family: 'Poppins', sans-serif;
  color: rgb(255, 255, 255);
}

/* HERO */
.hero {
  height: 90vh;
  background: url("https://scontent.flhe2-3.fna.fbcdn.net/v/t39.30808-6/586841638_1287865140025016_232878794015414159_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ciwy4qbBBz8Q7kNvwEtcs4m&_nc_oc=Adq3EcKIPRiMqY0wbi8VnJCfIARWIstwgpUNyUsqnCGxYsTSBnmPyOlLg2TtDn2pbIw&_nc_zt=23&_nc_ht=scontent.flhe2-3.fna&_nc_gid=_fGlFdP4uSaqPVo4Jz2OOQ&_nc_ss=7a30f&oh=00_Afx66yQhb5rc8xHz-75ucKYaEmhaghSqL4f55-_o2Xjr4g&oe=69C83C88") no-repeat center/cover;
  position: relative;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
}

.hero-content {
  position: relative;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.hero-content h1 {
  font-size: 45px;
}

.hero-content p {
  margin-top: 10px;
  font-size: 20px;
}

/* ABOUT INFO */
.about-info {
  display: flex;
  flex-wrap: wrap;
  padding: 60px 20px;
  background: #0f2027;
  align-items: center;
}

.text {
  flex: 1;
  padding: 20px;
}

.image {
  flex: 1;
  padding: 20px;
}

.image img {
  width: 100%;
  border-radius: 10px;
}

/* MISSION */
.mission {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 50px;
  background: #111;
}

.card {
  background: #1e1e1e;
  padding: 30px;
  border-radius: 12px;
  width: 300px;
  text-align: center;
}

/* STATS */
.stats {
  display: flex;
  justify-content: space-around;
  padding: 50px;
  background: #203a43;
}

.stat h1 {
  color: #00c6ff;
}

/* TEAM */
.team {
  padding: 60px 20px;
  background: #0f2027;
  text-align: center;
}

.team-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  gap: 20px;
  margin-top: 30px;
}

.member {
  background: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  transition: 0.3s;
}

.member:hover {
  transform: translateY(-10px);
}

.member img {
  width: 100%;
  border-radius: 10px;
}

/* Responsive */
@media (max-width: 768px) {
  .about-info {
    flex-direction: column;
  }

  .mission {
    flex-direction: column;
    align-items: center;
  }

  .stats {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
}

</style>