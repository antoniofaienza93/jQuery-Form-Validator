/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.3.72
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(a,b){a.formUtils.registerLoadedModule("file");var c="undefined"!=typeof b.FileReader,d=function(b){var c=a.split((b.valAttr("allowing")||"").toLowerCase());return a.inArray("jpg",c)>-1&&a.inArray("jpeg",c)===-1?c.push("jpeg"):a.inArray("jpeg",c)>-1&&a.inArray("jpg",c)===-1&&c.push("jpg"),c},e=function(a,b,c,d){var e=d[b]||"";a.errorMessageKey="",a.errorMessage=e.replace("%s",c)},f=function(c,d,e){var f=new FileReader,g=new Image;f.readAsDataURL(c),f.onload=function(c){g.onload=function(){a(b).trigger("imageValidation",[this]),d(this)},g.onerror=function(){e()},g.src=c.target.result}};a.formUtils.addValidator({name:"mime",validatorFunction:function(b,f,g,h){if(c){var i=!0,j=f.get(0).files||[],k="",l=d(f);return j.length&&(a.each(j,function(b,c){return i=!1,k=c.type||c.name.substring(c.name.lastIndexOf(".")+1),a.each(l,function(a,b){if(i=k.indexOf(b)>-1)return!1}),i}),i||(a.formUtils.warn("Trying to upload a file with mime type "+k+" which is not allowed"),e(this,"wrongFileType",l.join(", "),h))),i}return a.formUtils.warn("FileReader not supported by browser, will check file extension"),a.formUtils.validators.validate_extension.validatorFunction(b,f,g,h)},errorMessage:"",errorMessageKey:"wrongFileType"}),a.formUtils.addValidator({name:"extension",validatorFunction:function(b,c,f,g){var h=!0,i=this,j=d(c);return a.each(c.get(0).files||[b],function(b,c){var d="string"==typeof c?c:c.value||c.fileName||c.name,f=d.substr(d.lastIndexOf(".")+1);if(a.inArray(f.toLowerCase(),j)===-1)return h=!1,e(i,"wrongFileType",j.join(", "),g),!1}),h},errorMessage:"",errorMessageKey:"wrongFileType"}),a.formUtils.addValidator({name:"size",validatorFunction:function(b,d,f,g){var h=d.valAttr("max-size");if(!h)return a.formUtils.warn('Input "'+d.attr("name")+'" is missing data-validation-max-size attribute',!0),!0;if(!c)return!0;var i=a.formUtils.convertSizeNameToBytes(h),j=!0;return a.each(d.get(0).files||[],function(a,b){return j=b.size<=i}),j||e(this,"wrongFileSize",h,g),j},errorMessage:"",errorMessageKey:"wrongFileSize"}),a.formUtils.convertSizeNameToBytes=function(a){return a=a.toUpperCase(),"M"===a.substr(a.length-1,1)?1024*parseInt(a.substr(0,a.length-1),10)*1024:"MB"===a.substr(a.length-2,2)?1024*parseInt(a.substr(0,a.length-2),10)*1024:"KB"===a.substr(a.length-2,2)?1024*parseInt(a.substr(0,a.length-2),10):"B"===a.substr(a.length-1,1)?parseInt(a.substr(0,a.length-1),10):parseInt(a,10)},a.formUtils.checkImageDimension=function(a,b,c){var d=!1,e={width:0,height:0},f=function(a){a=a.replace("min","").replace("max","");var b=a.split("x");e.width=b[0],e.height=b[1]?b[1]:b[0]},g=!1,h=!1,i=b.split("-");return 1===i.length?0===i[0].indexOf("min")?g=i[0]:h=i[0]:(g=i[0],h=i[1]),g&&(f(g),(a.width<e.width||a.height<e.height)&&(d=c.imageTooSmall+" ("+c.min+" "+e.width+"x"+e.height+"px)")),!d&&h&&(f(h),(a.width>e.width||a.height>e.height)&&(d=a.width>e.width?c.imageTooWide+" "+e.width+"px":c.imageTooTall+" "+e.height+"px",d+=" ("+c.max+" "+e.width+"x"+e.height+"px)")),d},a.formUtils.checkImageRatio=function(a,b,c){var d=a.width/a.height,e=function(a){var b=a.replace("max","").replace("min","").split(":");return b[0]/b[1]},f=b.split("-"),g=function(a,b,c){return a>=b&&a<=c};if(1===f.length){if(d!==e(f[0]))return c.imageRatioNotAccepted}else if(2===f.length&&!g(d,e(f[0]),e(f[1])))return c.imageRatioNotAccepted;return!1},a.formUtils.addAsyncValidator({name:"dimension",validatorFunction:function(b,d,e,g,h){if(c){var i=e.get(0).files||[],j=this;e.attr("data-validation").indexOf("mime")===-1?(alert("You should validate file type being jpg, gif or png on input "+e[0].name),b(!1)):i.length>1?(alert("Validating image dimensions does not support inputs allowing multiple files"),b(!1)):0===i.length?b(!0):f(i[0],function(c){var d=!1;e.valAttr("dimension")&&(d=a.formUtils.checkImageDimension(c,e.valAttr("dimension"),h)),!d&&e.valAttr("ratio")&&(d=a.formUtils.checkImageRatio(c,e.valAttr("ratio"),h)),d?(j.errorMessage=h.wrongFileDim+" "+e.valAttr("has-not-valid-dim"),b(!1)):b(!0)},function(a){throw a})}else b(!0)},errorMessage:"",errorMessageKey:""}),a(b).one("validatorsLoaded formValidationSetup",function(b,c,d){var e;e=c?c.find('input[type="file"]'):a('input[type="file"]'),a.formUtils.dialogs.removeInputStylingAndMessage(e,d)})}(a,window)});