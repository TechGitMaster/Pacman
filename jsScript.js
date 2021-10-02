


window.onload = function(){

    //GameBoard________________________________________________________________________
    var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35
        ,36,71,106,141,176,211,421,456,491,526,561,596,631,666,701,736,735,770,771,806,841,
        ,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,
        70,105,140,175,210,245,280,420,455,490,525,560,595,630,665,700,805,840,
        73,108,143,178,179,180,181,182,147,112,77,76,75,74,
        79,114,149,184,185,186,187,188,189,190,155,120,85,84,83,82,81,80,
        103,138,173,208,207,206,205,204,169,134,99,100,101,102,
        97,132,167,202,201,200,199,198,197,196,161,126,91,92,93,94,95,96,97,
        53,88,123,158,193,228,263,298,333,368,403,438,
        246,386,247,249,250,251,252,253,254,289,324,256,257,258,259,260,261,296,291,326,331,366,365,364,363,362,361,359,394,248,393,392,391,390,389,388,387,
        279,278,277,276,275,274,273,272,307,342,377,412,413,414,415,416,417,418,419,270,305,340,375,374,373,372,371,370,335,300,265,266,267,268,269,
        431,432,433,434,435,470,505,540,575,576,577,578,579,580,581,546,511,476,441,442,443,444,445,
        458,493,528,563,598,633,668,703,738,773,774,775,776,741,706,671,636,601,566,531,496,461,460,459,
        498,499,500,501,502,503,538,573,608,607,606,605,604,603,568,533,
        673,708,743,778,710,745,711,746,712,747,713,748,678,783,
        680,715,750,785,681,682,683,684,685,686,721,756,791,790,789,788,787,786,
        513,548,583,618,653,688,689,690,691,692,657,622,587,552,517,516,515,514,
        758,759,760,761,762,797,796,795,794,793,
        484,519,554,589,624,659,694,729,764,799,
        488,487,486,521,556,591,626,661,696,731,766,801,802,803,
        558,593,628,663,698,733];
    var arrPosition = [];

    var leftP = 0, bottomP = 0;
    for(var count = 1;count <= 875;count++){
        var createElem = document.createElement('div');
        createElem.style.margin = "0px";
        createElem.style.width = "20px";
        createElem.style.height = "20px";
        createElem.style.position = 'absolute';
        createElem.style.left = leftP+'px';
        createElem.style.top = bottomP+'px';
        createElem.style.color = "white";
        createElem.style.fontSize = "18px";
        createElem.style.textAlign = "center";
        createElem.setAttribute('class', 'velarde'+count);

        var conditionDot = false;
        for(var countArr = 0;countArr < arr.length;countArr++){
            if(count == arr[countArr]){
                createElem.style.background = "#1919A6";
                conditionDot = true;
            }

            if((count >= 281 && count <= 288) || (count >= 316 && count <= 323) || (count >= 351 && count <= 358) ||
            (count >= 308 && count <= 315) || (count >= 343 && count <= 350) || (count >= 378 && count <= 385) 
            || (count >= 109 && count <= 111) || (count >= 144 && count <= 146) || (count >= 115 && count <= 119) || 
            (count >= 150 && count <= 154) || (count >= 292 && count <= 295) || (count >= 327 && count <= 330) 
            || (count >= 494 && count <= 495) || (count >= 529 && count <= 530) || (count >= 564 && count <= 565) 
            || (count >= 599 && count <= 600) || (count >= 634 && count <= 635) || (count >= 669 && count <= 670) 
            || (count >= 704 && count <= 705) || (count >= 739 && count <= 740) || (count >= 109 && count <= 111) 
            || (count >= 534 && count <= 537) || (count >= 569 && count <= 572) || (count >= 716 && count <= 720) 
            || (count >= 549 && count <= 551) || (count >= 751 && count <= 755) || (count >= 584 && count <= 586) 
            || (count >= 619 && count <= 621) || (count >= 654 && count <= 656) || (count >= 301 && count <= 304) 
            || (count >= 336 && count <= 339) || (count >= 127 && count <= 131) || (count >= 162 && count <= 166) 
            || (count >= 135 && count <= 137) || (count >= 170 && count <= 172)){
                conditionDot = true;
            }

            if(countArr+1 == arr.length){
    
                if(!conditionDot && count != 823){
                    
                        createElem.innerHTML = '.';
                }

                arrPosition.push([leftP, bottomP, count]);
                document.querySelector(".cardBoardFinal").appendChild(createElem);

            }
        }

        if(count % 35 == 0){
            leftP = 0;
            bottomP += 20;
        }else{
            leftP += 20;
        }
    }

    //Animation query__________________________________________________________________
    var canvas = document.querySelector('.canvasPacman');
    var LifeCan = document.querySelector('.LifeCan');
    var canvasGhost1 = document.querySelector('.canvasGhost1');
    var canvasGhost2 = document.querySelector('.canvasGhost2');
    var canvasGhost3 = document.querySelector('.canvasGhost3');
    var canvasGhost4 = document.querySelector('.canvasGhost4');
    var context = canvas.getContext('2d');
    var LifeCanContext = LifeCan.getContext('2d');
    var contextGhost1 = canvasGhost1.getContext('2d');
    var contextGhost2 = canvasGhost2.getContext('2d');
    var contextGhost3 = canvasGhost3.getContext('2d');
    var contextGhost4 = canvasGhost4.getContext('2d');
    var range = document.querySelector('.range');
    var divSLS = document.querySelector('.divSLS');
    var lifeNum = document.querySelector('.lifeNum');
    var num = 1;
    var count = 0;
    var countArray = 822;
    var conditionClick = 0;
    var score = 0, speed = 25;
    var loopSpeedPacman = 200;
    var conditionSpeedScore = false;
    var LifeCount = 3;
    var gameOverGhost = true;
    var arrowFlow = "";


    //right, left, up, down GHOST_______________________________________________
    var arrGhost = [[542, [[190, 200], [0, 10], [190, 10], [0, 200]]], 
                    [541, [[190, 580], [0, 390], [190, 390], [0, 580]]], 
                    [543, [ [589, 200], [403, 10], [589, 10], [403, 200]]],
                    [544, [ [589, 580], [403, 390], [589, 390], [403, 580]]]];
    var arrCon = [false, false, false, false];
    var randomArr = [0, 0, 0, 0];

    canvas.style.left = "329px";
    canvas.style.top = "450px";   


    const image = new Image();
    image.src = 'pacman.png';
    
    var imgGhost = new Image();
    imgGhost.src = 'R.png';
    

    //Interval move Loop PACMAN______________________________________________________
    var loopPacman = null;
    var loopSpeedV = null;
    var loopGameStart = setInterval(startGameFunc, 1000);


   // context.drawImage(image, num * 120, 0, 110, 210, 0, 0, 300, 300);
    frame();
    function animationPacman(){
        context.drawImage(image, num * 120, 0, 110, 210, 0, 0, 300, 300);
        LifeCanContext.drawImage(image, num * 120, 0, 110, 210, 0, 0, 300, 300);

        count++;
        if(count > 20){
            count = 0;
            num++;
        }

        if(num > 3){
            num = 0;
        }

    }

    function frame(){
        context.clearRect(0, 0, 400, 400);
        LifeCanContext.clearRect(0, 0, 400, 400);
        animationPacman();


        //KEY PRESS________________________________________________________________
        document.onkeydown = (event) => {
            switch(event.keyCode){
                case 37:
                    if(countStarts == 0 && gameOverGhost){
                        console.log('LEFT');
                        conditionClick = 37;
                        if(arrowFlow !== ""){
                            document.querySelector(arrowFlow).style.background = "white";
                            arrowFlow = '.L';
                            document.querySelector(arrowFlow).style.background = "rgb(116, 255, 132)";
                        }else{
                            document.querySelector('.L').style.background = "rgb(116, 255, 132)";
                            arrowFlow = '.L';
                        }
                    }
                    break;

                case 39:
                    if(countStarts == 0 && gameOverGhost){
                        console.log('RIGHT');
                        conditionClick = 38;
                        if(arrowFlow !== ""){
                            document.querySelector(arrowFlow).style.background = "white";
                            arrowFlow = '.R';
                            document.querySelector(arrowFlow).style.background = "rgb(116, 255, 132)";
                        }else{
                            document.querySelector('.R').style.background = "rgb(116, 255, 132)";
                            arrowFlow = '.R';
                        }
                    }
                    break;    


                case 38:
                    if(countStarts == 0 && gameOverGhost){
                        console.log('UP');
                        conditionClick = 39;
                        if(arrowFlow !== ""){
                            document.querySelector(arrowFlow).style.background = "white";
                            arrowFlow = '.U';
                            document.querySelector(arrowFlow).style.background = "rgb(116, 255, 132)";
                        }else{
                            document.querySelector('.U').style.background = "rgb(116, 255, 132)";
                            arrowFlow = '.U';
                        }
                    }
                    break;
                case 40:
                    if(countStarts == 0 && gameOverGhost){
                        console.log('DOWN');
                        conditionClick = 40
                        if(arrowFlow !== ""){
                            document.querySelector(arrowFlow).style.background = "white";
                            arrowFlow = '.D';
                            document.querySelector(arrowFlow).style.background = "rgb(116, 255, 132)";
                        }else{
                            document.querySelector('.D').style.background = "rgb(116, 255, 132)";
                            arrowFlow = '.D';
                        }
                    }
                    break;
                default:


                   if(event.key === 's' || event.key === 'S'){
                       if(Math.floor((speed*100)/210) == 100){
                            loopSpeedPacman = 100;

                            clearInterval(loopPacman);
                            clearInterval(loopSpeedV);

                            conditionSpeedScore = true;

                            canvas.style.transition = "all 0.1s linear";
                            loopPacman = setInterval(PACMANMOVE, loopSpeedPacman);
                            loopSpeedV = setInterval(loopSpeed, 100);
                       }
                   }
            }
        }


        requestAnimationFrame(frame);
    }
    var countCon = 0;


    //Loop Speed_________________________________________________
    function loopSpeed(){
        if(conditionSpeedScore){
            speed -= 5;
            range.style.width = speed+'px';
            range.innerHTML = Math.floor((speed*100)/210)+'%';
    
            if(speed == 25){
                loopSpeedPacman = 200;
                clearInterval(loopSpeedV);
                clearInterval(loopPacman);

                canvas.style.transition = "all 0.2s linear";
                range.style.background = "white";
                range.innerHTML = "0%";

                loopPacman = setInterval(PACMANMOVE, loopSpeedPacman);
                conditionSpeedScore = false;
            }
        }
    }
    
    //Pacman move_____________________________________________
    function PACMANMOVE(){
        switch(conditionClick){
            case 37: 
                keys(arrPosition[countArray-1][2], 1, 1, 1);
                break;
            case 38: 
                keys(arrPosition[countArray+1][2], 1, 2, 2);
                break;
            case 39: 
                keys(arrPosition[countArray-35][2], 35, 1, 3);
                break;
            case 40: 
                keys(arrPosition[countArray+35][2], 35, 2, 4);
                break;
        }
    }

    
    //Key function x,y axist move PACMAN_____________________________________________________________________
    function keys(numArr, number, conditionss, conRotate){
        var condition = false;
        for(var count = 0;count < arr.length;count++){
            if(arr[count] === arrPosition[countArray][2] || arr[count] === numArr){
                condition = true;
            }

            if(count+1 >= arr.length){
                if(!condition){
                    switch(conditionss){
                        case 1:
                            countArray -= number;
                            break;
                        case 2:
                            countArray += number;
                            break;
                    }
    
                    var element = document.querySelector('.velarde'+arrPosition[countArray][2]);
                    if(element.innerHTML !== "" && !conditionSpeedScore){
                        element.innerHTML = '';
                        score += 1;
                        if(speed != 210){
                            speed += 5;
                            range.style.width = speed+'px';
                            range.innerHTML = Math.floor((speed*100)/210)+'%';
                        }else{
                            range.style.background = "yellowgreen";
                        }
                        divSLS.innerHTML = "Score: "+score;
    
                        if(score == 323){
                            element.innerHTML = '';
                            alert("YOU WIN!");
                            clearInterval(loopPacman);
                            gameOverGhost = false;
                        }
                    }
    
                    canvas.style.left = arrPosition[countArray][0]-11+"px";
                    canvas.style.top = arrPosition[countArray][1]-10+"px";
                }
            }
            
        }

        

        switch(conRotate){
            case 1:
                if(canvas.style.transform !== "rotate(180deg)"){
                    canvas.style.transform = "rotate(180deg)"
                }   
            break; 
            case 2:
                if(canvas.style.transform !== "rotate(0deg)"){
                    canvas.style.transform = "rotate(0deg)"
                }    
            break;
            case 3:
                if(canvas.style.transform !== "rotate(270deg)"){
                    canvas.style.transform = "rotate(270deg)";
                }      
            break;  
            case 4:
                if(canvas.style.transform !== "rotate(90deg)"){
                    canvas.style.transform = "rotate(90deg)";
                }    
            break; 
            
        }
    }
  
    //Function ghost Position Calculation_______________________________________________
    function intervalGhostCal(){
            var arrLocationRandom = [0, 1, 2, 3];
            var arrLocationFinal = [];


            for(var count = 0;count < arr.length;count++){
                if(!arrCon[countCon]){
                    if(arr[count] == arrPosition[arrGhost[countCon][0]][2]-1){
                        arrLocationRandom[0] = -1;
                    }
                     if(arr[count] == arrPosition[arrGhost[countCon][0]][2]+1){
                        arrLocationRandom[1] = -1;
                    }
                     if(arr[count] == arrPosition[arrGhost[countCon][0]][2]-35){
                        arrLocationRandom[2] = -1;
                    }
                     if(arr[count] == arrPosition[arrGhost[countCon][0]][2]+35){
                        arrLocationRandom[3] = -1;
                    }
                }
    
                if(count+2 > arr.length){
                    for(var countLocationRand = 0;countLocationRand < arrLocationRandom.length; countLocationRand++){
                        if(!arrCon[countCon]){
                            if(arrLocationRandom[countLocationRand] != -1){
                                arrLocationFinal.push(arrLocationRandom[countLocationRand]);
                            }
                        }
                        if(countLocationRand+1 == arrLocationRandom.length){
                            var switchCon = 0;
                           if(!arrCon[countCon]){
                                randomArr[countCon] = Math.floor(Math.random() * arrLocationFinal.length);
                                switchCon = arrLocationFinal[randomArr[countCon]];
                            }else{
                                switchCon = arrLocationRandom[randomArr[countCon]];
                            }
                            
                            switch(switchCon){
                                case 0:
                                    randomArr[countCon] = 0;
                                    if(scanBlock(arrPosition[arrGhost[countCon][0]][2]-1)){
                                        arrGhost[countCon][0] -= 1;
                                       
                                        MoveGhost(0, countCon);
                                    }else{
                                        arrCon[countCon] = false;
                                        intervalGhostCal();
                                    }
                                    break;
                                    
                                case 1:
                                    randomArr[countCon] = 1;
                                    if(scanBlock(arrPosition[arrGhost[countCon][0]][2]+1)){
                                        arrGhost[countCon][0] += 1;
                                        MoveGhost(1, countCon);
                                    }else{
                                        arrCon[countCon] = false;
                                        intervalGhostCal();
                                    }
                                    break; 
                                case 2:
                                    randomArr[countCon] = 2;
    
                                    if(scanBlock(arrPosition[arrGhost[countCon][0]][2]-35)){
                                        arrGhost[countCon][0] -= 35;
                                        
                                        MoveGhost(2, countCon);
                                    }else{
                                        arrCon[countCon] = false;
                                        intervalGhostCal();
                                    }
                                    break;      
                                case 3:
                                    randomArr[countCon] = 3;
                                    if(scanBlock(arrPosition[arrGhost[countCon][0]][2]+35)){
                                        arrGhost[countCon][0] += 35;
                                        MoveGhost(3, countCon);
                                    }else{
                                        arrCon[countCon] = false;
                                        intervalGhostCal();
                                    }
                                    break; 
                            }
                        }
                    }
                }
            }
    }

    //Function scanning block______________________________________________________
    function scanBlock(numCon){
        var con = true;

        for(var count = 0;count < arr.length;count++){
            if(arr[count] == numCon){
                con = false;
            }   
        }

        return con;
    }

    //function x,y asist move Ghost_______________________________________________________
    function MoveGhost(aniN, con){
        arrCon[con] = true;

        //Move the ghost_________________________________________
        if(con == 0){
            contextGhost1.drawImage(imgGhost, arrGhost[con][1][aniN][0], arrGhost[con][1][aniN][1], 160, 190, 0, 0, 300, 180); 
            canvasGhost1.style.left = (arrPosition[arrGhost[con][0]][0]-11)+"px";
            canvasGhost1.style.top = (arrPosition[arrGhost[con][0]][1]-14)+"px";
        }else if(con == 1){
            contextGhost2.drawImage(imgGhost, arrGhost[con][1][aniN][0], arrGhost[con][1][aniN][1], 160, 190, 0, 0, 300, 180); 
            canvasGhost2.style.left = (arrPosition[arrGhost[con][0]][0]-11)+"px";
            canvasGhost2.style.top = (arrPosition[arrGhost[con][0]][1]-14)+"px";
        }else if(con == 2){
            contextGhost3.drawImage(imgGhost, arrGhost[con][1][aniN][0], arrGhost[con][1][aniN][1], 160, 190, 0, 0, 300, 180); 
            canvasGhost3.style.left = (arrPosition[arrGhost[con][0]][0]-11)+"px";
            canvasGhost3.style.top = (arrPosition[arrGhost[con][0]][1]-14)+"px";
        }else{
            contextGhost4.drawImage(imgGhost, arrGhost[con][1][aniN][0], arrGhost[con][1][aniN][1], 160, 190, 0, 0, 300, 180); 
            canvasGhost4.style.left = (arrPosition[arrGhost[con][0]][0]-11)+"px";
            canvasGhost4.style.top = (arrPosition[arrGhost[con][0]][1]-14)+"px";
        }


        //Catch the Pacman____________________________________________________________
        if(arrGhost[con][0]-2 == countArray || arrGhost[con][0]-1 == countArray){
            randomArr[con] = 0;
        }else if(arrGhost[con][0]+2 == countArray || arrGhost[con][0]+1 == countArray){
            randomArr[con] = 1;
        }else if(arrGhost[con][0]-70 == countArray || arrGhost[con][0]-35 == countArray){
            randomArr[con] = 2;
        }else if(arrGhost[con][0]+70 == countArray || arrGhost[con][0]+35 == countArray){
            randomArr[con] = 3;
        }


        //Check if the pacman is catch_____________________________________________
        if(arrGhost[0][0] == countArray || arrGhost[1][0] == countArray || arrGhost[2][0] == countArray
            || arrGhost[3][0] == countArray){
            if(!conditionSpeedScore){
                if(LifeCount > 1){
                    LifeCount -= 1;
                    lifeNum.innerHTML = 'x '+LifeCount;
                    countArray = 822;
                    canvas.style.display = "none";
                    
                    keys(arrPosition[countArray-1][2], 1, 1, 1);
                    setTimeout(() => {
                        document.querySelector(arrowFlow).style.background = "white";
                        arrowFlow = '.R';
                        document.querySelector(arrowFlow).style.background = "rgb(116, 255, 132)";

                        conditionClick = 38;
                        canvas.style.transform = "rotate(0deg)";
                        canvas.style.display = "block";
                    }, 200);
                }else{
                    alert("YOU DEAD!");
                    lifeNum.innerHTML = 'x '+LifeCount;
                    clearInterval(loopPacman);
                    gameOverGhost = false;
                }
            }
            
            
        }


        countCon += 1;
        if(countCon == 4){
            countCon = 0;
        }
        setTimeout(() => {
            if(gameOverGhost){
                intervalGhostCal();
            }
        }, 50);
            

    }



    

    //Loop start game___________________________________________________
    var countStarts = 3;
    var number = document.querySelector('.number');
    var border = document.querySelector('.border');
    function startGameFunc(){
        countStarts -= 1;
        number.innerHTML = "Game start at "+countStarts;

        console.log(countStarts);
        if(countStarts == 0){
            border.style.display = 'none';
            clearInterval(loopGameStart);
            loopPacman = setInterval(PACMANMOVE, loopSpeedPacman);
            loopSpeedV = setInterval(loopSpeed, 0);
            intervalGhostCal();
        }
    }


    
}
