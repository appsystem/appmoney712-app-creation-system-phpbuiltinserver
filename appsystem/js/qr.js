/*AppMoney712 APP Creation System || 01 - AUG -2015 || Copyright LEE WAI KWOK(JSTRUST CONSULTANCY) || license - Revised MIT.*/
function qrs(pgn,pn,windowHeight){  
var sqrspgn = localStorage.getItem(pgn+"sqrspgn"+pn);
	var htmlv ='';var htmln ='';var wrthtmlv ='';

	if(sqrspgn){
	sqrspgn = JSON.parse(sqrspgn);
	var sqrlgth = sqrspgn.length;
	for(var i=sqrlgth-1;i >= 0; i--){
		wrthtmlv += '<a href="#" data-qr="'+sqrspgn[i]+'" data-nbr="'+i+'" style="border:none;white-space:normal;" class="'+pgn+'vwifrhtmv'+pn+' ui-btn ui-btn-a ui-btn-icon-left ui-icon-edit">'+sqrspgn[i]+'</a>';
		htmlv += '<a href="#" data-qr="'+sqrspgn[i]+'" style="border:none;white-space:normal;" class="'+pgn+'vwifrhtm'+pn+' ui-btn ui-btn-a ui-btn-icon-left ui-icon-qr">'+sqrspgn[i]+'</a>';
		htmln+= '<a href="#" data-qr="'+sqrspgn[i]+'" style="border:none;width:80%;white-space:normal;" class="'+pgn+'wvwifrhtm'+pn+' ui-btn ui-btn-a ui-btn-icon-left ui-icon-qr">'+(i+1)+'. '+sqrspgn[i]+'</a>';
		if(sqrlgth==1)htmln+='<hr>';
	;};}

var $wqrpgnvlns = $('#'+pgn+'wqrpgnvlns'+pn);
var qrdts = $wqrpgnvlns.attr('data-qrdts'); if(!qrdts)qrdts='';



var $qrpgn = $('#'+pgn+'qrpgn'+pn);

var $wqrpgn = $('#'+pgn+'wqrpgn'+pn);
var qrsdt = $wqrpgn.attr('data-qrsdt'); if(!qrsdt)qrsdt='';

	var $wrtqrpgnvlus = $('#'+pgn+'wrtqrpgnvlus'+pn);
	var $wqrpgnvlus = $('#'+pgn+'wqrpgnvlus'+pn);
	var $qrpgnvlus = $('#'+pgn+'qrpgnvlus'+pn);
	//var $windowheight = $(window).height();
	if(htmlv){
		$wrtqrpgnvlus.html('');
		$wrtqrpgnvlus.append(wrthtmlv);
		$wqrpgnvlus.append(qrsdt+htmln);$qrpgnvlus.html(qrdts+htmlv);
	;}

$('#'+pgn+'wqrpgnvlu'+pn).height(windowHeight*0.85);
//$('#'+pgn+'wrtwqrpgnvlns'+pn).height(windowHeight*0.75);
$('#'+pgn+'wqrpgnvln'+pn).height(windowHeight*0.7);
$wqrpgnvlus.css('max-height',windowHeight*0.2);


var $sqrspgnvlus = $('#'+pgn+'sqrspgnvlus'+pn);
var $qrspgnvlus = $('#'+pgn+'qrspgnvlus'+pn);

$wqrpgnvlns.height(windowHeight*0.7); 
$wrtqrpgnvlus.css('max-height',windowHeight*0.2);
$sqrspgnvlus.css('max-height',windowHeight*0.5);
$qrspgnvlus.css('max-height',windowHeight*0.58);
$qrpgnvlus.css('max-height',windowHeight*0.22);

//if($(window).width()<500){
	//$qrspgnvlus.find('ul').filterable("destroy");
	//$sqrspgnvlus.find('ul').filterable("destroy");
//}
	
$('#'+pgn+'sqrs'+pn).click(function (event){
	event.preventDefault();	
	$('#'+pgn+'qrspgn'+pn).data("qrspgn",'');
	$('#'+pgn+'qrsvlu'+pn).val('');
	$('#'+pgn+'qrpgnvlu'+pn).val('');	
	$('#'+pgn+'wqrpgnvluhns'+pn).html('');	
	$('#'+pgn+'qrspgn'+pn).data("wvwifrslt",'');	
});

$('#'+pgn+'sqrsx'+pn).click(function (event){
	event.preventDefault();	
	$('#'+pgn+'qrsvlu'+pn).val('');
	$('#'+pgn+'qrpgnvlu'+pn).val('');	
});


$('#'+pgn+'qrspgn'+pn).click(function (event){
	event.preventDefault();	
	$(this).data("qrspgn",'');
	$('#'+pgn+'qrpgnvlu'+pn).val('');		
	$('#'+pgn+'qrsvlu'+pn).val('');
	$('#'+pgn+'wqrpgnvluhns'+pn).html('');	
	$('#'+pgn+'qrspgn'+pn).data("wvwifrslt",'');	
});

$('#'+pgn+'sqrspgn'+pn).click(function (event){
	event.preventDefault();	
	var qrpgnvlu = $('#'+pgn+'qrpgnvlu'+pn).val();
	var qrpgn = $('#'+pgn+'qrspgn'+pn).data("qrspgn");
	if(qrpgnvlu || qrpgn){
	var sqrspgn = localStorage.getItem(pgn+"sqrspgn"+pn);	
	if(sqrspgn)sqrspgn = JSON.parse(sqrspgn);
	if(qrpgn){
		if(qrpgnvlu){sqrspgn.splice(qrpgn,1,qrpgnvlu);}
		else{sqrspgn.splice(qrpgn,1);$('#'+pgn+'qrspgn'+pn).data("qrspgn",'');}			
	;}else{
		if(sqrspgn){sqrspgn.push(qrpgnvlu);}
		else{sqrspgn = [];sqrspgn[0] = qrpgnvlu;}	
	;}
	if(sqrspgn)localStorage.setItem(pgn+"sqrspgn"+pn,JSON.stringify(sqrspgn));
	var sqrspgn = localStorage.getItem(pgn+"sqrspgn"+pn);
	if(sqrspgn)sqrspgn = JSON.parse(sqrspgn);	
	var htmlv ='';var htmlvn ='';var wrthtmlv ='';var btntheme ='' ;
	for(var i=sqrspgn.length-1;i >= 0; i--){
		if(qrpgn){
			if(i==qrpgn){btntheme = 'a';}else{btntheme = 'f';}
		}else{
			if(i==sqrspgn){btntheme = 'a';}else{btntheme = 'f';}		
		;}		
		wrthtmlv += '<a href="#" data-qr="'+sqrspgn[i]+'" data-nbr="'+i+'" style="border:none;white-space:normal;" class="'+pgn+'vwifrhtmv'+pn+' ui-btn ui-btn-'+btntheme+' ui-btn-icon-left ui-icon-edit">'+sqrspgn[i]+'</a>';	
		htmlvn += '<div data-qr="'+sqrspgn[i]+'" style="border:none;white-space:normal;" class="'+pgn+'vwifrhtmv'+pn+' ui-btn ui-btn-a"> '+(i+1)+'. '+sqrspgn[i]+'</div>';
	;}
	var $wqrpgnvlus = $('#'+pgn+'wqrpgnvlus'+pn);
	if(wrthtmlv){
		$wrtqrpgnvlus.html(wrthtmlv);$wqrpgnvlus.html(qrsdt+htmlvn);$qrpgnvlus.html(qrdts+htmlvn);
		
	;}else{$wrtqrpgnvlus.html('');$wqrpgnvlus.html('');}
		
	;}//if(qrpgnvlu){

});


$(document).on("click", '.'+pgn+'vwifrhtmv'+pn,function (event) {
		event.preventDefault();	
		var $qrpgnvlu = $('#'+pgn+'qrpgnvlu'+pn);var $this= $(this);
		var qr = $this.attr('data-qr');
		$('#'+pgn+'qrspgn'+pn).data("qrspgn",$this.attr('data-nbr'));
		$qrpgnvlu.val(qr);
		$qrpgnvlu.show('fast');
		$('#'+pgn+'qrsvlu'+pn).val(qr);	
		$('#'+pgn+'qrs'+pn).html('<span class="pigss-pencil" style="font-size:180px"></span>');
		$('#'+pgn+'qrspgn'+pn).popup('close');
});


$(document).on("click", '.'+pgn+'vwifrhtm'+pn,function (event) {
		event.preventDefault();	
		var qr = $(this).attr('data-qr');
		$qrpgn.popup("close");
		$('#'+pgn+'qrsvlu'+pn).val(qr);	
		$('#'+pgn+'qrs'+pn).html('<span class="pigss-pencil" style="font-size:180px"></span>');
		
});


$(document).on("click", '.'+pgn+'wvwifrhtm'+pn,function (event) {
		event.preventDefault();	
		var $qrspgn = $('#'+pgn+'qrspgn'+pn);
		var qr = $(this).attr('data-qr');
		var	wvwifrsltn = $qrspgn.data("wvwifrslt");
		if(wvwifrsltn){wvwifrsltn = parseInt(wvwifrsltn)+1;}else{wvwifrsltn = 1;}
		$('#'+pgn+'wqrpgnvlu'+pn).append('<div class="dd-item" data-nbr="'+wvwifrsltn+'"><a href="#" style="border:none;" class="ui-btn ui-btn-b ui-btn-inline ui-icon-ddpick ui-btn-inline ui-btn-icon-left dd-pick">&nbsp;</a><a href="#" class="'+pgn+'wvwifrslt'+pn+' ui-btn ui-btn-b ui-btn-inline ui-icon-check ui-btn-icon-left" style="border:none;white-space:normal;width:85%;" data-slt="1" data-qr="'+qr+'"  data-nbr="'+wvwifrsltn+'">'+qr+'</a></div>');
		$qrspgn.data("wvwifrslt",wvwifrsltn);	
		var $wqrpgnvluh = $('#'+pgn+'wqrpgnvluh'+pn);
		var wqrpgnvluhval = $wqrpgnvluh.val();
		if(wqrpgnvluhval){wqrpgnvluhval = JSON.parse(wqrpgnvluhval);}else{wqrpgnvluhval = [];}
		var wqrpgnvluhs = [];wqrpgnvluhs[0] = wvwifrsltn;wqrpgnvluhs[1] = qr;;wqrpgnvluhs[2] = 1;
		wqrpgnvluhval.push(wqrpgnvluhs);
		$wqrpgnvluh.val(JSON.stringify(wqrpgnvluhval));
		$wqrpgn.popup('close').one( "popupafterclose", function( event, ui ){$('#'+pgn+'mtsltwqrpgn'+pn).popup('open',"transition","pop");});
});

$(document).on("click", '.'+pgn+'wvwifrslt'+pn,function (event) {
		event.preventDefault();	
		var $this = $(this);
		var nbr = parseInt($this.attr('data-nbr'));
		var qr = $this.attr('data-qr');
		var slt = $this.attr('data-slt');
		var updn = $this.attr('class').indexOf('ui-icon-arrow-u');
		var dnup = $this.attr('class').indexOf('ui-icon-arrow-d');
		
		var $wqrpgnvluh = $('#'+pgn+'wqrpgnvluh'+pn);
		var html =  JSON.parse($wqrpgnvluh.val());		
		if(updn>0){
			if(nbr>1){
			$wqrpgnvluh.val('');
			var htmlsv ='';
			if(html){
			var nbrs = parseInt(nbr)*2;
			var $wqrpgnvlu = $('#'+pgn+'wqrpgnvlu'+pn);
			var $wqrpgnvluaqnbr1 = $wqrpgnvlu.find('div:eq('+(nbr-1)+') > a:eq(1)');
			var $wqrpgnvluaqnbr2 = $wqrpgnvlu.find('div:eq('+(nbr-2)+') > a:eq(1)');
			var slt= $wqrpgnvluaqnbr1.attr('data-slt');if(!slt)slt='';
			var slts= $wqrpgnvluaqnbr2.attr('data-slt');if(!slts)slts='';
			var vlu = [];vlu[0] = nbr;vlu[1] = html[nbr-2][1];vlu[2] = slts;
			var vls = [];vls[0] = nbr-1;vls[1] = html[nbr-1][1];vls[2] = slt;
	
			html.splice(nbr-1,1,vlu);
			html.splice(nbr-2,1,vls);
			$wqrpgnvluh.val(JSON.stringify(html));
			
			
			var html = $('#'+pgn+'wqrpgnvlu'+pn).html();
			var nhtml= $wqrpgnvluaqnbr1.text();			
			var nnhtml=$wqrpgnvluaqnbr2.text();
			
			$wqrpgnvluaqnbr1.text(nnhtml);
			$wqrpgnvluaqnbr1.attr('data-qr',nnhtml).attr('data-slt',slts);
			if(slt==1 && !slts){$wqrpgnvluaqnbr1.removeClass("ui-icon-arrow-u").addClass("ui-icon-delete");$wqrpgnvluaqnbr1.attr('style', 'border:none;max-width:85%;text-decoration:line-through!important');}
			
			$wqrpgnvluaqnbr2.text(nhtml);
			$wqrpgnvluaqnbr2.attr('data-qr',nhtml).attr('data-slt',slt);
			if(slt==1 && !slts){$wqrpgnvluaqnbr2.removeClass("ui-icon-delete").addClass("ui-icon-arrow-u");$wqrpgnvluaqnbr2.attr('style', 'border:none;white-space:normal;width:85%');}
	
			}	//if(html){		
			}	//if(nbr>1){		
			
			
		
		}else if(dnup>0){
			
			var htmlsv ='';
			if(html){
					
			if(nbr<=html.length){
			$wqrpgnvluh.val('');
			var nbrs = parseInt(nbr)*2;
			var $wqrpgnvlu = $('#'+pgn+'wqrpgnvlu'+pn);
			var $wqrpgnvluaqnbr1 = $wqrpgnvlu.find('div:eq('+(nbr-1)+') > a:eq(1)');
			var $wqrpgnvluaqnbr = $wqrpgnvlu.find('div:eq('+nbr+') > a:eq(1)');
			var slt= $wqrpgnvluaqnbr1.attr('data-slt');if(!slt)slt='';
			var slts= $wqrpgnvluaqnbr.attr('data-slt');if(!slts)slts='';
			var vlu = [];vlu[0] = nbr;vlu[1] = html[nbr][1];vlu[2] = slts;
			var vls = [];vls[0] = nbr+1;vls[1] = html[nbr-1][1];vls[2] = slt;
	
			html.splice(nbr-1,1,vlu);
			html.splice(nbr,1,vls);
			
			$wqrpgnvluh.val(JSON.stringify(html));
			
			
			var html = $wqrpgnvlu.html();
			
			var nhtml = $wqrpgnvluaqnbr1.text();
			var nnhtml = $wqrpgnvluaqnbr.text();
			
			$wqrpgnvluaqnbr1.text(nnhtml);
			$wqrpgnvluaqnbr1.attr('data-qr',nnhtml).attr('data-slt',slts);
			if(slt==1 && !slts){$wqrpgnvluaqnbr1.removeClass("ui-icon-arrow-d").addClass("ui-icon-delete");$wqrpgnvluaqnbr1.attr('style', 'border:none;max-width:85%;text-decoration:line-through!important');}
			
			$wqrpgnvluaqnbr.text(nhtml);
			$wqrpgnvluaqnbr.attr('data-qr',nhtml).attr('data-slt',slt);
			if(slt==1 && !slts){$wqrpgnvluaqnbr.removeClass("ui-icon-delete").addClass("ui-icon-arrow-d");$wqrpgnvluaqnbr.attr('style', 'border:none;white-space:normal;width:85%');}
			}
			}	//if(html){		
					
			
			
		
		}else if(slt){
			var wsqrs = $('#'+pgn+'qrspgn'+pn).data("wsqrs");
			var $this = $(this);
			if(wsqrs=='up'){
			$this.removeClass("ui-icon-arrow-u").addClass("ui-icon-delete");
			}else if(wsqrs=='dn'){
			$this.removeClass("ui-icon-arrow-d").addClass("ui-icon-delete");
			}else{ 
			$this.removeClass("ui-icon-check").addClass("ui-icon-delete");		
			}
			$this.attr('style', 'border:none;max-width:85%;text-decoration:line-through!important');
			var vls = [];vls[0] = nbr;vls[1] = html[nbr-1][1];vls[2] = '';
			html.splice(nbr-1,1,vls);
			$wqrpgnvluh.val(JSON.stringify(html));
			$this.attr('data-slt','');
		}else{
			var wsqrs = $('#'+pgn+'qrspgn'+pn).data("wsqrs");
			var $this = $(this);
			if(wsqrs=='up'){
			$this.removeClass("ui-icon-delete").addClass("ui-icon-arrow-u");
			}else if(wsqrs=='dn'){
			$this.removeClass("ui-icon-delete").addClass("ui-icon-arrow-d");
			}else{ 
			$this.removeClass("ui-icon-delete").addClass("ui-icon-check");		
			}	
			$this.attr('style', 'border:none;white-space:normal;width:85%;');
			var vls = [];vls[0] = nbr;vls[1] = html[nbr-1][1];vls[2] = 1;
			html.splice(nbr-1,1,vls);
			$wqrpgnvluh.val(JSON.stringify(html));
			$this.attr('data-slt',1);
		;}
});


$('#'+pgn+'wsqrsu'+pn).click(function (event){
		event.preventDefault();		
		var wsqrs = $('#'+pgn+'qrspgn'+pn).data("wsqrs");
		if(wsqrs=='x' || !wsqrs){
			$('#'+pgn+'wqrpgnvlu'+pn+' a').each(function(){
				var slt = $(this).attr('data-slt');
				if(slt)$(this).removeClass("ui-icon-check").addClass("ui-icon-arrow-u");
			 });
		}else if(wsqrs=='dn'){
			$('#'+pgn+'wqrpgnvlu'+pn+' a').removeClass("ui-icon-arrow-d").addClass("ui-icon-arrow-u");
		}
		
		$('#'+pgn+'qrspgn'+pn).data("wsqrs",'up');
});

$('#'+pgn+'wsqrsd'+pn).click(function (event){
		event.preventDefault();		
		var wsqrs = $('#'+pgn+'qrspgn'+pn).data("wsqrs");
		if(wsqrs=='x' || !wsqrs){
			$('#'+pgn+'wqrpgnvlu'+pn+' a').each(function(){
				var slt = $(this).attr('data-slt');
				if(slt)$(this).removeClass("ui-icon-check").addClass("ui-icon-arrow-d");
			 });
		}else if(wsqrs=='up'){
			$('#'+pgn+'wqrpgnvlu'+pn+' a').removeClass("ui-icon-arrow-u").addClass("ui-icon-arrow-d");
		}
			
		$('#'+pgn+'qrspgn'+pn).data("wsqrs",'dn');
});

$('#'+pgn+'wsqrsud'+pn).click(function (event){
		event.preventDefault();		
		var wsqrs = $('#'+pgn+'qrspgn'+pn).data("wsqrs");
		if(wsqrs=='up'){
			$('#'+pgn+'wqrpgnvlu'+pn+' a').removeClass("ui-icon-arrow-u").addClass("ui-icon-check");
		}else if(wsqrs=='dn'){
			$('#'+pgn+'wqrpgnvlu'+pn+' a').removeClass("ui-icon-arrow-d").addClass("ui-icon-check");
		}
		$('#'+pgn+'qrspgn'+pn).data("wsqrs",'x');
});

$('#'+pgn+'wsqrspgn'+pn).click(function (event){
		event.preventDefault();	
		$('#'+pgn+'qrspgn'+pn).data("wvwifrslt",'');
		var $wqrpgnvluh =  $('#'+pgn+'wqrpgnvluh'+pn);
		var html = JSON.parse($wqrpgnvluh.val());	
		var $wqrpgnvlu =  $('#'+pgn+'wqrpgnvlu'+pn);
		$wqrpgnvlu.data("wqrpgnvluh",$wqrpgnvluh.val());

		
		$wqrpgnvluh.val('');
		var htmlsv ='';
		if(html){
			for(var i=0;i<html.length;i++){
				if(html[i][2]==1){
					htmlsv += html[i][1]+' '+' ';
				;}
			;}
			var htmls = htmlsv;
			htmlsv ='';
		}
		$wqrpgn.popup("close");		
		$('#'+pgn+'wqrpgnvluhns'+pn).html('<a href="#" class="ui-btn ui-btn-a ui-icon-plus ui-btn-icon-left" style="border:none;white-space:normal;" id="'+pgn+'wqrpgnvluhn'+pn+'">'+htmls+'</a>');		
		$wqrpgnvlu.data("wqrpgnvluhs",$wqrpgnvlu.html());
		html = '';$wqrpgnvlu.html('');
			
	$('#'+pgn+'mtsltwqrpgn'+pn).popup('close');
	$('#'+pgn+'qrs'+pn).html('<span class="pigss-pencil" style="font-size:180px"></span>');

});



$(document).on("click", '#'+pgn+'wqrpgnvluhn'+pn,function (event) {
		$wqrpgn.popup("open");		
		$('#'+pgn+'wqrpgnvlu'+pn).html($('#'+pgn+'wqrpgnvlu'+pn).data("wqrpgnvluhs"));
		$('#'+pgn+'wqrpgnvluh'+pn).val($('#'+pgn+'wqrpgnvlu'+pn).data("wqrpgnvluh"));


});

$('#'+pgn+'wsqrsx'+pn).click(function (event){
	event.preventDefault();	
	$('#'+pgn+'wqrpgnvlu'+pn).html('');
	$('#'+pgn+'wqrpgnvluh'+pn).val('');
	$('#'+pgn+'wqrpgnvluhns'+pn).html('');
});

//-----------
$('#'+pgn+'wsqrtg'+pn).click(function (event){
	event.preventDefault();	
	var $qrtags = $('#'+pgn+'qrtags'+pn);
	$qrtags.show('slow');
	$qrtags.css('max-height',windowHeight*0.75);

});

$('.'+pgn+'qrstags'+pn).click(function (event){
	event.preventDefault();		
	$('#'+pgn+'qrtags'+pn).hide();
	var nbr = $(this).attr('data-nbr');
	var hgt = 0;
	$qrspgnvlus = $('#'+pgn+'qrspgnvlus'+pn);
	$qrspgnvlus.find('ul >li > a').each(function(){	 
	  var $this= $(this);	
	  if($this.attr('data-nbr')==nbr){if(hgt)$qrspgnvlus.scrollTop(hgt-55);}
	   hgt = $this.outerHeight()+hgt;				
	});
});

$('#'+pgn+'qrstgsu'+pn).click(function (event){
	event.preventDefault();	
	$qrstgsu= $(this);
	$('#'+pgn+'qrstgs'+pn).hide();
	var nbr = $qrstgsu.attr('data-nbr').split(',');
	var nbrs = parseInt($qrstgsu.attr('data-nbrs'))-1;
	if(nbrs==-1)nbrs = 0;
	var hgt = 0;
	if(nbrs<=nbr.length-1){
		var $qrspgnvlus = $('#'+pgn+'qrspgnvlus'+pn);
	$qrspgnvlus.find('ul >li > a').each(function(){	 
		var $this= $(this);
	  if($this.attr('data-nbr')==nbr[nbrs]){if(hgt)$qrspgnvlus.scrollTop(hgt-55);$qrstgsu.attr('data-nbrs',nbrs);$('#'+pgn+'qrstgsd'+pn).attr('data-nbrs',nbrs);}
	   hgt = $this.outerHeight()+hgt;				
	});
	}
});


$('#'+pgn+'qrstgsd'+pn).click(function (event){
	event.preventDefault();		
	$qrstgsd= $(this);
	$('#'+pgn+'qrstgs'+pn).hide();
	var nbr = $qrstgsd.attr('data-nbr').split(',');
	var nbrs = parseInt($qrstgsd.attr('data-nbrs'))+1;
	var hgt = 0;
	if(nbrs<=nbr.length-1){
		var $qrspgnvlus = $('#'+pgn+'qrspgnvlus'+pn);
	$qrspgnvlus.find('ul >li > a').each(function(){	
	 var  $this= $(this);
	  if($this.attr('data-nbr')==nbr[nbrs]){if(hgt)$qrspgnvlus.scrollTop(hgt-55);$qrstgsd.attr('data-nbrs',nbrs);$('#'+pgn+'qrstgsu'+pn).attr('data-nbrs',nbrs);}
	   hgt = $this.outerHeight()+hgt;				
	});
	}
});

$('#'+pgn+'qrtags'+pn+' a').click(function (event){
	event.preventDefault();	
	$('#'+pgn+'qrtags'+pn).hide();
});

//-----------
$('#'+pgn+'wsqrstg'+pn).click(function (event){
	event.preventDefault();	
	var $qrstgs = $('#'+pgn+'qrstgs'+pn);
	$qrstgs.show('slow');
	$qrstgs.css('max-height',windowHeight*0.75);

});

$('.'+pgn+'qrsstags'+pn).click(function (event){
	event.preventDefault();	
	$('#'+pgn+'qrstgs'+pn).hide();
	var nbr = $(this).attr('data-nbr');
	var hgt = 0;
	var $sqrspgnvlus = $('#'+pgn+'sqrspgnvlus'+pn);
	$sqrspgnvlus.find('ul >li > a').each(function(){	
	 var  $this= $(this);
	  if($this.attr('data-nbr')==nbr){if(hgt)$sqrspgnvlus.scrollTop(hgt-55);}
	   hgt = $this.outerHeight()+hgt;			
	});
});

$('#'+pgn+'qrsstgsu'+pn).click(function (event){
	event.preventDefault();		
	var $qrsstagu= $(this);
	$('#'+pgn+'qrstgs'+pn).hide();
	var nbr = $qrsstagu.attr('data-nbr').split(',');
	var nbrs = parseInt($qrsstagu.attr('data-nbrs'))-1;
	if(nbrs==-1)nbrs = 0;
	var hgt = 0;
	if(nbrs<=nbr.length-1){
		var $sqrspgnvlus = $('#'+pgn+'sqrspgnvlus'+pn);
	$sqrspgnvlus.find('ul >li > a').each(function(){
	  var $this= $(this);
	  if($this.attr('data-nbr')==nbr[nbrs]){if(hgt)$sqrspgnvlus.scrollTop(hgt-55);$qrsstagu.attr('data-nbrs',nbrs);$('#'+pgn+'qrsstgsd'+pn).attr('data-nbrs',nbrs);}
	   hgt = $this.outerHeight()+hgt;				
	});
	}
});


$('#'+pgn+'qrsstagd'+pn).click(function (event){
	event.preventDefault();	
	$qrsstagd= $(this);
	$('#'+pgn+'qrstgs'+pn).hide();
	var nbr = $qrsstagd.attr('data-nbr').split(',');
	var nbrs = parseInt($qrsstagd.attr('data-nbrs'))+1;
	var hgt = 0;
	if(nbrs<=nbr.length-1){
		var $sqrspgnvlus = $('#'+pgn+'sqrspgnvlus'+pn);
	$sqrspgnvlus.find('ul >li > a').each(function(){	 	
	  $this= $(this);
	  if($this.attr('data-nbr')==nbr[nbrs]){if(hgt)$sqrspgnvlus.scrollTop(hgt-55);$qrsstagd.attr('data-nbrs',nbrs);$('#'+pgn+'qrsstgsu'+pn).attr('data-nbrs',nbrs);}
	   hgt = $this.outerHeight()+hgt;				
	});
	}
});

$('#'+pgn+'qrstgs'+pn+' a').click(function (event){
	event.preventDefault();	
	$('#'+pgn+'qrstgs'+pn).hide();
});


$('#'+pgn+'wrtbtn'+pn).on('click',function (event){
	event.preventDefault();	
	$qrpgn.popup('close').one( "popupafterclose", function( event, ui ){$('#'+pgn+'wrtqrpgn'+pn).popup('open',"transition","pop");});
});

$('#'+pgn+'wrtpopbtn'+pn).on('click',function (event){
	event.preventDefault();	
	$('#'+pgn+'wrtqrpgn'+pn).popup('close').one( "popupafterclose", function( event, ui ){$qrpgn.popup('open',"transition","pop");});
});


$('#'+pgn+'mtsltpopbtn'+pn).on('click',function (event){
	event.preventDefault();	
	$('#'+pgn+'mtsltwqrpgn'+pn).popup('close').one( "popupafterclose", function( event, ui ){$wqrpgn.popup('open',"transition","pop");});
});

$('#'+pgn+'wqrpgnbtn'+pn).on('click',function (event){
	event.preventDefault();	
	$wqrpgn.popup('close').one( "popupafterclose", function( event, ui ){$('#'+pgn+'mtsltwqrpgn'+pn).popup('open',"transition","pop");});
});



$('#'+pgn+'wqrpgnvlu'+pn+'').on('change', function(){
	var jdd = 1;var nbr = '';var htmls = '';var wqrpgnvluhtmls = '';var style = '';
	var $this = $(this);
	var $wqrpgnvluh = $('#'+pgn+'wqrpgnvluh'+pn);
	var html =  JSON.parse($wqrpgnvluh.val());
    $this.find('div').each(function(){
		nbr = $(this).attr('data-nbr');
		htmls += '["'+jdd+'","'+html[nbr-1][1]+'","'+html[nbr-1][2]+'"],';
		if(html[nbr-1][2]){style = ' ui-icon-check" style="border:none;white-space:normal;width:85%;"';}else{style = ' ui-icon-delete" style="border:none;max-width:85%;text-decoration:line-through!important;"';}
		wqrpgnvluhtmls += '<div class="dd-item" data-nbr="'+jdd+'"><a href="#" class="ui-btn ui-btn-b ui-btn-inline ui-icon-ddpick ui-btn-inline ui-btn-icon-left dd-pick">&nbsp;</a><a href="#" class="'+pgn+'wvwifrslt'+pn+' ui-btn ui-btn-b ui-btn-inline ui-btn-icon-left'+style+' data-slt="'+html[nbr-1][2]+'" data-qr="'+html[nbr-1][1]+'"  data-nbr="'+jdd+'">'+html[nbr-1][1]+'</a></div>'
		jdd++;
	});
	$this.html(wqrpgnvluhtmls);
	var htmls = '['+htmls+']';
	htmls = htmls.replace('],]',']]');
	$wqrpgnvluh.val(htmls);
});

$('#'+pgn+'qrdtskpop'+pn+' a').click(function (event){
	event.preventDefault();	
	$('#'+pgn+'qrdtskpop'+pn).hide();
});


$('#'+pgn+'qrdtsk'+pn).click(function (event){
	event.preventDefault();	
	var $qrdtskpop = $('#'+pgn+'qrdtskpop'+pn);
	$qrdtskpop.show('slow');
	$qrdtskpop.css('max-height',windowHeight*0.75).css('min-height',windowHeight*0.25);

});

$('#'+pgn+'qrdtskpops'+pn+' a').click(function (event){
	event.preventDefault();	
	$('#'+pgn+'qrdtskpops'+pn).hide();
});


$('#'+pgn+'qrdtsks'+pn).click(function (event){
	event.preventDefault();	
	var $qrdtskpops = $('#'+pgn+'qrdtskpops'+pn);
	$qrdtskpops.show('slow');
	$qrdtskpops.css('max-height',windowHeight*0.75).css('min-height',windowHeight*0.25);

});

}



