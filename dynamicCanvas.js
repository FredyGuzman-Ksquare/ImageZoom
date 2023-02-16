/* (function() {
    var canvas = document.createElement('canvas');
    canvas.id = "CursorLayer";
    canvas.width = 1224;
    canvas.height = 768;
    canvas.style.zIndex = 8;
    canvas.style.position = "absolute";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);
}).call(this); */
/* document.getElementById("butt").onclick = function() {  
    createCanvas()  
    };   */
function createCanvas(img) {
    var isTouchScreen = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    if(img.classList.contains('touchZoom')&&isTouchScreen === true){
        img.id=get_imgName(img.src)+"_id";
        console.log("img id: " +img.id);
        //let zoomImage = img.id;
        let imgName = get_imgName(img.src);
        let body = document.body;
        var index = Array.prototype.indexOf.call(body.childNodes, element);
        console.log("The position of the element is: " + index)
        let div = document.createElement('div');
        div.id=imgName+"_div";
        //body.appendChild(div);
        console.log("CANVAS CREATED");
        var canvas = document.createElement('canvas');
        canvas.id = imgName;
        canvas.width = img.width;
        canvas.height = img.height;
        div.appendChild(canvas);
        div.insertAdjacentElement('afterend', img);
        var gesturableImg = new ImgTouchCanvas({
            canvas: document.getElementById(canvas.id),
            path: img.src});
    }
    
   /*  body.appendChild(canvas);   */
}

function img_find() {
    var imgs = document.querySelectorAll("img.touchZoom");
    var imgSrcs = [];

    for (var i = 0; i < imgs.length; i++) {
        /* hideImagesbyClassName(imgs[i]); */
        createCanvas(imgs[i]);
        console.log(imgs[i].width);
        imgSrcs.push(get_imgSrcFormatted(imgs[i].src));
    }

    for (var i = 0; i < imgs.length; i++) {
        console.log(imgSrcs[i]);
    }

    return imgSrcs;
}

function get_imgSrcFormatted(imgSrc) {
    str = imgSrc.replace('https://fredyguzman-ksquare.github.io/ImageZoom','');
    return str;
}
function get_imgName(imgSrc) {
    let str = get_imgSrcFormatted(imgSrc);
    console.log("get_imgSrcFormatted: " + str);
    str = str.replace('/imgs/','');
    console.log("/imgs/: " + str);
    str = str.replace('.jpg','');
    console.log(".jpg: " + str);
    str = str.replace('ImageZoom','');
    console.log("ImageZoom: " + str);
    return str;
}
/* function createCanvas(img) {
    if(img.classList.contains('touchZoom')){
        img.setAttribute("hidden",true);
    }
} */

/* function hideImagesbyClassName(img) {
    if(img.classList.contains('touchZoom')){
        img.setAttribute("hidden",true);
    }
} */
window.addEventListener("load", function(event) {
    img_find();
  });
