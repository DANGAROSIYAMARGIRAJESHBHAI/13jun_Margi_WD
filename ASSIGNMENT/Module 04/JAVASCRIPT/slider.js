let slide = document.querySelectorAll('.box');
        var counter = 0;
       
        // console.log(slide)
        let imageslider = () => {
            if(counter > 2){
                counter = 2
            }
            else if(counter < -2)
            {
                counter = -2;
            }
            slide.forEach (
                (slide) => {
                    slide.style.transform = `translateX(${counter* 120}%)`
                }
            )
        }

        function goback() {
                    counter--;
                    imageslider();       
        }
        function forword(){
            counter ++;
            imageslider();
        }