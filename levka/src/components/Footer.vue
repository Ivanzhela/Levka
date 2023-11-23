<template>
    <footer>
      <div class="footerInfo">
        <div class="logo">
          <img src="src/assets/img/logo9.png" alt="logo" />
        </div>
        <div>
          <h4>Връзки</h4>
          <ul>
            <li>
              <i style="font-size: 24px" class="fa">&#xf192;</i>
              Начало
            </li>
            <li>
              <i style="font-size: 24px" class="fa">&#xf192;</i>
              За нас
            </li>
            <li>
              <i style="font-size: 24px" class="fa">&#xf192;</i>
              Продукти
            </li>
            <li>
              <i style="font-size: 24px" class="fa">&#xf192;</i>
              Политика
            </li>
          </ul>
        </div>
        <div>
          <h4>Продукти</h4>
          <ul>
            <li>
              <i style="font-size: 24px" class="fa">&#xf192;</i>
              Стекове
            </li>
            <li>
              <i style="font-size: 24px" class="fa">&#xf192;</i>
              Дреболии
            </li>
            <li>
              <i style="font-size: 24px" class="fa">&#xf192;</i>
              Колбаси
            </li>
            <li>
              <i style="font-size: 24px" class="fa">&#xf192;</i>
              Други
            </li>
          </ul>
        </div>
        <div>
          <div>
            <h4>Контакти</h4>
            <ul>
              <li>
                <i style="font-size: 24px" class="fa">&#xf192;</i>
                +359 123 123 123
              </li>
              <li>
                <i style="font-size: 24px" class="fa">&#xf192;</i>
                +359 123 123 123
              </li>
              <li>
                <i style="font-size: 24px" class="fa">&#xf192;</i>
                levka@gmail.com
              </li>
              <li>
                <i style="font-size: 24px" class="fa">&#xf192;</i>
                1 Левка, с.Левка
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyR">
        <p>Copyright 2023 © All Right Reserved Design by Ivanzhela</p>
      </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    .footerInfo {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 100px 140px;
  background-color: #101010;
  color: #f4f4f4;
}

.footerInfo .logo img {
  width: 300px;
}
.footerInfo h4 {
  font-size: 28px;
  font-weight: 800;
  color: #d9a273;
}
.footerInfo ul {
  padding-left: 0;
}
.footerInfo li {
  list-style: none;
  cursor: pointer;
  margin-top: 18px;
  font-size: 18px;
}
.footerInfo li i {
  color: #bf0413;
  margin-right: 4px;
}

.copyR {
  background-color: #101010;
  text-align: center;
  padding: 0 120px;
  color: #f4f4f4;
}
.copyR p {
  border-top: 1px solid #d9a273;
  font-size: 16px;
  padding: 18px;
}

</style>