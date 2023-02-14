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
    if(img.classList.contains('touchZoom')){
        let imgName = get_imgName(img.src)
        var body = document.getElementsByTagName("body")[0];
        let div = document.createElement('div');
        div.id=imgName+"_div";
        body.appendChild(div);
        console.log("CANVAS CREATED");
        var canvas = document.createElement('canvas');
        canvas.id = imgName;
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.style.zIndex = 8;
        canvas.style.position = "absolute";
        div.appendChild(canvas);
        var gesturableImg = new ImgTouchCanvas({
            canvas: document.getElementById(canvas.id),
            path: get_imgSrcFormatted(img.src)});
    }
    
   /*  body.appendChild(canvas);   */
}

function img_find() {
    var imgs = document.getElementsByTagName("img");
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
    str = imgSrc.replace('https://fredyguzman-ksquare.github.io/','');
    return str;
}
function get_imgName(imgSrc) {
    let str = get_imgSrcFormatted(imgSrc);
    print("get_imgSrcFormatted: " + str);
    str = str.replace('/imgs/','');
    print("/imgs/: " + str);
    str = str.replace('.jpg','');
    print(".jpg: " + str);
    str = str.replace('ImageZoom','')
    print("ImageZoom: " + str);
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
