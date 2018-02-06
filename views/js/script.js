var inputchoice = document.getElementById('inputchoice')

var like = document.getElementById('like')
like.addEventListener("click", function(){
  inputchoice.value = "like"
  document.getElementById("myForm").submit();
})

var dislike = document.getElementById('dislike')
dislike.addEventListener("click", function(){
  inputchoice.value = "dislike"
  document.getElementById("myForm").submit();
})
