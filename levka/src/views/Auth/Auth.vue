<template>
  <section class="auth">
    <h1>ВЛЕЗ</h1>
    <form action="">
      <input type="text" name="" id="" placeholder="име" />
      <input type="password" name="" id="" placeholder="парола" />
      <div class="terms">
        <p>Съгласявате ли се с общите условия на сайта</p>
        <input type="checkbox" name="" id="" />
      </div>
      <div class="buttons">
        <button class="catalogBtn">ВЛЕЗ</button>
        <button class="catalogBtn">РЕГИСТРИРАЙ СЕ</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.auth {
  background-color: #101010;
  color: #f4f4f4;
  padding: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.auth h1 {
  font-size: 82px;
  letter-spacing: 6px;
  /* font-weight: 900; */
}
.auth form {
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.auth form input {
  width: 500px;
  border: none;
  border-bottom: 1px solid #d9a273;
  background-color: #101010;
  margin-top: 20px;
  color: #f4f4f4;
  padding: 10px;
}

.auth form input:last-child {
  width: auto;
}
.auth form input::placeholder {
  color: #f4f4f47e;
  font-size: 20px;
}

.auth form input:focus {
  outline: none;
}

.auth .terms {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 40px 0;
}

.auth .terms input {
  margin: 0;
}

.auth .buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
}
.auth button {
  text-align: center;
  margin-top: 20px;
  width: 200px;
  align-self: center;
}

.auth .buttons button:last-child {
    background-color: #400101;
}
</style>
