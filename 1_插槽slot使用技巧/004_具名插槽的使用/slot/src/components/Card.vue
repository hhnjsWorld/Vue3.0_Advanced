<template>
<!-- 一般放在默认的default里面 从app传来的  name="default"-->
<slot name="default" />
  <div>
    <header><slot name="header"/></header>
    <main><slot name="main"/></main>
    <footer><slot name="footer"/></footer>
  
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
div{
border:1px solid #ddd;
header,main,footer{
  padding:10px;
}
main{
  border: 1px solid #ddd;
} 
}
</style>
