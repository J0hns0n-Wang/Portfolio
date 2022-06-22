<template>
<div class="home">
  <section id="banner">
    <div class="banner-text">
      <h1 class="name">{{ name }}</h1>
      <p class="description">{{ description }}</p>
      <div class="banner-btn">
        <a href="#"><span></span><b>Find out</b></a>
        <a href="#"><span></span><b>Read More</b></a>
      </div>
    </div>
  </section>
  <!-- <section class="about">
      <div class="about-container">
          <h1 class="about-header">Hello!</h1>
          <div class="about-content">
              <div class="about-text">
                  snpdnvnsdvnpdnvsndvpnsdnvsdnvdsnvsdvnspdvnsdvndsvnsdv
              </div>
          </div>
      </div>
  </section> -->
</div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "home",
  mounted() {
    gsap
      .timeline({ defaults: { duration: 1 } })
      .from(".name", { x: -60, opacity: 0, ease: "power2.in" })
      .from(".description", { x: 60, opacity: 0, ease: "power2.in" })
      .from(".banner-btn", { opacity: 0, ease: "power3.out" });
  },
  data() {
    return {
      name: "Johnson Wang",
      description: "High School Fullstack Web Developer",
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* font-size: 62.5%; */
  /* background-color: #009688; */
}
#banner {
  /* display: flex;
    flex-direction: column;
    align-items: center; */
  background: linear-gradient(rgba(0, 0, 0, 0.5), #009688),
    url("https://res.cloudinary.com/lupusawareness/image/upload/v1655390846/personal/cover_page_for_portfolio_yma0lv.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.banner-text {
  text-align: center;
  color: white;
  padding-top: 250px;
}

.banner-text h1 {
  font-size: 130px;
  font-family: "Kaushan Script";
}

.banner-text p {
  font-size: 20px;
  font-style: italic;
}

.banner-btn {
  margin: 76px auto;
}

.banner-btn a {
  width: 150px;
  text-decoration: none;
  display: inline-block;
  margin: 0 10px;
  padding: 12px 0;
  color: #fff;
  border: 0.5px solid #fff;
  position: relative;
  z-index: 1;
  transition: color 0.5s;
}

.banner-btn a span {
  width: 0%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  z-index: -1;
  transition: 0.5s;
}

.banner-btn a:hover span {
  width: 100%;
}

.banner-btn a:hover {
  color: #000;
}

.description {
  padding-top: 1rem;
}
</style>