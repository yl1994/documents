<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function(){
    // require window 
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
      
    }
     
    new Valine({
      el: '#vcomments' ,
      appId: 'ebRli5uu4ivXO8z8kIBnBYIk-gzGzoHsz',
      appKey: '53GagqQlwNEtNQGa2wrfdmvp',
      notify:false, 
      verify:false, 
      avatar:'monsterid', 
      placeholder: '欢迎给我留言，我们一起进步' 
    });
  },
}
</script>