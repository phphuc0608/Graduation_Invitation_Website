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
          <h1>CHÀO MỪNG NGƯỜI DÙNG ẨN DANH</h1>  
        </div>
        <div id="content_center">
          <h4>
            Hãy nhập tên của bạn vào đây nhé 
            <i class="fa-solid fa-heart" style="color: #fe0101;"></i> 
            <i class="fa-solid fa-heart mx-2" style="color: #fe0101;"></i>
            <i class="fa-solid fa-heart" style="color: #fe0101;"></i>
          </h4>
          <input type="text" class="form-control mb-4">
          <button class="button-input btn mt-3 px-5 py-2">Gửi</button>
        </div>
        <div id="content_footer">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue';

export default {
  setup(){
    onMounted(() => {
      document.title = 'Welcome';
    });
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
  background-image: url('../assets/bg.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 520px;
  height: 686px;
}
#input_box h3{
  color: #434634;
}
#input_box input{
  width: 100%;
  border: none;
  border-bottom: 1px solid #434634;
  background-color: transparent;
  margin-top: 20px;
}
#input_box button{
  border: none;
  border-radius: 8px;
  background-color: #434634;
  color: white;
  transition: 0.25s;
}
#input_box button:hover{
  background-color: #b5bd91;
  color: #434634;
}
#content{
  width: 100%;
  height: 100%;
}
#content_header .bow{
  width: 100px;
  height: auto;
}
#content_header .creeper_tree{
  width: 150px;
  height: auto;
}
</style>