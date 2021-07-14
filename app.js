$(document).ready(function(){
    //Top Banner
    $('#banner-area .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:true,
        nav:false,
        responsive:{
            0:{
                items:1
            }
        }
    })

    //product carousel
    $('#top-sale .owl-carousel').owlCarousel({
        loop:true,
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            800:{
                items:5
            }
        }
    })


    //Filter Products
    var $grid = $('.grid').isotope({
        itemSelector:".grid-item",
        layoutMode:"fitRows"
    });

    $('.button-group').on('click','button',function(){
        var filterValue = $(this).attr('data-filter');
        
        $grid.isotope({filter:filterValue});
    })

    //New phones
     
     $('#new-phones .owl-carousel').owlCarousel({
        loop:true,
        dots:true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            800:{
                items:5
            }
        }
    })

    //blog
     //New phones
     
     $('#blog .owl-carousel').owlCarousel({
        loop:true,
        dots:true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            }
        }
    })

})