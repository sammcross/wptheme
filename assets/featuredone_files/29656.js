var __ADGRX=__ADGRX||{};__ADGRX.namespace=function(n){for(var t=n.split("."),e=window,i=0;i<t.length;i++)e[t[i]]=e[t[i]]||{},e=e[t[i]];return e},__ADGRX.singleton=function(){for(var n,t=Array.prototype.slice.call(arguments),e=t.shift(),i=t.shift(),o=e.split("."),r=window,a=o.length-1,s=0;a>s;s++)r[o[s]]=r[o[s]]||{},r=r[o[s]];return n=r[o[a]],r[o[a]]=n||i.apply(null,t),r},__ADGRX.klass=function(n,t){return __ADGRX.singleton(n,function(){return t})},__ADGRX.regOnLoad=function(n){if("undefined"!=typeof window.addEventListener)window.addEventListener("load",n,!1);else if("undefined"!=typeof document.addEventListener)document.addEventListener("load",n,!1);else if("undefined"!=typeof window.attachEvent)window.attachEvent("onload",n);else if("function"==typeof window.onload){var t=window.onload;window.onload=function(){t(),n()}}else window.onload=n},__ADGRX.writeContainer=function(n,t){n.writeln('<div id="'+t+'" style="margin:0;padding:0;"></div>')},__ADGRX.namespace("__ADGRX.Creatives"),__ADGRX.klass("__ADGRX.EventQueue",function(){function n(){a.num_processed+=1,c=new Image,s.length>0?o():l=!1}function t(){a.num_loaded+=1,n()}function e(){a.num_error+=1,n()}function i(){a.num_aborted+=1,n()}function o(){l=!0;var n=s.shift();"undefined"!=typeof n&&"url"in n&&(c.onload=function(){t(),"function"==typeof n.callback&&n.callback()},c.onerror=function(){e(),"function"==typeof n.callback&&n.callback()},c.onabort=function(){i(),"function"==typeof n.callback&&n.callback()},c.src=n.url)}function r(){return l?!1:(o(),!0)}var a={num_processed:0,num_loaded:0,num_error:0,num_aborted:0},s=new Array,c=new Image,l=!1;return{dispatch:function(n,t){var e={url:n};return"function"==typeof t&&(e.callback=t),"string"==typeof n&&n.match(/^https?:\/\//)?(s.push(e),r()):void 0},stats:function(n){return n in a?a[n]:null}}}),__ADGRX.klass("__ADGRX.impression_trackers",function(n){var t=!1;if("secure"in n&&n.secure===!0&&(t=!0),"impression_trackers"in n&&null!=n.impression_trackers&&n.impression_trackers.constructor===Array)for(var e=__ADGRX.EventQueue(),i=0;n.impression_trackers[i];i++)(!t||String(n.impression_trackers[i]).toLowerCase().match(/^https:\/\//))&&e.dispatch(n.impression_trackers[i])}),__ADGRX.klass("__ADGRX.piggyback_html",function(n){for(var t=["piggyback_html","global_piggyback_html"],e=0,i=t.length;i>e;e++){var o=t[e];if(o in n&&null!=n[o]&&n[o].constructor===String){var r="contents"+String(Math.floor(1e7*Math.random())),a=document.createElement("iframe");a.width="1",a.height="1",a.marginHeight="0",a.marginWidth="0",a.scrolling="no",a.frameBorder="0",a.style.visibility="hidden",a.style.width="1px",a.style.height="1px",a.style.position="absolute",a.style.top="-1px",a.style.left="-1px",document.body.appendChild(a),a.contentWindow[r]="<!DOCTYPE html><html><body>"+n[o]+"</body></html>",a.src='javascript:window["'+r+'"]'}}}),__ADGRX.klass("__ADGRX.Creatives.ThirdPartyTag",function(n){return{piggyback:function(){__ADGRX.impression_trackers(n),__ADGRX.piggyback_html(n)}}});
(function() {
  ADGEAR_SOURCE_CLICKTRACKER = "https://rtb.adgrx.com/clicks/A_bBiXtpWfcX0iP4ChCHK8p6fbcR5bVMlKqzAEAsEgExGAQgASgBMIR7ONjnAUADSPKYtgFSUmh0dHA6Ly93d3cud2VkZGluZ2luc3BpcmFzaS5jb20vMjAxNS8wNS8xMS9iZXJ0YS1icmlkYWwtZmFsbC0yMDE1LXdlZGRpbmctZHJlc3Nlcy9YAmABaAF4AYoBBcAMhAkJmgELEhoYHlelBgfYBCOyARytAmQBYwEBAQEBAQEBAQEBAQMBAaIJuLgYAQEBwAEB5QEAZkBM6AED8AEFggIQkaq14gmBEeW9iG-JJwB27g==/http%3a%2f%2fadclick.g.doubleclick.net%2faclk%3fsa%3dL%26ai%3dCV0mfcjgxVufDFcLMpgOvlbCwD8av69oG5t7hhrUBwI23ARABIABg_aCZgegDggEXY2EtcHViLTkxMjkwNjY1NTc0MTM2NDTIAQmpAoVjAJudZak-4AIAqAMBmAQAqgTwAU_QHKjAtFMvumCuh7SGgQ5Htikaoi_1By-e2Kh82KPBrWtfHGt4kV-yzbvExPNtnUUBTG4_CjL4j36LabBnXpsOkUsox36xgWMGGLsJ0JK4ewGkS3XsFI8-Sgtx5nc9yalSSCZz3p0E4uw3JpgwuJkZhE7AnOD-LKs2AkyvNqfClJa5y1b5POrvEeo-sKVg1oyOULBuRiSJ4VUwAB5XMW3DkeI-tS0FqZpZciRlXMdAbn1ZJufbKSvxGWxr3hry4ZEaayjXchqR_T3weYJPQdLbsCnKg5aNSFsEHaz7_8ohWV4VL918s7OOgNW9IdGeI-AEAYAGjO3ls5TJuP3GAaAGIdgHAA%26num%3d1%26sig%3dAOD64_0ZaI0kJJMvp0zjY4yj0Kuam7nefw%26client%3dca-pub-9129066557413644%26adurl%3d";
  ADGEAR_SOURCE_CLICKTRACKER_EXPECTS_ENCODED = false;
  ADGEAR_SOURCE_CLICKTRACKER_IS_ENCODED = false;
  ADGEAR_SOURCE_CLICKTRACKER_IS_DOUBLE_ENCODED = false;
  var randomnum = "367261394&AG_RTB_DATA=request_id%3D872bca7a-7db7-11e5-b54c-94aab300402c%26spot_id%3D1%26flight_id%3D15748%26creative_id%3D29656%26bidder_id%3D1%26exchange_id%3D4%26exchange_seller_id%3D1&AG_RTB_SIG=2000e8670896c81e3a797db9b9c990060889b335&url=http%3a%2f%2fwww.weddinginspirasi.com%2f2015%2f05%2f11%2fberta-bridal-fall-2015-wedding-dresses%2f";
  var proto = "http:";
  if (((typeof __ADGEAR_SSL != "undefined") && __ADGEAR_SSL) || (window.location.protocol == "https:")) proto = "https:";
  if (randomnum.substring(0,2) == "__") randomnum = String(Math.random());
  document.writeln('<scr' + 'ipt type="text/ja' + 'vascr' + 'ipt" s' + 'rc="' +
      proto + '//dcs.adgear.com' + '/impressions/ext/p=' +
      '1639687' + '.js?AG_R=' + randomnum +
      '"></scr' + 'ipt>');
})();
__ADGRX.Creatives.ThirdPartyTag({}).piggyback();
(function() {
  
  var _p1 = new Image();
  _p1.src = "https://cm.adgrx.com/bridge?AG_PID=google";
  
  
})();