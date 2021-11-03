//game class
class Game{
    static wrong_image = "data:image/png;base64,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";

    static right_image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAABRFBMVEX///8AAAArKyszADMAADMAAAAkJCQgICAcHBwaGhoXFxcVFRUUFBQiESIgECASEiQRESIQECAREREeHh4cHBwbGxsaGhoXFxcWFhYgFSAfFB8dFB0VFRUUFBQbGxscExwbEhsaGhoZGRkXFx8XFxccFRwbFBsaGhoZGRkYGBgcFxwbFhsbFRsZGRkaFRoaFBoZFBkdGB0ZGRkbFhsZGR0YGBwaFxoaFh0aFhoYGBwcGBwbGBsbFxsaFxoZFhkaFxoaFxoZFhsaFx0aFxoZFhsbGBsaGBoaFxwZFxwbFhsaFhoZFxsZFxsbFxsaFxobiDgbFxsaFxoaFxsboT8aGBobskMbvUUbtkQbtkMbtEMatEMb3E0b3E0b200b2Uwb2Ewb10wb1kwb1Usb1Esb0ksb0Uob0Eobz0obzkkbzUkb5U8b71KibYOuAAAAa3RSTlMAAQICAgIDAwQEBAUFBgYGBgYGBwcICAkJCgoKCgoLCwsMDA0NDg8QEBESExMUFBQUFRUXGRkbHBwdHh4eHyAjJCUnJykqKywsLjM1OTo6PT0+Q0tNWX2CgoSEr7CxsrO0tba3ubq7vL2+6xwlHqAAAAMBSURBVHja7dp5U9pAGAZwFki4xJMqVEVB0RoVVESlGG9R7GkP9NVWBe253///jmnKjJKEZMnmdab7fIDkN5nNZvPs+nwiIiIiIiIiIiIiIiIiTyfkPqgAKSDLckDCQxB/uG/o2VBf2I9lIHLPSHbmxUx2pEfGMZBQfGKuuPFyozg3EQ8RFEFvZmF99+jrl931hUwvguFeUNg8fHVL6c3hZgHBcC9YUo9e31FKaeNIXfLcoAvefKNamt4bdMFbXYBgaBN4bjAQeGwwFHhqMBF4aDAVeGawEHhksBS4ZLBef3QQaIZCZqALAyFBvz9orugo0Az5yUHmbzcJhGP9/bFwgDALKG1Uy8pYjHEdReSe4fTUVHrYZAFiS0DpzX4pl2B7DCQUH51dXl1dnh01XIDYFFB6pSrJiMQ41ufXti8vt9fmjQa1bQGlH/PjUYlNUKgcXFN6fVAxWIA4ENTZnoJ+h4bZAsSB4JxtLOh3aJpNMA4EwPZGPBS0G5wI2OaFx4LHBmcCltmxXfDQ4EzA8o0wErQMEiESkqBlCATQBJphMZuIRhPZRSSBZliZTqWmV9AElDaPt4qKUtw65ioYyBRMBZQ2azuVyk6Np0AenMxbCCi9PanVTt5/5yeQYmNKudqwuvTd6emHH9wEPiIncqX9G+uL//z0i5/AJ0WSinrV6fK/OQp8UnQ8/5l2H3bB36dQxxToY+EcUfDvjQA8QWteADxBa3YEPEHrGwF4gi4N4M6/fBcGcKtNYDaAe30GowHcbFSYDOBup8NgALdbJccGcL/XcmgAHs2aIwPw6fYcGIBXu2jbAPz6TZsG4Nmw2jIA347XhgF4t8wdDcC/5+5gAA+bdsATWBrA410XwBOYGgBhBw7wBIYGQNqNBTxBmwEQd+YvNMEFhkDfn1CrZ5TSs6paQDulkS/v1Wl9r5xHEWiGtFJS36klJY0j0PbLUjklr+RS8RDeuaVYIvk8mYjJiKe3gnIkGpGDmIfYCJEkCfcYnYiIiIiIiIiIiIiIyP+eP6KtnHhpk6vMAAAAAElFTkSuQmCC";

    static colors = [
        'bg-blue',
        'bg-pink',
        'bg-purple',
        'bg-orange',
        'bg-green'
    ];

    static number_animations = [
        "a1",
        "a2",
        "a3"
    ];

    constructor(args){
        if(args){
            this.gameElement = args.gameElement || $("#game-window");
            this.timer = args.timer || 10;
            this.time = this.timer;
            this.interval;
            this.currentLevel = 1;
            this.maxResult = 1;
        }
        else{
            this.gameElement = $("#game-window");
            this.timer = 10;
            this.time = this.timer;
            this.interval;
            this.currentLevel = 1;
            this.maxResult = 1;
        }
        

        this.init();
    }

    init(){
        //reload timer and level counter
        this.time = this.timer;
        this.currentLevel = 1;
        this.maxResult = 1;


        $(this.gameElement).addClass("game-window");

        $(this.gameElement).html(`
        <div class="game-results" style="display: none">
            <p>Ваш результат:</p>
            <p class="max-result">4</p>
            <input type="button" value="Начать заново" class="try-again-button">
        </div>
        <div class="image-wrapper" style="display: none">
            <img src="${Game.right_image}" class="answer-result"/>
        </div>
        <div class="game-menu" style="display: none">
            <div class="game-menu__item">
                <div>Время</div>
                <div class="game-menu__timer">1:00</div>
            </div>
            
            <div class="game-menu__item">
            <div>Уровень</div>
            <div class="game-menu__level">1-8</div>
        </div>
        </div>
        <div class="headline">
            <span class="headline__text">Найдите указанное число:</span>
            <span class="headline__number"></span>   
        </div>
        <div class="numbers-container"></div>
        <div class="game-guide">Нажмите чтобы продолжить</div>
        <div class="pre-game-timer" style="display: none;">
        <div class="pre-game-timer__number"></div>
        </div>`);
        
        //set wrapper
        $(this.gameElement).unwrap();
        $(this.gameElement).wrap("<div class='wrapper'></div>");
        //set pointer cursor
        $(this.gameElement).addClass("cursor-pointer");

        $(this.gameElement).find(".try-again-button").on("click", e => {
            $(this.gameElement).find(".try-again-button").off();
            this.init();
        });

        //remove all color classes
        $(this.gameElement).removeClass(Game.colors.join(" "));

        //set random color class
        $(this.gameElement).addClass(Game.random_color());

        //load guide level
        this.load_guide_level();



        
    }

    load_guide_level(){
        //set event listener to start game on click
        $(this.gameElement).on("click", e => {
            $(this.gameElement).removeClass("cursor-pointer");
            $(this.gameElement).off();
            $(this.gameElement).find(".pre-game-timer").css("display", "flex");
            $(this.gameElement).find(".game-guide").css("display", "none");
            this.start();
        });

        //$(this.gameElement).find(".headline__number").text(Math.floor(Math.random() * 100));

        
        $(this.gameElement).find(".numbers-container").html("");

        //generating random numbers for guide level
        let right_answer;
        let generated_numbers = [];
        for(let i = 0; i < 6; i++){
            let rand_int = Math.floor(Math.random()*10);

            //loop to prevent generating same numbers
            while(generated_numbers.includes(rand_int)){
                rand_int = Math.floor(Math.random()*10);
            }

            generated_numbers.push(rand_int);

            if(i == 0)right_answer = rand_int;

            //creating new number-item
            let number_item = $(`<div class="number-item ${i == 0? "for-guide": ""} ${Game.random_color()}"><span>${rand_int}</span></div>`);
            $(number_item).css("width", "30%");
            $(number_item).css("line-height", "80px");

            //appent new element to numbers container
            $(this.gameElement).find(".numbers-container").append(number_item);
        }

        $(this.gameElement).find(".headline__number").text(right_answer);
    }

    start(){
        


        //remove all event listeners from main-window
        $(this.gameElement).off();

        //set pre-game timer
        let pre_game_timer = 3;


        $(this.gameElement).find(".pre-game-timer__number").text(pre_game_timer);
        pre_game_timer -= 1;
        //start pre-game timer
        let pre_game_interval = setInterval(() => {
            $(this.gameElement).find(".pre-game-timer__number").text(pre_game_timer);
            pre_game_timer -= 1;
            //stop pre-game timer and load new level
            if(pre_game_timer < -1){
                clearInterval(pre_game_interval);
                $(this.gameElement).find(".pre-game-timer").css("display", "none");
                this.load_level();
                
                $(this.gameElement).find(".game-menu").css("display", "inline-flex");



                let minutes = Math.floor(this.time/60);
                let seconds = this.time - minutes*60;
                //show timer
                $(this.gameElement).find(".game-menu__timer").text(minutes+":"+seconds);
                //start game timer
                this.interval = setInterval(()=>{
                    this.time--;
                    minutes = Math.floor(this.time/60);
                    seconds = this.time - minutes*60;
                    //show timer
                    $(this.gameElement).find(".game-menu__timer").text(minutes+":"+seconds);
                    if(this.time <= 0)clearInterval(this.interval);
                },1000);
            }
        }, 1000);
    }

    load_level(){

        //remove all color classes
        $(this.gameElement).removeClass(Game.colors.join(" "));

        //set random color class
        $(this.gameElement).addClass(Game.random_color());

        $(this.gameElement).find(".game-menu__level").text(this.currentLevel+"-9");

        $(this.gameElement).find(".numbers-container").html("");

        //generating random numbers for level
        let right_answer;
        let generated_numbers = [];


        //easy mode
        if(this.currentLevel < 2){
            let right_answer_pos = Math.floor(Math.random()*6);
            for(let i = 0; i < 6; i++){
                console.log("level_loading " + i)
                let rand_int = Math.floor(Math.random()*10);
    

                while(generated_numbers.includes(rand_int)){
                    rand_int = Math.floor(Math.random()*10);
                }
    
                generated_numbers.push(rand_int);

                if(i == right_answer_pos)right_answer = rand_int;
    
                //creating new number-item
                let number_item = $(`<div class="number-item ${Game.random_color()}"><span>${rand_int}</span></div>`);
                $(number_item).css("line-height", "80px");
                $(number_item).css("width", "30%");
                //set event listener on click
                $(number_item).on("click", e=>{
                    this.answer(rand_int);
                });
    
                //appent new element to numbers container
                $(this.gameElement).find(".numbers-container").append(number_item);
            }
            
        }

        //normal mode
        else if(this.currentLevel >= 2 && this.currentLevel < 4 ){
            let right_answer_pos = Math.floor(Math.random()*6);
            for(let i = 0; i < 6; i++){
                let rand_int = Math.floor(Math.random()*99);
    
                //loop to prevent generating same numbers
                while(generated_numbers.includes(rand_int)){
                    rand_int = Math.floor(Math.random()*99);
                }
    
                generated_numbers.push(rand_int);
    
                if(i == right_answer_pos)right_answer = rand_int;
    
                //creating new number-item
                let number_item = $(`<div class="number-item ${Game.random_color()} ${Game.random_animation()}"><span>${rand_int}</span></div>`);
                $(number_item).css("width", "30%");
                $(number_item).css("line-height", "80px");
    
                //set event listener on click
                $(number_item).on("click", e =>{
                    this.answer(rand_int);
                });
    
                //appent new element to numbers container
                $(this.gameElement).find(".numbers-container").append(number_item);
            }
        }


        //semi-hard mode
        else if(this.currentLevel >= 4 && this.currentLevel < 6){
            let right_answer_pos = Math.floor(Math.random()*8);
            for(let i = 0; i < 8; i++){
                let rand_int = Math.floor(Math.random()*99);
    
                //loop to prevent generating same numbers
                while(generated_numbers.includes(rand_int)){
                    rand_int = Math.floor(Math.random()*99);
                }
    
                generated_numbers.push(rand_int);
    
                if(i == right_answer_pos)right_answer = rand_int;
    
                //creating new number-item
                let number_item = $(`<div class="number-item ${Game.random_color()} ${Game.random_animation()}"><span>${rand_int}</span></div>`);
                $(number_item).css("width", "22%");
                $(number_item).css("line-height", "80px");
    
                //set event listener on click
                $(number_item).on("click", e =>{
                    this.answer(rand_int);
                });
    
                //appent new element to numbers container
                $(this.gameElement).find(".numbers-container").append(number_item);
            }
        }


        //hard mode
        else if(this.currentLevel >= 6){
            let right_answer_pos = Math.floor(Math.random()*12);
            for(let i = 0; i < 12; i++){
                let rand_int = Math.floor(Math.random()*8999)+1000;
    
                //loop to prevent generating same numbers
                while(generated_numbers.includes(rand_int)){
                    rand_int = Math.floor(Math.random()*8999)+1000;
                }
    
                generated_numbers.push(rand_int);
    
                if(i == right_answer_pos)right_answer = rand_int;
    
                //creating new number-item
                let number_item = $(`<div class="number-item ${Game.random_color()} ${Game.random_animation()}"><span>${rand_int}</span></div>`);
                $(number_item).css("width", "22%");
                $(number_item).css("line-height", "60px");
    
                //set event listener on click
                $(number_item).on("click", e =>{
                    this.answer(rand_int);
                });
    
                //appent new element to numbers container
                $(this.gameElement).find(".numbers-container").append(number_item);
            }
        }

        $(this.gameElement).find(".headline__number").text(right_answer);
    }

    answer(number){
        //right answer
        $(this.gameElement).find(".numbers-container").removeClass("slide-in-animation");

        if(this.maxResult < this.currentLevel)this.maxResult = this.currentLevel;

        if($(this.gameElement).find(".headline__number").text() == number){
            //show the right-answer image
            $(this.gameElement).find(".answer-result").attr("src", Game.right_image);
            $(this.gameElement).find(".image-wrapper").css("display", "flex");

            //set game-window unclickable for 600ms
            $(this.gameElement).css("pointer-events", "none");
            $(this.gameElement).find(".numbers-container").addClass("slide-over-animation");
            setTimeout(() => {
                //close image
                $(this.gameElement).find(".image-wrapper").css("display", "none");
                
                $(this.gameElement).find(".numbers-container").addClass("slide-in-animation");
                $(this.gameElement).find(".numbers-container").removeClass("slide-over-animation");

                //stop or continue the game
                if(this.currentLevel <= 9 && this.time > 0)this.load_level();
                else this.game_end();
            }, 300);


            setTimeout(() => $(this.gameElement).css("pointer-events", "all"), 600);
            this.currentLevel++;
        }
        //wrong
        else{
            //show the wrong-answer image
            $(this.gameElement).find(".answer-result").attr("src", Game.wrong_image);
            $(this.gameElement).find(".image-wrapper").css("display", "flex");

            //set game-window unclickable for 600ms
            $(this.gameElement).css("pointer-events", "none");
            $(this.gameElement).find(".numbers-container").addClass("slide-over-animation");
            setTimeout(() => {
                //close image
                $(this.gameElement).find(".image-wrapper").css("display", "none");
                
                $(this.gameElement).find(".numbers-container").addClass("slide-in-animation");
                $(this.gameElement).find(".numbers-container").removeClass("slide-over-animation");

                //stop or continue the game
                if(this.currentLevel <= 9  && this.time > 0)this.load_level();
                else this.game_end();
            }, 300);

            setTimeout(() => $(this.gameElement).css("pointer-events", "all"), 600);
            if(this.currentLevel > 1)this.currentLevel--;
        }
    }

    game_end(){
        console.log("game end");
        clearInterval(this.interval);
        $(this.gameElement).find(".game-results").css("display", "flex");
        $(this.gameElement).find(".game-menu").css("display", "none");
        $(this.gameElement).find(".numbers-container").html("");

        $(this.gameElement).find(".game-results").removeClass(Game.colors.join(" "));
        $(this.gameElement).find(".game-results").addClass(Game.random_color());
        $(this.gameElement).find(".max-result").text(this.maxResult);
    }

    static random_color(){
        return Game.colors[Math.floor(Math.random()*Game.colors.length)];
    }

    static random_animation(){
        return Game.number_animations[Math.floor(Math.random()*Game.number_animations.length)];
    }
}