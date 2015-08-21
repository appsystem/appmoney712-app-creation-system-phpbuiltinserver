/*AppMoney712 APP Creation System || 01 - AUG -2015 || Copyright LEE WAI KWOK(JSTRUST CONSULTANCY) || license - Revised MIT.*/
function gtn(d,mnh,day,yr,pgn,pn,wdayn,sat,sun,gthtml,str,bgarea,bgareas,typ,windowWidth){  
	if(!gthtml)var html = '';
	if(!str)var str = '';
	if(!sun)var sun = 'rgba(227,  57,  39,  0.5)';
	var $owlmnspgnpn = $('#'+pgn+'owlmns'+pn);
	$owlmnspgnpn.data("jsnyr",yr);
	$owlmnspgnpn.data("jsmnh",mnh);
	if(!bgarea)var bgarea = 'rgba(0, 0, 0, 0.5)';
	if(!bgareas)var bgareas = 'rgba(0, 0, 0, 0.5)';
	
	if(typ){var hf = '<div class="xkn"></div><div style="background-color:rgba(255, 255, 255, 0.4);width:100%;">&nbsp;</div>';var wsp = 'white-space:normal;';
	;}else{var hf = '<div class="xkn"></div><div style="background-color:rgba(255, 255, 255, 0.4);width:100%;padding-top:15px;padding-bottom:15px;">&nbsp;</div>';var wsp = '';}
	var mnh = parseInt(mnh); 
	var startdy = new Date(yr,mnh-1, 1).getDay();var ltdy2 = new Date(yr,mnh, 0).getDate();
	var startday = new Date(yr,mnh, 1).getDay();var ltday = new Date(yr,mnh+1, 0).getDate();
	var startday1 = new Date(yr,mnh+1, 1).getDay();var ltday1 = new Date(yr,mnh+2, 0).getDate();
	var startday2 = new Date(yr,mnh+2, 1).getDay();var ltday2 = new Date(yr,mnh+3, 0).getDate();
	
	if(mnh==10){var dyvlu = '[10/'+yr+' - '+'1/'+(yr+1)+']';}
	else if(mnh==11){var dyvlu = '[11/'+yr+' - '+'2/'+(yr+1)+']';}
	else if(mnh==12){var dyvlu = '[12/'+yr+' - '+'3/'+(yr+1)+']';}
	else {var dyvlu = '['+mnh+'/'+yr+' - '+(mnh+3)+'/'+yr+']';}


	var gtnbr ='';var gtnbrmsg ='';var gtnbrmsgs ='';var owlvmndatn='';var owlmnsVLU ='';var gtnbrsv = '';
	var gtnbr = localStorage.getItem(pgn+'gt'+pn+"nnbr");var gtnbrmsg = localStorage.getItem(pgn+'gt'+pn+"nmsg");
	if(gtnbr){
		function sorting(a, b){return a - b;}
		var gtnbr = JSON.parse(gtnbr);
		var gtnbrs = gtnbr.sort(sorting);

		if(typ){var vws = 'vws';var gtwdh = 'width:100%;';var gtwdhs = 'width:100%;';var br = '';}else{var vws = 'vwsgt';var gtwdh = '';var gtwdhs = 'width:2200px;';var br = '<br>';}


		var gtnbrmsg = JSON.parse(gtnbrmsg);
		for(var i=0; i < gtnbr.length; i++) {
			gtnbrsv = $.inArray(gtnbrs[i],gtnbr);
			if(!i || ((i/2).toString()).indexOf('.')==-1){var vlu = 0.1;}else{var vlu = 0.2;};
			gtnbrmsgs += '<div style="'+wsp+'text-align:left;'+gtwdhs+'color:black;background-color:rgba(255, 255, 255,'+vlu+')" class="ui-btn ui-btn-z ui-mini">'+gtnbrmsg[gtnbrsv]+'</div>';
			if(!typ)owlvmndatn += '<div style="width:100%;"  class="ui-btn ui-btn-z ui-mini">&nbsp;</div><!--'+gtnbrs[i]+'!-->';
		;}
	if(gtnbrmsgs)var owlmnsVLU = '<div class="xkn"></div><div style="'+gtwdhs+'background-color:'+bgarea+';padding-top:15px;padding-bottom:15px;">&nbsp;</div><div class="'+vws+'" style="float:left;padding-top:3px;padding-bottom:3px;'+gtwdh+'"><div id="'+pgn+'owlclnn'+pn+'" style="text-align:left;" class="ui-btn ui-btn-z ui-mini">&nbsp;<span class="pigss-star"></span>'+str+'</div>'+gtnbrmsgs+'</div>';
	
	if(typ){
		if(owlmnsVLU){$('#'+pgn+'owlclns'+pn).html(owlmnsVLU+hf);}else{$('#'+pgn+'owlclns'+pn).html(hf);}
	}else{
		if(owlmnsVLU){$('#'+pgn+'owlclnsv'+pn).html(owlmnsVLU+hf);}else{$('#'+pgn+'owlclnsv'+pn).html(hf);}	
	;}
	//var wdwidth = $(window).width();
	var wdwidth = windowWidth;
	if(wdwidth<320){wdwidth=wdwidth*0.5;}else{if(typ){wdwidth=wdwidth;}else{wdwidth=wdwidth*0.3;};}
	
	$('#'+pgn+'owlclns'+pn).width(wdwidth);$('#'+pgn+'owlclnn'+pn).width(wdwidth);
		
	}
	
	
		if(typ==1){
			$('#'+pgn+'owlcln'+pn).width(Math.ceil(wdwidth*4*0.85)).find('div').width(wdwidth*0.8);$('#'+pgn+'owlclns'+pn).width(Math.ceil(wdwidth*4*0.85));
		}else if(typ==2){
			$('#'+pgn+'owlcln'+pn).width(Math.ceil(wdwidth*4*0.485)).find('div').width(wdwidth*0.46);$('#'+pgn+'owlclns'+pn).width(Math.ceil(wdwidth*4*0.485));
		}else if(typ==5){
			$('#'+pgn+'owlcln'+pn).width(Math.ceil(wdwidth*4*0.35)).find('div').width(wdwidth*0.3);$('#'+pgn+'owlclns'+pn).width(Math.ceil(wdwidth*4*0.35));
		;}else{
			$('#'+pgn+'owlcln'+pn).width(Math.ceil(2200/wdwidth*2200*8));
		;}
	
$('#'+pgn+'owls'+pn).html('&nbsp;&nbsp;&nbsp;'+dyvlu);

	var nmnh = localStorage.getItem(pgn+'gt'+pn+"nmnh");
	var ndatngt = localStorage.getItem(pgn+'gt'+pn+"ndate");
	
	function owlr(startday,ltday,ul,yr,mnh,part,pgn,pn,owlvmndatn,gtnbr,html,bgareas,typ,nmnh,ndatngt){
	var uls ='';
	if(ul==15){ul=15;ltdy =15+1;uls=2;}else{ul = 0;ltday = 15;ltdy = 1;uls=1;}
	if(part==1 || part==2){var yrvlu = yr;var mnhvlu = mnh;}
	else if(part==3 || part==4){if(mnh==12){var yrs = yr+1;var yrvlu = yrs;var mnhvlu = 1;}else{var yrvlu = yr;var mnhvlu = mnh+1;};}	
	else if(part==5 || part==6){var yrs = yr+1;
	if(mnh==11){var yrvlu = yrs;var mnhvlu = 1;}
	else if(mnh==12){var yrvlu = yrs;var mnhvlu = 2;}
	else{var yrvlu = yr;var mnhvlu = mnh+2;};}	
	else if(part==7 || part==8){var yrs = yr+1;
	if(mnh==10){var yrvlu = yrs;var mnhvlu = 1;}
	else if(mnh==11){var yrvlu = yrs;var mnhvlu = 2;}
	else if(mnh==12){var yrvlu = yrs;var mnhvlu = 3;}
	else{var yrvlu = yr;var mnhvlu = mnh+3;};}	
	

	
	var vnmnh = '';mnhvluj= '';
	if(mnhvlu<10)mnhvluj ='0'+mnhvlu;
	if(nmnh){nmnh = JSON.parse(nmnh);vnmnh =  $.inArray(yrvlu+'-'+mnhvluj,nmnh);}
	
	var ht ='';var hts = '';var sp = startday+ul;var owlvmndatns ='';
	var owlmns ='';
	//owlmns = $('#'+pgn+'owlmns'+pn).data(yrvlu+mnhvlu+'-'+uls);
	if(owlmns){
	$('#'+pgn+'owlmn'+pn+'n'+part).hide('slow');$('#'+pgn+'owlmn'+pn+'n'+part).html(owlmns).show('slow');
	;}else{
		if(mnhvlu<10)mnhvlu ='0'+mnhvlu;if(mnh<10)mnh ='0'+mnh;
		if(ndatngt){ndatngt = JSON.parse(ndatngt);}else{ndatngt ='';}	
		
		if(ndatngt){

		var dy = JSON.parse(localStorage.getItem(pgn+'gt'+pn+"nnbr"));
		
		var jsgtdate = JSON.parse(localStorage.getItem(pgn+'gt'+pn+"jsgtdate"));
		var gtdiv = JSON.parse(localStorage.getItem(pgn+'gt'+pn+"div"));
		}
	var kpro ='';
	
	if(typ){var vws = 'vws';var br = '';var gtdy = '';}else{var vws = 'vwsgt';var br = '';var gtdy = ' ['+ltdy+'-'+ltday+']';}
	
	if(html.indexOf('[gt]') !== -1){
		var datahtml  = 'data-url="'+html+'" class="imgspop ';var datahtmln  = 'pigss-info';		
	;}else if(html.indexOf('.html') !== -1 || html.indexOf('.php') !== -1 || html.indexOf('.asp') !== -1){
		var datahtml  = 'data-html="'+html+'" class="'+pgn+'gtdate'+pn+' ';var datahtmln  = 'pigss-pencil';
	;}else{
		var datahtml  = 'data-url="'+html+'" class="imgspop ';		;var datahtmln  = 'pigss-info';
	;}
	
	
	for(var j=ul+1;j<=ltday;j++){if(j<10)j ='0'+j;
	//owlvmndatns = owlvmndatn;
	var owlvmndatns ='';var vmnhn = ''; 
	  if(ndatngt){
		if(vnmnh!==-1){vmnhn =  $.inArray(yrvlu+'-'+mnhvlu+'-'+j,ndatngt);}
		if(vmnhn!==-1){
		
			var owlmndata = ' ';
			for(var i=0;i<dy.length;i++){
			kpro = $.inArray(yrvlu+'-'+mnhvlu+'-'+j+'-'+dy[i],jsgtdate);
			if(kpro!=-1){			
				for(var js=0; js < gtnbr.length; js++) {			
				if(dy[i]==gtnbrs[js]){owlvmndatns += gtdiv[kpro];}
				else if(!typ){owlvmndatns += '<div style="width:100%;" class="ui-btn ui-btn-z ui-mini">&nbsp;</div>';}
				;}		
			;}

			owlmndata = owlvmndatns;}
		}else{owlmndata = owlvmndatn;}
	  ;}else{owlmndata = owlvmndatn;}
	if((sp+1)/7==parseInt((sp+1)/7) && sat){var mnsclr = sat;}else{var mnsclr = 'rgba(255, 255, 255, 0.3)';}
	if(sp/7==parseInt(sp/7)){var mnsclr = sun;}
	
	
	

	ht += '<div class="xkn" style="float:left;"></div><div class="'+vws+'" id="'+pgn+'n'+pn+'n'+yrvlu+'-'+mnhvlu+'-'+j+'" style="background-color:'+mnsclr+';float:left;padding-top:3px;padding-bottom:3px;"><div '+datahtml+'ui-btn ui-btn-z ui-mini">&nbsp;<span style="" data-date="'+yrvlu+'-'+mnhvlu+'-'+j+'" class="'+datahtmln+'"></span>'+j+' '+wdayn[sp]+'</div>'+br+owlmndata+'</div>';sp++;}
	
	var owlmnVLU = '<div class="xkn"></div><div id="'+pgn+'uds'+pn+'n'+yrvlu+mnhvlu+ltdy+'" style="background-color:'+bgareas+';color:#FFFFFF;width:100%;padding-top:15px;padding-bottom:15px;"> &nbsp;&nbsp;&nbsp;'+yrvlu+'-'+mnhvlu+gtdy+'</div>'+ht;
	
	if(owlvmndatn)owlmnVLU += hf;
	
		
	$('#'+pgn+'owlmn'+pn+'n'+part).hide('slow');$('#'+pgn+'owlmn'+pn+'n'+part).html(owlmnVLU).show('slow');
	//$('#'+pgn+'owlmns'+pn).data(yrvlu+'-'+mnhvlu+'-'+uls,owlmnVLU);
	}	
	;}
	
	if(!gtnbr)gtnbr='';	var gtformnbr = sessionStorage.getItem(pgn+"gtnform"+pn);if(gtformnbr){var html =gtformnbr ;}else{var html = gthtml ;}
	owlr(startdy,15,1,yr,mnh,1,pgn,pn,owlvmndatn,gtnbr,html,bgareas,typ,nmnh,ndatngt);
	owlr(startdy,ltdy2,15,yr,mnh,2,pgn,pn,owlvmndatn,gtnbr,html,bgareas,typ,nmnh,ndatngt);
	owlr(startday,15,1,yr,mnh,3,pgn,pn,owlvmndatn,gtnbr,html,bgareas,typ,nmnh,ndatngt);
	owlr(startday,ltday,15,yr,mnh,4,pgn,pn,owlvmndatn,gtnbr,html,bgareas,typ,nmnh,ndatngt);
	owlr(startday1,15,1,yr,mnh,5,pgn,pn,owlvmndatn,gtnbr,html,bgareas,typ,nmnh,ndatngt);
	owlr(startday1,ltday1,15,yr,mnh,6,pgn,pn,owlvmndatn,gtnbr,html,bgareas,typ,nmnh,ndatngt);
	owlr(startday2,15,1,yr,mnh,7,pgn,pn,owlvmndatn,gtnbr,html,bgareas,typ,nmnh,ndatngt);
	owlr(startday2,ltday2,15,yr,mnh,8,pgn,pn,owlvmndatn,gtnbr,html,bgareas,typ,nmnh,ndatngt);



	
;}
		
function gts(d,mnh,day,yr,pgn,pj,pn,wdayn,sat,sun,gthtml,str,bgarea,bgareas,typ,windowWidth){
			
	$('#'+pgn+'shfr'+pn).click(function (event){
	event.preventDefault();	
	var $owlspgnpn = $('#'+pgn+'owls'+pn);
	$owlspgnpn.hide('slow');$owlspgnpn.html('');$owlspgnpn.show('slow');
	
	var $owlmnspgnpn = $('#'+pgn+'owlmns'+pn);
		var d = new Date();var mnh = parseInt($owlmnspgnpn.data("jsmnh"));
		var day = d.getDate();var yr = $owlmnspgnpn.data("jsnyr"); 
		if(mnh<=8){mnh = mnh+2+2;yr = parseInt(yr);}
		else if(mnh=='10'){mnh = 2;yr = parseInt(yr)+1;}
		else if(mnh=='11'){mnh = 3;yr = parseInt(yr)+1;}
		else if(mnh=='12'){mnh = 3+1;yr = parseInt(yr)+1;}
		else{mnh = 1;yr = parseInt(yr)+1;}
		
		$owlmnspgnpn.data("jsnyr",yr);
		$owlmnspgnpn.data("jsmnh",mnh);
		var gtform = sessionStorage.getItem(pgn+'gtnform'+pn);
		if(gtform){var html = gtform;}else{var html = gthtml;}
		 gtn(d,mnh,day,yr,pgn,pn,wdayn,sat,sun,html,str,bgarea,bgareas,typ,windowWidth);	
	;})
	$('#'+pgn+'shfl'+pn).click(function (event){
	event.preventDefault();	
	var $owlspgnpn = $('#'+pgn+'owls'+pn);
	$owlspgnpn.hide('slow');$owlspgnpn.html('');$owlspgnpn.show('slow');
	
	var $owlmnspgnpn = $('#'+pgn+'owlmns'+pn);
		var d = new Date();var mnh = parseInt($owlmnspgnpn.data("jsmnh"));
		var day = d.getDate();var yr = $owlmnspgnpn.data("jsnyr");
		if(mnh=='4'){mnh = 12;yr = parseInt(yr)-1;}
		else if(mnh=='3'){mnh = 11;yr = parseInt(yr)-1;}
		else if(mnh=='2'){mnh = 10;yr = parseInt(yr)-1;}
		else if(mnh=='1'){mnh = 8+1;yr = parseInt(yr)-1;}
		else{mnh = mnh-2-2;yr = parseInt(yr);}
		$owlmnspgnpn.data("jsnyr",yr);
		$owlmnspgnpn.data("jsmnh",mnh);
		var gtform = sessionStorage.getItem(pgn+'gtnform'+pn);
		if(gtform){var html = gtform;}else{var html = gthtml;}
		 gtn(d,mnh,day,yr,pgn,pn,wdayn,sat,sun,html,str,bgarea,bgareas,typ,windowWidth);		
	;})



$(document).on('click', '.'+pgn+'gtdate'+pn,function (event) {
	event.preventDefault();
	var $this = $(this);
	var $ifrspop = $('#ifrspop');
	var datnvlu = $this.attr('data-date');
	var spinurl = $this.attr('data-html');
	if(spinurl){		
		if(document.URL.indexOf('?pj=') !== -1 && spinurl.indexOf('http://') === -1 && spinurl.indexOf('https://') === -1){
			var apvlu = spinurl.replace('.html','');
			if(/^[0-9]*$/.test(apvlu)){
				$ifrspop.find('iframe').attr('src',"view.php?pj="+pj+"&ap="+apvlu+"&d="+datnvlu);
			;}else{
				$ifrspop.find('iframe').attr('src',spinurl+"?d="+datnvlu);
			;}			
			$ifrspop.find('div').hide(); $ifrspop.popup('open');
		;}else{
			spinurl = spinurl+'?d='+datnvlu;
			$ifrspop.find('iframe' ).load( spinurl, function() {
			$ifrspop.find('iframe').attr('src',spinurl);
			$ifrspop.find('div').hide(); $ifrspop.popup('open');
			});
		;}

	;}//if(spinurl){
;})	

	$(document).on("click",'.'+pgn+'gthtm'+pn,function (event) {
	event.preventDefault();
	var $this = $(this);
	var $ifrspop = $('#ifrspop');
	var datnvlu = $this.attr('data-date');
	var spinurl = $this.attr('data-html');
	var dyvlu = $this.attr('data-dy');
	if(spinurl){		
		
		
		if(document.URL.indexOf('?pj=') !== -1 &&  spinurl.indexOf('http://') === -1 && spinurl.indexOf('https://') === -1  && spinurl.indexOf('.html') !== -1){
			var apvlu = spinurl.replace('.html','');
			if(/^[0-9]*$/.test(apvlu)){
				$ifrspop.find('iframe' ).attr('src',"view.php?pj="+pj+"&ap="+apvlu+"&d="+datnvlu+'&t='+dyvlu);
			;}else{
				$ifrspop.find('iframe' ).attr('src',spinurl+"?d="+datnvlu+'&t='+dyvlu);
			;}
			$ifrspop.find('div').hide(); $ifrspop.popup('open');
		;}else{
			spinurl = spinurl+'?d='+datnvlu+'&t='+dyvlu;
			$ifrspop.find('iframe').load( spinurl, function() {
			$ifrspop.find('iframe').attr('src',spinurl);
			$ifrspop.find('div').hide(); $ifrspop.popup('open');
			});
		;}

	;}//if(spinurl){
	});	


$(document).on('click', '#'+pgn+'owlclnn'+pn,function (event) { 
	event.preventDefault();
	$('#'+pgn+'gtdataform'+pn).popup('open',{positionTo:event.target});
	 var d = new Date();var mnh = d.getMonth()+1;var day = d.getDate();var yr = d.getFullYear(); 
	 $('#'+pgn+'gtday'+pn).text(yr+'-'+mnh+'-'+day);	
;})	


$('#'+pgn+'gthrefresh'+pn).click(function (event){
	event.preventDefault();
	$('#'+pgn+'gthref'+pn).val($(this).attr('data-inf'));$('#'+pgn+'gthrefn'+pn).val('');$('#'+pgn+'gthrefnbr'+pn).val('');
	sessionStorage.setItem(pgn+'gtform'+pn,'');
	sessionStorage.setItem(pgn+'gtnform'+pn,'');
;})	;
	$('#'+pgn+'gtdata'+pn).click(function (event){
	event.preventDefault();
	var gthref = $('#'+pgn+'gthref'+pn).val();var gthrefn = $('#'+pgn+'gthrefn'+pn).val();var gthrefnbr = $('#'+pgn+'gthrefnbr'+pn).val();var gtformnbr = sessionStorage.getItem(pgn+"gtform"+pn);
	if(!gthrefn)gthrefn='';if(!gtformnbr)gtformnbr='';
	
	if(gthref){
	var gthrefs = localStorage.getItem(pgn+"gthref"+pn);var gthrefns = localStorage.getItem(pgn+"gthrefn"+pn);var gtformns = localStorage.getItem(pgn+"gtformn"+pn);
	if(!gthrefs)gthrefs='';if(!gthrefns)gthrefns='';if(!gtformns)gtformns='';
	if(gthrefs){
		gthrefs = JSON.parse(gthrefs);gthrefns = JSON.parse(gthrefns);gtformns = JSON.parse(gtformns);
		if($.inArray(gthref,gthrefs)==-1){
		gthrefs.push(gthref);gthrefns.push(gthrefn);gtformns.push(gtformnbr);}
		else{
		gthrefs.splice(gthrefnbr,1,gthref);gthrefns.splice(gthrefnbr,1,gthrefn);gtformns.splice(gthrefnbr,1,gtformnbr);
		}
	;}
	else{gthrefs = [];gthrefs[0] = gthref;gthrefns = [];gthrefns[0] = gthrefn;gtformns = [];gtformns[0] = gtformnbr;}
	localStorage.setItem(pgn+"gthref"+pn,JSON.stringify(gthrefs));	localStorage.setItem(pgn+"gthrefn"+pn,JSON.stringify(gthrefns));	localStorage.setItem(pgn+"gtformn"+pn,JSON.stringify(gtformns));
	;}
	
	var gthrefv = JSON.parse(localStorage.getItem(pgn+"gthref"+pn));var gthrefnv = JSON.parse(localStorage.getItem(pgn+"gthrefn"+pn));var gtformnv = JSON.parse(localStorage.getItem(pgn+"gtformn"+pn));
	var gthrefhtml='';
	if(gthrefv){
		if(gthrefv.length == 35){gthrefv.splice(0,1);gthrefnv.splice(0,1);} 
		for(var i=gthrefv.length-1;i>=0;i--){
			if(!gthrefnv[i])gthrefnv[i] = gthrefv[i];
			if(gthrefnv[i])gthrefhtml += '<a href="#" style="white-space:normal" class="'+pgn+'gthrefhtm'+pn+' ui-btn ui-btn-a" data-nbr="'+i+'" data-form="'+gtformnv[i]+'" data-vlu="'+gthrefv[i]+'">'+gthrefnv[i]+'</a>';	
		;}
		if(gthrefhtml)$('#'+pgn+'gtdatsbtn'+pn).html(gthrefhtml);
	;}
	
	;})
	
	
	var gthrefv = JSON.parse(localStorage.getItem(pgn+"gthref"+pn));var gthrefnv = JSON.parse(localStorage.getItem(pgn+"gthrefn"+pn));var gtformnv = JSON.parse(localStorage.getItem(pgn+"gtformn"+pn));
	var gthrefhtml='';
	if(gthrefv){
		if(gthrefv.length == 35)gthrefv.splice(0,1); 
		for(var i=gthrefv.length-1;i>=0;i--){
			if(!gthrefnv[i])gthrefnv[i] = gthrefv[i];
			if(!i)i='0';
			if(gthrefnv[i])gthrefhtml += '<a href="#" style="white-space:normal" class="'+pgn+'gthrefhtm'+pn+' ui-btn ui-btn-a" data-nbr="'+i+'" data-form="'+gtformnv[i]+'" data-vlu="'+gthrefv[i]+'">'+gthrefnv[i]+'</a>';	
		;}
		if(gthrefhtml)$('#'+pgn+'gtdatsbtn'+pn).html(gthrefhtml);
	;}
	

$(document).on('click', '.'+pgn+'gthrefhtm'+pn,function (event){
	event.preventDefault();
	var $this = $(this);
	var gthrefdata = $this.attr('data-vlu');var gtformnvdata = $this.attr('data-form');
	var gthrefdats = $this.text();
	$('#'+pgn+'gthref'+pn).val(gthrefdata);$('#'+pgn+'gthrefnbr'+pn).val($this.attr('data-nbr'));sessionStorage.setItem(pgn+'gtform'+pn,gtformnvdata);
	if(gthrefdats==gthrefdata){$('#'+pgn+'gthrefn'+pn).val('');}else{$('#'+pgn+'gthrefn'+pn).val(gthrefdats);}
;})	

$('#'+pgn+'gthrefht'+pn).click(function (event){
	event.preventDefault();
	$('#'+pgn+'gthref'+pn).val('');$('#'+pgn+'gthrefn'+pn).val('');sessionStorage.setItem(pgn+'gtform'+pn,'');
;})	



$(document).on('click', '.'+pgn+'gtlnk'+pn,function (event){
	event.preventDefault();
	var $this = $(this);
	var gtlink = $this.attr('data-gtlink');var gtform = $this.attr('data-form');var gtlinkn = $this.text();
	if(gtlink){$('#'+pgn+'gthref'+pn).val(gtlink);}else{$('#'+pgn+'gthref'+pn).val('');}
	if(gtlinkn){$('#'+pgn+'gthrefn'+pn).val(gtlinkn);}else{$('#'+pgn+'gthrefn'+pn).val('');}
	if(gtform){sessionStorage.setItem(pgn+'gtform'+pn,gtform);}else{sessionStorage.setItem(pgn+'gtform'+pn,'');}
	$('#'+pgn+'gtlnk'+pn).hide();
	$('#'+pgn+'gtlnkform'+pn).show(); 		
;})	

$('#'+pgn+'gtlnk'+pn+' a.gtlnkb').click(function (event){
	event.preventDefault();
	$('#'+pgn+'gtlnk'+pn).hide();
	$('#'+pgn+'gtlnkform'+pn).show(); 		
;})	

$('#'+pgn+'gtlnk'+pn+' a.ui-icon-refresh').click(function (event){
	event.preventDefault();
	var linkhtml = $(this).attr('data-html');
	if(linkhtml){
	gtlink(pgn,pn,linkhtml);
	var gtlink = JSON.parse(sessionStorage.getItem(pgn+'gtlink'+pn));
	var gtlinkn = JSON.parse(sessionStorage.getItem(pgn+'gtlinkn'+pn));
	var gtlinkjs = JSON.parse(sessionStorage.getItem(pgn+'gtlinkjs'+pn));
	var gtform = JSON.parse(sessionStorage.getItem(pgn+'gtformn'+pn));
	var $gtlnk = $('#'+pgn+'gtlnk'+pn);
		//$gtlnk.find('div').height($(window).height()*0.75); 
		
		var gtlinkhtml = '';$gtlnk.find('div > ul').html('').hide();
		if(gtlink){
		if(gtlink.length){
			for(var i=0; i < gtlink.length; i++) {
			gtlinkhtml += '<li data-icon="edit"><a data-gtlink="'+gtlink[i]+'" data-form="'+gtform[i]+'" class="'+pgn+'gtlnk'+pn+' ui-btn ui-btn-a">'+gtlinkn[i]+'</a></li>';
			;}
			
			$gtlnk.find('div > ul').html(gtlinkhtml).show('slow');		
		;}
		;}
	;}
	function gtlink(pgn,pn,url){
		$.ajax({
   		type: 'GET',
    	url: url,
    	async: false,
    	jsonpCallback: 'datp',
    	contentType: 'application/json',
    	dataType: 'jsonp',
        success: gtdapt});
		
		function gtdapt(data) { 
		if(JSON.stringify(data.btn).length < 75000){
		var jsgtdate =[];var gtntitle =[];var gtnform =[]; var js = 0;
		for(var i=0; i < data.btn.length; i++) {	
				if(i<8){
				var jsgtdatep =data.btn[i].date+' '+data.btn[i].msg;
				jsgtdate.push(jsgtdatep);
				gtntitle.push(data.btn[i].title);
				gtnform.push(data.btn[i].gtform);	
				}
		;}//for(var
		sessionStorage.setItem(pgn+'gtlinkn'+pn,JSON.stringify(jsgtdate));
		sessionStorage.setItem(pgn+'gtlink'+pn,JSON.stringify(gtntitle));
		sessionStorage.setItem(pgn+'gtformn'+pn,JSON.stringify(gtnform));
		;}//if(JSON.stringify
		;}
	;}
;})	

var j = 0;	
$('#'+pgn+'gtlink'+pn).click(function (event){
	event.preventDefault();
	var linkhtml = $(this).attr('data-html');
	if(!sessionStorage.getItem(pgn+'gtlink'+pn) && linkhtml){gtlinkS(pgn,pn,linkhtml);}
	else if(linkhtml){
	var gtlink = JSON.parse(sessionStorage.getItem(pgn+'gtlink'+pn));
	var gtlinkn = JSON.parse(sessionStorage.getItem(pgn+'gtlinkn'+pn));
	var gtlinkjs = JSON.parse(sessionStorage.getItem(pgn+'gtlinkjs'+pn));
	var gtform = JSON.parse(sessionStorage.getItem(pgn+'gtformn'+pn));
	
		var gtlinkhtml = '';
		if(gtlink && gtlink.length){
			for(var i=0; i < gtlink.length; i++) {
			gtlinkhtml += '<li data-icon="edit"><a data-gtlink="'+gtlink[i]+'" data-form="'+gtform[i]+'" style="white-space:normal;" class="'+pgn+'gtlnk'+pn+' ui-btn ui-btn-a">'+gtlinkn[i]+'</a></li>';
			;}
			
			$gtlnk = $('#'+pgn+'gtlnk'+pn);
			$gtlnk.find('ul').html(gtlinkhtml);
			$('#'+pgn+'gtlnkform'+pn).hide();
			$gtlnk.show(); 				
		;}	
	;}
	
	
	function gtlinkS(pgn,pn,url){
		$.ajax({
   		type: 'GET',
    	url: url,
    	async: false,
    	jsonpCallback: 'datp',
    	contentType: 'application/json',
    	dataType: 'jsonp',
        success: gtdapt});
		
		function gtdapt(data) { 
		
		if(JSON.stringify(data.btn).length < 75000){
		var jsgtdate =[];var gtntitle =[];var gtnform =[]; var js = 0;
		for(var i=0; i < data.btn.length; i++) {	
				if(i<8){
				var jsgtdatep =data.btn[i].date+' '+data.btn[i].msg;
				jsgtdate.push(jsgtdatep);
				gtntitle.push(data.btn[i].title);
				gtnform.push(data.btn[i].gtform);	
				}
		;}//for(var
		sessionStorage.setItem(pgn+'gtlinkn'+pn,JSON.stringify(jsgtdate));
		sessionStorage.setItem(pgn+'gtlink'+pn,JSON.stringify(gtntitle));
		sessionStorage.setItem(pgn+'gtformn'+pn,JSON.stringify(gtnform));
		;}//if(JSON.stringify
		;}
	;}

;})	

}

//ints,urls - local app data

function gtdata(pgn,pj,pn,int,url,ints,urls,typ,d,mnh,day,yr,wdayn,sat,sun,gthtml,str,bgarea,bgareas,windowWidth){
		var jsvgts = localStorage.getItem(pgn+'jsvgts'+pn);//pgn+'jsvgts'+pn - local app data existing
		if(urls && !jsvgts){
			var intn = ints;var urln = urls;
			if(document.URL.indexOf('pj=') !== -1){
			intn = '../panel/'+pj+'/'+ints;urln = '../panel/'+pj+'/'+urls;}
		}else{var intn = int;var urln = url;}
		
		
	
		if(url || (urls && !jsvgts)){ 
		$.ajax({
   		type: 'GET',
    	url: intn,
    	async: false,
    	jsonpCallback: 'datp',
    	contentType: 'application/json',
    	dataType: 'jsonp',
        success: dapts});
		
		
		function dapts(data) {
		if(urls && !localStorage.getItem(pgn+'jsvgts'+pn)){	
			localStorage.setItem(pgn+'jsvgts'+pn,1);
			var jsvgt =[];jsvgt[0] =0;jsvgt[1] =url;
			localStorage.setItem(pgn+'gt'+pn+'jsvgt',JSON.stringify(jsvgt));
			var vp = 1;
		;}else{
			var jsvgt = localStorage.getItem(pgn+'gt'+pn+'jsvgt');
			if(jsvgt){jsvgt = JSON.parse(jsvgt);}else{jsvgt =[];jsvgt[0]=0;jsvgt[1]=0;}
			if(data.btn[0].jsvgt > jsvgt[0] || (data.btn[0].url != jsvgt[1] && jsvgt[1]) || jsvgt.length==1){
				 if(jsvgt.length>1){	
				 	jsvgt.splice(0,1,data.btn[0].jsvgt);jsvgt.splice(0,1,data.btn[0].url);jsvgt.splice(1,1,data.btn[0].update);
				 }else{
				 	jsvgt[0]= data.btn[0].jsvgt;jsvgt[0]= data.btn[0].url;jsvgt[1]= data.btn[0].update;
				 ;}
				 localStorage.setItem(pgn+'gt'+pn+'jsvgt',JSON.stringify(jsvgt));
				 
				 Object.keys(localStorage).forEach(function(key){
          		 if(key.indexOf(pgn+'gt'+pn+'js')==0){localStorage.removeItem(key);}
      			 });
				 
				 var vp = 1;
			;}else{
				 var vp = '';gtn(d,mnh,day,yr,pgn,pn,wdayn,sat,sun,gthtml,str,bgarea,bgareas,typ,windowWidth);
			}
		;}
		
		if(vp){	
		$.mobile.loading( "show", { text: "loading...", textVisible: true,theme: "a",html: ""});
		$.ajax({
   		type: 'GET',
    	url: urln,
    	async: false,
    	jsonpCallback: 'datp',
    	contentType: 'application/json',
    	dataType: 'jsonp',
        success: datp});
		
		function datp(data) { 
		
		if(JSON.stringify(data.btn).length < 750000){

		var gtndate =[];var gtnmnh =[];var gtnnbr =[];var gtnmsg =[]; 
		var jsgtdate =[]; var gtdiv =[];
		var bg ='';var icon ='';var title ='';var htmlfile ='';var div ='';
		if(typ){var wsp = 'white-space:normal;';}else{var wsp = '';}
		for(var i=0; i < data.btn.length; i++) {		
				var jsgtdatep =data.btn[i].date+'-'+data.btn[i].title;
				jsgtdate.push(jsgtdatep);
				if(data.btn[i].bg){bg ='background-color:'+data.btn[i].bg+';';}else{bg ='';}
				if(data.btn[i].icon){icon ="<span class='"+data.btn[i].icon+"' style='color:pink;'></span>";}else{icon ='';}
				if(data.btn[i].htmlt){title = data.btn[i].htmlt;}else{title ='&nbsp;';}		
				if(data.btn[i].html){
					
					if(data.btn[i].html.indexOf('[gt]') !== -1){
						var datahtml  = "data-url='"+data.btn[i].html+"' style='text-align:left' class='ui-btn ui-btn-z ui-mini imgspop'";		
					;}else if(data.btn[i].html.indexOf('.html') !== -1 || data.btn[i].html.indexOf('.php') !== -1 || data.btn[i].html.indexOf('.asp') !== -1){
						var datahtml  = "data-html='"+data.btn[i].html+"' style='text-align:left' class='ui-btn ui-btn-z ui-mini "+pgn+"gthtm"+pn+"'";
					;}else{
						var datahtml  = "data-url='"+data.btn[i].html+"' style='text-align:left' class='ui-btn ui-btn-z ui-mini imgspop'";		
					;}


				htmlfile = "data-dy='"+data.btn[i].msg+"' "+datahtml;}else{htmlfile ='';}	
				
				div = "<div style='width:100%;text-align:left;"+wsp+bg+"' data-date='"+data.btn[i].date+"' "+htmlfile+">"+icon+title+"</div>";
				gtdiv.push(div);
				if($.inArray(data.btn[i].mnh,gtnmnh)==-1)gtnmnh.push(data.btn[i].mnh);
				if($.inArray(data.btn[i].date,gtndate)==-1)gtndate.push(data.btn[i].date);
				if($.inArray(data.btn[i].title,gtnnbr)==-1){gtnnbr.push(data.btn[i].title);gtnmsg.push(data.btn[i].msg);}
		;}//for(var
		
		localStorage.setItem(pgn+'gt'+pn+"nmnh",JSON.stringify(gtnmnh));
		localStorage.setItem(pgn+'gt'+pn+"ndate",JSON.stringify(gtndate));
		localStorage.setItem(pgn+'gt'+pn+"nnbr",JSON.stringify(gtnnbr));
		localStorage.setItem(pgn+'gt'+pn+"nmsg",JSON.stringify(gtnmsg));
		
		localStorage.setItem(pgn+'gt'+pn+"jsgtdate",JSON.stringify(jsgtdate));	
		localStorage.setItem(pgn+'gt'+pn+"div",JSON.stringify(gtdiv)); 
		gtn(d,mnh,day,yr,pgn,pn,wdayn,sat,sun,gthtml,str,bgarea,bgareas,typ,windowWidth);
		$.mobile.loading("hide");
		;}//if(JSON.stringify
		;}//function datp(data)
		;}//if(localStorage.getItem(pgn+'jsclds'+pn)){
		;}//function dapts(data)

		}//if(url || (urls && !jsvgts)){
;}



function gtnn(pgn,pn,typ,str,windowWidth){ 
	if(!bgarea)var bgarea = 'rgba(0, 0, 0, 0.5)';
	if(!str)var str = '';

	if(typ){var hf = '<div class="xkn"></div><div style="background-color:rgba(255, 255, 255, 0.4);width:100%;">&nbsp;</div>';
	;}else{var hf = '<div class="xkn"></div><div style="background-color:rgba(255, 255, 255, 0.4);width:100%;padding-top:15px;padding-bottom:15px;">&nbsp;</div>';}
	var gtnbrmsgs = JSON.parse(localStorage.getItem(pgn+'gt'+pn));		
	
	if(typ){var vws = 'vws';var gtwdh = 'width:100%;';var gtwdhs = 'width:100%;';}else{var vws = 'vwsgt';var gtwdh = '';var gtwdhs = 'width:2200px;';}
	
	var mnn = '';var mnnn = '';var mnnnn = '';var mnnnnn = '';
	var strhtml = '<div class="xkn"></div><div class="'+vws+'" style="float:left;padding-top:3px;padding-bottom:3px;'+gtwdh+'"><div id="'+pgn+'owlclnn'+pn+'" style="text-align:left;" class="ui-btn ui-btn-z ui-mini">&nbsp;<span class="pigss-star"></span>'+str+'</div>';
	if(typ){
		if(gtnbrmsgs[2]){var owlmnsVLU = gtnbrmsgs[2];$('#'+pgn+'owlclns'+pn).html(strhtml+owlmnsVLU+'</div>'+hf);}else{var owlmnsVLU = '';$('#'+pgn+'owlclns'+pn).html(strhtml+'</div>'+hf);}
		if(gtnbrmsgs[15]){var mn = gtnbrmsgs[15].split(',');var mnvlu = gtnbrmsgs[16].split(',');
		if(gtnbrmsgs[17]){
			if(mnvlu[0]){mnvlu[0] ='?d='+mnvlu[0]+'&t='+gtnbrmsgs[18];}else{mnvlu[0] ='?d='+mnvlu[0];}
			if(mnvlu[1]){mnvlu[1] ='?d='+mnvlu[1]+'&t='+gtnbrmsgs[18];}else{mnvlu[1] ='?d='+mnvlu[1];}
			if(mnvlu[2]){mnvlu[2] ='?d='+mnvlu[2]+'&t'+gtnbrmsgs[18];}else{mnvlu[2] ='?d='+mnvlu[2];}
			if(mnvlu[3]){mnvlu[3] ='?d='+mnvlu[3]+'&t='+gtnbrmsgs[18];}else{mnvlu[3] ='?d='+mnvlu[3];}
		
			var formhtmln = " class='imgspop' data-url='"+gtnbrmsgs[17]+mnvlu[0]+"'";
			var formhtmlnn = " class='imgspop' data-url='"+gtnbrmsgs[17]+mnvlu[1]+"'";
			var formhtmlnnn = " class='imgspop' data-url='"+gtnbrmsgs[17]+mnvlu[2]+"'";
			var formhtmlnnnn= " class='imgspop' data-url='"+gtnbrmsgs[17]+mnvlu[3]+"'";
		
		}else{var formhtmln = '';var formhtmlnn = '';var formhtmlnnn = '';var formhtmlnnnn = '';}	
		var mnn ="<div class='xkn' style='float:left;'></div><div"+formhtmln+" style='float:left;padding-top:2px;padding-bottom:2px;'><div class='ui-btn ui-btn-z ui-mini'>"+mn[0]+"</div></div>";
		var mnnn ="<div class='xkn' style='float:left;'></div><div"+formhtmlnn+" style='float:left;padding-top:2px;padding-bottom:2px;'><div class='ui-btn ui-btn-z ui-mini'>"+mn[1]+"</div></div>";
		var mnnnn ="<div class='xkn' style='float:left;'></div><div"+formhtmlnnn+" style='float:left;padding-top:2px;padding-bottom:2px;'><div class='ui-btn ui-btn-z ui-mini'>"+mn[2]+"</div></div>";
		var mnnnnn ="<div class='xkn' style='float:left;'></div><div"+formhtmlnnnn+" style='float:left;padding-top:2px;padding-bottom:2px;'><div class='ui-btn ui-btn-z ui-mini'>"+mn[3]+"</div></div>";
			
				
		}else{var mn = '';}
	}else{
		if(gtnbrmsgs[2]){var owlmnsVLU = gtnbrmsgs[2];$('#'+pgn+'owlclnsv'+pn).html(strhtml+owlmnsVLU+'</div>'+hf);}else{var owlmnsVLU = '';$('#'+pgn+'owlclnsv'+pn).html(strhtml+'</div>'+hf);}
	;}
	
	
	
	if(gtnbrmsgs[3]){var owlmnsVLU = gtnbrmsgs[3];$('#'+pgn+'owlmn'+pn+'n1').html(mnn+owlmnsVLU+hf);}else{var owlmnsVLU = '';$('#'+pgn+'owlmn'+pn+'n1').html(mnn+hf);}
	if(gtnbrmsgs[4]){var owlmnsVLU = gtnbrmsgs[4];$('#'+pgn+'owlmn'+pn+'n2').html(mnn+owlmnsVLU+hf);}else{var owlmnsVLU = '';$('#'+pgn+'owlmn'+pn+'n2').html(hf);}
	if(gtnbrmsgs[5]){var owlmnsVLU = gtnbrmsgs[5];$('#'+pgn+'owlmn'+pn+'n3').html(mnnn+owlmnsVLU+hf);}else{var owlmnsVLU = '';$('#'+pgn+'owlmn'+pn+'n3').html(mnnn+hf);}
	if(gtnbrmsgs[6]){var owlmnsVLU = gtnbrmsgs[6];$('#'+pgn+'owlmn'+pn+'n4').html(mnnn+owlmnsVLU+hf);}else{var owlmnsVLU = '';$('#'+pgn+'owlmn'+pn+'n4').html(hf);}
	if(gtnbrmsgs[7]){var owlmnsVLU = gtnbrmsgs[7];$('#'+pgn+'owlmn'+pn+'n5').html(mnnnn+owlmnsVLU+hf);}else{var owlmnsVLU = '';$('#'+pgn+'owlmn'+pn+'n5').html(mnnnn+hf);}
	if(gtnbrmsgs[8]){var owlmnsVLU = gtnbrmsgs[8];$('#'+pgn+'owlmn'+pn+'n6').html(mnnnn+owlmnsVLU+hf);}else{var owlmnsVLU = '';$('#'+pgn+'owlmn'+pn+'n6').html(hf);}
	if(gtnbrmsgs[9]){var owlmnsVLU = gtnbrmsgs[9];$('#'+pgn+'owlmn'+pn+'n7').html(mnnnnn+owlmnsVLU+hf);}else{var owlmnsVLU = '';$('#'+pgn+'owlmn'+pn+'n7').html(mnnnnn+hf);}
	if(gtnbrmsgs[10]){var owlmnsVLU = gtnbrmsgs[10];$('#'+pgn+'owlmn'+pn+'n8').html(mnnnnn+owlmnsVLU+hf);}else{var owlmnsVLU = '';$('#'+pgn+'owlmn'+pn+'n8').html(hf);}

	//var wdwidth = $(window).width();
	var wdwidth = windowWidth;
	if(wdwidth<320){wdwidth=wdwidth*0.5;}else{if(typ){wdwidth=wdwidth;}else{wdwidth=wdwidth*0.3;};}
	
	$('#'+pgn+'owlclns'+pn).width(wdwidth);$('#'+pgn+'owlclnn'+pn).width(wdwidth);

	
		if(typ==1){
			$('#'+pgn+'owlcln'+pn).width(Math.ceil(wdwidth*4*0.85)).find('div').width(wdwidth*0.8);$('#'+pgn+'owlclns'+pn).width(Math.ceil(wdwidth*4*0.85));
		}else if(typ==2){
			$('#'+pgn+'owlcln'+pn).width(Math.ceil(wdwidth*4*0.485)).find('div').width(wdwidth*0.46);$('#'+pgn+'owlclns'+pn).width(Math.ceil(wdwidth*4*0.485));
		}else if(typ==5){
			$('#'+pgn+'owlcln'+pn).width(Math.ceil(wdwidth*4*0.35)).find('div').width(wdwidth*0.3);$('#'+pgn+'owlclns'+pn).width(Math.ceil(wdwidth*4*0.35));
		;}else{
			$('#'+pgn+'owlcln'+pn).width(Math.ceil(2200/wdwidth*2200*8));
		;}
;}


function gtndata(pgn,pj,pn,int,url,ints,urls,typ,str,windowWidth){
		var jsvgts = localStorage.getItem(pgn+'jsvgts'+pn);//pgn+'jsvgts'+pn - local app data existing
		if(urls && !jsvgts){
			var intn = ints;var urln = urls;
			if(document.URL.indexOf('pj=') !== -1){
			intn = '../panel/'+pj+'/'+ints;urln = '../panel/'+pj+'/'+urls;}
		}else{var intn = int;var urln = url;}
		
		
	
		if(url || (urls && !jsvgts)){ 
		$.ajax({
   		type: 'GET',
    	url: intn,
    	async: false,
    	jsonpCallback: 'datp',
    	contentType: 'application/json',
    	dataType: 'jsonp',
        success: dapts});
		
		
		function dapts(data) {
		if(urls && !localStorage.getItem(pgn+'jsvgts'+pn)){	
			localStorage.setItem(pgn+'jsvgts'+pn,1);
			var jsvgt =[];jsvgt[0] =0;jsvgt[1] =url;
			localStorage.setItem(pgn+'gt'+pn+'jsvgt',JSON.stringify(jsvgt));
			var vp = 1;
		;}else{
			var jsvgt = localStorage.getItem(pgn+'gt'+pn+'jsvgt');
			if(jsvgt){jsvgt = JSON.parse(jsvgt);}else{jsvgt =[];jsvgt[0]=0;jsvgt[1]=0;}
			if(data.btn[0].jsvgt > jsvgt[0] || (data.btn[0].url != jsvgt[1] && jsvgt[1]) || jsvgt.length==1){
				 if(jsvgt.length>1){	
				 	jsvgt.splice(0,1,data.btn[0].jsvgt);jsvgt.splice(0,1,data.btn[0].url);jsvgt.splice(1,1,data.btn[0].update);
				 }else{
				 	jsvgt[0]= data.btn[0].jsvgt;jsvgt[0]= data.btn[0].url;jsvgt[1]= data.btn[0].update;
				 ;}
				 localStorage.setItem(pgn+'gt'+pn+'jsvgt',JSON.stringify(jsvgt));
				 
				 Object.keys(localStorage).forEach(function(key){
          		 if(key.indexOf(pgn+'gt'+pn+'js')==0){localStorage.removeItem(key);}
      			 });
				 
				 var vp = 1;
			;}else{
				 var vp = '';gtnn(pgn,pn,typ,str,windowWidth);
			}
		;}
		
		if(vp){	 
		$.mobile.loading( "show", { text: "loading...", textVisible: true,theme: "a",html: ""});
		$.ajax({
   		type: 'GET',
    	url: urln,
    	async: false,
    	jsonpCallback: 'datp',
    	contentType: 'application/json',
    	dataType: 'jsonp',
        success: datp});
		
		function datp(data) {
		
		if(JSON.stringify(data.btn).length < 750000){
		var html =[];
		html[0] = data.btn[0].ver;html[1] = data.btn[0].date;html[2] = data.btn[0].title;
		html[3] = data.btn[0].mn1h;html[4] = data.btn[0].mn2h;html[5] = data.btn[0].mn3h;html[6] = data.btn[0].mn4h;
		html[7] = data.btn[0].mn5h;html[8] = data.btn[0].mn6h;html[9] = data.btn[0].mn7h;html[10] = data.btn[0].mn8h;
		html[11] = '';html[12] = '';html[13] = '';html[14] = '';
		html[15] = data.btn[0].mn;html[16] = data.btn[0].mnvlu;
		html[17] = data.btn[0].form;html[18] = data.btn[0].formtitle;
		
		localStorage.setItem(pgn+'gt'+pn,JSON.stringify(html));
		gtnn(pgn,pn,typ,str,windowWidth);
		$.mobile.loading("hide");
		;}//if(JSON.stringify
		;}//function datp(data)
		;}//if(localStorage.getItem(pgn+'jsclds'+pn)){
		;}//function dapts(data)

		}//if(url || (urls && !jsvgts)){
;}