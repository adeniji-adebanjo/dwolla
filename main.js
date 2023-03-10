{/* <script> */}
  // Add an event listener to each toggle button
  const toggleButtons = document.querySelectorAll('.card-header button');
  toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Toggle the plus/minus icon
      button.querySelector('i').classList.toggle('fa-plus');
      button.querySelector('i').classList.toggle('fa-minus');
      
      // Show/hide the correct image based on the toggle index
      const images = document.querySelectorAll('.accordion-image img');
      images.forEach((image, i) => {
        if (i === index) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    });
  });
{/* </script> */}

{/* <script> */}
  // Toggle plus and minus icons
// $(document).on('click', '.card-header button', function() {
//   $(this).find('.fas').toggleClass('fa-plus fa-minus');
//   $(this).closest('.card').siblings().find('.fas').removeClass('fa-minus').addClass('fa-plus');
// });

// Switch images
// $(document).on('show.bs.collapse', '.collapse', function () {
//   var targetId = $(this).attr('id');
//   if (targetId === 'collapse1') {
//     $('#image1').show();
//     $('#image2, #image3').hide();
//   } else if (targetId === 'collapse2') {
//     $('#image2').show();
//     $('#image1, #image3').hide();
//   } else if (targetId === 'collapse3') {
//     $('#image3').show();
//     $('#image1, #image2').hide();
//   }
// });


$('.carousel-container').owlCarousel({
  // Owl Carousel options
});

$('.carousel-image').click(function() {
  $(this).find('.image-text').toggle();
});


// <script>
      //   $(document).ready(function() {
      //     // Add plus-minus toggle functionality
      //     $('#accordion').on('shown.bs.collapse', function () {
      //       $(this).find("i.fas.fa-plus").removeClass("fas fa-plus").addClass("fas fa-minus");
      //     });
      //     $('#accordion').on('hidden.bs.collapse', function () {
      //       $(this).find("i.fas.fa-minus").removeClass("fas fa-minus").addClass("fas fa-plus");
      //     });
      //   });
      // </script>
{/* </script> */}