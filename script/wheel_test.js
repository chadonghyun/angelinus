let header_area = document.querySelector('header');
let header_h = document.querySelector('header').offsetTop;
let article = document.querySelectorAll('article');
        // let sh_0 = article[0].offsetTop;
        let sh_1 = article[1].offsetTop;
        let sh_2 = article[2].offsetTop;
        let sh_3 = article[3].offsetTop;
        let sh_4 = article[4].offsetTop;
        let footer = document.querySelector('footer');
        let footerH = footer.offsetTop;

        console.log(footer.offsetTop)

        let wheel_control_btn = document.querySelectorAll('.main_wheel_control > a');

        function window_move_scroll(){
            window.addEventListener('wheel', function(e){

                header_area.addEventListener('wheel', function(e){
                    e.preventDefault();
                    if(e.deltaY > 0){
                        window.scrollTo(0, sh_1);
                    }
                });

                article[0].addEventListener('wheel', function(e){
                    e.preventDefault();
                    if(e.deltaY > 0){
                        window.scrollTo(0, sh_1);
                    }
                });

                article[1].addEventListener('wheel', function(e){
                    e.preventDefault();

                    if(e.deltaY > 0){
                        window.scrollTo(0, sh_2);
                    }else if(e.deltaY < 0){
                        window.scrollTo(0, 0);
                    }
                });

                article[2].addEventListener('wheel', function(e){
                    e.preventDefault();

                    if(e.deltaY > 0){
                        window.scrollTo(0, sh_3);
                    }else if(e.deltaY < 0){
                        window.scrollTo(0, sh_1);
                    }
                });

                article[3].addEventListener('wheel', function(e){
                    e.preventDefault();

                    if(e.deltaY > 0){
                        window.scrollTo(0, sh_4);
                    }else if(e.deltaY < 0){
                        window.scrollTo(0, sh_2);
                    }
                });

                article[4].addEventListener('wheel', function(e){
                    
                    e.preventDefault();
                    if(e.deltaY > 0){
                        window.scrollTo(0, footerH);
                    }else if(e.deltaY < 0){
                        window.scrollTo(0, sh_3);
                    }


                });
              
            });
        };
        // window_move_scroll();

        // function window_move_click(){
        //     wheel_control_btn.forEach(function(i, e){
        //         i.addEventListener('click', function(){
        //             window.scrollTo(0, article[e].offsetTop);
        //         });
        //     });
        // };
        // window_move_click();

        window.addEventListener('load', function(e) {
            // window_move_click();
            window_move_scroll();
        });

        window.addEventListener('resize', function() {
            // window.location.reload();
            window_move_scroll();
        });

