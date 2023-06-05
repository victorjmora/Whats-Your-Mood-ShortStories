$(".book-bg").click(function () {
    $(this).addClass("active");
  });
  
  $("#back svg").click(function () {
    event.stopPropagation();
    $(".book-bg").removeClass("active");
  });

// let activeBook = document.getElementsByClassName("book-bg")[0];

//   document.getElementsByClassName("book-bg")[0].on('click', function() {
//     activeBook.classList.add("active");
//   });
  
//   document.querySelectorAll("#back svg").on('click', function() {
//     event.stopPropagation();
//     document.getElementByClassName("book-bg").classList.remove("active");
//   });