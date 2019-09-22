function what_the_background(num,mommy){
    for (var i=1;i<=num;i++){
        var img_backgr = document.createElement('img');
        img_backgr.setAttribute('src', "img/0"+i+".jpg");
        img_backgr.setAttribute('onclick', "change_ground(this)");
        mommy.append(img_backgr);
    }
}

function change_ground(img){
	document.body.style.backgroundImage = 'url(' + img.src + ')';
	document.body.style.backgroundRepeat = 'no-repeat';
	document.body.style.backgroundAttachment = 'fixed';
}

var btn_redesign,
    choice_zone,
    screen_tasks,
    number_image = 8,
    flag = false;

// кнопка в верхнем правом углу, при нажатии которой будет предоставляться выбор фона    
btn_redesign = document.getElementById("edit-background");

// область, в которой будут отображаться фоны на выбор
choice_zone = document.getElementById("choice");

// область, вместо которой появляется choice_zone
screen_tasks = document.getElementById("tasks");

btn_redesign.onclick = function(){
    if (!flag) {
        //при первом/нечётном нажатии на кнопку
        choice_zone.style = "display: block;";
        screen_tasks.style = "display: none;";
        flag = true;

        if (choice_zone.children.length == 1) {
            // если во вкладке только заголовок, то добавляем картинки
            // (для того, чтобы при каждом нажатии не добавлялись картинки)
            // (можно было бы и удалять их каждый раз, но это же лишние обращения к серваку потом... нет?)
            what_the_background(number_image,choice_zone);
        }
    } else{
        // при повторном клике
        choice_zone.style = "display: none;";
        screen_tasks.style = "display: block;";
        flag = false;
    }
};
