<template>
  <section class="videoAd">
    <div class="video">
      <video id="my-video" autoplay muted onended="restartVideo()">

        Вашият браузър не поддържа видео тага.
      </video>
    </div>
    <div class="content">
      <p>Ние избрахме качество, Вие избирате количество.</p>
      <router-link to="/catalog" class="catalogBtn">Продукти</router-link>
    </div>
  </section>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {};
</script>

<style lang="css" scoped>
.videoAd {
  position: relative;
  height: 320px;
  text-align: center;
  color: #f4f4f4;
}

.videoAd .video {
  width: 100%;
  height: 100%;
}

.videoAd .video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.videoAd .content {
  font-size: 42px;
  font-weight: 800;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.videoAd::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.393);
  z-index: -1;
}

.videoAd .content button {
  margin-top: 10px;
}
</style>
