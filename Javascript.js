var btn = document.getElementById('buttonMenu')

btn.addEventListener('click', function(){
  if(this.classList.contains('active')){
    const navigation = document.querySelector('.navigation')
    navigation.classList.toggle('active')
    this.classList.remove('active')
    this.classList.add('not-active')
  }else{
    const navigation = document.querySelector('.navigation')
    navigation.classList.toggle('active')
    this.classList.add('active')
    this.classList.remove('not-active')
  }
});

(function ($) {
  $(function () {

    

  });
})(jQuery);