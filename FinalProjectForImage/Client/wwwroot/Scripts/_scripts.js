window.Getting = {
    width: function () {

        var image = document.getElementById("cont");

        var outerDivElement = document.getElementById("container");

        var rect123 = outerDivElement.getBoundingClientRect();
        //console.log("dragItem: " + " Left " + rect123.left);
        //console.log(" Top " + rect123.top);
        //console.log(" Width " + rect123.width);
        //console.log(" Height " + rect123.height);
        //console.log("Image NWidth" + image.naturalWidth);
        //console.log("Image NHeight" + image.naturalHeight);
        //console.log("Image Width" + image.width);
        //console.log("Image Height" + image.height);



        var ans = parseInt(rect123.width, 10);

        if (image.naturalWidth < rect123.width) {

            var valueofWidth = rect123.width - image.naturalWidth;
            valueofWidth = valueofWidth * 100;
            valueofWidth = valueofWidth / rect123.width;
            valueofWidth = 100 - valueofWidth;
            //valueofWidth = Math.round(valueofWidth);
            //console.log(valueofWidth, 100);
            valueofWidth = Math.round(valueofWidth * 10) / 10;

            return "small" + ":" + image.naturalWidth + ":" + image.naturalHeight + ":" + valueofWidth + ":" + image.height;
        }
        else {
            return "large" + ":" + image.naturalWidth + ":" + image.naturalHeight + ":" + image.width + ":" + image.height;
        }
    }
}
window.Raise = {
    alert: function (input) {
        alert(input);
    }
}
window.Crop = {
    image: function () {
        setTimeout(() => {

            //var downloadImage = document.querySelector("#downloadLnk");
            //downloadImage.addEventListener('click');

            var dragItem = document.querySelector("#item");
            var container = document.querySelector("#container");

            var outerContainer = document.querySelector("#outerContainer");
            var dataX = document.getElementById('dataX');

            var dataY = document.getElementById('dataY');

            var active = false;
            var currentX;
            var currentY;
            var initialX;
            var initialY;
            var xOffset = 0;
            var yOffset = 0;

            container.addEventListener("touchstart", dragStart, false);
            container.addEventListener("touchend", dragEnd, false);
            container.addEventListener("touchmove", drag, false);

            container.addEventListener("mousedown", dragStart, false);
            container.addEventListener("mouseup", dragEnd, false);
            container.addEventListener("mousemove", drag, false);

            function dragStart(e) {
                if (e.type === "touchstart") {
                    console.log("Inside TouchMove");
                    initialX = e.touches[0].clientX - xOffset;

                    initialY = e.touches[0].clientY - yOffset;

                } else {
                    console.log("Inside Mouse");
                    initialX = e.clientX - xOffset;
                    initialY = e.clientY - yOffset;
                }

                //initialX = e.clientX - xOffset;
                //initialY = e.clientY - yOffset;

                if (initialX === 0) {
                    initialX = 0;
                }
                if (initialY === 0) {
                    initialY = 0;
                }
                if (e.target === dragItem) {
                    active = true;
                }
            }

            function dragEnd(e) {
                initialX = currentX;
                initialY = currentY;

                active = false;
            }

            function drag(e) {
                if (active) {

                    e.preventDefault();

                    if (e.type === "touchmove") {
                      //  console.log("inside touchmove");
                        
                        currentX = e.touches[0].clientX - initialX;
                        currentY = e.touches[0].clientY - initialY;
                    } else {
                        console.log("inside mouse");
                        currentX = e.clientX - initialX;
                        currentY = e.clientY - initialY;
                    }

                    //console.log("initialX :"+initialX);
                    //console.log("e.clientX :"+e.clientX);


                    //currentX = e.clientX - initialX;
                    //currentY = e.clientY - initialY;




                    xOffset = currentX;
                    yOffset = currentY;

                    setTranslate(currentX, currentY, dragItem, e.clientY, initialY);





                }
            }

            function setTranslate(xPos, yPos, el, YValue, Yintial) {


                var outerDivElement1 = document.getElementById("container");
                var rect12356 = outerDivElement1.getBoundingClientRect();

                var height = dragItem.style.height;
                var width = dragItem.style.width;

                var compareVaue = document.getElementById("get");

                var originalHeight = compareVaue.style.height;
                var originalWidth = compareVaue.style.width;

                var rectOuter = outerContainer.getBoundingClientRect();
                
                var rect1 = dragItem.getBoundingClientRect();

                var leftValue = rect1.left - rectOuter.left;
               
                var topValue = rect1.top - rectOuter.top;

                var image = document.getElementById("cont");

                var finalValueToCropFrom = (leftValue * image.naturalWidth) / rectOuter.width;

                //console.log("image.width: " + image.width);

                var finalValueInVertical = (topValue * image.naturalHeight) / rectOuter.height;

                dataX.value = Math.round(finalValueToCropFrom);

                dataY.value = Math.round(finalValueInVertical);

                if (height === originalHeight) {
                    yPos = 0;

                    //console.log("xPos :" + xPos);
                    //console.log("Total Container Width :" + rect12356.width);
                    //console.log("Image Width :" + image.width);
                    //console.log("Drag Width :" + rect1.width);
                    var valueFromComapre;
                    var valueToComapre = xPos + rect1.width;
                    if (image.width < rect12356.width) {
                        valueFromComapre = image.width
                    }
                    else {
                        valueFromComapre = rect12356.width
                    }
                    if (xPos >= 0 && valueToComapre <= valueFromComapre) {
                        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
                    }
                }

                if (width === originalWidth) {
                    xPos = 0;
                    var valueFromComapre;
                    var valueToComapre = yPos + rect1.height;
                    if (image.height < rect12356.height) {
                        valueFromComapre = image.height
                    }
                    else {
                        valueFromComapre = rect12356.height
                    }
                    if (yPos >= 0 && valueToComapre <= valueFromComapre) {
                        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
                    }
                }
            }
        }, 150)
    }
}
window.GetCanvas = {
    finalCanvas: function (width, height) {


        var finalWidth = parseInt(width);
        var finalHeight = parseInt(height);


        var dataX = document.getElementById('dataX');

        var dataY = document.getElementById('dataY');


        //console.log(finalHeight);
        //console.log(finalWidth);
        //console.log(dataX.value);
        //console.log(dataY.value);









        var canvas = document.getElementById('canvas');

        canvas.width = canvas.scrollWidth;
        canvas.height = canvas.scrollHeight;

        var ctx = canvas.getContext('2d');


        var image = document.getElementById('cont');

        ctx.drawImage(image, dataX.value, dataY.value, width, height, 0, 0, width, height);
        
        
        setTimeout(function () {
           

        }, 2000);
        var srcCode1 = canvas.toDataURL();
        //console.log(srcCode1);
        document.querySelector("#outputImage1").src = srcCode1;
        
    }
}
window.Can = {
    toImage: function (dimension, fileName) {

        //console.log("This is fileName: " + fileName);

        var names = [];
        names = fileName.split('.');
        
        var ext = fileName.substr(fileName.lastIndexOf('.') + 1).toString();
        
        
        var name = names[0];

        var array = [];
        array = dimension.split(":");
 
        var image = document.getElementById("cont");
        var downloadImage = document.querySelector("#downloadLnk");
        var canvas = document.getElementById("canvas2");

        if (array[0] === "width") {
            const Max_Width = parseInt(array[1]);
            const scaleSize = Max_Width / image.naturalWidth;

            canvas.width = Max_Width;
            canvas.height = image.naturalHeight * scaleSize;

            const ctx = canvas.getContext("2d");

            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            //console.log("This is flieExt : " + ext);
            var srcCode;
            if (ext === "jpg")
            {
                //console.log("inside 1");
                srcCode = canvas.toDataURL("image/jpg");
            }
            else if (ext === "jpeg")
            {
                //console.log("inside 2");
                srcCode = canvas.toDataURL("image/jpg");
            }
            else
            {
               // console.log("inside 3");
                srcCode = canvas.toDataURL();
            }
            document.querySelector("#output").src = srcCode;
            downloadImage.href = document.querySelector("#output").src;
            downloadImage.setAttribute('download', fileName);
            return canvas.height.toString();
        }
        else if (array[0] === "height") {
            const Max_Height = parseInt(array[1]);
            const scaleSize = Max_Height / image.naturalHeight;
            canvas.height = Max_Height;
            canvas.width = image.naturalWidth * scaleSize;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

            //console.log("This is ext: " + ext);

            var srcCode;
            if (ext === "jpg") {
                srcCode = canvas.toDataURL("image/jpg");
            }
            else if (ext === "jpeg") {
                srcCode = canvas.toDataURL("image/jpeg");
            }
            else {
                srcCode = canvas.toDataURL();
            }
            document.querySelector("#output").src = srcCode;
            
            downloadImage.href = document.querySelector("#output").src;
            downloadImage.setAttribute('download', fileName);
            return canvas.width.toString();
        }
    }
}
window.Save = {
    canva: function () {
        document.querySelector("#downloadLnk").href= document.querySelector("#output").src;
    }
}
window.Clear = {
    canImage: function () {

        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var imageOutput1 = document.querySelector("#outputImage1");
        if (imageOutput1 === null) {

        }
        else {
            imageOutput1.src = "";
        }

        

        var dataX = document.getElementById('dataX');

        var dataY = document.getElementById('dataY');
        dataX.value = 0;
        dataY.value = 0;
    }
}
window.ImageUrl={
    modified: function () {
        var url = document.querySelector("#outputImage1");
        if (url.naturalWidth === 0) {
            return null;
        }
        return url.src.toString();
    }
}