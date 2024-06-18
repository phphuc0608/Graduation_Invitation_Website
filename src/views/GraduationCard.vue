<template>
  <div id="background" class="d-flex justify-content-center align-items-center p-0 m-0">
    <div id="input_box" class="p-5 text-center d-flex justify-content-between align-items-center">
      <div id="content" class="d-flex flex-column justify-content-between">
        <div id="content_header">
          <img src="../assets/border_card.png" class="border_img">
          <img src="../assets/graduated.png" class="header_img">
          <img src="../assets/border_card.png" class="border_img">
        </div>
        <div id="greeting">
          <h6>THÂN MỜI BẠN ĐẾN THAM DỰ</h6>
          <h3>LỄ TỐT NGHIỆP</h3>
          <h6>CỦA MÌNH</h6>
        </div>
        <div id="content_center">
          <h3>HHH</h3>
        </div>
        <div id="content_footer">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup() {
    onMounted(() => {
      document.title = 'Graduation Card'
    })
    return {
    }
  }
}
</script>

<style scoped>
#background {
  background-color: #fefff8;
  padding: 20px;
  height: 100vh;
}
#input_box{
  background-image: url('../assets/bg_card.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 520px;
  height: 742px ;
}
.header_img{
  width: 80px;
  height: 80px;
}
.border_img{
  width: 150px;
  height: 150px;
}
</style>