var outbrain_Strip_box_version="6.5.0.1",outbrain_box_strip_template_object=typeof outbrain_box_strip_template_object==="function"?outbrain_box_strip_template_object:function(w){function j(a,b,c,d){this.url=a;this.width=b;this.height=c;this.isDefault=d}outbrain_box_strip_template_object.baseConstructor.call(this,w);this.positionDynSecondLine=this.positionFirstLine=this.positionSecondLine=false;this.positionRec=true;this.positionsStars=false;this.containerId="ob_strip_container";this.imagesPreload=
function(){};this.buildYouMightLike=function(a){a=this.getYouMightAlsoLike(a);return a!==""?"<div class='strip-like'>"+a+"</div>":""};this.buildDomRecommendations=function(){var a=[];a.push('<div style="clear:both;"/>');a.push('<div id="$FIELDSET_ID_$INDEX_$TEMPLATE_NAME" class="outbrain_stripBox_template" style="display:none;">');a.push("$PRE_WHAT_IS");a.push(" $YOU_MIGHT_LIKE_TITLE");a.push('  <div id="ob_strip_container_rel_$INDEX_$TEMPLATE_NAME" >');a.push('    <div  id="ob_strip_container_$INDEX_$TEMPLATE_NAME" >');
a.push("    </div>");a.push('    <div  id="ob_strip_container_shadow_outer_$INDEX_$TEMPLATE_NAME" >');a.push('      <div  id="ob_strip_container_shadow_$INDEX_$TEMPLATE_NAME" >');a.push('        <div style="clear:both"></div>');a.push("      </div>");a.push("    </div>");a.push(" </div>");a.push("$POST_WHAT_IS");a.push("</div>");a.push('<div style="clear:both;"/>');return a.join("")};this.renderOneRecommendation=function(a,b){var c=[],d=outbrain_settings.get(a.index,"sourceNameAfter",true);b&&c.push('<div class="item-container-shadow ">');
c.push('<div id="item-container-$WIDGET_INDEX-$DOC_IDX" class="$ITEM_CONTAINER_CLASS $ITEM_AD_CONTAINER_CLASS $ITEM_LAST" onMouseOver="$MOUSE_OVER" onMouseOut="$MOUSE_OUT">');c.push('  <div class="top-bar"></div>');c.push('    <a href="$ORIGINAL_URL"  $ONMOUSEDOWN class="strip-rec-link-img" target="$ITAM_URL_TARGET" $DOC_REL>');c.push('      <img width="$IMG_WIDTH" height="$IMG_HEIGHT" title="$DOC_TITLE_CLEAN" class="strip-img" alt="$DOC_TITLE_CLEAN" src="$IMAGE_URL" onError="$IMAGE-ERROR" >');c.push("      $VIDEO_DIV_IMAGE");
c.push("    </a>");c.push("    $AD_DIV_PAID_DISTRIBUTION");c.push('    <div class="strip-text-content">');d||c.push("      $SOURCE_CODE");c.push('      <a href="$ORIGINAL_URL" $ONMOUSEDOWN $DOC_REL target="$ITAM_URL_TARGET" class="strip-rec-link-title">$DOC_TITLE $SHOW_POPUP_DESCRIPTION_INTITLE </a>  ');d&&c.push("      $SOURCE_CODE ");c.push("    $OWNER_ZAPPER");c.push("    </div>");c.push("</div>");b&&c.push("</div>");c=c.join("");if(d=document.getElementById(this.containerId+(b?"_shadow":"")+"_"+
a.index+"_"+this.templateName)){c=this.replaceOneStripRec(c,a,b);c=outbrain_settings.isBackwards?this.backwardsReplace(c):c;outbrain_dom.elementInsertion(d,c,b,true)}};this.externalReplace=function(a){var b=outbrain_settings.get(a,"whatIsPosition",outbrain_settings.whatIs.position.BOTTOM);this.templateDOM=this.templateDOM.replace(/\$YOU_MIGHT_LIKE_TITLE/g,this.buildYouMightLike(a));this.templateDOM=this.templateDOM.replace(/\$PRE_WHAT_IS/g,b===outbrain_settings.whatIs.position.TOP?outbrain_whatIs.buildDomWhatIs(a,
this):"");this.templateDOM=this.templateDOM.replace(/\$POST_WHAT_IS/g,b===outbrain_settings.whatIs.position.BOTTOM?outbrain_whatIs.buildDomWhatIs(a,this):"")};this.showRecommendations=function(a,b){var c=outbrain_settings.get(a,"stripFlavor",outbrain_settings.Enums.StripFlavors.COLS),d=b.jsonObj,g=this.getElementWithFullName(this.containerId,a);if(!g||!this.positionRec)return false;if(!this.recommendationsShowBefore(a)){var i=outbrain_template_manager.isAllSameSource(d.response.documents),m=d.response.documents.doc.length,
l=outbrain_template_manager.getRecommendationsPerDoc(outbrain_template_manager.DATA_REC_MIXED,d.response.documents.doc,null,null);OB_widgetObjArray[a].imageSpec=j.readFromJson(l[0]);for(b=0;b<m;b+=1){var k={};k.index=a;k.docRecommendation=l[b];k.docIdx=b;k.isAllSameSource=i;k.isOwner=typeof OB_user_mode==="number"&&OB_user_mode===1;k.linkColor="black";k.textColor="black";k.isLast=b+1===m;this.renderOneRecommendation(k,false);c!==outbrain_settings.Enums.StripFlavors.ROWS&&c!==outbrain_settings.Enums.StripFlavors.LIGHT&&
this.renderOneRecommendation(k,true)}if(b>0){this.setFlavor(a,c);g.style.display="block"}this.showHideRecsElements(a,d);this.enableBlogExternalElements(a)}outbrain_log.addSign(a,"Set recommendations for index:"+a,"recRdy")};this.setFlavor=function(a,b){if(b!==outbrain_settings.Enums.StripFlavors.LIGHT){var c=!outbrain_settings.get(a,"noRecsBorder",false),d=c?3:0,g=c?2:0,i=c?-18:-20,m=a+"_"+this.templateName,l=OB_widgetObjArray[a].imageSpec.getWidth(),k=OB_widgetObjArray[a].imageSpec.getHeight(),n=
l+g*2+d*2,o=k+g*2+d*2,p=OB_widgetObjArray[a].language.IS_RTL?"right":"left",t=OB_widgetObjArray[a].language.IS_RTL?"left":"right",h=OB_widgetObjArray[a].language.IS_RTL?"RTL":"LTR",q=OB_widgetObjArray[a].language.IS_RTL?"2px 0 0 2px":"2px 2px 0 0",r=outbrain_settings.get(a,"imagePadding")!==null?outbrain_settings.getNum(a,"imagePadding"):Math.round(OB_widgetObjArray[a].imageSpec.getWidth()/12.11),s=outbrain_settings.get(a,"stripItemWidth")!==null?outbrain_settings.getNum(a,"stripItemWidth"):Math.round(OB_widgetObjArray[a].imageSpec.getWidth()*
3),u=outbrain_settings.get(a,"isPaidLabel",true),e=[],f="";e.push("#ob_strip_container_rel_$POSTFIX{width:100%;position:relative;overflow:hidden} ");e.push("#ob_strip_container_rel_$POSTFIX .strip-img{width:$IMAGE_WIDTH;height:$IMAGE_HEIGHTpx;border:none !important;margin:0px !important;display:block;padding:0px !important;background-image: url(http://widgets.outbrain.com/strip_default.png)} ");e.push("#ob_strip_container_rel_$POSTFIX .strip-rec-link-title {color:$TEXT_COLOR;font-size:13px;font-weight:normal;line-height:16px;text-decoration:none;} ");
e.push("#ob_strip_container_rel_$POSTFIX .strip-rec-link-source{color:$LINK_COLOR;font-size:12px;line-height:16px;text-decoration:none;} ");e.push("#outbrain_container_$POSTFIX .strip-like{padding-bottom:4px;font-size:14px;line-height:16px;height:20px;font-weight:bold;} ");e.push(".item-container a,.item-container a:hover,.item-container a:visited{border:medium none;text-decoration:none;}");e.push("#ob_strip_container_rel_$POSTFIX .ob_video{border:medium none;position:absolute}");e.push("#ob_strip_container_rel_$POSTFIX .strip-rec-link-img{ position:relative;} ");
e.push('.wbr:before {content: "\\200B"} ');if(b===outbrain_settings.Enums.StripFlavors.COLS){e.push("#ob_strip_container_$POSTFIX{width:100%;position:absolute;} ");e.push("#ob_strip_container_rel_$POSTFIX A{display:block;text-align:$FLOAT;} ");e.push("#ob_strip_container_rel_$POSTFIX .strip-text-content A{width:auto;padding:0px $BORDER_PADDINGpx;} ");e.push("#ob_strip_container_rel_$POSTFIX .strip-text-content{padding-top:6px;}");e.push("#ob_strip_container_$POSTFIX .item-container{padding-$PADDING_SIDE:$PADDING_AMOUNTpx;float:$FLOAT;width:$WIDTHpx;margin-bottom:300px;} ");
e.push("#ob_strip_container_$POSTFIX .item-container-last{padding-$PADDING_SIDE:0px;} ");e.push("#ob_strip_container_shadow_$POSTFIX{position:static;overflow-x:hidden;} ");e.push("#ob_strip_container_shadow_$POSTFIX .item-container{width:$WIDTHpx;visibility:hidden;} ");e.push("#ob_strip_container_shadow_outer_$POSTFIX {position:static;width:100%;} ");e.push("#ob_strip_container_shadow_$POSTFIX .item-container-shadow{width:0px;float:left;overflow-x:hidden;} ");if(u!==false){e.push("#ob_strip_container_rel_$POSTFIX .item-container-ad{position: relative}");
e.push("#ob_strip_container_rel_$POSTFIX .item-container-ad .paid-distribution a,#ob_strip_container_rel_$POSTFIX .item-container-ad .paid-distribution a:hover{text-decoration:none;background-color:$TEXT_COLOR;  border-color:#FFF;  border-style:solid;  border-width:$BORDER_PAID_WIDTH;color:#FFF;float:$FLOAT;font-family:verdana,arial,sans-serif;font-size:9px;font-size-adjust:none;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:normal;  line-height:normal;  padding:2px 4px; position:relative;  top:"+
i+"px;  z-index:10;clear:both}");e.push("#ob_strip_container_rel_$POSTFIX .item-container-ad .strip-text-content{position:relative;top: "+i+"px;clear:both}")}}else if(b===outbrain_settings.Enums.StripFlavors.ROWS){e.push("#ob_strip_container_rel_$POSTFIX .strip-rec-link-img {float:$FLOAT;} ");e.push("#ob_strip_container_rel_$POSTFIX .strip-text-content {text-align:$FLOAT;padding-$FLOAT:"+(n+5)+"px} ");e.push("#ob_strip_container_rel_$POSTFIX .item-container{position:relative;height:$HEIGHTpx;padding-bottom:$PADDING_AMOUNTpx;width:100%;clear:both;} ");
e.push("#ob_strip_container_rel_$POSTFIX A{display:block;} ");e.push("#ob_strip_container_shadow_outer_$POSTFIX {display:none;} ");e.push("#ob_strip_container_rel_$POSTFIX .item-container-ad .paid-distribution a,#ob_strip_container_rel_$POSTFIX .item-container-ad .paid-distribution a:hover{text-decoration:none;background-color:$TEXT_COLOR;  border-color:#FFF;  border-style:solid;  border-width:$BORDER_PAID_WIDTH;  color:#FFF;  font-family:verdana,arial,sans-serif;  font-size:9px;  font-size-adjust:none;  font-stretch:normal;  font-style:normal;  font-variant:normal;  font-weight:normal;  line-height:normal;  padding:2px 4px; position:absolute; $FLOAT:0;  top:"+
(o+i)+"px;  z-index:10;}")}else if(b===outbrain_settings.Enums.StripFlavors.SBS){e.push("#ob_strip_container_rel_$POSTFIX .strip-rec-link-img {float:$FLOAT;} ");e.push("#ob_strip_container_rel_$POSTFIX .strip-text-content {text-align:$FLOAT;padding-$FLOAT:"+(n+5)+"px} ");e.push("#ob_strip_container_$POSTFIX{width:100%;position:absolute;} ");e.push("#ob_strip_container_rel_$POSTFIX A{display:block;direction:$DIRECTION;text-align:$FLOAT;} ");e.push("#ob_strip_container_rel_$POSTFIX .strip-text-content A{padding:0px $BORDER_PADDINGpx;} ");
e.push("#ob_strip_container_$POSTFIX .item-container{padding-$PADDING_SIDE:$PADDING_AMOUNTpx;float:$FLOAT;width:$3WIDTHpx;margin-bottom:300px;position:relative;} ");e.push("#ob_strip_container_shadow_$POSTFIX{overflow-x:hidden;} ");e.push("#ob_strip_container_shadow_$POSTFIX .item-container{width:$3WIDTHpx;visibility:hidden;} ");e.push("#ob_strip_container_shadow_outer_$POSTFIX {width:100%;} ");e.push("#ob_strip_container_shadow_$POSTFIX .item-container-shadow{width:5px;float:left;overflow-x:hidden;} ");
e.push("#ob_strip_container_rel_$POSTFIX .item-container-ad .paid-distribution a,#ob_strip_container_rel_$POSTFIX .item-container-ad .paid-distribution a:hover{text-decoration:none;background-color:$TEXT_COLOR;  border-color:#FFF;  border-style:solid;  border-width:$BORDER_PAID_WIDTH;  color:#FFF;  font-family:verdana,arial,sans-serif;  font-size:9px;  font-size-adjust:none;  font-stretch:normal;  font-style:normal;  font-variant:normal;  font-weight:normal;  line-height:normal;  padding:2px 4px; position:absolute; $FLOAT:0;  top:"+
(o+i)+"px;  z-index:10;}")}if(c>0){e.push("#ob_strip_container_rel_$POSTFIX        .strip-rec-link-img{ border:$BORDER_WIDTHpx solid #ccc ;display:block;padding:$BORDER_PADDINGpx;width:$IMAGE_WIDTHpx;height:$IMAGE_HEIGHTpx;} ");e.push("#ob_strip_container_rel_$POSTFIX .hover .strip-rec-link-img{ border:$BORDER_WIDTHpx solid $TEXT_COLOR ;display:block;padding:$BORDER_PADDINGpx;width:$IMAGE_WIDTHpx;height:$IMAGE_HEIGHTpx;} ")}f=e.join("");f=f.replace(/\$POSTFIX/g,m);f=f.replace(/\$FLOAT/g,p);f=f.replace(/\$IMAGE_HEIGHT/g,
k);f=f.replace(/\$IMAGE_WIDTH/g,l);f=f.replace(/\$WIDTH/g,l+d*2+g+2);f=f.replace(/\$HEIGHT/g,k+d*2+g+2);f=f.replace(/\$3WIDTH/g,s);f=f.replace(/\$PADDING_SIDE/g,t);f=f.replace(/\$PADDING_AMOUNT/g,r);f=f.replace(/\$DIRECTION/g,h);f=f.replace(/\$BORDER_PADDING/g,d);f=f.replace(/\$BORDER_WIDTH/g,g);f=f.replace(/\$TEXT_COLOR/g,this.getColors(a,false));f=f.replace(/\$LINK_COLOR/g,this.getColors(a,true));f=f.replace(/\$BORDER_PAID_WIDTH/g,q);f=outbrain_settings.isBackwards?this.backwardsReplace(f):f;outbrain_rater.injectCssString(f,
OB_widgetObjArray[a].widgetId)}};this.replaceOneStripRec=function(a,b,c){var d,g,i=b.index;g=outbrain_settings.get(i,"displaySameSiteTitle");var m=outbrain_settings.get(i,"openNewTab"),l=outbrain_settings.get(i,"addNofollow",null);d=outbrain_settings.get(i,"sameSourceVisible",false);var k=outbrain_settings.get(i,"isPaidLabel",true),n=outbrain_settings.get(i,"stripFlavor",outbrain_settings.Enums.StripFlavors.COLS),o=outbrain_settings.get(i,"recsTarget","_self"),p=outbrain_settings.get(i,"flagPublisherZappingFeature",
true),t=this.getVideoIcon(i);n=n===outbrain_settings.Enums.StripFlavors.LIGHT;var h=outbrain_template_manager.getRecommendationDataPerDoc(this.templateName,b.index,b.docRecommendation,b.docIdx),q=h.pubId,r=h.isAdId,s=h.bocr,u=h.origUrl,e=j.readFromJson(b.docRecommendation);if(h.postLink===null||h.linkText===null||h.sourceName===null)return false;var f=outbrain_settings.get(b.index,"sourceNameAfter",true),v="";if(typeof s==="string"&&!isNaN(q)&&q>0&&b.isOwner&&p===true)v=this.renderRecCancelationForPublishersLink("https://my.outbrain.com/manage/"+
(r?"sponsored":"organic-links")+"?publisherId="+q+"&ruleValue="+encodeURIComponent(u));else if(typeof s==="string"&&s.length>0&&b.isOwner&&p===false)v=this.renderRecCancelation(i,b.docIdx,h.bocr);p=typeof b.docRecommendation.showLogo==="boolean"&&b.docRecommendation.showLogo===true?this.createPopUpDescription():"";if(b.isAllSameSource&&h.isSameSource&&!d)d=g="";else{d=outbrain_settings.get(i,"sameSrcLoctionString",null)!==null?outbrain_settings.get(i,"sameSrcLoctionString","NA"):outbrain_language_manager.getThisSiteString(i);
g=h.isSameSource&&g?d:h.sourceName;g=this.buildLocationString(i,g,h.isSameSource,h.pubDate);d='<a href="$ORIGINAL_URL" $ONMOUSEDOWN $DOC_REL target="$ITAM_URL_TARGET" class="strip-rec-link-source">$SOURCE_TITLE $SHOW_POPUP_DESCRIPTION_INSOURCE</a> '}a=a.replace(/\$SOURCE_CODE/g,d);d="_blank";d=!h.isAdId&&!m?o:d;d=h.isSameSource&&!h.isAdId&&!m?o:d;m="";if(h.isAdId&&typeof l==="string"&&(l===outbrain_settings.rater.recommendations.rel.REL_ALL||l===outbrain_settings.rater.recommendations.rel.REL_ADS))m=
"rel='nofollow'";if(!h.isAdId&&typeof l==="string"&&(l===outbrain_settings.rater.recommendations.rel.REL_ALL||l===outbrain_settings.rater.recommendations.rel.REL_ORGANIC))m="rel='nofollow'";l="javasctipt:outbrain_template_manager.templates['"+this.templateName+"'].onMouseOut ($WIDGET_INDEX,$DOC_IDX,'item-container');";o="javasctipt:outbrain_template_manager.templates['"+this.templateName+"'].onMouseOver($WIDGET_INDEX,$DOC_IDX,'item-container');";q="javasctipt:outbrain_template_manager.templates['"+
this.templateName+"'].imageError(this);";r=typeof outbrain_browsers.isMobile==="boolean"&&outbrain_browsers.isMobile===true;a=a.replace(/\$MOUSE_OVER/g,r||n?"":o);a=a.replace(/\$MOUSE_OUT/g,r||n?"":l);a=a.replace(/\$ONMOUSEDOWN/g,n?"":"onMouseDown=\"this.href='$POST_LINK';return true;\"");a=a.replace(/\$WIDGET_INDEX/g,i);a=a.replace(/\$DOC_IDX/g,b.docIdx);a=a.replace(/\$ITEM_LAST/g,b.isLast?"item-container-last":"");a=a.replace(/\$ITEM_CONTAINER_CLASS/g,"item-container");a=a.replace(/\$ITEM_AD_CONTAINER_CLASS/g,
h.isAdId?"item-container-ad":"");a=a.replace(/\$ORIGINAL_URL/g,h.origUrl);a=a.replace(/\$POST_LINK/g,h.postLink);a=a.replace(/\$ITAM_URL_TARGET/g,d);a=a.replace(/\$DOC_TITLE_CLEAN/g,this.insertStringCleaner(h.linkText));a=a.replace(/\$DOC_TITLE/g,this.insertStringBreak(h.linkText));a=a.replace(/\$IMAGE_URL/g,e.getUrl());a=a.replace(/\$VIDEO_DIV_IMAGE/g,!c&&h.isVideo===true?this.buildDomVideoDiv(i,t):"");a=a.replace(/\$AD_DIV_PAID_DISTRIBUTION/g,h.isAdId&&k&&!c?this.buildDomPaidDiv(i):"");a=a.replace(/\$SOURCE_TITLE/g,
this.insertStringBreak(g));a=a.replace(/\$DOC_REL/g,m);a=a.replace(/\$OWNER_ZAPPER/g,v);a=a.replace(/\$SHOW_POPUP_DESCRIPTION_INSOURCE/g,f===true?p:"");a=a.replace(/\$SHOW_POPUP_DESCRIPTION_INTITLE/g,f===false?p:"");a=a.replace(/\$IDX/g,i).replace(/\$PCID/g,b.docRecommendation.pc_id).replace("$CAMPAIGNID",b.docRecommendation.campaign_id);a=a.replace(/\$IMG_WIDTH/g,e.getWidth());a=a.replace(/\$IMG_HEIGHT/g,e.getHeight());return a=a.replace(/\$IMAGE-ERROR/g,q)};this.backwardsReplace=function(a){a=a.replace(/(strip-rec-link-img)/g,
"ob-$1");a=a.replace(/(strip-img)/g,"ob-$1");a=a.replace(/(strip-text-content)/g,"ob-$1");a=a.replace(/(item-container[. {])/g,"ob-$1");a=a.replace(/(item-container-ad[. {])/g,"ob-$1");a=a.replace(/(paid-distribution)/g,"ob-$1");return a=a.replace(/(top-bar)/g,"ob-$1")};this.imageError=function(a){a.src=j.DEFAULT_IMG_URL;a.alt="";a.title=""};this.balloonWhatsThis=function(a,b){b=typeof b==="string"&&b.length>0?b:outbrain_language_manager.whatsThis(a);return'<a class=\'\' href="javascript:void(0)" onClick="javascript:'+
this.callForToolTip(a,"this",OB_widgetObjArray[a].language.IS_RTL)+'" >'+b+"</a>"};this.buildDomPaidDiv=function(a){var b=this.callForToolTip(a,"this",!OB_widgetObjArray[a].language.IS_RTL),c=[];c.push('<div class="paid-distribution">');c.push('<a href="javascript:void(0)" onClick="'+b+'">');c.push(outbrain_language_manager.getSponsoredLinkImage(a));c.push("</a></div>");return c.join("")};this.buildDomVideoDiv=function(a,b){if(b.url===null||b.length>0||b.url===null||b.url==="none")return"";a=outbrain_browsers.ie6===
true&&b.ie!==null?b.ie:b.url;var c=[];c.push('<div class="ob_video" style="top:'+b.top+"px;left:"+b.left+'px">');c.push('  <img title="Play Video" class="strip-video-img" alt="Play Video" src="'+a+'" onError="this.style.display=\'none\'" >');c.push("</div>");return c.join("")};this.getVideoIcon=function(a){var b=outbrain_settings.get(a,"videoIconUrl","http://widgets.outbrain.com/images/videoIcons/video_icon.png");a=outbrain_settings.get(a,"videoIconPosition");if(typeof b==="string"){var c=b.split("|"),
d=a.toLowerCase().split("x");b=c.length>0?c[0]:"default";a=d.length>0?d[0]:5;d=d.length>1?d[1]:5;c=c.length>1?c[1]:b;if(b.toLowerCase()==="default"){b=outbrain_settings.domains.js+"images/videoIcons/video_icon.png";c=outbrain_settings.domains.js+"images/videoIcons/playVideo.gif"}var g={};g.url=b;g.top=a;g.left=d;g.ie=c;return g}return null};this.insertStringBreak=function(a){if(!a)return"";return a.replace(/([a-z\/\\])([A-Z])/gm,"$1<wbr><span class='wbr'></span>$2").replace(/(\.)/gm,".<wbr><span class='wbr'></span>")};
this.insertStringCleaner=function(a){if(!a)return"";return a.replace(/(["'])/gm,"")};this.onMouseOver=function(a,b,c){c=typeof c==="string"?c:"item-container";a=document.getElementById(c+"-"+a+"-"+b);b=a.className;if(b.indexOf("hover")<=0)a.className=b+" hover"};this.onMouseOut=function(a,b,c){c=typeof c==="string"?c:"item-container";a=document.getElementById(c+"-"+a+"-"+b);b=a.className;if(b.indexOf("hover")>0)a.className=b.replace("hover","")};this.getStyle=function(a,b){var c;if(a.currentStyle)c=
a.currentStyle[b];else if(window.getComputedStyle)c=document.defaultView.getComputedStyle(a,null).getPropertyValue(b);return c};this.getColors=function(a,b){var c=document.getElementById(outbrain_template_manager.initElementDivId+a);if(c){var d=document.createElement(b?"a":"span");b&&d.setAttribute("href","void(0)");d.setAttribute("id","ob_test_ele_"+a);d.innerHTML=".";c.appendChild(d);var g=this.getStyle(d,"color");c.removeChild(d);if(!b&&(g==="rgb(0, 0, 0)"||g==="#000000"))g="#555"}return g};j.DEFAULT_WIDTH=
109;j.DEFAULT_HEIGHT=109;j.DEFAULT_IMG_URL="http://widgets.outbrain.com/strip_default.png";j.CURRENT_IMG_WIDTH=j.DEFAULT_WIDTH;j.CURRENT_IMG_HEIGHT=j.DEFAULT_HEIGHT;j.readFromJson=function(a){var b=j.DEFAULT_IMG_URL,c=j.DEFAULT_WIDTH,d=j.DEFAULT_HEIGHT;if(a=a.thumbnail){b=a.url;c=a.width;d=a.height;j.CURRENT_IMG_WIDTH=Number(c);j.CURRENT_IMG_HEIGHT=Number(d)}return new j(b,c,d,true)};j.prototype.getUrl=function(){return this.url};j.prototype.getWidth=function(){return this.width};j.prototype.getHeight=
function(){return this.height}};outbrain_box_strip_template_object.prototype=outbrain_template_object;outbrain_box_strip_template_object.prototype.constructor=outbrain_box_strip_template_object;outbrain_box_strip_template_object.baseConstructor=outbrain_template_object;outbrain_template_manager.addTemplate({stripBox:outbrain_box_strip_template_object});