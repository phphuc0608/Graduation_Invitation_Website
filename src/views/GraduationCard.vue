<template>
  <div id="background" class="d-flex justify-content-center align-items-center p-0 m-0">
    <div id="input_box" class="p-5 text-center d-flex justify-content-between align-items-center">
      <div id="content" class="d-flex flex-column justify-content-between">
        <div id="content_header" class="p-0 m-0">
          <img src="../assets/border_card.png" class="border_img">
          <img src="../assets/graduated.png" class="header_img">
          <img src="../assets/border_card.png" class="border_img">
        </div>
        <div id="greeting">
          <h6 class="my-4">THÂN MỜI BẠN ĐẾN THAM DỰ</h6>
          <h3 class="my-4" style="font-weight: 800;">LỄ TỐT NGHIỆP</h3>
          <h5 style="font-weight: 500;">CỦA QUANG PHÚC</h5>
        </div>
        <div id="content_center" class="mt-2">
          <img src="../assets/uni_logo1.png" class="logo_img">
        </div>
        <div id="content_footer">
          <h2 class="my-4">{{ userName }}</h2>
          <div id="info_box" class="d-flex justify-content-between mb-3"> 
            <div class="info_content col-md-6">
              <div>Thứ bảy</div>
              <div>09.08.2024</div>
              <div>13:30 AM</div>
            </div>
            <div class="info_content col-md-6">
              <div>Hội trường C</div>
              <div>Trường Đại học Hàng hải Việt Nam</div>
            </div>
          </div>
          <h6 style="font-weight: 600;">THÔNG TIN LIÊN HỆ 0762492268</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const userName = ref(localStorage.getItem('userName'))

    const createFallingLeaves = () => {
      const container = document.getElementById('background')
      const leafCount = 40 // số lượng lá phong

      for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div')
        leaf.className = 'maple-leaf'
        leaf.style.left = `${Math.random() * 100}vw`
        leaf.style.top = `-${Math.random() * 128}vh` // Khởi tạo từ phía trên đỉnh trang
        leaf.style.animationDuration = `${3 + Math.random() * 3}s`
        leaf.style.animationDelay = `${Math.random() * 5}s`
        container.appendChild(leaf)

        // Xóa lá sau khi hoàn thành animation
        leaf.addEventListener('animationend', () => {
          leaf.remove()
        })
      }
    }



    onMounted(() => {
      document.title = 'Graduation Card'
      createFallingLeaves()
    })

    return {
      userName
    }
  }
}

</script>

<style>
/* Phần CSS hiện có */
#background {
  background-color: #fefff8;
  padding: 20px;
  height: 100vh;
  overflow: hidden; /* Đảm bảo không hiển thị thanh cuộn khi lá rơi */
  position: relative;
}
/* Phần CSS của các ảnh và thông tin khác */
#input_box{
  background-image: url('../assets/bg_card.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 478px;
  height: 700px;
  z-index: 10; /* Đảm bảo input_box có z-index lớn */
  position: relative; /* Thêm position để z-index hoạt động */
}
.header_img{
  width: 60px;
  height: 60px;
}
.border_img{
  width: 100px;
  height: 100px;
}
.logo_img{
  width: 150px;
  height: 150px;
} 
.info_content{
  text-transform: uppercase;
  font-size: 11pt;
  /* text-align: right; */
}
.maple-leaf {
  position: absolute;
  width: 30px;
  height: 30px;
  background-image: url('../assets/mapple_leaf.png'); /* Đảm bảo đường dẫn đúng */
  background-size: cover;
  animation: fall linear infinite;
  pointer-events: none;
  z-index: 5; /* Đảm bảo lá phong có z-index nhỏ */
}

@keyframes fall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}
</style>
