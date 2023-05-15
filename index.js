document.querySelector(".search-bar button").addEventListener("click",function(){
    document.querySelector(".search-bar input").classList.toggle("show")
    if(document.querySelector(".search-bar input").classList[0] == "show"){
      document.querySelector(".search-bar img").setAttribute('src', "media/cross.png")
    }
    else{
      document.querySelector(".search-bar img").setAttribute('src', "media/lens.png")
    }
  })
  