

 $(function(){

    $('.block').on('click', function(){

        $('.hide').slideToggle(300, function(){

            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }

        });

    });

     $('.block_2').on('click', function(){

         $('.hide_2').slideToggle(300, function(){

             if($(this).css('display') === 'none'){
                 $(this).removeAttr('style');
             }
         });
     });
     $('.block_3').on('click', function(){

         $('.hide_3').slideToggle(300, function(){

             if($(this).css('display') === 'none'){
                 $(this).removeAttr('style');
             }
         });
     });
     $('.block_4').on('click', function(){

         $('.hide_4').slideToggle(300, function(){

             if($(this).css('display') === 'none'){
                 $(this).removeAttr('style');
             }
         });
     });
     $('.block_5').on('click', function(){

         $('.hide_5').slideToggle(300, function(){

             if($(this).css('display') === 'none'){
                 $(this).removeAttr('style');
             }
         });
     });

});
