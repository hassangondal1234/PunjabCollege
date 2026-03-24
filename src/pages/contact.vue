<template>
  <div class="contact">

    <!-- Hero Section -->
    <section class="hero">
      <div class="overlay"></div>
      <div class="hero-content">
        <h1>Contact Us</h1>
        <p>We would love to hear from you</p>
      </div>
    </section>

    <!-- Contact Info -->
    <section class="info">
      <div class="box">
        <h3>📍 Address</h3>
        <p>All Punjab Campuses</p>
      </div>

      <div class="box">
        <h3>📞 Phone</h3>
        <p>+92 300 1234567</p>
      </div>

      <div class="box">
        <h3>✉ Email</h3>
        <p>info@punjabcollege.edu.pk</p>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="form-section">
      <h2>Send a Message</h2>

      <form class="form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Phone Number" />
        <textarea placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>

  </div>
</template>

<script setup>
// No JS for now, form can be integrated with backend or EmailJS
</script>

<style scoped>

/* General */
.contact {
  font-family: 'Poppins', sans-serif;
  color: white;
}

/* HERO */
.hero {
  height: 60vh;
  background: url("https://scontent.flhe2-4.fna.fbcdn.net/v/t39.30808-6/473222080_1024020919742774_8475328420418101190_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=2a1932&_nc_ohc=7N2bdscTaZ4Q7kNvwFMqcNO&_nc_oc=AdpxralI1pA45t6M1wjYCuuT1QVxdx_sb2Hsd1gpymCdgkys2pZ0bgwNY6-Vn7_25eM&_nc_zt=23&_nc_ht=scontent.flhe2-4.fna&_nc_gid=Iu0S6gai6HjVZBk3hLotXg&_nc_ss=7a30f&oh=00_AfyFV0mOjSoE64f7mqfhL3EGS6ZFsRQpl5JZuzWkUAPm4w&oe=69C85562") no-repeat center/cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.hero-content h1 {
  font-size: 45px;
  margin-bottom: 10px;
}

.hero-content p {
  font-size: 18px;
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

/* FORM */
.form-section {
  padding: 60px 20px;
  background: #111;
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
  transition: 0.3s;
}

.form button:hover {
  background: #0072ff;
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  .info {
    flex-direction: column;
    gap: 15px;
  }
}
</style>