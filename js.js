  //  var img = document.querySelector('.img');

  //  img.onclick = function(e) {

  //     var x = e.offsetX    
  //     var y = e.offsetY
  //    console.log(`${x} + ${y}`);
  //   }
 
  const z = document.querySelector('.zak');
  const arr = document.querySelectorAll('area');
  arr.forEach((item) =>{
    item.addEventListener('click' , ()=>{
      alert(item.getAttribute('title'))
    })
  })
 


