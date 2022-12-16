<template>
   <!-- внешний вид компонента,
    в template должен быть хотя бы один тег-->
  <posts-menu :menu-links="links"/>
  <!-- <PostsMenu> -->

  <router-view/>

  <!-- <RouterView></RouterView> -->
  <!-- <RouterView/> -->
  <!-- <router-view/> -->

</template>

<script>
// 1. компонент необходимо импортировать
// import PostsMenu from "./components/PostsMenu"
import PostsMenu from "@/components/PostsMenu"
// @ - псевдоним (алиас) для директории src

// все необходимы импорты, например импорт других компонентов,
// которые будут использоваться в текущем

export default { /* объект компонента */
  // 2. регистрация импортированного компонента в текущем
  // 3. использование в template
  components: {PostsMenu  /* 'app-menu': PostsMenu */},
  // ключи в components - названия, которые используются в html
  // значения в components - объект компонента (из импорта)
  data(){
    return {
      links: [
        {title: "Главная", href: "/"},
        {title: "Все записи", href: "/posts"}
      ]
    }
  },
  errorCaptured(err, compWithErr, errInfo) {
    console.log(err, compWithErr, errInfo);
    return false;
  }
}
</script>

<style>
/* если у компонента нет стилей, то тег style не нужен */
/* стили будут доступны всем компонентам */
/* с атрибутом scoped стили будут доступны только текущему компоненту */

/* для использования синтаксиса препроцессора необходимо добавить
атрибут lang с названием препроцессора, например <style lang="sass"> */
</style>
