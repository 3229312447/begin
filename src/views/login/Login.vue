<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 左侧插图区域 -->
      <div class="login-left">
        <img src="@/assets/login-illustration.png" alt="login illustration" />
      </div>

      <!-- 右侧登录表单区域 -->
      <div class="login-right">
        <div class="login-form glass-effect">
          <h1 class="title">Hello</h1>
          <p class="subtitle">欢迎来到哇谷甄选</p>

          <div class="form-item">
            <input type="text" placeholder="admin" />
          </div>

          <div class="form-item">
            <input type="password" placeholder="••••••••" />
          </div>

          <button class="login-button">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
</script>

<style scoped lang="scss">
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/login-bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(30, 60, 114, 0.6);
  }
}

.login-box {
  position: relative;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  min-height: 600px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.login-left {
  flex: 1;
  background: #f5f7ff;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-left img {
  max-width: 100%;
  height: auto;
}

.login-right {
  flex: 1;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form {
  width: 100%;
  max-width: 400px;

  .form-item {
    margin-bottom: 20px;
    width: 100%;

    input {
      width: 100%;
      padding: 12px 15px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      font-size: 16px;
      color: white;
      outline: none;
      transition: all 0.3s;
      box-sizing: border-box;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }

      &:focus {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.5);
      }
    }
  }
}

.glass-effect {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.title {
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 36px;
  margin-bottom: 10px;
}

.subtitle {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
}

.login-button {
  width: 100%;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
  box-sizing: border-box;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
}

/* 响应式布局 */
@media (max-width: 768px) {
  .login-box {
    flex-direction: column;
  }

  .login-left {
    padding: 20px;
  }

  .login-right {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .login-left {
    display: none;
  }
}
</style>
