<template>
  <div class="app-header">Образец приложения Todo - Vue3</div>
</template>

<style lang="scss" scoped>
.app-header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 30px;
  height: $height-header;
  box-shadow: $shadow-1;
  background: white;
  color: $color-text;
  z-index: 1;

  @include small {
    font-size: 20px;
  }
}
</style>
