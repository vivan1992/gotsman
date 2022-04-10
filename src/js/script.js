window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
      bg = document.querySelector('.bg'),
      menuItem = document.querySelectorAll('.burger_menu'),
      menuItemLarge = document.querySelectorAll('.header_menu');

    const openMenu = () => {
        bg.classList.add('bg_active');
        hamburger.classList.add('hamburger_active');
        document.body.classList.add('hidden');
    }
    const closeMenu = () => {
        bg.classList.remove('bg_active');
        hamburger.classList.remove('hamburger_active');
        document.body.classList.remove('hidden');
    }
    const toggleMenu = () => {
        bg.classList.toggle('bg_active');
        hamburger.classList.toggle('hamburger_active');
        document.body.classList.toggle('hidden');
    }

    document.addEventListener('click', (e) => {
        if (e.target === bg || e.target.classList.contains('burger_menu')) {
            closeMenu();

        }
    });

    hamburger.addEventListener('click', toggleMenu);

    const addSlowScroll = (event) => {
        event.preventDefault();
            const blockId = event.target.getAttribute('href').substr(1);
            document.getElementById( blockId ).scrollIntoView( {
                behavior: 'smooth',
                block: 'start',
            } );
    }

    menuItem.forEach(item => {
        item.addEventListener('click', addSlowScroll)
    });

    menuItemLarge.forEach(item => {
        item.addEventListener('click', addSlowScroll)
    })

    

    // swipe

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    let xDown = null;

    
    function getTouches(evt) {
        return evt.touches
    }
    
    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
    };
    
    function handleTouchMove(evt) {
        if ( ! xDown ) {
        return;
        }
        
        const xUp = evt.touches[0].clientX;
        const xDiff = xDown - xUp;
        
        if ( Math.abs( xDiff )) {
            if ( xDiff > 10) {
                openMenu();
            } 
            if (xDiff < -10) {
                closeMenu();
            }
        }
        xDown = null;
        };
})
