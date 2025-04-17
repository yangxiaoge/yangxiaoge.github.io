var uscandata;
var iscandata;
var dscandata;
var randnum;
var isrotate;
var jznum;
var scandataarry=[];
function start() {
    if(document.getElementById("start").value=="开始") {
        document.getElementById("start").value = "停止";
        var code=$('#Code').val();
        var timein=$('#TimeIn').val();
        uscandata=$('#uScanData').val();
        dscandata=$('#dScanData').val();
        randnum=parseInt($('#RandNum').val());
        iscandata=$('#iScanData').val();
        isrotate=$('#IsRotate').val();
        for(var i=0;i<iscandata.length;i++){
            scandataarry.push(iscandata.slice(i,i+1));
        }
        if(code=="QRCode"){
            document.getElementById('barcode').style.display="none";
            interval = setInterval(createqrcode, timein);
        }
        else {
            document.getElementById('qrcode').innerHTML="";
            document.getElementById('barcode').style.display="";
            interval = setInterval(createbarcode, timein);
        }
    }
    else{
        clearInterval(interval);
        document.getElementById("start").value = "开始";
    }
}

function createbarcode() {
    var code=$('#Code').val();
    var widthcode=$('#WidthCode').val();
    var heightcode=$('#HeightCode').val();
    var linecolorcode=$('#LineColorCode').val();
    var backgroundcolorcode=$('#BackgroundColorCode').val();
    var scandata=uscandata+shuffle(scandataarry)+dscandata;
    JsBarcode("#barcode", scandata, {
        format:code,
        width:widthcode,
        height:heightcode,
        lineColor:linecolorcode,
        background:backgroundcolorcode,
        displayValue:true,
        fontSize:20
    })
    if(isrotate=="是") {
        $("#barcode").rotate(parseInt(Math.random() * 360));
    }
}

function createqrcode() {
    var widthcode=$('#WidthCode').val();
    var heightcode=$('#HeightCode').val();
    var linecolorcode=$('#LineColorCode').val();
    var backgroundcolorcode=$('#BackgroundColorCode').val();
    var scandata=uscandata+shuffle(scandataarry)+dscandata;
    document.getElementById('qrcode').innerHTML="";
    var qrcode = new QRCode('qrcode', {
        text: scandata,
        width: widthcode,
        height: heightcode,
        colorDark : linecolorcode,
        colorLight : backgroundcolorcode,
        correctLevel : QRCode.CorrectLevel.H
    });
    if(isrotate=="是") {
        $("#imgqrcode").rotate(parseInt(Math.random() * 360));
    }
}

function shuffle(arr) {
    var len = arr.length;
    var temp="";
    for(var i=0;i<randnum;i++){
        var index = parseInt(Math.random() * len);
        temp+=arr[index];
    }
    return temp;
}

function selectchange() {
    var code=$('#Code').val();
    if(code=="QRCode"){
        document.getElementById("tmkd").innerHTML="条码宽度";
        document.getElementById("WidthCode").value="200";
        document.getElementById("HeightCode").value="200";
    }
    else {
        document.getElementById("tmkd").innerHTML="条码线宽";
        document.getElementById("WidthCode").value="2";
        document.getElementById("HeightCode").value="120";
    }
}

function hide() {
    if(document.getElementById("hide").value=="收缩"){
        document.getElementById("hide").value="展开";
        document.getElementById("set").style.display="none";
    }
    else {
        document.getElementById("hide").value="收缩";
        document.getElementById("set").style.display="";
    }
}

function create() {
    if(document.getElementById("create").value=="矩阵") {
        document.getElementById("create").value = "停止";
        document.getElementById('qrcode').style.display = "none";
        var code = $('#Code').val();
        var timein = $('#TimeIn').val();
        jznum = $('#MatrixData').val();
        uscandata = $('#uScanData').val();
        dscandata = $('#dScanData').val();
        randnum = parseInt($('#RandNum').val());
        iscandata = $('#iScanData').val();
        isrotate = $('#IsRotate').val();
        for (var i = 0; i < iscandata.length; i++) {
            scandataarry.push(iscandata.slice(i, i + 1));
        }
        if (code == "QRCode") {
            alert("暂不支持二维");
        }
        else {
            document.getElementById('qrcode').innerHTML = "";
            document.getElementById('barcode').style.display = "";
            interval = setInterval(createfunc, timein);
        }
    }
    else{
        clearInterval(interval);
        document.getElementById("create").value = "矩阵";
    }
}

function createfunc() {
    var inum;
    if(jznum=="3*1"){
        inum=3;
    }
    if(jznum=="3*5"){
        inum=15;
    }
    if(jznum=="3*10"){
        inum=30;
    }
    if(jznum=="3*20"){
        inum=60;
    }
    for(var i=1;i<=inum;i++) {
        var code = $('#Code').val();
        var widthcode = $('#WidthCode').val();
        var heightcode = $('#HeightCode').val();
        var linecolorcode = $('#LineColorCode').val();
        var backgroundcolorcode = $('#BackgroundColorCode').val();
        var scandata = uscandata + shuffle(scandataarry) + dscandata;
        var temp="#s"+i;
        JsBarcode(temp, scandata, {
            format: code,
            width: widthcode,
            height: heightcode,
            lineColor: linecolorcode,
            background: backgroundcolorcode,
            displayValue: true,
            fontSize: 10
        })
    }
}

function imgclear() {
    var temp;
    for(var i=1;i<=60;i++){
        temp="s"+i;
        document.getElementById(temp).parentNode.removeChild(document.getElementById(temp));
    }
}