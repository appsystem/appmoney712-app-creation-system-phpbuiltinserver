/*AppMoney712 APP Creation System || 01 - AUG -2015 || Copyright LEE WAI KWOK(JSTRUST CONSULTANCY) || license - Revised MIT.*/
//$(document).on("pagebeforecreate",function(event){$.mobile.loading( "show", { text: "loading...", textVisible: true,theme: "a",html: ""});});    
//$(document).on("pagecreate",function(event){$.mobile.loading( "hide");}); 
 
var windowWidth = $(window).width();var windowHeight =  $(window).height(); var widw = windowWidth*0.88;var heigw = windowHeight*0.95; 


window.addEventListener('load', function (){FastClick.attach(document.body);if(document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1){var networkState = navigator.connection.type;if(networkState == Connection.NONE)alert("No Internet.未有上网!");};}, false); 

$(".ifrwidthp").css({'max-width':widw,'max-height':heigw}).find("img").css('max-height',heigw);

/*$(".ifrwidthp div.spinn").css('height',heigw);if($(window).height()>$(window).width()){var spin = 0.85;}else{var spin = 0.5;}$(".ifrwidthp div.spinn").css('width',widw*spin);*/
$(".ifrwidthps").width(windowWidth-8).height(windowHeight-10);
$(".ifrwidthpn").width(windowWidth).height(windowHeight).find("iframe").height(windowHeight);
$(".ifrwidth").height(heigw*0.85);$(".panel").height(heigw*0.85);
function caltm(t){var h = Math.floor(t/3600);if(h){h=(h < 10 ? '0'+h : h)+":";}else{h='';}var m = Math.floor(t/60); var s = Math.round(t - h*3600 - m*60);var duration = h+(m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s); return duration;}


//$('.vtnn').css('height',windowHeight);
$('.vtsn').css('height',windowHeight-35);
//$('.swiper-wrapper').css('height',windowHeight);

//$('.divp').css('height',windowHeight);

//(function($) {
$menupanel = $('#menupanel');
$menupanel.find('ul.menupanel').css('max-height',windowHeight*0.85);
$menupanel.find(".appmenu").click(function (event){event.preventDefault();
		var $this = $(this);
		var appnbr = $this.attr('data-nbr');
		var appto = $menupanel.data('data-to');
		var index = $("#appageone").attr('data-index');
		var appmenuindex = $(".appmenu").index(this);
		var indexprev = $menupanel.data('data-toindex');
		if((appnbr!=appto && appto) || (!appto && appnbr != index)){
			$menupanel.data('data-to',appnbr).data('data-toindex',appmenuindex);
			var popn = $this.attr('data-pop');
			if(popn){$("#"+popn).popup('close');}else{var topprev = $menupanel.data('topmenupopup');if(topprev!='undefined')$(".topmenupopup").eq(topprev).removeClass('ui-icon-popup').addClass('ui-icon-plus');}
			$menupanel=$("#menupanel");
			$menupanel.panel('close');
			$(".appmenu").attr('data-to',appnbr);
			if(!appto){$("#p"+index).css({'z-index':'auto','opacity':'0'});}else{$("#p"+appto).css({'z-index':'auto'});}		
			$("#p"+appnbr).css({'z-index':'1','opacity':'1'}).addClass('animated zoomInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
				if(appto)$("#p"+appto).css({'z-index':'-1','opacity':'0'}).removeClass('animated zoomInUp');
			});
			if(indexprev!='undefined')$(".appmenu").eq(indexprev).removeClass('ui-icon-nav').addClass('ui-icon-carat-r');
			$this.removeClass('ui-icon-carat-r').addClass('ui-icon-nav');			
		}
});



$menupanel.find(".ui-icon-plus").click(function (event){
			var $this = $(this);
			var $popn = $($this.attr('href'));
			var topmenuindex = $(".topmenupopup").index(this);
			var indexprev = $menupanel.data('topmenupopup');
			$menupanel.data('topmenupopup',topmenuindex);
			if(indexprev!='undefined')$(".topmenupopup").eq(indexprev).removeClass('ui-icon-popup').addClass('ui-icon-plus');
			$this.removeClass('ui-icon-plus').addClass('ui-icon-popup');
});
//});//(function($) {

function hgt(hgt,vlu,windowHeight){
$('#'+hgt).on('click',function(event){
event.preventDefault();var $this = $(this);
var $hgtdiv = $('#'+$this.attr('data-pop'));
var datavlu = $this.attr('data-vlu');
var pophgt = windowHeight*vlu/100;
if(datavlu){
	$this.removeClass('ui-icon-carat-u').addClass('ui-icon-carat-d');
	$hgtdiv.height(windowHeight*parseInt($this.attr('data-hgt'))/100);
	$this.attr('data-vlu','');
;}else{
	$this.removeClass('ui-icon-carat-d').addClass('ui-icon-carat-u');	
	$hgtdiv.height(pophgt);	 $this.attr('data-vlu',1);
;}	
});
}

$(document).on('click', '.popn',function (event) {
	var rpopup = sessionStorage.getItem('imgspopup');
	if(rpopup){
		rpopups = $(this).closest("div").attr("id");
		$('#'+rpopups).one( "popupafterclose", function( event, ui ){sessionStorage.setItem('imgspopup','');if(rpopup)$('#'+rpopup).popup('open',"transition","pop");});
	;}

;});
$(document).on('click', '.imgspop',function (event) {event.preventDefault();
	var $this = $(this);
	var spinurl = $this.attr('data-url');var spinpop = '';//var spinpop = $this.attr('data-pop');
	var imgspopup = $this.attr('data-popup');//if(imgspopup){$('#'+imgspopup).popup('close');}else{imgspopup='';}
	var imgsrpopup = $this.attr('data-rpopup');
	var imgspopuptm = $this.attr('data-popuptm');

	if(spinurl){
	//if(spinpop && spinurl){
		var ap ='';
		
		if(spinurl.indexOf('http://') === -1 && spinurl.indexOf('https://') === -1 && document.URL.indexOf('pj=') !== -1){
			var pjvln = window.location.href.split("?pj=");
			if(pjvln[1]){var pjs = pjvln[1].split("&ap=");ap = '../panel/'+pjs[0].replace('#','')+'/';}
			else{pjvln = window.location.href.split("pj=");var pjs = pjvln[1].split("&");ap = '../panel/'+pjs[0].replace('#','')+'/';} 
		;}



		if(spinurl.indexOf('[openapp]')!==-1 && document.URL.indexOf('http') == -1){ 
			spinurl = spinurl.replace('[openapp]','');
			handleDocumentWithURL(
 			 function() {console.log('success成功');},
  			 function(error) {console.log('error'); if(error == 53)console.log('No APP for this file type.未有合适应用。');}, 
 		     spinurl
		    );	
			
		;}else if(spinurl.indexOf('[openbrowser]')!==-1 && document.URL.indexOf('http') == -1){ 
				 spinurl = spinurl.replace('[openbrowser]','');
				 spinurl = encodeURI(spinurl);
				 window.open(spinurl, '_blank', 'location=yes,closebuttoncaption=back');			
		;}else if((spinurl.indexOf('whatsapp://')!==-1 || spinurl.indexOf('[openURL]')!==-1) && document.URL.indexOf('http') == -1){
				
			//if(navigator.userAgent.match(/(iPod|iPhone|iPad)/)){
			 	// window.open(encodeURI(spinurl));
			 //;}else if(spinurl.indexOf('whatsapp://')!==-1){
				// var sp = spinurl.split('abid=');
				// cordova.plugins.Whatsapp.send(sp[1]);
			// ;}	
			if(spinurl.indexOf('whatsapp://')!==-1 && navigator.userAgent.match(/(Android)/)){
				var sp = spinurl.split('abid=');
				cordova.plugins.Whatsapp.send(sp[1]);
			;}else{	window.open(encodeURI(spinurl));}	
			
		;}else  if(spinurl.indexOf('player.vimeo.com')!==-1 || spinurl.indexOf('youtu.be')!==-1 || spinurl.indexOf('v.qq.com')!==-1){
			/*! jQuery Mobile 1.4.4 |  <> 2014-09-12T16:43:26Z | (c) 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */
			$( '#'+spinpop+'pVideo iframe' ).attr( "width", 0 ).attr( "height", "auto" );
			$( '#'+spinpop+'pVideo' ).on({
				popupbeforeposition: function() {
           		 var wdWidth = $( window ).width();
           		 var wdHeight = $( window ).height();
            	 var sizewidth = '';var sizeheight = '';
			
				if(wdWidth > wdHeight){sizeheight = wdHeight*0.85;sizewidth = sizeheight*498/298;}
				if(wdHeight > wdWidth){sizewidth = wdWidth*0.85; sizeheight = sizewidth*298/498;}

				
           		var size = scale(sizewidth, sizeheight, 1, 1 ),
                wdh = size.width,
                hgt = size.height;
           		 $( '#'+spinpop+'pVideo iframe').attr( "width", wdh ).attr( "height", hgt ).attr( "src", spinurl );
       		 	},
        		popupafterclose: function(){$( '#'+spinpop+'pVideo iframe' ).attr( "width", 0 ).attr( "height", 0 ).attr( "src", '' );}
				});
				if(imgspopup){$('#'+imgspopup).popup('close').one( "popupafterclose", function( event, ui ){$('#'+spinpop+'pVideo').popup('open',"transition","pop");});}
				else{$('#'+spinpop+'pVideo').popup('open',"transition","pop");} 
				//if(imgspopup){if(imgspopup){$('#'+imgspopup).popup('close');}else{imgspopup='';}setTimeout(function(){$('#'+spinpop+'pVideo').popup('open');},880);}else{$('#'+spinpop+'pVideo').popup('open');} 
			
		;}else if(spinurl.indexOf('.html') != -1 || spinurl.indexOf('.htm') != -1 || spinurl.indexOf('.php') != -1 || spinurl.indexOf('.asp') != -1){	if(imgsrpopup)sessionStorage.setItem('imgspopup',imgspopup);
			if(ap){if(spinurl.indexOf('.html') != -1)spinurl = ap+spinurl;}
			var $ifrspop = $('#'+spinpop+'ifrspop');
			var $ifrspopiframe = $ifrspop.find('iframe');
			var $ifrspopdiv = $ifrspop.find('div');
			
			$ifrspopdiv.show();
			if(imgspopup && !imgspopuptm){$('#'+imgspopup).popup('close').one( "popupafterclose", function( event, ui ){$ifrspop.popup('open',"transition","pop");});}
			else{$ifrspop.popup('open',"transition","pop");} 
			$ifrspopiframe.load( spinurl, function() {
			$ifrspopiframe.attr('src',spinurl);
			$ifrspopdiv.hide(); 
			if(imgspopup && imgspopuptm){$('#'+imgspopup).popup('close');setTimeout(function(){$ifrspop.popup('open');},880);}else{$ifrspop.popup('open');} 
			});
		;}else if(spinurl.indexOf('.mp3') != -1 || spinurl.indexOf('.wav') != -1){	if(imgsrpopup)sessionStorage.setItem('imgspopup',imgspopup);
			
			var $ifrspop = $('#'+spinpop+'pAudio');
			var $ifrspopiframe = $ifrspop.find('audio');
			var $ifrspopdiv = $ifrspop.find('div.ifrspinn');			
			$ifrspopdiv.show();
			if(imgspopup){$('#'+imgspopup).popup('close').one( "popupafterclose", function( event, ui ){$ifrspop.popup('open',"transition","pop");});}else{$ifrspop.popup('open',"transition","pop");} 
			$ifrspopiframe.attr('src','');	
			$ifrspopiframe.trigger('pause');$('#'+spinpop+'audtn').text('');$('#'+spinpop+'audur').text('');$('#'+spinpop+'playaudion').attr('data-vlu','').find('img').attr('src','css/images/sound.svg');
			$ifrspopiframe.load( spinurl, function() {										   
			$ifrspopiframe.attr('src',spinurl);	
			$ifrspopdiv.hide(); 
			//if(imgspopup){setTimeout(function(){$ifrspop.popup('open');},880);}else{$ifrspop.popup('open');} 
			});
		;}else{		if(imgsrpopup)sessionStorage.setItem('imgspopup',imgspopup);
			var spinImg = new Image();
			var $imgspop = $('#'+spinpop+'imgspop');
			var $imgspopdiv = $imgspop.find('div.ifrspinn');
			var $imgspopimg = $imgspop.find('img');
			if(spinurl.indexOf('[1].') == -1){var imgnpop = '';}else{var imgnpop = 1;}
			
			if(spinurl.indexOf('http') == -1 && spinurl.indexOf('images/') == -1)spinurl = 'images/'+spinurl;

 			if(spinurl.indexOf('..') == -1){spinImg.src = ap+spinurl;}else{spinImg.src = spinurl;}	
			$imgspopdiv.show();
			spinImg.onload = function(){
			var picwidth = this.width;  var picheight = this.height;  var picratio = picheight/picwidth;
			if(widw > heigw){
				if(picheight > picwidth){
					if(imgnpop || picratio==1){var wdh = widw;var hgt = widw*picratio;}
					else{var wdh = heigw/picratio;var hgt = heigw;if(wdh > widw){ var hgt = heigw*widw/wdh;var wdh = wdh*widw/wdh};}			
					$imgspop.find('div.imgspop').width(wdh);
					if(imgnpop){$imgspop.find('div.imgspop').height(heigw).css('overflow-y','auto').css('overflow-x','hidden');}
					else{$imgspop.find('div.imgspop').height(hgt).css('overflow-y','hidden').css('overflow-x','hidden');}
				;}else{
					if(imgnpop || picratio==1){var wdh = heigw/picratio;var hgt = heigw;}
					else{var wdh = widw;var hgt = widw*picratio;if(hgt > heigw){var wdh = widw*heigw/hgt;var hgt = hgt*heigw/hgt;};}
					$imgspop.find('div.imgspop').height(hgt);
					if(imgnpop){$imgspop.find('div.imgspop').width(widw).css('overflow-y','hidden').css('overflow-x','auto');}
					else{$imgspop.find('div.imgspop').width(wdh).css('overflow-y','hidden').css('overflow-x','hidden');}
				}
			}else{
				if(picwidth > picheight){
					if(imgnpop || picratio==1){var wdh = heigw/picratio;var hgt = heigw;}
					else{var wdh = widw;var hgt = widw*picratio;if(hgt > heigw){var wdh = widw*heigw/hgt;var hgt = hgt*heigw/hgt;};}	
					$imgspop.find('div.imgspop').height(hgt);
					if(imgnpop){$imgspop.find('div.imgspop').width(widw).css('overflow-y','hidden').css('overflow-x','auto');}
					else{$imgspop.find('div.imgspop').width(wdh).css('overflow-y','hidden').css('overflow-x','hidden');}
				;}else{
					if(imgnpop || picratio==1){var wdh = widw;var hgt = widw*picratio;}
					else{var wdh = heigw/picratio;var hgt = heigw;if(wdh > widw){var wdh = wdh*widw/wdh;var hgt = heigw*widw/wdh;};}	
					$imgspop.find('div.imgspop').width(wdh);
					if(imgnpop){$imgspop.find('div.imgspop').height(heigw).css('overflow-y','auto').css('overflow-x','hidden');}
					else{$imgspop.find('div.imgspop').height(hgt).css('overflow-y','hidden').css('overflow-x','hidden');}
				}
			;}
			if(imgspopup){$('#'+imgspopup).popup('close').one( "popupafterclose", function( event, ui ){$imgspop.popup('open');});}else{$imgspop.popup('open');} 
			$imgspopimg.attr("width", wdh).attr("height", hgt).attr('src',spinImg.src);$imgspopdiv.hide();
			//if(imgspopup){setTimeout(function(){$imgspop.popup('open');},880);}else{$imgspop.popup('open');} 
			;} 
		;}
	;} 
});	









function scale( width, height, padding, border ) {
/*! jQuery Mobile 1.4.4 |  <> 2014-09-12T16:43:26Z | (c) 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */
        var scrWidth = $( window ).width() - 2,
            scrHeight = $( window ).height() - 2,
            ifrPadding = 1 * padding,
            ifrBorder = 2 * border,
            ifrWidth = width + ifrPadding + ifrBorder,
            ifrHeight = height + ifrPadding + ifrBorder,
            hgt, wdh;
        if ( ifrWidth < scrWidth && ifrHeight < scrHeight ) {
            wdh = ifrWidth;
            hgt = ifrHeight;
        } else if ( ( ifrWidth / scrWidth ) > ( ifrHeight / scrHeight ) ) {
            wdh = scrWidth;
            hgt = ( scrWidth / ifrWidth ) * ifrHeight;
        } else {
            hgt = scrHeight;
            wdh = ( scrHeight / ifrHeight ) * ifrWidth;
        }
        return {
            'width': wdh - ( ifrPadding + ifrBorder ),
            'height': hgt - ( ifrPadding + ifrBorder )
        };
};



function vght(pgn,pj){
	var vght = sessionStorage.getItem(pgn+"vght");
	if(vght){vght = JSON.parse(vght);var ap = '';
		for(var i=0; i < vght.length; i++) {
			if(vght[i][1].indexOf('http://') === -1 && vght[i][1].indexOf('https://') === -1 && document.URL.indexOf('pj=') !== -1){
			//pj = pj.replace('#','');
			ap = '../panel/'+pj+'/';}
			else{ap = '';} 
			if(vght[i][1].indexOf('[xy]')!=-1){$('#'+pgn+'vnts'+vght[i][0]).closest('.swiper-slide').css('background-image','url('+ap+vght[i][1])+')';}
		    else if(vght[i][1].indexOf('rgb(')!=-1 || vght[i][1].indexOf('rgba(')!=-1  || vght[i][1].indexOf('#')!=-1){$('#'+pgn+'vnts'+vght[i][0]).closest('.swiper-slide').css('background',vght[i][1]);}
			else{$('#'+pgn+'vnts'+vght[i][0]).closest('.swiper-slide').css({'background-image':'url('+ap+vght[i][1]+')','background-size':'100%','background-repeat':'repeat-y'});}
		}	
	}else{vght='';}
};

if(navigator.userAgent.match(/(Android)/)) {
   $('#toposndiv').hide();
   $('#volmndiv').hide();
}else if(navigator.userAgent.match(/(iPhone|iPad|iPod)/)) {
   $('#toposn').hide();
   $('#volmn').hide();
   $('#volmndiv').hide();
}else{
   $('#toposn').hide();
   $('#volmn').hide();
;}

 document.getElementById("audsn").addEventListener('ended', function() {
		$('#playaudion').attr('data-vlu','').find('img').attr('src','css/images/sound.svg');
		 $('#audtn').text('00:00');
 });
 document.getElementById("audsn").addEventListener("timeupdate",function(){		
		var time = caltm(Math.round(document.getElementById("audsn").currentTime));
   		$('#audtn').text(time);		
 });

			
	var istouchs = 'ontouchstart' in window;
	var popactions = istouchs ? 'touchend':'mouseup';
	
document.getElementById("toposn").addEventListener(popactions,function(){	
		$("#audsn").prop("currentTime",$('#toposn').val()*document.getElementById("audsn").duration);
});

document.getElementById("volmn").addEventListener(popactions,function(){		
		var volume = $('#volmn').val();
		$("#audsn").prop("volume",volume);
});

document.getElementById("toposndiv").addEventListener(popactions,function(){	
		$("#audsn").prop("currentTime",$('#toposnapp').val()*document.getElementById("audsn").duration);
});

document.getElementById("volmndiv").addEventListener(popactions,function(){		
		var volume = $('#volmnapp').val();
		$("#audsn").prop("volume",volume);
});



$('#playaudion').on('click',function (event){
	event.preventDefault();
		document.getElementById("audsn").addEventListener("timeupdate",function(){		
		time = caltm(Math.round(document.getElementById("#audsn").currentTime));
   		 $('#audtn').text(time);		
		});
	
	$this = $(this);
	var vlu = $this.attr('data-vlu');	
	if(vlu){
		$this.find('img').attr('src','css/images/sound.svg');
		$("#audsn").trigger('pause');
		$this.attr('data-vlu','');
	}else{
		$("#audsn").trigger('play');dur = document.getElementById("audsn").duration;
		if(dur)$('#audur').text('['+caltm(dur)+']');
		$this.attr('data-vlu',1).find('img').attr('src','css/images/[pause]sound.svg');	
	;}
;})	


function webaudio(pgn,ap,nbr){

 var audio = pgn+"auds"+ap+'n'+nbr;
 var $audio = $("#"+audio);
 var $tp = $('#'+pgn+'topos'+ap+'n'+nbr);
 var $vol = $('#'+pgn+'volm'+ap+'n'+nbr);

 
if(navigator.userAgent.match(/(Android)/)) {
   $('#'+pgn+'toposdiv'+ap+'n'+nbr).hide();
   $('#'+pgn+'volmdiv'+ap+'n'+nbr).hide();
}else if(navigator.userAgent.match(/(iPhone|iPad|iPod)/)) {
   $tp.hide();
   $('#'+pgn+'toposdiv'+ap+'n'+nbr).hide();
   $('#'+pgn+'volmdiv'+ap+'n'+nbr).hide();
}else{
   $tp.hide();
   $vol.hide();
;}
 
 document.getElementById(audio).addEventListener('ended', function() {
		$('#'+pgn+'playaudio'+ap+'n'+nbr).attr('data-vlu','').find('img').attr('src','css/images/sound.svg');
		 $("#"+pgn+"audt"+ap+'n'+nbr).text('00:00');
 });
		
var istouchs = 'ontouchstart' in window;
var popactions = istouchs ? 'touchend':'mouseup';
	
document.getElementById(pgn+'topos'+ap+'n'+nbr).addEventListener(popactions,function(){	
		$audio.prop("currentTime",$tp.val()*document.getElementById(pgn+"auds"+ap+'n'+nbr).duration);
});

document.getElementById(pgn+'volm'+ap+'n'+nbr).addEventListener(popactions,function(){		
		var volume = $vol.val();
		$audio.prop("volume",volume);
});

document.getElementById(pgn+'topos'+ap+'ndiv'+nbr).addEventListener(popactions,function(){	
		$audio.prop("currentTime",$('#'+pgn+'topos'+ap+'napp'+nbr).val()*document.getElementById(pgn+"auds"+ap+'n'+nbr).duration);
});

document.getElementById(pgn+'volm'+ap+'ndiv'+nbr).addEventListener(popactions,function(){		
		var volume = $('#'+pgn+'volm'+ap+'napp'+nbr).val();
		$audio.prop("volume",volume);
});

$('#'+pgn+'playaudio'+ap+'nbtn'+nbr).on('click',function (event){
		var vmp = $(this).attr('data-vmp');		var vwav = $(this).attr('data-vwa');
		
		if(vmp && (navigator.userAgent.search("MSIE") >= 0 || (navigator.userAgent.toLowerCase().indexOf("windows nt")>-1 && navigator.userAgent.toLowerCase().indexOf("touch") != -1))){
		$.mobile.loading( "show", { text: "loading...", textVisible: true,theme: "a",html: ""});
		$("#"+audio).load( vmp, function() {										   
			$("#"+audio).attr('src',vmp);	
			$.mobile.loading( "hide");
		});	
		;}else if(vwav){
		$.mobile.loading( "show", { text: "loading...", textVisible: true,theme: "a",html: ""});
		$("#"+audio).load( vwav, function() {										   
			$("#"+audio).attr('src',vwav);	
			$.mobile.loading( "hide");
		});	
		;}
});

$('#'+pgn+'playaudio'+ap+'n'+nbr).on('click',function (event){
	event.preventDefault();

	function caltm(t){var h = Math.floor(t/3600);if(h){h=(h < 10 ? '0'+h : h)+":";}else{h='';}var m = Math.floor(t/60); var s = Math.round(t - h*3600 - m*60);var duration = h+(m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s); return duration;}

	function audiotime(attr,pgn,ap){		
		document.getElementById(attr).addEventListener("timeupdate",function(){		
		var time = caltm(Math.round(document.getElementById(attr).currentTime));
   		 $("#"+pgn+"audt"+ap+'n'+nbr).text(time);		
		});
	}
	$this = $(this);
	var vlu = $this.attr('data-vlu');	
	if(vlu){
		$this.find('img').attr('src','css/images/sound.svg');
		$("#"+audio).trigger('pause');
		$this.attr('data-vlu','');
	}else{
		$("#"+audio).trigger('play');dur = document.getElementById(audio).duration;
		if(dur)$('#'+pgn+'audur').text('['+caltm(dur)+']');
		$this.attr('data-vlu',1).find('img').attr('src','css/images/[pause]sound.svg');
		audiotime(audio,pgn,ap);
	
	;}
;})	

}

function qrutf(str) {  
   var result = "";var  word;  
  for(var i = 0; i < str.length; i++){  
    word = str.charCodeAt(i);  
  	if((word >= 0x0001) && (word <= 0x007F)){  
       result += str.charAt(i);  
  	}else if (word > 0x07FF){  
       result += String.fromCharCode(0xE0 | ((word >> 12) & 0x0F)); result += String.fromCharCode(0x80 | ((word >>  6) & 0x3F)); result += String.fromCharCode(0x80 | ((word >>  0) & 0x3F));  
    }else {  
       result += String.fromCharCode(0xC0 | ((word >>  6) & 0x1F)); result += String.fromCharCode(0x80 | ((word >>  0) & 0x3F));  
    }  
  } return result;  
}  

function swebaudio(pgn,ap,nbr){
 var bgn1 ='';
 var bgns1 = '';
 audio = pgn+"auds"+ap+'n'+nbr;
 document.getElementById(audio).addEventListener("timeupdate",function(){
	$("#"+pgn+"audt"+ap+'n'+nbr).text(caltm(Math.round(document.getElementById(audio).currentTime))); 
	if(parseInt(document.getElementById(audio).currentTime,10)==0)bgn1++; 
	if(parseInt(document.getElementById(audio).currentTime,10)>0 && !bgns1)bgns1=bgn1;
	if(bgns1 && bgn1 > bgns1){$("#"+audio).trigger('pause');bgn1 ='';bgns1 = '';}
 	});
}

function popupicsize(pgn,pn,sizeWidth,sizeHeight,windowWidth,windowHeight) {
	var sizewidw = sizeWidth*0.95;var sizeheigw = sizeHeight*0.95;var widw = windowWidth*0.95;var heigw = windowHeight*0.95;
	if( sizewidw < widw && sizeheigw < heigw && sizeheigw && sizewidw){$('.'+pgn+'owlwidth'+pn).width(sizewidw).height(sizeheigw);$('#'+pgn+'swiper'+pn).find(".swiper-wrapper").height(sizeheigw);}
	else if( ( sizewidw / widw ) > ( sizeheigw / heigw ) && sizeheigw && sizewidw){
		$('.'+pgn+'owlwidth'+pn).width(widw).height(( widw / sizewidw ) * sizeheigw);
		$('#'+pgn+'swiper'+pn).find(".swiper-wrapper").height(( widw / sizewidw ) * sizeheigw);}
	else{$('.'+pgn+'owlwidth'+pn).width(( heigw / sizeheigw ) * sizewidw).height(heigw);$('#'+pgn+'swiper'+pn).find(".swiper-wrapper").height(heigw);}	
};
//$(document).ready(function(){$("#ifrspinn").hide();}); 