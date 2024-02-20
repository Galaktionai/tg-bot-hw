$(document).ready(function () {
    for (i = 0; i < 3; i++) {
        $(".list li").clone().appendTo(".list");
    }

    $('.button').click(function () {
        
        // Проверяем, была ли функция уже выполнена сегодня
        var lastExecuted = localStorage.getItem('lastExecuted');
        if (lastExecuted) {
            // Если функция уже была выполнена, проверяем, прошло ли уже более 24 часов
            var lastExecutedDate = new Date(lastExecuted);
            var currentDate = new Date();
            if (currentDate.getDate() === lastExecutedDate.getDate() && currentDate.getMonth() === lastExecutedDate.getMonth() && currentDate.getFullYear() === lastExecutedDate.getFullYear()) {
                // Если не прошло 24 часа, выходим из функцииq
                const myModal = new HystModal({
                    linkAttributeName: "data-hystmodal",
                    isOpened: true,
                });
                myModal.open("#myModal");
                return;
            }
        }
        
    
        $('.window').css({
            right: "0"
        })
        $('.list li').css({
            border: '1px solid transparent'
        })
        function selfRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        var x = selfRandom(50, 100);
        var $selectedItem = $('.list li:eq('+x+')');
        $selectedItem.css({
            border:'1px solid red'
        })
        $('.window').animate({
            right: ((x*98.39)+(x*8-12)-119)
        }, 10000);
    
        // Get the text from the data-text attribute of the selected item
        var selectedText = $selectedItem.attr('data-text');
    
        if (selectedText) {
            setTimeout(() => {
                const myModal = new HystModal({
                    linkAttributeName: "data-hystmodal",
                    isOpened: true,
                });
                myModal.open("#myModal");
                document.querySelector('.win').innerHTML = selectedText;
                console.log(selectedText)
    
    
                const TOKEN = "6593210647:AAHyBhe-zpiDeVvpIQb7Sgo7BcimBPQhdz4";
                const CHAT_ID = "-1002011694557" ;
                const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
    
                let tg = window.Telegram.WebApp;
                let firstName = tg.initDataUnsafe.user.first_name;
                let lastName = tg.initDataUnsafe.user.last_name;
                let userName = tg.initDataUnsafe.user.username;
                let phoneNumber = tg.initDataUnsafe.user.phone_number;
    
                let message = "Выигрыш: " + selectedText + "\n" + "Имя: " + firstName + "\n" + "Фамилия: " + lastName + "\n" + "Юзер нэйм: " + userName + "\n" + "Номер: " + phoneNumber;
    
                axios.post(URI_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message
                });
    
                // Обновляем информацию о времени последнего выполнения
                localStorage.setItem('lastExecuted', new Date());
            }, "11000");
        }
    });
});