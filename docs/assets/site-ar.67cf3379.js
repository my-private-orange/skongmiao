import{_ as X,u as $,l as D,m as j,s as z,e as T,o as I,c as M,f as x,w as S,F as J,v as K,k as Q}from"./index.b58bfd4d.js";var v=null;try{v=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function u(e,t,i){this.low=e|0,this.high=t|0,this.unsigned=!!i}u.prototype.__isLong__;Object.defineProperty(u.prototype,"__isLong__",{value:!0});function _(e){return(e&&e.__isLong__)===!0}u.isLong=_;var W={},Z={};function L(e,t){var i,r,h;return t?(e>>>=0,(h=0<=e&&e<256)&&(r=Z[e],r)?r:(i=o(e,(e|0)<0?-1:0,!0),h&&(Z[e]=i),i)):(e|=0,(h=-128<=e&&e<128)&&(r=W[e],r)?r:(i=o(e,e<0?-1:0,!1),h&&(W[e]=i),i))}u.fromInt=L;function E(e,t){if(isNaN(e))return t?y:p;if(t){if(e<0)return y;if(e>=k)return G}else{if(e<=-P)return w;if(e+1>=P)return H}return e<0?E(-e,t).neg():o(e%O|0,e/O|0,t)}u.fromNumber=E;function o(e,t,i){return new u(e,t,i)}u.fromBits=o;var b=Math.pow;function B(e,t,i){if(e.length===0)throw Error("empty string");if(e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return p;if(typeof t=="number"?(i=t,t=!1):t=!!t,i=i||10,i<2||36<i)throw RangeError("radix");var r;if((r=e.indexOf("-"))>0)throw Error("interior hyphen");if(r===0)return B(e.substring(1),t,i).neg();for(var h=E(b(i,8)),s=p,f=0;f<e.length;f+=8){var c=Math.min(8,e.length-f),F=parseInt(e.substring(f,f+c),i);if(c<8){var l=E(b(i,c));s=s.mul(l).add(E(F))}else s=s.mul(h),s=s.add(E(F))}return s.unsigned=t,s}u.fromString=B;function N(e,t){return typeof e=="number"?E(e,t):typeof e=="string"?B(e,t):o(e.low,e.high,typeof t=="boolean"?t:e.unsigned)}u.fromValue=N;var R=1<<16,Y=1<<24,O=R*R,k=O*O,P=k/2,V=L(Y),p=L(0);u.ZERO=p;var y=L(0,!0);u.UZERO=y;var q=L(1);u.ONE=q;var C=L(1,!0);u.UONE=C;var A=L(-1);u.NEG_ONE=A;var H=o(-1,2147483647,!1);u.MAX_VALUE=H;var G=o(-1,-1,!0);u.MAX_UNSIGNED_VALUE=G;var w=o(0,-2147483648,!1);u.MIN_VALUE=w;var n=u.prototype;n.toInt=function(){return this.unsigned?this.low>>>0:this.low};n.toNumber=function(){return this.unsigned?(this.high>>>0)*O+(this.low>>>0):this.high*O+(this.low>>>0)};n.toString=function(t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(w)){var i=E(t),r=this.div(i),h=r.mul(i).sub(this);return r.toString(t)+h.toInt().toString(t)}else return"-"+this.neg().toString(t);for(var s=E(b(t,6),this.unsigned),f=this,c="";;){var F=f.div(s),l=f.sub(F.mul(s)).toInt()>>>0,a=l.toString(t);if(f=F,f.isZero())return a+c;for(;a.length<6;)a="0"+a;c=""+a+c}};n.getHighBits=function(){return this.high};n.getHighBitsUnsigned=function(){return this.high>>>0};n.getLowBits=function(){return this.low};n.getLowBitsUnsigned=function(){return this.low>>>0};n.getNumBitsAbs=function(){if(this.isNegative())return this.eq(w)?64:this.neg().getNumBitsAbs();for(var t=this.high!=0?this.high:this.low,i=31;i>0&&(t&1<<i)==0;i--);return this.high!=0?i+33:i+1};n.isZero=function(){return this.high===0&&this.low===0};n.eqz=n.isZero;n.isNegative=function(){return!this.unsigned&&this.high<0};n.isPositive=function(){return this.unsigned||this.high>=0};n.isOdd=function(){return(this.low&1)===1};n.isEven=function(){return(this.low&1)===0};n.equals=function(t){return _(t)||(t=N(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low};n.eq=n.equals;n.notEquals=function(t){return!this.eq(t)};n.neq=n.notEquals;n.ne=n.notEquals;n.lessThan=function(t){return this.comp(t)<0};n.lt=n.lessThan;n.lessThanOrEqual=function(t){return this.comp(t)<=0};n.lte=n.lessThanOrEqual;n.le=n.lessThanOrEqual;n.greaterThan=function(t){return this.comp(t)>0};n.gt=n.greaterThan;n.greaterThanOrEqual=function(t){return this.comp(t)>=0};n.gte=n.greaterThanOrEqual;n.ge=n.greaterThanOrEqual;n.compare=function(t){if(_(t)||(t=N(t)),this.eq(t))return 0;var i=this.isNegative(),r=t.isNegative();return i&&!r?-1:!i&&r?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1};n.comp=n.compare;n.negate=function(){return!this.unsigned&&this.eq(w)?w:this.not().add(q)};n.neg=n.negate;n.add=function(t){_(t)||(t=N(t));var i=this.high>>>16,r=this.high&65535,h=this.low>>>16,s=this.low&65535,f=t.high>>>16,c=t.high&65535,F=t.low>>>16,l=t.low&65535,a=0,m=0,g=0,d=0;return d+=s+l,g+=d>>>16,d&=65535,g+=h+F,m+=g>>>16,g&=65535,m+=r+c,a+=m>>>16,m&=65535,a+=i+f,a&=65535,o(g<<16|d,a<<16|m,this.unsigned)};n.subtract=function(t){return _(t)||(t=N(t)),this.add(t.neg())};n.sub=n.subtract;n.multiply=function(t){if(this.isZero())return p;if(_(t)||(t=N(t)),v){var i=v.mul(this.low,this.high,t.low,t.high);return o(i,v.get_high(),this.unsigned)}if(t.isZero())return p;if(this.eq(w))return t.isOdd()?w:p;if(t.eq(w))return this.isOdd()?w:p;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(V)&&t.lt(V))return E(this.toNumber()*t.toNumber(),this.unsigned);var r=this.high>>>16,h=this.high&65535,s=this.low>>>16,f=this.low&65535,c=t.high>>>16,F=t.high&65535,l=t.low>>>16,a=t.low&65535,m=0,g=0,d=0,U=0;return U+=f*a,d+=U>>>16,U&=65535,d+=s*a,g+=d>>>16,d&=65535,d+=f*l,g+=d>>>16,d&=65535,g+=h*a,m+=g>>>16,g&=65535,g+=s*l,m+=g>>>16,g&=65535,g+=f*F,m+=g>>>16,g&=65535,m+=r*a+h*l+s*F+f*c,m&=65535,o(d<<16|U,m<<16|g,this.unsigned)};n.mul=n.multiply;n.divide=function(t){if(_(t)||(t=N(t)),t.isZero())throw Error("division by zero");if(v){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;var i=(this.unsigned?v.div_u:v.div_s)(this.low,this.high,t.low,t.high);return o(i,v.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?y:p;var r,h,s;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return y;if(t.gt(this.shru(1)))return C;s=y}else{if(this.eq(w)){if(t.eq(q)||t.eq(A))return w;if(t.eq(w))return q;var f=this.shr(1);return r=f.div(t).shl(1),r.eq(p)?t.isNegative()?q:A:(h=this.sub(t.mul(r)),s=r.add(h.div(t)),s)}else if(t.eq(w))return this.unsigned?y:p;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();s=p}for(h=this;h.gte(t);){r=Math.max(1,Math.floor(h.toNumber()/t.toNumber()));for(var c=Math.ceil(Math.log(r)/Math.LN2),F=c<=48?1:b(2,c-48),l=E(r),a=l.mul(t);a.isNegative()||a.gt(h);)r-=F,l=E(r,this.unsigned),a=l.mul(t);l.isZero()&&(l=q),s=s.add(l),h=h.sub(a)}return s};n.div=n.divide;n.modulo=function(t){if(_(t)||(t=N(t)),v){var i=(this.unsigned?v.rem_u:v.rem_s)(this.low,this.high,t.low,t.high);return o(i,v.get_high(),this.unsigned)}return this.sub(this.div(t).mul(t))};n.mod=n.modulo;n.rem=n.modulo;n.not=function(){return o(~this.low,~this.high,this.unsigned)};n.and=function(t){return _(t)||(t=N(t)),o(this.low&t.low,this.high&t.high,this.unsigned)};n.or=function(t){return _(t)||(t=N(t)),o(this.low|t.low,this.high|t.high,this.unsigned)};n.xor=function(t){return _(t)||(t=N(t)),o(this.low^t.low,this.high^t.high,this.unsigned)};n.shiftLeft=function(t){return _(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?o(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):o(0,this.low<<t-32,this.unsigned)};n.shl=n.shiftLeft;n.shiftRight=function(t){return _(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?o(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):o(this.high>>t-32,this.high>=0?0:-1,this.unsigned)};n.shr=n.shiftRight;n.shiftRightUnsigned=function(t){if(_(t)&&(t=t.toInt()),t&=63,t===0)return this;var i=this.high;if(t<32){var r=this.low;return o(r>>>t|i<<32-t,i>>>t,this.unsigned)}else return t===32?o(i,0,this.unsigned):o(i>>>t-32,0,this.unsigned)};n.shru=n.shiftRightUnsigned;n.shr_u=n.shiftRightUnsigned;n.toSigned=function(){return this.unsigned?o(this.low,this.high,!1):this};n.toUnsigned=function(){return this.unsigned?this:o(this.low,this.high,!0)};n.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()};n.toBytesLE=function(){var t=this.high,i=this.low;return[i&255,i>>>8&255,i>>>16&255,i>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]};n.toBytesBE=function(){var t=this.high,i=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,i>>>24,i>>>16&255,i>>>8&255,i&255]};u.fromBytes=function(t,i,r){return r?u.fromBytesLE(t,i):u.fromBytesBE(t,i)};u.fromBytesLE=function(t,i){return new u(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,i)};u.fromBytesBE=function(t,i){return new u(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],i)};const tt={class:"container"},et={__name:"site-ar",setup(e){$();const t=D(!1),i=D(["https://tool.vrwen.com/#/modelDetail?id=84656818026057728&type=1","https://tool.vrwen.com/#/modelDetail?id=84690793993998336&type=1","https://tool.vrwen.com/#/modelDetail?id=84969318911184896&type=1","https://tool.vrwen.com/#/modelDetail?id=85023007524917248&type=1","https://tool.vrwen.com/#/modelDetail?id=85038579000152064&type=1","https://tool.vrwen.com/#/modelDetail?id=85053199677001728&type=1","https://tool.vrwen.com/#/modelDetail?id=85314352500051968&type=1","https://tool.vrwen.com/#/modelDetail?id=85330228930547712&type=1","https://tool.vrwen.com/#/modelDetail?id=85379515156664320&type=1","https://tool.vrwen.com/#/modelDetail?id=88292836885270528&type=1","https://tool.vrwen.com/#/modelDetail?id=86141632457609216&type=1","https://tool.vrwen.com/#/modelDetail?id=86100401790783488&type=1","https://tool.vrwen.com/#/modelDetail?id=85687192885792768&type=1"]);return j(()=>{if(window.dispatchEvent(window.pageLoadedEvent),!t.value){for(var r=0;r<=i.value.length-1;r++)(function(h){const s=document.querySelector(`#target-${h}`);s.addEventListener("targetFound",()=>{console.log("targetFound",h),window.location.assign(i.value[h])}),s.addEventListener("targetLost",()=>{console.log("targetLost",h)})})(r);t.value=!0}}),z(()=>{document.querySelectorAll(".mindar-ui-overlay").forEach(r=>r.remove())}),(r,h)=>{const s=T("a-camera"),f=T("a-plane"),c=T("a-entity"),F=T("a-scene");return I(),M("div",tt,[x(F,{"mindar-image":"imageTargetSrc: target_statue.mind;","color-space":"sRGB",renderer:"colorManagement: true, physicallyCorrectLights","vr-mode-ui":"enabled: false","device-orientation-permission-ui":"enabled: false"},{default:S(()=>[x(s,{position:"0 0 0","look-controls":"enabled: false"}),(I(!0),M(J,null,K(i.value,(l,a)=>(I(),Q(c,{id:`target-${a}`,"mindar-image-target":`targetIndex: ${a}`,key:a},{default:S(()=>[x(f,{id:`card-plane-${a}`,position:"0 0 0",height:1280/960,width:"1",rotation:"0 0 0",material:"opacity: 0; transparent: true;"},null,8,["id"])]),_:2},1032,["id","mindar-image-target"]))),128))]),_:1})])}}};var it=X(et,[["__scopeId","data-v-5e849f03"]]);export{it as default};