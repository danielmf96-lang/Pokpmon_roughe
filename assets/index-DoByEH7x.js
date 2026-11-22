(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ao="187",Th=0,qo=1,wh=2,tr=1,Ah=2,Ki=3,Xn=0,Ge=1,Xe=2,Ti=0,Qi=1,Ke=2,$o=3,Yo=4,Rh=5,Ei=100,Ch=101,Ph=102,Lh=103,Ih=104,Dh=200,Nh=201,Uh=202,Fh=203,xc=204,Mc=205,Oh=206,Bh=207,zh=208,kh=209,Gh=210,Hh=211,Vh=212,Wh=213,Xh=214,ha=0,ua=1,da=2,is=3,fa=4,pa=5,ma=6,ga=7,yc=0,qh=1,$h=2,Ln=0,Sc=1,bc=2,Ec=3,oo=4,Tc=5,wc=6,Ac=7,Rc=300,Ai=301,ss=302,Ar=303,Rr=304,_a=1e3,Cn=1001,va=1002,Ue=1003,Yh=1004,Ss=1005,qe=1006,Cr=1007,Vn=1008,Ze=1009,Cc=1010,Pc=1011,rs=1012,lo=1013,vn=1014,on=1015,xn=1016,co=1017,ho=1018,Ri=1020,Lc=35902,Ic=35899,Dc=1021,Nc=1022,mn=1023,qn=1026,Wn=1027,uo=1028,fo=1029,ii=1030,po=1031,mo=1033,er=33776,nr=33777,ir=33778,sr=33779,xa=35840,Ma=35841,ya=35842,Sa=35843,ba=36196,Ea=37492,Ta=37496,wa=37488,Aa=37489,lr=37490,Ra=37491,Ca=37808,Pa=37809,La=37810,Ia=37811,Da=37812,Na=37813,Ua=37814,Fa=37815,Oa=37816,Ba=37817,za=37818,ka=37819,Ga=37820,Ha=37821,Va=36492,Wa=36494,Xa=36495,qa=36283,$a=36284,cr=36285,Ya=36286,Kh=3200,Ka=0,Zh=1,Hn="",ke="srgb",hr="srgb-linear",ur="linear",me="srgb",Pr=7680,Jh=519,Qh=512,jh=513,tu=514,Uc=515,eu=516,nu=517,Fc=518,Oc=519,iu=35044,Ko="300 es",ln=2e3,as=2001;function su(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ru(){const i=dr("canvas");return i.style.display="block",i}const Zo={};function Jo(...i){const t="THREE."+i.shift();console.log(t,...i)}function Bc(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Wt(...i){i=Bc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function he(...i){i=Bc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function rr(...i){const t=i.join(" ");t in Zo||(Zo[t]=!0,Wt(...i))}function au(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ou={[ha]:ha,[da]:ma,[fa]:fa,[is]:pa,[ua]:ua,[ma]:da,[ga]:ga,[pa]:is};class ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lr=Math.PI/180,Za=180/Math.PI;function Fi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function lu(i,t){return(i%t+t)%t}function Ir(i,t,e){return(1-e)*i+e*t}function cu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function go(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function hu(i,t){if(t.constructor===Float32Array)return i;const e=go(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function uu(i,t){if(t.constructor===Float32Array)return i;const e=go(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const Lo=class Lo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lo.prototype.isVector2=!0;let ct=Lo;class oi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],m=r[a+2],x=r[a+3];if(u!==x||l!==f||c!==d||h!==m){let p=l*f+c*d+h*m+u*x;p<0&&(f=-f,d=-d,m=-m,x=-x,p=-p);let g=1-o;if(p<.9995){const v=Math.acos(p),E=Math.sin(v);g=Math.sin(g*v)/E,o=Math.sin(o*v)/E,l=l*g+f*o,c=c*g+d*o,h=h*g+m*o,u=u*g+x*o}else{l=l*g+f*o,c=c*g+d*o,h=h*g+m*o,u=u*g+x*o;const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-o*d,t[e+2]=c*m+h*d+o*f-l*u,t[e+3]=h*m-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Io=class Io{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dr.copy(this).projectOnVector(t),this.sub(Dr)}reflect(t){return this.sub(Dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Io.prototype.isVector3=!0;let I=Io;const Dr=new I,Qo=new oi,Do=class Do{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=s[0],p=s[3],g=s[6],v=s[1],E=s[4],S=s[7],A=s[2],T=s[5],_=s[8];return r[0]=a*x+o*v+l*A,r[3]=a*p+o*E+l*T,r[6]=a*g+o*S+l*_,r[1]=c*x+h*v+u*A,r[4]=c*p+h*E+u*T,r[7]=c*g+h*S+u*_,r[2]=f*x+d*v+m*A,r[5]=f*p+d*E+m*T,r[8]=f*g+d*S+m*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nr.makeScale(t,e)),this}rotate(t){return rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nr.makeRotation(-t)),this}translate(t,e){return rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Do.prototype.isMatrix3=!0;let $t=Do;const Nr=new $t,jo=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tl=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function du(){const i={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hn?ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[hr]:{primaries:t,whitePoint:n,transfer:ur,toXYZ:jo,fromXYZ:tl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:me,toXYZ:jo,fromXYZ:tl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}const le=du();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ui;class fu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ui===void 0&&(ui=dr("canvas")),ui.width=t.width,ui.height=t.height;const s=ui.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ui}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=dr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pu=0;class _o{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Fi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ur(s[a].image)):r.push(Ur(s[a]))}else r=Ur(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ur(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}let mu=0;const Fr=new I;class He extends ai{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Cn,s=Cn,r=qe,a=Vn,o=mn,l=Ze,c=He.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Fi(),this.name="",this.source=new _o(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Fr).x}get height(){return this.source.getSize(Fr).y}get depth(){return this.source.getSize(Fr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _a:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _a:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Rc;He.DEFAULT_ANISOTROPY=1;const No=class No{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,S=(d+1)/2,A=(g+1)/2,T=(h+f)/4,_=(u+x)/4,y=(m+p)/4;return E>S&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=_/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=y/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=_/r,s=y/r),this.set(n,s,r,e),this}let v=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};No.prototype.isVector4=!0;let be=No;class gu extends ai{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new He({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new _o(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends gu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class zc extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _u extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const gr=class gr{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,m,x,p)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,m,x,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/di.setFromMatrixColumn(t,0).length(),r=1/di.setFromMatrixColumn(t,1).length(),a=1/di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=m+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f+x*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){const f=a*l,d=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vu,t,xu)}lookAt(t,e,n){const s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Fn.crossVectors(n,$e),Fn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Fn.crossVectors(n,$e)),Fn.normalize(),bs.crossVectors($e,Fn),s[0]=Fn.x,s[4]=bs.x,s[8]=$e.x,s[1]=Fn.y,s[5]=bs.y,s[9]=$e.y,s[2]=Fn.z,s[6]=bs.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],p=n[10],g=n[14],v=n[3],E=n[7],S=n[11],A=n[15],T=s[0],_=s[4],y=s[8],D=s[12],R=s[1],N=s[5],F=s[9],H=s[13],L=s[2],G=s[6],q=s[10],O=s[14],et=s[3],W=s[7],j=s[11],tt=s[15];return r[0]=a*T+o*R+l*L+c*et,r[4]=a*_+o*N+l*G+c*W,r[8]=a*y+o*F+l*q+c*j,r[12]=a*D+o*H+l*O+c*tt,r[1]=h*T+u*R+f*L+d*et,r[5]=h*_+u*N+f*G+d*W,r[9]=h*y+u*F+f*q+d*j,r[13]=h*D+u*H+f*O+d*tt,r[2]=m*T+x*R+p*L+g*et,r[6]=m*_+x*N+p*G+g*W,r[10]=m*y+x*F+p*q+g*j,r[14]=m*D+x*H+p*O+g*tt,r[3]=v*T+E*R+S*L+A*et,r[7]=v*_+E*N+S*G+A*W,r[11]=v*y+E*F+S*q+A*j,r[15]=v*D+E*H+S*O+A*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],p=t[11],g=t[15],v=l*d-c*f,E=o*d-c*u,S=o*f-l*u,A=a*d-c*h,T=a*f-l*h,_=a*u-o*h;return e*(x*v-p*E+g*S)-n*(m*v-p*A+g*T)+s*(m*E-x*A+g*_)-r*(m*S-x*T+p*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],p=t[14],g=t[15],v=e*o-n*a,E=e*l-s*a,S=e*c-r*a,A=n*l-s*o,T=n*c-r*o,_=s*c-r*l,y=h*x-u*m,D=h*p-f*m,R=h*g-d*m,N=u*p-f*x,F=u*g-d*x,H=f*g-d*p,L=v*H-E*F+S*N+A*R-T*D+_*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/L;return t[0]=(o*H-l*F+c*N)*G,t[1]=(s*F-n*H-r*N)*G,t[2]=(x*_-p*T+g*A)*G,t[3]=(f*T-u*_-d*A)*G,t[4]=(l*R-a*H-c*D)*G,t[5]=(e*H-s*R+r*D)*G,t[6]=(p*S-m*_-g*E)*G,t[7]=(h*_-f*S+d*E)*G,t[8]=(a*F-o*R+c*y)*G,t[9]=(n*R-e*F-r*y)*G,t[10]=(m*T-x*S+g*v)*G,t[11]=(u*S-h*T-d*v)*G,t[12]=(o*D-a*N-l*y)*G,t[13]=(e*N-n*D+s*y)*G,t[14]=(x*E-m*A-p*v)*G,t[15]=(h*A-u*E+f*v)*G,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,m=r*u,x=a*h,p=a*u,g=o*u,v=l*c,E=l*h,S=l*u,A=n.x,T=n.y,_=n.z;return s[0]=(1-(x+g))*A,s[1]=(d+S)*A,s[2]=(m-E)*A,s[3]=0,s[4]=(d-S)*T,s[5]=(1-(f+g))*T,s[6]=(p+v)*T,s[7]=0,s[8]=(m+E)*_,s[9]=(p-v)*_,s[10]=(1-(f+x))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=di.set(s[0],s[1],s[2]).length();const o=di.set(s[4],s[5],s[6]).length(),l=di.set(s[8],s[9],s[10]).length();r<0&&(a=-a),en.copy(this);const c=1/a,h=1/o,u=1/l;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,e.setFromRotationMatrix(en),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=ln,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===ln)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===as)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ln,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s);let m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===ln)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===as)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};gr.prototype.isMatrix4=!0;let fe=gr;const di=new I,en=new fe,vu=new I(0,0,0),xu=new I(1,1,1),Fn=new I,bs=new I,$e=new I,el=new fe,nl=new oi;class Dn{constructor(t=0,e=0,n=0,s=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return el.makeRotationFromQuaternion(t),this.setFromRotationMatrix(el,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nl.setFromEuler(this),this.setFromQuaternion(nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class vo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mu=0;const il=new I,fi=new oi,Sn=new fe,Es=new I,Hi=new I,yu=new I,Su=new oi,sl=new I(1,0,0),rl=new I(0,1,0),al=new I(0,0,1),ol={type:"added"},bu={type:"removed"},pi={type:"childadded",child:null},Or={type:"childremoved",child:null};class De extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new I,e=new Dn,n=new oi,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new $t}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(sl,t)}rotateY(t){return this.rotateOnAxis(rl,t)}rotateZ(t){return this.rotateOnAxis(al,t)}translateOnAxis(t,e){return il.copy(t).applyQuaternion(this.quaternion),this.position.add(il.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sl,t)}translateY(t){return this.translateOnAxis(rl,t)}translateZ(t){return this.translateOnAxis(al,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Es.copy(t):Es.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Hi,Es,this.up):Sn.lookAt(Es,Hi,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),fi.setFromRotationMatrix(Sn),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(he("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ol),pi.child=t,this.dispatchEvent(pi),pi.child=null):he("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bu),Or.child=t,this.dispatchEvent(Or),Or.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ol),pi.child=t,this.dispatchEvent(pi),pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,t,yu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,Su,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}De.DEFAULT_UP=new I(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ge extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eu={type:"move"};class Br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Eu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function zr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=lu(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=zr(a,r,t+1/3),this.g=zr(a,r,t),this.b=zr(a,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=kc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return le.workingToColorSpace(ze.copy(this),t),Math.round(se(ze.r*255,0,255))*65536+Math.round(se(ze.g*255,0,255))*256+Math.round(se(ze.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(ze.copy(this),e);const n=ze.r,s=ze.g,r=ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=ke){le.workingToColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,s=ze.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Ts);const n=Ir(On.h,Ts.h,e),s=Ir(On.s,Ts.s,e),r=Ir(On.l,Ts.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new te;te.NAMES=kc;class ji{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new te(t),this.density=e}clone(){return new ji(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tu extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const nn=new I,bn=new I,kr=new I,En=new I,mi=new I,gi=new I,ll=new I,Gr=new I,Hr=new I,Vr=new I,Wr=new be,Xr=new be,qr=new be;class rn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),nn.subVectors(t,e),s.cross(nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){nn.subVectors(s,e),bn.subVectors(n,e),kr.subVectors(t,e);const a=nn.dot(nn),o=nn.dot(bn),l=nn.dot(kr),c=bn.dot(bn),h=bn.dot(kr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Wr.setScalar(0),Xr.setScalar(0),qr.setScalar(0),Wr.fromBufferAttribute(t,e),Xr.fromBufferAttribute(t,n),qr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Wr,r.x),a.addScaledVector(Xr,r.y),a.addScaledVector(qr,r.z),a}static isFrontFacing(t,e,n,s){return nn.subVectors(n,e),bn.subVectors(t,e),nn.cross(bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),nn.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;mi.subVectors(s,n),gi.subVectors(r,n),Gr.subVectors(t,n);const l=mi.dot(Gr),c=gi.dot(Gr);if(l<=0&&c<=0)return e.copy(n);Hr.subVectors(t,s);const h=mi.dot(Hr),u=gi.dot(Hr);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(mi,a);Vr.subVectors(t,r);const d=mi.dot(Vr),m=gi.dot(Vr);if(m>=0&&d<=m)return e.copy(r);const x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(gi,o);const p=h*m-d*u;if(p<=0&&u-h>=0&&d-m>=0)return ll.subVectors(r,s),o=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(ll,o);const g=1/(p+x+f);return a=x*g,o=f*g,e.copy(n).addScaledVector(mi,a).addScaledVector(gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class li{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(t.matrixWorld),this.union(ws)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vi),As.subVectors(this.max,Vi),_i.subVectors(t.a,Vi),vi.subVectors(t.b,Vi),xi.subVectors(t.c,Vi),Bn.subVectors(vi,_i),zn.subVectors(xi,vi),Jn.subVectors(_i,xi);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-Jn.z,Jn.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,Jn.z,0,-Jn.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-Jn.y,Jn.x,0];return!$r(e,_i,vi,xi,As)||(e=[1,0,0,0,1,0,0,0,1],!$r(e,_i,vi,xi,As))?!1:(Rs.crossVectors(Bn,zn),e=[Rs.x,Rs.y,Rs.z],$r(e,_i,vi,xi,As))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Tn=[new I,new I,new I,new I,new I,new I,new I,new I],sn=new I,ws=new li,_i=new I,vi=new I,xi=new I,Bn=new I,zn=new I,Jn=new I,Vi=new I,As=new I,Rs=new I,Qn=new I;function $r(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qn.fromArray(i,r);const o=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),h=n.dot(Qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ae=new I,Cs=new ct;let wu=0;class cn extends ai{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=iu,this.updateRanges=[],this.gpuType=on,this.version=0,this._normalizationScale=t!==void 0?go(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Cs.fromBufferAttribute(this,e),Cs.applyMatrix3(t),this.setXY(e,Cs.x,Cs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):hu(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):uu(t,this.array)}}class Gc extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hc extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Au=new li,Wi=new I,Yr=new I;class Oi{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Au.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wi.subVectors(t,this.center);const e=Wi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Wi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wi.copy(t.center).add(Yr)),this.expandByPoint(Wi.copy(t.center).sub(Yr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ru=0;const Qe=new fe,Kr=new De,Mi=new I,Ye=new li,Xi=new li,Ie=new I;class Te extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(su(t)?Hc:Gc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return Kr.lookAt(t),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&he('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Xi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(Ye.min,Xi.min),Ye.expandByPoint(Ie),Ie.addVectors(Ye.max,Xi.max),Ye.expandByPoint(Ie)):(Ye.expandByPoint(Xi.min),Ye.expandByPoint(Xi.max))}Ye.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ie.fromBufferAttribute(o,c),l&&(Mi.fromBufferAttribute(t,c),Ie.add(Mi)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&he('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){he("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new cn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new I,l[D]=new I;const h=new I,u=new I,f=new I,d=new ct,m=new ct,x=new ct,p=new I,g=new I;function v(D,R,N){c[D]=c[R]=c[N]=1,h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,N),d.fromBufferAttribute(r,D),m.fromBufferAttribute(r,R),x.fromBufferAttribute(r,N),u.sub(h),f.sub(h),m.sub(d),x.sub(d);const F=1/(m.x*x.y-x.x*m.y);isFinite(F)&&(p.copy(u).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(F),g.copy(f).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(F),o[D].add(p),o[R].add(p),o[N].add(p),l[D].add(g),l[R].add(g),l[N].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let D=0,R=E.length;D<R;++D){const N=E[D],F=N.start,H=N.count;for(let L=F,G=F+H;L<G;L+=3)v(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const S=new I,A=new I,T=new I,_=new I;function y(D){T.fromBufferAttribute(s,D),_.copy(T);const R=o[D];S.copy(R),S.sub(T.multiplyScalar(T.dot(R))).normalize(),A.crossVectors(_,R);const F=A.dot(l[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,F)}for(let D=0,R=n.count;D<R;++D)c[D]&&y(D);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,m=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let g=0;g<h;g++)f[m++]=c[d++]}return new cn(f,h,u)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zr=new I,Cu=new I,Pu=new $t;class Gn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Zr.subVectors(n,e).cross(Cu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Zr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pu.getNormalMatrix(t),s=this.coplanarPoint(Zr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Lu=0;class Bi extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Qi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xc,this.blendDst=Mc,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new te().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const wn=new I,Jr=new I,Ps=new I,Ls=new I;class xo{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jr.copy(t).add(e).multiplyScalar(.5),Ps.copy(e).sub(t).normalize(),Ls.copy(this.origin).sub(Jr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ps),o=Ls.dot(this.direction),l=-Ls.dot(Ps),c=Ls.lengthSq(),h=Math.abs(1-a*a);let u,f,d,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){const x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Jr).addScaledVector(Ps,f),d}intersectSphere(t,e){if(t.radius<0)return null;wn.subVectors(t.center,this.origin);const n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,f=t.y-a.y,d=t.z-a.z,m=e.x-a.x,x=e.y-a.y,p=e.z-a.z,g=n.x-a.x,v=n.y-a.y,E=n.z-a.z,S=Math.abs(l),A=Math.abs(c),T=Math.abs(h);let _,y,D,R,N,F,H,L,G,q,O,et;if(S>=A&&S>=T?(D=l,F=u,G=m,et=g,l>=0?(_=c,y=h,R=f,N=d,H=x,L=p,q=v,O=E):(_=h,y=c,R=d,N=f,H=p,L=x,q=E,O=v)):A>=T?(D=c,F=f,G=x,et=v,c>=0?(_=h,y=l,R=d,N=u,H=p,L=m,q=E,O=g):(_=l,y=h,R=u,N=d,H=m,L=p,q=g,O=E)):(D=h,F=d,G=p,et=E,h>=0?(_=l,y=c,R=u,N=f,H=m,L=x,q=g,O=v):(_=c,y=l,R=f,N=u,H=x,L=m,q=v,O=g)),D===0)return null;const W=_/D,j=y/D,tt=1/D,At=R-W*F,kt=N-j*F,$=H-W*G,gt=L-j*G,Rt=q-W*et,Ft=O-j*et,xt=Rt*gt-Ft*$,zt=At*Ft-kt*Rt,_e=$*kt-gt*At;if(s){if(xt<0||zt<0||_e<0)return null}else if((xt<0||zt<0||_e<0)&&(xt>0||zt>0||_e>0))return null;const Gt=xt+zt+_e;if(Gt===0)return null;const Kt=tt*(xt*F+zt*G+_e*et);return(Gt>0?Kt<0:Kt>0)?null:this.at(Kt/Gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cl=new fe,jn=new xo,Is=new Oi,hl=new I,Ds=new I,Ns=new I,Us=new I,Qr=new I,Fs=new I,ul=new I,Os=new I;class ne extends De{constructor(t=new Te,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Qr.fromBufferAttribute(u,t),a?Fs.addScaledVector(Qr,h):Fs.addScaledVector(Qr.sub(e),h))}e.add(Fs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(r),jn.copy(t.ray).recast(t.near),!(Is.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Is,hl)===null||jn.origin.distanceToSquared(hl)>(t.far-t.near)**2))&&(cl.copy(r).invert(),jn.copy(t.ray).applyMatrix4(cl),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){const p=f[m],g=a[p.materialIndex],v=Math.max(p.start,d.start),E=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let S=v,A=E;S<A;S+=3){const T=o.getX(S),_=o.getX(S+1),y=o.getX(S+2);s=Bs(this,g,t,n,c,h,u,T,_,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){const v=o.getX(p),E=o.getX(p+1),S=o.getX(p+2);s=Bs(this,a,t,n,c,h,u,v,E,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){const p=f[m],g=a[p.materialIndex],v=Math.max(p.start,d.start),E=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=v,A=E;S<A;S+=3){const T=S,_=S+1,y=S+2;s=Bs(this,g,t,n,c,h,u,T,_,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){const v=p,E=p+1,S=p+2;s=Bs(this,a,t,n,c,h,u,v,E,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Iu(i,t,e,n,s,r,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Xn,o),l===null)return null;Os.copy(o),Os.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Os);return c<e.near||c>e.far?null:{distance:c,point:Os.clone(),object:i}}function Bs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ds),i.getVertexPosition(l,Ns),i.getVertexPosition(c,Us);const h=Iu(i,t,e,n,Ds,Ns,Us,ul);if(h){const u=new I;rn.getBarycoord(ul,Ds,Ns,Us,u),s&&(h.uv=rn.getInterpolatedAttribute(s,o,l,c,u,new ct)),r&&(h.uv1=rn.getInterpolatedAttribute(r,o,l,c,u,new ct)),a&&(h.normal=rn.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};rn.getNormal(Ds,Ns,Us,f.normal),h.face=f,h.barycoord=u}return h}class Vc extends He{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ue,h=Ue,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dl extends cn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const yi=new fe,fl=new fe,zs=[],pl=new li,Du=new fe,qi=new ne,$i=new Oi;class ml extends ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Du)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yi),pl.copy(t.boundingBox).applyMatrix4(yi),this.boundingBox.union(pl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yi),$i.copy(t.boundingSphere).applyMatrix4(yi),this.boundingSphere.union($i)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(qi.geometry=this.geometry,qi.material=this.material,qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$i.copy(this.boundingSphere),$i.applyMatrix4(n),t.ray.intersectsSphere($i)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,yi),fl.multiplyMatrices(n,yi),qi.matrixWorld=fl,qi.raycast(t,zs);for(let a=0,o=zs.length;a<o;a++){const l=zs[a];l.instanceId=r,l.object=this,e.push(l)}zs.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new dl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vc(new Float32Array(s*this.count),s,this.count,uo,on));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ti=new Oi,Nu=new ct(.5,.5),ks=new I;class os{constructor(t=new Gn,e=new Gn,n=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],p=r[10],g=r[11],v=r[12],E=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-a,d-h,g-m,A-v).normalize(),s[1].setComponents(c+a,d+h,g+m,A+v).normalize(),s[2].setComponents(c+o,d+u,g+x,A+E).normalize(),s[3].setComponents(c-o,d-u,g-x,A-E).normalize(),n)s[4].setComponents(l,f,p,S).normalize(),s[5].setComponents(c-l,d-f,g-p,A-S).normalize();else if(s[4].setComponents(c-l,d-f,g-p,A-S).normalize(),e===ln)s[5].setComponents(c+l,d+f,g+p,A+S).normalize();else if(e===as)s[5].setComponents(l,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){ti.center.set(0,0,0);const e=Nu.distanceTo(t.center);return ti.radius=.7071067811865476+e,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ks.x=s.normal.x>0?t.max.x:t.min.x,ks.y=s.normal.y>0?t.max.y:t.min.y,ks.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const gl=new fe;class Mo{constructor(){this.coordinateSystem=ln,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];gl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new os),n[s].setFromProjectionMatrix(gl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new os),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Mo().copy(this)}}class ls extends Bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _l=new fe,Ja=new xo,Gs=new Oi,Hs=new I;class fr extends De{constructor(t=new Te,e=new ls){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),Gs.radius+=r,t.ray.intersectsSphere(Gs)===!1)return;_l.copy(s).invert(),Ja.copy(t.ray).applyMatrix4(_l);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,x=d;m<x;m++){const p=c.getX(m);Hs.fromBufferAttribute(u,p),vl(Hs,p,l,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,x=d;m<x;m++)Hs.fromBufferAttribute(u,m),vl(Hs,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function vl(i,t,e,n,s,r,a){const o=Ja.distanceSqToPoint(i);if(o<e){const l=new I;Ja.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Wc extends He{constructor(t=[],e=Ai,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zi extends He{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ci extends He{constructor(t,e,n=vn,s,r,a,o=Ue,l=Ue,c,h=qn,u=1){if(h!==qn&&h!==Wn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _o(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Xc extends Ci{constructor(t,e=vn,n=Ai,s,r,a=Ue,o=Ue,l,c=qn){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class qc extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gn extends Te{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function m(x,p,g,v,E,S,A,T,_,y,D){const R=S/_,N=A/y,F=S/2,H=A/2,L=T/2,G=_+1,q=y+1;let O=0,et=0;const W=new I;for(let j=0;j<q;j++){const tt=j*N-H;for(let At=0;At<G;At++){const kt=At*R-F;W[x]=kt*v,W[p]=tt*E,W[g]=L,c.push(W.x,W.y,W.z),W[x]=0,W[p]=0,W[g]=T>0?1:-1,h.push(W.x,W.y,W.z),u.push(At/_),u.push(1-j/y),O+=1}}for(let j=0;j<y;j++)for(let tt=0;tt<_;tt++){const At=f+tt+G*j,kt=f+tt+G*(j+1),$=f+(tt+1)+G*(j+1),gt=f+(tt+1)+G*j;l.push(At,kt,gt),l.push(kt,$,gt),et+=6}o.addGroup(d,et,D),d+=et,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class yo extends Te{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,m=n*2+r,x=s+1,p=new I,g=new I;for(let v=0;v<=m;v++){let E=0,S=0,A=0,T=0;if(v<=n){const D=v/n,R=D*Math.PI/2;S=-h-t*Math.cos(R),A=t*Math.sin(R),T=-t*Math.cos(R),E=D*u}else if(v<=n+r){const D=(v-n)/r;S=-h+D*e,A=t,T=0,E=u+D*f}else{const D=(v-n-r)/n,R=D*Math.PI/2;S=h+t*Math.sin(R),A=t*Math.cos(R),T=t*Math.sin(R),E=u+f+D*u}const _=Math.max(0,Math.min(1,E/d));let y=0;v===0?y=.5/s:v===m&&(y=-.5/s);for(let D=0;D<=s;D++){const R=D/s,N=R*Math.PI*2,F=Math.sin(N),H=Math.cos(N);g.x=-A*H,g.y=S,g.z=A*F,o.push(g.x,g.y,g.z),p.set(-A*H,T,A*F),p.normalize(),l.push(p.x,p.y,p.z),c.push(R+y,_)}if(v>0){const D=(v-1)*x;for(let R=0;R<s;R++){const N=D+R,F=D+R+1,H=v*x+R,L=v*x+R+1;a.push(N,F,H),a.push(F,L,H)}}}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class ni extends Te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new I,h=new ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Je extends Te{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let m=0;const x=[],p=n/2;let g=0;v(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(f,3)),this.setAttribute("uv",new re(d,2));function v(){const S=new I,A=new I;let T=0;const _=(e-t)/n;for(let y=0;y<=r;y++){const D=[],R=y/r,N=R*(e-t)+t;for(let F=0;F<=s;F++){const H=F/s,L=H*l+o,G=Math.sin(L),q=Math.cos(L);A.x=N*G,A.y=-R*n+p,A.z=N*q,u.push(A.x,A.y,A.z),S.set(G,_,q).normalize(),f.push(S.x,S.y,S.z),d.push(H,1-R),D.push(m++)}x.push(D)}for(let y=0;y<s;y++)for(let D=0;D<r;D++){const R=x[D][y],N=x[D+1][y],F=x[D+1][y+1],H=x[D][y+1];(t>0||D!==0)&&(h.push(R,N,H),T+=3),(e>0||D!==r-1)&&(h.push(N,F,H),T+=3)}c.addGroup(g,T,0),g+=T}function E(S){const A=m,T=new ct,_=new I;let y=0;const D=S===!0?t:e,R=S===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,p*R,0),f.push(0,R,0),d.push(.5,.5),m++;const N=m;for(let F=0;F<=s;F++){const L=F/s*l+o,G=Math.cos(L),q=Math.sin(L);_.x=D*q,_.y=p*R,_.z=D*G,u.push(_.x,_.y,_.z),f.push(0,R,0),T.x=G*.5+.5,T.y=q*.5*R+.5,d.push(T.x,T.y),m++}for(let F=0;F<s;F++){const H=A+F,L=N+F;S===!0?h.push(L,L+1,H):h.push(L+1,L,H),y+=3}c.addGroup(g,y,S===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Je(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pi extends Je{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Pi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class So extends Te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const E=new I,S=new I,A=new I;for(let T=0;T<e.length;T+=3)d(e[T+0],E),d(e[T+1],S),d(e[T+2],A),l(E,S,A,v)}function l(v,E,S,A){const T=A+1,_=[];for(let y=0;y<=T;y++){_[y]=[];const D=v.clone().lerp(S,y/T),R=E.clone().lerp(S,y/T),N=T-y;for(let F=0;F<=N;F++)F===0&&y===T?_[y][F]=D:_[y][F]=D.clone().lerp(R,F/N)}for(let y=0;y<T;y++)for(let D=0;D<2*(T-y)-1;D++){const R=Math.floor(D/2);D%2===0?(f(_[y][R+1]),f(_[y+1][R]),f(_[y][R])):(f(_[y][R+1]),f(_[y+1][R+1]),f(_[y+1][R]))}}function c(v){const E=new I;for(let S=0;S<r.length;S+=3)E.x=r[S+0],E.y=r[S+1],E.z=r[S+2],E.normalize().multiplyScalar(v),r[S+0]=E.x,r[S+1]=E.y,r[S+2]=E.z}function h(){const v=new I;for(let E=0;E<r.length;E+=3){v.x=r[E+0],v.y=r[E+1],v.z=r[E+2];const S=p(v)/2/Math.PI+.5,A=g(v)/Math.PI+.5;a.push(S,1-A)}m(),u()}function u(){for(let v=0;v<a.length;v+=6){const E=a[v+0],S=a[v+2],A=a[v+4],T=Math.max(E,S,A),_=Math.min(E,S,A);T>.9&&_<.1&&(E<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),A<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,E){const S=v*3;E.x=t[S+0],E.y=t[S+1],E.z=t[S+2]}function m(){const v=new I,E=new I,S=new I,A=new I,T=new ct,_=new ct,y=new ct;for(let D=0,R=0;D<r.length;D+=9,R+=6){v.set(r[D+0],r[D+1],r[D+2]),E.set(r[D+3],r[D+4],r[D+5]),S.set(r[D+6],r[D+7],r[D+8]),T.set(a[R+0],a[R+1]),_.set(a[R+2],a[R+3]),y.set(a[R+4],a[R+5]),A.copy(v).add(E).add(S).divideScalar(3);const N=p(A);x(T,R+0,v,N),x(_,R+2,E,N),x(y,R+4,S,N)}}function x(v,E,S,A){A<0&&v.x===1&&(a[E]=v.x-1),S.x===0&&S.z===0&&(a[E]=A/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new So(t.vertices,t.indices,t.radius,t.detail)}}class Mn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ct:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],a=[],o=new I,l=new fe;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(se(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(se(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class bo extends Mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ct){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Uu extends bo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Eo(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const xl=new I,Ml=new I,jr=new Eo,ta=new Eo,ea=new Eo;class Fu extends Mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ml.subVectors(s[0],s[1]).add(s[0]),c=Ml);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(xl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),jr.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,x,p),ta.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,x,p),ea.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(jr.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ta.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ea.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(jr.calc(l),ta.calc(l),ea.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function yl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Ou(i,t){const e=1-i;return e*e*t}function Bu(i,t){return 2*(1-i)*i*t}function zu(i,t){return i*i*t}function ts(i,t,e,n){return Ou(i,t)+Bu(i,e)+zu(i,n)}function ku(i,t){const e=1-i;return e*e*e*t}function Gu(i,t){const e=1-i;return 3*e*e*i*t}function Hu(i,t){return 3*(1-i)*i*i*t}function Vu(i,t){return i*i*i*t}function es(i,t,e,n,s){return ku(i,t)+Gu(i,e)+Hu(i,n)+Vu(i,s)}class $c extends Mn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(es(t,s.x,r.x,a.x,o.x),es(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wu extends Mn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(es(t,s.x,r.x,a.x,o.x),es(t,s.y,r.y,a.y,o.y),es(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yc extends Mn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xu extends Mn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kc extends Mn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ts(t,s.x,r.x,a.x),ts(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qu extends Mn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ts(t,s.x,r.x,a.x),ts(t,s.y,r.y,a.y),ts(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zc extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(yl(o,l.x,c.x,h.x,u.x),yl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var Qa=Object.freeze({__proto__:null,ArcCurve:Uu,CatmullRomCurve3:Fu,CubicBezierCurve:$c,CubicBezierCurve3:Wu,EllipseCurve:bo,LineCurve:Yc,LineCurve3:Xu,QuadraticBezierCurve:Kc,QuadraticBezierCurve3:qu,SplineCurve:Zc});class $u extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Qa[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class Sl extends $u{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Yc(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Kc(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new $c(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Zc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new bo(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class _r extends Sl{constructor(t){super(t),this.uuid=Fi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Sl().fromJSON(s))}return this}}function Yu(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Jc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=ju(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let f=e;f<s;f+=e){const d=i[f],m=i[f+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return cs(r,a,e,o,l,c,0),a}function Jc(i,t,e,n,s){let r;if(s===hd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=bl(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=bl(a/n|0,i[a],i[a+1],r);return r&&Li(r,r.next)&&(us(r),r=r.next),r}function si(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Li(e,e.next)||Ee(e.prev,e,e.next)===0)){if(us(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function cs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&sd(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Zu(i,n,s,r):Ku(i)){t.push(l.i,i.i,c.i),us(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ju(si(i),t),cs(i,t,e,n,s,r,2)):a===2&&Qu(i,t,e,n,s,r):cs(si(i),t,e,n,s,r,1);break}}}function Ku(i){const t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Zi(s,o,r,l,a,c,m.x,m.y)&&Ee(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Zu(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Ee(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,l,c),m=Math.min(h,u,f),x=Math.max(o,l,c),p=Math.max(h,u,f),g=ja(d,m,t,e,n),v=ja(x,p,t,e,n);let E=i.prevZ,S=i.nextZ;for(;E&&E.z>=g&&S&&S.z<=v;){if(E.x>=d&&E.x<=x&&E.y>=m&&E.y<=p&&E!==s&&E!==a&&Zi(o,h,l,u,c,f,E.x,E.y)&&Ee(E.prev,E,E.next)>=0||(E=E.prevZ,S.x>=d&&S.x<=x&&S.y>=m&&S.y<=p&&S!==s&&S!==a&&Zi(o,h,l,u,c,f,S.x,S.y)&&Ee(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;E&&E.z>=g;){if(E.x>=d&&E.x<=x&&E.y>=m&&E.y<=p&&E!==s&&E!==a&&Zi(o,h,l,u,c,f,E.x,E.y)&&Ee(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;S&&S.z<=v;){if(S.x>=d&&S.x<=x&&S.y>=m&&S.y<=p&&S!==s&&S!==a&&Zi(o,h,l,u,c,f,S.x,S.y)&&Ee(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Ju(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Li(n,s)&&jc(n,e,e.next,s)&&hs(n,s)&&hs(s,n)&&(t.push(n.i,e.i,s.i),us(e),us(e.next),e=i=s),e=e.next}while(e!==i);return si(e)}function Qu(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&od(a,o)){let l=th(a,o);a=si(a,a.next),l=si(l,l.next),cs(a,t,e,n,s,r,0),cs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function ju(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Jc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ad(c))}s.sort(td);for(let r=0;r<s.length;r++)e=ed(s[r],e);return e}function td(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function ed(i,t){const e=nd(i,t);if(!e)return t;const n=th(e,i);return si(n,n.next),si(e,e.next)}function nd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Li(i,e))return e;do{if(Li(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Qc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);hs(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&id(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function id(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function sd(i,t,e,n){let s=i;do s.z===0&&(s.z=ja(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,rd(s)}function rd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function ja(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ad(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qc(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Zi(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Qc(i,t,e,n,s,r,a,o)}function od(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ld(i,t)&&(hs(i,t)&&hs(t,i)&&cd(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||Li(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Li(i,t){return i.x===t.x&&i.y===t.y}function jc(i,t,e,n){const s=Ws(Ee(i,t,e)),r=Ws(Ee(i,t,n)),a=Ws(Ee(e,n,i)),o=Ws(Ee(e,n,t));return!!(s!==r&&a!==o||s===0&&Vs(i,e,t)||r===0&&Vs(i,n,t)||a===0&&Vs(e,i,n)||o===0&&Vs(e,t,n))}function Vs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ws(i){return i>0?1:i<0?-1:0}function ld(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&jc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function hs(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function cd(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function th(i,t){const e=to(i.i,i.x,i.y),n=to(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function bl(i,t,e,n){const s=to(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function us(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function to(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class ud{static triangulate(t,e,n=2){return Yu(t,e,n)}}class Pn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Pn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];El(t),Tl(n,t);let a=t.length;e.forEach(El);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Tl(n,e[l]);const o=ud.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function El(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Tl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class To extends Te{constructor(t=new _r([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:dd;let E,S=!1,A,T,_,y;if(g){E=g.getSpacedPoints(h),S=!0,f=!1;const J=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(h,J),T=new I,_=new I,y=new I}f||(p=0,d=0,m=0,x=0);const D=o.extractPoints(c);let R=D.shape;const N=D.holes;if(!Pn.isClockWise(R)){R=R.reverse();for(let J=0,lt=N.length;J<lt;J++){const at=N[J];Pn.isClockWise(at)&&(N[J]=at.reverse())}}function H(J){const at=10000000000000001e-36;let Tt=J[0];for(let pt=1;pt<=J.length;pt++){const qt=pt%J.length,Nt=J[qt],ee=Nt.x-Tt.x,nt=Nt.y-Tt.y,wt=ee*ee+nt*nt,C=Math.max(Math.abs(Nt.x),Math.abs(Nt.y),Math.abs(Tt.x),Math.abs(Tt.y)),Xt=at*C*C;if(wt<=Xt){J.splice(qt,1),pt--;continue}Tt=Nt}}H(R),N.forEach(H);const L=N.length,G=R;for(let J=0;J<L;J++){const lt=N[J];R=R.concat(lt)}function q(J,lt,at){return lt||he("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(lt,at)}const O=R.length;function et(J,lt,at){let Tt,pt,qt;const Nt=J.x-lt.x,ee=J.y-lt.y,nt=at.x-J.x,wt=at.y-J.y,C=Nt*Nt+ee*ee,Xt=Nt*wt-ee*nt;if(Math.abs(Xt)>Number.EPSILON){const Ct=Math.sqrt(C),ie=Math.sqrt(nt*nt+wt*wt),ot=lt.x-ee/Ct,de=lt.y+Nt/Ct,Dt=at.x-wt/ie,Vt=at.y+nt/ie,w=((Dt-ot)*wt-(Vt-de)*nt)/(Nt*wt-ee*nt);Tt=ot+Nt*w-J.x,pt=de+ee*w-J.y;const M=Tt*Tt+pt*pt;if(M<=2)return new ct(Tt,pt);qt=Math.sqrt(M/2)}else{let Ct=!1;Nt>Number.EPSILON?nt>Number.EPSILON&&(Ct=!0):Nt<-Number.EPSILON?nt<-Number.EPSILON&&(Ct=!0):Math.sign(ee)===Math.sign(wt)&&(Ct=!0),Ct?(Tt=-ee,pt=Nt,qt=Math.sqrt(C)):(Tt=Nt,pt=ee,qt=Math.sqrt(C/2))}return new ct(Tt/qt,pt/qt)}const W=[];for(let J=0,lt=G.length,at=lt-1,Tt=J+1;J<lt;J++,at++,Tt++)at===lt&&(at=0),Tt===lt&&(Tt=0),W[J]=et(G[J],G[at],G[Tt]);const j=[];let tt,At=W.concat();for(let J=0,lt=L;J<lt;J++){const at=N[J];tt=[];for(let Tt=0,pt=at.length,qt=pt-1,Nt=Tt+1;Tt<pt;Tt++,qt++,Nt++)qt===pt&&(qt=0),Nt===pt&&(Nt=0),tt[Tt]=et(at[Tt],at[qt],at[Nt]);j.push(tt),At=At.concat(tt)}let kt;if(p===0)kt=Pn.triangulateShape(G,N);else{const J=[],lt=[];for(let at=0;at<p;at++){const Tt=at/p,pt=d*Math.cos(Tt*Math.PI/2),qt=m*Math.sin(Tt*Math.PI/2)+x;for(let Nt=0,ee=G.length;Nt<ee;Nt++){const nt=q(G[Nt],W[Nt],qt);zt(nt.x,nt.y,-pt),Tt===0&&J.push(nt)}for(let Nt=0,ee=L;Nt<ee;Nt++){const nt=N[Nt];tt=j[Nt];const wt=[];for(let C=0,Xt=nt.length;C<Xt;C++){const Ct=q(nt[C],tt[C],qt);zt(Ct.x,Ct.y,-pt),Tt===0&&wt.push(Ct)}Tt===0&&lt.push(wt)}}kt=Pn.triangulateShape(J,lt)}const $=kt.length,gt=m+x;for(let J=0;J<O;J++){const lt=f?q(R[J],At[J],gt):R[J];S?(_.copy(A.normals[0]).multiplyScalar(lt.x),T.copy(A.binormals[0]).multiplyScalar(lt.y),y.copy(E[0]).add(_).add(T),zt(y.x,y.y,y.z)):zt(lt.x,lt.y,0)}for(let J=1;J<=h;J++)for(let lt=0;lt<O;lt++){const at=f?q(R[lt],At[lt],gt):R[lt];S?(_.copy(A.normals[J]).multiplyScalar(at.x),T.copy(A.binormals[J]).multiplyScalar(at.y),y.copy(E[J]).add(_).add(T),zt(y.x,y.y,y.z)):zt(at.x,at.y,u/h*J)}for(let J=p-1;J>=0;J--){const lt=J/p,at=d*Math.cos(lt*Math.PI/2),Tt=m*Math.sin(lt*Math.PI/2)+x;for(let pt=0,qt=G.length;pt<qt;pt++){const Nt=q(G[pt],W[pt],Tt);zt(Nt.x,Nt.y,u+at)}for(let pt=0,qt=N.length;pt<qt;pt++){const Nt=N[pt];tt=j[pt];for(let ee=0,nt=Nt.length;ee<nt;ee++){const wt=q(Nt[ee],tt[ee],Tt);S?zt(wt.x,wt.y+E[h-1].y,E[h-1].x+at):zt(wt.x,wt.y,u+at)}}}Rt(),Ft();function Rt(){const J=s.length/3;if(f){let lt=0,at=O*lt;for(let Tt=0;Tt<$;Tt++){const pt=kt[Tt];_e(pt[2]+at,pt[1]+at,pt[0]+at)}lt=h+p*2,at=O*lt;for(let Tt=0;Tt<$;Tt++){const pt=kt[Tt];_e(pt[0]+at,pt[1]+at,pt[2]+at)}}else{for(let lt=0;lt<$;lt++){const at=kt[lt];_e(at[2],at[1],at[0])}for(let lt=0;lt<$;lt++){const at=kt[lt];_e(at[0]+O*h,at[1]+O*h,at[2]+O*h)}}n.addGroup(J,s.length/3-J,0)}function Ft(){const J=s.length/3;let lt=0;xt(G,lt),lt+=G.length;for(let at=0,Tt=N.length;at<Tt;at++){const pt=N[at];xt(pt,lt),lt+=pt.length}n.addGroup(J,s.length/3-J,1)}function xt(J,lt){let at=J.length;for(;--at>=0;){const Tt=at;let pt=at-1;pt<0&&(pt=J.length-1);for(let qt=0,Nt=h+p*2;qt<Nt;qt++){const ee=O*qt,nt=O*(qt+1),wt=lt+Tt+ee,C=lt+pt+ee,Xt=lt+pt+nt,Ct=lt+Tt+nt;Gt(wt,C,Xt,Ct)}}}function zt(J,lt,at){l.push(J),l.push(lt),l.push(at)}function _e(J,lt,at){Kt(J),Kt(lt),Kt(at);const Tt=s.length/3,pt=v.generateTopUV(n,s,Tt-3,Tt-2,Tt-1);Jt(pt[0]),Jt(pt[1]),Jt(pt[2])}function Gt(J,lt,at,Tt){Kt(J),Kt(lt),Kt(Tt),Kt(lt),Kt(at),Kt(Tt);const pt=s.length/3,qt=v.generateSideWallUV(n,s,pt-6,pt-3,pt-2,pt-1);Jt(qt[0]),Jt(qt[1]),Jt(qt[3]),Jt(qt[1]),Jt(qt[2]),Jt(qt[3])}function Kt(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function Jt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return fd(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Qa[s.type]().fromJSON(s)),new To(n,t.options)}}const dd={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ct(r,a),new ct(o,l),new ct(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],x=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ct(a,1-l),new ct(c,1-u),new ct(f,1-m),new ct(x,1-g)]:[new ct(o,1-l),new ct(h,1-u),new ct(d,1-m),new ct(p,1-g)]}};function fd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ds extends So{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ds(t.radius,t.detail)}}class ci extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],m=[],x=[],p=[];for(let g=0;g<h;g++){const v=g*f-a;for(let E=0;E<c;E++){const S=E*u-r;m.push(S,-v,0),x.push(0,0,1),p.push(E/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){const E=v+c*g,S=v+c*(g+1),A=v+1+c*(g+1),T=v+1+c*g;d.push(E,S,T),d.push(S,A,T)}this.setIndex(d),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.width,t.height,t.widthSegments,t.heightSegments)}}class vr extends Te{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new I,m=new ct;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){const g=r+p/n*a;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let x=0;x<s;x++){const p=x*(n+1);for(let g=0;g<n;g++){const v=g+p,E=v,S=v+n+1,A=v+n+2,T=v+1;o.push(E,S,T),o.push(S,A,T)}}this.setIndex(o),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class wo extends Te{constructor(t=new _r([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(r,3)),this.setAttribute("uv",new re(a,2));function c(h){const u=s.length/3,f=h.extractPoints(e);let d=f.shape;const m=f.holes;Pn.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,g=m.length;p<g;p++){const v=m[p];Pn.isClockWise(v)===!0&&(m[p]=v.reverse())}const x=Pn.triangulateShape(d,m);for(let p=0,g=m.length;p<g;p++){const v=m[p];d=d.concat(v)}for(let p=0,g=d.length;p<g;p++){const v=d[p];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let p=0,g=x.length;p<g;p++){const v=x[p],E=v[0]+u,S=v[1]+u,A=v[2]+u;n.push(E,S,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return pd(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new wo(n,t.curveSegments)}}function pd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class $n extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,f=new I,d=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){const v=[],E=g/n,S=a+E*o,A=t*Math.cos(S),T=Math.sqrt(t*t-A*A);let _=0;g===0&&a===0?_=.5/e:g===n&&l===Math.PI&&(_=-.5/e);for(let y=0;y<=e;y++){const D=y/e,R=s+D*r;u.x=-T*Math.cos(R),u.y=A,u.z=T*Math.sin(R),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(D+_,1-E),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<e;v++){const E=h[g][v+1],S=h[g][v],A=h[g+1][v],T=h[g+1][v+1];(g!==0||a>0)&&d.push(E,S,T),(g!==n-1||l<Math.PI)&&d.push(S,A,T)}this.setIndex(d),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class An extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],u=[],f=new I,d=new I,m=new I;for(let x=0;x<=n;x++){const p=a+x/n*o;for(let g=0;g<=s;g++){const v=g/s*r;d.x=(t+e*Math.cos(p))*Math.cos(v),d.y=(t+e*Math.cos(p))*Math.sin(v),d.z=e*Math.sin(p),c.push(d.x,d.y,d.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),m.subVectors(d,f).normalize(),h.push(m.x,m.y,m.z),u.push(g/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){const g=(s+1)*x+p-1,v=(s+1)*(x-1)+p-1,E=(s+1)*(x-1)+p,S=(s+1)*x+p;l.push(g,v,S),l.push(v,E,S)}this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Ii(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(wl(s))s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(wl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=Ii(i[e]);for(const s in n)t[s]=n[s]}return t}function wl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function md(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function eh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const gd={clone:Ii,merge:We};var _d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_d,this.fragmentShader=vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=md(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new te().setHex(s.value);break;case"v2":this.uniforms[n].value=new ct().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[n].value=new fe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class xd extends ri{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rn extends Bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Md extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yd extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ao extends De{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Sd extends Ao{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const na=new fe,Al=new I,Rl=new I;class nh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=Ze,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Al.setFromMatrixPosition(t.matrixWorld),e.position.copy(Al),Rl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(na,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===as||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Xs=new I,qs=new oi,hn=new I;class ih extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Xs,qs,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xs,qs,hn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Xs,qs,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xs,qs,hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const kn=new I,Cl=new ct,Pl=new ct;class je extends ih{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Za*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,Cl,Pl),e.subVectors(Pl,Cl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class bd extends nh{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0}}class ia extends Ao{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new bd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class sh extends ih{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ed extends nh{constructor(){super(new sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ll extends Ao{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Ed}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Si=-90,bi=1;class eo extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new je(Si,bi,t,e);s.layers=this.layers,this.add(s);const r=new je(Si,bi,t,e);r.layers=this.layers,this.add(r);const a=new je(Si,bi,t,e);a.layers=this.layers,this.add(a);const o=new je(Si,bi,t,e);o.layers=this.layers,this.add(o);const l=new je(Si,bi,t,e);l.layers=this.layers,this.add(l);const c=new je(Si,bi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===as)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Td extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class wd{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Ad.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Ad(){this._document.hidden===!1&&this.reset()}const Il=new fe;class Rd{constructor(t,e,n=0,s=1/0){this.ray=new xo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):he("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Il.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Il),this}intersectObject(t,e=!0,n=[]){return no(t,this,n,e),n.sort(Dl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)no(t[s],this,n,e);return n.sort(Dl),n}}function Dl(i,t){return i.distance-t.distance}function no(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)no(r[a],t,e,!0)}}function Nl(i,t,e,n){const s=Cd(n);switch(e){case Dc:return i*t;case uo:return i*t/s.components*s.byteLength;case fo:return i*t/s.components*s.byteLength;case ii:return i*t*2/s.components*s.byteLength;case po:return i*t*2/s.components*s.byteLength;case Nc:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case mo:return i*t*4/s.components*s.byteLength;case er:case nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:case Sa:return Math.max(i,16)*Math.max(t,8)/4;case xa:case ya:return Math.max(i,8)*Math.max(t,8)/2;case ba:case Ea:case wa:case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ta:case lr:case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Va:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qa:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case cr:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cd(i){switch(i){case Ze:case Cc:return{byteLength:1,components:1};case rs:case Pc:case xn:return{byteLength:2,components:1};case co:case ho:return{byteLength:2,components:4};case vn:case lo:case on:return{byteLength:4,components:1};case Lc:case Ic:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ao}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ao);function rh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Pd(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Id=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Od=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,tf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ef=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,of="gl_FragColor = linearToOutputTexel( gl_FragColor );",lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,bf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ef=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Af=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,If=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Df=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ap=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ep=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ip=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:Ld,alphahash_pars_fragment:Id,alphamap_fragment:Dd,alphamap_pars_fragment:Nd,alphatest_fragment:Ud,alphatest_pars_fragment:Fd,aomap_fragment:Od,aomap_pars_fragment:Bd,batching_pars_vertex:zd,batching_vertex:kd,begin_vertex:Gd,beginnormal_vertex:Hd,bsdfs:Vd,iridescence_fragment:Wd,bumpmap_pars_fragment:Xd,clipping_planes_fragment:qd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:Kd,color_fragment:Zd,color_pars_fragment:Jd,color_pars_vertex:Qd,color_vertex:jd,common:tf,defaultnormal_vertex:ef,displacementmap_pars_vertex:nf,displacementmap_vertex:sf,emissivemap_fragment:rf,emissivemap_pars_fragment:af,colorspace_fragment:of,colorspace_pars_fragment:lf,envmap_fragment:cf,envmap_common_pars_fragment:hf,envmap_pars_fragment:uf,envmap_pars_vertex:df,envmap_physical_pars_fragment:bf,envmap_vertex:ff,fog_vertex:pf,fog_pars_vertex:mf,fog_fragment:gf,fog_pars_fragment:_f,gradientmap_pars_fragment:vf,lightmap_pars_fragment:xf,lights_lambert_fragment:Mf,lights_lambert_pars_fragment:yf,lights_pars_begin:Sf,lights_toon_fragment:Ef,lights_toon_pars_fragment:Tf,lights_phong_fragment:wf,lights_phong_pars_fragment:Af,lights_physical_fragment:Rf,lights_physical_pars_fragment:Cf,lights_fragment_begin:Pf,lights_fragment_maps:Lf,lights_fragment_end:If,lightprobes_pars_fragment:Df,logdepthbuf_fragment:Nf,logdepthbuf_pars_fragment:Uf,logdepthbuf_pars_vertex:Ff,logdepthbuf_vertex:Of,map_fragment:Bf,map_pars_fragment:zf,map_particle_fragment:kf,map_particle_pars_fragment:Gf,metalnessmap_fragment:Hf,metalnessmap_pars_fragment:Vf,morphinstance_vertex:Wf,morphcolor_vertex:Xf,morphnormal_vertex:qf,morphtarget_pars_vertex:$f,morphtarget_vertex:Yf,normal_fragment_begin:Kf,normal_fragment_maps:Zf,normal_pars_fragment:Jf,normal_pars_vertex:Qf,normal_vertex:jf,normalmap_pars_fragment:tp,clearcoat_normal_fragment_begin:ep,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:ip,iridescence_pars_fragment:sp,opaque_fragment:rp,packing:ap,premultiplied_alpha_fragment:op,project_vertex:lp,dithering_fragment:cp,dithering_pars_fragment:hp,roughnessmap_fragment:up,roughnessmap_pars_fragment:dp,shadowmap_pars_fragment:fp,shadowmap_pars_vertex:pp,shadowmap_vertex:mp,shadowmask_pars_fragment:gp,skinbase_vertex:_p,skinning_pars_vertex:vp,skinning_vertex:xp,skinnormal_vertex:Mp,specularmap_fragment:yp,specularmap_pars_fragment:Sp,tonemapping_fragment:bp,tonemapping_pars_fragment:Ep,transmission_fragment:Tp,transmission_pars_fragment:wp,uv_pars_fragment:Ap,uv_pars_vertex:Rp,uv_vertex:Cp,worldpos_vertex:Pp,background_vert:Lp,background_frag:Ip,backgroundCube_vert:Dp,backgroundCube_frag:Np,cube_vert:Up,cube_frag:Fp,depth_vert:Op,depth_frag:Bp,distance_vert:zp,distance_frag:kp,equirect_vert:Gp,equirect_frag:Hp,linedashed_vert:Vp,linedashed_frag:Wp,meshbasic_vert:Xp,meshbasic_frag:qp,meshlambert_vert:$p,meshlambert_frag:Yp,meshmatcap_vert:Kp,meshmatcap_frag:Zp,meshnormal_vert:Jp,meshnormal_frag:Qp,meshphong_vert:jp,meshphong_frag:tm,meshphysical_vert:em,meshphysical_frag:nm,meshtoon_vert:im,meshtoon_frag:sm,points_vert:rm,points_frag:am,shadow_vert:om,shadow_frag:lm,sprite_vert:cm,sprite_frag:hm},St={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},pn={basic:{uniforms:We([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:We([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:We([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:We([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:We([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new te(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:We([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:We([St.points,St.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:We([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:We([St.common,St.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:We([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:We([St.sprite,St.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:We([St.common,St.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:We([St.lights,St.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};pn.physical={uniforms:We([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const $s={r:0,b:0,g:0},um=new fe,ah=new $t;ah.set(-1,0,0,0,1,0,0,0,1);function dm(i,t,e,n,s,r){const a=new te(0);let o=s===!0?0:1,l,c,h=null,u=0,f=null;function d(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){const S=v.backgroundBlurriness>0;E=t.get(E,S)}return E}function m(v){let E=!1;const S=d(v);S===null?p(a,o):S&&S.isColor&&(p(S,1),E=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,E){const S=d(E);S&&S.isCubeTexture?(c===void 0&&(c=new ne(new gn(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Ii(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(um.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ah),c.material.toneMapped=le.getTransfer(S.colorSpace)!==me,(h!==S||u!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ne(new ci(2,2),new ri({name:"BackgroundMaterial",uniforms:Ii(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=le.getTransfer(S.colorSpace)!==me,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,E){v.getRGB($s,eh(i)),e.buffers.color.setClear($s.r,$s.g,$s.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:m,addToRenderList:x,dispose:g}}function fm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(N,F,H,L,G){let q=!1;const O=u(N,L,H,F);r!==O&&(r=O,c(r.object)),q=d(N,L,H,G),q&&m(N,L,H,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(N,F,H,L),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function u(N,F,H,L){const G=L.wireframe===!0;let q=n[F.id];q===void 0&&(q={},n[F.id]=q);const O=N.isInstancedMesh===!0?N.id:0;let et=q[O];et===void 0&&(et={},q[O]=et);let W=et[H.id];W===void 0&&(W={},et[H.id]=W);let j=W[G];return j===void 0&&(j=f(l()),W[G]=j),j}function f(N){const F=[],H=[],L=[];for(let G=0;G<e;G++)F[G]=0,H[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:L,object:N,attributes:{},index:null}}function d(N,F,H,L){const G=r.attributes,q=F.attributes;let O=0;const et=H.getAttributes();for(const W in et)if(et[W].location>=0){const tt=G[W];let At=q[W];if(At===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(At=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(At=N.instanceColor)),tt===void 0||tt.attribute!==At||At&&tt.data!==At.data)return!0;O++}return r.attributesNum!==O||r.index!==L}function m(N,F,H,L){const G={},q=F.attributes;let O=0;const et=H.getAttributes();for(const W in et)if(et[W].location>=0){let tt=q[W];tt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor));const At={};At.attribute=tt,tt&&tt.data&&(At.data=tt.data),G[W]=At,O++}r.attributes=G,r.attributesNum=O,r.index=L}function x(){const N=r.newAttributes;for(let F=0,H=N.length;F<H;F++)N[F]=0}function p(N){g(N,0)}function g(N,F){const H=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;H[N]=1,L[N]===0&&(i.enableVertexAttribArray(N),L[N]=1),G[N]!==F&&(i.vertexAttribDivisor(N,F),G[N]=F)}function v(){const N=r.newAttributes,F=r.enabledAttributes;for(let H=0,L=F.length;H<L;H++)F[H]!==N[H]&&(i.disableVertexAttribArray(H),F[H]=0)}function E(N,F,H,L,G,q,O){O===!0?i.vertexAttribIPointer(N,F,H,G,q):i.vertexAttribPointer(N,F,H,L,G,q)}function S(N,F,H,L){x();const G=L.attributes,q=H.getAttributes(),O=F.defaultAttributeValues;for(const et in q){const W=q[et];if(W.location>=0){let j=G[et];if(j===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){const tt=j.normalized,At=j.itemSize,kt=t.get(j);if(kt===void 0)continue;const $=kt.buffer,gt=kt.type,Rt=kt.bytesPerElement,Ft=gt===i.INT||gt===i.UNSIGNED_INT||j.gpuType===lo;if(j.isInterleavedBufferAttribute){const xt=j.data,zt=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,_e=j.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let Gt=0;Gt<W.locationSize;Gt++)g(W.location+Gt,xt.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Gt=0;Gt<W.locationSize;Gt++)p(W.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,$);for(let Gt=0;Gt<W.locationSize;Gt++)E(W.location+Gt,At/W.locationSize,gt,tt,zt*Rt,(_e+At/W.locationSize*Gt)*Rt,Ft)}else{if(j.isInstancedBufferAttribute){for(let xt=0;xt<W.locationSize;xt++)g(W.location+xt,j.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let xt=0;xt<W.locationSize;xt++)p(W.location+xt);i.bindBuffer(i.ARRAY_BUFFER,$);for(let xt=0;xt<W.locationSize;xt++)E(W.location+xt,At/W.locationSize,gt,tt,At*Rt,At/W.locationSize*xt*Rt,Ft)}}else if(O!==void 0){const tt=O[et];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(W.location,tt);break;case 3:i.vertexAttrib3fv(W.location,tt);break;case 4:i.vertexAttrib4fv(W.location,tt);break;default:i.vertexAttrib1fv(W.location,tt)}}}}v()}function A(){D();for(const N in n){const F=n[N];for(const H in F){const L=F[H];for(const G in L){const q=L[G];for(const O in q)h(q[O].object),delete q[O];delete L[G]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;const F=n[N.id];for(const H in F){const L=F[H];for(const G in L){const q=L[G];for(const O in q)h(q[O].object),delete q[O];delete L[G]}}delete n[N.id]}function _(N){for(const F in n){const H=n[F];for(const L in H){const G=H[L];if(G[N.id]===void 0)continue;const q=G[N.id];for(const O in q)h(q[O].object),delete q[O];delete G[N.id]}}}function y(N){for(const F in n){const H=n[F],L=N.isInstancedMesh===!0?N.id:0,G=H[L];if(G!==void 0){for(const q in G){const O=G[q];for(const et in O)h(O[et].object),delete O[et];delete G[q]}delete H[L],Object.keys(H).length===0&&delete n[F]}}}function D(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function pm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function mm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==mn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const y=_===xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Ze&&_!==on&&!y&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Wt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:S,maxSamples:A,samples:T}}function gm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Gn,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{const v=r?0:n,E=v*4;let S=g.clippingState||null;l.value=S,S=h(m,f,E,d);for(let A=0;A!==E;++A)S[A]=e[A];g.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=l.value,m!==!0||p===null){const g=d+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,S=d;E!==x;++E,S+=4)a.copy(u[E]).applyMatrix4(v,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}class Ro extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new gn(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Ti});r.uniforms.tEquirect.value=e;const a=new ne(s,r),o=e.minFilter;return e.minFilter===Vn&&(e.minFilter=qe),new eo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Ul=256,_m=3,vm=20,oh=256,lh=16,xm=3,Mm=new I,ym=new te;class pr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new eo(1,10,null),this._boxMesh=new ne(new gn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Mm}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(ym));const p=new eo(n,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=m,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Ul,cu(t))}_fromTexture(t,e){t.mapping===Ai||t.mapping===ss?this._setSize(t.image.length===0?Ul:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Fl(t,!1,!1),n=Math.log2(t)-_m;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Fl(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ai||t.mapping===ss?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bl()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ol()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Sm(),this._integrationMaterial=bm());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/lh);for(let a=0;a<=n;a++){const o=pr.lodToRoughness(a,n);if(a>n-xm)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(oh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Em());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function Fl(i,t,e){return new Ro(i,{minFilter:Vn,generateMipmaps:t,type:xn,colorSpace:hr,depthBuffer:e})}function gs(i,t,e){return new ri({name:i,uniforms:t,vertexShader:jt.cube_vert,fragmentShader:e,side:Ge,blending:Ti,depthTest:!1,depthWrite:!1})}function Sm(){return gs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${oh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function bm(){return gs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Em(){return gs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${vm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ol(){return gs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Bl(){return gs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Tm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Ar||d===Rr)if(t.has(f)){const m=t.get(f).texture;return o(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const x=new Ro(m.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const d=f.mapping,m=d===Ar||d===Rr,x=d===Ai||d===ss;if(m||x){let p=e.get(f);const g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new pr(i)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{const v=f.image;return m&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new pr(i)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,d){return d===Ar?f.mapping=Ai:d===Rr&&(f.mapping=ss),f}function l(f){let d=0;const m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function c(f){const d=f.target;d.removeEventListener("dispose",c);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function wm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&rr("WebGLRenderer: "+n+" extension not supported."),s}}}function Am(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(const p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);const x=r.get(m);x&&(t.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(m){const x=m.attributes;for(const p in x)t.update(x[p],i.ARRAY_BUFFER)}function u(m){const x=m.index,p=m.attributes.position;let g=0;if(p===void 0)return;const v=x!==null?x.array.length:p.array.length/3-1,E=p.count>=65535?Hc:Gc,S=new E(Math.ceil(v/3)*6,1),A=S.array;if(x!==null){const _=x.array;g=x.version;for(let y=0,D=0;y<v;y+=3){const R=_[y+0],N=_[y+1],F=_[y+2];A[D++]=R,A[D++]=N,A[D++]=N,A[D++]=F,A[D++]=F,A[D++]=R}}else{g=p.version;for(let _=0,y=0;_<v;_+=3){const D=_+0,R=_+1,N=_+2;A[y++]=D,A[y++]=R,A[y++]=R,A[y++]=N,A[y++]=N,A[y++]=D}}S.version=g;const T=r.get(m);T&&t.remove(T),r.set(m,S)}function f(m){const x=r.get(m);if(x){const p=m.index;p!==null&&x.version<p.version&&u(m)}else u(m);return r.get(m)}function d(){for(const m in s){const x=s[m].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function Rm(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*a,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let p=0;p<d;p++)x+=f[p];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Cm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:he("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Pm(i,t,e){const n=new WeakMap,s=new be;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let R=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var d=R;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),x===!0&&(S=2),p===!0&&(S=3);let A=o.attributes.position.count*S,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const _=new Float32Array(A*T*4*u),y=new zc(_,A,T,u);y.type=on,y.needsUpdate=!0;const D=S*4;for(let N=0;N<u;N++){const F=g[N],H=v[N],L=E[N],G=A*T*4*N;for(let q=0;q<F.count;q++){const O=q*D;m===!0&&(s.fromBufferAttribute(F,q),_[G+O+0]=s.x,_[G+O+1]=s.y,_[G+O+2]=s.z,_[G+O+3]=0),x===!0&&(s.fromBufferAttribute(H,q),_[G+O+4]=s.x,_[G+O+5]=s.y,_[G+O+6]=s.z,_[G+O+7]=0),p===!0&&(s.fromBufferAttribute(L,q),_[G+O+8]=s.x,_[G+O+9]=s.y,_[G+O+10]=s.z,_[G+O+11]=L.itemSize===4?s.w:1)}}f={count:u,texture:y,size:new ct(A,T)},n.set(o,f),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Lm(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Im={[Sc]:"LINEAR_TONE_MAPPING",[bc]:"REINHARD_TONE_MAPPING",[Ec]:"CINEON_TONE_MAPPING",[oo]:"ACES_FILMIC_TONE_MAPPING",[wc]:"AGX_TONE_MAPPING",[Ac]:"NEUTRAL_TONE_MAPPING",[Tc]:"CUSTOM_TONE_MAPPING"};function Dm(i,t,e,n,s,r){const a=new _n(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Te;h.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new re([0,2,0,0,2,0],2));const u=new xd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ne(h,u),d=new sh(-1,1,1,-1,0,1);let m=null,x=null,p=!1,g,v=null,E=[],S=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let _=0;_<E.length;_++){const y=E[_];y.setSize&&y.setSize(A,T)}},this.setEffects=function(A){E=A,S=E.length>0&&E[0].isRenderPass===!0;const T=a.width,_=a.height;E.length>0&&o===null&&(o=new _n(T,_,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new _n(T,_,{type:xn,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&E.some(D=>D.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new Ci(T,_),r===!0&&(c.format=Wn,c.type=Ri)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let D=0;D<E.length;D++){const R=E[D];R.setSize&&R.setSize(T,_),y&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(A,T){if(p||A.toneMapping===Ln&&E.length===0)return!1;if(v=T,T!==null){const _=T.width,y=T.height;(a.width!==_||a.height!==y)&&this.setSize(_,y)}return S===!1&&A.setRenderTarget(a),g=A.toneMapping,A.toneMapping=Ln,!0},this.hasRenderPass=function(){return S},this.end=function(A,T){A.toneMapping=g,p=!0;let _=a,y=o;for(let D=0;D<E.length;D++){const R=E[D];R.enabled!==!1&&(R.render(A,y,_,T),R.needsSwap!==!1&&(_=y,y=y===o?l:o))}if(m!==A.outputColorSpace||x!==A.toneMapping){m=A.outputColorSpace,x=A.toneMapping,u.defines={},le.getTransfer(m)===me&&(u.defines.SRGB_TRANSFER="");const D=Im[x];D&&(u.defines[D]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(v),A.render(f,d),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const ch=new He,hh=new Ci(1,1),uh=new Xc(1),dh=new zc,fh=new _u,ph=new Wc,zl=[],kl=[],Gl=new Float32Array(16),Hl=new Float32Array(9),Vl=new Float32Array(4);function ki(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=zl[s];if(r===void 0&&(r=new Float32Array(s),zl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xr(i,t){let e=kl[t];e===void 0&&(e=new Int32Array(t),kl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Nm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function Bm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Vl.set(n),i.uniformMatrix2fv(this.addr,!1,Vl),Ce(e,n)}}function zm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Hl.set(n),i.uniformMatrix3fv(this.addr,!1,Hl),Ce(e,n)}}function km(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Gl.set(n),i.uniformMatrix4fv(this.addr,!1,Gl),Ce(e,n)}}function Gm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function Wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function Xm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function Ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function Mr(i){return i.version===0&&(i.compareFunction=Oc,i.needsUpdate=!0),i}function Km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Mr(hh):r=ch,e.setTexture2D(t||r,s)}function Zm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||fh,s)}function Jm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Mr(uh):r=ph,e.setTextureCube(t||r,s)}function Qm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||dh,s)}function jm(i){switch(i){case 5126:return Nm;case 35664:return Um;case 35665:return Fm;case 35666:return Om;case 35674:return Bm;case 35675:return zm;case 35676:return km;case 5124:case 35670:return Gm;case 35667:case 35671:return Hm;case 35668:case 35672:return Vm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return qm;case 36295:return $m;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Qm}}function t0(i,t){i.uniform1fv(this.addr,t)}function e0(i,t){const e=ki(t,this.size,2);i.uniform2fv(this.addr,e)}function n0(i,t){const e=ki(t,this.size,3);i.uniform3fv(this.addr,e)}function i0(i,t){const e=ki(t,this.size,4);i.uniform4fv(this.addr,e)}function s0(i,t){const e=ki(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function r0(i,t){const e=ki(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function a0(i,t){const e=ki(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function o0(i,t){i.uniform1iv(this.addr,t)}function l0(i,t){i.uniform2iv(this.addr,t)}function c0(i,t){i.uniform3iv(this.addr,t)}function h0(i,t){i.uniform4iv(this.addr,t)}function u0(i,t){i.uniform1uiv(this.addr,t)}function d0(i,t){i.uniform2uiv(this.addr,t)}function f0(i,t){i.uniform3uiv(this.addr,t)}function p0(i,t){i.uniform4uiv(this.addr,t)}function m0(i,t,e){const n=this.cache,s=t.length,r=xr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Mr(hh):a=ch;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function g0(i,t,e){const n=this.cache,s=t.length,r=xr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||fh,r[a])}function _0(i,t,e){const n=this.cache,s=t.length,r=xr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Mr(uh):a=ph;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function v0(i,t,e){const n=this.cache,s=t.length,r=xr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||dh,r[a])}function x0(i){switch(i){case 5126:return t0;case 35664:return e0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return a0;case 5124:case 35670:return o0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return v0}}class M0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jm(e.type)}}class y0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=x0(e.type)}}class S0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const sa=/(\w+)(\])?(\[|\.)?/g;function Wl(i,t){i.seq.push(t),i.map[t.id]=t}function b0(i,t,e){const n=i.name,s=n.length;for(sa.lastIndex=0;;){const r=sa.exec(n),a=sa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wl(e,c===void 0?new M0(o,i,t):new y0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new S0(o),Wl(e,u)),e=u}}}class ar{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);b0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Xl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const E0=37297;let T0=0;function w0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ql=new $t;function A0(i){le._getMatrix(ql,le.workingColorSpace,i);const t=`mat3( ${ql.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case ur:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $l(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+w0(i.getShaderSource(t),o)}else return r}function R0(i,t){const e=A0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const C0={[Sc]:"Linear",[bc]:"Reinhard",[Ec]:"Cineon",[oo]:"ACESFilmic",[wc]:"AgX",[Ac]:"Neutral",[Tc]:"Custom"};function P0(i,t){const e=C0[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ys=new I;function L0(){le.getLuminanceCoefficients(Ys);const i=Ys.x.toFixed(4),t=Ys.y.toFixed(4),e=Ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function D0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function N0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ji(i){return i!==""}function Yl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Kl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const U0=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(i){return i.replace(U0,F0)}function F0(i,t){const e=jt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return io(e)}const O0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zl(i){return i.replace(O0,B0)}function B0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const z0={[tr]:"SHADOWMAP_TYPE_PCF",[Ki]:"SHADOWMAP_TYPE_VSM"};function k0(i){return z0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const G0={[ss]:"ENVMAP_MODE_REFRACTION"};function H0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":G0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const V0={[yc]:"ENVMAP_BLENDING_MULTIPLY",[qh]:"ENVMAP_BLENDING_MIX",[$h]:"ENVMAP_BLENDING_ADD"};function W0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":V0[i.combine]||"ENVMAP_BLENDING_NONE"}function X0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=k0(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=H0(e),u=W0(e),f=I0(e),d=D0(r),m=s.createProgram();let x,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ji).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ji).join(`
`),p.length>0&&(p+=`
`)):(x=[Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),p=[Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?jt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?P0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,R0("linearToOutputTexel",e.outputColorSpace),L0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ji).join(`
`)),a=io(a),a=Yl(a,e),a=Kl(a,e),o=io(o),o=Yl(o,e),o=Kl(o,e),a=Zl(a),o=Zl(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===Ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=g+x+a,E=g+p+o,S=Xl(s,s.VERTEX_SHADER,v),A=Xl(s,s.FRAGMENT_SHADER,E);s.attachShader(m,S),s.attachShader(m,A),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function T(R){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(m)||"",F=s.getShaderInfoLog(S)||"",H=s.getShaderInfoLog(A)||"",L=N.trim(),G=F.trim(),q=H.trim();let O=!0,et=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,S,A);else{const W=$l(s,S,"vertex"),j=$l(s,A,"fragment");he("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+W+`
`+j)}else L!==""?Wt("WebGLProgram: Program Info Log:",L):(G===""||q==="")&&(et=!1);et&&(R.diagnostics={runnable:O,programLog:L,vertexShader:{log:G,prefix:x},fragmentShader:{log:q,prefix:p}})}s.deleteShader(S),s.deleteShader(A),_=new ar(s,m),y=N0(s,m)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,E0)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=T0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=A,this}let q0=0;class $0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Y0(t),e.set(t,n)),n}}class Y0{constructor(t){this.id=q0++,this.code=t,this.usedTimes=0}}function K0(i){return i===ii||i===lr||i===cr}function Z0(i,t,e,n,s,r){const a=new vo,o=new $0,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,y,D,R,N,F){const H=R.fog,L=N.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=t.get(_.envMap||G,q),et=f[_.type];let W=n.precision;_.precision!==null&&(W=n.getMaxPrecision(_.precision),W!==_.precision&&Wt("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));const j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,tt=j!==void 0?j.length:0;let At=0;L.morphAttributes.position!==void 0&&(At=1),L.morphAttributes.normal!==void 0&&(At=2),L.morphAttributes.color!==void 0&&(At=3);let kt,$,gt,Rt;if(et){const yt=pn[et];kt=yt.vertexShader,$=yt.fragmentShader}else{kt=_.vertexShader,$=_.fragmentShader;const yt=o.getVertexShaderStage(_),pe=o.getFragmentShaderStage(_);o.update(_,yt,pe),gt=yt.id,Rt=pe.id}const Ft=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),zt=N.isInstancedMesh===!0,_e=N.isBatchedMesh===!0,Gt=!!_.map,Kt=!!_.matcap,Jt=!!O,J=Jt&&O.isPMREMTexture===!0,lt=!!_.aoMap,at=!!_.lightMap,Tt=!!_.bumpMap&&_.wireframe===!1,pt=!!_.normalMap,qt=!!_.displacementMap,Nt=!!_.emissiveMap,ee=!!_.metalnessMap,nt=!!_.roughnessMap,wt=_.anisotropy>0,C=_.clearcoat>0,Xt=_.diffuseRoughness>0,Ct=_.dispersion>0,ie=_.retroreflectivity>0,ot=_.iridescence>0,de=_.sheen>0,Dt=_.transmission>0,Vt=wt&&!!_.anisotropyMap,w=C&&!!_.clearcoatMap,M=C&&!!_.clearcoatNormalMap,z=C&&!!_.clearcoatRoughnessMap,it=Xt&&!!_.diffuseRoughnessMap,Q=ot&&!!_.iridescenceMap,ht=ot&&!!_.iridescenceThicknessMap,_t=de&&!!_.sheenColorMap,Y=de&&!!_.sheenRoughnessMap,K=!!_.specularMap,dt=!!_.specularColorMap,P=!!_.specularIntensityMap,Z=Dt&&!!_.transmissionMap,X=Dt&&!!_.thicknessMap,ft=!!_.gradientMap,rt=!!_.alphaMap,ut=_.alphaTest>0,Ot=!!_.alphaHash,Qt=!!_.extensions;let st=Ln;_.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(st=i.toneMapping);const Ht=J?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Zt={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:kt,fragmentShader:$,defines:_.defines,customVertexShaderID:gt,customFragmentShaderID:Rt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:_e,batchingColor:_e&&N._colorsTexture!==null,instancing:zt,instancingColor:zt&&N.instanceColor!==null,instancingMorph:zt&&N.morphTexture!==null,outputColorSpace:Ft===null?i.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Gt,matcap:Kt,envMap:Jt,envMapMode:Jt&&O.mapping,envMapPMREM:J,envMapMaxLod:J?Ht.length-1:null,envMapSize:J?Ht[0].width:null,aoMap:lt,lightMap:at,bumpMap:Tt,normalMap:pt,displacementMap:qt,emissiveMap:Nt,normalMapObjectSpace:pt&&_.normalMapType===Zh,normalMapTangentSpace:pt&&_.normalMapType===Ka,packedNormalMap:pt&&_.normalMapType===Ka&&K0(_.normalMap.format),metalnessMap:ee,roughnessMap:nt,anisotropy:wt,anisotropyMap:Vt,clearcoat:C,clearcoatMap:w,clearcoatNormalMap:M,clearcoatRoughnessMap:z,diffuseRoughness:Xt,diffuseRoughnessMap:it,dispersion:Ct,retroreflection:ie,iridescence:ot,iridescenceMap:Q,iridescenceThicknessMap:ht,sheen:de,sheenColorMap:_t,sheenRoughnessMap:Y,specularMap:K,specularColorMap:dt,specularIntensityMap:P,transmission:Dt,transmissionMap:Z,thicknessMap:X,gradientMap:ft,opaque:_.transparent===!1&&_.blending===Qi&&_.alphaToCoverage===!1,alphaMap:rt,alphaTest:ut,alphaHash:Ot,combine:_.combine,mapUv:Gt&&d(_.map.channel),aoMapUv:lt&&d(_.aoMap.channel),lightMapUv:at&&d(_.lightMap.channel),bumpMapUv:Tt&&d(_.bumpMap.channel),normalMapUv:pt&&d(_.normalMap.channel),displacementMapUv:qt&&d(_.displacementMap.channel),emissiveMapUv:Nt&&d(_.emissiveMap.channel),metalnessMapUv:ee&&d(_.metalnessMap.channel),roughnessMapUv:nt&&d(_.roughnessMap.channel),anisotropyMapUv:Vt&&d(_.anisotropyMap.channel),clearcoatMapUv:w&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&d(_.sheenRoughnessMap.channel),specularMapUv:K&&d(_.specularMap.channel),specularColorMapUv:dt&&d(_.specularColorMap.channel),specularIntensityMapUv:P&&d(_.specularIntensityMap.channel),transmissionMapUv:Z&&d(_.transmissionMap.channel),thicknessMapUv:X&&d(_.thicknessMap.channel),alphaMapUv:rt&&d(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(pt||wt),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(Gt||rt),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&pt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:At,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:F.filter(yt=>yt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:Gt&&_.map.isVideoTexture===!0&&le.getTransfer(_.map.colorSpace)===me,decodeVideoTextureEmissive:Nt&&_.emissiveMap.isVideoTexture===!0&&le.getTransfer(_.emissiveMap.colorSpace)===me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Xe,flipSided:_.side===Ge,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Qt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&_.extensions.multiDraw===!0||_e)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function x(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)y.push(D),y.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(p(y,_),g(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function p(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapPMREM),_.push(y.envMapMaxLod),_.push(y.envMapSize),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.diffuseRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.numSunLights),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numSunLightShadows),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.numLightProbeGrids),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function g(_,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){const y=f[_.type];let D;if(y){const R=pn[y];D=gd.clone(R.uniforms)}else D=_.uniforms;return D}function E(_,y){let D=h.get(y);return D!==void 0?++D.usedTimes:(D=new X0(i,y,_,s),c.push(D),h.set(y,D)),D}function S(_){if(--_.usedTimes===0){const y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function T(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:v,acquireProgram:E,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:T}}function J0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Q0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ql(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,m,x,p,g){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:d,material:m,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:g},i[t]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=m,v.materialVariant=a(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=p,v.group=g),t++,v}function l(f,d,m,x,p,g,v){v.reversedDepth===!0&&(p=-p);const E=o(f,d,m,x,p,g);m.transmission>0?n.push(E):m.transparent===!0?s.push(E):e.push(E)}function c(f,d,m,x,p,g){const v=o(f,d,m,x,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?s.unshift(v):e.unshift(v)}function h(f,d){e.length>1&&e.sort(f||Q0),n.length>1&&n.sort(d||Ql),s.length>1&&s.sort(d||Ql)}function u(){for(let f=t,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function j0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new jl,i.set(n,[a])):s>=r.length?(a=new jl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function tg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new te};break;case"SpotLight":e={position:new I,direction:new I,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function eg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ng=0;function ig(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function sg(i){const t=new tg,e=eg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new fe,a=new fe;function o(c){let h=0,u=0,f=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,m=0,x=0,p=0,g=0,v=0,E=0,S=0,A=0,T=0,_=0,y=0,D=0,R=0;c.sort(ig);for(let F=0,H=c.length;F<H;F++){const L=c[F],G=L.color,q=L.intensity,O=L.distance;let et=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ii?et=L.shadow.map.texture:et=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=G.r*q,u+=G.g*q,f+=G.b*q;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],q);R++}else if(L.isSunLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[m]=tt,n.sunShadowMap[m]=et;const At=j.getViewportCount();for(let kt=0;kt<At;kt++)n.sunShadowMatrix[x+kt]=j.getMatrix(kt),n.sunShadowCascade[x+kt]=j._cascadeData[kt];x+=At,m++}n.sun[d]=W,d++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=et,n.directionalShadowMatrix[p]=L.shadow.matrix,A++}n.directional[p]=W,p++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(G).multiplyScalar(q),W.distance=O,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[v]=W;const j=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,j.updateMatrices(L),L.castShadow&&D++),n.spotLightMatrix[v]=j.matrix,L.castShadow){const tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.spotShadow[v]=tt,n.spotShadowMap[v]=et,_++}v++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(G).multiplyScalar(q),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[E]=W,E++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const j=L.shadow,tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,n.pointShadow[g]=tt,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=L.shadow.matrix,T++}n.point[g]=W,g++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(q),W.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[S]=W,S++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const N=n.hash;(N.sunLength!==d||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==E||N.hemiLength!==S||N.numSunShadows!==m||N.numDirectionalShadows!==A||N.numPointShadows!==T||N.numSpotShadows!==_||N.numSpotMaps!==y||N.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=p,n.spot.length=v,n.rectArea.length=E,n.point.length=g,n.hemi.length=S,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+y-D,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=R,N.sunLength=d,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=E,N.hemiLength=S,N.numSunShadows=m,N.numDirectionalShadows=A,N.numPointShadows=T,N.numSpotShadows=_,N.numSpotMaps=y,N.numLightProbes=R,n.version=ng++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0,p=0;const g=h.matrixWorldInverse;for(let v=0,E=c.length;v<E;v++){const S=c[v];if(S.isSunLight){const A=n.sun[u];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(g),u++}else if(S.isDirectionalLight){const A=n.directional[f];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),f++}else if(S.isSpotLight){const A=n.spot[m];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),m++}else if(S.isRectAreaLight){const A=n.rectArea[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){const A=n.hemi[p];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function tc(i){const t=new sg(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){n.push(u)}function l(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function rg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new tc(i),t.set(s,[o])):r>=a.length?(o=new tc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,og=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lg=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],cg=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],ec=new fe,Yi=new I,ra=new I;function hg(i,t,e){let n=new os;const s=new ct,r=new ct,a=new be,o=new Md,l=new yd,c={},h=e.maxTextureSize,u={[Xn]:Ge,[Ge]:Xn,[Xe]:Xe},f=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:ag,fragmentShader:og}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Te;m.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ne(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tr;let g=this.type;this.render=function(T,_,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Ah&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=tr);const D=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ti),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=g!==this.type;H&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=T.length;L<G;L++){const q=T[L],O=q.shadow;if(O===void 0){Wt("WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const et=O.getFrameExtents();s.multiply(et),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,O.mapSize.y=r.y));const W=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||H===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ki){if(q.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new _n(s.x,s.y,{format:ii,type:xn,minFilter:qe,magFilter:qe,generateMipmaps:!1}),O.map.texture.name=q.name+".shadowMap",O.map.depthTexture=new Ci(s.x,s.y,on),O.map.depthTexture.name=q.name+".shadowMapDepth",O.map.depthTexture.format=qn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ue,O.map.depthTexture.magFilter=Ue}else q.isPointLight?(O.map=new Ro(s.x),O.map.depthTexture=new Xc(s.x,vn)):(O.map=new _n(s.x,s.y),O.map.depthTexture=new Ci(s.x,s.y,vn)),O.map.depthTexture.name=q.name+".shadowMap",O.map.depthTexture.format=qn,this.type===tr?(O.map.depthTexture.compareFunction=W?Fc:Uc,O.map.depthTexture.minFilter=qe,O.map.depthTexture.magFilter=qe):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ue,O.map.depthTexture.magFilter=Ue);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);const j=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();q.isPointLight!==!0&&O.updateMatrices(q,y);const tt=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:y.layers;for(let At=0;At<j;At++){const kt=O.getCamera(At);if(q.isPointLight){const $=O.camera,gt=O.matrix,Rt=q.distance||$.far;Rt!==$.far&&($.far=Rt,$.updateProjectionMatrix()),Yi.setFromMatrixPosition(q.matrixWorld),$.position.copy(Yi),ra.copy($.position),ra.add(lg[At]),$.up.copy(cg[At]),$.lookAt(ra),$.updateMatrixWorld(),gt.makeTranslation(-Yi.x,-Yi.y,-Yi.z),ec.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),O._frustum.setFromProjectionMatrix(ec,$.coordinateSystem,$.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,At),i.clear();else{At===0&&(i.setRenderTarget(O.map),i.clear());const $=O.getViewport(At);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),F.viewport(a)}n=O.getFrustum(At),S(_,y,kt,q,tt,this.type)}O.isPointLightShadow!==!0&&this.type===Ki&&v(O,y),O.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(D,R,N)};function v(T,_){const y=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new _n(s.x,s.y,{format:ii,type:xn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,y,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,y,d,x,null)}function E(T,_,y,D){let R=null;const N=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)R=N;else if(R=y.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const F=R.uuid,H=_.uuid;let L=c[F];L===void 0&&(L={},c[F]=L);let G=L[H];G===void 0&&(G=R.clone(),L[H]=G,_.addEventListener("dispose",A)),R=G}if(R.visible=_.visible,R.wireframe=_.wireframe,D===Ki?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:u[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=i.properties.get(R);F.light=y}return R}function S(T,_,y,D,R,N){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===Ki)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const L=t.update(T),G=T.material;if(Array.isArray(G)){const q=L.groups;for(let O=0,et=q.length;O<et;O++){const W=q[O],j=G[W.materialIndex];if(j&&j.visible){const tt=E(T,j,D,N);T.onBeforeShadow(i,T,_,y,L,tt,W),i.renderBufferDirect(y,null,L,tt,T,W),T.onAfterShadow(i,T,_,y,L,tt,W)}}}else if(G.visible){const q=E(T,G,D,N);T.onBeforeShadow(i,T,_,y,L,q,null),i.renderBufferDirect(y,null,L,q,T,null),T.onAfterShadow(i,T,_,y,L,q,null)}}const H=T.children;for(let L=0,G=H.length;L<G;L++)S(H[L],_,y,D,R,N)}function A(T){T.target.removeEventListener("dispose",A);for(const y in c){const D=c[y],R=T.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function ug(i,t){function e(){let P=!1;const Z=new be;let X=null;const ft=new be(0,0,0,0);return{setMask:function(rt){X!==rt&&!P&&(i.colorMask(rt,rt,rt,rt),X=rt)},setLocked:function(rt){P=rt},setClear:function(rt,ut,Ot,Qt,st){st===!0&&(rt*=Qt,ut*=Qt,Ot*=Qt),Z.set(rt,ut,Ot,Qt),ft.equals(Z)===!1&&(i.clearColor(rt,ut,Ot,Qt),ft.copy(Z))},reset:function(){P=!1,X=null,ft.set(-1,0,0,0)}}}function n(){let P=!1,Z=!1,X=null,ft=null,rt=null;return{setReversed:function(ut){if(Z!==ut){const Ot=t.get("EXT_clip_control");ut?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),Z=ut;const Qt=rt;rt=null,this.setClear(Qt)}},getReversed:function(){return Z},setTest:function(ut){ut?xt(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(ut){X!==ut&&!P&&(i.depthMask(ut),X=ut)},setFunc:function(ut){if(Z&&(ut=ou[ut]),ft!==ut){switch(ut){case ha:i.depthFunc(i.NEVER);break;case ua:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case fa:i.depthFunc(i.EQUAL);break;case pa:i.depthFunc(i.GEQUAL);break;case ma:i.depthFunc(i.GREATER);break;case ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=ut}},setLocked:function(ut){P=ut},setClear:function(ut){rt!==ut&&(rt=ut,Z&&(ut=1-ut),i.clearDepth(ut))},reset:function(){P=!1,X=null,ft=null,rt=null,Z=!1}}}function s(){let P=!1,Z=null,X=null,ft=null,rt=null,ut=null,Ot=null,Qt=null,st=null;return{setTest:function(Ht){P||(Ht?xt(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(Ht){Z!==Ht&&!P&&(i.stencilMask(Ht),Z=Ht)},setFunc:function(Ht,Zt,yt){(X!==Ht||ft!==Zt||rt!==yt)&&(i.stencilFunc(Ht,Zt,yt),X=Ht,ft=Zt,rt=yt)},setOp:function(Ht,Zt,yt){(ut!==Ht||Ot!==Zt||Qt!==yt)&&(i.stencilOp(Ht,Zt,yt),ut=Ht,Ot=Zt,Qt=yt)},setLocked:function(Ht){P=Ht},setClear:function(Ht){st!==Ht&&(i.clearStencil(Ht),st=Ht)},reset:function(){P=!1,Z=null,X=null,ft=null,rt=null,ut=null,Ot=null,Qt=null,st=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let h={},u={},f={},d=new WeakMap,m=[],x=null,p=!1,g=null,v=null,E=null,S=null,A=null,T=null,_=null,y=new te(0,0,0),D=0,R=!1,N=null,F=null,H=null,L=null,G=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,et=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=et>=1):W.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=et>=2);let j=null,tt={};const At=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),$=new be().fromArray(At),gt=new be().fromArray(kt);function Rt(P,Z,X,ft){const rt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(P,ut),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<X;Ot++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(Z+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return ut}const Ft={};Ft[i.TEXTURE_2D]=Rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ft[i.TEXTURE_CUBE_MAP]=Rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ft[i.TEXTURE_2D_ARRAY]=Rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ft[i.TEXTURE_3D]=Rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(i.DEPTH_TEST),a.setFunc(is),Tt(!1),pt(qo),xt(i.CULL_FACE),lt(Ti);function xt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function zt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function _e(P,Z){return f[P]!==Z?(i.bindFramebuffer(P,Z),f[P]=Z,P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Z),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function Gt(P,Z){let X=m,ft=!1;if(P){X=d.get(Z),X===void 0&&(X=[],d.set(Z,X));const rt=P.textures;if(X.length!==rt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Ot=rt.length;ut<Ot;ut++)X[ut]=i.COLOR_ATTACHMENT0+ut;X.length=rt.length,ft=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,ft=!0);ft&&i.drawBuffers(X)}function Kt(P){return x!==P?(i.useProgram(P),x=P,!0):!1}const Jt={[Ei]:i.FUNC_ADD,[Ch]:i.FUNC_SUBTRACT,[Ph]:i.FUNC_REVERSE_SUBTRACT};Jt[Lh]=i.MIN,Jt[Ih]=i.MAX;const J={[Dh]:i.ZERO,[Nh]:i.ONE,[Uh]:i.SRC_COLOR,[xc]:i.SRC_ALPHA,[Gh]:i.SRC_ALPHA_SATURATE,[zh]:i.DST_COLOR,[Oh]:i.DST_ALPHA,[Fh]:i.ONE_MINUS_SRC_COLOR,[Mc]:i.ONE_MINUS_SRC_ALPHA,[kh]:i.ONE_MINUS_DST_COLOR,[Bh]:i.ONE_MINUS_DST_ALPHA,[Hh]:i.CONSTANT_COLOR,[Vh]:i.ONE_MINUS_CONSTANT_COLOR,[Wh]:i.CONSTANT_ALPHA,[Xh]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(P,Z,X,ft,rt,ut,Ot,Qt,st,Ht){if(P===Ti){p===!0&&(zt(i.BLEND),p=!1);return}if(p===!1&&(xt(i.BLEND),p=!0),P!==Rh){if(P!==g||Ht!==R){if((v!==Ei||A!==Ei)&&(i.blendEquation(i.FUNC_ADD),v=Ei,A=Ei),Ht)switch(P){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ke:i.blendFunc(i.ONE,i.ONE);break;case $o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:he("WebGLState: Invalid blending: ",P);break}else switch(P){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ke:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $o:he("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yo:he("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:he("WebGLState: Invalid blending: ",P);break}E=null,S=null,T=null,_=null,y.set(0,0,0),D=0,g=P,R=Ht}return}rt=rt||Z,ut=ut||X,Ot=Ot||ft,(Z!==v||rt!==A)&&(i.blendEquationSeparate(Jt[Z],Jt[rt]),v=Z,A=rt),(X!==E||ft!==S||ut!==T||Ot!==_)&&(i.blendFuncSeparate(J[X],J[ft],J[ut],J[Ot]),E=X,S=ft,T=ut,_=Ot),(Qt.equals(y)===!1||st!==D)&&(i.blendColor(Qt.r,Qt.g,Qt.b,st),y.copy(Qt),D=st),g=P,R=!1}function at(P,Z){P.side===Xe?zt(i.CULL_FACE):xt(i.CULL_FACE);let X=P.side===Ge;Z&&(X=!X),Tt(X),P.blending===Qi&&P.transparent===!1?lt(Ti):lt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const ft=P.stencilWrite;o.setTest(ft),ft&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Nt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(P){N!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),N=P)}function pt(P){P!==Th?(xt(i.CULL_FACE),P!==F&&(P===qo?i.cullFace(i.BACK):P===wh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),F=P}function qt(P){P!==H&&(O&&i.lineWidth(P),H=P)}function Nt(P,Z,X){P?(xt(i.POLYGON_OFFSET_FILL),(L!==Z||G!==X)&&(L=Z,G=X,a.getReversed()&&(Z=-Z,X=-X),i.polygonOffset(Z,X))):zt(i.POLYGON_OFFSET_FILL)}function ee(P){P?xt(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function nt(P){P===void 0&&(P=i.TEXTURE0+q-1),j!==P&&(i.activeTexture(P),j=P)}function wt(P,Z,X){X===void 0&&(j===null?X=i.TEXTURE0+q-1:X=j);let ft=tt[X];ft===void 0&&(ft={type:void 0,texture:void 0},tt[X]=ft),(ft.type!==P||ft.texture!==Z)&&(j!==X&&(i.activeTexture(X),j=X),i.bindTexture(P,Z||Ft[P]),ft.type=P,ft.texture=Z)}function C(){const P=tt[j];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Xt(){try{i.compressedTexImage2D(...arguments)}catch(P){he("WebGLState:",P)}}function Ct(){try{i.compressedTexImage3D(...arguments)}catch(P){he("WebGLState:",P)}}function ie(){try{i.texSubImage2D(...arguments)}catch(P){he("WebGLState:",P)}}function ot(){try{i.texSubImage3D(...arguments)}catch(P){he("WebGLState:",P)}}function de(){try{i.compressedTexSubImage2D(...arguments)}catch(P){he("WebGLState:",P)}}function Dt(){try{i.compressedTexSubImage3D(...arguments)}catch(P){he("WebGLState:",P)}}function Vt(){try{i.texStorage2D(...arguments)}catch(P){he("WebGLState:",P)}}function w(){try{i.texStorage3D(...arguments)}catch(P){he("WebGLState:",P)}}function M(){try{i.texImage2D(...arguments)}catch(P){he("WebGLState:",P)}}function z(){try{i.texImage3D(...arguments)}catch(P){he("WebGLState:",P)}}function it(P){return u[P]!==void 0?u[P]:i.getParameter(P)}function Q(P,Z){u[P]!==Z&&(i.pixelStorei(P,Z),u[P]=Z)}function ht(P){$.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),$.copy(P))}function _t(P){gt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),gt.copy(P))}function Y(P,Z){let X=c.get(Z);X===void 0&&(X=new WeakMap,c.set(Z,X));let ft=X.get(P);ft===void 0&&(ft=i.getUniformBlockIndex(Z,P.name),i.uniformBlockBinding(Z,ft,ft),X.set(P,ft))}function K(P,Z,X){const rt=c.get(Z).get(P);l[rt]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,rt,X),l[rt]=X)}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,tt={},f={},l={},d=new WeakMap,m=[],x=null,p=!1,g=null,v=null,E=null,S=null,A=null,T=null,_=null,y=new te(0,0,0),D=0,R=!1,N=null,F=null,H=null,L=null,G=null,$.set(0,0,i.canvas.width,i.canvas.height),gt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:zt,bindFramebuffer:_e,drawBuffers:Gt,useProgram:Kt,setBlending:lt,setMaterial:at,setFlipSided:Tt,setCullFace:pt,setLineWidth:qt,setPolygonOffset:Nt,setScissorTest:ee,activeTexture:nt,bindTexture:wt,unbindTexture:C,compressedTexImage2D:Xt,compressedTexImage3D:Ct,texImage2D:M,texImage3D:z,pixelStorei:Q,getParameter:it,updateUBOMapping:Y,uniformBlockBinding:K,texStorage2D:Vt,texStorage3D:w,texSubImage2D:ie,texSubImage3D:ot,compressedTexSubImage2D:de,compressedTexSubImage3D:Dt,scissor:ht,viewport:_t,reset:dt}}function dg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap,u=new Set;let f;const d=new WeakMap,m=new Set,x=new FinalizationRegistry(w=>m.delete(w));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return p?new OffscreenCanvas(w,M):dr("canvas")}function v(w,M,z){let it=1;const Q=Vt(w);if((Q.width>z||Q.height>z)&&(it=z/Math.max(Q.width,Q.height)),it<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ht=Math.floor(it*Q.width),_t=Math.floor(it*Q.height);f===void 0&&(f=g(ht,_t));const Y=M?g(ht,_t):f;return Y.width=ht,Y.height=_t,Y.getContext("2d").drawImage(w,0,0,ht,_t),Wt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ht+"x"+_t+")."),Y}else return"data"in w&&Wt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function E(w){return w.generateMipmaps}function S(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,M,z,it,Q,ht=!1){if(w!==null){if(i[w]!==void 0)return i[w];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let _t;it&&(_t=t.get("EXT_texture_norm16"),_t||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=M;if(M===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8),z===i.UNSIGNED_SHORT&&_t&&(Y=_t.R16_EXT),z===i.SHORT&&_t&&(Y=_t.R16_SNORM_EXT)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),M===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8),z===i.UNSIGNED_SHORT&&_t&&(Y=_t.RG16_EXT),z===i.SHORT&&_t&&(Y=_t.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),M===i.RGB&&(z===i.UNSIGNED_SHORT&&_t&&(Y=_t.RGB16_EXT),z===i.SHORT&&_t&&(Y=_t.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),M===i.RGBA){const K=ht?ur:le.getTransfer(Q);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=K===me?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&_t&&(Y=_t.RGBA16_EXT),z===i.SHORT&&_t&&(Y=_t.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(w,M){let z;return w?M===null||M===vn||M===Ri?z=i.DEPTH24_STENCIL8:M===on?z=i.DEPTH32F_STENCIL8:M===rs&&(z=i.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===vn||M===Ri?z=i.DEPTH_COMPONENT24:M===on?z=i.DEPTH_COMPONENT32F:M===rs&&(z=i.DEPTH_COMPONENT16),z}function y(w,M){return E(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ue&&w.minFilter!==qe?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function D(w){const M=new WeakRef(w);n.get(w).__ref=M,m.add(M),x.register(w,M,M)}function R(w){const M=n.get(w).__ref;M!==void 0&&(m.delete(M),x.unregister(M))}function N(w){H(w.target)}function F(w){L(w.target)}function H(w){w.removeEventListener("dispose",N),R(w),q(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&u.delete(w)}function L(w){w.removeEventListener("dispose",F),R(w),et(w)}function G(){for(const w of m){const M=w.deref();M!==void 0&&(M.isRenderTarget===!0?L(M):H(M))}m.clear(),u.clear()}function q(w){const M=n.get(w);if(M.__webglInit===void 0)return;const z=w.source,it=d.get(z);if(it){const Q=it[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&O(w),Object.keys(it).length===0&&d.delete(z)}n.remove(w)}function O(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const z=w.source,it=d.get(z);delete it[M.__cacheKey],a.memory.textures--}function et(w){const M=n.get(w);M.__depthDisposeCallback&&M.__depthDisposeCallback();const z=w.depthTexture;if(z&&z.renderTarget===w&&H(z),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let ht=0;ht<M.__webglFramebuffer[Q].length;ht++)i.deleteFramebuffer(M.__webglFramebuffer[Q][ht]);else i.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[Q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const it=w.textures;for(let Q=0,ht=it.length;Q<ht;Q++){const _t=n.get(it[Q]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(it[Q])}n.remove(w)}let W=0;function j(){W=0}function tt(){return W}function At(w){W=w}function kt(){const w=W;return w>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,w}function $(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.mipmapsAutoUpdate),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function gt(w,M){const z=n.get(w);if(w.isVideoTexture&&de(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){const it=w.image;if(it===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{at(z,w,M);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function Rt(w,M){const z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){at(z,w,M);return}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function Ft(w,M){const z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){at(z,w,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function xt(w,M){const z=n.get(w);if(w.version>0&&z.__version!==w.version){Tt(z,w,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const zt={[_a]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},_e={[Ue]:i.NEAREST,[Yh]:i.NEAREST_MIPMAP_NEAREST,[Ss]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[Cr]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},Gt={[Qh]:i.NEVER,[Oc]:i.ALWAYS,[jh]:i.LESS,[Uc]:i.LEQUAL,[tu]:i.EQUAL,[Fc]:i.GEQUAL,[eu]:i.GREATER,[nu]:i.NOTEQUAL};function Kt(w,M){if(M.type===on&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===qe||M.magFilter===Cr||M.magFilter===Ss||M.magFilter===Vn||M.minFilter===qe||M.minFilter===Cr||M.minFilter===Ss||M.minFilter===Vn)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,zt[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,zt[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,zt[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,_e[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,_e[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Gt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ue||M.minFilter!==Ss&&M.minFilter!==Vn||M.type===on&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Jt(w,M){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",N),D(M));const it=M.source;let Q=d.get(it);Q===void 0&&(Q={},d.set(it,Q));const ht=$(M);if(ht!==w.__cacheKey){Q[ht]===void 0&&(Q[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[ht].usedTimes++;const _t=Q[w.__cacheKey];_t!==void 0&&(Q[w.__cacheKey].usedTimes--,_t.usedTimes===0&&O(M)),w.__cacheKey=ht,w.__webglTexture=Q[ht].texture}return z}function J(w,M,z){return Math.floor(Math.floor(w/z)/M)}function lt(w,M,z,it){const ht=w.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,z,it,M.data);else{ht.sort((P,Z)=>P.start-Z.start);let _t=0;for(let P=1;P<ht.length;P++){const Z=ht[_t],X=ht[P],ft=Z.start+Z.count,rt=J(X.start,M.width,4),ut=J(Z.start,M.width,4);X.start<=ft+1&&rt===ut&&J(X.start+X.count-1,M.width,4)===rt?Z.count=Math.max(Z.count,X.start+X.count-Z.start):(++_t,ht[_t]=X)}ht.length=_t+1;const Y=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let P=0,Z=ht.length;P<Z;P++){const X=ht[P],ft=Math.floor(X.start/4),rt=Math.ceil(X.count/4),ut=ft%M.width,Ot=Math.floor(ft/M.width),Qt=rt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ot),e.texSubImage2D(i.TEXTURE_2D,0,ut,Ot,Qt,st,z,it,M.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function at(w,M,z){let it=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(it=i.TEXTURE_3D);const Q=Jt(w,M),ht=M.source;e.bindTexture(it,w.__webglTexture,i.TEXTURE0+z);const _t=n.get(ht);if(ht.version!==_t.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const st=le.getPrimaries(le.workingColorSpace),Ht=M.colorSpace===Hn?null:le.getPrimaries(M.colorSpace),Zt=M.colorSpace===Hn||st===Ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let K=v(M.image,!1,s.maxTextureSize);K=Dt(M,K);const dt=r.convert(M.format,M.colorSpace),P=r.convert(M.type);let Z=T(M.internalFormat,dt,P,M.normalized,M.colorSpace,M.isVideoTexture);Kt(it,M);let X;const ft=M.mipmaps,rt=M.isVideoTexture!==!0,ut=_t.__version===void 0||Q===!0,Ot=ht.dataReady,Qt=y(M,K);if(M.isDepthTexture)Z=_(M.format===Wn,M.type),ut&&(rt?e.texStorage2D(i.TEXTURE_2D,1,Z,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,Z,K.width,K.height,0,dt,P,null));else if(M.isDataTexture)if(ft.length>0){rt&&ut&&e.texStorage2D(i.TEXTURE_2D,Qt,Z,ft[0].width,ft[0].height);for(let st=0,Ht=ft.length;st<Ht;st++)X=ft[st],rt?Ot&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,X.width,X.height,dt,P,X.data):e.texImage2D(i.TEXTURE_2D,st,Z,X.width,X.height,0,dt,P,X.data);M.generateMipmaps=!1}else rt?(ut&&e.texStorage2D(i.TEXTURE_2D,Qt,Z,K.width,K.height),Ot&&lt(M,K,dt,P)):e.texImage2D(i.TEXTURE_2D,0,Z,K.width,K.height,0,dt,P,K.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){rt&&ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,Z,ft[0].width,ft[0].height,K.depth);for(let st=0,Ht=ft.length;st<Ht;st++)if(X=ft[st],M.format!==mn)if(dt!==null)if(rt){if(Ot)if(M.layerUpdates.size>0){const Zt=Nl(X.width,X.height,M.format,M.type);for(const yt of M.layerUpdates){const pe=X.data.subarray(yt*Zt/X.data.BYTES_PER_ELEMENT,(yt+1)*Zt/X.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,yt,X.width,X.height,1,dt,pe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,X.width,X.height,K.depth,dt,X.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Z,X.width,X.height,K.depth,0,X.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Ot&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,X.width,X.height,K.depth,dt,P,X.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Z,X.width,X.height,K.depth,0,dt,P,X.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{rt&&ut&&e.texStorage2D(i.TEXTURE_2D,Qt,Z,ft[0].width,ft[0].height);for(let st=0,Ht=ft.length;st<Ht;st++)X=ft[st],M.format!==mn?dt!==null?rt?Ot&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,X.width,X.height,dt,X.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Z,X.width,X.height,0,X.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Ot&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,X.width,X.height,dt,P,X.data):e.texImage2D(i.TEXTURE_2D,st,Z,X.width,X.height,0,dt,P,X.data)}else if(M.isDataArrayTexture)if(rt){if(ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,Z,K.width,K.height,K.depth),Ot)if(M.layerUpdates.size>0){const st=Nl(K.width,K.height,M.format,M.type);for(const Ht of M.layerUpdates){const Zt=K.data.subarray(Ht*st/K.data.BYTES_PER_ELEMENT,(Ht+1)*st/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ht,K.width,K.height,1,dt,P,Zt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,dt,P,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,K.width,K.height,K.depth,0,dt,P,K.data);else if(M.isData3DTexture)rt?(ut&&e.texStorage3D(i.TEXTURE_3D,Qt,Z,K.width,K.height,K.depth),Ot&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,dt,P,K.data)):e.texImage3D(i.TEXTURE_3D,0,Z,K.width,K.height,K.depth,0,dt,P,K.data);else if(M.isFramebufferTexture){if(ut)if(rt)e.texStorage2D(i.TEXTURE_2D,Qt,Z,K.width,K.height);else{let st=K.width,Ht=K.height;for(let Zt=0;Zt<Qt;Zt++)e.texImage2D(i.TEXTURE_2D,Zt,Z,st,Ht,0,dt,P,null),st>>=1,Ht>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){const st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),K.parentNode!==st){st.appendChild(K),u.add(M),st.onpaint=Ht=>{const Zt=Ht.changedElements;for(const yt of u)Zt.includes(yt.image)&&(yt.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{const Zt=i.RGBA,yt=i.RGBA,pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Zt,yt,pe,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ft.length>0){if(rt&&ut){const st=Vt(ft[0]);e.texStorage2D(i.TEXTURE_2D,Qt,Z,st.width,st.height)}for(let st=0,Ht=ft.length;st<Ht;st++)X=ft[st],rt?Ot&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,dt,P,X):e.texImage2D(i.TEXTURE_2D,st,Z,dt,P,X);M.generateMipmaps=!1}else if(rt){if(ut){const st=Vt(K);e.texStorage2D(i.TEXTURE_2D,Qt,Z,st.width,st.height)}Ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,P,K)}else e.texImage2D(i.TEXTURE_2D,0,Z,dt,P,K);E(M)&&M.mipmapsAutoUpdate===!0&&S(it),_t.__version=ht.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Tt(w,M,z){if(M.image.length!==6)return;const it=Jt(w,M),Q=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);const ht=n.get(Q);if(Q.version!==ht.__version||it===!0){e.activeTexture(i.TEXTURE0+z);const _t=le.getPrimaries(le.workingColorSpace),Y=M.colorSpace===Hn?null:le.getPrimaries(M.colorSpace),K=M.colorSpace===Hn||_t===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const dt=M.isCompressedTexture||M.image[0].isCompressedTexture,P=M.image[0]&&M.image[0].isDataTexture,Z=[];for(let yt=0;yt<6;yt++)!dt&&!P?Z[yt]=v(M.image[yt],!0,s.maxCubemapSize):Z[yt]=P?M.image[yt].image:M.image[yt],Z[yt]=Dt(M,Z[yt]);const X=Z[0],ft=r.convert(M.format,M.colorSpace),rt=r.convert(M.type);let ut=T(M.internalFormat,ft,rt,M.normalized,M.colorSpace);const Ot=M.isVideoTexture!==!0,Qt=ht.__version===void 0||it===!0,st=Q.dataReady;let Ht=y(M,X);Kt(i.TEXTURE_CUBE_MAP,M);let Zt;if(M.isDepthTexture){if(ut=_(M.format===Wn,M.type),Qt)if(Ot)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ut,X.width,X.height);else for(let yt=0;yt<6;yt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ut,X.width,X.height,0,ft,rt,null)}else if(dt){Ot&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,ut,X.width,X.height);for(let yt=0;yt<6;yt++){Zt=Z[yt].mipmaps;for(let pe=0;pe<Zt.length;pe++){const Pe=Zt[pe];M.format!==mn?ft!==null?Ot?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,pe,0,0,Pe.width,Pe.height,ft,Pe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,pe,ut,Pe.width,Pe.height,0,Pe.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,pe,0,0,Pe.width,Pe.height,ft,rt,Pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,pe,ut,Pe.width,Pe.height,0,ft,rt,Pe.data)}}}else{if(Zt=M.mipmaps,Ot&&Qt){Zt.length>0&&Ht++;const yt=Vt(Z[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,ut,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(P){Ot?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Z[yt].width,Z[yt].height,ft,rt,Z[yt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ut,Z[yt].width,Z[yt].height,0,ft,rt,Z[yt].data);for(let pe=0;pe<Zt.length;pe++){const Nn=Zt[pe].image[yt].image;Ot?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,pe+1,0,0,Nn.width,Nn.height,ft,rt,Nn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,pe+1,ut,Nn.width,Nn.height,0,ft,rt,Nn.data)}}else{Ot?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,ft,rt,Z[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ut,ft,rt,Z[yt]);for(let pe=0;pe<Zt.length;pe++){const Pe=Zt[pe];Ot?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,pe+1,0,0,ft,rt,Pe.image[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,pe+1,ut,ft,rt,Pe.image[yt])}}}E(M)&&M.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),ht.__version=Q.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function pt(w,M,z,it,Q,ht){const _t=r.convert(z.format,z.colorSpace),Y=r.convert(z.type),K=T(z.internalFormat,_t,Y,z.normalized,z.colorSpace),dt=n.get(M),P=n.get(z);if(P.__renderTarget=M,!dt.__hasExternalTextures){const Z=Math.max(1,M.width>>ht),X=Math.max(1,M.height>>ht);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,ht,K,Z,X,M.depth,0,_t,Y,null):e.texImage2D(Q,ht,K,Z,X,0,_t,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),ot(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,Q,P.__webglTexture,0,ie(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,Q,P.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(w,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const it=M.depthTexture,Q=it&&it.isDepthTexture?it.type:null,ht=_(M.stencilBuffer,Q),_t=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ot(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(M),ht,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(M),ht,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ht,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,w)}else{const it=M.textures;for(let Q=0;Q<it.length;Q++){const ht=it[Q],_t=r.convert(ht.format,ht.colorSpace),Y=r.convert(ht.type),K=T(ht.internalFormat,_t,Y,ht.normalized,ht.colorSpace);ot(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(M),K,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(M),K,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,K,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(w,M,z){const it=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(M.depthTexture);Q.__renderTarget=M;const ht=it?M.depthTexture.image[0]:M.depthTexture.image;(!Q.__webglTexture||ht.width!==M.width||ht.height!==M.height)&&(ht.width=M.width,ht.height=M.height,M.depthTexture.needsUpdate=!0),it?xt(M.depthTexture,0):gt(M.depthTexture,0);const _t=Q.__webglTexture,Y=ie(M),K=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,dt=M.depthTexture.format===Wn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===qn)ot(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,K,_t,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,dt,K,_t,0);else if(M.depthTexture.format===Wn)ot(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,K,_t,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,dt,K,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(w){const M=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const it=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),it){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,it.removeEventListener("dispose",Q)};it.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=it}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let it=0;it<6;it++)Nt(M.__webglFramebuffer[it],w,it);else w.texture.mipmaps.length>0?Nt(M.__webglFramebuffer[0],w,0):Nt(M.__webglFramebuffer,w,0);else if(z){M.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[it]),M.__webglDepthbuffer[it]===void 0)M.__webglDepthbuffer[it]=i.createRenderbuffer(),qt(M.__webglDepthbuffer[it],w,!1);else{const Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ht)}}else if(w.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),qt(M.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(w,M,z){const it=n.get(w);M!==void 0&&pt(it.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ee(w)}function wt(w){const M=w.texture,z=n.get(w),it=n.get(M);w.addEventListener("dispose",F),D(w);const Q=w.textures,ht=w.isWebGLCubeRenderTarget===!0,_t=Q.length>1;if(_t||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=M.version,a.memory.textures++),ht){z.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(M.mipmaps.length>0){z.__webglFramebuffer[Y]=[];for(let K=0;K<M.mipmaps.length;K++)z.__webglFramebuffer[Y][K]=i.createFramebuffer()}else z.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(M.mipmaps.length>0){z.__webglFramebuffer=[];for(let Y=0;Y<M.mipmaps.length;Y++)z.__webglFramebuffer[Y]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(_t)for(let Y=0,K=Q.length;Y<K;Y++){const dt=n.get(Q[Y]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ot(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Y=0;Y<Q.length;Y++){const K=Q[Y];z.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Y]);const dt=r.convert(K.format,K.colorSpace),P=r.convert(K.type),Z=T(K.internalFormat,dt,P,K.normalized,K.colorSpace,w.isXRRenderTarget===!0),X=ie(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,Z,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,z.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),qt(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,M);for(let Y=0;Y<6;Y++)if(M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)pt(z.__webglFramebuffer[Y][K],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else pt(z.__webglFramebuffer[Y],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);E(M)?S(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(_t){for(let Y=0,K=Q.length;Y<K;Y++){const dt=Q[Y],P=n.get(dt);let Z=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,P.__webglTexture),Kt(Z,dt),pt(z.__webglFramebuffer,w,dt,i.COLOR_ATTACHMENT0+Y,Z,0),E(dt)&&S(Z)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,it.__webglTexture),Kt(Y,M),M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)pt(z.__webglFramebuffer[K],w,M,i.COLOR_ATTACHMENT0,Y,K);else pt(z.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,Y,0);E(M)?S(Y):M.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}w.depthBuffer&&ee(w)}function C(w){const M=w.textures;for(let z=0,it=M.length;z<it;z++){const Q=M[z];if(E(Q)&&Q.mipmapsAutoUpdate===!0){const ht=A(w),_t=n.get(Q).__webglTexture;e.bindTexture(ht,_t),S(ht),e.unbindTexture()}}}const Xt=[];function Ct(w){if(w.samples>0){if(ot(w)===!1){const M=w.textures,z=w.width,it=w.height;let Q=i.COLOR_BUFFER_BIT;const ht=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(w),Y=M.length>1;if(Y)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[dt]);const P=n.get(M[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,z,it,0,0,z,it,Q,i.NEAREST),l===!0&&(Xt.length=0,Xt.push(i.COLOR_ATTACHMENT0+dt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Xt.push(ht),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[dt]);const P=n.get(M[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,P,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ie(w){return Math.min(s.maxSamples,w.samples)}function ot(w){const M=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function de(w){const M=a.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function Dt(w,M){const z=w.colorSpace,it=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==hr&&z!==Hn&&(le.getTransfer(z)===me?(it!==mn||Q!==Ze)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):he("WebGLTextures: Unsupported texture color space:",z)),M}function Vt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=kt,this.resetTextureUnits=j,this.getTextureUnits=tt,this.setTextureUnits=At,this.setTexture2D=gt,this.setTexture2DArray=Rt,this.setTexture3D=Ft,this.setTextureCube=xt,this.rebindTextures=nt,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=ot,this.dispose=G}function fg(i,t){function e(n,s=Hn){let r;const a=le.getTransfer(s);if(n===Ze)return i.UNSIGNED_BYTE;if(n===co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ic)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cc)return i.BYTE;if(n===Pc)return i.SHORT;if(n===rs)return i.UNSIGNED_SHORT;if(n===lo)return i.INT;if(n===vn)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===xn)return i.HALF_FLOAT;if(n===Dc)return i.ALPHA;if(n===Nc)return i.RGB;if(n===mn)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===Wn)return i.DEPTH_STENCIL;if(n===uo)return i.RED;if(n===fo)return i.RED_INTEGER;if(n===ii)return i.RG;if(n===po)return i.RG_INTEGER;if(n===mo)return i.RGBA_INTEGER;if(n===er||n===nr||n===ir||n===sr)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xa||n===Ma||n===ya||n===Sa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ba||n===Ea||n===Ta||n===wa||n===Aa||n===lr||n===Ra)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ba||n===Ea)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ta)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===wa)return r.COMPRESSED_R11_EAC;if(n===Aa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===lr)return r.COMPRESSED_RG11_EAC;if(n===Ra)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ca||n===Pa||n===La||n===Ia||n===Da||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ga||n===Ha)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ca)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ia)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ga)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ha)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===Wa||n===Xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Va)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qa||n===$a||n===cr||n===Ya)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new qc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ri({vertexShader:pg,fragmentShader:mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ne(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _g extends ai{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null;const x=typeof XRWebGLBinding<"u",p=new gg,g={},v=e.getContextAttributes();let E=null,S=null;const A=[],T=[],_=new ct;let y=null,D=null;const R=new je;R.viewport=new be;const N=new je;N.viewport=new be;const F=[R,N],H=new Td;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let gt=A[$];return gt===void 0&&(gt=new Br,A[$]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function($){let gt=A[$];return gt===void 0&&(gt=new Br,A[$]=gt),gt.getGripSpace()},this.getHand=function($){let gt=A[$];return gt===void 0&&(gt=new Br,A[$]=gt),gt.getHandSpace()};function q($){const gt=T.indexOf($.inputSource);if(gt===-1)return;const Rt=A[gt];Rt!==void 0&&(Rt.update($.inputSource,$.frame,c||a),Rt.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",et);for(let $=0;$<A.length;$++){const gt=T[$];gt!==null&&(T[$]=null,A[$].disconnect(gt))}L=null,G=null,p.reset();for(const $ in g)delete g[$];if(t.setRenderTarget(E),d=null,f=null,u=null,s=null,S=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(_.width,_.height,!1),D!==null){const $=D.camera;$.fov=D.fov,$.zoom=D.zoom,$.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",O),s.addEventListener("inputsourceschange",et),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Ft=null,xt=null;v.depth&&(xt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=v.stencil?Wn:qn,Ft=v.stencil?Ri:vn);const zt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new _n(f.textureWidth,f.textureHeight,{format:mn,type:Ze,depthTexture:new Ci(f.textureWidth,f.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Rt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new _n(d.framebufferWidth,d.framebufferHeight,{format:mn,type:Ze,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function et($){for(let gt=0;gt<$.removed.length;gt++){const Rt=$.removed[gt],Ft=T.indexOf(Rt);Ft>=0&&(T[Ft]=null,A[Ft].disconnect(Rt))}for(let gt=0;gt<$.added.length;gt++){const Rt=$.added[gt];let Ft=T.indexOf(Rt);if(Ft===-1){for(let zt=0;zt<A.length;zt++)if(zt>=T.length){T.push(Rt),Ft=zt;break}else if(T[zt]===null){T[zt]=Rt,Ft=zt;break}if(Ft===-1)break}const xt=A[Ft];xt&&xt.connect(Rt)}}function W($,gt){gt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(gt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let gt=$.near,Rt=$.far;p.texture!==null&&(p.depthNear>0&&(gt=p.depthNear),p.depthFar>0&&(Rt=p.depthFar)),H.near=N.near=R.near=gt,H.far=N.far=R.far=Rt,(L!==H.near||G!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),L=H.near,G=H.far),H.layers.mask=$.layers.mask|6,R.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;const Ft=$.parent,xt=H.cameras;W(H,Ft);for(let zt=0;zt<xt.length;zt++)W(xt[zt],Ft);H.projectionMatrix.copy(R.projectionMatrix),H.projectionMatrixInverse.copy(R.projectionMatrixInverse),D===null&&$.isPerspectiveCamera&&(D={camera:$,fov:$.fov,zoom:$.zoom}),j($,H,Ft)};function j($,gt,Rt){Rt===null?$.matrix.copy(gt.matrixWorld):($.matrix.copy(Rt.matrixWorld),$.matrix.invert(),$.matrix.multiply(gt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(gt.projectionMatrix),$.projectionMatrixInverse.copy(gt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Za*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function($){return g[$]};let tt=null;function At($,gt){if(h=gt.getViewerPose(c||a),m=gt,h!==null){const Rt=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Ft=!1;Rt.length!==H.cameras.length&&(H.cameras.length=0,Ft=!0);for(let Gt=0;Gt<Rt.length;Gt++){const Kt=Rt[Gt];let Jt=null;if(d!==null)Jt=d.getViewport(Kt);else{const lt=u.getViewSubImage(f,Kt);Jt=lt.viewport,Gt===0&&(t.setRenderTargetTextures(S,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(S))}let J=F[Gt];J===void 0&&(J=new je,J.layers.enable(Gt),J.viewport=new be,F[Gt]=J),J.matrix.fromArray(Kt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Kt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Gt===0&&(H.matrix.copy(J.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ft===!0&&H.cameras.push(J)}const xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const Gt=u.getDepthInformation(Rt[0]);Gt&&Gt.isValid&&Gt.texture&&p.init(Gt,s.renderState)}if(xt&&xt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Gt=0;Gt<Rt.length;Gt++){const Kt=Rt[Gt].camera;if(Kt){let Jt=g[Kt];Jt||(Jt=new qc,g[Kt]=Jt);const J=u.getCameraImage(Kt);Jt.sourceTexture=J}}}}for(let Rt=0;Rt<A.length;Rt++){const Ft=T[Rt],xt=A[Rt];Ft!==null&&xt!==void 0&&xt.update(Ft,gt,c||a)}tt&&tt($,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),m=null}const kt=new rh;kt.setAnimationLoop(At),this.setAnimationLoop=function($){tt=$},this.dispose=function(){}}}const vg=new fe,mh=new $t;mh.set(-1,0,0,0,1,0,0,0,1);function xg(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,eh(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,v,E,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,S)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,v,E):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ge&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ge&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const v=t.get(g),E=v.envMap,S=v.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(vg.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(mh),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=E*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ge&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){const v=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mg(i,t,e,n){let s={},r={};function a(v,E){const S=E.program;n.uniformBlockBinding(v,S,s[v.id])}function o(v,E){let S=s[v.id];S===void 0&&(m(v),S=l(v),s[v.id]=S,v.addEventListener("dispose",p));const A=E.program;n.updateUBOMapping(v,A);const T=t.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){const E=i.createBuffer(),S=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,S,A),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(v){const E=s[v.id],S=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,_=S.length;T<_;T++){const y=S[T];if(Array.isArray(y))for(let D=0,R=y.length;D<R;D++)h(y[D],T,D,A);else h(y,T,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,E,S,A){if(f(v,E,S,A)===!0){const T=v.__offset,_=v.value;if(Array.isArray(_)){let y=0;for(let D=0;D<_.length;D++){const R=_[D],N=x(R,!0);u(R,v.__data,y),y+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,v.__data)}}function u(v,E,S){typeof v=="number"||typeof v=="boolean"?E[S]=v:v.isMatrix3?(E[S]=v.elements[0],E[S+1]=v.elements[1],E[S+2]=v.elements[2],E[S+3]=0,E[S+4]=v.elements[3],E[S+5]=v.elements[4],E[S+6]=v.elements[5],E[S+7]=0,E[S+8]=v.elements[6],E[S+9]=v.elements[7],E[S+10]=v.elements[8],E[S+11]=0):ArrayBuffer.isView(v)?E.set(v.subarray(0,E.length-S),S):v.toArray(E,S)}function f(v,E,S,A){const T=v.value,_=E+"_"+S;if(Array.isArray(T)){A[_]===void 0&&(A[_]=[]);const y=A[_];let D=!1;for(let R=0;R<T.length;R++)d(T[R],y,R)===!0&&(D=!0);return D}return d(T,A,_)}function d(v,E,S){if(E[S]===void 0)return typeof v=="number"||typeof v=="boolean"?E[S]=v:ArrayBuffer.isView(v)?E[S]=v.slice():E[S]=v.clone(),!0;{const A=E[S];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return E[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function m(v){const E=v.uniforms;let S=0;const A=16;for(let _=0,y=E.length;_<y;_++){const D=Array.isArray(E[_])?E[_]:[E[_]];for(let R=0,N=D.length;R<N;R++){const F=D[R],H=Array.isArray(F.value)?F.value:[F.value],L=Array.isArray(E[_])||Array.isArray(F.value);let G=S;for(let O=0,et=H.length;O<et;O++){const W=H[O],j=x(W,L),tt=S%A,At=tt%j.boundary,kt=tt+At;S+=At,kt!==0&&A-kt<j.storage&&(S+=A-kt),O===0&&(G=S),S+=j.storage}const q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new q((S-G)/Float32Array.BYTES_PER_ELEMENT),F.__offset=G}}const T=S%A;return T>0&&(S+=A-T),v.__size=S,v.__cache={},this}function x(v,E){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",v),E===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(v){const E=v.target;E.removeEventListener("dispose",p),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(const v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:g}}const yg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let un=null;function Sg(){return un===null&&(un=new Vc(yg,16,16,ii,xn),un.name="DFG_LUT",un.minFilter=qe,un.magFilter=qe,un.wrapS=Cn,un.wrapT=Cn,un.generateMipmaps=!1,un.needsUpdate=!0),un}class bg{constructor(t={}){const{canvas:e=ru(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Ze}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const x=d,p=new Set([mo,po,fo]),g=new Set([Ze,vn,rs,Ri,co,ho]),v=new Uint32Array(4),E=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let A=null,T=null;const _=[],y=[];let D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let N=!1,F=null,H=null,L=null,G=null;this._outputColorSpace=ke;let q=0,O=0,et=null,W=-1,j=null;const tt=new be,At=new be;let kt=null;const $=new te(0);let gt=0,Rt=e.width,Ft=e.height,xt=1,zt=null,_e=null;const Gt=new be(0,0,Rt,Ft),Kt=new be(0,0,Rt,Ft);let Jt=!1;const J=new os,lt=new Mo;let at=!1,Tt=!1;const pt=new fe,qt=new I,Nt=new be,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function wt(){return et===null?xt:1}let C=n;function Xt(b,U){return e.getContext(b,U)}let Ct,ie,ot,de,Dt,Vt,w,M,z,it,Q,ht,_t,Y,K,dt,P,Z,X,ft,rt,ut,Ot;try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ao}`),e.addEventListener("webglcontextlost",Ht,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),C===null){const U="webgl2";if(C=Xt(U,b),C===null)throw Xt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(b){throw e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),he("WebGLRenderer: "+b.message),b}function Qt(){Ct=new wm(C),Ct.init(),rt=new fg(C,Ct),ie=new mm(C,Ct,t,rt),ot=new ug(C,Ct),ie.reversedDepthBuffer&&f&&ot.buffers.depth.setReversed(!0),H=C.createFramebuffer(),L=C.createFramebuffer(),G=C.createFramebuffer(),de=new Cm(C),Dt=new J0,Vt=new dg(C,Ct,ot,Dt,ie,rt,de),w=new Tm(R),M=new Pd(C),ut=new fm(C,M),z=new Am(C,M,de,ut),it=new Lm(C,z,M,ut,de),Z=new Pm(C,ie,Vt),K=new gm(Dt),Q=new Z0(R,w,Ct,ie,ut,K),ht=new xg(R,Dt),_t=new j0,Y=new rg(Ct),P=new dm(R,w,ot,it,m,l),dt=new hg(R,it,ie),Ot=new Mg(C,de,ie,ot),X=new pm(C,Ct,de),ft=new Rm(C,Ct,de),de.programs=Q.programs,R.capabilities=ie,R.extensions=Ct,R.properties=Dt,R.renderLists=_t,R.shadowMap=dt,R.state=ot,R.info=de}x!==Ze&&(D=new Dm(x,e.width,e.height,o,s,r));const st=new _g(R,C);this.xr=st,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=Ct.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ct.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(b){b!==void 0&&(xt=b,this.setSize(Rt,Ft,!1))},this.getSize=function(b){return b.set(Rt,Ft)},this.setSize=function(b,U,V=!0){if(st.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=b,Ft=U,e.width=Math.floor(b*xt),e.height=Math.floor(U*xt),V===!0&&(e.style.width=b+"px",e.style.height=U+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Rt*xt,Ft*xt).floor()},this.setDrawingBufferSize=function(b,U,V){Rt=b,Ft=U,xt=V,e.width=Math.floor(b*V),e.height=Math.floor(U*V),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(x===Ze){he("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(tt)},this.getViewport=function(b){return b.copy(Gt)},this.setViewport=function(b,U,V,B){b.isVector4?Gt.set(b.x,b.y,b.z,b.w):Gt.set(b,U,V,B),ot.viewport(tt.copy(Gt).multiplyScalar(wt()).round())},this.getScissor=function(b){return b.copy(Kt)},this.setScissor=function(b,U,V,B){b.isVector4?Kt.set(b.x,b.y,b.z,b.w):Kt.set(b,U,V,B),ot.scissor(At.copy(Kt).multiplyScalar(wt()).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(b){ot.setScissorTest(Jt=b)},this.setOpaqueSort=function(b){zt=b},this.setTransparentSort=function(b){_e=b},this.getClearColor=function(b){return b.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,V=!0){let B=0;if(b){let k=!1;if(et!==null){const vt=et.texture.format;k=p.has(vt)}if(k){const vt=et.texture.type,Pt=g.has(vt),mt=P.getClearColor(),Et=P.getClearAlpha(),Ut=mt.r,Yt=mt.g,ae=mt.b;Pt?(v[0]=Ut,v[1]=Yt,v[2]=ae,v[3]=Et,C.clearBufferuiv(C.COLOR,0,v)):(E[0]=Ut,E[1]=Yt,E[2]=ae,E[3]=Et,C.clearBufferiv(C.COLOR,0,E))}else B|=C.COLOR_BUFFER_BIT}U&&(B|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),P.dispose(),_t.dispose(),Y.dispose(),Vt.dispose(),Dt.dispose(),w.dispose(),it.dispose(),z.dispose(),ut.dispose(),Ot.dispose(),Q.dispose(),st.dispose(),st.removeEventListener("sessionstart",Fo),st.removeEventListener("sessionend",Oo),Yn.stop()};function Ht(b){b.preventDefault(),Jo("WebGLRenderer: Context Lost."),N=!0}function Zt(){Jo("WebGLRenderer: Context Restored."),N=!1;const b=de.autoReset,U=dt.enabled,V=dt.autoUpdate,B=dt.needsUpdate,k=dt.type;Qt(),de.autoReset=b,dt.enabled=U,dt.autoUpdate=V,dt.needsUpdate=B,dt.type=k}function yt(b){he("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function pe(b){const U=b.target;U.removeEventListener("dispose",pe),Pe(U)}function Pe(b){Nn(b),Dt.remove(b)}function Nn(b){const U=Dt.get(b).programs;U!==void 0&&(U.forEach(function(V){Q.releaseProgram(V)}),b.isShaderMaterial&&Q.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,V,B,k,vt){U===null&&(U=ee);const Pt=k.isMesh&&k.matrixWorld.determinantAffine()<0,mt=Sh(b,U,V,B,k);ot.setMaterial(B,Pt);let Et=V.index,Ut=1;if(B.wireframe===!0){if(Et=z.getWireframeAttribute(V),Et===void 0)return;Ut=2}const Yt=V.drawRange,ae=V.attributes.position;let Lt=Yt.start*Ut,oe=(Yt.start+Yt.count)*Ut;vt!==null&&(Lt=Math.max(Lt,vt.start*Ut),oe=Math.min(oe,(vt.start+vt.count)*Ut)),Et!==null?(Lt=Math.max(Lt,0),oe=Math.min(oe,Et.count)):ae!=null&&(Lt=Math.max(Lt,0),oe=Math.min(oe,ae.count));const we=oe-Lt;if(we<0||we===1/0)return;ut.setup(k,B,mt,V,Et);let xe,ve=X;if(Et!==null&&(xe=M.get(Et),ve=ft,ve.setIndex(xe)),k.isMesh)B.wireframe===!0?(ot.setLineWidth(B.wireframeLinewidth*wt()),ve.setMode(C.LINES)):ve.setMode(C.TRIANGLES);else if(k.isLine){let Fe=B.linewidth;Fe===void 0&&(Fe=1),ot.setLineWidth(Fe*wt()),k.isLineSegments?ve.setMode(C.LINES):k.isLineLoop?ve.setMode(C.LINE_LOOP):ve.setMode(C.LINE_STRIP)}else k.isPoints?ve.setMode(C.POINTS):k.isSprite&&ve.setMode(C.TRIANGLES);if(k.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))ve.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Fe=k._multiDrawStarts,It=k._multiDrawCounts,Ve=k._multiDrawCount,ue=Et?M.get(Et).bytesPerElement:1,Kn=Dt.get(B).currentProgram.getUniforms();for(let Oe=0;Oe<Ve;Oe++)Kn.setValue(C,"_gl_DrawID",Oe),ve.render(Fe[Oe]/ue,It[Oe])}else if(k.isInstancedMesh)ve.renderInstances(Lt,we,k.count);else if(V.isInstancedBufferGeometry){const Fe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,It=Math.min(V.instanceCount,Fe);ve.renderInstances(Lt,we,It)}else ve.render(Lt,we)};function Uo(b,U,V,B){F!==null&&b.isNodeMaterial&&F.setObject(B,b),at===!0&&K.setState(b,V,!1),b.transparent===!0&&b.side===Xe&&b.forceSinglePass===!1?(b.side=Ge,b.needsUpdate=!0,Gi(b,U,B),b.side=Xn,b.needsUpdate=!0,Gi(b,U,B),b.side=Xe):Gi(b,U,B)}this.compile=function(b,U,V=null){V===null&&(V=b),F!==null&&F.renderStart(b,U,V),T=Y.get(V),T.init(U),y.push(T),V.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),b!==V&&b.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),Tt=this.localClippingEnabled,at=K.init(this.clippingPlanes,Tt),at===!0&&K.setGlobalState(this.clippingPlanes,U),F!==null&&dt.render(T.state.shadowsArray,V,U);const B=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const vt=k.material;if(vt)if(Array.isArray(vt))for(let Pt=0;Pt<vt.length;Pt++){const mt=vt[Pt];Uo(mt,V,U,k),B.add(mt)}else Uo(vt,V,U,k),B.add(vt)}),T=y.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(b,U,V=null){const B=this.compile(b,U,V);return new Promise(k=>{function vt(){if(B.forEach(function(Pt){const Et=Dt.get(Pt).currentProgram;(Et===void 0||Et.isReady())&&B.delete(Pt)}),B.size===0){k(b);return}setTimeout(vt,10)}Ct.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Tr=null;function Mh(b){Tr&&Tr(b)}function Fo(){Yn.stop()}function Oo(){Yn.start()}const Yn=new rh;Yn.setAnimationLoop(Mh),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(b){Tr=b,st.setAnimationLoop(b),b===null?Yn.stop():Yn.start()},st.addEventListener("sessionstart",Fo),st.addEventListener("sessionend",Oo),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){he("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(b,U);const V=st.enabled===!0&&st.isPresenting===!0,B=D!==null&&(et===null||V)&&D.begin(R,et);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,U,et),T=Y.get(b,y.length),T.init(U),T.state.textureUnits=Vt.getTextureUnits(),y.push(T),pt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?lt.setFromArrayCamera(U):J.setFromProjectionMatrix(pt,ln,U.reversedDepth),Tt=this.localClippingEnabled,at=K.init(this.clippingPlanes,Tt),A=_t.get(b,_.length),A.init(),_.push(A),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){const Pt=R.xr.getDepthSensingMesh();Pt!==null&&wr(Pt,U,-1/0,R.sortObjects)}wr(b,U,0,R.sortObjects),A.finish(),F!==null&&F.updateLights(T.state.lightsArray),R.sortObjects===!0&&A.sort(zt,_e),nt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,nt&&P.addToRenderList(A,b),this.info.autoReset===!0&&this.info.reset(),at===!0&&K.beginShadows();const k=T.state.shadowsArray;if(dt.render(k,b,U),at===!0&&K.endShadows(),(B&&D.hasRenderPass())===!1){const Pt=A.opaque,mt=A.transmissive;if(T.setupLights(),U.isArrayCamera){const Et=U.cameras;if(mt.length>0)for(let Ut=0,Yt=Et.length;Ut<Yt;Ut++){const ae=Et[Ut];zo(Pt,mt,b,ae)}nt&&P.render(b);for(let Ut=0,Yt=Et.length;Ut<Yt;Ut++){const ae=Et[Ut];Bo(A,b,ae,ae.viewport)}}else mt.length>0&&zo(Pt,mt,b,U),nt&&P.render(b),Bo(A,b,U)}et!==null&&O===0&&(Vt.updateMultisampleRenderTarget(et),Vt.updateRenderTargetMipmap(et)),B&&D.end(R),b.isScene===!0&&b.onAfterRender(R,b,U),ut.resetDefaultState(),W=-1,j=null,y.pop(),y.length>0?(T=y[y.length-1],Vt.setTextureUnits(T.state.textureUnits),at===!0&&K.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,F!==null&&F.renderEnd()};function wr(b,U,V,B){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){const Pt=U.isArrayCamera?lt:J;if(!b.frustumCulled||b.intersectsFrustum(Pt)){B&&Nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pt);const mt=it.update(b),Et=b.material;Et.visible&&A.push(b,mt,Et,V,Nt.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){const Pt=U.isArrayCamera?lt:J;if(!b.frustumCulled||b.intersectsFrustum(Pt)){const mt=it.update(b),Et=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Nt.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Nt.copy(mt.boundingSphere.center)),Nt.applyMatrix4(b.matrixWorld).applyMatrix4(pt)),Array.isArray(Et)){const Ut=mt.groups;for(let Yt=0,ae=Ut.length;Yt<ae;Yt++){const Lt=Ut[Yt],oe=Et[Lt.materialIndex];oe&&oe.visible&&A.push(b,mt,oe,V,Nt.z,Lt,U)}}else Et.visible&&A.push(b,mt,Et,V,Nt.z,null,U)}}}const vt=b.children;for(let Pt=0,mt=vt.length;Pt<mt;Pt++)wr(vt[Pt],U,V,B)}function Bo(b,U,V,B){const{opaque:k,transmissive:vt,transparent:Pt}=b;T.setupLightsView(V),at===!0&&K.setGlobalState(R.clippingPlanes,V),B&&ot.viewport(tt.copy(B)),k.length>0&&Ms(k,U,V),vt.length>0&&Ms(vt,U,V),Pt.length>0&&Ms(Pt,U,V),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function zo(b,U,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){const Lt=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new _n(1,1,{generateMipmaps:!0,type:Lt?xn:Ze,minFilter:Vn,samples:Math.max(4,ie.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}const vt=T.state.transmissionRenderTarget[B.id],Pt=B.viewport||tt;vt.setSize(Pt.z*R.transmissionResolutionScale,Pt.w*R.transmissionResolutionScale);const mt=R.getRenderTarget(),Et=R.getActiveCubeFace(),Ut=R.getActiveMipmapLevel();R.setRenderTarget(vt),R.getClearColor($),gt=R.getClearAlpha(),gt<1&&R.setClearColor(16777215,.5),R.clear(),nt&&P.render(V);const Yt=R.toneMapping;R.toneMapping=Ln;const ae=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),at===!0&&K.setGlobalState(R.clippingPlanes,B),Ms(b,V,B),Vt.updateMultisampleRenderTarget(vt),Vt.updateRenderTargetMipmap(vt),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let oe=0,we=U.length;oe<we;oe++){const xe=U[oe],{object:ve,geometry:Fe,material:It,group:Ve}=xe;if(It.side===Xe&&ve.layers.test(B.layers)){const ue=It.side;It.side=Ge,It.needsUpdate=!0,ko(ve,V,B,Fe,It,Ve),It.side=ue,It.needsUpdate=!0,Lt=!0}}Lt===!0&&(Vt.updateMultisampleRenderTarget(vt),Vt.updateRenderTargetMipmap(vt))}R.setRenderTarget(mt,Et,Ut),R.setClearColor($,gt),ae!==void 0&&(B.viewport=ae),R.toneMapping=Yt}function Ms(b,U,V){const B=U.isScene===!0?U.overrideMaterial:null;for(let k=0,vt=b.length;k<vt;k++){const Pt=b[k],{object:mt,geometry:Et,group:Ut}=Pt;let Yt=Pt.material;Yt.allowOverride===!0&&B!==null&&(Yt=B),mt.layers.test(V.layers)&&ko(mt,U,V,Et,Yt,Ut)}}function ko(b,U,V,B,k,vt){F!==null&&k.isNodeMaterial&&F.setObject(b,k),b.onBeforeRender(R,U,V,B,k,vt),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(R,U,V,B,b,vt),k.transparent===!0&&k.side===Xe&&k.forceSinglePass===!1?(k.side=Ge,k.needsUpdate=!0,R.renderBufferDirect(V,U,B,k,b,vt),k.side=Xn,k.needsUpdate=!0,R.renderBufferDirect(V,U,B,k,b,vt),k.side=Xe):R.renderBufferDirect(V,U,B,k,b,vt),b.onAfterRender(R,U,V,B,k,vt)}function Go(b){let U=0;for(const V of b)V.texture!==null&&U++;return U}function Gi(b,U,V){U.isScene!==!0&&(U=ee);const B=Dt.get(b),k=T.state.lights,vt=T.state.shadowsArray,Pt=k.state.version,mt=Q.getParameters(b,k.state,vt,U,V,T.state.lightProbeGridArray),Et=Q.getProgramCacheKey(mt);let Ut=B.programs;B.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;const Yt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;B.envMap=w.get(b.envMap||B.environment,Yt),B.envMapRotation=B.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ut===void 0&&(b.addEventListener("dispose",pe),Ut=new Map,B.programs=Ut,B.programVariants=new Map);let ae=Ut.get(Et);if(ae!==void 0){if(B.currentProgram===ae&&B.lightsStateVersion===Pt)return Vo(b,mt),ae}else mt.uniforms=Q.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,V,mt),b.onBeforeCompile(mt,R),ae=Q.acquireProgram(mt,Et),Ut.set(Et,ae),B.uniforms=mt.uniforms;const Lt=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=K.uniform),Vo(b,mt),B.needsLights=Eh(b),B.lightsStateVersion=Pt,B.needsLights&&(Lt.ambientLightColor.value=k.state.ambient,Lt.lightProbe.value=k.state.probe,Lt.sunLights.value=k.state.sun,Lt.sunLightShadows.value=k.state.sunShadow,Lt.directionalLights.value=k.state.directional,Lt.directionalLightShadows.value=k.state.directionalShadow,Lt.spotLights.value=k.state.spot,Lt.spotLightShadows.value=k.state.spotShadow,Lt.rectAreaLights.value=k.state.rectArea,Lt.ltc_1.value=k.state.rectAreaLTC1,Lt.ltc_2.value=k.state.rectAreaLTC2,Lt.pointLights.value=k.state.point,Lt.pointLightShadows.value=k.state.pointShadow,Lt.hemisphereLights.value=k.state.hemi,Lt.sunShadowMatrix.value=k.state.sunShadowMatrix,Lt.sunShadowCascade.value=k.state.sunShadowCascade,Lt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Lt.spotLightMatrix.value=k.state.spotLightMatrix,Lt.spotLightMap.value=k.state.spotLightMap,Lt.pointShadowMatrix.value=k.state.pointShadowMatrix),B.numLightProbeGrids=Go(T.state.lightProbeGridArray),B.currentProgram=ae,B.uniformsList=null,ae}function yh(b,U,V,B,k){const vt=Dt.get(b),Pt=vt.currentProgram.id+","+B+","+k;let mt=vt.programVariants.get(Pt);return mt===void 0?(mt=Gi(b,U,V),vt.programVariants.set(Pt,mt)):(vt.currentProgram=mt,vt.uniformsList=null,vt.outputColorSpace=B,vt.toneMapping=k),mt}function Ho(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=ar.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Vo(b,U){const V=Dt.get(b);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Sh(b,U,V,B,k){U.isScene!==!0&&(U=ee),Vt.resetTextureUnits();const vt=U.fog,Pt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,mt=et===null?R.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:le.workingColorSpace,Et=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ut=w.get(B.envMap||Pt,Et),Yt=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ae=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Lt=!!V.morphAttributes.position,oe=!!V.morphAttributes.normal,we=!!V.morphAttributes.color;let xe=Ln;B.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(xe=R.toneMapping);const ve=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Fe=ve!==void 0?ve.length:0,It=Dt.get(B),Ve=T.state.lights;if(at===!0&&(Tt===!0||b!==j)){const Me=b===j&&B.id===W;K.setState(B,b,Me)}let ue=!1,Kn=!1;B.version===It.__version?It.needsLights&&It.lightsStateVersion!==Ve.state.version||k.isBatchedMesh&&It.batching===!1||!k.isBatchedMesh&&It.batching===!0||k.isBatchedMesh&&It.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&It.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&It.instancing===!1||!k.isInstancedMesh&&It.instancing===!0||k.isSkinnedMesh&&It.skinning===!1||!k.isSkinnedMesh&&It.skinning===!0||k.isInstancedMesh&&It.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&It.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&It.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&It.instancingMorph===!1&&k.morphTexture!==null||It.envMap!==Ut||B.fog===!0&&It.fog!==vt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==K.numPlanes||It.numIntersection!==K.numIntersection)||It.vertexAlphas!==Yt||It.vertexTangents!==ae||It.morphTargets!==Lt||It.morphNormals!==oe||It.morphColors!==we||It.morphTargetsCount!==Fe||It.numLightProbeGrids!==Go(T.state.lightProbeGridArray)?ue=!0:(It.outputColorSpace!==mt||It.toneMapping!==xe)&&(Kn=!0):(ue=!0,It.__version=B.version);let Oe=It.currentProgram;(ue===!0||Kn===!0)&&(Oe=Kn===!0?yh(B,U,k,mt,xe):Gi(B,U,k),F&&B.isNodeMaterial&&F.onUpdateProgram(B,Oe,It));let ys=!1,Un=!1,Zn=!1;const ce=Oe.getUniforms(),Ne=It.uniforms;if(ot.useProgram(Oe.program)&&(ys=!0,Un=!0,Zn=!0),B.id!==W&&(W=B.id,Un=!0),ys||j!==b){ot.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ce.setValue(C,"projectionMatrix",b.projectionMatrix),ce.setValue(C,"viewMatrix",b.matrixWorldInverse);const Le=ce.map.cameraPosition;Le!==void 0&&Le.setValue(C,qt.setFromMatrixPosition(b.matrixWorld)),ie.logarithmicDepthBuffer&&ce.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ce.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,Un=!0,Zn=!0)}if(It.needsLights&&(Ve.state.sunShadowMap.length>0&&ce.setValue(C,"sunShadowMap",Ve.state.sunShadowMap,Vt),Ve.state.directionalShadowMap.length>0&&ce.setValue(C,"directionalShadowMap",Ve.state.directionalShadowMap,Vt),Ve.state.spotShadowMap.length>0&&ce.setValue(C,"spotShadowMap",Ve.state.spotShadowMap,Vt),Ve.state.pointShadowMap.length>0&&ce.setValue(C,"pointShadowMap",Ve.state.pointShadowMap,Vt)),k.isSkinnedMesh){ce.setOptional(C,k,"bindMatrix"),ce.setOptional(C,k,"bindMatrixInverse");const Me=k.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ce.setValue(C,"boneTexture",Me.boneTexture,Vt))}k.isBatchedMesh&&(ce.setOptional(C,k,"batchingTexture"),ce.setValue(C,"batchingTexture",k._matricesTexture,Vt),ce.setOptional(C,k,"batchingIdTexture"),ce.setValue(C,"batchingIdTexture",k._indirectTexture,Vt),ce.setOptional(C,k,"batchingColorTexture"),k._colorsTexture!==null&&ce.setValue(C,"batchingColorTexture",k._colorsTexture,Vt));const tn=V.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Z.update(k,V,Oe),(Un||It.receiveShadow!==k.receiveShadow)&&(It.receiveShadow=k.receiveShadow,ce.setValue(C,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(Ne.envMapIntensity.value=U.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=Sg()),Un){if(ce.setValue(C,"toneMappingExposure",R.toneMappingExposure),It.needsLights&&bh(Ne,Zn),vt&&B.fog===!0&&ht.refreshFogUniforms(Ne,vt),ht.refreshMaterialUniforms(Ne,B,xt,Ft,T.state.transmissionRenderTarget[b.id]),It.needsLights&&It.numLightProbeGrids>0){const Me=S;let Le=0;for(const yn of T.state.lightProbeGridArray)yn.texture!==null&&(Me.textures[Le]=yn.texture,Me.min[Le]=yn.boundingBox.min,Me.max[Le]=yn.boundingBox.max,Me.resolution[Le]=yn.resolution,Le++);for(const yn in Me)Me[yn].length=Le;Ne.probesSH.value=Me.textures,Ne.probesMin.value=Me.min,Ne.probesMax.value=Me.max,Ne.probesResolution.value=Me.resolution}ar.upload(C,Ho(It),Ne,Vt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ar.upload(C,Ho(It),Ne,Vt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ce.setValue(C,"center",k.center),ce.setValue(C,"modelViewMatrix",k.modelViewMatrix),ce.setValue(C,"normalMatrix",k.normalMatrix),ce.setValue(C,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){const Me=B.uniformsGroups;for(let Le=0,yn=Me.length;Le<yn;Le++){const Xo=Me[Le];Ot.update(Xo,Oe),Ot.bind(Xo,Oe)}}return Oe}function bh(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Eh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(b,U,V){const B=Dt.get(b);B.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Dt.get(b.texture).__webglTexture=U,Dt.get(b.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const V=Dt.get(b);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,V=0){et=b,q=U,O=V;let B=null,k=!1,vt=!1;if(b){const mt=Dt.get(b);if(mt.__useDefaultFramebuffer!==void 0){ot.bindFramebuffer(C.FRAMEBUFFER,mt.__webglFramebuffer),tt.copy(b.viewport),At.copy(b.scissor),kt=b.scissorTest,ot.viewport(tt),ot.scissor(At),ot.setScissorTest(kt),W=-1;return}else if(mt.__webglFramebuffer===void 0)Vt.setupRenderTarget(b);else if(mt.__hasExternalTextures)Vt.rebindTextures(b,Dt.get(b.texture).__webglTexture,Dt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Yt=b.depthTexture;if(mt.__boundDepthTexture!==Yt){if(Yt!==null&&Dt.has(Yt)&&(b.width!==Yt.image.width||b.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(b)}}const Et=b.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(vt=!0);const Ut=Dt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?B=Ut[U][V]:B=Ut[U],k=!0):b.samples>0&&Vt.useMultisampledRTT(b)===!1?B=Dt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ut)?B=Ut[V]:B=Ut,tt.copy(b.viewport),At.copy(b.scissor),kt=b.scissorTest}else tt.copy(Gt).multiplyScalar(xt).floor(),At.copy(Kt).multiplyScalar(xt).floor(),kt=Jt;if(V!==0&&(B=H),ot.bindFramebuffer(C.FRAMEBUFFER,B)&&ot.drawBuffers(b,B),ot.viewport(tt),ot.scissor(At),ot.setScissorTest(kt),k){const mt=Dt.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,V)}else if(vt){const mt=U;for(let Et=0;Et<b.textures.length;Et++){const Ut=Dt.get(b.textures[Et]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Et,Ut.__webglTexture,V,mt)}}else if(b!==null&&V!==0){const mt=Dt.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,mt.__webglTexture,V)}W=-1};function Wo(b){const U=Dt.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=ie.textureFormatReadable(b.format),U.__typeReadable=ie.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,V,B,k,vt,Pt,mt=0){if(!(b&&b.isWebGLRenderTarget)){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Dt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Et=Et[Pt],Array.isArray(Et)&&(Et=Et[0])),Et){ot.bindFramebuffer(C.FRAMEBUFFER,Et);try{const Ut=b.textures[mt],Yt=Ut.format,ae=Ut.type;b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+mt);const Lt=Wo(Ut);if(Lt.__formatReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-B&&V>=0&&V<=b.height-k&&C.readPixels(U,V,B,k,rt.convert(Yt),rt.convert(ae),vt)}finally{const Ut=et!==null?Dt.get(et).__webglFramebuffer:null;ot.bindFramebuffer(C.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(b,U,V,B,k,vt,Pt,mt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Dt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Et=Et[Pt],Array.isArray(Et)&&(Et=Et[0])),Et)if(U>=0&&U<=b.width-B&&V>=0&&V<=b.height-k){ot.bindFramebuffer(C.FRAMEBUFFER,Et);const Ut=b.textures[mt],Yt=Ut.format,ae=Ut.type;b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+mt);const Lt=Wo(Ut);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const oe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,oe),C.bufferData(C.PIXEL_PACK_BUFFER,vt.byteLength,C.STREAM_READ),C.readPixels(U,V,B,k,rt.convert(Yt),rt.convert(ae),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);const we=et!==null?Dt.get(et).__webglFramebuffer:null;ot.bindFramebuffer(C.FRAMEBUFFER,we);const xe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await au(C,xe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,oe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,vt),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(oe),C.deleteSync(xe),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,V=0){const B=Math.pow(2,-V),k=Math.floor(b.image.width*B),vt=Math.floor(b.image.height*B),Pt=U!==null?U.x:0,mt=U!==null?U.y:0;Vt.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,Pt,mt,k,vt),ot.unbindTexture()},this.copyTextureToTexture=function(b,U,V=null,B=null,k=0,vt=0){let Pt,mt,Et,Ut,Yt,ae,Lt,oe,we;const xe=b.isCompressedTexture?b.mipmaps[vt]:b.image;if(V!==null)Pt=V.max.x-V.min.x,mt=V.max.y-V.min.y,Et=V.isBox3?V.max.z-V.min.z:1,Ut=V.min.x,Yt=V.min.y,ae=V.isBox3?V.min.z:0;else{const ce=Math.pow(2,-k);Pt=Math.floor(xe.width*ce),mt=Math.floor(xe.height*ce),b.isDataArrayTexture?Et=xe.depth:b.isData3DTexture?Et=Math.floor(xe.depth*ce):Et=1,Ut=0,Yt=0,ae=0}B!==null?(Lt=B.x,oe=B.y,we=B.z):(Lt=0,oe=0,we=0);const ve=rt.convert(U.format),Fe=rt.convert(U.type);let It;U.isData3DTexture?(Vt.setTexture3D(U,0),It=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Vt.setTexture2DArray(U,0),It=C.TEXTURE_2D_ARRAY):(Vt.setTexture2D(U,0),It=C.TEXTURE_2D),ot.activeTexture(C.TEXTURE0),ot.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),ot.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ot.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Ve=ot.getParameter(C.UNPACK_ROW_LENGTH),ue=ot.getParameter(C.UNPACK_IMAGE_HEIGHT),Kn=ot.getParameter(C.UNPACK_SKIP_PIXELS),Oe=ot.getParameter(C.UNPACK_SKIP_ROWS),ys=ot.getParameter(C.UNPACK_SKIP_IMAGES);ot.pixelStorei(C.UNPACK_ROW_LENGTH,xe.width),ot.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xe.height),ot.pixelStorei(C.UNPACK_SKIP_PIXELS,Ut),ot.pixelStorei(C.UNPACK_SKIP_ROWS,Yt),ot.pixelStorei(C.UNPACK_SKIP_IMAGES,ae);const Un=b.isDataArrayTexture||b.isData3DTexture,Zn=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const ce=Dt.get(b),Ne=Dt.get(U),tn=Dt.get(ce.__renderTarget),Me=Dt.get(Ne.__renderTarget);ot.bindFramebuffer(C.READ_FRAMEBUFFER,tn.__webglFramebuffer),ot.bindFramebuffer(C.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Le=0;Le<Et;Le++)Un&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Dt.get(b).__webglTexture,k,ae+Le),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Dt.get(U).__webglTexture,vt,we+Le)),C.blitFramebuffer(Ut,Yt,Ut+Pt,Yt+mt,Lt,oe,Lt+Pt,oe+mt,C.DEPTH_BUFFER_BIT,C.NEAREST);ot.bindFramebuffer(C.READ_FRAMEBUFFER,null),ot.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||Dt.has(b)){const ce=Dt.get(b),Ne=Dt.get(U);ot.bindFramebuffer(C.READ_FRAMEBUFFER,L),ot.bindFramebuffer(C.DRAW_FRAMEBUFFER,G);for(let tn=0;tn<Et;tn++)Un?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ce.__webglTexture,k,ae+tn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ce.__webglTexture,k),Zn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ne.__webglTexture,vt,we+tn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ne.__webglTexture,vt),k!==0?C.blitFramebuffer(Ut,Yt,Ut+Pt,Yt+mt,Lt,oe,Lt+Pt,oe+mt,C.COLOR_BUFFER_BIT,C.NEAREST):Zn?C.copyTexSubImage3D(It,vt,Lt,oe,we+tn,Ut,Yt,Pt,mt):C.copyTexSubImage2D(It,vt,Lt,oe,Ut,Yt,Pt,mt);ot.bindFramebuffer(C.READ_FRAMEBUFFER,null),ot.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Zn?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(It,vt,Lt,oe,we,Pt,mt,Et,ve,Fe,xe.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(It,vt,Lt,oe,we,Pt,mt,Et,ve,xe.data):C.texSubImage3D(It,vt,Lt,oe,we,Pt,mt,Et,ve,Fe,xe):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,vt,Lt,oe,Pt,mt,ve,Fe,xe.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,vt,Lt,oe,xe.width,xe.height,ve,xe.data):C.texSubImage2D(C.TEXTURE_2D,vt,Lt,oe,Pt,mt,ve,Fe,xe);ot.pixelStorei(C.UNPACK_ROW_LENGTH,Ve),ot.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ue),ot.pixelStorei(C.UNPACK_SKIP_PIXELS,Kn),ot.pixelStorei(C.UNPACK_SKIP_ROWS,Oe),ot.pixelStorei(C.UNPACK_SKIP_IMAGES,ys),vt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&C.generateMipmap(It),ot.unbindTexture()},this.initRenderTarget=function(b){Dt.get(b).__webglFramebuffer===void 0&&Vt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Vt.setTextureCube(b,0):b.isData3DTexture?Vt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Vt.setTexture2DArray(b,0):Vt.setTexture2D(b,0),ot.unbindTexture()},this.resetState=function(){q=0,O=0,et=null,ot.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}const Se={ember:{key:"ember",name:"Ember",glyph:"✦",color:"#ff7a3d",deep:"#8c2b0a",soft:"#ffc08a",palette:{primary:"#d94a1e",secondary:"#ffb347",accent:"#ff4d2e",belly:"#ffd9a0",dark:"#3a1008",glow:"#ff8a3d",eye:"#ffe6b0"},nouns:["Drake","Lynx","Hound","Imp","Salamander","Wisp"],syllables:[["cin","pyr","scor","ash","ig","flar","vul","char","embr","cald"],["der","rax","oth","wing","maw","on","ix","ark","elle","oth"]],adjectives:["Cinder","Ashen","Blazing","Scorched","Pyre","Solar","Molten","Charred"]},verdant:{key:"verdant",name:"Verdant",glyph:"❧",color:"#46e08a",deep:"#0b5a3a",soft:"#a9ffc9",palette:{primary:"#2f9e63",secondary:"#a3e635",accent:"#22c55e",belly:"#d9f99d",dark:"#0c2a1a",glow:"#7cffa0",eye:"#eaffd0"},nouns:["Sprig","Stag","Bloom","Mantis","Tortoise","Wisp"],syllables:[["ver","mos","thorn","syl","bram","fern","blos","sprig","lich","cora"],["ant","oth","ling","orn","ix","ara","um","wyn","elle","ad"]],adjectives:["Verdant","Thorned","Blooming","Mossy","Sylvan","Bramble","Feral","Dewy"]},tide:{key:"tide",name:"Tide",glyph:"≈",color:"#38bdf8",deep:"#0b3d70",soft:"#a5f3fc",palette:{primary:"#1f7fc4",secondary:"#67e8f9",accent:"#22d3ee",belly:"#cffafe",dark:"#071d33",glow:"#67e8f9",eye:"#e0fbff"},nouns:["Ray","Eel","Otter","Serpent","Crab","Wisp"],syllables:[["ti","abys","rip","brine","coral","pelag","aqu","mar","flu","naut"],["tide","thal","ix","ora","us","een","ash","urn","essa","on"]],adjectives:["Tidal","Abyssal","Riptide","Brine","Coral","Pelagic","Frost","Deep"]},volt:{key:"volt",name:"Volt",glyph:"⚡",color:"#facc15",deep:"#7a4d06",soft:"#fef08a",palette:{primary:"#d4a90a",secondary:"#fb923c",accent:"#fde047",belly:"#fff3b0",dark:"#2b1d06",glow:"#ffe94a",eye:"#fff8c4"},nouns:["Hare","Jackal","Moth","Raptor","Ferret","Wisp"],syllables:[["vol","arc","stat","galv","zap","thun","spar","jolt","volt","elec"],["tix","ara","jak","orn","us","ine","oth","ux","elle","amp"]],adjectives:["Voltaic","Charged","Static","Galvanic","Storm","Arc","Crackling","Live"]},lumen:{key:"lumen",name:"Lumen",glyph:"✧",color:"#ffe08a",deep:"#7a5a12",soft:"#fff7d6",palette:{primary:"#e8c35a",secondary:"#fef3c7",accent:"#f59e0b",belly:"#fffbeb",dark:"#2b220a",glow:"#fff1a8",eye:"#ffffff"},nouns:["Moth","Hart","Seraph","Fox","Dove","Wisp"],syllables:[["lu","sol","aur","pris","halo","dawn","gild","sera","lumi","astra"],["men","iel","ora","ix","ael","une","is","ara","elle","on"]],adjectives:["Radiant","Gilded","Dawn","Prism","Halo","Solar","Aurora","Lucent"]},umbra:{key:"umbra",name:"Umbra",glyph:"◈",color:"#a78bfa",deep:"#3b1d70",soft:"#ddd6fe",palette:{primary:"#5b3a9e",secondary:"#a78bfa",accent:"#8b5cf6",belly:"#c4b5fd",dark:"#120a26",glow:"#b794ff",eye:"#e9d5ff"},nouns:["Shade","Cat","Raven","Serpent","Wolf","Wisp"],syllables:[["um","noct","dusk","phan","neth","vail","mor","shad","ecl","gloam"],["bra","oth","ix","urn","essa","on","weave","mire","elle","ux"]],adjectives:["Umbral","Hollow","Dusk","Phantom","Nether","Veiled","Midnight","Eclipsed"]}},ns=["ember","verdant","tide","volt","lumen","umbra"],yr=["ember","tide","verdant","volt","umbra","lumen"];function Co(i,t){const e=ns.indexOf(i),n=ns.indexOf(t);return e<0||n<0?1:(e+1)%6===n?1.6:(n+1)%6===e?.625:1}function Eg(i){const t=ns.indexOf(i);return{strong:ns[(t+1)%6],weak:ns[(t+5)%6]}}const nc={physical:{key:"physical",label:"Physical",icon:"⚔",color:"#ff9a62",blurb:"Claws, fangs and momentum. Scales with Attack and Defense."},special:{key:"special",label:"Special",icon:"✹",color:"#b98cff",blurb:"Elemental force. Scales with Spirit and Ward."},status:{key:"status",label:"Status",icon:"◉",color:"#56e0c0",blurb:"Buffs, barriers and afflictions. No direct damage."}},ei=["physical","special","status"],Di={burn:{name:"Burn",icon:"🔥",color:"#ff7a3d",desc:"Loses 1/16 max HP each round. Physical damage is halved."},poison:{name:"Poison",icon:"☠",color:"#b58cff",desc:"Loses 1/10 max HP each round."},chill:{name:"Chill",icon:"❄",color:"#7dd3fc",desc:"Speed is halved. 20% chance to lose the action."},regen:{name:"Regen",icon:"✚",color:"#6ee7a8",desc:"Restores 1/8 max HP each round."}},ic={ember:{type:"ember",names:[["Cinder","Vault"],["Molten","Reliquary"],["Ashen","Colosseum"],["Pyre","Sanctum"]],bg:"#150806",fog:"#2a0d08",stone:"#2c1a16",stoneDark:"#1a0d0b",accent:"#ff7a3d",glow:"#ffb15c",secondary:"#ffcf9a",sky:"#1a0805",light:"#ffc38a",lightIntensity:2.4},verdant:{type:"verdant",names:[["Verdant","Reliquary"],["Moss","Arena"],["Thorn","Colosseum"],["Sylvan","Vault"]],bg:"#04120c",fog:"#0a2418",stone:"#16261e",stoneDark:"#0b1712",accent:"#46e08a",glow:"#9bffbe",secondary:"#d6ff8a",sky:"#03140c",light:"#c8ffd9",lightIntensity:2.2},tide:{type:"tide",names:[["Abyssal","Sanctum"],["Tidal","Vault"],["Brine","Colosseum"],["Coral","Reliquary"]],bg:"#030c17",fog:"#071d33",stone:"#122232",stoneDark:"#091420",accent:"#38bdf8",glow:"#7dd3fc",secondary:"#a5f3fc",sky:"#020b16",light:"#bae6fd",lightIntensity:2.3},volt:{type:"volt",names:[["Voltaic","Spire"],["Storm","Arena"],["Arc","Sanctum"],["Static","Colosseum"]],bg:"#100d03",fog:"#241d06",stone:"#2a2414",stoneDark:"#171306",accent:"#facc15",glow:"#fde047",secondary:"#fb923c",sky:"#120e03",light:"#fff3a8",lightIntensity:2.5},lumen:{type:"lumen",names:[["Aurora","Basilica"],["Gilded","Arena"],["Prism","Sanctum"],["Dawn","Reliquary"]],bg:"#0d0914",fog:"#241a33",stone:"#2a2133",stoneDark:"#171120",accent:"#ffe08a",glow:"#fff1a8",secondary:"#c084fc",sky:"#100a18",light:"#fff4cf",lightIntensity:2.6},umbra:{type:"umbra",names:[["Umbral","Crypt"],["Eclipsed","Colosseum"],["Nether","Vault"],["Veiled","Sanctum"]],bg:"#070412",fog:"#140c2a",stone:"#1c1530",stoneDark:"#100a1e",accent:"#a78bfa",glow:"#c4b5fd",secondary:"#7c3aed",sky:"#06030f",light:"#d8c8ff",lightIntensity:2.2}},Tg=["Forgotten","Shattered","Radiant","Whispering","Eternal","Hollow","Gilded","Stormwrought"],so={striker:{label:"Striker",hp:.82,atk:1.28,def:.9,spa:.72,spd:.86,spe:1.12},caster:{label:"Caster",hp:.82,atk:.7,def:.85,spa:1.32,spd:1.12,spe:.95},guardian:{label:"Guardian",hp:1.32,atk:.95,def:1.28,spa:.86,spd:1.2,spe:.62},trickster:{label:"Trickster",hp:.9,atk:.92,def:.8,spa:.96,spd:.92,spe:1.35},balanced:{label:"Balanced",hp:1,atk:1,def:1,spa:1,spd:1,spe:1}},wg=[{key:"typeDamage",name:"Elemental Affinity",desc:"+20% damage with {type} moves.",weight:3},{key:"heal",name:"Rift Bloom",desc:"Restores 6% max HP at the end of each round.",weight:2},{key:"reduce",name:"Stonehide",desc:"Takes 12% less damage from all attacks.",weight:2},{key:"crit",name:"Keen Edge",desc:"+10% critical hit chance.",weight:2},{key:"speed",name:"Swiftfoot",desc:"+15% Speed.",weight:2},{key:"barrierStart",name:"Aegis Core",desc:"Enters battle with a barrier worth 18% max HP.",weight:2},{key:"statusCure",name:"Purity",desc:"30% chance to cure its status at the end of each round.",weight:1},{key:"lowHpDamage",name:"Predator",desc:"+25% damage against targets below half HP.",weight:2},{key:"boostSpeed",name:"Momentum",desc:"Stat-raising moves also raise Speed by 1 stage.",weight:1},{key:"lifesteal",name:"Siphon",desc:"Heals for 15% of damage dealt.",weight:1}];function sc(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function Ag(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class hi{constructor(t){this.seed=t,this.next=typeof t=="function"?t:Ag(sc(String(t)))}float(t=0,e=1){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.float(t,e+1))}chance(t){return this.next()<t}pick(t){return t[Math.floor(this.next()*t.length)]}picks(t,e){const n=t.slice(),s=[];for(;n.length&&s.length<e;)s.push(n.splice(Math.floor(this.next()*n.length),1)[0]);return s}weighted(t){const e=t.reduce((s,r)=>s+r[1],0);let n=this.next()*e;for(const[s,r]of t)if(n-=r,n<=0)return s;return t[t.length-1][0]}shuffle(t){const e=t.slice();for(let n=e.length-1;n>0;n--){const s=Math.floor(this.next()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}child(t){return new hi(sc(String(this.seed)+"::"+t+"::"+Math.floor(this.next()*1e9)))}}function Ks(){const i="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let t="";for(let e=0;e<6;e++)t+=i[Math.floor(Math.random()*i.length)];return t}const Rg={ember:[["quadruped",4],["biped",3],["serpent",1]],verdant:[["quadruped",4],["insect",2],["biped",2]],tide:[["serpent",4],["floater",2],["quadruped",2]],volt:[["biped",4],["insect",3],["quadruped",1]],lumen:[["floater",4],["serpent",2],["quadruped",1]],umbra:[["floater",3],["biped",3],["serpent",2]]},Cg={ember:"Cinderheart",verdant:"Photosynth",tide:"Tidecaller",volt:"Overcharge",lumen:"Radiant Core",umbra:"Voidtouch"},rc={ember:"burn",verdant:"poison",tide:"chill",volt:"chill",lumen:"burn",umbra:"poison"},Pg={physical:{ember:["Fang","Claw","Lash","Strike","Rush","Rend"],verdant:["Vine","Thorn","Ram","Slash","Lash","Gore"],tide:["Jet","Crash","Fang","Tail","Slam","Riptide"],volt:["Jolt","Kick","Bolt","Rush","Slam","Spark"],lumen:["Gore","Lance","Wing","Slash","Dive","Glimmer"],umbra:["Grasp","Fang","Rend","Shade","Claw","Lunge"]},special:{ember:["Burst","Storm","Nova","Wave","Bloom","Flare"],verdant:["Pulse","Bloom","Storm","Spore","Beam","Surge"],tide:["Surge","Beam","Tide","Torrent","Wave","Geyser"],volt:["Bolt","Arc","Storm","Discharge","Cascade","Spark"],lumen:["Beam","Flare","Hymn","Lance","Nova","Prism"],umbra:["Rift","Echo","Hex","Veil","Pulse","Grasp"]},status:{ember:["Aegis","Chant","Ember","Focus","Ward","Hymn"],verdant:["Aegis","Bloom","Chant","Root","Ward","Spore"],tide:["Aegis","Veil","Chant","Focus","Ward","Tide"],volt:["Aegis","Charge","Focus","Field","Ward","Arc"],lumen:["Aegis","Hymn","Blessing","Focus","Ward","Halo"],umbra:["Veil","Hex","Trance","Ward","Chant","Aegis"]}};function or(i,t,e){return Math.max(t,Math.min(e,i))}function Lg(i){return i.charAt(0).toUpperCase()+i.slice(1)}function Ig(i,t=50){const n={maxHp:Math.floor((2*i.hp+31)*t/100+t+10)};for(const s of["atk","def","spa","spd","spe"])n[s]=Math.floor((2*i[s]+31)*t/100+5);return n}function Dg(i,t){const e=i.weighted(wg.map(s=>[s,s.weight])),n=e.key==="typeDamage"?Cg[t]:e.name;return{...e,name:n,desc:e.desc.replace("{type}",Se[t].name)}}function Ng(i,t,e,n,s){const r=i.chance(.72)?t:i.pick(yr.filter(p=>p!==t)),o=Se[r].adjectives,l=Pg[e][r];let c="";for(let p=0;p<24;p++){const g=i.pick(o),v=i.pick(l);if(c=i.chance(.35)?`${g}${v.toLowerCase()}`:`${g} ${v}`,!s.has(c))break}s.has(c)&&(c=`${c} ${["I","II","III"][n]||""}`.trim()),s.add(c);const h=t===r?1.08:1;if(e==="status"){const p=[],g=rc[r],v=i.weighted([["buff",30],["inflict",20],["barrier",15],["heal",15],["debuff",15],["cleanse",5]]),E=new Set,S=()=>{const _=i.pick(["atk","spa","def","spd","spe"].filter(y=>!E.has(y)));_&&(E.add(_),p.push({kind:"buff",target:"self",stat:_,stages:i.chance(.24)?2:1}))},A=()=>{const _=i.pick(["atk","spa","def","spd","spe"].filter(y=>!E.has(y)));_&&(E.add(_),p.push({kind:"debuff",target:"foe",stat:_,stages:i.chance(.2)?2:1}))},T=()=>p.push({kind:"status",target:"foe",status:g,chance:i.chance(.4)?1:i.float(.72,.92)});if(v==="buff"?S():v==="debuff"?A():v==="inflict"?T():v==="heal"?p.push({kind:"heal",target:"self",amount:i.float(.26,.42)}):v==="barrier"?p.push({kind:"barrier",target:"self",amount:i.float(.2,.34)}):p.push({kind:"cleanse",target:"self"}),i.chance(.46)){const _=i.pick(["buff","debuff","inflict","cleanse"]);_==="buff"?S():_==="debuff"?A():_==="inflict"&&!p.some(y=>y.kind==="status")?T():_==="cleanse"&&!p.some(y=>y.kind==="cleanse")&&p.push({kind:"cleanse",target:"self"})}return{name:c,group:e,type:r,power:0,accuracy:p.some(_=>_.kind==="status")&&i.chance(.35)?90:100,maxPp:i.int(9,15),pp:0,priority:p.some(_=>_.kind==="heal"||_.kind==="barrier")?1:0,effects:p,desc:ac(p),flavor:"Status",id:`${e}-${n}-${r}`}}let u=48+i.float(0,56);const f=so[t]||so.balanced;e==="physical"?u*=.9+f.atk*.12:u*=.9+f.spa*.12,u=Math.round(or(u*h,42,124));const d=Math.round(or(100-Math.max(0,u-55)*.32+i.float(-4,4),78,100)),m=Math.round(or(14-(u-45)/12+i.int(-1,1),5,16)),x=[];return i.chance(.34)&&(i.chance(.55)?x.push({kind:"debuff",target:"foe",chance:.28,stat:i.pick(["def","spd","spe","atk","spa"]),stages:1}):x.push({kind:"status",target:"foe",status:rc[r],chance:.18})),{name:c,group:e,type:r,power:u,accuracy:d,maxPp:m,pp:0,priority:0,effects:x,desc:x.length?`A ${Se[r].name.toLowerCase()} ${e} attack. ${ac(x,!0)}`:`A ${Se[r].name.toLowerCase()} ${e} attack with no extra effect.`,flavor:e==="physical"?"Contact":"Ranged",id:`${e}-${n}-${r}`}}function ac(i,t=!1){const e=r=>({atk:"Attack",def:"Defense",spa:"Spirit",spd:"Ward",spe:"Speed"})[r];let s=i.map(r=>{const a=t||r.chance!==void 0&&r.chance<1?"May ":"";return r.kind==="buff"?`${a}raise the user's ${e(r.stat)} by ${r.stages} stage${r.stages>1?"s":""}`:r.kind==="debuff"?`${a}lower the target's ${e(r.stat)} by ${r.stages} stage${r.stages>1?"s":""}`:r.kind==="heal"?`restore ${Math.round(r.amount*100)}% of the user's max HP`:r.kind==="barrier"?`grant a barrier absorbing ${Math.round(r.amount*100)}% max HP`:r.kind==="status"?`${a}${Di[r.status].name.toLowerCase()} the target`:r.kind==="cleanse"?"cure the user's status":""}).filter(Boolean).join(" and ");return s.charAt(0).toUpperCase()+s.slice(1)+"."}function gh(i,t,e,n,s,r={}){const a=Se[t],o=i.weighted([["striker",22],["caster",22],["guardian",20],["trickster",18],["balanced",18]]),l=so[o],c=i.weighted(Rg[t]),h=r.level??50;let u="";for(let E=0;E<30;E++){const[S,A]=a.syllables;if(u=Lg(i.pick(S))+i.pick(A),!e.has(u))break}e.has(u)&&(u=u+["a","or","ix","en"][s%4]),e.add(u);const f={};for(const E of["hp","atk","def","spa","spd","spe"]){const S=E==="hp"?62+i.float(0,52):54+i.float(0,68);f[E]=Math.round(or(S*l[E]*i.float(.95,1.08),38,156))}const d=Ig(f,h),m=Dg(i,t);m.key==="speed"&&(d.spe=Math.round(d.spe*1.15)),m.key==="barrierStart"&&(d.startBarrier=Math.round(d.maxHp*.18));const x=i.weighted([["physical",44],["special",44],["status",12]]),p=[...ei,x],g=new Set,v=p.map((E,S)=>{const A=Ng(i,t,E,S,g);return A.pp=A.maxPp,A});return{id:`${n}-${s}-${i.int(1e3,9999)}`,side:n,index:s,name:u,species:`${i.pick(a.adjectives)} ${i.pick(a.nouns)}`,type:t,archetype:o,archetypeLabel:l.label,body:c,level:h,stats:d,base:f,hp:d.maxHp,maxHp:d.maxHp,ability:m,moves:v,status:null,barrier:d.startBarrier||0,stages:{atk:0,def:0,spa:0,spd:0,spe:0},fainted:!1,scale:i.float(.88,1.12),seed:i.int(1,999999),colors:a.palette}}function oc(i,t,e=3,n={}){const s=i.shuffle(yr).slice(0,e),r=new Set;return s.map((a,o)=>gh(i,a,r,t,o,{level:n.levels?.[o]??n.level??50}))}function Ug(i){const t=i.pick(Object.keys(ic)),e=ic[t],[n,s]=i.pick(e.names),a=i.chance(.35)?`${i.pick(Tg)} ${s}`:`${n} ${s}`;return{key:t,theme:e,name:a,seed:i.int(1,999999),pillarCount:i.pick([6,8,8,10]),crystalCount:i.int(8,14),bannerCount:i.pick([3,4,4,5]),ringCount:i.int(3,5),motes:i.int(90,160),fogDensity:i.float(.015,.024),rotation:i.float(0,Math.PI*2)}}function Fg(i){const t=i.pick(["Veyra","Orin","Sable","Kael","Nyx","Aurel","Morrow","Thane","Iri","Voss"]),e=["Rift Warden","Arena Sovereign","Keeper of the Gate","Champion of the Rift","The Unbroken"];return{name:`Warden ${t}`,title:i.pick(e)}}function lc(i){const t=new hi(i),e=Ug(t.child("room")),n=oc(t.child("player"),"player",3,{levels:[50,50,50]}),s=oc(t.child("enemy"),"enemy",3,{levels:[42,46,50]}),r=Fg(t.child("warden"));return{seed:i,room:e,playerTeam:n,enemyTeam:s,warden:r,createdAt:Date.now()}}function Og(i){const t=new hi(i+":showcase"),e=t.pick(yr),n=gh(t,e,new Set,"showcase",0);return n.scale=1.22,n}function cc(i){for(const t of i){t.hp=t.maxHp,t.maxHp=t.stats.maxHp,t.status=null,t.barrier=t.stats.startBarrier||0,t.stages={atk:0,def:0,spa:0,spd:0,spe:0},t.fainted=!1;for(const e of t.moves)e.pp=e.maxPp}}const Mt={sphere:new $n(1,14,10),sphereLow:new $n(1,10,8),cone:new Pi(1,1,7),cone4:new Pi(1,1,4),cyl:new Je(1,1,1,8),cylTaper:new Je(.6,1,1,7),capsule:new yo(1,1.4,3,8),octa:new ds(1,0),box:new gn(1,1,1),torus:new An(1,.1,6,24),circle:new ni(1,24),plane:new ci(1,1)};function Bg(){const i=new _r;return i.moveTo(0,0),i.quadraticCurveTo(.55,.5,1.25,.34),i.quadraticCurveTo(.92,.02,1.02,-.36),i.quadraticCurveTo(.48,-.2,0,-.1),i.lineTo(0,0),new wo(i)}function zg(){const i=new _r;return i.moveTo(.05,.5),i.lineTo(-.16,.08),i.lineTo(.02,.08),i.lineTo(-.08,-.5),i.lineTo(.2,-.04),i.lineTo(.02,-.04),i.lineTo(.05,.5),new To(i,{depth:.05,bevelEnabled:!1})}Mt.wing=Bg();Mt.bolt=zg();let Zs=null;function kg(){if(Zs)return Zs;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,2,64,64,62);return e.addColorStop(0,"rgba(0,0,0,0.62)"),e.addColorStop(.55,"rgba(0,0,0,0.25)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Zs=new zi(i),Zs}function dn(i,t={}){const e=new Rn({color:i,roughness:t.roughness??.62,metalness:t.metalness??.06,flatShading:t.flatShading??!0,side:t.side??Xn,transparent:!1,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??0});return e.userData.baseEmissive=new te(t.emissive??0),e.userData.baseIntensity=t.emissiveIntensity??0,e}function bt(i,t,e,n,s=[0,0,0],r=[1,1,1],a=[0,0,0]){const o=new ne(t,e);return o.position.set(s[0],s[1],s[2]),o.scale.set(r[0],r[1],r[2]),o.rotation.set(a[0],a[1],a[2]),o.castShadow=!1,o.receiveShadow=!1,n.add(o),o}function Gg(i){return{primary:dn(i.primary),secondary:dn(i.secondary),accent:dn(i.accent,{emissive:i.accent,emissiveIntensity:.22,roughness:.4}),belly:dn(i.belly,{roughness:.8}),dark:dn(i.dark,{roughness:.75}),glow:dn(i.glow,{emissive:i.glow,emissiveIntensity:1.1,roughness:.3}),eyeWhite:dn("#fffaf0",{flatShading:!1,roughness:.35}),pupil:dn("#0a0710",{flatShading:!1,roughness:.3}),wing:dn(i.secondary,{side:Xe,roughness:.7}),wingAccent:dn(i.accent,{side:Xe,emissive:i.accent,emissiveIntensity:.18})}}function _s(i,t,e=.42,n={}){const{mats:s,type:r}=i,a=e*.78,o=e*.42,l=r==="umbra"||r==="volt";for(const c of[-1,1]){const h=bt(i,Mt.sphere,l?s.glow:s.eyeWhite,t,[c*o,e*.14,a],[.105,.125,.08]),u=bt(i,Mt.sphere,l?s.dark:s.pupil,t,[c*o,e*.14,a+.055],[.052,.075,.035]);l||bt(i,Mt.sphere,s.eyeWhite,t,[c*o+.018,e*.19,a+.082],[.018,.022,.012]),i.parts.eyes.push(h,u)}if(n.brow)for(const c of[-1,1])bt(i,Mt.box,s.dark,t,[c*o,e*.35,a+.015],[.16,.035,.05],[0,0,c*-.25])}function vs(i,t,e,n={}){const{mats:s}=i,r=bt(i,Mt.sphere,s.secondary,t,[0,-e*.18,e*.82],[e*.55,e*.38,e*.5]);if(bt(i,Mt.sphere,s.dark,t,[0,-e*.3,e*1.02],[e*.3,e*.12,e*.12]),n.fangs)for(const a of[-1,1])bt(i,Mt.cone,s.eyeWhite,t,[a*e*.2,-e*.4,e*1],[e*.05,e*.16,e*.05],[Math.PI,0,0]);return n.nose&&bt(i,Mt.sphere,s.dark,t,[0,-e*.06,e*1.16],[e*.12,e*.08,e*.08]),r}function Sr(i,t,e,n){const{mats:s}=i;for(const r of[-1,1])if(n==="antler"){const a=new ge;a.position.set(r*e*.38,e*.55,-e*.08),a.rotation.z=r*-.5,a.rotation.x=-.2,t.add(a),bt(i,Mt.cylTaper,s.secondary,a,[0,.18,0],[.035,.35,.035]),bt(i,Mt.cylTaper,s.secondary,a,[r*.09,.38,.02],[.028,.22,.028],[0,0,r*-.5]),bt(i,Mt.cylTaper,s.secondary,a,[r*-.03,.42,-.06],[.024,.18,.024],[.35,0,r*.2])}else n==="fin"?bt(i,Mt.cone4,s.accent,t,[r*e*.55,e*.25,-e*.15],[e*.22,e*.55,e*.06],[.2,0,r*-.8]):n==="crystal"?bt(i,Mt.octa,s.accent,t,[r*e*.38,e*.55,-e*.05],[e*.14,e*.3,e*.14],[0,0,r*.2]):n==="ear"?(bt(i,Mt.cone,s.primary,t,[r*e*.42,e*.52,-e*.02],[e*.2,e*.4,e*.12],[.1,0,r*-.3]),bt(i,Mt.cone,s.belly,t,[r*e*.42,e*.5,e*.03],[e*.1,e*.25,e*.06],[.1,0,r*-.3])):bt(i,Mt.cone,s.secondary,t,[r*e*.34,e*.58,-e*.08],[e*.13,e*.5,e*.13],[-.25,0,r*-.32])}function xs(i,t,e){const{mats:n,type:s}=i;if(s==="lumen")bt(i,Mt.torus,n.glow,t,[0,e*.72,0],[e*.62,e*.62,e*.5],[Math.PI/2,0,0]),bt(i,Mt.octa,n.accent,t,[0,e*.1,e*.72],[e*.14,e*.24,e*.12],[.2,0,0]);else if(s==="umbra"){bt(i,Mt.cone,n.secondary,t,[0,e*.52,-e*.12],[e*.38,e*.7,e*.28],[-.5,0,0]);for(let r=0;r<2;r++)bt(i,Mt.sphere,n.glow,t,[(r?1:-1)*e*.8,e*.15,-e*.1],[.045,.045,.045])}else if(s==="tide")bt(i,Mt.cone4,n.accent,t,[0,e*.62,-e*.05],[e*.1,e*.52,e*.34],[.1,0,0]);else if(s==="verdant")for(let r=0;r<3;r++){const a=(r-1)*.55;bt(i,Mt.octa,n.secondary,t,[Math.sin(a)*e*.45,e*.58,Math.cos(a)*e*.1-e*.1],[e*.18,e*.34,e*.08],[.25,0,-a*.6])}else s==="volt"?bt(i,Mt.bolt,n.glow,t,[0,e*.56,-e*.08],[e*.65,e*.65,e*.65],[0,0,.25]):bt(i,Mt.cone,n.accent,t,[0,e*.62,-e*.12],[e*.16,e*.42,e*.16],[-.2,0,0])}function br(i,t,e){const{mats:n,rng:s,colors:r}=i,a=s.int(2,5);for(let o=0;o<a;o++){const l=s.chance(.5)?1:-1,c=s.float(-e.y*.45,e.y*.55),h=s.float(-e.z*.7,e.z*.35),u=l*e.x*(.7+s.float(0,.2));bt(i,Mt.sphere,o%3===0?n.belly:n.accent,t,[u,c,h],[e.x*.18,e.y*.14,e.z*.12])}}function Po(i,t,e={}){const{mats:n,type:s}=i,r=new ge;r.position.copy(t),i.body.add(r),i.parts.tails.push(r);const a=e.segments??4;let o=r;for(let l=0;l<a;l++){const c=new ge;c.position.set(0,l===0?0:-.02,l===0?0:-.24),c.rotation.x=e.droop??.1,o.add(c);const h=(1-l/(a+1))*(e.width??.16);bt(i,Mt.sphere,l%2?n.secondary:n.primary,c,[0,0,-.12],[h,h*.9,.2]),o=c}return s==="ember"?bt(i,Mt.cone,n.glow,o,[0,.03,-.3],[.14,.34,.14],[-Math.PI/2,0,0]):s==="tide"?bt(i,Mt.cone4,n.accent,o,[0,.03,-.28],[.22,.5,.05],[-Math.PI/2,0,0]):s==="verdant"?bt(i,Mt.octa,n.secondary,o,[0,.02,-.3],[.18,.3,.1],[.4,0,0]):s==="volt"?bt(i,Mt.bolt,n.glow,o,[0,.04,-.3],[.5,.5,.5],[0,0,.3]):(s==="umbra"||s==="lumen")&&bt(i,Mt.sphere,n.glow,o,[0,.02,-.3],[.09,.09,.09]),r}function Er(i,t,e,n=1){const{mats:s,type:r}=i;for(const a of[-1,1]){const o=new ge;o.position.set(a*.25,t,e),o.rotation.y=a*-.75,o.rotation.z=a*.15,i.body.add(o);const l=bt(i,Mt.wing,s.wing,o,[0,0,0],[n*a,n,1]),c=bt(i,Mt.wing,s.wingAccent,o,[.02*a,-.02,.02],[n*a*.72,n*.72,1]);i.parts.wings.push({group:o,baseZ:o.rotation.z,side:a,mesh:l,mesh2:c})}}function Hg(i){const{body:t,mats:e,rng:n}=i,s=n.float(.48,.58),r=n.float(.62,.76),a=n.float(.38,.46);bt(i,Mt.sphere,e.primary,t,[0,1.18,0],[s,r,a]),bt(i,Mt.sphere,e.belly,t,[0,1.08,a*.72],[s*.6,r*.72,a*.32]),br(i,t,{x:s,y:r,z:a});const o=1.18+r*.92,l=new ge;l.position.set(0,o,a*.2),t.add(l),i.parts.head=l;const c=n.float(.38,.45);bt(i,Mt.sphere,e.primary,l,[0,0,0],[c,c*.94,c*.9]),bt(i,Mt.sphere,e.secondary,l,[0,-c*.32,c*.32],[c*.58,c*.36,c*.46]),_s(i,l,c,{brow:!0}),vs(i,l,c,{fangs:i.type==="ember"||i.type==="umbra",nose:!0}),Sr(i,l,c,i.type==="verdant"||i.type==="lumen"?"antler":i.type==="tide"?"fin":"ear"),xs(i,l,c),i.headR=c;for(const h of[-1,1]){const u=new ge;u.position.set(h*(s*.94),1.42,a*.1),u.rotation.z=h*.28,t.add(u),bt(i,Mt.capsule,e.secondary,u,[0,-.24,0],[.095,.15,.095]),bt(i,Mt.sphere,e.primary,u,[0,-.46,.02],[.13,.12,.13]),i.parts.arms.push({group:u,baseZ:u.rotation.z,side:h})}for(const h of[-1,1]){const u=new ge;u.position.set(h*s*.48,.64,0),t.add(u),bt(i,Mt.capsule,e.secondary,u,[0,-.22,0],[.13,.18,.13]),bt(i,Mt.sphere,e.primary,u,[0,-.5,.1],[.18,.11,.27]),i.parts.legs.push({group:u,side:h})}return Po(i,new I(0,.95,-a*.9),{segments:4,width:.15,droop:.1}),(i.type==="lumen"||i.type==="umbra"||i.type==="volt"&&n.chance(.5))&&Er(i,1.48,-a*.6,.95),{height:o+c}}function Vg(i){const{body:t,mats:e,rng:n}=i,s=n.float(.5,.62),r=n.float(.46,.56),a=n.float(.9,1.08);bt(i,Mt.sphere,e.primary,t,[0,1.02,0],[s,r,a]),bt(i,Mt.sphere,e.belly,t,[0,.86,.05],[s*.72,r*.55,a*.72]),br(i,t,{x:s,y:r,z:a});const o=new ge;o.position.set(0,1.28,a*.78),t.add(o),i.parts.head=o;const l=n.float(.36,.44);bt(i,Mt.sphere,e.primary,o,[0,0,0],[l,l*.92,l*.88]),_s(i,o,l,{brow:!0}),vs(i,o,l,{fangs:i.type==="ember"||i.type==="umbra",nose:!0}),Sr(i,o,l,i.type==="verdant"||i.type==="lumen"?"antler":i.type==="tide"?"fin":"ear"),xs(i,o,l),i.headR=l;for(const h of[-1,1])for(const u of[.48,-.48]){const f=new ge;f.position.set(h*s*.62,.62,u*a),t.add(f),bt(i,Mt.capsule,e.secondary,f,[0,-.22,0],[.105,.16,.105]),bt(i,Mt.sphere,e.primary,f,[0,-.5,.06],[.14,.09,.2]),i.parts.legs.push({group:f,side:h})}const c=n.int(2,4);for(let h=0;h<c;h++){const u=a*.4-h*(a*.3);i.type==="verdant"?bt(i,Mt.octa,e.secondary,t,[0,1.45,u],[.12,.3,.08],[.2,0,0]):i.type==="tide"?bt(i,Mt.cone4,e.accent,t,[0,1.46,u],[.05,.32,.26],[.15,0,0]):bt(i,Mt.cone,e.secondary,t,[0,1.42,u],[.1,.28,.1],[-.15,0,0])}return Po(i,new I(0,1.05,-a*.9),{segments:4,width:.16,droop:.15}),(i.type==="lumen"||i.type==="umbra"||i.type==="verdant")&&Er(i,1.36,-a*.3,.75),{height:1.7}}function Wg(i){const{body:t,mats:e,rng:n}=i,s=new ge;t.add(s),i.parts.serpent=s;const r=n.int(6,8);let a=s;for(let c=0;c<r;c++){const h=new ge;h.position.set(0,c===0?.34:.28,c===0?0:.05),h.rotation.z=Math.sin(c*.9)*.16,h.rotation.x=c*.1,a.add(h);const u=c/r,f=.26+Math.sin(u*Math.PI)*.18;bt(i,Mt.sphere,c%2?e.secondary:e.primary,h,[Math.sin(c*1.1)*.12,0,0],[f,f*.92,f*.95]),a=h}const o=new ge;o.position.set(0,.32,.06),a.add(o),i.parts.head=o;const l=n.float(.34,.42);bt(i,Mt.sphere,e.primary,o,[0,0,0],[l,l*.92,l*.9]),bt(i,Mt.sphere,e.secondary,o,[0,-l*.24,l*.45],[l*.55,l*.32,l*.55]),_s(i,o,l,{brow:!1}),vs(i,o,l,{fangs:i.type==="umbra"||i.type==="tide",nose:!0}),Sr(i,o,l,i.type==="tide"?"fin":"crystal"),xs(i,o,l),i.headR=l;for(const c of[-1,1]){const h=bt(i,Mt.cone4,e.accent,o,[c*l*.72,l*.1,-l*.1],[l*.28,l*.55,l*.05],[0,0,c*-1.1]);i.parts.ears=i.parts.ears||[],i.parts.ears.push(h)}for(let c=0;c<3;c++)bt(i,Mt.octa,e.accent,t,[0,.4+c*.5,-.1-c*.06],[.06,.18,.06],[.2,0,0]);return{height:2.3}}function Xg(i){const{body:t,mats:e,rng:n}=i,s=n.float(.48,.58),r=1.25;bt(i,Mt.sphere,e.primary,t,[0,r,0],[s,s*.95,s]),bt(i,Mt.sphere,e.belly,t,[0,r-s*.2,s*.55],[s*.62,s*.55,s*.3]),br(i,t,{x:s,y:s,z:s});const a=new ge;a.position.set(0,r+s*.92,0),t.add(a),i.parts.head=a;const o=n.float(.36,.42);bt(i,Mt.sphere,e.primary,a,[0,0,0],[o,o*.95,o*.9]),_s(i,a,o,{brow:!1}),vs(i,a,o*.85,{fangs:i.type==="umbra",nose:!0}),xs(i,a,o),Sr(i,a,o,i.type==="lumen"?"crystal":"fin"),i.headR=o;for(const u of[-1,1]){const f=new ge;f.position.set(u*s*.9,r+s*.1,.05),t.add(f),bt(i,Mt.capsule,e.secondary,f,[0,-.18,0],[.08,.12,.08],[0,0,u*.5]),bt(i,Mt.sphere,e.accent,f,[u*.04,-.34,0],[.09,.09,.09]),i.parts.arms.push({group:f,baseZ:0,side:u})}const l=new ge;l.position.set(0,r-s*.8,-.05),t.add(l),i.parts.tails.push(l);for(let u=0;u<4;u++)bt(i,Mt.cone,u%2?e.secondary:e.primary,l,[Math.sin(u*1.2)*.1,-u*.24,-u*.03],[.17-u*.025,.26,.17-u*.025],[Math.PI,0,Math.sin(u)*.2]);(i.type==="umbra"||i.type==="lumen")&&Er(i,r+.2,-s*.55,.95);const c=new ge;c.position.set(0,r,0),t.add(c),i.parts.aura=c;const h=n.int(3,5);for(let u=0;u<h;u++){const f=u/h*Math.PI*2,d=bt(i,Mt.sphere,e.glow,c,[Math.cos(f)*(s+.4),Math.sin(f*2)*.4,Math.sin(f)*(s+.4)],[.05,.05,.05]);d.userData.orbit=f,d.userData.radius=s+.35+n.float(0,.2),d.userData.speed=n.float(.5,1.2)}return{height:r+s+.9,float:!0}}function qg(i){const{body:t,mats:e,rng:n}=i,s=1.12;bt(i,Mt.sphere,e.primary,t,[0,s,0],[.4,.42,.55]),bt(i,Mt.sphere,e.secondary,t,[0,s+.02,-.62],[.34,.3,.5]),bt(i,Mt.sphere,e.belly,t,[0,s-.24,.08],[.28,.2,.42]),br(i,t,{x:.4,y:.42,z:.55});const r=new ge;r.position.set(0,s+.38,.5),t.add(r),i.parts.head=r;const a=n.float(.3,.36);bt(i,Mt.sphere,e.primary,r,[0,0,0],[a,a,a*.92]),_s(i,r,a,{brow:!1}),vs(i,r,a*.9,{fangs:!0,nose:!0}),xs(i,r,a),i.headR=a;for(const o of[-1,1]){const l=new ge;l.position.set(o*a*.4,a*.6,0),l.rotation.z=o*-.4,r.add(l),bt(i,Mt.cylTaper,e.secondary,l,[0,.22,0],[.025,.45,.025]),bt(i,Mt.sphere,e.glow,l,[0,.48,0],[.06,.06,.06])}for(const o of[-1,1])for(let l=0;l<2;l++){const c=new ge;c.position.set(o*.3,s-.2,l===0?.2:-.18),c.rotation.z=o*.55,t.add(c),bt(i,Mt.capsule,e.secondary,c,[0,-.2,0],[.05,.15,.05]),bt(i,Mt.sphere,e.primary,c,[0,-.38,.04],[.07,.06,.12]),i.parts.legs.push({group:c,side:o})}return Er(i,s+.3,-.35,1.05),Po(i,new I(0,s-.05,-.9),{segments:3,width:.14,droop:.12}),{height:1.85,float:!0}}function $g(i,t){const{body:e,mats:n,type:s,rng:r}=i;if(s==="ember")bt(i,Mt.octa,n.glow,e,[0,t.height*.48,-.15],[.08,.16,.08]);else if(s==="verdant")for(let a=0;a<2;a++)bt(i,Mt.octa,n.secondary,e,[(a?1:-1)*.38,t.height*.52,-.2],[.14,.28,.07],[.3,0,(a?1:-1)*.6]);else if(s==="tide")for(let a=0;a<3;a++)bt(i,Mt.box,n.dark,e,[.22,t.height*.42+a*.09,.22],[.02,.015,.12]);else if(s==="volt")bt(i,Mt.bolt,n.glow,e,[-.36,t.height*.5,.1],[.45,.45,.45],[0,0,.3]);else if(s==="lumen")bt(i,Mt.torus,n.glow,e,[0,t.height*.3,-.1],[.36,.36,.3],[Math.PI/2,0,0]);else if(s==="umbra")for(let a=0;a<3;a++)bt(i,Mt.sphere,n.glow,e,[r.float(-.4,.4),t.height*r.float(.3,.6),-.2],[.035,.035,.035])}function aa(i){const t=new hi(i.seed+":"+i.id),e=Gg(i.colors),n=new ge;n.name=`creature-${i.name}`;const s=new ge;n.add(s);const r={rng:t,mats:e,body:s,type:i.type,parts:{arms:[],legs:[],tails:[],wings:[],eyes:[],aura:null}};let a;switch(i.body){case"quadruped":a=Vg(r);break;case"serpent":a=Wg(r);break;case"floater":a=Xg(r);break;case"insect":a=qg(r);break;default:a=Hg(r)}$g(r,a);const o=new an({map:kg(),transparent:!0,opacity:.75,depthWrite:!1}),l=new ne(Mt.circle,o);l.rotation.x=-Math.PI/2,l.position.y=.02,l.scale.setScalar(.95),n.add(l),n.scale.setScalar(i.scale||1);const c=r.parts,h=i.seed%100/12,u=a.float,f=u?.06:0,d=Object.values(e);function m(v,E){const S=Math.sin(v*1.7+h)*(u?.06:.035);s.position.y=f+S,s.rotation.z=Math.sin(v*1.05+h)*.018,c.head&&(c.head.rotation.y=Math.sin(v*.75+h)*.09,c.head.rotation.x=Math.sin(v*1.25+h*1.3)*.03);for(const y of c.tails)y.rotation.y=Math.sin(v*1.5+h)*.28,y.rotation.z=Math.sin(v*1.1+h*.7)*.08;for(const y of c.arms)y.group.rotation.x=Math.sin(v*1.5+h+y.side)*.12,y.group.rotation.z=y.baseZ+Math.sin(v*1.2+h)*.05;for(const y of c.legs)y.group.rotation.x=Math.sin(v*1.5+h+y.side*1.2)*.04;for(const y of c.wings)y.group.rotation.z=y.baseZ+Math.sin(v*2.3+h)*.16*y.side,y.group.rotation.y=y.side*-.75+Math.sin(v*1.7+h)*.08;if(c.serpent&&(c.serpent.rotation.y=Math.sin(v*.9+h)*.08,c.serpent.rotation.z=Math.sin(v*.7+h)*.03),c.aura){for(const y of c.aura.children){const D=y.userData.orbit+v*y.userData.speed,R=y.userData.radius;y.position.set(Math.cos(D)*R,Math.sin(D*2+h)*.35,Math.sin(D)*R)}c.aura.rotation.y=v*.35}const T=(v+h*2.7)%4.6>4.45?.12:1;for(const y of c.eyes)y.scale.y=(y.userData.baseScaleY??(y.userData.baseScaleY=y.scale.y))*T;const _=.92+Math.sin(v*2+h)*.18;for(const y of[e.accent,e.glow])y.emissiveIntensity=(y.userData.baseIntensity||.5)*_}function x(v){for(const E of d)E.transparent||(E.transparent=!0,E.depthWrite=v>.9),E.opacity=v}function p(v="#ffffff",E=.9){for(const S of d)S.emissive.set(v),S.emissiveIntensity=E;setTimeout(()=>{for(const S of d)S.emissive.copy(S.userData.baseEmissive),S.emissiveIntensity=S.userData.baseIntensity},130)}function g(){for(const v of d)v.dispose();o.dispose()}return{creature:i,root:n,body:s,parts:c,materials:d,height:a.height,float:!!u,update:m,setOpacity:x,flash:p,dispose:g}}function Yg(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Te;l.morphTargetsRelative=o;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0,d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[m].length!==i[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(u.morphAttributes[m]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let m;if(e)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=hc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][f]);const m=hc(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function hc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new cn(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){const x=h.getComponent(f,m);o.setComponent(f+u,m,x)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}let Js=null;function ro(){if(Js)return Js;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,30);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Js=new zi(i),Js}function Kg(i,t){const n=document.createElement("canvas");n.width=n.height=1024;const s=n.getContext("2d");s.clearRect(0,0,1024,1024);const r=1024/2,a=1024/2,o=i.accent,l=i.glow,c=s.createRadialGradient(r,a,0,r,a,1024/2);c.addColorStop(0,ye(l,.28)),c.addColorStop(.28,ye(o,.1)),c.addColorStop(.7,ye(o,.03)),c.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=c,s.fillRect(0,0,1024,1024),s.strokeStyle=ye(l,.5),s.lineWidth=3;for(let m=0;m<5;m++){const x=120+m*82;s.beginPath(),s.arc(r,a,x,0,Math.PI*2),s.stroke()}const h=16;for(let m=0;m<h;m++){const x=m/h*Math.PI*2,p=m%2===0?150:330,g=470;s.strokeStyle=ye(m%4===0?l:o,.35),s.lineWidth=m%4===0?4:2,s.beginPath(),s.moveTo(r+Math.cos(x)*p,a+Math.sin(x)*p),s.lineTo(r+Math.cos(x)*g,a+Math.sin(x)*g),s.stroke(),s.beginPath(),s.arc(r,a,460,x-.02,x+.02),s.lineWidth=8,s.strokeStyle=ye(o,.4),s.stroke()}for(let m=0;m<32;m++){const x=m/32*Math.PI*2,p=420,g=r+Math.cos(x)*p,v=a+Math.sin(x)*p;s.save(),s.translate(g,v),s.rotate(x+Math.PI/2),s.strokeStyle=ye(l,.55),s.lineWidth=2.5,s.beginPath();const E=m%4;E===0?(s.moveTo(-9,-12),s.lineTo(9,-12),s.lineTo(0,12),s.closePath()):E===1?(s.moveTo(-8,8),s.lineTo(0,-12),s.lineTo(8,8)):E===2?s.arc(0,0,9,0,Math.PI*2):(s.moveTo(-10,0),s.lineTo(10,0),s.moveTo(0,-10),s.lineTo(0,10)),s.stroke(),s.restore()}const u=t.int(3,6),f=150;s.strokeStyle=ye(l,.85),s.lineWidth=5,s.beginPath();for(let m=0;m<=u;m++){const x=m/u*Math.PI*2-Math.PI/2,p=r+Math.cos(x)*f,g=a+Math.sin(x)*f;m===0?s.moveTo(p,g):s.lineTo(p,g)}s.stroke(),s.strokeStyle=ye(o,.75),s.lineWidth=3;for(let m=0;m<u;m++){const x=m/u*Math.PI*2-Math.PI/2,p=(m+2)/u*Math.PI*2-Math.PI/2;s.beginPath(),s.moveTo(r+Math.cos(x)*f,a+Math.sin(x)*f),s.lineTo(r+Math.cos(p)*f,a+Math.sin(p)*f),s.stroke()}s.beginPath(),s.arc(r,a,62,0,Math.PI*2),s.strokeStyle=ye(l,.9),s.lineWidth=4,s.stroke(),s.beginPath(),s.arc(r,a,22,0,Math.PI*2),s.fillStyle=ye(l,.18),s.fill();const d=new zi(n);return d.colorSpace=ke,d.anisotropy=4,d}function ye(i,t){const e=i.replace("#",""),n=parseInt(e.slice(0,2),16),s=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16);return`rgba(${n},${s},${r},${t})`}function Zg(i,t,e){const r=document.createElement("canvas");r.width=256,r.height=512;const a=r.getContext("2d"),o=a.createLinearGradient(0,0,0,512);o.addColorStop(0,i.stoneDark),o.addColorStop(.5,i.stone),o.addColorStop(1,i.stoneDark),a.fillStyle=o,a.fillRect(0,0,256,512),a.strokeStyle=ye(i.accent,.55),a.lineWidth=6,a.strokeRect(14,14,228,484),a.lineWidth=2,a.strokeRect(26,26,204,460),a.strokeStyle=ye(i.glow,.8),a.lineWidth=4,a.beginPath(),a.arc(256/2,160,72,0,Math.PI*2),a.stroke();const l=t.int(3,6);a.beginPath();for(let h=0;h<=l;h++){const u=h/l*Math.PI*2-Math.PI/2,f=256/2+Math.cos(u)*58,d=160+Math.sin(u)*58;h===0?a.moveTo(f,d):a.lineTo(f,d)}a.strokeStyle=ye(i.accent,.9),a.lineWidth=3,a.stroke(),a.fillStyle=ye(i.glow,.9),a.beginPath(),a.arc(256/2,160,14,0,Math.PI*2),a.fill();for(let h=0;h<5;h++){const u=285+h*34;a.strokeStyle=ye(i.accent,.45-h*.05),a.lineWidth=2,a.beginPath(),a.moveTo(50,u),a.lineTo(206,u),a.stroke(),a.beginPath(),a.moveTo(50,u-6),a.lineTo(50,u+6),a.moveTo(206,u-6),a.lineTo(206,u+6),a.stroke()}for(let h=0;h<7;h++){const u=32+h*32;a.strokeStyle=ye(i.glow,.4),a.lineWidth=2,a.beginPath(),a.moveTo(u,452),a.lineTo(u+8,488),a.stroke()}const c=new zi(r);return c.colorSpace=ke,c}function Jg(i,t){const n=document.createElement("canvas");n.width=n.height=512;const s=n.getContext("2d"),r=512/2,a=512/2,o=s.createRadialGradient(r,a,10,r,a,250);o.addColorStop(0,ye(i.glow,.95)),o.addColorStop(.22,ye(i.accent,.6)),o.addColorStop(.5,ye(i.accent,.18)),o.addColorStop(.8,ye(i.stoneDark,.05)),o.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=o,s.fillRect(0,0,512,512);for(let c=0;c<9;c++){const h=30+c*23;s.strokeStyle=ye(c%2?i.glow:i.accent,.5-c*.03),s.lineWidth=1.5+c%3,s.beginPath();const u=t.float(0,Math.PI*2);s.arc(r,a,h,u,u+t.float(1.6,4.6)),s.stroke()}for(let c=0;c<22;c++){const h=t.float(0,Math.PI*2),u=t.float(50,235);s.fillStyle=ye(i.glow,t.float(.25,.8)),s.beginPath(),s.arc(r+Math.cos(h)*u,a+Math.sin(h)*u,t.float(1,3.5),0,Math.PI*2),s.fill()}const l=new zi(n);return l.colorSpace=ke,l}function Qg(){const i=document.createElement("canvas");i.width=i.height=32;const t=i.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,15);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),new zi(i)}function mr(i,t=.85){return new Rn({color:i,roughness:t,metalness:.08,flatShading:!0})}function uc(i,t){const e=new hi(t.seed+":geometry"),n=t.theme,s=new ge;s.name="rift-room",i.add(s);const r=mr(n.stone),a=mr(n.stoneDark,.92),o=new Rn({color:n.accent,emissive:n.accent,emissiveIntensity:.7,roughness:.4,metalness:.3}),l=new Rn({color:n.glow,emissive:n.glow,emissiveIntensity:1.4,roughness:.3}),c=new Rn({color:n.secondary,roughness:.35,metalness:.65}),h=new Sd(n.light,n.stoneDark,.85);s.add(h);const u=new Ll(n.light,n.lightIntensity);u.position.set(7,15,9),s.add(u);const f=new Ll(n.accent,1.1);f.position.set(-9,7,-11),s.add(f);const d=new ia(n.accent,90,34,2);d.position.set(0,4.8,-8.6),s.add(d);const m=new ia(n.light,55,30,2);m.position.set(0,5.6,7.2),s.add(m);const x=new ne(new $n(23,24,14,0,Math.PI*2,0,Math.PI/2),new Rn({color:n.sky,roughness:1,side:Ge}));x.position.y=-.4,s.add(x);const p=new ne(new Je(9.6,10.1,.8,48),r);p.position.y=-.4,s.add(p);const g=new ne(new ni(9.55,64),a);g.rotation.x=-Math.PI/2,g.position.y=.005,s.add(g);const v=Kg(n,e),E=new ne(new ni(9.4,64),new an({map:v,transparent:!0,opacity:.95,blending:Ke,depthWrite:!1}));E.rotation.x=-Math.PI/2,E.position.y=.018,s.add(E);const S=new ne(new An(9.55,.14,8,64),o);S.rotation.x=-Math.PI/2,S.position.y=.14,s.add(S);const A=new ne(new vr(9.6,14.6,64),a);A.rotation.x=-Math.PI/2,A.position.y=-.12,s.add(A);const T=new ne(new Je(15.1,15.1,13,48,1,!0),new Rn({color:n.stoneDark,roughness:.96,side:Ge,flatShading:!0}));T.position.y=6.4,s.add(T);const _=new ml(new gn(.45,12,.9),r,24),y=new fe,D=new oi;for(let nt=0;nt<24;nt++){const wt=nt/24*Math.PI*2,C=Math.cos(wt)*14.7,Xt=Math.sin(wt)*14.7;D.setFromEuler(new Dn(0,-wt+Math.PI/2,0)),y.compose(new I(C,6,Xt),D,new I(1,1,1)),_.setMatrixAt(nt,y)}s.add(_);const R=new ne(new An(14.5,.22,8,64),c);R.rotation.x=-Math.PI/2,R.position.y=7.8,s.add(R);const N=new ne(new An(14.8,.12,6,64),o);N.rotation.x=-Math.PI/2,N.position.y=4.2,s.add(N);const F=[],H=[],L=t.pillarCount;for(let nt=0;nt<L;nt++){const wt=nt/L*Math.PI*2+.15,C=11.9,Xt=Math.cos(wt)*C,Ct=Math.sin(wt)*C;H.push({x:Xt,z:Ct,a:wt});const ie=new gn(1.6,.5,1.6);ie.translate(Xt,.25,Ct),F.push(ie);const ot=new Je(.34,.44,6.4,8);ot.translate(Xt,3.45,Ct),F.push(ot);const de=new gn(1.25,.38,1.25);de.translate(Xt,6.75,Ct),F.push(de);const Dt=new gn(.9,.3,.9);Dt.translate(Xt,7.06,Ct),F.push(Dt)}const G=new ne(Yg(F),r);s.add(G);const q=new $n(.24,10,8),O=new ml(q,l,L);for(let nt=0;nt<L;nt++){const wt=H[nt];y.makeTranslation(wt.x,7.4,wt.z),O.setMatrixAt(nt,y)}s.add(O);const et=[];for(let nt=0;nt<L;nt+=2){const wt=H[nt];et.push(wt)}const W=[],j=Math.min(t.bannerCount,L);for(let nt=0;nt<j;nt++){const wt=H[(nt*2+1)%L],C=Zg(n,e),Xt=new an({map:C,side:Xe,transparent:!0,opacity:.96}),Ct=new ne(new ci(2.6,5.2,1,4),Xt),ie=wt.a+Math.PI/L;Ct.position.set(Math.cos(ie)*14.25,4.9,Math.sin(ie)*14.25),Ct.rotation.y=-ie+Math.PI/2,Ct.userData.phase=e.float(0,6),Ct.userData.baseRot=Ct.rotation.y,s.add(Ct),W.push(Ct)}const tt=new ge;tt.position.set(0,4.7,-10.8),s.add(tt);const At=new ne(new An(3.15,.3,10,48),o);tt.add(At);const kt=new ne(new An(3.65,.1,6,48),c);tt.add(kt);const $=Jg(n,e),gt=new ne(new ni(2.98,48),new an({map:$,transparent:!0,blending:Ke,depthWrite:!1,opacity:.9}));tt.add(gt);const Rt=[];for(let nt=0;nt<8;nt++){const wt=nt/8*Math.PI*2,C=new ne(new ds(.16,0),l);C.position.set(Math.cos(wt)*3.9,Math.sin(wt)*3.9,.1),C.userData.a=wt,tt.add(C),Rt.push(C)}const Ft=[],xt=[o,l,c];for(let nt=0;nt<t.crystalCount;nt++){const wt=e.float(0,Math.PI*2),C=e.float(4.6,12.6),Xt=e.chance(.5)?new ds(e.float(.18,.5),0):new Pi(e.float(.15,.3),e.float(.5,1.2),5),Ct=new ne(Xt,xt[nt%3]);Ct.position.set(Math.cos(wt)*C,e.float(1.4,8.6),Math.sin(wt)*C),Ct.rotation.set(e.float(0,3),e.float(0,3),e.float(0,3)),Ct.userData.baseY=Ct.position.y,Ct.userData.phase=e.float(0,6.28),Ct.userData.spin=e.float(.15,.5),s.add(Ct),Ft.push(Ct)}const zt=[],_e=[];for(let nt=0;nt<Math.min(4,et.length);nt++){const wt=et[nt],C=Math.atan2(wt.z,wt.x),Xt=Math.cos(C)*9,Ct=Math.sin(C)*9,ie=new ne(new Je(.16,.3,1.3,6),c);ie.position.set(Xt,.65,Ct),s.add(ie);const ot=new ne(new Je(.55,.3,.35,8),r);ot.position.set(Xt,1.36,Ct),s.add(ot);const de=new ne(new Pi(.3,.85,6),l);if(de.position.set(Xt,1.95,Ct),s.add(de),de.userData.phase=e.float(0,6.28),zt.push(de),nt<2){const Dt=new ia(n.accent,26,14,2);Dt.position.set(Xt,2.3,Ct),Dt.userData.base=26,Dt.userData.phase=e.float(0,6.28),s.add(Dt),_e.push(Dt)}}const Gt=new Te,Kt=[];for(let nt=0;nt<260;nt++){const wt=e.float(0,Math.PI*2),C=e.float(12,21),Xt=e.float(8,20);Kt.push(Math.cos(wt)*C,Xt,Math.sin(wt)*C)}Gt.setAttribute("position",new re(Kt,3));const Jt=new ls({size:.18,map:Qg(),transparent:!0,opacity:.85,blending:Ke,depthWrite:!1,color:n.glow,sizeAttenuation:!0}),J=new fr(Gt,Jt);s.add(J);const lt=new Te,at=[];for(let nt=0;nt<t.motes;nt++){const wt=e.float(0,Math.PI*2),C=e.float(2,13);at.push(Math.cos(wt)*C,e.float(.4,10),Math.sin(wt)*C)}lt.setAttribute("position",new re(at,3));const Tt=new ls({size:.09,map:ro(),transparent:!0,opacity:.55,blending:Ke,depthWrite:!1,color:n.glow,sizeAttenuation:!0}),pt=new fr(lt,Tt);s.add(pt);const qt=[v,$,Jt.map,Tt.map];function Nt(nt,wt){gt.rotation.z+=wt*.16,At.rotation.z-=wt*.05,gt.scale.setScalar(1+Math.sin(nt*.8)*.015);for(const C of Rt){const Xt=C.userData.a+nt*.12;C.position.set(Math.cos(Xt)*3.9,Math.sin(Xt)*3.9,.1),C.rotation.y=nt*.5}for(const C of Ft)C.position.y=C.userData.baseY+Math.sin(nt*.8+C.userData.phase)*.25,C.rotation.y+=wt*C.userData.spin,C.rotation.x+=wt*C.userData.spin*.4;for(const C of zt){const Xt=1+Math.sin(nt*7+C.userData.phase)*.16;C.scale.set(Xt,Xt*(1+Math.sin(nt*9)*.1),Xt),C.rotation.y=nt*.7}for(const C of _e)C.intensity=C.userData.base*(.86+Math.sin(nt*7.5+C.userData.phase)*.16);for(const C of W)C.rotation.y=C.userData.baseRot+Math.sin(nt*.7+C.userData.phase)*.012;pt.rotation.y=nt*.012,J.rotation.y=nt*.004,E.material.opacity=.85+Math.sin(nt*1.2)*.08,S.material.emissiveIntensity=.55+Math.sin(nt*1.6)*.18}function ee(){i.remove(s),s.traverse(nt=>{if(nt.geometry&&nt.geometry.dispose(),nt.material){const wt=Array.isArray(nt.material)?nt.material:[nt.material];for(const C of wt)C.map&&C.map.dispose(),C.dispose()}});for(const nt of qt)nt.dispose()}return{group:s,update:Nt,dispose:ee,theme:n,portal:tt,crystals:Ft}}function dc(i,t,e={}){const n=t.theme,s=!!e.compact,r=new ge;i.add(r);const a=mr(n.stone),o=mr(n.stoneDark),l=new Rn({color:n.accent,emissive:n.accent,emissiveIntensity:.9,roughness:.4});new Rn({color:n.glow,emissive:n.glow,emissiveIntensity:1.5,roughness:.3});const c=[],h=s?[-2.55,0,2.55]:[-4.6,0,4.6],u=s?.72:1;for(let m=0;m<3;m++){const x=new ge;x.position.set(h[m],0,-1.6),x.scale.set(u,1,u);const p=new ne(new Je(1.15,1.35,.5,8),a);p.position.y=.25,x.add(p);const g=new ne(new Je(1,1.1,.25,8),o);g.position.y=.62,x.add(g);const v=new ne(new An(.88,.05,6,32),l.clone());v.rotation.x=-Math.PI/2,v.position.y=.76,x.add(v);const E=new ne(new ni(.72,24),new an({color:n.glow,transparent:!0,opacity:.28,blending:Ke,depthWrite:!1}));E.rotation.x=-Math.PI/2,E.position.y=.755,x.add(E),r.add(x),c.push({group:x,ring:v,glow:E,baseY:.75,selected:!1})}function f(m){for(const x of c){const p=x.selected?1.4+Math.sin(m*4)*.5:.7+Math.sin(m*1.6)*.2;x.ring.material.emissiveIntensity=p,x.glow.material.opacity=x.selected?.5+Math.sin(m*3)*.15:.2}}function d(){i.remove(r),r.traverse(m=>{m.geometry&&m.geometry.dispose(),m.material&&m.material.dispose()})}return{group:r,pedestals:c,update:f,dispose:d}}class jg{constructor(t,e,n){this.scene=t,this.camera=e,this.floaterLayer=n,this.bursts=[],this.rings=[],this.beams=[],this.projectiles=[],this.slashes=[],this.trailTimer=0}burst(t,e,n={}){const s=n.count??26,r=n.speed??3.2,a=n.life??.8,o=n.size??.14,l=n.gravity??3.2,c=n.spread??1,h=new Float32Array(s*3),u=new Float32Array(s*3);for(let x=0;x<s;x++){const p=Math.random()*Math.PI*2,g=Math.acos(2*Math.random()-1),v=r*(.35+Math.random()*.9);u[x*3]=Math.sin(g)*Math.cos(p)*v*c,u[x*3+1]=Math.cos(g)*v*.75+(n.up??1.2),u[x*3+2]=Math.sin(g)*Math.sin(p)*v*c}const f=new Te;f.setAttribute("position",new cn(h,3));const d=new ls({map:ro(),color:e,size:o,transparent:!0,opacity:1,blending:Ke,depthWrite:!1,sizeAttenuation:!0}),m=new fr(f,d);m.position.copy(t),this.scene.add(m),this.bursts.push({points:m,velocities:u,life:a,age:0,gravity:l,baseSize:o})}aura(t,e,n={}){const s=n.count??22,r=n.life??1.2,a=n.radius??.8,o=new Float32Array(s*3),l=new Float32Array(s*3),c=new Float32Array(s);for(let d=0;d<s;d++){const m=Math.random()*Math.PI*2,x=a*(.4+Math.random()*.6);o[d*3]=Math.cos(m)*x,o[d*3+1]=Math.random()*.4,o[d*3+2]=Math.sin(m)*x,l[d*3]=Math.cos(m)*.2,l[d*3+1]=.9+Math.random()*1.5,l[d*3+2]=Math.sin(m)*.2,c[d]=Math.random()*Math.PI*2}const h=new Te;h.setAttribute("position",new cn(o,3));const u=new ls({map:ro(),color:e,size:n.size??.1,transparent:!0,opacity:1,blending:Ke,depthWrite:!1,sizeAttenuation:!0}),f=new fr(h,u);f.position.copy(t),this.scene.add(f),this.bursts.push({points:f,velocities:l,life:r,age:0,gravity:-.2,baseSize:n.size??.1,phases:c,spiral:!0})}ring(t,e,n={}){const s=n.life??.6,r=n.radius??1.2,a=new an({color:e,transparent:!0,opacity:.95,blending:Ke,side:Xe,depthWrite:!1}),o=new ne(new vr(.72,1,48),a);o.position.copy(t),n.flat?o.rotation.x=-Math.PI/2:o.quaternion.copy(this.camera.quaternion),o.scale.setScalar(.2),this.scene.add(o),this.rings.push({mesh:o,life:s,age:0,radius:r,flat:!!n.flat})}beam(t,e,n,s={}){const r=t.clone(),a=e.clone(),o=a.clone().sub(r),l=o.length(),c=new an({color:n,transparent:!0,opacity:.95,blending:Ke,depthWrite:!1}),h=new ne(new Je(s.width??.12,s.width??.12,1,6,1,!0),c);h.position.copy(r).add(a).multiplyScalar(.5),h.quaternion.setFromUnitVectors(new I(0,1,0),o.clone().normalize()),h.scale.set(1,l,1),this.scene.add(h),this.beams.push({mesh:h,life:s.life??.32,age:0}),this.burst(r,n,{count:10,speed:2,size:.1,life:.4,up:.5}),this.burst(a,n,{count:18,speed:3,size:.12,life:.5})}slash(t,e,n=1){for(let s=0;s<3;s++){const r=new an({color:e,transparent:!0,opacity:.9,blending:Ke,side:Xe,depthWrite:!1}),a=new ne(new ci(2.1,.12),r);a.position.copy(t),a.position.y+=(s-1)*.22,a.position.z+=.15,a.rotation.z=(.7+s*.22)*n,a.quaternion.copy(this.camera.quaternion).multiply(a.quaternion),a.scale.set(.2,1,1),this.scene.add(a),this.slashes.push({mesh:a,life:.3,age:0,delay:s*.035})}this.burst(t,e,{count:16,speed:4,size:.1,life:.4})}projectile(t,e,n,s={}){const r=s.duration??.5,a=s.size??.18,o=new an({color:n,transparent:!0,opacity:1}),l=new ne(new $n(a,10,8),o),c=new ne(new $n(a*2.1,10,8),new an({color:n,transparent:!0,opacity:.22,blending:Ke,depthWrite:!1}));return l.add(c),l.position.copy(t),this.scene.add(l),new Promise(h=>{this.projectiles.push({mesh:l,from:t.clone(),to:e.clone(),color:n,duration:r,age:0,resolve:h,arc:s.arc??1.6,trail:0})})}floater(t,e,n="",s=""){const r=t.clone().project(this.camera),a=(r.x*.5+.5)*window.innerWidth,o=(-r.y*.5+.5)*window.innerHeight,l=document.createElement("div");l.className=`floater ${n}`,l.textContent=e,l.style.left=`${a}px`,l.style.top=`${o}px`,s&&(l.style.color=s),this.floaterLayer.appendChild(l),setTimeout(()=>l.remove(),1500)}update(t){for(let e=this.bursts.length-1;e>=0;e--){const n=this.bursts[e];n.age+=t;const s=n.age/n.life;if(s>=1){this.scene.remove(n.points),n.points.geometry.dispose(),n.points.material.dispose(),this.bursts.splice(e,1);continue}const r=n.points.geometry.attributes.position.array;for(let a=0;a<r.length/3;a++){if(r[a*3]+=n.velocities[a*3]*t,r[a*3+1]+=n.velocities[a*3+1]*t,r[a*3+2]+=n.velocities[a*3+2]*t,n.spiral){const o=n.phases[a]+n.age*2.2;r[a*3]+=Math.cos(o)*t*.4,r[a*3+2]+=Math.sin(o)*t*.4}n.velocities[a*3+1]-=n.gravity*t}n.points.geometry.attributes.position.needsUpdate=!0,n.points.material.opacity=Math.pow(1-s,1.4),n.points.material.size=n.baseSize*(1-s*.4)}for(let e=this.rings.length-1;e>=0;e--){const n=this.rings[e];n.age+=t;const s=n.age/n.life;if(s>=1){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.rings.splice(e,1);continue}n.mesh.scale.setScalar(.2+s*n.radius*2.4),n.mesh.material.opacity=(1-s)*.9}for(let e=this.beams.length-1;e>=0;e--){const n=this.beams[e];n.age+=t;const s=n.age/n.life;if(s>=1){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.beams.splice(e,1);continue}n.mesh.material.opacity=(1-s)*.95,n.mesh.scale.x=1+Math.sin(s*Math.PI)*.8,n.mesh.scale.z=1+Math.sin(s*Math.PI)*.8}for(let e=this.slashes.length-1;e>=0;e--){const n=this.slashes[e];n.age+=t;const s=n.age-n.delay;if(s<0)continue;const r=s/n.life;if(r>=1){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.slashes.splice(e,1);continue}n.mesh.scale.x=.2+r*1.1,n.mesh.material.opacity=(1-r)*.9}for(let e=this.projectiles.length-1;e>=0;e--){const n=this.projectiles[e];n.age+=t;const s=Math.min(1,n.age/n.duration),r=s*s*(3-2*s),a=n.from.clone().add(n.to).multiplyScalar(.5);a.y+=n.arc;const o=n.from.clone().lerp(a,r),l=a.clone().lerp(n.to,r);n.mesh.position.copy(o.lerp(l,r)),n.trail+=t,n.trail>.035&&(n.trail=0,this.burst(n.mesh.position,n.color,{count:3,speed:.7,size:.1,life:.32,up:0,gravity:0,spread:.4})),s>=1&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),n.mesh.children.forEach(c=>{c.geometry.dispose(),c.material.dispose()}),this.projectiles.splice(e,1),n.resolve())}}clear(){for(const t of[this.bursts,this.rings,this.beams,this.slashes,this.projectiles]){for(const e of t){const n=e.points||e.mesh;n&&(this.scene.remove(n),n.geometry?.dispose(),Array.isArray(n.material)?n.material.forEach(s=>s.dispose()):n.material?.dispose()),e.resolve?.()}t.length=0}this.floaterLayer.innerHTML=""}}const fc={ember:180,verdant:240,tide:320,volt:420,lumen:520,umbra:140};class t_{constructor(){this.ctx=null,this.master=null,this.muted=!1,this.ambient=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.32,this.master.connect(this.ctx.destination),this.startAmbient())}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.32,this.ctx.currentTime,.05)}tone({freq:t=440,dur:e=.18,type:n="sine",gain:s=.2,slide:r=0,delay:a=0,filter:o=0}){if(!this.ctx||this.muted)return;const l=this.ctx.currentTime+a,c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type=n,c.frequency.setValueAtTime(t,l),r&&c.frequency.exponentialRampToValueAtTime(Math.max(30,t+r),l+e),h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(s,l+.012),h.gain.exponentialRampToValueAtTime(1e-4,l+e);let u=c;if(o){const f=this.ctx.createBiquadFilter();f.type="lowpass",f.frequency.value=o,c.connect(f),u=f}u.connect(h),h.connect(this.master),c.start(l),c.stop(l+e+.02)}noise({dur:t=.2,gain:e=.2,delay:n=0,lowpass:s=1400,highpass:r=0}){if(!this.ctx||this.muted)return;const a=this.ctx.currentTime+n,o=Math.max(1,Math.floor(this.ctx.sampleRate*t)),l=this.ctx.createBuffer(1,o,this.ctx.sampleRate),c=l.getChannelData(0);for(let m=0;m<o;m++)c[m]=(Math.random()*2-1)*(1-m/o);const h=this.ctx.createBufferSource();h.buffer=l;const u=this.ctx.createBiquadFilter();u.type="lowpass",u.frequency.value=s;const f=this.ctx.createBiquadFilter();f.type="highpass",f.frequency.value=r;const d=this.ctx.createGain();d.gain.setValueAtTime(e,a),d.gain.exponentialRampToValueAtTime(1e-4,a+t),h.connect(u),u.connect(f),f.connect(d),d.connect(this.master),h.start(a),h.stop(a+t+.02)}click(){this.tone({freq:620,dur:.06,type:"triangle",gain:.09,slide:-120})}hover(){this.tone({freq:880,dur:.035,type:"sine",gain:.03})}select(){this.tone({freq:420,dur:.09,type:"triangle",gain:.11}),this.tone({freq:630,dur:.12,type:"triangle",gain:.09,delay:.06})}confirm(){[392,523,659].forEach((t,e)=>this.tone({freq:t,dur:.22,type:"triangle",gain:.1,delay:e*.07}))}cry(t,e=1){if(!this.ctx||this.muted)return;const n=(fc[t]||260)*(.9+e%17/17*.3),s=this.ctx.currentTime,r=this.ctx.createOscillator(),a=this.ctx.createOscillator(),o=this.ctx.createGain(),l=this.ctx.createBiquadFilter();r.type=t==="volt"?"square":t==="umbra"?"sawtooth":"triangle",a.type="sine",r.frequency.setValueAtTime(n*1.6,s),r.frequency.exponentialRampToValueAtTime(n*.7,s+.32),a.frequency.setValueAtTime(n*.8,s),a.frequency.exponentialRampToValueAtTime(n*1.15,s+.35),l.type="lowpass",l.frequency.setValueAtTime(2400,s),l.frequency.exponentialRampToValueAtTime(500,s+.4),o.gain.setValueAtTime(1e-4,s),o.gain.exponentialRampToValueAtTime(.14,s+.03),o.gain.exponentialRampToValueAtTime(1e-4,s+.45),r.connect(l),a.connect(l),l.connect(o),o.connect(this.master),r.start(s),a.start(s),r.stop(s+.48),a.stop(s+.48),this.noise({dur:.18,gain:.04,lowpass:900,delay:.02})}attack(t,e){t==="physical"?(this.noise({dur:.22,gain:.16,lowpass:900,highpass:120}),this.tone({freq:110,dur:.2,type:"square",gain:.1,slide:-50,filter:500})):t==="special"?(this.tone({freq:fc[e]||300,dur:.3,type:"sawtooth",gain:.09,slide:500,filter:2200}),this.noise({dur:.3,gain:.07,lowpass:3e3,highpass:600})):[523,659,784].forEach((n,s)=>this.tone({freq:n,dur:.28,type:"sine",gain:.06,delay:s*.05}))}hit(t=1){const e=Math.min(1.6,Math.max(.7,t));this.noise({dur:.26,gain:.2*e,lowpass:1200,highpass:60}),this.tone({freq:90,dur:.24,type:"square",gain:.12*e,slide:-40,filter:600}),t>1.2&&this.tone({freq:780,dur:.18,type:"triangle",gain:.07,delay:.02})}miss(){this.tone({freq:330,dur:.18,type:"sine",gain:.06,slide:-120})}heal(){[523,659,784,1047].forEach((t,e)=>this.tone({freq:t,dur:.3,type:"sine",gain:.06,delay:e*.055}))}buff(){[392,523,659,784].forEach((t,e)=>this.tone({freq:t,dur:.26,type:"triangle",gain:.05,delay:e*.05}))}debuff(){[440,370,311,262].forEach((t,e)=>this.tone({freq:t,dur:.22,type:"triangle",gain:.045,delay:e*.05}))}faint(){this.tone({freq:300,dur:.7,type:"sawtooth",gain:.1,slide:-240,filter:900}),this.noise({dur:.5,gain:.06,lowpass:500})}sendOut(){this.tone({freq:220,dur:.3,type:"triangle",gain:.1,slide:440}),this.noise({dur:.25,gain:.05,lowpass:2e3})}victory(){[523,659,784,1047,1319].forEach((t,e)=>this.tone({freq:t,dur:.6,type:"triangle",gain:.09,delay:e*.13})),this.tone({freq:262,dur:1.6,type:"sine",gain:.08,delay:.1})}defeat(){[330,294,262,196].forEach((t,e)=>this.tone({freq:t,dur:.8,type:"sawtooth",gain:.07,delay:e*.18,filter:700}))}startAmbient(){if(!this.ctx||this.ambient)return;const t=this.ctx.currentTime,e=this.ctx.createGain();e.gain.value=.018;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=420;const s=[55,82.4,110.5].map(o=>{const l=this.ctx.createOscillator();return l.type="sine",l.frequency.value=o,l.connect(n),l.start(t),l}),r=this.ctx.createOscillator(),a=this.ctx.createGain();r.frequency.value=.07,a.gain.value=120,r.connect(a),a.connect(n.frequency),r.start(t),n.connect(e),e.connect(this.master),this.ambient={oscs:s,lfo:r,g:e}}}function e_(i){return i>=0?(2+i)/2:2/(2-i)}function fs(i,t){let e=i.stats[t]*e_(i.stages[t]||0);return t==="spe"&&i.status==="chill"&&(e*=.5),Math.max(1,e)}function pc(i){return fs(i,"spe")}function n_(i){return 1/16+(i.ability.key==="crit"?.1:0)}function i_(i,t,e,n=Math.random){if(!e.power)return{damage:0,typeMult:1,crit:!1,missed:!1};const s=e.accuracy;if(n()*100>s)return{damage:0,typeMult:1,crit:!1,missed:!0};const r=e.group==="physical",a=fs(i,r?"atk":"spa"),o=fs(t,r?"def":"spd");let c=(2*(i.level||50)/5+2)*e.power*(a/o)/50+2;const h=Co(e.type,t.type);c*=h,r&&i.status==="burn"&&(c*=.5),i.ability.key==="typeDamage"&&e.type===i.type&&(c*=1.2),i.ability.key==="lowHpDamage"&&t.hp<t.maxHp*.5&&(c*=1.25),t.ability.key==="reduce"&&(c*=.88);const u=n()<n_(i);return u&&(c*=1.5),c*=.88+n()*.12,{damage:Math.max(1,Math.round(c)),typeMult:h,crit:u,missed:!1}}function mc(i,t,e){if(!e.power)return 0;const n=e.group==="physical",s=fs(i,n?"atk":"spa"),r=fs(t,n?"def":"spd");let o=(2*(i.level||50)/5+2)*e.power*(s/r)/50+2;return o*=Co(e.type,t.type),n&&i.status==="burn"&&(o*=.5),i.ability.key==="typeDamage"&&e.type===i.type&&(o*=1.2),t.ability.key==="reduce"&&(o*=.88),o*.94}function s_(i,t,e){let n=0;for(const s of e.effects)if(s.kind==="heal"){const r=1-i.hp/i.maxHp;n+=r>.25?30+r*80:-15}else if(s.kind==="barrier")n+=i.barrier>0?2:26;else if(s.kind==="buff"){const r=i.stages[s.stat]||0;n+=r>=4?-6:12+(s.stages||1)*6-r*3}else if(s.kind==="debuff"){const r=t.stages[s.stat]||0;n+=r<=-4?-6:10+(s.stages||1)*4}else s.kind==="status"?n+=t.status?-22:22+(1-t.hp/t.maxHp)*14:s.kind==="cleanse"&&(n+=i.status?26:-12);return n}function gc(i,t,e=Math.random){const n=i.moves.filter(a=>a.pp>0);if(!n.length)return null;let s=n[0],r=-1/0;for(const a of n){let o=0;if(a.group==="status"){o=s_(i,t,a)*.9;const l=n.filter(c=>c.power).map(c=>mc(i,t,c));l.length&&Math.max(...l)>=t.hp&&a.group==="status"&&(o-=35)}else{const l=mc(i,t,a),c=l/t.hp;o=Math.min(120,c*100)*.95,l>=t.hp&&(o+=70),o*=.72+Co(a.type,t.type)*.34,o*=a.accuracy/100,i.ability.key==="typeDamage"&&a.type===i.type&&(o*=1.08)}o*=.86+e()*.28,o>r&&(r=o,s=a)}return s}function oa(i,t,e){const n=i.stages[t]||0;return i.stages[t]=Math.max(-6,Math.min(6,n+e)),i.stages[t]-n}function _h(i){return Math.max(0,i.hp/i.maxHp)}function vh(i){return i>.5?"#5ee08a":i>.22?"#f5c451":"#ff5d5d"}const la=new Map;function fn(i,t){const e=i.replace("#",""),n=parseInt(e.slice(0,2),16),s=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16);return`rgba(${n},${s},${r},${t})`}function r_(i){if(la.has(i.id))return la.get(i.id);const t=new hi(i.seed+":sigil"),e=document.createElement("canvas");e.width=720,e.height=300;const n=e.getContext("2d"),s=Se[i.type],r=470,a=150,o=n.createLinearGradient(0,0,720,300);o.addColorStop(0,"#05070c"),o.addColorStop(.55,s.palette.dark),o.addColorStop(1,"#05070c"),n.fillStyle=o,n.fillRect(0,0,720,300);const l=n.createRadialGradient(r,a,4,r,a,300);l.addColorStop(0,fn(s.color,.55)),l.addColorStop(.28,fn(s.color,.16)),l.addColorStop(.7,fn(s.deep,.08)),l.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=l,n.fillRect(0,0,720,300),n.save(),n.translate(r,a);for(let d=0;d<18;d++){const m=d/18*Math.PI*2+t.float(-.04,.04),x=.025+t.float(0,.04);n.beginPath(),n.moveTo(0,0),n.arc(0,0,340,m,m+x),n.closePath(),n.fillStyle=fn(d%3===0?s.soft:s.color,t.float(.015,.055)),n.fill()}n.restore();for(let d=0;d<5;d++)n.strokeStyle=fn(d%2?s.color:s.soft,.28-d*.035),n.lineWidth=d===0?2:1,n.beginPath(),n.arc(r,a,44+d*24,0,Math.PI*2),n.stroke();const c=3+i.seed%5,h=78+i.seed%26;n.strokeStyle=fn(s.soft,.9),n.lineWidth=2.2,n.beginPath();for(let d=0;d<=c;d++){const m=d/c*Math.PI*2-Math.PI/2+i.seed%10*.02,x=r+Math.cos(m)*h,p=a+Math.sin(m)*h;d===0?n.moveTo(x,p):n.lineTo(x,p)}n.stroke(),n.strokeStyle=fn(s.color,.55),n.lineWidth=1.2;for(let d=0;d<c;d++){const m=d/c*Math.PI*2-Math.PI/2,x=(d+2)/c*Math.PI*2-Math.PI/2;n.beginPath(),n.moveTo(r+Math.cos(m)*h,a+Math.sin(m)*h),n.lineTo(r+Math.cos(x)*h,a+Math.sin(x)*h),n.stroke()}n.save(),n.textAlign="center",n.textBaseline="middle",n.font="600 76px Georgia, serif",n.fillStyle=fn(s.soft,.92),n.shadowColor=s.color,n.shadowBlur=28,n.fillText(s.glyph,r,a+2),n.restore();for(let d=0;d<30;d++){const m=d/30*Math.PI*2,x=178+d%3*8,p=r+Math.cos(m)*x,g=a+Math.sin(m)*x;n.save(),n.translate(p,g),n.rotate(m),n.strokeStyle=fn(s.color,t.float(.2,.55)),n.lineWidth=1.3,n.beginPath(),d%3===0?(n.moveTo(-4,-7),n.lineTo(4,0),n.lineTo(-4,7)):(n.moveTo(-5,0),n.lineTo(5,0)),n.stroke(),n.restore()}for(let d=0;d<46;d++){n.fillStyle=fn(d%4?s.soft:"#ffffff",t.float(.08,.55));const m=t.float(20,700),x=t.float(10,290),p=t.float(.4,1.8);n.beginPath(),n.arc(m,x,p,0,Math.PI*2),n.fill()}const u=n.createLinearGradient(0,0,420,0);u.addColorStop(0,"rgba(5,7,12,0.85)"),u.addColorStop(1,"rgba(5,7,12,0)"),n.fillStyle=u,n.fillRect(0,0,420,300);const f=e.toDataURL("image/jpeg",.82);return la.set(i.id,f),f}function Qs(i,t,e,n){const s=Math.max(4,Math.min(100,t/e*100));return`<div class="tc-stat"><span>${i}</span><div class="tc-bar"><i style="width:${s}%;--tc:${n}"></i></div><b>${t}</b></div>`}function a_(i,t){const e=Se[i.type],n=ei.map(s=>{const r=i.moves.filter(a=>a.group===s);return`<div class="tc-move-row"><span class="dot ${s}"></span><span>${r.map(a=>a.name).join(" · ")}</span></div>`}).join("");return`
    <button class="team-card" data-index="${t}" style="--tc:${e.color}" aria-label="Select ${i.name}">
      <div class="tc-art">
        <img src="${r_(i)}" alt="" />
        <span class="tc-type" style="--tc:${e.color}">${e.name}</span>
        <span class="tc-arch">${i.archetypeLabel}</span>
      </div>
      <div class="tc-body">
        <div class="tc-title"><h3>${i.name}</h3><span>LV. ${i.level}</span></div>
        <div class="tc-species">${i.species}</div>
        <div class="tc-ability" style="--tc:${e.color}">
          <span>${i.ability.name}</span>
          <p>${i.ability.desc}</p>
        </div>
        <div class="tc-stats">
          ${Qs("HP",i.maxHp,200,e.color)}
          ${Qs("ATK",i.stats.atk,175,e.color)}
          ${Qs("SPA",i.stats.spa,175,e.color)}
          ${Qs("SPE",i.stats.spe,175,e.color)}
        </div>
        <div class="tc-moves">${n}</div>
      </div>
    </button>`}function o_(i,t,e,n){const s=Se[i.type],r=_h(i),a=[];if(i.status){const c=Di[i.status];a.push(`<span class="chip status" style="--c:${c.color}">${c.icon} ${c.name}</span>`)}i.barrier>0&&a.push(`<span class="chip barrier">◈ ${Math.round(i.barrier)}</span>`);for(const c of["atk","def","spa","spd","spe"]){const h=i.stages[c]||0;if(h!==0){const u=h>0?"▲":"▼";a.push(`<span class="chip stage">${c.toUpperCase()} ${u}${Math.abs(h)}</span>`)}}const o=t.map((c,h)=>`<i class="${c.fainted?"fainted":"alive"}${h===e?" current":""}"></i>`).join(""),l=Math.max(0,r*100);return`
    <div class="combatant-head">
      <span class="type-chip" style="--t:${s.color}">${s.name}</span>
      <span class="combatant-name">${i.name}</span>
      <span class="level">LV. ${i.level}${n?'<span class="warden-tag"> · WARDEN</span>':""}</span>
    </div>
    <div class="hp-track">
      <div class="hp-ghost" style="width:${l}%"></div>
      <div class="hp-fill" style="width:${l}%;--hp:${vh(r)}"></div>
    </div>
    <div class="hp-meta">
      <span class="hp-text">${Math.max(0,Math.ceil(i.hp))} / ${i.maxHp}</span>
      <span class="status-chips">${a.slice(0,4).join("")}</span>
    </div>
    <div class="ability-line" title="${i.ability.desc}">${i.ability.name} — ${i.ability.desc}</div>
    <div class="team-pips">${o}</div>`}function l_(i,t,e){const n=Se[i.type],s=i.group==="status"?"STATUS":`PWR ${i.power}`;return`
    <button class="move-card ${i.group}" data-move="${t}" style="--t:${n.color}" ${e?"disabled":""}>
      <div class="mc-top">
        <span class="type-pill" style="--t:${n.color}">${n.name}</span>
        <span class="mc-pp">PP ${i.pp}/${i.maxPp}</span>
      </div>
      <div class="mc-name">${i.name}</div>
      <div class="mc-meta">
        <span class="power">${s}</span>
        <span>ACC ${i.accuracy}</span>
        <span>${i.priority>0?"+PRIORITY":i.flavor}</span>
      </div>
      <p class="mc-desc">${i.desc}</p>
    </button>`}function c_(i,t){const e=Se[i.type],n=_h(i);return`
    <button class="switch-option" data-index="${t}" style="--t:${e.color};--hp:${vh(n)}">
      <div class="so-top">
        <span class="so-name">${i.name}</span>
        <span class="so-type">${e.name}</span>
      </div>
      <div class="so-species">${i.species} · ${i.archetypeLabel}</div>
      <div class="so-hp"><i style="width:${n*100}%"></i></div>
      <div class="so-meta"><span>${Math.ceil(i.hp)} / ${i.maxHp} HP</span><span>${i.status?Di[i.status].name:"READY"}</span></div>
      <div class="so-ability">${i.ability.name} — ${i.ability.desc}</div>
    </button>`}function h_(i){const t=yr.map(n=>{const s=Se[n],r=Eg(n);return`<div class="type-row" style="--c:${s.color}">
      <b>${s.glyph} ${s.name}</b>
      <span>strong vs <em>${Se[r.strong].name}</em> · weak vs <s>${Se[r.weak].name}</s></span>
    </div>`}).join(""),e=i?i.playerTeam.map(n=>{const s=Se[n.type],r=ei.map(a=>{const o=n.moves.filter(l=>l.group===a).map(l=>l.name).join(" · ");return`<b style="color:${nc[a].color}">${nc[a].label}</b> ${o}`}).join("<br>");return`<div class="roster-item" style="--t:${s.color}">
          <div class="ri-top"><b>${n.name}</b><span>${s.name} · ${n.archetypeLabel}</span></div>
          <div class="ri-moves">${r}</div>
        </div>`}).join(""):"<p>Enter a seed to forge a trio and their full move sets.</p>";return`
    <div class="codex-section">
      <h4>The Type Ring</h4>
      <p>Six elements form a closed ring. Each type deals 1.6× to the next type and 0.625× to the one before it. Same-type moves are neutral.</p>
      <div class="type-wheel">${t}</div>
      <h4 style="margin-top:16px">Afflictions</h4>
      ${Object.values(Di).map(n=>`<p style="margin-bottom:5px"><b style="color:${n.color}">${n.icon} ${n.name}</b> — ${n.desc}</p>`).join("")}
    </div>
    <div class="codex-section">
      <h4>How to Duel</h4>
      <div class="controls-grid">
        <b>Tap / Click</b><span>Use a move card, swap creature, or open the codex</span>
        <b>1 / 2</b><span>Keyboard: use the first or second move in the selected group</span>
        <b>Q / E</b><span>Keyboard: cycle Physical, Special and Status groups</span>
        <b>B</b><span>Keyboard: open the swap menu (costs your action)</span>
        <b>C</b><span>Keyboard: open this codex</span>
        <b>M</b><span>Keyboard: toggle sound</span>
      </div>
      <p>Physical moves scale with Attack and Defense. Special moves scale with Spirit and Ward. Status moves apply buffs, barriers, healing or afflictions. A creature may only carry one affliction at a time.</p>
      <p>Every creature carries four generated moves across the three groups, and always has at least one damaging move. Defeat all three of the Warden's creatures to clear the rift. Fainted creatures stay down until the run ends.</p>
      <h4 style="margin-top:16px">Your Trio</h4>
      <div class="roster-list">${e}</div>
    </div>`}const ca=()=>({atk:0,def:0,spa:0,spd:0,spe:0}),u_={get pActive(){return this.battle?this.battle.playerTeam[this.battle.playerActive]:null},get eActive(){return this.battle?this.battle.enemyTeam[this.battle.enemyActive]:null},getModel(i){return this.models.get(i.id)},homePos(i){const t=this.homes.get(i.id);if(t)return t.clone();const e=this.getModel(i);return e?e.root.position.clone():new I},headPos(i){const t=this.getModel(i),e=this.homePos(i);if(!t)return e;const n=t.root.scale.y||1;return e.add(new I(0,t.height*n*.92,0))},chestPos(i){const t=this.getModel(i),e=this.homePos(i);if(!t)return e;const n=t.root.scale.y||1;return e.add(new I(0,t.height*n*.52,0))},async resolveTurn(i){if(this.state!=="battle"||this.busy||this.modalOpen)return;const t=this.pActive,e=this.eActive;if(!t||!e||t.fainted||e.fainted)return;const n=t.moves[i];if(!n||n.pp<=0)return;const s=gc(e,t);this.busy=!0,this.setTurn("RESOLVING"),this.updateUI();const r=[{side:"player",creature:t,target:e,move:n},{side:"enemy",creature:e,target:t,move:s}].filter(a=>a.move);r.sort((a,o)=>{const l=(o.move.priority||0)-(a.move.priority||0);if(l!==0)return l;const c=pc(a.creature),h=pc(o.creature);return c!==h?h-c:Math.random()-.5});for(const a of r){if(this.state!=="battle")return;if(!(a.creature.fainted||a.target.fainted)){if(await this.executeAction(a),this.state!=="battle")return;if(a.target.fainted)break}}this.state==="battle"&&await this.afterActions()},async executeAction({side:i,creature:t,target:e,move:n}){if(!n||t.fainted||e.fainted)return;if(t.status==="chill"&&Math.random()<.2){this.log(`${t.name} is too chilled to move!`,"bad"),this.effects.aura(this.chestPos(t),"#7dd3fc",{count:14,radius:.8}),this.audio.miss(),await this.sleep(700);return}if(n.pp<=0){this.log(`${t.name} has no power left for ${n.name}!`,"bad");return}if(n.pp-=1,this.updateUI(),this.log(`${t.name} used ${n.name}!`,i),this.showToast(n.name),this.audio.attack(n.group,n.type),n.group==="status"){if(await this.animateStatus(t,e,n,i),Math.random()*100>n.accuracy){this.effects.floater(this.headPos(e),"MISS","miss"),this.log(`${t.name}'s ${n.name} missed!`,"bad"),this.audio.miss(),await this.sleep(450);return}let r=!1;for(const a of n.effects){if(a.chance!==void 0&&Math.random()>a.chance)continue;const o=await this.applyEffect(t,e,a,i);r=r||o}r||(this.log("But nothing happened!","system"),this.showToast("NO EFFECT","bad")),this.updateUI(),await this.sleep(420);return}const s=i_(t,e,n);if(await this.animateAttack(t,e,n,i),s.missed){this.effects.floater(this.headPos(e),"MISS","miss"),this.log(`${t.name}'s attack missed!`,"bad"),this.audio.miss(),this.updateUI(),await this.sleep(420);return}if(await this.applyDamage(t,e,n,s,i),!e.fainted&&n.effects&&n.effects.length)for(const r of n.effects)r.chance!==void 0&&Math.random()>r.chance||await this.applyEffect(t,e,r,i);this.updateUI(),await this.sleep(380)},async animateAttack(i,t,e,n){const s=this.getModel(i);if(!s)return;const r=this.homePos(i),o=this.homePos(t).clone().sub(r).setY(0).normalize(),l=this.creatureScale(i),c=n==="player"?1:-1,h=Se[e.type].color;if(e.group==="physical")await this.tween(.11,u=>{s.root.position.copy(r).addScaledVector(o,-.22*u),s.root.rotation.z=-c*.06*u}),await this.tween(.13,u=>{s.root.position.copy(r).addScaledVector(o,.95*u),s.root.rotation.z=c*.12*u}),this.effects.slash(this.chestPos(t),h,c),this.shake=Math.max(this.shake,.5),await this.sleep(100),await this.tween(.24,u=>{s.root.position.copy(r).addScaledVector(o,.95*(1-u)),s.root.rotation.z=c*.12*(1-u)});else{await this.tween(.16,d=>{s.root.position.copy(r).add(new I(0,.18*d,0)),s.root.scale.setScalar(l*(1+.05*d))});const u=this.chestPos(i),f=this.chestPos(t);await this.effects.projectile(u,f,h,{duration:.52,size:.2,arc:1.4}),this.effects.burst(f,h,{count:36,speed:4.6,size:.16,life:.7}),this.effects.ring(f,h,{radius:1.5,life:.5}),this.shake=Math.max(this.shake,.65),await this.tween(.18,d=>{s.root.position.copy(r).add(new I(0,.18*(1-d),0)),s.root.scale.setScalar(l*(1.05-.05*d))})}s.root.position.copy(r),s.root.rotation.set(0,s.root.rotation.y,0),s.root.scale.setScalar(l)},async animateStatus(i,t,e,n){const s=this.getModel(i);if(!s)return;const r=this.homePos(i),a=this.creatureScale(i),o=Se[e.type],l=e.effects.filter(h=>h.target==="foe"),c=l.length?Se[e.type].color:"#7ff0b0";this.effects.aura(this.chestPos(i),o.color,{count:24,radius:1,life:1.2}),this.effects.ring(r.clone().add(new I(0,.03,0)),o.color,{flat:!0,radius:1.5,life:.8}),l.length&&this.effects.aura(this.chestPos(t),c,{count:16,radius:.7,life:.9}),await this.tween(.38,h=>{s.root.scale.setScalar(a*(1+Math.sin(h*Math.PI)*.07))}),s.root.scale.setScalar(a),await this.sleep(260)},async applyEffect(i,t,e,n){const s=e.target==="foe"?t:i;if(!this.getModel(s)||s.fainted)return!1;Se[i.type].color;const a=this.headPos(s);if(e.kind==="buff")return oa(i,e.stat,e.stages)?(this.effects.aura(this.chestPos(i),"#ffe08a",{count:18,radius:.8}),this.effects.floater(a,`${e.stat.toUpperCase()} ▲${e.stages}`,"status","#ffe08a"),this.log(`${i.name}'s ${this.statName(e.stat)} rose!`,"good"),i.ability.key==="boostSpeed"&&e.stat!=="spe"&&oa(i,"spe",1)&&(this.effects.floater(a.clone().add(new I(0,.35,0)),"SPE ▲1","status","#ffe08a"),this.log(`${i.ability.name} also raised Speed!`,"good")),this.audio.buff(),this.updateUI(),await this.sleep(220),!0):!1;if(e.kind==="debuff")return oa(t,e.stat,-e.stages)?(this.effects.aura(this.chestPos(t),"#a78bfa",{count:16,radius:.8}),this.effects.floater(a,`${e.stat.toUpperCase()} ▼${e.stages}`,"status","#c4b5fd"),this.log(`${t.name}'s ${this.statName(e.stat)} fell!`,"good"),this.audio.debuff(),this.updateUI(),await this.sleep(220),!0):!1;if(e.kind==="heal"){const o=s.hp,l=Math.max(1,Math.round(s.maxHp*e.amount));s.hp=Math.min(s.maxHp,s.hp+l);const c=s.hp-o;return c<=0?!1:(this.effects.aura(this.chestPos(s),"#7ff0b0",{count:24,radius:.9,life:1.3}),this.effects.floater(a,`+${c}`,"heal"),this.log(`${s.name} restored ${c} HP.`,"good"),this.audio.heal(),this.updateUI(),await this.sleep(320),!0)}if(e.kind==="barrier"){const o=Math.round(s.maxHp*e.amount),l=s.barrier;return s.barrier=Math.max(s.barrier,o),s.barrier<=l?!1:(this.effects.aura(this.chestPos(s),"#7dd3fc",{count:20,radius:1}),this.effects.ring(this.homePos(s),"#7dd3fc",{flat:!0,radius:1.2,life:.7}),this.effects.floater(a,`BARRIER ${s.barrier}`,"status","#7dd3fc"),this.log(`${s.name} raised a barrier!`,"good"),this.audio.buff(),this.updateUI(),await this.sleep(280),!0)}if(e.kind==="status"){if(s.status)return this.log(`${s.name} already has an affliction.`,"system"),!1;s.status=e.status;const o=Di[e.status];return this.effects.aura(this.chestPos(s),o.color,{count:22,radius:.9,life:1.1}),this.effects.floater(a,`${o.icon} ${o.name.toUpperCase()}`,"status",o.color),this.log(`${s.name} is ${o.name.toLowerCase()}ed!`,"good"),this.audio.debuff(),this.updateUI(),await this.sleep(320),!0}return e.kind==="cleanse"&&s.status?(s.status=null,this.effects.aura(this.chestPos(s),"#e8f7ff",{count:20,radius:.9}),this.effects.floater(a,"CURED","status","#e8f7ff"),this.log(`${s.name} was cured.`,"good"),this.audio.heal(),this.updateUI(),await this.sleep(250),!0):!1},async applyDamage(i,t,e,n,s){let r=n.damage,a=0;t.barrier>0&&(a=Math.min(t.barrier,Math.round(r*.55)),t.barrier-=a,r-=a),t.hp=Math.max(0,t.hp-r),s==="player"?this.battle.damageDealt+=r:this.battle.damageTaken+=r;const o=this.headPos(t),l=Se[e.type].color;r>0&&this.effects.floater(o,`-${r}`,n.crit?"crit":"",l),a>0&&(this.effects.floater(o.clone().add(new I(0,.42,0)),`BLOCKED ${a}`,"small","#7dd3fc"),this.log(`The barrier absorbed ${a} damage.`,"system")),n.crit&&(this.effects.floater(o.clone().add(new I(0,.85,0)),"CRITICAL","small","#ffe08a"),this.log("A critical hit!","good")),n.typeMult>1.2?(this.log("It's super effective!","good"),this.showToast("SUPER EFFECTIVE","good")):n.typeMult<.9&&this.log("It's not very effective...","bad");const c=this.getModel(t);if(c&&(c.flash("#ffffff",.95),this.hitShake(t)),this.effects.burst(this.chestPos(t),l,{count:20,speed:3.2,size:.12,life:.5}),this.effects.ring(this.chestPos(t),l,{radius:1.1,life:.4}),this.shake=Math.max(this.shake,.7),this.audio.hit(n.typeMult),this.updateUI(),i.ability.key==="lifesteal"&&r>0&&!i.fainted){const h=Math.max(1,Math.round(r*.15)),u=i.hp;i.hp=Math.min(i.maxHp,i.hp+h),i.hp>u&&(this.effects.floater(this.headPos(i),`+${i.hp-u}`,"heal"),this.log(`${i.ability.name} restored ${i.hp-u} HP.`,"good"),this.updateUI())}t.hp<=0&&await this.knockOut(t)},hitShake(i){const t=this.getModel(i);if(!t)return;const e=this.homePos(i);this.tween(.32,n=>{const s=Math.sin(n*Math.PI*9)*.14*(1-n);t.root.position.copy(e).add(new I(s,0,s*.45))}).then(()=>{i.fainted||t.root.position.copy(e)})},async knockOut(i){if(i.fainted)return;i.fainted=!0,i.hp=0,i.barrier=0,i.status=null,this.log(`${i.name} fainted!`,"bad"),this.audio.faint(),this.updateUI();const t=this.getModel(i);if(t){const e=this.homePos(i),n=i.side==="player"?1:-1;await this.tween(.8,s=>{t.root.rotation.z=n*1.32*s,t.root.position.copy(e).add(new I(0,-s*.25,0)),t.setOpacity(1-s*.82)}),t.root.visible=!1,t.root.rotation.set(0,t.root.rotation.y,0),t.root.position.copy(e),t.setOpacity(1)}this.updateUI(),await this.sleep(350)},async endOfTurnEffects(){const i=[this.pActive,this.eActive].filter(Boolean);for(const t of i){if(this.state!=="battle")return;if(t.fainted)continue;const e=this.getModel(t);if(e){if(t.ability.key==="heal"&&t.hp<t.maxHp){const n=Math.max(1,Math.round(t.maxHp*.06)),s=t.hp;t.hp=Math.min(t.maxHp,t.hp+n),t.hp>s&&(this.effects.aura(this.chestPos(t),"#7ff0b0",{count:14,radius:.8}),this.effects.floater(this.headPos(t),`+${t.hp-s}`,"heal"),this.log(`${t.ability.name} restored ${t.hp-s} HP.`,"good"),this.updateUI(),await this.sleep(240))}if(t.status==="regen"&&t.hp<t.maxHp){const n=Math.max(1,Math.round(t.maxHp/8)),s=t.hp;t.hp=Math.min(t.maxHp,t.hp+n),t.hp>s&&(this.effects.aura(this.chestPos(t),"#7ff0b0",{count:16,radius:.9}),this.effects.floater(this.headPos(t),`+${t.hp-s}`,"heal"),this.log(`Regen restored ${t.hp-s} HP to ${t.name}.`,"good"),this.updateUI(),await this.sleep(240))}if(t.status==="burn"||t.status==="poison"){const n=Di[t.status],s=t.status==="burn"?Math.max(1,Math.round(t.maxHp/16)):Math.max(1,Math.round(t.maxHp/10));t.hp=Math.max(0,t.hp-s),this.effects.aura(this.chestPos(t),n.color,{count:12,radius:.8}),this.effects.floater(this.headPos(t),`-${s}`,"",n.color),this.log(`${t.name} is hurt by ${n.name.toLowerCase()}!`,"bad"),e.flash(n.color,.6),this.audio.hit(.65),this.updateUI(),await this.sleep(360),t.hp<=0&&await this.knockOut(t)}t.ability.key==="statusCure"&&t.status&&!t.fainted&&Math.random()<.3&&(t.status=null,this.effects.aura(this.chestPos(t),"#e8f7ff",{count:16,radius:.8}),this.effects.floater(this.headPos(t),"CURED","status","#e8f7ff"),this.log(`${t.ability.name} cured ${t.name}.`,"good"),this.updateUI(),await this.sleep(220))}}},async afterActions(){if(this.state!=="battle")return;if(this.battle.playerTeam.every(e=>e.fainted)){await this.endBattle(!1);return}if(this.battle.enemyTeam.every(e=>e.fainted)){await this.endBattle(!0);return}if(await this.endOfTurnEffects(),this.state!=="battle")return;if(this.battle.playerTeam.every(e=>e.fainted)){await this.endBattle(!1);return}if(this.battle.enemyTeam.every(e=>e.fainted)){await this.endBattle(!0);return}const i=this.pActive.fainted;if(this.eActive.fainted&&await this.sendNextEnemy(),i){this.openSwitch(!0);return}this.battle.round+=1,this.busy=!1,this.updateUI(),this.setTurn("YOUR MOVE"),this.log(`— Round ${this.battle.round} —`,"system")},async sendNextEnemy(){const i=this.battle.enemyTeam.findIndex(n=>!n.fainted);if(i<0)return!1;const t=this.battle.enemyTeam[i];this.battle.enemyActive=i,t.stages=ca();const e=this.enemyModels[i];return e?(this.placeModel(e,this.ENEMY_SPOT,this.ENEMY_ROT,!0),this.log(`${this.run.warden.name} sent out ${t.name}!`,"enemy"),this.updateUI(),await this.sendOutAnim(e,t),await this.sleep(420),!0):!1},async sendOutAnim(i,t){const e=this.homePos(t),n=this.creatureScale(t);i.root.visible=!0,i.setOpacity(0),i.root.scale.setScalar(n*.2),this.effects.ring(e.clone().add(new I(0,.04,0)),Se[t.type].color,{flat:!0,radius:1.4,life:.7}),this.effects.aura(this.chestPos(t),Se[t.type].color,{count:18,radius:.8,life:.8}),this.audio.sendOut(),this.audio.cry(t.type,t.seed),await this.tween(.42,s=>{i.root.scale.setScalar(n*(.2+s*.8)),i.setOpacity(Math.min(1,s*1.5))}),i.root.scale.setScalar(n),i.setOpacity(1)},async recallAnim(i){if(!i)return;const t=i.root.scale.y||1;await this.tween(.28,e=>{i.root.scale.setScalar(t*(1-e*.8)),i.setOpacity(1-e)}),i.root.visible=!1,i.root.scale.setScalar(t),i.setOpacity(1)},openSwitch(i=!1){if(this.state!=="battle"||this.modalOpen||!i&&this.busy)return;const e=this.battle.playerTeam.map((n,s)=>({c:n,index:s})).filter(({c:n,index:s})=>!n.fainted&&s!==this.battle.playerActive);if(!e.length){i&&this.endBattle(!1);return}this.switchForced=i,this.busy=!0,this.modalOpen=!0,this.dom.switchGrid.innerHTML=e.map(({c:n,index:s})=>c_(n,s)).join(""),this.dom.switchNote.textContent=i?"Your creature fainted. Choose the next one to enter the rift.":"Switching uses your action for the round. The Warden will attack.",this.dom.switchCancel.classList.toggle("hidden",i),this.dom.switchModal.classList.remove("hidden"),this.audio.click(),this.updateUI()},closeSwitch(){this.switchForced||(this.dom.switchModal.classList.add("hidden"),this.modalOpen=!1,this.busy=!1,this.switchForced=!1,this.updateUI(),this.audio.click())},async switchTo(i){if(this.state!=="battle")return;const e=this.battle.playerTeam[i];if(!e||e.fainted||i===this.battle.playerActive)return;const n=this.switchForced;if(this.dom.switchModal.classList.add("hidden"),this.modalOpen=!1,this.switchForced=!1,this.audio.click(),n){this.busy=!0,this.battle.playerActive=i,e.stages=ca();const c=this.playerModels[i];this.placeModel(c,this.PLAYER_SPOT,this.PLAYER_ROT,!0),this.log(`Go, ${e.name}!`,"player"),this.updateUI(),await this.sendOutAnim(c,e),this.battle.round+=1,this.busy=!1,this.updateUI(),this.setTurn("YOUR MOVE"),this.log(`— Round ${this.battle.round} —`,"system");return}this.busy=!0,this.updateUI();const s=this.pActive,r=this.getModel(s);r&&!s.fainted&&(this.log(`You recalled ${s.name}.`,"player"),await this.recallAnim(r)),this.battle.playerActive=i,e.stages=ca();const a=this.playerModels[i];this.placeModel(a,this.PLAYER_SPOT,this.PLAYER_ROT,!0),this.log(`Go, ${e.name}!`,"player"),this.updateUI(),await this.sendOutAnim(a,e);const o=this.eActive,l=o&&!o.fainted?gc(o,e):null;l&&await this.executeAction({side:"enemy",creature:o,target:e,move:l}),this.state==="battle"&&await this.afterActions()},async endBattle(i){if(this.state!=="end"){if(this.state="end",this.busy=!0,this.modalOpen=!1,this.dom.switchModal.classList.add("hidden"),this.dom.codexModal.classList.add("hidden"),this.dom.hintBar.classList.add("hidden"),this.updateUI(),this.setTurn("DUEL OVER"),this.log(i?`${this.run.warden.name} has been defeated!`:"Your trio has fallen...",i?"good":"bad"),this.showBanner(i?"RIFT CLEARED":"RIFT CLAIMED",i?"CHAMPION":"DEFEAT",i?this.run.room.name:this.run.warden.name,2400),i){this.audio.victory();const t=this.getModel(this.pActive);if(t){const e=this.creatureScale(this.pActive);this.tween(1.2,n=>{const s=Math.abs(Math.sin(n*Math.PI*3))*(1-n)*.35;t.root.position.y=this.homePos(this.pActive).y+s,t.root.scale.setScalar(e*(1+Math.sin(n*Math.PI)*.05))})}}else this.audio.defeat();clearTimeout(this.endTimer),this.endTimer=setTimeout(()=>this.showEndScreen(i),1900)}}},Bt=(i,t=document)=>t.querySelector(i),js=(i,t=document)=>Array.from(t.querySelectorAll(i)),d_=i=>new Promise(t=>setTimeout(t,i)),f_=i=>1-Math.pow(1-i,3),Ni=new I(3.35,0,2.55),Ui=new I(-3.35,0,-2),_c=Math.atan2(Ui.x-Ni.x,Ui.z-Ni.z),vc=Math.atan2(Ni.x-Ui.x,Ni.z-Ui.z),ps=new I(2.2,0,3),ms=new I(-2.2,0,-2.3),p_=Math.atan2(ms.x-ps.x,ms.z-ps.z),m_=Math.atan2(ps.x-ms.x,ps.z-ms.z);class xh{constructor(){this.dom={canvas:Bt("#scene"),loading:Bt("#sceneLoading"),flash:Bt("#flash"),titleScreen:Bt("#titleScreen"),selectScreen:Bt("#selectScreen"),endScreen:Bt("#endScreen"),hud:Bt("#hud"),dock:Bt("#dock"),seedInput:Bt("#seedInput"),diceBtn:Bt("#diceBtn"),beginBtn:Bt("#beginBtn"),howBtn:Bt("#howBtn"),showcaseName:Bt("#showcaseName"),showcaseMeta:Bt("#showcaseMeta"),teamCards:Bt("#teamCards"),selectSeed:Bt("#selectSeed"),selectRoom:Bt("#selectRoom"),wardenName:Bt("#wardenName"),wardenSub:Bt("#wardenSub"),deployBtn:Bt("#deployBtn"),enemyPanel:Bt("#enemyPanel"),playerPanel:Bt("#playerPanel"),roundNum:Bt("#roundNum"),duelRoom:Bt("#duelRoom"),battleLog:Bt("#battleLog"),groupTabs:Bt("#groupTabs"),moveGrid:Bt("#moveGrid"),turnLabel:Bt("#turnLabel"),activeSummary:Bt("#activeSummary"),switchBtn:Bt("#switchBtn"),codexBtn:Bt("#codexBtn"),muteBtn:Bt("#muteBtn"),switchModal:Bt("#switchModal"),switchGrid:Bt("#switchGrid"),switchNote:Bt("#switchNote"),switchCancel:Bt("#switchCancel"),codexModal:Bt("#codexModal"),codexBody:Bt("#codexBody"),floaters:Bt("#floaters"),banner:Bt("#banner"),bannerKicker:Bt("#banner .banner-kicker"),bannerTitle:Bt("#banner .banner-title"),bannerSub:Bt("#banner .banner-sub"),toast:Bt("#toast"),hintBar:Bt("#hintBar"),hintText:Bt("#hintText"),hintClose:Bt("#hintClose"),endKicker:Bt("#endKicker"),endTitle:Bt("#endTitle"),endText:Bt("#endText"),endStats:Bt("#endStats"),endSeed:Bt("#endSeed"),rematchBtn:Bt("#rematchBtn"),newRiftBtn:Bt("#newRiftBtn")},this.renderer=new bg({canvas:this.dom.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=ke,this.renderer.toneMapping=oo,this.renderer.toneMappingExposure=1.12,this.scene=new Tu,this.scene.background=new te("#05070c"),this.scene.fog=new ji("#05070c",.018),this.camera=new je(42,window.innerWidth/window.innerHeight,.1,140),this.camera.position.set(7.1,4.6,11.4),this.cameraLook=new I(.6,1.75,0),this.camera.lookAt(this.cameraLook),this.camRig={pos:new I(7.1,4.6,11.4),target:new I(.6,1.75,0)},this.effects=new jg(this.scene,this.camera,this.dom.floaters),this.audio=new t_,this.timer=new wd,this.timer.connect(document),this.models=new Map,this.homes=new Map,this.playerModels=[],this.enemyModels=[],this.tweens=[],this.state="boot",this.busy=!1,this.modalOpen=!1,this.switchForced=!1,this.currentGroup="physical",this.selectedLead=null,this.run=null,this.room=null,this.stage=null,this.battle=null,this.showcaseModel=null,this.seed="",this.time=0,this.shake=0,this.bannerTimer=null,this.toastTimer=null,this.hintTimer=null,this.endTimer=null,this.PLAYER_SPOT=Ni.clone(),this.ENEMY_SPOT=Ui.clone(),this.PLAYER_ROT=_c,this.ENEMY_ROT=vc,this.isPortrait=!1,this.layoutReady=!1,this.bindEvents(),this.resize();const t=new URLSearchParams(window.location.search),e=this.normalizeSeed(t.get("seed")||Ks());this.dom.seedInput.value=e,this.loadTitle(e),this.animate(),setTimeout(()=>{this.dom.loading.classList.add("fade"),setTimeout(()=>this.dom.loading.classList.add("hidden"),700)},500)}normalizeSeed(t){return String(t||"").toUpperCase().replace(/[^A-Z0-9-]/g,"").slice(0,16)||Ks()}sleep(t){return d_(t)}tween(t,e){return new Promise(n=>{this.tweens.push({age:0,duration:Math.max(.001,t),fn:e,resolve:n})})}updateTweens(t){const e=this.tweens;this.tweens=[];for(const n of e){n.age+=t;const s=Math.min(1,n.age/n.duration);n.fn(f_(s),s),s<1?this.tweens.push(n):n.resolve()}}loadTitle(t){this.state="title",this.busy=!1,this.modalOpen=!1,this.cleanupScene(),this.seed=this.normalizeSeed(t),this.titleSeed=this.seed,this.dom.seedInput.value=this.seed,this.dom.titleScreen.classList.remove("hidden"),this.dom.selectScreen.classList.add("hidden"),this.dom.endScreen.classList.add("hidden"),this.dom.hud.classList.add("hidden"),this.dom.dock.classList.add("hidden"),this.dom.battleLog.innerHTML="";const e=lc(this.seed).room;this.room=uc(this.scene,e),this.scene.fog=new ji(e.theme.fog,e.fogDensity),this.scene.background=new te(e.theme.bg);const n=Og(this.seed),s=aa(n);s.root.position.set(3.7,.02,-2.2),s.root.rotation.y=-.42,s.root.scale.setScalar(1.42),this.scene.add(s.root),this.showcaseModel=s,this.models.set(n.id,s),this.dom.showcaseName.textContent=n.name,this.dom.showcaseMeta.textContent=`${Se[n.type].name} · ${n.species} · ${n.archetypeLabel}`,this.camera.position.set(7.1,4.6,11.4),this.cameraLook.set(.6,1.75,0),this.camRig.pos.copy(this.camera.position),this.camRig.target.copy(this.cameraLook),this.camera.lookAt(this.cameraLook),this.audio.setMuted(this.audio.muted)}cleanupScene(){clearTimeout(this.endTimer),clearTimeout(this.hintTimer),this.tweens=[],this.effects.clear();for(const t of this.models.values())t.dispose(),t.root.removeFromParent();this.models.clear(),this.homes.clear(),this.playerModels=[],this.enemyModels=[],this.showcaseModel=null,this.room&&(this.room.dispose(),this.room=null),this.stage&&(this.stage.dispose(),this.stage=null),this.battle=null,this.busy=!1,this.modalOpen=!1,this.switchForced=!1}enterRift(t){if(!["title","end"].includes(this.state))return;this.audio.init(),this.audio.confirm();const e=this.normalizeSeed(t||this.dom.seedInput.value);this.cleanupScene(),this.seed=e,this.dom.seedInput.value=e,this.run=lc(e),this.scene.fog=new ji(this.run.room.theme.fog,this.run.room.fogDensity),this.scene.background=new te(this.run.room.theme.bg),this.room=uc(this.scene,this.run.room),this.stage=dc(this.scene,this.run.room,{compact:this.isPortrait}),this.playerModels=this.run.playerTeam.map((n,s)=>{const r=aa(n),a=this.stage.pedestals[s];return r.root.position.set(a.group.position.x,.79,a.group.position.z),r.root.rotation.y=-.38+(s-1)*.1,r.root.scale.setScalar(this.creatureScale(n)),this.scene.add(r.root),this.models.set(n.id,r),this.homes.set(n.id,r.root.position.clone()),r}),this.selectedLead=null,this.busy=!1,this.modalOpen=!1,this.state="select",this.currentGroup="physical",this.dom.titleScreen.classList.add("hidden"),this.dom.endScreen.classList.add("hidden"),this.dom.selectScreen.classList.remove("hidden"),this.dom.hud.classList.add("hidden"),this.dom.dock.classList.add("hidden"),this.dom.deployBtn.disabled=!0,this.buildSelectUI(),this.updateCameraRig(),window.history.replaceState(null,"",`?seed=${encodeURIComponent(e)}`)}buildSelectUI(){this.dom.selectSeed.textContent=this.run.seed,this.dom.selectRoom.textContent=this.run.room.name,this.dom.wardenName.textContent=this.run.warden.name,this.dom.wardenSub.textContent=this.run.warden.title,this.dom.teamCards.innerHTML=this.run.playerTeam.map((t,e)=>a_(t,e)).join("");for(const t of js(".team-card",this.dom.teamCards))t.addEventListener("click",()=>this.selectLead(Number(t.dataset.index)));for(const t of this.stage.pedestals)t.selected=!1}selectLead(t){if(this.state==="select"){this.selectedLead=t,this.audio.init(),this.audio.select();for(const e of js(".team-card",this.dom.teamCards))e.classList.toggle("selected",Number(e.dataset.index)===t);this.dom.deployBtn.disabled=!1,this.playerModels.forEach((e,n)=>{const s=this.run.playerTeam[n],r=this.creatureScale(s,n===t?1.16:1);this.tween(.35,a=>{const o=e.root.scale.x;e.root.scale.setScalar(o+(r-o)*Math.min(1,a*.22))}),this.stage&&(this.stage.pedestals[n].selected=n===t)})}}deploy(){if(this.state!=="select"||this.selectedLead===null)return;this.audio.init(),this.audio.confirm();const t=this.selectedLead;this.dom.selectScreen.classList.add("hidden"),this.dom.hud.classList.remove("hidden"),this.dom.dock.classList.remove("hidden"),this.dom.battleLog.innerHTML="",this.dom.roundNum.textContent="1",this.dom.duelRoom.textContent=this.run.room.name,this.state="battle",this.busy=!1,this.currentGroup="physical",this.battle={playerTeam:this.run.playerTeam,enemyTeam:this.run.enemyTeam,playerActive:t,enemyActive:0,round:1,damageDealt:0,damageTaken:0,startedAt:Date.now()},this.buildEnemyModels(),this.stage&&(this.stage.dispose(),this.stage=null),this.playerModels.forEach((n,s)=>{s===t?this.placeModel(n,this.PLAYER_SPOT,this.PLAYER_ROT,!0):n.root.visible=!1}),this.placeModel(this.enemyModels[0],this.ENEMY_SPOT,this.ENEMY_ROT,!0),this.updateCameraRig(),this.updateUI(),this.log(`${this.run.warden.name} accepts your challenge.`,"enemy"),this.log(`Go, ${this.pActive.name}!`,"player"),this.showBanner("RIFT DUEL",this.run.room.name,this.run.warden.title,2400);const e=window.matchMedia("(pointer: coarse)").matches;this.showHint(e?"<b>Tap a group</b>, then a move. <b>SWAP</b> rotates creatures · <b>CODEX</b> explains the rules.":"<b>Pick a move group</b>, then a move. <b>Q/E</b> cycles groups · <b>B</b> swaps creatures · <b>C</b> opens the codex."),this.sendOutAnim(this.playerModels[t],this.pActive),setTimeout(()=>{this.state==="battle"&&(this.sendOutAnim(this.enemyModels[0],this.eActive),this.log(`${this.run.warden.name} sent out ${this.eActive.name}!`,"enemy"))},450),setTimeout(()=>{this.state==="battle"&&(this.setTurn("YOUR MOVE"),this.updateUI())},1500),this.setTurn("DEPLOYING")}buildEnemyModels(){this.enemyModels=this.run.enemyTeam.map(t=>{const e=aa(t);return e.root.visible=!1,this.scene.add(e.root),this.models.set(t.id,e),e})}creatureScale(t,e=1){return t.scale*e*(this.isPortrait?1.22:1)}placeModel(t,e,n,s=!0){t&&(t.root.position.copy(e),t.root.rotation.set(0,n,0),t.root.scale.setScalar(this.creatureScale(t.creature)),t.root.visible=s,t.setOpacity(1),this.homes.set(t.creature.id,e.clone()))}resetModel(t,e,n,s,r){t&&(t.root.position.copy(n),t.root.rotation.set(0,s,0),t.root.scale.setScalar(this.creatureScale(e)),t.root.visible=r,t.setOpacity(1),this.homes.set(e.id,n.clone()))}updateUI(){if(!this.battle||!["battle","end"].includes(this.state))return;this.renderCombatant(this.dom.enemyPanel,this.eActive,this.battle.enemyTeam,this.battle.enemyActive,!0),this.renderCombatant(this.dom.playerPanel,this.pActive,this.battle.playerTeam,this.battle.playerActive,!1),this.dom.roundNum.textContent=String(this.battle.round),this.renderMoves();const t=this.battle.playerTeam.filter((n,s)=>!n.fainted&&s!==this.battle.playerActive).length;this.dom.switchBtn.disabled=this.busy||t===0;const e=this.pActive;this.dom.activeSummary.textContent=e?`${e.name} · ${e.ability.name}`:""}renderCombatant(t,e,n,s,r){if(!t||!e)return;const a=Se[e.type];t.style.setProperty("--t",a.color);const o=Math.max(0,e.hp/e.maxHp),l=t.dataset.hp?Number(t.dataset.hp):o;t.innerHTML=o_(e,n,s,r),t.dataset.hp=String(o);const c=Bt(".hp-fill",t),h=Bt(".hp-ghost",t);c&&(c.style.width=`${Math.max(0,l)*100}%`),h&&(h.style.width=`${Math.max(0,l)*100}%`),requestAnimationFrame(()=>{requestAnimationFrame(()=>{c&&(c.style.width=`${o*100}%`),h&&(h.style.width=`${o*100}%`)})})}renderMoves(){if(!this.battle)return;const t=this.pActive;if(!t)return;for(const s of js(".group-tab",this.dom.groupTabs)){const r=s.dataset.group;s.classList.toggle("active",r===this.currentGroup);const a=t.moves.filter(l=>l.group===r&&l.pp>0).length,o=Bt(`[data-count="${r}"]`,this.dom.groupTabs);o&&(o.textContent=String(a)),s.style.opacity=a===0?"0.45":""}const e=t.moves.map((s,r)=>({move:s,index:r})).filter(({move:s})=>s.group===this.currentGroup),n=this.busy||this.state!=="battle";this.dom.moveGrid.classList.toggle("single",e.length===1),e.length?this.dom.moveGrid.innerHTML=e.map(({move:s,index:r})=>l_(s,r,n||s.pp<=0)).join(""):this.dom.moveGrid.innerHTML='<div style="padding:20px;color:var(--muted-dim);font-size:10px;letter-spacing:.1em">No moves in this group.</div>'}setTurn(t){this.dom.turnLabel.textContent=t}log(t,e="system"){if(!this.dom.battleLog)return;const n=document.createElement("div");for(n.className=`log-line ${e}`,n.textContent=t,this.dom.battleLog.appendChild(n);this.dom.battleLog.children.length>7;)this.dom.battleLog.firstElementChild.remove()}showBanner(t,e,n,s=2100){clearTimeout(this.bannerTimer),this.dom.bannerKicker.textContent=t,this.dom.bannerTitle.textContent=e,this.dom.bannerSub.textContent=n||"",this.dom.banner.classList.remove("hidden"),this.bannerTimer=setTimeout(()=>this.dom.banner.classList.add("hidden"),s)}showToast(t,e=""){clearTimeout(this.toastTimer),this.dom.toast.textContent=t,this.dom.toast.className=e,this.dom.toast.classList.remove("hidden"),this.dom.toast.offsetWidth,this.toastTimer=setTimeout(()=>this.dom.toast.classList.add("hidden"),1800)}showHint(t){clearTimeout(this.hintTimer),this.dom.hintText.innerHTML=t,this.dom.hintBar.classList.remove("hidden"),this.hintTimer=setTimeout(()=>this.dom.hintBar.classList.add("hidden"),12e3)}hideHint(){clearTimeout(this.hintTimer),this.dom.hintBar.classList.add("hidden")}statName(t){return{atk:"Attack",def:"Defense",spa:"Spirit",spd:"Ward",spe:"Speed"}[t]||t}updateCameraRig(){const t=this.isPortrait;this.state==="title"?t?(this.camRig.pos.set(6.6+Math.sin(this.time*.09)*.4,4.8+Math.sin(this.time*.13)*.1,11.2+Math.cos(this.time*.07)*.18),this.camRig.target.set(1.2,1.6,-.5)):(this.camRig.pos.set(7.1+Math.sin(this.time*.09)*.5,4.6+Math.sin(this.time*.13)*.1,11.4+Math.cos(this.time*.07)*.22),this.camRig.target.set(.6,1.78,0)):this.state==="select"?t?(this.camRig.pos.set(Math.sin(this.time*.18)*.08,4.4,10.6),this.camRig.target.set(0,1.15,-1.6)):(this.camRig.pos.set(Math.sin(this.time*.18)*.1,3.85,9.9),this.camRig.target.set(0,1.38,-2)):this.state==="battle"?t?(this.camRig.pos.set(.2+Math.sin(this.time*.24)*.1,5+Math.sin(this.time*.31)*.04,11.3),this.camRig.target.set(.7,1.45,-.1)):(this.camRig.pos.set(.7+Math.sin(this.time*.24)*.13,5.2+Math.sin(this.time*.31)*.05,13.4),this.camRig.target.set(0,1.28,-.4)):this.state==="end"&&(t?(this.camRig.pos.set(.8,5.2,11.5),this.camRig.target.set(0,1.7,0)):(this.camRig.pos.set(1.2,4.8,14.2),this.camRig.target.set(0,1.9,0)))}animate=()=>{requestAnimationFrame(this.animate),this.timer.update();const t=Math.min(this.timer.getDelta(),.05);this.time+=t,this.updateTweens(t),this.room&&this.room.update(this.time,t),this.stage&&this.stage.update(this.time);for(const r of this.models.values())r.root.visible&&r.update(this.time,t);this.effects.update(t),this.updateCameraRig();const e=1-Math.exp(-t*3.4);this.camera.position.lerp(this.camRig.pos,e),this.cameraLook.lerp(this.camRig.target,e),this.shake*=Math.exp(-t*8);const n=Math.sin(this.time*91)*this.shake*.07,s=Math.cos(this.time*77)*this.shake*.05;this.camera.position.x+=n,this.camera.position.y+=s,this.camera.lookAt(this.cameraLook),this.renderer.render(this.scene,this.camera)};resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.updateLayout()}updateLayout(){const t=window.innerHeight>window.innerWidth*1.08,e=this.layoutReady&&t!==this.isPortrait;this.isPortrait=t,this.layoutReady=!0;const n=t?68:42;this.camera.fov!==n&&(this.camera.fov=n,this.camera.updateProjectionMatrix());const s=t?ps:Ni,r=t?ms:Ui;if(this.PLAYER_SPOT.copy(s),this.ENEMY_SPOT.copy(r),this.PLAYER_ROT=t?p_:_c,this.ENEMY_ROT=t?m_:vc,!!e&&(this.state==="select"&&this.run&&(this.stage&&this.stage.dispose(),this.stage=dc(this.scene,this.run.room,{compact:t}),this.playerModels.forEach((a,o)=>{const l=this.run.playerTeam[o];if(!l)return;const c=this.stage.pedestals[o];a.root.position.set(c.group.position.x,.79,c.group.position.z),a.root.scale.setScalar(this.creatureScale(l,o===this.selectedLead?1.16:1)),this.homes.set(l.id,a.root.position.clone())}),this.stage&&this.stage.pedestals.forEach((a,o)=>{a.selected=o===this.selectedLead})),this.state==="battle"&&this.battle)){const a=this.playerModels[this.battle.playerActive],o=this.enemyModels[this.battle.enemyActive];a&&a.root.visible&&this.placeModel(a,this.PLAYER_SPOT,this.PLAYER_ROT,!0),o&&o.root.visible&&this.placeModel(o,this.ENEMY_SPOT,this.ENEMY_ROT,!0)}}bindEvents(){window.addEventListener("resize",()=>this.resize()),this.dom.beginBtn.addEventListener("click",()=>this.enterRift()),this.dom.diceBtn.addEventListener("click",()=>{if(this.state!=="title")return;this.audio.init(),this.audio.click();const t=Ks();this.loadTitle(t)}),this.dom.seedInput.addEventListener("keydown",t=>{t.key==="Enter"&&this.state==="title"&&this.enterRift()}),this.dom.seedInput.addEventListener("input",()=>{this.dom.seedInput.value=this.dom.seedInput.value.toUpperCase().replace(/[^A-Z0-9-]/g,"").slice(0,16)}),this.dom.howBtn.addEventListener("click",()=>this.openCodex()),this.dom.deployBtn.addEventListener("click",()=>this.deploy()),this.dom.groupTabs.addEventListener("click",t=>{const e=t.target.closest(".group-tab");!e||this.state!=="battle"||this.busy||(this.currentGroup=e.dataset.group,this.audio.init(),this.audio.click(),this.renderMoves())}),this.dom.moveGrid.addEventListener("click",t=>{const e=t.target.closest(".move-card");!e||e.disabled||(this.audio.init(),this.audio.click(),this.resolveTurn(Number(e.dataset.move)))}),this.dom.switchBtn.addEventListener("click",()=>this.openSwitch(!1)),this.dom.codexBtn.addEventListener("click",()=>this.openCodex()),this.dom.muteBtn.addEventListener("click",()=>this.toggleMute()),this.dom.hintClose.addEventListener("click",()=>this.hideHint()),this.dom.switchCancel.addEventListener("click",()=>this.closeSwitch()),this.dom.switchModal.addEventListener("click",t=>{t.target===this.dom.switchModal&&this.closeSwitch()}),this.dom.codexModal.addEventListener("click",t=>{t.target===this.dom.codexModal&&this.closeCodex()}),this.dom.switchGrid.addEventListener("click",t=>{const e=t.target.closest(".switch-option");e&&this.switchTo(Number(e.dataset.index))});for(const t of js("[data-close]"))t.addEventListener("click",()=>{t.dataset.close==="switch"?this.closeSwitch():this.closeCodex()});this.dom.endScreen.addEventListener("click",t=>{t.target.closest("#rematchBtn")&&this.rematch(),t.target.closest("#newRiftBtn")&&this.newRift()}),this.dom.canvas.addEventListener("click",t=>this.onCanvasClick(t)),window.addEventListener("keydown",t=>this.onKeyDown(t))}onCanvasClick(t){if(this.state!=="select")return;const e=this.dom.canvas.getBoundingClientRect(),n=new ct((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),s=new Rd;s.setFromCamera(n,this.camera);const r=this.playerModels.map(c=>c.root),a=s.intersectObjects(r,!0);if(!a.length)return;let o=a[0].object;for(;o&&!r.includes(o);)o=o.parent;if(!o)return;const l=this.playerModels.findIndex(c=>c.root===o);l>=0&&this.selectLead(l)}onKeyDown(t){if(t.target.tagName!=="INPUT"){if(t.key==="Escape"){this.dom.codexModal.classList.contains("hidden")?!this.dom.switchModal.classList.contains("hidden")&&!this.switchForced&&this.closeSwitch():this.closeCodex();return}if(!this.modalOpen){if(t.key==="m"||t.key==="M"){this.toggleMute();return}if(this.state==="title"){t.key==="Enter"&&this.enterRift();return}if(this.state==="select"){["1","2","3"].includes(t.key)&&this.selectLead(Number(t.key)-1),t.key==="Enter"&&!this.dom.deployBtn.disabled&&this.deploy();return}if(this.state==="end"){t.key==="Enter"&&this.newRift();return}if(!(this.state!=="battle"||this.busy)){if(t.key==="q"||t.key==="Q")this.cycleGroup(-1);else if(t.key==="e"||t.key==="E")this.cycleGroup(1);else if(t.key==="b"||t.key==="B")this.openSwitch(!1);else if(t.key==="c"||t.key==="C")this.openCodex();else if(t.key==="1"||t.key==="2"){const e=this.pActive.moves.map((s,r)=>({move:s,index:r})).filter(({move:s})=>s.group===this.currentGroup&&s.pp>0),n=Number(t.key)-1;e[n]&&(this.audio.init(),this.resolveTurn(e[n].index))}}}}}cycleGroup(t){if(this.state!=="battle"||this.busy)return;const e=ei.indexOf(this.currentGroup);this.currentGroup=ei[(e+t+ei.length)%ei.length],this.audio.init(),this.audio.click(),this.renderMoves()}toggleMute(){this.audio.init(),this.audio.setMuted(!this.audio.muted),this.dom.muteBtn.classList.toggle("muted",this.audio.muted),this.dom.muteBtn.title=this.audio.muted?"Unmute (M)":"Mute (M)",this.audio.muted||this.audio.click()}openCodex(){this.modalOpen||(this.audio.init(),this.audio.click(),this.dom.codexBody.innerHTML=h_(this.run),this.dom.codexModal.classList.remove("hidden"),this.modalOpen=!0)}closeCodex(){this.dom.codexModal.classList.add("hidden"),this.modalOpen=!1,this.audio.click()}showEndScreen(t){if(this.state!=="end")return;this.dom.endScreen.classList.remove("hidden"),this.dom.hud.classList.add("hidden"),this.dom.dock.classList.add("hidden"),this.dom.hintBar.classList.add("hidden");const e=this.battle.playerTeam.filter(s=>!s.fainted).length,n=this.battle.enemyTeam.filter(s=>s.fainted).length;this.dom.endKicker.textContent=t?"RIFT CLEARED":"RIFT LOST",this.dom.endTitle.textContent=t?"CHAMPION OF THE RIFT":"THE RIFT CLAIMS YOU",this.dom.endText.textContent=t?`${this.run.warden.name} falls. Your procedural trio carves its names into the arena — and the next seed is already waiting.`:`${this.run.warden.name} holds the arena. The seed is not spent: rematch with the same trio, or forge an entirely new rift.`,this.dom.endStats.innerHTML=[["ROUNDS",this.battle.round],["DAMAGE DEALT",Math.round(this.battle.damageDealt)],["DAMAGE TAKEN",Math.round(this.battle.damageTaken)],["SURVIVORS",`${e} / 3`],["FOES FELLED",`${n} / 3`],["SEED",this.run.seed]].map(([s,r])=>`<div class="end-stat"><span>${s}</span><b>${r}</b></div>`).join(""),this.dom.endSeed.textContent=this.run.seed,this.dom.rematchBtn.classList.remove("hidden"),this.audio.setMuted(this.audio.muted)}rematch(){this.state==="end"&&(this.audio.init(),this.audio.confirm(),clearTimeout(this.endTimer),cc(this.run.playerTeam),cc(this.run.enemyTeam),this.battle={playerTeam:this.run.playerTeam,enemyTeam:this.run.enemyTeam,playerActive:0,enemyActive:0,round:1,damageDealt:0,damageTaken:0,startedAt:Date.now()},this.playerModels.forEach((t,e)=>{this.resetModel(t,this.run.playerTeam[e],this.PLAYER_SPOT,this.PLAYER_ROT,e===0)}),this.enemyModels.forEach((t,e)=>{this.resetModel(t,this.run.enemyTeam[e],this.ENEMY_SPOT,this.ENEMY_ROT,e===0)}),this.dom.endScreen.classList.add("hidden"),this.dom.hud.classList.remove("hidden"),this.dom.dock.classList.remove("hidden"),this.dom.battleLog.innerHTML="",this.state="battle",this.busy=!1,this.currentGroup="physical",this.modalOpen=!1,this.dom.roundNum.textContent="1",this.dom.duelRoom.textContent=this.run.room.name,this.updateUI(),this.setTurn("YOUR MOVE"),this.log("The rift resets. A rematch begins.","system"),this.showBanner("REMATCH",this.run.room.name,this.run.warden.name,2e3),this.audio.cry(this.pActive.type,this.pActive.seed),setTimeout(()=>this.audio.cry(this.eActive.type,this.eActive.seed),350),this.updateCameraRig())}newRift(){if(this.state!=="end")return;clearTimeout(this.endTimer);const t=Ks();this.dom.endScreen.classList.add("hidden"),this.dom.seedInput.value=t,this.enterRift(t)}}for(const[i,t]of Object.entries(Object.getOwnPropertyDescriptors(u_)))Object.defineProperty(xh.prototype,i,t);const g_=new xh;window.__rift=g_;
