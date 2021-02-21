$('document').ready(function() {
    
    x = Math.floor(Math.random() * 7);
    
    switch (x) {
        case 0:
            t = 'I am ready to achieve more';
        break;
        case 1:
            t = 'I am ready for new challenges';
        break;
        case 2:
            t = 'I am ready to learn new things';
        break;
        case 3:
            t = 'I am sure that impossible doesn\'t exist';
        break;
        case 4:
            t = 'I am transforming imagination into reality';
        break;
        case 5:
            t = 'I am ready for new exciting projects';
        break;
        case 6:
            t = 'I am ready to design beautiful apps';
        break;
    }

    var options = {
        strings: ["",t, 'I am Paweł <span class="blue">Zajk</span>'],
        typeSpeed: 60,
        startDelay: 100,
        backDelay: 1400,
        onComplete: (self) => {
            $(".typed-cursor").delay(2000).fadeOut();
        },
    };
    
    var typed = new Typed('.name', options);
});