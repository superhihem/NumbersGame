let game;


window.onload = function(){
    //без указания id (в этом случае на странице должен быть элемент div с id = "game-window")
    game = new Game();
    
    //с указанием конкретного id элемента
    // game = new Game({gameElement = $("#my-id")});
    
    //установка таймера на игру
    //указывать нужно в секундах
    //по умолчанию он равен 60 секунд
    // game = new Game({
    // timer : 120
    //});
}   

/*

/*
