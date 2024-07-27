<template>
  <div id="background" class="d-flex justify-content-center align-items-center p-0 m-0">
    <div id="input_box" class="p-5 text-center d-flex justify-content-between align-items-center">
      <div id="content" class="d-flex flex-column justify-content-between">
        <div id="content_header">
          <img src="../assets/creeper_tree.png" class="creeper_tree">
          <img src="../assets/bow.png" class="bow">
          <img src="../assets/creeper_tree.png" class="creeper_tree">
        </div>
        <div id="greeting">
          <h3 class="mb-5">CHÀO MỪNG ĐẾN VỚI TRANG WEB</h3> 
          <h6 class="mb-3" style="line-height: 30px;">Trước khi nhập tên hãy bật tiếng hoặc đeo tai nghe để có trải nghiệm tốt nhất</h6>
        </div>
        <div id="content_center">
          <h5>
            Hãy nhập tên của bạn vào đây nhé<br> 
            <i class="fa-solid fa-heart" style="color: #fe0101;"></i> 
            <i class="fa-solid fa-heart mx-2" style="color: #fe0101;"></i>
            <i class="fa-solid fa-heart" style="color: #fe0101;"></i>
          </h5>
          <input type="text" class="form-control mb-4" v-model="userName" @focus="playMusic">
          <router-link class="button-input btn mt-3 px-5 py-2" @click="checkInput" to="/graduation-card"> 
            Gửi <i class="fa-solid fa-paper-plane"></i>
          </router-link>
        </div>
        <div id="content_footer">
        </div>
      </div>
    </div>
  </div>
  <audio id="background-music" preload="auto">
    <source src="../assets/music1.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import Swal from 'sweetalert2';
import { userStore } from '../stores/store';
import router from '../routers/router';

export default {
  setup() {
    const userName = ref('');
    const userStoreName = userStore();
    const audio = ref(null);

    const savedName = localStorage.getItem('userName');
    if (savedName) {
      userStoreName.setUserName(savedName);
    }

    const playMusic = () => {
      if (audio.value) {
        audio.value.play().catch(error => {
          console.log('Test:', error);
        });
      }
    }

    const checkInput = () => {
      if (userName.value === '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Vui lòng nhập tên của bạn!',
        });
        router.push('/');
      } else {
        localStorage.setItem('userName', userName.value);
        userStoreName.setUserName(userName.value);
      }
    }

  onMounted(() => {
    document.title = 'Welcome';
    audio.value = document.getElementById('background-music');
    if (audio.value) {
      audio.value.volume = 0.5; // Đặt âm lượng từ 0.0 đến 1.0
      audio.value.currentTime = 0; // Đặt âm thanh về đầu

      // Phát nhạc ngay khi trang được tải
      audio.value.play().catch(error => {
        console.error('Error playing music: ', error);
      });

      // Thêm sự kiện di chuột để phát nhạc
      document.addEventListener('mousemove', playMusic);

      // Thêm sự kiện nhấp vào input để phát nhạc
      const inputElement = document.querySelector('input[type="text"]');
      if (inputElement) {
        inputElement.addEventListener('focus', playMusic);
      }
    }
  });

    onUnmounted(() => {
      // Dọn dẹp các sự kiện khi component bị huỷ
      document.removeEventListener('mousemove', playMusic);
      const inputElement = document.querySelector('input[type="text"]');
      if (inputElement) {
        inputElement.removeEventListener('focus', playMusic);
      }
    });

    return {
      userName,
      checkInput
    }
  }
}
</script>

<style scoped>
#background {
  background-color: #eed7b1;
  padding: 20px;
  height: 100vh;
}
#input_box {
  background-image: url('../assets/bg.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 520px;
  height: 686px;
}
#input_box h3 {
  color: #434634;
}
#input_box input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #434634;
  background-color: transparent;
  margin-top: 20px;
}
#input_box .button-input {
  border: none;
  border-radius: 8px;
  background-color: #434634;
  color: white;
  transition: 0.25s;
}
#input_box .button-input:hover {
  background-color: #b5bd91;
  color: #434634;
}
#content {
  width: 100%;
  height: 100%;
}
#content_header .bow {
  width: 100px;
  height: auto;
}
#content_header .creeper_tree {
  width: 150px;
  height: auto;
}

/* Responsive */
@media (max-width: 786px) {
  #input_box {
    width: 100%;
    height: auto; /* Để vừa với nội dung trên màn hình nhỏ */
    background-image: none;
  }
  .creeper_tree, .bow {
    width: 50px;
  }
  #content_footer {
    text-align: center;
  }

  .info_content {
    font-size: 10pt; /* Giảm kích thước chữ cho màn hình nhỏ hơn */
  }
}
@media (max-width: 480px) {
  #input_box {
    padding: 5vw;
  }
  #content_header .creeper_tree, #content_header .bow {
    width: 20vw;
    margin-bottom: 20px;
  }
  .info_content {
    font-size: 4vw;
  }
} 
</style>
