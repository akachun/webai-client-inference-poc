(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const l of d.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(u){if(u.ep)return;u.ep=!0;const d=n(u);fetch(u.href,d)}})();const scriptRel="modulepreload",assetsURL=function(e){return"/webai-client-inference-poc/"+e},seen={},__vitePreload=function(t,n,a){let u=Promise.resolve();if(n&&n.length>0){let o=function(r){return Promise.all(r.map(i=>Promise.resolve(i).then(s=>({status:"fulfilled",value:s}),s=>({status:"rejected",reason:s}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),p=l?.nonce||l?.getAttribute("nonce");u=o(n.map(r=>{if(r=assetsURL(r),r in seen)return;seen[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":scriptRel,i||(c.as="script"),c.crossOrigin="",c.href=r,p&&c.setAttribute("nonce",p),document.head.appendChild(c),i)return new Promise((h,m)=>{c.addEventListener("load",h),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${r}`)))})}))}function d(l){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=l,window.dispatchEvent(p),!p.defaultPrevented)throw l}return u.then(l=>{for(const p of l||[])p.status==="rejected"&&d(p.reason);return t().catch(d)})};var tI=Object.create,ui=Object.defineProperty,nI=Object.getOwnPropertyDescriptor,rI=Object.getOwnPropertyNames,oI=Object.getPrototypeOf,iI=Object.prototype.hasOwnProperty,Ps=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),N=(e,t)=>()=>(e&&(t=e(e=0)),t),oe=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Sr=(e,t)=>{for(var n in t)ui(e,n,{get:t[n],enumerable:!0})},Fp=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let u of rI(t))!iI.call(e,u)&&u!==n&&ui(e,u,{get:()=>t[u],enumerable:!(a=nI(t,u))||a.enumerable});return e},_e=(e,t,n)=>(n=e!=null?tI(oI(e)):{},Fp(!e||!e.__esModule?ui(n,"default",{value:e,enumerable:!0}):n,e)),Xr=e=>Fp(ui({},"__esModule",{value:!0}),e),li,$r,ar,aI,Vp,Es=N(()=>{li=new Map,$r=[],ar=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let a=li.get(e);if(a===void 0)li.set(e,{backend:t,priority:n});else{if(a.priority>n)return;if(a.priority===n&&a.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let u=$r.indexOf(e);u!==-1&&$r.splice(u,1);for(let d=0;d<$r.length;d++)if(li.get($r[d]).priority<=n){$r.splice(d,0,e);return}$r.push(e)}return}throw new TypeError("not a valid backend")},aI=async e=>{let t=li.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(a){return n||(t.error=`${a}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Vp=async e=>{let t=e.executionProviders||[],n=t.map(o=>typeof o=="string"?o:o.name),a=n.length===0?$r:n,u,d=[],l=new Set;for(let o of a){let r=await aI(o);typeof r=="string"?d.push({name:o,err:r}):(u||(u=r),u===r&&l.add(o))}if(!u)throw new Error(`no available backend found. ERR: ${d.map(o=>`[${o.name}] ${o.err}`).join(", ")}`);for(let{name:o,err:r}of d)n.includes(o)&&console.warn(`removing requested execution provider "${o}" from session options because it is not available: ${r}`);let p=t.filter(o=>l.has(typeof o=="string"?o:o.name));return[u,new Proxy(e,{get:(o,r)=>r==="executionProviders"?p:Reflect.get(o,r)})]}}),Gp=N(()=>{Es()}),Up,Wp=N(()=>{Up="1.24.2"}),Hp,it,Cs=N(()=>{Wp(),Hp="warning",it={wasm:{},webgl:{},webgpu:{},versions:{common:Up},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Hp=e}},get logLevel(){return Hp}},Object.defineProperty(it,"logLevel",{enumerable:!0})}),pe,qp=N(()=>{Cs(),pe=it}),jp,Kp,Xp=N(()=>{jp=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let a=n.getContext("2d");if(a!=null){let u,d;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(u=e.dims[2],d=e.dims[3]):(u=e.dims[3],d=e.dims[2]);let l=t?.format!==void 0?t.format:"RGB",p=t?.norm,o,r;p===void 0||p.mean===void 0?o=[255,255,255,255]:typeof p.mean=="number"?o=[p.mean,p.mean,p.mean,p.mean]:(o=[p.mean[0],p.mean[1],p.mean[2],0],p.mean[3]!==void 0&&(o[3]=p.mean[3])),p===void 0||p.bias===void 0?r=[0,0,0,0]:typeof p.bias=="number"?r=[p.bias,p.bias,p.bias,p.bias]:(r=[p.bias[0],p.bias[1],p.bias[2],0],p.bias[3]!==void 0&&(r[3]=p.bias[3]));let i=d*u,s=0,c=i,h=i*2,m=-1;l==="RGBA"?(s=0,c=i,h=i*2,m=i*3):l==="RGB"?(s=0,c=i,h=i*2):l==="RBG"&&(s=0,h=i,c=i*2);for(let b=0;b<d;b++)for(let w=0;w<u;w++){let x=(e.data[s++]-r[0])*o[0],_=(e.data[c++]-r[1])*o[1],S=(e.data[h++]-r[2])*o[2],I=m===-1?255:(e.data[m++]-r[3])*o[3];a.fillStyle="rgba("+x+","+_+","+S+","+I+")",a.fillRect(w,b,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Kp=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(n!=null){let u,d,l;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(u=e.dims[2],d=e.dims[1],l=e.dims[3]):(u=e.dims[3],d=e.dims[2],l=e.dims[1]);let p=t!==void 0&&t.format!==void 0?t.format:"RGB",o=t?.norm,r,i;o===void 0||o.mean===void 0?r=[255,255,255,255]:typeof o.mean=="number"?r=[o.mean,o.mean,o.mean,o.mean]:(r=[o.mean[0],o.mean[1],o.mean[2],255],o.mean[3]!==void 0&&(r[3]=o.mean[3])),o===void 0||o.bias===void 0?i=[0,0,0,0]:typeof o.bias=="number"?i=[o.bias,o.bias,o.bias,o.bias]:(i=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(i[3]=o.bias[3]));let s=d*u;if(t!==void 0&&(t.format!==void 0&&l===4&&t.format!=="RGBA"||l===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let c=4,h=0,m=1,b=2,w=3,x=0,_=s,S=s*2,I=-1;p==="RGBA"?(x=0,_=s,S=s*2,I=s*3):p==="RGB"?(x=0,_=s,S=s*2):p==="RBG"&&(x=0,S=s,_=s*2),a=n.createImageData(u,d);for(let O=0;O<d*u;h+=c,m+=c,b+=c,w+=c,O++)a.data[h]=(e.data[x++]-i[0])*r[0],a.data[m]=(e.data[_++]-i[1])*r[1],a.data[b]=(e.data[S++]-i[2])*r[2],a.data[w]=I===-1?255:(e.data[I++]-i[3])*r[3]}else throw new Error("Can not access image data");return a}}),Ds,Zp,Jp,Qp,Yp,ef,tf=N(()=>{ci(),Ds=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:a}=t,u=t.norm??{mean:255,bias:0},d,l;typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:d=[u.mean[0],u.mean[1],u.mean[2],u.mean[3]??255],typeof u.bias=="number"?l=[u.bias,u.bias,u.bias,u.bias]:l=[u.bias[0],u.bias[1],u.bias[2],u.bias[3]??0];let p=t.format!==void 0?t.format:"RGBA",o=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",r=n*a,i=o==="RGBA"?new Float32Array(r*4):new Float32Array(r*3),s=4,c=0,h=1,m=2,b=3,w=0,x=r,_=r*2,S=-1;p==="RGB"&&(s=3,c=0,h=1,m=2,b=-1),o==="RGBA"?S=r*3:o==="RBG"?(w=0,_=r,x=r*2):o==="BGR"&&(_=0,x=r,w=r*2);for(let I=0;I<r;I++,c+=s,m+=s,h+=s,b+=s)i[w++]=(e[c]+l[0])/d[0],i[x++]=(e[h]+l[1])/d[1],i[_++]=(e[m]+l[2])/d[2],S!==-1&&b!==-1&&(i[S++]=(e[b]+l[3])/d[3]);return o==="RGBA"?new dt("float32",i,[1,4,n,a]):new dt("float32",i,[1,3,n,a])},Zp=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,a=typeof ImageData<"u"&&e instanceof ImageData,u=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,d=typeof e=="string",l,p=t??{},o=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},r=i=>typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||i instanceof OffscreenCanvas?i.getContext("2d"):null;if(n){let i=o();i.width=e.width,i.height=e.height;let s=r(i);if(s!=null){let c=e.height,h=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(c=t.resizedHeight,h=t.resizedWidth),t!==void 0){if(p=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");p.tensorFormat="RGBA",p.height=c,p.width=h}else p.tensorFormat="RGBA",p.height=c,p.width=h;s.drawImage(e,0,0),l=s.getImageData(0,0,h,c).data}else throw new Error("Can not access image data")}else if(a){let i,s;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(i=t.resizedHeight,s=t.resizedWidth):(i=e.height,s=e.width),t!==void 0&&(p=t),p.format="RGBA",p.height=i,p.width=s,t!==void 0){let c=o();c.width=s,c.height=i;let h=r(c);if(h!=null)h.putImageData(e,0,0),l=h.getImageData(0,0,s,i).data;else throw new Error("Can not access image data")}else l=e.data}else if(u){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let i=o();i.width=e.width,i.height=e.height;let s=r(i);if(s!=null){let c=e.height,h=e.width;return s.drawImage(e,0,0,h,c),l=s.getImageData(0,0,h,c).data,p.height=c,p.width=h,Ds(l,p)}else throw new Error("Can not access image data")}else{if(d)return new Promise((i,s)=>{let c=o(),h=r(c);if(!e||!h)return s();let m=new Image;m.crossOrigin="Anonymous",m.src=e,m.onload=()=>{c.width=m.width,c.height=m.height,h.drawImage(m,0,0,c.width,c.height);let b=h.getImageData(0,0,c.width,c.height);p.height=c.height,p.width=c.width,i(Ds(b.data,p))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(l!==void 0)return Ds(l,p);throw new Error("Input data provided is not supported - aborted tensor creation")},Jp=(e,t)=>{let{width:n,height:a,download:u,dispose:d}=t,l=[1,a,n,4];return new dt({location:"texture",type:"float32",texture:e,dims:l,download:u,dispose:d})},Qp=(e,t)=>{let{dataType:n,dims:a,download:u,dispose:d}=t;return new dt({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:a,download:u,dispose:d})},Yp=(e,t)=>{let{dataType:n,dims:a,download:u,dispose:d}=t;return new dt({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:a,download:u,dispose:d})},ef=(e,t,n)=>new dt({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),Ar,_o,nf,rf,of=N(()=>{Ar=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),_o=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),nf=!1,rf=()=>{if(!nf){nf=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,a=typeof n<"u"&&n.from;e&&(Ar.set("int64",BigInt64Array),_o.set(BigInt64Array,"int64")),t&&(Ar.set("uint64",BigUint64Array),_o.set(BigUint64Array,"uint64")),a?(Ar.set("float16",n),_o.set(n,"float16")):Ar.set("float16",Uint16Array)}}}),af,sf,uf=N(()=>{ci(),af=e=>{let t=1;for(let n=0;n<e.length;n++){let a=e[n];if(typeof a!="number"||!Number.isSafeInteger(a))throw new TypeError(`dims[${n}] must be an integer, got: ${a}`);if(a<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${a}`);t*=a}return t},sf=(e,t)=>{switch(e.location){case"cpu":return new dt(e.type,e.data,t);case"cpu-pinned":return new dt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new dt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new dt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new dt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),dt,ci=N(()=>{Xp(),tf(),of(),uf(),dt=class{constructor(e,t,n){rf();let a,u;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,a=e.type,u=e.dims,e.location){case"cpu-pinned":{let l=Ar.get(a);if(!l)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(e.data instanceof l))throw new TypeError(`buffer should be of type ${l.name}`);this.cpuData=e.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let l,p;if(typeof e=="string")if(a=e,p=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");l=t}else{let o=Ar.get(e);if(o===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&o===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${o.name} as data.`);e==="uint64"||e==="int64"?l=o.from(t,BigInt):l=o.from(t)}else if(t instanceof o)l=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")l=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&o!==Uint16Array)l=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${a} tensor's data must be type of ${o}`)}else if(p=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let o=typeof e[0];if(o==="string")a="string",l=e;else if(o==="boolean")a="bool",l=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${o}.`)}else if(e instanceof Uint8ClampedArray)a="uint8",l=Uint8Array.from(e);else{let o=_o.get(e.constructor);if(o===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);a=o,l=e}if(p===void 0)p=[l.length];else if(!Array.isArray(p))throw new TypeError("A tensor's dims must be a number array");u=p,this.cpuData=l,this.dataLocation="cpu"}let d=af(u);if(this.cpuData&&d!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(d/2)===this.cpuData.length))throw new Error(`Tensor's size(${d}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=u,this.size=d}static async fromImage(e,t){return Zp(e,t)}static fromTexture(e,t){return Jp(e,t)}static fromGpuBuffer(e,t){return Qp(e,t)}static fromMLTensor(e,t){return Yp(e,t)}static fromPinnedBuffer(e,t,n){return ef(e,t,n)}toDataURL(e){return jp(this,e)}toImageData(e){return Kp(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return sf(this,e)}}}),St,ks=N(()=>{ci(),St=dt}),di,lf,$t,yt,sr,ur,Ns=N(()=>{Cs(),di=(e,t)=>{(typeof it.trace>"u"?!it.wasm.trace:!it.trace)||console.timeStamp(`${e}::ORT::${t}`)},lf=(e,t)=>{let n=new Error().stack?.split(/\r\n|\r|\n/g)||[],a=!1;for(let u=0;u<n.length;u++){if(a&&!n[u].includes("TRACE_FUNC")){let d=`FUNC_${e}::${n[u].trim().split(" ")[1]}`;t&&(d+=`::${t}`),di("CPU",d);return}n[u].includes("TRACE_FUNC")&&(a=!0)}},$t=e=>{(typeof it.trace>"u"?!it.wasm.trace:!it.trace)||lf("BEGIN",e)},yt=e=>{(typeof it.trace>"u"?!it.wasm.trace:!it.trace)||lf("END",e)},sr=e=>{(typeof it.trace>"u"?!it.wasm.trace:!it.trace)||console.time(`ORT::${e}`)},ur=e=>{(typeof it.trace>"u"?!it.wasm.trace:!it.trace)||console.timeEnd(`ORT::${e}`)}}),pi,cf=N(()=>{Es(),ks(),Ns(),pi=class bd{constructor(t){this.handler=t}async run(t,n,a){$t(),sr("InferenceSession.run");let u={},d={};if(typeof t!="object"||t===null||t instanceof St||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let l=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof St)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");l=!1;for(let r of n){if(typeof r!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(r)===-1)throw new RangeError(`'fetches' contains invalid output name: ${r}.`);u[r]=null}if(typeof a=="object"&&a!==null)d=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let r=!1,i=Object.getOwnPropertyNames(n);for(let s of this.outputNames)if(i.indexOf(s)!==-1){let c=n[s];(c===null||c instanceof St)&&(r=!0,l=!1,u[s]=c)}if(r){if(typeof a=="object"&&a!==null)d=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else d=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let r of this.inputNames)if(typeof t[r]>"u")throw new Error(`input '${r}' is missing in 'feeds'.`);if(l)for(let r of this.outputNames)u[r]=null;let p=await this.handler.run(t,u,d),o={};for(let r in p)if(Object.hasOwnProperty.call(p,r)){let i=p[r];i instanceof St?o[r]=i:o[r]=new St(i.type,i.data,i.dims)}return ur("InferenceSession.run"),yt(),o}async release(){return this.handler.dispose()}static async create(t,n,a,u){$t(),sr("InferenceSession.create");let d,l={};if(typeof t=="string"){if(d=t,typeof n=="object"&&n!==null)l=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(d=t,typeof n=="object"&&n!==null)l=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let i=t,s=0,c=t.byteLength;if(typeof n=="object"&&n!==null)l=n;else if(typeof n=="number"){if(s=n,!Number.isSafeInteger(s))throw new RangeError("'byteOffset' must be an integer.");if(s<0||s>=i.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${i.byteLength}).`);if(c=t.byteLength-s,typeof a=="number"){if(c=a,!Number.isSafeInteger(c))throw new RangeError("'byteLength' must be an integer.");if(c<=0||s+c>i.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${i.byteLength-s}].`);if(typeof u=="object"&&u!==null)l=u;else if(typeof u<"u")throw new TypeError("'options' must be an object.")}else if(typeof a<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");d=new Uint8Array(i,s,c)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[p,o]=await Vp(l),r=await p.createInferenceSessionHandler(d,o);return ur("InferenceSession.create"),yt(),new bd(r)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),sI,df=N(()=>{cf(),sI=pi}),pf=N(()=>{}),ff=N(()=>{}),hf=N(()=>{}),mf=N(()=>{}),Ls={};Sr(Ls,{InferenceSession:()=>sI,TRACE:()=>di,TRACE_EVENT_BEGIN:()=>sr,TRACE_EVENT_END:()=>ur,TRACE_FUNC_BEGIN:()=>$t,TRACE_FUNC_END:()=>yt,Tensor:()=>St,env:()=>pe,registerBackend:()=>ar});var pt=N(()=>{Gp(),qp(),df(),ks(),pf(),ff(),Ns(),hf(),mf()});function lr(e,t,n,a){if(t===void 0)return lI(e);if(n===void 0)fi(e,t);else if(typeof n=="number"&&a===void 0)fi(e,t);else if(typeof n=="string"&&a===void 0)fi(e,n,1,t);else if(typeof n=="string"&&typeof a=="number")fi(e,n,a,t);else throw new TypeError("input is valid")}function lI(e){return{verbose:lr.verbose.bind(null,e),info:lr.info.bind(null,e),warning:lr.warning.bind(null,e),error:lr.error.bind(null,e),fatal:lr.fatal.bind(null,e)}}function fi(e,t,n,a){let u=wo[a||""]||wo[""];bf[e]<bf[u.minimalSeverity]||(u.logDateTime&&(t=`${new Date().toISOString()}|${t}`),u.logSourceLocation,uI[u.provider].log(e,t,a))}var Rs,zs,bf,uI,yf,wo,ze,mi,gi,bi,hi,Ct=N(()=>{Rs=class{log(e,t,n){}},zs=class{log(e,t,n){console.log(`${this.color(e)} ${n?"\x1B[35m"+n+"\x1B[0m ":""}${t}`)}color(e){switch(e){case"verbose":return"\x1B[34;40mv\x1B[0m";case"info":return"\x1B[32mi\x1B[0m";case"warning":return"\x1B[30;43mw\x1B[0m";case"error":return"\x1B[31;40me\x1B[0m";case"fatal":return"\x1B[101mf\x1B[0m";default:throw new Error(`unsupported severity: ${e}`)}}},bf={verbose:1e3,info:2e3,warning:4e3,error:5e3,fatal:6e3},uI={none:new Rs,console:new zs},yf={provider:"console",minimalSeverity:"warning",logDateTime:!0,logSourceLocation:!1},wo={"":yf},(e=>{function t(r,i){e("verbose",r,i)}e.verbose=t;function n(r,i){e("info",r,i)}e.info=n;function a(r,i){e("warning",r,i)}e.warning=a;function u(r,i){e("error",r,i)}e.error=u;function d(r,i){e("fatal",r,i)}e.fatal=d;function l(r){wo={},p("",r||{})}e.reset=l;function p(r,i){if(r==="*")l(i);else{let s=wo[r]||yf;wo[r]={provider:i.provider||s.provider,minimalSeverity:i.minimalSeverity||s.minimalSeverity,logDateTime:i.logDateTime===void 0?s.logDateTime:i.logDateTime,logSourceLocation:i.logSourceLocation===void 0?s.logSourceLocation:i.logSourceLocation}}}e.set=p;function o(r){let i={};r.logLevel&&(i.minimalSeverity=r.logLevel),p("",i)}e.setWithEnv=o})(lr||={}),ze=lr,mi=class{constructor(e,t,n,a,u,d){this.category=e,this.name=t,this.startTime=n,this.endCallback=a,this.timer=u,this.ctx=d}async end(){return this.endCallback(this)}async checkTimer(){if(this.ctx===void 0||this.timer===void 0)throw new Error("No webgl timer found");return this.ctx.endTimer(),this.ctx.waitForQueryAndGetTime(this.timer)}},gi=class{constructor(e,t,n,a){this.category=e,this.name=t,this.startTime=n,this.endTime=a}},bi=class{constructor(e,t,n){this._started=!1,this._flushPointer=0,this._started=!1,this._maxNumberEvents=e===void 0?1e4:e,this._flushBatchSize=t===void 0?10:t,this._flushIntervalInMilliseconds=n===void 0?5e3:n}static create(e){return e===void 0?new this:new this(e.maxNumberEvents,e.flushBatchSize,e.flushIntervalInMilliseconds)}start(){this._started=!0,this._timingEvents=[],this._flushTime=hi(),this._flushPointer=0}stop(){for(this._started=!1;this._flushPointer<this._timingEvents.length;this._flushPointer++)this.logOneEvent(this._timingEvents[this._flushPointer])}event(e,t,n,a){let u=this._started?this.begin(e,t,a):void 0,d=!1,l=n();if(l&&typeof l.then=="function")return d=!0,new Promise((p,o)=>{l.then(async r=>{u&&await u.end(),p(r)},async r=>{u&&await u.end(),o(r)})});if(!d&&u){let p=u.end();if(p&&typeof p.then=="function")return new Promise((o,r)=>{p.then(()=>{o(l)},i=>{r(i)})})}return l}begin(e,t,n){if(!this._started)throw new Error("profiler is not started yet");if(n===void 0){let a=hi();return this.flush(a),new mi(e,t,a,u=>this.endSync(u))}else{let a=n.beginTimer();return new mi(e,t,0,async u=>this.end(u),a,n)}}async end(e){let t=await e.checkTimer();this._timingEvents.length<this._maxNumberEvents&&(this._timingEvents.push(new gi(e.category,e.name,e.startTime,t)),this.flush(t))}endSync(e){let t=hi();this._timingEvents.length<this._maxNumberEvents&&(this._timingEvents.push(new gi(e.category,e.name,e.startTime,t)),this.flush(t))}logOneEvent(e){ze.verbose(`Profiler.${e.category}`,`${(e.endTime-e.startTime).toFixed(2)}ms on event '${e.name}' at ${e.endTime.toFixed(2)}`)}flush(e){if(this._timingEvents.length-this._flushPointer>=this._flushBatchSize||e-this._flushTime>=this._flushIntervalInMilliseconds){for(let t=this._flushPointer;this._flushPointer<t+this._flushBatchSize&&this._flushPointer<this._timingEvents.length;this._flushPointer++)this.logOneEvent(this._timingEvents[this._flushPointer]);this._flushTime=hi()}}get started(){return this._started}},hi=typeof performance<"u"&&performance.now?()=>performance.now():Date.now});function _f(e,t,n){for(let a of n){let u=a[0],d=a[1],l=a[2],p=a[3],o=a[4];if(e.opType===u){for(let r of t)if((r.domain===d||r.domain==="ai.onnx"&&d==="")&&cI(r.version,l))return{opImpl:p,opInit:o}}}throw new TypeError(`cannot resolve operator '${e.opType}' with opsets: ${t.map(a=>`${a.domain||"ai.onnx"} v${a.version}`).join(", ")}`)}function cI(e,t){if(t.endsWith("+")){let n=Number.parseInt(t.substring(0,t.length-1),10);return!isNaN(n)&&n<=e}else if(t.split("-").length===2){let n=t.split("-"),a=Number.parseInt(n[0],10),u=Number.parseInt(n[1],10);return!isNaN(a)&&!isNaN(u)&&a<=e&&e<=u}else return Number.parseInt(t,10)===e}var wf=N(()=>{}),vf=oe(e=>{e.__esModule=!0;var t=(function(){function n(a){if(!a)throw new TypeError("Invalid argument; `value` has no value.");this.value=n.EMPTY,a&&n.isGuid(a)&&(this.value=a)}return n.isGuid=function(a){var u=a.toString();return a&&(a instanceof n||n.validator.test(u))},n.create=function(){return new n([n.gen(2),n.gen(1),n.gen(1),n.gen(1),n.gen(3)].join("-"))},n.createEmpty=function(){return new n("emptyguid")},n.parse=function(a){return new n(a)},n.raw=function(){return[n.gen(2),n.gen(1),n.gen(1),n.gen(1),n.gen(3)].join("-")},n.gen=function(a){for(var u="",d=0;d<a;d++)u+=((1+Math.random())*65536|0).toString(16).substring(1);return u},n.prototype.equals=function(a){return n.isGuid(a)&&this.value===a.toString()},n.prototype.isEmpty=function(){return this.value===n.EMPTY},n.prototype.toString=function(){return this.value},n.prototype.toJSON=function(){return{value:this.value}},n.validator=new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$","i"),n.EMPTY="00000000-0000-0000-0000-000000000000",n})();e.Guid=t});function He(e,t,n){this.low=e|0,this.high=t|0,this.unsigned=!!n}function mt(e){return(e&&e.__isLong__)===!0}function xf(e){var t=Math.clz32(e&-e);return e?31-t:t}function Or(e,t){var n,a,u;return t?(e>>>=0,(u=0<=e&&e<256)&&(a=If[e],a)?a:(n=ke(e,0,!0),u&&(If[e]=n),n)):(e|=0,(u=-128<=e&&e<128)&&(a=Tf[e],a)?a:(n=ke(e,e<0?-1:0,!1),u&&(Tf[e]=n),n))}function kt(e,t){if(isNaN(e))return t?Jn:Ut;if(t){if(e<0)return Jn;if(e>=Of)return Cf}else{if(e<=-$f)return _t;if(e+1>=$f)return Ef}return e<0?kt(-e,t).neg():ke(e%Jr|0,e/Jr|0,t)}function ke(e,t,n){return new He(e,t,n)}function Fs(e,t,n){if(e.length===0)throw Error("empty string");if(typeof t=="number"?(n=t,t=!1):t=!!t,e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return t?Jn:Ut;if(n=n||10,n<2||36<n)throw RangeError("radix");var a;if((a=e.indexOf("-"))>0)throw Error("interior hyphen");if(a===0)return Fs(e.substring(1),t,n).neg();for(var u=kt(yi(n,8)),d=Ut,l=0;l<e.length;l+=8){var p=Math.min(8,e.length-l),o=parseInt(e.substring(l,l+p),n);if(p<8){var r=kt(yi(n,p));d=d.mul(r).add(kt(o))}else d=d.mul(u),d=d.add(kt(o))}return d.unsigned=t,d}function Wt(e,t){return typeof e=="number"?kt(e,t):typeof e=="string"?Fs(e,t):ke(e.low,e.high,typeof t=="boolean"?t:e.unsigned)}var Dt,Tf,If,yi,Sf,pI,Jr,Of,$f,Af,Ut,Jn,Zr,Pf,Bs,Ef,Cf,_t,H,cr,Vs=N(()=>{Dt=null;try{Dt=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}He.prototype.__isLong__,Object.defineProperty(He.prototype,"__isLong__",{value:!0}),He.isLong=mt,Tf={},If={},He.fromInt=Or,He.fromNumber=kt,He.fromBits=ke,yi=Math.pow,He.fromString=Fs,He.fromValue=Wt,Sf=65536,pI=1<<24,Jr=Sf*Sf,Of=Jr*Jr,$f=Of/2,Af=Or(pI),Ut=Or(0),He.ZERO=Ut,Jn=Or(0,!0),He.UZERO=Jn,Zr=Or(1),He.ONE=Zr,Pf=Or(1,!0),He.UONE=Pf,Bs=Or(-1),He.NEG_ONE=Bs,Ef=ke(-1,2147483647,!1),He.MAX_VALUE=Ef,Cf=ke(-1,-1,!0),He.MAX_UNSIGNED_VALUE=Cf,_t=ke(0,-2147483648,!1),He.MIN_VALUE=_t,H=He.prototype,H.toInt=function(){return this.unsigned?this.low>>>0:this.low},H.toNumber=function(){return this.unsigned?(this.high>>>0)*Jr+(this.low>>>0):this.high*Jr+(this.low>>>0)},H.toString=function(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(_t)){var t=kt(e),n=this.div(t),a=n.mul(t).sub(this);return n.toString(e)+a.toInt().toString(e)}else return"-"+this.neg().toString(e);for(var u=kt(yi(e,6),this.unsigned),d=this,l="";;){var p=d.div(u),o=d.sub(p.mul(u)).toInt()>>>0,r=o.toString(e);if(d=p,d.isZero())return r+l;for(;r.length<6;)r="0"+r;l=""+r+l}},H.getHighBits=function(){return this.high},H.getHighBitsUnsigned=function(){return this.high>>>0},H.getLowBits=function(){return this.low},H.getLowBitsUnsigned=function(){return this.low>>>0},H.getNumBitsAbs=function(){if(this.isNegative())return this.eq(_t)?64:this.neg().getNumBitsAbs();for(var e=this.high!=0?this.high:this.low,t=31;t>0&&(e&1<<t)==0;t--);return this.high!=0?t+33:t+1},H.isZero=function(){return this.high===0&&this.low===0},H.eqz=H.isZero,H.isNegative=function(){return!this.unsigned&&this.high<0},H.isPositive=function(){return this.unsigned||this.high>=0},H.isOdd=function(){return(this.low&1)===1},H.isEven=function(){return(this.low&1)===0},H.equals=function(e){return mt(e)||(e=Wt(e)),this.unsigned!==e.unsigned&&this.high>>>31===1&&e.high>>>31===1?!1:this.high===e.high&&this.low===e.low},H.eq=H.equals,H.notEquals=function(e){return!this.eq(e)},H.neq=H.notEquals,H.ne=H.notEquals,H.lessThan=function(e){return this.comp(e)<0},H.lt=H.lessThan,H.lessThanOrEqual=function(e){return this.comp(e)<=0},H.lte=H.lessThanOrEqual,H.le=H.lessThanOrEqual,H.greaterThan=function(e){return this.comp(e)>0},H.gt=H.greaterThan,H.greaterThanOrEqual=function(e){return this.comp(e)>=0},H.gte=H.greaterThanOrEqual,H.ge=H.greaterThanOrEqual,H.compare=function(e){if(mt(e)||(e=Wt(e)),this.eq(e))return 0;var t=this.isNegative(),n=e.isNegative();return t&&!n?-1:!t&&n?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},H.comp=H.compare,H.negate=function(){return!this.unsigned&&this.eq(_t)?_t:this.not().add(Zr)},H.neg=H.negate,H.add=function(e){mt(e)||(e=Wt(e));var t=this.high>>>16,n=this.high&65535,a=this.low>>>16,u=this.low&65535,d=e.high>>>16,l=e.high&65535,p=e.low>>>16,o=e.low&65535,r=0,i=0,s=0,c=0;return c+=u+o,s+=c>>>16,c&=65535,s+=a+p,i+=s>>>16,s&=65535,i+=n+l,r+=i>>>16,i&=65535,r+=t+d,r&=65535,ke(s<<16|c,r<<16|i,this.unsigned)},H.subtract=function(e){return mt(e)||(e=Wt(e)),this.add(e.neg())},H.sub=H.subtract,H.multiply=function(e){if(this.isZero())return this;if(mt(e)||(e=Wt(e)),Dt){var t=Dt.mul(this.low,this.high,e.low,e.high);return ke(t,Dt.get_high(),this.unsigned)}if(e.isZero())return this.unsigned?Jn:Ut;if(this.eq(_t))return e.isOdd()?_t:Ut;if(e.eq(_t))return this.isOdd()?_t:Ut;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(Af)&&e.lt(Af))return kt(this.toNumber()*e.toNumber(),this.unsigned);var n=this.high>>>16,a=this.high&65535,u=this.low>>>16,d=this.low&65535,l=e.high>>>16,p=e.high&65535,o=e.low>>>16,r=e.low&65535,i=0,s=0,c=0,h=0;return h+=d*r,c+=h>>>16,h&=65535,c+=u*r,s+=c>>>16,c&=65535,c+=d*o,s+=c>>>16,c&=65535,s+=a*r,i+=s>>>16,s&=65535,s+=u*o,i+=s>>>16,s&=65535,s+=d*p,i+=s>>>16,s&=65535,i+=n*r+a*o+u*p+d*l,i&=65535,ke(c<<16|h,i<<16|s,this.unsigned)},H.mul=H.multiply,H.divide=function(e){if(mt(e)||(e=Wt(e)),e.isZero())throw Error("division by zero");if(Dt){if(!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1)return this;var t=(this.unsigned?Dt.div_u:Dt.div_s)(this.low,this.high,e.low,e.high);return ke(t,Dt.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?Jn:Ut;var n,a,u;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return Jn;if(e.gt(this.shru(1)))return Pf;u=Jn}else{if(this.eq(_t)){if(e.eq(Zr)||e.eq(Bs))return _t;if(e.eq(_t))return Zr;var d=this.shr(1);return n=d.div(e).shl(1),n.eq(Ut)?e.isNegative()?Zr:Bs:(a=this.sub(e.mul(n)),u=n.add(a.div(e)),u)}else if(e.eq(_t))return this.unsigned?Jn:Ut;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();u=Ut}for(a=this;a.gte(e);){n=Math.max(1,Math.floor(a.toNumber()/e.toNumber()));for(var l=Math.ceil(Math.log(n)/Math.LN2),p=l<=48?1:yi(2,l-48),o=kt(n),r=o.mul(e);r.isNegative()||r.gt(a);)n-=p,o=kt(n,this.unsigned),r=o.mul(e);o.isZero()&&(o=Zr),u=u.add(o),a=a.sub(r)}return u},H.div=H.divide,H.modulo=function(e){if(mt(e)||(e=Wt(e)),Dt){var t=(this.unsigned?Dt.rem_u:Dt.rem_s)(this.low,this.high,e.low,e.high);return ke(t,Dt.get_high(),this.unsigned)}return this.sub(this.div(e).mul(e))},H.mod=H.modulo,H.rem=H.modulo,H.not=function(){return ke(~this.low,~this.high,this.unsigned)},H.countLeadingZeros=function(){return this.high?Math.clz32(this.high):Math.clz32(this.low)+32},H.clz=H.countLeadingZeros,H.countTrailingZeros=function(){return this.low?xf(this.low):xf(this.high)+32},H.ctz=H.countTrailingZeros,H.and=function(e){return mt(e)||(e=Wt(e)),ke(this.low&e.low,this.high&e.high,this.unsigned)},H.or=function(e){return mt(e)||(e=Wt(e)),ke(this.low|e.low,this.high|e.high,this.unsigned)},H.xor=function(e){return mt(e)||(e=Wt(e)),ke(this.low^e.low,this.high^e.high,this.unsigned)},H.shiftLeft=function(e){return mt(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?ke(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):ke(0,this.low<<e-32,this.unsigned)},H.shl=H.shiftLeft,H.shiftRight=function(e){return mt(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?ke(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):ke(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},H.shr=H.shiftRight,H.shiftRightUnsigned=function(e){return mt(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?ke(this.low>>>e|this.high<<32-e,this.high>>>e,this.unsigned):e===32?ke(this.high,0,this.unsigned):ke(this.high>>>e-32,0,this.unsigned)},H.shru=H.shiftRightUnsigned,H.shr_u=H.shiftRightUnsigned,H.rotateLeft=function(e){var t;return mt(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?ke(this.high,this.low,this.unsigned):e<32?(t=32-e,ke(this.low<<e|this.high>>>t,this.high<<e|this.low>>>t,this.unsigned)):(e-=32,t=32-e,ke(this.high<<e|this.low>>>t,this.low<<e|this.high>>>t,this.unsigned))},H.rotl=H.rotateLeft,H.rotateRight=function(e){var t;return mt(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?ke(this.high,this.low,this.unsigned):e<32?(t=32-e,ke(this.high<<t|this.low>>>e,this.low<<t|this.high>>>e,this.unsigned)):(e-=32,t=32-e,ke(this.low<<t|this.high>>>e,this.high<<t|this.low>>>e,this.unsigned))},H.rotr=H.rotateRight,H.toSigned=function(){return this.unsigned?ke(this.low,this.high,!1):this},H.toUnsigned=function(){return this.unsigned?this:ke(this.low,this.high,!0)},H.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},H.toBytesLE=function(){var e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]},H.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,t>>>24,t>>>16&255,t>>>8&255,t&255]},He.fromBytes=function(e,t,n){return n?He.fromBytesLE(e,t):He.fromBytesBE(e,t)},He.fromBytesLE=function(e,t){return new He(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},He.fromBytesBE=function(e,t){return new He(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)},cr=He}),Gs=oe(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ArgType=void 0;var t;(function(n){n[n.INPUT=0]="INPUT",n[n.OUTPUT=1]="OUTPUT"})(t||(e.ArgType=t={}))}),Pr=oe(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.SIZE_PREFIX_LENGTH=e.FILE_IDENTIFIER_LENGTH=e.SIZEOF_INT=e.SIZEOF_SHORT=void 0,e.SIZEOF_SHORT=2,e.SIZEOF_INT=4,e.FILE_IDENTIFIER_LENGTH=4,e.SIZE_PREFIX_LENGTH=4}),Us=oe(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.isLittleEndian=e.float64=e.float32=e.int32=void 0,e.int32=new Int32Array(2),e.float32=new Float32Array(e.int32.buffer),e.float64=new Float64Array(e.int32.buffer),e.isLittleEndian=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1}),Ws=oe(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Encoding=void 0;var t;(function(n){n[n.UTF8_BYTES=1]="UTF8_BYTES",n[n.UTF16_STRING=2]="UTF16_STRING"})(t||(e.Encoding=t={}))}),qs=oe(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ByteBuffer=void 0;var t=Pr(),n=Us(),a=Ws(),u=class yd{constructor(l){this.bytes_=l,this.position_=0,this.text_decoder_=new TextDecoder}static allocate(l){return new yd(new Uint8Array(l))}clear(){this.position_=0}bytes(){return this.bytes_}position(){return this.position_}setPosition(l){this.position_=l}capacity(){return this.bytes_.length}readInt8(l){return this.readUint8(l)<<24>>24}readUint8(l){return this.bytes_[l]}readInt16(l){return this.readUint16(l)<<16>>16}readUint16(l){return this.bytes_[l]|this.bytes_[l+1]<<8}readInt32(l){return this.bytes_[l]|this.bytes_[l+1]<<8|this.bytes_[l+2]<<16|this.bytes_[l+3]<<24}readUint32(l){return this.readInt32(l)>>>0}readInt64(l){return BigInt.asIntN(64,BigInt(this.readUint32(l))+(BigInt(this.readUint32(l+4))<<BigInt(32)))}readUint64(l){return BigInt.asUintN(64,BigInt(this.readUint32(l))+(BigInt(this.readUint32(l+4))<<BigInt(32)))}readFloat32(l){return n.int32[0]=this.readInt32(l),n.float32[0]}readFloat64(l){return n.int32[n.isLittleEndian?0:1]=this.readInt32(l),n.int32[n.isLittleEndian?1:0]=this.readInt32(l+4),n.float64[0]}writeInt8(l,p){this.bytes_[l]=p}writeUint8(l,p){this.bytes_[l]=p}writeInt16(l,p){this.bytes_[l]=p,this.bytes_[l+1]=p>>8}writeUint16(l,p){this.bytes_[l]=p,this.bytes_[l+1]=p>>8}writeInt32(l,p){this.bytes_[l]=p,this.bytes_[l+1]=p>>8,this.bytes_[l+2]=p>>16,this.bytes_[l+3]=p>>24}writeUint32(l,p){this.bytes_[l]=p,this.bytes_[l+1]=p>>8,this.bytes_[l+2]=p>>16,this.bytes_[l+3]=p>>24}writeInt64(l,p){this.writeInt32(l,Number(BigInt.asIntN(32,p))),this.writeInt32(l+4,Number(BigInt.asIntN(32,p>>BigInt(32))))}writeUint64(l,p){this.writeUint32(l,Number(BigInt.asUintN(32,p))),this.writeUint32(l+4,Number(BigInt.asUintN(32,p>>BigInt(32))))}writeFloat32(l,p){n.float32[0]=p,this.writeInt32(l,n.int32[0])}writeFloat64(l,p){n.float64[0]=p,this.writeInt32(l,n.int32[n.isLittleEndian?0:1]),this.writeInt32(l+4,n.int32[n.isLittleEndian?1:0])}getBufferIdentifier(){if(this.bytes_.length<this.position_+t.SIZEOF_INT+t.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");let l="";for(let p=0;p<t.FILE_IDENTIFIER_LENGTH;p++)l+=String.fromCharCode(this.readInt8(this.position_+t.SIZEOF_INT+p));return l}__offset(l,p){let o=l-this.readInt32(l);return p<this.readInt16(o)?this.readInt16(o+p):0}__union(l,p){return l.bb_pos=p+this.readInt32(p),l.bb=this,l}__string(l,p){l+=this.readInt32(l);let o=this.readInt32(l);l+=t.SIZEOF_INT;let r=this.bytes_.subarray(l,l+o);return p===a.Encoding.UTF8_BYTES?r:this.text_decoder_.decode(r)}__union_with_string(l,p){return typeof l=="string"?this.__string(p):this.__union(l,p)}__indirect(l){return l+this.readInt32(l)}__vector(l){return l+this.readInt32(l)+t.SIZEOF_INT}__vector_len(l){return this.readInt32(l+this.readInt32(l))}__has_identifier(l){if(l.length!=t.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: file identifier must be length "+t.FILE_IDENTIFIER_LENGTH);for(let p=0;p<t.FILE_IDENTIFIER_LENGTH;p++)if(l.charCodeAt(p)!=this.readInt8(this.position()+t.SIZEOF_INT+p))return!1;return!0}createScalarList(l,p){let o=[];for(let r=0;r<p;++r){let i=l(r);i!==null&&o.push(i)}return o}createObjList(l,p){let o=[];for(let r=0;r<p;++r){let i=l(r);i!==null&&o.push(i.unpack())}return o}};e.ByteBuffer=u}),Lf=oe(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Builder=void 0;var t=qs(),n=Pr(),a=class _d{constructor(d){this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null,this.text_encoder=new TextEncoder;let l;d?l=d:l=1024,this.bb=t.ByteBuffer.allocate(l),this.space=l}clear(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null}forceDefaults(d){this.force_defaults=d}dataBuffer(){return this.bb}asUint8Array(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())}prep(d,l){d>this.minalign&&(this.minalign=d);let p=~(this.bb.capacity()-this.space+l)+1&d-1;for(;this.space<p+d+l;){let o=this.bb.capacity();this.bb=_d.growByteBuffer(this.bb),this.space+=this.bb.capacity()-o}this.pad(p)}pad(d){for(let l=0;l<d;l++)this.bb.writeInt8(--this.space,0)}writeInt8(d){this.bb.writeInt8(this.space-=1,d)}writeInt16(d){this.bb.writeInt16(this.space-=2,d)}writeInt32(d){this.bb.writeInt32(this.space-=4,d)}writeInt64(d){this.bb.writeInt64(this.space-=8,d)}writeFloat32(d){this.bb.writeFloat32(this.space-=4,d)}writeFloat64(d){this.bb.writeFloat64(this.space-=8,d)}addInt8(d){this.prep(1,0),this.writeInt8(d)}addInt16(d){this.prep(2,0),this.writeInt16(d)}addInt32(d){this.prep(4,0),this.writeInt32(d)}addInt64(d){this.prep(8,0),this.writeInt64(d)}addFloat32(d){this.prep(4,0),this.writeFloat32(d)}addFloat64(d){this.prep(8,0),this.writeFloat64(d)}addFieldInt8(d,l,p){(this.force_defaults||l!=p)&&(this.addInt8(l),this.slot(d))}addFieldInt16(d,l,p){(this.force_defaults||l!=p)&&(this.addInt16(l),this.slot(d))}addFieldInt32(d,l,p){(this.force_defaults||l!=p)&&(this.addInt32(l),this.slot(d))}addFieldInt64(d,l,p){(this.force_defaults||l!==p)&&(this.addInt64(l),this.slot(d))}addFieldFloat32(d,l,p){(this.force_defaults||l!=p)&&(this.addFloat32(l),this.slot(d))}addFieldFloat64(d,l,p){(this.force_defaults||l!=p)&&(this.addFloat64(l),this.slot(d))}addFieldOffset(d,l,p){(this.force_defaults||l!=p)&&(this.addOffset(l),this.slot(d))}addFieldStruct(d,l,p){l!=p&&(this.nested(l),this.slot(d))}nested(d){if(d!=this.offset())throw new TypeError("FlatBuffers: struct must be serialized inline.")}notNested(){if(this.isNested)throw new TypeError("FlatBuffers: object serialization must not be nested.")}slot(d){this.vtable!==null&&(this.vtable[d]=this.offset())}offset(){return this.bb.capacity()-this.space}static growByteBuffer(d){let l=d.capacity();if(l&3221225472)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");let p=l<<1,o=t.ByteBuffer.allocate(p);return o.setPosition(p-l),o.bytes().set(d.bytes(),p-l),o}addOffset(d){this.prep(n.SIZEOF_INT,0),this.writeInt32(this.offset()-d+n.SIZEOF_INT)}startObject(d){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=d;for(let l=0;l<d;l++)this.vtable[l]=0;this.isNested=!0,this.object_start=this.offset()}endObject(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);let d=this.offset(),l=this.vtable_in_use-1;for(;l>=0&&this.vtable[l]==0;l--);let p=l+1;for(;l>=0;l--)this.addInt16(this.vtable[l]!=0?d-this.vtable[l]:0);let o=2;this.addInt16(d-this.object_start);let r=(p+o)*n.SIZEOF_SHORT;this.addInt16(r);let i=0,s=this.space;e:for(l=0;l<this.vtables.length;l++){let c=this.bb.capacity()-this.vtables[l];if(r==this.bb.readInt16(c)){for(let h=n.SIZEOF_SHORT;h<r;h+=n.SIZEOF_SHORT)if(this.bb.readInt16(s+h)!=this.bb.readInt16(c+h))continue e;i=this.vtables[l];break}}return i?(this.space=this.bb.capacity()-d,this.bb.writeInt32(this.space,i-d)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-d,this.offset()-d)),this.isNested=!1,d}finish(d,l,p){let o=p?n.SIZE_PREFIX_LENGTH:0;if(l){let r=l;if(this.prep(this.minalign,n.SIZEOF_INT+n.FILE_IDENTIFIER_LENGTH+o),r.length!=n.FILE_IDENTIFIER_LENGTH)throw new TypeError("FlatBuffers: file identifier must be length "+n.FILE_IDENTIFIER_LENGTH);for(let i=n.FILE_IDENTIFIER_LENGTH-1;i>=0;i--)this.writeInt8(r.charCodeAt(i))}this.prep(this.minalign,n.SIZEOF_INT+o),this.addOffset(d),o&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)}finishSizePrefixed(d,l){this.finish(d,l,!0)}requiredField(d,l){let p=this.bb.capacity()-d,o=p-this.bb.readInt32(p);if(!(l<this.bb.readInt16(o)&&this.bb.readInt16(o+l)!=0))throw new TypeError("FlatBuffers: field "+l+" must be set")}startVector(d,l,p){this.notNested(),this.vector_num_elems=l,this.prep(n.SIZEOF_INT,d*l),this.prep(p,d*l)}endVector(){return this.writeInt32(this.vector_num_elems),this.offset()}createSharedString(d){if(!d)return 0;if(this.string_maps||(this.string_maps=new Map),this.string_maps.has(d))return this.string_maps.get(d);let l=this.createString(d);return this.string_maps.set(d,l),l}createString(d){if(d==null)return 0;let l;return d instanceof Uint8Array?l=d:l=this.text_encoder.encode(d),this.addInt8(0),this.startVector(1,l.length,1),this.bb.setPosition(this.space-=l.length),this.bb.bytes().set(l,this.space),this.endVector()}createByteVector(d){return d==null?0:(this.startVector(1,d.length,1),this.bb.setPosition(this.space-=d.length),this.bb.bytes().set(d,this.space),this.endVector())}createObjectOffset(d){return d===null?0:typeof d=="string"?this.createString(d):d.pack(this)}createObjectOffsetList(d){let l=[];for(let p=0;p<d.length;++p){let o=d[p];if(o!==null)l.push(this.createObjectOffset(o));else throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.")}return l}createStructOffsetList(d,l){return l(this,d.length),this.createObjectOffsetList(d.slice().reverse()),this.endVector()}};e.Builder=a}),Ne=oe(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ByteBuffer=e.Builder=e.Encoding=e.isLittleEndian=e.float64=e.float32=e.int32=e.SIZE_PREFIX_LENGTH=e.FILE_IDENTIFIER_LENGTH=e.SIZEOF_INT=e.SIZEOF_SHORT=void 0;var t=Pr();Object.defineProperty(e,"SIZEOF_SHORT",{enumerable:!0,get:function(){return t.SIZEOF_SHORT}});var n=Pr();Object.defineProperty(e,"SIZEOF_INT",{enumerable:!0,get:function(){return n.SIZEOF_INT}});var a=Pr();Object.defineProperty(e,"FILE_IDENTIFIER_LENGTH",{enumerable:!0,get:function(){return a.FILE_IDENTIFIER_LENGTH}});var u=Pr();Object.defineProperty(e,"SIZE_PREFIX_LENGTH",{enumerable:!0,get:function(){return u.SIZE_PREFIX_LENGTH}});var d=Us();Object.defineProperty(e,"int32",{enumerable:!0,get:function(){return d.int32}}),Object.defineProperty(e,"float32",{enumerable:!0,get:function(){return d.float32}}),Object.defineProperty(e,"float64",{enumerable:!0,get:function(){return d.float64}}),Object.defineProperty(e,"isLittleEndian",{enumerable:!0,get:function(){return d.isLittleEndian}});var l=Ws();Object.defineProperty(e,"Encoding",{enumerable:!0,get:function(){return l.Encoding}});var p=Lf();Object.defineProperty(e,"Builder",{enumerable:!0,get:function(){return p.Builder}});var o=qs();Object.defineProperty(e,"ByteBuffer",{enumerable:!0,get:function(){return o.ByteBuffer}})}),Xs=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(p,o,r,i){i===void 0&&(i=r);var s=Object.getOwnPropertyDescriptor(o,r);(!s||("get"in s?!o.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return o[r]}}),Object.defineProperty(p,i,s)}:function(p,o,r,i){i===void 0&&(i=r),p[i]=o[r]}),n=e&&e.__setModuleDefault||(Object.create?function(p,o){Object.defineProperty(p,"default",{enumerable:!0,value:o})}:function(p,o){p.default=o}),a=e&&e.__importStar||function(p){if(p&&p.__esModule)return p;var o={};if(p!=null)for(var r in p)r!=="default"&&Object.prototype.hasOwnProperty.call(p,r)&&t(o,p,r);return n(o,p),o};Object.defineProperty(e,"__esModule",{value:!0}),e.ArgTypeAndIndex=void 0;var u=a(Ne()),d=Gs(),l=class Yt{constructor(){this.bb=null,this.bb_pos=0}__init(o,r){return this.bb_pos=o,this.bb=r,this}static getRootAsArgTypeAndIndex(o,r){return(r||new Yt).__init(o.readInt32(o.position())+o.position(),o)}static getSizePrefixedRootAsArgTypeAndIndex(o,r){return o.setPosition(o.position()+u.SIZE_PREFIX_LENGTH),(r||new Yt).__init(o.readInt32(o.position())+o.position(),o)}argType(){let o=this.bb.__offset(this.bb_pos,4);return o?this.bb.readInt8(this.bb_pos+o):d.ArgType.INPUT}index(){let o=this.bb.__offset(this.bb_pos,6);return o?this.bb.readUint32(this.bb_pos+o):0}static startArgTypeAndIndex(o){o.startObject(2)}static addArgType(o,r){o.addFieldInt8(0,r,d.ArgType.INPUT)}static addIndex(o,r){o.addFieldInt32(1,r,0)}static endArgTypeAndIndex(o){return o.endObject()}static createArgTypeAndIndex(o,r,i){return Yt.startArgTypeAndIndex(o),Yt.addArgType(o,r),Yt.addIndex(o,i),Yt.endArgTypeAndIndex(o)}};e.ArgTypeAndIndex=l}),Zs=oe(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.AttributeType=void 0;var t;(function(n){n[n.UNDEFINED=0]="UNDEFINED",n[n.FLOAT=1]="FLOAT",n[n.INT=2]="INT",n[n.STRING=3]="STRING",n[n.TENSOR=4]="TENSOR",n[n.GRAPH=5]="GRAPH",n[n.FLOATS=6]="FLOATS",n[n.INTS=7]="INTS",n[n.STRINGS=8]="STRINGS",n[n.TENSORS=9]="TENSORS",n[n.GRAPHS=10]="GRAPHS",n[n.SPARSE_TENSOR=11]="SPARSE_TENSOR",n[n.SPARSE_TENSORS=12]="SPARSE_TENSORS"})(t||(e.AttributeType=t={}))}),Js=oe(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.NodeType=void 0;var t;(function(n){n[n.Primitive=0]="Primitive",n[n.Fused=1]="Fused"})(t||(e.NodeType=t={}))}),Ys=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(o,r,i,s){s===void 0&&(s=i);var c=Object.getOwnPropertyDescriptor(r,i);(!c||("get"in c?!r.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return r[i]}}),Object.defineProperty(o,s,c)}:function(o,r,i,s){s===void 0&&(s=i),o[s]=r[i]}),n=e&&e.__setModuleDefault||(Object.create?function(o,r){Object.defineProperty(o,"default",{enumerable:!0,value:r})}:function(o,r){o.default=r}),a=e&&e.__importStar||function(o){if(o&&o.__esModule)return o;var r={};if(o!=null)for(var i in o)i!=="default"&&Object.prototype.hasOwnProperty.call(o,i)&&t(r,o,i);return n(r,o),r};Object.defineProperty(e,"__esModule",{value:!0}),e.Node=void 0;var u=a(Ne()),d=eu(),l=Js(),p=class Be{constructor(){this.bb=null,this.bb_pos=0}__init(r,i){return this.bb_pos=r,this.bb=i,this}static getRootAsNode(r,i){return(i||new Be).__init(r.readInt32(r.position())+r.position(),r)}static getSizePrefixedRootAsNode(r,i){return r.setPosition(r.position()+u.SIZE_PREFIX_LENGTH),(i||new Be).__init(r.readInt32(r.position())+r.position(),r)}name(r){let i=this.bb.__offset(this.bb_pos,4);return i?this.bb.__string(this.bb_pos+i,r):null}docString(r){let i=this.bb.__offset(this.bb_pos,6);return i?this.bb.__string(this.bb_pos+i,r):null}domain(r){let i=this.bb.__offset(this.bb_pos,8);return i?this.bb.__string(this.bb_pos+i,r):null}sinceVersion(){let r=this.bb.__offset(this.bb_pos,10);return r?this.bb.readInt32(this.bb_pos+r):0}index(){let r=this.bb.__offset(this.bb_pos,12);return r?this.bb.readUint32(this.bb_pos+r):0}opType(r){let i=this.bb.__offset(this.bb_pos,14);return i?this.bb.__string(this.bb_pos+i,r):null}type(){let r=this.bb.__offset(this.bb_pos,16);return r?this.bb.readInt32(this.bb_pos+r):l.NodeType.Primitive}executionProviderType(r){let i=this.bb.__offset(this.bb_pos,18);return i?this.bb.__string(this.bb_pos+i,r):null}inputs(r,i){let s=this.bb.__offset(this.bb_pos,20);return s?this.bb.__string(this.bb.__vector(this.bb_pos+s)+r*4,i):null}inputsLength(){let r=this.bb.__offset(this.bb_pos,20);return r?this.bb.__vector_len(this.bb_pos+r):0}outputs(r,i){let s=this.bb.__offset(this.bb_pos,22);return s?this.bb.__string(this.bb.__vector(this.bb_pos+s)+r*4,i):null}outputsLength(){let r=this.bb.__offset(this.bb_pos,22);return r?this.bb.__vector_len(this.bb_pos+r):0}attributes(r,i){let s=this.bb.__offset(this.bb_pos,24);return s?(i||new d.Attribute).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+s)+r*4),this.bb):null}attributesLength(){let r=this.bb.__offset(this.bb_pos,24);return r?this.bb.__vector_len(this.bb_pos+r):0}inputArgCounts(r){let i=this.bb.__offset(this.bb_pos,26);return i?this.bb.readInt32(this.bb.__vector(this.bb_pos+i)+r*4):0}inputArgCountsLength(){let r=this.bb.__offset(this.bb_pos,26);return r?this.bb.__vector_len(this.bb_pos+r):0}inputArgCountsArray(){let r=this.bb.__offset(this.bb_pos,26);return r?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+r),this.bb.__vector_len(this.bb_pos+r)):null}implicitInputs(r,i){let s=this.bb.__offset(this.bb_pos,28);return s?this.bb.__string(this.bb.__vector(this.bb_pos+s)+r*4,i):null}implicitInputsLength(){let r=this.bb.__offset(this.bb_pos,28);return r?this.bb.__vector_len(this.bb_pos+r):0}static startNode(r){r.startObject(13)}static addName(r,i){r.addFieldOffset(0,i,0)}static addDocString(r,i){r.addFieldOffset(1,i,0)}static addDomain(r,i){r.addFieldOffset(2,i,0)}static addSinceVersion(r,i){r.addFieldInt32(3,i,0)}static addIndex(r,i){r.addFieldInt32(4,i,0)}static addOpType(r,i){r.addFieldOffset(5,i,0)}static addType(r,i){r.addFieldInt32(6,i,l.NodeType.Primitive)}static addExecutionProviderType(r,i){r.addFieldOffset(7,i,0)}static addInputs(r,i){r.addFieldOffset(8,i,0)}static createInputsVector(r,i){r.startVector(4,i.length,4);for(let s=i.length-1;s>=0;s--)r.addOffset(i[s]);return r.endVector()}static startInputsVector(r,i){r.startVector(4,i,4)}static addOutputs(r,i){r.addFieldOffset(9,i,0)}static createOutputsVector(r,i){r.startVector(4,i.length,4);for(let s=i.length-1;s>=0;s--)r.addOffset(i[s]);return r.endVector()}static startOutputsVector(r,i){r.startVector(4,i,4)}static addAttributes(r,i){r.addFieldOffset(10,i,0)}static createAttributesVector(r,i){r.startVector(4,i.length,4);for(let s=i.length-1;s>=0;s--)r.addOffset(i[s]);return r.endVector()}static startAttributesVector(r,i){r.startVector(4,i,4)}static addInputArgCounts(r,i){r.addFieldOffset(11,i,0)}static createInputArgCountsVector(r,i){r.startVector(4,i.length,4);for(let s=i.length-1;s>=0;s--)r.addInt32(i[s]);return r.endVector()}static startInputArgCountsVector(r,i){r.startVector(4,i,4)}static addImplicitInputs(r,i){r.addFieldOffset(12,i,0)}static createImplicitInputsVector(r,i){r.startVector(4,i.length,4);for(let s=i.length-1;s>=0;s--)r.addOffset(i[s]);return r.endVector()}static startImplicitInputsVector(r,i){r.startVector(4,i,4)}static endNode(r){return r.endObject()}static createNode(r,i,s,c,h,m,b,w,x,_,S,I,O,A){return Be.startNode(r),Be.addName(r,i),Be.addDocString(r,s),Be.addDomain(r,c),Be.addSinceVersion(r,h),Be.addIndex(r,m),Be.addOpType(r,b),Be.addType(r,w),Be.addExecutionProviderType(r,x),Be.addInputs(r,_),Be.addOutputs(r,S),Be.addAttributes(r,I),Be.addInputArgCounts(r,O),Be.addImplicitInputs(r,A),Be.endNode(r)}};e.Node=p}),nu=oe(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.EdgeEnd=void 0;var t=class{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}nodeIndex(){return this.bb.readUint32(this.bb_pos)}srcArgIndex(){return this.bb.readInt32(this.bb_pos+4)}dstArgIndex(){return this.bb.readInt32(this.bb_pos+8)}static sizeOf(){return 12}static createEdgeEnd(n,a,u,d){return n.prep(4,12),n.writeInt32(d),n.writeInt32(u),n.writeInt32(a),n.offset()}};e.EdgeEnd=t}),ou=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(p,o,r,i){i===void 0&&(i=r);var s=Object.getOwnPropertyDescriptor(o,r);(!s||("get"in s?!o.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return o[r]}}),Object.defineProperty(p,i,s)}:function(p,o,r,i){i===void 0&&(i=r),p[i]=o[r]}),n=e&&e.__setModuleDefault||(Object.create?function(p,o){Object.defineProperty(p,"default",{enumerable:!0,value:o})}:function(p,o){p.default=o}),a=e&&e.__importStar||function(p){if(p&&p.__esModule)return p;var o={};if(p!=null)for(var r in p)r!=="default"&&Object.prototype.hasOwnProperty.call(p,r)&&t(o,p,r);return n(o,p),o};Object.defineProperty(e,"__esModule",{value:!0}),e.NodeEdge=void 0;var u=a(Ne()),d=nu(),l=class Nt{constructor(){this.bb=null,this.bb_pos=0}__init(o,r){return this.bb_pos=o,this.bb=r,this}static getRootAsNodeEdge(o,r){return(r||new Nt).__init(o.readInt32(o.position())+o.position(),o)}static getSizePrefixedRootAsNodeEdge(o,r){return o.setPosition(o.position()+u.SIZE_PREFIX_LENGTH),(r||new Nt).__init(o.readInt32(o.position())+o.position(),o)}nodeIndex(){let o=this.bb.__offset(this.bb_pos,4);return o?this.bb.readUint32(this.bb_pos+o):0}inputEdges(o,r){let i=this.bb.__offset(this.bb_pos,6);return i?(r||new d.EdgeEnd).__init(this.bb.__vector(this.bb_pos+i)+o*12,this.bb):null}inputEdgesLength(){let o=this.bb.__offset(this.bb_pos,6);return o?this.bb.__vector_len(this.bb_pos+o):0}outputEdges(o,r){let i=this.bb.__offset(this.bb_pos,8);return i?(r||new d.EdgeEnd).__init(this.bb.__vector(this.bb_pos+i)+o*12,this.bb):null}outputEdgesLength(){let o=this.bb.__offset(this.bb_pos,8);return o?this.bb.__vector_len(this.bb_pos+o):0}static startNodeEdge(o){o.startObject(3)}static addNodeIndex(o,r){o.addFieldInt32(0,r,0)}static addInputEdges(o,r){o.addFieldOffset(1,r,0)}static startInputEdgesVector(o,r){o.startVector(12,r,4)}static addOutputEdges(o,r){o.addFieldOffset(2,r,0)}static startOutputEdgesVector(o,r){o.startVector(12,r,4)}static endNodeEdge(o){return o.endObject()}static createNodeEdge(o,r,i,s){return Nt.startNodeEdge(o),Nt.addNodeIndex(o,r),Nt.addInputEdges(o,i),Nt.addOutputEdges(o,s),Nt.endNodeEdge(o)}};e.NodeEdge=l}),au=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(l,p,o,r){r===void 0&&(r=o);var i=Object.getOwnPropertyDescriptor(p,o);(!i||("get"in i?!p.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return p[o]}}),Object.defineProperty(l,r,i)}:function(l,p,o,r){r===void 0&&(r=o),l[r]=p[o]}),n=e&&e.__setModuleDefault||(Object.create?function(l,p){Object.defineProperty(l,"default",{enumerable:!0,value:p})}:function(l,p){l.default=p}),a=e&&e.__importStar||function(l){if(l&&l.__esModule)return l;var p={};if(l!=null)for(var o in l)o!=="default"&&Object.prototype.hasOwnProperty.call(l,o)&&t(p,l,o);return n(p,l),p};Object.defineProperty(e,"__esModule",{value:!0}),e.NodesToOptimizeIndices=void 0;var u=a(Ne()),d=class We{constructor(){this.bb=null,this.bb_pos=0}__init(p,o){return this.bb_pos=p,this.bb=o,this}static getRootAsNodesToOptimizeIndices(p,o){return(o||new We).__init(p.readInt32(p.position())+p.position(),p)}static getSizePrefixedRootAsNodesToOptimizeIndices(p,o){return p.setPosition(p.position()+u.SIZE_PREFIX_LENGTH),(o||new We).__init(p.readInt32(p.position())+p.position(),p)}nodeIndices(p){let o=this.bb.__offset(this.bb_pos,4);return o?this.bb.readUint32(this.bb.__vector(this.bb_pos+o)+p*4):0}nodeIndicesLength(){let p=this.bb.__offset(this.bb_pos,4);return p?this.bb.__vector_len(this.bb_pos+p):0}nodeIndicesArray(){let p=this.bb.__offset(this.bb_pos,4);return p?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+p),this.bb.__vector_len(this.bb_pos+p)):null}numInputs(){let p=this.bb.__offset(this.bb_pos,6);return p?this.bb.readUint32(this.bb_pos+p):0}numOutputs(){let p=this.bb.__offset(this.bb_pos,8);return p?this.bb.readUint32(this.bb_pos+p):0}hasVariadicInput(){let p=this.bb.__offset(this.bb_pos,10);return p?!!this.bb.readInt8(this.bb_pos+p):!1}hasVariadicOutput(){let p=this.bb.__offset(this.bb_pos,12);return p?!!this.bb.readInt8(this.bb_pos+p):!1}numVariadicInputs(){let p=this.bb.__offset(this.bb_pos,14);return p?this.bb.readUint32(this.bb_pos+p):0}numVariadicOutputs(){let p=this.bb.__offset(this.bb_pos,16);return p?this.bb.readUint32(this.bb_pos+p):0}static startNodesToOptimizeIndices(p){p.startObject(7)}static addNodeIndices(p,o){p.addFieldOffset(0,o,0)}static createNodeIndicesVector(p,o){p.startVector(4,o.length,4);for(let r=o.length-1;r>=0;r--)p.addInt32(o[r]);return p.endVector()}static startNodeIndicesVector(p,o){p.startVector(4,o,4)}static addNumInputs(p,o){p.addFieldInt32(1,o,0)}static addNumOutputs(p,o){p.addFieldInt32(2,o,0)}static addHasVariadicInput(p,o){p.addFieldInt8(3,+o,0)}static addHasVariadicOutput(p,o){p.addFieldInt8(4,+o,0)}static addNumVariadicInputs(p,o){p.addFieldInt32(5,o,0)}static addNumVariadicOutputs(p,o){p.addFieldInt32(6,o,0)}static endNodesToOptimizeIndices(p){return p.endObject()}static createNodesToOptimizeIndices(p,o,r,i,s,c,h,m){return We.startNodesToOptimizeIndices(p),We.addNodeIndices(p,o),We.addNumInputs(p,r),We.addNumOutputs(p,i),We.addHasVariadicInput(p,s),We.addHasVariadicOutput(p,c),We.addNumVariadicInputs(p,h),We.addNumVariadicOutputs(p,m),We.endNodesToOptimizeIndices(p)}};e.NodesToOptimizeIndices=d}),uu=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(p,o,r,i){i===void 0&&(i=r);var s=Object.getOwnPropertyDescriptor(o,r);(!s||("get"in s?!o.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return o[r]}}),Object.defineProperty(p,i,s)}:function(p,o,r,i){i===void 0&&(i=r),p[i]=o[r]}),n=e&&e.__setModuleDefault||(Object.create?function(p,o){Object.defineProperty(p,"default",{enumerable:!0,value:o})}:function(p,o){p.default=o}),a=e&&e.__importStar||function(p){if(p&&p.__esModule)return p;var o={};if(p!=null)for(var r in p)r!=="default"&&Object.prototype.hasOwnProperty.call(p,r)&&t(o,p,r);return n(o,p),o};Object.defineProperty(e,"__esModule",{value:!0}),e.RuntimeOptimizationRecord=void 0;var u=a(Ne()),d=au(),l=class _i{constructor(){this.bb=null,this.bb_pos=0}__init(o,r){return this.bb_pos=o,this.bb=r,this}static getRootAsRuntimeOptimizationRecord(o,r){return(r||new _i).__init(o.readInt32(o.position())+o.position(),o)}static getSizePrefixedRootAsRuntimeOptimizationRecord(o,r){return o.setPosition(o.position()+u.SIZE_PREFIX_LENGTH),(r||new _i).__init(o.readInt32(o.position())+o.position(),o)}actionId(o){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,o):null}nodesToOptimizeIndices(o){let r=this.bb.__offset(this.bb_pos,6);return r?(o||new d.NodesToOptimizeIndices).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}producedOpIds(o,r){let i=this.bb.__offset(this.bb_pos,10);return i?this.bb.__string(this.bb.__vector(this.bb_pos+i)+o*4,r):null}producedOpIdsLength(){let o=this.bb.__offset(this.bb_pos,10);return o?this.bb.__vector_len(this.bb_pos+o):0}static startRuntimeOptimizationRecord(o){o.startObject(4)}static addActionId(o,r){o.addFieldOffset(0,r,0)}static addNodesToOptimizeIndices(o,r){o.addFieldOffset(1,r,0)}static addProducedOpIds(o,r){o.addFieldOffset(3,r,0)}static createProducedOpIdsVector(o,r){o.startVector(4,r.length,4);for(let i=r.length-1;i>=0;i--)o.addOffset(r[i]);return o.endVector()}static startProducedOpIdsVector(o,r){o.startVector(4,r,4)}static endRuntimeOptimizationRecord(o){return o.endObject()}};e.RuntimeOptimizationRecord=l}),cu=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(p,o,r,i){i===void 0&&(i=r);var s=Object.getOwnPropertyDescriptor(o,r);(!s||("get"in s?!o.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return o[r]}}),Object.defineProperty(p,i,s)}:function(p,o,r,i){i===void 0&&(i=r),p[i]=o[r]}),n=e&&e.__setModuleDefault||(Object.create?function(p,o){Object.defineProperty(p,"default",{enumerable:!0,value:o})}:function(p,o){p.default=o}),a=e&&e.__importStar||function(p){if(p&&p.__esModule)return p;var o={};if(p!=null)for(var r in p)r!=="default"&&Object.prototype.hasOwnProperty.call(p,r)&&t(o,p,r);return n(o,p),o};Object.defineProperty(e,"__esModule",{value:!0}),e.RuntimeOptimizationRecordContainerEntry=void 0;var u=a(Ne()),d=uu(),l=class tr{constructor(){this.bb=null,this.bb_pos=0}__init(o,r){return this.bb_pos=o,this.bb=r,this}static getRootAsRuntimeOptimizationRecordContainerEntry(o,r){return(r||new tr).__init(o.readInt32(o.position())+o.position(),o)}static getSizePrefixedRootAsRuntimeOptimizationRecordContainerEntry(o,r){return o.setPosition(o.position()+u.SIZE_PREFIX_LENGTH),(r||new tr).__init(o.readInt32(o.position())+o.position(),o)}optimizerName(o){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,o):null}runtimeOptimizationRecords(o,r){let i=this.bb.__offset(this.bb_pos,6);return i?(r||new d.RuntimeOptimizationRecord).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+o*4),this.bb):null}runtimeOptimizationRecordsLength(){let o=this.bb.__offset(this.bb_pos,6);return o?this.bb.__vector_len(this.bb_pos+o):0}static startRuntimeOptimizationRecordContainerEntry(o){o.startObject(2)}static addOptimizerName(o,r){o.addFieldOffset(0,r,0)}static addRuntimeOptimizationRecords(o,r){o.addFieldOffset(1,r,0)}static createRuntimeOptimizationRecordsVector(o,r){o.startVector(4,r.length,4);for(let i=r.length-1;i>=0;i--)o.addOffset(r[i]);return o.endVector()}static startRuntimeOptimizationRecordsVector(o,r){o.startVector(4,r,4)}static endRuntimeOptimizationRecordContainerEntry(o){let r=o.endObject();return o.requiredField(r,4),r}static createRuntimeOptimizationRecordContainerEntry(o,r,i){return tr.startRuntimeOptimizationRecordContainerEntry(o),tr.addOptimizerName(o,r),tr.addRuntimeOptimizationRecords(o,i),tr.endRuntimeOptimizationRecordContainerEntry(o)}};e.RuntimeOptimizationRecordContainerEntry=l}),pu=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(p,o,r,i){i===void 0&&(i=r);var s=Object.getOwnPropertyDescriptor(o,r);(!s||("get"in s?!o.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return o[r]}}),Object.defineProperty(p,i,s)}:function(p,o,r,i){i===void 0&&(i=r),p[i]=o[r]}),n=e&&e.__setModuleDefault||(Object.create?function(p,o){Object.defineProperty(p,"default",{enumerable:!0,value:o})}:function(p,o){p.default=o}),a=e&&e.__importStar||function(p){if(p&&p.__esModule)return p;var o={};if(p!=null)for(var r in p)r!=="default"&&Object.prototype.hasOwnProperty.call(p,r)&&t(o,p,r);return n(o,p),o};Object.defineProperty(e,"__esModule",{value:!0}),e.RuntimeOptimizations=void 0;var u=a(Ne()),d=cu(),l=class Er{constructor(){this.bb=null,this.bb_pos=0}__init(o,r){return this.bb_pos=o,this.bb=r,this}static getRootAsRuntimeOptimizations(o,r){return(r||new Er).__init(o.readInt32(o.position())+o.position(),o)}static getSizePrefixedRootAsRuntimeOptimizations(o,r){return o.setPosition(o.position()+u.SIZE_PREFIX_LENGTH),(r||new Er).__init(o.readInt32(o.position())+o.position(),o)}records(o,r){let i=this.bb.__offset(this.bb_pos,4);return i?(r||new d.RuntimeOptimizationRecordContainerEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+o*4),this.bb):null}recordsLength(){let o=this.bb.__offset(this.bb_pos,4);return o?this.bb.__vector_len(this.bb_pos+o):0}static startRuntimeOptimizations(o){o.startObject(1)}static addRecords(o,r){o.addFieldOffset(0,r,0)}static createRecordsVector(o,r){o.startVector(4,r.length,4);for(let i=r.length-1;i>=0;i--)o.addOffset(r[i]);return o.endVector()}static startRecordsVector(o,r){o.startVector(4,r,4)}static endRuntimeOptimizations(o){return o.endObject()}static createRuntimeOptimizations(o,r){return Er.startRuntimeOptimizations(o),Er.addRecords(o,r),Er.endRuntimeOptimizations(o)}};e.RuntimeOptimizations=l}),vo=oe(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.TensorDataType=void 0;var t;(function(n){n[n.UNDEFINED=0]="UNDEFINED",n[n.FLOAT=1]="FLOAT",n[n.UINT8=2]="UINT8",n[n.INT8=3]="INT8",n[n.UINT16=4]="UINT16",n[n.INT16=5]="INT16",n[n.INT32=6]="INT32",n[n.INT64=7]="INT64",n[n.STRING=8]="STRING",n[n.BOOL=9]="BOOL",n[n.FLOAT16=10]="FLOAT16",n[n.DOUBLE=11]="DOUBLE",n[n.UINT32=12]="UINT32",n[n.UINT64=13]="UINT64",n[n.COMPLEX64=14]="COMPLEX64",n[n.COMPLEX128=15]="COMPLEX128",n[n.BFLOAT16=16]="BFLOAT16",n[n.FLOAT8E4M3FN=17]="FLOAT8E4M3FN",n[n.FLOAT8E4M3FNUZ=18]="FLOAT8E4M3FNUZ",n[n.FLOAT8E5M2=19]="FLOAT8E5M2",n[n.FLOAT8E5M2FNUZ=20]="FLOAT8E5M2FNUZ"})(t||(e.TensorDataType=t={}))}),xo=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(p,o,r,i){i===void 0&&(i=r);var s=Object.getOwnPropertyDescriptor(o,r);(!s||("get"in s?!o.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return o[r]}}),Object.defineProperty(p,i,s)}:function(p,o,r,i){i===void 0&&(i=r),p[i]=o[r]}),n=e&&e.__setModuleDefault||(Object.create?function(p,o){Object.defineProperty(p,"default",{enumerable:!0,value:o})}:function(p,o){p.default=o}),a=e&&e.__importStar||function(p){if(p&&p.__esModule)return p;var o={};if(p!=null)for(var r in p)r!=="default"&&Object.prototype.hasOwnProperty.call(p,r)&&t(o,p,r);return n(o,p),o};Object.defineProperty(e,"__esModule",{value:!0}),e.Tensor=void 0;var u=a(Ne()),d=vo(),l=class Ke{constructor(){this.bb=null,this.bb_pos=0}__init(o,r){return this.bb_pos=o,this.bb=r,this}static getRootAsTensor(o,r){return(r||new Ke).__init(o.readInt32(o.position())+o.position(),o)}static getSizePrefixedRootAsTensor(o,r){return o.setPosition(o.position()+u.SIZE_PREFIX_LENGTH),(r||new Ke).__init(o.readInt32(o.position())+o.position(),o)}name(o){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,o):null}docString(o){let r=this.bb.__offset(this.bb_pos,6);return r?this.bb.__string(this.bb_pos+r,o):null}dims(o){let r=this.bb.__offset(this.bb_pos,8);return r?this.bb.readInt64(this.bb.__vector(this.bb_pos+r)+o*8):BigInt(0)}dimsLength(){let o=this.bb.__offset(this.bb_pos,8);return o?this.bb.__vector_len(this.bb_pos+o):0}dataType(){let o=this.bb.__offset(this.bb_pos,10);return o?this.bb.readInt32(this.bb_pos+o):d.TensorDataType.UNDEFINED}rawData(o){let r=this.bb.__offset(this.bb_pos,12);return r?this.bb.readUint8(this.bb.__vector(this.bb_pos+r)+o):0}rawDataLength(){let o=this.bb.__offset(this.bb_pos,12);return o?this.bb.__vector_len(this.bb_pos+o):0}rawDataArray(){let o=this.bb.__offset(this.bb_pos,12);return o?new Uint8Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+o),this.bb.__vector_len(this.bb_pos+o)):null}stringData(o,r){let i=this.bb.__offset(this.bb_pos,14);return i?this.bb.__string(this.bb.__vector(this.bb_pos+i)+o*4,r):null}stringDataLength(){let o=this.bb.__offset(this.bb_pos,14);return o?this.bb.__vector_len(this.bb_pos+o):0}externalDataOffset(){let o=this.bb.__offset(this.bb_pos,16);return o?this.bb.readInt64(this.bb_pos+o):BigInt("-1")}static startTensor(o){o.startObject(7)}static addName(o,r){o.addFieldOffset(0,r,0)}static addDocString(o,r){o.addFieldOffset(1,r,0)}static addDims(o,r){o.addFieldOffset(2,r,0)}static createDimsVector(o,r){o.startVector(8,r.length,8);for(let i=r.length-1;i>=0;i--)o.addInt64(r[i]);return o.endVector()}static startDimsVector(o,r){o.startVector(8,r,8)}static addDataType(o,r){o.addFieldInt32(3,r,d.TensorDataType.UNDEFINED)}static addRawData(o,r){o.addFieldOffset(4,r,0)}static createRawDataVector(o,r){o.startVector(1,r.length,1);for(let i=r.length-1;i>=0;i--)o.addInt8(r[i]);return o.endVector()}static startRawDataVector(o,r){o.startVector(1,r,1)}static addStringData(o,r){o.addFieldOffset(5,r,0)}static createStringDataVector(o,r){o.startVector(4,r.length,4);for(let i=r.length-1;i>=0;i--)o.addOffset(r[i]);return o.endVector()}static startStringDataVector(o,r){o.startVector(4,r,4)}static addExternalDataOffset(o,r){o.addFieldInt64(6,r,BigInt("-1"))}static endTensor(o){return o.endObject()}static createTensor(o,r,i,s,c,h,m,b){return Ke.startTensor(o),Ke.addName(o,r),Ke.addDocString(o,i),Ke.addDims(o,s),Ke.addDataType(o,c),Ke.addRawData(o,h),Ke.addStringData(o,m),Ke.addExternalDataOffset(o,b),Ke.endTensor(o)}};e.Tensor=l}),mu=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(p,o,r,i){i===void 0&&(i=r);var s=Object.getOwnPropertyDescriptor(o,r);(!s||("get"in s?!o.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return o[r]}}),Object.defineProperty(p,i,s)}:function(p,o,r,i){i===void 0&&(i=r),p[i]=o[r]}),n=e&&e.__setModuleDefault||(Object.create?function(p,o){Object.defineProperty(p,"default",{enumerable:!0,value:o})}:function(p,o){p.default=o}),a=e&&e.__importStar||function(p){if(p&&p.__esModule)return p;var o={};if(p!=null)for(var r in p)r!=="default"&&Object.prototype.hasOwnProperty.call(p,r)&&t(o,p,r);return n(o,p),o};Object.defineProperty(e,"__esModule",{value:!0}),e.SparseTensor=void 0;var u=a(Ne()),d=xo(),l=class vi{constructor(){this.bb=null,this.bb_pos=0}__init(o,r){return this.bb_pos=o,this.bb=r,this}static getRootAsSparseTensor(o,r){return(r||new vi).__init(o.readInt32(o.position())+o.position(),o)}static getSizePrefixedRootAsSparseTensor(o,r){return o.setPosition(o.position()+u.SIZE_PREFIX_LENGTH),(r||new vi).__init(o.readInt32(o.position())+o.position(),o)}values(o){let r=this.bb.__offset(this.bb_pos,4);return r?(o||new d.Tensor).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}indices(o){let r=this.bb.__offset(this.bb_pos,6);return r?(o||new d.Tensor).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}dims(o){let r=this.bb.__offset(this.bb_pos,8);return r?this.bb.readInt64(this.bb.__vector(this.bb_pos+r)+o*8):BigInt(0)}dimsLength(){let o=this.bb.__offset(this.bb_pos,8);return o?this.bb.__vector_len(this.bb_pos+o):0}static startSparseTensor(o){o.startObject(3)}static addValues(o,r){o.addFieldOffset(0,r,0)}static addIndices(o,r){o.addFieldOffset(1,r,0)}static addDims(o,r){o.addFieldOffset(2,r,0)}static createDimsVector(o,r){o.startVector(8,r.length,8);for(let i=r.length-1;i>=0;i--)o.addInt64(r[i]);return o.endVector()}static startDimsVector(o,r){o.startVector(8,r,8)}static endSparseTensor(o){return o.endObject()}};e.SparseTensor=l}),bu=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(o,r,i,s){s===void 0&&(s=i);var c=Object.getOwnPropertyDescriptor(r,i);(!c||("get"in c?!r.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return r[i]}}),Object.defineProperty(o,s,c)}:function(o,r,i,s){s===void 0&&(s=i),o[s]=r[i]}),n=e&&e.__setModuleDefault||(Object.create?function(o,r){Object.defineProperty(o,"default",{enumerable:!0,value:r})}:function(o,r){o.default=r}),a=e&&e.__importStar||function(o){if(o&&o.__esModule)return o;var r={};if(o!=null)for(var i in o)i!=="default"&&Object.prototype.hasOwnProperty.call(o,i)&&t(r,o,i);return n(r,o),r};Object.defineProperty(e,"__esModule",{value:!0}),e.MapType=void 0;var u=a(Ne()),d=vo(),l=To(),p=class wi{constructor(){this.bb=null,this.bb_pos=0}__init(r,i){return this.bb_pos=r,this.bb=i,this}static getRootAsMapType(r,i){return(i||new wi).__init(r.readInt32(r.position())+r.position(),r)}static getSizePrefixedRootAsMapType(r,i){return r.setPosition(r.position()+u.SIZE_PREFIX_LENGTH),(i||new wi).__init(r.readInt32(r.position())+r.position(),r)}keyType(){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.readInt32(this.bb_pos+r):d.TensorDataType.UNDEFINED}valueType(r){let i=this.bb.__offset(this.bb_pos,6);return i?(r||new l.TypeInfo).__init(this.bb.__indirect(this.bb_pos+i),this.bb):null}static startMapType(r){r.startObject(2)}static addKeyType(r,i){r.addFieldInt32(0,i,d.TensorDataType.UNDEFINED)}static addValueType(r,i){r.addFieldOffset(1,i,0)}static endMapType(r){return r.endObject()}};e.MapType=p}),_u=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(p,o,r,i){i===void 0&&(i=r);var s=Object.getOwnPropertyDescriptor(o,r);(!s||("get"in s?!o.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return o[r]}}),Object.defineProperty(p,i,s)}:function(p,o,r,i){i===void 0&&(i=r),p[i]=o[r]}),n=e&&e.__setModuleDefault||(Object.create?function(p,o){Object.defineProperty(p,"default",{enumerable:!0,value:o})}:function(p,o){p.default=o}),a=e&&e.__importStar||function(p){if(p&&p.__esModule)return p;var o={};if(p!=null)for(var r in p)r!=="default"&&Object.prototype.hasOwnProperty.call(p,r)&&t(o,p,r);return n(o,p),o};Object.defineProperty(e,"__esModule",{value:!0}),e.SequenceType=void 0;var u=a(Ne()),d=To(),l=class Cr{constructor(){this.bb=null,this.bb_pos=0}__init(o,r){return this.bb_pos=o,this.bb=r,this}static getRootAsSequenceType(o,r){return(r||new Cr).__init(o.readInt32(o.position())+o.position(),o)}static getSizePrefixedRootAsSequenceType(o,r){return o.setPosition(o.position()+u.SIZE_PREFIX_LENGTH),(r||new Cr).__init(o.readInt32(o.position())+o.position(),o)}elemType(o){let r=this.bb.__offset(this.bb_pos,4);return r?(o||new d.TypeInfo).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}static startSequenceType(o){o.startObject(1)}static addElemType(o,r){o.addFieldOffset(0,r,0)}static endSequenceType(o){return o.endObject()}static createSequenceType(o,r){return Cr.startSequenceType(o),Cr.addElemType(o,r),Cr.endSequenceType(o)}};e.SequenceType=l}),wu=oe(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.DimensionValueType=void 0;var t;(function(n){n[n.UNKNOWN=0]="UNKNOWN",n[n.VALUE=1]="VALUE",n[n.PARAM=2]="PARAM"})(t||(e.DimensionValueType=t={}))}),xu=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(p,o,r,i){i===void 0&&(i=r);var s=Object.getOwnPropertyDescriptor(o,r);(!s||("get"in s?!o.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return o[r]}}),Object.defineProperty(p,i,s)}:function(p,o,r,i){i===void 0&&(i=r),p[i]=o[r]}),n=e&&e.__setModuleDefault||(Object.create?function(p,o){Object.defineProperty(p,"default",{enumerable:!0,value:o})}:function(p,o){p.default=o}),a=e&&e.__importStar||function(p){if(p&&p.__esModule)return p;var o={};if(p!=null)for(var r in p)r!=="default"&&Object.prototype.hasOwnProperty.call(p,r)&&t(o,p,r);return n(o,p),o};Object.defineProperty(e,"__esModule",{value:!0}),e.DimensionValue=void 0;var u=a(Ne()),d=wu(),l=class Rt{constructor(){this.bb=null,this.bb_pos=0}__init(o,r){return this.bb_pos=o,this.bb=r,this}static getRootAsDimensionValue(o,r){return(r||new Rt).__init(o.readInt32(o.position())+o.position(),o)}static getSizePrefixedRootAsDimensionValue(o,r){return o.setPosition(o.position()+u.SIZE_PREFIX_LENGTH),(r||new Rt).__init(o.readInt32(o.position())+o.position(),o)}dimType(){let o=this.bb.__offset(this.bb_pos,4);return o?this.bb.readInt8(this.bb_pos+o):d.DimensionValueType.UNKNOWN}dimValue(){let o=this.bb.__offset(this.bb_pos,6);return o?this.bb.readInt64(this.bb_pos+o):BigInt("0")}dimParam(o){let r=this.bb.__offset(this.bb_pos,8);return r?this.bb.__string(this.bb_pos+r,o):null}static startDimensionValue(o){o.startObject(3)}static addDimType(o,r){o.addFieldInt8(0,r,d.DimensionValueType.UNKNOWN)}static addDimValue(o,r){o.addFieldInt64(1,r,BigInt("0"))}static addDimParam(o,r){o.addFieldOffset(2,r,0)}static endDimensionValue(o){return o.endObject()}static createDimensionValue(o,r,i,s){return Rt.startDimensionValue(o),Rt.addDimType(o,r),Rt.addDimValue(o,i),Rt.addDimParam(o,s),Rt.endDimensionValue(o)}};e.DimensionValue=l}),Iu=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(p,o,r,i){i===void 0&&(i=r);var s=Object.getOwnPropertyDescriptor(o,r);(!s||("get"in s?!o.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return o[r]}}),Object.defineProperty(p,i,s)}:function(p,o,r,i){i===void 0&&(i=r),p[i]=o[r]}),n=e&&e.__setModuleDefault||(Object.create?function(p,o){Object.defineProperty(p,"default",{enumerable:!0,value:o})}:function(p,o){p.default=o}),a=e&&e.__importStar||function(p){if(p&&p.__esModule)return p;var o={};if(p!=null)for(var r in p)r!=="default"&&Object.prototype.hasOwnProperty.call(p,r)&&t(o,p,r);return n(o,p),o};Object.defineProperty(e,"__esModule",{value:!0}),e.Dimension=void 0;var u=a(Ne()),d=xu(),l=class rr{constructor(){this.bb=null,this.bb_pos=0}__init(o,r){return this.bb_pos=o,this.bb=r,this}static getRootAsDimension(o,r){return(r||new rr).__init(o.readInt32(o.position())+o.position(),o)}static getSizePrefixedRootAsDimension(o,r){return o.setPosition(o.position()+u.SIZE_PREFIX_LENGTH),(r||new rr).__init(o.readInt32(o.position())+o.position(),o)}value(o){let r=this.bb.__offset(this.bb_pos,4);return r?(o||new d.DimensionValue).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}denotation(o){let r=this.bb.__offset(this.bb_pos,6);return r?this.bb.__string(this.bb_pos+r,o):null}static startDimension(o){o.startObject(2)}static addValue(o,r){o.addFieldOffset(0,r,0)}static addDenotation(o,r){o.addFieldOffset(1,r,0)}static endDimension(o){return o.endObject()}static createDimension(o,r,i){return rr.startDimension(o),rr.addValue(o,r),rr.addDenotation(o,i),rr.endDimension(o)}};e.Dimension=l}),$u=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(p,o,r,i){i===void 0&&(i=r);var s=Object.getOwnPropertyDescriptor(o,r);(!s||("get"in s?!o.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return o[r]}}),Object.defineProperty(p,i,s)}:function(p,o,r,i){i===void 0&&(i=r),p[i]=o[r]}),n=e&&e.__setModuleDefault||(Object.create?function(p,o){Object.defineProperty(p,"default",{enumerable:!0,value:o})}:function(p,o){p.default=o}),a=e&&e.__importStar||function(p){if(p&&p.__esModule)return p;var o={};if(p!=null)for(var r in p)r!=="default"&&Object.prototype.hasOwnProperty.call(p,r)&&t(o,p,r);return n(o,p),o};Object.defineProperty(e,"__esModule",{value:!0}),e.Shape=void 0;var u=a(Ne()),d=Iu(),l=class jr{constructor(){this.bb=null,this.bb_pos=0}__init(o,r){return this.bb_pos=o,this.bb=r,this}static getRootAsShape(o,r){return(r||new jr).__init(o.readInt32(o.position())+o.position(),o)}static getSizePrefixedRootAsShape(o,r){return o.setPosition(o.position()+u.SIZE_PREFIX_LENGTH),(r||new jr).__init(o.readInt32(o.position())+o.position(),o)}dim(o,r){let i=this.bb.__offset(this.bb_pos,4);return i?(r||new d.Dimension).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+o*4),this.bb):null}dimLength(){let o=this.bb.__offset(this.bb_pos,4);return o?this.bb.__vector_len(this.bb_pos+o):0}static startShape(o){o.startObject(1)}static addDim(o,r){o.addFieldOffset(0,r,0)}static createDimVector(o,r){o.startVector(4,r.length,4);for(let i=r.length-1;i>=0;i--)o.addOffset(r[i]);return o.endVector()}static startDimVector(o,r){o.startVector(4,r,4)}static endShape(o){return o.endObject()}static createShape(o,r){return jr.startShape(o),jr.addDim(o,r),jr.endShape(o)}};e.Shape=l}),Ou=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(o,r,i,s){s===void 0&&(s=i);var c=Object.getOwnPropertyDescriptor(r,i);(!c||("get"in c?!r.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return r[i]}}),Object.defineProperty(o,s,c)}:function(o,r,i,s){s===void 0&&(s=i),o[s]=r[i]}),n=e&&e.__setModuleDefault||(Object.create?function(o,r){Object.defineProperty(o,"default",{enumerable:!0,value:r})}:function(o,r){o.default=r}),a=e&&e.__importStar||function(o){if(o&&o.__esModule)return o;var r={};if(o!=null)for(var i in o)i!=="default"&&Object.prototype.hasOwnProperty.call(o,i)&&t(r,o,i);return n(r,o),r};Object.defineProperty(e,"__esModule",{value:!0}),e.TensorTypeAndShape=void 0;var u=a(Ne()),d=$u(),l=vo(),p=class xi{constructor(){this.bb=null,this.bb_pos=0}__init(r,i){return this.bb_pos=r,this.bb=i,this}static getRootAsTensorTypeAndShape(r,i){return(i||new xi).__init(r.readInt32(r.position())+r.position(),r)}static getSizePrefixedRootAsTensorTypeAndShape(r,i){return r.setPosition(r.position()+u.SIZE_PREFIX_LENGTH),(i||new xi).__init(r.readInt32(r.position())+r.position(),r)}elemType(){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.readInt32(this.bb_pos+r):l.TensorDataType.UNDEFINED}shape(r){let i=this.bb.__offset(this.bb_pos,6);return i?(r||new d.Shape).__init(this.bb.__indirect(this.bb_pos+i),this.bb):null}static startTensorTypeAndShape(r){r.startObject(2)}static addElemType(r,i){r.addFieldInt32(0,i,l.TensorDataType.UNDEFINED)}static addShape(r,i){r.addFieldOffset(1,i,0)}static endTensorTypeAndShape(r){return r.endObject()}};e.TensorTypeAndShape=p}),Pu=oe(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.unionListToTypeInfoValue=e.unionToTypeInfoValue=e.TypeInfoValue=void 0;var t=bu(),n=_u(),a=Ou(),u;(function(p){p[p.NONE=0]="NONE",p[p.tensor_type=1]="tensor_type",p[p.sequence_type=2]="sequence_type",p[p.map_type=3]="map_type"})(u||(e.TypeInfoValue=u={}));function d(p,o){switch(u[p]){case"NONE":return null;case"tensor_type":return o(new a.TensorTypeAndShape);case"sequence_type":return o(new n.SequenceType);case"map_type":return o(new t.MapType);default:return null}}e.unionToTypeInfoValue=d;function l(p,o,r){switch(u[p]){case"NONE":return null;case"tensor_type":return o(r,new a.TensorTypeAndShape);case"sequence_type":return o(r,new n.SequenceType);case"map_type":return o(r,new t.MapType);default:return null}}e.unionListToTypeInfoValue=l}),To=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(p,o,r,i){i===void 0&&(i=r);var s=Object.getOwnPropertyDescriptor(o,r);(!s||("get"in s?!o.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return o[r]}}),Object.defineProperty(p,i,s)}:function(p,o,r,i){i===void 0&&(i=r),p[i]=o[r]}),n=e&&e.__setModuleDefault||(Object.create?function(p,o){Object.defineProperty(p,"default",{enumerable:!0,value:o})}:function(p,o){p.default=o}),a=e&&e.__importStar||function(p){if(p&&p.__esModule)return p;var o={};if(p!=null)for(var r in p)r!=="default"&&Object.prototype.hasOwnProperty.call(p,r)&&t(o,p,r);return n(o,p),o};Object.defineProperty(e,"__esModule",{value:!0}),e.TypeInfo=void 0;var u=a(Ne()),d=Pu(),l=class jt{constructor(){this.bb=null,this.bb_pos=0}__init(o,r){return this.bb_pos=o,this.bb=r,this}static getRootAsTypeInfo(o,r){return(r||new jt).__init(o.readInt32(o.position())+o.position(),o)}static getSizePrefixedRootAsTypeInfo(o,r){return o.setPosition(o.position()+u.SIZE_PREFIX_LENGTH),(r||new jt).__init(o.readInt32(o.position())+o.position(),o)}denotation(o){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,o):null}valueType(){let o=this.bb.__offset(this.bb_pos,6);return o?this.bb.readUint8(this.bb_pos+o):d.TypeInfoValue.NONE}value(o){let r=this.bb.__offset(this.bb_pos,8);return r?this.bb.__union(o,this.bb_pos+r):null}static startTypeInfo(o){o.startObject(3)}static addDenotation(o,r){o.addFieldOffset(0,r,0)}static addValueType(o,r){o.addFieldInt8(1,r,d.TypeInfoValue.NONE)}static addValue(o,r){o.addFieldOffset(2,r,0)}static endTypeInfo(o){return o.endObject()}static createTypeInfo(o,r,i,s){return jt.startTypeInfo(o),jt.addDenotation(o,r),jt.addValueType(o,i),jt.addValue(o,s),jt.endTypeInfo(o)}};e.TypeInfo=l}),Du=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(p,o,r,i){i===void 0&&(i=r);var s=Object.getOwnPropertyDescriptor(o,r);(!s||("get"in s?!o.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return o[r]}}),Object.defineProperty(p,i,s)}:function(p,o,r,i){i===void 0&&(i=r),p[i]=o[r]}),n=e&&e.__setModuleDefault||(Object.create?function(p,o){Object.defineProperty(p,"default",{enumerable:!0,value:o})}:function(p,o){p.default=o}),a=e&&e.__importStar||function(p){if(p&&p.__esModule)return p;var o={};if(p!=null)for(var r in p)r!=="default"&&Object.prototype.hasOwnProperty.call(p,r)&&t(o,p,r);return n(o,p),o};Object.defineProperty(e,"__esModule",{value:!0}),e.ValueInfo=void 0;var u=a(Ne()),d=To(),l=class $i{constructor(){this.bb=null,this.bb_pos=0}__init(o,r){return this.bb_pos=o,this.bb=r,this}static getRootAsValueInfo(o,r){return(r||new $i).__init(o.readInt32(o.position())+o.position(),o)}static getSizePrefixedRootAsValueInfo(o,r){return o.setPosition(o.position()+u.SIZE_PREFIX_LENGTH),(r||new $i).__init(o.readInt32(o.position())+o.position(),o)}name(o){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,o):null}docString(o){let r=this.bb.__offset(this.bb_pos,6);return r?this.bb.__string(this.bb_pos+r,o):null}type(o){let r=this.bb.__offset(this.bb_pos,8);return r?(o||new d.TypeInfo).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}static startValueInfo(o){o.startObject(3)}static addName(o,r){o.addFieldOffset(0,r,0)}static addDocString(o,r){o.addFieldOffset(1,r,0)}static addType(o,r){o.addFieldOffset(2,r,0)}static endValueInfo(o){return o.endObject()}};e.ValueInfo=l}),Ei=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(c,h,m,b){b===void 0&&(b=m);var w=Object.getOwnPropertyDescriptor(h,m);(!w||("get"in w?!h.__esModule:w.writable||w.configurable))&&(w={enumerable:!0,get:function(){return h[m]}}),Object.defineProperty(c,b,w)}:function(c,h,m,b){b===void 0&&(b=m),c[b]=h[m]}),n=e&&e.__setModuleDefault||(Object.create?function(c,h){Object.defineProperty(c,"default",{enumerable:!0,value:h})}:function(c,h){c.default=h}),a=e&&e.__importStar||function(c){if(c&&c.__esModule)return c;var h={};if(c!=null)for(var m in c)m!=="default"&&Object.prototype.hasOwnProperty.call(c,m)&&t(h,c,m);return n(h,c),h};Object.defineProperty(e,"__esModule",{value:!0}),e.Graph=void 0;var u=a(Ne()),d=Ys(),l=ou(),p=pu(),o=mu(),r=xo(),i=Du(),s=class Ti{constructor(){this.bb=null,this.bb_pos=0}__init(h,m){return this.bb_pos=h,this.bb=m,this}static getRootAsGraph(h,m){return(m||new Ti).__init(h.readInt32(h.position())+h.position(),h)}static getSizePrefixedRootAsGraph(h,m){return h.setPosition(h.position()+u.SIZE_PREFIX_LENGTH),(m||new Ti).__init(h.readInt32(h.position())+h.position(),h)}initializers(h,m){let b=this.bb.__offset(this.bb_pos,4);return b?(m||new r.Tensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+b)+h*4),this.bb):null}initializersLength(){let h=this.bb.__offset(this.bb_pos,4);return h?this.bb.__vector_len(this.bb_pos+h):0}nodeArgs(h,m){let b=this.bb.__offset(this.bb_pos,6);return b?(m||new i.ValueInfo).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+b)+h*4),this.bb):null}nodeArgsLength(){let h=this.bb.__offset(this.bb_pos,6);return h?this.bb.__vector_len(this.bb_pos+h):0}nodes(h,m){let b=this.bb.__offset(this.bb_pos,8);return b?(m||new d.Node).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+b)+h*4),this.bb):null}nodesLength(){let h=this.bb.__offset(this.bb_pos,8);return h?this.bb.__vector_len(this.bb_pos+h):0}maxNodeIndex(){let h=this.bb.__offset(this.bb_pos,10);return h?this.bb.readUint32(this.bb_pos+h):0}nodeEdges(h,m){let b=this.bb.__offset(this.bb_pos,12);return b?(m||new l.NodeEdge).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+b)+h*4),this.bb):null}nodeEdgesLength(){let h=this.bb.__offset(this.bb_pos,12);return h?this.bb.__vector_len(this.bb_pos+h):0}inputs(h,m){let b=this.bb.__offset(this.bb_pos,14);return b?this.bb.__string(this.bb.__vector(this.bb_pos+b)+h*4,m):null}inputsLength(){let h=this.bb.__offset(this.bb_pos,14);return h?this.bb.__vector_len(this.bb_pos+h):0}outputs(h,m){let b=this.bb.__offset(this.bb_pos,16);return b?this.bb.__string(this.bb.__vector(this.bb_pos+b)+h*4,m):null}outputsLength(){let h=this.bb.__offset(this.bb_pos,16);return h?this.bb.__vector_len(this.bb_pos+h):0}sparseInitializers(h,m){let b=this.bb.__offset(this.bb_pos,18);return b?(m||new o.SparseTensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+b)+h*4),this.bb):null}sparseInitializersLength(){let h=this.bb.__offset(this.bb_pos,18);return h?this.bb.__vector_len(this.bb_pos+h):0}runtimeOptimizations(h){let m=this.bb.__offset(this.bb_pos,20);return m?(h||new p.RuntimeOptimizations).__init(this.bb.__indirect(this.bb_pos+m),this.bb):null}static startGraph(h){h.startObject(9)}static addInitializers(h,m){h.addFieldOffset(0,m,0)}static createInitializersVector(h,m){h.startVector(4,m.length,4);for(let b=m.length-1;b>=0;b--)h.addOffset(m[b]);return h.endVector()}static startInitializersVector(h,m){h.startVector(4,m,4)}static addNodeArgs(h,m){h.addFieldOffset(1,m,0)}static createNodeArgsVector(h,m){h.startVector(4,m.length,4);for(let b=m.length-1;b>=0;b--)h.addOffset(m[b]);return h.endVector()}static startNodeArgsVector(h,m){h.startVector(4,m,4)}static addNodes(h,m){h.addFieldOffset(2,m,0)}static createNodesVector(h,m){h.startVector(4,m.length,4);for(let b=m.length-1;b>=0;b--)h.addOffset(m[b]);return h.endVector()}static startNodesVector(h,m){h.startVector(4,m,4)}static addMaxNodeIndex(h,m){h.addFieldInt32(3,m,0)}static addNodeEdges(h,m){h.addFieldOffset(4,m,0)}static createNodeEdgesVector(h,m){h.startVector(4,m.length,4);for(let b=m.length-1;b>=0;b--)h.addOffset(m[b]);return h.endVector()}static startNodeEdgesVector(h,m){h.startVector(4,m,4)}static addInputs(h,m){h.addFieldOffset(5,m,0)}static createInputsVector(h,m){h.startVector(4,m.length,4);for(let b=m.length-1;b>=0;b--)h.addOffset(m[b]);return h.endVector()}static startInputsVector(h,m){h.startVector(4,m,4)}static addOutputs(h,m){h.addFieldOffset(6,m,0)}static createOutputsVector(h,m){h.startVector(4,m.length,4);for(let b=m.length-1;b>=0;b--)h.addOffset(m[b]);return h.endVector()}static startOutputsVector(h,m){h.startVector(4,m,4)}static addSparseInitializers(h,m){h.addFieldOffset(7,m,0)}static createSparseInitializersVector(h,m){h.startVector(4,m.length,4);for(let b=m.length-1;b>=0;b--)h.addOffset(m[b]);return h.endVector()}static startSparseInitializersVector(h,m){h.startVector(4,m,4)}static addRuntimeOptimizations(h,m){h.addFieldOffset(8,m,0)}static endGraph(h){return h.endObject()}};e.Graph=s}),eu=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(r,i,s,c){c===void 0&&(c=s);var h=Object.getOwnPropertyDescriptor(i,s);(!h||("get"in h?!i.__esModule:h.writable||h.configurable))&&(h={enumerable:!0,get:function(){return i[s]}}),Object.defineProperty(r,c,h)}:function(r,i,s,c){c===void 0&&(c=s),r[c]=i[s]}),n=e&&e.__setModuleDefault||(Object.create?function(r,i){Object.defineProperty(r,"default",{enumerable:!0,value:i})}:function(r,i){r.default=i}),a=e&&e.__importStar||function(r){if(r&&r.__esModule)return r;var i={};if(r!=null)for(var s in r)s!=="default"&&Object.prototype.hasOwnProperty.call(r,s)&&t(i,r,s);return n(i,r),i};Object.defineProperty(e,"__esModule",{value:!0}),e.Attribute=void 0;var u=a(Ne()),d=Zs(),l=Ei(),p=xo(),o=class Ii{constructor(){this.bb=null,this.bb_pos=0}__init(i,s){return this.bb_pos=i,this.bb=s,this}static getRootAsAttribute(i,s){return(s||new Ii).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsAttribute(i,s){return i.setPosition(i.position()+u.SIZE_PREFIX_LENGTH),(s||new Ii).__init(i.readInt32(i.position())+i.position(),i)}name(i){let s=this.bb.__offset(this.bb_pos,4);return s?this.bb.__string(this.bb_pos+s,i):null}docString(i){let s=this.bb.__offset(this.bb_pos,6);return s?this.bb.__string(this.bb_pos+s,i):null}type(){let i=this.bb.__offset(this.bb_pos,8);return i?this.bb.readInt32(this.bb_pos+i):d.AttributeType.UNDEFINED}f(){let i=this.bb.__offset(this.bb_pos,10);return i?this.bb.readFloat32(this.bb_pos+i):0}i(){let i=this.bb.__offset(this.bb_pos,12);return i?this.bb.readInt64(this.bb_pos+i):BigInt("0")}s(i){let s=this.bb.__offset(this.bb_pos,14);return s?this.bb.__string(this.bb_pos+s,i):null}t(i){let s=this.bb.__offset(this.bb_pos,16);return s?(i||new p.Tensor).__init(this.bb.__indirect(this.bb_pos+s),this.bb):null}g(i){let s=this.bb.__offset(this.bb_pos,18);return s?(i||new l.Graph).__init(this.bb.__indirect(this.bb_pos+s),this.bb):null}floats(i){let s=this.bb.__offset(this.bb_pos,20);return s?this.bb.readFloat32(this.bb.__vector(this.bb_pos+s)+i*4):0}floatsLength(){let i=this.bb.__offset(this.bb_pos,20);return i?this.bb.__vector_len(this.bb_pos+i):0}floatsArray(){let i=this.bb.__offset(this.bb_pos,20);return i?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+i),this.bb.__vector_len(this.bb_pos+i)):null}ints(i){let s=this.bb.__offset(this.bb_pos,22);return s?this.bb.readInt64(this.bb.__vector(this.bb_pos+s)+i*8):BigInt(0)}intsLength(){let i=this.bb.__offset(this.bb_pos,22);return i?this.bb.__vector_len(this.bb_pos+i):0}strings(i,s){let c=this.bb.__offset(this.bb_pos,24);return c?this.bb.__string(this.bb.__vector(this.bb_pos+c)+i*4,s):null}stringsLength(){let i=this.bb.__offset(this.bb_pos,24);return i?this.bb.__vector_len(this.bb_pos+i):0}tensors(i,s){let c=this.bb.__offset(this.bb_pos,26);return c?(s||new p.Tensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+c)+i*4),this.bb):null}tensorsLength(){let i=this.bb.__offset(this.bb_pos,26);return i?this.bb.__vector_len(this.bb_pos+i):0}graphs(i,s){let c=this.bb.__offset(this.bb_pos,28);return c?(s||new l.Graph).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+c)+i*4),this.bb):null}graphsLength(){let i=this.bb.__offset(this.bb_pos,28);return i?this.bb.__vector_len(this.bb_pos+i):0}static startAttribute(i){i.startObject(13)}static addName(i,s){i.addFieldOffset(0,s,0)}static addDocString(i,s){i.addFieldOffset(1,s,0)}static addType(i,s){i.addFieldInt32(2,s,d.AttributeType.UNDEFINED)}static addF(i,s){i.addFieldFloat32(3,s,0)}static addI(i,s){i.addFieldInt64(4,s,BigInt("0"))}static addS(i,s){i.addFieldOffset(5,s,0)}static addT(i,s){i.addFieldOffset(6,s,0)}static addG(i,s){i.addFieldOffset(7,s,0)}static addFloats(i,s){i.addFieldOffset(8,s,0)}static createFloatsVector(i,s){i.startVector(4,s.length,4);for(let c=s.length-1;c>=0;c--)i.addFloat32(s[c]);return i.endVector()}static startFloatsVector(i,s){i.startVector(4,s,4)}static addInts(i,s){i.addFieldOffset(9,s,0)}static createIntsVector(i,s){i.startVector(8,s.length,8);for(let c=s.length-1;c>=0;c--)i.addInt64(s[c]);return i.endVector()}static startIntsVector(i,s){i.startVector(8,s,8)}static addStrings(i,s){i.addFieldOffset(10,s,0)}static createStringsVector(i,s){i.startVector(4,s.length,4);for(let c=s.length-1;c>=0;c--)i.addOffset(s[c]);return i.endVector()}static startStringsVector(i,s){i.startVector(4,s,4)}static addTensors(i,s){i.addFieldOffset(11,s,0)}static createTensorsVector(i,s){i.startVector(4,s.length,4);for(let c=s.length-1;c>=0;c--)i.addOffset(s[c]);return i.endVector()}static startTensorsVector(i,s){i.startVector(4,s,4)}static addGraphs(i,s){i.addFieldOffset(12,s,0)}static createGraphsVector(i,s){i.startVector(4,s.length,4);for(let c=s.length-1;c>=0;c--)i.addOffset(s[c]);return i.endVector()}static startGraphsVector(i,s){i.startVector(4,s,4)}static endAttribute(i){return i.endObject()}};e.Attribute=o}),Ru=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(l,p,o,r){r===void 0&&(r=o);var i=Object.getOwnPropertyDescriptor(p,o);(!i||("get"in i?!p.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return p[o]}}),Object.defineProperty(l,r,i)}:function(l,p,o,r){r===void 0&&(r=o),l[r]=p[o]}),n=e&&e.__setModuleDefault||(Object.create?function(l,p){Object.defineProperty(l,"default",{enumerable:!0,value:p})}:function(l,p){l.default=p}),a=e&&e.__importStar||function(l){if(l&&l.__esModule)return l;var p={};if(l!=null)for(var o in l)o!=="default"&&Object.prototype.hasOwnProperty.call(l,o)&&t(p,l,o);return n(p,l),p};Object.defineProperty(e,"__esModule",{value:!0}),e.DeprecatedKernelCreateInfos=void 0;var u=a(Ne()),d=class nr{constructor(){this.bb=null,this.bb_pos=0}__init(p,o){return this.bb_pos=p,this.bb=o,this}static getRootAsDeprecatedKernelCreateInfos(p,o){return(o||new nr).__init(p.readInt32(p.position())+p.position(),p)}static getSizePrefixedRootAsDeprecatedKernelCreateInfos(p,o){return p.setPosition(p.position()+u.SIZE_PREFIX_LENGTH),(o||new nr).__init(p.readInt32(p.position())+p.position(),p)}nodeIndices(p){let o=this.bb.__offset(this.bb_pos,4);return o?this.bb.readUint32(this.bb.__vector(this.bb_pos+o)+p*4):0}nodeIndicesLength(){let p=this.bb.__offset(this.bb_pos,4);return p?this.bb.__vector_len(this.bb_pos+p):0}nodeIndicesArray(){let p=this.bb.__offset(this.bb_pos,4);return p?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+p),this.bb.__vector_len(this.bb_pos+p)):null}kernelDefHashes(p){let o=this.bb.__offset(this.bb_pos,6);return o?this.bb.readUint64(this.bb.__vector(this.bb_pos+o)+p*8):BigInt(0)}kernelDefHashesLength(){let p=this.bb.__offset(this.bb_pos,6);return p?this.bb.__vector_len(this.bb_pos+p):0}static startDeprecatedKernelCreateInfos(p){p.startObject(2)}static addNodeIndices(p,o){p.addFieldOffset(0,o,0)}static createNodeIndicesVector(p,o){p.startVector(4,o.length,4);for(let r=o.length-1;r>=0;r--)p.addInt32(o[r]);return p.endVector()}static startNodeIndicesVector(p,o){p.startVector(4,o,4)}static addKernelDefHashes(p,o){p.addFieldOffset(1,o,0)}static createKernelDefHashesVector(p,o){p.startVector(8,o.length,8);for(let r=o.length-1;r>=0;r--)p.addInt64(o[r]);return p.endVector()}static startKernelDefHashesVector(p,o){p.startVector(8,o,8)}static endDeprecatedKernelCreateInfos(p){return p.endObject()}static createDeprecatedKernelCreateInfos(p,o,r){return nr.startDeprecatedKernelCreateInfos(p),nr.addNodeIndices(p,o),nr.addKernelDefHashes(p,r),nr.endDeprecatedKernelCreateInfos(p)}};e.DeprecatedKernelCreateInfos=d}),th=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(l,p,o,r){r===void 0&&(r=o);var i=Object.getOwnPropertyDescriptor(p,o);(!i||("get"in i?!p.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return p[o]}}),Object.defineProperty(l,r,i)}:function(l,p,o,r){r===void 0&&(r=o),l[r]=p[o]}),n=e&&e.__setModuleDefault||(Object.create?function(l,p){Object.defineProperty(l,"default",{enumerable:!0,value:p})}:function(l,p){l.default=p}),a=e&&e.__importStar||function(l){if(l&&l.__esModule)return l;var p={};if(l!=null)for(var o in l)o!=="default"&&Object.prototype.hasOwnProperty.call(l,o)&&t(p,l,o);return n(p,l),p};Object.defineProperty(e,"__esModule",{value:!0}),e.DeprecatedNodeIndexAndKernelDefHash=void 0;var u=a(Ne()),d=class ir{constructor(){this.bb=null,this.bb_pos=0}__init(p,o){return this.bb_pos=p,this.bb=o,this}static getRootAsDeprecatedNodeIndexAndKernelDefHash(p,o){return(o||new ir).__init(p.readInt32(p.position())+p.position(),p)}static getSizePrefixedRootAsDeprecatedNodeIndexAndKernelDefHash(p,o){return p.setPosition(p.position()+u.SIZE_PREFIX_LENGTH),(o||new ir).__init(p.readInt32(p.position())+p.position(),p)}nodeIndex(){let p=this.bb.__offset(this.bb_pos,4);return p?this.bb.readUint32(this.bb_pos+p):0}kernelDefHash(){let p=this.bb.__offset(this.bb_pos,6);return p?this.bb.readUint64(this.bb_pos+p):BigInt("0")}static startDeprecatedNodeIndexAndKernelDefHash(p){p.startObject(2)}static addNodeIndex(p,o){p.addFieldInt32(0,o,0)}static addKernelDefHash(p,o){p.addFieldInt64(1,o,BigInt("0"))}static endDeprecatedNodeIndexAndKernelDefHash(p){return p.endObject()}static createDeprecatedNodeIndexAndKernelDefHash(p,o,r){return ir.startDeprecatedNodeIndexAndKernelDefHash(p),ir.addNodeIndex(p,o),ir.addKernelDefHash(p,r),ir.endDeprecatedNodeIndexAndKernelDefHash(p)}};e.DeprecatedNodeIndexAndKernelDefHash=d}),Bu=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(p,o,r,i){i===void 0&&(i=r);var s=Object.getOwnPropertyDescriptor(o,r);(!s||("get"in s?!o.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return o[r]}}),Object.defineProperty(p,i,s)}:function(p,o,r,i){i===void 0&&(i=r),p[i]=o[r]}),n=e&&e.__setModuleDefault||(Object.create?function(p,o){Object.defineProperty(p,"default",{enumerable:!0,value:o})}:function(p,o){p.default=o}),a=e&&e.__importStar||function(p){if(p&&p.__esModule)return p;var o={};if(p!=null)for(var r in p)r!=="default"&&Object.prototype.hasOwnProperty.call(p,r)&&t(o,p,r);return n(o,p),o};Object.defineProperty(e,"__esModule",{value:!0}),e.DeprecatedSubGraphSessionState=void 0;var u=a(Ne()),d=Fu(),l=class Si{constructor(){this.bb=null,this.bb_pos=0}__init(o,r){return this.bb_pos=o,this.bb=r,this}static getRootAsDeprecatedSubGraphSessionState(o,r){return(r||new Si).__init(o.readInt32(o.position())+o.position(),o)}static getSizePrefixedRootAsDeprecatedSubGraphSessionState(o,r){return o.setPosition(o.position()+u.SIZE_PREFIX_LENGTH),(r||new Si).__init(o.readInt32(o.position())+o.position(),o)}graphId(o){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,o):null}sessionState(o){let r=this.bb.__offset(this.bb_pos,6);return r?(o||new d.DeprecatedSessionState).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}static startDeprecatedSubGraphSessionState(o){o.startObject(2)}static addGraphId(o,r){o.addFieldOffset(0,r,0)}static addSessionState(o,r){o.addFieldOffset(1,r,0)}static endDeprecatedSubGraphSessionState(o){let r=o.endObject();return o.requiredField(r,4),r}};e.DeprecatedSubGraphSessionState=l}),Fu=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(o,r,i,s){s===void 0&&(s=i);var c=Object.getOwnPropertyDescriptor(r,i);(!c||("get"in c?!r.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return r[i]}}),Object.defineProperty(o,s,c)}:function(o,r,i,s){s===void 0&&(s=i),o[s]=r[i]}),n=e&&e.__setModuleDefault||(Object.create?function(o,r){Object.defineProperty(o,"default",{enumerable:!0,value:r})}:function(o,r){o.default=r}),a=e&&e.__importStar||function(o){if(o&&o.__esModule)return o;var r={};if(o!=null)for(var i in o)i!=="default"&&Object.prototype.hasOwnProperty.call(o,i)&&t(r,o,i);return n(r,o),r};Object.defineProperty(e,"__esModule",{value:!0}),e.DeprecatedSessionState=void 0;var u=a(Ne()),d=Ru(),l=Bu(),p=class or{constructor(){this.bb=null,this.bb_pos=0}__init(r,i){return this.bb_pos=r,this.bb=i,this}static getRootAsDeprecatedSessionState(r,i){return(i||new or).__init(r.readInt32(r.position())+r.position(),r)}static getSizePrefixedRootAsDeprecatedSessionState(r,i){return r.setPosition(r.position()+u.SIZE_PREFIX_LENGTH),(i||new or).__init(r.readInt32(r.position())+r.position(),r)}kernels(r){let i=this.bb.__offset(this.bb_pos,4);return i?(r||new d.DeprecatedKernelCreateInfos).__init(this.bb.__indirect(this.bb_pos+i),this.bb):null}subGraphSessionStates(r,i){let s=this.bb.__offset(this.bb_pos,6);return s?(i||new l.DeprecatedSubGraphSessionState).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+s)+r*4),this.bb):null}subGraphSessionStatesLength(){let r=this.bb.__offset(this.bb_pos,6);return r?this.bb.__vector_len(this.bb_pos+r):0}static startDeprecatedSessionState(r){r.startObject(2)}static addKernels(r,i){r.addFieldOffset(0,i,0)}static addSubGraphSessionStates(r,i){r.addFieldOffset(1,i,0)}static createSubGraphSessionStatesVector(r,i){r.startVector(4,i.length,4);for(let s=i.length-1;s>=0;s--)r.addOffset(i[s]);return r.endVector()}static startSubGraphSessionStatesVector(r,i){r.startVector(4,i,4)}static endDeprecatedSessionState(r){return r.endObject()}static createDeprecatedSessionState(r,i,s){return or.startDeprecatedSessionState(r),or.addKernels(r,i),or.addSubGraphSessionStates(r,s),or.endDeprecatedSessionState(r)}};e.DeprecatedSessionState=p}),Uu=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(p,o,r,i){i===void 0&&(i=r);var s=Object.getOwnPropertyDescriptor(o,r);(!s||("get"in s?!o.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return o[r]}}),Object.defineProperty(p,i,s)}:function(p,o,r,i){i===void 0&&(i=r),p[i]=o[r]}),n=e&&e.__setModuleDefault||(Object.create?function(p,o){Object.defineProperty(p,"default",{enumerable:!0,value:o})}:function(p,o){p.default=o}),a=e&&e.__importStar||function(p){if(p&&p.__esModule)return p;var o={};if(p!=null)for(var r in p)r!=="default"&&Object.prototype.hasOwnProperty.call(p,r)&&t(o,p,r);return n(o,p),o};Object.defineProperty(e,"__esModule",{value:!0}),e.KernelTypeStrArgsEntry=void 0;var u=a(Ne()),d=Xs(),l=class dr{constructor(){this.bb=null,this.bb_pos=0}__init(o,r){return this.bb_pos=o,this.bb=r,this}static getRootAsKernelTypeStrArgsEntry(o,r){return(r||new dr).__init(o.readInt32(o.position())+o.position(),o)}static getSizePrefixedRootAsKernelTypeStrArgsEntry(o,r){return o.setPosition(o.position()+u.SIZE_PREFIX_LENGTH),(r||new dr).__init(o.readInt32(o.position())+o.position(),o)}kernelTypeStr(o){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,o):null}args(o,r){let i=this.bb.__offset(this.bb_pos,6);return i?(r||new d.ArgTypeAndIndex).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+o*4),this.bb):null}argsLength(){let o=this.bb.__offset(this.bb_pos,6);return o?this.bb.__vector_len(this.bb_pos+o):0}static startKernelTypeStrArgsEntry(o){o.startObject(2)}static addKernelTypeStr(o,r){o.addFieldOffset(0,r,0)}static addArgs(o,r){o.addFieldOffset(1,r,0)}static createArgsVector(o,r){o.startVector(4,r.length,4);for(let i=r.length-1;i>=0;i--)o.addOffset(r[i]);return o.endVector()}static startArgsVector(o,r){o.startVector(4,r,4)}static endKernelTypeStrArgsEntry(o){let r=o.endObject();return o.requiredField(r,4),r}static createKernelTypeStrArgsEntry(o,r,i){return dr.startKernelTypeStrArgsEntry(o),dr.addKernelTypeStr(o,r),dr.addArgs(o,i),dr.endKernelTypeStrArgsEntry(o)}};e.KernelTypeStrArgsEntry=l}),Hu=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(p,o,r,i){i===void 0&&(i=r);var s=Object.getOwnPropertyDescriptor(o,r);(!s||("get"in s?!o.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return o[r]}}),Object.defineProperty(p,i,s)}:function(p,o,r,i){i===void 0&&(i=r),p[i]=o[r]}),n=e&&e.__setModuleDefault||(Object.create?function(p,o){Object.defineProperty(p,"default",{enumerable:!0,value:o})}:function(p,o){p.default=o}),a=e&&e.__importStar||function(p){if(p&&p.__esModule)return p;var o={};if(p!=null)for(var r in p)r!=="default"&&Object.prototype.hasOwnProperty.call(p,r)&&t(o,p,r);return n(o,p),o};Object.defineProperty(e,"__esModule",{value:!0}),e.OpIdKernelTypeStrArgsEntry=void 0;var u=a(Ne()),d=Uu(),l=class pr{constructor(){this.bb=null,this.bb_pos=0}__init(o,r){return this.bb_pos=o,this.bb=r,this}static getRootAsOpIdKernelTypeStrArgsEntry(o,r){return(r||new pr).__init(o.readInt32(o.position())+o.position(),o)}static getSizePrefixedRootAsOpIdKernelTypeStrArgsEntry(o,r){return o.setPosition(o.position()+u.SIZE_PREFIX_LENGTH),(r||new pr).__init(o.readInt32(o.position())+o.position(),o)}opId(o){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,o):null}kernelTypeStrArgs(o,r){let i=this.bb.__offset(this.bb_pos,6);return i?(r||new d.KernelTypeStrArgsEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+o*4),this.bb):null}kernelTypeStrArgsLength(){let o=this.bb.__offset(this.bb_pos,6);return o?this.bb.__vector_len(this.bb_pos+o):0}static startOpIdKernelTypeStrArgsEntry(o){o.startObject(2)}static addOpId(o,r){o.addFieldOffset(0,r,0)}static addKernelTypeStrArgs(o,r){o.addFieldOffset(1,r,0)}static createKernelTypeStrArgsVector(o,r){o.startVector(4,r.length,4);for(let i=r.length-1;i>=0;i--)o.addOffset(r[i]);return o.endVector()}static startKernelTypeStrArgsVector(o,r){o.startVector(4,r,4)}static endOpIdKernelTypeStrArgsEntry(o){let r=o.endObject();return o.requiredField(r,4),r}static createOpIdKernelTypeStrArgsEntry(o,r,i){return pr.startOpIdKernelTypeStrArgsEntry(o),pr.addOpId(o,r),pr.addKernelTypeStrArgs(o,i),pr.endOpIdKernelTypeStrArgsEntry(o)}};e.OpIdKernelTypeStrArgsEntry=l}),ju=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(p,o,r,i){i===void 0&&(i=r);var s=Object.getOwnPropertyDescriptor(o,r);(!s||("get"in s?!o.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return o[r]}}),Object.defineProperty(p,i,s)}:function(p,o,r,i){i===void 0&&(i=r),p[i]=o[r]}),n=e&&e.__setModuleDefault||(Object.create?function(p,o){Object.defineProperty(p,"default",{enumerable:!0,value:o})}:function(p,o){p.default=o}),a=e&&e.__importStar||function(p){if(p&&p.__esModule)return p;var o={};if(p!=null)for(var r in p)r!=="default"&&Object.prototype.hasOwnProperty.call(p,r)&&t(o,p,r);return n(o,p),o};Object.defineProperty(e,"__esModule",{value:!0}),e.KernelTypeStrResolver=void 0;var u=a(Ne()),d=Hu(),l=class Vr{constructor(){this.bb=null,this.bb_pos=0}__init(o,r){return this.bb_pos=o,this.bb=r,this}static getRootAsKernelTypeStrResolver(o,r){return(r||new Vr).__init(o.readInt32(o.position())+o.position(),o)}static getSizePrefixedRootAsKernelTypeStrResolver(o,r){return o.setPosition(o.position()+u.SIZE_PREFIX_LENGTH),(r||new Vr).__init(o.readInt32(o.position())+o.position(),o)}opKernelTypeStrArgs(o,r){let i=this.bb.__offset(this.bb_pos,4);return i?(r||new d.OpIdKernelTypeStrArgsEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+o*4),this.bb):null}opKernelTypeStrArgsLength(){let o=this.bb.__offset(this.bb_pos,4);return o?this.bb.__vector_len(this.bb_pos+o):0}static startKernelTypeStrResolver(o){o.startObject(1)}static addOpKernelTypeStrArgs(o,r){o.addFieldOffset(0,r,0)}static createOpKernelTypeStrArgsVector(o,r){o.startVector(4,r.length,4);for(let i=r.length-1;i>=0;i--)o.addOffset(r[i]);return o.endVector()}static startOpKernelTypeStrArgsVector(o,r){o.startVector(4,r,4)}static endKernelTypeStrResolver(o){return o.endObject()}static createKernelTypeStrResolver(o,r){return Vr.startKernelTypeStrResolver(o),Vr.addOpKernelTypeStrArgs(o,r),Vr.endKernelTypeStrResolver(o)}};e.KernelTypeStrResolver=l}),Xu=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(l,p,o,r){r===void 0&&(r=o);var i=Object.getOwnPropertyDescriptor(p,o);(!i||("get"in i?!p.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return p[o]}}),Object.defineProperty(l,r,i)}:function(l,p,o,r){r===void 0&&(r=o),l[r]=p[o]}),n=e&&e.__setModuleDefault||(Object.create?function(l,p){Object.defineProperty(l,"default",{enumerable:!0,value:p})}:function(l,p){l.default=p}),a=e&&e.__importStar||function(l){if(l&&l.__esModule)return l;var p={};if(l!=null)for(var o in l)o!=="default"&&Object.prototype.hasOwnProperty.call(l,o)&&t(p,l,o);return n(p,l),p};Object.defineProperty(e,"__esModule",{value:!0}),e.OperatorSetId=void 0;var u=a(Ne()),d=class hr{constructor(){this.bb=null,this.bb_pos=0}__init(p,o){return this.bb_pos=p,this.bb=o,this}static getRootAsOperatorSetId(p,o){return(o||new hr).__init(p.readInt32(p.position())+p.position(),p)}static getSizePrefixedRootAsOperatorSetId(p,o){return p.setPosition(p.position()+u.SIZE_PREFIX_LENGTH),(o||new hr).__init(p.readInt32(p.position())+p.position(),p)}domain(p){let o=this.bb.__offset(this.bb_pos,4);return o?this.bb.__string(this.bb_pos+o,p):null}version(){let p=this.bb.__offset(this.bb_pos,6);return p?this.bb.readInt64(this.bb_pos+p):BigInt("0")}static startOperatorSetId(p){p.startObject(2)}static addDomain(p,o){p.addFieldOffset(0,o,0)}static addVersion(p,o){p.addFieldInt64(1,o,BigInt("0"))}static endOperatorSetId(p){return p.endObject()}static createOperatorSetId(p,o,r){return hr.startOperatorSetId(p),hr.addDomain(p,o),hr.addVersion(p,r),hr.endOperatorSetId(p)}};e.OperatorSetId=d}),Ju=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(l,p,o,r){r===void 0&&(r=o);var i=Object.getOwnPropertyDescriptor(p,o);(!i||("get"in i?!p.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return p[o]}}),Object.defineProperty(l,r,i)}:function(l,p,o,r){r===void 0&&(r=o),l[r]=p[o]}),n=e&&e.__setModuleDefault||(Object.create?function(l,p){Object.defineProperty(l,"default",{enumerable:!0,value:p})}:function(l,p){l.default=p}),a=e&&e.__importStar||function(l){if(l&&l.__esModule)return l;var p={};if(l!=null)for(var o in l)o!=="default"&&Object.prototype.hasOwnProperty.call(l,o)&&t(p,l,o);return n(p,l),p};Object.defineProperty(e,"__esModule",{value:!0}),e.StringStringEntry=void 0;var u=a(Ne()),d=class xr{constructor(){this.bb=null,this.bb_pos=0}__init(p,o){return this.bb_pos=p,this.bb=o,this}static getRootAsStringStringEntry(p,o){return(o||new xr).__init(p.readInt32(p.position())+p.position(),p)}static getSizePrefixedRootAsStringStringEntry(p,o){return p.setPosition(p.position()+u.SIZE_PREFIX_LENGTH),(o||new xr).__init(p.readInt32(p.position())+p.position(),p)}key(p){let o=this.bb.__offset(this.bb_pos,4);return o?this.bb.__string(this.bb_pos+o,p):null}value(p){let o=this.bb.__offset(this.bb_pos,6);return o?this.bb.__string(this.bb_pos+o,p):null}static startStringStringEntry(p){p.startObject(2)}static addKey(p,o){p.addFieldOffset(0,o,0)}static addValue(p,o){p.addFieldOffset(1,o,0)}static endStringStringEntry(p){return p.endObject()}static createStringStringEntry(p,o,r){return xr.startStringStringEntry(p),xr.addKey(p,o),xr.addValue(p,r),xr.endStringStringEntry(p)}};e.StringStringEntry=d}),Yu=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(r,i,s,c){c===void 0&&(c=s);var h=Object.getOwnPropertyDescriptor(i,s);(!h||("get"in h?!i.__esModule:h.writable||h.configurable))&&(h={enumerable:!0,get:function(){return i[s]}}),Object.defineProperty(r,c,h)}:function(r,i,s,c){c===void 0&&(c=s),r[c]=i[s]}),n=e&&e.__setModuleDefault||(Object.create?function(r,i){Object.defineProperty(r,"default",{enumerable:!0,value:i})}:function(r,i){r.default=i}),a=e&&e.__importStar||function(r){if(r&&r.__esModule)return r;var i={};if(r!=null)for(var s in r)s!=="default"&&Object.prototype.hasOwnProperty.call(r,s)&&t(i,r,s);return n(i,r),i};Object.defineProperty(e,"__esModule",{value:!0}),e.Model=void 0;var u=a(Ne()),d=Ei(),l=Xu(),p=Ju(),o=class Oi{constructor(){this.bb=null,this.bb_pos=0}__init(i,s){return this.bb_pos=i,this.bb=s,this}static getRootAsModel(i,s){return(s||new Oi).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsModel(i,s){return i.setPosition(i.position()+u.SIZE_PREFIX_LENGTH),(s||new Oi).__init(i.readInt32(i.position())+i.position(),i)}irVersion(){let i=this.bb.__offset(this.bb_pos,4);return i?this.bb.readInt64(this.bb_pos+i):BigInt("0")}opsetImport(i,s){let c=this.bb.__offset(this.bb_pos,6);return c?(s||new l.OperatorSetId).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+c)+i*4),this.bb):null}opsetImportLength(){let i=this.bb.__offset(this.bb_pos,6);return i?this.bb.__vector_len(this.bb_pos+i):0}producerName(i){let s=this.bb.__offset(this.bb_pos,8);return s?this.bb.__string(this.bb_pos+s,i):null}producerVersion(i){let s=this.bb.__offset(this.bb_pos,10);return s?this.bb.__string(this.bb_pos+s,i):null}domain(i){let s=this.bb.__offset(this.bb_pos,12);return s?this.bb.__string(this.bb_pos+s,i):null}modelVersion(){let i=this.bb.__offset(this.bb_pos,14);return i?this.bb.readInt64(this.bb_pos+i):BigInt("0")}docString(i){let s=this.bb.__offset(this.bb_pos,16);return s?this.bb.__string(this.bb_pos+s,i):null}graph(i){let s=this.bb.__offset(this.bb_pos,18);return s?(i||new d.Graph).__init(this.bb.__indirect(this.bb_pos+s),this.bb):null}graphDocString(i){let s=this.bb.__offset(this.bb_pos,20);return s?this.bb.__string(this.bb_pos+s,i):null}metadataProps(i,s){let c=this.bb.__offset(this.bb_pos,22);return c?(s||new p.StringStringEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+c)+i*4),this.bb):null}metadataPropsLength(){let i=this.bb.__offset(this.bb_pos,22);return i?this.bb.__vector_len(this.bb_pos+i):0}static startModel(i){i.startObject(10)}static addIrVersion(i,s){i.addFieldInt64(0,s,BigInt("0"))}static addOpsetImport(i,s){i.addFieldOffset(1,s,0)}static createOpsetImportVector(i,s){i.startVector(4,s.length,4);for(let c=s.length-1;c>=0;c--)i.addOffset(s[c]);return i.endVector()}static startOpsetImportVector(i,s){i.startVector(4,s,4)}static addProducerName(i,s){i.addFieldOffset(2,s,0)}static addProducerVersion(i,s){i.addFieldOffset(3,s,0)}static addDomain(i,s){i.addFieldOffset(4,s,0)}static addModelVersion(i,s){i.addFieldInt64(5,s,BigInt("0"))}static addDocString(i,s){i.addFieldOffset(6,s,0)}static addGraph(i,s){i.addFieldOffset(7,s,0)}static addGraphDocString(i,s){i.addFieldOffset(8,s,0)}static addMetadataProps(i,s){i.addFieldOffset(9,s,0)}static createMetadataPropsVector(i,s){i.startVector(4,s.length,4);for(let c=s.length-1;c>=0;c--)i.addOffset(s[c]);return i.endVector()}static startMetadataPropsVector(i,s){i.startVector(4,s,4)}static endModel(i){return i.endObject()}};e.Model=o}),nh=oe(e=>{var t=e&&e.__createBinding||(Object.create?function(o,r,i,s){s===void 0&&(s=i);var c=Object.getOwnPropertyDescriptor(r,i);(!c||("get"in c?!r.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return r[i]}}),Object.defineProperty(o,s,c)}:function(o,r,i,s){s===void 0&&(s=i),o[s]=r[i]}),n=e&&e.__setModuleDefault||(Object.create?function(o,r){Object.defineProperty(o,"default",{enumerable:!0,value:r})}:function(o,r){o.default=r}),a=e&&e.__importStar||function(o){if(o&&o.__esModule)return o;var r={};if(o!=null)for(var i in o)i!=="default"&&Object.prototype.hasOwnProperty.call(o,i)&&t(r,o,i);return n(r,o),r};Object.defineProperty(e,"__esModule",{value:!0}),e.InferenceSession=void 0;var u=a(Ne()),d=ju(),l=Yu(),p=class Pi{constructor(){this.bb=null,this.bb_pos=0}__init(r,i){return this.bb_pos=r,this.bb=i,this}static getRootAsInferenceSession(r,i){return(i||new Pi).__init(r.readInt32(r.position())+r.position(),r)}static getSizePrefixedRootAsInferenceSession(r,i){return r.setPosition(r.position()+u.SIZE_PREFIX_LENGTH),(i||new Pi).__init(r.readInt32(r.position())+r.position(),r)}static bufferHasIdentifier(r){return r.__has_identifier("ORTM")}ortVersion(r){let i=this.bb.__offset(this.bb_pos,4);return i?this.bb.__string(this.bb_pos+i,r):null}model(r){let i=this.bb.__offset(this.bb_pos,6);return i?(r||new l.Model).__init(this.bb.__indirect(this.bb_pos+i),this.bb):null}kernelTypeStrResolver(r){let i=this.bb.__offset(this.bb_pos,10);return i?(r||new d.KernelTypeStrResolver).__init(this.bb.__indirect(this.bb_pos+i),this.bb):null}static startInferenceSession(r){r.startObject(4)}static addOrtVersion(r,i){r.addFieldOffset(0,i,0)}static addModel(r,i){r.addFieldOffset(1,i,0)}static addKernelTypeStrResolver(r,i){r.addFieldOffset(3,i,0)}static endInferenceSession(r){return r.endObject()}static finishInferenceSessionBuffer(r,i){r.finish(i,"ORTM")}static finishSizePrefixedInferenceSessionBuffer(r,i){r.finish(i,"ORTM",!0)}};e.InferenceSession=p}),Ci,Lt,tl,nl,rl,Io,ol,il,rh=N(()=>{_e(Gs()),_e(Xs()),Ci=_e(eu()),Lt=_e(Zs()),_e(Ru()),_e(th()),_e(Fu()),_e(Bu()),_e(Iu()),_e(xu()),_e(wu()),_e(nu()),tl=_e(Ei()),nl=_e(nh()),_e(Uu()),_e(ju()),_e(bu()),_e(Yu()),rl=_e(Ys()),_e(ou()),_e(Js()),_e(au()),_e(Hu()),_e(Xu()),_e(uu()),_e(cu()),_e(pu()),_e(_u()),_e($u()),_e(mu()),_e(Ju()),_e(xo()),Io=_e(vo()),ol=_e(Ou()),_e(To()),il=_e(Pu()),_e(Du())}),So=N(()=>{rh()}),ih=oe((e,t)=>{t.exports=n;function n(a,u){for(var d=new Array(arguments.length-1),l=0,p=2,o=!0;p<arguments.length;)d[l++]=arguments[p++];return new Promise(function(r,i){d[l]=function(s){if(o)if(o=!1,s)i(s);else{for(var c=new Array(arguments.length-1),h=0;h<c.length;)c[h++]=arguments[h];r.apply(null,c)}};try{a.apply(u||null,d)}catch(s){o&&(o=!1,i(s))}})}}),lh=oe(e=>{var t=e;t.length=function(l){var p=l.length;if(!p)return 0;for(var o=0;--p%4>1&&l.charAt(p)==="=";)++o;return Math.ceil(l.length*3)/4-o};var n=new Array(64),a=new Array(123);for(u=0;u<64;)a[n[u]=u<26?u+65:u<52?u+71:u<62?u-4:u-59|43]=u++;var u;t.encode=function(l,p,o){for(var r=null,i=[],s=0,c=0,h;p<o;){var m=l[p++];switch(c){case 0:i[s++]=n[m>>2],h=(m&3)<<4,c=1;break;case 1:i[s++]=n[h|m>>4],h=(m&15)<<2,c=2;break;case 2:i[s++]=n[h|m>>6],i[s++]=n[m&63],c=0;break}s>8191&&((r||(r=[])).push(String.fromCharCode.apply(String,i)),s=0)}return c&&(i[s++]=n[h],i[s++]=61,c===1&&(i[s++]=61)),r?(s&&r.push(String.fromCharCode.apply(String,i.slice(0,s))),r.join("")):String.fromCharCode.apply(String,i.slice(0,s))};var d="invalid encoding";t.decode=function(l,p,o){for(var r=o,i=0,s,c=0;c<l.length;){var h=l.charCodeAt(c++);if(h===61&&i>1)break;if((h=a[h])===void 0)throw Error(d);switch(i){case 0:s=h,i=1;break;case 1:p[o++]=s<<2|(h&48)>>4,s=h,i=2;break;case 2:p[o++]=(s&15)<<4|(h&60)>>2,s=h,i=3;break;case 3:p[o++]=(s&3)<<6|h,i=0;break}}if(i===1)throw Error(d);return o-r},t.test=function(l){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(l)}}),dh=oe((e,t)=>{t.exports=n;function n(){this._listeners={}}n.prototype.on=function(a,u,d){return(this._listeners[a]||(this._listeners[a]=[])).push({fn:u,ctx:d||this}),this},n.prototype.off=function(a,u){if(a===void 0)this._listeners={};else if(u===void 0)this._listeners[a]=[];else for(var d=this._listeners[a],l=0;l<d.length;)d[l].fn===u?d.splice(l,1):++l;return this},n.prototype.emit=function(a){var u=this._listeners[a];if(u){for(var d=[],l=1;l<arguments.length;)d.push(arguments[l++]);for(l=0;l<u.length;)u[l].fn.apply(u[l++].ctx,d)}return this}}),yh=oe((e,t)=>{t.exports=n(n);function n(p){return typeof Float32Array<"u"?(function(){var o=new Float32Array([-0]),r=new Uint8Array(o.buffer),i=r[3]===128;function s(b,w,x){o[0]=b,w[x]=r[0],w[x+1]=r[1],w[x+2]=r[2],w[x+3]=r[3]}function c(b,w,x){o[0]=b,w[x]=r[3],w[x+1]=r[2],w[x+2]=r[1],w[x+3]=r[0]}p.writeFloatLE=i?s:c,p.writeFloatBE=i?c:s;function h(b,w){return r[0]=b[w],r[1]=b[w+1],r[2]=b[w+2],r[3]=b[w+3],o[0]}function m(b,w){return r[3]=b[w],r[2]=b[w+1],r[1]=b[w+2],r[0]=b[w+3],o[0]}p.readFloatLE=i?h:m,p.readFloatBE=i?m:h})():(function(){function o(i,s,c,h){var m=s<0?1:0;if(m&&(s=-s),s===0)i(1/s>0?0:2147483648,c,h);else if(isNaN(s))i(2143289344,c,h);else if(s>34028234663852886e22)i((m<<31|2139095040)>>>0,c,h);else if(s<11754943508222875e-54)i((m<<31|Math.round(s/1401298464324817e-60))>>>0,c,h);else{var b=Math.floor(Math.log(s)/Math.LN2),w=Math.round(s*Math.pow(2,-b)*8388608)&8388607;i((m<<31|b+127<<23|w)>>>0,c,h)}}p.writeFloatLE=o.bind(null,a),p.writeFloatBE=o.bind(null,u);function r(i,s,c){var h=i(s,c),m=(h>>31)*2+1,b=h>>>23&255,w=h&8388607;return b===255?w?NaN:m*(1/0):b===0?m*1401298464324817e-60*w:m*Math.pow(2,b-150)*(w+8388608)}p.readFloatLE=r.bind(null,d),p.readFloatBE=r.bind(null,l)})(),typeof Float64Array<"u"?(function(){var o=new Float64Array([-0]),r=new Uint8Array(o.buffer),i=r[7]===128;function s(b,w,x){o[0]=b,w[x]=r[0],w[x+1]=r[1],w[x+2]=r[2],w[x+3]=r[3],w[x+4]=r[4],w[x+5]=r[5],w[x+6]=r[6],w[x+7]=r[7]}function c(b,w,x){o[0]=b,w[x]=r[7],w[x+1]=r[6],w[x+2]=r[5],w[x+3]=r[4],w[x+4]=r[3],w[x+5]=r[2],w[x+6]=r[1],w[x+7]=r[0]}p.writeDoubleLE=i?s:c,p.writeDoubleBE=i?c:s;function h(b,w){return r[0]=b[w],r[1]=b[w+1],r[2]=b[w+2],r[3]=b[w+3],r[4]=b[w+4],r[5]=b[w+5],r[6]=b[w+6],r[7]=b[w+7],o[0]}function m(b,w){return r[7]=b[w],r[6]=b[w+1],r[5]=b[w+2],r[4]=b[w+3],r[3]=b[w+4],r[2]=b[w+5],r[1]=b[w+6],r[0]=b[w+7],o[0]}p.readDoubleLE=i?h:m,p.readDoubleBE=i?m:h})():(function(){function o(i,s,c,h,m,b){var w=h<0?1:0;if(w&&(h=-h),h===0)i(0,m,b+s),i(1/h>0?0:2147483648,m,b+c);else if(isNaN(h))i(0,m,b+s),i(2146959360,m,b+c);else if(h>17976931348623157e292)i(0,m,b+s),i((w<<31|2146435072)>>>0,m,b+c);else{var x;if(h<22250738585072014e-324)x=h/5e-324,i(x>>>0,m,b+s),i((w<<31|x/4294967296)>>>0,m,b+c);else{var _=Math.floor(Math.log(h)/Math.LN2);_===1024&&(_=1023),x=h*Math.pow(2,-_),i(x*4503599627370496>>>0,m,b+s),i((w<<31|_+1023<<20|x*1048576&1048575)>>>0,m,b+c)}}}p.writeDoubleLE=o.bind(null,a,0,4),p.writeDoubleBE=o.bind(null,u,4,0);function r(i,s,c,h,m){var b=i(h,m+s),w=i(h,m+c),x=(w>>31)*2+1,_=w>>>20&2047,S=4294967296*(w&1048575)+b;return _===2047?S?NaN:x*(1/0):_===0?x*5e-324*S:x*Math.pow(2,_-1075)*(S+4503599627370496)}p.readDoubleLE=r.bind(null,d,0,4),p.readDoubleBE=r.bind(null,l,4,0)})(),p}function a(p,o,r){o[r]=p&255,o[r+1]=p>>>8&255,o[r+2]=p>>>16&255,o[r+3]=p>>>24}function u(p,o,r){o[r]=p>>>24,o[r+1]=p>>>16&255,o[r+2]=p>>>8&255,o[r+3]=p&255}function d(p,o){return(p[o]|p[o+1]<<8|p[o+2]<<16|p[o+3]<<24)>>>0}function l(p,o){return(p[o]<<24|p[o+1]<<16|p[o+2]<<8|p[o+3])>>>0}}),_h=oe((exports$1,module)=>{module.exports=inquire;function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(e){}return null}}),vh=oe(e=>{var t=e;t.length=function(n){for(var a=0,u=0,d=0;d<n.length;++d)u=n.charCodeAt(d),u<128?a+=1:u<2048?a+=2:(u&64512)===55296&&(n.charCodeAt(d+1)&64512)===56320?(++d,a+=4):a+=3;return a},t.read=function(n,a,u){var d=u-a;if(d<1)return"";for(var l=null,p=[],o=0,r;a<u;)r=n[a++],r<128?p[o++]=r:r>191&&r<224?p[o++]=(r&31)<<6|n[a++]&63:r>239&&r<365?(r=((r&7)<<18|(n[a++]&63)<<12|(n[a++]&63)<<6|n[a++]&63)-65536,p[o++]=55296+(r>>10),p[o++]=56320+(r&1023)):p[o++]=(r&15)<<12|(n[a++]&63)<<6|n[a++]&63,o>8191&&((l||(l=[])).push(String.fromCharCode.apply(String,p)),o=0);return l?(o&&l.push(String.fromCharCode.apply(String,p.slice(0,o))),l.join("")):String.fromCharCode.apply(String,p.slice(0,o))},t.write=function(n,a,u){for(var d=u,l,p,o=0;o<n.length;++o)l=n.charCodeAt(o),l<128?a[u++]=l:l<2048?(a[u++]=l>>6|192,a[u++]=l&63|128):(l&64512)===55296&&((p=n.charCodeAt(o+1))&64512)===56320?(l=65536+((l&1023)<<10)+(p&1023),++o,a[u++]=l>>18|240,a[u++]=l>>12&63|128,a[u++]=l>>6&63|128,a[u++]=l&63|128):(a[u++]=l>>12|224,a[u++]=l>>6&63|128,a[u++]=l&63|128);return u-d}}),Th=oe((e,t)=>{t.exports=n;function n(a,u,d){var l=d||8192,p=l>>>1,o=null,r=l;return function(i){if(i<1||i>p)return a(i);r+i>l&&(o=a(l),r=0);var s=u.call(o,r,r+=i);return r&7&&(r=(r|7)+1),s}}}),Sh=oe((e,t)=>{t.exports=a;var n=fr();function a(p,o){this.lo=p>>>0,this.hi=o>>>0}var u=a.zero=new a(0,0);u.toNumber=function(){return 0},u.zzEncode=u.zzDecode=function(){return this},u.length=function(){return 1};var d=a.zeroHash="\0\0\0\0\0\0\0\0";a.fromNumber=function(p){if(p===0)return u;var o=p<0;o&&(p=-p);var r=p>>>0,i=(p-r)/4294967296>>>0;return o&&(i=~i>>>0,r=~r>>>0,++r>4294967295&&(r=0,++i>4294967295&&(i=0))),new a(r,i)},a.from=function(p){if(typeof p=="number")return a.fromNumber(p);if(n.isString(p))if(n.Long)p=n.Long.fromString(p);else return a.fromNumber(parseInt(p,10));return p.low||p.high?new a(p.low>>>0,p.high>>>0):u},a.prototype.toNumber=function(p){if(!p&&this.hi>>>31){var o=~this.lo+1>>>0,r=~this.hi>>>0;return o||(r=r+1>>>0),-(o+r*4294967296)}return this.lo+this.hi*4294967296},a.prototype.toLong=function(p){return n.Long?new n.Long(this.lo|0,this.hi|0,!!p):{low:this.lo|0,high:this.hi|0,unsigned:!!p}};var l=String.prototype.charCodeAt;a.fromHash=function(p){return p===d?u:new a((l.call(p,0)|l.call(p,1)<<8|l.call(p,2)<<16|l.call(p,3)<<24)>>>0,(l.call(p,4)|l.call(p,5)<<8|l.call(p,6)<<16|l.call(p,7)<<24)>>>0)},a.prototype.toHash=function(){return String.fromCharCode(this.lo&255,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,this.hi&255,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},a.prototype.zzEncode=function(){var p=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^p)>>>0,this.lo=(this.lo<<1^p)>>>0,this},a.prototype.zzDecode=function(){var p=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^p)>>>0,this.hi=(this.hi>>>1^p)>>>0,this},a.prototype.length=function(){var p=this.lo,o=(this.lo>>>28|this.hi<<4)>>>0,r=this.hi>>>24;return r===0?o===0?p<16384?p<128?1:2:p<2097152?3:4:o<16384?o<128?5:6:o<2097152?7:8:r<128?9:10}}),fr=oe(e=>{var t=e;t.asPromise=ih(),t.base64=lh(),t.EventEmitter=dh(),t.float=yh(),t.inquire=_h(),t.utf8=vh(),t.pool=Th(),t.LongBits=Sh(),t.isNode=!!(typeof global<"u"&&global&&global.process&&global.process.versions&&global.process.versions.node),t.global=t.isNode&&global||typeof window<"u"&&window||typeof self<"u"&&self||e,t.emptyArray=Object.freeze?Object.freeze([]):[],t.emptyObject=Object.freeze?Object.freeze({}):{},t.isInteger=Number.isInteger||function(u){return typeof u=="number"&&isFinite(u)&&Math.floor(u)===u},t.isString=function(u){return typeof u=="string"||u instanceof String},t.isObject=function(u){return u&&typeof u=="object"},t.isset=t.isSet=function(u,d){var l=u[d];return l!=null&&u.hasOwnProperty(d)?typeof l!="object"||(Array.isArray(l)?l.length:Object.keys(l).length)>0:!1},t.Buffer=(function(){try{var u=t.inquire("buffer").Buffer;return u.prototype.utf8Write?u:null}catch{return null}})(),t._Buffer_from=null,t._Buffer_allocUnsafe=null,t.newBuffer=function(u){return typeof u=="number"?t.Buffer?t._Buffer_allocUnsafe(u):new t.Array(u):t.Buffer?t._Buffer_from(u):typeof Uint8Array>"u"?u:new Uint8Array(u)},t.Array=typeof Uint8Array<"u"?Uint8Array:Array,t.Long=t.global.dcodeIO&&t.global.dcodeIO.Long||t.global.Long||t.inquire("long"),t.key2Re=/^true|false|0|1$/,t.key32Re=/^-?(?:0|[1-9][0-9]*)$/,t.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,t.longToHash=function(u){return u?t.LongBits.from(u).toHash():t.LongBits.zeroHash},t.longFromHash=function(u,d){var l=t.LongBits.fromHash(u);return t.Long?t.Long.fromBits(l.lo,l.hi,d):l.toNumber(!!d)};function n(u,d,l){for(var p=Object.keys(d),o=0;o<p.length;++o)(u[p[o]]===void 0||!l)&&(u[p[o]]=d[p[o]]);return u}t.merge=n,t.lcFirst=function(u){return u.charAt(0).toLowerCase()+u.substring(1)};function a(u){function d(l,p){if(!(this instanceof d))return new d(l,p);Object.defineProperty(this,"message",{get:function(){return l}}),Error.captureStackTrace?Error.captureStackTrace(this,d):Object.defineProperty(this,"stack",{value:new Error().stack||""}),p&&n(this,p)}return d.prototype=Object.create(Error.prototype,{constructor:{value:d,writable:!0,enumerable:!1,configurable:!0},name:{get:function(){return u},set:void 0,enumerable:!1,configurable:!0},toString:{value:function(){return this.name+": "+this.message},writable:!0,enumerable:!1,configurable:!0}}),d}t.newError=a,t.ProtocolError=a("ProtocolError"),t.oneOfGetter=function(u){for(var d={},l=0;l<u.length;++l)d[u[l]]=1;return function(){for(var p=Object.keys(this),o=p.length-1;o>-1;--o)if(d[p[o]]===1&&this[p[o]]!==void 0&&this[p[o]]!==null)return p[o]}},t.oneOfSetter=function(u){return function(d){for(var l=0;l<u.length;++l)u[l]!==d&&delete this[u[l]]}},t.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},t._configure=function(){var u=t.Buffer;if(!u){t._Buffer_from=t._Buffer_allocUnsafe=null;return}t._Buffer_from=u.from!==Uint8Array.from&&u.from||function(d,l){return new u(d,l)},t._Buffer_allocUnsafe=u.allocUnsafe||function(d){return new u(d)}}}),hl=oe((e,t)=>{t.exports=i;var n=fr(),a,u=n.LongBits,d=n.base64,l=n.utf8;function p(_,S,I){this.fn=_,this.len=S,this.next=void 0,this.val=I}function o(){}function r(_){this.head=_.head,this.tail=_.tail,this.len=_.len,this.next=_.states}function i(){this.len=0,this.head=new p(o,0,0),this.tail=this.head,this.states=null}var s=function(){return n.Buffer?function(){return(i.create=function(){return new a})()}:function(){return new i}};i.create=s(),i.alloc=function(_){return new n.Array(_)},n.Array!==Array&&(i.alloc=n.pool(i.alloc,n.Array.prototype.subarray)),i.prototype._push=function(_,S,I){return this.tail=this.tail.next=new p(_,S,I),this.len+=S,this};function c(_,S,I){S[I]=_&255}function h(_,S,I){for(;_>127;)S[I++]=_&127|128,_>>>=7;S[I]=_}function m(_,S){this.len=_,this.next=void 0,this.val=S}m.prototype=Object.create(p.prototype),m.prototype.fn=h,i.prototype.uint32=function(_){return this.len+=(this.tail=this.tail.next=new m((_=_>>>0)<128?1:_<16384?2:_<2097152?3:_<268435456?4:5,_)).len,this},i.prototype.int32=function(_){return _<0?this._push(b,10,u.fromNumber(_)):this.uint32(_)},i.prototype.sint32=function(_){return this.uint32((_<<1^_>>31)>>>0)};function b(_,S,I){for(;_.hi;)S[I++]=_.lo&127|128,_.lo=(_.lo>>>7|_.hi<<25)>>>0,_.hi>>>=7;for(;_.lo>127;)S[I++]=_.lo&127|128,_.lo=_.lo>>>7;S[I++]=_.lo}i.prototype.uint64=function(_){var S=u.from(_);return this._push(b,S.length(),S)},i.prototype.int64=i.prototype.uint64,i.prototype.sint64=function(_){var S=u.from(_).zzEncode();return this._push(b,S.length(),S)},i.prototype.bool=function(_){return this._push(c,1,_?1:0)};function w(_,S,I){S[I]=_&255,S[I+1]=_>>>8&255,S[I+2]=_>>>16&255,S[I+3]=_>>>24}i.prototype.fixed32=function(_){return this._push(w,4,_>>>0)},i.prototype.sfixed32=i.prototype.fixed32,i.prototype.fixed64=function(_){var S=u.from(_);return this._push(w,4,S.lo)._push(w,4,S.hi)},i.prototype.sfixed64=i.prototype.fixed64,i.prototype.float=function(_){return this._push(n.float.writeFloatLE,4,_)},i.prototype.double=function(_){return this._push(n.float.writeDoubleLE,8,_)};var x=n.Array.prototype.set?function(_,S,I){S.set(_,I)}:function(_,S,I){for(var O=0;O<_.length;++O)S[I+O]=_[O]};i.prototype.bytes=function(_){var S=_.length>>>0;if(!S)return this._push(c,1,0);if(n.isString(_)){var I=i.alloc(S=d.length(_));d.decode(_,I,0),_=I}return this.uint32(S)._push(x,S,_)},i.prototype.string=function(_){var S=l.length(_);return S?this.uint32(S)._push(l.write,S,_):this._push(c,1,0)},i.prototype.fork=function(){return this.states=new r(this),this.head=this.tail=new p(o,0,0),this.len=0,this},i.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new p(o,0,0),this.len=0),this},i.prototype.ldelim=function(){var _=this.head,S=this.tail,I=this.len;return this.reset().uint32(I),I&&(this.tail.next=_.next,this.tail=S,this.len+=I),this},i.prototype.finish=function(){for(var _=this.head.next,S=this.constructor.alloc(this.len),I=0;_;)_.fn(_.val,S,I),I+=_.len,_=_.next;return S},i._configure=function(_){a=_,i.create=s(),a._configure()}}),Nh=oe((e,t)=>{t.exports=u;var n=hl();(u.prototype=Object.create(n.prototype)).constructor=u;var a=fr();function u(){n.call(this)}u._configure=function(){u.alloc=a._Buffer_allocUnsafe,u.writeBytesBuffer=a.Buffer&&a.Buffer.prototype instanceof Uint8Array&&a.Buffer.prototype.set.name==="set"?function(l,p,o){p.set(l,o)}:function(l,p,o){if(l.copy)l.copy(p,o,0,l.length);else for(var r=0;r<l.length;)p[o++]=l[r++]}},u.prototype.bytes=function(l){a.isString(l)&&(l=a._Buffer_from(l,"base64"));var p=l.length>>>0;return this.uint32(p),p&&this._push(u.writeBytesBuffer,p,l),this};function d(l,p,o){l.length<40?a.utf8.write(l,p,o):p.utf8Write?p.utf8Write(l,o):p.write(l,o)}u.prototype.string=function(l){var p=a.Buffer.byteLength(l);return this.uint32(p),p&&this._push(d,p,l),this},u._configure()}),bl=oe((e,t)=>{t.exports=p;var n=fr(),a,u=n.LongBits,d=n.utf8;function l(h,m){return RangeError("index out of range: "+h.pos+" + "+(m||1)+" > "+h.len)}function p(h){this.buf=h,this.pos=0,this.len=h.length}var o=typeof Uint8Array<"u"?function(h){if(h instanceof Uint8Array||Array.isArray(h))return new p(h);throw Error("illegal buffer")}:function(h){if(Array.isArray(h))return new p(h);throw Error("illegal buffer")},r=function(){return n.Buffer?function(h){return(p.create=function(m){return n.Buffer.isBuffer(m)?new a(m):o(m)})(h)}:o};p.create=r(),p.prototype._slice=n.Array.prototype.subarray||n.Array.prototype.slice,p.prototype.uint32=(function(){var h=4294967295;return function(){if(h=(this.buf[this.pos]&127)>>>0,this.buf[this.pos++]<128||(h=(h|(this.buf[this.pos]&127)<<7)>>>0,this.buf[this.pos++]<128)||(h=(h|(this.buf[this.pos]&127)<<14)>>>0,this.buf[this.pos++]<128)||(h=(h|(this.buf[this.pos]&127)<<21)>>>0,this.buf[this.pos++]<128)||(h=(h|(this.buf[this.pos]&15)<<28)>>>0,this.buf[this.pos++]<128))return h;if((this.pos+=5)>this.len)throw this.pos=this.len,l(this,10);return h}})(),p.prototype.int32=function(){return this.uint32()|0},p.prototype.sint32=function(){var h=this.uint32();return h>>>1^-(h&1)|0};function i(){var h=new u(0,0),m=0;if(this.len-this.pos>4){for(;m<4;++m)if(h.lo=(h.lo|(this.buf[this.pos]&127)<<m*7)>>>0,this.buf[this.pos++]<128)return h;if(h.lo=(h.lo|(this.buf[this.pos]&127)<<28)>>>0,h.hi=(h.hi|(this.buf[this.pos]&127)>>4)>>>0,this.buf[this.pos++]<128)return h;m=0}else{for(;m<3;++m){if(this.pos>=this.len)throw l(this);if(h.lo=(h.lo|(this.buf[this.pos]&127)<<m*7)>>>0,this.buf[this.pos++]<128)return h}return h.lo=(h.lo|(this.buf[this.pos++]&127)<<m*7)>>>0,h}if(this.len-this.pos>4){for(;m<5;++m)if(h.hi=(h.hi|(this.buf[this.pos]&127)<<m*7+3)>>>0,this.buf[this.pos++]<128)return h}else for(;m<5;++m){if(this.pos>=this.len)throw l(this);if(h.hi=(h.hi|(this.buf[this.pos]&127)<<m*7+3)>>>0,this.buf[this.pos++]<128)return h}throw Error("invalid varint encoding")}p.prototype.bool=function(){return this.uint32()!==0};function s(h,m){return(h[m-4]|h[m-3]<<8|h[m-2]<<16|h[m-1]<<24)>>>0}p.prototype.fixed32=function(){if(this.pos+4>this.len)throw l(this,4);return s(this.buf,this.pos+=4)},p.prototype.sfixed32=function(){if(this.pos+4>this.len)throw l(this,4);return s(this.buf,this.pos+=4)|0};function c(){if(this.pos+8>this.len)throw l(this,8);return new u(s(this.buf,this.pos+=4),s(this.buf,this.pos+=4))}p.prototype.float=function(){if(this.pos+4>this.len)throw l(this,4);var h=n.float.readFloatLE(this.buf,this.pos);return this.pos+=4,h},p.prototype.double=function(){if(this.pos+8>this.len)throw l(this,4);var h=n.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,h},p.prototype.bytes=function(){var h=this.uint32(),m=this.pos,b=this.pos+h;if(b>this.len)throw l(this,h);if(this.pos+=h,Array.isArray(this.buf))return this.buf.slice(m,b);if(m===b){var w=n.Buffer;return w?w.alloc(0):new this.buf.constructor(0)}return this._slice.call(this.buf,m,b)},p.prototype.string=function(){var h=this.bytes();return d.read(h,0,h.length)},p.prototype.skip=function(h){if(typeof h=="number"){if(this.pos+h>this.len)throw l(this,h);this.pos+=h}else do if(this.pos>=this.len)throw l(this);while(this.buf[this.pos++]&128);return this},p.prototype.skipType=function(h){switch(h){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;(h=this.uint32()&7)!==4;)this.skipType(h);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+h+" at offset "+this.pos)}return this},p._configure=function(h){a=h,p.create=r(),a._configure();var m=n.Long?"toLong":"toNumber";n.merge(p.prototype,{int64:function(){return i.call(this)[m](!1)},uint64:function(){return i.call(this)[m](!0)},sint64:function(){return i.call(this).zzDecode()[m](!1)},fixed64:function(){return c.call(this)[m](!0)},sfixed64:function(){return c.call(this)[m](!1)}})}}),Uh=oe((e,t)=>{t.exports=u;var n=bl();(u.prototype=Object.create(n.prototype)).constructor=u;var a=fr();function u(d){n.call(this,d)}u._configure=function(){a.Buffer&&(u.prototype._slice=a.Buffer.prototype.slice)},u.prototype.string=function(){var d=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+d,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+d,this.len))},u._configure()}),Hh=oe((e,t)=>{t.exports=a;var n=fr();(a.prototype=Object.create(n.EventEmitter.prototype)).constructor=a;function a(u,d,l){if(typeof u!="function")throw TypeError("rpcImpl must be a function");n.EventEmitter.call(this),this.rpcImpl=u,this.requestDelimited=!!d,this.responseDelimited=!!l}a.prototype.rpcCall=function u(d,l,p,o,r){if(!o)throw TypeError("request must be specified");var i=this;if(!r)return n.asPromise(u,i,d,l,p,o);if(!i.rpcImpl){setTimeout(function(){r(Error("already ended"))},0);return}try{return i.rpcImpl(d,l[i.requestDelimited?"encodeDelimited":"encode"](o).finish(),function(s,c){if(s)return i.emit("error",s,d),r(s);if(c===null){i.end(!0);return}if(!(c instanceof p))try{c=p[i.responseDelimited?"decodeDelimited":"decode"](c)}catch(h){return i.emit("error",h,d),r(h)}return i.emit("data",c,d),r(null,c)})}catch(s){i.emit("error",s,d),setTimeout(function(){r(s)},0);return}},a.prototype.end=function(u){return this.rpcImpl&&(u||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}}),jh=oe(e=>{var t=e;t.Service=Hh()}),Xh=oe((e,t)=>{t.exports={}}),Qh=oe(e=>{var t=e;t.build="minimal",t.Writer=hl(),t.BufferWriter=Nh(),t.Reader=bl(),t.BufferReader=Uh(),t.util=fr(),t.rpc=jh(),t.roots=Xh(),t.configure=n;function n(){t.util._configure(),t.Writer._configure(t.BufferWriter),t.Reader._configure(t.BufferReader)}n()}),em=oe((e,t)=>{t.exports=Qh()}),Yr=oe((e,t)=>{var n=em(),a=n.Reader,u=n.Writer,d=n.util,l=n.roots.default||(n.roots.default={});l.onnx=(function(){var p={};return p.Version=(function(){var o={},r=Object.create(o);return r[o[0]="_START_VERSION"]=0,r[o[1]="IR_VERSION_2017_10_10"]=1,r[o[2]="IR_VERSION_2017_10_30"]=2,r[o[3]="IR_VERSION_2017_11_3"]=3,r[o[4]="IR_VERSION_2019_1_22"]=4,r[o[5]="IR_VERSION_2019_3_18"]=5,r[o[6]="IR_VERSION_2019_9_19"]=6,r[o[7]="IR_VERSION_2020_5_8"]=7,r[o[8]="IR_VERSION_2021_7_30"]=8,r[o[9]="IR_VERSION"]=9,r})(),p.AttributeProto=(function(){function o(r){if(this.floats=[],this.ints=[],this.strings=[],this.tensors=[],this.graphs=[],this.sparseTensors=[],this.typeProtos=[],r)for(var i=Object.keys(r),s=0;s<i.length;++s)r[i[s]]!=null&&(this[i[s]]=r[i[s]])}return o.prototype.name="",o.prototype.refAttrName="",o.prototype.docString="",o.prototype.type=0,o.prototype.f=0,o.prototype.i=d.Long?d.Long.fromBits(0,0,!1):0,o.prototype.s=d.newBuffer([]),o.prototype.t=null,o.prototype.g=null,o.prototype.sparseTensor=null,o.prototype.tp=null,o.prototype.floats=d.emptyArray,o.prototype.ints=d.emptyArray,o.prototype.strings=d.emptyArray,o.prototype.tensors=d.emptyArray,o.prototype.graphs=d.emptyArray,o.prototype.sparseTensors=d.emptyArray,o.prototype.typeProtos=d.emptyArray,o.create=function(r){return new o(r)},o.encode=function(r,i){if(i||(i=u.create()),r.name!=null&&Object.hasOwnProperty.call(r,"name")&&i.uint32(10).string(r.name),r.f!=null&&Object.hasOwnProperty.call(r,"f")&&i.uint32(21).float(r.f),r.i!=null&&Object.hasOwnProperty.call(r,"i")&&i.uint32(24).int64(r.i),r.s!=null&&Object.hasOwnProperty.call(r,"s")&&i.uint32(34).bytes(r.s),r.t!=null&&Object.hasOwnProperty.call(r,"t")&&l.onnx.TensorProto.encode(r.t,i.uint32(42).fork()).ldelim(),r.g!=null&&Object.hasOwnProperty.call(r,"g")&&l.onnx.GraphProto.encode(r.g,i.uint32(50).fork()).ldelim(),r.floats!=null&&r.floats.length){i.uint32(58).fork();for(var s=0;s<r.floats.length;++s)i.float(r.floats[s]);i.ldelim()}if(r.ints!=null&&r.ints.length){i.uint32(66).fork();for(var s=0;s<r.ints.length;++s)i.int64(r.ints[s]);i.ldelim()}if(r.strings!=null&&r.strings.length)for(var s=0;s<r.strings.length;++s)i.uint32(74).bytes(r.strings[s]);if(r.tensors!=null&&r.tensors.length)for(var s=0;s<r.tensors.length;++s)l.onnx.TensorProto.encode(r.tensors[s],i.uint32(82).fork()).ldelim();if(r.graphs!=null&&r.graphs.length)for(var s=0;s<r.graphs.length;++s)l.onnx.GraphProto.encode(r.graphs[s],i.uint32(90).fork()).ldelim();if(r.docString!=null&&Object.hasOwnProperty.call(r,"docString")&&i.uint32(106).string(r.docString),r.tp!=null&&Object.hasOwnProperty.call(r,"tp")&&l.onnx.TypeProto.encode(r.tp,i.uint32(114).fork()).ldelim(),r.typeProtos!=null&&r.typeProtos.length)for(var s=0;s<r.typeProtos.length;++s)l.onnx.TypeProto.encode(r.typeProtos[s],i.uint32(122).fork()).ldelim();if(r.type!=null&&Object.hasOwnProperty.call(r,"type")&&i.uint32(160).int32(r.type),r.refAttrName!=null&&Object.hasOwnProperty.call(r,"refAttrName")&&i.uint32(170).string(r.refAttrName),r.sparseTensor!=null&&Object.hasOwnProperty.call(r,"sparseTensor")&&l.onnx.SparseTensorProto.encode(r.sparseTensor,i.uint32(178).fork()).ldelim(),r.sparseTensors!=null&&r.sparseTensors.length)for(var s=0;s<r.sparseTensors.length;++s)l.onnx.SparseTensorProto.encode(r.sparseTensors[s],i.uint32(186).fork()).ldelim();return i},o.encodeDelimited=function(r,i){return this.encode(r,i).ldelim()},o.decode=function(r,i){r instanceof a||(r=a.create(r));for(var s=i===void 0?r.len:r.pos+i,c=new l.onnx.AttributeProto;r.pos<s;){var h=r.uint32();switch(h>>>3){case 1:{c.name=r.string();break}case 21:{c.refAttrName=r.string();break}case 13:{c.docString=r.string();break}case 20:{c.type=r.int32();break}case 2:{c.f=r.float();break}case 3:{c.i=r.int64();break}case 4:{c.s=r.bytes();break}case 5:{c.t=l.onnx.TensorProto.decode(r,r.uint32());break}case 6:{c.g=l.onnx.GraphProto.decode(r,r.uint32());break}case 22:{c.sparseTensor=l.onnx.SparseTensorProto.decode(r,r.uint32());break}case 14:{c.tp=l.onnx.TypeProto.decode(r,r.uint32());break}case 7:{if(c.floats&&c.floats.length||(c.floats=[]),(h&7)===2)for(var m=r.uint32()+r.pos;r.pos<m;)c.floats.push(r.float());else c.floats.push(r.float());break}case 8:{if(c.ints&&c.ints.length||(c.ints=[]),(h&7)===2)for(var m=r.uint32()+r.pos;r.pos<m;)c.ints.push(r.int64());else c.ints.push(r.int64());break}case 9:{c.strings&&c.strings.length||(c.strings=[]),c.strings.push(r.bytes());break}case 10:{c.tensors&&c.tensors.length||(c.tensors=[]),c.tensors.push(l.onnx.TensorProto.decode(r,r.uint32()));break}case 11:{c.graphs&&c.graphs.length||(c.graphs=[]),c.graphs.push(l.onnx.GraphProto.decode(r,r.uint32()));break}case 23:{c.sparseTensors&&c.sparseTensors.length||(c.sparseTensors=[]),c.sparseTensors.push(l.onnx.SparseTensorProto.decode(r,r.uint32()));break}case 15:{c.typeProtos&&c.typeProtos.length||(c.typeProtos=[]),c.typeProtos.push(l.onnx.TypeProto.decode(r,r.uint32()));break}default:r.skipType(h&7);break}}return c},o.decodeDelimited=function(r){return r instanceof a||(r=new a(r)),this.decode(r,r.uint32())},o.verify=function(r){if(typeof r!="object"||r===null)return"object expected";if(r.name!=null&&r.hasOwnProperty("name")&&!d.isString(r.name))return"name: string expected";if(r.refAttrName!=null&&r.hasOwnProperty("refAttrName")&&!d.isString(r.refAttrName))return"refAttrName: string expected";if(r.docString!=null&&r.hasOwnProperty("docString")&&!d.isString(r.docString))return"docString: string expected";if(r.type!=null&&r.hasOwnProperty("type"))switch(r.type){default:return"type: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 11:case 13:case 6:case 7:case 8:case 9:case 10:case 12:case 14:break}if(r.f!=null&&r.hasOwnProperty("f")&&typeof r.f!="number")return"f: number expected";if(r.i!=null&&r.hasOwnProperty("i")&&!d.isInteger(r.i)&&!(r.i&&d.isInteger(r.i.low)&&d.isInteger(r.i.high)))return"i: integer|Long expected";if(r.s!=null&&r.hasOwnProperty("s")&&!(r.s&&typeof r.s.length=="number"||d.isString(r.s)))return"s: buffer expected";if(r.t!=null&&r.hasOwnProperty("t")){var i=l.onnx.TensorProto.verify(r.t);if(i)return"t."+i}if(r.g!=null&&r.hasOwnProperty("g")){var i=l.onnx.GraphProto.verify(r.g);if(i)return"g."+i}if(r.sparseTensor!=null&&r.hasOwnProperty("sparseTensor")){var i=l.onnx.SparseTensorProto.verify(r.sparseTensor);if(i)return"sparseTensor."+i}if(r.tp!=null&&r.hasOwnProperty("tp")){var i=l.onnx.TypeProto.verify(r.tp);if(i)return"tp."+i}if(r.floats!=null&&r.hasOwnProperty("floats")){if(!Array.isArray(r.floats))return"floats: array expected";for(var s=0;s<r.floats.length;++s)if(typeof r.floats[s]!="number")return"floats: number[] expected"}if(r.ints!=null&&r.hasOwnProperty("ints")){if(!Array.isArray(r.ints))return"ints: array expected";for(var s=0;s<r.ints.length;++s)if(!d.isInteger(r.ints[s])&&!(r.ints[s]&&d.isInteger(r.ints[s].low)&&d.isInteger(r.ints[s].high)))return"ints: integer|Long[] expected"}if(r.strings!=null&&r.hasOwnProperty("strings")){if(!Array.isArray(r.strings))return"strings: array expected";for(var s=0;s<r.strings.length;++s)if(!(r.strings[s]&&typeof r.strings[s].length=="number"||d.isString(r.strings[s])))return"strings: buffer[] expected"}if(r.tensors!=null&&r.hasOwnProperty("tensors")){if(!Array.isArray(r.tensors))return"tensors: array expected";for(var s=0;s<r.tensors.length;++s){var i=l.onnx.TensorProto.verify(r.tensors[s]);if(i)return"tensors."+i}}if(r.graphs!=null&&r.hasOwnProperty("graphs")){if(!Array.isArray(r.graphs))return"graphs: array expected";for(var s=0;s<r.graphs.length;++s){var i=l.onnx.GraphProto.verify(r.graphs[s]);if(i)return"graphs."+i}}if(r.sparseTensors!=null&&r.hasOwnProperty("sparseTensors")){if(!Array.isArray(r.sparseTensors))return"sparseTensors: array expected";for(var s=0;s<r.sparseTensors.length;++s){var i=l.onnx.SparseTensorProto.verify(r.sparseTensors[s]);if(i)return"sparseTensors."+i}}if(r.typeProtos!=null&&r.hasOwnProperty("typeProtos")){if(!Array.isArray(r.typeProtos))return"typeProtos: array expected";for(var s=0;s<r.typeProtos.length;++s){var i=l.onnx.TypeProto.verify(r.typeProtos[s]);if(i)return"typeProtos."+i}}return null},o.fromObject=function(r){if(r instanceof l.onnx.AttributeProto)return r;var i=new l.onnx.AttributeProto;switch(r.name!=null&&(i.name=String(r.name)),r.refAttrName!=null&&(i.refAttrName=String(r.refAttrName)),r.docString!=null&&(i.docString=String(r.docString)),r.type){default:if(typeof r.type=="number"){i.type=r.type;break}break;case"UNDEFINED":case 0:i.type=0;break;case"FLOAT":case 1:i.type=1;break;case"INT":case 2:i.type=2;break;case"STRING":case 3:i.type=3;break;case"TENSOR":case 4:i.type=4;break;case"GRAPH":case 5:i.type=5;break;case"SPARSE_TENSOR":case 11:i.type=11;break;case"TYPE_PROTO":case 13:i.type=13;break;case"FLOATS":case 6:i.type=6;break;case"INTS":case 7:i.type=7;break;case"STRINGS":case 8:i.type=8;break;case"TENSORS":case 9:i.type=9;break;case"GRAPHS":case 10:i.type=10;break;case"SPARSE_TENSORS":case 12:i.type=12;break;case"TYPE_PROTOS":case 14:i.type=14;break}if(r.f!=null&&(i.f=Number(r.f)),r.i!=null&&(d.Long?(i.i=d.Long.fromValue(r.i)).unsigned=!1:typeof r.i=="string"?i.i=parseInt(r.i,10):typeof r.i=="number"?i.i=r.i:typeof r.i=="object"&&(i.i=new d.LongBits(r.i.low>>>0,r.i.high>>>0).toNumber())),r.s!=null&&(typeof r.s=="string"?d.base64.decode(r.s,i.s=d.newBuffer(d.base64.length(r.s)),0):r.s.length>=0&&(i.s=r.s)),r.t!=null){if(typeof r.t!="object")throw TypeError(".onnx.AttributeProto.t: object expected");i.t=l.onnx.TensorProto.fromObject(r.t)}if(r.g!=null){if(typeof r.g!="object")throw TypeError(".onnx.AttributeProto.g: object expected");i.g=l.onnx.GraphProto.fromObject(r.g)}if(r.sparseTensor!=null){if(typeof r.sparseTensor!="object")throw TypeError(".onnx.AttributeProto.sparseTensor: object expected");i.sparseTensor=l.onnx.SparseTensorProto.fromObject(r.sparseTensor)}if(r.tp!=null){if(typeof r.tp!="object")throw TypeError(".onnx.AttributeProto.tp: object expected");i.tp=l.onnx.TypeProto.fromObject(r.tp)}if(r.floats){if(!Array.isArray(r.floats))throw TypeError(".onnx.AttributeProto.floats: array expected");i.floats=[];for(var s=0;s<r.floats.length;++s)i.floats[s]=Number(r.floats[s])}if(r.ints){if(!Array.isArray(r.ints))throw TypeError(".onnx.AttributeProto.ints: array expected");i.ints=[];for(var s=0;s<r.ints.length;++s)d.Long?(i.ints[s]=d.Long.fromValue(r.ints[s])).unsigned=!1:typeof r.ints[s]=="string"?i.ints[s]=parseInt(r.ints[s],10):typeof r.ints[s]=="number"?i.ints[s]=r.ints[s]:typeof r.ints[s]=="object"&&(i.ints[s]=new d.LongBits(r.ints[s].low>>>0,r.ints[s].high>>>0).toNumber())}if(r.strings){if(!Array.isArray(r.strings))throw TypeError(".onnx.AttributeProto.strings: array expected");i.strings=[];for(var s=0;s<r.strings.length;++s)typeof r.strings[s]=="string"?d.base64.decode(r.strings[s],i.strings[s]=d.newBuffer(d.base64.length(r.strings[s])),0):r.strings[s].length>=0&&(i.strings[s]=r.strings[s])}if(r.tensors){if(!Array.isArray(r.tensors))throw TypeError(".onnx.AttributeProto.tensors: array expected");i.tensors=[];for(var s=0;s<r.tensors.length;++s){if(typeof r.tensors[s]!="object")throw TypeError(".onnx.AttributeProto.tensors: object expected");i.tensors[s]=l.onnx.TensorProto.fromObject(r.tensors[s])}}if(r.graphs){if(!Array.isArray(r.graphs))throw TypeError(".onnx.AttributeProto.graphs: array expected");i.graphs=[];for(var s=0;s<r.graphs.length;++s){if(typeof r.graphs[s]!="object")throw TypeError(".onnx.AttributeProto.graphs: object expected");i.graphs[s]=l.onnx.GraphProto.fromObject(r.graphs[s])}}if(r.sparseTensors){if(!Array.isArray(r.sparseTensors))throw TypeError(".onnx.AttributeProto.sparseTensors: array expected");i.sparseTensors=[];for(var s=0;s<r.sparseTensors.length;++s){if(typeof r.sparseTensors[s]!="object")throw TypeError(".onnx.AttributeProto.sparseTensors: object expected");i.sparseTensors[s]=l.onnx.SparseTensorProto.fromObject(r.sparseTensors[s])}}if(r.typeProtos){if(!Array.isArray(r.typeProtos))throw TypeError(".onnx.AttributeProto.typeProtos: array expected");i.typeProtos=[];for(var s=0;s<r.typeProtos.length;++s){if(typeof r.typeProtos[s]!="object")throw TypeError(".onnx.AttributeProto.typeProtos: object expected");i.typeProtos[s]=l.onnx.TypeProto.fromObject(r.typeProtos[s])}}return i},o.toObject=function(r,i){i||(i={});var s={};if((i.arrays||i.defaults)&&(s.floats=[],s.ints=[],s.strings=[],s.tensors=[],s.graphs=[],s.typeProtos=[],s.sparseTensors=[]),i.defaults){if(s.name="",s.f=0,d.Long){var c=new d.Long(0,0,!1);s.i=i.longs===String?c.toString():i.longs===Number?c.toNumber():c}else s.i=i.longs===String?"0":0;i.bytes===String?s.s="":(s.s=[],i.bytes!==Array&&(s.s=d.newBuffer(s.s))),s.t=null,s.g=null,s.docString="",s.tp=null,s.type=i.enums===String?"UNDEFINED":0,s.refAttrName="",s.sparseTensor=null}if(r.name!=null&&r.hasOwnProperty("name")&&(s.name=r.name),r.f!=null&&r.hasOwnProperty("f")&&(s.f=i.json&&!isFinite(r.f)?String(r.f):r.f),r.i!=null&&r.hasOwnProperty("i")&&(typeof r.i=="number"?s.i=i.longs===String?String(r.i):r.i:s.i=i.longs===String?d.Long.prototype.toString.call(r.i):i.longs===Number?new d.LongBits(r.i.low>>>0,r.i.high>>>0).toNumber():r.i),r.s!=null&&r.hasOwnProperty("s")&&(s.s=i.bytes===String?d.base64.encode(r.s,0,r.s.length):i.bytes===Array?Array.prototype.slice.call(r.s):r.s),r.t!=null&&r.hasOwnProperty("t")&&(s.t=l.onnx.TensorProto.toObject(r.t,i)),r.g!=null&&r.hasOwnProperty("g")&&(s.g=l.onnx.GraphProto.toObject(r.g,i)),r.floats&&r.floats.length){s.floats=[];for(var h=0;h<r.floats.length;++h)s.floats[h]=i.json&&!isFinite(r.floats[h])?String(r.floats[h]):r.floats[h]}if(r.ints&&r.ints.length){s.ints=[];for(var h=0;h<r.ints.length;++h)typeof r.ints[h]=="number"?s.ints[h]=i.longs===String?String(r.ints[h]):r.ints[h]:s.ints[h]=i.longs===String?d.Long.prototype.toString.call(r.ints[h]):i.longs===Number?new d.LongBits(r.ints[h].low>>>0,r.ints[h].high>>>0).toNumber():r.ints[h]}if(r.strings&&r.strings.length){s.strings=[];for(var h=0;h<r.strings.length;++h)s.strings[h]=i.bytes===String?d.base64.encode(r.strings[h],0,r.strings[h].length):i.bytes===Array?Array.prototype.slice.call(r.strings[h]):r.strings[h]}if(r.tensors&&r.tensors.length){s.tensors=[];for(var h=0;h<r.tensors.length;++h)s.tensors[h]=l.onnx.TensorProto.toObject(r.tensors[h],i)}if(r.graphs&&r.graphs.length){s.graphs=[];for(var h=0;h<r.graphs.length;++h)s.graphs[h]=l.onnx.GraphProto.toObject(r.graphs[h],i)}if(r.docString!=null&&r.hasOwnProperty("docString")&&(s.docString=r.docString),r.tp!=null&&r.hasOwnProperty("tp")&&(s.tp=l.onnx.TypeProto.toObject(r.tp,i)),r.typeProtos&&r.typeProtos.length){s.typeProtos=[];for(var h=0;h<r.typeProtos.length;++h)s.typeProtos[h]=l.onnx.TypeProto.toObject(r.typeProtos[h],i)}if(r.type!=null&&r.hasOwnProperty("type")&&(s.type=i.enums===String?l.onnx.AttributeProto.AttributeType[r.type]===void 0?r.type:l.onnx.AttributeProto.AttributeType[r.type]:r.type),r.refAttrName!=null&&r.hasOwnProperty("refAttrName")&&(s.refAttrName=r.refAttrName),r.sparseTensor!=null&&r.hasOwnProperty("sparseTensor")&&(s.sparseTensor=l.onnx.SparseTensorProto.toObject(r.sparseTensor,i)),r.sparseTensors&&r.sparseTensors.length){s.sparseTensors=[];for(var h=0;h<r.sparseTensors.length;++h)s.sparseTensors[h]=l.onnx.SparseTensorProto.toObject(r.sparseTensors[h],i)}return s},o.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},o.getTypeUrl=function(r){return r===void 0&&(r="type.googleapis.com"),r+"/onnx.AttributeProto"},o.AttributeType=(function(){var r={},i=Object.create(r);return i[r[0]="UNDEFINED"]=0,i[r[1]="FLOAT"]=1,i[r[2]="INT"]=2,i[r[3]="STRING"]=3,i[r[4]="TENSOR"]=4,i[r[5]="GRAPH"]=5,i[r[11]="SPARSE_TENSOR"]=11,i[r[13]="TYPE_PROTO"]=13,i[r[6]="FLOATS"]=6,i[r[7]="INTS"]=7,i[r[8]="STRINGS"]=8,i[r[9]="TENSORS"]=9,i[r[10]="GRAPHS"]=10,i[r[12]="SPARSE_TENSORS"]=12,i[r[14]="TYPE_PROTOS"]=14,i})(),o})(),p.ValueInfoProto=(function(){function o(r){if(r)for(var i=Object.keys(r),s=0;s<i.length;++s)r[i[s]]!=null&&(this[i[s]]=r[i[s]])}return o.prototype.name="",o.prototype.type=null,o.prototype.docString="",o.create=function(r){return new o(r)},o.encode=function(r,i){return i||(i=u.create()),r.name!=null&&Object.hasOwnProperty.call(r,"name")&&i.uint32(10).string(r.name),r.type!=null&&Object.hasOwnProperty.call(r,"type")&&l.onnx.TypeProto.encode(r.type,i.uint32(18).fork()).ldelim(),r.docString!=null&&Object.hasOwnProperty.call(r,"docString")&&i.uint32(26).string(r.docString),i},o.encodeDelimited=function(r,i){return this.encode(r,i).ldelim()},o.decode=function(r,i){r instanceof a||(r=a.create(r));for(var s=i===void 0?r.len:r.pos+i,c=new l.onnx.ValueInfoProto;r.pos<s;){var h=r.uint32();switch(h>>>3){case 1:{c.name=r.string();break}case 2:{c.type=l.onnx.TypeProto.decode(r,r.uint32());break}case 3:{c.docString=r.string();break}default:r.skipType(h&7);break}}return c},o.decodeDelimited=function(r){return r instanceof a||(r=new a(r)),this.decode(r,r.uint32())},o.verify=function(r){if(typeof r!="object"||r===null)return"object expected";if(r.name!=null&&r.hasOwnProperty("name")&&!d.isString(r.name))return"name: string expected";if(r.type!=null&&r.hasOwnProperty("type")){var i=l.onnx.TypeProto.verify(r.type);if(i)return"type."+i}return r.docString!=null&&r.hasOwnProperty("docString")&&!d.isString(r.docString)?"docString: string expected":null},o.fromObject=function(r){if(r instanceof l.onnx.ValueInfoProto)return r;var i=new l.onnx.ValueInfoProto;if(r.name!=null&&(i.name=String(r.name)),r.type!=null){if(typeof r.type!="object")throw TypeError(".onnx.ValueInfoProto.type: object expected");i.type=l.onnx.TypeProto.fromObject(r.type)}return r.docString!=null&&(i.docString=String(r.docString)),i},o.toObject=function(r,i){i||(i={});var s={};return i.defaults&&(s.name="",s.type=null,s.docString=""),r.name!=null&&r.hasOwnProperty("name")&&(s.name=r.name),r.type!=null&&r.hasOwnProperty("type")&&(s.type=l.onnx.TypeProto.toObject(r.type,i)),r.docString!=null&&r.hasOwnProperty("docString")&&(s.docString=r.docString),s},o.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},o.getTypeUrl=function(r){return r===void 0&&(r="type.googleapis.com"),r+"/onnx.ValueInfoProto"},o})(),p.NodeProto=(function(){function o(r){if(this.input=[],this.output=[],this.attribute=[],r)for(var i=Object.keys(r),s=0;s<i.length;++s)r[i[s]]!=null&&(this[i[s]]=r[i[s]])}return o.prototype.input=d.emptyArray,o.prototype.output=d.emptyArray,o.prototype.name="",o.prototype.opType="",o.prototype.domain="",o.prototype.attribute=d.emptyArray,o.prototype.docString="",o.create=function(r){return new o(r)},o.encode=function(r,i){if(i||(i=u.create()),r.input!=null&&r.input.length)for(var s=0;s<r.input.length;++s)i.uint32(10).string(r.input[s]);if(r.output!=null&&r.output.length)for(var s=0;s<r.output.length;++s)i.uint32(18).string(r.output[s]);if(r.name!=null&&Object.hasOwnProperty.call(r,"name")&&i.uint32(26).string(r.name),r.opType!=null&&Object.hasOwnProperty.call(r,"opType")&&i.uint32(34).string(r.opType),r.attribute!=null&&r.attribute.length)for(var s=0;s<r.attribute.length;++s)l.onnx.AttributeProto.encode(r.attribute[s],i.uint32(42).fork()).ldelim();return r.docString!=null&&Object.hasOwnProperty.call(r,"docString")&&i.uint32(50).string(r.docString),r.domain!=null&&Object.hasOwnProperty.call(r,"domain")&&i.uint32(58).string(r.domain),i},o.encodeDelimited=function(r,i){return this.encode(r,i).ldelim()},o.decode=function(r,i){r instanceof a||(r=a.create(r));for(var s=i===void 0?r.len:r.pos+i,c=new l.onnx.NodeProto;r.pos<s;){var h=r.uint32();switch(h>>>3){case 1:{c.input&&c.input.length||(c.input=[]),c.input.push(r.string());break}case 2:{c.output&&c.output.length||(c.output=[]),c.output.push(r.string());break}case 3:{c.name=r.string();break}case 4:{c.opType=r.string();break}case 7:{c.domain=r.string();break}case 5:{c.attribute&&c.attribute.length||(c.attribute=[]),c.attribute.push(l.onnx.AttributeProto.decode(r,r.uint32()));break}case 6:{c.docString=r.string();break}default:r.skipType(h&7);break}}return c},o.decodeDelimited=function(r){return r instanceof a||(r=new a(r)),this.decode(r,r.uint32())},o.verify=function(r){if(typeof r!="object"||r===null)return"object expected";if(r.input!=null&&r.hasOwnProperty("input")){if(!Array.isArray(r.input))return"input: array expected";for(var i=0;i<r.input.length;++i)if(!d.isString(r.input[i]))return"input: string[] expected"}if(r.output!=null&&r.hasOwnProperty("output")){if(!Array.isArray(r.output))return"output: array expected";for(var i=0;i<r.output.length;++i)if(!d.isString(r.output[i]))return"output: string[] expected"}if(r.name!=null&&r.hasOwnProperty("name")&&!d.isString(r.name))return"name: string expected";if(r.opType!=null&&r.hasOwnProperty("opType")&&!d.isString(r.opType))return"opType: string expected";if(r.domain!=null&&r.hasOwnProperty("domain")&&!d.isString(r.domain))return"domain: string expected";if(r.attribute!=null&&r.hasOwnProperty("attribute")){if(!Array.isArray(r.attribute))return"attribute: array expected";for(var i=0;i<r.attribute.length;++i){var s=l.onnx.AttributeProto.verify(r.attribute[i]);if(s)return"attribute."+s}}return r.docString!=null&&r.hasOwnProperty("docString")&&!d.isString(r.docString)?"docString: string expected":null},o.fromObject=function(r){if(r instanceof l.onnx.NodeProto)return r;var i=new l.onnx.NodeProto;if(r.input){if(!Array.isArray(r.input))throw TypeError(".onnx.NodeProto.input: array expected");i.input=[];for(var s=0;s<r.input.length;++s)i.input[s]=String(r.input[s])}if(r.output){if(!Array.isArray(r.output))throw TypeError(".onnx.NodeProto.output: array expected");i.output=[];for(var s=0;s<r.output.length;++s)i.output[s]=String(r.output[s])}if(r.name!=null&&(i.name=String(r.name)),r.opType!=null&&(i.opType=String(r.opType)),r.domain!=null&&(i.domain=String(r.domain)),r.attribute){if(!Array.isArray(r.attribute))throw TypeError(".onnx.NodeProto.attribute: array expected");i.attribute=[];for(var s=0;s<r.attribute.length;++s){if(typeof r.attribute[s]!="object")throw TypeError(".onnx.NodeProto.attribute: object expected");i.attribute[s]=l.onnx.AttributeProto.fromObject(r.attribute[s])}}return r.docString!=null&&(i.docString=String(r.docString)),i},o.toObject=function(r,i){i||(i={});var s={};if((i.arrays||i.defaults)&&(s.input=[],s.output=[],s.attribute=[]),i.defaults&&(s.name="",s.opType="",s.docString="",s.domain=""),r.input&&r.input.length){s.input=[];for(var c=0;c<r.input.length;++c)s.input[c]=r.input[c]}if(r.output&&r.output.length){s.output=[];for(var c=0;c<r.output.length;++c)s.output[c]=r.output[c]}if(r.name!=null&&r.hasOwnProperty("name")&&(s.name=r.name),r.opType!=null&&r.hasOwnProperty("opType")&&(s.opType=r.opType),r.attribute&&r.attribute.length){s.attribute=[];for(var c=0;c<r.attribute.length;++c)s.attribute[c]=l.onnx.AttributeProto.toObject(r.attribute[c],i)}return r.docString!=null&&r.hasOwnProperty("docString")&&(s.docString=r.docString),r.domain!=null&&r.hasOwnProperty("domain")&&(s.domain=r.domain),s},o.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},o.getTypeUrl=function(r){return r===void 0&&(r="type.googleapis.com"),r+"/onnx.NodeProto"},o})(),p.TrainingInfoProto=(function(){function o(r){if(this.initializationBinding=[],this.updateBinding=[],r)for(var i=Object.keys(r),s=0;s<i.length;++s)r[i[s]]!=null&&(this[i[s]]=r[i[s]])}return o.prototype.initialization=null,o.prototype.algorithm=null,o.prototype.initializationBinding=d.emptyArray,o.prototype.updateBinding=d.emptyArray,o.create=function(r){return new o(r)},o.encode=function(r,i){if(i||(i=u.create()),r.initialization!=null&&Object.hasOwnProperty.call(r,"initialization")&&l.onnx.GraphProto.encode(r.initialization,i.uint32(10).fork()).ldelim(),r.algorithm!=null&&Object.hasOwnProperty.call(r,"algorithm")&&l.onnx.GraphProto.encode(r.algorithm,i.uint32(18).fork()).ldelim(),r.initializationBinding!=null&&r.initializationBinding.length)for(var s=0;s<r.initializationBinding.length;++s)l.onnx.StringStringEntryProto.encode(r.initializationBinding[s],i.uint32(26).fork()).ldelim();if(r.updateBinding!=null&&r.updateBinding.length)for(var s=0;s<r.updateBinding.length;++s)l.onnx.StringStringEntryProto.encode(r.updateBinding[s],i.uint32(34).fork()).ldelim();return i},o.encodeDelimited=function(r,i){return this.encode(r,i).ldelim()},o.decode=function(r,i){r instanceof a||(r=a.create(r));for(var s=i===void 0?r.len:r.pos+i,c=new l.onnx.TrainingInfoProto;r.pos<s;){var h=r.uint32();switch(h>>>3){case 1:{c.initialization=l.onnx.GraphProto.decode(r,r.uint32());break}case 2:{c.algorithm=l.onnx.GraphProto.decode(r,r.uint32());break}case 3:{c.initializationBinding&&c.initializationBinding.length||(c.initializationBinding=[]),c.initializationBinding.push(l.onnx.StringStringEntryProto.decode(r,r.uint32()));break}case 4:{c.updateBinding&&c.updateBinding.length||(c.updateBinding=[]),c.updateBinding.push(l.onnx.StringStringEntryProto.decode(r,r.uint32()));break}default:r.skipType(h&7);break}}return c},o.decodeDelimited=function(r){return r instanceof a||(r=new a(r)),this.decode(r,r.uint32())},o.verify=function(r){if(typeof r!="object"||r===null)return"object expected";if(r.initialization!=null&&r.hasOwnProperty("initialization")){var i=l.onnx.GraphProto.verify(r.initialization);if(i)return"initialization."+i}if(r.algorithm!=null&&r.hasOwnProperty("algorithm")){var i=l.onnx.GraphProto.verify(r.algorithm);if(i)return"algorithm."+i}if(r.initializationBinding!=null&&r.hasOwnProperty("initializationBinding")){if(!Array.isArray(r.initializationBinding))return"initializationBinding: array expected";for(var s=0;s<r.initializationBinding.length;++s){var i=l.onnx.StringStringEntryProto.verify(r.initializationBinding[s]);if(i)return"initializationBinding."+i}}if(r.updateBinding!=null&&r.hasOwnProperty("updateBinding")){if(!Array.isArray(r.updateBinding))return"updateBinding: array expected";for(var s=0;s<r.updateBinding.length;++s){var i=l.onnx.StringStringEntryProto.verify(r.updateBinding[s]);if(i)return"updateBinding."+i}}return null},o.fromObject=function(r){if(r instanceof l.onnx.TrainingInfoProto)return r;var i=new l.onnx.TrainingInfoProto;if(r.initialization!=null){if(typeof r.initialization!="object")throw TypeError(".onnx.TrainingInfoProto.initialization: object expected");i.initialization=l.onnx.GraphProto.fromObject(r.initialization)}if(r.algorithm!=null){if(typeof r.algorithm!="object")throw TypeError(".onnx.TrainingInfoProto.algorithm: object expected");i.algorithm=l.onnx.GraphProto.fromObject(r.algorithm)}if(r.initializationBinding){if(!Array.isArray(r.initializationBinding))throw TypeError(".onnx.TrainingInfoProto.initializationBinding: array expected");i.initializationBinding=[];for(var s=0;s<r.initializationBinding.length;++s){if(typeof r.initializationBinding[s]!="object")throw TypeError(".onnx.TrainingInfoProto.initializationBinding: object expected");i.initializationBinding[s]=l.onnx.StringStringEntryProto.fromObject(r.initializationBinding[s])}}if(r.updateBinding){if(!Array.isArray(r.updateBinding))throw TypeError(".onnx.TrainingInfoProto.updateBinding: array expected");i.updateBinding=[];for(var s=0;s<r.updateBinding.length;++s){if(typeof r.updateBinding[s]!="object")throw TypeError(".onnx.TrainingInfoProto.updateBinding: object expected");i.updateBinding[s]=l.onnx.StringStringEntryProto.fromObject(r.updateBinding[s])}}return i},o.toObject=function(r,i){i||(i={});var s={};if((i.arrays||i.defaults)&&(s.initializationBinding=[],s.updateBinding=[]),i.defaults&&(s.initialization=null,s.algorithm=null),r.initialization!=null&&r.hasOwnProperty("initialization")&&(s.initialization=l.onnx.GraphProto.toObject(r.initialization,i)),r.algorithm!=null&&r.hasOwnProperty("algorithm")&&(s.algorithm=l.onnx.GraphProto.toObject(r.algorithm,i)),r.initializationBinding&&r.initializationBinding.length){s.initializationBinding=[];for(var c=0;c<r.initializationBinding.length;++c)s.initializationBinding[c]=l.onnx.StringStringEntryProto.toObject(r.initializationBinding[c],i)}if(r.updateBinding&&r.updateBinding.length){s.updateBinding=[];for(var c=0;c<r.updateBinding.length;++c)s.updateBinding[c]=l.onnx.StringStringEntryProto.toObject(r.updateBinding[c],i)}return s},o.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},o.getTypeUrl=function(r){return r===void 0&&(r="type.googleapis.com"),r+"/onnx.TrainingInfoProto"},o})(),p.ModelProto=(function(){function o(r){if(this.opsetImport=[],this.metadataProps=[],this.trainingInfo=[],this.functions=[],r)for(var i=Object.keys(r),s=0;s<i.length;++s)r[i[s]]!=null&&(this[i[s]]=r[i[s]])}return o.prototype.irVersion=d.Long?d.Long.fromBits(0,0,!1):0,o.prototype.opsetImport=d.emptyArray,o.prototype.producerName="",o.prototype.producerVersion="",o.prototype.domain="",o.prototype.modelVersion=d.Long?d.Long.fromBits(0,0,!1):0,o.prototype.docString="",o.prototype.graph=null,o.prototype.metadataProps=d.emptyArray,o.prototype.trainingInfo=d.emptyArray,o.prototype.functions=d.emptyArray,o.create=function(r){return new o(r)},o.encode=function(r,i){if(i||(i=u.create()),r.irVersion!=null&&Object.hasOwnProperty.call(r,"irVersion")&&i.uint32(8).int64(r.irVersion),r.producerName!=null&&Object.hasOwnProperty.call(r,"producerName")&&i.uint32(18).string(r.producerName),r.producerVersion!=null&&Object.hasOwnProperty.call(r,"producerVersion")&&i.uint32(26).string(r.producerVersion),r.domain!=null&&Object.hasOwnProperty.call(r,"domain")&&i.uint32(34).string(r.domain),r.modelVersion!=null&&Object.hasOwnProperty.call(r,"modelVersion")&&i.uint32(40).int64(r.modelVersion),r.docString!=null&&Object.hasOwnProperty.call(r,"docString")&&i.uint32(50).string(r.docString),r.graph!=null&&Object.hasOwnProperty.call(r,"graph")&&l.onnx.GraphProto.encode(r.graph,i.uint32(58).fork()).ldelim(),r.opsetImport!=null&&r.opsetImport.length)for(var s=0;s<r.opsetImport.length;++s)l.onnx.OperatorSetIdProto.encode(r.opsetImport[s],i.uint32(66).fork()).ldelim();if(r.metadataProps!=null&&r.metadataProps.length)for(var s=0;s<r.metadataProps.length;++s)l.onnx.StringStringEntryProto.encode(r.metadataProps[s],i.uint32(114).fork()).ldelim();if(r.trainingInfo!=null&&r.trainingInfo.length)for(var s=0;s<r.trainingInfo.length;++s)l.onnx.TrainingInfoProto.encode(r.trainingInfo[s],i.uint32(162).fork()).ldelim();if(r.functions!=null&&r.functions.length)for(var s=0;s<r.functions.length;++s)l.onnx.FunctionProto.encode(r.functions[s],i.uint32(202).fork()).ldelim();return i},o.encodeDelimited=function(r,i){return this.encode(r,i).ldelim()},o.decode=function(r,i){r instanceof a||(r=a.create(r));for(var s=i===void 0?r.len:r.pos+i,c=new l.onnx.ModelProto;r.pos<s;){var h=r.uint32();switch(h>>>3){case 1:{c.irVersion=r.int64();break}case 8:{c.opsetImport&&c.opsetImport.length||(c.opsetImport=[]),c.opsetImport.push(l.onnx.OperatorSetIdProto.decode(r,r.uint32()));break}case 2:{c.producerName=r.string();break}case 3:{c.producerVersion=r.string();break}case 4:{c.domain=r.string();break}case 5:{c.modelVersion=r.int64();break}case 6:{c.docString=r.string();break}case 7:{c.graph=l.onnx.GraphProto.decode(r,r.uint32());break}case 14:{c.metadataProps&&c.metadataProps.length||(c.metadataProps=[]),c.metadataProps.push(l.onnx.StringStringEntryProto.decode(r,r.uint32()));break}case 20:{c.trainingInfo&&c.trainingInfo.length||(c.trainingInfo=[]),c.trainingInfo.push(l.onnx.TrainingInfoProto.decode(r,r.uint32()));break}case 25:{c.functions&&c.functions.length||(c.functions=[]),c.functions.push(l.onnx.FunctionProto.decode(r,r.uint32()));break}default:r.skipType(h&7);break}}return c},o.decodeDelimited=function(r){return r instanceof a||(r=new a(r)),this.decode(r,r.uint32())},o.verify=function(r){if(typeof r!="object"||r===null)return"object expected";if(r.irVersion!=null&&r.hasOwnProperty("irVersion")&&!d.isInteger(r.irVersion)&&!(r.irVersion&&d.isInteger(r.irVersion.low)&&d.isInteger(r.irVersion.high)))return"irVersion: integer|Long expected";if(r.opsetImport!=null&&r.hasOwnProperty("opsetImport")){if(!Array.isArray(r.opsetImport))return"opsetImport: array expected";for(var i=0;i<r.opsetImport.length;++i){var s=l.onnx.OperatorSetIdProto.verify(r.opsetImport[i]);if(s)return"opsetImport."+s}}if(r.producerName!=null&&r.hasOwnProperty("producerName")&&!d.isString(r.producerName))return"producerName: string expected";if(r.producerVersion!=null&&r.hasOwnProperty("producerVersion")&&!d.isString(r.producerVersion))return"producerVersion: string expected";if(r.domain!=null&&r.hasOwnProperty("domain")&&!d.isString(r.domain))return"domain: string expected";if(r.modelVersion!=null&&r.hasOwnProperty("modelVersion")&&!d.isInteger(r.modelVersion)&&!(r.modelVersion&&d.isInteger(r.modelVersion.low)&&d.isInteger(r.modelVersion.high)))return"modelVersion: integer|Long expected";if(r.docString!=null&&r.hasOwnProperty("docString")&&!d.isString(r.docString))return"docString: string expected";if(r.graph!=null&&r.hasOwnProperty("graph")){var s=l.onnx.GraphProto.verify(r.graph);if(s)return"graph."+s}if(r.metadataProps!=null&&r.hasOwnProperty("metadataProps")){if(!Array.isArray(r.metadataProps))return"metadataProps: array expected";for(var i=0;i<r.metadataProps.length;++i){var s=l.onnx.StringStringEntryProto.verify(r.metadataProps[i]);if(s)return"metadataProps."+s}}if(r.trainingInfo!=null&&r.hasOwnProperty("trainingInfo")){if(!Array.isArray(r.trainingInfo))return"trainingInfo: array expected";for(var i=0;i<r.trainingInfo.length;++i){var s=l.onnx.TrainingInfoProto.verify(r.trainingInfo[i]);if(s)return"trainingInfo."+s}}if(r.functions!=null&&r.hasOwnProperty("functions")){if(!Array.isArray(r.functions))return"functions: array expected";for(var i=0;i<r.functions.length;++i){var s=l.onnx.FunctionProto.verify(r.functions[i]);if(s)return"functions."+s}}return null},o.fromObject=function(r){if(r instanceof l.onnx.ModelProto)return r;var i=new l.onnx.ModelProto;if(r.irVersion!=null&&(d.Long?(i.irVersion=d.Long.fromValue(r.irVersion)).unsigned=!1:typeof r.irVersion=="string"?i.irVersion=parseInt(r.irVersion,10):typeof r.irVersion=="number"?i.irVersion=r.irVersion:typeof r.irVersion=="object"&&(i.irVersion=new d.LongBits(r.irVersion.low>>>0,r.irVersion.high>>>0).toNumber())),r.opsetImport){if(!Array.isArray(r.opsetImport))throw TypeError(".onnx.ModelProto.opsetImport: array expected");i.opsetImport=[];for(var s=0;s<r.opsetImport.length;++s){if(typeof r.opsetImport[s]!="object")throw TypeError(".onnx.ModelProto.opsetImport: object expected");i.opsetImport[s]=l.onnx.OperatorSetIdProto.fromObject(r.opsetImport[s])}}if(r.producerName!=null&&(i.producerName=String(r.producerName)),r.producerVersion!=null&&(i.producerVersion=String(r.producerVersion)),r.domain!=null&&(i.domain=String(r.domain)),r.modelVersion!=null&&(d.Long?(i.modelVersion=d.Long.fromValue(r.modelVersion)).unsigned=!1:typeof r.modelVersion=="string"?i.modelVersion=parseInt(r.modelVersion,10):typeof r.modelVersion=="number"?i.modelVersion=r.modelVersion:typeof r.modelVersion=="object"&&(i.modelVersion=new d.LongBits(r.modelVersion.low>>>0,r.modelVersion.high>>>0).toNumber())),r.docString!=null&&(i.docString=String(r.docString)),r.graph!=null){if(typeof r.graph!="object")throw TypeError(".onnx.ModelProto.graph: object expected");i.graph=l.onnx.GraphProto.fromObject(r.graph)}if(r.metadataProps){if(!Array.isArray(r.metadataProps))throw TypeError(".onnx.ModelProto.metadataProps: array expected");i.metadataProps=[];for(var s=0;s<r.metadataProps.length;++s){if(typeof r.metadataProps[s]!="object")throw TypeError(".onnx.ModelProto.metadataProps: object expected");i.metadataProps[s]=l.onnx.StringStringEntryProto.fromObject(r.metadataProps[s])}}if(r.trainingInfo){if(!Array.isArray(r.trainingInfo))throw TypeError(".onnx.ModelProto.trainingInfo: array expected");i.trainingInfo=[];for(var s=0;s<r.trainingInfo.length;++s){if(typeof r.trainingInfo[s]!="object")throw TypeError(".onnx.ModelProto.trainingInfo: object expected");i.trainingInfo[s]=l.onnx.TrainingInfoProto.fromObject(r.trainingInfo[s])}}if(r.functions){if(!Array.isArray(r.functions))throw TypeError(".onnx.ModelProto.functions: array expected");i.functions=[];for(var s=0;s<r.functions.length;++s){if(typeof r.functions[s]!="object")throw TypeError(".onnx.ModelProto.functions: object expected");i.functions[s]=l.onnx.FunctionProto.fromObject(r.functions[s])}}return i},o.toObject=function(r,i){i||(i={});var s={};if((i.arrays||i.defaults)&&(s.opsetImport=[],s.metadataProps=[],s.trainingInfo=[],s.functions=[]),i.defaults){if(d.Long){var c=new d.Long(0,0,!1);s.irVersion=i.longs===String?c.toString():i.longs===Number?c.toNumber():c}else s.irVersion=i.longs===String?"0":0;if(s.producerName="",s.producerVersion="",s.domain="",d.Long){var c=new d.Long(0,0,!1);s.modelVersion=i.longs===String?c.toString():i.longs===Number?c.toNumber():c}else s.modelVersion=i.longs===String?"0":0;s.docString="",s.graph=null}if(r.irVersion!=null&&r.hasOwnProperty("irVersion")&&(typeof r.irVersion=="number"?s.irVersion=i.longs===String?String(r.irVersion):r.irVersion:s.irVersion=i.longs===String?d.Long.prototype.toString.call(r.irVersion):i.longs===Number?new d.LongBits(r.irVersion.low>>>0,r.irVersion.high>>>0).toNumber():r.irVersion),r.producerName!=null&&r.hasOwnProperty("producerName")&&(s.producerName=r.producerName),r.producerVersion!=null&&r.hasOwnProperty("producerVersion")&&(s.producerVersion=r.producerVersion),r.domain!=null&&r.hasOwnProperty("domain")&&(s.domain=r.domain),r.modelVersion!=null&&r.hasOwnProperty("modelVersion")&&(typeof r.modelVersion=="number"?s.modelVersion=i.longs===String?String(r.modelVersion):r.modelVersion:s.modelVersion=i.longs===String?d.Long.prototype.toString.call(r.modelVersion):i.longs===Number?new d.LongBits(r.modelVersion.low>>>0,r.modelVersion.high>>>0).toNumber():r.modelVersion),r.docString!=null&&r.hasOwnProperty("docString")&&(s.docString=r.docString),r.graph!=null&&r.hasOwnProperty("graph")&&(s.graph=l.onnx.GraphProto.toObject(r.graph,i)),r.opsetImport&&r.opsetImport.length){s.opsetImport=[];for(var h=0;h<r.opsetImport.length;++h)s.opsetImport[h]=l.onnx.OperatorSetIdProto.toObject(r.opsetImport[h],i)}if(r.metadataProps&&r.metadataProps.length){s.metadataProps=[];for(var h=0;h<r.metadataProps.length;++h)s.metadataProps[h]=l.onnx.StringStringEntryProto.toObject(r.metadataProps[h],i)}if(r.trainingInfo&&r.trainingInfo.length){s.trainingInfo=[];for(var h=0;h<r.trainingInfo.length;++h)s.trainingInfo[h]=l.onnx.TrainingInfoProto.toObject(r.trainingInfo[h],i)}if(r.functions&&r.functions.length){s.functions=[];for(var h=0;h<r.functions.length;++h)s.functions[h]=l.onnx.FunctionProto.toObject(r.functions[h],i)}return s},o.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},o.getTypeUrl=function(r){return r===void 0&&(r="type.googleapis.com"),r+"/onnx.ModelProto"},o})(),p.StringStringEntryProto=(function(){function o(r){if(r)for(var i=Object.keys(r),s=0;s<i.length;++s)r[i[s]]!=null&&(this[i[s]]=r[i[s]])}return o.prototype.key="",o.prototype.value="",o.create=function(r){return new o(r)},o.encode=function(r,i){return i||(i=u.create()),r.key!=null&&Object.hasOwnProperty.call(r,"key")&&i.uint32(10).string(r.key),r.value!=null&&Object.hasOwnProperty.call(r,"value")&&i.uint32(18).string(r.value),i},o.encodeDelimited=function(r,i){return this.encode(r,i).ldelim()},o.decode=function(r,i){r instanceof a||(r=a.create(r));for(var s=i===void 0?r.len:r.pos+i,c=new l.onnx.StringStringEntryProto;r.pos<s;){var h=r.uint32();switch(h>>>3){case 1:{c.key=r.string();break}case 2:{c.value=r.string();break}default:r.skipType(h&7);break}}return c},o.decodeDelimited=function(r){return r instanceof a||(r=new a(r)),this.decode(r,r.uint32())},o.verify=function(r){return typeof r!="object"||r===null?"object expected":r.key!=null&&r.hasOwnProperty("key")&&!d.isString(r.key)?"key: string expected":r.value!=null&&r.hasOwnProperty("value")&&!d.isString(r.value)?"value: string expected":null},o.fromObject=function(r){if(r instanceof l.onnx.StringStringEntryProto)return r;var i=new l.onnx.StringStringEntryProto;return r.key!=null&&(i.key=String(r.key)),r.value!=null&&(i.value=String(r.value)),i},o.toObject=function(r,i){i||(i={});var s={};return i.defaults&&(s.key="",s.value=""),r.key!=null&&r.hasOwnProperty("key")&&(s.key=r.key),r.value!=null&&r.hasOwnProperty("value")&&(s.value=r.value),s},o.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},o.getTypeUrl=function(r){return r===void 0&&(r="type.googleapis.com"),r+"/onnx.StringStringEntryProto"},o})(),p.TensorAnnotation=(function(){function o(r){if(this.quantParameterTensorNames=[],r)for(var i=Object.keys(r),s=0;s<i.length;++s)r[i[s]]!=null&&(this[i[s]]=r[i[s]])}return o.prototype.tensorName="",o.prototype.quantParameterTensorNames=d.emptyArray,o.create=function(r){return new o(r)},o.encode=function(r,i){if(i||(i=u.create()),r.tensorName!=null&&Object.hasOwnProperty.call(r,"tensorName")&&i.uint32(10).string(r.tensorName),r.quantParameterTensorNames!=null&&r.quantParameterTensorNames.length)for(var s=0;s<r.quantParameterTensorNames.length;++s)l.onnx.StringStringEntryProto.encode(r.quantParameterTensorNames[s],i.uint32(18).fork()).ldelim();return i},o.encodeDelimited=function(r,i){return this.encode(r,i).ldelim()},o.decode=function(r,i){r instanceof a||(r=a.create(r));for(var s=i===void 0?r.len:r.pos+i,c=new l.onnx.TensorAnnotation;r.pos<s;){var h=r.uint32();switch(h>>>3){case 1:{c.tensorName=r.string();break}case 2:{c.quantParameterTensorNames&&c.quantParameterTensorNames.length||(c.quantParameterTensorNames=[]),c.quantParameterTensorNames.push(l.onnx.StringStringEntryProto.decode(r,r.uint32()));break}default:r.skipType(h&7);break}}return c},o.decodeDelimited=function(r){return r instanceof a||(r=new a(r)),this.decode(r,r.uint32())},o.verify=function(r){if(typeof r!="object"||r===null)return"object expected";if(r.tensorName!=null&&r.hasOwnProperty("tensorName")&&!d.isString(r.tensorName))return"tensorName: string expected";if(r.quantParameterTensorNames!=null&&r.hasOwnProperty("quantParameterTensorNames")){if(!Array.isArray(r.quantParameterTensorNames))return"quantParameterTensorNames: array expected";for(var i=0;i<r.quantParameterTensorNames.length;++i){var s=l.onnx.StringStringEntryProto.verify(r.quantParameterTensorNames[i]);if(s)return"quantParameterTensorNames."+s}}return null},o.fromObject=function(r){if(r instanceof l.onnx.TensorAnnotation)return r;var i=new l.onnx.TensorAnnotation;if(r.tensorName!=null&&(i.tensorName=String(r.tensorName)),r.quantParameterTensorNames){if(!Array.isArray(r.quantParameterTensorNames))throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: array expected");i.quantParameterTensorNames=[];for(var s=0;s<r.quantParameterTensorNames.length;++s){if(typeof r.quantParameterTensorNames[s]!="object")throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: object expected");i.quantParameterTensorNames[s]=l.onnx.StringStringEntryProto.fromObject(r.quantParameterTensorNames[s])}}return i},o.toObject=function(r,i){i||(i={});var s={};if((i.arrays||i.defaults)&&(s.quantParameterTensorNames=[]),i.defaults&&(s.tensorName=""),r.tensorName!=null&&r.hasOwnProperty("tensorName")&&(s.tensorName=r.tensorName),r.quantParameterTensorNames&&r.quantParameterTensorNames.length){s.quantParameterTensorNames=[];for(var c=0;c<r.quantParameterTensorNames.length;++c)s.quantParameterTensorNames[c]=l.onnx.StringStringEntryProto.toObject(r.quantParameterTensorNames[c],i)}return s},o.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},o.getTypeUrl=function(r){return r===void 0&&(r="type.googleapis.com"),r+"/onnx.TensorAnnotation"},o})(),p.GraphProto=(function(){function o(r){if(this.node=[],this.initializer=[],this.sparseInitializer=[],this.input=[],this.output=[],this.valueInfo=[],this.quantizationAnnotation=[],r)for(var i=Object.keys(r),s=0;s<i.length;++s)r[i[s]]!=null&&(this[i[s]]=r[i[s]])}return o.prototype.node=d.emptyArray,o.prototype.name="",o.prototype.initializer=d.emptyArray,o.prototype.sparseInitializer=d.emptyArray,o.prototype.docString="",o.prototype.input=d.emptyArray,o.prototype.output=d.emptyArray,o.prototype.valueInfo=d.emptyArray,o.prototype.quantizationAnnotation=d.emptyArray,o.create=function(r){return new o(r)},o.encode=function(r,i){if(i||(i=u.create()),r.node!=null&&r.node.length)for(var s=0;s<r.node.length;++s)l.onnx.NodeProto.encode(r.node[s],i.uint32(10).fork()).ldelim();if(r.name!=null&&Object.hasOwnProperty.call(r,"name")&&i.uint32(18).string(r.name),r.initializer!=null&&r.initializer.length)for(var s=0;s<r.initializer.length;++s)l.onnx.TensorProto.encode(r.initializer[s],i.uint32(42).fork()).ldelim();if(r.docString!=null&&Object.hasOwnProperty.call(r,"docString")&&i.uint32(82).string(r.docString),r.input!=null&&r.input.length)for(var s=0;s<r.input.length;++s)l.onnx.ValueInfoProto.encode(r.input[s],i.uint32(90).fork()).ldelim();if(r.output!=null&&r.output.length)for(var s=0;s<r.output.length;++s)l.onnx.ValueInfoProto.encode(r.output[s],i.uint32(98).fork()).ldelim();if(r.valueInfo!=null&&r.valueInfo.length)for(var s=0;s<r.valueInfo.length;++s)l.onnx.ValueInfoProto.encode(r.valueInfo[s],i.uint32(106).fork()).ldelim();if(r.quantizationAnnotation!=null&&r.quantizationAnnotation.length)for(var s=0;s<r.quantizationAnnotation.length;++s)l.onnx.TensorAnnotation.encode(r.quantizationAnnotation[s],i.uint32(114).fork()).ldelim();if(r.sparseInitializer!=null&&r.sparseInitializer.length)for(var s=0;s<r.sparseInitializer.length;++s)l.onnx.SparseTensorProto.encode(r.sparseInitializer[s],i.uint32(122).fork()).ldelim();return i},o.encodeDelimited=function(r,i){return this.encode(r,i).ldelim()},o.decode=function(r,i){r instanceof a||(r=a.create(r));for(var s=i===void 0?r.len:r.pos+i,c=new l.onnx.GraphProto;r.pos<s;){var h=r.uint32();switch(h>>>3){case 1:{c.node&&c.node.length||(c.node=[]),c.node.push(l.onnx.NodeProto.decode(r,r.uint32()));break}case 2:{c.name=r.string();break}case 5:{c.initializer&&c.initializer.length||(c.initializer=[]),c.initializer.push(l.onnx.TensorProto.decode(r,r.uint32()));break}case 15:{c.sparseInitializer&&c.sparseInitializer.length||(c.sparseInitializer=[]),c.sparseInitializer.push(l.onnx.SparseTensorProto.decode(r,r.uint32()));break}case 10:{c.docString=r.string();break}case 11:{c.input&&c.input.length||(c.input=[]),c.input.push(l.onnx.ValueInfoProto.decode(r,r.uint32()));break}case 12:{c.output&&c.output.length||(c.output=[]),c.output.push(l.onnx.ValueInfoProto.decode(r,r.uint32()));break}case 13:{c.valueInfo&&c.valueInfo.length||(c.valueInfo=[]),c.valueInfo.push(l.onnx.ValueInfoProto.decode(r,r.uint32()));break}case 14:{c.quantizationAnnotation&&c.quantizationAnnotation.length||(c.quantizationAnnotation=[]),c.quantizationAnnotation.push(l.onnx.TensorAnnotation.decode(r,r.uint32()));break}default:r.skipType(h&7);break}}return c},o.decodeDelimited=function(r){return r instanceof a||(r=new a(r)),this.decode(r,r.uint32())},o.verify=function(r){if(typeof r!="object"||r===null)return"object expected";if(r.node!=null&&r.hasOwnProperty("node")){if(!Array.isArray(r.node))return"node: array expected";for(var i=0;i<r.node.length;++i){var s=l.onnx.NodeProto.verify(r.node[i]);if(s)return"node."+s}}if(r.name!=null&&r.hasOwnProperty("name")&&!d.isString(r.name))return"name: string expected";if(r.initializer!=null&&r.hasOwnProperty("initializer")){if(!Array.isArray(r.initializer))return"initializer: array expected";for(var i=0;i<r.initializer.length;++i){var s=l.onnx.TensorProto.verify(r.initializer[i]);if(s)return"initializer."+s}}if(r.sparseInitializer!=null&&r.hasOwnProperty("sparseInitializer")){if(!Array.isArray(r.sparseInitializer))return"sparseInitializer: array expected";for(var i=0;i<r.sparseInitializer.length;++i){var s=l.onnx.SparseTensorProto.verify(r.sparseInitializer[i]);if(s)return"sparseInitializer."+s}}if(r.docString!=null&&r.hasOwnProperty("docString")&&!d.isString(r.docString))return"docString: string expected";if(r.input!=null&&r.hasOwnProperty("input")){if(!Array.isArray(r.input))return"input: array expected";for(var i=0;i<r.input.length;++i){var s=l.onnx.ValueInfoProto.verify(r.input[i]);if(s)return"input."+s}}if(r.output!=null&&r.hasOwnProperty("output")){if(!Array.isArray(r.output))return"output: array expected";for(var i=0;i<r.output.length;++i){var s=l.onnx.ValueInfoProto.verify(r.output[i]);if(s)return"output."+s}}if(r.valueInfo!=null&&r.hasOwnProperty("valueInfo")){if(!Array.isArray(r.valueInfo))return"valueInfo: array expected";for(var i=0;i<r.valueInfo.length;++i){var s=l.onnx.ValueInfoProto.verify(r.valueInfo[i]);if(s)return"valueInfo."+s}}if(r.quantizationAnnotation!=null&&r.hasOwnProperty("quantizationAnnotation")){if(!Array.isArray(r.quantizationAnnotation))return"quantizationAnnotation: array expected";for(var i=0;i<r.quantizationAnnotation.length;++i){var s=l.onnx.TensorAnnotation.verify(r.quantizationAnnotation[i]);if(s)return"quantizationAnnotation."+s}}return null},o.fromObject=function(r){if(r instanceof l.onnx.GraphProto)return r;var i=new l.onnx.GraphProto;if(r.node){if(!Array.isArray(r.node))throw TypeError(".onnx.GraphProto.node: array expected");i.node=[];for(var s=0;s<r.node.length;++s){if(typeof r.node[s]!="object")throw TypeError(".onnx.GraphProto.node: object expected");i.node[s]=l.onnx.NodeProto.fromObject(r.node[s])}}if(r.name!=null&&(i.name=String(r.name)),r.initializer){if(!Array.isArray(r.initializer))throw TypeError(".onnx.GraphProto.initializer: array expected");i.initializer=[];for(var s=0;s<r.initializer.length;++s){if(typeof r.initializer[s]!="object")throw TypeError(".onnx.GraphProto.initializer: object expected");i.initializer[s]=l.onnx.TensorProto.fromObject(r.initializer[s])}}if(r.sparseInitializer){if(!Array.isArray(r.sparseInitializer))throw TypeError(".onnx.GraphProto.sparseInitializer: array expected");i.sparseInitializer=[];for(var s=0;s<r.sparseInitializer.length;++s){if(typeof r.sparseInitializer[s]!="object")throw TypeError(".onnx.GraphProto.sparseInitializer: object expected");i.sparseInitializer[s]=l.onnx.SparseTensorProto.fromObject(r.sparseInitializer[s])}}if(r.docString!=null&&(i.docString=String(r.docString)),r.input){if(!Array.isArray(r.input))throw TypeError(".onnx.GraphProto.input: array expected");i.input=[];for(var s=0;s<r.input.length;++s){if(typeof r.input[s]!="object")throw TypeError(".onnx.GraphProto.input: object expected");i.input[s]=l.onnx.ValueInfoProto.fromObject(r.input[s])}}if(r.output){if(!Array.isArray(r.output))throw TypeError(".onnx.GraphProto.output: array expected");i.output=[];for(var s=0;s<r.output.length;++s){if(typeof r.output[s]!="object")throw TypeError(".onnx.GraphProto.output: object expected");i.output[s]=l.onnx.ValueInfoProto.fromObject(r.output[s])}}if(r.valueInfo){if(!Array.isArray(r.valueInfo))throw TypeError(".onnx.GraphProto.valueInfo: array expected");i.valueInfo=[];for(var s=0;s<r.valueInfo.length;++s){if(typeof r.valueInfo[s]!="object")throw TypeError(".onnx.GraphProto.valueInfo: object expected");i.valueInfo[s]=l.onnx.ValueInfoProto.fromObject(r.valueInfo[s])}}if(r.quantizationAnnotation){if(!Array.isArray(r.quantizationAnnotation))throw TypeError(".onnx.GraphProto.quantizationAnnotation: array expected");i.quantizationAnnotation=[];for(var s=0;s<r.quantizationAnnotation.length;++s){if(typeof r.quantizationAnnotation[s]!="object")throw TypeError(".onnx.GraphProto.quantizationAnnotation: object expected");i.quantizationAnnotation[s]=l.onnx.TensorAnnotation.fromObject(r.quantizationAnnotation[s])}}return i},o.toObject=function(r,i){i||(i={});var s={};if((i.arrays||i.defaults)&&(s.node=[],s.initializer=[],s.input=[],s.output=[],s.valueInfo=[],s.quantizationAnnotation=[],s.sparseInitializer=[]),i.defaults&&(s.name="",s.docString=""),r.node&&r.node.length){s.node=[];for(var c=0;c<r.node.length;++c)s.node[c]=l.onnx.NodeProto.toObject(r.node[c],i)}if(r.name!=null&&r.hasOwnProperty("name")&&(s.name=r.name),r.initializer&&r.initializer.length){s.initializer=[];for(var c=0;c<r.initializer.length;++c)s.initializer[c]=l.onnx.TensorProto.toObject(r.initializer[c],i)}if(r.docString!=null&&r.hasOwnProperty("docString")&&(s.docString=r.docString),r.input&&r.input.length){s.input=[];for(var c=0;c<r.input.length;++c)s.input[c]=l.onnx.ValueInfoProto.toObject(r.input[c],i)}if(r.output&&r.output.length){s.output=[];for(var c=0;c<r.output.length;++c)s.output[c]=l.onnx.ValueInfoProto.toObject(r.output[c],i)}if(r.valueInfo&&r.valueInfo.length){s.valueInfo=[];for(var c=0;c<r.valueInfo.length;++c)s.valueInfo[c]=l.onnx.ValueInfoProto.toObject(r.valueInfo[c],i)}if(r.quantizationAnnotation&&r.quantizationAnnotation.length){s.quantizationAnnotation=[];for(var c=0;c<r.quantizationAnnotation.length;++c)s.quantizationAnnotation[c]=l.onnx.TensorAnnotation.toObject(r.quantizationAnnotation[c],i)}if(r.sparseInitializer&&r.sparseInitializer.length){s.sparseInitializer=[];for(var c=0;c<r.sparseInitializer.length;++c)s.sparseInitializer[c]=l.onnx.SparseTensorProto.toObject(r.sparseInitializer[c],i)}return s},o.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},o.getTypeUrl=function(r){return r===void 0&&(r="type.googleapis.com"),r+"/onnx.GraphProto"},o})(),p.TensorProto=(function(){function o(r){if(this.dims=[],this.floatData=[],this.int32Data=[],this.stringData=[],this.int64Data=[],this.externalData=[],this.doubleData=[],this.uint64Data=[],r)for(var i=Object.keys(r),s=0;s<i.length;++s)r[i[s]]!=null&&(this[i[s]]=r[i[s]])}return o.prototype.dims=d.emptyArray,o.prototype.dataType=0,o.prototype.segment=null,o.prototype.floatData=d.emptyArray,o.prototype.int32Data=d.emptyArray,o.prototype.stringData=d.emptyArray,o.prototype.int64Data=d.emptyArray,o.prototype.name="",o.prototype.docString="",o.prototype.rawData=d.newBuffer([]),o.prototype.externalData=d.emptyArray,o.prototype.dataLocation=0,o.prototype.doubleData=d.emptyArray,o.prototype.uint64Data=d.emptyArray,o.create=function(r){return new o(r)},o.encode=function(r,i){if(i||(i=u.create()),r.dims!=null&&r.dims.length){i.uint32(10).fork();for(var s=0;s<r.dims.length;++s)i.int64(r.dims[s]);i.ldelim()}if(r.dataType!=null&&Object.hasOwnProperty.call(r,"dataType")&&i.uint32(16).int32(r.dataType),r.segment!=null&&Object.hasOwnProperty.call(r,"segment")&&l.onnx.TensorProto.Segment.encode(r.segment,i.uint32(26).fork()).ldelim(),r.floatData!=null&&r.floatData.length){i.uint32(34).fork();for(var s=0;s<r.floatData.length;++s)i.float(r.floatData[s]);i.ldelim()}if(r.int32Data!=null&&r.int32Data.length){i.uint32(42).fork();for(var s=0;s<r.int32Data.length;++s)i.int32(r.int32Data[s]);i.ldelim()}if(r.stringData!=null&&r.stringData.length)for(var s=0;s<r.stringData.length;++s)i.uint32(50).bytes(r.stringData[s]);if(r.int64Data!=null&&r.int64Data.length){i.uint32(58).fork();for(var s=0;s<r.int64Data.length;++s)i.int64(r.int64Data[s]);i.ldelim()}if(r.name!=null&&Object.hasOwnProperty.call(r,"name")&&i.uint32(66).string(r.name),r.rawData!=null&&Object.hasOwnProperty.call(r,"rawData")&&i.uint32(74).bytes(r.rawData),r.doubleData!=null&&r.doubleData.length){i.uint32(82).fork();for(var s=0;s<r.doubleData.length;++s)i.double(r.doubleData[s]);i.ldelim()}if(r.uint64Data!=null&&r.uint64Data.length){i.uint32(90).fork();for(var s=0;s<r.uint64Data.length;++s)i.uint64(r.uint64Data[s]);i.ldelim()}if(r.docString!=null&&Object.hasOwnProperty.call(r,"docString")&&i.uint32(98).string(r.docString),r.externalData!=null&&r.externalData.length)for(var s=0;s<r.externalData.length;++s)l.onnx.StringStringEntryProto.encode(r.externalData[s],i.uint32(106).fork()).ldelim();return r.dataLocation!=null&&Object.hasOwnProperty.call(r,"dataLocation")&&i.uint32(112).int32(r.dataLocation),i},o.encodeDelimited=function(r,i){return this.encode(r,i).ldelim()},o.decode=function(r,i){r instanceof a||(r=a.create(r));for(var s=i===void 0?r.len:r.pos+i,c=new l.onnx.TensorProto;r.pos<s;){var h=r.uint32();switch(h>>>3){case 1:{if(c.dims&&c.dims.length||(c.dims=[]),(h&7)===2)for(var m=r.uint32()+r.pos;r.pos<m;)c.dims.push(r.int64());else c.dims.push(r.int64());break}case 2:{c.dataType=r.int32();break}case 3:{c.segment=l.onnx.TensorProto.Segment.decode(r,r.uint32());break}case 4:{if(c.floatData&&c.floatData.length||(c.floatData=[]),(h&7)===2)for(var m=r.uint32()+r.pos;r.pos<m;)c.floatData.push(r.float());else c.floatData.push(r.float());break}case 5:{if(c.int32Data&&c.int32Data.length||(c.int32Data=[]),(h&7)===2)for(var m=r.uint32()+r.pos;r.pos<m;)c.int32Data.push(r.int32());else c.int32Data.push(r.int32());break}case 6:{c.stringData&&c.stringData.length||(c.stringData=[]),c.stringData.push(r.bytes());break}case 7:{if(c.int64Data&&c.int64Data.length||(c.int64Data=[]),(h&7)===2)for(var m=r.uint32()+r.pos;r.pos<m;)c.int64Data.push(r.int64());else c.int64Data.push(r.int64());break}case 8:{c.name=r.string();break}case 12:{c.docString=r.string();break}case 9:{c.rawData=r.bytes();break}case 13:{c.externalData&&c.externalData.length||(c.externalData=[]),c.externalData.push(l.onnx.StringStringEntryProto.decode(r,r.uint32()));break}case 14:{c.dataLocation=r.int32();break}case 10:{if(c.doubleData&&c.doubleData.length||(c.doubleData=[]),(h&7)===2)for(var m=r.uint32()+r.pos;r.pos<m;)c.doubleData.push(r.double());else c.doubleData.push(r.double());break}case 11:{if(c.uint64Data&&c.uint64Data.length||(c.uint64Data=[]),(h&7)===2)for(var m=r.uint32()+r.pos;r.pos<m;)c.uint64Data.push(r.uint64());else c.uint64Data.push(r.uint64());break}default:r.skipType(h&7);break}}return c},o.decodeDelimited=function(r){return r instanceof a||(r=new a(r)),this.decode(r,r.uint32())},o.verify=function(r){if(typeof r!="object"||r===null)return"object expected";if(r.dims!=null&&r.hasOwnProperty("dims")){if(!Array.isArray(r.dims))return"dims: array expected";for(var i=0;i<r.dims.length;++i)if(!d.isInteger(r.dims[i])&&!(r.dims[i]&&d.isInteger(r.dims[i].low)&&d.isInteger(r.dims[i].high)))return"dims: integer|Long[] expected"}if(r.dataType!=null&&r.hasOwnProperty("dataType")&&!d.isInteger(r.dataType))return"dataType: integer expected";if(r.segment!=null&&r.hasOwnProperty("segment")){var s=l.onnx.TensorProto.Segment.verify(r.segment);if(s)return"segment."+s}if(r.floatData!=null&&r.hasOwnProperty("floatData")){if(!Array.isArray(r.floatData))return"floatData: array expected";for(var i=0;i<r.floatData.length;++i)if(typeof r.floatData[i]!="number")return"floatData: number[] expected"}if(r.int32Data!=null&&r.hasOwnProperty("int32Data")){if(!Array.isArray(r.int32Data))return"int32Data: array expected";for(var i=0;i<r.int32Data.length;++i)if(!d.isInteger(r.int32Data[i]))return"int32Data: integer[] expected"}if(r.stringData!=null&&r.hasOwnProperty("stringData")){if(!Array.isArray(r.stringData))return"stringData: array expected";for(var i=0;i<r.stringData.length;++i)if(!(r.stringData[i]&&typeof r.stringData[i].length=="number"||d.isString(r.stringData[i])))return"stringData: buffer[] expected"}if(r.int64Data!=null&&r.hasOwnProperty("int64Data")){if(!Array.isArray(r.int64Data))return"int64Data: array expected";for(var i=0;i<r.int64Data.length;++i)if(!d.isInteger(r.int64Data[i])&&!(r.int64Data[i]&&d.isInteger(r.int64Data[i].low)&&d.isInteger(r.int64Data[i].high)))return"int64Data: integer|Long[] expected"}if(r.name!=null&&r.hasOwnProperty("name")&&!d.isString(r.name))return"name: string expected";if(r.docString!=null&&r.hasOwnProperty("docString")&&!d.isString(r.docString))return"docString: string expected";if(r.rawData!=null&&r.hasOwnProperty("rawData")&&!(r.rawData&&typeof r.rawData.length=="number"||d.isString(r.rawData)))return"rawData: buffer expected";if(r.externalData!=null&&r.hasOwnProperty("externalData")){if(!Array.isArray(r.externalData))return"externalData: array expected";for(var i=0;i<r.externalData.length;++i){var s=l.onnx.StringStringEntryProto.verify(r.externalData[i]);if(s)return"externalData."+s}}if(r.dataLocation!=null&&r.hasOwnProperty("dataLocation"))switch(r.dataLocation){default:return"dataLocation: enum value expected";case 0:case 1:break}if(r.doubleData!=null&&r.hasOwnProperty("doubleData")){if(!Array.isArray(r.doubleData))return"doubleData: array expected";for(var i=0;i<r.doubleData.length;++i)if(typeof r.doubleData[i]!="number")return"doubleData: number[] expected"}if(r.uint64Data!=null&&r.hasOwnProperty("uint64Data")){if(!Array.isArray(r.uint64Data))return"uint64Data: array expected";for(var i=0;i<r.uint64Data.length;++i)if(!d.isInteger(r.uint64Data[i])&&!(r.uint64Data[i]&&d.isInteger(r.uint64Data[i].low)&&d.isInteger(r.uint64Data[i].high)))return"uint64Data: integer|Long[] expected"}return null},o.fromObject=function(r){if(r instanceof l.onnx.TensorProto)return r;var i=new l.onnx.TensorProto;if(r.dims){if(!Array.isArray(r.dims))throw TypeError(".onnx.TensorProto.dims: array expected");i.dims=[];for(var s=0;s<r.dims.length;++s)d.Long?(i.dims[s]=d.Long.fromValue(r.dims[s])).unsigned=!1:typeof r.dims[s]=="string"?i.dims[s]=parseInt(r.dims[s],10):typeof r.dims[s]=="number"?i.dims[s]=r.dims[s]:typeof r.dims[s]=="object"&&(i.dims[s]=new d.LongBits(r.dims[s].low>>>0,r.dims[s].high>>>0).toNumber())}if(r.dataType!=null&&(i.dataType=r.dataType|0),r.segment!=null){if(typeof r.segment!="object")throw TypeError(".onnx.TensorProto.segment: object expected");i.segment=l.onnx.TensorProto.Segment.fromObject(r.segment)}if(r.floatData){if(!Array.isArray(r.floatData))throw TypeError(".onnx.TensorProto.floatData: array expected");i.floatData=[];for(var s=0;s<r.floatData.length;++s)i.floatData[s]=Number(r.floatData[s])}if(r.int32Data){if(!Array.isArray(r.int32Data))throw TypeError(".onnx.TensorProto.int32Data: array expected");i.int32Data=[];for(var s=0;s<r.int32Data.length;++s)i.int32Data[s]=r.int32Data[s]|0}if(r.stringData){if(!Array.isArray(r.stringData))throw TypeError(".onnx.TensorProto.stringData: array expected");i.stringData=[];for(var s=0;s<r.stringData.length;++s)typeof r.stringData[s]=="string"?d.base64.decode(r.stringData[s],i.stringData[s]=d.newBuffer(d.base64.length(r.stringData[s])),0):r.stringData[s].length>=0&&(i.stringData[s]=r.stringData[s])}if(r.int64Data){if(!Array.isArray(r.int64Data))throw TypeError(".onnx.TensorProto.int64Data: array expected");i.int64Data=[];for(var s=0;s<r.int64Data.length;++s)d.Long?(i.int64Data[s]=d.Long.fromValue(r.int64Data[s])).unsigned=!1:typeof r.int64Data[s]=="string"?i.int64Data[s]=parseInt(r.int64Data[s],10):typeof r.int64Data[s]=="number"?i.int64Data[s]=r.int64Data[s]:typeof r.int64Data[s]=="object"&&(i.int64Data[s]=new d.LongBits(r.int64Data[s].low>>>0,r.int64Data[s].high>>>0).toNumber())}if(r.name!=null&&(i.name=String(r.name)),r.docString!=null&&(i.docString=String(r.docString)),r.rawData!=null&&(typeof r.rawData=="string"?d.base64.decode(r.rawData,i.rawData=d.newBuffer(d.base64.length(r.rawData)),0):r.rawData.length>=0&&(i.rawData=r.rawData)),r.externalData){if(!Array.isArray(r.externalData))throw TypeError(".onnx.TensorProto.externalData: array expected");i.externalData=[];for(var s=0;s<r.externalData.length;++s){if(typeof r.externalData[s]!="object")throw TypeError(".onnx.TensorProto.externalData: object expected");i.externalData[s]=l.onnx.StringStringEntryProto.fromObject(r.externalData[s])}}switch(r.dataLocation){default:if(typeof r.dataLocation=="number"){i.dataLocation=r.dataLocation;break}break;case"DEFAULT":case 0:i.dataLocation=0;break;case"EXTERNAL":case 1:i.dataLocation=1;break}if(r.doubleData){if(!Array.isArray(r.doubleData))throw TypeError(".onnx.TensorProto.doubleData: array expected");i.doubleData=[];for(var s=0;s<r.doubleData.length;++s)i.doubleData[s]=Number(r.doubleData[s])}if(r.uint64Data){if(!Array.isArray(r.uint64Data))throw TypeError(".onnx.TensorProto.uint64Data: array expected");i.uint64Data=[];for(var s=0;s<r.uint64Data.length;++s)d.Long?(i.uint64Data[s]=d.Long.fromValue(r.uint64Data[s])).unsigned=!0:typeof r.uint64Data[s]=="string"?i.uint64Data[s]=parseInt(r.uint64Data[s],10):typeof r.uint64Data[s]=="number"?i.uint64Data[s]=r.uint64Data[s]:typeof r.uint64Data[s]=="object"&&(i.uint64Data[s]=new d.LongBits(r.uint64Data[s].low>>>0,r.uint64Data[s].high>>>0).toNumber(!0))}return i},o.toObject=function(r,i){i||(i={});var s={};if((i.arrays||i.defaults)&&(s.dims=[],s.floatData=[],s.int32Data=[],s.stringData=[],s.int64Data=[],s.doubleData=[],s.uint64Data=[],s.externalData=[]),i.defaults&&(s.dataType=0,s.segment=null,s.name="",i.bytes===String?s.rawData="":(s.rawData=[],i.bytes!==Array&&(s.rawData=d.newBuffer(s.rawData))),s.docString="",s.dataLocation=i.enums===String?"DEFAULT":0),r.dims&&r.dims.length){s.dims=[];for(var c=0;c<r.dims.length;++c)typeof r.dims[c]=="number"?s.dims[c]=i.longs===String?String(r.dims[c]):r.dims[c]:s.dims[c]=i.longs===String?d.Long.prototype.toString.call(r.dims[c]):i.longs===Number?new d.LongBits(r.dims[c].low>>>0,r.dims[c].high>>>0).toNumber():r.dims[c]}if(r.dataType!=null&&r.hasOwnProperty("dataType")&&(s.dataType=r.dataType),r.segment!=null&&r.hasOwnProperty("segment")&&(s.segment=l.onnx.TensorProto.Segment.toObject(r.segment,i)),r.floatData&&r.floatData.length){s.floatData=[];for(var c=0;c<r.floatData.length;++c)s.floatData[c]=i.json&&!isFinite(r.floatData[c])?String(r.floatData[c]):r.floatData[c]}if(r.int32Data&&r.int32Data.length){s.int32Data=[];for(var c=0;c<r.int32Data.length;++c)s.int32Data[c]=r.int32Data[c]}if(r.stringData&&r.stringData.length){s.stringData=[];for(var c=0;c<r.stringData.length;++c)s.stringData[c]=i.bytes===String?d.base64.encode(r.stringData[c],0,r.stringData[c].length):i.bytes===Array?Array.prototype.slice.call(r.stringData[c]):r.stringData[c]}if(r.int64Data&&r.int64Data.length){s.int64Data=[];for(var c=0;c<r.int64Data.length;++c)typeof r.int64Data[c]=="number"?s.int64Data[c]=i.longs===String?String(r.int64Data[c]):r.int64Data[c]:s.int64Data[c]=i.longs===String?d.Long.prototype.toString.call(r.int64Data[c]):i.longs===Number?new d.LongBits(r.int64Data[c].low>>>0,r.int64Data[c].high>>>0).toNumber():r.int64Data[c]}if(r.name!=null&&r.hasOwnProperty("name")&&(s.name=r.name),r.rawData!=null&&r.hasOwnProperty("rawData")&&(s.rawData=i.bytes===String?d.base64.encode(r.rawData,0,r.rawData.length):i.bytes===Array?Array.prototype.slice.call(r.rawData):r.rawData),r.doubleData&&r.doubleData.length){s.doubleData=[];for(var c=0;c<r.doubleData.length;++c)s.doubleData[c]=i.json&&!isFinite(r.doubleData[c])?String(r.doubleData[c]):r.doubleData[c]}if(r.uint64Data&&r.uint64Data.length){s.uint64Data=[];for(var c=0;c<r.uint64Data.length;++c)typeof r.uint64Data[c]=="number"?s.uint64Data[c]=i.longs===String?String(r.uint64Data[c]):r.uint64Data[c]:s.uint64Data[c]=i.longs===String?d.Long.prototype.toString.call(r.uint64Data[c]):i.longs===Number?new d.LongBits(r.uint64Data[c].low>>>0,r.uint64Data[c].high>>>0).toNumber(!0):r.uint64Data[c]}if(r.docString!=null&&r.hasOwnProperty("docString")&&(s.docString=r.docString),r.externalData&&r.externalData.length){s.externalData=[];for(var c=0;c<r.externalData.length;++c)s.externalData[c]=l.onnx.StringStringEntryProto.toObject(r.externalData[c],i)}return r.dataLocation!=null&&r.hasOwnProperty("dataLocation")&&(s.dataLocation=i.enums===String?l.onnx.TensorProto.DataLocation[r.dataLocation]===void 0?r.dataLocation:l.onnx.TensorProto.DataLocation[r.dataLocation]:r.dataLocation),s},o.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},o.getTypeUrl=function(r){return r===void 0&&(r="type.googleapis.com"),r+"/onnx.TensorProto"},o.DataType=(function(){var r={},i=Object.create(r);return i[r[0]="UNDEFINED"]=0,i[r[1]="FLOAT"]=1,i[r[2]="UINT8"]=2,i[r[3]="INT8"]=3,i[r[4]="UINT16"]=4,i[r[5]="INT16"]=5,i[r[6]="INT32"]=6,i[r[7]="INT64"]=7,i[r[8]="STRING"]=8,i[r[9]="BOOL"]=9,i[r[10]="FLOAT16"]=10,i[r[11]="DOUBLE"]=11,i[r[12]="UINT32"]=12,i[r[13]="UINT64"]=13,i[r[14]="COMPLEX64"]=14,i[r[15]="COMPLEX128"]=15,i[r[16]="BFLOAT16"]=16,i[r[17]="FLOAT8E4M3FN"]=17,i[r[18]="FLOAT8E4M3FNUZ"]=18,i[r[19]="FLOAT8E5M2"]=19,i[r[20]="FLOAT8E5M2FNUZ"]=20,i})(),o.Segment=(function(){function r(i){if(i)for(var s=Object.keys(i),c=0;c<s.length;++c)i[s[c]]!=null&&(this[s[c]]=i[s[c]])}return r.prototype.begin=d.Long?d.Long.fromBits(0,0,!1):0,r.prototype.end=d.Long?d.Long.fromBits(0,0,!1):0,r.create=function(i){return new r(i)},r.encode=function(i,s){return s||(s=u.create()),i.begin!=null&&Object.hasOwnProperty.call(i,"begin")&&s.uint32(8).int64(i.begin),i.end!=null&&Object.hasOwnProperty.call(i,"end")&&s.uint32(16).int64(i.end),s},r.encodeDelimited=function(i,s){return this.encode(i,s).ldelim()},r.decode=function(i,s){i instanceof a||(i=a.create(i));for(var c=s===void 0?i.len:i.pos+s,h=new l.onnx.TensorProto.Segment;i.pos<c;){var m=i.uint32();switch(m>>>3){case 1:{h.begin=i.int64();break}case 2:{h.end=i.int64();break}default:i.skipType(m&7);break}}return h},r.decodeDelimited=function(i){return i instanceof a||(i=new a(i)),this.decode(i,i.uint32())},r.verify=function(i){return typeof i!="object"||i===null?"object expected":i.begin!=null&&i.hasOwnProperty("begin")&&!d.isInteger(i.begin)&&!(i.begin&&d.isInteger(i.begin.low)&&d.isInteger(i.begin.high))?"begin: integer|Long expected":i.end!=null&&i.hasOwnProperty("end")&&!d.isInteger(i.end)&&!(i.end&&d.isInteger(i.end.low)&&d.isInteger(i.end.high))?"end: integer|Long expected":null},r.fromObject=function(i){if(i instanceof l.onnx.TensorProto.Segment)return i;var s=new l.onnx.TensorProto.Segment;return i.begin!=null&&(d.Long?(s.begin=d.Long.fromValue(i.begin)).unsigned=!1:typeof i.begin=="string"?s.begin=parseInt(i.begin,10):typeof i.begin=="number"?s.begin=i.begin:typeof i.begin=="object"&&(s.begin=new d.LongBits(i.begin.low>>>0,i.begin.high>>>0).toNumber())),i.end!=null&&(d.Long?(s.end=d.Long.fromValue(i.end)).unsigned=!1:typeof i.end=="string"?s.end=parseInt(i.end,10):typeof i.end=="number"?s.end=i.end:typeof i.end=="object"&&(s.end=new d.LongBits(i.end.low>>>0,i.end.high>>>0).toNumber())),s},r.toObject=function(i,s){s||(s={});var c={};if(s.defaults){if(d.Long){var h=new d.Long(0,0,!1);c.begin=s.longs===String?h.toString():s.longs===Number?h.toNumber():h}else c.begin=s.longs===String?"0":0;if(d.Long){var h=new d.Long(0,0,!1);c.end=s.longs===String?h.toString():s.longs===Number?h.toNumber():h}else c.end=s.longs===String?"0":0}return i.begin!=null&&i.hasOwnProperty("begin")&&(typeof i.begin=="number"?c.begin=s.longs===String?String(i.begin):i.begin:c.begin=s.longs===String?d.Long.prototype.toString.call(i.begin):s.longs===Number?new d.LongBits(i.begin.low>>>0,i.begin.high>>>0).toNumber():i.begin),i.end!=null&&i.hasOwnProperty("end")&&(typeof i.end=="number"?c.end=s.longs===String?String(i.end):i.end:c.end=s.longs===String?d.Long.prototype.toString.call(i.end):s.longs===Number?new d.LongBits(i.end.low>>>0,i.end.high>>>0).toNumber():i.end),c},r.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},r.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TensorProto.Segment"},r})(),o.DataLocation=(function(){var r={},i=Object.create(r);return i[r[0]="DEFAULT"]=0,i[r[1]="EXTERNAL"]=1,i})(),o})(),p.SparseTensorProto=(function(){function o(r){if(this.dims=[],r)for(var i=Object.keys(r),s=0;s<i.length;++s)r[i[s]]!=null&&(this[i[s]]=r[i[s]])}return o.prototype.values=null,o.prototype.indices=null,o.prototype.dims=d.emptyArray,o.create=function(r){return new o(r)},o.encode=function(r,i){if(i||(i=u.create()),r.values!=null&&Object.hasOwnProperty.call(r,"values")&&l.onnx.TensorProto.encode(r.values,i.uint32(10).fork()).ldelim(),r.indices!=null&&Object.hasOwnProperty.call(r,"indices")&&l.onnx.TensorProto.encode(r.indices,i.uint32(18).fork()).ldelim(),r.dims!=null&&r.dims.length){i.uint32(26).fork();for(var s=0;s<r.dims.length;++s)i.int64(r.dims[s]);i.ldelim()}return i},o.encodeDelimited=function(r,i){return this.encode(r,i).ldelim()},o.decode=function(r,i){r instanceof a||(r=a.create(r));for(var s=i===void 0?r.len:r.pos+i,c=new l.onnx.SparseTensorProto;r.pos<s;){var h=r.uint32();switch(h>>>3){case 1:{c.values=l.onnx.TensorProto.decode(r,r.uint32());break}case 2:{c.indices=l.onnx.TensorProto.decode(r,r.uint32());break}case 3:{if(c.dims&&c.dims.length||(c.dims=[]),(h&7)===2)for(var m=r.uint32()+r.pos;r.pos<m;)c.dims.push(r.int64());else c.dims.push(r.int64());break}default:r.skipType(h&7);break}}return c},o.decodeDelimited=function(r){return r instanceof a||(r=new a(r)),this.decode(r,r.uint32())},o.verify=function(r){if(typeof r!="object"||r===null)return"object expected";if(r.values!=null&&r.hasOwnProperty("values")){var i=l.onnx.TensorProto.verify(r.values);if(i)return"values."+i}if(r.indices!=null&&r.hasOwnProperty("indices")){var i=l.onnx.TensorProto.verify(r.indices);if(i)return"indices."+i}if(r.dims!=null&&r.hasOwnProperty("dims")){if(!Array.isArray(r.dims))return"dims: array expected";for(var s=0;s<r.dims.length;++s)if(!d.isInteger(r.dims[s])&&!(r.dims[s]&&d.isInteger(r.dims[s].low)&&d.isInteger(r.dims[s].high)))return"dims: integer|Long[] expected"}return null},o.fromObject=function(r){if(r instanceof l.onnx.SparseTensorProto)return r;var i=new l.onnx.SparseTensorProto;if(r.values!=null){if(typeof r.values!="object")throw TypeError(".onnx.SparseTensorProto.values: object expected");i.values=l.onnx.TensorProto.fromObject(r.values)}if(r.indices!=null){if(typeof r.indices!="object")throw TypeError(".onnx.SparseTensorProto.indices: object expected");i.indices=l.onnx.TensorProto.fromObject(r.indices)}if(r.dims){if(!Array.isArray(r.dims))throw TypeError(".onnx.SparseTensorProto.dims: array expected");i.dims=[];for(var s=0;s<r.dims.length;++s)d.Long?(i.dims[s]=d.Long.fromValue(r.dims[s])).unsigned=!1:typeof r.dims[s]=="string"?i.dims[s]=parseInt(r.dims[s],10):typeof r.dims[s]=="number"?i.dims[s]=r.dims[s]:typeof r.dims[s]=="object"&&(i.dims[s]=new d.LongBits(r.dims[s].low>>>0,r.dims[s].high>>>0).toNumber())}return i},o.toObject=function(r,i){i||(i={});var s={};if((i.arrays||i.defaults)&&(s.dims=[]),i.defaults&&(s.values=null,s.indices=null),r.values!=null&&r.hasOwnProperty("values")&&(s.values=l.onnx.TensorProto.toObject(r.values,i)),r.indices!=null&&r.hasOwnProperty("indices")&&(s.indices=l.onnx.TensorProto.toObject(r.indices,i)),r.dims&&r.dims.length){s.dims=[];for(var c=0;c<r.dims.length;++c)typeof r.dims[c]=="number"?s.dims[c]=i.longs===String?String(r.dims[c]):r.dims[c]:s.dims[c]=i.longs===String?d.Long.prototype.toString.call(r.dims[c]):i.longs===Number?new d.LongBits(r.dims[c].low>>>0,r.dims[c].high>>>0).toNumber():r.dims[c]}return s},o.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},o.getTypeUrl=function(r){return r===void 0&&(r="type.googleapis.com"),r+"/onnx.SparseTensorProto"},o})(),p.TensorShapeProto=(function(){function o(r){if(this.dim=[],r)for(var i=Object.keys(r),s=0;s<i.length;++s)r[i[s]]!=null&&(this[i[s]]=r[i[s]])}return o.prototype.dim=d.emptyArray,o.create=function(r){return new o(r)},o.encode=function(r,i){if(i||(i=u.create()),r.dim!=null&&r.dim.length)for(var s=0;s<r.dim.length;++s)l.onnx.TensorShapeProto.Dimension.encode(r.dim[s],i.uint32(10).fork()).ldelim();return i},o.encodeDelimited=function(r,i){return this.encode(r,i).ldelim()},o.decode=function(r,i){r instanceof a||(r=a.create(r));for(var s=i===void 0?r.len:r.pos+i,c=new l.onnx.TensorShapeProto;r.pos<s;){var h=r.uint32();h>>>3===1?(c.dim&&c.dim.length||(c.dim=[]),c.dim.push(l.onnx.TensorShapeProto.Dimension.decode(r,r.uint32()))):r.skipType(h&7)}return c},o.decodeDelimited=function(r){return r instanceof a||(r=new a(r)),this.decode(r,r.uint32())},o.verify=function(r){if(typeof r!="object"||r===null)return"object expected";if(r.dim!=null&&r.hasOwnProperty("dim")){if(!Array.isArray(r.dim))return"dim: array expected";for(var i=0;i<r.dim.length;++i){var s=l.onnx.TensorShapeProto.Dimension.verify(r.dim[i]);if(s)return"dim."+s}}return null},o.fromObject=function(r){if(r instanceof l.onnx.TensorShapeProto)return r;var i=new l.onnx.TensorShapeProto;if(r.dim){if(!Array.isArray(r.dim))throw TypeError(".onnx.TensorShapeProto.dim: array expected");i.dim=[];for(var s=0;s<r.dim.length;++s){if(typeof r.dim[s]!="object")throw TypeError(".onnx.TensorShapeProto.dim: object expected");i.dim[s]=l.onnx.TensorShapeProto.Dimension.fromObject(r.dim[s])}}return i},o.toObject=function(r,i){i||(i={});var s={};if((i.arrays||i.defaults)&&(s.dim=[]),r.dim&&r.dim.length){s.dim=[];for(var c=0;c<r.dim.length;++c)s.dim[c]=l.onnx.TensorShapeProto.Dimension.toObject(r.dim[c],i)}return s},o.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},o.getTypeUrl=function(r){return r===void 0&&(r="type.googleapis.com"),r+"/onnx.TensorShapeProto"},o.Dimension=(function(){function r(s){if(s)for(var c=Object.keys(s),h=0;h<c.length;++h)s[c[h]]!=null&&(this[c[h]]=s[c[h]])}r.prototype.dimValue=null,r.prototype.dimParam=null,r.prototype.denotation="";var i;return Object.defineProperty(r.prototype,"value",{get:d.oneOfGetter(i=["dimValue","dimParam"]),set:d.oneOfSetter(i)}),r.create=function(s){return new r(s)},r.encode=function(s,c){return c||(c=u.create()),s.dimValue!=null&&Object.hasOwnProperty.call(s,"dimValue")&&c.uint32(8).int64(s.dimValue),s.dimParam!=null&&Object.hasOwnProperty.call(s,"dimParam")&&c.uint32(18).string(s.dimParam),s.denotation!=null&&Object.hasOwnProperty.call(s,"denotation")&&c.uint32(26).string(s.denotation),c},r.encodeDelimited=function(s,c){return this.encode(s,c).ldelim()},r.decode=function(s,c){s instanceof a||(s=a.create(s));for(var h=c===void 0?s.len:s.pos+c,m=new l.onnx.TensorShapeProto.Dimension;s.pos<h;){var b=s.uint32();switch(b>>>3){case 1:{m.dimValue=s.int64();break}case 2:{m.dimParam=s.string();break}case 3:{m.denotation=s.string();break}default:s.skipType(b&7);break}}return m},r.decodeDelimited=function(s){return s instanceof a||(s=new a(s)),this.decode(s,s.uint32())},r.verify=function(s){if(typeof s!="object"||s===null)return"object expected";var c={};if(s.dimValue!=null&&s.hasOwnProperty("dimValue")&&(c.value=1,!d.isInteger(s.dimValue)&&!(s.dimValue&&d.isInteger(s.dimValue.low)&&d.isInteger(s.dimValue.high))))return"dimValue: integer|Long expected";if(s.dimParam!=null&&s.hasOwnProperty("dimParam")){if(c.value===1)return"value: multiple values";if(c.value=1,!d.isString(s.dimParam))return"dimParam: string expected"}return s.denotation!=null&&s.hasOwnProperty("denotation")&&!d.isString(s.denotation)?"denotation: string expected":null},r.fromObject=function(s){if(s instanceof l.onnx.TensorShapeProto.Dimension)return s;var c=new l.onnx.TensorShapeProto.Dimension;return s.dimValue!=null&&(d.Long?(c.dimValue=d.Long.fromValue(s.dimValue)).unsigned=!1:typeof s.dimValue=="string"?c.dimValue=parseInt(s.dimValue,10):typeof s.dimValue=="number"?c.dimValue=s.dimValue:typeof s.dimValue=="object"&&(c.dimValue=new d.LongBits(s.dimValue.low>>>0,s.dimValue.high>>>0).toNumber())),s.dimParam!=null&&(c.dimParam=String(s.dimParam)),s.denotation!=null&&(c.denotation=String(s.denotation)),c},r.toObject=function(s,c){c||(c={});var h={};return c.defaults&&(h.denotation=""),s.dimValue!=null&&s.hasOwnProperty("dimValue")&&(typeof s.dimValue=="number"?h.dimValue=c.longs===String?String(s.dimValue):s.dimValue:h.dimValue=c.longs===String?d.Long.prototype.toString.call(s.dimValue):c.longs===Number?new d.LongBits(s.dimValue.low>>>0,s.dimValue.high>>>0).toNumber():s.dimValue,c.oneofs&&(h.value="dimValue")),s.dimParam!=null&&s.hasOwnProperty("dimParam")&&(h.dimParam=s.dimParam,c.oneofs&&(h.value="dimParam")),s.denotation!=null&&s.hasOwnProperty("denotation")&&(h.denotation=s.denotation),h},r.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},r.getTypeUrl=function(s){return s===void 0&&(s="type.googleapis.com"),s+"/onnx.TensorShapeProto.Dimension"},r})(),o})(),p.TypeProto=(function(){function o(i){if(i)for(var s=Object.keys(i),c=0;c<s.length;++c)i[s[c]]!=null&&(this[s[c]]=i[s[c]])}o.prototype.tensorType=null,o.prototype.sequenceType=null,o.prototype.mapType=null,o.prototype.optionalType=null,o.prototype.sparseTensorType=null,o.prototype.denotation="";var r;return Object.defineProperty(o.prototype,"value",{get:d.oneOfGetter(r=["tensorType","sequenceType","mapType","optionalType","sparseTensorType"]),set:d.oneOfSetter(r)}),o.create=function(i){return new o(i)},o.encode=function(i,s){return s||(s=u.create()),i.tensorType!=null&&Object.hasOwnProperty.call(i,"tensorType")&&l.onnx.TypeProto.Tensor.encode(i.tensorType,s.uint32(10).fork()).ldelim(),i.sequenceType!=null&&Object.hasOwnProperty.call(i,"sequenceType")&&l.onnx.TypeProto.Sequence.encode(i.sequenceType,s.uint32(34).fork()).ldelim(),i.mapType!=null&&Object.hasOwnProperty.call(i,"mapType")&&l.onnx.TypeProto.Map.encode(i.mapType,s.uint32(42).fork()).ldelim(),i.denotation!=null&&Object.hasOwnProperty.call(i,"denotation")&&s.uint32(50).string(i.denotation),i.sparseTensorType!=null&&Object.hasOwnProperty.call(i,"sparseTensorType")&&l.onnx.TypeProto.SparseTensor.encode(i.sparseTensorType,s.uint32(66).fork()).ldelim(),i.optionalType!=null&&Object.hasOwnProperty.call(i,"optionalType")&&l.onnx.TypeProto.Optional.encode(i.optionalType,s.uint32(74).fork()).ldelim(),s},o.encodeDelimited=function(i,s){return this.encode(i,s).ldelim()},o.decode=function(i,s){i instanceof a||(i=a.create(i));for(var c=s===void 0?i.len:i.pos+s,h=new l.onnx.TypeProto;i.pos<c;){var m=i.uint32();switch(m>>>3){case 1:{h.tensorType=l.onnx.TypeProto.Tensor.decode(i,i.uint32());break}case 4:{h.sequenceType=l.onnx.TypeProto.Sequence.decode(i,i.uint32());break}case 5:{h.mapType=l.onnx.TypeProto.Map.decode(i,i.uint32());break}case 9:{h.optionalType=l.onnx.TypeProto.Optional.decode(i,i.uint32());break}case 8:{h.sparseTensorType=l.onnx.TypeProto.SparseTensor.decode(i,i.uint32());break}case 6:{h.denotation=i.string();break}default:i.skipType(m&7);break}}return h},o.decodeDelimited=function(i){return i instanceof a||(i=new a(i)),this.decode(i,i.uint32())},o.verify=function(i){if(typeof i!="object"||i===null)return"object expected";var s={};if(i.tensorType!=null&&i.hasOwnProperty("tensorType")){s.value=1;{var c=l.onnx.TypeProto.Tensor.verify(i.tensorType);if(c)return"tensorType."+c}}if(i.sequenceType!=null&&i.hasOwnProperty("sequenceType")){if(s.value===1)return"value: multiple values";s.value=1;{var c=l.onnx.TypeProto.Sequence.verify(i.sequenceType);if(c)return"sequenceType."+c}}if(i.mapType!=null&&i.hasOwnProperty("mapType")){if(s.value===1)return"value: multiple values";s.value=1;{var c=l.onnx.TypeProto.Map.verify(i.mapType);if(c)return"mapType."+c}}if(i.optionalType!=null&&i.hasOwnProperty("optionalType")){if(s.value===1)return"value: multiple values";s.value=1;{var c=l.onnx.TypeProto.Optional.verify(i.optionalType);if(c)return"optionalType."+c}}if(i.sparseTensorType!=null&&i.hasOwnProperty("sparseTensorType")){if(s.value===1)return"value: multiple values";s.value=1;{var c=l.onnx.TypeProto.SparseTensor.verify(i.sparseTensorType);if(c)return"sparseTensorType."+c}}return i.denotation!=null&&i.hasOwnProperty("denotation")&&!d.isString(i.denotation)?"denotation: string expected":null},o.fromObject=function(i){if(i instanceof l.onnx.TypeProto)return i;var s=new l.onnx.TypeProto;if(i.tensorType!=null){if(typeof i.tensorType!="object")throw TypeError(".onnx.TypeProto.tensorType: object expected");s.tensorType=l.onnx.TypeProto.Tensor.fromObject(i.tensorType)}if(i.sequenceType!=null){if(typeof i.sequenceType!="object")throw TypeError(".onnx.TypeProto.sequenceType: object expected");s.sequenceType=l.onnx.TypeProto.Sequence.fromObject(i.sequenceType)}if(i.mapType!=null){if(typeof i.mapType!="object")throw TypeError(".onnx.TypeProto.mapType: object expected");s.mapType=l.onnx.TypeProto.Map.fromObject(i.mapType)}if(i.optionalType!=null){if(typeof i.optionalType!="object")throw TypeError(".onnx.TypeProto.optionalType: object expected");s.optionalType=l.onnx.TypeProto.Optional.fromObject(i.optionalType)}if(i.sparseTensorType!=null){if(typeof i.sparseTensorType!="object")throw TypeError(".onnx.TypeProto.sparseTensorType: object expected");s.sparseTensorType=l.onnx.TypeProto.SparseTensor.fromObject(i.sparseTensorType)}return i.denotation!=null&&(s.denotation=String(i.denotation)),s},o.toObject=function(i,s){s||(s={});var c={};return s.defaults&&(c.denotation=""),i.tensorType!=null&&i.hasOwnProperty("tensorType")&&(c.tensorType=l.onnx.TypeProto.Tensor.toObject(i.tensorType,s),s.oneofs&&(c.value="tensorType")),i.sequenceType!=null&&i.hasOwnProperty("sequenceType")&&(c.sequenceType=l.onnx.TypeProto.Sequence.toObject(i.sequenceType,s),s.oneofs&&(c.value="sequenceType")),i.mapType!=null&&i.hasOwnProperty("mapType")&&(c.mapType=l.onnx.TypeProto.Map.toObject(i.mapType,s),s.oneofs&&(c.value="mapType")),i.denotation!=null&&i.hasOwnProperty("denotation")&&(c.denotation=i.denotation),i.sparseTensorType!=null&&i.hasOwnProperty("sparseTensorType")&&(c.sparseTensorType=l.onnx.TypeProto.SparseTensor.toObject(i.sparseTensorType,s),s.oneofs&&(c.value="sparseTensorType")),i.optionalType!=null&&i.hasOwnProperty("optionalType")&&(c.optionalType=l.onnx.TypeProto.Optional.toObject(i.optionalType,s),s.oneofs&&(c.value="optionalType")),c},o.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},o.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TypeProto"},o.Tensor=(function(){function i(s){if(s)for(var c=Object.keys(s),h=0;h<c.length;++h)s[c[h]]!=null&&(this[c[h]]=s[c[h]])}return i.prototype.elemType=0,i.prototype.shape=null,i.create=function(s){return new i(s)},i.encode=function(s,c){return c||(c=u.create()),s.elemType!=null&&Object.hasOwnProperty.call(s,"elemType")&&c.uint32(8).int32(s.elemType),s.shape!=null&&Object.hasOwnProperty.call(s,"shape")&&l.onnx.TensorShapeProto.encode(s.shape,c.uint32(18).fork()).ldelim(),c},i.encodeDelimited=function(s,c){return this.encode(s,c).ldelim()},i.decode=function(s,c){s instanceof a||(s=a.create(s));for(var h=c===void 0?s.len:s.pos+c,m=new l.onnx.TypeProto.Tensor;s.pos<h;){var b=s.uint32();switch(b>>>3){case 1:{m.elemType=s.int32();break}case 2:{m.shape=l.onnx.TensorShapeProto.decode(s,s.uint32());break}default:s.skipType(b&7);break}}return m},i.decodeDelimited=function(s){return s instanceof a||(s=new a(s)),this.decode(s,s.uint32())},i.verify=function(s){if(typeof s!="object"||s===null)return"object expected";if(s.elemType!=null&&s.hasOwnProperty("elemType")&&!d.isInteger(s.elemType))return"elemType: integer expected";if(s.shape!=null&&s.hasOwnProperty("shape")){var c=l.onnx.TensorShapeProto.verify(s.shape);if(c)return"shape."+c}return null},i.fromObject=function(s){if(s instanceof l.onnx.TypeProto.Tensor)return s;var c=new l.onnx.TypeProto.Tensor;if(s.elemType!=null&&(c.elemType=s.elemType|0),s.shape!=null){if(typeof s.shape!="object")throw TypeError(".onnx.TypeProto.Tensor.shape: object expected");c.shape=l.onnx.TensorShapeProto.fromObject(s.shape)}return c},i.toObject=function(s,c){c||(c={});var h={};return c.defaults&&(h.elemType=0,h.shape=null),s.elemType!=null&&s.hasOwnProperty("elemType")&&(h.elemType=s.elemType),s.shape!=null&&s.hasOwnProperty("shape")&&(h.shape=l.onnx.TensorShapeProto.toObject(s.shape,c)),h},i.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},i.getTypeUrl=function(s){return s===void 0&&(s="type.googleapis.com"),s+"/onnx.TypeProto.Tensor"},i})(),o.Sequence=(function(){function i(s){if(s)for(var c=Object.keys(s),h=0;h<c.length;++h)s[c[h]]!=null&&(this[c[h]]=s[c[h]])}return i.prototype.elemType=null,i.create=function(s){return new i(s)},i.encode=function(s,c){return c||(c=u.create()),s.elemType!=null&&Object.hasOwnProperty.call(s,"elemType")&&l.onnx.TypeProto.encode(s.elemType,c.uint32(10).fork()).ldelim(),c},i.encodeDelimited=function(s,c){return this.encode(s,c).ldelim()},i.decode=function(s,c){s instanceof a||(s=a.create(s));for(var h=c===void 0?s.len:s.pos+c,m=new l.onnx.TypeProto.Sequence;s.pos<h;){var b=s.uint32();b>>>3===1?m.elemType=l.onnx.TypeProto.decode(s,s.uint32()):s.skipType(b&7)}return m},i.decodeDelimited=function(s){return s instanceof a||(s=new a(s)),this.decode(s,s.uint32())},i.verify=function(s){if(typeof s!="object"||s===null)return"object expected";if(s.elemType!=null&&s.hasOwnProperty("elemType")){var c=l.onnx.TypeProto.verify(s.elemType);if(c)return"elemType."+c}return null},i.fromObject=function(s){if(s instanceof l.onnx.TypeProto.Sequence)return s;var c=new l.onnx.TypeProto.Sequence;if(s.elemType!=null){if(typeof s.elemType!="object")throw TypeError(".onnx.TypeProto.Sequence.elemType: object expected");c.elemType=l.onnx.TypeProto.fromObject(s.elemType)}return c},i.toObject=function(s,c){c||(c={});var h={};return c.defaults&&(h.elemType=null),s.elemType!=null&&s.hasOwnProperty("elemType")&&(h.elemType=l.onnx.TypeProto.toObject(s.elemType,c)),h},i.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},i.getTypeUrl=function(s){return s===void 0&&(s="type.googleapis.com"),s+"/onnx.TypeProto.Sequence"},i})(),o.Map=(function(){function i(s){if(s)for(var c=Object.keys(s),h=0;h<c.length;++h)s[c[h]]!=null&&(this[c[h]]=s[c[h]])}return i.prototype.keyType=0,i.prototype.valueType=null,i.create=function(s){return new i(s)},i.encode=function(s,c){return c||(c=u.create()),s.keyType!=null&&Object.hasOwnProperty.call(s,"keyType")&&c.uint32(8).int32(s.keyType),s.valueType!=null&&Object.hasOwnProperty.call(s,"valueType")&&l.onnx.TypeProto.encode(s.valueType,c.uint32(18).fork()).ldelim(),c},i.encodeDelimited=function(s,c){return this.encode(s,c).ldelim()},i.decode=function(s,c){s instanceof a||(s=a.create(s));for(var h=c===void 0?s.len:s.pos+c,m=new l.onnx.TypeProto.Map;s.pos<h;){var b=s.uint32();switch(b>>>3){case 1:{m.keyType=s.int32();break}case 2:{m.valueType=l.onnx.TypeProto.decode(s,s.uint32());break}default:s.skipType(b&7);break}}return m},i.decodeDelimited=function(s){return s instanceof a||(s=new a(s)),this.decode(s,s.uint32())},i.verify=function(s){if(typeof s!="object"||s===null)return"object expected";if(s.keyType!=null&&s.hasOwnProperty("keyType")&&!d.isInteger(s.keyType))return"keyType: integer expected";if(s.valueType!=null&&s.hasOwnProperty("valueType")){var c=l.onnx.TypeProto.verify(s.valueType);if(c)return"valueType."+c}return null},i.fromObject=function(s){if(s instanceof l.onnx.TypeProto.Map)return s;var c=new l.onnx.TypeProto.Map;if(s.keyType!=null&&(c.keyType=s.keyType|0),s.valueType!=null){if(typeof s.valueType!="object")throw TypeError(".onnx.TypeProto.Map.valueType: object expected");c.valueType=l.onnx.TypeProto.fromObject(s.valueType)}return c},i.toObject=function(s,c){c||(c={});var h={};return c.defaults&&(h.keyType=0,h.valueType=null),s.keyType!=null&&s.hasOwnProperty("keyType")&&(h.keyType=s.keyType),s.valueType!=null&&s.hasOwnProperty("valueType")&&(h.valueType=l.onnx.TypeProto.toObject(s.valueType,c)),h},i.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},i.getTypeUrl=function(s){return s===void 0&&(s="type.googleapis.com"),s+"/onnx.TypeProto.Map"},i})(),o.Optional=(function(){function i(s){if(s)for(var c=Object.keys(s),h=0;h<c.length;++h)s[c[h]]!=null&&(this[c[h]]=s[c[h]])}return i.prototype.elemType=null,i.create=function(s){return new i(s)},i.encode=function(s,c){return c||(c=u.create()),s.elemType!=null&&Object.hasOwnProperty.call(s,"elemType")&&l.onnx.TypeProto.encode(s.elemType,c.uint32(10).fork()).ldelim(),c},i.encodeDelimited=function(s,c){return this.encode(s,c).ldelim()},i.decode=function(s,c){s instanceof a||(s=a.create(s));for(var h=c===void 0?s.len:s.pos+c,m=new l.onnx.TypeProto.Optional;s.pos<h;){var b=s.uint32();b>>>3===1?m.elemType=l.onnx.TypeProto.decode(s,s.uint32()):s.skipType(b&7)}return m},i.decodeDelimited=function(s){return s instanceof a||(s=new a(s)),this.decode(s,s.uint32())},i.verify=function(s){if(typeof s!="object"||s===null)return"object expected";if(s.elemType!=null&&s.hasOwnProperty("elemType")){var c=l.onnx.TypeProto.verify(s.elemType);if(c)return"elemType."+c}return null},i.fromObject=function(s){if(s instanceof l.onnx.TypeProto.Optional)return s;var c=new l.onnx.TypeProto.Optional;if(s.elemType!=null){if(typeof s.elemType!="object")throw TypeError(".onnx.TypeProto.Optional.elemType: object expected");c.elemType=l.onnx.TypeProto.fromObject(s.elemType)}return c},i.toObject=function(s,c){c||(c={});var h={};return c.defaults&&(h.elemType=null),s.elemType!=null&&s.hasOwnProperty("elemType")&&(h.elemType=l.onnx.TypeProto.toObject(s.elemType,c)),h},i.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},i.getTypeUrl=function(s){return s===void 0&&(s="type.googleapis.com"),s+"/onnx.TypeProto.Optional"},i})(),o.SparseTensor=(function(){function i(s){if(s)for(var c=Object.keys(s),h=0;h<c.length;++h)s[c[h]]!=null&&(this[c[h]]=s[c[h]])}return i.prototype.elemType=0,i.prototype.shape=null,i.create=function(s){return new i(s)},i.encode=function(s,c){return c||(c=u.create()),s.elemType!=null&&Object.hasOwnProperty.call(s,"elemType")&&c.uint32(8).int32(s.elemType),s.shape!=null&&Object.hasOwnProperty.call(s,"shape")&&l.onnx.TensorShapeProto.encode(s.shape,c.uint32(18).fork()).ldelim(),c},i.encodeDelimited=function(s,c){return this.encode(s,c).ldelim()},i.decode=function(s,c){s instanceof a||(s=a.create(s));for(var h=c===void 0?s.len:s.pos+c,m=new l.onnx.TypeProto.SparseTensor;s.pos<h;){var b=s.uint32();switch(b>>>3){case 1:{m.elemType=s.int32();break}case 2:{m.shape=l.onnx.TensorShapeProto.decode(s,s.uint32());break}default:s.skipType(b&7);break}}return m},i.decodeDelimited=function(s){return s instanceof a||(s=new a(s)),this.decode(s,s.uint32())},i.verify=function(s){if(typeof s!="object"||s===null)return"object expected";if(s.elemType!=null&&s.hasOwnProperty("elemType")&&!d.isInteger(s.elemType))return"elemType: integer expected";if(s.shape!=null&&s.hasOwnProperty("shape")){var c=l.onnx.TensorShapeProto.verify(s.shape);if(c)return"shape."+c}return null},i.fromObject=function(s){if(s instanceof l.onnx.TypeProto.SparseTensor)return s;var c=new l.onnx.TypeProto.SparseTensor;if(s.elemType!=null&&(c.elemType=s.elemType|0),s.shape!=null){if(typeof s.shape!="object")throw TypeError(".onnx.TypeProto.SparseTensor.shape: object expected");c.shape=l.onnx.TensorShapeProto.fromObject(s.shape)}return c},i.toObject=function(s,c){c||(c={});var h={};return c.defaults&&(h.elemType=0,h.shape=null),s.elemType!=null&&s.hasOwnProperty("elemType")&&(h.elemType=s.elemType),s.shape!=null&&s.hasOwnProperty("shape")&&(h.shape=l.onnx.TensorShapeProto.toObject(s.shape,c)),h},i.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},i.getTypeUrl=function(s){return s===void 0&&(s="type.googleapis.com"),s+"/onnx.TypeProto.SparseTensor"},i})(),o})(),p.OperatorSetIdProto=(function(){function o(r){if(r)for(var i=Object.keys(r),s=0;s<i.length;++s)r[i[s]]!=null&&(this[i[s]]=r[i[s]])}return o.prototype.domain="",o.prototype.version=d.Long?d.Long.fromBits(0,0,!1):0,o.create=function(r){return new o(r)},o.encode=function(r,i){return i||(i=u.create()),r.domain!=null&&Object.hasOwnProperty.call(r,"domain")&&i.uint32(10).string(r.domain),r.version!=null&&Object.hasOwnProperty.call(r,"version")&&i.uint32(16).int64(r.version),i},o.encodeDelimited=function(r,i){return this.encode(r,i).ldelim()},o.decode=function(r,i){r instanceof a||(r=a.create(r));for(var s=i===void 0?r.len:r.pos+i,c=new l.onnx.OperatorSetIdProto;r.pos<s;){var h=r.uint32();switch(h>>>3){case 1:{c.domain=r.string();break}case 2:{c.version=r.int64();break}default:r.skipType(h&7);break}}return c},o.decodeDelimited=function(r){return r instanceof a||(r=new a(r)),this.decode(r,r.uint32())},o.verify=function(r){return typeof r!="object"||r===null?"object expected":r.domain!=null&&r.hasOwnProperty("domain")&&!d.isString(r.domain)?"domain: string expected":r.version!=null&&r.hasOwnProperty("version")&&!d.isInteger(r.version)&&!(r.version&&d.isInteger(r.version.low)&&d.isInteger(r.version.high))?"version: integer|Long expected":null},o.fromObject=function(r){if(r instanceof l.onnx.OperatorSetIdProto)return r;var i=new l.onnx.OperatorSetIdProto;return r.domain!=null&&(i.domain=String(r.domain)),r.version!=null&&(d.Long?(i.version=d.Long.fromValue(r.version)).unsigned=!1:typeof r.version=="string"?i.version=parseInt(r.version,10):typeof r.version=="number"?i.version=r.version:typeof r.version=="object"&&(i.version=new d.LongBits(r.version.low>>>0,r.version.high>>>0).toNumber())),i},o.toObject=function(r,i){i||(i={});var s={};if(i.defaults)if(s.domain="",d.Long){var c=new d.Long(0,0,!1);s.version=i.longs===String?c.toString():i.longs===Number?c.toNumber():c}else s.version=i.longs===String?"0":0;return r.domain!=null&&r.hasOwnProperty("domain")&&(s.domain=r.domain),r.version!=null&&r.hasOwnProperty("version")&&(typeof r.version=="number"?s.version=i.longs===String?String(r.version):r.version:s.version=i.longs===String?d.Long.prototype.toString.call(r.version):i.longs===Number?new d.LongBits(r.version.low>>>0,r.version.high>>>0).toNumber():r.version),s},o.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},o.getTypeUrl=function(r){return r===void 0&&(r="type.googleapis.com"),r+"/onnx.OperatorSetIdProto"},o})(),p.OperatorStatus=(function(){var o={},r=Object.create(o);return r[o[0]="EXPERIMENTAL"]=0,r[o[1]="STABLE"]=1,r})(),p.FunctionProto=(function(){function o(r){if(this.input=[],this.output=[],this.attribute=[],this.attributeProto=[],this.node=[],this.opsetImport=[],r)for(var i=Object.keys(r),s=0;s<i.length;++s)r[i[s]]!=null&&(this[i[s]]=r[i[s]])}return o.prototype.name="",o.prototype.input=d.emptyArray,o.prototype.output=d.emptyArray,o.prototype.attribute=d.emptyArray,o.prototype.attributeProto=d.emptyArray,o.prototype.node=d.emptyArray,o.prototype.docString="",o.prototype.opsetImport=d.emptyArray,o.prototype.domain="",o.create=function(r){return new o(r)},o.encode=function(r,i){if(i||(i=u.create()),r.name!=null&&Object.hasOwnProperty.call(r,"name")&&i.uint32(10).string(r.name),r.input!=null&&r.input.length)for(var s=0;s<r.input.length;++s)i.uint32(34).string(r.input[s]);if(r.output!=null&&r.output.length)for(var s=0;s<r.output.length;++s)i.uint32(42).string(r.output[s]);if(r.attribute!=null&&r.attribute.length)for(var s=0;s<r.attribute.length;++s)i.uint32(50).string(r.attribute[s]);if(r.node!=null&&r.node.length)for(var s=0;s<r.node.length;++s)l.onnx.NodeProto.encode(r.node[s],i.uint32(58).fork()).ldelim();if(r.docString!=null&&Object.hasOwnProperty.call(r,"docString")&&i.uint32(66).string(r.docString),r.opsetImport!=null&&r.opsetImport.length)for(var s=0;s<r.opsetImport.length;++s)l.onnx.OperatorSetIdProto.encode(r.opsetImport[s],i.uint32(74).fork()).ldelim();if(r.domain!=null&&Object.hasOwnProperty.call(r,"domain")&&i.uint32(82).string(r.domain),r.attributeProto!=null&&r.attributeProto.length)for(var s=0;s<r.attributeProto.length;++s)l.onnx.AttributeProto.encode(r.attributeProto[s],i.uint32(90).fork()).ldelim();return i},o.encodeDelimited=function(r,i){return this.encode(r,i).ldelim()},o.decode=function(r,i){r instanceof a||(r=a.create(r));for(var s=i===void 0?r.len:r.pos+i,c=new l.onnx.FunctionProto;r.pos<s;){var h=r.uint32();switch(h>>>3){case 1:{c.name=r.string();break}case 4:{c.input&&c.input.length||(c.input=[]),c.input.push(r.string());break}case 5:{c.output&&c.output.length||(c.output=[]),c.output.push(r.string());break}case 6:{c.attribute&&c.attribute.length||(c.attribute=[]),c.attribute.push(r.string());break}case 11:{c.attributeProto&&c.attributeProto.length||(c.attributeProto=[]),c.attributeProto.push(l.onnx.AttributeProto.decode(r,r.uint32()));break}case 7:{c.node&&c.node.length||(c.node=[]),c.node.push(l.onnx.NodeProto.decode(r,r.uint32()));break}case 8:{c.docString=r.string();break}case 9:{c.opsetImport&&c.opsetImport.length||(c.opsetImport=[]),c.opsetImport.push(l.onnx.OperatorSetIdProto.decode(r,r.uint32()));break}case 10:{c.domain=r.string();break}default:r.skipType(h&7);break}}return c},o.decodeDelimited=function(r){return r instanceof a||(r=new a(r)),this.decode(r,r.uint32())},o.verify=function(r){if(typeof r!="object"||r===null)return"object expected";if(r.name!=null&&r.hasOwnProperty("name")&&!d.isString(r.name))return"name: string expected";if(r.input!=null&&r.hasOwnProperty("input")){if(!Array.isArray(r.input))return"input: array expected";for(var i=0;i<r.input.length;++i)if(!d.isString(r.input[i]))return"input: string[] expected"}if(r.output!=null&&r.hasOwnProperty("output")){if(!Array.isArray(r.output))return"output: array expected";for(var i=0;i<r.output.length;++i)if(!d.isString(r.output[i]))return"output: string[] expected"}if(r.attribute!=null&&r.hasOwnProperty("attribute")){if(!Array.isArray(r.attribute))return"attribute: array expected";for(var i=0;i<r.attribute.length;++i)if(!d.isString(r.attribute[i]))return"attribute: string[] expected"}if(r.attributeProto!=null&&r.hasOwnProperty("attributeProto")){if(!Array.isArray(r.attributeProto))return"attributeProto: array expected";for(var i=0;i<r.attributeProto.length;++i){var s=l.onnx.AttributeProto.verify(r.attributeProto[i]);if(s)return"attributeProto."+s}}if(r.node!=null&&r.hasOwnProperty("node")){if(!Array.isArray(r.node))return"node: array expected";for(var i=0;i<r.node.length;++i){var s=l.onnx.NodeProto.verify(r.node[i]);if(s)return"node."+s}}if(r.docString!=null&&r.hasOwnProperty("docString")&&!d.isString(r.docString))return"docString: string expected";if(r.opsetImport!=null&&r.hasOwnProperty("opsetImport")){if(!Array.isArray(r.opsetImport))return"opsetImport: array expected";for(var i=0;i<r.opsetImport.length;++i){var s=l.onnx.OperatorSetIdProto.verify(r.opsetImport[i]);if(s)return"opsetImport."+s}}return r.domain!=null&&r.hasOwnProperty("domain")&&!d.isString(r.domain)?"domain: string expected":null},o.fromObject=function(r){if(r instanceof l.onnx.FunctionProto)return r;var i=new l.onnx.FunctionProto;if(r.name!=null&&(i.name=String(r.name)),r.input){if(!Array.isArray(r.input))throw TypeError(".onnx.FunctionProto.input: array expected");i.input=[];for(var s=0;s<r.input.length;++s)i.input[s]=String(r.input[s])}if(r.output){if(!Array.isArray(r.output))throw TypeError(".onnx.FunctionProto.output: array expected");i.output=[];for(var s=0;s<r.output.length;++s)i.output[s]=String(r.output[s])}if(r.attribute){if(!Array.isArray(r.attribute))throw TypeError(".onnx.FunctionProto.attribute: array expected");i.attribute=[];for(var s=0;s<r.attribute.length;++s)i.attribute[s]=String(r.attribute[s])}if(r.attributeProto){if(!Array.isArray(r.attributeProto))throw TypeError(".onnx.FunctionProto.attributeProto: array expected");i.attributeProto=[];for(var s=0;s<r.attributeProto.length;++s){if(typeof r.attributeProto[s]!="object")throw TypeError(".onnx.FunctionProto.attributeProto: object expected");i.attributeProto[s]=l.onnx.AttributeProto.fromObject(r.attributeProto[s])}}if(r.node){if(!Array.isArray(r.node))throw TypeError(".onnx.FunctionProto.node: array expected");i.node=[];for(var s=0;s<r.node.length;++s){if(typeof r.node[s]!="object")throw TypeError(".onnx.FunctionProto.node: object expected");i.node[s]=l.onnx.NodeProto.fromObject(r.node[s])}}if(r.docString!=null&&(i.docString=String(r.docString)),r.opsetImport){if(!Array.isArray(r.opsetImport))throw TypeError(".onnx.FunctionProto.opsetImport: array expected");i.opsetImport=[];for(var s=0;s<r.opsetImport.length;++s){if(typeof r.opsetImport[s]!="object")throw TypeError(".onnx.FunctionProto.opsetImport: object expected");i.opsetImport[s]=l.onnx.OperatorSetIdProto.fromObject(r.opsetImport[s])}}return r.domain!=null&&(i.domain=String(r.domain)),i},o.toObject=function(r,i){i||(i={});var s={};if((i.arrays||i.defaults)&&(s.input=[],s.output=[],s.attribute=[],s.node=[],s.opsetImport=[],s.attributeProto=[]),i.defaults&&(s.name="",s.docString="",s.domain=""),r.name!=null&&r.hasOwnProperty("name")&&(s.name=r.name),r.input&&r.input.length){s.input=[];for(var c=0;c<r.input.length;++c)s.input[c]=r.input[c]}if(r.output&&r.output.length){s.output=[];for(var c=0;c<r.output.length;++c)s.output[c]=r.output[c]}if(r.attribute&&r.attribute.length){s.attribute=[];for(var c=0;c<r.attribute.length;++c)s.attribute[c]=r.attribute[c]}if(r.node&&r.node.length){s.node=[];for(var c=0;c<r.node.length;++c)s.node[c]=l.onnx.NodeProto.toObject(r.node[c],i)}if(r.docString!=null&&r.hasOwnProperty("docString")&&(s.docString=r.docString),r.opsetImport&&r.opsetImport.length){s.opsetImport=[];for(var c=0;c<r.opsetImport.length;++c)s.opsetImport[c]=l.onnx.OperatorSetIdProto.toObject(r.opsetImport[c],i)}if(r.domain!=null&&r.hasOwnProperty("domain")&&(s.domain=r.domain),r.attributeProto&&r.attributeProto.length){s.attributeProto=[];for(var c=0;c<r.attributeProto.length;++c)s.attributeProto[c]=l.onnx.AttributeProto.toObject(r.attributeProto[c],i)}return s},o.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},o.getTypeUrl=function(r){return r===void 0&&(r="type.googleapis.com"),r+"/onnx.FunctionProto"},o})(),p})(),t.exports=l});function eo(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function Eo(e){return new TextDecoder().decode(e)}var je,Dr,_l,gt,zi,ft,xt,te,Po,kr,Nr,Lr,Le=N(()=>{Vs(),je=_e(Yr()),Rr(),Dr=class{static arraysEqual(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}},_l=class{static preprocessInputShapes(e,t){let n=e.length===1?[1,e[0]]:e,a=t.length===1?[t[0],1]:t;return[n,a]}static postprocessOutputShape(e,t,n){t===1&&e.splice(e.length-2,1),n===1&&e.pop()}static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},gt=class rn{static calcShape(t,n,a=!1){let u=t.length,d=n.length;if(u===0)return n;if(d===0)return t;let l=Math.max(t.length,n.length),p=new Array(l);if(a){if(u<2||d<2)return;let o=_l.calcMatMulShape([t[u-2],t[u-1]],[n[d-2],n[d-1]]);if(o===void 0)return;[p[l-2],p[l-1]]=o}for(let o=a?3:1;o<=l;o++){let r=u-o<0?1:t[u-o],i=d-o<0?1:n[d-o];if(r!==i&&r>1&&i>1)return;p[l-o]=Math.max(r,i)}return p}static index(t,n){let a=new Array(n.length);return rn.fillIndex(t,n,a),a}static fillIndex(t,n,a){let u=t.length-n.length;for(let d=0;d<n.length;d++)a[d]=t[u+d]%n[d]}static calc(t,n,a,u,d){let l=rn.calcShape(t.dims,n.dims);if(l){if(u&&!te.areEqual(l,t.dims))return;let p=te.size(l),o=u?t:new rt(l,d||t.type);if(l.length===0)o.set([],a(t.get([]),n.get([])));else{let r=new Array(l.length),i=new Array(t.dims.length),s=new Array(n.dims.length),c=0,h=0,m=!1,b=!1;t.dims.length===0&&(c=t.get([]),m=!0),n.dims.length===0&&(h=n.get([]),b=!0);let w;for(let x=0;x<p;x++){w=x;for(let _=l.length-1;_>=0;_--)r[_]=w%l[_],w=Math.floor(w/l[_]);m||(rn.fillIndex(r,t.dims,i),c=t.get(i)),b||(rn.fillIndex(r,n.dims,s),h=n.get(s)),o.set(r,a(c,h))}}return o}}static isValidBroadcast(t,n){let a=t.length,u=n.length;if(a>u)return!1;for(let d=1;d<=a;d++)if(t[a-d]!==1&&t[a-d]!==n[u-d])return!1;return!0}static getBroadcastDims(t,n){let a=t.length,u=[];for(let d=0;d<a;d++){let l=a-1-d,p=t[l]||1;(n[n.length-1-d]||1)>1&&p===1&&u.unshift(l)}return u}},zi=class{static getShapeOfGemmResult(e,t,n,a,u){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let d,l,p;t?(d=e[1],l=e[0]):(d=e[0],l=e[1]);let o=-1;if(a?(p=n[0],o=1):(p=n[1],o=0),n[o]!==l)throw new Error("dimension mismatch");if(d<=0||p<=0||l<=0)throw new Error("invalid shape specified");if(u&&!gt.isValidBroadcast(u,[d,p]))throw new Error("gemm: invalid bias shape for broadcast");return[d,p,l]}},ft=class Ai{static tensorDataTypeFromProto(t){switch(t){case je.onnx.TensorProto.DataType.INT8:return"int8";case je.onnx.TensorProto.DataType.UINT8:return"uint8";case je.onnx.TensorProto.DataType.BOOL:return"bool";case je.onnx.TensorProto.DataType.INT16:return"int16";case je.onnx.TensorProto.DataType.UINT16:return"uint16";case je.onnx.TensorProto.DataType.INT32:return"int32";case je.onnx.TensorProto.DataType.UINT32:return"uint32";case je.onnx.TensorProto.DataType.FLOAT:return"float32";case je.onnx.TensorProto.DataType.DOUBLE:return"float64";case je.onnx.TensorProto.DataType.STRING:return"string";case je.onnx.TensorProto.DataType.INT64:return"int32";case je.onnx.TensorProto.DataType.UINT64:return"uint32";default:throw new Error(`unsupported data type: ${je.onnx.TensorProto.DataType[t]}`)}}static tensorDataTypeStringToEnum(t){switch(t){case"int8":return je.onnx.TensorProto.DataType.INT8;case"uint8":return je.onnx.TensorProto.DataType.UINT8;case"bool":return je.onnx.TensorProto.DataType.BOOL;case"int16":return je.onnx.TensorProto.DataType.INT16;case"uint16":return je.onnx.TensorProto.DataType.UINT16;case"int32":return je.onnx.TensorProto.DataType.INT32;case"uint32":return je.onnx.TensorProto.DataType.UINT32;case"float32":return je.onnx.TensorProto.DataType.FLOAT;case"float64":return je.onnx.TensorProto.DataType.DOUBLE;case"string":return je.onnx.TensorProto.DataType.STRING;case"int64":return je.onnx.TensorProto.DataType.INT64;case"uint64":return je.onnx.TensorProto.DataType.UINT64;default:throw new Error(`unsupported data type: ${t}`)}}static tensorDimsFromProto(t){return t.map(n=>cr.isLong(n)?n.toNumber():n)}static tensorValueTypeFromProto(t){return{tensorType:Ai.tensorDataTypeFromProto(t.elemType),shape:{dims:Ai.tensorDimsFromProto(t.shape.dim.map(n=>n.dimValue))}}}static tensorDimsFromORTFormat(t){let n=[];for(let a=0;a<t.dimsLength();a++)n.push(xt.longToNumber(t.dims(a)));return n}static tensorAttributesFromORTFormat(t){let n=[];for(let a=0;a<t.attributesLength();a++)n.push(t.attributes(a));return n}},xt=class{static longToNumber(e){return cr.isLong(e)?e.toNumber():typeof e=="bigint"?Number(e):e}static isLong(e){return cr.isLong(e)||typeof e=="bigint"}},te=class Vt{static size(t){return Vt.getSizeFromDimensionRange(t,0,t.length)}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Vt.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Vt.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,a){let u=1;for(let d=n;d<a;d++){if(t[d]<=0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains 0 or negative values in them.");u*=t[d]}return u}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let a=new Array(n);a[n-1]=1,a[n-2]=t[n-1];for(let u=n-3;u>=0;--u)a[u]=a[u+1]*t[u+1];return a}static transpose(t){return t.slice().reverse()}static indicesToOffset(t,n,a){a===void 0&&(a=t.length);let u=0;for(let d=0;d<a;++d)u+=n[d]*t[d];return u}static offsetToIndices(t,n){let a=n.length;if(a===0)return[];if(a===1)return[t*n[0]];let u=new Array(n.length);for(let d=0;d<u.length-1;++d)u[d]=Math.floor(t/n[d]),t-=u[d]*n[d];return u[u.length-1]=t,u}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(a=>this.normalizeAxis(a,n))}static incrementIndex(t,n,a){if(n.length===0||t.length===0)throw new Error("Index incrementing unsupported for scalar Tensor");if(a===void 0)a=n.length;else if(a<=0||a>n.length)throw new Error("Incorrect axis to increment on");for(let u=a-1;u>=0&&(t[u]++,!(t[u]<n[u]));--u)t[u]=0}static calculateReshapedDims(t,n){if(n.length===0){if(t.length===0||Vt.size(t)===1)return[];throw new Error("cannot reshape to a scalar Tensor")}let a=n.length,u=new Array(a),d=-1,l=1;for(let o=0;o<a;o++){if(n[o]<-1)throw new Error("a dimension in shape hints cannot be less than -1");if(n[o]===-1){if(d!==-1)throw new Error("at most one dimension in shape hints can be -1");d=o}else{if(n[o]===0){if(o>=t.length)throw new Error("the dimension with value zero exceeds the dimension size of the input tensor");u[o]=t[o]}else u[o]=n[o];l*=u[o]}}let p=Vt.size(t);if(d!==-1){if(p%l!==0)throw new Error(`the input tensor cannot be reshaped to the requested shape. Input shape: [${t}] Output shape: [${n}]`);u[d]=p/l}else if(l!==p)throw new Error("reshapedDims and originalDims don't have matching sizes");return u}static sortBasedOnPerm(t,n){return n?n.map(a=>t[a]):t.slice().reverse()}static padShape(t,n){let a=t.length;return t.map((u,d)=>u+n[d]+n[d+a])}static areEqual(t,n){return t.length!==n.length?!1:t.every((a,u)=>a===n[u])}static validateDimsAndCalcSize(t){if(t.length>6)throw new TypeError("Only rank 0 to 6 is supported for tensor shape.");let n=1;for(let a of t){if(!Number.isInteger(a))throw new TypeError(`Invalid shape: ${a} is not an integer`);if(a<0||a>2147483647)throw new TypeError(`Invalid shape: length ${a} is not allowed`);n*=a}return n}static flattenShape(t,n){n<0&&(n+=t.length);let a=t.reduce((d,l)=>d*l,1),u=t.slice(n).reduce((d,l)=>d*l,1);return[a/u,u]}static squeezeShape(t,n){let a=new Array;n=Vt.normalizeAxes(n,t.length);for(let u=0;u<t.length;u++){let d=n.indexOf(u)>=0;if(d&&t[u]!==1)throw new Error("squeeze an axis of size different than 1");(n.length===0&&t[u]>1||n.length>0&&!d)&&a.push(t[u])}return a}static unsqueezeShape(t,n){let a=new Array(t.length+n.length);a.fill(0);for(let d=0;d<n.length;d++){let l=Vt.normalizeAxis(n[d],a.length);if(l>=a.length)throw new Error("'axes' has an out of range axis");if(a[l]!==0)throw new Error("'axes' has a duplicate axis");a[l]=1}let u=0;for(let d=0;d<a.length;d++)a[d]===0&&(a[d]=t[u++]);if(u!==t.length)throw new Error("the unsqueezed dimension could not be established");return a}},Po=class vd{static splitShape(t,n,a,u){if(a.length===0){if(!u)throw new Error("need to know number of outputs when the 'split' attribute is not specified");vd.determineSplit(t[n],u,a)}let d=[],l=[0];for(let p=0;p<a.length;++p){p!==0&&l.push(l[p-1]+a[p-1]);let o=t.slice();o[n]=a[p],d.push(o)}return[d,l]}static determineSplit(t,n,a){if(t%n!==0)throw new Error("cannot split tensor to equal sized parts");for(let u=0;u<n;++u)a.push(t/n)}},kr=class nn{static adjustPoolAttributes(t,n,a,u,d,l){if(!t&&a.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let p=0;p<n.length-2;p++)p>=a.length?a.push(n[p+2]):a[p]=n[p+2];for(let p=0;p<a.length;p++)if(p<u.length){if(u[p]<0)throw new Error("strides should be greater than or equal to 1")}else u.push(1);for(let p=0;p<a.length;p++)if(p<d.length){if(d[p]<0)throw new Error("dilations should be greater than or equal to 1")}else d.push(1);for(let p=0;p<a.length*2;p++)if(p<l.length){if(l[p]<0)throw new Error("pad should be greater than or equal to 1")}else l.push(0);for(let p=0;p<a.length;p++){if(a[p]<=0)throw new Error("kernel shapes need to be greater than 0");if(l[p]>=a[p]||l[p+a.length]>=a[p])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,a,u,d,l){if(l){if(d.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(u.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let p=0;p<t.length-2;p++)nn.adjustPadAndReturnShape(t[p+2],n[p],a[p],u[p],d,p,p+t.length-2,l)}}static computePoolOutputShape(t,n,a,u,d,l,p){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let o=[n[0],n[1]];return nn.computeShapeHelper(t,n,o,a,u,d,l,p),o}static computeConvOutputShape(t,n,a,u,d,l,p){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let o=[t[0],n[0]];return nn.computeShapeHelper(!1,t,o,a,u,d,l,p),o}static computeShapeHelper(t,n,a,u,d,l,p,o){if(t)for(let r=0;r<n.length-2;r++)a.push(1);else for(let r=0;r<n.length-2;r++)a.push(nn.adjustPadAndReturnShape(n[r+2],u[r],d[r],l[r],p,r,r+n.length-2,o))}static adjustPadAndReturnShape(t,n,a,u,d,l,p,o){let r=a*(u-1)+1;if(o&&o!=="NOTSET")switch(o){case"VALID":return d[l]=0,d[p]=0,Math.floor((t-r)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let i=((t+n-1)/n-1)*n+u-t;return d[l]=Math.floor(o==="SAME_LOWER"?(i+1)/2:i/2),d[p]=i-d[l],Math.floor((t+i-u)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+d[l]+d[p]-r)/n+1)}},Nr=-34028234663852886e22,Lr=34028234663852886e22});function q$(e){switch(e){case"bool":case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;case"float64":return 8;default:throw new Error(`cannot calculate sizeof() on type ${e}`)}}function nm(e){switch(e){case Ie.onnx.TensorProto.DataType.UINT8:case Ie.onnx.TensorProto.DataType.INT8:case Ie.onnx.TensorProto.DataType.BOOL:return 1;case Ie.onnx.TensorProto.DataType.UINT16:case Ie.onnx.TensorProto.DataType.INT16:return 2;case Ie.onnx.TensorProto.DataType.FLOAT:case Ie.onnx.TensorProto.DataType.INT32:case Ie.onnx.TensorProto.DataType.UINT32:return 4;case Ie.onnx.TensorProto.DataType.INT64:case Ie.onnx.TensorProto.DataType.DOUBLE:case Ie.onnx.TensorProto.DataType.UINT64:return 8;default:throw new Error(`cannot calculate sizeof() on type ${Ie.onnx.TensorProto.DataType[e]}`)}}function j$(e,t){return new(im(t))(e)}function im(e){switch(e){case"bool":case"uint8":return Uint8Array;case"int8":return Int8Array;case"int16":return Int16Array;case"uint16":return Uint16Array;case"int32":return Int32Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"float32":return Float32Array;case"float64":return Float64Array;default:throw new Error("unspecified error")}}function wl(e,t){if(t===Ie.onnx.TensorProto.DataType.INT64||t===Io.TensorDataType.INT64){if(e.greaterThanOrEqual(2147483648)||e.lessThan(-2147483648))throw new TypeError("int64 is not supported")}else if(t===Ie.onnx.TensorProto.DataType.UINT32||t===Io.TensorDataType.UINT32||t===Ie.onnx.TensorProto.DataType.UINT64||t===Io.TensorDataType.UINT64){if(e.greaterThanOrEqual(4294967296)||e.lessThan(0))throw new TypeError("uint64 is not supported")}else throw new TypeError(`not a LONG type: ${Ie.onnx.TensorProto.DataType[t]}`);return e.toNumber()}function rm(e,t,n){switch(t){case Ie.onnx.TensorProto.DataType.BOOL:case Ie.onnx.TensorProto.DataType.UINT8:return e.getUint8(n);case Ie.onnx.TensorProto.DataType.INT8:return e.getInt8(n);case Ie.onnx.TensorProto.DataType.UINT16:return e.getUint16(n,!0);case Ie.onnx.TensorProto.DataType.INT16:return e.getInt16(n,!0);case Ie.onnx.TensorProto.DataType.FLOAT:return e.getFloat32(n,!0);case Ie.onnx.TensorProto.DataType.INT32:return e.getInt32(n,!0);case Ie.onnx.TensorProto.DataType.UINT32:return e.getUint32(n,!0);case Ie.onnx.TensorProto.DataType.INT64:return wl(cr.fromBits(e.getUint32(n,!0),e.getUint32(n+4,!0),!1),t);case Ie.onnx.TensorProto.DataType.DOUBLE:return e.getFloat64(n,!0);case Ie.onnx.TensorProto.DataType.UINT64:return wl(cr.fromBits(e.getUint32(n,!0),e.getUint32(n+4,!0),!0),t);default:throw new Error(`cannot read from DataView for type ${Ie.onnx.TensorProto.DataType[t]}`)}}var om,Ie,rt,Rr=N(()=>{om=_e(vf()),Vs(),So(),Ie=_e(Yr()),Le(),rt=class wn{constructor(t,n,a,u,d,l=om.Guid.create()){this.dims=t,this.type=n,this.dataProvider=a,this.asyncDataProvider=u,this.cache=d,this.dataId=l,this.size=te.validateDimsAndCalcSize(t);let p=this.size,o=a===void 0&&u===void 0&&d===void 0;if(d!==void 0&&d.length!==p)throw new RangeError("Input dims doesn't match data length.");if(n==="string"){if(d!==void 0&&(!Array.isArray(d)||!d.every(r=>typeof r=="string")))throw new TypeError("cache should be a string array");o&&(this.cache=new Array(p))}else{if(d!==void 0){let r=im(n);if(!(d instanceof r))throw new TypeError(`cache should be type ${r.name}`)}if(o){let r=new ArrayBuffer(p*q$(n));this.cache=j$(r,n)}}}get data(){if(this.cache===void 0){let t=this.dataProvider(this.dataId);if(t.length!==this.size)throw new Error("Length of data provided by the Data Provider is inconsistent with the dims of this Tensor.");this.cache=t}return this.cache}get stringData(){if(this.type!=="string")throw new TypeError("data type is not string");return this.data}get integerData(){switch(this.type){case"uint8":case"int8":case"uint16":case"int16":case"int32":case"uint32":case"bool":return this.data;default:throw new TypeError("data type is not integer (uint8, int8, uint16, int16, int32, uint32, bool)")}}get floatData(){switch(this.type){case"float32":case"float64":return this.data;default:throw new TypeError("data type is not float (float32, float64)")}}get numberData(){if(this.type!=="string")return this.data;throw new TypeError("type cannot be non-number (string)")}get(t){return this.data[te.indicesToOffset(t,this.strides)]}set(t,n){this.data[te.indicesToOffset(t,this.strides)]=n}async getData(){return this.cache===void 0&&(this.cache=await this.asyncDataProvider(this.dataId)),this.cache}get strides(){return this._strides||(this._strides=te.computeStrides(this.dims)),this._strides}static fromProto(t){if(!t)throw new Error("cannot construct Value from an empty tensor");let n=ft.tensorDataTypeFromProto(t.dataType),a=ft.tensorDimsFromProto(t.dims),u=new wn(a,n);if(n==="string")t.stringData.forEach((d,l)=>{u.data[l]=Eo(d)});else if(t.rawData&&typeof t.rawData.byteLength=="number"&&t.rawData.byteLength>0){let d=u.data,l=new DataView(t.rawData.buffer,t.rawData.byteOffset,t.rawData.byteLength),p=nm(t.dataType),o=t.rawData.byteLength/p;if(t.rawData.byteLength%p!==0)throw new Error("invalid buffer length");if(d.length!==o)throw new Error("buffer length mismatch");for(let r=0;r<o;r++){let i=rm(l,t.dataType,r*p);d[r]=i}}else{let d;switch(t.dataType){case Ie.onnx.TensorProto.DataType.FLOAT:d=t.floatData;break;case Ie.onnx.TensorProto.DataType.INT32:case Ie.onnx.TensorProto.DataType.INT16:case Ie.onnx.TensorProto.DataType.UINT16:case Ie.onnx.TensorProto.DataType.INT8:case Ie.onnx.TensorProto.DataType.UINT8:case Ie.onnx.TensorProto.DataType.BOOL:d=t.int32Data;break;case Ie.onnx.TensorProto.DataType.INT64:d=t.int64Data;break;case Ie.onnx.TensorProto.DataType.DOUBLE:d=t.doubleData;break;case Ie.onnx.TensorProto.DataType.UINT32:case Ie.onnx.TensorProto.DataType.UINT64:d=t.uint64Data;break;default:throw new Error("unspecific error")}if(d==null)throw new Error("failed to populate data from a tensorproto value");let l=u.data;if(l.length!==d.length)throw new Error("array length mismatch");for(let p=0;p<d.length;p++){let o=d[p];cr.isLong(o)?l[p]=wl(o,t.dataType):l[p]=o}}return u}static fromData(t,n,a){return new wn(n,a,void 0,void 0,t)}static fromOrtTensor(t){if(!t)throw new Error("cannot construct Value from an empty tensor");let n=ft.tensorDimsFromORTFormat(t),a=ft.tensorDataTypeFromProto(t.dataType()),u=new wn(n,a);if(a==="string")for(let d=0;d<t.stringDataLength();d++)u.data[d]=t.stringData(d);else if(t.rawDataArray()&&typeof t.rawDataLength()=="number"&&t.rawDataLength()>0){let d=u.data,l=new DataView(t.rawDataArray().buffer,t.rawDataArray().byteOffset,t.rawDataLength()),p=nm(t.dataType()),o=t.rawDataLength()/p;if(t.rawDataLength()%p!==0)throw new Error("invalid buffer length");if(d.length!==o)throw new Error("buffer length mismatch");for(let r=0;r<o;r++){let i=rm(l,t.dataType(),r*p);d[r]=i}}return u}}});function se(e){return e===1?K$:X$}function am(e){let t=se(e);return`${t.version}
      precision highp float;
      ${t.attribute} vec3 position;
      ${t.attribute} vec2 textureCoord;

      ${t.varyingVertex} vec2 TexCoords;

      void main()
      {
          gl_Position = vec4(position, 1.0);
          TexCoords = textureCoord;
      }`}function sm(e){let t=se(e);return`${t.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${t.varyingFrag} vec2 TexCoords;
    ${t.outputDeclaration}
    const vec2 halfCR = vec2(0.5, 0.5);

    // Custom vector types to handle higher dimenalities.
    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    `}function um(e,t){let n=se(e);return`
  void main() {
    int indices[${t}];
    toVec(TexCoords, indices);
    vec4 result = vec4(process(indices));
    ${n.output} = result;
  }
  `}var K$,X$,Ze=N(()=>{K$={version:"",attribute:"attribute",varyingVertex:"varying",varyingFrag:"varying",texture2D:"texture2D",output:"gl_FragColor",outputDeclaration:""},X$={version:"#version 300 es",attribute:"in",varyingVertex:"out",varyingFrag:"in",texture2D:"texture",output:"outputColor",outputDeclaration:"out vec4 outputColor;"}}),Ae=N(()=>{});async function vl(e,t=a=>0,n){return new Promise((a,u)=>{let d=0,l=()=>{if(e()){a();return}d++;let p=t(d);setTimeout(l,p)};l()})}function Mi(e){return eo(typeof e<"u"&&e.length!==0,()=>"empty string found for sampler name"),"get"+e.charAt(0).toUpperCase()+e.slice(1)}function lm(e){return eo(typeof e<"u"&&e.length!==0,()=>"empty string found for sampler name"),"get"+e.charAt(0).toUpperCase()+e.slice(1)+"AtOutCoords"}function to(e,t){let n=JSON.parse(JSON.stringify(e));return n=t,n}function no(e,t){return t.map(n=>e[n]).join(", ")}function bt(e){if(e<=1)return"int";if(e===2)return"ivec2";if(e===3)return"ivec3";if(e===4)return"ivec4";if(e===5)return"ivec5";if(e===6)return"ivec6";throw Error(`GPU for rank ${e} is not yet supported`)}function Kt(e=6){return["x","y","z","w","u","v"].slice(0,e)}var zn=N(()=>{Le()});function Z$(e,t){return Kt(t).map(n=>`${e}.${n}`)}function ro(e,t){return t===1?[e]:Z$(e,t)}function Mn(){return`
    float getChannel(vec4 frag, int dim) {
      int modCoord = imod(dim, 2);
      return modCoord == 0 ? frag.r : frag.g;
    }

    float getChannel(vec4 frag, vec2 innerDims) {
      vec2 modCoord = mod(innerDims, 2.);
      return modCoord.x == 0. ?
        (modCoord.y == 0. ? frag.r : frag.g) :
        (modCoord.y == 0. ? frag.b : frag.a);
    }
  `}var zr=N(()=>{zn()});function Q$(e,t,n){if(e===0)return"false";if(e===1)return`rc > ${t[0]}`;let a="";for(let u=e-2;u<e;u++)a+=`${n[u]} >= ${t[u-e+2]}`,u<e-1&&(a+="||");return a}function Y$(e,t){let n=e.length;if(n===0)return"getA(), 0, 0, 0";if(n===1)return`getA(rc),
            rc + 1 >= ${e[0]} ? 0. : getA(rc + 1),
            0, 0`;let a="r, c",u="r, cp1",d="rp1, c",l="rp1, cp1",p="";if(n>2)for(let o=0;o<n-2;++o)p=p+`${t[o]},`;return`getA(${p}${a}),
          rEdge ? 0. : getA(${p}${d}),
          cEdge ? 0. : getA(${p}${u}),
          rEdge || cEdge ? 0. : getA(${p}${l})`}function eA(e,t,n,a){return e===0||e===1?"":`
    int r = ${t[e-2]};
    int c = ${t[e-1]};
    int rp1 = ${t[e-2]} + 1;
    int cp1 = ${t[e-1]} + 1;
    bool rEdge = rp1 >= ${a};
    bool cEdge = cp1 >= ${n};
    `}var cm,J$,dm,pm=N(()=>{Ze(),Ae(),zn(),zr(),cm={name:"pack",inputNames:["A"],inputTypes:[1]},J$=(e,t)=>{let n=se(e.session.backend.glContext.version),a=t.dims,u=a.length,d=t.dims.length,l=bt(d),p=ro("rc",d),o=eA(d,p,a[a.length-2],a[a.length-1]),r;u===0?r=[1,1]:u===1?r=[a[0],1]:r=[a[d-1],a[d-2]];let i=Q$(d,r,p),s=Y$(a,p),c=`
        void main() {
          ${l} rc = getOutputCoords();

          if(${i}) {
            ${n.output} = vec4(0);
          } else {
            ${o}

            ${n.output} = vec4(${s});
          }
        }
      `;return{...cm,hasMain:!0,output:{dims:t.dims,type:t.type,textureType:2},shaderSource:c}},dm=(e,t)=>({...cm,get:()=>J$(e,t)})});function xl(e){if(e.length===0)return[1,1,1];let t=1;for(let n=0;n<e.length-2;++n)t*=e[n];return[t,e.length>1?e[e.length-2]:1,e[e.length-1]]}function hm(e,t){let n=!1;return e.length===0||t.length===0?n=!0:e.length<2||t.length<2?n=e[e.length-1]===t[t.length-1]:n=e[e.length-1]===t[t.length-1]&&e[e.length-2]===t[t.length-2],n}function rA(e){let t=te.computeStrides(e),n=["b","r","c"],a="index";return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t.map((u,d)=>{let l=`int ${n[d]} = ${a} / ${u}`,p=d===t.length-1?`int ${n[d+1]} = ${a} - ${n[d]} * ${u}`:`index -= ${n[d]} * ${u}`;return`${l}; ${p};`}).join("")}
      return ivec3(b, r, c);
    }
  `}function oA(e){let t=te.computeStrides(e);return`
  int getFlattenedIndex(ivec3 coords) {
    // reverse y, z order
    return coords.x * ${t[0]} + coords.z * ${t[1]} + coords.y;
  }
`}var tA,nA,fm,mm=N(()=>{Le(),Ze(),Ae(),zr(),tA=e=>({name:"Reshape (packed)",inputTypes:[2],inputNames:["A"],cacheHint:`${e}`}),nA=(e,t,n,a)=>{let u=t.dims,d=a,l="";for(let r=0;r<4;r++){let i="";switch(r){case 0:i="outputCoords = rc;";break;case 1:i="outputCoords = ivec3(rc.x, rc.y+1, rc.z);";break;case 2:i="outputCoords = ivec3(rc.x, rc.y, rc.z+1);";break;case 3:i="outputCoords = ivec3(rc.x, rc.y+1, rc.z+1);";break;default:throw new Error}l+=`
        ${i}
        ${r>0?"if(outputCoords.y < rows && outputCoords.z < cols){":""}
          int flattenedIndex = getFlattenedIndex(outputCoords);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flattenedIndex);
          vec2 innerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${r}] = getChannel(getA(inputRC.x, inputRC.y, inputRC.z), innerDims);

        ${r>0?"}":""}
      `}let p=se(e.session.backend.glContext.version),o=`
      ${rA(u)}
      ${oA(d)}
      ${Mn()}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.0);

        ivec3 outputCoords;
        int rows = ${d[2]};
        int cols = ${d[1]};

        ${l}
        ${p.output} = result;
      }
    `;return{...n,output:{dims:d,type:t.type,textureType:2},shaderSource:o,hasMain:!0}},fm=(e,t,n)=>{let a=tA(n);return{...a,get:()=>nA(e,t,a,n)}}}),Tl,gm=N(()=>{Ze(),Ae(),Tl=(e,t)=>{let n=t.shape,a=se(e.session.backend.glContext.version),u=`
    const float FLOAT_MAX = 1.70141184e38;
    const float FLOAT_MIN = 1.17549435e-38;

    bool isNaN(float val) {
      return (val < 1.0 || 0.0 < val || val == 0.0) ? false : true;
    }

    highp vec4 encodeAsUint8(highp float v) {
      if (isNaN(v)) {
        return vec4(255, 255, 255, 255);
      }

      highp float av = abs(v);

      if(av < FLOAT_MIN) {
        return vec4(0.0, 0.0, 0.0, 0.0);
      } else if(v > FLOAT_MAX) {
        return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
      } else if(v < -FLOAT_MAX) {
        return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
      }

      highp vec4 c = vec4(0,0,0,0);

      highp float e = floor(log2(av));
      highp float m = exp2(fract(log2(av))) - 1.0;

      c[2] = floor(128.0 * m);
      m -= c[2] / 128.0;
      c[1] = floor(32768.0 * m);
      m -= c[1] / 32768.0;
      c[0] = floor(8388608.0 * m);

      highp float ebias = e + 127.0;
      c[3] = floor(ebias / 2.0);
      ebias -= c[3] * 2.0;
      c[2] += floor(ebias) * 128.0;

      c[3] += 128.0 * step(0.0, -v);

      return c / 255.0;
    }

    void main() {
      float value = ${a.texture2D}(X,TexCoords).r;
      ${a.output} = encodeAsUint8(value);
    }`,d={name:"Uint8Encode",inputTypes:[0],inputNames:["X"],output:{dims:n,type:t.tensor.type,textureType:3},shaderSource:u,hasMain:!0};return e.executeProgram(d,[t.tensor])}});function aA(e,t){if(e===1)return"rc";let n="";for(let a=0;a<e;a++)n+=t[a],a<e-1&&(n+=",");return n}var bm,iA,ym,_m=N(()=>{Ze(),Ae(),zn(),zr(),bm={name:"unpack",inputNames:["A"],inputTypes:[2]},iA=(e,t)=>{let n=t.dims.length,a=ro("rc",n),u=a.slice(-2),d=bt(n),l=Mn(),p=t.dims.length===0?"":aA(n,a),o=n<=1?"rc":`vec2(${u.join(",")})`,r=se(e.session.backend.glContext.version),i=`
    ${l}
    void main() {
      ${d} rc = getOutputCoords();

       // Sample the texture with the coords to get the rgba channel value.
       vec4 packedInput = getA(${p});

       ${r.output} = vec4(getChannel(packedInput, ${o}), 0, 0, 0);
     }
   `;return{...bm,hasMain:!0,output:{dims:t.dims,type:t.type,textureType:0},shaderSource:i}},ym=(e,t)=>({...bm,get:()=>iA(e,t)})}),Bi,Co,Fi,Do=N(()=>{Ct(),Bi=class{constructor(e,t=1){if(t===1)this.internalFormat=e.R32F,this.format=e.RED,this.textureType=e.FLOAT,this.channelSize=t;else if(t===4)this.internalFormat=e.RGBA32F,this.format=e.RGBA,this.textureType=e.FLOAT,this.channelSize=t;else throw new Error(`Invalid number of channels: ${t}`)}encode(e,t){let n,a;return e.constructor!==Float32Array&&(ze.warning("Encoder","data was not of type Float32; creating new Float32Array"),a=new Float32Array(e)),t*this.channelSize>e.length?(ze.warning("Encoder","Source data too small. Allocating larger array"),a=e,n=this.allocate(t*this.channelSize),a.forEach((u,d)=>n[d]=u)):(a=e,n=a),n}allocate(e){return new Float32Array(e*4)}decode(e,t){return this.channelSize===1?e.filter((n,a)=>a%4===0).subarray(0,t):e.subarray(0,t)}},Co=class{constructor(e,t=1,n){if(t!==1&&t!==4)throw new Error(`Invalid number of channels: ${t}`);this.internalFormat=e.RGBA,this.format=e.RGBA,this.channelSize=t,this.textureType=n||e.FLOAT}encode(e,t){let n=e;return this.channelSize===1&&(ze.verbose("Encoder","Exploding into a larger array"),n=this.allocate(t),e.forEach((a,u)=>n[u*4]=a)),n}allocate(e){return new Float32Array(e*4)}decode(e,t){return this.channelSize===1?e.filter((n,a)=>a%4===0).subarray(0,t):e.subarray(0,t)}},Fi=class{constructor(e,t=1){if(this.channelSize=4,t===1)this.internalFormat=e.ALPHA,this.format=e.ALPHA,this.textureType=e.UNSIGNED_BYTE,this.channelSize=t;else if(t===4)this.internalFormat=e.RGBA,this.format=e.RGBA,this.textureType=e.UNSIGNED_BYTE,this.channelSize=t;else throw new Error(`Invalid number of channels: ${t}`)}encode(e,t){return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}allocate(e){return new Uint8Array(e*this.channelSize)}decode(e,t){if(e instanceof Uint8Array)return e.subarray(0,t);throw new Error(`Invalid array type: ${e.constructor}`)}}}),ko,wm,Il,vm=N(()=>{Le(),Ae(),ko=(e,t,n)=>{let a=n===0||n===1?1:4,u=n===2,d=n===1||n===2,l=n===4?t.length-1:void 0,p=n===4?t.map((o,r)=>r===t.length-1?o*4:o):void 0;return Il(e,t,a,p,{isPacked:u,reverseWH:d,breakAxis:l})},wm=(e,t,n)=>{let a=ko(e,t,n);return[a.width,a.height]},Il=(e,t,n=1,a,u)=>{let d=!!(u&&u.isPacked),[l,p]=e.computeTextureWH(d&&a||t,u),o=t.length,r=t.slice(0);if(o===0&&(r=[1]),n===1)a=t;else if(d){if(n!==4)throw new Error("a packed texture must be 4-channel");a=t,o>0&&(r[o-1]=Math.ceil(r[o-1]/2)),o>1&&(r[o-2]=Math.ceil(r[o-2]/2))}else if(!a)throw new Error("Unpacked shape is needed when using channels > 1");return{width:l,height:p,channels:n,isPacked:d,shape:r,strides:te.computeStrides(r),unpackedShape:a,reversedWH:u&&u.reverseWH}}}),uA,Vi,Tm=N(()=>{Ct(),Rr(),Le(),pm(),mm(),gm(),_m(),Do(),vm(),Ae(),uA=(e,t)=>{let n=t.map(u=>`${u.unpackedShape.join(",")};${u.width}x${u.height}`).join("_"),a=e.name;return e.cacheHint&&(a+="["+e.cacheHint+"]"),a+=":"+n,a},Vi=class{constructor(e){this.session=e,this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map}calculateTextureWidthAndHeight(e,t){return wm(this.session.layoutStrategy,e,t)}executeProgram(e,t){if(t.length<e.inputNames.length)throw new Error(`Input size mustn't be less than ${e.inputNames.length}.`);if(e.inputNames.length!==e.inputTypes.length)throw new Error("input names size does not match input types");let n=[];for(let o=0;o<e.inputNames.length;++o)n[o]=this.getOrCreateTextureData(t[o],e.inputTypes[o]);let a=uA(e,n),u=this.session.programManager.getArtifact(a),d=u?u.programInfo:typeof e.get=="function"?e.get():e,l=ko(this.session.layoutStrategy,d.output.dims,d.output.textureType),p=this.createTextureData(l,d.output.type);return u||(u=this.session.programManager.build(d,n,p),this.session.programManager.setArtifact(a,u)),this.runProgram(u,n,p),p}run(e,t){return this.executeProgram(e,t).tensor}runProgram(e,t,n){for(let a=0;a<t.length;++a)if(!!t[a].isPacked!=(e.programInfo.inputTypes[a]===2))throw new Error(`input[${a}] property packed inconsistent`);if(!!n.isPacked!=(e.programInfo.output.textureType===2))throw new Error("output property packed inconsistent");this.session.programManager.run(e,t,n)}getOrCreateTextureData(e,t){let n=this.getTextureData(e.dataId,t===2);if(!n&&(n=this.getTextureData(e.dataId,t!==2),n))return t===2?this.pack(n):this.unpack(n);if(!n){let a=ko(this.session.layoutStrategy,e.dims,t);if(t===4){let u=e.dims;if(u.length===4){let d=[u[0],Math.ceil(u[1]*u[2]*u[3]/4)],l=ko(this.session.layoutStrategy,d,t),p=e.numberData;if(u[1]*u[2]*u[3]%4!==0){let o=u[0],r=u[1]*u[2]*u[3],i=Math.ceil(r*1/4)*4,s=o*i;p=new Float32Array(s);for(let c=0;c<o;++c){let h=c*r,m=c*i+c%1*r;p.set(e.numberData.subarray(h,h+r),m)}}return this.createTextureData(l,e.type,p,e,1)}}if(t===2){let u=Il(this.session.layoutStrategy,e.dims,1,[],{reverseWH:!0}),d=this.createTextureData(u,e.type,e.numberData,e,1);n=this.pack(d)}else n=this.createTextureData(a,e.type,e.numberData,e,1)}return n}createTextureDataFromLayoutBindTensor(e,t,n,a){return this.createTextureData(e,t,n,a,1)}createTextureData(e,t,n,a,u){ze.verbose("InferenceHandler",`Creating TextureData: layout:[${JSON.stringify(e)}]`);let d=this.session.textureManager.createTextureFromLayout(t,e,n,u);return this.createTextureDataFromTexture(e,t,d,a)}reshapeUnpacked(e,t){let n=this.getOrCreateTextureData(e,0),a={channels:n.channels,height:n.height,width:n.width,shape:t.length!==0?t:[1],strides:te.computeStrides(t),unpackedShape:t};return this.createTextureDataFromTexture(a,e.type,n.texture).tensor}reshapePacked(e,t){let n=this.getOrCreateTextureData(e,2);if(hm(e.dims,t)){let p={channels:n.channels,height:n.height,width:n.width,shape:t.length!==0?t:[1],strides:te.computeStrides(t),unpackedShape:t,isPacked:!0};return this.createTextureDataFromTexture(p,e.type,n.texture).tensor}let a=xl(e.dims),u=xl(t),d=this.reshapePacked(e,a),l=this.run(fm(this,d,u),[d]);return this.reshapePacked(l,t)}cast(e,t){let n=this.getOrCreateTextureData(e,0);return this.createTextureDataFromTexture(n,t,n.texture).tensor}createTextureDataFromTexture(e,t,n,a,u){let d={...e,tensor:a||new rt(e.unpackedShape,t,l=>this.readTexture(d),async l=>this.readTextureAsync(d),void 0,u),texture:n};return this.setTextureData(d.tensor.dataId,d,e.isPacked),d}getTextureData(e,t=!1){return this.session.isInitializer(e)?this.session.getTextureData(e,t):t?this.packedTextureDataCache.get(e):this.unpackedTextureDataCache.get(e)}setTextureData(e,t,n=!1){this.session.isInitializer(e)?this.session.setTextureData(e,t,n):(n?this.packedTextureDataCache:this.unpackedTextureDataCache).set(e,t)}isTextureLayoutCached(e,t=!1){return!!this.getTextureData(e.dataId,t)}dispose(){this.session.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(e=>this.session.textureManager.releaseTexture(e)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(e=>this.session.textureManager.releaseTexture(e)),this.unpackedTextureDataCache=new Map}readTexture(e){return e.isPacked?this.readTexture(this.unpack(e)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTexture(e,e.tensor.type,e.channels):this.session.textureManager.readUint8TextureAsFloat(Tl(this,e))}async readTextureAsync(e){return e.isPacked?this.readTextureAsync(this.unpack(e)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTextureAsync(e,e.tensor.type,e.channels):this.session.textureManager.readUint8TextureAsFloat(Tl(this,e))}pack(e){return this.executeProgram(dm(this,e.tensor),[e.tensor])}unpack(e){return this.executeProgram(ym(this,e.tensor),[e.tensor])}}}),Sl,ve,lt=N(()=>{Sl=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ve=e=>new Sl(e)}),Im,Sm,$m,lA,cA,Am=N(()=>{lt(),Ze(),Ae(),Im={name:"BatchNormalization",inputNames:["A","Scale","B","Mean","Variance"],inputTypes:[0,0,0,0,0]},Sm=(e,t,n)=>(cA(t),[e.run({...Im,cacheHint:n.cacheKey,get:()=>lA(e,t,n)},t)]),$m=e=>{let t=e.attributes.getFloat("epsilon",1e-5),n=e.attributes.getFloat("momentum",.9),a=e.attributes.getInt("spatial",1);return ve({epsilon:t,momentum:n,spatial:a})},lA=(e,t,n)=>{let a=se(e.session.backend.glContext.version),u=t[0].dims.length,[d,l]=e.calculateTextureWidthAndHeight(t[1].dims,0),p=`
  float process(int[${u}] indices) {
    vec2 position = offsetToCoords(indices[1], ${d}, ${l});
    float scale = getColorAsFloat(${a.texture2D}(Scale, position));
    float mean = getColorAsFloat(${a.texture2D}(Mean, position));
    float variance = getColorAsFloat(${a.texture2D}(Variance, position));
    float b = getColorAsFloat(${a.texture2D}(B, position));

    return scale * ( (_A(indices) - mean) / sqrt(variance + float(${n.epsilon})) ) + b;
  }`;return{...Im,output:{dims:t[0].dims,type:t[0].type,textureType:0},shaderSource:p}},cA=e=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs.");let t=e[0],n=e[1],a=e[2],u=e[3],d=e[4];if(t.dims.length<3||n.dims.length!==1||a.dims.length!==1||u.dims.length!==1||d.dims.length!==1)throw new Error("invalid input shape.");if(n.dims[0]!==t.dims[1]||a.dims[0]!==t.dims[1]||u.dims[0]!==t.dims[1]||d.dims[0]!==t.dims[1])throw new Error("invalid input shape.");if(t.type!=="float32"&&t.type!=="float64"||n.type!=="float32"&&n.type!=="float64"||a.type!=="float32"&&a.type!=="float64"||u.type!=="float32"&&u.type!=="float64"||d.type!=="float32"&&d.type!=="float64")throw new Error("invalid input tensor types.")}}),Gi,zt,K,No,Ui,Qn=N(()=>{Gi=class{constructor(e,t,n,a){this.glContext=e,this.programInfo=t,this.inputTextureLayouts=n,this.outputTextureLayout=a}},zt=class{constructor(e){this.context=e}},K=class{constructor(e,t){this.routineBody=e,this.dependencies=t}},No=class{constructor(e,t,n){this.name=e,n?this.dependencies=n:this.dependencies=[],t&&(this.routineBody=t)}addDependency(e){e&&this.dependencies.push(e)}},Ui=class{static returnOrderedNodes(e){if(!e||e.length===0)return[];if(e.length===1)return e;let t=new Set,n=new Set,a=new Array;return this.createOrderedNodes(e,t,n,a),a}static createOrderedNodes(e,t,n,a){for(let u=0;u<e.length;++u)this.dfsTraverse(e[u],t,n,a)}static dfsTraverse(e,t,n,a){if(!e||n.has(e.name))return;if(t.has(e.name))throw new Error("Cyclic dependency detected. Can't topologically sort routines needed for shader.");t.add(e.name);let u=e.dependencies;if(u&&u.length>0)for(let d=0;d<u.length;++d)this.dfsTraverse(u[d],t,n,a);a.push(e),n.add(e.name),t.delete(e.name)}}});function pA(){let e="add_";return{body:`
  float ${e}(float a, float b) {
    return a + b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 + v2;
  }
  `,name:e,type:0}}function fA(){let e="div_";return{body:`
  float ${e}(float a, float b) {
    return a / b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 / v2;
  }
  `,name:e,type:0}}function hA(){let e="mul_";return{body:`
  float ${e}(float a, float b) {
    return a * b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 * v2;
  }
  `,name:e,type:0}}function mA(){let e="sub_";return{body:`
  float ${e}(float a, float b) {
    return a - b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 - v2;
  }
  `,name:e,type:0}}function gA(){let e="equal_";return{body:`
  float ${e}(float a, float b) {
    return float(a == b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4(equal(v1, v2));
  }
  `,name:e,type:0}}function bA(){let e="greater_";return{body:`
  float ${e}(float a, float b) {
    return float(a > b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4( v1.r > v2.r ,
      v1.g > v2.g,
      v1.b > v2.b,
      v1.a > v2.a );
  }
  `,name:e,type:0}}function yA(){let e="less_";return{body:`
  float ${e}(float a, float b) {
    return float(a < b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4( v1.r < v2.r ,
                v1.g < v2.g,
                v1.b < v2.b,
                v1.a < v2.a );
  }
  `,name:e,type:0}}function _A(){let e="and_";return{body:`
  float ${e}(float a, float b) {
    return float( bool(a) && bool(b) );
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r && b2.r ,
                b1.g && b2.g,
                b1.b && b2.b,
                b1.a && b2.a );
  }
  `,name:e,type:0}}function wA(){let e="or_";return{body:`
  float ${e}(float a, float b) {
    return float( bool(a) || bool(b) );
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r || b2.r ,
                b1.g || b2.g,
                b1.b || b2.b,
                b1.a || b2.a );
  }
  `,name:e,type:0}}function vA(){let e="xor_";return{body:`
  float ${e}(float a, float b) {
    return float( bool(a) ^^ bool(b) );
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r ^^ b2.r ,
                b1.g ^^ b2.g,
                b1.b ^^ b2.b,
                b1.a ^^ b2.a );
  }
  `,name:e,type:0}}function xA(){return IA("pow")}function TA(){let e="prelu_";return{body:`
  float ${e}(float a, float b) {
    return a < 0.0 ? a * b: a;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4(
      v1.r < 0.0 ? v1.r * v2.r: v1.r,
      v1.g < 0.0 ? v1.g * v2.g: v1.g,
      v1.b < 0.0 ? v1.b * v2.b: v1.b,
      v1.a < 0.0 ? v1.a * v2.a: v1.a
      );
  }
  `,name:e,type:0}}function IA(e){let t=`${e}_`;return{body:`
  float ${t}(float a, float b) {
    return ${e}(a, b);
  }
  vec4 ${t}(vec4 v1, vec4 v2) {
    return ${e}(v1, v2);
  }
  `,name:t,type:0}}var Mt,SA,Om,Pm,Em,Cm,Dm,km,Nm,Lm,Rm,zm,Mm,Bm,Fm=N(()=>{Le(),Qn(),Ze(),Ae(),Mt=(e,t,n,a=t[0].type,u)=>{let d=e.session.pack?2:0;return{name:n.name,inputNames:["A","B"],inputTypes:[d,d],cacheHint:u,get:()=>SA(e,t,n,a)}},SA=(e,t,n,a=t[0].type)=>{let u=e.session.pack?2:0,d=!te.areEqual(t[0].dims,t[1].dims),l=t[0].dims,p=e.session.pack;if(d){let i=gt.calcShape(t[0].dims,t[1].dims,!1);if(!i)throw new Error("Can't perform binary op on the given tensors");l=i;let s=l.length,c=t[0].dims.length!==0?t[0].dims.length:1,h=t[1].dims.length!==0?t[1].dims.length:1,m=t[0].dims.length!==0?"bcastIndices_A(indices, aindices);":"aindices[0] = 0;",b=t[1].dims.length!==0?"bcastIndices_B(indices, bindices);":"bindices[0] = 0;",w=se(e.session.backend.glContext.version),x=p?`
      ${n.body}
      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();
        vec4 result = ${n.name}(a, b);
        ${w.output} = result;
      }`:`
      ${n.body}
      float process(int indices[${s}]) {
        int aindices[${c}];
        int bindices[${h}];
        ${m}
        ${b}
        return ${n.name}(_A(aindices), _B(bindices));
      }`;return{name:n.name,inputNames:["A","B"],inputTypes:[u,u],output:{dims:l,type:a,textureType:u},shaderSource:x,hasMain:p}}let o=se(e.session.backend.glContext.version),r=`
    ${n.body}
    void main() {
      vec4 v1 = ${o.texture2D}(A, TexCoords);
      vec4 v2 = ${o.texture2D}(B, TexCoords);
      vec4 result = ${n.name}(v1, v2);
      ${o.output} = result;
    }
    `;return{name:n.name,inputNames:["A","B"],inputTypes:[u,u],output:{dims:t[0].dims,type:a,textureType:u},shaderSource:r,hasMain:!0}},Om=(e,t)=>[e.run(Mt(e,t,pA()),t)],Pm=(e,t)=>[e.run(Mt(e,t,_A(),"bool"),t)],Em=(e,t)=>[e.run(Mt(e,t,fA()),t)],Cm=(e,t)=>[e.run(Mt(e,t,gA(),"bool"),t)],Dm=(e,t)=>[e.run(Mt(e,t,bA(),"bool"),t)],km=(e,t)=>[e.run(Mt(e,t,yA(),"bool"),t)],Nm=(e,t)=>[e.run(Mt(e,t,hA()),t)],Lm=(e,t)=>[e.run(Mt(e,t,wA(),"bool"),t)],Rm=(e,t)=>[e.run(Mt(e,t,xA()),t)],zm=(e,t)=>[e.run(Mt(e,t,TA()),t)],Mm=(e,t)=>[e.run(Mt(e,t,mA()),t)],Bm=(e,t)=>[e.run(Mt(e,t,vA(),"bool"),t)]}),Vm,Gm,AA,Um=N(()=>{Le(),Vm=(e,t,n)=>(AA(t),[e.cast(t[0],n)]),Gm=e=>ft.tensorDataTypeFromProto(e.attributes.getInt("to")),AA=e=>{if(!e||e.length!==1)throw new Error("Cast requires 1 input.");if(e[0].type==="string")throw new Error("Invalid input type.")}}),OA,PA,Wm,Wi,Hm=N(()=>{Ze(),Ae(),zn(),zr(),OA=(e,t)=>({name:"Concat (packed)",inputNames:Array.from({length:e},(n,a)=>`X${a}`),inputTypes:Array(e).fill(2),cacheHint:t}),PA=(e,t,n,a)=>{let u=n[0].dims.slice();if(a>=u.length||a<-1*u.length)throw new Error("axis specified for concat doesn't match input dimensionality");a<0&&(a=u.length+a);let d=u.slice(0);for(let O=1;O<n.length;O++){let A=n[O].dims.slice();for(let k=0;k<u.length;k++)if(k===a)d[a]+=A[k];else if(u[k]!==A[k])throw new Error("non concat dimensions must match")}let l=d.length,p=ro("coords",l),o=bt(l),r=Mn(),i=n.map(O=>O.dims),s=Kt(l),c=new Array(i.length-1);c[0]=i[0][a];for(let O=1;O<c.length;O++)c[O]=c[O-1]+i[O][a];let h=s[a],m=s.slice(-2),b=s.join(),w=`if (${h} < ${c[0]}) {
        return getChannel(
            getX0(${b}), vec2(${m.join()}));
        }`;for(let O=1;O<c.length;O++){let A=c[O-1];w+=`
            if (${h} < ${c[O]}  && ${h} >= ${c[O-1]}) {
              return getChannel(
                getX${O}(${Wi(s,h,A)}),
                vec2(${Wi(m,h,A)}));
            }`}let x=c.length,_=c[c.length-1];w+=`
            return getChannel(
              getX${x}(${Wi(s,h,_)}),
              vec2(${Wi(m,h,_)}));`;let S=se(e.session.backend.glContext.version),I=`
          ${r}
          float getValue(${s.map(O=>"int "+O)}) {
            ${w}
          }

          void main() {
            ${o} coords = getOutputCoords();
            int lastDim = coords.${s[l-1]};
            coords.${s[l-1]} = coords.${s[l-2]};
            coords.${s[l-2]} = lastDim;

            vec4 result = vec4(getValue(${p}), 0., 0., 0.);

            ${p[l-1]} = ${p[l-1]} + 1;
            if (${p[l-1]} < ${d[l-1]}) {
              result.g = getValue(${p});
            }

            ${p[l-2]} = ${p[l-2]} + 1;
            if (${p[l-2]} < ${d[l-2]}) {
              result.a = getValue(${p});
            }

            ${p[l-1]} = ${p[l-1]} - 1;
            if (${p[l-2]} < ${d[l-2]} &&
                ${p[l-1]} < ${d[l-1]}) {
              result.b = getValue(${p});
            }
            ${S.output} = result;
          }
        `;return{...t,output:{dims:d,type:n[0].type,textureType:2},shaderSource:I,hasMain:!0}},Wm=(e,t,n)=>{let a=OA(t.length,n.cacheKey);return{...a,get:()=>PA(e,a,t,n.axis)}},Wi=(e,t,n)=>{let a=e.indexOf(t);return e.map((u,d)=>d===a?`${u} - ${n}`:u).join()}}),qm,EA,CA,DA,jm,kA,NA,LA,Km,RA,Xm=N(()=>{lt(),Ae(),Hm(),qm=(e,t,n)=>(RA(t),e.session.pack&&t[0].dims.length>1?[e.run(Wm(e,t,n),t)]:[e.run(DA(e,t,n),t)]),EA=(e,t)=>({name:"Concat",inputNames:Array.from({length:e},(n,a)=>`X${a}`),inputTypes:Array(e).fill(0),cacheHint:t}),CA=(e,t,n,a)=>{let u=n[0].dims.slice();if(a>=u.length||a<-1*u.length)throw new Error("axis specified for concat doesn't match input dimensionality");a<0&&(a=u.length+a);let d=u.slice(0);for(let h=1;h<n.length;h++){let m=n[h].dims.slice();for(let b=0;b<u.length;b++)if(b===a)d[a]+=m[b];else if(u[b]!==m[b])throw new Error("non concat dimensions must match")}let l=d.length,p=new Array(n.length),o=0;for(let h=0;h<p.length;++h)o+=n[h].dims[a],p[h]=o;let r="";n.length<5?r=jm(p):r=kA(p);let i=NA(n.length,l),s=LA(p),c=`
        ${i}
        ${s}
        ${r}
        float process(int indices[${l}]) {
          int textureIndex = getTextureWhereDataResides (indices[${a}]);

          if(textureIndex != 0) {
            indices[${a}] = indices[${a}] - int(getSizeInConcatAxisValueFromIndex(textureIndex-int(1)));
          }

          return fetchDataFromCorrectTexture(textureIndex, indices);
        }`;return{...t,output:{dims:d,type:n[0].type,textureType:0},shaderSource:c}},DA=(e,t,n)=>{let a=EA(t.length,n.cacheKey);return{...a,get:()=>CA(e,a,t,n.axis)}},jm=e=>`int getTextureWhereDataResides(int index) {
      ${e.map((t,n)=>`if(index<${t}) {return ${n};}
`).join("")}
    }`,kA=e=>jm(e),NA=(e,t)=>{let n=[`float fetchDataFromCorrectTexture(int textureIndex, int indices[${t}]) {`];for(let a=0;a<e;++a)a===0?n.push(`	if (textureIndex == ${a}) { return _X${a}(indices); }`):a===e-1?n.push(`	else { return _X${a}(indices); }`):n.push(`	else if (textureIndex == ${a}) { return _X${a}(indices); }`);return n.push("	}"),n.join(`
`)},LA=e=>{let t=["int getSizeInConcatAxisValueFromIndex(int index) {"];for(let n=0;n<e.length;++n)n===0?t.push(`	if (index == ${n}) { return ${e[n]}; }`):n===e.length-1?t.push(`	else { return ${e[n]}; }`):t.push(`	else if (index == ${n}) { return ${e[n]}; }`);return t.push("	}"),t.join(`
`)},Km=e=>ve({axis:e.attributes.getInt("axis")}),RA=e=>{if(!e||e.length<1)throw new Error("too few inputs");let t=e[0].type,n=e[0].dims.length;if(t==="string")throw new Error("string tensor is not supported yet");for(let a of e){if(a.type!==t)throw new Error("input tensors should be one type");if(a.dims.length!==n)throw new Error("input tensors should have the same shape")}}});function zA(){return Bt("abs")}function MA(){return Bt("acos")}function BA(){return Bt("asin")}function FA(){return Bt("atan")}function VA(){return Bt("ceil")}function GA(){return Bt("cos")}function UA(e){let t="elu";return{body:`
  const float alpha = float(${e});

  float ${t}_(float a) {
    return a >= 0.0 ? a: (exp(a) - 1.0) * alpha;
  }
  vec4 ${t}_(vec4 v) {
    return vec4(${t}_(v.x), ${t}_(v.y), ${t}_(v.z), ${t}_(v.w));
  }
  `,name:t,type:0}}function WA(){return Bt("exp")}function HA(){return Bt("floor")}function $l(e,t){let n="clip";return{body:`
  const float min = float(${e});
  const float max = float(${t});

  float ${n}_(float a) {
    return clamp(a, min, max);
  }
  vec4 ${n}_(vec4 v) {
    return clamp(v, min, max);
  }
  `,name:n,type:0}}function qA(){let e="indentity";return{body:`
  float ${e}_(float a) {
    return a;
  }
  vec4 ${e}_(vec4 v) {
    return v;
  }
  `,name:e,type:0}}function jA(e){let t="leakyRelu";return{body:`
  const float alpha = float(${e});

  float ${t}_(float a) {
    return a < 0.0 ? a * alpha : a;
  }
  vec4 ${t}_(vec4 v) {
    return vec4(${t}_(v.x), ${t}_(v.y), ${t}_(v.z), ${t}_(v.w));
  }
  `,name:t,type:0}}function KA(){return Bt("log")}function XA(){let e="neg";return{body:`
  float ${e}_(float a) {
    return -a;
  }
  vec4 ${e}_(vec4 v) {
    return -v;
  }
  `,name:e,type:0}}function ZA(){let e="not";return{body:`
  float ${e}_(float a) {
    return float( ! bool(a) );
  }
  bool ${e}_(bool a) {
    return !a;
  }
  vec4 ${e}_(vec4 v) {
    return vec4(!bool(v.x), !bool(v.y), !bool(v.z), !bool(v.w));
  }
  bvec4 ${e}_(bvec4 v) {
    return bvec4(!v.x, !v.y, !v.z, !v.w);
  }
  `,name:e,type:0}}function JA(){return Bt("sin")}function Al(){let e="relu";return{body:`
  float ${e}_(float a) {
    return max( a, 0.0 );
  }
  vec4 ${e}_(vec4 v) {
    return max( v, 0.0 );
  }
  `,name:e,type:0}}function Ol(){let e="sigmoid";return{body:`
  float ${e}_(float a) {
    return 1.0 / (1.0 + exp(-a));
  }
  vec4 ${e}_(vec4 v) {
    return 1.0 / (1.0 + exp(-v));
  }
  `,name:e,type:0}}function QA(){return Bt("sqrt")}function YA(){return Bt("tan")}function eO(){let e="tanh";return{body:`
  float ${e}_(float a) {
    a = clamp(a, -10., 10.);
    a = exp(2.*a);
    return (a - 1.) / (a + 1.);
  }
  vec4 ${e}_(vec4 v) {
    v = clamp(v, -10., 10.);
    v = exp(2.*v);
    return (v - 1.) / (v + 1.);
  }
  `,name:e,type:0}}function Bt(e){return{body:`
  float ${e}_(float a) {
    return ${e}(a);
  }
  vec4 ${e}_(vec4 v) {
    return ${e}(v);
  }
  `,name:e,type:0}}var tO,nt,Zm,Jm,Qm,Ym,Pl,eg,tg,nO,ng,rg,og,ig,ag,sg,El,ug,lg,cg,dg,pg,fg,hg,mg,gg,bg,yg,Cl=N(()=>{lt(),Le(),Qn(),Ze(),Ae(),tO=(e,t,n,a)=>{let u=e.session.pack?2:0,d=se(e.session.backend.glContext.version);return{...t,output:{dims:n.dims,type:n.type,textureType:u},shaderSource:`
     ${a.body}
     void main() {
       vec4 v = ${d.texture2D}(A, TexCoords);
       v = ${a.name}_(v);
       ${d.output} = v;
     }
     `,hasMain:!0}},nt=(e,t,n,a)=>{let u=e.session.pack?2:0,d={name:n.name,inputTypes:[u],inputNames:["A"],cacheHint:a};return{...d,get:()=>tO(e,d,t,n)}},Zm=(e,t)=>[e.run(nt(e,t[0],zA()),t)],Jm=(e,t)=>[e.run(nt(e,t[0],MA()),t)],Qm=(e,t)=>[e.run(nt(e,t[0],BA()),t)],Ym=(e,t)=>[e.run(nt(e,t[0],FA()),t)],Pl=(e,t,n)=>[e.run(nt(e,t[0],$l(n.min,n.max),n.cacheKey),t)],eg=e=>ve({min:e.attributes.getFloat("min",Nr),max:e.attributes.getFloat("max",Lr)}),tg=(e,t)=>{let n=nO(e,t);return Pl(e,[t[0]],n)},nO=(e,t)=>{if(t.length>=3&&(!e.session.isInitializer(t[1].dataId)||!e.session.isInitializer(t[2].dataId)))throw new Error("dynamic clip attributes are not allowed");let n=t.length>=3?t[1].numberData[0]:Nr,a=t.length>=3?t[2].numberData[0]:Lr;return ve({min:n,max:a})},ng=(e,t)=>[e.run(nt(e,t[0],VA()),t)],rg=(e,t)=>[e.run(nt(e,t[0],GA()),t)],og=(e,t,n)=>[e.run(nt(e,t[0],UA(n.alpha),n.cacheKey),t)],ig=e=>ve({alpha:e.attributes.getFloat("alpha",1)}),ag=(e,t)=>[e.run(nt(e,t[0],WA()),t)],sg=(e,t)=>[e.run(nt(e,t[0],HA()),t)],El=(e,t)=>[e.run(nt(e,t[0],qA()),t)],ug=(e,t,n)=>[e.run(nt(e,t[0],jA(n.alpha),n.cacheKey),t)],lg=e=>ve({alpha:e.attributes.getFloat("alpha",.01)}),cg=(e,t)=>[e.run(nt(e,t[0],KA()),t)],dg=(e,t)=>[e.run(nt(e,t[0],XA()),t)],pg=(e,t)=>[e.run(nt(e,t[0],ZA()),t)],fg=(e,t)=>[e.run(nt(e,t[0],Al()),t)],hg=(e,t)=>[e.run(nt(e,t[0],Ol()),t)],mg=(e,t)=>[e.run(nt(e,t[0],JA()),t)],gg=(e,t)=>[e.run(nt(e,t[0],QA()),t)],bg=(e,t)=>[e.run(nt(e,t[0],YA()),t)],yg=(e,t)=>[e.run(nt(e,t[0],eO()),t)]});function Bn(e){let t;switch(e.activation){case"Relu":t=Al();break;case"Sigmoid":t=Ol();break;case"Clip":t=$l(e.clipMin,e.clipMax);break;default:return{activationFunction:"",applyActivation:""}}let n=t.name,a=t.body,u=`value = ${n}_(value);`;return{activationFunction:a,applyActivation:u}}var oo,Mr=N(()=>{Le(),Cl(),oo=e=>{let t=e.getString("activation","");if(t==="Clip"){let[n,a]=e.getFloats("activation_params",[Nr,Lr]);return{activation:t,clipMax:a,clipMin:n,activationCacheKey:`${t}:${n},${a}`}}return{activation:t,activationCacheKey:t}}}),oO,iO,_g,wg=N(()=>{Ct(),Ze(),Ae(),Hi(),Mr(),oO=(e,t)=>({name:"GroupedConv",inputNames:e?["X","W","Bias"]:["X","W"],inputTypes:e?[0,0,0]:[0,0],cacheHint:t}),iO=(e,t,n,a)=>{let u=t.length>2?"value += getBias(output_channel);":"",d=t[0].dims.slice(),l=t[1].dims.slice(),p=l[0]/a.group;ze.verbose("GroupedConv",`autpPad:${a.autoPad}, dilations:${a.dilations}, group:${a.group}, kernelShape:${a.kernelShape}, pads:${a.pads}, strides:${a.strides}`);let o=io(d,l,a.dilations,a.pads,a.strides),r=se(e.session.backend.glContext.version),{activationFunction:i,applyActivation:s}=Bn(a),c=`
  const ivec2 strides = ivec2(${a.strides[0]}, ${a.strides[1]});
  const ivec2 pads = ivec2(${a.pads[0]}, ${a.pads[1]});
  ${i}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;
    ivec2 xRCCorner = coords.zw * strides - pads;
    int group_id = output_channel / ${p};

    float value = 0.0;
    for (int wInChannel = 0; wInChannel < ${l[1]}; wInChannel++) {
      int input_channel = group_id * ${l[1]} + wInChannel;
      for (int wHeight = 0; wHeight < ${l[2]}; wHeight++) {
        int xHeight = xRCCorner.x + wHeight * ${a.dilations[0]};

        if (xHeight < 0 || xHeight >= ${d[2]}) {
          continue;
        }

        for (int wWidth = 0; wWidth < ${l[3]}; wWidth++) {
          int xWidth = xRCCorner.y + wWidth * ${a.dilations[1]};
          if (xWidth < 0 || xWidth >= ${d[3]}) {
            continue;
          }

          float xVal = getX(batch, input_channel, xWidth, xHeight);
          float wVal = getW(output_channel, wInChannel, wWidth, wHeight);
          value += xVal*wVal;
        }
      }
    }
    ${u}
    ${s}
    ${r.output} = vec4(value, .0, .0, .0);
  }
`;return{...n,output:{dims:o,type:t[0].type,textureType:0},shaderSource:c,hasMain:!0}},_g=(e,t,n)=>{let a=oO(t.length>2,n.cacheKey);return{...a,get:()=>iO(e,t,a,n)}}}),aO,sO,vg,xg=N(()=>{Ze(),Ae(),zr(),aO=e=>({name:"Im2Col (packed)",inputNames:["A"],inputTypes:[2],cacheHint:e}),sO=(e,t,n,a,u,d)=>{let l=n.dims,p=a.dims,o=2,r=3,i=u.length,s=[p[1]*p[2]*p[3],u[2]*u[3]],c=p[2]*p[3],h=Mn(),m=se(e.session.backend.glContext.version),b="";for(let x=0;x<=1;x++)for(let _=0;_<=1;_++)b+=`
            blockIndex = rc.x + ${_};
            pos = rc.y + ${x};

            if(blockIndex < ${s[1]} && pos < ${s[0]}) {
              offsetY = int(blockIndex / (${u[i-1]})) * ${d.strides[0]} -
                ${d.pads[0]};
              d0 = offsetY + ${d.dilations[0]} * (imod(pos, ${c}) / ${p[2]});

              if(d0 < ${l[o]} && d0 >= 0) {
                offsetX = imod(blockIndex, ${u[i-1]}) * ${d.strides[1]} -
                  ${d.pads[1]};
                d1 = offsetX + ${d.dilations[1]} * imod(imod(pos, ${c}), ${p[2]});

                if(d1 < ${l[r]} && d1 >= 0) {

                  ch = int(float(pos)/ ${c}.);
                    innerDims = vec2(d0, d1);
                    result[${x*2+_}] = getChannel(
                      getA(0, ch, int(innerDims.x),
                      int(innerDims.y)), innerDims);
                }
              }
            }

          `;let w=`
      ${h}

      void main() {
        ivec2 rc = getOutputCoords();
          vec4 result = vec4(0.0);
          int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
          vec2 innerDims;
          ${b}
          ${m.output} = result;
      }
            `;return{...t,output:{dims:s,type:n.type,textureType:2},shaderSource:w,hasMain:!0}},vg=(e,t,n,a,u)=>{let d=aO(u.cacheKey);return{...d,get:()=>sO(e,d,t,n,a,u)}}});function lO(e,t,n){let a=t[0].dims,u=t[1].dims,d=gt.calcShape(a,u,!0);if(!d)throw new Error("Can't use matmul on the given tensors");let l=bt(d.length),p=Kt(),{activationFunction:o,applyActivation:r}=Bn(n),i=t.length>2,s=i?"value += getBiasForMatmul();":"",c=i?`${kl(l,p,t[2].dims,d,!1)}`:"",h=d.length,m=a.length,b=u.length,w=a[a.length-1],x=`
    ${o}
    ${c}
    float process(int indices[${h}]) {
        int a[${m}];
        int b[${b}];
        bcastMatmulIndices_A(indices, a);
        bcastMatmulIndices_B(indices, b);

        float value;
        for (int k=0; k<${w}; ++k) {
            a[${m-1}] = k;
            b[${b-2}] = k;
            value += _A(a) * _B(b);
        }
        ${s}
        ${r}
        return value;
    }`;return{...e,output:{dims:d,type:t[0].type,textureType:0},shaderSource:x}}function Dl(e,t){let n=uO(e.length>2,t.activationCacheKey);return{...n,get:()=>lO(n,e,t)}}function kl(e,t,n,a,u){let d="",l=n.length,p=a.length,o=p-l;p<2&&l>0?d="coords":d=n.map((c,h)=>`coords.${t[h+o]}`).join(", ");let r=gt.getBroadcastDims(n,a).map(c=>`coords.${t[c+o]} = 0;`).join(`
`),i=te.size(n)===1,s="vec4(outputValue.xx, outputValue.yy)";return i&&(s="vec4(outputValue.x)"),u?`
vec4 getBiasForMatmul() {
  ${e} coords = getOutputCoords();
  ${r}
  vec4 outputValue = getBias(${d});
  return ${s};
}`:`
float getBiasForMatmul() {
  ${e} coords = getOutputCoords();
  ${r}
  return getBias(coords.x);
}`}var Tg,Ig,uO,cO,qi=N(()=>{Le(),Ae(),zn(),Mr(),Nl(),Tg=(e,t,n)=>(cO(t),e.session.pack?[e.run(ji(e,t,n),t)]:[e.run(Dl(t,n),t)]),Ig=e=>oo(e.attributes),uO=(e,t)=>({name:"MatMul",inputNames:e?["A","B","Bias"]:["A","B"],inputTypes:e?[0,0,0]:[0,0],cacheHint:t}),cO=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.");if(e[0].type!=="float32"&&e[0].type!=="float64"||e[1].type!=="float32"&&e[1].type!=="float64")throw new Error("inputs should be float type");if(e[0].type!==e[1].type)throw new Error("inputs types should match")}});function fO(e,t,n,a){let u=[],d=[],l=n[0].dims,p=n[1].dims,o=l.length,r=p.length,i=a.length,s=i-o,c=i-r;u=l.map((_,S)=>`coords.${t[S+s]}`),u[o-1]="i*2",u.join(", "),d=p.map((_,S)=>`coords.${t[S+c]}`),d[r-2]="i*2",d.join(", ");let h=gt.getBroadcastDims(l,a),m=gt.getBroadcastDims(p,a),b=h.map(_=>`coords.${t[_+s]} = 0;`).join(`
`),w=m.map(_=>`coords.${t[_+c]} = 0;`).join(`
`),x=`int lastDim = coords.${t[i-1]};
  coords.${t[i-1]} = coords.${t[i-2]};
  coords.${t[i-2]} = lastDim;`;return`
vec4 getAAtOutCoordsMatmul(int i) {
  ${e} coords = getOutputCoords();
  ${x}
  ${b}
  vec4 outputValue = getA(${u});
  return outputValue;
}

vec4 getBAtOutCoordsMatmul(int i) {
  ${e} coords = getOutputCoords();
  ${x}
  ${w}
  vec4 outputValue = getB(${d});
  return outputValue;
}`}function hO(e,t){let n="";for(let a=0;a<t-2;a++)n+=`rc.${e[a]}, `;return n+=`rc.${e[t-2]}, i*2`,n}function mO(e,t){let n="";for(let a=0;a<t-2;a++)n+=`rc.${e[a]}, `;return n+=`i*2, rc.${e[t-1]}`,n}var dO,pO,ji,Nl=N(()=>{Le(),Ze(),Ae(),zn(),Mr(),qi(),dO=(e,t)=>({name:"MatMul (packed)",inputNames:e?["A","B","Bias"]:["A","B"],inputTypes:e?[2,2,2]:[2,2],cacheHint:t}),pO=(e,t,n,a)=>{let u=n.length>2,d=u?"value += getBiasForMatmul();":"",l=n[0].dims,p=n[1].dims,o=gt.calcShape(l,p,!0),r=!te.areEqual(n[0].dims,n[1].dims);if(!o)throw new Error("Can't use matmul on the given tensors");let i=l[l.length-1],s=Math.ceil(i/2),c=l.length,h=p.length,m=se(e.session.backend.glContext.version),b=bt(o.length),w=o.length,x=Kt(),{activationFunction:_,applyActivation:S}=Bn(a),I=u?`${kl(b,x,n[2].dims,o,!0)}`:"",O=r?`${fO(b,x,n,o)}`:"",A=r?"getAAtOutCoordsMatmul(i)":`getA(${hO(x,c)})`,k=r?"getBAtOutCoordsMatmul(i)":`getB(${mO(x,h)})`,T=r?"":`${b} rc =
          getOutputCoords(); int lastDim = rc.${x[w-1]}; rc.${x[w-1]} =
          rc.${x[w-2]}; rc.${x[w-2]} = lastDim;
      `,R=`
            ${O}
            ${I}
            ${_}
            void main() {
              ${T}

              vec4 value = vec4(0);
              for (int i = 0; i < ${s}; i++) {
                vec4 a = ${A};
                vec4 b = ${k};

                value += (a.rrbb * b.rgrg);
                value += (a.ggaa * b.baba);
              }
              ${d}
              ${S}
              ${m.output} = value;
            }`;return{...t,output:{dims:o,type:n[0].type,textureType:2},shaderSource:R,hasMain:!0}},ji=(e,t,n)=>{let a=dO(t.length>2,n.activationCacheKey);return{...a,get:()=>pO(e,a,t,n)}}}),Sg,$g=N(()=>{Hi(),xg(),Nl(),Sg=(e,t,n)=>{let a=t[0].dims,u=t[1].dims,d=io(a,u,n.dilations,n.pads,n.strides),l=e.run(vg(e,t[0],t[1],d,n),[t[0]]),p=e.reshapePacked(t[1],[u[0],u[1]*u[2]*u[3]]),o=t.length===3?[p,l,t[2]]:[p,l],r=e.run(ji(e,o,n),o);return e.reshapePacked(r,d)}}),gO,bO,Ag,Ll,Rl=N(()=>{Ae(),gO=e=>({name:"Im2Col",inputNames:["X"],inputTypes:[0],cacheHint:e}),bO=(e,t,n,a,u,d)=>{let l=n.dims,p=a.dims,o=u.length,r=Ll(l,p,u,4),i=`
        const int XC = ${l[1]};
        const int XH = ${l[2]};
        const int XW = ${l[3]};
        const int KH = ${d.kernelShape[0]};
        const int KW = ${d.kernelShape[1]};
        const int dilationH = ${d.dilations[0]};
        const int dilationW = ${d.dilations[1]};
        const int strideH = ${d.strides[0]};
        const int strideW = ${d.strides[1]};
        const int padH = ${d.pads[0]};
        const int padW = ${d.pads[1]};
        const int KHKW = KH*KW;
        const int XCKHKW = XC * KHKW;
        const int outputChannels = 4;
        vec4 process(int indices[${o}]) {
          int b  = indices[0]; // batch size
          int oh = indices[1] * strideH - padH; //output height
          int ow = indices[2] * strideW - padW; //output width
          int p = indices[3] * outputChannels; //patch
          vec4 value = vec4(0.0);
          for(int i=0; i < outputChannels; ++i) {
            if(p < XCKHKW) {
              int patchC = p / KHKW;
              int patchH = (p - patchC*KHKW) / KW;
              int patchW = (p - patchC*KHKW) - patchH * KW;
              int xh2 = oh + patchH * dilationH;
              int xw2 = ow + patchW * dilationW;
              int x[${l.length}];
              x[0] = b;
              x[1] = patchC;
              x[2] = xh2;
              x[3] = xw2;
              if(xh2 >= 0 &&
                  xh2 < XH &&
                  xw2 >= 0 &&
                  xw2 < XW) {
                value[i] = _X(x);
              }
            }
            ++p;
          }
          return value;
        }
        `;return{...t,output:{dims:r,type:n.type,textureType:4},shaderSource:i}},Ag=(e,t,n,a,u)=>{let d=gO(u.cacheKey);return{...d,get:()=>bO(e,d,t,n,a,u)}},Ll=(e,t,n,a=4)=>[n[0],n[2],n[3],Math.ceil(e[1]*t[2]*t[3]/a)]}),yO,_O,Og,Pg=N(()=>{Le(),Ze(),Ae(),Mr(),Rl(),yO=(e,t)=>({name:"ConvDotProduct",inputNames:e?["Im2Col","K","B"]:["Im2Col","K"],inputTypes:e?[0,4,0]:[0,4],cacheKey:t.activationCacheKey}),_O=(e,t,n,a,u)=>{let d=n[0].dims,l=n[1].dims,p=[l[0],Math.ceil(d[1]*l[2]*l[3]/4)],o=Ll(d,l,a),[r,i]=e.calculateTextureWidthAndHeight(p,4),s=te.computeStrides(o),[c,h]=e.calculateTextureWidthAndHeight(o,4),m=a.length,b=n.length<3?"0.0":"_B(b)",w=Math.ceil(d[1]*l[2]*l[3]/4),{activationFunction:x,applyActivation:_}=Bn(u),S=se(e.session.backend.glContext.version),I=`
${x}
float process(int indices[${m}]) {
  int b[1];
  b[0] = indices[1];
  int im2col[4];
  im2col[0] = indices[0];
  im2col[1] = indices[2];
  im2col[2] = indices[3];
  int im2colOffset = im2col[0] * ${s[0]} + im2col[1] * ${s[1]} + im2col[2] * ${s[2]};
  int kernelOffset = indices[1] * ${p[1]};
  float value = ${b};
  for (int i = 0; i < ${w}; ++i) {
    vec2 im2colCoords = offsetToCoords(im2colOffset, ${c}, ${h});
    vec2 kernelCoords = offsetToCoords(kernelOffset, ${r}, ${i});
    value += dot(${S.texture2D}(Im2Col, im2colCoords), ${S.texture2D}(K, kernelCoords));
    ++im2colOffset;
    ++kernelOffset;
  }
  ${_}
  return value;
}`;return{...t,output:{dims:a,type:n[0].type,textureType:0},shaderSource:I}},Og=(e,t,n,a)=>{let u=yO(t.length>2,a);return{...u,get:()=>_O(e,u,t,n,a)}}}),io,zl,wO,vO,xO,TO,Ml,IO,Hi=N(()=>{lt(),Le(),wg(),$g(),Pg(),Mr(),Rl(),qi(),io=(e,t,n,a,u)=>{let d=e[0],l=e.slice(2),p=l.length,o=t[0],r=t.slice(2).map((s,c)=>s+(s-1)*(n[c]-1)),i=l.map((s,c)=>s+a[c]+a[c+p]).map((s,c)=>Math.floor((s-r[c]+u[c])/u[c]));return[d,o].concat(...i)},zl=(e,t,n)=>(IO(t,n),wO(e,t,n)),wO=(e,t,n)=>{let a=TO(n,t),u=e.session.pack,d=a.kernelShape[0]===1&&a.kernelShape[1]===1;return a.group>1?[e.run(_g(e,t,a),t)]:d&&u?[vO(e,t,a)]:u&&t[0].dims.length===4&&t[0].dims[0]===1&&!d?[Sg(e,t,a)]:[xO(e,t,a)]},vO=(e,t,n)=>{let a=t[0].dims,u=t[1].dims,d=io(a,u,n.dilations,n.pads,n.strides),l=e.reshapeUnpacked(t[0],[a[1],a[2]*a[3]]),p=e.reshapeUnpacked(t[1],[u[0],u[1]]),o=t.length>2?[p,l,t[2]]:[p,l],r=e.run(Dl(o,n),o);return e.reshapeUnpacked(r,d)},xO=(e,t,n)=>{let a=t[0].dims,u=t[1].dims,d=io(a,u,n.dilations,n.pads,n.strides),l=e.run(Ag(e,t[0],t[1],d,n),[t[0]]),p=t.length===3?[l,t[1],t[2]]:[l,t[1]];return e.run(Og(e,t,d,n),p)},TO=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0)for(let d=2;d<t[1].dims.length;++d)n.push(t[1].dims[d]);let a=e.pads.slice();kr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,a,e.autoPad);let u=Object.assign({},e);return Object.assign(u,{kernelShape:n,pads:a,cacheKey:e.cacheKey}),u},Ml=e=>{let t=e.attributes,n=oo(t),a=t.getString("auto_pad","NOTSET"),u=t.getInts("dilations",[1,1]),d=t.getInt("group",1),l=t.getInts("kernel_shape",[]),p=t.getInts("pads",[0,0,0,0]),o=t.getInts("strides",[1,1]);return ve({autoPad:a,dilations:u,group:d,kernelShape:l,pads:p,strides:o,...n})},IO=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4||e[1].dims.length!==4)throw new Error("currently only support 2-dimensional conv");let n=e[0].dims[1],a=e[1].dims[1]*t.group;if(n!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let u=e[0].dims.length-2;if(t.dilations.length!==u)throw new Error(`dilations should be ${u}D`);if(t.strides.length!==u)throw new Error(`strides should be ${u}D`);if(t.pads.length!==u*2)throw new Error(`pads should be ${u*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(e[0].type!=="float32"||e[1].type!=="float32")throw new Error("Conv input(X,W) should be float tensor");if(e.length===3&&e[2].type!=="float32")throw new Error("Conv input(bias) should be float tensor")}}),SO,$O,AO,Eg,OO,PO,EO,CO,DO,kO,Cg,NO,Dg=N(()=>{lt(),Ze(),Ae(),Mr(),SO=(e,t,n,a,u,d)=>(e-1)*t+n+(a-1)*u+1-d,$O=(e,t,n,a,u)=>{let d=Math.floor(e/2);t==="SAME_UPPER"?(n[a]=d,n[u]=e-d):t==="SAME_LOWER"&&(n[a]=e-d,n[u]=d)},AO=(e,t,n,a,u,d,l,p)=>{let o=e.length-2,r=p.length===0;for(let i=0;i<o;++i){let s=r?e[i+2]*d[i]:p[i],c=SO(e[i+2],d[i],u[i],t[i],n[i],s);$O(c,a,u,i,i+o),r&&p.push(d[i]*(e[i+2]-1)+l[i]+(t[i]-1)*n[i]+1-u[i]-u[i+o])}},Eg=(e,t,n)=>(NO(t,n),OO(e,t,n)),OO=(e,t,n)=>{let a=kO(n,t);return[DO(e,t,a)]},PO=(e,t)=>({name:"ConvTranspose",inputNames:e?["X","W","B"]:["X","W"],inputTypes:e?[0,0,0]:[0,0],cacheHint:t}),EO=(e,t,n,a)=>{let u=t.length>2?"getB(output_channel)":"0.0",d=t[0].dims,l=t[1].dims,p=l[1],o=l[0]/a.group,r=[t[0].dims[0],t[1].dims[1]*a.group,...a.outputShape],i=se(e.session.backend.glContext.version),{activationFunction:s,applyActivation:c}=Bn(a),h=`
  const ivec2 strides = ivec2(${a.strides[0]}, ${a.strides[1]});
  const ivec2 pads = ivec2(${a.pads[0]}, ${a.pads[1]});
  ${s}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;

    ivec2 loc = coords.zw + pads;

    int group_id = output_channel / ${p};
    int wOutChannel = output_channel - group_id * ${p};

    float value = ${u};
    for (int inChannelOffset = 0; inChannelOffset < ${o}; inChannelOffset++) {
      int input_channel = group_id * ${o} + inChannelOffset;
      for (int wWOff = 0; wWOff < ${l[2]}; wWOff++) {
        for (int wHOff = 0; wHOff < ${l[3]}; wHOff++) {
          ivec2 wOff = ivec2(wWOff * ${a.dilations[0]}, wHOff * ${a.dilations[1]});
          ivec2 wLoc = loc - wOff;
          ivec2 wLocIn = wLoc / strides;
          if (
            wLocIn * strides == wLoc &&
            wLocIn.x >= 0 && wLocIn.x < ${d[2]} &&
            wLocIn.y >= 0 && wLocIn.y < ${d[3]}
          ) {
            float xVal = getX(batch, input_channel, wLocIn.y, wLocIn.x);
            float wVal = getW(input_channel, wOutChannel, wHOff, wWOff);
            value += xVal * wVal;
          }
        }
      }
    }
    ${c}
    ${i.output} = vec4(value, .0, .0, .0);
  }
`;return{...n,output:{dims:r,type:t[0].type,textureType:0},shaderSource:h,hasMain:!0}},CO=(e,t,n)=>{let a=PO(t.length>2,n.cacheKey);return{...a,get:()=>EO(e,t,a,n)}},DO=(e,t,n)=>e.run(CO(e,t,n),t),kO=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0)for(let p=2;p<t[1].dims.length;++p)n.push(t[1].dims[p]);let a=e.pads.slice(),u=e.outputShape.slice(),d=t[0].dims;AO(d,n,e.dilations,e.autoPad,a,e.strides,e.outputPadding,u);let l=Object.assign({},e);return Object.assign(l,{kernelShape:n,pads:a,outputShape:u,cacheKey:e.cacheKey}),l},Cg=e=>{let t=e.attributes,n=oo(t),a=t.getString("auto_pad","NOTSET"),u=t.getInts("dilations",[1,1]),d=t.getInt("group",1),l=t.getInts("kernel_shape",[]),p=t.getInts("output_padding",[0,0]),o=t.getInts("output_shape",[]),r=t.getInts("pads",[0,0,0,0]),i=t.getInts("strides",[1,1]);return ve({autoPad:a,dilations:u,group:d,kernelShape:l,outputPadding:p,outputShape:o,pads:r,strides:i,...n})},NO=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4||e[1].dims.length!==4)throw new Error("currently only support 2-dimensional conv");let n=e[0].dims[1],a=e[1].dims[0];if(n!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let u=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==u))throw new Error("invalid bias");let d=e[0].dims.length-2;if(t.dilations.length!==d)throw new Error(`dilations should be ${d}D`);if(t.strides.length!==d)throw new Error(`strides should be ${d}D`);if(t.pads.length!==d*2)throw new Error(`pads should be ${d*2}D`);if(t.outputPadding.length!==d)throw new Error(`output_padding should be ${d}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape");if(e[0].type!=="float32"||e[1].type!=="float32")throw new Error("ConvTranspose input(X,W) should be float tensor");if(e.length===3&&e[2].type!=="float32")throw new Error("ConvTranspose input(bias) should be float tensor")}}),kg,Br,Ng,LO,Lg,RO,zO,MO,Ki=N(()=>{lt(),Le(),Ae(),kg={name:"Transpose",inputNames:["A"],inputTypes:[0]},Br=(e,t,n)=>(MO(t),[e.run({...kg,cacheHint:n.cacheKey,get:()=>LO(e,t[0],n.perm)},t)]),Ng=e=>ve({perm:e.attributes.getInts("perm",[])}),LO=(e,t,n)=>{let a=t.dims;n=Lg(a,n);let u=RO(a,n),d=a.length,l=`
      ${zO("perm",n,d)}
      float process(int indices[${d}]) {
        int a[${d}];
        perm(a, indices);
        return _A(a);
      }`;return{...kg,output:{dims:u,type:t.type,textureType:0},shaderSource:l}},Lg=(e,t)=>(t&&t.length!==e.length&&(t=[...e.keys()].reverse()),t),RO=(e,t)=>(t=Lg(e,t),te.sortBasedOnPerm(e,t)),zO=(e,t,n)=>{let a=[];a.push(`void ${e}(out int a[${n}], int src[${n}]) {`);for(let u=0;u<n;++u)a.push(`	a[${t[u]}]=src[${u}];`);return a.push("	}"),a.join(`
`)},MO=e=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("input should be float tensor")}}),Rg,zg,BO,Mg=N(()=>{Ki(),Rg=(e,t,n)=>{BO(t);let a=n.blocksize,u=a*a,d=n.mode==="DCR"?[0,3,4,1,5,2]:[0,1,4,2,5,3],l=n.mode==="DCR"?[t[0].dims[0],a,a,t[0].dims[1]/u,t[0].dims[2],t[0].dims[3]]:[t[0].dims[0],t[0].dims[1]/u,a,a,t[0].dims[2],t[0].dims[3]],p=e.reshapeUnpacked(t[0],l),o={perm:d,cacheKey:`${d}`},[r]=Br(e,[p],o),i=[t[0].dims[0],t[0].dims[1]/u,t[0].dims[2]*a,t[0].dims[3]*a];return[e.reshapeUnpacked(r,i)]},zg=e=>{let t=e.attributes.getInt("blocksize");if(t<1)throw new Error(`blocksize must be >= 1, but got : ${t} for DepthToSpace`);let n=e.attributes.getString("mode","DCR");if(n!=="DCR"&&n!=="CRD")throw new Error(`unrecognized mode: ${n} for DepthToSpace`);return{mode:n,blocksize:t}},BO=e=>{if(e.length!==1)throw new Error(`DepthToSpace expect 1 inputs, but got ${e.length}`);if(e[0].type==="string"||e[0].dims.length!==4)throw new TypeError("DepthToSpace input should be a 4-D numeric tensor")}}),Bg,Fg,FO,Vg=N(()=>{Le(),Bg=(e,t,n)=>{FO(t,n);let a=te.flattenShape(t[0].dims,n);return[e.reshapeUnpacked(t[0],a)]},Fg=e=>e.attributes.getInt("axis",1),FO=(e,t)=>{if(!e||e.length!==1)throw new Error("Flatten requires 1 input.");let n=e[0].dims.length;if(n===0)throw new Error("scalar tensor is not supported.");if(t<-n||t>n)throw new Error("Invalid axis");if(e[0].type==="string")throw new Error("string tensor is not supported.")}}),mr,Lo=N(()=>{mr=["float32","float64","int32","int16","int8","uint16","uint32","uint8"]}),Gg,Ug,VO,GO,UO,WO,Wg=N(()=>{lt(),Lo(),Le(),Ae(),Gg=(e,t,n)=>(WO(t,n.axis),[e.run(UO(e,t,n),t)]),Ug=e=>ve({axis:e.attributes.getInt("axis",0)}),VO={name:"Gather",inputNames:["A","B"],inputTypes:[0,0]},GO=(e,t,n,a)=>{let u=n[0].dims.slice(),d=n[1].dims.slice(),l=new Array(u.length+d.length-1);a=te.normalizeAxis(a,u.length);let p=[];for(let c=0;c<l.length;c++)c<a?(l[c]=u[c],p.push(`inputIdx[${c}] = outputIdx[${c}];`)):c<a+d.length?(l[c]=d[c-a],p.push(`indexDataIdx[${c-a}] = outputIdx[${c}];`)):(l[c]=u[c-d.length+1],p.push(`inputIdx[${c-d.length+1}] = outputIdx[${c}];`));let o=l.length||1,r=u.length,i=d.length||1,s=`
      float process(int outputIdx[${o}]) {
        int inputIdx[${r}];
        int indexDataIdx[${i}];
        indexDataIdx[0] = 0;
        ${p.join(`
        `)}
        int idx = int(_B(indexDataIdx));
        inputIdx[${a}] = idx < 0 ? idx + ${u[a]} : idx;
        return _A(inputIdx);
      }`;return{...t,output:{dims:l,type:n[0].type,textureType:0},shaderSource:s}},UO=(e,t,n)=>{let a={...VO,cacheHint:n.cacheKey};return{...a,get:()=>GO(e,a,t,n.axis)}},WO=(e,t)=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.");let n=e[0].dims.length;if(n<1)throw new Error("Invalid input shape.");if(t<-n||t>n-1)throw new Error("Invalid axis.");if(mr.indexOf(e[0].type)===-1)throw new Error("Invaid input type.");if(e[1].type!=="int32"&&e[1].type!=="int16")throw new Error("Invaid input type.")}}),Bl,Hg,qg,jg,HO,qO,jO,Kg=N(()=>{lt(),Le(),Ae(),Bl=(e,t,n)=>(jO(t,n),[e.run(HO(t,n),t)]),Hg=(e,t)=>{let n=e.attributes.getInt("transA",0)!==0,a=e.attributes.getInt("transB",0)!==0,u=e.attributes.getFloat("alpha",1),d=e.attributes.getFloat("beta",1);return ve({transA:n,transB:a,alpha:u,beta:d,isOptionalC:t})},qg=e=>Hg(e,!1),jg=e=>Hg(e,!0),HO=(e,t)=>{let n={name:"Gemm",inputNames:e.length===3?["A","B","C"]:["A","B"],inputTypes:e.length===3?[0,0,0]:[0,0],key:t.cacheKey};return{...n,get:()=>qO(n,e,t)}},qO=(e,t,n)=>{let a=t[0].dims.slice(),u=t[1].dims.slice(),[d,l]=zi.getShapeOfGemmResult(a,n.transA,u,n.transB,t.length===3?t[2].dims:void 0),p=[d,l];if(!p)throw new Error("Can't use gemm on the given tensors");let o=a[a.length-1],r="";n.transA&&(o=a[0]),n.transA&&n.transB?r="value += _A_T(a) * _B_T(b);":n.transA&&!n.transB?r="value += _A_T(a) * _B(b);":!n.transA&&n.transB?r="value += _A(a) * _B_T(b);":!n.transA&&!n.transB&&(r="value += _A(a) * _B(b);");let i=p.length,s=t.length===3?`int c[${t[2].dims.length}];`:"",c=t.length===3?"bcastIndices_C(indices, c);":"",h=t.length===3?"value += beta * _C(c);":"",m=`
      float process(int indices[${i}]) {
          int a[${i}];
          int b[${i}];
          ${s}

          copyVec(indices, a);
          copyVec(indices, b);
          ${c}

          float value = 0.0;
          for (int k=0; k<${o}; ++k) {
              a[${i-1}] = k;
              b[${i-2}] = k;
              ${r}
          }

          value = value * alpha;
          ${h}
          return value;
      }`;return{...e,output:{dims:p,type:t[0].type,textureType:0},variables:[{name:"alpha",type:"float",data:n.alpha},{name:"beta",type:"float",data:n.beta}],shaderSource:m}},jO=(e,t)=>{if(!e)throw new Error("Input is missing");if(t.isOptionalC&&(e.length<2||e.length>3))throw new Error("Invaid input shape.");if(!t.isOptionalC&&e.length!==3)throw new Error("Gemm requires 3 inputs");if(e.length===3&&e[2].dims.length!==1&&e[2].dims.length!==2)throw new Error("Invalid input shape of C");if(e[0].type!=="float32"&&e[0].type!=="float64"||e[1].type!=="float32"&&e[1].type!=="float64"||e.length===3&&e[2].type!=="float32"&&e[2].type!=="float64")throw new Error("Invalid input type.");if(e[0].type!==e[1].type||e.length===3&&e[0].type!==e[2].type)throw new Error("Input types are mismatched")}}),Xg,Zg,KO,XO,ZO,JO,QO,Jg=N(()=>{lt(),Ae(),Xg=(e,t,n)=>(QO(t),[e.run(ZO(e,t,n),t)]),Zg=e=>{let t=e.attributes.getFloat("scale"),n=e.attributes.getFloats("bias");return ve({scale:t,bias:n})},KO={name:"ImageScaler",inputNames:["X"],inputTypes:[0]},XO=(e,t,n,a)=>{let u=n[0].dims.slice(),d=u.length,l=`
      ${JO(a.bias.length)}
      float process(int indices[${d}]) {
        return _X(indices) * scale + getBias(bias, indices[1]);
      }`;return{...t,output:{dims:u,type:n[0].type,textureType:0},variables:[{name:"bias",type:"float",arrayLength:a.bias.length,data:a.bias},{name:"scale",type:"float",data:a.scale}],shaderSource:l}},ZO=(e,t,n)=>{let a={...KO,cacheHint:n.cacheKey};return{...a,get:()=>XO(e,a,t,n)}},JO=e=>{let t=[`float getBias(float bias[${e}], int channel) {`];for(let n=0;n<e;++n)n===0?t.push(`	if (channel == ${n}) { return bias[${n}]; }`):n===e-1?t.push(`	else { return bias[${n}]; }`):t.push(`	else if (channel == ${n}) { return bias[${n}]; }`);return t.push("	}"),t.join(`
`)},QO=e=>{if(!e||e.length!==1)throw new Error("ImageScaler requires 1 input.");if(e[0].dims.length!==4)throw new Error("Invalid input shape.");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type.")}}),Yg,eb,Qg,YO,eP,tP,nP,rP,oP,tb=N(()=>{Ze(),Ae(),Yg=(e,t,n)=>{oP(t);let a=e.run(eP(t[0]),t);return[e.run(rP(e,t[0],n,a.dims),[t[0],a,t[1],t[2]])]},eb=e=>e.attributes.getFloat("epsilon",1e-5),Qg={name:"InstanceNormalization_MeanAndVariance",inputNames:["X"],inputTypes:[0]},YO=(e,t)=>{let n=t.dims.slice(),a=n[1],u=n[2]*n[3],d=[n[0],a],l=`
      vec4 process(int[2] indices) {
        vec4 v = vec4(0.0);
        int a[4];
        a[0] = indices[0];
        a[1] = indices[1];
        float temp = 0.0;
        for(int a2=0; a2<${n[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${n[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += x;
          }
        }
        float mean = temp / float(${u});
        temp = 0.0;
        for(int a2=0; a2<${n[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${n[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += (x - mean) * (x - mean);
          }
        }
        v.r = mean;
        v.g = temp / float(${u});

        return v;
      }`;return{...e,output:{dims:d,type:t.type,textureType:4},shaderSource:l}},eP=e=>({...Qg,get:()=>YO(Qg,e)}),tP={name:"InstanceNormalization_ComputeOutput",inputNames:["X","MeanAndVariance","Scale","B"],inputTypes:[0,4,0,0]},nP=(e,t,n,a,u)=>{let d=se(e.session.backend.glContext.version),[l,p]=e.calculateTextureWidthAndHeight(u,4),[o,r]=[l/4,p],i=`
      vec4 get_MeanAndVariance(int[2] mv) {
        int offset = indicesToOffset_MeanAndVariance(mv);
        vec2 coords = offsetToCoords(offset, ${o}, ${r});
        return ${d.texture2D}(MeanAndVariance, coords);
      }

      float process(int[4] indices) {
        int mv[2];
        mv[0] = indices[0];
        mv[1] = indices[1];
        vec4 mean_and_variance = get_MeanAndVariance(mv);
        float mean = mean_and_variance.r;
        float variance = mean_and_variance.g;

        int sb[1];
        sb[0] = indices[1];
        float scale = _Scale(sb);
        float b = _B(sb);

        return scale * (_X(indices) - mean) / sqrt(variance + epsilon) + b;
      }`;return{...t,output:{dims:n.dims,type:n.type,textureType:0},variables:[{name:"epsilon",type:"float",data:a}],shaderSource:i}},rP=(e,t,n,a)=>{let u={...tP,cacheHint:`${n}`};return{...u,get:()=>nP(e,u,t,n,a)}},oP=e=>{if(!e||e.length!==3)throw new Error("InstanceNormalization requires 3 inputs.");let t=e[0],n=e[1],a=e[2];if(t.dims.length<3||n.dims.length!==1||a.dims.length!==1)throw new Error("Invalid input shape.");if(n.dims[0]!==t.dims[1]||a.dims[0]!==t.dims[1])throw new Error("Input shapes are mismatched.");if(t.type!=="float32"&&t.type!=="float64"||n.type!=="float32"&&n.type!=="float64"||a.type!=="float32"&&a.type!=="float64")throw new Error("Invalid input type.");if(e[0].dims.length!==4)throw new Error("Only support 4-D input shape.")}});function iP(e,t){let n=e[0].dims[1],a=e[0].dims.length,u=-Math.floor((t.size-1)/2),d=Math.ceil((t.size-1)/2),l=`float(${t.alpha}) / float(${t.size})`,p=`float(${t.bias})`,o=`float(${t.beta})`,r=`
    float process(int indices[${a}]) {
        int c = indices[1];
        float x = _X(indices);
        float square_sum = 0.0;

        for (int i = ${u}; i <= ${d}; i++) {
          int idx = c + i;
          if (c >= 0 && c < ${n}) {
            indices[1] = idx;
            float j = _X(indices);
            square_sum += j * j;
          }
        }
        return x / pow(${p} + ${l} * square_sum, ${o});
    }`;return{...ob,cacheHint:t.cacheKey,output:{dims:e[0].dims,type:e[0].type,textureType:0},shaderSource:r}}function aP(e,t){return{...ob,cacheHint:t.cacheKey,get:()=>iP(e,t)}}var nb,rb,ob,sP,ib=N(()=>{lt(),Ae(),nb=(e,t,n)=>(sP(t),[e.run(aP(t,n),t)]),rb=e=>{let t=e.attributes.getFloat("alpha",1e-4),n=e.attributes.getFloat("beta",.75),a=e.attributes.getFloat("bias",1),u=e.attributes.getInt("size");return ve({alpha:t,beta:n,bias:a,size:u})},ob={name:"LRN",inputNames:["X"],inputTypes:[0]},sP=e=>{if(!e||e.length!==1)throw new Error("LRN requires 1 input.");if(e[0].dims.length!==4)throw new Error('currently only support LRN for input with "NCHW" format');if(e[0].type!=="float32")throw new Error("input should be float type")}}),uP,Fl,ab,sb,ub,lP,cP,dP,pP,fP,hP,mP,gP,lb=N(()=>{lt(),Le(),Ze(),Ae(),uP={name:"Pad",inputNames:["A"],inputTypes:[0]},Fl=(e,t,n)=>(dP(t),[e.run({...uP,cacheHint:n.cacheKey,get:()=>cP(e,t[0],n)},t)]),ab=e=>{let t=e.attributes.getString("mode","constant"),n=e.attributes.getFloat("value",0),a=e.attributes.getInts("pads");return ve({mode:t,value:n,pads:a})},sb=(e,t,n)=>{pP(t);let a=lP(e,t,n);return Fl(e,[t[0]],a)},ub=e=>e.attributes.getString("mode","constant"),lP=(e,t,n)=>{if(!e.session.isInitializer(t[1].dataId)||t.length>=3&&!e.session.isInitializer(t[2].dataId))throw new Error("dynamic pad attributes are not allowed");let a=Array.from(t[1].integerData),u=t.length>=3?t[2].floatData[0]:0;return ve({mode:n,pads:a,value:u})},cP=(e,t,n)=>{let a=te.padShape(t.dims.slice(),n.pads),u=a.length,d=`
      ${fP(e,t,n)}
      float process(int[${u}] indices) {
          return padA(indices);
      }`;return{name:"Pad",inputNames:["A"],inputTypes:[0],output:{dims:a,type:t.type,textureType:0},shaderSource:d}},dP=e=>{if(!e||e.length!==1)throw new Error("Pad requires 1 input");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type.")},pP=e=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Pad requires 2 or 3 inputs");if(e[1].type!=="int32")throw new Error("Invalid input type.");if(e.length>=3&&e[2].type==="string")throw new Error("Invalid input type.")},fP=(e,t,n)=>{let a=se(e.session.backend.glContext.version),[u,d]=e.calculateTextureWidthAndHeight(t.dims,0),l=te.computeStrides(t.dims);switch(n.mode){case"constant":return hP(a,t.dims,l,u,d,n.pads,n.value);case"reflect":return mP(a,t.dims,l,u,d,n.pads);case"edge":return gP(a,t.dims,l,u,d,n.pads);default:throw new Error("Invalid mode")}},hP=(e,t,n,a,u,d,l)=>{let p=t.length,o="";for(let r=p-1;r>=0;--r)o+=`
        k = m[${r}] - ${d[r]};
        if (k < 0)  return constant;
        if (k >= ${t[r]}) return constant;
        offset += k * ${n[r]};
        `;return`
      float padA(int m[${p}]) {
        const float constant = float(${l});
        int offset = 0;
        int k = 0;
        ${o}
        vec2 coords = offsetToCoords(offset, ${a}, ${u});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `},mP=(e,t,n,a,u,d)=>{let l=t.length,p="";for(let o=l-1;o>=0;--o)p+=`
        k = m[${o}] - ${d[o]};
        if (k < 0) { k = -k; }
        {
          const int _2n_1 = ${2*(t[o]-1)};
          k = int( mod( float(k), float(_2n_1) ) ) ;
          if(k >= ${t[o]}) { k = _2n_1 - k; }
        }
        offset += k * ${n[o]};
        `;return`
      float padA(int m[${l}]) {
        int offset = 0;
        int k = 0;
        ${p}
        vec2 coords = offsetToCoords(offset, ${a}, ${u});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `},gP=(e,t,n,a,u,d)=>{let l=t.length,p="";for(let o=l-1;o>=0;--o)p+=`
        k = m[${o}] - ${d[o]};
        if (k < 0)  k = 0;
        if (k >= ${t[o]}) k = ${t[o]-1};
        offset += k * ${n[o]};
      `;return`
      float padA(int m[${l}]) {
        int offset = 0;
        int k = 0;
        ${p}
        vec2 coords = offsetToCoords(offset, ${a}, ${u});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `}}),db,pb,fb,hb,mb,gb,bb,yb,_b,bP,cb,wb,Zi,vb,Xi,yP,xb=N(()=>{lt(),Le(),Ae(),db=(e,t,n)=>{Zi(t);let a={name:"AveragePool",inputNames:["X"],inputTypes:[0],cacheHint:n.cacheKey};return[e.run({...a,get:()=>fb(t,a,!1,n)},t)]},pb=e=>{let t=e.attributes.getString("auto_pad","NOTSET"),n=e.attributes.getInt("ceil_mode",0),a=e.attributes.getInt("count_include_pad",0)!==0,u=e.attributes.getInts("kernel_shape"),d=e.attributes.getInts("strides",[]),l=e.attributes.getInts("pads",[]);if(n!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");return ve({autoPad:t,ceilMode:n,countIncludePad:a,kernelShape:u,strides:d,pads:l})},fb=(e,t,n,a)=>{let[u,d]=_b(e,a,n),l=te.size(u.kernelShape),p="value += _X(x);",o="";u.countIncludePad?o+=`value /= float(${l});`:o+=`value /= float(${l} - pad);`;let r=`
        ${vb(e[0].dims,u,p,o,"0.0")}
      `;return{...t,output:{dims:d,type:e[0].type,textureType:0},shaderSource:r}},hb=(e,t,n)=>{Zi(t);let a={name:"GlobalAveragePool",inputNames:["X"],inputTypes:[0],cacheHint:`${n.countIncludePad}`};return[e.run({...a,get:()=>fb(t,a,!0,n)},t)]},mb=e=>{let t=e.attributes.getInt("count_include_pad",0)!==0;return ve({autoPad:"",ceilMode:0,countIncludePad:t,kernelShape:[],strides:[],pads:[]})},gb=(e,t,n)=>{Zi(t);let a={name:"MaxPool",inputNames:["X"],inputTypes:[0],cacheHint:n.cacheKey};return[e.run({...a,get:()=>yb(t,a,!1,n)},t)]},bb=e=>{let t=e.attributes.getString("auto_pad","NOTSET"),n=e.attributes.getInt("ceil_mode",0),a=e.attributes.getInts("kernel_shape"),u=e.attributes.getInts("strides",[]),d=e.attributes.getInts("pads",[]),l=e.attributes.getInt("storage_order",0),p=e.attributes.getInts("dilations",[]);if(l!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");return ve({autoPad:t,ceilMode:n,countIncludePad:!1,kernelShape:a,strides:u,pads:d,storageOrder:l,dilations:p})},yb=(e,t,n,a)=>{let[u,d]=_b(e,a,n),l=`
      ${vb(e[0].dims,u,`
      value = max(_X(x), value);
    `,"","-1e5")}
    `;return{...t,output:{dims:d,type:e[0].type,textureType:0},shaderSource:l}},_b=(e,t,n)=>{let a=e[0].dims.slice(),u=Object.hasOwnProperty.call(t,"dilations"),d=t.kernelShape.slice(),l=t.strides.slice(),p=u?t.dilations.slice():[],o=t.pads.slice();kr.adjustPoolAttributes(n,a,d,l,p,o);let r=kr.computePoolOutputShape(n,a,l,p,d,o,t.autoPad),i=Object.assign({},t);return u?Object.assign(i,{kernelShape:d,strides:l,pads:o,dilations:p,cacheKey:t.cacheKey}):Object.assign(i,{kernelShape:d,strides:l,pads:o,cacheKey:t.cacheKey}),[i,r]},bP={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[],cacheKey:""},cb={name:"GlobalMaxPool",inputNames:["X"],inputTypes:[0]},wb=(e,t)=>(Zi(t),[e.run({...cb,get:()=>yb(t,cb,!0,bP)},t)]),Zi=e=>{if(!e||e.length!==1)throw new Error("Pool ops requires 1 input.");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type.")},vb=(e,t,n,a,u)=>{let d=e.length;if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],p=t.strides[t.strides.length-1],o=t.pads[t.pads.length/2-1],r=t.pads[t.pads.length-1],i=e[d-1],s="",c="",h="";if(o+r!==0?s=`
          for (int i = 0; i < ${l}; i++) {
            x[${d} - 1] = indices[${d} - 1] * ${p} - ${o} + i;
            if (x[${d} - 1] < 0 || x[${d} - 1] >= ${i}) {
              pad++;
              continue;
            }
            ${n}
          }`:s=`
          for (int i = 0; i < ${l}; i++) {
            x[${d} - 1] = indices[${d} - 1] * ${p} - ${o} + i;
            ${n}
          }`,t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],b=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],x=t.pads[t.pads.length-2],_=e[d-2];w+x!==0?c=`
            for (int j = 0; j < ${m}; j++) {
              x[${d} - 2] = indices[${d} - 2] * ${b} - ${w} + j;
              if (x[${d} - 2] < 0 || x[${d} - 2] >= ${_}) {
                pad+= ${l};
                continue;
              }
          `:c=`
            for (int j = 0; j < ${m}; j++) {
              x[${d} - 2] = indices[${d} - 2] * ${b} - ${w} + j;
            `,h=`
          }
        `}return`
        float process(int indices[${d}]) {
          int x[${d}];
          copyVec(indices, x);

          float value = ${u};
          int pad = 0;
          ${c}
          ${s}
          ${h}
          ${a}
          return value;
        }
      `}else{let l=te.size(t.kernelShape),p=te.computeStrides(t.kernelShape),o=p.length,r=t.pads.length,i=yP(o),s=Xi(e,"inputDims"),c=Xi(t.pads,"pads"),h=Xi(p,"kernelStrides"),m=Xi(t.strides,"strides"),b=t.pads.reduce((x,_)=>x+_),w="";return b?w=`
            if (x[j] >= inputDims[j] || x[j] < 0) {
              pad++;
              isPad = true;
              break;
            }
          }
          if (!isPad) {
            ${n}
          }`:w=`
          }
          ${n}
        `,`
        ${i}
        float process(int indices[${d}]) {
          int x[${d}];
          copyVec(indices, x);
          int offset[${o}];
          int pads[${r}];
          int inputDims[${d}];
          int kernelStrides[${o}];
          int strides[${o}];
          ${c}
          ${s}
          ${m}
          ${h}

          float value = ${u};
          int pad = 0;
          bool isPad = false;
          for (int i = 0; i < ${l}; i++) {
            offsetToIndices(i, kernelStrides, offset);
            isPad = false;
            for (int j = ${d} - ${o}; j < ${d}; j++) {
              x[j] = indices[j] * strides[j - ${d} + ${o}]
                + offset[j - ${d} + ${o}] - pads[j - 2];
              ${w}
          }
          ${a}

          return value;
        }
      `}},Xi=(e,t)=>{let n="";for(let a=0;a<e.length;a++)n+=`
      ${t}[${a}] = ${e[a]};
    `;return n},yP=e=>`
  void offsetToIndices(int offset, int[${e}] strides, out int[${e}] indices) {
    if (${e} == 0) {
      return;
    }
    for (int i = 0; i < ${e} - 1; ++i) {
      indices[i] = offset / strides[i];
      offset -= indices[i] * strides[i];
    }
    indices[${e} - 1] = offset;
  }`}),Fr,gr,_P,wP,Tb,Ib,Sb,$b,Ab,Ob,Pb,Eb=N(()=>{lt(),Lo(),Le(),Ae(),Fr=(e,t,n,a,u)=>{wP(t);let d={name:a,inputNames:["A"],inputTypes:[0]};return[e.run({...d,cacheHint:n.cacheKey,get:()=>_P(e,t,n,a,u,d)},t)]},gr=e=>{let t=e.attributes.getInts("axes",[]),n=e.attributes.getInt("keepdims",1)===1;return ve({axes:t,keepDims:n})},_P=(e,t,n,a,u,d)=>{let l=[],p=t[0].dims.length||1,o=[],r=te.normalizeAxes(n.axes,t[0].dims.length),i=u(t,r),s=i[1];for(let h=0;h<t[0].dims.length;h++)r.indexOf(h)>=0||r.length===0?(n.keepDims&&l.push(1),s=`
          for(int j${h} = 0; j${h} < ${t[0].dims[h]}; j${h}++) {
            inputIdx[${h}] = j${h};
            ${s}
          }`):(o.push(`inputIdx[${h}] = outputIdx[${l.length}];`),l.push(t[0].dims[h]));let c=`
      float process(int outputIdx[${l.length||1}]) {
        float value;                 // final result
        int inputIdx[${p}];      // addressing input data
        ${o.join(`
`)}
        ${i[0]}       // init ops for reduce max/min
        ${s}
        ${i[2]}       // final computation for reduce mean
        return value;
      }`;return{...d,output:{dims:l,type:t[0].type,textureType:0},shaderSource:c}},wP=e=>{if(!e||e.length!==1)throw new Error("Reduce op requires 1 input.");if(mr.indexOf(e[0].type)===-1)throw new Error("Invalid input type.")},Tb=(e,t,n)=>Fr(e,t,n,"ReduceSum",()=>["value = 0.0;","value += _A(inputIdx);",""]),Ib=(e,t,n)=>Fr(e,t,n,"ReduceMean",(a,u)=>{let d=1;for(let l=0;l<a[0].dims.length;l++)(u.indexOf(l)>=0||u.length===0)&&(d*=a[0].dims[l]);return["value = 0.0;","value += _A(inputIdx);",`value /= ${d}.;`]}),Sb=(e,t,n)=>Fr(e,t,n,"ReduceMax",(a,u)=>{let d=[];for(let l=0;l<a[0].dims.length;l++)(u.indexOf(l)>=0||u.length===0)&&d.push(`inputIdx[${l}] = 0;`);return[`${d.join(`
`)}
value = _A(inputIdx);`,"value = max(value, _A(inputIdx));",""]}),$b=(e,t,n)=>Fr(e,t,n,"ReduceMin",(a,u)=>{let d=[];for(let l=0;l<a[0].dims.length;l++)(u.indexOf(l)>=0||u.length===0)&&d.push(`inputIdx[${l}] = 0;`);return[`${d.join(`
`)}
value = _A(inputIdx);`,"value = min(value, _A(inputIdx));",""]}),Ab=(e,t,n)=>Fr(e,t,n,"ReduceProd",()=>["value = 1.0;","value *= _A(inputIdx);",""]),Ob=(e,t,n)=>Fr(e,t,n,"ReduceLogSum",()=>["value = 0.0;","value += _A(inputIdx);","value = log(value);"]),Pb=(e,t,n)=>Fr(e,t,n,"ReduceLogSumSquare",()=>["float t; value = 0.0;","t = _A(inputIdx); value += t * t;",""])}),Cb,Db=N(()=>{Le(),Cb=(e,t)=>{let n=te.calculateReshapedDims(t[0].dims,t[1].integerData);return e.session.pack?[e.reshapePacked(t[0],n)]:[e.reshapeUnpacked(t[0],n)]}}),kb,Vl,Nb,Lb,Ro,vP,Gl,Ji,Ul=N(()=>{lt(),Ze(),Ae(),kb={name:"Upsample",inputNames:["X"],inputTypes:[0]},Vl=(e,t,n)=>(Gl(t,n),[e.run({...kb,cacheHint:n.cacheKey,get:()=>vP(e,t,n)},t)]),Nb=e=>Ro(e,7),Lb=e=>Ro(e,9),Ro=(e,t)=>{let n=t>=10,a=e.attributes.getString("mode","nearest");if(a!=="nearest"&&a!=="linear"&&(t<11||a!=="cubic"))throw new Error(`unrecognized mode: ${a}`);let u=[];t<9&&(u=e.attributes.getFloats("scales"),Ji(u,a,n));let d=e.attributes.getFloat("extrapolation_value",0),l=t>10?e.attributes.getString("coordinate_transformation_mode","half_pixel"):"asymmetric";if(["asymmetric","pytorch_half_pixel","tf_half_pixel_for_nn","align_corners","tf_crop_and_resize","half_pixel"].indexOf(l)===-1)throw new Error(`coordinate_transform_mode '${l}' is not supported`);let p=l==="tf_crop_and_resize",o=p,r=a==="nearest"&&t>=11?e.attributes.getString("nearest_mode","round_prefer_floor"):"";if(["round_prefer_floor","round_prefer_ceil","floor","ceil",""].indexOf(r)===-1)throw new Error(`nearest_mode '${r}' is not supported`);let i=e.attributes.getFloat("cubic_coeff_a",-.75),s=e.attributes.getInt("exclude_outside",0)!==0;if(s&&a!=="cubic")throw new Error("exclude_outside can be set to 1 only when mode is CUBIC.");let c=t<11?!0:a==="nearest"&&l==="asymmetric"&&r==="floor",h=0,m=0,b=0;return t>10?e.inputs.length>2?(h=1,m=2,b=3):(m=1,b=2):t===9&&(m=1),ve({opset:t,isResize:n,mode:a,scales:u,extrapolationValue:d,coordinateTransformMode:l,useExtrapolation:o,needRoiInput:p,nearestMode:r,cubicCoefficientA:i,excludeOutside:s,useNearest2xOptimization:c,roiInputIdx:h,scalesInputIdx:m,sizesInputIdx:b})},vP=(e,t,n)=>{let a=se(e.session.backend.glContext.version),[u,d]=e.calculateTextureWidthAndHeight(t[0].dims,0),l=t[0].dims.map((b,w)=>Math.floor(b*n.scales[w])),[p,o]=e.calculateTextureWidthAndHeight(l,0),r=l.length,i=new Array(r),s=new Array(r),c=`
      int output_pitches[${r}];
      int input_pitches[${r}];
      `;for(let b=r-1;b>=0;b--)i[b]=b===r-1?1:i[b+1]*l[b+1],s[b]=b===r-1?1:s[b+1]*t[0].dims[b+1],c+=`
        output_pitches[${b}] = ${i[b]};
        input_pitches[${b}] = ${s[b]};
        `;let h=`
      float getInputFloat(int index) {
        vec2 coords = offsetToCoords(index, ${u}, ${d});
        float value = getColorAsFloat(${a.texture2D}(X, coords));
        return value;
      }
      `,m=n.mode==="nearest"?`
    ${h}
    float process(int indices[${r}]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${p}, ${o});

      ${c}

      int d, m;
      for (int dim = 0; dim < ${r}; ++dim) {
        d = output_index / output_pitches[dim];
        m = output_index - d * output_pitches[dim];
        output_index = m;

        if (scales[dim] != 1 && d > 0) {
          int d2 = d / scales[dim];
          m = d - d2 * scales[dim];
          d = d2;
        }
        input_index += input_pitches[dim] * d;
      }

      return getInputFloat(input_index);
    }`:r===4?`
    ${h}
    float process(int indices[4]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${p}, ${o});

      ${c}

      int m;
      int index_of_dim0, index_of_dim1, index_of_dim2, index_of_dim3;
      index_of_dim0 = output_index / output_pitches[0];
      m = output_index - index_of_dim0 * output_pitches[0];
      index_of_dim1 = m / output_pitches[1];
      m = m - index_of_dim1 * output_pitches[1];
      index_of_dim2 = m / output_pitches[2];
      m = m - index_of_dim2 * output_pitches[2];
      index_of_dim3 = m;

      int index_of_input_dim2, index_of_input_dim3, x_offset, y_offset;
      index_of_input_dim2 = index_of_dim2 / scales[2];
      y_offset = index_of_dim2 - index_of_input_dim2 * scales[2];
      index_of_input_dim3 = index_of_dim3 / scales[3];
      x_offset = index_of_dim3 - index_of_input_dim3 * scales[3];

      input_index = index_of_dim0 * input_pitches[0] +
            index_of_dim1 * input_pitches[1] +
            index_of_input_dim2 * input_pitches[2] +
            index_of_input_dim3;

      float x00 = getInputFloat(input_index);
      float x10, x01, x11;

      bool end_of_dim2 = false;
      if (index_of_input_dim2 == (${t[0].dims[2]} - 1)) {
        // It's the end in dimension 2
        x01 = x00;
        end_of_dim2 = true;
      } else {
        x01 = getInputFloat(input_index + input_pitches[2]);
      }

      if (index_of_input_dim3 == (input_pitches[2] - 1)) {
        // It's the end in dimension 3
        x10 = x00;
        x11 = x01;
      }
      else {
        x10 = getInputFloat(input_index + 1);
        x11 = end_of_dim2 ? x10 : getInputFloat(input_index + input_pitches[2] + 1);
      }

      float y0 = x00 + float(y_offset) * (x01 - x00) / float(scales[2]);
      float y1 = x10 + float(y_offset) * (x11 - x10) / float(scales[2]);
      return y0 + float(x_offset) * (y1 - y0) / float(scales[3]);
    }`:`
    ${h}
    float process(int indices[2]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${p}, ${o});

      ${c}

      int m;
      int index_of_dim0, index_of_dim1;
      index_of_dim0 = output_index / output_pitches[0];
      m = output_index - index_of_dim0 * output_pitches[0];
      index_of_dim1 = m;

      int index_of_input_dim0, index_of_input_dim1, x_offset, y_offset;
      index_of_input_dim0 = index_of_dim0 / scales[0];
      y_offset = index_of_dim0 - index_of_input_dim0 * scales[0];
      index_of_input_dim1 = index_of_dim1 / scales[1];
      x_offset = index_of_dim1 - index_of_input_dim1 * scales[1];

      input_index = index_of_input_dim0 * input_pitches[0] + index_of_input_dim1;

      float x00 = getInputFloat(input_index);
      float x10, x01, x11;

      bool end_of_dim0 = false;
      if (index_of_input_dim0 == (${t[0].dims[0]} - 1)) {
        // It's the end in dimension 0
        x01 = x00;
        end_of_dim0 = true;
      } else {
        x01 = getInputFloat(input_index + input_pitches[0]);
      }

      if (index_of_input_dim1 == (input_pitches[0] - 1)) {
        // It's the end in dimension 1
        x10 = x00;
        x11 = x01;
      }
      else {
        x10 = getInputFloat(input_index + 1);
        x11 = end_of_dim0 ? x10 : getInputFloat(input_index + input_pitches[0] + 1);
      }

      float y0 = x00 + float(y_offset) * (x01 - x00) / float(scales[0]);
      float y1 = x10 + float(y_offset) * (x11 - x10) / float(scales[0]);
      return y0 + float(x_offset) * (y1 - y0) / float(scales[1]);
    }`;return{...kb,output:{dims:l,type:t[0].type,textureType:0},shaderSource:m,variables:[{name:"scales",type:"int",arrayLength:n.scales.length,data:n.scales.map(b=>Math.ceil(b))}]}},Gl=(e,t)=>{if(!e||t.opset<9&&e.length!==1||t.opset>=9&&t.opset<11&&e.length!==2||t.opset>=11&&e.length<2)throw new Error("invalid inputs.");if(t.scales.length>0&&e[0].dims.length!==t.scales.length)throw new Error("Invalid input shape.");if(e[0].type==="string")throw new Error("Invalid input tensor types.")},Ji=(e,t,n)=>{if(n){for(let a of e)if(a<=0)throw new Error("Scale value should be greater than 0.")}else for(let a of e)if(a<1)throw new Error("Scale value should be greater than or equal to 1.");if((t==="linear"||t==="cubic")&&e.length!==2&&(e.length!==4||e[0]!==1||e[1]!==1))throw new Error(`'Linear' mode and 'Cubic' mode only support 2-D inputs ('Bilinear', 'Bicubic')         or 4-D inputs with the corresponding outermost 2 scale values being 1         in the ${n?"Resize":"Upsample"} opeartor.`)}}),Wl,Hl,Rb,zb,xP,TP,IP,SP,Mb=N(()=>{Ze(),Ae(),zn(),zr(),Ul(),Wl={name:"Resize",inputNames:["A"],inputTypes:[2]},Hl=(e,t,n)=>(Gl(t,n),[e.run({...Wl,cacheHint:n.cacheKey,get:()=>xP(e,t,n)},t)]),Rb=e=>Ro(e,10),zb=e=>Ro(e,11),xP=(e,t,n)=>{let a=se(e.session.backend.glContext.version),[u,d]=TP(t,n);if(u.every(_=>_===1)&&n.coordinateTransformMode!=="tf_crop_and_resize")return{...Wl,output:{dims:d,type:t[0].type,textureType:2},hasMain:!0,shaderSource:`void main() {
                    vec4 v = ${a.texture2D}(X, TexCoords);
                    ${a.output} = v;
                }`};let l=d.length;if(l<2)throw new Error(`output dimension should be at least 2, but got ${l}`);let p=d[l-2],o=d[l-1],r=t[0].dims;if(l!==r.length)throw new Error(`output dimension should match input ${r.length}, but got ${l}`);let i=r[l-2],s=r[l-1],c=u[l-2],h=u[l-1],m="";if(n.mode!=="linear")throw new Error(`resize (packed) does not support mode: '${n.mode}'`);switch(n.coordinateTransformMode){case"asymmetric":m=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        return vec4(coords) / scaleWHWH;
                    }
                `;break;case"half_pixel":m=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        return (vec4(coords) + 0.5) / scaleWHWH - 0.5;
                    }
                `;break;case"pytorch_half_pixel":m=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 fcoords = vec4(coords);
                        return vec4(
                            ${o}.0 > 1.0 ? (fcoords.x + 0.5) / scaleWHWH.x - 0.5 : 0.0,
                            ${p}.0 > 1.0 ? (fcoords.y + 0.5) / scaleWHWH.y - 0.5 : 0.0,
                            ${o}.0 > 1.0 ? (fcoords.z + 0.5) / scaleWHWH.z - 0.5 : 0.0,
                            ${p}.0 > 1.0 ? (fcoords.w + 0.5) / scaleWHWH.w - 0.5 : 0.0
                          );
                    }
                `;break;case"align_corners":m=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 resized = vec4(${o}.0 - 1.0, ${p}.0 - 1.0, ${o}.0 - 1.0,
                            ${p}.0 - 1.0);
                        vec4 original = vec4(${s}.0 - 1.0, ${i}.0 - 1.0, ${s}.0 - 1.0,
                            ${i}.0 - 1.0);
                        vec4 new_scale = original / resized;
                        return vec4(coords) * new_scale;
                    }
                `;break;default:throw new Error(`resize (packed) does not support coordinateTransformMode:                                 '${n.coordinateTransformMode}'`)}let b=bt(l),w=Mn(),x=`
            const vec2 inputWH = vec2(${i}.0, ${s}.0);
            const vec4 scaleWHWH = vec4(float(${c}), float(${h}), float(${c}), float(${h}));
            ${w}
            ${m}
            float getAValue(int x10, int r, int c, int d) {
                return getChannel(getA(x10, r, c, d), vec2(c, d));
            }
            void main() {
                ${b} rc = getOutputCoords();

                int batch = rc[0];
                int depth = rc[1];

                // retrieve the 4 coordinates that is used in the 4 packed output values.
                ivec4 coords = ivec4(rc.wz, rc.w + 1, rc.z + 1);

                // calculate the source index in fraction
                vec4 sourceFrac = getSourceFracIndex(coords);

                // get the lower and upper bound of the 4 values that will be packed into one texel.
                ivec4 x00 = ivec4(max(sourceFrac.xy, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.xy)));
                ivec4 x01 = ivec4(max(sourceFrac.xw, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.xw)));
                ivec4 x10 = ivec4(max(sourceFrac.zy, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.zy)));
                ivec4 x11 = ivec4(max(sourceFrac.zw, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.zw)));

                bool hasNextRow = rc.w < ${p-1};
                bool hasNextCol = rc.z < ${o-1};

                // pack x00, x01, x10, x11's top-left corner into one vec4 structure
                vec4 topLeft = vec4(
                    getAValue(batch, depth, x00.x, x00.y),
                    hasNextCol ? getAValue(batch, depth, x01.x, x01.y) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.x, x10.y) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.x, x11.y) : 0.0);

                // pack x00, x01, x10, x11's top-right corner into one vec4 structure
                vec4 topRight = vec4(
                    getAValue(batch, depth, x00.x, x00.w),
                    hasNextCol ? getAValue(batch, depth, x01.x, x01.w) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.x, x10.w) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.x, x11.w) : 0.0);

                // pack x00, x01, x10, x11's bottom-left corner into one vec4 structure
                vec4 bottomLeft = vec4(
                    getAValue(batch, depth, x00.z, x00.y),
                    hasNextCol ? getAValue(batch, depth, x01.z, x01.y) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.z, x10.y) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.z, x11.y) : 0.0);

                // pack x00, x01, x10, x11's bottom-right corner into one vec4 structure
                vec4 bottomRight = vec4(
                    getAValue(batch, depth, x00.z, x00.w),
                    hasNextCol ? getAValue(batch, depth, x01.z, x01.w) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.z, x10.w) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.z, x11.w) : 0.0);

                // calculate the interpolation fraction on u and v direction
                vec4 frac = vec4(sourceFrac) - floor(sourceFrac);
                vec4 clampFrac = clamp(frac, vec4(0.0), vec4(1.0));

                vec4 top = mix(topLeft, topRight, clampFrac.ywyw);
                vec4 bottom = mix(bottomLeft, bottomRight, clampFrac.ywyw);
                vec4 newValue = mix(top, bottom, clampFrac.xxzz);

                ${a.output} = vec4(newValue);
            }
        `;return{...Wl,output:{dims:d,type:t[0].type,textureType:2},hasMain:!0,shaderSource:x}},TP=(e,t)=>{let n=e[0].dims,a=t.scales,u;if(a.length===0){let l=e[t.scalesInputIdx];if(l&&l.size!==0){if(e[t.sizesInputIdx])throw new Error("Only one of scales or sizes must be provided as input.");a=IP(l,t.mode,t.isResize)}else{let p=e[t.sizesInputIdx];if(!p||p.size===0)throw new Error("Either scales or sizes MUST be provided as input.");u=Array.from(p.integerData),a=SP(u,n,t.mode,t.isResize)}}else if(e[t.sizesInputIdx])throw new Error("Only one of scales or sizes must be provided as input.");let d=u||n.map((l,p)=>Math.floor(l*a[p]));return[a,d]},IP=(e,t,n)=>{let a=Array.from(e.floatData);return Ji(a,t,n),a},SP=(e,t,n,a)=>{let u=t.length,d=new Array(u);for(let l=0,p=u;l<p;l++)if(t[l]===0){if(e[l]!==0)throw new Error("Input dim is zero but required output dim is non-zero.");d[l]=1}else d[l]=e[l]/t[l];return Ji(d,n,a),d}}),Bb,$P,Fb=N(()=>{Rr(),Bb=(e,t)=>($P(t),[new rt([t[0].dims.length],"int32",void 0,void 0,new Int32Array(t[0].dims))]),$P=e=>{if(!e||e.length!==1)throw new Error("Shape requires 1 input.")}}),ql,Vb,Gb,Ub,AP,Wb,OP,PP,Hb=N(()=>{lt(),Lo(),Le(),Ae(),ql={name:"Slice",inputNames:["A"],inputTypes:[0]},Vb=(e,t,n)=>(AP(t),[e.run({...ql,cacheHint:n.cacheKey,get:()=>Ub(e,t[0],n)},t)]),Gb=e=>{let t=e.attributes.getInts("starts"),n=e.attributes.getInts("ends"),a=e.attributes.getInts("axes",[]);return ve({starts:t,ends:n,axes:a})},Ub=(e,t,n)=>{let a=n.axes.length===0?t.dims.slice(0).map((i,s)=>s):n.axes,u=te.normalizeAxes(a,t.dims.length),d=n.starts.map((i,s)=>i>t.dims[u[s]]-1?t.dims[u[s]]:te.normalizeAxis(i,t.dims[u[s]])),l=n.ends.map((i,s)=>i>t.dims[u[s]]-1?t.dims[u[s]]:te.normalizeAxis(i,t.dims[u[s]])),p=t.dims.slice(),o=[];for(let i=0;i<u.length;i++)p[u[i]]=l[i]-d[i],d[i]>0&&o.push(`outputIdx[${u[i]}] += ${d[i]};`);let r=`
      float process(int outputIdx[${p.length}]) {
        ${o.join(`
      `)}
        return _A(outputIdx);
      }`;return{...ql,output:{dims:p,type:t.type,textureType:0},shaderSource:r}},AP=e=>{if(!e||e.length!==1)throw new Error("Slice requires 1 input.");if(mr.indexOf(e[0].type)===-1)throw new Error("Invalid input type.")},Wb=(e,t)=>{PP(t);let n=OP(e,t);return[e.run({...ql,cacheHint:n.cacheKey,get:()=>Ub(e,t[0],n)},[t[0]])]},OP=(e,t)=>{if(!e.session.isInitializer(t[1].dataId)||!e.session.isInitializer(t[2].dataId)||t.length>=4&&!e.session.isInitializer(t[3].dataId)||t.length>=5&&!e.session.isInitializer(t[4].dataId))throw new Error("dynamic slice attributes are not allowed");if(t.length>=5&&t[4].integerData.some(l=>l!==1))throw new Error("currently non-1 steps is not supported for Slice");let n=Array.from(t[1].integerData),a=Array.from(t[2].integerData),u=t.length>=4?Array.from(t[3].integerData):[],d=`${u};${n};${a}`;return{starts:n,ends:a,axes:u,cacheKey:d}},PP=e=>{if(!e||e.length<3||e.length>5)throw new Error("Invalid input number.");if(e[1].type!=="int32"||e[1].dims.length!==1)throw new Error("Invalid input type.");if(e[2].type!=="int32"||e[2].dims.length!==1)throw new Error("Invalid input type.");if(e.length>=4&&(e[3].type!=="int32"||e[3].dims.length!==1))throw new Error("Invalid input type.");if(e.length>=5&&(e[4].type!=="int32"||e[4].dims.length!==1))throw new Error("Invalid input type.")}}),qb,jb,Kb,Xb,Zb,Jb,Qb,Yb,EP,CP,DP,ey,ty=N(()=>{lt(),Le(),Ze(),Ae(),Ki(),qb={name:"SoftmaxComputeMax",inputNames:["A"],inputTypes:[0]},jb={name:"SoftmaxComputeScale",inputNames:["A","Max"],inputTypes:[0,0]},Kb={name:"SoftMax",inputNames:["A","Max","Norm"],inputTypes:[0,0,0]},Xb=(e,t,n)=>{ey(t);let a=t[0].dims.slice(),u=te.normalizeAxis(n.axis,a.length),d=te.sizeToDimension(a,u),l=te.sizeFromDimension(a,u);return Yb(e,t,n,d,l)},Zb=e=>ve({axis:e.attributes.getInt("axis",1)}),Jb=e=>ve({axis:e.attributes.getInt("axis",-1)}),Qb=(e,t,n)=>{ey(t);let a=t[0].dims.slice(),u=te.normalizeAxis(n.axis,a.length),d=a.length,l=u!==d-1,p=[],o=[],r=[],i;l&&(o=Array.from({length:d}).map((m,b)=>b),o[u]=d-1,o[d-1]=u,o.map(m=>p.push(a[m])),i=ve({perm:o}),r=Br(e,t,i));let s=l?te.sizeToDimension(p,d-1):te.sizeToDimension(a,d-1),c=l?te.sizeFromDimension(p,d-1):te.sizeFromDimension(a,d-1),h=Yb(e,l?r:t,n,s,c);return l?Br(e,h,i):h},Yb=(e,t,n,a,u)=>{let d=EP(e,t[0],a,u,[a]),l=e.run({...qb,cacheHint:n.cacheKey,get:()=>d},t),p=CP(e,t[0],a,u,d.output.dims,[a]),o=e.run({...jb,cacheHint:n.cacheKey,get:()=>p},[t[0],l]),r=DP(e,t[0],a,u,d.output.dims,p.output.dims);return[e.run({...Kb,cacheHint:n.cacheKey,get:()=>r},[t[0],l,o])]},EP=(e,t,n,a,u)=>{let[d,l]=e.calculateTextureWidthAndHeight(t.dims,0),p=u.length;if(n<1||a<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(u.length!==1)throw new Error("Dimensionality of the output should be 1");if(u[0]!==n)throw new Error("Shape of the output should be equal to logical row count");let o=se(e.session.backend.glContext.version),r=`
      float process(int[${p}] indices) {
        int logical_row_start_offset = indices[0] * ${a};

        float max = getColorAsFloat(${o.texture2D}(A, offsetToCoords(logical_row_start_offset, ${d},
        ${l} )));
        for(int i=1; i<${a}; ++i)
        {
          float current = getColorAsFloat(${o.texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${d}, ${l})));
          if(current > max)
          max = current;
        }

        return max;
      }`;return{...qb,output:{dims:u,type:t.type,textureType:0},shaderSource:r}},CP=(e,t,n,a,u,d)=>{let[l,p]=e.calculateTextureWidthAndHeight(t.dims,0),o=d.length;if(n<1||a<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(d.length!==1)throw new Error("Dimensionality of the output should be 1");if(d[0]!==n)throw new Error("Shape of the output should be equal to logical row count");if(u.length!==1)throw new Error("Dimensionality of the intermediate results should be 1");if(u[0]!==n)throw new Error("Shape of the intermediate results should be equal to logical row count");let r=se(e.session.backend.glContext.version),i=`
      float process(int[${o}] indices) {
        int logical_row_start_offset = indices[0] * ${a};

        float norm_factor = 0.0;
        float max = _Max(indices);
        for(int i=0; i<${a}; ++i)
        {
          norm_factor += exp(getColorAsFloat(${r.texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${l}, ${p}))) - max);
        }

        return norm_factor;
      }`;return{...jb,output:{dims:d,type:t.type,textureType:0},shaderSource:i}},DP=(e,t,n,a,u,d)=>{let[l,p]=e.calculateTextureWidthAndHeight(t.dims,0),o=t.dims.length;if(n<1||a<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(u.length!==1||d.length!==1)throw new Error("Dimensionality of the intermediate results should be 1");if(u[0]!==n||d[0]!==n)throw new Error("Shape of the intermediate results should be equal to logical row count");let r=`
      float process(int[${o}] indices) {

      // get offset of current logical tensor index from the 2-D texture coordinates (TexCoords)
      int offset = coordsToOffset(TexCoords, ${l}, ${p});

      //determine the logical row for this index
      int logical_row_index[1];
      logical_row_index[0] = offset / ${a};

      float norm_factor = _Norm(logical_row_index);

      // avoid possible division by 0
      // if norm_facor is 0, all elements are zero
      // if so, return 0
      if(norm_factor == 0.0)
        return 0.0;

      return exp(_A(indices) - _Max(logical_row_index)) / norm_factor;
    }`;return{...Kb,output:{dims:t.dims,type:t.type,textureType:0},shaderSource:r}},ey=e=>{if(!e||e.length!==1)throw new Error("Softmax requires 1 input.");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type")}}),ny,ry,oy,kP,NP,LP,iy=N(()=>{lt(),Le(),Ae(),ny={name:"Split",inputNames:["A"],inputTypes:[0]},ry=(e,t,n)=>{LP(t);let a=te.normalizeAxis(n.axis,t[0].dims.length),u=kP(e,t,a,n),d=[];for(let l=0;l<u;++l)d.push(e.run({...ny,cacheHint:`${n.cacheKey};${l}`,get:()=>NP(e,t[0],n,a,l)},t));return d},oy=e=>{let t=e.attributes.getInt("axis",0),n=e.attributes.getInts("split",[]),a=e.outputs.length;return ve({axis:t,split:n,numOutputs:a})},kP=(e,t,n,a)=>{let[,u]=Po.splitShape(t[0].dims,n,a.split,a.numOutputs);return u.length},NP=(e,t,n,a,u)=>{let[d,l]=Po.splitShape(t.dims,a,n.split,n.numOutputs),p=l[u],o=d[u],r=`
      float process(int indices[${o.length}]) {
        indices[${a}] += ${p};
        return _A(indices);
      }
    `;return{...ny,cacheHint:`${n.cacheKey}:${u}`,output:{dims:o,type:t.type,textureType:0},shaderSource:r}},LP=e=>{if(!e||e.length!==1)throw new Error("Split requires one input.");if(e[0].type!=="int8"&&e[0].type!=="uint8"&&e[0].type!=="int16"&&e[0].type!=="uint16"&&e[0].type!=="int32"&&e[0].type!=="uint32"&&e[0].type!=="float32"&&e[0].type!=="float64"&&e[0].type!=="bool")throw new Error("Invalid input type.")}}),jl,ay,sy,RP,zP,uy=N(()=>{Le(),jl=(e,t,n)=>{RP(t);let a=te.squeezeShape(t[0].dims,n);return[e.reshapeUnpacked(t[0],a)]},ay=(e,t)=>(zP(t),jl(e,[t[0]],Array.from(t[1].integerData))),sy=e=>e.attributes.getInts("axes"),RP=e=>{if(!e||e.length!==1)throw new Error("Squeeze requires 1 input.");if(e[0].type==="string")throw new Error("invalid input tensor types.")},zP=e=>{if(!e||e.length!==2)throw new Error("Squeeze requires 2 inputs.");if(e[1].type!=="int32")throw new Error("Invalid input type.")}}),ly,MP,BP,cy=N(()=>{Ze(),Ae(),ly=(e,t)=>{BP(t);let n={name:"Sum",inputNames:t.map((a,u)=>`X${u}`),inputTypes:new Array(t.length).fill(0)};return[e.run({...n,get:()=>MP(e,t,n)},t)]},MP=(e,t,n)=>{let a=se(e.session.backend.glContext.version),u=t[0].dims.slice(),d=`
      void main() {
        vec4 result = ${t.map((l,p)=>`${a.texture2D}(X${p},TexCoords)`).join(" + ")};
        ${a.output} = result;
      }
    `;return{...n,output:{dims:u,type:t[0].type,textureType:0},hasMain:!0,shaderSource:d}},BP=e=>{if(!e||e.length===0)throw new Error("Sum requires inputs.");let t=e[0].dims.length;for(let n=1;n<e.length;n++){if(t!==e[n].dims.length)throw new Error("Input shapes are mismatched.");for(let a=0;a<t;a++)if(e[0].dims[a]!==e[n].dims[a])throw new Error("Input shapes are not matched.")}if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type.");for(let n=1;n<e.length;n++)if(e[0].type!==e[n].type)throw new Error("Input types are not matched.")}}),dy,FP,VP,py=N(()=>{Lo(),Ae(),dy=(e,t)=>{VP(t);let n={name:"Tile",inputNames:["A"],inputTypes:[0]};return[e.run({...n,get:()=>FP(e,t,n)},t)]},FP=(e,t,n)=>{let a=t[0].dims.slice(),u=new Array(a.length),d=[];for(let o=0;o<a.length;o++)u[o]=a[o]*t[1].numberData[o],d.push(`inputIdx[${o}] = int(mod(float(outputIdx[${o}]), ${a[o]}.));`);let l=u.length,p=`
      float process(int outputIdx[${l}]) {
        int inputIdx[${l}];
        ${d.join(`
`)}
        return _A(inputIdx);
      }
    `;return{...n,output:{dims:u,type:t[0].type,textureType:0},shaderSource:p}},VP=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 input.");if(e[1].dims.length!==1)throw new Error("The second input shape must 1 dimension.");if(e[1].dims[0]!==e[0].dims.length)throw new Error("Invalid input shape.");if(mr.indexOf(e[0].type)===-1)throw new Error("Invalid input type.");if(e[1].type!=="int32"&&e[1].type!=="int16")throw new Error("Invalid repeat type.")}}),Kl,fy,hy,GP,UP,my=N(()=>{Le(),Kl=(e,t,n)=>{GP(t);let a=te.unsqueezeShape(t[0].dims,n);return[e.reshapeUnpacked(t[0],a)]},fy=(e,t)=>(UP(t),Kl(e,[t[0]],Array.from(t[1].integerData))),hy=e=>e.attributes.getInts("axes"),GP=e=>{if(!e||e.length!==1)throw new Error("Unsqueeze requires 1 input.");if(e[0].type==="string")throw new Error("invalid input tensor types.")},UP=e=>{if(!e||e.length!==2)throw new Error("Unsqueeze requires 2 inputs.");if(e[1].type!=="int32")throw new Error("Invalid input type.")}}),gy,by=N(()=>{Am(),Fm(),Um(),Xm(),Hi(),Dg(),Mg(),Vg(),Wg(),Kg(),Jg(),tb(),ib(),qi(),lb(),xb(),Eb(),Db(),Mb(),Fb(),Hb(),ty(),iy(),uy(),cy(),py(),Ki(),Cl(),my(),Ul(),gy=[["Abs","","6+",Zm],["Acos","","7+",Jm],["Add","","7+",Om],["And","","7+",Pm],["Asin","","7+",Qm],["Atan","","7+",Ym],["AveragePool","","7+",db,pb],["BatchNormalization","","7+",Sm,$m],["Cast","","6+",Vm,Gm],["Ceil","","6+",ng],["Clip","","6-10",Pl,eg],["Clip","","11+",tg],["Concat","","4+",qm,Km],["Conv","","1+",zl,Ml],["ConvTranspose","","1+",Eg,Cg],["Cos","","7+",rg],["Div","","7+",Em],["Dropout","","7+",El],["DepthToSpace","","1+",Rg,zg],["Equal","","7+",Cm],["Elu","","6+",og,ig],["Exp","","6+",ag],["Flatten","","1+",Bg,Fg],["Floor","","6+",sg],["FusedConv","com.microsoft","1+",zl,Ml],["Gather","","1+",Gg,Ug],["Gemm","","7-10",Bl,qg],["Gemm","","11+",Bl,jg],["GlobalAveragePool","","1+",hb,mb],["GlobalMaxPool","","1+",wb],["Greater","","7+",Dm],["Identity","","1+",El],["ImageScaler","","1+",Xg,Zg],["InstanceNormalization","","6+",Yg,eb],["LeakyRelu","","6+",ug,lg],["Less","","7+",km],["LRN","","1+",nb,rb],["Log","","6+",cg],["MatMul","","1+",Tg,Ig],["MaxPool","","1+",gb,bb],["Mul","","7+",Nm],["Neg","","6+",dg],["Not","","1+",pg],["Or","","7+",Lm],["Pad","","2-10",Fl,ab],["Pad","","11+",sb,ub],["Pow","","7+",Rm],["PRelu","","7+",zm],["ReduceLogSum","","1+",Ob,gr],["ReduceMax","","1+",Sb,gr],["ReduceMean","","1+",Ib,gr],["ReduceMin","","1+",$b,gr],["ReduceProd","","1+",Ab,gr],["ReduceSum","","1-12",Tb,gr],["ReduceSumSquare","","1+",Pb,gr],["Relu","","6+",fg],["Reshape","","5+",Cb],["Resize","","10",Hl,Rb],["Resize","","11+",Hl,zb],["Shape","","1+",Bb],["Sigmoid","","6+",hg],["Sin","","7+",mg],["Slice","","10+",Wb],["Slice","","1-9",Vb,Gb],["Softmax","","1-12",Xb,Zb],["Softmax","","13+",Qb,Jb],["Split","","2-12",ry,oy],["Sqrt","","6+",gg],["Squeeze","","1-12",jl,sy],["Squeeze","","13+",ay],["Sub","","7+",Mm],["Sum","","6+",ly],["Tan","","7+",bg],["Tanh","","6+",yg],["Tile","","6+",dy],["Transpose","","1+",Br,Ng],["Upsample","","7-8",Vl,Nb],["Upsample","","9",Vl,Lb],["Unsqueeze","","1-12",Kl,hy],["Unsqueeze","","13+",fy],["Xor","","7+",Bm]]});function _y(e){let t={},n;for(;(n=yy.exec(e))!==null;){let a=n[3].split(",").map(u=>{let d=u.trim().split(" ");return d&&d.length===2?{type:d[0],name:d[1]}:null}).filter(u=>u!==null);t[n[2]]={params:a,body:n[4]}}for(let a in t){let u=WP.replace("__FUNC__",a),d=new RegExp(u,"gm");for(;(n=d.exec(e))!==null;){let l=n[1],p=n[2],o=n[3].split(","),r=l?`${l} ${p};`:"",i=t[a].body,s="";t[a].params.forEach((h,m)=>{h&&(s+=`${h.type} ${h.name} = ${o[m]};
`)}),i=`${s}
 ${i}`,i=i.replace("return",`${p} = `);let c=`
      ${r}
      {
        ${i}
      }
      `;e=e.replace(n[0],c)}}return e=e.replace(yy,""),e}var yy,WP,wy=N(()=>{yy=/@inline[\s\n\r]+(\w+)[\s\n\r]+([0-9a-zA-Z_]+)\s*\(([^)]*)\)\s*{(([^}]|[\n\r])*)}/gm,WP="(\\w+)?\\s+([_0-9a-zA-Z]+)\\s+=\\s+__FUNC__\\((.*)\\)\\s*;"});function ao(e,t){let n=[],a=[];for(let u=0;u<e.length;++u)e[u]!==1&&(n.push(e[u]),a.push(u));return{newShape:n,keptDims:a}}function jP(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function vy(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}var Qi,Xl=N(()=>{Ct(),Le(),Qi=class{constructor(e){this.maxTextureSize=e}computeTextureWH(e,t){let n=this.computeTexture(e,t);return t&&t.isPacked&&(n[0]/=2,n[1]/=2),t&&t.reverseWH?[n[1],n[0]]:n}computeTexture(e,t){let n=t&&t.isPacked;if(e.length===0)return n?[2,2]:[1,1];let a=this.maxTextureSize;if(t&&t.breakAxis!==void 0){let l=t.breakAxis>=e.length?1:e.slice(t.breakAxis).reduce((o,r)=>o*r),p=t.breakAxis<=0?1:e.slice(0,t.breakAxis).reduce((o,r)=>o*r);if(l>a||p>a)ze.verbose("TextureLayout",`Given width/height preferences were unattainable: shape:${e}, breakAxis:${t.breakAxis}`);else return[l,p]}let u=e.slice(0);n&&(a=a*2,u=u.map((l,p)=>p>=u.length-2?u[p]%2===0?u[p]:u[p]+1:u[p]),u.length===1&&(u=[2,u[0]])),u.length!==2&&(u=ao(u).newShape);let d=jP(u);return u.length<=1&&d<=a?[1,d]:u.length===2&&u[0]<=a&&u[1]<=a?u:u.length===3&&u[0]*u[1]<=a&&u[2]<=a?[u[0]*u[1],u[2]]:u.length===3&&u[0]<=a&&u[1]*u[2]<=a?[u[0],u[1]*u[2]]:u.length===4&&u[0]*u[1]*u[2]<=a&&u[3]<=a?[u[0]*u[1]*u[2],u[3]]:u.length===4&&u[0]<=a&&u[1]*u[2]*u[3]<=a?[u[0],u[1]*u[2]*u[3]]:n?vy(d/4).map(l=>l*2):vy(d)}}}),Yi,xy=N(()=>{Le(),Qn(),Ze(),Xl(),zn(),Yi=class extends zt{constructor(e){super(e)}getFunctions(){return{...this.offsetToCoords(),...this.coordsToOffset(),...this.toVec(),...this.valueFrom(),...this.getCommonUtilFuncs(),...this.getInputsSamplingSnippets(),...this.getOutputSamplingSnippet()}}getCustomTypes(){return{}}offsetToCoords(){let e="offsetToCoords";return{offsetToCoords:new K(`
      vec2 ${e}(int offset, int width, int height) {
        int t = offset / width;
        int s = offset - t*width;
        vec2 coords = (vec2(s,t) + vec2(0.5,0.5)) / vec2(width, height);
        return coords;
      }
      `)}}coordsToOffset(){let e="coordsToOffset";return{coordsToOffset:new K(`
      int ${e}(vec2 coords, int width, int height) {
        float s = coords.s * float(width);
        float t = coords.t * float(height);
        int offset = int(t) * width + int(s);
        return offset;
      }
      `)}}getOutputSamplingSnippet(){let e=this.context.outputTextureLayout;return e.isPacked?this.getPackedOutputSamplingSnippet(e):this.getUnpackedOutputSamplingSnippet(e)}getPackedOutputSamplingSnippet(e){let t=e.unpackedShape,n=[e.width,e.height],a={},u="getOutputCoords";switch(t.length){case 0:a[u]=this.getOutputScalarCoords();break;case 1:a[u]=this.getOutputPacked1DCoords(t,n);break;case 2:a[u]=this.getOutputPacked2DCoords(t,n);break;case 3:a[u]=this.getOutputPacked3DCoords(t,n);break;default:a[u]=this.getOutputPackedNDCoords(t,n)}let d=`
      void setOutput(vec4 val) {
        ${se(this.context.glContext.version).output} = val;
      }
    `,l="floatTextureSetRGBA";return a[l]=new K(d),a}getUnpackedOutputSamplingSnippet(e){let t=e.unpackedShape,n=[e.width,e.height],a={},u="getOutputCoords";switch(t.length){case 0:a[u]=this.getOutputScalarCoords();break;case 1:a[u]=this.getOutputUnpacked1DCoords(t,n);break;case 2:a[u]=this.getOutputUnpacked2DCoords(t,n);break;case 3:a[u]=this.getOutputUnpacked3DCoords(t,n);break;case 4:a[u]=this.getOutputUnpacked4DCoords(t,n);break;case 5:a[u]=this.getOutputUnpacked5DCoords(t,n);break;case 6:a[u]=this.getOutputUnpacked6DCoords(t,n);break;default:throw new Error(`Unsupported output dimensionality: ${t.length}`)}let d=`
        void setOutput(float val) {
          ${se(this.context.glContext.version).output} = vec4(val, 0, 0, 0);
        }
    `,l="floatTextureSetR";return a[l]=new K(d),a}getOutputScalarCoords(){return new K(`
      int getOutputCoords() {
        return 0;
      }
    `)}getOutputPacked1DCoords(e,t){let n=t,a="";return n[0]===1?(a=`
          int getOutputCoords() {
            return 2 * int(TexCoords.y * ${n[1]}.0);
          }
        `,new K(a)):n[1]===1?(a=`
          int getOutputCoords() {
            return 2 * int(TexCoords.x * ${n[0]}.0);
          }
        `,new K(a)):(a=`
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                 vec2(${n[0]}, ${n[1]}));
          return 2 * (resTexRC.y * ${n[0]} + resTexRC.x);
        }
      `,new K(a))}getOutputPacked2DCoords(e,t){let n="";if(Dr.arraysEqual(e,t))return n=`
        ivec2 getOutputCoords() {
          return 2 * ivec2(TexCoords.xy * vec2(${t[0]}, ${t[1]}));
        }
      `,new K(n);let a=t,u=Math.ceil(e[1]/2);return n=`
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${a[0]}, ${a[1]}));

          int index = resTexRC.y * ${a[0]} + resTexRC.x;

          // reverse r and c order for packed texture
          int r = imod(index, ${u}) * 2;
          int c = 2 * (index / ${u});

          return ivec2(r, c);
        }
      `,new K(n)}getOutputPacked3DCoords(e,t){let n=[t[0],t[1]],a=Math.ceil(e[2]/2),u=a*Math.ceil(e[1]/2),d=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${n[0]}, ${n[1]}));
          int index = resTexRC.y * ${n[0]} + resTexRC.x;

          int b = index / ${u};
          index -= b * ${u};

          // reverse r and c order for packed texture
          int r = imod(index, ${a}) * 2;
          int c = 2 * (index / ${a});

          return ivec3(b, r, c);
        }
      `;return new K(d)}getOutputPackedNDCoords(e,t){let n=[t[0],t[1]],a=Math.ceil(e[e.length-1]/2),u=a*Math.ceil(e[e.length-2]/2),d=u,l="",p="b, r, c";for(let r=2;r<e.length-1;r++)d*=e[e.length-r-1],l=`
      int b${r} = index / ${d};
      index -= b${r} * ${d};
    `+l,p=`b${r}, `+p;let o=`
      ivec${e.length} getOutputCoords() {
        ivec2 resTexRC = ivec2(TexCoords.xy *
                              vec2(${n[0]}, ${n[1]}));
        int index = resTexRC.y * ${n[0]} + resTexRC.x;

        ${l}

        int b = index / ${u};
        index -= b * ${u};

        // reverse r and c order for packed texture
        int r = imod(index, ${a}) * 2;
        int c = 2 * (index / ${a});

        return ivec${e.length}(${p});
      }
    `;return new K(o)}getOutputUnpacked1DCoords(e,t){let n=`
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          return resTexRC.y * ${t[0]} + resTexRC.x;
        }
      `;return new K(n)}getOutputUnpacked2DCoords(e,t){let n=`
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          int r = index / ${e[1]};
          int c = index - r * ${e[1]};
          return ivec2(r, c);
        }
      `;return new K(n)}getOutputUnpacked3DCoords(e,t){let n="",a=e.length,u=null;a<2&&(u=[]),u=new Array(a-1),u[a-2]=e[a-1];for(let p=a-3;p>=0;--p)u[p]=u[p+1]*e[p+1];let d=["r","c","d"],l=u.map((p,o)=>{let r=`int ${d[o]} = index / ${p}`,i=o===u.length-1?`int ${d[o+1]} = index - ${d[o]} * ${p}`:`index -= ${d[o]} * ${p}`;return`${r}; ${i};`}).join("");return n=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${l}
          return ivec3(r, c, d);
        }
      `,new K(n)}getOutputUnpacked4DCoords(e,t){let n="",a=e.length,u=null;a<2&&(u=[]),u=new Array(a-1),u[a-2]=e[a-1];for(let p=a-3;p>=0;--p)u[p]=u[p+1]*e[p+1];let d=["r","c","d","d2"],l=u.map((p,o)=>{let r=`int ${d[o]} = index / ${p}`,i=o===u.length-1?`int ${d[o+1]} = index - ${d[o]} * ${p}`:`index -= ${d[o]} * ${p}`;return`${r}; ${i};`}).join("");return n=`
      ivec4 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${l}
          return ivec4(r, c, d, d2);
        }
      `,new K(n)}getOutputUnpacked5DCoords(e,t){let n="",a=e.length,u=null;a<2&&(u=[]),u=new Array(a-1),u[a-2]=e[a-1];for(let p=a-3;p>=0;--p)u[p]=u[p+1]*e[p+1];let d=["r","c","d","d2","d3"],l=u.map((p,o)=>{let r=`int ${d[o]} = index / ${p}`,i=o===u.length-1?`int ${d[o+1]} = index - ${d[o]} * ${p}`:`index -= ${d[o]} * ${p}`;return`${r}; ${i};`}).join("");return n=`
      ivec5 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${l}
          return ivec5(r, c, d, d2, d3);
        }
      `,new K(n)}getOutputUnpacked6DCoords(e,t){let n="",a=e.length,u=null;a<2&&(u=[]),u=new Array(a-1),u[a-2]=e[a-1];for(let p=a-3;p>=0;--p)u[p]=u[p+1]*e[p+1];let d=["r","c","d","d2","d3","d4"],l=u.map((p,o)=>{let r=`int ${d[o]} = index / ${p}`,i=o===u.length-1?`int ${d[o+1]} = index - ${d[o]} * ${p}`:`index -= ${d[o]} * ${p}`;return`${r}; ${i};`}).join("");return n=`
     ivec6 getOutputCoords() {
         ivec2 resTexRC = ivec2(TexCoords.xy *
                               vec2(${t[0]}, ${t[1]}));
         int index = resTexRC.y * ${t[0]} + resTexRC.x;
         ${l}
         return ivec6(r, c, d, d2, d3, d4);
       }
     `,new K(n)}getCommonUtilFuncs(){let e={},t="uvFromFlat";e[t]=new K(`
    vec2 uvFromFlat(int texNumR, int texNumC, int index) {
      int texC = index / texNumR;
      int texR = index - texC * texNumR;
      // TODO: swap texR, texC order in following function so row is corresponding to u and column is corresponding to
      //       v.
      return (vec2(texR, texC) + halfCR) / vec2(texNumR, texNumC);
    }
    `),t="packedUVfrom1D",e[t]=new K(`
      vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
        int texelIndex = index / 2;
        int texR = texelIndex / texNumC;
        int texC = texelIndex - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),t="packedUVfrom2D",e[t]=new K(`
      vec2 packedUVfrom2D(int texNumR, int texNumC, int texelsInLogicalRow, int row, int col) {
        int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
        int texR = texelIndex / texNumC;
        int texC = texelIndex - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),t="packedUVfrom3D",e[t]=new K(`
      vec2 packedUVfrom3D(int texNumR, int texNumC,
          int texelsInBatch, int texelsInLogicalRow, int b,
          int row, int col) {
        int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
        int texR = index / texNumC;
        int texC = index - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),t="sampleTexture";let n=se(this.context.glContext.version);return e[t]=new K(`
        float sampleTexture(sampler2D textureSampler, vec2 uv) {
            return ${n.texture2D}(textureSampler, uv).r;
        }`),e}getInputsSamplingSnippets(){let e={},t=this.context.outputTextureLayout;return this.context.programInfo.inputNames.forEach((n,a)=>{let u=this.context.inputTextureLayouts[a],d=Mi(n);u.isPacked?e[d]=this.getPackedSamplerFromInput(d,n,u):e[d]=this.getUnpackedSamplerFromInput(d,n,u);let l=lm(n);u.unpackedShape.length<=t.unpackedShape.length&&(u.isPacked?e[l]=this.getPackedSamplerAtOutputCoords(l,u,t,n):e[l]=this.getUnpackedSamplerAtOutputCoords(l,u,t,n))}),e}getPackedSamplerAtOutputCoords(e,t,n,a){let u=t.unpackedShape,d=n.unpackedShape,l=Mi(a),p=u.length,o=d.length,r=gt.getBroadcastDims(u,d),i=bt(o),s=o-p,c,h=Kt();p===0?c="":o<2&&r.length>=1?c="coords = 0;":c=r.map(I=>`coords.${h[I+s]} = 0;`).join(`
`);let m="";o<2&&p>0?m="coords":m=u.map((I,O)=>`coords.${h[O+s]}`).join(", ");let b="return outputValue;",w=te.size(u)===1,x=te.size(d)===1;if(p===1&&!w&&!x)b=`
        return vec4(outputValue.xy, outputValue.xy);
      `;else if(w&&!x)o===1?b=`
          return vec4(outputValue.x, outputValue.x, 0., 0.);
        `:b=`
          return vec4(outputValue.x);
        `;else if(r.length){let I=p-2,O=p-1;r.indexOf(I)>-1&&r.indexOf(O)>-1?b="return vec4(outputValue.x);":r.indexOf(I)>-1?b="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":r.indexOf(O)>-1&&(b="return vec4(outputValue.xx, outputValue.zz);")}let _=`
        int lastDim = coords.${h[o-1]};
        coords.${h[o-1]} = coords.${h[o-2]};
        coords.${h[o-2]} = lastDim;
      `,S=`
      vec4 ${e}() {
        ${i} coords = getOutputCoords();
        ${_}
        ${c}
        vec4 outputValue = ${l}(${m});
        ${b}
      }
    `;return new K(S,["coordinates.getOutputCoords"])}getUnpackedSamplerAtOutputCoords(e,t,n,a){let u=[n.width,n.height],d=[t.width,t.height],l=t.unpackedShape.length,p=n.unpackedShape.length,o=t.unpackedShape,r=n.unpackedShape,i=Mi(a);if(l===p&&Dr.arraysEqual(d,u)){let _=`
          float ${e}() {
            return sampleTexture(${a}, TexCoords);
          }
        `;return new K(_,["coordinates.sampleTexture"])}let s=bt(p),c=gt.getBroadcastDims(o,r),h=p-l,m,b=Kt();l===0?m="":p<2&&c.length>=1?m="coords = 0;":m=c.map(_=>`coords.${b[_+h]} = 0;`).join(`
`);let w="";p<2&&l>0?w="coords":w=t.unpackedShape.map((_,S)=>`coords.${b[S+h]}`).join(", ");let x=`
        float ${e}() {
          ${s} coords = getOutputCoords();
          ${m}
          return ${i}(${w});
        }
      `;return new K(x,["coordinates.getOutputCoords"])}getPackedSamplerFromInput(e,t,n){switch(n.unpackedShape.length){case 0:return this.getPackedSamplerScalar(e,t);case 1:return this.getPackedSampler1D(e,t,n);case 2:return this.getPackedSampler2D(e,t,n);case 3:return this.getPackedSampler3D(e,t,n);default:return this.getPackedSamplerND(e,t,n)}}getUnpackedSamplerFromInput(e,t,n){let a=n.unpackedShape;switch(a.length){case 0:return this.getUnpackedSamplerScalar(e,t,n);case 1:return this.getUnpackedSampler1D(e,t,n);case 2:return this.getUnpackedSampler2D(e,t,n);case 3:return this.getUnpackedSampler3D(e,t,n);case 4:return this.getUnpackedSampler4D(e,t,n);case 5:return this.getUnpackedSampler5D(e,t,n);case 6:return this.getUnpackedSampler6D(e,t,n);default:throw new Error(`Unsupported dimension ${a.length}-D`)}}getPackedSamplerScalar(e,t){let n=se(this.context.glContext.version),a=`
          vec4 ${e}() {
            return ${n.texture2D}(${t}, halfCR);
          }
        `;return new K(a)}getPackedSampler1D(e,t,n){let a=[n.width,n.height],u=[a[1],a[0]],d=se(this.context.glContext.version),l=`vec4 ${e}(int index) {
      vec2 uv = packedUVfrom1D(
      ${u[0]}, ${u[1]}, index);
      return ${d.texture2D}(${t}, uv);
    }`;return new K(l,["coordinates.packedUVfrom1D"])}getPackedSampler2D(e,t,n){let a=n.unpackedShape,u=[n.width,n.height],d=se(this.context.glContext.version),l=u[0],p=u[1];if(u!=null&&Dr.arraysEqual(a,u)){let s=`vec4 ${e}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${p}.0, ${l}.0);
        return ${d.texture2D}(${t}, uv);
      }`;return new K(s)}let o=u,r=Math.ceil(a[1]/2),i=`vec4 ${e}(int row, int col) {
      vec2 uv = packedUVfrom2D(${o[1]}, ${o[0]}, ${r}, row, col);
      return ${d.texture2D}(${t}, uv);
    }`;return new K(i,["coordinates.packedUVfrom2D"])}getPackedSampler3D(e,t,n){let a=n.unpackedShape,u=[n.width,n.height],d=[u[0],u[1]],l=se(this.context.glContext.version);if(a[0]===1){let c=a.slice(1),h=[1,2],m=to(a,c),b=["b","row","col"],w=JSON.parse(JSON.stringify(n));w.unpackedShape=m;let x=this.getPackedSamplerFromInput(e,t,w),_=`${x.routineBody}
      vec4 ${e}(int b, int row, int col) {
        return ${e}(${no(b,h)});
      } `;return new K(_,x.dependencies)}let p=d[0],o=d[1],r=Math.ceil(a[2]/2),i=r*Math.ceil(a[1]/2),s=`vec4 ${e}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${o}, ${p}, ${i}, ${r}, b, row, col);
      return ${l.texture2D}(${t}, uv);}`;return new K(s,["coordinates.packedUVfrom3D"])}getPackedSamplerND(e,t,n){let a=n.unpackedShape,u=a.length,d=[n.width,n.height],l=se(this.context.glContext.version),p=[d[0],d[1]],o=p[1],r=p[0],i=Math.ceil(a[u-1]/2),s=i*Math.ceil(a[u-2]/2),c="int b, int row, int col",h=`b * ${s} + (row / 2) * ${i} + (col / 2)`;for(let b=2;b<u-1;b++)c=`int b${b}, `+c,s*=a[u-b-1],h=`b${b} * ${s} + `+h;let m=`vec4 ${e}(${c}) {
      int index = ${h};
      int texR = index / ${r};
      int texC = index - texR * ${r};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}, ${o});
      return ${l.texture2D}(${t}, uv);
    }`;return new K(m)}getUnpackedSamplerScalar(e,t,n){let[a,u]=[n.width,n.height];if(a===1&&u===1){let l=`
          float ${e}() {
            return sampleTexture(${t}, halfCR);
          }
        `;return new K(l,["coordinates.sampleTexture"])}let d=`
        float ${e}() {
          int offset_${t} = coordsToOffset(TexCoords, ${a}, ${u});
          vec2 uv = uvFromFlat(${a}, ${u}, offset_${t});
          return sampleTexture(${t}, uv);
        }
      `;return new K(d,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler1D(e,t,n){let a=n.width,u=n.height;if(u===1&&a===1){let l=`
        float ${e}(int index) {
          return sampleTexture(${t}, halfCR);
        }
      `;return new K(l,["coordinates.sampleTexture"])}if(u===1){let l=`
          float ${e}(int index) {
            vec2 uv = vec2((float(index) + 0.5) / ${a}.0, 0.5);
            return sampleTexture(${t}, uv);
          }
        `;return new K(l,["coordinates.sampleTexture"])}if(a===1){let l=`
          float ${e}(int index) {
            vec2 uv = vec2(0.5, (float(index) + 0.5) / ${u}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new K(l,["coordinates.sampleTexture"])}let d=`
        float ${e}(int index) {
          vec2 uv = uvFromFlat(${a}, ${u}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new K(d,["coordinates.uvFromFlat","coordinates.sampleTexture"])}getUnpackedSampler2D(e,t,n){let a=n.unpackedShape,u=[n.height,n.width];if(u!=null&&Dr.arraysEqual(a,u)){let s=u[1],c=u[0],h=`
          float ${e}(int row, int col) {
            vec2 uv = (vec2(row, col) + halfCR) / vec2(${s}.0, ${c}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new K(h,["coordinates.sampleTexture"])}let{newShape:d,keptDims:l}=ao(a),p=d;if(p.length<a.length){let s=to(a,p),c=JSON.parse(JSON.stringify(n));c.unpackedShape=s;let h=["col","row"],m=`
          ${this.getUnpackedSamplerFromInput(e,t,c).routineBody}
          float ${e}(int row, int col) {
            return ${e}(${no(h,l)});
          }
        `;return new K(m,["coordinates.sampleTexture"])}let o=u[1],r=u[0];if(r===1){let s=`
          float ${e}(int row, int col) {
            int offset_${t} = coordsToOffset(TexCoords, ${o}, ${r});
            float index = dot(vec3(row, col, offset_${t}), vec3(${a[1]}, 1, 1));
            vec2 uv = vec2(0.5, (index + 0.5) / ${o}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new K(s,["coordinates.sampleTexture","coordinates.coordsToOffset"])}if(o===1){let s=`
          float ${e}(int row, int col) {
            int offset_${t} = coordsToOffset(TexCoords, ${o}, ${r});
            float index = dot(vec3(row, col, offset_${t}), vec3(${a[1]}, 1, 1));
            vec2 uv = vec2((index + 0.5) / ${r}.0, 0.5);
            return sampleTexture(${t}, uv);
          }
        `;return new K(s,["coordinates.sampleTexture","coordinates.coordsToOffset"])}let i=`
        float ${e}(int row, int col) {
          int index = col * ${a[1]} + row;
          vec2 uv = uvFromFlat(${o}, ${r}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new K(i,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler3D(e,t,n){let a=n.unpackedShape,u=a[1]*a[2],d=a[2],{newShape:l,keptDims:p}=ao(a),o=l;if(o.length<a.length){let c=to(a,o),h=["batch","col","row"],m=JSON.parse(JSON.stringify(n));m.unpackedShape=c;let b=this.getUnpackedSamplerFromInput(e,t,m),w=p.reverse(),x=`
          ${b.routineBody}
          float ${e}(int batch, int row, int col) {
            return ${e}(${no(h,w)});
          }
        `;return new K(x,b.dependencies)}let r=n.width,i=n.height,s=`
          float ${e}(int depth, int row, int col) {
            // Explicitly use integer operations as dot() only works on floats.
            int index = depth * ${u} + col * ${d} + row;
            vec2 uv = uvFromFlat(${r}, ${i}, index);
            return sampleTexture(${t}, uv);
          }
      `;return new K(s,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler4D(e,t,n){let a=n.unpackedShape,u=a[3],d=a[2]*u,l=a[1]*d,p=n.width,o=n.height,r=`
        float ${e}(int row, int col, int depth, int depth2) {
          int index = row * ${l} + col * ${d} +
              depth2 * ${u} + depth;
          vec2 uv = uvFromFlat(${p}, ${o}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new K(r,["coordinates.uvFromFlat","coordinates.sampleTexture"])}getUnpackedSampler5D(e,t,n){let a=n.unpackedShape,u=a[4],d=a[3]*u,l=a[2]*d,p=a[1]*l,{newShape:o,keptDims:r}=ao(a);if(o.length<a.length){let h=to(a,o),m=["row","col","depth","depth2","depth3"],b=JSON.parse(JSON.stringify(n));b.unpackedShape=h;let w=`
          ${this.getUnpackedSamplerFromInput(e,t,b).routineBody}
          float ${e}(int row, int col, int depth, int depth2, int depth3) {
            return ${e}(${no(m,r)});
          }
        `;return new K(w,["coordinates.sampleTexture","coordinates.uvFromFlat"])}let i=n.width,s=n.height,c=`
        float ${e}(int row, int col, int depth, int depth2, int depth3) {
          int index = row * ${p} + col * ${l} + depth * ${d} +
          depth3 * ${u} + depth2;
          vec2 uv = uvFromFlat(${i}, ${s}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new K(c,["coordinates.sampleTexture","coordinates.uvFromFlat"])}getUnpackedSampler6D(e,t,n){let a=n.unpackedShape,u=a[5],d=a[4]*u,l=a[3]*d,p=a[2]*l,o=a[1]*p,{newShape:r,keptDims:i}=ao(a);if(r.length<a.length){let m=to(a,r),b=["row","col","depth","depth2","depth3","depth4"],w=JSON.parse(JSON.stringify(n));w.unpackedShape=m;let x=`
            ${this.getUnpackedSamplerFromInput(e,t,w).routineBody}
            float ${e}(int row, int col, int depth,
              int depth2, int depth3, int depth4) {
              return ${e}(${no(b,i)});
            }
          `;return new K(x,["coordinates.sampleTexture","coordinates.uvFromFlat"])}let s=n.width,c=n.height,h=`
          float ${e}(int row, int col, int depth,
            int depth2, int depth3, int depth4) {
            int index = row * ${o} + col * ${p} + depth * ${l} +
            depth2 * ${d} + depth3 * ${u} + depth4;
            vec2 uv = uvFromFlat(${s}, ${c}, index);
            return sampleTexture(${t}, uv);
          }
        `;return new K(h,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}toVec(){let e=this.context.outputTextureLayout,t=e.shape.length,n=e.strides,a=e.width,u=e.height,d=[];for(let p=0;p<t-1;++p)d.push(`
        c[${p}] = offset / ${n[p]};`),d.push(`
        offset -= c[${p}] * ${n[p]};`);d.push(`
        c[${t-1}] = offset;`);let l=`
      void toVec(vec2 texCoords, out int c[${t}]) {
        int offset = coordsToOffset(texCoords, ${a}, ${u});
        ${d.join("")}
      }
      void toVec(int offset, out int c[${t}]) {
        ${d.join("")}
      }
    `;return{toVec:new K(l,["coordinates.coordsToOffset"])}}valueFrom(){let e={};return this.context.programInfo.inputNames.forEach((t,n)=>{let a=this.context.inputTextureLayouts[n],u=(a.unpackedShape.length>0?a.unpackedShape:a.shape).length,d=`_${t}`;e[d]=new K(this.getValueFromSingle(t,u,a.width,a.height,!1),[`shapeUtils.indicesToOffset${d}`,"coordinates.offsetToCoords","fragcolor.getColorAsFloat"]),d=d+"_T",e[d]=new K(this.getValueFromSingle(t,u,a.width,a.height,!0),[`shapeUtils.indicesToOffset${d}`,"coordinates.offsetToCoords","fragcolor.getColorAsFloat"])}),e}getValueFromSingle(e,t,n,a,u){let d=`_${e}`;u&&(d=d+"_T");let l=se(this.context.glContext.version);return`
        float ${d}(int m[${t}]) {
          int offset = indicesToOffset${d}(m);
          vec2 coords = offsetToCoords(offset, ${n}, ${a});
          float value = getColorAsFloat(${l.texture2D}(${e}, coords));
          return value;
        }
        `}getPackedValueFrom(e,t,n,a,u){let d=`_${e}_Pack`;u&&(d=d+"_T");let l=se(this.context.glContext.version);return`
        vec4 ${d}(int m[${t}]) {
          int offset = indicesToOffset_${e}(m);
          vec2 coords = offsetToCoords(offset, ${n}, ${a});
          return ${l.texture2D}(${e}, coords);
        }
        `}}}),ea,Ty=N(()=>{Qn(),ea=class Di extends zt{constructor(t){super(t)}getFunctions(){return{...this.encodeFloat32(),...this.decodeFloat32()}}getCustomTypes(){return{}}encodeFloat32(){return{encode:new K(`highp vec4 encode(highp float f) {
        return vec4(f, 0.0, 0.0, 0.0);
      }
        `)}}decodeFloat32(){return{decode:new K(`highp float decode(highp vec4 rgba) {
        return rgba.r;
      }
        `)}}encodeUint8(){let t=Di.isLittleEndian()?"rgba.rgba=rgba.abgr;":"";return{encode:new K(`
      highp vec4 encode(highp float f) {
        highp float F = abs(f);
        highp float Sign = step(0.0,-f);
        highp float Exponent = floor(log2(F));
        highp float Mantissa = (exp2(- Exponent) * F);
        Exponent = floor(log2(F) + 127.0) + floor(log2(Mantissa));
        highp vec4 rgba;
        rgba[0] = 128.0 * Sign  + floor(Exponent*exp2(-1.0));
        rgba[1] = 128.0 * mod(Exponent,2.0) + mod(floor(Mantissa*128.0),128.0);
        rgba[2] = floor(mod(floor(Mantissa*exp2(23.0 -8.0)),exp2(8.0)));
        rgba[3] = floor(exp2(23.0)*mod(Mantissa,exp2(-15.0)));
        ${t}
        rgba = rgba / 255.0; // values need to be normalized to [0,1]
        return rgba;
    }
        `)}}decodeUint8(){let t=Di.isLittleEndian()?"rgba.rgba=rgba.abgr;":"";return{decode:new K(`
        highp float decode(highp vec4 rgba) {
          rgba = rgba * 255.0; // values need to be de-normalized from [0,1] to [0,255]
          ${t}
          highp float Sign = 1.0 - step(128.0,rgba[0])*2.0;
          highp float Exponent = 2.0 * mod(rgba[0],128.0) + step(128.0,rgba[1]) - 127.0;
          highp float Mantissa = mod(rgba[1],128.0)*65536.0 + rgba[2]*256.0 +rgba[3] + float(0x800000);
          highp float Result =  Sign * exp2(Exponent) * (Mantissa * exp2(-23.0 ));
          return Result;
      }
        `)}}static isLittleEndian(){let t=new ArrayBuffer(4),n=new Uint32Array(t),a=new Uint8Array(t);if(n[0]=3735928559,a[0]===239)return!0;if(a[0]===222)return!1;throw new Error("unknown endianness")}}}),ta,Iy=N(()=>{Qn(),Ze(),ta=class extends zt{constructor(e){super(e)}getFunctions(){return{...this.setFragColor(),...this.getColorAsFloat()}}getCustomTypes(){return{}}setFragColor(){let e=se(this.context.glContext.version);return{setFragColor:new K(`
        void setFragColor(float value) {
            ${e.output} = encode(value);
        }
        `,["encoding.encode"])}}getColorAsFloat(){return{getColorAsFloat:new K(`
        float getColorAsFloat(vec4 color) {
            return decode(color);
        }
        `,["encoding.decode"])}}}}),na,Sy=N(()=>{Qn(),na=class on extends zt{constructor(t){super(t)}getFunctions(){return{...this.bcastIndex(),...this.bcastMatmulIndex(),...this.offsetToIndices(),...this.indicesToOffset(),...this.incrementIndices()}}getCustomTypes(){return{}}bcastIndex(){let t=this.context.outputTextureLayout.shape.length,n={};return this.context.programInfo.inputNames.forEach((a,u)=>{let d=this.context.inputTextureLayouts[u].unpackedShape;if(d.length<=t){let l=d.length,p=t-l,o=`bcastIndices_${a}`,r="";for(let s=0;s<l;++s)r+=`
          realIndices[${s}] = int( mod(float(bcastedIndices[${p+s}]), ${d[s]}.0) );
          `;let i=`
        void ${o} (int bcastedIndices[${t}], out int realIndices[${l}]) {
          ${r}
        }
        `;n[o]=new K(i)}}),n}bcastMatmulIndex(){let t=this.context.outputTextureLayout.shape.length,n={};return this.context.programInfo.inputNames.forEach((a,u)=>{let d=this.context.inputTextureLayouts[u].shape;if(!(d.length<2||d.length>t)){let l=d.length,p=t-l,o=`bcastMatmulIndices_${a}`,r="";for(let s=0;s<l-2;++s)r+=`
          realIndices[${s}] = int( mod(float(bcastedIndices[${p+s}]), ${d[s]}.0) );
          `;let i=`
        void ${o}(int bcastedIndices[${t}], out int realIndices[${l}]) {
          ${r}
          realIndices[${l-1}] = bcastedIndices[${t-1}];
          realIndices[${l-2}] = bcastedIndices[${t-2}];
        }
        `;n[o]=new K(i)}}),n}indicesToOffset(){let t={};return this.context.programInfo.inputNames.forEach((n,a)=>{let u=this.context.inputTextureLayouts[a].shape,d=this.context.inputTextureLayouts[a].strides,l=u.length,p=`indicesToOffset_${n}`;t[p]=new K(on.indexToOffsetSingle(p,l,d)),p=`indicesToOffset_${n}_T`,t[p]=new K(on.indexToOffsetSingle(p,l,d.slice().reverse()))}),t}static indexToOffsetSingle(t,n,a){let u="";for(let d=n-1;d>=0;--d)u+=`
        offset += indices[${d}] * ${a[d]};
        `;return`
      int ${t}(int indices[${n}]) {
        int offset = 0;
        ${u}
        return offset;
      }
      `}offsetToIndices(){let t={};return this.context.programInfo.inputNames.forEach((n,a)=>{let u=this.context.inputTextureLayouts[a].shape,d=this.context.inputTextureLayouts[a].strides,l=u.length,p=`offsetToIndices_${n}`;t[p]=new K(on.offsetToIndicesSingle(p,l,d)),p=`offsetToIndices_${n}_T`,t[p]=new K(on.offsetToIndicesSingle(p,l,d.slice().reverse()))}),t}static offsetToIndicesSingle(t,n,a){let u=[];for(let d=0;d<n-1;++d)u.push(`
      indices[${d}] = offset / ${a[d]};`),u.push(`
        offset -= indices[${d}] * ${a[d]};`);return u.push(`
      indices[${n-1}] = offset;`),`
      void ${t}(int offset, out int indices[${n}]) {
        ${u.join("")}
      }
      `}incrementIndices(){let t={};return this.context.programInfo.inputNames.forEach((n,a)=>{let u=this.context.inputTextureLayouts[a].shape,d=u.length,l=`incrementIndices_${n}`,p="";for(let r=0;r<d;++r)p+=`
        shape[${r}] = ${u[r]};`;let o=`
        void ${l}(int axis, out int indices[${d}]) {
          int shape[${d}];
          ${p};
          for(int i = ${d} -1 ; i >= 0; --i) {
            if(i > axis) continue;
            indices[i] += 1;
            if(indices[i] < shape[i]) {
              break;
            }
            indices[i] = 0;
          }
        }
        `;t[l]=new K(o)}),t}}}),ra,$y=N(()=>{Qn(),ra=class extends zt{constructor(e){super(e)}getCustomTypes(){return{}}getFunctions(){return{...this.binaryVecFunctions(),...this.copyVec(),...this.setVecItem(),...this.getVecItem()}}binaryVecFunctions(){let e=this.context.outputTextureLayout.shape.length,t={add:"+=",sub:"-=",mul:"*=",div:"/="},n={};for(let a in t){let u=`${a}Vec`,d="";for(let p=0;p<e;++p)d+=`
          dest[${p}] ${t[a]} src[${p}];
          `;let l=`
        void ${u}(int src[${e}], out int dest[${e}]) {
          ${d}
        }
        `;n[u]=new K(l)}return n}copyVec(){let e=this.context.outputTextureLayout.shape.length,t="";for(let a=0;a<e;++a)t+=`
        dest[${a}] = src[${a}];
        `;let n=`
      void copyVec(int src[${e}], out int dest[${e}]) {
        ${t}
      }
      `;return{copyVec:new K(n)}}setVecItem(){let e=this.context.outputTextureLayout.shape.length,t=`
        if(index < 0)
            index =${e} + index;
        if (index == 0)
            m[0] = value;
        `;for(let a=1;a<e-1;++a)t+=`
        else if (index == ${a})
            m[${a}] = value;
            `;t+=`
        else
            m[${e-1}] = value;
        `;let n=`
      void setVecItem(out int m[${e}], int index, int value) {
        ${t}
      }
        `;return{setVecItem:new K(n)}}getVecItem(){let e=this.context.outputTextureLayout.shape.length,t=`
        if(index < 0)
            index = ${e} + index;
        if (index == 0)
            return m[0];
      `;for(let a=1;a<e-1;++a)t+=`
        else if (index == ${a})
            return m[${a}];
      `;t+=`
        else
            return m[${e-1}];
        `;let n=`
      int getVecItem(int m[${e}], int index) {
        ${t}
      }
    `;return{getVecItem:new K(n)}}}}),Zl,Ay=N(()=>{xy(),Ty(),Iy(),Sy(),$y(),Zl={encoding:ea,fragcolor:ta,vec:ra,shapeUtils:na,coordinates:Yi}}),oa,Oy=N(()=>{Qn(),wy(),Ay(),Ze(),oa=class{constructor(e,t,n,a){this.libs={},this.glslLibRoutineDependencyGraph={},this.context=new Gi(e,t,n,a),Object.keys(Zl).forEach(d=>{let l=new Zl[d](this.context);this.libs[d]=l});let u=this.glslLibRoutineDependencyGraph;for(let d in this.libs){let l=this.libs[d].getFunctions();for(let p in l){let o=d+"."+p,r;u[o]?(r=u[o],r.routineBody=l[p].routineBody):(r=new No(o,l[p].routineBody),u[o]=r);let i=l[p].dependencies;if(i)for(let s=0;s<i.length;++s)if(u[i[s]])r.addDependency(u[i[s]]);else{let c=new No(i[s]);u[i[s]]=c,r.addDependency(c)}}}}preprocess(){let e=this.context.programInfo,t=e.shaderSource;return this.context.programInfo.hasMain||(t=`${t}
      ${um(this.context.glContext.version,this.context.outputTextureLayout.shape.length)}`),t=_y(t),`${sm(this.context.glContext.version)}
    ${this.getUniforms(e.inputNames,e.variables)}
    ${this.getImports(t)}
    ${t}`}getImports(e){let t=this.selectGlslLibRoutinesToBeIncluded(e);if(t.length===0)return"";let n="";for(let a=0;a<t.length;++a)if(t[a].routineBody)n+=t[a].routineBody+`
`;else throw new Error(`Missing body for the Glsl Library routine: ${t[a].name}`);return n}selectGlslLibRoutinesToBeIncluded(e){let t=[];return Object.keys(this.glslLibRoutineDependencyGraph).forEach(n=>{let a=n.split(".")[1];e.indexOf(a)!==-1&&t.push(this.glslLibRoutineDependencyGraph[n])}),Ui.returnOrderedNodes(t)}getUniforms(e,t){let n=[];if(e)for(let a of e)n.push(`uniform sampler2D ${a};`);if(t)for(let a of t)n.push(`uniform ${a.type} ${a.name}${a.arrayLength?`[${a.arrayLength}]`:""};`);return n.join(`
`)}}}),ia,Py=N(()=>{pt(),Ct(),Oy(),Ze(),ia=class{constructor(e,t,n){this.profiler=e,this.glContext=t,this.textureLayoutStrategy=n,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n){this.profiler.event("op",`ProgramManager.run ${e.programInfo.name??"unknown kernel"}`,()=>{let a=this.glContext.gl,u=e.program;a.useProgram(u);try{this.bindOutput(n),this.attributesBound||this.bindAttributes(e.attribLocations),this.bindUniforms(e.uniformLocations,e.programInfo.variables??[],t)}catch(d){throw ze.error("ProgramManager",e.programInfo.shaderSource),d}this.profiler.event("backend","GlContext.draw()",()=>{this.glContext.draw()})},this.glContext)}dispose(){this.vertexShader&&this.glContext.deleteShader(this.vertexShader),this.repo.forEach(e=>this.glContext.deleteProgram(e.program))}build(e,t,n){return this.profiler.event("backend","ProgramManager.build",()=>{let a=new oa(this.glContext,e,t,n),u=a.preprocess(),d=this.compile(u);return{programInfo:e,program:d,uniformLocations:this.getUniformLocations(d,a.context.programInfo.inputNames,a.context.programInfo.variables),attribLocations:this.getAttribLocations(d)}})}compile(e){if(!this.vertexShader){ze.verbose("ProrgramManager","Compiling and caching Vertex shader for the first time");let a=am(this.glContext.version);this.vertexShader=this.glContext.compileShader(a,this.glContext.gl.VERTEX_SHADER)}pe.debug&&ze.verbose("ProrgramManager",`FragShader:
${e}
`);let t=this.glContext.compileShader(e,this.glContext.gl.FRAGMENT_SHADER),n=this.glContext.createProgram(this.vertexShader,t);return this.glContext.deleteShader(t),n}bindOutput(e){let t=e.width,n=e.height;ze.verbose("ProrgramManager",`Binding output texture to Framebuffer: w/h=${t}/${n}, shape=${e.shape}, type=${e.tensor.type}`),this.glContext.attachFramebuffer(e.texture,t,n)}bindAttributes(e){let t=e.position,n=e.textureCoord;this.glContext.setVertexAttributes(t,n),this.attributesBound=!0}bindUniforms(e,t,n){let a=this.glContext.gl,u=0;for(let{name:d,type:l,location:p,arrayLength:o}of e){let r=t.find(i=>i.name===d)?.data;if(l!=="sampler2D"&&!r)throw new Error(`variable '${d}' does not have data defined in program info`);switch(l){case"sampler2D":this.bindTexture(n[u],p,u),u++;break;case"float":o?a.uniform1fv(p,r):a.uniform1f(p,r);break;case"int":o?a.uniform1iv(p,r):a.uniform1i(p,r);break;default:throw new Error(`Uniform not implemented: ${l}`)}}}bindTexture(e,t,n){this.glContext.bindTextureToUniform(e.texture,n,t)}getAttribLocations(e){return{position:this.getAttribLocation(e,"position"),textureCoord:this.getAttribLocation(e,"textureCoord")}}getUniformLocations(e,t,n){let a=[];if(t)for(let u of t)a.push({name:u,type:"sampler2D",location:this.getUniformLocation(e,u)});if(n)for(let u of n)a.push({...u,location:this.getUniformLocation(e,u.name)});return a}getUniformLocation(e,t){let n=this.glContext.gl.getUniformLocation(e,t);if(n===null)throw new Error(`Uniform ${t} not found.`);return n}getAttribLocation(e,t){return this.glContext.gl.getAttribLocation(e,t)}}}),aa,Ey=N(()=>{Ct(),Do(),aa=class{constructor(e,t,n,a){this.glContext=e,this.layoutStrategy=t,this.profiler=n,this.config=a,this.pendingRead=new Map,a.reuseTextures&&(this.inUseTextures=new Map,this.idleTextures=new Map,this.textureLookup=new Map)}createTextureFromLayout(e,t,n,a){let u=this.toEncoderType(e),d=this.glContext.getEncoder(u,t.channels||1,a);if(t.isPacked&&a===1)throw new Error("not implemented");let l=t.width,p=t.height,o,r;if(this.config.reuseTextures){o=`${l}x${p}_${d.format}_${d.internalFormat}_${d.textureType}`,r=this.inUseTextures.get(o),r||(r=[],this.inUseTextures.set(o,r));let s=this.idleTextures.get(o);if(s&&s.length>0){let c=s.pop();return r.push(c),a===1&&this.glContext.updateTexture(c,l,p,d,this.toTextureData(e,n)),c}}ze.verbose("TextureManager",`Creating new texture of size ${t.width}x${t.height}`);let i=this.glContext.allocateTexture(l,p,d,this.toTextureData(e,n));return this.config.reuseTextures&&(r.push(i),this.textureLookup.set(i,o)),i}readTexture(e,t,n){return n||(n=1),this.profiler.event("backend","TextureManager.readTexture",()=>{let a=e.shape.reduce((d,l)=>d*l)*n,u=this.glContext.readTexture(e.texture,e.width,e.height,a,this.toEncoderType(t),n);return this.toTensorData(t,u)})}async readTextureAsync(e,t,n){let a=e.tensor.dataId;if(n||(n=1),this.pendingRead.has(a)){let u=this.pendingRead.get(a);return new Promise(d=>u?.push(d))}return this.profiler.event("backend","TextureManager.readTextureAsync",async()=>{this.pendingRead.set(a,[]);let u=e.shape.reduce((o,r)=>o*r)*n;await this.glContext.createAndWaitForFence();let d=this.glContext.readTexture(e.texture,e.width,e.height,u,this.toEncoderType(t),n),l=this.toTensorData(t,d),p=this.pendingRead.get(a);return this.pendingRead.delete(a),p?.forEach(o=>o(l)),l})}readUint8TextureAsFloat(e){return this.profiler.event("backend","TextureManager.readUint8TextureAsFloat",()=>{let t=e.shape.reduce((a,u)=>a*u),n=this.glContext.readTexture(e.texture,e.width,e.height,t*4,"byte",4);return new Float32Array(n.buffer,n.byteOffset,t)})}releaseTexture(e,t){let n;if(this.config.reuseTextures&&(n=this.textureLookup.get(e.texture),n)){t&&this.textureLookup.delete(n);let a=this.inUseTextures.get(n);if(a){let u=a.indexOf(e.texture);if(u!==-1){a.splice(u,1);let d=this.idleTextures.get(n);d||(d=[],this.idleTextures.set(n,d)),d.push(e.texture)}}}(!n||t)&&(ze.verbose("TextureManager",`Deleting texture of size ${e.width}x${e.height}`),this.glContext.deleteTexture(e.texture))}toTensorData(e,t){switch(e){case"int16":return t instanceof Int16Array?t:Int16Array.from(t);case"int32":return t instanceof Int32Array?t:Int32Array.from(t);case"int8":return t instanceof Int8Array?t:Int8Array.from(t);case"uint16":return t instanceof Uint16Array?t:Uint16Array.from(t);case"uint32":return t instanceof Uint32Array?t:Uint32Array.from(t);case"uint8":case"bool":return t instanceof Uint8Array?t:Uint8Array.from(t);case"float32":return t instanceof Float32Array?t:Float32Array.from(t);case"float64":return t instanceof Float64Array?t:Float64Array.from(t);default:throw new Error(`TensorData type ${e} is not supported`)}}toTextureData(e,t){if(t)return t instanceof Float32Array?t:new Float32Array(t)}toEncoderType(e){return"float"}clearActiveTextures(){this.glContext.clearActiveTextures()}}}),sa,Cy=N(()=>{Ct(),wf(),Tm(),by(),Py(),Xl(),Ey(),sa=class{constructor(e,t){this.backend=e,this.context=t,this.layoutStrategy=new Qi(e.glContext.maxTextureSize),this.programManager=new ia(this.context.profiler,e.glContext,this.layoutStrategy),this.textureManager=new aa(e.glContext,this.layoutStrategy,this.context.profiler,{reuseTextures:e.textureCacheMode==="full"}),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map,this.pack=e.pack,this.pack2unpackMap=new Map,this.unpack2packMap=new Map}createInferenceHandler(){return new Vi(this)}onGraphInitialized(e){let t=e.getValues().filter(n=>n.from===-1&&n.tensor).map(n=>n.tensor.dataId);this.initializers=new Set(t)}isInitializer(e){return this.initializers?this.initializers.has(e):!1}addInitializer(e){this.initializers.add(e)}getTextureData(e,t){return t?this.packedTextureDataCache.get(e):this.unpackedTextureDataCache.get(e)}setTextureData(e,t,n=!1){ze.verbose("WebGLSessionHandler","Storing Texture data in cache"),n?this.packedTextureDataCache.set(e,t):this.unpackedTextureDataCache.set(e,t)}dispose(){this.programManager.dispose(),this.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(e=>this.textureManager.releaseTexture(e,!0)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(e=>this.textureManager.releaseTexture(e,!0)),this.unpackedTextureDataCache=new Map}resolve(e,t,n){let a=_f(e,t,gy);return{impl:a.opImpl,context:a.opInit?a.opInit(e,n):e}}}});function KP(e){let t=0;for(;t<e.length&&e[t]();++t);return t-1}var zo,Dy=N(()=>{pt(),Do(),Do(),zn(),zo=class{constructor(e,t){this.frameBufferBound=!1,this.itemsToPoll=[],this.gl=e,this.version=t,this.getExtensions(),this.vertexbuffer=this.createVertexbuffer(),this.framebuffer=this.createFramebuffer(),this.queryVitalParameters()}allocateTexture(e,t,n,a){let u=this.gl,d=u.createTexture();u.bindTexture(u.TEXTURE_2D,d),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,u.NEAREST),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,u.NEAREST),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE);let l=a?n.encode(a,e*t):null;return u.texImage2D(u.TEXTURE_2D,0,n.internalFormat,e,t,0,n.format,n.textureType,l),this.checkError(),d}updateTexture(e,t,n,a,u){let d=this.gl;d.bindTexture(d.TEXTURE_2D,e);let l=a.encode(u,t*n);d.texSubImage2D(d.TEXTURE_2D,0,0,0,t,n,a.format,a.textureType,l),this.checkError()}attachFramebuffer(e,t,n){let a=this.gl;a.bindTexture(a.TEXTURE_2D,e),a.bindFramebuffer(a.FRAMEBUFFER,this.framebuffer),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,e,0),this.checkError(),a.viewport(0,0,t,n),a.scissor(0,0,t,n)}readTexture(e,t,n,a,u,d){let l=this.gl;d||(d=1),this.frameBufferBound||this.attachFramebuffer(e,t,n);let p=this.getEncoder(u,d),o=p.allocate(t*n);return l.bindTexture(l.TEXTURE_2D,e),l.framebufferTexture2D(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0),l.readPixels(0,0,t,n,l.RGBA,p.textureType,o),this.checkError(),p.decode(o,a)}isFramebufferReady(){return!0}getActiveTexture(){let e=this.gl;return`TEXTURE${e.getParameter(this.gl.ACTIVE_TEXTURE)-e.TEXTURE0}`}getTextureBinding(){return this.gl.getParameter(this.gl.TEXTURE_BINDING_2D)}getFramebufferBinding(){return this.gl.getParameter(this.gl.FRAMEBUFFER_BINDING)}setVertexAttributes(e,t){let n=this.gl;n.vertexAttribPointer(e,3,n.FLOAT,!1,20,0),n.enableVertexAttribArray(e),t!==-1&&(n.vertexAttribPointer(t,2,n.FLOAT,!1,20,12),n.enableVertexAttribArray(t)),this.checkError()}createProgram(e,t){let n=this.gl,a=n.createProgram();return n.attachShader(a,e),n.attachShader(a,t),n.linkProgram(a),a}compileShader(e,t){let n=this.gl,a=n.createShader(t);if(!a)throw new Error(`createShader() returned null with type ${t}`);if(n.shaderSource(a,e),n.compileShader(a),n.getShaderParameter(a,n.COMPILE_STATUS)===!1)throw new Error(`Failed to compile shader: ${n.getShaderInfoLog(a)}
Shader source:
${e}`);return a}deleteShader(e){this.gl.deleteShader(e)}bindTextureToUniform(e,t,n){let a=this.gl;a.activeTexture(a.TEXTURE0+t),this.checkError(),a.bindTexture(a.TEXTURE_2D,e),this.checkError(),a.uniform1i(n,t),this.checkError()}draw(){this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4),this.checkError()}checkError(){if(pe.debug){let e=this.gl,t=e.getError(),n="";switch(t){case e.NO_ERROR:return;case e.INVALID_ENUM:n="INVALID_ENUM";break;case e.INVALID_VALUE:n="INVALID_VALUE";break;case e.INVALID_OPERATION:n="INVALID_OPERATION";break;case e.INVALID_FRAMEBUFFER_OPERATION:n="INVALID_FRAMEBUFFER_OPERATION";break;case e.OUT_OF_MEMORY:n="OUT_OF_MEMORY";break;case e.CONTEXT_LOST_WEBGL:n="CONTEXT_LOST_WEBGL";break;default:n=`Unknown WebGL Error: ${t.toString(16)}`}throw new Error(n)}}deleteTexture(e){this.gl.deleteTexture(e)}deleteProgram(e){this.gl.deleteProgram(e)}getEncoder(e,t,n=0){if(this.version===2)return new Bi(this.gl,t);switch(e){case"float":return n===1||this.isRenderFloat32Supported?new Co(this.gl,t):new Co(this.gl,t,this.textureHalfFloatExtension.HALF_FLOAT_OES);case"int":throw new Error("not implemented");case"byte":return new Fi(this.gl,t);default:throw new Error(`Invalid dataType: ${e}`)}}clearActiveTextures(){let e=this.gl;for(let t=0;t<this.maxTextureImageUnits;++t)e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,null)}dispose(){if(this.disposed)return;let e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(this.framebuffer),e.bindBuffer(e.ARRAY_BUFFER,null),e.deleteBuffer(this.vertexbuffer),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.finish(),this.disposed=!0}createDefaultGeometry(){return new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0])}createVertexbuffer(){let e=this.gl,t=e.createBuffer();if(!t)throw new Error("createBuffer() returned null");let n=this.createDefaultGeometry();return e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW),this.checkError(),t}createFramebuffer(){let e=this.gl.createFramebuffer();if(!e)throw new Error("createFramebuffer returned null");return e}queryVitalParameters(){let e=this.gl;if(this.isFloatTextureAttachableToFrameBuffer=this.checkFloatTextureAttachableToFrameBuffer(),this.isRenderFloat32Supported=this.checkRenderFloat32(),this.isFloat32DownloadSupported=this.checkFloat32Download(),this.version===1&&!this.textureHalfFloatExtension&&!this.isRenderFloat32Supported)throw new Error("both float32 and float16 TextureType are not supported");this.isBlendSupported=!this.isRenderFloat32Supported||this.checkFloat32Blend(),this.maxTextureSize=e.getParameter(e.MAX_TEXTURE_SIZE),this.maxTextureImageUnits=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),this.version}getExtensions(){this.version===2?(this.colorBufferFloatExtension=this.gl.getExtension("EXT_color_buffer_float"),this.disjointTimerQueryWebgl2Extension=this.gl.getExtension("EXT_disjoint_timer_query_webgl2")):(this.textureFloatExtension=this.gl.getExtension("OES_texture_float"),this.textureHalfFloatExtension=this.gl.getExtension("OES_texture_half_float"))}checkFloatTextureAttachableToFrameBuffer(){let e=this.gl,t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t);let n=this.version===2?e.RGBA32F:e.RGBA;e.texImage2D(e.TEXTURE_2D,0,n,1,1,0,e.RGBA,e.FLOAT,null);let a=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0);let u=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(t),e.deleteFramebuffer(a),u}checkRenderFloat32(){if(this.version===2){if(!this.colorBufferFloatExtension)return!1}else if(!this.textureFloatExtension)return!1;return this.isFloatTextureAttachableToFrameBuffer}checkFloat32Download(){if(this.version===2){if(!this.colorBufferFloatExtension)return!1}else if(!this.textureFloatExtension||!this.gl.getExtension("WEBGL_color_buffer_float"))return!1;return this.isFloatTextureAttachableToFrameBuffer}checkFloat32Blend(){let e=this.gl,t,n,a,u,d;try{t=e.createTexture(),n=e.createFramebuffer(),e.bindTexture(e.TEXTURE_2D,t);let l=this.version===2?e.RGBA32F:e.RGBA;return e.texImage2D(e.TEXTURE_2D,0,l,1,1,0,e.RGBA,e.FLOAT,null),e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),e.enable(e.BLEND),a=e.createShader(e.VERTEX_SHADER),!a||(e.shaderSource(a,"void main(){}"),e.compileShader(a),u=e.createShader(e.FRAGMENT_SHADER),!u)||(e.shaderSource(u,"precision highp float;void main(){gl_FragColor=vec4(0.5);}"),e.compileShader(u),d=e.createProgram(),!d)?!1:(e.attachShader(d,a),e.attachShader(d,u),e.linkProgram(d),e.useProgram(d),e.drawArrays(e.POINTS,0,1),e.getError()===e.NO_ERROR)}finally{e.disable(e.BLEND),d&&e.deleteProgram(d),a&&e.deleteShader(a),u&&e.deleteShader(u),n&&(e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(n)),t&&(e.bindTexture(e.TEXTURE_2D,null),e.deleteTexture(t))}}beginTimer(){if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let e=this.gl,t=this.disjointTimerQueryWebgl2Extension,n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}else throw new Error("WebGL1 profiling currently not supported.")}endTimer(){if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let e=this.gl,t=this.disjointTimerQueryWebgl2Extension;e.endQuery(t.TIME_ELAPSED_EXT);return}else throw new Error("WebGL1 profiling currently not supported")}isTimerResultAvailable(e){let t=!1,n=!1;if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let a=this.gl,u=this.disjointTimerQueryWebgl2Extension;t=a.getQueryParameter(e,a.QUERY_RESULT_AVAILABLE),n=a.getParameter(u.GPU_DISJOINT_EXT)}else throw new Error("WebGL1 profiling currently not supported");return t&&!n}getTimerResult(e){let t=0;if(this.version===2){let n=this.gl;t=n.getQueryParameter(e,n.QUERY_RESULT),n.deleteQuery(e)}else throw new Error("WebGL1 profiling currently not supported");return t/1e6}async waitForQueryAndGetTime(e){return await vl(()=>this.isTimerResultAvailable(e)),this.getTimerResult(e)}async createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,n=e,a=n.fenceSync(n.SYNC_GPU_COMMANDS_COMPLETE,0);return e.flush(),a===null?t=()=>!0:t=()=>{let u=n.clientWaitSync(a,0,0);return u===n.ALREADY_SIGNALED||u===n.CONDITION_SATISFIED},{query:a,isFencePassed:t}}async pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=KP(this.itemsToPoll.map(t=>t.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:n}=this.itemsToPoll[t];n()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}async addItemToPoll(e,t){this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),!(this.itemsToPoll.length>1)&&await vl(()=>(this.pollItems(),this.itemsToPoll.length===0))}}});function Jl(e){let t;if((!e||e==="webgl2")&&"webgl2"in so?t=so.webgl2:(!e||e==="webgl")&&"webgl"in so&&(t=so.webgl),!t)try{let a=ZP();t=ky(a,e)}catch{let a=XP();t=ky(a,e)}e=e||t.version===1?"webgl":"webgl2";let n=t.gl;return so[e]=t,n.isContextLost()?(delete so[e],Jl(e)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),t)}function ky(e,t){let n={alpha:!1,depth:!1,antialias:!1,stencil:!1,preserveDrawingBuffer:!1,premultipliedAlpha:!1,failIfMajorPerformanceCaveat:!1},a,u=n;if((!t||t==="webgl2")&&(a=e.getContext("webgl2",u),a))try{return new zo(a,2)}catch(d){ze.warning("GlContextFactory",`failed to create WebGLContext using contextId 'webgl2'. Error: ${d}`)}if((!t||t==="webgl")&&(a=e.getContext("webgl",u)||e.getContext("experimental-webgl",u),a))try{return new zo(a,1)}catch(d){ze.warning("GlContextFactory",`failed to create WebGLContext using contextId 'webgl' or 'experimental-webgl'. Error: ${d}`)}throw new Error("WebGL is not supported")}function XP(){if(typeof document>"u")throw new TypeError("failed to create canvas: document is not supported");let e=document.createElement("canvas");return e.width=1,e.height=1,e}function ZP(){if(typeof OffscreenCanvas>"u")throw new TypeError("failed to create offscreen canvas: OffscreenCanvas is not supported");return new OffscreenCanvas(1,1)}var so,Ny=N(()=>{Ct(),Dy(),so={}}),ua,Ly=N(()=>{pt(),Ct(),Cy(),Ny(),ua=class{get contextId(){return pe.webgl.contextId}set contextId(e){pe.webgl.contextId=e}get matmulMaxBatchSize(){return pe.webgl.matmulMaxBatchSize}set matmulMaxBatchSize(e){pe.webgl.matmulMaxBatchSize=e}get textureCacheMode(){return pe.webgl.textureCacheMode}set textureCacheMode(e){pe.webgl.textureCacheMode=e}get pack(){return pe.webgl.pack}set pack(e){pe.webgl.pack=e}get async(){return pe.webgl.async}set async(e){pe.webgl.async=e}initialize(){try{return this.glContext=Jl(this.contextId),typeof this.matmulMaxBatchSize!="number"&&(this.matmulMaxBatchSize=16),typeof this.textureCacheMode!="string"&&(this.textureCacheMode="full"),typeof this.pack!="boolean"&&(this.pack=!1),typeof this.async!="boolean"&&(this.async=!1),ze.setWithEnv(pe),pe.webgl.context||Object.defineProperty(pe.webgl,"context",{value:this.glContext.gl}),ze.verbose("WebGLBackend",`Created WebGLContext: ${typeof this.glContext} with matmulMaxBatchSize: ${this.matmulMaxBatchSize}; textureCacheMode: ${this.textureCacheMode}; pack: ${this.pack}; async: ${this.async}.`),!0}catch(e){return ze.warning("WebGLBackend",`Unable to initialize WebGLBackend. ${e}`),!1}}createSessionHandler(e){return new sa(this,e)}dispose(){this.glContext.dispose()}}});async function Ql(e){if(e){let t=typeof e=="string"?[e]:e;for(let n of t){let a=Ry.get(n);if(a)return a;let u=await QP(n);if(u)return u}}else return Ql(["webgl"]);throw new Error("no available backend to use")}async function QP(e){let t=JP;if(typeof t[e]<"u"&&YP(t[e])){let n=t[e],a=n.initialize();if(typeof a=="object"&&"then"in a&&(a=await a),a)return Ry.set(e,n),n}}function YP(e){let t=e;return"initialize"in t&&typeof t.initialize=="function"&&"createSessionHandler"in t&&typeof t.createSessionHandler=="function"&&"dispose"in t&&typeof t.dispose=="function"}var Ry,JP,zy=N(()=>{Ly(),Ry=new Map,JP={webgl:new ua}}),Yl,la,My=N(()=>{Ct(),Yl=class{constructor(e,t){this.op=e,this.node=t}},la=class{constructor(e,t,n){this.graph=e,this.profiler=n,this.initialize(t)}initialize(e){this.profiler.event("session","ExecutionPlan.initialize",()=>{let t=this.graph.getNodes();if(t.length!==e.length)throw new Error("The size of nodes and OPs do not match.");this._ops=e.map((n,a)=>new Yl(n,t[a])),this.reset(),this._starter=[],this._ops.forEach((n,a)=>{let u=!0;for(let d of n.node.inputs)if(!this._values[d]&&this.graph.getInputIndices().indexOf(d)===-1){u=!1;break}u&&this._starter.push(a)})})}reset(){this._values=this.graph.getValues().map(e=>e.tensor)}async execute(e,t){return this.profiler.event("session","ExecutionPlan.execute",async()=>{this.reset();let n=e.createInferenceHandler(),a=this.graph.getInputIndices();if(t.length!==a.length)throw new Error(`number of input tensors don't match the number of inputs to the model: actual: ${t.length} expected: ${a.length}`);t.forEach((r,i)=>{let s=a[i];this._values[s]=r});let u=this._starter.slice(0),d=this.graph.getValues(),l=this.graph.getNodes(),p=0;for(;p<u.length;){let r=u[p++],i=this._ops[r],s=i.node.inputs.map(b=>this._values[b]);if(s.indexOf(void 0)!==-1)throw new Error(`unresolved input detected: op: ${i.node}`);let c=s;ze.verbose("ExecPlan",`Running op:${i.node.name} (${c.map((b,w)=>`'${i.node.inputs[w]}': ${b.type}[${b.dims.join(",")}]`).join(", ")})`);let h=await this.profiler.event("node",i.node.name,async()=>i.op.impl(n,c,i.op.context));if(h.length!==i.node.outputs.length)throw new Error("the size of output does not match model definition.");h.forEach((b,w)=>{let x=i.node.outputs[w];if(this._values[x])throw new Error(`output [${x}] already has value: op:${i.node.name}`);this._values[x]=b});let m=new Set;h.forEach((b,w)=>{let x=i.node.outputs[w];for(let _ of d[x].to){let S=l[_],I=!0;for(let O of S.inputs)if(!this._values[O]){I=!1;break}I&&m.add(_)}}),u.push(...m)}let o=[];for(let r=0;r<this.graph.getOutputIndices().length;r++){let i=this.graph.getOutputIndices()[r],s=this._values[i];if(s===void 0)throw new Error(`required output [${i}] does not have value`);i===0?await s.getData():s.data,o.push(s)}return ze.verbose("ExecPlan","disposing of inferenceHandler"),n.dispose(),o})}}}),Se,Mo,By=N(()=>{So(),Se=_e(Yr()),Rr(),Le(),Mo=class an{constructor(t){if(this._attributes=new Map,t!=null){for(let n of t)n instanceof Se.onnx.AttributeProto?this._attributes.set(n.name,[an.getValue(n),an.getType(n)]):n instanceof Ci.Attribute&&this._attributes.set(n.name(),[an.getValue(n),an.getType(n)]);if(this._attributes.size<t.length)throw new Error("duplicated attribute names")}}set(t,n,a){this._attributes.set(t,[a,n])}delete(t){this._attributes.delete(t)}getFloat(t,n){return this.get(t,"float",n)}getInt(t,n){return this.get(t,"int",n)}getString(t,n){return this.get(t,"string",n)}getTensor(t,n){return this.get(t,"tensor",n)}getFloats(t,n){return this.get(t,"floats",n)}getInts(t,n){return this.get(t,"ints",n)}getStrings(t,n){return this.get(t,"strings",n)}getTensors(t,n){return this.get(t,"tensors",n)}get(t,n,a){let u=this._attributes.get(t);if(u===void 0){if(a!==void 0)return a;throw new Error(`required attribute not found: ${t}`)}if(u[1]!==n)throw new Error(`type mismatch: expected ${n} but got ${u[1]}`);return u[0]}static getType(t){let n=t instanceof Se.onnx.AttributeProto?t.type:t.type();switch(n){case Se.onnx.AttributeProto.AttributeType.FLOAT:return"float";case Se.onnx.AttributeProto.AttributeType.INT:return"int";case Se.onnx.AttributeProto.AttributeType.STRING:return"string";case Se.onnx.AttributeProto.AttributeType.TENSOR:return"tensor";case Se.onnx.AttributeProto.AttributeType.FLOATS:return"floats";case Se.onnx.AttributeProto.AttributeType.INTS:return"ints";case Se.onnx.AttributeProto.AttributeType.STRINGS:return"strings";case Se.onnx.AttributeProto.AttributeType.TENSORS:return"tensors";default:throw new Error(`attribute type is not supported yet: ${Se.onnx.AttributeProto.AttributeType[n]}`)}}static getValue(t){let n=t instanceof Se.onnx.AttributeProto?t.type:t.type();if(n===Se.onnx.AttributeProto.AttributeType.GRAPH||n===Se.onnx.AttributeProto.AttributeType.GRAPHS)throw new Error("graph attribute is not supported yet");let a=this.getValueNoCheck(t);if(n===Se.onnx.AttributeProto.AttributeType.INT&&xt.isLong(a))return xt.longToNumber(a);if(n===Se.onnx.AttributeProto.AttributeType.INTS){let u=a,d=new Array(u.length);for(let l=0;l<u.length;l++){let p=u[l];d[l]=xt.longToNumber(p)}return d}if(n===Se.onnx.AttributeProto.AttributeType.TENSOR)return t instanceof Se.onnx.AttributeProto?rt.fromProto(a):rt.fromOrtTensor(a);if(n===Se.onnx.AttributeProto.AttributeType.TENSORS){if(t instanceof Se.onnx.AttributeProto)return a.map(u=>rt.fromProto(u));if(t instanceof Ci.Attribute)return a.map(u=>rt.fromOrtTensor(u))}return n===Se.onnx.AttributeProto.AttributeType.STRING&&t instanceof Se.onnx.AttributeProto?Eo(a):n===Se.onnx.AttributeProto.AttributeType.STRINGS&&t instanceof Se.onnx.AttributeProto?a.map(Eo):a}static getValueNoCheck(t){return t instanceof Se.onnx.AttributeProto?this.getValueNoCheckFromOnnxFormat(t):this.getValueNoCheckFromOrtFormat(t)}static getValueNoCheckFromOnnxFormat(t){switch(t.type){case Se.onnx.AttributeProto.AttributeType.FLOAT:return t.f;case Se.onnx.AttributeProto.AttributeType.INT:return t.i;case Se.onnx.AttributeProto.AttributeType.STRING:return t.s;case Se.onnx.AttributeProto.AttributeType.TENSOR:return t.t;case Se.onnx.AttributeProto.AttributeType.GRAPH:return t.g;case Se.onnx.AttributeProto.AttributeType.FLOATS:return t.floats;case Se.onnx.AttributeProto.AttributeType.INTS:return t.ints;case Se.onnx.AttributeProto.AttributeType.STRINGS:return t.strings;case Se.onnx.AttributeProto.AttributeType.TENSORS:return t.tensors;case Se.onnx.AttributeProto.AttributeType.GRAPHS:return t.graphs;default:throw new Error(`unsupported attribute type: ${Se.onnx.AttributeProto.AttributeType[t.type]}`)}}static getValueNoCheckFromOrtFormat(t){switch(t.type()){case Lt.AttributeType.FLOAT:return t.f();case Lt.AttributeType.INT:return t.i();case Lt.AttributeType.STRING:return t.s();case Lt.AttributeType.TENSOR:return t.t();case Lt.AttributeType.GRAPH:return t.g();case Lt.AttributeType.FLOATS:return t.floatsArray();case Lt.AttributeType.INTS:{let n=[];for(let a=0;a<t.intsLength();a++)n.push(t.ints(a));return n}case Lt.AttributeType.STRINGS:{let n=[];for(let a=0;a<t.stringsLength();a++)n.push(t.strings(a));return n}case Lt.AttributeType.TENSORS:{let n=[];for(let a=0;a<t.tensorsLength();a++)n.push(t.tensors(a));return n}default:throw new Error(`unsupported attribute type: ${Lt.AttributeType[t.type()]}`)}}}}),tc,nc,Fn,ca,ec,Fy=N(()=>{By(),So(),tc=_e(Yr()),Rr(),Le(),nc={from:(e,t)=>new ec(e,t)},Fn=class{constructor(e){this._from=void 0,this._to=[],this.tensor=void 0,this.type=void 0,e&&(this.type=ft.tensorValueTypeFromProto(e.type.tensorType))}get from(){return this._from}get to(){return this._to}},ca=class{constructor(e,t){e instanceof tc.onnx.NodeProto?(this.name=e.name,this.opType=e.opType,this.attributes=new Mo(e.attribute)):e instanceof rl.Node&&(this.name=t??e.name(),this.opType=e.opType(),this.attributes=new Mo(ft.tensorAttributesFromORTFormat(e))),this.inputs=[],this.outputs=[],this.executeNode=!0}},ec=class{constructor(e,t){if(!e)throw new TypeError("graph is empty");this.buildGraph(e),this.transformGraph(t),this.checkIsAcyclic()}getInputIndices(){return this._allInputIndices}getInputNames(){return this._allInputNames}getOutputIndices(){return this._allOutputIndices}getOutputNames(){return this._allOutputNames}getValues(){return this._allData}getNodes(){return this._nodes}buildGraph(e){if(e instanceof tc.onnx.GraphProto)this.buildGraphFromOnnxFormat(e);else if(e instanceof tl.Graph)this.buildGraphFromOrtFormat(e);else throw new TypeError("Graph type is not supported.")}buildGraphFromOnnxFormat(e){let t=new Map;this._allData=[],this._allInputIndices=[],this._allInputNames=[],this._allOutputIndices=[],this._allOutputNames=[],this._nodes=[];let n=new Map;if(!e.input)throw new Error("missing information in graph: input");let a=[];for(let u of e.input){if(t.has(u.name))throw new Error(`duplicated input name: ${u.name}`);let d=this._allData.push(new Fn(u))-1;t.set(u.name,d),a.push(u.name)}if(!e.initializer)throw new Error("missing information in graph: initializer");for(let u of e.initializer){let d=t.get(u.name);if(d===void 0){let l=new Fn;l.type={shape:{dims:ft.tensorDimsFromProto(u.dims)},tensorType:ft.tensorDataTypeFromProto(u.dataType)},d=this._allData.push(l)-1,t.set(u.name,d)}this._allData[d]._from=-1,this._allData[d].tensor=rt.fromProto(u)}for(let u=0;u<this._allData.length;u++)this._allData[u].tensor||(this._allInputIndices.push(u),this._allInputNames.push(a[u]));if(!e.output)throw new Error("missing information in graph: output");for(let u of e.output){if(t.has(u.name))throw new Error(`duplicated output name: ${u.name}`);let d=this._allData.push(new Fn(u))-1;t.set(u.name,d),this._allOutputIndices.push(d),this._allOutputNames.push(u.name)}if(!e.node)throw new Error("missing information in graph: node");for(let u of e.node){if(!u.name)for(let l=0;;l++){let p=`unnamed_${u.opType}_${l}`;if(!n.has(p)){u.name=p;break}}if(n.has(u.name))throw new Error(`duplicated node name: ${u.name}`);let d=this._nodes.push(new ca(u))-1;n.set(u.name,d)}for(let u=0;u<this._nodes.length;u++){let d=this._nodes[u],l=e.node[u];if(!l.output)throw new Error(`missing output for node: ${l.name}`);for(let p of l.output){let o=t.get(p);if(typeof o>"u"&&(o=this._allData.push(new Fn)-1,t.set(p,o)),d.outputs.push(o),this._allData[o]._from!==void 0)throw new Error(`multiple nodes output to one data value: ${o}`);if(this._allData[o]._from=u,l.opType==="Constant"){if(!l.attribute||l.attribute.length!==1||!l.attribute[0].t)throw new Error("missing attributes or missing tensor value in attributes for this Constant operator");if(!l.output||l.output.length!==1)throw new Error("missing output or incorrect number of outputs for this Constant operator");d.outputs.pop(),d.executeNode=!1,this._allData[o]._from=-1,this._allData[o].tensor=rt.fromProto(l.attribute[0].t)}}}for(let u=0;u<this._nodes.length;u++){let d=this._nodes[u],l=e.node[u];if(!l.input)throw new Error(`missing input for node: ${l.name}`);for(let p of l.input){let o=t.get(p);if(typeof o>"u"){if(p===""&&(l.input.length===3||l.input.length===4)&&l.opType==="Resize")continue;throw new Error(`unrecognized input '${p}' for node: ${l.name}`)}d.inputs.push(o),this._allData[o]._to.push(u)}}return!0}buildGraphFromOrtFormat(e){let t=new Map;this._allData=[],this._allInputIndices=[],this._allInputNames=[],this._allOutputIndices=[],this._allOutputNames=[],this._nodes=[];let n=new Map,a=[];for(let u=0;u<e.inputsLength();u++){let d=e.inputs(u);if(t.has(d))throw new Error(`duplicated input name: ${d}`);for(let l=0;l<e.nodeArgsLength();l++)if(e.nodeArgs(l)?.name()===d){let p=new Fn;if(e.nodeArgs(l)?.type()?.valueType()!==il.TypeInfoValue.tensor_type)throw new Error("Unexpected value type for the nodeArg.");let o=e.nodeArgs(l).type().value(new ol.TensorTypeAndShape),r=ft.tensorDataTypeFromProto(o.elemType()),i=o.shape(),s=[];for(let h=0;h<i.dimLength();h++)s.push(xt.longToNumber(i.dim(h).value().dimValue()));p.type={shape:{dims:s},tensorType:r};let c=this._allData.push(p)-1;t.set(d,c),a.push(d)}}for(let u=0;u<e.initializersLength();u++){let d=e.initializers(u),l=t.get(d.name());if(l===void 0){let p=new Fn,o=ft.tensorDimsFromORTFormat(d),r=ft.tensorDataTypeFromProto(d.dataType());p.type={shape:{dims:o},tensorType:r},l=this._allData.push(p)-1,t.set(d.name(),l)}this._allData[l]._from=-1,this._allData[l].tensor=rt.fromOrtTensor(d)}for(let u=0;u<this._allData.length;u++)this._allData[u].tensor||(this._allInputIndices.push(u),this._allInputNames.push(a[u]));for(let u=0;u<e.outputsLength();u++){let d=e.outputs(u);if(t.has(d))throw new Error(`duplicated output name: ${d}`);let l=this._allData.push(new Fn)-1;t.set(d,l),this._allOutputIndices.push(l),this._allOutputNames.push(d)}if(!e.nodes)throw new Error("missing information in graph: node");for(let u=0;u<e.nodesLength();u++){let d=e.nodes(u),l=d.name();if(!l)for(let o=0;l=`unnamed_${d.opType()}_${o}`,!!n.has(l);o++);if(n.has(l))throw new Error(`duplicated node name: ${l}`);let p=this._nodes.push(new ca(d,l))-1;n.set(l,p)}for(let u=0;u<this._nodes.length;u++){let d=this._nodes[u],l=e.nodes(u);if(l==null)throw new Error(`No node exists at index ${u}`);if(l?.outputsLength()===0)throw new Error(`missing output for node: ${l.name}`);for(let p=0;p<l?.outputsLength();p++){let o=l?.outputs(p),r=t.get(o);if(typeof r>"u"&&(r=this._allData.push(new Fn)-1,t.set(o,r)),d.outputs.push(r),this._allData[r]._from!==void 0)throw new Error(`multiple nodes output to one data value: ${r}`);if(this._allData[r]._from=u,l.opType()==="Constant"){if(l.attributesLength()!==1||!l.attributes(0).t())throw new Error("missing attributes or missing tensor value in attributes for this Constant operator");if(l.outputsLength()!==1)throw new Error("missing output or incorrect number of outputs for this Constant operator");d.outputs.pop(),d.executeNode=!1,this._allData[r]._from=-1,this._allData[r].tensor=rt.fromOrtTensor(l.attributes(0).t())}}}for(let u=0;u<this._nodes.length;u++){let d=this._nodes[u],l=e.nodes(u);if(l.inputsLength()===0)throw new Error(`missing input for node: ${l.name}`);for(let p=0;p<l.inputsLength();p++){let o=l.inputs(p),r=t.get(o);if(typeof r>"u")throw new Error(`unrecognized input '${o}' for node: ${l.name()}`);d.inputs.push(r),this._allData[r]._to.push(u)}}}checkIsAcyclic(){let e=new Set;this._allInputIndices.forEach(a=>{this._allData[a]._to.forEach(u=>{e.add(u)})});let t=Array.from(e),n=new Array(this._nodes.length).fill("white");for(;t.length>0;){let a=t.pop();n[a]==="gray"?n[a]="black":(t.push(a),n[a]="gray",this._nodes[a].outputs.forEach(u=>{let d=this._allData[u];if(typeof d.tensor<"u")throw new Error("node outputs should not be initialized");if(d._from!==a)throw new Error("from property of the Value object doesn't match index of Node being processed");d._to.forEach(l=>{if(n[l]==="gray")throw new Error("model graph is cyclic");n[l]==="white"&&t.push(l)})}))}}transformGraph(e){this.removeAllIdentityNodes(),this.removeAllDropoutNodes(),this.fuseConvActivationNodes(),e&&e.transformGraph(this),this.finalizeGraph()}finalizeGraph(){let e=0,t=new Array(this._nodes.length,0),n=0;for(let a=0;a<this._nodes.length;a++)t[a]=n,this._nodes[a].executeNode?(n!==a&&(this._nodes[n]=this._nodes[a]),n++):this._nodes[a].outputs.forEach(u=>{this._allData[u]._from=-2});this._nodes.splice(n,this._nodes.length-n);for(let a=0;a<this._allData.length;a++){let u=this._allData[a];u._from!==void 0&&u._from!==-1&&u._from!==-2&&(u._from=t[u._from]);for(let d=0;d<u._to.length;d++)if(u._to[d]>=0)u._to[d]=t[u._to[d]];else throw new Error("Trying to update a removed node")}e=0;for(let a=0;a<this._allData.length;a++){if(this._allData[a].from===-2&&this._allOutputIndices.indexOf(a+e)===-1){e++,this._allData.splice(a,1),a--;continue}if(e>0){let u=-1;this._allData[a].from!==void 0&&this._allData[a].from!==-1?(u=this._nodes[this._allData[a].from].outputs.indexOf(a+e),u!==-1&&(this._nodes[this._allData[a].from].outputs[u]=a)):(u=this._allInputIndices.indexOf(a+e),u!==-1&&(this._allInputIndices[u]=a)),this._allData[a].to.forEach(d=>{u=this._nodes[d].inputs.indexOf(a+e),u!==-1&&(this._nodes[d].inputs[u]=a)}),this._allData[a].to.length===0&&(u=this._allOutputIndices.indexOf(a+e),u!==-1&&(this._allOutputIndices[u]=a))}}}deleteNode(e){let t=this._nodes[e];if(t.outputs.length>1){for(let l=1;l<t.outputs.length;l++)if(this._allData[t.outputs[l]].to.length>0)throw new Error("Node deletion with more than one output connected to other nodes is not supported. ")}t.executeNode=!1;let n=t.inputs[0],a=t.outputs[0],u=this._allData[a].to;for(let l=0;l<t.inputs.length;l++){let p=this._allData[t.inputs[l]].to.indexOf(e);if(p===-1)throw new Error("The Value object doesn't have the current Node in it's 'to' property ");this._allData[t.inputs[l]].to.splice(p,1)}this._allData[a]._to=[];let d=this._allOutputIndices.indexOf(a);if(d!==-1&&(this._allOutputIndices[d]=n),u&&u.length>0)for(let l of u){let p=this._nodes[l].inputs.indexOf(a);if(p===-1)throw new Error("The Node object doesn't have the output Value in it's 'inputs' property ");this._nodes[l].inputs[p]=n,this._allData[n].to.push(l)}}removeAllDropoutNodes(){let e=0;for(let t of this._nodes){if(t.opType==="Dropout"){if(t.inputs.length!==1)throw new Error("Dropout nodes should only contain one input. ");if(t.outputs.length!==1&&t.outputs.length!==2)throw new Error("Dropout nodes should contain either 1 or 2 output(s)");if(t.outputs.length===2&&this._allData[t.outputs[1]]._to.length!==0)throw new Error("Dropout nodes's second output should not be referenced by other nodes");this.deleteNode(e)}e++}}removeAllIdentityNodes(){let e=0;for(let t of this._nodes)t.opType==="Identity"&&this.deleteNode(e),e++}isActivation(e){switch(e.opType){case"Relu":case"Sigmoid":case"Clip":return!0;default:return!1}}fuseConvActivationNodes(){for(let e of this._nodes)if(e.opType==="Conv"){let t=this._allData[e.outputs[0]]._to;if(t.length===1&&this.isActivation(this._nodes[t[0]])){let n=this._nodes[t[0]];if(n.opType==="Clip")if(n.inputs.length===1)try{e.attributes.set("activation_params","floats",[n.attributes.getFloat("min"),n.attributes.getFloat("max")])}catch{e.attributes.set("activation_params","floats",[Nr,Lr])}else if(n.inputs.length>=3&&this._allData[n.inputs[1]].tensor!==void 0&&this._allData[n.inputs[2]].tensor!==void 0)e.attributes.set("activation_params","floats",[this._allData[n.inputs[1]].tensor.floatData[0],this._allData[n.inputs[2]].tensor.floatData[0]]);else continue;e.attributes.set("activation","string",n.opType),this.deleteNode(t[0])}}}}}),Vy,Gy,da,Uy=N(()=>{Vy=_e(Ne()),Fy(),So(),Gy=_e(Yr()),Le(),da=class{constructor(){}load(e,t,n){let a;if(!n)try{this.loadFromOnnxFormat(e,t);return}catch(u){if(n!==void 0)throw u;a=u}try{this.loadFromOrtFormat(e,t)}catch(u){throw n!==void 0?u:new Error(`Failed to load model as ONNX format: ${a}
as ORT format: ${u}`)}}loadFromOnnxFormat(e,t){let n=Gy.onnx.ModelProto.decode(e);if(xt.longToNumber(n.irVersion)<3)throw new Error("only support ONNX model with IR_VERSION>=3");this._opsets=n.opsetImport.map(a=>({domain:a.domain,version:xt.longToNumber(a.version)})),this._graph=nc.from(n.graph,t)}loadFromOrtFormat(e,t){let n=new Vy.ByteBuffer(e),a=nl.InferenceSession.getRootAsInferenceSession(n).model();if(xt.longToNumber(a.irVersion())<3)throw new Error("only support ONNX model with IR_VERSION>=3");this._opsets=[];for(let u=0;u<a.opsetImportLength();u++){let d=a.opsetImport(u);this._opsets.push({domain:d?.domain(),version:xt.longToNumber(d.version())})}this._graph=nc.from(a.graph(),t)}get graph(){return this._graph}get opsets(){return this._opsets}}}),pa,Wy=N(()=>{zy(),My(),Ct(),Uy(),pa=class{constructor(e={}){this._initialized=!1,this.backendHint=e.backendHint,this.profiler=bi.create(e.profiler),this.context={profiler:this.profiler,graphInputTypes:[],graphInputDims:[]}}get inputNames(){return this._model.graph.getInputNames()}get outputNames(){return this._model.graph.getOutputNames()}startProfiling(){this.profiler.start()}endProfiling(){this.profiler.stop()}async loadModel(e,t,n){await this.profiler.event("session","Session.loadModel",async()=>{let a=await Ql(this.backendHint);if(this.sessionHandler=a.createSessionHandler(this.context),this._model=new da,typeof e=="string"){let u=e.endsWith(".ort");{let d=await(await fetch(e)).arrayBuffer();this.initialize(new Uint8Array(d),u)}}else if(ArrayBuffer.isView(e))this.initialize(e);else{let u=new Uint8Array(e,t||0,n||e.byteLength);this.initialize(u)}})}initialize(e,t){if(this._initialized)throw new Error("already initialized");this.profiler.event("session","Session.initialize",()=>{let n=this.sessionHandler.transformGraph?this.sessionHandler:void 0;this._model.load(e,n,t),this.sessionHandler.onGraphInitialized&&this.sessionHandler.onGraphInitialized(this._model.graph),this.initializeOps(this._model.graph),this._executionPlan=new la(this._model.graph,this._ops,this.profiler)}),this._initialized=!0}async run(e){if(!this._initialized)throw new Error("session not initialized yet");return this.profiler.event("session","Session.run",async()=>{let t=this.normalizeAndValidateInputs(e),n=await this._executionPlan.execute(this.sessionHandler,t);return this.createOutput(n)})}normalizeAndValidateInputs(e){let t=this._model.graph.getInputNames();if(Array.isArray(e)){if(e.length!==t.length)throw new Error(`incorrect input array length: expected ${t.length} but got ${e.length}`)}else{if(e.size!==t.length)throw new Error(`incorrect input map size: expected ${t.length} but got ${e.size}`);let n=new Array(e.size),a=0;for(let u=0;u<t.length;++u){let d=e.get(t[u]);if(!d)throw new Error(`missing input tensor for: '${name}'`);n[a++]=d}e=n}if(!this.context.graphInputTypes||this.context.graphInputTypes.length===0||!this.context.graphInputDims||this.context.graphInputDims.length===0){let n=this._model.graph.getInputIndices(),a=this._model.graph.getValues(),u=new Array(n.length);for(let d=0;d<n.length;++d){let l=a[n[d]];u[d]=l.type.shape.dims,this.context.graphInputTypes.push(l.type.tensorType),this.context.graphInputDims.push(e[d].dims)}this.validateInputTensorDims(u,e,!0)}else this.validateInputTensorDims(this.context.graphInputDims,e,!1);return this.validateInputTensorTypes(this.context.graphInputTypes,e),e}validateInputTensorTypes(e,t){for(let n=0;n<t.length;n++){let a=e[n],u=t[n].type;if(a!==u)throw new Error(`input tensor[${n}] check failed: expected type '${a}' but got ${u}`)}}validateInputTensorDims(e,t,n){for(let a=0;a<t.length;a++){let u=e[a],d=t[a].dims;if(!this.compareTensorDims(u,d,n))throw new Error(`input tensor[${a}] check failed: expected shape '[${u.join(",")}]' but got [${d.join(",")}]`)}}compareTensorDims(e,t,n){if(e.length!==t.length)return!1;for(let a=0;a<e.length;++a)if(e[a]!==t[a]&&(!n||e[a]!==0))return!1;return!0}createOutput(e){let t=this._model.graph.getOutputNames();if(e.length!==t.length)throw new Error("expected number of outputs do not match number of generated outputs");let n=new Map;for(let a=0;a<t.length;++a)n.set(t[a],e[a]);return n}initializeOps(e){let t=e.getNodes();this._ops=new Array(t.length);for(let n=0;n<t.length;n++)this._ops[n]=this.sessionHandler.resolve(t[n],this._model.opsets,e)}}}),fa,Hy=N(()=>{pt(),Rr(),fa=class{constructor(e){this.session=e,this.inputNames=this.session.inputNames,this.outputNames=this.session.outputNames}get inputMetadata(){throw new Error("Getting model metadata is not supported in webgl backend.")}get outputMetadata(){throw new Error("Getting model metadata is not supported in webgl backend.")}async dispose(){}async run(e,t,n){let a=new Map;for(let l in e)if(Object.hasOwnProperty.call(e,l)){let p=e[l];a.set(l,new rt(p.dims,p.type,void 0,void 0,p.data))}let u=await this.session.run(a),d={};return u.forEach((l,p)=>{d[p]=new St(l.type,l.data,l.dims)}),d}startProfiling(){this.session.startProfiling()}endProfiling(){this.session.endProfiling()}}}),qy={};Sr(qy,{onnxjsBackend:()=>e3});var rc,e3,jy=N(()=>{Wy(),Hy(),rc=class{async init(){}async createInferenceSessionHandler(e,t){let n=new pa(t);return typeof e=="string"?await n.loadModel(e):await n.loadModel(e),new fa(n)}},e3=new rc}),ha=N(()=>{}),Zy={};Sr(Zy,{default:()=>t3});var Ky,Xy,t3,Jy=N(()=>{oc(),br(),ma(),Ky="ort-wasm-proxy-worker",Xy=globalThis.self?.name===Ky,Xy&&(self.onmessage=e=>{let{type:t,in:n}=e.data;try{switch(t){case"init-wasm":ga(n.wasm).then(()=>{ba(n).then(()=>{postMessage({type:t})},a=>{postMessage({type:t,err:a})})},a=>{postMessage({type:t,err:a})});break;case"init-ep":{let{epName:a,env:u}=n;ya(u,a).then(()=>{postMessage({type:t})},d=>{postMessage({type:t,err:d})});break}case"copy-from":{let{buffer:a}=n,u=Bo(a);postMessage({type:t,out:u});break}case"create":{let{model:a,options:u}=n;_a(a,u).then(d=>{postMessage({type:t,out:d})},d=>{postMessage({type:t,err:d})});break}case"release":wa(n),postMessage({type:t});break;case"run":{let{sessionId:a,inputIndices:u,inputs:d,outputIndices:l,options:p}=n;va(a,u,d,l,new Array(l.length).fill(null),p).then(o=>{o.some(r=>r[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:o},Ta([...d,...o]))},o=>{postMessage({type:t,err:o})});break}case"end-profiling":xa(n),postMessage({type:t});break;default:}}catch(a){postMessage({type:t,err:a})}}),t3=Xy?null:e=>new Worker(e??Ot,{type:"module",name:Ky})}),Yy={};Sr(Yy,{default:()=>n3});async function Qy(e={}){var t=e,n=!!globalThis.window,a=!!globalThis.WorkerGlobalScope,u=a&&self.name?.startsWith("em-pthread");t.mountExternalData=(f,g)=>{f.startsWith("./")&&(f=f.substring(2)),(t.Zc||(t.Zc=new Map)).set(f,g)},t.unmountExternalData=()=>{delete t.Zc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,ae:!0}).buffer.constructor;let d=f=>async(...g)=>{try{if(t.$c)throw Error("Session already started");let v=t.$c={Nd:g[0],errors:[]},y=await f(...g);if(t.$c!==v)throw Error("Session mismatch");t.gd?.flush();let $=v.errors;if(0<$.length){let E=await Promise.all($);if(E=E.filter(P=>P),0<E.length)throw Error(E.join(`
`))}return y}finally{t.$c=null}};t.jsepInit=(f,g)=>{if(f==="webgpu"){[t.gd,t.Dd,t.Hd,t.jd,t.Gd,t.ac,t.Id,t.Kd,t.Ed,t.Fd,t.Jd]=g;let v=t.gd;t.jsepRegisterBuffer=(y,$,E,P)=>v.registerBuffer(y,$,E,P),t.jsepGetBuffer=y=>v.getBuffer(y),t.jsepCreateDownloader=(y,$,E)=>v.createDownloader(y,$,E),t.jsepOnCreateSession=y=>{v.onCreateSession(y)},t.jsepOnReleaseSession=y=>{v.onReleaseSession(y)},t.jsepOnRunStart=y=>v.onRunStart(y),t.Ld=(y,$)=>{v.upload(y,$)}}else if(f==="webnn"){let v=g[0];[t.Zd,t.vd,t.webnnEnsureTensor,t.xd,t.webnnDownloadTensor,t.Yd,t.webnnEnableTraceEvent]=g.slice(1),t.webnnReleaseTensorId=t.vd,t.webnnUploadTensor=t.xd,t.webnnRegisterMLContext=t.Yd,t.webnnOnRunStart=y=>v.onRunStart(y),t.webnnOnRunEnd=v.onRunEnd.bind(v),t.webnnOnReleaseSession=y=>{v.onReleaseSession(y)},t.webnnCreateMLTensorDownloader=(y,$)=>v.createMLTensorDownloader(y,$),t.webnnRegisterMLTensor=(y,$,E,P)=>v.registerMLTensor(y,$,E,P),t.webnnCreateMLContext=y=>v.createMLContext(y),t.webnnRegisterMLConstant=(y,$,E,P,z,V)=>v.registerMLConstant(y,$,E,P,z,t.Zc,V),t.webnnRegisterGraphInput=v.registerGraphInput.bind(v),t.webnnIsGraphInput=v.isGraphInput.bind(v),t.webnnRegisterGraphOutput=v.registerGraphOutput.bind(v),t.webnnIsGraphOutput=v.isGraphOutput.bind(v),t.webnnCreateTemporaryTensor=v.createTemporaryTensor.bind(v),t.webnnIsGraphInputOutputTypeSupported=v.isGraphInputOutputTypeSupported.bind(v)}};let l=()=>{let f=g=>(...v)=>{let y=et;return v=g(...v),et!=y?new Promise(($,E)=>{Cn={resolve:$,reject:E}}):v};(()=>{for(let g of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[g]=f(t[g])})(),d!==void 0&&(t._OrtRun=d(t._OrtRun),t._OrtRunWithBinding=d(t._OrtRunWithBinding)),l=void 0};t.asyncInit=()=>{l?.()};var p,o,r=(f,g)=>{throw g},i=import.meta.url,s="";if(n||a){try{s=new URL(".",i).href}catch{}a&&(o=f=>{var g=new XMLHttpRequest;return g.open("GET",f,!1),g.responseType="arraybuffer",g.send(null),new Uint8Array(g.response)}),p=async f=>{if(k(f))return new Promise((v,y)=>{var $=new XMLHttpRequest;$.open("GET",f,!0),$.responseType="arraybuffer",$.onload=()=>{$.status==200||$.status==0&&$.response?v($.response):y($.status)},$.onerror=y,$.send(null)});var g=await fetch(f,{credentials:"same-origin"});if(g.ok)return g.arrayBuffer();throw Error(g.status+" : "+g.url)}}var c,h,m,b,w,x,_=console.log.bind(console),S=console.error.bind(console),I=_,O=S,A=!1,k=f=>f.startsWith("file://");function T(){wt.buffer!=j.buffer&&G()}if(u){let f=function(g){try{var v=g.data,y=v.Uc;if(y==="load"){let $=[];self.onmessage=E=>$.push(E),x=()=>{postMessage({Uc:"loaded"});for(let E of $)f(E);self.onmessage=f};for(let E of v.Ad)t[E]&&!t[E].proxy||(t[E]=(...P)=>{postMessage({Uc:"callHandler",zd:E,args:P})},E=="print"&&(I=t[E]),E=="printErr"&&(O=t[E]));wt=v.Vd,G(),h=v.Wd,Ue(),vn()}else if(y==="run"){(function($){var E=(T(),M)[$+52>>>2>>>0];$=(T(),M)[$+56>>>2>>>0],Su(E,E-$),ae(E)})(v.Tc),ei(v.Tc,0,0,1,0,0),Li(),Dn(v.Tc),R||(hu(),R=!0);try{xd(v.Pd,v.dd)}catch($){if($!="unwind")throw $}}else v.target!=="setimmediate"&&(y==="checkMailbox"?R&&hn():y&&(O(`worker: received unknown command ${y}`),O(v)))}catch($){throw fu(),$}};var R=!1;self.onunhandledrejection=g=>{throw g.reason||g},self.onmessage=f}var j,ee,W,Q,C,M,q,Y,J,re,me,B=!1;function G(){var f=wt.buffer;t.HEAP8=j=new Int8Array(f),W=new Int16Array(f),t.HEAPU8=ee=new Uint8Array(f),Q=new Uint16Array(f),t.HEAP32=C=new Int32Array(f),t.HEAPU32=M=new Uint32Array(f),q=new Float32Array(f),Y=new Float64Array(f),J=new BigInt64Array(f),re=new BigUint64Array(f)}function ne(){B=!0,u?x():ct.tb()}function ce(f){throw O(f="Aborted("+f+")"),A=!0,f=new WebAssembly.RuntimeError(f+". Build with -sASSERTIONS for more info."),w?.(f),f}function Ve(){return{a:{ma:Yc,hb:Jc,g:$d,J:Td,f:Id,o:Sd,h:Od,ha:Ed,b:Pd,T:Ad,Ia:Oo,n:Dd,_:Jo,Ya:Yo,Ea:Qo,Ga:as,Za:ss,Wa:us,Pa:ls,Va:ds,ka:ps,Fa:cs,Ca:hs,Xa:fs,Da:ms,cb:kd,ea:Nd,xa:Cd,va:Rd,da:Bd,O:Fd,H:Ld,wa:jd,Z:Kd,ya:Zd,Sa:Xd,Aa:Yd,Ja:Qd,ta:ep,fa:tp,Ra:Dn,$a:rp,R:ap,s:pp,c:Pn,ib:cp,y:hp,M:fp,D:mp,m:gp,t:$s,jb:bp,I:yp,S:_p,j:vp,v:wp,r:xp,l:$p,Ma:Tp,Na:Ip,Oa:Sp,Ka:Os,La:As,ua:Ms,eb:Ep,bb:Ap,u:Dp,aa:kp,ga:Np,ab:Pp,V:Cp,_a:zp,Ba:Rp,F:Op,U:Mp,la:yn,za:Lp,gb:Bp,fb:jc,Ta:Qs,Ua:tu,Ha:Tn,$:ru,ja:iu,Qa:su,ia:lu,lb:Jh,na:Lh,mb:Zh,oa:Fh,G:Ph,d:ah,q:eh,w:Qc,B:wh,pb:Rh,K:Ih,x:uh,pa:Mh,X:Vh,ba:zh,nb:Kh,ob:Wh,ra:Ah,qa:Ch,qb:Dh,N:Oh,Y:Bh,e:sh,A:ph,k:oh,kb:Yh,p:hh,z:fh,C:ch,E:mh,L:xh,rb:Eh,Q:qh,ca:$h,W:Gh,sb:bh,sa:gh,P:kh,i:Zc,a:wt,db:$n}}}async function Ue(){function f(y,$){var E=ct=y.exports;y={};for(let[P,z]of Object.entries(E))typeof z=="function"?(E=np(z),y[P]=E):y[P]=z;return ct=y,ct=(function(){var P=ct,z=X=>ie=>X(ie)>>>0,V=X=>()=>X()>>>0;return(P=Object.assign({},P)).ub=z(P.ub),P.Yb=V(P.Yb),P._b=z(P._b),P.mc=z(P.mc),P.nc=V(P.nc),P.rc=z(P.rc),P})(),Ni.push(ct.$b),du=(y=ct).ub,hu=y.vb,t._OrtInit=y.wb,t._OrtGetLastError=y.xb,t._OrtCreateSessionOptions=y.yb,t._OrtAppendExecutionProvider=y.zb,t._OrtAddFreeDimensionOverride=y.Ab,t._OrtAddSessionConfigEntry=y.Bb,t._OrtReleaseSessionOptions=y.Cb,t._OrtCreateSession=y.Db,t._OrtReleaseSession=y.Eb,t._OrtGetInputOutputCount=y.Fb,t._OrtGetInputOutputMetadata=y.Gb,t._OrtFree=y.Hb,t._OrtCreateTensor=y.Ib,t._OrtGetTensorData=y.Jb,t._OrtReleaseTensor=y.Kb,t._OrtCreateRunOptions=y.Lb,t._OrtAddRunConfigEntry=y.Mb,t._OrtReleaseRunOptions=y.Nb,t._OrtCreateBinding=y.Ob,t._OrtBindInput=y.Pb,t._OrtBindOutput=y.Qb,t._OrtClearBoundOutputs=y.Rb,t._OrtReleaseBinding=y.Sb,t._OrtRunWithBinding=y.Tb,t._OrtRun=y.Ub,t._OrtEndProfiling=y.Vb,t._JsepOutput=y.Wb,t._JsepGetNodeName=y.Xb,_n=y.Yb,tt=t._free=y.Zb,en=t._malloc=y._b,ei=y.bc,fu=y.cc,gu=y.dc,yu=y.ec,ti=y.fc,vu=y.gc,Tu=y.hc,he=y.ic,tn=y.jc,Su=y.kc,ae=y.lc,ri=y.mc,de=y.nc,Eu=y.oc,ni=y.pc,Au=y.qc,ku=y.rc,Nu=y.sc,ii=y.tc,Cu=y.uc,zu=y.vc,Mu=y.wc,Lu=y.xc,Vu=y.yc,qu=y.zc,Gu=y.Ac,Wu=y.Bc,Ku=y.Cc,Zu=y.Dc,Qu=y.Ec,el=y.Fc,al=y.Gc,sl=y.Hc,ul=y.Ic,ll=y.Jc,dl=y.Kc,pl=y.Lc,cl=y.Mc,fl=y.Nc,ml=y.Oc,gl=y.Pc,yl=y.Rc,ed=y.Sc,td=y.bd,rd=y.cd,nd=y.hd,id=y.kd,od=y.ld,ad=y.md,sd=y.nd,ud=y.od,ld=y.pd,dd=y.qd,pd=y.rd,cd=y.wd,hd=y.Rd,fd=y.Sd,md=y.Td,gd=y.Ud,h=$,ct}var g,v=Ve();return t.instantiateWasm?new Promise(y=>{t.instantiateWasm(v,($,E)=>{y(f($,E))})}):u?f(new WebAssembly.Instance(h,Ve()),h):(me??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",s):s+"ort-wasm-simd-threaded.jsep.wasm":new URL("/webai-client-inference-poc/assets/ort-wasm-simd-threaded.jsep-CVw3nYo7.wasm",import.meta.url).href,g=await(async function(y){var $=me;if(!c&&!k($))try{var E=fetch($,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,y)}catch(P){O(`wasm streaming compile failed: ${P}`),O("falling back to ArrayBuffer instantiation")}return(async function(P,z){try{var V=await(async function(X){if(!c)try{var ie=await p(X);return new Uint8Array(ie)}catch{}if(X==me&&c)X=new Uint8Array(c);else{if(!o)throw"both async and sync fetching of the wasm failed";X=o(X)}return X})(P);return await WebAssembly.instantiate(V,z)}catch(X){O(`failed to asynchronously prepare wasm: ${X}`),ce(X)}})($,y)})(v),f(g.instance,g.module))}class qe{name="ExitStatus";constructor(g){this.message=`Program terminated with exit(${g})`,this.status=g}}var ht=f=>{f.terminate(),f.onmessage=()=>{}},Ee=[],$e=0,Fe=null,un=f=>{vt.length==0&&(go(),mo(vt[0]));var g=vt.pop();if(!g)return 6;Kr.push(g),qt[f.Tc]=g,g.Tc=f.Tc;var v={Uc:"run",Pd:f.Od,dd:f.dd,Tc:f.Tc};return g.postMessage(v,f.ud),0},Ye=0,Te=(f,g,...v)=>{var y,$=16*v.length,E=de(),P=ri($),z=P>>>3;for(y of v)typeof y=="bigint"?((T(),J)[z++>>>0]=1n,(T(),J)[z++>>>0]=y):((T(),J)[z++>>>0]=0n,(T(),Y)[z++>>>0]=y);return f=gu(f,0,$,P,g),ae(E),f};function $n(f){if(u)return Te(0,1,f);if(m=f,!(0<Ye)){for(var g of Kr)ht(g);for(g of vt)ht(g);vt=[],Kr=[],qt={},A=!0}r(0,new qe(f))}function ki(f){if(u)return Te(1,0,f);Tn(f)}var Tn=f=>{if(m=f,u)throw ki(f),"unwind";$n(f)},vt=[],Kr=[],Ni=[],qt={},Ri=f=>{var g=f.Tc;delete qt[g],vt.push(f),Kr.splice(Kr.indexOf(f),1),f.Tc=0,yu(g)};function Li(){Ni.forEach(f=>f())}var mo=f=>new Promise(g=>{f.onmessage=$=>{var E=$.data;if($=E.Uc,E.ad&&E.ad!=_n()){var P=qt[E.ad];P?P.postMessage(E,E.ud):O(`Internal error! Worker sent a message "${$}" to target pthread ${E.ad}, but that thread no longer exists!`)}else $==="checkMailbox"?hn():$==="spawnThread"?un(E):$==="cleanupThread"?cn(()=>{Ri(qt[E.Qd])}):$==="loaded"?(f.loaded=!0,g(f)):E.target==="setimmediate"?f.postMessage(E):$==="uncaughtException"?f.onerror(E.error):$==="callHandler"?t[E.zd](...E.args):$&&O(`worker sent an unknown command ${$}`)},f.onerror=$=>{throw O(`worker sent an error! ${$.filename}:${$.lineno}: ${$.message}`),$};var v,y=[];for(v of[])t.propertyIsEnumerable(v)&&y.push(v);f.postMessage({Uc:"load",Ad:y,Vd:wt,Wd:h})});function go(){var f=new Worker((()=>{let g=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new g("ort.all.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});vt.push(f)}var wt,xd=(f,g)=>{Ye=0,f=ii(f,g),0<Ye?m=f:ti(f)},ln=[],dn=0;function $d(f){var g=new In(f>>>=0);return(T(),j)[g.Vc+12>>>0]==0&&(bo(g,!0),dn--),yo(g,!1),ln.push(g),ku(f)}var Tr=0,Td=()=>{he(0,0);var f=ln.pop();Eu(f.ed),Tr=0};function bo(f,g){g=g?1:0,(T(),j)[f.Vc+12>>>0]=g}function yo(f,g){g=g?1:0,(T(),j)[f.Vc+13>>>0]=g}class In{constructor(g){this.ed=g,this.Vc=g-24}}var Sn=f=>{var g=Tr;if(!g)return tn(0),0;var v=new In(g);(T(),M)[v.Vc+16>>>2>>>0]=g;var y=(T(),M)[v.Vc+4>>>2>>>0];if(!y)return tn(0),g;for(var $ of f){if($===0||$===y)break;if(Au($,y,v.Vc+16))return tn($),g}return tn(y),g};function Id(){return Sn([])}function Sd(f){return Sn([f>>>0])}function Od(f,g,v,y){return Sn([f>>>0,g>>>0,v>>>0,y>>>0])}var Ed=()=>{var f=ln.pop();f||ce("no exception to throw");var g=f.ed;throw(T(),j)[f.Vc+13>>>0]==0&&(ln.push(f),yo(f,!0),bo(f,!1),dn++),ni(g),Tr=g};function Pd(f,g,v){var y=new In(f>>>=0);throw g>>>=0,v>>>=0,(T(),M)[y.Vc+16>>>2>>>0]=0,(T(),M)[y.Vc+4>>>2>>>0]=g,(T(),M)[y.Vc+8>>>2>>>0]=v,ni(f),dn++,Tr=f}var Ad=()=>dn;function $o(f,g,v,y){return u?Te(2,1,f,g,v,y):Oo(f,g,v,y)}function Oo(f,g,v,y){if(f>>>=0,g>>>=0,v>>>=0,y>>>=0,!globalThis.SharedArrayBuffer)return 6;var $=[];return u&&$.length===0?$o(f,g,v,y):(f={Od:v,Tc:f,dd:y,ud:$},u?(f.Uc="spawnThread",postMessage(f,$),0):un(f))}function Dd(f){throw Tr||=f>>>0,Tr}var Ao=globalThis.TextDecoder&&new TextDecoder,Zo=(f,g,v,y)=>{if(v=g+v,y)return v;for(;f[g]&&!(g>=v);)++g;return g},Xo=(f,g=0,v,y)=>{if(16<(v=Zo(f,g>>>=0,v,y))-g&&f.buffer&&Ao)return Ao.decode(f.buffer instanceof ArrayBuffer?f.subarray(g,v):f.slice(g,v));for(y="";g<v;){var $=f[g++];if(128&$){var E=63&f[g++];if((224&$)==192)y+=String.fromCharCode((31&$)<<6|E);else{var P=63&f[g++];65536>($=(240&$)==224?(15&$)<<12|E<<6|P:(7&$)<<18|E<<12|P<<6|63&f[g++])?y+=String.fromCharCode($):($-=65536,y+=String.fromCharCode(55296|$>>10,56320|1023&$))}}else y+=String.fromCharCode($)}return y},Ce=(f,g,v)=>(f>>>=0)?Xo((T(),ee),f,g,v):"";function Jo(f,g,v){return u?Te(3,1,f,g,v):0}function Yo(f,g){if(u)return Te(4,1,f,g)}function Qo(f,g){if(u)return Te(5,1,f,g)}function as(f,g,v){if(u)return Te(6,1,f,g,v)}function ss(f,g,v){return u?Te(7,1,f,g,v):0}function us(f,g){if(u)return Te(8,1,f,g)}function ls(f,g,v){if(u)return Te(9,1,f,g,v)}function ds(f,g,v,y){if(u)return Te(10,1,f,g,v,y)}function ps(f,g,v,y){if(u)return Te(11,1,f,g,v,y)}function cs(f,g,v,y){if(u)return Te(12,1,f,g,v,y)}function hs(f){if(u)return Te(13,1,f)}function fs(f,g){if(u)return Te(14,1,f,g)}function ms(f,g,v){if(u)return Te(15,1,f,g,v)}var kd=()=>ce(""),Qe=f=>{f>>>=0;for(var g="";;){var v=(T(),ee)[f++>>>0];if(!v)return g;g+=String.fromCharCode(v)}},On={},En={},Ir=class extends Error{constructor(f){super(f),this.name="BindingError"}};function ut(f,g,v={}){return(function(y,$,E={}){var P=$.name;if(!y)throw new Ir(`type "${P}" must have a positive integer typeid pointer`);if(En.hasOwnProperty(y)){if(E.Bd)return;throw new Ir(`Cannot register type '${P}' twice`)}En[y]=$,On.hasOwnProperty(y)&&($=On[y],delete On[y],$.forEach(z=>z()))})(f,g,v)}var gs=(f,g,v)=>{switch(g){case 1:return v?y=>(T(),j)[y>>>0]:y=>(T(),ee)[y>>>0];case 2:return v?y=>(T(),W)[y>>>1>>>0]:y=>(T(),Q)[y>>>1>>>0];case 4:return v?y=>(T(),C)[y>>>2>>>0]:y=>(T(),M)[y>>>2>>>0];case 8:return v?y=>(T(),J)[y>>>3>>>0]:y=>(T(),re)[y>>>3>>>0];default:throw new TypeError(`invalid integer width (${g}): ${f}`)}};function Nd(f,g,v,y,$){f>>>=0,v>>>=0,g=Qe(g>>>0);let E=P=>P;if(y=y===0n){let P=8*v;E=z=>BigInt.asUintN(P,z),$=E($)}ut(f,{name:g,Qc:E,Xc:(P,z)=>(typeof z=="number"&&(z=BigInt(z)),z),Wc:gs(g,v,!y),Yc:null})}function Cd(f,g,v,y){ut(f>>>=0,{name:g=Qe(g>>>0),Qc:function($){return!!$},Xc:function($,E){return E?v:y},Wc:function($){return this.Qc((T(),ee)[$>>>0])},Yc:null})}var bs=[],Ht=[0,1,,1,null,1,!0,1,!1,1];function Pn(f){9<(f>>>=0)&&--Ht[f+1]==0&&(Ht[f]=void 0,bs.push(f))}var Ge=f=>{if(!f)throw new Ir(`Cannot use deleted val. handle = ${f}`);return Ht[f]},Xe=f=>{switch(f){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let g=bs.pop()||Ht.length;return Ht[g]=f,Ht[g+1]=1,g}};function An(f){return this.Qc((T(),M)[f>>>2>>>0])}var zd={name:"emscripten::val",Qc:f=>{var g=Ge(f);return Pn(f),g},Xc:(f,g)=>Xe(g),Wc:An,Yc:null};function Rd(f){return ut(f>>>0,zd)}var Md=(f,g)=>{switch(g){case 4:return function(v){return this.Qc((T(),q)[v>>>2>>>0])};case 8:return function(v){return this.Qc((T(),Y)[v>>>3>>>0])};default:throw new TypeError(`invalid float width (${g}): ${f}`)}};function Bd(f,g,v){v>>>=0,ut(f>>>=0,{name:g=Qe(g>>>0),Qc:y=>y,Xc:(y,$)=>$,Wc:Md(g,v),Yc:null})}function Fd(f,g,v,y,$){f>>>=0,v>>>=0,g=Qe(g>>>0);let E=z=>z;if(y===0){var P=32-8*v;E=z=>z<<P>>>P,$=E($)}ut(f,{name:g,Qc:E,Xc:(z,V)=>V,Wc:gs(g,v,y!==0),Yc:null})}function Ld(f,g,v){function y(E){var P=(T(),M)[E>>>2>>>0];return E=(T(),M)[E+4>>>2>>>0],new $((T(),j).buffer,E,P)}var $=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][g];ut(f>>>=0,{name:v=Qe(v>>>0),Qc:y,Wc:y},{Bd:!0})}var It=(f,g,v)=>{var y=(T(),ee);if(g>>>=0,0<v){var $=g;v=g+v-1;for(var E=0;E<f.length;++E){var P=f.codePointAt(E);if(127>=P){if(g>=v)break;y[g++>>>0]=P}else if(2047>=P){if(g+1>=v)break;y[g++>>>0]=192|P>>6,y[g++>>>0]=128|63&P}else if(65535>=P){if(g+2>=v)break;y[g++>>>0]=224|P>>12,y[g++>>>0]=128|P>>6&63,y[g++>>>0]=128|63&P}else{if(g+3>=v)break;y[g++>>>0]=240|P>>18,y[g++>>>0]=128|P>>12&63,y[g++>>>0]=128|P>>6&63,y[g++>>>0]=128|63&P,E++}}y[g>>>0]=0,f=g-$}else f=0;return f},pn=f=>{for(var g=0,v=0;v<f.length;++v){var y=f.charCodeAt(v);127>=y?g++:2047>=y?g+=2:55296<=y&&57343>=y?(g+=4,++v):g+=3}return g};function jd(f,g){ut(f>>>=0,{name:g=Qe(g>>>0),Qc(v){var y=(T(),M)[v>>>2>>>0];return y=Ce(v+4,y,!0),tt(v),y},Xc(v,y){y instanceof ArrayBuffer&&(y=new Uint8Array(y));var $=typeof y=="string";if(!($||ArrayBuffer.isView(y)&&y.BYTES_PER_ELEMENT==1))throw new Ir("Cannot pass non-string to std::string");var E=$?pn(y):y.length,P=en(4+E+1),z=P+4;return(T(),M)[P>>>2>>>0]=E,$?It(y,z,E+1):(T(),ee).set(y,z>>>0),v!==null&&v.push(tt,P),P},Wc:An,Yc(v){tt(v)}})}var ys=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Vd=(f,g,v)=>{if(f>>>=1,16<(g=Zo((T(),Q),f,g/2,v))-f&&ys)return ys.decode((T(),Q).slice(f,g));for(v="";f<g;++f){var y=(T(),Q)[f>>>0];v+=String.fromCharCode(y)}return v},Ud=(f,g,v)=>{if(v??=2147483647,2>v)return 0;var y=g;v=(v-=2)<2*f.length?v/2:f.length;for(var $=0;$<v;++$){var E=f.charCodeAt($);(T(),W)[g>>>1>>>0]=E,g+=2}return(T(),W)[g>>>1>>>0]=0,g-y},qd=f=>2*f.length,Hd=(f,g,v)=>{var y="";f>>>=2;for(var $=0;!($>=g/4);$++){var E=(T(),M)[f+$>>>0];if(!E&&!v)break;y+=String.fromCodePoint(E)}return y},Gd=(f,g,v)=>{if(g>>>=0,v??=2147483647,4>v)return 0;var y=g;v=y+v-4;for(var $=0;$<f.length;++$){var E=f.codePointAt($);if(65535<E&&$++,(T(),C)[g>>>2>>>0]=E,(g+=4)+4>v)break}return(T(),C)[g>>>2>>>0]=0,g-y},Wd=f=>{for(var g=0,v=0;v<f.length;++v)65535<f.codePointAt(v)&&v++,g+=4;return g};function Kd(f,g,v){if(f>>>=0,g>>>=0,v=Qe(v>>>=0),g===2)var y=Vd,$=Ud,E=qd;else y=Hd,$=Gd,E=Wd;ut(f,{name:v,Qc:P=>{var z=(T(),M)[P>>>2>>>0];return z=y(P+4,z*g,!0),tt(P),z},Xc:(P,z)=>{if(typeof z!="string")throw new Ir(`Cannot pass non-string to C++ string type ${v}`);var V=E(z),X=en(4+V+g);return(T(),M)[X>>>2>>>0]=V/g,$(z,X+4,V+g),P!==null&&P.push(tt,X),X},Wc:An,Yc(P){tt(P)}})}function Zd(f,g){ut(f>>>=0,{Cd:!0,name:g=Qe(g>>>0),Qc:()=>{},Xc:()=>{}})}function Xd(f){ei(f>>>0,!a,1,!n,131072,!1),Li()}var cn=f=>{if(!A)try{if(f(),!(0<Ye))try{u?_n()&&ti(m):Tn(m)}catch(g){g instanceof qe||g=="unwind"||r(0,g)}}catch(g){g instanceof qe||g=="unwind"||r(0,g)}},Jd=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Dn(f){f>>>=0,Jd||(Atomics.waitAsync((T(),C),f>>>2,f).value.then(hn),f+=128,Atomics.store((T(),C),f>>>2,1))}var hn=()=>cn(()=>{var f=_n();f&&(Dn(f),Tu())});function Yd(f,g){(f>>>=0)==g>>>0?setTimeout(hn):u?postMessage({ad:f,Uc:"checkMailbox"}):(f=qt[f])&&f.postMessage({Uc:"checkMailbox"})}var kn=[];function Qd(f,g,v,y,$){for(g>>>=0,$>>>=0,kn.length=0,v=$>>>3,y=$+y>>>3;v<y;){var E;E=(T(),J)[v++>>>0]?(T(),J)[v++>>>0]:(T(),Y)[v++>>>0],kn.push(E)}return(g?oi[g]:Xc[f])(...kn)}var ep=()=>{Ye=0};function tp(f){f>>>=0,u?postMessage({Uc:"cleanupThread",Qd:f}):Ri(qt[f])}function rp(f){}var fn=f=>{try{f()}catch(g){ce(g)}};function np(f){var g=(...v)=>{mn.push(f);try{return f(...v)}finally{A||(mn.pop(),et&&Et===1&&mn.length===0&&(Et=0,Ye+=1,fn(fd),typeof Fibers<"u"&&Fibers.ce()))}};return ws.set(f,g),g}var Et=0,et=null,_s=0,mn=[],Nn=new Map,vs=new Map,ws=new Map,ip=0,Cn=null,op=[],xs=f=>(function(g){if(!A){if(Et===0){var v=!1,y=!1;g(($=0)=>{if(!A&&(_s=$,v=!0,y)){Et=2,fn(()=>md(et)),typeof MainLoop<"u"&&MainLoop.yd&&MainLoop.resume(),$=!1;try{var E=(function(){var V=(T(),C)[et+8>>>2>>>0];return V=vs.get(V),V=ws.get(V),--Ye,V()})()}catch(V){E=V,$=!0}var P=!1;if(!et){var z=Cn;z&&(Cn=null,($?z.reject:z.resolve)(E),P=!0)}if($&&!P)throw E}}),y=!0,v||(Et=1,et=(function(){var $=en(65548),E=$+12;if((T(),M)[$>>>2>>>0]=E,(T(),M)[$+4>>>2>>>0]=E+65536,E=mn[0],!Nn.has(E)){var P=ip++;Nn.set(E,P),vs.set(P,E)}return E=Nn.get(E),(T(),C)[$+8>>>2>>>0]=E,$})(),typeof MainLoop<"u"&&MainLoop.yd&&MainLoop.pause(),fn(()=>hd(et)))}else Et===2?(Et=0,fn(gd),tt(et),et=null,op.forEach(cn)):ce(`invalid state: ${Et}`);return _s}})(g=>{f().then(g)});function ap(f){return f>>>=0,xs(async()=>{var g=await Ge(f);return Xe(g)})}var Rn=[],sp=f=>{var g=Rn.length;return Rn.push(f),g},up=(f,g)=>{for(var v=Array(f),y=0;y<f;++y){var $=y,E=(T(),M)[g+4*y>>>2>>>0],P=En[E];if(P===void 0)throw f=`parameter ${y}`,E=du(E),g=Qe(E),tt(E),new Ir(`${f} has unknown type ${g}`);v[$]=P}return v},lp=(f,g,v)=>{var y=[];return f=f(y,v),y.length&&((T(),M)[g>>>2>>>0]=Xe(y)),f},dp={},gn=f=>{var g=dp[f];return g===void 0?Qe(f):g};function pp(f,g,v){var[y,...$]=up(f,g>>>0);g=y.Xc.bind(y);var E=$.map(V=>V.Wc.bind(V));f--;var P={toValue:Ge};switch(f=E.map((V,X)=>{var ie=`argFromPtr${X}`;return P[ie]=V,`${ie}(args${X?"+"+8*X:""})`}),v){case 0:var z="toValue(handle)";break;case 2:z="new (toValue(handle))";break;case 3:z="";break;case 1:P.getStringOrSymbol=gn,z="toValue(handle)[getStringOrSymbol(methodName)]"}return z+=`(${f})`,y.Cd||(P.toReturnWire=g,P.emval_returnValue=lp,z=`return emval_returnValue(toReturnWire, destructorsRef, ${z})`),z=`return function (handle, methodName, destructorsRef, args) {
  ${z}
  }`,v=new Function(Object.keys(P),z)(...Object.values(P)),z=`methodCaller<(${$.map(V=>V.name)}) => ${y.name}>`,sp(Object.defineProperty(v,"name",{value:z}))}function cp(f,g){return g>>>=0,(f=Ge(f>>>0))==Ge(g)}function hp(f){return(f>>>=0)?(f=gn(f),Xe(globalThis[f])):Xe(globalThis)}function fp(f){return f=gn(f>>>0),Xe(t[f])}function mp(f,g){return g>>>=0,f=Ge(f>>>0),g=Ge(g),Xe(f[g])}function gp(f){9<(f>>>=0)&&(Ht[f+1]+=1)}function $s(f,g,v,y,$){return Rn[f>>>0](g>>>0,v>>>0,y>>>0,$>>>0)}function bp(f,g,v,y,$){return $s(f>>>0,g>>>0,v>>>0,y>>>0,$>>>0)}function yp(){return Xe([])}function _p(f){f=Ge(f>>>0);for(var g=Array(f.length),v=0;v<f.length;v++)g[v]=f[v];return Xe(g)}function vp(f){return Xe(gn(f>>>0))}function wp(){return Xe({})}function xp(f){for(var g=Ge(f>>>=0);g.length;){var v=g.pop();g.pop()(v)}Pn(f)}function $p(f,g,v){g>>>=0,v>>>=0,f=Ge(f>>>0),g=Ge(g),v=Ge(v),f[g]=v}function Tp(f,g){f=-9007199254740992>f||9007199254740992<f?NaN:Number(f),g>>>=0,f=new Date(1e3*f),(T(),C)[g>>>2>>>0]=f.getUTCSeconds(),(T(),C)[g+4>>>2>>>0]=f.getUTCMinutes(),(T(),C)[g+8>>>2>>>0]=f.getUTCHours(),(T(),C)[g+12>>>2>>>0]=f.getUTCDate(),(T(),C)[g+16>>>2>>>0]=f.getUTCMonth(),(T(),C)[g+20>>>2>>>0]=f.getUTCFullYear()-1900,(T(),C)[g+24>>>2>>>0]=f.getUTCDay(),f=(f.getTime()-Date.UTC(f.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(T(),C)[g+28>>>2>>>0]=f}var Ts=f=>f%4==0&&(f%100!=0||f%400==0),Is=[0,31,60,91,121,152,182,213,244,274,305,335],Ss=[0,31,59,90,120,151,181,212,243,273,304,334];function Ip(f,g){f=-9007199254740992>f||9007199254740992<f?NaN:Number(f),g>>>=0,f=new Date(1e3*f),(T(),C)[g>>>2>>>0]=f.getSeconds(),(T(),C)[g+4>>>2>>>0]=f.getMinutes(),(T(),C)[g+8>>>2>>>0]=f.getHours(),(T(),C)[g+12>>>2>>>0]=f.getDate(),(T(),C)[g+16>>>2>>>0]=f.getMonth(),(T(),C)[g+20>>>2>>>0]=f.getFullYear()-1900,(T(),C)[g+24>>>2>>>0]=f.getDay();var v=(Ts(f.getFullYear())?Is:Ss)[f.getMonth()]+f.getDate()-1|0;(T(),C)[g+28>>>2>>>0]=v,(T(),C)[g+36>>>2>>>0]=-60*f.getTimezoneOffset(),v=new Date(f.getFullYear(),6,1).getTimezoneOffset();var y=new Date(f.getFullYear(),0,1).getTimezoneOffset();f=0|(v!=y&&f.getTimezoneOffset()==Math.min(y,v)),(T(),C)[g+32>>>2>>>0]=f}function Sp(f){f>>>=0;var g=new Date((T(),C)[f+20>>>2>>>0]+1900,(T(),C)[f+16>>>2>>>0],(T(),C)[f+12>>>2>>>0],(T(),C)[f+8>>>2>>>0],(T(),C)[f+4>>>2>>>0],(T(),C)[f>>>2>>>0],0),v=(T(),C)[f+32>>>2>>>0],y=g.getTimezoneOffset(),$=new Date(g.getFullYear(),6,1).getTimezoneOffset(),E=new Date(g.getFullYear(),0,1).getTimezoneOffset(),P=Math.min(E,$);return 0>v?(T(),C)[f+32>>>2>>>0]=+($!=E&&P==y):0<v!=(P==y)&&($=Math.max(E,$),g.setTime(g.getTime()+6e4*((0<v?P:$)-y))),(T(),C)[f+24>>>2>>>0]=g.getDay(),v=(Ts(g.getFullYear())?Is:Ss)[g.getMonth()]+g.getDate()-1|0,(T(),C)[f+28>>>2>>>0]=v,(T(),C)[f>>>2>>>0]=g.getSeconds(),(T(),C)[f+4>>>2>>>0]=g.getMinutes(),(T(),C)[f+8>>>2>>>0]=g.getHours(),(T(),C)[f+12>>>2>>>0]=g.getDate(),(T(),C)[f+16>>>2>>>0]=g.getMonth(),(T(),C)[f+20>>>2>>>0]=g.getYear(),f=g.getTime(),BigInt(isNaN(f)?-1:f/1e3)}function Os(f,g,v,y,$,E,P){return u?Te(16,1,f,g,v,y,$,E,P):-52}function As(f,g,v,y,$,E){if(u)return Te(17,1,f,g,v,y,$,E)}var Qr={},Op=()=>performance.timeOrigin+performance.now();function Ms(f,g){if(u)return Te(18,1,f,g);if(Qr[f]&&(clearTimeout(Qr[f].id),delete Qr[f]),!g)return 0;var v=setTimeout(()=>{delete Qr[f],cn(()=>vu(f,performance.timeOrigin+performance.now()))},g);return Qr[f]={id:v,be:g},0}function Ep(f,g,v,y){f>>>=0,g>>>=0,v>>>=0,y>>>=0;var $=new Date().getFullYear(),E=new Date($,0,1).getTimezoneOffset();$=new Date($,6,1).getTimezoneOffset();var P=Math.max(E,$);(T(),M)[f>>>2>>>0]=60*P,(T(),C)[g>>>2>>>0]=+(E!=$),f=(g=z=>{var V=Math.abs(z);return`UTC${0<=z?"-":"+"}${String(Math.floor(V/60)).padStart(2,"0")}${String(V%60).padStart(2,"0")}`})(E),g=g($),$<E?(It(f,v,17),It(g,y,17)):(It(f,y,17),It(g,v,17))}var Pp=()=>Date.now();function Ap(f,g,v){return v>>>=0,0<=f&&3>=f?(f===0?f=Date.now():f=performance.timeOrigin+performance.now(),f=Math.round(1e6*f),(T(),J)[v>>>3>>>0]=BigInt(f),0):28}var Ln=[],js=(f,g)=>{Ln.length=0;for(var v;v=(T(),ee)[f++>>>0];){var y=v!=105;g+=(y&=v!=112)&&g%8?4:0,Ln.push(v==112?(T(),M)[g>>>2>>>0]:v==106?(T(),J)[g>>>3>>>0]:v==105?(T(),C)[g>>>2>>>0]:(T(),Y)[g>>>3>>>0]),g+=y?8:4}return Ln};function Dp(f,g,v){return f>>>=0,g=js(g>>>0,v>>>0),oi[f](...g)}function kp(f,g,v){return f>>>=0,g=js(g>>>0,v>>>0),oi[f](...g)}var Np=()=>{};function Cp(f,g){return O(Ce(f>>>0,g>>>0))}var zp=()=>{throw Ye+=1,"unwind"};function Rp(){return 4294901760}var Mp=()=>navigator.hardwareConcurrency,Gt={},bn=f=>{var g;return(g=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(f))?+g[1]:(g=/:(\d+):\d+(?:\)|$)/.exec(f))?2147483648|+g[1]:0},Hs=f=>{for(var g of f)(f=bn(g))&&(Gt[f]=g)};function Bp(){var f=Error().stack.toString().split(`
`);return f[0]=="Error"&&f.shift(),Hs(f),Gt.sd=bn(f[3]),Gt.Md=f,Gt.sd}function yn(f){if(!(f=Gt[f>>>0]))return 0;var g;if(g=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(f))f=g[1];else if(g=/^\s+at (.*) \(.*\)$/.exec(f))f=g[1];else{if(!(g=/^(.+?)@/.exec(f)))return 0;f=g[1]}tt(yn.td??0),g=pn(f)+1;var v=en(g);return v&&It(f,v,g),yn.td=v,yn.td}function Lp(f){f>>>=0;var g=(T(),ee).length;if(f<=g||4294901760<f)return!1;for(var v=1;4>=v;v*=2){var y=g*(1+.2/v);y=Math.min(y,f+100663296);e:{y=(Math.min(4294901760,65536*Math.ceil(Math.max(f,y)/65536))-wt.buffer.byteLength+65535)/65536|0;try{wt.grow(y),G();var $=1;break e}catch{}$=void 0}if($)return!0}return!1}function jc(f,g,v){if(f>>>=0,g>>>=0,Gt.sd==f)var y=Gt.Md;else(y=Error().stack.toString().split(`
`))[0]=="Error"&&y.shift(),Hs(y);for(var $=3;y[$]&&bn(y[$])!=f;)++$;for(f=0;f<v&&y[f+$];++f)(T(),C)[g+4*f>>>2>>>0]=bn(y[f+$]);return f}var Zn,Xn={},Ks=()=>{if(!Zn){var f,g={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(f in Xn)Xn[f]===void 0?delete g[f]:g[f]=Xn[f];var v=[];for(f in g)v.push(`${f}=${g[f]}`);Zn=v}return Zn};function Qs(f,g){if(u)return Te(19,1,f,g);f>>>=0,g>>>=0;var v,y=0,$=0;for(v of Ks()){var E=g+y;(T(),M)[f+$>>>2>>>0]=E,y+=It(v,E,1/0)+1,$+=4}return 0}function tu(f,g){if(u)return Te(20,1,f,g);f>>>=0,g>>>=0;var v=Ks();for(var y of((T(),M)[f>>>2>>>0]=v.length,f=0,v))f+=pn(y)+1;return(T(),M)[g>>>2>>>0]=f,0}function ru(f){return u?Te(21,1,f):52}function iu(f,g,v,y){return u?Te(22,1,f,g,v,y):52}function su(f,g,v,y){return u?Te(23,1,f,g,v,y):70}var Kc=[null,[],[]];function lu(f,g,v,y){if(u)return Te(24,1,f,g,v,y);g>>>=0,v>>>=0,y>>>=0;for(var $=0,E=0;E<v;E++){var P=(T(),M)[g>>>2>>>0],z=(T(),M)[g+4>>>2>>>0];g+=8;for(var V=0;V<z;V++){var X=f,ie=(T(),ee)[P+V>>>0],ye=Kc[X];ie===0||ie===10?((X===1?I:O)(Xo(ye)),ye.length=0):ye.push(ie)}$+=z}return(T(),M)[y>>>2>>>0]=$,0}function Zc(f){return f>>>0}u||(function(){for(var f=t.numThreads-1;f--;)go();Ee.push(async()=>{var g=(async function(){if(!u)return Promise.all(vt.map(mo))})();$e++,await g,--$e==0&&Fe&&(g=Fe,Fe=null,g())})})(),u||(wt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),G()),t.wasmBinary&&(c=t.wasmBinary),t.stackSave=()=>de(),t.stackRestore=f=>ae(f),t.stackAlloc=f=>ri(f),t.setValue=function(f,g,v="i8"){switch(v.endsWith("*")&&(v="*"),v){case"i1":case"i8":(T(),j)[f>>>0]=g;break;case"i16":(T(),W)[f>>>1>>>0]=g;break;case"i32":(T(),C)[f>>>2>>>0]=g;break;case"i64":(T(),J)[f>>>3>>>0]=BigInt(g);break;case"float":(T(),q)[f>>>2>>>0]=g;break;case"double":(T(),Y)[f>>>3>>>0]=g;break;case"*":(T(),M)[f>>>2>>>0]=g;break;default:ce(`invalid type for setValue: ${v}`)}},t.getValue=function(f,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":return(T(),j)[f>>>0];case"i16":return(T(),W)[f>>>1>>>0];case"i32":return(T(),C)[f>>>2>>>0];case"i64":return(T(),J)[f>>>3>>>0];case"float":return(T(),q)[f>>>2>>>0];case"double":return(T(),Y)[f>>>3>>>0];case"*":return(T(),M)[f>>>2>>>0];default:ce(`invalid type for getValue: ${g}`)}},t.UTF8ToString=Ce,t.stringToUTF8=It,t.lengthBytesUTF8=pn;var du,hu,_n,tt,en,ei,fu,gu,yu,ti,vu,Tu,he,tn,Su,ae,ri,de,Eu,ni,Au,ku,Nu,ii,Cu,zu,Mu,Lu,Vu,qu,Gu,Wu,Ku,Zu,Qu,el,al,sl,ul,ll,dl,pl,cl,fl,ml,gl,yl,ed,td,rd,nd,id,od,ad,sd,ud,ld,dd,pd,cd,hd,fd,md,gd,ct,Xc=[$n,ki,$o,Jo,Yo,Qo,as,ss,us,ls,ds,ps,cs,hs,fs,ms,Os,As,Ms,Qs,tu,ru,iu,su,lu],oi={927820:(f,g,v,y,$)=>{if(t===void 0||!t.Zc)return 1;if((f=Ce(Number(f>>>0))).startsWith("./")&&(f=f.substring(2)),!(f=t.Zc.get(f)))return 2;if(g=Number(g>>>0),v=Number(v>>>0),y=Number(y>>>0),g+v>f.byteLength)return 3;try{let E=f.subarray(g,g+v);switch($){case 0:(T(),ee).set(E,y>>>0);break;case 1:t.Xd?t.Xd(y,E):t.Ld(y,E);break;default:return 4}return 0}catch{return 4}},928644:(f,g,v)=>{t.xd(f,(T(),ee).subarray(g>>>0,g+v>>>0))},928708:()=>t.Zd(),928750:f=>{t.vd(f)},928787:()=>{t.Ed()},928818:()=>{t.Fd()},928847:()=>{t.Jd()},928872:f=>t.Dd(f),928905:f=>t.Hd(f),928937:(f,g,v)=>{t.jd(Number(f),Number(g),Number(v),!0)},929e3:(f,g,v)=>{t.jd(Number(f),Number(g),Number(v))},929057:()=>typeof wasmOffsetConverter<"u",929114:f=>{t.ac("Abs",f,void 0)},929165:f=>{t.ac("Neg",f,void 0)},929216:f=>{t.ac("Floor",f,void 0)},929269:f=>{t.ac("Ceil",f,void 0)},929321:f=>{t.ac("Reciprocal",f,void 0)},929379:f=>{t.ac("Sqrt",f,void 0)},929431:f=>{t.ac("Exp",f,void 0)},929482:f=>{t.ac("Erf",f,void 0)},929533:f=>{t.ac("Sigmoid",f,void 0)},929588:(f,g,v)=>{t.ac("HardSigmoid",f,{alpha:g,beta:v})},929667:f=>{t.ac("Log",f,void 0)},929718:f=>{t.ac("Sin",f,void 0)},929769:f=>{t.ac("Cos",f,void 0)},929820:f=>{t.ac("Tan",f,void 0)},929871:f=>{t.ac("Asin",f,void 0)},929923:f=>{t.ac("Acos",f,void 0)},929975:f=>{t.ac("Atan",f,void 0)},930027:f=>{t.ac("Sinh",f,void 0)},930079:f=>{t.ac("Cosh",f,void 0)},930131:f=>{t.ac("Asinh",f,void 0)},930184:f=>{t.ac("Acosh",f,void 0)},930237:f=>{t.ac("Atanh",f,void 0)},930290:f=>{t.ac("Tanh",f,void 0)},930342:f=>{t.ac("Not",f,void 0)},930393:(f,g,v)=>{t.ac("Clip",f,{min:g,max:v})},930462:f=>{t.ac("Clip",f,void 0)},930514:(f,g)=>{t.ac("Elu",f,{alpha:g})},930572:f=>{t.ac("Gelu",f,void 0)},930624:f=>{t.ac("Relu",f,void 0)},930676:(f,g)=>{t.ac("LeakyRelu",f,{alpha:g})},930740:(f,g)=>{t.ac("ThresholdedRelu",f,{alpha:g})},930810:(f,g)=>{t.ac("Cast",f,{to:g})},930868:f=>{t.ac("Add",f,void 0)},930919:f=>{t.ac("Sub",f,void 0)},930970:f=>{t.ac("Mul",f,void 0)},931021:f=>{t.ac("Div",f,void 0)},931072:f=>{t.ac("Pow",f,void 0)},931123:f=>{t.ac("Equal",f,void 0)},931176:f=>{t.ac("Greater",f,void 0)},931231:f=>{t.ac("GreaterOrEqual",f,void 0)},931293:f=>{t.ac("Less",f,void 0)},931345:f=>{t.ac("LessOrEqual",f,void 0)},931404:(f,g,v,y,$)=>{t.ac("ReduceMean",f,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:y?Array.from((T(),C).subarray(Number(y)>>>0,Number($)>>>0)):[]})},931579:(f,g,v,y,$)=>{t.ac("ReduceMax",f,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:y?Array.from((T(),C).subarray(Number(y)>>>0,Number($)>>>0)):[]})},931753:(f,g,v,y,$)=>{t.ac("ReduceMin",f,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:y?Array.from((T(),C).subarray(Number(y)>>>0,Number($)>>>0)):[]})},931927:(f,g,v,y,$)=>{t.ac("ReduceProd",f,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:y?Array.from((T(),C).subarray(Number(y)>>>0,Number($)>>>0)):[]})},932102:(f,g,v,y,$)=>{t.ac("ReduceSum",f,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:y?Array.from((T(),C).subarray(Number(y)>>>0,Number($)>>>0)):[]})},932276:(f,g,v,y,$)=>{t.ac("ReduceL1",f,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:y?Array.from((T(),C).subarray(Number(y)>>>0,Number($)>>>0)):[]})},932449:(f,g,v,y,$)=>{t.ac("ReduceL2",f,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:y?Array.from((T(),C).subarray(Number(y)>>>0,Number($)>>>0)):[]})},932622:(f,g,v,y,$)=>{t.ac("ReduceLogSum",f,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:y?Array.from((T(),C).subarray(Number(y)>>>0,Number($)>>>0)):[]})},932799:(f,g,v,y,$)=>{t.ac("ReduceSumSquare",f,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:y?Array.from((T(),C).subarray(Number(y)>>>0,Number($)>>>0)):[]})},932979:(f,g,v,y,$)=>{t.ac("ReduceLogSumExp",f,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:y?Array.from((T(),C).subarray(Number(y)>>>0,Number($)>>>0)):[]})},933159:f=>{t.ac("Where",f,void 0)},933212:(f,g,v)=>{t.ac("Transpose",f,{perm:g?Array.from((T(),C).subarray(Number(g)>>>0,Number(v)>>>0)):[]})},933336:(f,g,v,y)=>{t.ac("DepthToSpace",f,{blocksize:g,mode:Ce(v),format:y?"NHWC":"NCHW"})},933469:(f,g,v,y)=>{t.ac("DepthToSpace",f,{blocksize:g,mode:Ce(v),format:y?"NHWC":"NCHW"})},933602:(f,g,v,y,$,E,P,z,V,X,ie,ye,we,xe,At)=>{t.ac("ConvTranspose",f,{format:V?"NHWC":"NCHW",autoPad:g,dilations:[v],group:y,kernelShape:[$],pads:[E,P],strides:[z],wIsConst:()=>!!(T(),j)[X>>>0],outputPadding:ie?Array.from((T(),C).subarray(Number(ie)>>>0,Number(ye)>>>0)):[],outputShape:we?Array.from((T(),C).subarray(Number(we)>>>0,Number(xe)>>>0)):[],activation:Ce(At)})},934035:(f,g,v,y,$,E,P,z,V,X,ie,ye,we,xe)=>{t.ac("ConvTranspose",f,{format:z?"NHWC":"NCHW",autoPad:g,dilations:Array.from((T(),C).subarray(Number(v)>>>0,2+(Number(v)>>>0)>>>0)),group:y,kernelShape:Array.from((T(),C).subarray(Number($)>>>0,2+(Number($)>>>0)>>>0)),pads:Array.from((T(),C).subarray(Number(E)>>>0,4+(Number(E)>>>0)>>>0)),strides:Array.from((T(),C).subarray(Number(P)>>>0,2+(Number(P)>>>0)>>>0)),wIsConst:()=>!!(T(),j)[V>>>0],outputPadding:X?Array.from((T(),C).subarray(Number(X)>>>0,Number(ie)>>>0)):[],outputShape:ye?Array.from((T(),C).subarray(Number(ye)>>>0,Number(we)>>>0)):[],activation:Ce(xe)})},934696:(f,g,v,y,$,E,P,z,V,X,ie,ye,we,xe,At)=>{t.ac("ConvTranspose",f,{format:V?"NHWC":"NCHW",autoPad:g,dilations:[v],group:y,kernelShape:[$],pads:[E,P],strides:[z],wIsConst:()=>!!(T(),j)[X>>>0],outputPadding:ie?Array.from((T(),C).subarray(Number(ie)>>>0,Number(ye)>>>0)):[],outputShape:we?Array.from((T(),C).subarray(Number(we)>>>0,Number(xe)>>>0)):[],activation:Ce(At)})},935129:(f,g,v,y,$,E,P,z,V,X,ie,ye,we,xe)=>{t.ac("ConvTranspose",f,{format:z?"NHWC":"NCHW",autoPad:g,dilations:Array.from((T(),C).subarray(Number(v)>>>0,2+(Number(v)>>>0)>>>0)),group:y,kernelShape:Array.from((T(),C).subarray(Number($)>>>0,2+(Number($)>>>0)>>>0)),pads:Array.from((T(),C).subarray(Number(E)>>>0,4+(Number(E)>>>0)>>>0)),strides:Array.from((T(),C).subarray(Number(P)>>>0,2+(Number(P)>>>0)>>>0)),wIsConst:()=>!!(T(),j)[V>>>0],outputPadding:X?Array.from((T(),C).subarray(Number(X)>>>0,Number(ie)>>>0)):[],outputShape:ye?Array.from((T(),C).subarray(Number(ye)>>>0,Number(we)>>>0)):[],activation:Ce(xe)})},935790:(f,g)=>{t.ac("GlobalAveragePool",f,{format:g?"NHWC":"NCHW"})},935881:(f,g,v,y,$,E,P,z,V,X,ie,ye,we,xe)=>{t.ac("AveragePool",f,{format:xe?"NHWC":"NCHW",auto_pad:g,ceil_mode:v,count_include_pad:y,storage_order:$,dilations:E?Array.from((T(),C).subarray(Number(E)>>>0,Number(P)>>>0)):[],kernel_shape:z?Array.from((T(),C).subarray(Number(z)>>>0,Number(V)>>>0)):[],pads:X?Array.from((T(),C).subarray(Number(X)>>>0,Number(ie)>>>0)):[],strides:ye?Array.from((T(),C).subarray(Number(ye)>>>0,Number(we)>>>0)):[]})},936360:(f,g)=>{t.ac("GlobalAveragePool",f,{format:g?"NHWC":"NCHW"})},936451:(f,g,v,y,$,E,P,z,V,X,ie,ye,we,xe)=>{t.ac("AveragePool",f,{format:xe?"NHWC":"NCHW",auto_pad:g,ceil_mode:v,count_include_pad:y,storage_order:$,dilations:E?Array.from((T(),C).subarray(Number(E)>>>0,Number(P)>>>0)):[],kernel_shape:z?Array.from((T(),C).subarray(Number(z)>>>0,Number(V)>>>0)):[],pads:X?Array.from((T(),C).subarray(Number(X)>>>0,Number(ie)>>>0)):[],strides:ye?Array.from((T(),C).subarray(Number(ye)>>>0,Number(we)>>>0)):[]})},936930:(f,g)=>{t.ac("GlobalMaxPool",f,{format:g?"NHWC":"NCHW"})},937017:(f,g,v,y,$,E,P,z,V,X,ie,ye,we,xe)=>{t.ac("MaxPool",f,{format:xe?"NHWC":"NCHW",auto_pad:g,ceil_mode:v,count_include_pad:y,storage_order:$,dilations:E?Array.from((T(),C).subarray(Number(E)>>>0,Number(P)>>>0)):[],kernel_shape:z?Array.from((T(),C).subarray(Number(z)>>>0,Number(V)>>>0)):[],pads:X?Array.from((T(),C).subarray(Number(X)>>>0,Number(ie)>>>0)):[],strides:ye?Array.from((T(),C).subarray(Number(ye)>>>0,Number(we)>>>0)):[]})},937492:(f,g)=>{t.ac("GlobalMaxPool",f,{format:g?"NHWC":"NCHW"})},937579:(f,g,v,y,$,E,P,z,V,X,ie,ye,we,xe)=>{t.ac("MaxPool",f,{format:xe?"NHWC":"NCHW",auto_pad:g,ceil_mode:v,count_include_pad:y,storage_order:$,dilations:E?Array.from((T(),C).subarray(Number(E)>>>0,Number(P)>>>0)):[],kernel_shape:z?Array.from((T(),C).subarray(Number(z)>>>0,Number(V)>>>0)):[],pads:X?Array.from((T(),C).subarray(Number(X)>>>0,Number(ie)>>>0)):[],strides:ye?Array.from((T(),C).subarray(Number(ye)>>>0,Number(we)>>>0)):[]})},938054:(f,g,v,y,$)=>{t.ac("Gemm",f,{alpha:g,beta:v,transA:y,transB:$})},938158:f=>{t.ac("MatMul",f,void 0)},938212:(f,g,v,y)=>{t.ac("ArgMax",f,{keepDims:!!g,selectLastIndex:!!v,axis:y})},938320:(f,g,v,y)=>{t.ac("ArgMin",f,{keepDims:!!g,selectLastIndex:!!v,axis:y})},938428:(f,g)=>{t.ac("Softmax",f,{axis:g})},938491:(f,g)=>{t.ac("Concat",f,{axis:g})},938551:(f,g,v,y,$)=>{t.ac("Split",f,{axis:g,numOutputs:v,splitSizes:y?Array.from((T(),C).subarray(Number(y)>>>0,Number($)>>>0)):[]})},938707:f=>{t.ac("Expand",f,void 0)},938761:(f,g)=>{t.ac("Gather",f,{axis:Number(g)})},938832:(f,g)=>{t.ac("GatherElements",f,{axis:Number(g)})},938911:(f,g)=>{t.ac("GatherND",f,{batch_dims:Number(g)})},938990:(f,g,v,y,$,E,P,z,V,X,ie)=>{t.ac("Resize",f,{antialias:g,axes:v?Array.from((T(),C).subarray(Number(v)>>>0,Number(y)>>>0)):[],coordinateTransformMode:Ce($),cubicCoeffA:E,excludeOutside:P,extrapolationValue:z,keepAspectRatioPolicy:Ce(V),mode:Ce(X),nearestMode:Ce(ie)})},939352:(f,g,v,y,$,E,P)=>{t.ac("Slice",f,{starts:g?Array.from((T(),C).subarray(Number(g)>>>0,Number(v)>>>0)):[],ends:y?Array.from((T(),C).subarray(Number(y)>>>0,Number($)>>>0)):[],axes:E?Array.from((T(),C).subarray(Number(E)>>>0,Number(P)>>>0)):[]})},939616:f=>{t.ac("Tile",f,void 0)},939668:(f,g,v)=>{t.ac("InstanceNormalization",f,{epsilon:g,format:v?"NHWC":"NCHW"})},939782:(f,g,v)=>{t.ac("InstanceNormalization",f,{epsilon:g,format:v?"NHWC":"NCHW"})},939896:f=>{t.ac("Range",f,void 0)},939949:(f,g)=>{t.ac("Einsum",f,{equation:Ce(g)})},940030:(f,g,v,y,$)=>{t.ac("Pad",f,{mode:g,value:v,pads:y?Array.from((T(),C).subarray(Number(y)>>>0,Number($)>>>0)):[]})},940173:(f,g,v,y,$,E)=>{t.ac("BatchNormalization",f,{epsilon:g,momentum:v,spatial:!!$,trainingMode:!!y,format:E?"NHWC":"NCHW"})},940342:(f,g,v,y,$,E)=>{t.ac("BatchNormalization",f,{epsilon:g,momentum:v,spatial:!!$,trainingMode:!!y,format:E?"NHWC":"NCHW"})},940511:(f,g,v)=>{t.ac("CumSum",f,{exclusive:Number(g),reverse:Number(v)})},940608:(f,g,v)=>{t.ac("DequantizeLinear",f,{axis:g,blockSize:v})},940698:(f,g,v,y,$)=>{t.ac("GridSample",f,{align_corners:g,mode:Ce(v),padding_mode:Ce(y),format:$?"NHWC":"NCHW"})},940868:(f,g,v,y,$)=>{t.ac("GridSample",f,{align_corners:g,mode:Ce(v),padding_mode:Ce(y),format:$?"NHWC":"NCHW"})},941038:(f,g)=>{t.ac("ScatterND",f,{reduction:Ce(g)})},941123:(f,g,v,y,$,E,P,z,V)=>{t.ac("Attention",f,{numHeads:g,isUnidirectional:v,maskFilterValue:y,scale:$,doRotary:E,qkvHiddenSizes:P?Array.from((T(),C).subarray(Number(z)>>>0,Number(z)+P>>>0)):[],pastPresentShareBuffer:!!V})},941395:f=>{t.ac("BiasAdd",f,void 0)},941450:f=>{t.ac("BiasSplitGelu",f,void 0)},941511:f=>{t.ac("FastGelu",f,void 0)},941567:(f,g,v,y,$,E,P,z,V,X,ie,ye,we,xe,At,ai)=>{t.ac("Conv",f,{format:ye?"NHWC":"NCHW",auto_pad:g,dilations:v?Array.from((T(),C).subarray(Number(v)>>>0,Number(y)>>>0)):[],group:$,kernel_shape:E?Array.from((T(),C).subarray(Number(E)>>>0,Number(P)>>>0)):[],pads:z?Array.from((T(),C).subarray(Number(z)>>>0,Number(V)>>>0)):[],strides:X?Array.from((T(),C).subarray(Number(X)>>>0,Number(ie)>>>0)):[],w_is_const:()=>!!(T(),j)[Number(we)>>>0],activation:Ce(xe),activation_params:At?Array.from((T(),q).subarray(Number(At)>>>0,Number(ai)>>>0)):[]})},942151:f=>{t.ac("Gelu",f,void 0)},942203:(f,g,v,y,$,E,P,z,V)=>{t.ac("GroupQueryAttention",f,{numHeads:g,kvNumHeads:v,scale:y,softcap:$,doRotary:E,rotaryInterleaved:P,smoothSoftmax:z,localWindowSize:V})},942420:(f,g,v,y)=>{t.ac("LayerNormalization",f,{axis:g,epsilon:v,simplified:!!y})},942531:(f,g,v,y)=>{t.ac("LayerNormalization",f,{axis:g,epsilon:v,simplified:!!y})},942642:(f,g,v,y,$,E)=>{t.ac("MatMulNBits",f,{k:g,n:v,accuracyLevel:y,bits:$,blockSize:E})},942769:(f,g,v,y,$,E)=>{t.ac("MultiHeadAttention",f,{numHeads:g,isUnidirectional:v,maskFilterValue:y,scale:$,doRotary:E})},942928:(f,g)=>{t.ac("QuickGelu",f,{alpha:g})},942992:(f,g,v,y,$)=>{t.ac("RotaryEmbedding",f,{interleaved:!!g,numHeads:v,rotaryEmbeddingDim:y,scale:$})},943131:(f,g,v)=>{t.ac("SkipLayerNormalization",f,{epsilon:g,simplified:!!v})},943233:(f,g,v)=>{t.ac("SkipLayerNormalization",f,{epsilon:g,simplified:!!v})},943335:(f,g,v,y)=>{t.ac("GatherBlockQuantized",f,{gatherAxis:g,quantizeAxis:v,blockSize:y})},943456:f=>{t.Id(f)},943490:(f,g)=>t.Kd(Number(f),Number(g),t.$c.Nd,t.$c.errors)};function Jc(f,g,v){return xs(async()=>{await t.Gd(Number(f),Number(g),Number(v))})}function Yc(){return typeof wasmOffsetConverter<"u"}function Qc(f,g,v,y){var $=de();try{return Wu(f,g,v,y)}catch(E){if(ae($),E!==E+0)throw E;he(1,0)}}function eh(f,g,v){var y=de();try{return Lu(f,g,v)}catch($){if(ae(y),$!==$+0)throw $;he(1,0)}}function oh(f,g,v){var y=de();try{Nu(f,g,v)}catch($){if(ae(y),$!==$+0)throw $;he(1,0)}}function ah(f,g){var v=de();try{return ii(f,g)}catch(y){if(ae(v),y!==y+0)throw y;he(1,0)}}function sh(f){var g=de();try{Cu(f)}catch(v){if(ae(g),v!==v+0)throw v;he(1,0)}}function uh(f,g,v,y,$,E,P){var z=de();try{return qu(f,g,v,y,$,E,P)}catch(V){if(ae(z),V!==V+0)throw V;he(1,0)}}function ph(f,g){var v=de();try{Ku(f,g)}catch(y){if(ae(v),y!==y+0)throw y;he(1,0)}}function ch(f,g,v,y,$,E){var P=de();try{zu(f,g,v,y,$,E)}catch(z){if(ae(P),z!==z+0)throw z;he(1,0)}}function hh(f,g,v,y){var $=de();try{Gu(f,g,v,y)}catch(E){if(ae($),E!==E+0)throw E;he(1,0)}}function fh(f,g,v,y,$){var E=de();try{Mu(f,g,v,y,$)}catch(P){if(ae(E),P!==P+0)throw P;he(1,0)}}function mh(f,g,v,y,$,E,P){var z=de();try{Qu(f,g,v,y,$,E,P)}catch(V){if(ae(z),V!==V+0)throw V;he(1,0)}}function gh(f,g,v,y,$,E,P){var z=de();try{el(f,g,v,y,$,E,P)}catch(V){if(ae(z),V!==V+0)throw V;he(1,0)}}function bh(f,g,v,y,$,E,P,z){var V=de();try{ll(f,g,v,y,$,E,P,z)}catch(X){if(ae(V),X!==X+0)throw X;he(1,0)}}function wh(f,g,v,y,$){var E=de();try{return Zu(f,g,v,y,$)}catch(P){if(ae(E),P!==P+0)throw P;he(1,0)}}function xh(f,g,v,y,$,E,P,z){var V=de();try{dl(f,g,v,y,$,E,P,z)}catch(X){if(ae(V),X!==X+0)throw X;he(1,0)}}function $h(f,g,v,y,$,E,P,z,V,X,ie,ye){var we=de();try{al(f,g,v,y,$,E,P,z,V,X,ie,ye)}catch(xe){if(ae(we),xe!==xe+0)throw xe;he(1,0)}}function Ih(f,g,v,y,$,E){var P=de();try{return sl(f,g,v,y,$,E)}catch(z){if(ae(P),z!==z+0)throw z;he(1,0)}}function Oh(f,g,v){var y=de();try{return pl(f,g,v)}catch($){if(ae(y),$!==$+0)throw $;return he(1,0),0n}}function Eh(f,g,v,y,$,E,P,z,V){var X=de();try{Vu(f,g,v,y,$,E,P,z,V)}catch(ie){if(ae(X),ie!==ie+0)throw ie;he(1,0)}}function Ph(f){var g=de();try{return cl(f)}catch(v){if(ae(g),v!==v+0)throw v;he(1,0)}}function Ah(f,g,v){var y=de();try{return fl(f,g,v)}catch($){if(ae(y),$!==$+0)throw $;he(1,0)}}function Dh(f,g){var v=de();try{return cd(f,g)}catch(y){if(ae(v),y!==y+0)throw y;return he(1,0),0n}}function kh(f,g,v,y,$){var E=de();try{ml(f,g,v,y,$)}catch(P){if(ae(E),P!==P+0)throw P;he(1,0)}}function Ch(f){var g=de();try{return gl(f)}catch(v){if(ae(g),v!==v+0)throw v;return he(1,0),0n}}function zh(f,g,v,y,$,E){var P=de();try{return id(f,g,v,y,$,E)}catch(z){if(ae(P),z!==z+0)throw z;he(1,0)}}function Rh(f,g,v,y,$,E){var P=de();try{return od(f,g,v,y,$,E)}catch(z){if(ae(P),z!==z+0)throw z;he(1,0)}}function Mh(f,g,v,y,$,E,P,z){var V=de();try{return ul(f,g,v,y,$,E,P,z)}catch(X){if(ae(V),X!==X+0)throw X;he(1,0)}}function Bh(f,g,v,y,$){var E=de();try{return ad(f,g,v,y,$)}catch(P){if(ae(E),P!==P+0)throw P;return he(1,0),0n}}function Fh(f,g,v,y){var $=de();try{return sd(f,g,v,y)}catch(E){if(ae($),E!==E+0)throw E;he(1,0)}}function Lh(f,g,v,y){var $=de();try{return ud(f,g,v,y)}catch(E){if(ae($),E!==E+0)throw E;he(1,0)}}function Vh(f,g,v,y,$,E,P,z,V,X,ie,ye){var we=de();try{return ld(f,g,v,y,$,E,P,z,V,X,ie,ye)}catch(xe){if(ae(we),xe!==xe+0)throw xe;he(1,0)}}function qh(f,g,v,y,$,E,P,z,V,X,ie){var ye=de();try{rd(f,g,v,y,$,E,P,z,V,X,ie)}catch(we){if(ae(ye),we!==we+0)throw we;he(1,0)}}function Gh(f,g,v,y,$,E,P,z,V,X,ie,ye,we,xe,At,ai){var Df=de();try{nd(f,g,v,y,$,E,P,z,V,X,ie,ye,we,xe,At,ai)}catch(si){if(ae(Df),si!==si+0)throw si;he(1,0)}}function Wh(f,g,v,y){var $=de();try{return dd(f,g,v,y)}catch(E){if(ae($),E!==E+0)throw E;he(1,0)}}function Kh(f,g,v,y,$){var E=de();try{return pd(f,g,v,y,$)}catch(P){if(ae(E),P!==P+0)throw P;he(1,0)}}function Zh(f,g,v){var y=de();try{return yl(f,g,v)}catch($){if(ae(y),$!==$+0)throw $;he(1,0)}}function Jh(f,g,v){var y=de();try{return ed(f,g,v)}catch($){if(ae(y),$!==$+0)throw $;he(1,0)}}function Yh(f,g,v,y){var $=de();try{td(f,g,v,y)}catch(E){if(ae($),E!==E+0)throw E;he(1,0)}}function vn(){if(0<$e)Fe=vn;else if(u)b?.(t),ne();else{for(var f=Ee;0<f.length;)f.shift()(t);0<$e?Fe=vn:(t.calledRun=!0,A||(ne(),b?.(t)))}}return u||(ct=await Ue(),vn()),t.PTR_SIZE=4,B?t:new Promise((f,g)=>{b=f,w=g})}var n3,r3,e_=N(()=>{n3=Qy,r3=globalThis.self?.name?.startsWith("em-pthread"),r3&&Qy()}),r_,ac,o3,Ot,o_,ic,i3,a3,i_,s3,t_,a_,n_,s_,ma=N(()=>{ha(),r_=typeof location>"u"?void 0:location.origin,ac=import.meta.url>"file:"&&import.meta.url<"file;",o3=()=>{{if(ac){let e=URL;return new URL(new e("ort.all.bundle.min.mjs",import.meta.url).href,r_).href}return import.meta.url}},Ot=o3(),o_=()=>{if(Ot&&!Ot.startsWith("blob:"))return Ot.substring(0,Ot.lastIndexOf("/")+1)},ic=(e,t)=>{try{let n=t??Ot;return(n?new URL(e,n):new URL(e)).origin===r_}catch{return!1}},i3=(e,t)=>{let n=t??Ot;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},a3=(e,t)=>`${t??"./"}${e}`,i_=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},s3=async e=>(await import(e)).default,t_=(Jy(),Xr(Zy)).default,a_=async()=>{if(!Ot)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(ic(Ot))return[void 0,t_()];let e=await i_(Ot);return[e,t_(e)]},n_=(e_(),Xr(Yy)).default,s_=async(e,t,n,a)=>{let u=n_&&!(e||t);if(u)if(Ot)u=ic(Ot);else if(a&&!n)u=!0;else throw new Error("cannot determine the script source URL.");if(u)return[void 0,n_];{let d="ort-wasm-simd-threaded.jsep.mjs",l=e??i3(d,t),p=n&&l&&!ic(l,t),o=p?await i_(l):l??a3(d,t);return[p?o:void 0,await s3(o)]}}}),sc,uc,Ia,u_,u3,l3,c3,ga,Re,br=N(()=>{ma(),uc=!1,Ia=!1,u_=!1,u3=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},l3=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},c3=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},ga=async e=>{if(uc)return Promise.resolve();if(Ia)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(u_)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ia=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!c3())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!l3())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let a=u3();n>1&&!a&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let u=e.wasmPaths,d=typeof u=="string"?u:void 0,l=u?.mjs,p=l?.href??l,o=u?.wasm,r=o?.href??o,i=e.wasmBinary,[s,c]=await s_(p,d,n>1,!!i||!!r),h=!1,m=[];if(t>0&&m.push(new Promise(b=>{setTimeout(()=>{h=!0,b()},t)})),m.push(new Promise((b,w)=>{let x={numThreads:n};if(i)x.wasmBinary=i;else if(r||d)x.locateFile=_=>r??d+_;else if(p&&p.indexOf("blob:")!==0)x.locateFile=_=>new URL(_,p).href;else if(s){let _=o_();_&&(x.locateFile=S=>_+S)}c(x).then(_=>{Ia=!1,uc=!0,sc=_,b(),s&&URL.revokeObjectURL(s)},_=>{Ia=!1,u_=!0,w(_)})})),await Promise.race(m),h)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Re=()=>{if(uc&&sc)return sc;throw new Error("WebAssembly is not initialized yet.")}}),Pt,Fo,Oe,Sa=N(()=>{br(),Pt=(e,t)=>{let n=Re(),a=n.lengthBytesUTF8(e)+1,u=n._malloc(a);return n.stringToUTF8(e,u,a),t.push(u),u},Fo=(e,t,n,a)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([u,d])=>{let l=t?t+u:u;if(typeof d=="object")Fo(d,l+".",n,a);else if(typeof d=="string"||typeof d=="number")a(l,d.toString());else if(typeof d=="boolean")a(l,d?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof d}`)})},Oe=e=>{let t=Re(),n=t.stackSave();try{let a=t.PTR_SIZE,u=t.stackAlloc(2*a);t._OrtGetLastError(u,u+a);let d=Number(t.getValue(u,a===4?"i32":"i64")),l=t.getValue(u+a,"*"),p=l?t.UTF8ToString(l):"";throw new Error(`${e} ERROR_CODE: ${d}, ERROR_MESSAGE: ${p}`)}finally{t.stackRestore(n)}}}),l_,c_=N(()=>{br(),Sa(),l_=e=>{let t=Re(),n=0,a=[],u=e||{};try{if(e?.logSeverityLevel===void 0)u.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)u.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(u.terminate=!1);let d=0;return e?.tag!==void 0&&(d=Pt(e.tag,a)),n=t._OrtCreateRunOptions(u.logSeverityLevel,u.logVerbosityLevel,!!u.terminate,d),n===0&&Oe("Can't create run options."),e?.extra!==void 0&&Fo(e.extra,"",new WeakSet,(l,p)=>{let o=Pt(l,a),r=Pt(p,a);t._OrtAddRunConfigEntry(n,o,r)!==0&&Oe(`Can't set a run config entry: ${l} - ${p}.`)}),[n,a]}catch(d){throw n!==0&&t._OrtReleaseRunOptions(n),a.forEach(l=>t._free(l)),d}}}),d3,p3,f3,$a,h3,d_,p_=N(()=>{br(),Sa(),d3=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},p3=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},f3=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},$a=(e,t,n,a)=>{let u=Pt(t,a),d=Pt(n,a);Re()._OrtAddSessionConfigEntry(e,u,d)!==0&&Oe(`Can't set a session config entry: ${t} - ${n}.`)},h3=async(e,t,n)=>{let a=t.executionProviders;for(let u of a){let d=typeof u=="string"?u:u.name,l=[];switch(d){case"webnn":if(d="WEBNN",typeof u!="string"){let s=u?.deviceType;s&&$a(e,"deviceType",s,n)}break;case"webgpu":if(d="JS",typeof u!="string"){let s=u;if(s?.preferredLayout){if(s.preferredLayout!=="NCHW"&&s.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${s.preferredLayout}`);$a(e,"preferredLayout",s.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${d}`)}let p=Pt(d,n),o=l.length,r=0,i=0;if(o>0){r=Re()._malloc(o*Re().PTR_SIZE),n.push(r),i=Re()._malloc(o*Re().PTR_SIZE),n.push(i);for(let s=0;s<o;s++)Re().setValue(r+s*Re().PTR_SIZE,l[s][0],"*"),Re().setValue(i+s*Re().PTR_SIZE,l[s][1],"*")}await Re()._OrtAppendExecutionProvider(e,p,r,i,o)!==0&&Oe(`Can't append execution provider: ${d}.`)}},d_=async e=>{let t=Re(),n=0,a=[],u=e||{};f3(u);try{let d=d3(u.graphOptimizationLevel??"all"),l=p3(u.executionMode??"sequential"),p=typeof u.logId=="string"?Pt(u.logId,a):0,o=u.logSeverityLevel??2;if(!Number.isInteger(o)||o<0||o>4)throw new Error(`log severity level is not valid: ${o}`);let r=u.logVerbosityLevel??0;if(!Number.isInteger(r)||r<0||r>4)throw new Error(`log verbosity level is not valid: ${r}`);let i=typeof u.optimizedModelFilePath=="string"?Pt(u.optimizedModelFilePath,a):0;if(n=t._OrtCreateSessionOptions(d,!!u.enableCpuMemArena,!!u.enableMemPattern,l,!!u.enableProfiling,0,p,o,r,i),n===0&&Oe("Can't create session options."),u.executionProviders&&await h3(n,u,a),u.enableGraphCapture!==void 0){if(typeof u.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${u.enableGraphCapture}`);$a(n,"enableGraphCapture",u.enableGraphCapture.toString(),a)}if(u.freeDimensionOverrides)for(let[s,c]of Object.entries(u.freeDimensionOverrides)){if(typeof s!="string")throw new Error(`free dimension override name must be a string: ${s}`);if(typeof c!="number"||!Number.isInteger(c)||c<0)throw new Error(`free dimension override value must be a non-negative integer: ${c}`);let h=Pt(s,a);t._OrtAddFreeDimensionOverride(n,h,c)!==0&&Oe(`Can't set a free dimension override: ${s} - ${c}.`)}return u.extra!==void 0&&Fo(u.extra,"",new WeakSet,(s,c)=>{$a(n,s,c,a)}),[n,a]}catch(d){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Oe("Can't release session options."),a.forEach(l=>t._free(l)),d}}}),yr,Vn,_r,uo,Vo,Aa,Oa,lc,ue=N(()=>{yr=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Vn=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},_r=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],a=typeof t=="number"?t:t.reduce((u,d)=>u*d,1);return n>0?Math.ceil(a*n):void 0},uo=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Vo=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Aa=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Oa=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",lc=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Go,cc=N(()=>{ha(),Go=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),a=n?parseInt(n,10):0;if(a<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let u=t.body.getReader(),d;try{d=new ArrayBuffer(a)}catch(p){if(p instanceof RangeError){let o=Math.ceil(a/65536);d=new WebAssembly.Memory({initial:o,maximum:o}).buffer}else throw p}let l=0;for(;;){let{done:p,value:o}=await u.read();if(p)break;let r=o.byteLength;new Uint8Array(d,l,r).set(o),l+=r}return new Uint8Array(d,0,a)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),m3,g3,f_,h_,Pa,b3,be,Gn=N(()=>{ue(),m3=["V","I","W","E","F"],g3=(e,t)=>{console.log(`[${m3[e]},${new Date().toISOString()}]${t}`)},Pa=(e,t)=>{f_=e,h_=t},b3=(e,t)=>{let n=Vo(e),a=Vo(f_);n>=a&&g3(n,typeof t=="function"?t():t)},be=(...e)=>{h_&&b3(...e)}}),dc,Un,D,Gr,Ea,m_,g_,fe=N(()=>{dc=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Un=class{static calcShape(e,t,n=!1){let a=e.length,u=t.length;if(a===0)return t;if(u===0)return e;let d=Math.max(e.length,t.length),l=new Array(d);if(n){if(a<2||u<2)return;let p=dc.calcMatMulShape([e[a-2],e[a-1]],[t[u-2],t[u-1]]);if(p===void 0)return;[l[d-2],l[d-1]]=p}for(let p=n?3:1;p<=d;p++){let o=a-p<0?1:e[a-p],r=u-p<0?1:t[u-p];if(o!==r&&o>1&&r>1)return;let i=Math.max(o,r);if(o&&r)l[d-p]=Math.max(o,r);else{if(i>1)return;l[d-p]=0}}return l}static isValidBroadcast(e,t){let n=e.length,a=t.length;if(n>a)return!1;for(let u=1;u<=n;u++)if(e[n-u]!==1&&e[n-u]!==t[a-u])return!1;return!0}},D=class xn{static size(t){return xn.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let a=t.length;if(a===0)return[];let u=new Array(a),d=a-1;for(;d>=0;){if(t[d]%n===0){u[d]=t[d]/n;break}if(n%t[d]!==0)throw new Error("cannot convert shape");u[d]=1,n/=t[d],d--}for(d--;d>=0;d--)u[d]=t[d];return u}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return xn.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return xn.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,a){let u=1;for(let d=n;d<a;d++){if(t[d]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");u*=Number(t[d])}return u}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let a=new Array(n);a[n-1]=1,a[n-2]=t[n-1];for(let u=n-3;u>=0;--u)a[u]=a[u+1]*t[u+1];return a}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(a=>this.normalizeAxis(a,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(a=>t[a]):t.slice().reverse()}static padShape(t,n){let a=t.length;return t.map((u,d)=>u+n[d]+n[d+a])}static areEqual(t,n){return t.length!==n.length?!1:t.every((a,u)=>a===n[u])}},Gr=class sn{static adjustPoolAttributes(t,n,a,u,d,l){if(!t&&a.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let p=0;p<n.length-2;p++)p>=a.length?a.push(n[p+2]):a[p]=n[p+2];for(let p=0;p<a.length;p++)if(p<u.length){if(u[p]<0)throw new Error("strides should be greater than or equal to 1")}else u.push(1);for(let p=0;p<a.length;p++)if(p<d.length){if(d[p]<0)throw new Error("dilations should be greater than or equal to 1")}else d.push(1);for(let p=0;p<a.length*2;p++)if(p<l.length){if(l[p]<0)throw new Error("pad should be greater than or equal to 1")}else l.push(0);for(let p=0;p<a.length;p++){if(a[p]<=0)throw new Error("kernel shapes need to be greater than 0");if(l[p]>=a[p]||l[p+a.length]>=a[p])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,a,u,d,l,p){if(p){if(d.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(u.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let o=0;o<t.length-2;o++)sn.adjustPadAndReturnShape(t[o+(l?1:2)],n[o],a[o],u[o],d,o,o+t.length-2,p)}}static computePoolOutputShape(t,n,a,u,d,l,p){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let o=[n[0],n[1]];return sn.computeShapeHelper(t,n,o,a,u,d,l,p),o}static computeConvOutputShape(t,n,a,u,d,l,p){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let o=[t[0],n[0]];return sn.computeShapeHelper(!1,t,o,a,u,d,l,p),o}static computeShapeHelper(t,n,a,u,d,l,p,o){if(t)for(let r=0;r<n.length-2;r++)a.push(1);else for(let r=0;r<n.length-2;r++)a.push(sn.adjustPadAndReturnShape(n[r+2],u[r],d[r],l[r],p,r,r+n.length-2,o))}static adjustPadAndReturnShape(t,n,a,u,d,l,p,o){let r=a*(u-1)+1;if(o&&o!=="NOTSET")switch(o){case"VALID":return d[l]=0,d[p]=0,Math.floor((t-r)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let i=((t+n-1)/n-1)*n+u-t;return d[l]=Math.floor(o==="SAME_LOWER"?(i+1)/2:i/2),d[p]=i-d[l],Math.floor((t+i-u)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+d[l]+d[p]-r)/n+1)}},Ea=class{static getShapeOfGemmResult(e,t,n,a,u){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let d,l,p;t?(d=e[1],l=e[0]):(d=e[0],l=e[1]);let o=-1;if(a?(p=n[0],o=1):(p=n[1],o=0),n[o]!==l)throw new Error("dimension mismatch");if(d<=0||p<=0||l<=0)throw new Error("invalid shape specified");if(u&&!Un.isValidBroadcast(u,[d,p]))throw new Error("gemm: invalid bias shape for broadcast");return[d,p,l]}},m_=-34028234663852886e22,g_=34028234663852886e22}),Ca,pc=N(()=>{ue(),Ca=(e,t)=>new(uo(t))(e)}),y_,hc,__,y3,b_,_3,w_,Da,ka,fc,v_,x_=N(()=>{ue(),Gn(),y_=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),hc=(e,t)=>{if(t==="int32")return e;let n=y_.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let a=n/8;if(e.byteLength%a!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${a}.`);let u=e.byteLength/a,d=new(uo(t))(e.buffer,e.byteOffset,u);switch(t){case"int64":case"uint64":{let l=new Int32Array(u);for(let p=0;p<u;p++){let o=d[p];if(o>2147483647n||o<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");l[p]=Number(o)}return new Uint8Array(l.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&d.some(p=>p>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let l=Int32Array.from(d,Number);return new Uint8Array(l.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},__=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,a=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let u=BigInt64Array.from(a,BigInt);return new Uint8Array(u.buffer)}case"uint64":{if(a.some(d=>d<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let u=BigUint64Array.from(a,BigInt);return new Uint8Array(u.buffer)}case"int8":{if(a.some(d=>d<-128||d>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let u=Int8Array.from(a,Number);return new Uint8Array(u.buffer)}case"uint8":{if(a.some(u=>u<0||u>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(a,Number)}case"uint32":{if(a.some(d=>d<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let u=Uint32Array.from(a,Number);return new Uint8Array(u.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},y3=1,b_=()=>y3++,_3=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),w_=(e,t)=>{let n=y_.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((a,u)=>a*u)*n/8):0},Da=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:a,dataType:u,shape:d,fallbackDataType:l}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=a,this.dataType=u,this.tensorShape=d,this.fallbackDataType=l}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return w_(this.dataType,this.tensorShape)}destroy(){be("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=__(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return n.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((a,u)=>a===n[u])}setIsDataConverted(e){this.isDataConverted=e}},ka=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,a){let u=this.tensorManager.getMLContext(e),d=this.tensorManager.getMLOpSupportLimits(e),l;if(!d?.input.dataTypes.includes(t)){if(l=_3.get(t),!l||d?.input.dataTypes.includes(l))throw new Error(`WebNN backend does not support data type: ${t}`);be("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${l}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(u,t,n))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==w_(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let p=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,p,!0,!0,l),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=hc(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else be("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?__(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},fc=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=b_();return this.tensorTrackersById.set(e,new ka(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,a,u){be("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${a}, copyOld: ${u}}`);let d=this.tensorTrackersById.get(t);if(!d)throw new Error("Tensor not found.");return d.ensureTensor(e,n,a,u)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){be("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,a){let u=this.getMLContext(e),d=b_(),l=new Da({sessionId:e,context:u,tensor:t,dataType:n,shape:a});return this.tensorTrackersById.set(d,new ka(this,l)),this.externalTensors.add(l),d}async getCachedTensor(e,t,n,a,u,d,l){let p=this.getMLContext(e);for(let[r,i]of this.freeTensors.entries())if(i.canReuseTensor(p,t,n)){be("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${l?`fallbackDataType: ${l},`:""} shape: ${n}`);let s=this.freeTensors.splice(r,1)[0];return s.sessionId=e,s}be("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${l?`fallbackDataType: ${l},`:""} shape: ${n}}`);let o=await p.createTensor({dataType:l??t,shape:n,dimensions:n,usage:a,writable:u,readable:d});return new Da({sessionId:e,context:p,tensor:o,dataType:t,shape:n,fallbackDataType:l})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},v_=(...e)=>new fc(...e)}),Na,w3,La,T_=N(()=>{ue(),br(),pc(),x_(),Gn(),Na=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),w3=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),a=Object.keys(t).sort();return n.length===a.length&&n.every((u,d)=>u===a[d]&&e[u]===t[u])},La=class{constructor(e){this.tensorManager=v_(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Pa(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){be("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){be("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)be("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(a=>a.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let a=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:a}),a}}else if(e===void 0){let n=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let t=this.mlContextCache.findIndex(n=>w3(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let a=this.mlContextCache.findIndex(u=>u.mlContext===t);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){be("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,a,u){let d=Na.get(n);if(!d)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,d,a,u)}async createTemporaryTensor(e,t,n){be("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let a=Na.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);let u=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,u,a,n,!1);let d=this.temporarySessionTensorIds.get(e);return d?d.push(u):this.temporarySessionTensorIds.set(e,[u]),u}uploadTensor(e,t){if(!Re().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");be("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Ca(n,t)}}registerMLTensor(e,t,n,a){let u=Na.get(n);if(!u)throw new Error(`Unsupported ONNX data type: ${n}`);let d=this.tensorManager.registerTensor(e,t,u,a);return be("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${u}, dimensions: ${a}} -> {tensorId: ${d}}`),d}registerMLConstant(e,t,n,a,u,d,l=!1){if(!d)throw new Error("External mounted files are not available.");let p=e;e.startsWith("./")&&(p=e.substring(2));let o=d.get(p);if(!o)throw new Error(`File with name ${p} not found in preloaded files.`);if(t+n>o.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let r=o.slice(t,t+n).buffer,i;switch(u.dataType){case"float32":i=new Float32Array(r);break;case"float16":i=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(r):new Uint16Array(r);break;case"int32":i=new Int32Array(r);break;case"uint32":i=new Uint32Array(r);break;case"int64":if(l){let s=hc(new Uint8Array(r),"int64");i=new Int32Array(s.buffer),u.dataType="int32"}else i=new BigInt64Array(r);break;case"uint64":i=new BigUint64Array(r);break;case"int8":i=new Int8Array(r);break;case"int4":case"uint4":case"uint8":i=new Uint8Array(r);break;default:throw new Error(`Unsupported data type: ${u.dataType} in creating WebNN Constant from external data.`)}return be("verbose",()=>`[WebNN] registerMLConstant {dataType: ${u.dataType}, shape: ${u.shape}}} ${l?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),a.constant(u,i)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let a=Na.get(yr(t)),u=this.mlOpSupportLimitsBySessionId.get(e);return typeof a>"u"?!1:n?!!u?.input.dataTypes.includes(a):!!u?.output.dataTypes.includes(a)}flush(){}}}),Ra=N(()=>{}),I_,mc,gc,v3,x3,S_,yc,bc,A_,O_=N(()=>{Gn(),Ra(),I_=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),mc=[],gc=e=>Math.ceil(Number(e)/16)*16,v3=e=>{for(let t=0;t<mc.length;t++){let n=mc[t];if(e<=n)return n}return Math.ceil(e/16)*16},x3=1,S_=()=>x3++,yc=async(e,t,n,a)=>{let u=gc(n),d=e.device.createBuffer({size:u,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let l=e.getCommandEncoder();e.endComputePass(),l.copyBufferToBuffer(t,0,d,0,u),e.flush(),await d.mapAsync(GPUMapMode.READ);let p=d.getMappedRange();if(a){let o=a();return o.set(new Uint8Array(p,0,n)),o}else return new Uint8Array(p.slice(0,n))}finally{d.destroy()}},bc=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of I_)mc.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,a=t.byteOffset,u=t.byteLength,d=gc(u),l=this.storageCache.get(e);if(!l)throw new Error("gpu data for uploading does not exist");if(Number(l.originalSize)!==u)throw new Error(`inconsistent data size. gpu data size=${l.originalSize}, data size=${u}`);let p=this.backend.device.createBuffer({mappedAtCreation:!0,size:d,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),o=p.getMappedRange();new Uint8Array(o).set(new Uint8Array(n,a,u)),p.unmap();let r=this.backend.device.createCommandEncoder();r.copyBufferToBuffer(p,0,l.gpuData.buffer,0,d),this.backend.device.queue.submit([r.finish()]),p.destroy(),be("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(t);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let u=gc(n.originalSize),d=this.backend.getCommandEncoder();this.backend.endComputePass(),d.copyBufferToBuffer(n.gpuData.buffer,0,a.gpuData.buffer,0,u)}registerExternalBuffer(e,t,n){let a;if(n){if(a=n[0],e===n[1])return be("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=S_();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:e},originalSize:t}),be("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, registered.`),a}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),be("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=v3(e),a,u=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,d=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(u||d){let p=(u?this.freeBuffers:this.freeUniformBuffers).get(n);p?p.length>0?a=p.pop():a=this.backend.device.createBuffer({size:n,usage:t}):a=this.backend.device.createBuffer({size:n,usage:t})}else a=this.backend.device.createBuffer({size:n,usage:t});let l={id:S_(),type:0,buffer:a};return this.storageCache.set(l.id,{gpuData:l,originalSize:Number(e)}),be("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${l.id}`),l}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return be("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await yc(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=I_.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(be("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},A_=(...e)=>new bc(...e)}),_c,le,Je=N(()=>{_c=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},le=e=>new _c(e)}),Ur,vc,Me,at,U,Pe,xc,Wr,Xt,Z,za,L,F,P_,Ma,wc,E_,ge=N(()=>{ue(),fe(),Ur=64,vc=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Me=(e,t=1)=>{let n=vc(e,t);return typeof n=="string"?n:n[0]},at=(e,t=1)=>{let n=vc(e,t);return typeof n=="string"?n:n[1]},U=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:D.computeStrides(n)})}),t},Pe=e=>e%4===0?4:e%2===0?2:1,xc=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Wr=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Xt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Z=(e,t,n,a)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?a==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:a==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,za=(e,t,n,a,u)=>{let d=typeof n=="number",l=d?n:n.length,p=[...new Array(l).keys()],o=l<2?"u32":l<=4?`vec${l}<u32>`:`array<u32, ${l}>`,r=vc(t,u),i=typeof r=="string"?r:r[1],s=typeof r=="string"?r:r[0],c={indices:o,value:i,storage:s,tensor:t},h=B=>typeof B=="string"?B:`${B}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=d?"uniforms.":"",w=`${b}${e}_shape`,x=`${b}${e}_strides`,_="";for(let B=0;B<l-1;B++)_+=`
    let dim${B} = current / ${Z(x,B,l)};
    let rest${B} = current % ${Z(x,B,l)};
    indices[${B}] = dim${B};
    current = rest${B};
    `;_+=`indices[${l-1}] = current;`;let S=l<2?"":`
  fn o2i_${e}(offset: u32) -> ${c.indices} {
    var indices: ${c.indices};
    var current = offset;
    ${_}
    return indices;
  }`,I=B=>(m.offsetToIndices=!0,l<2?B:`o2i_${e}(${B})`),O=[];if(l>=2)for(let B=l-1;B>=0;B--)O.push(`${Z(x,B,l)} * (indices[${B}])`);let A=l<2?"":`
  fn i2o_${e}(indices: ${c.indices}) -> u32 {
    return ${O.join("+")};
  }`,k=B=>(m.indicesToOffset=!0,l<2?B:`i2o_${e}(${B})`),T=(...B)=>l===0?"0u":`${c.indices}(${B.map(h).join(",")})`,R=(B,G)=>l<2?`${B}`:`${Z(B,G,l)}`,j=(B,G,ne)=>l<2?`${B}=${ne};`:`${Z(B,G,l)}=${ne};`,ee={},W=(B,G)=>{m.broadcastedIndicesToOffset=!0;let ne=`${G.name}broadcastedIndicesTo${e}Offset`;if(ne in ee)return`${ne}(${B})`;let ce=[];for(let Ve=l-1;Ve>=0;Ve--){let Ue=G.indicesGet("outputIndices",Ve+G.rank-l);ce.push(`${R(x,Ve)} * (${Ue} % ${R(w,Ve)})`)}return ee[ne]=`fn ${ne}(outputIndices: ${G.type.indices}) -> u32 {
             return ${ce.length>0?ce.join("+"):"0u"};
           }`,`${ne}(${B})`},Q=(B,G)=>(()=>{if(c.storage===c.value)return`${e}[${B}]=${G};`;if(c.storage==="vec2<u32>"&&c.value==="i32")return`${e}[${B}]=vec2<u32>(u32(${G}), select(0u, 0xFFFFFFFFu, ${G} < 0));`;if(c.storage==="vec2<u32>"&&c.value==="u32")return`${e}[${B}]=vec2<u32>(u32(${G}), 0u);`;if(c.storage==="u32"&&c.value==="vec4<bool>")return`${e}[${B}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${G}));`;throw new Error(`not supported combination of storage type ${c.storage} and value type ${c.value} yet`)})(),C=B=>(()=>{if(c.storage===c.value)return`${e}[${B}]`;if(c.storage==="vec2<u32>"&&c.value==="i32")return`i32(${e}[${B}].x)`;if(c.storage==="vec2<u32>"&&c.value==="u32")return`u32(${e}[${B}].x)`;if(c.storage==="u32"&&c.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${B}] & 0xFFu), bool(${e}[${B}] & 0xFF00u), bool(${e}[${B}] & 0xFF0000u), bool(${e}[${B}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${c.storage} and value type ${c.value} yet`)})(),M=l<2?"":`
  fn get_${e}ByIndices(indices: ${c.indices}) -> ${i} {
    return ${C(`i2o_${e}(indices)`)};
  }`,q=l<2?"":(()=>{let B=p.map(ne=>`d${ne}: u32`).join(", "),G=p.map(ne=>`d${ne}`).join(", ");return`
  fn get_${e}(${B}) -> ${i} {
    return get_${e}ByIndices(${T(G)});
  }`})(),Y=(...B)=>{if(B.length!==l)throw new Error(`indices length must be ${l}`);let G=B.map(h).join(",");return l===0?C("0u"):l===1?C(G[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}(${G})`)},J=B=>l<2?C(B):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}ByIndices(${B})`),re=l<2?"":`
  fn set_${e}ByIndices(indices: ${c.indices}, value: ${i}) {
    ${Q(`i2o_${e}(indices)`,"value")}
  }`,me=l<2?"":(()=>{let B=p.map(ne=>`d${ne}: u32`).join(", "),G=p.map(ne=>`d${ne}`).join(", ");return`
  fn set_${e}(${B}, value: ${i}) {
    set_${e}ByIndices(${T(G)}, value);
  }`})();return{impl:()=>{let B=[],G=!1;return m.offsetToIndices&&(B.push(S),G=!0),m.indicesToOffset&&(B.push(A),G=!0),m.broadcastedIndicesToOffset&&(Object.values(ee).forEach(ne=>B.push(ne)),G=!0),m.set&&(B.push(me),G=!0),m.setByIndices&&(B.push(re),G=!0),m.get&&(B.push(q),G=!0),m.getByIndices&&(B.push(M),G=!0),!d&&G&&B.unshift(`const ${w} = ${c.indices}(${n.join(",")});`,`const ${x} = ${c.indices}(${D.computeStrides(n).join(",")});`),B.join(`
`)},type:c,offsetToIndices:I,indicesToOffset:k,broadcastedIndicesToOffset:W,indices:T,indicesGet:R,indicesSet:j,set:(...B)=>{if(B.length!==l+1)throw new Error(`indices length must be ${l}`);let G=B[l];if(typeof G!="string")throw new Error("value must be string");let ne=B.slice(0,l).map(h).join(",");return l===0?Q("0u",G):l===1?Q(ne[0],G):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}(${ne}, ${G})`)},setByOffset:Q,setByIndices:(B,G)=>l<2?Q(B,G):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}ByIndices(${B}, ${G});`),get:Y,getByOffset:C,getByIndices:J,usage:a,name:e,strides:x,shape:w,rank:l}},L=(e,t,n,a=1)=>za(e,t,n,"input",a),F=(e,t,n,a=1)=>za(e,t,n,"output",a),P_=(e,t,n)=>za(e,t,n,"atomicOutput",1),Ma=(e,t,n,a=1)=>za(e,t,n,"internal",a),wc=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Ur){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],a=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let u=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,d=u?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,l=u?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*a}u + local_idx;`;return`@compute @workgroup_size(${t}, ${n}, ${a})
  fn main(${d}) {
    ${l}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage==="input"?"read":"read_write",a=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${a}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:n,length:a}of this.uniforms)if(a&&a>4)n==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(a/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(a/4)}>`);else{let u=a==null||a===1?n:`vec${a}<${n}>`;e.push(`${t}:${u}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},E_=(e,t)=>new wc(e,t)}),T3,C_,I3,S3,$3,A3,st,D_,k_,Yn=N(()=>{ue(),fe(),Je(),ge(),T3=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},C_=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),I3=(e,t)=>D.sortBasedOnPerm(e,C_(e.length,t)),S3=(e,t,n,a)=>{let u=`fn perm(i: ${a.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let d=0;d<t;++d)u+=`a[${e[d]}]=i[${d}];`;return u+="return a;}"},$3=(e,t)=>{let n=[],a=[];for(let u=0;u<e.length;++u)e[u]!==1&&n.push(e[u]),e[t[u]]!==1&&a.push(t[u]);return{newShape:n,newPerm:a}},A3=(e,t)=>{let n=0;for(let a=0;a<e.length;++a)if(t[e[a]]!==1){if(e[a]<n)return!1;n=e[a]}return!0},st=(e,t)=>{let n=e.dataType,a=e.dims.length,u=C_(a,t),d=I3(e.dims,u),l=e.dims,p=d,o=a<2||A3(u,e.dims),r;if(o)return r=m=>{let b=L("input",n,l,4),w=F("output",n,p,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(b,w)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=D.size(d);return{outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:r};let{newShape:i,newPerm:s}=$3(e.dims,u),c=D.areEqual(s,[2,3,1]),h=D.areEqual(s,[3,1,2]);if(i.length===2||c||h){l=c?[i[0],i[1]*i[2]]:h?[i[0]*i[1],i[2]]:i,p=[l[1],l[0]];let m=16;return r=b=>{let w=L("a",n,l.length),x=F("output",n,p.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(w,x)}
  var<workgroup> tile : array<array<${x.type.value}, ${m+1}>, ${m}>;
  ${b.mainStart([m,m,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${m} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${m}u + local_id.x;
    let input_row = workgroup_id_x * ${m}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${w.getByIndices(`${w.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${m}u + local_id.x;
    let output_row = workgroup_id_y * ${m}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${x.setByIndices(`${x.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=D.size(d);return{outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p[1]/m),y:Math.ceil(p[0]/m)},programUniforms:[{type:12,data:b},...U(l,p)]}},getShaderSource:r}}return r=m=>{let b=L("a",n,l.length),w=F("output",n,p.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(b,w)}

  ${S3(u,a,b,w)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let m=D.size(d);return{outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...U(l,p)]}},getShaderSource:r}},D_=(e,t)=>{T3(e.inputs,t.perm),e.compute(st(e.inputs[0],t.perm))},k_=e=>le({perm:e.perm})}),O3,P3,E3,C3,D3,k3,N3,L3,R3,z3,Wn,N_,L_,R_,z_,M_,B_,F_,V_,G_,U_,W_=N(()=>{ue(),fe(),ge(),Ba(),Yn(),O3={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},P3={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},E3={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},C3={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},D3=(e,t)=>{let n=[];for(let a=t-e;a<t;++a)n.push(a);return n},k3=(e,t)=>{let n=[],a=e.length;for(let d=0;d<a;d++)t.indexOf(d)===-1&&n.push(e[d]);let u=t.map(d=>e[d]);return[n,u]},N3=(e,t)=>{let n=e.length+t.length,a=[],u=0;for(let d=0;d<n;d++)t.indexOf(d)===-1?a.push(e[u++]):a.push(1);return a},L3=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},R3=(e,t)=>{let n=[];if(!L3(e,t)){for(let a=0;a<t;++a)e.indexOf(a)===-1&&n.push(a);e.forEach(a=>n.push(a))}return n},z3=(e,t,n,a,u,d,l)=>{let p=n[0].dims,o=D.size(d),r=D.size(l),i=L("_A",n[0].dataType,p),s=F("output",u,d),c=64;o===1&&(c=256);let h=`
          var<workgroup> aBestValues : array<f32, ${c}>;
       `,m=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(i,s)}
        ${h}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(c)}

          let outputIndex = global_idx / ${c};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${E3[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${c}) {
           let candidate = f32(${i.getByOffset("offset + k")});
           bestValue = ${O3[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${c}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${P3[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${s.setByOffset("outputIndex",`${a==="mean"?`${s.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${s.type.storage}(${C3[a]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${c}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:d,dataType:u}],dispatchGroup:{x:o},programUniforms:[{type:12,data:r}]})}},Wn=(e,t,n,a)=>{let u=e.inputs.length===1?n:Tc(e.inputs,n),d=u.axes;d.length===0&&!u.noopWithEmptyAxes&&(d=e.inputs[0].dims.map((h,m)=>m));let l=D.normalizeAxes(d,e.inputs[0].dims.length),p=l,o=e.inputs[0],r=R3(p,e.inputs[0].dims.length);r.length>0&&(o=e.compute(st(e.inputs[0],r),{inputs:[0],outputs:[-1]})[0],p=D3(p.length,o.dims.length));let[i,s]=k3(o.dims,p),c=i;u.keepDims&&(c=N3(i,l)),e.compute(z3(t,u.cacheKey,[o],a,e.inputs[0].dataType,c,s),{inputs:[o]})},N_=(e,t)=>{Wn(e,"ReduceMeanShared",t,"mean")},L_=(e,t)=>{Wn(e,"ReduceL1Shared",t,"l1")},R_=(e,t)=>{Wn(e,"ReduceL2Shared",t,"l2")},z_=(e,t)=>{Wn(e,"ReduceLogSumExpShared",t,"logSumExp")},M_=(e,t)=>{Wn(e,"ReduceMaxShared",t,"max")},B_=(e,t)=>{Wn(e,"ReduceMinShared",t,"min")},F_=(e,t)=>{Wn(e,"ReduceProdShared",t,"prod")},V_=(e,t)=>{Wn(e,"ReduceSumShared",t,"sum")},G_=(e,t)=>{Wn(e,"ReduceSumSquareShared",t,"sumSquare")},U_=(e,t)=>{Wn(e,"ReduceLogSumShared",t,"logSum")}}),Hn,M3,Fa,Tc,qn,B3,F3,V3,G3,U3,W3,H3,q3,j3,K3,jn,H_,q_,j_,K_,X_,Z_,J_,Q_,Y_,e0,Ba=N(()=>{ue(),fe(),Je(),ge(),W_(),Hn=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},M3=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Fa=(e,t,n,a,u,d,l=!1,p=!1)=>{let o=[],r=n[0].dims,i=r.length,s=D.normalizeAxes(u,i),c=!p&&s.length===0;r.forEach((b,w)=>{c||s.indexOf(w)>=0?l&&o.push(1):o.push(b)});let h=o.length,m=D.size(o);return{name:e,shaderCache:t,getShaderSource:b=>{let w=[],x=L("_A",n[0].dataType,i),_=F("output",d,h),S=a(x,_,s),I=S[2];for(let O=0,A=0;O<i;O++)c||s.indexOf(O)>=0?(l&&A++,I=`for(var j${O}: u32 = 0; j${O} < ${r[O]}; j${O}++) {
                  ${S[2].includes("last_index")?`let last_index = j${O};`:""}
                  ${x.indicesSet("input_indices",O,`j${O}`)}
                  ${I}
                }`):(w.push(`${x.indicesSet("input_indices",O,_.indicesGet("output_indices",A))};`),A++);return`

        ${b.registerUniform("output_size","u32").declareVariables(x,_)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${x.type.indices};
          let output_indices = ${_.offsetToIndices("global_idx")};

          ${w.join(`
`)}
          ${S[0]}       // init ops for reduce max/min
          ${S[1]}
          ${I}
          ${S[3]}
          ${S.length===4?_.setByOffset("global_idx","value"):S.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...U(r,o)]})}},Tc=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(a=>n.push(Number(a))),le({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},qn=(e,t,n,a)=>{let u=e.inputs,d=u.length===1?n:Tc(u,n);e.compute(Fa(t,{hint:d.cacheKey,inputDependencies:["rank"]},[u[0]],d.noopWithEmptyAxes&&d.axes.length===0?M3:a,d.axes,u[0].dataType,d.keepDims,d.noopWithEmptyAxes),{inputs:[0]})},B3=(e,t)=>{Hn(e.inputs),qn(e,"ReduceLogSum",t,(n,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},F3=(e,t)=>{Hn(e.inputs),qn(e,"ReduceL1",t,(n,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},V3=(e,t)=>{Hn(e.inputs),qn(e,"ReduceL2",t,(n,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},G3=(e,t)=>{Hn(e.inputs),qn(e,"ReduceLogSumExp",t,(n,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},U3=(e,t)=>{Hn(e.inputs),qn(e,"ReduceMax",t,(n,a,u)=>{let d=[];for(let l=0;l<n.rank;l++)(u.indexOf(l)>=0||u.length===0)&&d.push(n.indicesSet("input_indices",l,0));return[`${d.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},W3=(e,t)=>{Hn(e.inputs),qn(e,"ReduceMean",t,(n,a,u)=>{let d=1;for(let l=0;l<n.rank;l++)(u.indexOf(l)>=0||u.length===0)&&(d*=e.inputs[0].dims[l]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${d});`]})},H3=(e,t)=>{Hn(e.inputs),qn(e,"ReduceMin",t,(n,a,u)=>{let d=[];for(let l=0;l<n.rank;l++)(u.indexOf(l)>=0||u.length===0)&&d.push(`input_indices[${l}] = 0;`);return[`${d.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},q3=(e,t)=>{Hn(e.inputs),qn(e,"ReduceProd",t,(n,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},j3=(e,t)=>{Hn(e.inputs),qn(e,"ReduceSum",t,(n,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},K3=(e,t)=>{Hn(e.inputs),qn(e,"ReduceSumSquare",t,(n,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},jn=(e,t,n)=>{if(t.length===0)return n;let a=1,u=1;for(let d=0;d<t.length;d++)t.indexOf(d)===-1?a*=e[d]:u*=e[d];return u<32&&a>1024},H_=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?W3(e,t):N_(e,t)},q_=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?F3(e,t):L_(e,t)},j_=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?V3(e,t):R_(e,t)},K_=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?G3(e,t):z_(e,t)},X_=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?U3(e,t):M_(e,t)},Z_=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?H3(e,t):B_(e,t)},J_=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?q3(e,t):F_(e,t)},Q_=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?j3(e,t):V_(e,t)},Y_=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?K3(e,t):G_(e,t)},e0=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?B3(e,t):U_(e,t)}}),t0,n0,r0,Ic,o0=N(()=>{ue(),Je(),Ba(),t0=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},n0=(e,t)=>{t0(e.inputs);let n=(a,u,d)=>{let l=[];for(let p=0;p<a.rank;p++)(d.indexOf(p)>=0||d.length===0)&&l.push(`input_indices[${p}] = 0;`);return[`${l.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",u.setByOffset("global_idx","best_index")]};e.compute(Fa("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},r0=(e,t)=>{t0(e.inputs);let n=(a,u,d)=>{let l=[];for(let p=0;p<a.rank;p++)(d.indexOf(p)>=0||d.length===0)&&l.push(`input_indices[${p}] = 0;`);return[`${l.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",u.setByOffset("global_idx","best_index")]};e.compute(Fa("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Ic=e=>le(e)}),X3,Sc,Z3,J3,Q3,lo,Y3,i0,Va=N(()=>{ue(),fe(),Ra(),ge(),X3=(e,t)=>{let n=e[0],a=e[1],u=e[2],d=e[3],l=e[4],p=e[5];if(l&&p)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let o=n.dims[0],r=n.dims[1],i=n.dims[2];if(u.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(a.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==i)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(u.dims[0]!==a.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let s=u.dims[0]/3,c=s,h=c;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let S of t.qkvHiddenSizes)if(S%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");s=t.qkvHiddenSizes[0],c=t.qkvHiddenSizes[1],h=t.qkvHiddenSizes[2]}let m=r;if(s!==c)throw new Error("qkv_hidden_sizes first element should be same as the second");if(u.dims[0]!==s+c+h)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(l){if(c!==h)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(l.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(l.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(l.dims[1]!==o)throw new Error('Input "past" second dimension must be batch_size');if(l.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(l.dims[4]!==c/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=l.dims[3])}let w=m+b,x=-1,_=0;if(d)throw new Error("Mask not supported");if(l)throw new Error("past is not supported");if(p){if(p.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(p.dims[0]!==o||p.dims[1]!==t.numHeads||p.dims[2]!==r||p.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:o,sequenceLength:r,pastSequenceLength:b,kvSequenceLength:m,totalSequenceLength:w,maxSequenceLength:x,inputHiddenSize:i,hiddenSize:s,vHiddenSize:h,headSize:Math.floor(s/t.numHeads),vHeadSize:Math.floor(h/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:_,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Sc=(e,t,n)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Z3=(e,t,n,a,u,d,l,p)=>{let o=Pe(l?1:d),r=64,i=d/o;i<r&&(r=32);let s=Math.ceil(d/o/r),c=[{type:12,data:t},{type:12,data:n},{type:12,data:a},{type:12,data:u},{type:12,data:i},{type:12,data:s}],h=Me(e.dataType,o),m=at(1,o),b=["type"];l&&b.push("type"),p&&b.push("type");let w=x=>{let _=F("x",e.dataType,e.dims,o),S=[_],I=l?L("seq_lens",l.dataType,l.dims):void 0;I&&S.push(I);let O=p?L("total_sequence_length_input",p.dataType,p.dims):void 0;O&&S.push(O);let A=at(e.dataType),k=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${r}>;
  var<workgroup> thread_sum: array<f32, ${r}>;
  ${x.registerUniforms(k).declareVariables(...S)}
  ${x.mainStart([r,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Sc(I,O,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${r}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${l?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${m}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(o){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${o}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${r}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(o){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${o}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${r}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${_.type.value}(${A}(1.0) / ${A}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${_.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${l?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${_.type.value}(${A}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${r};${h};${o}`,inputDependencies:b},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:u,z:t*n},programUniforms:c})}},J3=(e,t,n,a,u,d,l,p,o)=>{let r=l+d.kvSequenceLength,i=[d.batchSize,d.numHeads,d.sequenceLength,r],s=e>1&&a,c=d.kvNumHeads?d.kvNumHeads:d.numHeads,h=s?[d.batchSize,c,r,d.headSize]:void 0,m=d.nReps?d.nReps:1,b=d.scale===0?1/Math.sqrt(d.headSize):d.scale,w=Pe(d.headSize),x=d.headSize/w,_=12,S={x:Math.ceil(r/_),y:Math.ceil(d.sequenceLength/_),z:d.batchSize*d.numHeads},I=[{type:12,data:d.sequenceLength},{type:12,data:x},{type:12,data:r},{type:12,data:d.numHeads},{type:12,data:d.headSize},{type:1,data:b},{type:12,data:l},{type:12,data:d.kvSequenceLength},{type:12,data:m}],O=s&&a&&D.size(a.dims)>0,A=["type","type"];O&&A.push("type"),u&&A.push("type"),p&&A.push("type"),o&&A.push("type");let k=[{dims:i,dataType:t.dataType,gpuDataType:0}];s&&k.push({dims:h,dataType:t.dataType,gpuDataType:0});let T=R=>{let j=L("q",t.dataType,t.dims,w),ee=L("key",n.dataType,n.dims,w),W=[j,ee];if(O){let re=L("past_key",a.dataType,a.dims,w);W.push(re)}u&&W.push(L("attention_bias",u.dataType,u.dims));let Q=p?L("seq_lens",p.dataType,p.dims):void 0;Q&&W.push(Q);let C=o?L("total_sequence_length_input",o.dataType,o.dims):void 0;C&&W.push(C);let M=F("output",t.dataType,i),q=[M];s&&q.push(F("present_key",t.dataType,h,w));let Y=at(1,w),J=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${_}u;

  var<workgroup> tileQ: array<${j.type.storage}, ${_*_}>;
  var<workgroup> tileK: array<${j.type.storage}, ${_*_}>;
  ${R.registerUniforms(J).declareVariables(...W,...q)}
  ${R.mainStart([_,_,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${m===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Sc(Q,C,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${O&&s?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${s?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Y}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${O&&s?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${s?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Y}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(w){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${w}`)}})()};
        output[outputIdx] = ${M.type.value} (sum * uniforms.alpha) + ${u?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${u!==void 0};${a!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:k,dispatchGroup:S,programUniforms:I}),getShaderSource:T}},Q3=(e,t,n,a,u,d,l=void 0,p=void 0)=>{let o=d+u.kvSequenceLength,r=u.nReps?u.nReps:1,i=u.vHiddenSize*r,s=e>1&&a,c=u.kvNumHeads?u.kvNumHeads:u.numHeads,h=s?[u.batchSize,c,o,u.headSize]:void 0,m=[u.batchSize,u.sequenceLength,i],b=12,w={x:Math.ceil(u.vHeadSize/b),y:Math.ceil(u.sequenceLength/b),z:u.batchSize*u.numHeads},x=[{type:12,data:u.sequenceLength},{type:12,data:o},{type:12,data:u.vHeadSize},{type:12,data:u.numHeads},{type:12,data:u.headSize},{type:12,data:i},{type:12,data:d},{type:12,data:u.kvSequenceLength},{type:12,data:r}],_=s&&a&&D.size(a.dims)>0,S=["type","type"];_&&S.push("type"),l&&S.push("type"),p&&S.push("type");let I=[{dims:m,dataType:t.dataType,gpuDataType:0}];s&&I.push({dims:h,dataType:t.dataType,gpuDataType:0});let O=A=>{let k=L("probs",t.dataType,t.dims),T=L("v",n.dataType,n.dims),R=[k,T];_&&R.push(L("past_value",a.dataType,a.dims));let j=l?L("seq_lens",l.dataType,l.dims):void 0;l&&R.push(j);let ee=p?L("total_sequence_length_input",p.dataType,p.dims):void 0;p&&R.push(ee);let W=[F("output",t.dataType,m)];s&&W.push(F("present_value",t.dataType,h));let Q=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${k.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${k.type.value}, ${b*b}>;
  ${A.registerUniforms(Q).declareVariables(...R,...W)}
  ${A.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${r===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${r===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Sc(j,ee,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${_&&s?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${s?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${k.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${_&&s?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${s?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${a!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:I,dispatchGroup:w,programUniforms:x}),getShaderSource:O}},lo=(e,t,n,a,u,d,l,p,o,r,i=void 0,s=void 0)=>{let c=Math.min(e.outputCount,1+(l?1:0)+(p?1:0)),h=c>1?r.pastSequenceLength:0,m=h+r.kvSequenceLength,b=o&&D.size(o.dims)>0?o:void 0,w=[t,n];c>1&&l&&D.size(l.dims)>0&&w.push(l),b&&w.push(b),i&&w.push(i),s&&w.push(s);let x=e.compute(J3(c,t,n,l,b,r,h,i,s),{inputs:w,outputs:c>1?[-1,1]:[-1]})[0];e.compute(Z3(x,r.batchSize,r.numHeads,h,r.sequenceLength,m,i,s),{inputs:i&&s?[x,i,s]:[x],outputs:[]});let _=[x,a];c>1&&p&&D.size(p.dims)>0&&_.push(p),i&&_.push(i),s&&_.push(s),e.compute(Q3(c,x,a,p,r,h,i,s),{inputs:_,outputs:c>1?[0,2]:[0]})},Y3=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],a=t.sequenceLength,u=t.inputHiddenSize,d=t.headSize,l=12,p={x:Math.ceil(t.headSize/l),y:Math.ceil(t.sequenceLength/l),z:t.batchSize*t.numHeads},o=[e.inputs[0],e.inputs[1],e.inputs[2]],r=[{type:12,data:a},{type:12,data:u},{type:12,data:d},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],i=s=>{let c=F("output_q",o[0].dataType,n),h=F("output_k",o[0].dataType,n),m=F("output_v",o[0].dataType,n),b=L("input",o[0].dataType,o[0].dims),w=L("weight",o[1].dataType,o[1].dims),x=L("bias",o[2].dataType,o[2].dims),_=b.type.storage,S=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${l}u;
  var<workgroup> tileInput: array<${_}, ${l*l}>;
  var<workgroup> tileWeightQ: array<${_}, ${l*l}>;
  var<workgroup> tileWeightK: array<${_}, ${l*l}>;
  var<workgroup> tileWeightV: array<${_}, ${l*l}>;
  ${s.registerUniforms(S).declareVariables(b,w,x,c,h,m)}
  ${s.mainStart([l,l,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${_}(0);
    var valueK = ${_}(0);
    var valueV = ${_}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:p,programUniforms:r}),getShaderSource:i},{inputs:o,outputs:[-1,-1,-1]})},i0=(e,t)=>{let n=X3(e.inputs,t),[a,u,d]=Y3(e,n);return lo(e,a,u,d,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),eE,tE,nE,a0,s0=N(()=>{pt(),ue(),fe(),Je(),ge(),eE=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(a,u,d)=>{let l=u.length;if(l!==a.length)throw new Error(`${d}: num dimensions != ${l}`);u.forEach((p,o)=>{if(p!==a[o])throw new Error(`${d}: dim[${o}] do not match`)})};if(e[0].dims.length>1){let a=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,a,"Invalid input scale"),n(e[2].dims,a,"Invalid input B"),n(e[3].dims,a,"Invalid input mean"),n(e[4].dims,a,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},tE=(e,t)=>{let{epsilon:n,spatial:a,format:u}=t,d=e[0].dims,l=a?Pe(d[d.length-1]):1,p=u==="NHWC"&&d.length>1?l:1,o=D.size(d)/l,r=a,i=r?d.length:d,s=L("x",e[0].dataType,e[0].dims,l),c=L("scale",e[1].dataType,e[1].dims,p),h=L("bias",e[2].dataType,e[2].dims,p),m=L("inputMean",e[3].dataType,e[3].dims,p),b=L("inputVar",e[4].dataType,e[4].dims,p),w=F("y",e[0].dataType,i,l),x=()=>{let S="";if(a)S=`let cOffset = ${d.length===1?"0u":u==="NHWC"?`outputIndices[${d.length-1}] / ${l}`:"outputIndices[1]"};`;else if(u==="NCHW")S=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{S=`var cIndices = ${c.type.indices}(0);
                       cIndices[0] = outputIndices[${d.length-1}];`;for(let I=1;I<c.rank;I++)S+=`cIndices[${I}] = outputIndices[${I}];`;S+=`let cOffset = ${c.indicesToOffset("cIndices")};`}return S},_=S=>`
  const epsilon = ${n};
  ${S.registerUniform("outputSize","u32").declareVariables(s,c,h,m,b,w)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${l}`)};
    ${x()}
    let scale = ${c.getByOffset("cOffset")};
    let bias = ${h.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${s.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${a}_${l}`,inputDependencies:r?["rank","type","type","type","type"]:void 0},getShaderSource:_,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:r?[{type:12,data:o},...U(d)]:[{type:12,data:o}]})}},nE=e=>le(e),a0=(e,t)=>{let{inputs:n,outputCount:a}=e,u=nE({...t,outputCount:a});if(pe.webgpu.validateInputContent&&eE(n,u),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(tE(n,u))}}),rE,oE,u0,l0=N(()=>{fe(),ge(),rE=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},oE=e=>{let t=e[0].dims,n=e[0].dims[2],a=D.size(t)/4,u=e[0].dataType,d=L("input",u,t,4),l=L("bias",u,[n],4),p=L("residual",u,t,4),o=F("output",u,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:r=>`
  const channels = ${n}u / 4;
  ${r.declareVariables(d,l,p,o)}

  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${d.getByOffset("global_idx")}
      + ${l.getByOffset("global_idx % channels")} + ${p.getByOffset("global_idx")};
    ${o.setByOffset("global_idx","value")}
  }`}},u0=e=>{rE(e.inputs),e.compute(oE(e.inputs))}}),iE,De,c0,d0,p0,f0,h0,m0,g0,b0,y0,aE,_0,w0,v0,x0,Uo,T0,Ga,I0,S0,$0,A0,O0,P0,E0,C0,D0,k0,N0,L0,R0,z0,M0,B0,F0,V0,$c,Ac,G0,U0,W0,sE,uE,H0,Ua=N(()=>{ue(),fe(),Je(),ge(),iE=(e,t,n,a,u,d,l)=>{let p=Math.ceil(t/4),o="";typeof u=="string"?o=`${u}(a)`:o=u("a");let r=L("inputData",n,[p],4),i=F("outputData",a,[p],4),s=[{name:"vec_size",type:"u32"}];return l&&s.push(...l),`
      ${e.registerUniforms(s).declareVariables(r,i)}

  ${d??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${r.getByOffset("global_idx")};
    ${i.setByOffset("global_idx",o)}
  }`},De=(e,t,n,a,u,d=e.dataType,l,p)=>{let o=[{type:12,data:Math.ceil(D.size(e.dims)/4)}];return l&&o.push(...l),{name:t,shaderCache:{hint:u,inputDependencies:["type"]},getShaderSource:r=>iE(r,D.size(e.dims),e.dataType,d,n,a,p),getRunData:r=>({outputs:[{dims:e.dims,dataType:d}],dispatchGroup:{x:Math.ceil(D.size(r[0].dims)/64/4)},programUniforms:o})}},c0=e=>{e.compute(De(e.inputs[0],"Abs","abs"))},d0=e=>{e.compute(De(e.inputs[0],"Acos","acos"))},p0=e=>{e.compute(De(e.inputs[0],"Acosh","acosh"))},f0=e=>{e.compute(De(e.inputs[0],"Asin","asin"))},h0=e=>{e.compute(De(e.inputs[0],"Asinh","asinh"))},m0=e=>{e.compute(De(e.inputs[0],"Atan","atan"))},g0=e=>{e.compute(De(e.inputs[0],"Atanh","atanh"))},b0=e=>le(e),y0=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(De(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},aE=e=>{let t,n,a=e.length>=2&&e[1].data!==0,u=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=a?e[1].getFloat32Array()[0]:-34028234663852886e22,n=u?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=a?e[1].getUint16Array()[0]:64511,n=u?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return le({min:t,max:n})},_0=(e,t)=>{let n=t||aE(e.inputs),a=at(e.inputs[0].dataType);e.compute(De(e.inputs[0],"Clip",u=>`clamp(${u}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},w0=e=>{e.compute(De(e.inputs[0],"Ceil","ceil"))},v0=e=>{e.compute(De(e.inputs[0],"Cos","cos"))},x0=e=>{e.compute(De(e.inputs[0],"Cosh","cosh"))},Uo=e=>le(e),T0=(e,t)=>{let n=at(e.inputs[0].dataType);e.compute(De(e.inputs[0],"Elu",a=>`elu_vf32(${a})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Ga=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,I0=e=>{let t=at(e.inputs[0].dataType);e.compute(De(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Ga(t)))},S0=e=>{e.compute(De(e.inputs[0],"Exp","exp"))},$0=e=>{e.compute(De(e.inputs[0],"Floor","floor"))},A0=e=>{let t=at(e.inputs[0].dataType);e.compute(De(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Ga(t)))},O0=(e,t)=>{let n=at(e.inputs[0].dataType);e.compute(De(e.inputs[0],"LeakyRelu",a=>`select(leaky_relu_alpha_ * ${a}, ${a}, ${a} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},P0=e=>{e.compute(De(e.inputs[0],"Not",t=>`!${t}`))},E0=e=>{e.compute(De(e.inputs[0],"Neg",t=>`-${t}`))},C0=e=>{e.compute(De(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},D0=e=>{let t=at(e.inputs[0].dataType);e.compute(De(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},k0=e=>{e.compute(De(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},N0=e=>le(e),L0=(e,t)=>{let n=at(e.inputs[0].dataType);e.compute(De(e.inputs[0],"HardSigmoid",a=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${a} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},R0=e=>{e.compute(De(e.inputs[0],"Sin","sin"))},z0=e=>{e.compute(De(e.inputs[0],"Sinh","sinh"))},M0=e=>{e.compute(De(e.inputs[0],"Sqrt","sqrt"))},B0=e=>{e.compute(De(e.inputs[0],"Tan","tan"))},F0=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,V0=e=>{e.compute(De(e.inputs[0],"Tanh",F0))},$c=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${F0("v")};
}
`,Ac=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,G0=e=>{let t=at(e.inputs[0].dataType);e.compute(De(e.inputs[0],"FastGelu",Ac,$c(t),void 0,e.inputs[0].dataType))},U0=(e,t)=>{let n=at(e.inputs[0].dataType);return e.compute(De(e.inputs[0],"ThresholdedRelu",a=>`select(vec4<${n}>(0.0), ${a}, ${a} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},W0=e=>{e.compute(De(e.inputs[0],"Log","log"))},sE=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,uE=e=>`quick_gelu_impl(${e})`,H0=(e,t)=>{let n=at(e.inputs[0].dataType);e.compute(De(e.inputs[0],"QuickGelu",uE,sE(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),lE,cE,j0,K0=N(()=>{fe(),ge(),Ua(),lE=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},cE=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=L("input",e[0].dataType,e[0].dims,4),a=L("bias",e[0].dataType,[e[0].dims[2]],4),u=F("output",e[0].dataType,t,4),d=D.size(t)/4,l=Me(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)}}),getShaderSource:p=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${p.declareVariables(n,a,u)}

  ${Ga(l)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(d)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${u.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},j0=e=>{lE(e.inputs),e.compute(cE(e.inputs))}}),dE,pE,Kn,X0,Z0,J0,Q0,Y0,ew,tw,nw,rw,ow,iw=N(()=>{ue(),fe(),ge(),dE=(e,t,n,a,u,d,l,p,o,r,i,s)=>{let c,h;typeof p=="string"?c=h=(_,S)=>`${p}((${_}),(${S}))`:typeof p=="function"?c=h=p:(c=p.scalar,h=p.vector);let m=F("outputData",i,a.length,4),b=L("aData",o,t.length,4),w=L("bData",r,n.length,4),x;if(u)if(d){let _=D.size(t)===1,S=D.size(n)===1,I=t.length>0&&t[t.length-1]%4===0,O=n.length>0&&n[n.length-1]%4===0;_||S?x=m.setByOffset("global_idx",h(_?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),S?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):x=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",h(l||I?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,l||O?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else x=m.setByOffset("global_idx",h(b.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!d)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let _=(S,I,O="")=>{let A=`aData[indexA${I}][componentA${I}]`,k=`bData[indexB${I}][componentB${I}]`;return`
            let outputIndices${I} = ${m.offsetToIndices(`global_idx * 4u + ${I}u`)};
            let offsetA${I} = ${b.broadcastedIndicesToOffset(`outputIndices${I}`,m)};
            let offsetB${I} = ${w.broadcastedIndicesToOffset(`outputIndices${I}`,m)};
            let indexA${I} = offsetA${I} / 4u;
            let indexB${I} = offsetB${I} / 4u;
            let componentA${I} = offsetA${I} % 4u;
            let componentB${I} = offsetB${I} % 4u;
            ${S}[${I}] = ${O}(${c(A,k)});
          `};i===9?x=`
            var data = vec4<u32>(0);
            ${_("data",0,"u32")}
            ${_("data",1,"u32")}
            ${_("data",2,"u32")}
            ${_("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:x=`
            ${_("outputData[global_idx]",0)}
            ${_("outputData[global_idx]",1)}
            ${_("outputData[global_idx]",2)}
            ${_("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,w,m)}

        ${s??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${x}
      }`},pE=(e,t,n,a,u,d,l=n.dataType)=>{let p=n.dims.map(Number),o=a.dims.map(Number),r=!D.areEqual(p,o),i=p,s=D.size(p),c=!1,h=!1,m=[r];if(r){let b=Un.calcShape(p,o,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");i=b.slice(),s=D.size(i);let w=D.size(p)===1,x=D.size(o)===1,_=p.length>0&&p[p.length-1]%4===0,S=o.length>0&&o[o.length-1]%4===0;m.push(w),m.push(x),m.push(_),m.push(S);let I=1;for(let O=1;O<i.length;O++){let A=p[p.length-O],k=o[o.length-O];if(A===k)I*=A;else break}I%4===0?(h=!0,c=!0):(w||x||_||S)&&(c=!0)}else c=!0;return m.push(c),{name:e,shaderCache:{hint:t+m.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>dE(b,p,o,i,c,r,h,u,n.dataType,a.dataType,l,d),getRunData:()=>({outputs:[{dims:i,dataType:l}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:Math.ceil(D.size(i)/4)},...U(p,o,i)]})}},Kn=(e,t,n,a,u,d)=>{e.compute(pE(t,u??"",e.inputs[0],e.inputs[1],n,a,d))},X0=e=>{Kn(e,"Add",(t,n)=>`${t}+${n}`)},Z0=e=>{Kn(e,"Div",(t,n)=>`${t}/${n}`)},J0=e=>{Kn(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Q0=e=>{Kn(e,"Mul",(t,n)=>`${t}*${n}`)},Y0=e=>{let t=L("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Kn(e,"Pow",{scalar:(n,a)=>`pow_custom(${n},${a})`,vector:(n,a)=>`pow_vector_custom(${n},${a})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},ew=e=>{Kn(e,"Sub",(t,n)=>`${t}-${n}`)},tw=e=>{Kn(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},nw=e=>{Kn(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},rw=e=>{Kn(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},ow=e=>{Kn(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),hE,mE,gE,bE,aw,sw,uw=N(()=>{ue(),fe(),Je(),ge(),hE=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,a=e[n],u=a.dataType,d=a.dims.length;e.forEach((l,p)=>{if(p!==n){if(l.dataType!==u)throw new Error("input tensors should be one type");if(l.dims.length!==d)throw new Error("input tensors should have the same shape");l.dims.forEach((o,r)=>{if(r!==t&&o!==a.dims[r])throw new Error("non concat dimensions must match")})}})},mE=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,gE=(e,t)=>{let n=e.length,a=[];for(let u=0;u<n;++u){let d=t.setByOffset("global_idx",e[u].getByIndices("indices"));n===1?a.push(d):u===0?a.push(`if (inputIndex == ${u}u) { ${d} }`):u===n-1?a.push(`else { ${d} }`):a.push(`else if (inputIndex == ${u}) { ${d} }`)}return a.join(`
`)},bE=(e,t,n,a)=>{let u=D.size(n),d=new Array(e.length),l=new Array(e.length),p=0,o=[],r=[],i=[{type:12,data:u}];for(let b=0;b<e.length;++b)p+=e[b].dims[t],d[b]=p,r.push(e[b].dims.length),l[b]=L(`input${b}`,a,r[b]),o.push("rank"),i.push({type:12,data:d[b]});for(let b=0;b<e.length;++b)i.push(...U(e[b].dims));i.push(...U(n));let s=F("output",a,n.length),c=s.indicesGet("indices",t),h=Array.from(Array(d.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),m=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)b.registerUniform(`sizeInConcatAxis${w}`,"u32");return b.declareVariables(...l,s)})()}

  ${mE(d.length,h)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${s.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${c});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${d.length}u>(${h});
      ${c} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${gE(l,s)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:i}),getShaderSource:m}},aw=(e,t)=>{let n=e.inputs,a=n[0].dims,u=D.normalizeAxis(t.axis,a.length);hE(n,u);let d=a.slice();d[u]=n.reduce((p,o)=>p+(o.dims.length>u?o.dims[u]:0),0);let l=n.filter(p=>D.size(p.dims)>0);e.compute(bE(l,u,d,n[0].dataType),{inputs:l})},sw=e=>le({axis:e.axis})}),Zt,Jt,Qt,Wa,wr=N(()=>{ue(),fe(),Zt=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Jt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Qt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Wa=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[n,a]=e?.activation_params||[.2,.5];return{activation:t,alpha:n,beta:a}}else if(t==="Clip"){let[n,a]=e?.activation_params||[m_,g_];return{activation:t,clipMax:a,clipMin:n}}else if(t==="LeakyRelu"){let[n]=e?.activation_params||[.01];return{activation:t,alpha:n}}return{activation:t}}}),ot,lw,Ha=N(()=>{ot=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},lw=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),cw,dw=N(()=>{cw=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Wo,qa,ja=N(()=>{ue(),fe(),ge(),wr(),Wo=(e,t,n,a,u)=>{let d=a-n;return`
      ${Array.from({length:n}).map((l,p)=>`
      if (${Z(t.shape,p,t.rank)} != 1) {
        ${t.indicesSet(e,p,Z(u,p+d,a))}
      } else {
        ${t.indicesSet(e,p,0)}
      }`).join("")}
`},qa=(e,t,n,a,u=!1,d)=>{let l=e[0].dims,p=e[1].dims,o=l[l.length-2],r=p[p.length-1],i=l[l.length-1],s=Pe(r),c=Pe(i),h=Pe(o),m=D.size(n)/s/h,b=e.length>2,w=a?a.slice(0,-2):n.slice(0,-2),x=[D.size(w),o,r],_=[{type:12,data:m},{type:12,data:o},{type:12,data:r},{type:12,data:i}];Jt(t,_),_.push(...U(w,l,p)),b&&_.push(...U(e[2].dims)),_.push(...U(x));let S=I=>{let O=Ma("batch_dims",e[0].dataType,w.length),A=L("a",e[0].dataType,l.length,c),k=L("b",e[1].dataType,p.length,s),T=F("output",e[0].dataType,x.length,s),R=Me(T.type.tensor),j=Zt(t,T.type.value,R),ee=[A,k],W="";if(b){let M=u?s:1;ee.push(L("bias",e[2].dataType,e[2].dims.length,M)),W=`${u?`value += bias[col / ${M}];`:`value += ${T.type.value}(bias[row + i]);`}`}let Q=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Qt(t,Q);let C=()=>{let M=`var a_data: ${A.type.value};`;for(let q=0;q<c;q++)M+=`
              let b_data${q} = b[(b_offset + (k + ${q}) * uniforms.N + col) / ${s}];`;for(let q=0;q<h;q++){M+=`a_data = a[(a_offset + (row + ${q}) * uniforms.K + k) / ${c}];`;for(let Y=0;Y<c;Y++)M+=`
            values[${q}] = fma(${k.type.value}(a_data${c===1?"":`[${Y}]`}), b_data${Y}, values[${q}]);
`}return M};return`
  ${I.registerUniforms(Q).registerInternalVariables(O).declareVariables(...ee,T)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${s})) * ${s};
    var index1 = global_idx / (uniforms.N / ${s});
    let stride1 = uniforms.M / ${h};
    let row = (index1 % stride1) * ${h};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${O.offsetToIndices("batch")};`}

    var a_indices: ${A.type.indices};
    ${Wo("a_indices",A,A.rank-2,O.rank,"batch_indices")}
    ${A.indicesSet("a_indices",A.rank-2,0)}
    ${A.indicesSet("a_indices",A.rank-1,0)}
    let a_offset = ${A.indicesToOffset("a_indices")};

    var b_indices: ${k.type.indices};
    ${Wo("b_indices",k,k.rank-2,O.rank,"batch_indices")}
    ${k.indicesSet("b_indices",k.rank-2,0)}
    ${k.indicesSet("b_indices",k.rank-1,0)}
    let b_offset = ${k.indicesToOffset("b_indices")};
    var values: array<${T.type.value}, ${h}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${c}) {
      ${C()}
    }
    for (var i = 0u; i < ${h}u; i++) {
      var value = values[i];
      ${W}
      ${j}
      let cur_indices = ${T.type.indices}(batch, row + i, col);
      let offset = ${T.indicesToOffset("cur_indices")};
      ${T.setByOffset(`offset / ${s}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${s};${c};${h};${u}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:d?d(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:_}),getShaderSource:S}}}),yE,_E,Oc,pw,wE,Pc,vE,Ho,Ka=N(()=>{ue(),fe(),ge(),wr(),ja(),Ha(),yE=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,_E=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Oc=(e,t,n="f32",a,u=!1,d=32,l=!1,p=32)=>{let o=t[1]*e[1],r=t[0]*e[0],i=u?o:d,s=u?d:o,c=i/t[0],h=d/t[1];if(!((u&&c===4&&e[1]===4||!u&&(c===3||c===4))&&i%t[0]===0&&d%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${u} is true, innerElementSize ${c} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${c} must be 3 or 4.
  tileAWidth ${i} must be divisible by workgroupSize[0]${t[0]}. tileInner ${d} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${c}<${n}>, ${i/c}>, ${s}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${r/e[0]}>, ${d}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${c};
const tileInner = ${d};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${l?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${o};

  let num_tiles = ${l?`${Math.ceil(p/d)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${l?`i32(globalId.z) * ${p}`:"0"};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${h};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${yE(u,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${c===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${_E(u,c)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},pw=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,wE=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Pc=(e,t,n="f32",a,u=!1,d=32,l=!1,p=32,o=!1)=>{let r=e[1]*t[1],i=e[0]*t[0],s=u?r:d,c=u?d:r;if(!(c%t[1]===0&&s%t[0]===0&&d%t[1]===0))throw new Error(`tileAHight ${c} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${s} must be divisible by workgroupSize[0]${t[0]}, tileInner ${d} must be divisible by workgroupSize[1]${t[1]}`);let h=c/t[1],m=s/t[0],b=d/t[1],w=o?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${r};
    let globalColStart = i32(workgroupId.x) * ${i};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${c}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${s}; inputCol = inputCol + ${t[0]}) {
          ${pw(u,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${d}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${i}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${u?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${r};

let tileRowA = i32(localId.y) * ${h};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${pw(u,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${wE(u)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${s}>, ${c}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${i}>, ${d}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${d};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${l?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${l?`${Math.ceil(p/d)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${l?`i32(globalId.z) * ${p}`:"0"};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${w}
  }
`},vE=(e,t,n,a,u=!1)=>{let[d,l,p,o]=a,r=Me(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${d.type.indices}) -> ${ot(e,r)} {
      var value = ${ot(e,r)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${l.type.indices};
        ${Wo("aIndices",l,l.rank-2,d.rank,"batchIndices")}
        ${l.indicesSet("aIndices",l.rank-2,"u32(row)")}
        ${l.indicesSet("aIndices",l.rank-1,"u32(colIn)")}
        value = ${l.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${d.type.indices}) -> ${ot(e,r)} {
      var value = ${ot(e,r)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${p.type.indices};
        ${Wo("bIndices",p,p.rank-2,d.rank,"batchIndices")}
        ${p.indicesSet("bIndices",p.rank-2,"u32(row)")}
        ${p.indicesSet("bIndices",p.rank-1,"u32(colIn)")}
        value = ${p.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${ot(e,r)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${u?"bias[colIn]":`${ot(e,r)}(bias[row])`};`:""}
        ${n}
        ${o.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Ho=(e,t,n,a,u=!1,d)=>{let l=e[0].dims,p=e[1].dims,o=l.slice(0,-2),r=p.slice(0,-2),i=a?a.slice(0,-2):n.slice(0,-2),s=D.size(i),c=l[l.length-2],h=l[l.length-1],m=p[p.length-1],b=h%4===0&&m%4===0,w=c<=8?[4,1,1]:[4,4,1],x=[8,8,1],_=[Math.ceil(m/x[0]/w[0]),Math.ceil(c/x[1]/w[1]),Math.ceil(s/x[2]/w[2])],S=b?4:1,I=[...o,c,h/S],O=I.length,A=[...r,h,m/S],k=A.length,T=[s,c,m/S],R=[{type:6,data:c},{type:6,data:m},{type:6,data:h}];Jt(t,R),R.push(...U(i,I,A));let j=["rank","rank"],ee=e.length>2;ee&&(R.push(...U(e[2].dims)),j.push("rank")),R.push(...U(T));let W=Q=>{let C=i.length,M=Ma("batchDims",e[0].dataType,C,1),q=Me(e[0].dataType),Y=L("a",e[0].dataType,O,S),J=L("b",e[1].dataType,k,S),re=F("result",e[0].dataType,T.length,S),me=[Y,J];if(ee){let Ve=u?S:1;me.push(L("bias",e[2].dataType,e[2].dims.length,Ve))}let B=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Qt(t,B);let G=Me(re.type.tensor),ne=Zt(t,re.type.value,G),ce=vE(S,ee,ne,[M,Y,J,re],u);return`
  ${Q.registerUniforms(B).registerInternalVariables(M).declareVariables(...me,re)}
  ${ce}
  ${b?Oc(w,x,q,M):Pc(w,x,q,M)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${b};${u}`,inputDependencies:j},getRunData:()=>({outputs:[{dims:d?d(n):n,dataType:e[0].dataType}],dispatchGroup:{x:_[0],y:_[1],z:_[2]},programUniforms:R}),getShaderSource:W}}}),xE,fw,hw=N(()=>{ue(),Gn(),ge(),wr(),Ha(),dw(),Ka(),xE=(e,t,n,a,u=!1,d,l=4,p=4,o=4,r="f32")=>{let i=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${r}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},s=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},c=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,h=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",w=e?"row":"col",x=e?"col":"row",_=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${w} / outWidth;
    let outCol = ${w} % outWidth;

    let WRow = ${x} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${x} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${x} % inChannels;
    var resData = ${ot(l,r)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${b}) {
      ${c}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${i(l)}
    }
    return resData;`,S=e?t&&a?`
    let col = colIn * ${l};
    ${_}`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${_}
    }
    return ${ot(l,r)}(0.0);`:a&&n?`
    let col = colIn * ${l};
    ${_}`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${_}
    }
    return ${ot(l,r)}(0.0);`,I=e?a&&n?s(p):`
    let col = colIn * ${p};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${s(p)}
    }
    return ${ot(p,r)}(0.0);`:`
    let col = colIn * ${p};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${s(p)}
    }
    return ${ot(p,r)}(0.0);`,O=ot(o,r),A=ot(e?l:p,r),k=ot(e?p:l,r),T=Zt(d,O,r);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?S:I}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${k} {
      ${e?I:S}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${O}) {
      let col = colIn * ${o};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${h}
      ${lw(u)}
      ${T}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},fw=(e,t,n,a,u,d,l,p,o)=>{let r=t.format==="NHWC",i=r?e[0].dims[3]:e[0].dims[1],s=n[0],c=r?n[2]:n[3],h=r?n[1]:n[2],m=r?n[3]:n[1],b=r&&(i%4===0||i%3===0)&&m%4===0,w=r?m:c*h,x=r?c*h:m,_=[8,8,1],S=a<=8?[4,1,1]:[4,4,1],I=[Math.ceil(w/_[0]/S[0]),Math.ceil(x/_[1]/S[1]),Math.ceil(s/_[2]/S[2])];be("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${I}`);let O=b?r&&i%4!==0?3:4:1,A=_[1]*S[1],k=_[0]*S[0],T=Math.max(_[0]*O,_[1]),R=a%A===0,j=u%k===0,ee=d%T===0,W=b?[O,4,4]:[1,1,1],Q=[{type:6,data:a},{type:6,data:u},{type:6,data:d},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Jt(t,Q),Q.push(...U(e[0].dims,e[1].dims));let C=["rank","rank"];l&&(Q.push(...U(e[2].dims)),C.push("rank")),Q.push(...U(n));let M=q=>{let Y=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Qt(t,Y);let J=b?4:1,re=Me(e[0].dataType),me=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${re}>`:re}) {
        result[flatIndex] = ${b?`vec4<${re}>`:re}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${re}>`:re}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,B=L("x",e[0].dataType,e[0].dims.length,O===3?1:O),G=L("w",e[1].dataType,e[1].dims.length,J),ne=[B,G],ce=F("result",e[0].dataType,n.length,J);if(l){let Ve=L("bias",e[2].dataType,e[2].dims.length,J);ne.push(Ve),me+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${re}>`:re} {
          return bias[coords.${r?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${cw("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${q.registerUniforms(Y).declareVariables(...ne,ce)}
        ${me}
        ${xE(r,R,j,ee,l,t,W[0],W[1],W[2],re)}
        ${b?Oc(S,_,re,void 0,!r,T):Pc(S,_,re,void 0,!r,T,!1,void 0,p)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${O};${b};${R};${j};${ee};${A};${k};${T}`,inputDependencies:C},getRunData:()=>({outputs:[{dims:o?o(n):n,dataType:e[0].dataType}],dispatchGroup:{x:I[0],y:I[1],z:I[2]},programUniforms:Q}),getShaderSource:M}}}),TE,mw,Xa,IE,gw,SE,bw,yw,_w=N(()=>{ue(),Gn(),fe(),ge(),wr(),Ha(),TE=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},mw=e=>typeof e=="number"?[e,e,e]:e,Xa=(e,t)=>t<=1?e:e+(e-1)*(t-1),IE=(e,t,n,a=1)=>{let u=Xa(t,a);return Math.floor((e[0]*(n-1)-n+u)/2)},gw=(e,t,n,a,u)=>{u==null&&(u=IE(e,t[0],a[0]));let d=[0,0,0,n];for(let l=0;l<3;l++)e[l]+2*u>=t[l]&&(d[l]=Math.trunc((e[l]-t[l]+2*u)/a[l]+1));return d},SE=(e,t,n,a,u,d,l,p,o,r)=>{let i,s,c,h;if(e==="VALID"&&(e=0),typeof e=="number"){i={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=gw([t,n,a,1],[p,o,r],1,[u,d,l],e);s=m[0],c=m[1],h=m[2]}else if(Array.isArray(e)){if(!e.every((b,w,x)=>b===x[0]))throw Error(`Unsupported padding parameter: ${e}`);i={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=gw([t,n,a,1],[p,o,r],1,[u,d,l],e[0]);s=m[0],c=m[1],h=m[2]}else if(e==="SAME_UPPER"){s=Math.ceil(t/u),c=Math.ceil(n/d),h=Math.ceil(a/l);let m=(s-1)*u+p-t,b=(c-1)*d+o-n,w=(h-1)*l+r-a,x=Math.floor(m/2),_=m-x,S=Math.floor(b/2),I=b-S,O=Math.floor(w/2),A=w-O;i={top:S,bottom:I,left:O,right:A,front:x,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:i,outDepth:s,outHeight:c,outWidth:h}},bw=(e,t,n,a,u,d=!1,l="channelsLast")=>{let p,o,r,i,s;if(l==="channelsLast")[p,o,r,i,s]=e;else if(l==="channelsFirst")[p,s,o,r,i]=e;else throw new Error(`Unknown dataFormat ${l}`);let[c,,h,m,b]=t,[w,x,_]=mw(n),[S,I,O]=mw(a),A=Xa(h,S),k=Xa(m,I),T=Xa(b,O),{padInfo:R,outDepth:j,outHeight:ee,outWidth:W}=SE(u,o,r,i,w,x,_,A,k,T),Q=d?c*s:c,C=[0,0,0,0,0];return l==="channelsFirst"?C=[p,Q,j,ee,W]:l==="channelsLast"&&(C=[p,j,ee,W,Q]),{batchSize:p,dataFormat:l,inDepth:o,inHeight:r,inWidth:i,inChannels:s,outDepth:j,outHeight:ee,outWidth:W,outChannels:Q,padInfo:R,strideDepth:w,strideHeight:x,strideWidth:_,filterDepth:h,filterHeight:m,filterWidth:b,effectiveFilterDepth:A,effectiveFilterHeight:k,effectiveFilterWidth:T,dilationDepth:S,dilationHeight:I,dilationWidth:O,inShape:e,outShape:C,filterShape:t}},yw=(e,t,n,a,u,d)=>{let l=d==="channelsLast";l?e[0].dims[3]:e[0].dims[1];let p=[64,1,1],o={x:n.map((w,x)=>x)},r=[Math.ceil(TE(o.x.map(w=>n[w]))/p[0]),1,1];be("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${r}`);let i=1,s=D.size(n),c=[{type:12,data:s},{type:12,data:a},{type:12,data:u},{type:12,data:t.strides},{type:12,data:t.dilations}];Jt(t,c),c.push(...U(e[0].dims,e[1].dims));let h=["rank","rank"],m=e.length===3;m&&(c.push(...U(e[2].dims)),h.push("rank")),c.push(...U(n));let b=w=>{let x=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:u.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Qt(t,x);let _=1,S=Me(e[0].dataType),I=L("x",e[0].dataType,e[0].dims.length,i),O=L("W",e[1].dataType,e[1].dims.length,_),A=[I,O],k=F("result",e[0].dataType,n.length,_),T="";if(m){let ee=L("bias",e[2].dataType,e[2].dims.length,_);A.push(ee),T+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${S} {
          return bias[${l?Z("coords",4,5):Z("coords",1,5)}];
        }`}let R=ot(i,S),j=Zt(t,R,S);return`
            ${T}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${O.getByIndices("aIndices")};
            }
          ${w.registerUniforms(x).declareVariables(...A,k)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${k.offsetToIndices("global_idx")};
              let batch = ${Z("coords",0,I.rank)};
              let d2 = ${l?Z("coords",I.rank-1,I.rank):Z("coords",1,I.rank)};
              let xFRCCorner = vec3<u32>(${l?Z("coords",1,I.rank):Z("coords",2,I.rank)},
              ${l?Z("coords",2,I.rank):Z("coords",3,I.rank)},
              ${l?Z("coords",3,I.rank):Z("coords",4,I.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${l?Z("uniforms.x_shape",1,I.rank):Z("uniforms.x_shape",2,I.rank)};
              let xShapeZ = ${l?Z("uniforms.x_shape",2,I.rank):Z("uniforms.x_shape",3,I.rank)};
              let xShapeW = ${l?Z("uniforms.x_shape",3,I.rank):Z("uniforms.x_shape",4,I.rank)};
              let xShapeU = ${l?Z("uniforms.x_shape",4,I.rank):Z("uniforms.x_shape",1,I.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${l?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${l?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${l?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${l?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${m?"value = value + getBiasByOutputCoords(coords)":""};
              ${j}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${l};${i};${m}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:r[0],y:r[1],z:r[2]},programUniforms:c}),getShaderSource:b}}}),ww,vw,xw=N(()=>{ue(),fe(),ge(),wr(),ww=(e,t,n,a)=>{let u=e.length>2,d=u?"value += b[output_channel];":"",l=e[0].dims,p=e[1].dims,o=t.format==="NHWC",r=o?n[3]:n[1],i=r/t.group,s=o&&i>=4?Pe(r):1,c=D.size(n)/s,h=[{type:12,data:c},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:i}];Jt(t,h),h.push(...U(l,[p[0],p[1],p[2],p[3]/s]));let m=u?["rank","rank","rank"]:["rank","rank"];h.push(...U([n[0],n[1],n[2],n[3]/s]));let b=w=>{let x=F("output",e[0].dataType,n.length,s),_=Me(x.type.tensor),S=Zt(t,x.type.value,_),I=L("x",e[0].dataType,l.length),O=L("w",e[1].dataType,p.length,s),A=[I,O];u&&A.push(L("b",e[2].dataType,e[2].dims,s));let k=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Qt(t,k);let T=o?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${I.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${O.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${I.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${O.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${w.registerUniforms(k).declareVariables(...A,x)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${x.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${o?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${o?1:2}], outputIndices[${o?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${s} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${o?2:1}];

    var value: ${x.type.value} = ${x.type.value}(0);
    ${T}
    ${d}
    ${S}
    ${x.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${s}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:h}),getShaderSource:b}},vw=(e,t,n,a)=>{let u=e.length>2,d=Pe(n[3]),l=Pe(n[2]),p=D.size(n)/d/l,o=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/d],r=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/d],i=[n[0],n[1],n[2],n[3]/d],s=[{type:12,data:p},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Jt(t,s),s.push(...U(o,r,i));let c=(l-1)*t.strides[1]+r[1],h=m=>{let b=F("output",e[0].dataType,i.length,d),w=Me(b.type.tensor),x=Zt(t,b.type.value,w),_=L("x",e[0].dataType,o.length,d),S=L("w",e[1].dataType,r.length,d),I=[_,S];u&&I.push(L("b",e[2].dataType,e[2].dims,d));let O=u?"value += b[output_channel];":"",A=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Qt(t,A),`
  ${m.registerUniforms(A).declareVariables(...I,b)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${l}u;
    let col = (index1 % width1) * ${l}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${_.type.value}, ${c}>;
    var values: array<${b.type.value}, ${l}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${r[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${c}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${_.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${_.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${r[1]}; w_width++) {
          let w_val = ${S.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${l}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${l}u; i++) {
      var value = values[i];
      ${O}
      ${x}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${d};${l};${c};${r[0]};${r[1]}`,inputDependencies:u?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:s}),getShaderSource:h}}}),$E,Ec,AE,Cc,Dc,Tw,OE,PE,kc,Iw=N(()=>{fe(),hw(),_w(),Ka(),xw(),wr(),ja(),Yn(),$E=(e,t,n,a,u,d)=>{let l=e[0],p=e.slice(d?1:2,d?3:4),o=p.length,r=t[0],i=t.slice(2).map((c,h)=>c+(c-1)*(n[h]-1)),s=p.map((c,h)=>c+a[h]+a[h+o]).map((c,h)=>Math.floor((c-i[h]+u[h])/u[h]));return s.splice(0,0,l),s.splice(d?3:1,0,r),s},Ec=[2,3,1,0],AE=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[1]*t.group;if(n!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let u=e[0].dims.length-2;if(t.dilations.length!==u)throw new Error(`dilations should be ${u}D`);if(t.strides.length!==u)throw new Error(`strides should be ${u}D`);if(t.pads.length!==u*2)throw new Error(`pads should be ${u*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Cc=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let d=2;d<t[1].dims.length;++d)n[d-2]===0&&(n[d-2]=t[1].dims[d]);let a=e.pads.slice();Gr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,a,e.format==="NHWC",e.autoPad);let u=Object.assign({},e);return Object.assign(u,{kernelShape:n,pads:a}),u},Dc=e=>{let t=Wa(e),n=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],u=e.dilations,d=e.group,l=e.kernel_shape,p=e.pads,o=e.strides,r=e.w_is_const();return{autoPad:a,format:n,dilations:u,group:d,kernelShape:l,pads:p,strides:o,wIsConst:r,...t,cacheKey:`${e.format};${t.activation};`}},Tw=(e,t,n,a)=>{let u=n.format==="NHWC",d=$E(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,u);if(n.group!==1){let A=[t[0]];if(u){let k=e.kernelCustomData.wT??e.compute(st(t[1],Ec),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=k),A.push(k)}else A.push(t[1]);t.length===3&&A.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&u&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(vw(A,n,d,a),{inputs:A}):e.compute(ww(A,n,d,a),{inputs:A});return}let l=t.length===3,p=t[0].dims[u?1:2],o=t[0].dims[u?2:3],r=t[0].dims[u?3:1],i=t[1].dims[2],s=t[1].dims[3],c=d[u?1:2],h=d[u?2:3],m=d[u?3:1],b=u&&i===p&&s===o&&n.pads[0]===0&&n.pads[1]===0;if(b||i===1&&s===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let A=d[0],k,T,R,j=[];if(u){let Q=e.kernelCustomData.wT??e.compute(st(t[1],Ec),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=Q),b){let C=p*o*r;k=t[0].reshape([1,A,C]),T=Q.reshape([1,C,m]),R=[1,A,m]}else k=t[0].reshape([A,p*o,r]),T=Q.reshape([1,r,m]),R=[A,c*h,m];j.push(k),j.push(T)}else k=t[0].reshape([A,r,p*o]),T=t[1].reshape([1,m,r]),R=[A,m,c*h],j.push(T),j.push(k);l&&j.push(t[2]);let ee=R[2],W=j[0].dims[j[0].dims.length-1];ee<8&&W<8?e.compute(qa(j,n,d,R,u,a),{inputs:j}):e.compute(Ho(j,n,d,R,u,a),{inputs:j});return}let w=!0,x=e.kernelCustomData.wT??e.compute(st(t[1],Ec),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x);let _=[t[0],x];l&&_.push(t[2]);let S=u?c*h:m,I=u?m:c*h,O=i*s*r;e.compute(fw(_,n,d,S,I,O,l,w,a),{inputs:_})},OE=(e,t)=>{let n=t.format==="NHWC",a=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let u=[0,t.pads[0],0,t.pads[1]],d=[1].concat(t.strides),l=[1].concat(t.dilations),p=[1].concat(t.kernelShape),o=Cc({...t,pads:u,strides:d,dilations:l,kernelShape:p},a);Tw(e,a,o,r=>n?[r[0],r[2],r[3]]:[r[0],r[1],r[3]])},PE=(e,t,n)=>{let a=n.format==="NHWC"?"channelsLast":"channelsFirst",u=Cc(n,t),d=n.autoPad==="NOTSET"?n.pads:n.autoPad,l=bw(t[0].dims,t[1].dims,n.strides,n.dilations,d,!1,a);e.compute(yw(t,u,l.outShape,[l.filterDepth,l.filterHeight,l.filterWidth],[l.padInfo.front,l.padInfo.top,l.padInfo.left],a))},kc=(e,t)=>{if(AE(e.inputs,t),e.inputs[0].dims.length===3)OE(e,t);else if(e.inputs[0].dims.length===5)PE(e,e.inputs,t);else{let n=Cc(t,e.inputs);Tw(e,e.inputs,n)}}}),Sw,$w=N(()=>{ue(),Gn(),fe(),ge(),Sw=(e,t,n)=>{let a=e.length>2,u=t.outputShape,d=t.format==="NHWC",l=t.group,p=e[1].dims,o=p[2]/l,r=p[3],i=d?Pe(o):1,s=d&&r===1&&o>=4,c=s?Math.floor(o/4)*4:Math.floor(o/i)*i,h=o-c,m=d?Pe(r):1,b=d?r===1?i:m:1,w=D.size(u)/m,x=[Math.ceil(w/64),1,1];be("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${x}`);let _=["rank","rank"],S=[t.strides[0],t.strides[1]],I=[t.kernelShape[d?1:2],t.kernelShape[d?2:3]],O=[t.dilations[0],t.dilations[1]],A=[I[0]+(t.dilations[0]<=1?0:(t.kernelShape[d?1:2]-1)*(t.dilations[0]-1)),I[1]+(t.dilations[1]<=1?0:(t.kernelShape[d?2:3]-1)*(t.dilations[1]-1))],k=[A[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),A[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],T=[{type:12,data:w},{type:12,data:S},{type:12,data:I},{type:12,data:O},{type:12,data:A},{type:6,data:k},{type:12,data:c},{type:12,data:o},{type:12,data:r},...U(e[0].dims,e[1].dims)];a&&(T.push(...U(e[2].dims)),_.push("rank")),T.push(...U(u));let R=j=>{let ee=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:S.length},{name:"filter_dims",type:"u32",length:I.length},{name:"dilations",type:"u32",length:I.length},{name:"effective_filter_dims",type:"u32",length:A.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],W=Me(e[0].dataType),Q=d?1:2,C=d?2:3,M=d?3:1,q=L("W",e[1].dataType,e[1].dims.length,b),Y=L("Dy",e[0].dataType,e[0].dims.length,i),J=[Y,q];a&&J.push(L("bias",e[2].dataType,[u[M]].length,m));let re=F("result",e[0].dataType,u.length,m),me=()=>{let ne="";if(s)i===4?ne+=`
        let xValue = ${Y.getByOffset("x_offset")};
        let wValue = ${q.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:i===2?ne+=`
          dotProd = dotProd + dot(vec4<${W}>(${Y.getByOffset("x_offset")}, ${Y.getByOffset("x_offset + 1u")}), vec4<${W}>(${q.getByOffset("w_offset")}, ${q.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:i===1&&(ne+=`
          dotProd = dotProd + dot(vec4<${W}>(${Y.getByOffset("x_offset")}, ${Y.getByOffset("x_offset + 1u")}, ${Y.getByOffset("x_offset + 2u")}, ${Y.getByOffset("x_offset + 3u")}), vec4<${W}>(${q.getByOffset("w_offset")}, ${q.getByOffset("w_offset + 1u")}, ${q.getByOffset("w_offset + 2u")}, ${q.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(ne+=`
                  let xValue = ${d?Y.getByOffset(`${Y.indicesToOffset(`${Y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${i}`):Y.get("batch","inputChannel","idyR","idyC")};
        `,i===1)ne+=`
          let w_offset = ${q.indicesToOffset(`${q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${q.getByOffset(`w_offset / ${b}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let ce=0;ce<i;ce++)ne+=`
            let wValue${ce} = ${q.getByOffset(`${q.indicesToOffset(`${q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ce}, wOutChannel)`)} / ${b}`)};
            dotProd = dotProd + xValue[${ce}] * wValue${ce};`;return ne},B=()=>{if(h===0)return"";if(!s)throw new Error(`packInputAs4 ${s} is not true.`);let ne="";if(i===1){ne+="dotProd = dotProd";for(let ce=0;ce<h;ce++)ne+=`
            + ${Y.getByOffset(`x_offset + ${ce}`)} * ${q.getByOffset(`w_offset + ${ce}`)}`;ne+=";"}else if(i===2){if(h!==2)throw new Error(`Invalid inputChannelsRemainder ${h}.`);ne+=`
          let xValue = ${Y.getByOffset("x_offset")};
          let wValue = ${q.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return ne},G=`
            let outputIndices = ${re.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${re.indicesGet("outputIndices",0)};
            let d1 = ${re.indicesGet("outputIndices",M)};
            let r = ${re.indicesGet("outputIndices",Q)};
            let c = ${re.indicesGet("outputIndices",C)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${re.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${W}(dyRCorner) + ${W}(wR)) / ${W}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${W}(uniforms.Dy_shape[${Q}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${W}(dyCCorner) + ${W}(wC)) / ${W}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${W}(uniforms.Dy_shape[${C}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${s?`
                var x_offset = ${Y.indicesToOffset(`${Y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${i};
                var w_offset = ${q.indicesToOffset(`${q.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${b};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${s?4:i}) {
                  ${me()}
                  inputChannel = inputChannel + ${s?4:i};
                }
                ${B()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${m}]`:""};
            ${re.setByOffset("global_idx","value")};
          `;return`
    ${j.registerUniforms(ee).declareVariables(...J,re)}
      ${j.mainStart()}
      ${j.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${G}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${i}${b}${m}${s}${h}`,inputDependencies:_},getRunData:()=>({dispatchGroup:{x:x[0],y:x[1],z:x[2]},outputs:[{dims:n?n(u):u,dataType:e[0].dataType}],programUniforms:T}),getShaderSource:R}}}),EE,CE,DE,Aw,Ow,kE,Pw,NE,Ew,Cw=N(()=>{$w(),wr(),Yn(),EE=(e,t,n,a,u,d)=>(e-1)*t+n+(a-1)*u+1-d,CE=(e,t,n,a,u)=>{let d=Math.floor(e/2);t==="SAME_UPPER"?(n[a]=d,n[u]=e-d):t==="SAME_LOWER"&&(n[a]=e-d,n[u]=d)},DE=(e,t,n,a,u,d,l,p,o,r)=>{let i=e.length-2,s=r.length===0;o.length<i&&o.push(...Array(i-o.length).fill(0));let c=e[0],h=t[p?3:1]*u;for(let m=0,b=e.length-i-(p?1:0);m<i;++m,++b){let w=e[b],x=s?w*l[m]:r[m],_=EE(w,l[m],d[m],t[b],n[m],x);CE(_,a,d,m,m+i),s&&r.push(l[m]*(w-1)+o[m]+(t[b]-1)*n[m]+1-d[m]-d[m+i])}r.splice(0,0,c),r.splice(p?3:1,0,h)},Aw=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((s,c)=>s*c,1)===0){n.length=0;for(let s=2;s<t[1].dims.length;++s)n.push(t[1].dims[s])}let a=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(a?3:1,0,t[1].dims[1]);let u=e.pads.slice(),d=e.outputShape.slice(),l=e.outputPadding.slice(),p=t[0].dims,o=e.dilations.slice();if(o.reduce((s,c)=>s+c,0)===0){let s=t[0].dims.length-2;o=new Array(s).fill(1)}let r=e.strides.slice();if(r.reduce((s,c)=>s+c,0)===0){let s=t[0].dims.length-2;r=new Array(s).fill(1)}DE(p,n,o,e.autoPad,e.group,u,r,a,l,d);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:u,outputPadding:l,outputShape:d,dilations:o,strides:r}),i},Ow=e=>{let t=Wa(e),n=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],u=e.dilations,d=e.group??1,l=e.kernelShape,p=e.pads,o=e.strides,r=e.wIsConst(),i=e.outputPadding,s=e.outputShape;return{autoPad:a,format:n,dilations:u,group:d,kernelShape:l,outputPadding:i,outputShape:s,pads:p,strides:o,wIsConst:r,...t,cacheKey:`${e.format};${t.activation};`}},kE=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[0];if(n!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let u=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==u))throw new Error("invalid bias");let d=e[0].dims.length-2;if(t.dilations.reduce((l,p)=>l+p,0)>0&&t.dilations.length!==d)throw new Error(`dilations should be ${d}D`);if(t.strides.reduce((l,p)=>l+p,0)>0&&t.strides.length!==d)throw new Error(`strides should be ${d}D`);if(t.pads.reduce((l,p)=>l+p,0)>0&&t.pads.length!==d*2)throw new Error(`pads should be ${d*2}D`);if(t.outputPadding.length!==d&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${d}D`);if(t.kernelShape.reduce((l,p)=>l+p,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Pw=(e,t,n,a)=>{let u=e.kernelCustomData.wT??e.compute(st(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=u);let d=[t[0],u];t.length===3&&d.push(t[2]),e.compute(Sw(d,n,a),{inputs:d})},NE=(e,t)=>{let n=t.format==="NHWC",a=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let u=t.kernelShape;(u.length===0||u[0]===0)&&(u=[e.inputs[1].dims[2]]);let d=t.dilations;(d.length===0||d[0]===0)&&(d=[1]);let l=t.strides;(l.length===0||l[0]===0)&&(l=[1]);let p=t.pads;p.length===0&&(p=[0,0]),p=[0,p[0],0,p[1]],l=[1].concat(l),d=[1].concat(d),u=[1].concat(u);let o=t.outputPadding;o=[0].concat(o);let r=Aw({...t,pads:p,strides:l,dilations:d,kernelShape:u,outputPadding:o},a);Pw(e,a,r,i=>n?[i[0],i[2],i[3]]:[i[0],i[1],i[3]])},Ew=(e,t)=>{if(kE(e.inputs,t),e.inputs[0].dims.length===3)NE(e,t);else{let n=Aw(t,e.inputs);Pw(e,e.inputs,n)}}}),LE,Dw,kw,Nw=N(()=>{ue(),fe(),Je(),ge(),LE=(e,t,n,a)=>{let u=D.size(t),d=t.length,l=L("input",e,d),p=F("output",e,d),o=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),r=D.normalizeAxis(o,d),i=s=>{let c=` i32(${l.indicesGet("inputIndices","uniforms.axis")}) `,h=Z("uniforms.input_shape","uniforms.axis",d),m=a.reverse?c+(a.exclusive?" + 1":""):"0",b=a.reverse?h:c+(a.exclusive?"":" + 1");return`
                ${s.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(l,p)}
                ${s.mainStart()}
                  ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${p.offsetToIndices("global_idx")};
                  var sum = ${p.type.value}(0);
                  let first : i32 = ${m};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${l.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${l.getByIndices("inputIndices")};
                  }
                  ${p.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:[{type:12,data:u},{type:12,data:r},...U(t,t)]}),getShaderSource:i}},Dw=(e,t)=>{let n=e.inputs[0].dims,a=e.inputs[0].dataType,u=e.inputs[1];e.compute(LE(a,n,u,t),{inputs:[0]})},kw=e=>{let t=e.exclusive===1,n=e.reverse===1;return le({exclusive:t,reverse:n})}}),RE,zE,ME,Lw,Rw,zw=N(()=>{ue(),fe(),Je(),ge(),RE=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},zE=(e,t,n,a)=>{let u=[];u.push(`fn perm(i: ${a.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let d=0;d<t;++d)u.push(n.indicesSet("a",e[d],`i[${d}]`));return u.push("return a;}"),u.join(`
`)},ME=(e,t)=>{let n,a,u,d,l,p,o=t.format==="NHWC",r=t.blocksize,i=t.mode==="DCR";o?([n,a,u,d]=e.dims,l=i?[n,a,u,r,r,d/r**2]:[n,a,u,d/r**2,r,r],p=i?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,a,u,d]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],l=i?[n,r,r,d/r**2,a,u]:[n,d/r**2,r,r,a,u],p=i?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let s=e.reshape(l),c=s.dims.length,h=e.dataType,m=L("a",h,c),b=F("output",h,c),w=x=>`
  ${x.registerUniform("output_size","u32").declareVariables(m,b)}

  ${zE(p,c,m,b)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:x=>{let _=o?[n,a*r,u*r,d/r**2]:[n,d/r**2,a*r,u*r],S=D.size(_),I=s.dims,O=D.sortBasedOnPerm(I,p);return{outputs:[{dims:_,dataType:x[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...U(I,O)]}},getShaderSource:w}},Lw=(e,t)=>{RE(e.inputs),e.compute(ME(e.inputs[0],t))},Rw=e=>le({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Nc,Za,Mw,BE,FE,Lc,Rc,Bw,VE,Fw,Vw,Gw=N(()=>{ue(),fe(),Je(),ge(),Nc="[a-zA-Z]|\\.\\.\\.",Za="("+Nc+")+",Mw="^"+Za+"$",BE="("+Za+",)*"+Za,FE="^"+BE+"$",Lc=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Rc=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,a]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(FE)))throw new Error("Invalid LHS term");if(n.split(",").forEach((u,d)=>{let l=e[d].dims.slice();if(!u.match(RegExp(Mw)))throw new Error("Invalid LHS term");let p=this.processTerm(u,!0,l,d);this.lhs.push(p)}),a==="")a+=[...this.symbolToInfo.entries()].filter(([u,d])=>d.count===1||u==="...").map(([u])=>u).join("");else if(!a.match(RegExp(Za)))throw new Error("Invalid RHS");a.match(RegExp(Nc,"g"))?.forEach(u=>{if(u==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let d=this.symbolToInfo.get(u);if(d===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(d.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(e,t,n){let a=this.symbolToInfo.get(e);if(a!==void 0){if(a.dimValue!==t&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(n)}else a={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,a)}processTerm(e,t,n,a=-1){let u=n.length,d=!1,l=[],p=0;if(!e.match(RegExp(Mw))&&!t&&e!=="")throw new Error("Invalid LHS term");let o=e.match(RegExp(Nc,"g")),r=new Lc(a);return o?.forEach((i,s)=>{if(i==="..."){if(d)throw new Error("Only one ellipsis is allowed per input term");d=!0;let c=u-o.length+1;if(c<0)throw new Error("Ellipsis out of bounds");if(l=n.slice(p,p+c),this.hasEllipsis){if(this.ellipsisDims.length!==l.length||this.ellipsisDims.toString()!==l.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=l;else throw new Error("Ellipsis must be specified in the LHS");for(let h=0;h<l.length;h++){let m=String.fromCharCode(48+h);r.addSymbol(m,s+h),this.addSymbol(m,n[p++],a)}}else r.addSymbol(i,s+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(i,n[p++],a)}),r}},Bw=e=>e+"_max",VE=(e,t,n,a)=>{let u=e.map(r=>r.length).map((r,i)=>L(`input${i}`,t,r)),d=D.size(a),l=F("output",t,a.length),p=[...n.symbolToInfo.keys()].filter(r=>!n.rhs.symbolToIndices.has(r)),o=r=>{let i=[],s="var prod = 1.0;",c="var sum = 0.0;",h="sum += prod;",m=[],b=[],w=[],x=[],_=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((I,O)=>{if(n.rhs.symbolToIndices.has(O)){let A=n.rhs.symbolToIndices.get(O)?.[0];A!==void 0&&n.lhs.forEach((k,T)=>{if(I.inputIndices.includes(T)){let R=k.symbolToIndices.get(O);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(j=>{i.push(`${u[T].indicesSet(`input${T}Indices`,j,l.indicesGet("outputIndices",A))}`)})}})}else n.lhs.forEach((A,k)=>{if(I.inputIndices.includes(k)){let T=A.symbolToIndices.get(O);if(T===void 0)throw new Error("Invalid symbol error");T.forEach(R=>{m.push(`${u[k].indicesSet(`input${k}Indices`,R,`${O}`)}`)}),x.push(`prod *= ${u[k].getByIndices(`input${k}Indices`)};`)}}),b.push(`for(var ${O}: u32 = 0; ${O} < uniforms.${Bw(O)}; ${O}++) {`),w.push("}")});let S=_?[...i,`let sum = ${u.map((I,O)=>I.getByIndices(`input${O}Indices`)).join(" * ")};`]:[...i,c,...b,...m,s,...x,h,...w];return`
            ${r.registerUniforms(p.map(I=>({name:`${Bw(I)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...u,l)}

            ${r.mainStart()}
            ${r.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${l.offsetToIndices("global_idx")};
            ${u.map((I,O)=>`var input${O}Indices: ${u[O].type.indices};`).join(`
`)}
            ${S.join(`
`)};
            ${l.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let r=p.filter(s=>n.symbolToInfo.has(s)).map(s=>({type:12,data:n.symbolToInfo.get(s)?.dimValue||0}));r.push({type:12,data:d});let i=e.map((s,c)=>[...U(s)]).reduce((s,c)=>s.concat(c),r);return i.push(...U(a)),{outputs:[{dims:a,dataType:t}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:i}},getShaderSource:o}},Fw=(e,t)=>{let n=new Rc(e.inputs,t.equation),a=n.outputDims,u=e.inputs.map((d,l)=>d.dims);e.compute(VE(u,e.inputs[0].dataType,n,a))},Vw=e=>{let t=e.equation.replace(/\s+/g,"");return le({equation:t})}}),GE,Uw,UE,WE,Ww,Hw=N(()=>{ue(),fe(),ge(),GE=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),a=n.length<t.length?0:n.length-t.length,u=t.length<n.length?0:t.length-n.length;for(;a<n.length&&u<t.length;++a,++u)if(n[a]!==t[u]&&n[a]!==1&&t[u]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Uw=(e,t)=>{let n=e.length-t.length,a=[];for(let u=0;u<n;++u)a.push(e[u]);for(let u=0;u<t.length;++u)a.push(t[u]===1?e[u+n]:t[u]);return a},UE=(e,t)=>e.length>t.length?Uw(e,t):Uw(t,e),WE=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),a=UE(t,n),u=e[0].dataType,d=u===9||D.size(t)===1,l=u===9||t.length>0&&t[t.length-1]%4===0?4:1,p=d||a.length>0&&a[a.length-1]%4===0?4:1,o=Math.ceil(D.size(a)/p),r=s=>{let c=L("input",u,t.length,l),h=F("output",u,a.length,p),m;if(u===9){let b=(w,x,_="")=>`
          let outputIndices${x} = ${h.offsetToIndices(`outputOffset + ${x}u`)};
          let offset${x} = ${c.broadcastedIndicesToOffset(`outputIndices${x}`,h)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${w}[${x}] = ${_}(${c.getByOffset(`index${x}`)}[component${x}]);
        `;m=`
        let outputOffset = global_idx * ${p};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${h.setByOffset("global_idx","data")}
      }`}else m=`
        let outputIndices = ${h.offsetToIndices(`global_idx * ${p}`)};
        let inputOffset = ${c.broadcastedIndicesToOffset("outputIndices",h)};
        let data = ${h.type.value}(${c.getByOffset(`inputOffset / ${l}`)});
        ${h.setByOffset("global_idx","data")}
      }`;return`
    ${s.registerUniform("vec_size","u32").declareVariables(c,h)}
    ${s.mainStart()}
    ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${m}`},i=[{type:12,data:o},...U(t,a)];return{name:"Expand",shaderCache:{hint:`${a.length};${l}${p}`,inputDependencies:["rank"]},getShaderSource:r,getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:i})}},Ww=e=>{GE(e.inputs),e.compute(WE(e.inputs),{inputs:[0]})}}),HE,qw,jw=N(()=>{ue(),fe(),ge(),Ua(),HE=e=>{let t=e[0].dataType,n=D.size(e[0].dims),a=D.size(e[1].dims),u=a%4===0,d=l=>{let p=L("x",t,[1],4),o=L("bias",t,[1],4),r=F("y",t,[1],4),i=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],s=h=>`
      let bias${h}_offset: u32 = (global_idx * 4 + ${h}) % uniforms.bias_size;
      let bias${h} = ${o.getByOffset(`bias${h}_offset / 4`)}[bias${h}_offset % 4];`,c=u?`
      let bias = ${o.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${s(0)}${s(1)}${s(2)}${s(3)}
      let bias = ${p.type.value}(bias0, bias1, bias2, bias3);`;return`${l.registerUniforms(i).declareVariables(p,o,r)}

    ${$c(at(t))}

    ${l.mainStart(Ur)}
      ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${p.getByOffset("global_idx")};
      ${c}
      let x_in = x + bias;
      ${r.setByOffset("global_idx",Ac("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${u}`,inputDependencies:["type","type"]},getShaderSource:d,getRunData:l=>({outputs:[{dims:l[0].dims,dataType:l[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(n/Ur/4)}})}},qw=e=>{e.inputs.length<2||D.size(e.inputs[1].dims)===0?G0(e):e.compute(HE(e.inputs))}}),qE,jE,Kw,Xw,Zw=N(()=>{ue(),fe(),Je(),ge(),qE=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},jE=(e,t)=>{let n=e[0].dims,a=e[1].dims,u=n.length,d=D.normalizeAxis(t.axis,u),l=n.slice(0);l.splice(d,1,...a);let p=n[d],o=e[0].dataType===9?4:1,r=Math.ceil(D.size(l)/o),i=[{type:12,data:r},{type:6,data:p},{type:12,data:d},...U(e[0].dims,e[1].dims,l)],s=c=>{let h=L("data",e[0].dataType,e[0].dims.length,o),m=L("inputIndices",e[1].dataType,e[1].dims.length),b=F("output",e[0].dataType,l.length,o),w=_=>{let S=a.length,I=`var indicesIndices${_}  = ${m.type.indices}(0);`;for(let O=0;O<S;O++)I+=`${S>1?`indicesIndices${_}[${O}]`:`indicesIndices${_}`} = ${l.length>1?`outputIndices${_}[uniforms.axis + ${O}]`:`outputIndices${_}`};`;I+=`
          var idx${_} = ${m.getByIndices(`indicesIndices${_}`)};
          if (idx${_} < 0) {
            idx${_} = idx${_} + uniforms.axisDimLimit;
          }
          var dataIndices${_} : ${h.type.indices};
        `;for(let O=0,A=0;O<u;O++)O===d?(I+=`${u>1?`dataIndices${_}[${O}]`:`dataIndices${_}`} = u32(idx${_});`,A+=S):(I+=`${u>1?`dataIndices${_}[${O}]`:`dataIndices${_}`} = ${l.length>1?`outputIndices${_}[${A}]`:`outputIndices${_}`};`,A++);return I},x;if(e[0].dataType===9){let _=(S,I,O="")=>`
          let outputIndices${I} = ${b.offsetToIndices(`outputOffset + ${I}u`)};
          ${w(I)};
          let offset${I} = ${h.indicesToOffset(`dataIndices${I}`)};
          let index${I} = offset${I} / 4u;
          let component${I} = offset${I} % 4u;
          ${S}[${I}] = ${O}(${h.getByOffset(`index${I}`)}[component${I}]);
        `;x=`
        let outputOffset = global_idx * ${o};
        var value = vec4<u32>(0);
        ${_("value",0,"u32")}
        ${_("value",1,"u32")}
        ${_("value",2,"u32")}
        ${_("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else x=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${w("")};
      let value = ${h.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${c.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,m,b)}
      ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${x}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:i}),getShaderSource:s}},Kw=e=>le({axis:e.axis}),Xw=(e,t)=>{let n=e.inputs;qE(n),e.compute(jE(e.inputs,t))}}),KE,Jw,Qw,Yw=N(()=>{ue(),fe(),ge(),KE=(e,t,n,a,u,d,l,p,o)=>{let r=[{type:12,data:d},{type:12,data:a},{type:12,data:u},{type:12,data:n},{type:12,data:l},{type:12,data:p},{type:12,data:o}],i=[d];r.push(...U(t.dims,i));let s=c=>{let h=L("indices_data",t.dataType,t.dims.length),m=F("input_slice_offsets_data",12,1,1),b=[h,m],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:u.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${c.registerUniforms(w).declareVariables(...b)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${u.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${n.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${u.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:r}),getShaderSource:s},{inputs:[t],outputs:[-1]})[0]},Jw=(e,t)=>{let n=e.inputs,a=n[0].dims,u=n[0].dataType,d=n[1].dims,l=d[d.length-1],p=D.sizeToDimension(d,d.length-1),o=D.sizeFromDimension(a,t.batchDims+l),r=D.sizeToDimension(a,t.batchDims),i=D.sizeFromDimension(a,t.batchDims),s=p/r,c=new Array(l),h=o;for(let I=0;I<l;++I)c[l-1-I]=h,h*=a[t.batchDims+l-1-I];let m=KE(e,n[1],c,t.batchDims,a,p,s,i,l),b=t.batchDims+l;if(b>a.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=d.slice(0,-1).concat(a.slice(b)),x=D.size(w),_=[{type:12,data:x},{type:12,data:o},...U(n[0].dims,m.dims,w)],S=I=>{let O=L("data",n[0].dataType,n[0].dims.length),A=L("slice_offsets",12,m.dims.length),k=F("output",n[0].dataType,w.length);return`
          ${I.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(O,A,k)}
            ${I.mainStart()}
            ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:u}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:_}),getShaderSource:S},{inputs:[n[0],m]})},Qw=e=>({batchDims:e.batch_dims,cacheKey:""})}),XE,ZE,ev,tv,nv=N(()=>{ue(),fe(),Je(),ge(),XE=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=D.normalizeAxis(t.quantizeAxis,e[0].dims.length),a=t.blockSize,u=e[0],d=e[2],l=e.length===4?e[3]:void 0;if(d.dims.length!==u.dims.length||!u.dims.map((p,o)=>o===n?Math.ceil(p/a)===d.dims[o]:p===d.dims[o]).reduce((p,o)=>p&&o,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(l){if(l.dataType!==u.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(l.dims.length!==d.dims.length||!l.dims.map((p,o)=>p===d.dims[o]).reduce((p,o)=>p&&o,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},ZE=(e,t)=>{let n=e[0].dims,a=e[1].dims,u=n.length,d=D.normalizeAxis(t.gatherAxis,u),l=D.normalizeAxis(t.quantizeAxis,u),p=n.slice(0);p.splice(d,1,...a);let o=D.size(p),r=e[2].dataType,i=e[0].dataType===22,s=[{type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:t.blockSize},...U(...e.map((h,m)=>h.dims),p)],c=h=>{let m=L("data",e[0].dataType,e[0].dims.length),b=L("inputIndices",e[1].dataType,e[1].dims.length),w=L("scales",e[2].dataType,e[2].dims.length),x=e.length>3?L("zeroPoint",e[3].dataType,e[3].dims.length):void 0,_=F("output",r,p.length),S=[m,b,w];x&&S.push(x);let I=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${h.registerUniforms(I).declareVariables(...S,_)}
        ${h.mainStart()}
        let output_indices = ${_.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${_.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${_.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${m.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${_.indicesGet("output_indices","i")};
          ${m.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${n[d]};
        }
        ${m.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${p.length}; i++) {
          let index = ${_.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${m.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${m.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${m.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${i?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${w.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${w.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${w.getByIndices("scale_indices")};
        ${x?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${x.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${x.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${i?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${at(r)}(quantized_data - zero_point) * scale;
        ${_.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((h,m)=>m!==1).map(h=>h.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(h,m)=>"rank")},getRunData:()=>({outputs:[{dims:p,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s}),getShaderSource:c}},ev=(e,t)=>{let n=e.inputs;XE(n,t),e.compute(ZE(e.inputs,t))},tv=e=>le({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),JE,QE,rv,ov,iv=N(()=>{ue(),fe(),Je(),ge(),JE=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},QE=(e,t)=>{let n=e[0].dims,a=e[0].dataType,u=n.length,d=e[1].dims,l=e[1].dataType,p=D.normalizeAxis(t.axis,u),o=n[p],r=d.slice(0),i=D.size(r),s=L("input",a,u),c=L("indicesInput",l,d.length),h=F("output",a,r.length),m=[{type:12,data:i},{type:6,data:o},{type:12,data:p}];return m.push(...U(n,d,r)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:m}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(s,c,h)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${h.offsetToIndices("global_idx")};

      var idx = ${c.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${s.type.indices}(outputIndices);
      ${s.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${s.getByIndices("inputIndices")};

      ${h.setByOffset("global_idx","value")};
  }`}},rv=e=>le({axis:e.axis}),ov=(e,t)=>{let n=e.inputs;JE(n),e.compute(QE(e.inputs,t))}}),YE,eC,av,sv,uv=N(()=>{ue(),fe(),ge(),YE=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},eC=(e,t)=>{let n=e[0].dims.slice(),a=e[1].dims.slice(),[u,d,l]=Ea.getShapeOfGemmResult(n,t.transA,a,t.transB,e.length===3?e[2].dims:void 0),p=[u,d];if(!p)throw new Error("Can't use gemm on the given tensors");let o=16,r=Math.ceil(d/o),i=Math.ceil(u/o),s=!0,c=D.size(p),h=[{type:12,data:s?r:c},{type:12,data:u},{type:12,data:d},{type:12,data:l},{type:1,data:t.alpha},{type:1,data:t.beta}],m=["type","type"];e.length===3&&(h.push(...U(e[2].dims)),m.push("rank")),h.push(...U(p));let b=x=>{let _="";t.transA&&t.transB?_="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?_="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?_="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(_="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let S=t.alpha===1?"":"value *= uniforms.alpha;",I=L("a",e[0].dataType,e[0].dims),O=L("b",e[1].dataType,e[1].dims),A=I.type.value,k=null,T=[I,O];e.length===3&&(k=L("c",e[2].dataType,e[2].dims.length),T.push(k));let R=F("output",e[0].dataType,p.length);T.push(R);let j=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${x.registerUniforms(j).declareVariables(...T)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${A}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${_}
    }

    ${S}
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${A}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=x=>{let _=L("a",e[0].dataType,e[0].dims),S=L("b",e[1].dataType,e[1].dims),I=null,O=[_,S];e.length===3&&(I=L("c",e[2].dataType,e[2].dims.length),O.push(I));let A=F("output",e[0].dataType,p.length);O.push(A);let k=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],T="",R="";t.transA&&t.transB?(R=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,T="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(R=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,T="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(R=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,T="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(R=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,T="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let j=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${x.registerUniforms(k).declareVariables(...O)}
  var<workgroup> tile_a: array<array<${_.type.storage}, ${o}>, ${o}>;
  var<workgroup> tile_b: array<array<${S.type.storage}, ${o}>, ${o}>;
  ${x.mainStart([o,o,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${o};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${o};
    let num_tiles = (uniforms.K - 1) / ${o} + 1;
    var k_start = 0u;
    var value = ${A.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${R}
      k_start = k_start + ${o};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${o}; k++) {
        ${T}
      }
      workgroupBarrier();
    }

    ${j}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${I!=null?`let cOffset = ${I.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${A.type.value}(uniforms.beta) * ${I.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return s?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:r*i},programUniforms:h}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:h}),getShaderSource:b}},av=e=>{let t=e.transA,n=e.transB,a=e.alpha,u=e.beta;return{transA:t,transB:n,alpha:a,beta:u,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},sv=(e,t)=>{YE(e.inputs),e.compute(eC(e.inputs,t))}}),er,vr,co,po,tC,nC,rC,oC,iC,aC,sC,uC,lv,cv,dv=N(()=>{ue(),fe(),Je(),ge(),[er,vr,co,po]=[0,1,2,3],tC=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},nC=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,rC=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,oC=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,iC=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,aC=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${er}] = batch;
     indices[${vr}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${co}] = u32(r);
            indices[${po}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${co}] = u32(clamp(r, 0, H - 1));
          indices[${po}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${co}] = gs_reflect(r, border[1], border[3]);
          indices[${po}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,sC=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${er}], indices[${vr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${er}], indices[${vr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${er}], indices[${vr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${er}], indices[${vr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${er}], indices[${vr}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${er}], indices[${vr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,uC=(e,t)=>{let n=L("x",e[0].dataType,e[0].dims.length),a=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],u=L("grid",e[1].dataType,a.length,2),d=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(d=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[er,vr,co,po]=[0,3,1,2]);let l=F("output",e[0].dataType,d.length),p=n.type.value,o=D.size(d),r=[{type:12,data:o},...U(e[0].dims,a,d)],i=s=>`
  ${s.registerUniform("output_size","u32").declareVariables(n,u,l)}
  ${nC}
  ${rC(p)}
  ${oC(t)}
  ${iC(t)}
  ${aC(n,p,t)}

  ${s.mainStart()}
    ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${co}]);
      let W_in = i32(uniforms.x_shape[${po}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${l.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${er}], indices[${co}], indices[${po}]);
      let nxy = ${u.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${sC(l,p,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:s=>{let c=D.size(d);return{outputs:[{dims:d,dataType:s[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:r}},getShaderSource:i}},lv=(e,t)=>{tC(e.inputs),e.compute(uC(e.inputs,t))},cv=e=>le({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Tt,dC,fv,pv,pC,qo,hv,zc=N(()=>{ue(),fe(),Je(),Ra(),Va(),ge(),Yn(),Tt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,dC=(e,t)=>{let n=e[0],a=Tt(e,1),u=Tt(e,2),d=Tt(e,3),l=Tt(e,4),p=Tt(e,5),o=Tt(e,6),r=Tt(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let i=n.dims[0],s=n.dims[1],c=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],h=s,m=0,b=0,w=Math.floor(c/t.numHeads);if(o&&r&&D.size(o.dims)&&D.size(r.dims)){if(o.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims[0]!==i||o.dims[1]!==t.numHeads||o.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(r.dims[0]!==i||r.dims[1]!==t.numHeads||r.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(o.dims[2]!==r.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(r.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=o.dims[2],b=o.dims[2]}else if(o&&D.size(o.dims)||r&&D.size(r.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x;if(a&&D.size(a.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(a.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');x=2,h=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(u)throw new Error('Expect "value" be none when "key" has packed kv format.');x=5,h=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');x=0,h=a.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}if(d&&D.size(d.dims)>0){if(d.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(a&&a.dims.length===5&&a.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let _=m+h,S=0;if(l&&D.size(l.dims)>0){S=8;let k=l.dims;throw k.length===1?k[0]===i?S=1:k[0]===3*i+2&&(S=3):k.length===2&&k[0]===i&&k[1]===_&&(S=5),S===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let I=!1,O=c;if(u&&D.size(u.dims)>0){if(u.dims.length!==3&&u.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==u.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(u.dims.length===3){if(h!==u.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');O=u.dims[2]}else{if(h!==u.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');O=u.dims[1]*u.dims[3],I=!0}}let A=!1;if(l&&D.size(l.dims)>0)throw new Error("Key padding mask is not supported");if(p&&D.size(p.dims)>0){if(p.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(p.dims[0]!==i||p.dims[1]!==t.numHeads||p.dims[2]!==s||p.dims[3]!==_)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:i,sequenceLength:s,pastSequenceLength:m,kvSequenceLength:h,totalSequenceLength:_,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:c,vHiddenSize:O,headSize:w,vHeadSize:Math.floor(O/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:A,passPastInKv:I,qkvFormat:x}},fv=e=>le({...e}),pv=le({perm:[0,2,1,3]}),pC=(e,t,n,a,u,d,l)=>{let p=[a,u,d],o=D.size(p),r=[{type:12,data:o},{type:12,data:l},{type:12,data:d}],i=s=>{let c=F("qkv_with_bias",t.dataType,p),h=L("qkv",t.dataType,p),m=L("bias",n.dataType,p),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${s.registerUniforms(b).declareVariables(h,m,c)}
  ${s.mainStart()}
    ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:p,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:r}),getShaderSource:i},{inputs:[t,n],outputs:[-1]})[0]},qo=(e,t,n,a,u,d,l,p)=>{let o=d;if(l&&D.size(l.dims)>0){if(a===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return o=pC(e,d,l,t,a,n*u,p),o=o.reshape([t,a,n,u]),n===1||a===1?o:e.compute(st(o,pv.perm),{inputs:[o],outputs:[-1]})[0]}else return d.dims.length===3&&(o=d.reshape([t,a,n,u])),n===1||a===1?o:e.compute(st(o,pv.perm),{inputs:[o],outputs:[-1]})[0]},hv=(e,t)=>{let n=dC(e.inputs,t),a=e.inputs[0],u=Tt(e.inputs,1),d=Tt(e.inputs,2),l=Tt(e.inputs,3),p=Tt(e.inputs,4),o=Tt(e.inputs,5),r=Tt(e.inputs,6),i=Tt(e.inputs,7);if(a.dims.length===5)throw new Error("Packed QKV is not implemented");if(u?.dims.length===5)throw new Error("Packed KV is not implemented");let s=u&&d&&u.dims.length===4&&d.dims.length===4,c=qo(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,a,l,0);if(s)return lo(e,c,u,d,p,void 0,r,i,o,n);if(!u||!d)throw new Error("key and value must be provided");let h=qo(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,u,l,n.hiddenSize),m=qo(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,d,l,2*n.hiddenSize);lo(e,c,h,m,p,void 0,r,i,o,n)}}),fC,hC,mC,gC,Mc,mv,gv,Bc=N(()=>{ue(),fe(),Je(),ge(),fC=e=>{if(!e||e.length<1)throw new Error("too few inputs")},hC=(e,t)=>{let n=[],a=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(u=>n.push(Number(u))),a=n.length),le({numOutputs:a,axis:t.axis,splitSizes:n})},mC=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Z("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,gC=e=>{let t=e.length,n=[];for(let a=0;a<t;++a){let u=e[a].setByIndices("indices","input[global_idx]");t===1?n.push(u):a===0?n.push(`if (output_number == ${a}u) { ${u} }`):a===t-1?n.push(`else { ${u} }`):n.push(`else if (output_number == ${a}) { ${u} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Mc=(e,t)=>{let n=e[0].dims,a=D.size(n),u=e[0].dataType,d=D.normalizeAxis(t.axis,n.length),l=new Array(t.numOutputs),p=L("input",u,n.length),o=new Array(t.numOutputs),r=[],i=[],s=0,c=[{type:12,data:a}];for(let m=0;m<t.numOutputs;m++){s+=t.splitSizes[m],o[m]=s;let b=n.slice();b[d]=t.splitSizes[m],i.push(b),l[m]=F(`output${m}`,u,b.length),r.push({dims:i[m],dataType:e[0].dataType})}c.push({type:12,data:o},...U(n,...i));let h=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",o.length).declareVariables(p,...l)}
  ${mC(o.length)}
  ${gC(l)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${p.offsetToIndices("global_idx")};
    var index = ${p.indicesGet("indices",d)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Z("uniforms.size_in_split_axis","output_number - 1u",o.length)};
      ${p.indicesSet("indices",d,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:h,getRunData:()=>({outputs:r,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c})}},mv=(e,t)=>{fC(e.inputs);let n=e.inputs.length===1?t:hC(e.inputs,t);e.compute(Mc(e.inputs,n),{inputs:[0]})},gv=e=>{let t=e.axis,n=e.splitSizes,a=e.numOutputs<0?n.length:e.numOutputs;if(a!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return le({axis:t,numOutputs:a,splitSizes:n})}}),bC,Ja,bv,Fc=N(()=>{ue(),fe(),Je(),ge(),bC=(e,t)=>{let[n,a,u,d]=e,{numHeads:l,rotaryEmbeddingDim:p}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!D.areEqual(a.dims,[])&&!D.areEqual(a.dims,[1])&&a.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(u.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${u.dims.length}`);if(d.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${d.dims.length}`);if(!D.areEqual(u.dims,d.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(p>0&&l===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let o=n.dims[0],r=n.dims[n.dims.length-2],i=u.dims[0],s=D.sizeFromDimension(n.dims,1)/r,c=p===0?u.dims[1]*2:s/l;if(p>c)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(a.dims.length===2){if(o!==a.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(r!==a.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(c/2!==u.dims[1]&&p/2!==u.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${u.dims[1]}`);if(r>i)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Ja=(e,t)=>{let{interleaved:n,numHeads:a,rotaryEmbeddingDim:u,scale:d}=t,l=e[0].dims[0],p=D.sizeFromDimension(e[0].dims,1),o=e[0].dims[e[0].dims.length-2],r=p/o,i=e[2].dims[1],s=u===0?i*2:r/a,c=new Array(l,o,r/s,s-i),h=D.computeStrides(c),m=[{type:1,data:d},{type:12,data:c},{type:12,data:h},...e[0].dims.length===3?new Array({type:12,data:[p,r,s,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[p,s,o*s,1]}):[],...U(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=w=>{let x=L("input",e[0].dataType,e[0].dims.length),_=L("position_ids",e[1].dataType,e[1].dims.length),S=L("cos_cache",e[2].dataType,e[2].dims.length),I=L("sin_cache",e[3].dataType,e[3].dims.length),O=F("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:c.length},{name:"global_strides",type:"u32",length:h.length},{name:"input_output_strides",type:"u32",length:h.length}]),`
        ${w.declareVariables(x,_,S,I,O)}

        ${w.mainStart(Ur)}
          let half_rotary_emb_dim = uniforms.${S.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${_.broadcastedIndicesToOffset("bsnh.xy",F("",_.type.tensor,2))};
            let position_id =
                u32(${_.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${x.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} -
                ${x.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${O.setByOffset("i","re")}
            let im = ${x.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} +
                ${x.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${O.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${O.setByOffset("k",x.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:le({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(c)/Ur)},programUniforms:m})}},bv=(e,t)=>{bC(e.inputs,t),e.compute(Ja(e.inputs,t))}}),yC,_C,yv,wC,_v,wv=N(()=>{Je(),ue(),Va(),zc(),Bc(),Yn(),Fc(),ge(),yC=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],a=e[1],u=e[2],d=e[3],l=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=!1,o=n.dims[0],r=n.dims[1],i=n.dims.length===3?p?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],s=r,c=0,h=!a||a.dims.length===0,m=Math.floor(h?i/(t.numHeads+2*t.kvNumHeads):i/t.numHeads);h&&(i=m*t.numHeads);let b=d&&d.dims.length!==0,w=l&&l.dims.length!==0;if(b&&d.dims.length===4&&d.dims[0]===o&&d.dims[1]!==t.kvNumHeads&&d.dims[2]===t.kvNumHeads&&d.dims[3]===m)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&w){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');c=d.dims[2]}else if(b||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x=1;if(a&&a.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(n.dims[2]%a.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');s=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==m)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(u)throw new Error('Expect "value" be none when "key" has packed kv format.');s=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==m)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');s=a.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}let _=0,S=!1,I=t.kvNumHeads?m*t.kvNumHeads:i;if(u&&u.dims.length>0){if(u.dims.length!==3&&u.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==u.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(u.dims.length===3){if(s!==u.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=u.dims[2]}else{if(s!==u.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');I=u.dims[1]*u.dims[3],S=!0}}let O=e.length>4?e[5]:void 0;if(O&&O.dims.length!==1&&O.dims[0]!==o)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:o,sequenceLength:r,pastSequenceLength:c,kvSequenceLength:s,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:i,vHiddenSize:I,headSize:m,vHeadSize:Math.floor(I/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:_,scale:t.scale,broadcastResPosBias:!1,passPastInKv:S,qkvFormat:x}},_C=le({perm:[0,2,1,3]}),yv=(e,t,n)=>{let a=t,u=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(a=t.reshape([n.batchSize,n.kvSequenceLength,u,n.headSize]),a=e.compute(st(a,_C.perm),{inputs:[a],outputs:[-1]})[0]),a},wC=(e,t,n,a)=>{let u=7,d=["type","type"],l=[e*t],p=e*t,o=[{type:12,data:p},{type:12,data:t},{type:12,data:e}],r=i=>{let s=L("seq_lens",n.dataType,n.dims),c=L("total_seq_lens",a.dataType,a.dims),h=F("pos_ids",u,l),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${i.registerUniforms(m).declareVariables(s,c,h)}
  ${i.mainStart()}
    ${i.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${c.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${s.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${h.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${h.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${h.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:l,dataType:u}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:o}),getShaderSource:r}},_v=(e,t)=>{let n=yC(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let a=e.inputs[0],u=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,d=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,l=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,p=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,o=e.inputs.length>4?e.inputs[5]:void 0,r=e.inputs.length>5?e.inputs[6]:void 0,i=n.kvNumHeads?n.kvNumHeads:n.numHeads,s=le({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,i*n.headSize,i*n.headSize]}),[c,h,m]=!u&&!d?e.compute(Mc([a],s),{inputs:[a],outputs:[-1,-1,-1]}):[a,u,d],b,w;if(t.doRotary){let I=e.compute(wC(n.batchSize,n.sequenceLength,o,r),{inputs:[o,r],outputs:[-1]})[0],O=e.inputs[7],A=e.inputs[8],k=le({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),T=[c,I,O,A],R=[-1];b=e.compute(Ja(T,k),{inputs:T,outputs:R})[0],T.splice(0,1,h);let j=le({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(Ja(T,j),{inputs:T,outputs:R})[0]}let x=qo(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?b:c,void 0,0),_=yv(e,t.doRotary?w:h,n),S=yv(e,m,n);lo(e,x,_,S,void 0,void 0,l,p,void 0,n,o,r)}}),vv,vC,xC,xv,Tv=N(()=>{ue(),fe(),Yn(),ge(),vv=(e,t,n,a,u,d,l,p)=>{let o=Pe(d),r=o===1?"f32":`vec${o}f`,i=o===1?"vec2f":`mat2x${o}f`,s=u*l,c=64;s===1&&(c=256);let h=[u,l,d/o],m=[u,l,2],b=["rank","type","type"],w=[];w.push(...U(h,m));let x=_=>{let S=L("x",t.dataType,3,o),I=L("scale",n.dataType,n.dims),O=L("bias",a.dataType,a.dims),A=F("output",1,3,2),k=[S,I,O,A];return`
  var<workgroup> workgroup_shared : array<${i}, ${c}>;
  const workgroup_size = ${c}u;
  ${_.declareVariables(...k)}
  ${_.mainStart(c)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${r}(0);
    var squared_sum = ${r}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${r}(${S.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${i}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Xt("workgroup_shared[0][0]",o)} / f32(hight * ${o});
      let squared_sum_final = ${Xt("workgroup_shared[0][1]",o)} / f32(hight * ${o});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${p}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${o};${p};${c}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:s},programUniforms:w}),getShaderSource:x},{inputs:[t,n,a],outputs:[-1]})[0]},vC=(e,t,n)=>{let a=t[0].dims,u=a,d=2,l=a[0],p=a[1],o=D.sizeFromDimension(a,d),r=Pe(o),i=D.size(u)/r,s=vv(e,t[0],t[1],t[2],l,o,p,n.epsilon),c=[l,p,o/r],h=[l,p],m=["type","none"],b=w=>{let x=L("x",t[0].dataType,c.length,r),_=L("scale_shift",1,h.length,2),S=F("output",t[0].dataType,c.length,r),I=[x,_,S];return`
  ${w.registerUniform("output_size","u32").declareVariables(...I)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${S.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${_.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${x.getByOffset("global_idx")} * ${S.type.value}(scale_shift.x) + ${S.type.value}(scale_shift.y);
      ${S.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${r}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:u,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...U(c,h,c)]}),getShaderSource:b},{inputs:[t[0],s]})},xC=(e,t,n)=>{let a=t[0].dims,u=a,d=a[0],l=a[a.length-1],p=D.sizeFromDimension(a,1)/l,o=Pe(l),r=D.size(u)/o,i=[{type:12,data:p},{type:12,data:Math.floor(l/o)}],s=["type","type"],c=!1,h=[0,a.length-1];for(let x=0;x<a.length-2;x++)c=c||a[x+1]!==1,h.push(x+1);c=c&&a[a.length-1]!==1;let m=c?e.compute(st(e.inputs[0],h),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:a.length},(x,_)=>a[h[_]])),b=vv(e,m,t[1],t[2],d,p,l,n.epsilon),w=x=>{let _=Me(t[0].dataType),S=o===1?"vec2f":`mat${o}x2f`,I=k=>{let T=k===0?"x":"y",R=o===1?"f32":`vec${o}f`;switch(o){case 1:return`${_}(${R}(scale.${T}))`;case 2:return`vec2<${_}>(${R}(scale[0].${T}, scale[1].${T}))`;case 4:return`vec4<${_}>(${R}(scale[0].${T}, scale[1].${T}, scale[2].${T}, scale[3].${T}))`;default:throw new Error(`Not supported compoents ${o}`)}},O=L("input",t[0].dataType,t[0].dims,o),A=F("output",t[0].dataType,u,o);return`
  @group(0) @binding(0) var<storage, read> input : array<${O.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${S}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${A.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${x.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${I(0)}, ${I(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${o}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:u,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:i}),getShaderSource:w},{inputs:[t[0],b]})},xv=(e,t)=>{t.format==="NHWC"?xC(e,e.inputs,t):vC(e,e.inputs,t)}}),TC,IC,Iv,Sv=N(()=>{ue(),fe(),ge(),TC=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},IC=(e,t,n)=>{let a=t.simplified,u=e[0].dims,d=e[1],l=!a&&e[2],p=u,o=D.normalizeAxis(t.axis,u.length),r=D.sizeToDimension(u,o),i=D.sizeFromDimension(u,o),s=D.size(d.dims),c=l?D.size(l.dims):0;if(s!==i||l&&c!==i)throw new Error(`Size of X.shape()[axis:] == ${i}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${s} and bias size of ${c}`);let h=[];for(let O=0;O<u.length;++O)O<o?h.push(u[O]):h.push(1);let m=Pe(i),b=["type","type"],w=[{type:12,data:r},{type:1,data:i},{type:12,data:Math.floor(i/m)},{type:1,data:t.epsilon}];l&&b.push("type");let x=n>1,_=n>2,S=O=>{let A=Me(e[0].dataType),k=[L("x",e[0].dataType,e[0].dims,m),L("scale",d.dataType,d.dims,m)];l&&k.push(L("bias",l.dataType,l.dims,m)),k.push(F("output",e[0].dataType,p,m)),x&&k.push(F("mean_data_output",1,h)),_&&k.push(F("inv_std_output",1,h));let T=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${O.registerUniforms(T).declareVariables(...k)}
  ${O.mainStart()}
    ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${xc("f32",m)};
    var mean_square_vector = ${xc("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Wr(A,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Xt("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Xt("mean_square_vector",m)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Wr(A,m,"x[j + offset]")};
      let f32scale = ${Wr(A,m,"scale[j]")};
      output[j + offset] = ${k[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${l?`+ ${Wr(A,m,"bias[j]")}`:""}
      );
    }

    ${x?"mean_data_output[global_idx] = mean":""};
    ${_?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},I=[{dims:p,dataType:e[0].dataType}];return x&&I.push({dims:h,dataType:1}),_&&I.push({dims:h,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${n};${a}`,inputDependencies:b},getRunData:()=>({outputs:I,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:w}),getShaderSource:S}},Iv=(e,t)=>{TC(e.inputs),e.compute(IC(e.inputs,t,e.outputCount))}}),SC,$v,Av=N(()=>{fe(),ja(),Ka(),SC=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},$v=e=>{SC(e.inputs);let t=Un.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],a=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&a<8)e.compute(qa(e.inputs,{activation:""},t));else{let u=t[t.length-2],d=D.size(e.inputs[0].dims.slice(0,-2)),l=D.size(e.inputs[1].dims.slice(0,-2));if(d!==1&&u===1&&l===1){let p=e.inputs[0].reshape([1,d,a]),o=e.inputs[1].reshape([1,a,n]),r=[1,d,n],i=[p,o];e.compute(Ho(i,{activation:""},t,r),{inputs:i})}else e.compute(Ho(e.inputs,{activation:""},t))}}}),$C,AC,OC,Ov,Pv,Ev=N(()=>{ue(),fe(),Je(),ge(),$C=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],a=n.dims.length;if(n.dims[a-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let u=Math.floor((t.k+t.blockSize-1)/t.blockSize),d=t.blockSize/8*t.bits,l=e[1];if(!D.areEqual(l.dims,[t.n,u,d]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let p=e[2].dims;if(D.size(p)!==t.n*u)throw new Error("scales input size error.");if(e.length===4){let o=e[3].dims,r=t.n*(t.bits===8?u:Math.floor((u*t.bits+7)/8));if(D.size(o)!==r)throw new Error("zeroPoints input size error.")}},AC=(e,t)=>{let n=e[0].dims,a=n.length,u=n[a-2],d=t.k,l=t.n,p=n.slice(0,a-2),o=D.size(p),r=e[1].dims[2]/4,i=e[0].dataType,s=Pe(t.k),c=Pe(r),h=Pe(l),m=p.concat([u,l]),b=u>1&&l/h%2===0?2:1,w=D.size(m)/h/b,x=64,_=[],S=[o,u,d/s],I=D.convertShape(e[1].dims).slice();I.splice(-1,1,r/c),_.push(...U(S)),_.push(...U(I)),_.push(...U(e[2].dims)),e.length===4&&_.push(...U(D.convertShape(e[3].dims)));let O=[o,u,l/h];_.push(...U(O));let A=k=>{let T=S.length,R=L("a",e[0].dataType,T,s),j=L("b",12,I.length,c),ee=L("scales",e[2].dataType,e[2].dims.length),W=[R,j,ee],Q=e.length===4?L("zero_points",12,e[3].dims.length):void 0;Q&&W.push(Q);let C=O.length,M=F("output",e[0].dataType,C,h),q=Me(e[0].dataType),Y=(()=>{switch(s){case 1:return`array<${q}, 8>`;case 2:return`mat4x2<${q}>`;case 4:return`mat2x4<${q}>`;default:throw new Error(`${s}-component is not supported.`)}})(),J=()=>{let B=`
          // reuse a data
            var input_offset = ${R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`)};
            var a_data: ${Y};
            for (var j: u32 = 0; j < ${8/s}; j++) {
              a_data[j] = ${R.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let G=0;G<h*b;G++)B+=`
            b_value = ${c===1?`b${G}_data`:`b${G}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${Y}(${Array.from({length:4},(ne,ce)=>`${q}(b_value_lower[${ce}]), ${q}(b_value_upper[${ce}])`).join(", ")});
            b_dequantized_values = ${s===1?`${Y}(${Array.from({length:8},(ne,ce)=>`(b_quantized_values[${ce}] - ${Q?`zero_point${G}`:"zero_point"}) * scale${G}`).join(", ")});`:`(b_quantized_values - ${Y}(${Array(8).fill(`${Q?`zero_point${G}`:"zero_point"}`).join(",")})) * scale${G};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(G/h)}]${h>1?`[${G%h}]`:""} += ${Array.from({length:8/s},(ne,ce)=>`${s===1?`a_data[${ce}] * b_dequantized_values[${ce}]`:`dot(a_data[${ce}], b_dequantized_values[${ce}])`}`).join(" + ")};
          `;return B},re=()=>{let B=`
            var col_index = col * ${h};
            ${Q?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${q}(8);`}
            `;for(let G=0;G<h*b;G++)B+=`
            let scale${G} = ${ee.getByOffset("col_index * nBlocksPerCol + block")};
            ${Q?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${Q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${G} = ${q}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return B},me=()=>{let B=`col_index = col * ${h};`;for(let G=0;G<h*b;G++)B+=`
            let b${G}_data = ${j.getByIndices(`${j.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return B+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Y};
            var b_dequantized_values: ${Y};`,B};return`
        var<workgroup> workgroup_shared: array<${M.type.value}, ${b*x}>;
        ${k.declareVariables(...W,M)}
        ${k.mainStart([x,1,1])}
          let output_indices = ${M.offsetToIndices(`(global_idx / ${x}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${x}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/s};
            ${re()}
            for (var word: u32 = 0; word < ${r}; word += ${c}) {
              ${me()}
              for (var i: u32 = 0; i < ${c}; i++) {
                ${J()}
                word_offset += ${8/s};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${M.type.value} = ${M.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${x}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${M.setByIndices(`${M.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${s};${c};${h};${b};${x}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:i}],dispatchGroup:{x:w},programUniforms:_}),getShaderSource:A}},OC=(e,t)=>{let n=e[0].dims,a=n.length,u=n[a-2],d=t.k,l=t.n,p=n.slice(0,a-2),o=D.size(p),r=e[1].dims[2]/4,i=e[0].dataType,s=Pe(t.k),c=Pe(r),h=p.concat([u,l]),m=128,b=l%8===0?8:l%4===0?4:1,w=m/b,x=w*c*8,_=x/s,S=x/t.blockSize,I=D.size(h)/b,O=[],A=[o,u,d/s],k=D.convertShape(e[1].dims).slice();k.splice(-1,1,r/c),O.push(...U(A)),O.push(...U(k)),O.push(...U(e[2].dims)),e.length===4&&O.push(...U(D.convertShape(e[3].dims)));let T=[o,u,l];O.push(...U(T));let R=j=>{let ee=A.length,W=L("a",e[0].dataType,ee,s),Q=L("b",12,k.length,c),C=L("scales",e[2].dataType,e[2].dims.length),M=[W,Q,C],q=e.length===4?L("zero_points",12,e[3].dims.length):void 0;q&&M.push(q);let Y=T.length,J=F("output",e[0].dataType,Y),re=Me(e[0].dataType),me=()=>{switch(s){case 1:return`
          let a_data0 = vec4<${re}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${re}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${re}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${re}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${s}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${W.type.value}, ${_}>;
        var<workgroup> inter_results: array<array<${J.type.value}, ${w}>, ${b}>;
        ${j.declareVariables(...M,J)}
        ${j.mainStart([w,b,1])}
          let output_indices = ${J.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${_};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${_}; a_offset += ${m})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${W.getByIndices(`${W.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${W.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${q?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${re}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${re}(8);`}
            let scale = ${C.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${Q.getByIndices(`${Q.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/s};
            for (var i: u32 = 0; i < ${c}; i++) {
              ${me()}
              let b_value = ${c===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${re}>(${Array.from({length:4},(B,G)=>`${re}(b_value_lower[${G}]), ${re}(b_value_upper[${G}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${re}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(B,G)=>`${`dot(a_data${G}, b_dequantized_values[${G}])`}`).join(" + ")};
              word_offset += ${8/s};
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${J.type.value} = ${J.type.value}(0);
            for (var b = 0u; b < ${w}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${J.setByIndices(`${J.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${s};${c};${w};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:h,dataType:i}],dispatchGroup:{x:I},programUniforms:O}),getShaderSource:R}},Ov=(e,t)=>{$C(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(OC(e.inputs,t)):e.compute(AC(e.inputs,t))},Pv=e=>le(e)}),PC,EC,CC,DC,kC,NC,LC,RC,Cv,Dv=N(()=>{ue(),fe(),ge(),PC=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},EC=(e,t,n)=>{let a="";for(let u=t-1;u>=0;--u)a+=`
            k = i32(${e.indicesGet("indices",u)}) - ${Z("uniforms.pads",u,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Z("uniforms.x_shape",u,t)})) {
              break;
            }
            offset += k * i32(${Z("uniforms.x_strides",u,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},CC=(e,t,n)=>{let a="";for(let u=t-1;u>=0;--u)a+=`
                k = i32(${e.indicesGet("indices",u)}) - ${Z("uniforms.pads",u,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Z("uniforms.x_shape",u,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Z("uniforms.x_shape",u,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Z("uniforms.x_strides",u,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},DC=(e,t,n)=>{let a="";for(let u=t-1;u>=0;--u)a+=`
                k = i32(${e.indicesGet("indices",u)}) - ${Z("uniforms.pads",u,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Z("uniforms.x_shape",u,t)})) {
                  k = i32(${Z("uniforms.x_shape",u,t)}) - 1;
                }
                offset += k * i32(${Z("uniforms.x_strides",u,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},kC=(e,t,n)=>{let a="";for(let u=t-1;u>=0;--u)a+=`
                k = i32(${e.indicesGet("indices",u)}) - ${Z("uniforms.pads",u,n)};
                if (k < 0)  {
                  k += i32(${Z("uniforms.x_shape",u,t)}]);
                }
                if (k >= i32(${Z("uniforms.x_shape",u,t)})) {
                  k -= i32(${Z("uniforms.x_shape",u,t)});
                }
                offset += k * i32(${Z("uniforms.x_strides",u,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},NC=(e,t,n)=>{switch(n.mode){case 0:return EC(e,t,n.pads.length);case 1:return CC(e,t,n.pads.length);case 2:return DC(e,t,n.pads.length);case 3:return kC(e,t,n.pads.length);default:throw new Error("Invalid mode")}},LC=(e,t)=>{let n=D.padShape(e[0].dims.slice(),t.pads),a=e[0].dims,u=D.size(n),d=[{type:12,data:u},{type:6,data:t.pads}],l=e.length>=3&&e[2].data;t.mode===0&&d.push({type:l?e[2].dataType:1,data:t.value}),d.push(...U(e[0].dims,n));let p=["rank"],o=r=>{let i=F("output",e[0].dataType,n.length),s=L("x",e[0].dataType,a.length),c=s.type.value,h=NC(i,a.length,t),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&m.push({name:"constant_value",type:l?c:"f32"}),`
            ${r.registerUniforms(m).declareVariables(s,i)}
            ${r.mainStart()}
            ${r.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${i.offsetToIndices("global_idx")};

            var value = ${c}(0);
            ${h}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${l}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(n)/64)},programUniforms:d}),getShaderSource:o}},RC=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),a=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,u=e[0].dims.length,d=new Int32Array(2*u).fill(0);if(e.length>=4){let p=e[3].getBigInt64Array();for(let o=0;o<p.length;o++)d[Number(p[o])]=Number(n[o]),d[Number(p[o])+u]=Number(n[o+p.length])}else n.forEach((p,o)=>d[Number(o)]=Number(p));let l=[];return d.forEach(p=>l.push(p)),{mode:t.mode,value:a,pads:l}}else return t},Cv=(e,t)=>{PC(e.inputs);let n=RC(e.inputs,t);e.compute(LC(e.inputs,n),{inputs:[0]})}}),Qa,kv,Nv,Lv,Rv,zC,MC,zv,Mv,Bv,Fv,Vv,Gv,Uv,Wv,Hv,qv,jv,Kv,Xv=N(()=>{pt(),ue(),fe(),ge(),Qa=e=>{if(pe.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},kv=(e,t,n)=>{let a=t.format==="NHWC",u=e.dims.slice();a&&u.splice(1,0,u.pop());let d=Object.hasOwnProperty.call(t,"dilations"),l=t.kernelShape.slice(),p=t.strides.slice(),o=d?t.dilations.slice():[],r=t.pads.slice();Gr.adjustPoolAttributes(n,u,l,p,o,r);let i=Gr.computePoolOutputShape(n,u,p,o,l,r,t.autoPad),s=Object.assign({},t);d?Object.assign(s,{kernelShape:l,strides:p,pads:r,dilations:o,cacheKey:t.cacheKey}):Object.assign(s,{kernelShape:l,strides:p,pads:r,cacheKey:t.cacheKey});let c=i.slice();return c.push(c.splice(1,1)[0]),[s,a?c:i]},Nv=(e,t)=>{let n=t.format==="NHWC",a=D.size(e),u=D.size(t.kernelShape),d=[{type:12,data:a},{type:12,data:u}],l=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let p=t.kernelShape[t.kernelShape.length-1],o=t.strides[t.strides.length-1],r=t.pads[t.pads.length/2-1],i=t.pads[t.pads.length-1],s=!!(r+i);d.push({type:12,data:p},{type:12,data:o},{type:12,data:r},{type:12,data:i}),l.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let c=!1;if(t.kernelShape.length===2){let h=t.kernelShape[t.kernelShape.length-2],m=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];c=!!(b+w),d.push({type:12,data:h},{type:12,data:m},{type:12,data:b},{type:12,data:w}),l.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[d,l,!0,s,c]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let p=D.computeStrides(t.kernelShape);d.push({type:12,data:p},{type:12,data:t.pads},{type:12,data:t.strides}),l.push({name:"kernelStrides",type:"u32",length:p.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let o=t.pads.reduce((r,i)=>r+i);return[d,l,!!o,!1,!1]}},Lv=(e,t,n,a,u,d,l,p,o,r,i,s)=>{let c=u.format==="NHWC",h=t.type.value,m=F("output",t.type.tensor,a);if(u.kernelShape.length<=2){let b="",w="",x="",_=n-(c?2:1);if(i?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${_}] < 0 || xIndices[${_}]
                      >= uniforms.x_shape[${_}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${d}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${d}
                }`,u.kernelShape.length===2){let S=n-(c?3:2);s?w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${S}] < 0 || xIndices[${S}] >= uniforms.x_shape[${S}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                `,x=`
              }
            `}return`
            ${e.registerUniforms(o).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var value = ${h}(${p});
              var pad = 0;
              ${w}
              ${b}
              ${x}
              ${l}

              output[global_idx] = value;
            }`}else{if(c)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=u.kernelShape.length,w=u.pads.length,x="";return r?x=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${d}
              }`:x=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${d}
            `,`
            ${e.registerUniforms(o).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${h}(${p});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${Z("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${Z("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${n-b}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${Z("uniforms.strides",`j - ${n-b}u`,b)}
                    + offsets[j - ${n-b}u] - ${Z("uniforms.pads","j - 2u",w)};
                  ${x}
              }
              ${l}

              output[global_idx] = value;
            }`}},Rv=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,zC=e=>`${Rv(e)};${e.countIncludePad}`,MC=e=>`${Rv(e)};${e.storageOrder};${e.dilations}`,zv=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Mv=(e,t,n,a)=>{let[u,d]=kv(t,a,n),l=L("x",t.dataType,t.dims.length),p=l.type.value,o="value += x_val;",r="";u.countIncludePad?r+=`value /= ${p}(uniforms.kernelSize);`:r+=`value /= ${p}(i32(uniforms.kernelSize) - pad);`;let[i,s,c,h,m]=Nv(d,u);i.push(...U(t.dims,d));let b=["rank"];return{name:e,shaderCache:{hint:`${a.cacheKey};${c};${h};${m}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:d,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(d)/64)},programUniforms:i}),getShaderSource:w=>Lv(w,l,t.dims.length,d.length,u,o,r,0,s,c,h,m)}},Bv=e=>{let t=e.count_include_pad!==0,n=zv(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:t,...n,cacheKey:""};return{...a,cacheKey:zC(a)}},Fv=(e,t)=>{Qa(e.inputs),e.compute(Mv("AveragePool",e.inputs[0],!1,t))},Vv={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Gv=e=>{let t=e.format;return{format:t,...Vv,cacheKey:t}},Uv=(e,t)=>{Qa(e.inputs),e.compute(Mv("GlobalAveragePool",e.inputs[0],!0,t))},Wv=(e,t,n,a)=>{let[u,d]=kv(t,a,n),l=`
      value = max(x_val, value);
    `,p="",o=L("x",t.dataType,t.dims.length),r=["rank"],[i,s,c,h,m]=Nv(d,u);return i.push(...U(t.dims,d)),{name:e,shaderCache:{hint:`${a.cacheKey};${c};${h};${m}`,inputDependencies:r},getRunData:()=>({outputs:[{dims:d,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(d)/64)},programUniforms:i}),getShaderSource:b=>Lv(b,o,t.dims.length,d.length,u,l,p,t.dataType===10?-65504:-1e5,s,c,h,m)}},Hv=(e,t)=>{Qa(e.inputs),e.compute(Wv("MaxPool",e.inputs[0],!1,t))},qv=e=>{let t=e.storage_order,n=e.dilations,a=zv(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let u={storageOrder:t,dilations:n,...a,cacheKey:""};return{...u,cacheKey:MC(u)}},jv=e=>{let t=e.format;return{format:t,...Vv,cacheKey:t}},Kv=(e,t)=>{Qa(e.inputs),e.compute(Wv("GlobalMaxPool",e.inputs[0],!0,t))}}),FC,VC,Zv,Jv,Qv=N(()=>{ue(),fe(),Je(),ge(),FC=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,a)=>n===e[2].dims[a]).reduce((n,a)=>n&&a,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((u,d)=>d===t.axis||u===e[0].dims[d]).reduce((u,d)=>u&&d,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],a=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/a)||t.blockSize>Math.ceil(n/(a-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},VC=(e,t)=>{let n=D.normalizeAxis(t.axis,e[0].dims.length),a=e[0].dataType,u=a===3,d=e[0].dims,l=e[1].dataType,p=D.size(d),o=a===3||a===2,r=o?[Math.ceil(D.size(e[0].dims)/4)]:e[0].dims,i=e[1].dims,s=e.length>2?e[2]:void 0,c=s?o?[Math.ceil(D.size(s.dims)/4)]:s.dims:void 0,h=i.length===0||i.length===1&&i[0]===1,m=h===!1&&i.length===1,b=Pe(p),w=h&&(!o||b===4),x=w?b:1,_=w&&!o?b:1,S=L("input",o?12:a,r.length,_),I=L("scale",l,i.length),O=s?L("zero_point",o?12:a,c.length):void 0,A=F("output",l,d.length,x),k=[S,I];O&&k.push(O);let T=[r,i];s&&T.push(c);let R=[{type:12,data:p/x},{type:12,data:n},{type:12,data:t.blockSize},...U(...T,d)],j=ee=>{let W=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ee.registerUniforms(W).declareVariables(...k,A)}
      ${ee.mainStart()}
          ${ee.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${A.offsetToIndices("global_idx")};

          // Set input x
          ${o?`
            let input = ${S.getByOffset("global_idx / 4")};
            let x_vec = ${u?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${x===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${S.getByOffset("global_idx")};`};

          // Set scale input
          ${h?`let scale_value= ${I.getByOffset("0")}`:m?`
            let scale_index = ${A.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${I.getByOffset("scale_index")};`:`
            var scale_indices: ${I.type.indices} = output_indices;
            let index = ${I.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${I.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${I.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${O?h?o?`
                let zero_point_input = ${O.getByOffset("0")};
                let zero_point_vec =  ${u?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${O.getByOffset("0")}`:m?o?`
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${O.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${u?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${O.getByOffset("zero_point_index")};`:o?`
                let zero_point_offset = ${I.indicesToOffset("scale_indices")};
                let zero_point_input = ${O.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${u?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${O.getByIndices("scale_indices")};`:`let zero_point_value = ${o?u?"i32":"u32":S.type.value}(0);`};
      // Compute and write output
      ${A.setByOffset("global_idx",`${A.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:O?["rank","rank","rank"]:["rank","rank"]},getShaderSource:j,getRunData:()=>({outputs:[{dims:d,dataType:l}],dispatchGroup:{x:Math.ceil(p/x/64),y:1,z:1},programUniforms:R})}},Zv=(e,t)=>{FC(e.inputs,t),e.compute(VC(e.inputs,t))},Jv=e=>le({axis:e.axis,blockSize:e.blockSize})}),GC,UC,Yv,ex=N(()=>{pt(),ue(),ge(),GC=(e,t,n)=>{let a=e===t,u=e<t&&n<0,d=e>t&&n>0;if(a||u||d)throw new Error("Range these inputs' contents are invalid.")},UC=(e,t,n,a)=>{let u=Math.abs(Math.ceil((t-e)/n)),d=[u],l=u,p=[{type:12,data:l},{type:a,data:e},{type:a,data:n},...U(d)],o=r=>{let i=F("output",a,d.length),s=i.type.value,c=[{name:"outputSize",type:"u32"},{name:"start",type:s},{name:"delta",type:s}];return`
        ${r.registerUniforms(c).declareVariables(i)}
        ${r.mainStart()}
        ${r.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${s}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:o,getRunData:()=>({outputs:[{dims:d,dataType:a}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p})}},Yv=e=>{let t=0,n=0,a=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],a=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],a=e.inputs[2].getFloat32Array()[0]),pe.webgpu.validateInputContent&&GC(t,n,a),e.compute(UC(t,n,a,e.inputs[0].dataType),{inputs:[]})}}),WC,HC,tx,nx,rx=N(()=>{ue(),fe(),Je(),ge(),WC=(e,t,n,a)=>{if(e!=="none"&&a!=="i32"&&a!=="u32"&&a!=="f32")throw new Error(`Input ${a} is not supported with reduction ${e}.`);let u=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,d=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${n};`;case"add":return a==="i32"||a==="u32"?`atomicAdd(&${t}, bitcast<${a}>(${n}));`:`
              ${u}bitcast<${a}>(oldValue) + (${n})${d}`;case"max":return a==="i32"||a==="u32"?`atomicMax(&${t}, bitcast<${a}>(${n}));`:`
                ${u}max(bitcast<f32>(oldValue), (${n}))${d}`;case"min":return a==="i32"||a==="u32"?`atomicMin(&${t}, bitcast<${a}>(${n}));`:`${u}min(bitcast<${a}>(oldValue), (${n}))${d}`;case"mul":return`${u}(bitcast<${a}>(oldValue) * (${n}))${d}`;default:throw new Error(`Reduction ${e} is not supported.`)}},HC=(e,t)=>{let n=e[0].dims,a=e[1].dims,u=n,d=1,l=Math.ceil(D.sizeToDimension(a,a.length-1)/d),p=a[a.length-1],o=D.sizeFromDimension(n,p),r=[{type:12,data:l},{type:12,data:p},{type:12,data:o},...U(e[1].dims,e[2].dims,u)],i=s=>{let c=L("indices",e[1].dataType,e[1].dims.length),h=L("updates",e[2].dataType,e[2].dims.length,d),m=t.reduction!=="none"&&t.reduction!==""?P_("output",e[0].dataType,u.length):F("output",e[0].dataType,u.length,d);return`
      ${s.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(c,h,m)}
      ${s.mainStart()}
        ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${WC(t.reduction,"output[data_offset + i]","value",m.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:r}),getShaderSource:i}},tx=e=>le({reduction:e.reduction}),nx=(e,t)=>{e.compute(HC(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),qC,jC,KC,ox,XC,ZC,JC,QC,YC,eD,tD,nD,ix,rD,oD,iD,aD,sD,ax,sx,ux=N(()=>{ue(),fe(),Je(),ge(),qC=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},jC=(e,t,n)=>{t.every(u=>u>=0&&u<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let a=new Array(n).fill(1);return t.forEach((u,d)=>a[u]=e[d]),a},KC=(e,t,n,a,u,d)=>{let[l,p,o]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],r=e[0].dims.length;if(l>0&&e.length>l&&e[l].dims.length>0)e[l].getFloat32Array().forEach(i=>d.push(i));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(p>0&&e.length>p&&e[p].dims.length===1&&e[p].dims[0]>0){if(e[p].getFloat32Array().forEach(i=>a.push(i)),a.length!==0&&a.length!==r&&n>=18&&a.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");qC(a,t),t.axes.length>0&&jC(a,t.axes,r).forEach((i,s)=>a[s]=i)}if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0&&(e[o].getBigInt64Array().forEach(i=>u.push(Number(i))),u.length!==0&&u.length!==r&&n>=18&&u.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(u.length!==0&&u.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof a<"u"&&typeof u<"u"&&a.length>0&&u.length>r)throw new Error("Resize requires only of scales or sizes to be specified")},ox=(e,t,n,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${a}(big / (${n}));
  let fract = ${a}(big % (${n})) / ${a}(${n});
  return whole + fract;
`,XC=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${ox("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ox("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",ZC=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",JC=(e,t,n)=>{let a=new Array(n).fill(0).concat(new Array(n).fill(1)),u=e.length===0?a:e.slice();return t.length>0?(t.forEach((d,l)=>{a[d]=u[l],a[l+n]=u[t.length+l]}),a):u},QC=(e,t,n,a)=>{let u=[];if(n.length>0)if(a.length>0){if(e.forEach(d=>u.push(d)),Math.max(...a)>e.length)throw new Error("axes is out of bound");a.forEach((d,l)=>u[d]=n[l])}else n.forEach(d=>u.push(d));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");u=e.map((d,l)=>Math.round(d*t[l]))}return u},YC=(e,t,n)=>{let a=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(d=>t[d]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(d=>t[d]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let u=e.slice();return n.axes.length>0?(n.axes.forEach(d=>t[d]=a),n.axes.forEach(d=>u[d]=Math.round(e[d]*t[d]))):(t.fill(a,0,t.length),u.forEach((d,l)=>u[l]=Math.round(d*t[l]))),u},eD=(e,t,n,a,u)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Z("uniforms.scales","i",a)};
        var roi_low = ${Z("uniforms.roi","i",u)};
        var roi_hi = ${Z("uniforms.roi",`i + ${t.length}`,u)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Z("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Z("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,tD=(e,t,n,a,u,d,l)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Z("uniforms.scales","i",u)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Z("uniforms.roi","i",d)};
          var roi_hi = ${Z("uniforms.roi",`i + ${n.length}`,d)};
          var input_shape_i = ${Z("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${Z("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${l} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,nD=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Z("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,ix=(e,t,n,a)=>e.rank>a?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",rD=(e,t,n,a,u)=>{let[d,l,p,o]=n.length===2?[-1,0,1,-1]:[0,2,3,1],r=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${r} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",l,`max(0, min(row, ${n[l]} - 1))`)};
      ${e.indicesSet("input_indices",p,`max(0, min(col, ${n[p]} - 1))`)};
      ${ix(e,o,d,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${r} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${r} = originalIndices[${l}];
      var col:${r} = originalIndices[${p}];
      ${a?`if (row < 0 || row > (${n[l]} - 1) || col < 0 || col > (${n[p]} - 1)) {
        return ${u};
      }`:""};
      row = max(0, min(row, ${n[l]} - 1));
      col = max(0, min(col, ${n[p]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${o}])`:"0"};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${d}])`:"0"};
      var x11: ${r} = getInputValue(batch, channel, row1, col1);
      var x12: ${r} = getInputValue(batch, channel, row1, col2);
      var x21: ${r} = getInputValue(batch, channel, row2, col1);
      var x22: ${r} = getInputValue(batch, channel, row2, col2);
      var dx1: ${r} = abs(row - ${r}(row1));
      var dx2: ${r} = abs(${r}(row2) - row);
      var dy1: ${r} = abs(col - ${r}(col1));
      var dy2: ${r} = abs(${r}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},oD=(e,t,n,a,u,d,l,p,o,r)=>{let i=n.length===2,[s,c]=i?[0,1]:[2,3],h=e.type.value,m=b=>{let w=b===s?"row":"col";return`
      fn ${w}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${h} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${h} = getOriginalCoordinateFromResizedCoordinate(output_index, ${u[b]},
        ${a[b]}, ${n[b]}, ${d[b]}, ${d[b]} + ${n.length});
        var fractOriginalIdx: ${h} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${p} && (originalIdx < 0 || originalIdx > (${n[b]} - 1))) {
          return ${o};
        }
        var data: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${w}: ${h} = originalIdx + ${h}(i);
          if (${w} < 0 || ${w} >= ${n[b]}) {
            ${r?`coefs[i + 1] = 0.0;
                        continue;`:p?`return ${o};`:`${w} = max(0, min(${w}, ${n[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${w})`)};
          data[i + 1] = ${b===s?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${m(s)};
    ${m(c)};
  fn getCubicInterpolationCoefs(s: ${h}) -> array<${h}, 4> {
    var absS = abs(s);
    var coeffs: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${h} = 1.0 - absS;
    var twoMinusAbsS: ${h} = 2.0 - absS;
    var onePlusAbsS: ${h} = 1.0 + absS;
    coeffs[0] = ((${l} * onePlusAbsS - 5 * ${l}) * onePlusAbsS + 8 * ${l}) * onePlusAbsS - 4 * ${l};
    coeffs[1] = ((${l} + 2) * absS - (${l} + 3)) * absS * absS + 1;
    coeffs[2] = ((${l} + 2) * oneMinusAbsS - (${l} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${l} * twoMinusAbsS - 5 * ${l}) * twoMinusAbsS + 8 * ${l}) * twoMinusAbsS - 4 * ${l};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${h}, 4>, coefs: array<${h}, 4>) -> ${h} {
    var coefsSum: ${h} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${h} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},iD=(e,t,n,a,u)=>{let[d,l,p,o,r]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],i=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${i} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",l,`max(0, min(depth, ${n[l]} - 1))`)};
      ${e.indicesSet("input_indices",p,`max(0, min(height, ${n[p]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(width, ${n[o]} - 1))`)};
      ${ix(e,r,d,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${i} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${i} = originalIndices[${l}];
      var height:${i} = originalIndices[${p}];
      var width:${i} = originalIndices[${o}];
      ${a?`if (depth < 0 || depth > (${n[l]} - 1) || height < 0 || height > (${n[p]} - 1) || width < 0 || (width > ${n[o]} - 1)) {
      return ${u};
        }`:""};

    depth = max(0, min(depth, ${n[l]} - 1));
      height = max(0, min(height, ${n[p]} - 1));
      width = max(0, min(width, ${n[o]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${r}])`:"0"};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${d}])`:"0"};

      var x111: ${i} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${i} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${i} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${i} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${i} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${i} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${i} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${i} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${i} = abs(depth - ${i}(depth1));
      var dx2: ${i} = abs(${i}(depth2) - depth);
      var dy1: ${i} = abs(height - ${i}(height1));
      var dy2: ${i} = abs(${i}(height2) - height);
      var dz1: ${i} = abs(width - ${i}(width1));
      var dz2: ${i} = abs(${i}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},aD=(e,t,n,a,u,d)=>{let l=e.dims,p=JC(d,t.axes,l.length),o=QC(l,a,u,t.axes),r=a.slice();a.length===0&&(r=l.map((_,S)=>_===0?1:o[S]/_),t.keepAspectRatioPolicy!=="stretch"&&(o=YC(l,r,t)));let i=F("output",e.dataType,o.length),s=L("input",e.dataType,l.length),c=D.size(o),h=l.length===o.length&&l.every((_,S)=>_===o[S]),m=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,w=s.type.value,x=_=>`
      ${h?"":`
      ${XC(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${nD(s,l)};
              ${ZC(t.nearestMode,n,w)};
              ${tD(s,i,l,o,r.length,p.length,m)};
              `;case"linear":return`
              ${eD(i,l,o,r.length,p.length)};
              ${(()=>{if(l.length===2||l.length===4)return`${rD(s,i,l,m,b)}`;if(l.length===3||l.length===5)return`${iD(s,i,l,m,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(l.length===2||l.length===4)return`${oD(s,i,l,o,r,p,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${_.registerUniform("output_size","u32").registerUniform("scales","f32",r.length).registerUniform("roi","f32",p.length).declareVariables(s,i)}
      ${_.mainStart()}
        ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${h?"output[global_idx] = input[global_idx];":`
        let output_indices = ${i.offsetToIndices("global_idx")};
        var input_indices: ${s.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${s.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${l.length===2||l.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${r.length>0?t.mode==="cubic"?r:r.length:""}|${u.length>0?u:""}|${p.length>0?p:""}|${h}|${t.mode==="nearest"?l.length:l}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},{type:1,data:r},{type:1,data:p},...U(l,o)]})}},sD=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},ax=(e,t)=>{let n=[],a=[],u=[],d=sD(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");KC(e.inputs,t,d,n,a,u),e.compute(aD(e.inputs[0],t,d,n,a,u),{inputs:[0]})},sx=e=>{let t=e.antialias,n=e.axes,a=e.coordinateTransformMode,u=e.cubicCoeffA,d=e.excludeOutside!==0,l=e.extrapolationValue,p=e.keepAspectRatioPolicy,o=e.mode,r=e.nearestMode===""?"simple":e.nearestMode;return le({antialias:t,axes:n,coordinateTransformMode:a,cubicCoeffA:u,excludeOutside:d,extrapolationValue:l,keepAspectRatioPolicy:p,mode:o,nearestMode:r})}}),uD,lD,lx,cx=N(()=>{ue(),fe(),ge(),uD=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],a=e[2];if(t.dataType!==n.dataType||t.dataType!==a.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let u=t.dims[t.dims.length-1],d=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==u)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==d)throw new Error("Skip must have the same sequence length as input");if(a.dims.length!==1)throw new Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==u)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let l=e[3];if(l.dims.length!==1)throw new Error("Beta must be 1D");if(l.dims[l.dims.length-1]!==u)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let l=e[4];if(l.dims.length!==1)throw new Error("Bias must be 1D");if(l.dims[l.dims.length-1]!==u)throw new Error("Bias must have the same hidden size as input")}},lD=(e,t,n,a)=>{let u=t.simplified,d=e[0].dims,l=D.size(d),p=d,o=l,r=d.slice(-1)[0],i=a?d.slice(0,-1).concat(1):[],s=!u&&e.length>3,c=e.length>4,h=a&&n>1,m=a&&n>2,b=n>3,w=64,x=Pe(r),_=[{type:12,data:o},{type:12,data:x},{type:12,data:r},{type:1,data:t.epsilon}],S=O=>{let A=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],k=[L("x",e[0].dataType,e[0].dims,x),L("skip",e[1].dataType,e[1].dims,x),L("gamma",e[2].dataType,e[2].dims,x)];s&&k.push(L("beta",e[3].dataType,e[3].dims,x)),c&&k.push(L("bias",e[4].dataType,e[4].dims,x)),k.push(F("output",e[0].dataType,p,x)),h&&k.push(F("mean_output",1,i)),m&&k.push(F("inv_std_output",1,i)),b&&k.push(F("input_skip_bias_sum",e[0].dataType,p,x));let T=Me(e[0].dataType),R=Me(1,x);return`

      ${O.registerUniforms(A).declareVariables(...k)}
      var<workgroup> sum_shared : array<${R}, ${w}>;
      var<workgroup> sum_squared_shared : array<${R}, ${w}>;

      ${O.mainStart([w,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${w};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${w};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${w-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${c?"bias[offset1d + i]":T+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Wr(T,x,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${w};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Xt("sum",x)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Xt("square_sum",x)} / f32(uniforms.hidden_size) ${u?"":"- mean * mean"} + uniforms.epsilon);
        ${h?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${u?"":`- ${T}(mean)`}) *
            ${T}(inv_std_dev) * gamma[offset1d + i]
            ${s?"+ beta[offset1d + i]":""};
        }
      }`},I=[{dims:p,dataType:e[0].dataType}];return n>1&&I.push({dims:i,dataType:1}),n>2&&I.push({dims:i,dataType:1}),n>3&&I.push({dims:d,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${x};${h};${m};${b}`,inputDependencies:e.map((O,A)=>"type")},getShaderSource:S,getRunData:()=>({outputs:I,dispatchGroup:{x:Math.ceil(o/r)},programUniforms:_})}},lx=(e,t)=>{uD(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(lD(e.inputs,t,e.outputCount,!1),{outputs:n})}}),cD,Ya,dD,dx,pD,fD,px,fx,hx=N(()=>{ue(),fe(),Je(),ge(),cD=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,a)=>{if(e[a+1].dataType!==6&&e[a+1].dataType!==7)throw new Error(`Input ${a} must be an array of int32 or int64`)})},Ya=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(a=>n.push(Number(a)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(a=>n.push(Number(a)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},dD=(e,t)=>{if(e.length>1){let n=Ya(e,1),a=Ya(e,2),u=Ya(e,3);return u.length===0&&(u=[...Array(e[0].dims.length).keys()]),le({starts:n,ends:a,axes:u})}else return t},dx=(e,t,n,a,u)=>{let d=e;return e<0&&(d+=n[a[t]]),u[t]<0?Math.max(0,Math.min(d,n[a[t]]-1)):Math.max(0,Math.min(d,n[a[t]]))},pD=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${Z("uniforms.input_shape","i",n.length)};
            let steps_i = ${Z("uniforms.steps","i",n.length)};
            let signs_i = ${Z("uniforms.signs","i",n.length)};
            let starts_i = ${Z("uniforms.starts","i",n.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,fD=(e,t)=>{let n=e[0].dims,a=D.size(n),u=t.axes.length>0?D.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],d=Ya(e,4);d.forEach(x=>x!==0||(()=>{throw new Error("step cannot be 0")})),d.length===0&&(d=Array(u.length).fill(1));let l=t.starts.map((x,_)=>dx(x,_,n,u,d)),p=t.ends.map((x,_)=>dx(x,_,n,u,d));if(u.length!==l.length||u.length!==p.length)throw new Error("start, ends and axes should have the same number of elements");if(u.length!==n.length)for(let x=0;x<n.length;++x)u.includes(x)||(l.splice(x,0,0),p.splice(x,0,n[x]),d.splice(x,0,1));let o=d.map(x=>Math.sign(x));d.forEach((x,_,S)=>{if(x<0){let I=(p[_]-l[_])/x,O=l[_],A=O+I*d[_];l[_]=A,p[_]=O,S[_]=-x}});let r=n.slice(0);u.forEach((x,_)=>{r[x]=Math.ceil((p[x]-l[x])/d[x])});let i={dims:r,dataType:e[0].dataType},s=F("output",e[0].dataType,r.length),c=L("input",e[0].dataType,e[0].dims.length),h=D.size(r),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:l.length},{name:"signs",type:"i32",length:o.length},{name:"steps",type:"u32",length:d.length}],b=[{type:12,data:h},{type:12,data:l},{type:6,data:o},{type:12,data:d},...U(e[0].dims,r)],w=x=>`
      ${x.registerUniforms(m).declareVariables(c,s)}
        ${pD(c,s,n)}
        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${s.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${s.setByOffset("global_idx",c.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${o.length}_${l.length}_${d.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[i],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:b})}},px=(e,t)=>{cD(e.inputs,t);let n=dD(e.inputs,t);e.compute(fD(e.inputs,n),{inputs:[0]})},fx=e=>{let t=e.starts,n=e.ends,a=e.axes;return le({starts:t,ends:n,axes:a})}}),hD,mD,mx,gx,bx=N(()=>{ue(),fe(),Je(),Yn(),ge(),hD=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},mD=(e,t)=>{let n=e.inputs[0],a=n.dims,u=D.size(a),d=a.length,l=D.normalizeAxis(t.axis,d),p=l<a.length-1,o,r=[];p?(r=Array.from({length:d},(k,T)=>T),r[l]=d-1,r[d-1]=l,o=e.compute(st(n,r),{inputs:[n],outputs:[-1]})[0]):o=n;let i=o.dims,s=i[d-1],c=u/s,h=Pe(s),m=s/h,b=64;c===1&&(b=256);let w=(k,T)=>T===4?`max(max(${k}.x, ${k}.y), max(${k}.z, ${k}.w))`:T===2?`max(${k}.x, ${k}.y)`:T===3?`max(max(${k}.x, ${k}.y), ${k}.z)`:k,x=L("x",o.dataType,o.dims,h),_=F("result",o.dataType,o.dims,h),S=x.type.value,I=Me(o.dataType)==="f32"?`var threadMax = ${S}(-3.4028234663852886e+38f);`:`var threadMax = ${S}(-65504.0h);`,O=k=>`
      var<workgroup> rowMaxShared : ${S};
      var<workgroup> rowSumShared : ${S};
      var<workgroup> threadShared : array<${S}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${S} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${S}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${k.registerUniform("packedCols","i32").declareVariables(x,_)}
      ${k.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${I}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${S}(${w("threadShared[0]",h)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${S}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${S}(${Xt("threadShared[0]",h)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${S}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,A=e.compute({name:"Softmax",shaderCache:{hint:`${h};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:i,dataType:o.dataType}],dispatchGroup:{x:c},programUniforms:[{type:6,data:m}]}),getShaderSource:O},{inputs:[o],outputs:[p?-1:0]})[0];p&&e.compute(st(A,r),{inputs:[A]})},mx=(e,t)=>{hD(e.inputs),mD(e,t)},gx=e=>le({axis:e.axis})}),yx,gD,bD,yD,_x,wx=N(()=>{ue(),fe(),ge(),yx=e=>Array.from(e.getBigInt64Array(),Number),gD=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(yx(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},bD=(e,t)=>{let n=[];for(let a=0;a<e.length;++a)n.push(e[a]*t[a]);return n},yD=(e,t)=>{let n=e[0].dims,a=t??yx(e[1]),u=bD(n,a),d=D.size(u),l=e[0].dataType,p=L("input",l,n.length),o=F("output",l,u.length),r=i=>`
      const inputShape = ${p.indices(...n)};
      ${i.registerUniform("output_size","u32").declareVariables(p,o)}
      ${i.mainStart()}
      ${i.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${o.offsetToIndices("global_idx")};
      var input_indices: ${p.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${p.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${o.indicesGet("output_indices","i")}  % input_dim_i;

        ${p.indicesSet("input_indices","i","input_dim_value")}
      }
      ${o.setByOffset("global_idx",p.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...U(e[0].dims,u)]}),getShaderSource:r}},_x=e=>{gD(e.inputs),e.compute(yD(e.inputs),{inputs:[0]})}}),_D,wD,vx,xx=N(()=>{ue(),fe(),ge(),_D=(e,t,n,a,u)=>{let d=F("output_data",u,n.length,4),l=L("a_data",t[1].dataType,t[1].dims.length,4),p=L("b_data",t[2].dataType,t[2].dims.length,4),o=L("c_data",t[0].dataType,t[0].dims.length,4),r,i=(s,c,h)=>`select(${c}, ${s}, ${h})`;if(!a)r=d.setByOffset("global_idx",i(l.getByOffset("global_idx"),p.getByOffset("global_idx"),o.getByOffset("global_idx")));else{let s=(c,h,m="")=>{let b=`a_data[index_a${h}][component_a${h}]`,w=`b_data[index_b${h}][component_b${h}]`,x=`bool(c_data[index_c${h}] & (0xffu << (component_c${h} * 8)))`;return`
            let output_indices${h} = ${d.offsetToIndices(`global_idx * 4u + ${h}u`)};
            let offset_a${h} = ${l.broadcastedIndicesToOffset(`output_indices${h}`,d)};
            let offset_b${h} = ${p.broadcastedIndicesToOffset(`output_indices${h}`,d)};
            let offset_c${h} = ${o.broadcastedIndicesToOffset(`output_indices${h}`,d)};
            let index_a${h} = offset_a${h} / 4u;
            let index_b${h} = offset_b${h} / 4u;
            let index_c${h} = offset_c${h} / 4u;
            let component_a${h} = offset_a${h} % 4u;
            let component_b${h} = offset_b${h} % 4u;
            let component_c${h} = offset_c${h} % 4u;
            ${c}[${h}] = ${m}(${i(b,w,x)});
          `};u===9?r=`
            var data = vec4<u32>(0);
            ${s("data",0,"u32")}
            ${s("data",1,"u32")}
            ${s("data",2,"u32")}
            ${s("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:r=`
            ${s("output_data[global_idx]",0)}
            ${s("output_data[global_idx]",1)}
            ${s("output_data[global_idx]",2)}
            ${s("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(o,l,p,d)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${r}
      }`},wD=e=>{let t=e[1].dims,n=e[2].dims,a=e[0].dims,u=e[1].dataType,d=!(D.areEqual(t,n)&&D.areEqual(n,a)),l=t,p=D.size(t);if(d){let r=Un.calcShape(Un.calcShape(t,n,!1),a,!1);if(!r)throw new Error("Can't perform where op on the given tensors");l=r,p=D.size(l)}let o=Math.ceil(p/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:r=>_D(r,e,l,d,u),getRunData:()=>({outputs:[{dims:l,dataType:u}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:o},...U(a,t,n,l)]})}},vx=e=>{e.compute(wD(e.inputs))}}),Tx,Ix=N(()=>{o0(),Va(),s0(),l0(),K0(),iw(),uw(),Iw(),Cw(),Nw(),zw(),Gw(),Hw(),jw(),Zw(),Yw(),nv(),iv(),uv(),dv(),wv(),Tv(),Sv(),Av(),Ev(),zc(),Dv(),Xv(),Qv(),ex(),rx(),Ba(),ux(),Fc(),cx(),hx(),bx(),Bc(),wx(),Yn(),Ua(),xx(),Tx=new Map([["Abs",[c0]],["Acos",[d0]],["Acosh",[p0]],["Add",[X0]],["ArgMax",[r0,Ic]],["ArgMin",[n0,Ic]],["Asin",[f0]],["Asinh",[h0]],["Atan",[m0]],["Atanh",[g0]],["Attention",[i0]],["AveragePool",[Fv,Bv]],["BatchNormalization",[a0]],["BiasAdd",[u0]],["BiasSplitGelu",[j0]],["Cast",[y0,b0]],["Ceil",[w0]],["Clip",[_0]],["Concat",[aw,sw]],["Conv",[kc,Dc]],["ConvTranspose",[Ew,Ow]],["Cos",[v0]],["Cosh",[x0]],["CumSum",[Dw,kw]],["DepthToSpace",[Lw,Rw]],["DequantizeLinear",[Zv,Jv]],["Div",[Z0]],["Einsum",[Fw,Vw]],["Elu",[T0,Uo]],["Equal",[J0]],["Erf",[I0]],["Exp",[S0]],["Expand",[Ww]],["FastGelu",[qw]],["Floor",[$0]],["FusedConv",[kc,Dc]],["Gather",[Xw,Kw]],["GatherElements",[ov,rv]],["GatherBlockQuantized",[ev,tv]],["GatherND",[Jw,Qw]],["Gelu",[A0]],["Gemm",[sv,av]],["GlobalAveragePool",[Uv,Gv]],["GlobalMaxPool",[Kv,jv]],["Greater",[tw]],["GreaterOrEqual",[rw]],["GridSample",[lv,cv]],["GroupQueryAttention",[_v]],["HardSigmoid",[L0,N0]],["InstanceNormalization",[xv]],["LayerNormalization",[Iv]],["LeakyRelu",[O0,Uo]],["Less",[nw]],["LessOrEqual",[ow]],["Log",[W0]],["MatMul",[$v]],["MatMulNBits",[Ov,Pv]],["MaxPool",[Hv,qv]],["Mul",[Q0]],["MultiHeadAttention",[hv,fv]],["Neg",[E0]],["Not",[P0]],["Pad",[Cv]],["Pow",[Y0]],["QuickGelu",[H0,Uo]],["Range",[Yv]],["Reciprocal",[C0]],["ReduceMin",[Z_]],["ReduceMean",[H_]],["ReduceMax",[X_]],["ReduceSum",[Q_]],["ReduceProd",[J_]],["ReduceL1",[q_]],["ReduceL2",[j_]],["ReduceLogSum",[e0]],["ReduceLogSumExp",[K_]],["ReduceSumSquare",[Y_]],["Relu",[D0]],["Resize",[ax,sx]],["RotaryEmbedding",[bv]],["ScatterND",[nx,tx]],["Sigmoid",[k0]],["Sin",[R0]],["Sinh",[z0]],["Slice",[px,fx]],["SkipLayerNormalization",[lx]],["Split",[mv,gv]],["Sqrt",[M0]],["Softmax",[mx,gx]],["Sub",[ew]],["Tan",[B0]],["Tanh",[V0]],["ThresholdedRelu",[U0,Uo]],["Tile",[_x]],["Transpose",[D_,k_]],["Where",[vx]]])}),es,Sx=N(()=>{pt(),Gn(),ge(),es=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,a,u){$t(e.programInfo.name);let d=this.backend.device,l=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let p=[];for(let r of t)p.push({binding:p.length,resource:{buffer:r.buffer}});for(let r of n)p.push({binding:p.length,resource:{buffer:r.buffer}});u&&p.push({binding:p.length,resource:u});let o=d.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:p,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let r={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:o,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(r)}l.setPipeline(e.computePipeline),l.setBindGroup(0,o),l.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),yt(e.programInfo.name)}dispose(){}build(e,t){$t(e.name);let n=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(r=>{n.features.has(r.feature)&&a.push(`enable ${r.extension};`)});let u=E_(t,this.backend.device.limits),d=e.getShaderSource(u),l=`${a.join(`
`)}
${u.additionalImplementations}
${d}`,p=n.createShaderModule({code:l,label:e.name});be("verbose",()=>`[WebGPU] ${e.name} shader code: ${l}`);let o=n.createComputePipeline({compute:{module:p,entryPoint:"main"},layout:"auto",label:e.name});return yt(e.name),{programInfo:e,computePipeline:o,uniformVariablesInfo:u.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,a=typeof e=="number"?1:e.z||1,u=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=u&&n<=u&&a<=u)return[t,n,a];let d=t*n*a,l=Math.ceil(Math.sqrt(d));if(l>u){if(l=Math.ceil(Math.cbrt(d)),l>u)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[l,l,l]}else return[l,l,1]}}}),$x={};Sr($x,{WebGpuBackend:()=>Gc});var vD,xD,Vc,Gc,Ax=N(()=>{pt(),ue(),Gn(),pc(),O_(),Ix(),Sx(),vD=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let a=0;a<e.length;++a){let u=e[a].dataType;switch(t[a]){case"none":{n.push("");break}case"type":{n.push(`${u}`);break}case"rank":{let d=e[a].dims.length;n.push(`${u};${d}`);break}case"dims":{let d=e[a].dims.join(",");n.push(`${u};${d}`);break}default:throw new Error(`unsupported input dependency: ${t[a]}`)}}return n.join("|")},xD=(e,t,n)=>{let a=e.name;return e.shaderCache?.hint&&(a+="["+e.shaderCache.hint+"]"),a+=":"+n+`:${vD(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,a},Vc=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Gc=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},u=d=>t.features.has(d)&&n.push(d)&&!0;u("chromium-experimental-timestamp-query-inside-passes")||u("timestamp-query"),u("shader-f16"),u("subgroups"),this.device=await t.requestDevice(a),this.adapterInfo=new Vc(t.info||await t.requestAdapterInfo()),this.gpuDataManager=A_(this),this.programManager=new es(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Pa(e.logLevel,!!e.debug),this.device.onuncapturederror=d=>{d.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${d.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;$t(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let u=n[a],d=u.kernelId,l=this.kernels.get(d),p=l.kernelType,o=l.kernelName,r=u.programName,i=u.inputTensorViews,s=u.outputTensorViews,c=t[a*2],h=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=c);let m=Number(c-this.queryTimeBase),b=Number(h-this.queryTimeBase);if(!Number.isSafeInteger(m)||!Number.isSafeInteger(b))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:i.map(w=>({dims:w.dims,dataType:Vn(w.dataType)})),outputsMetadata:s.map(w=>({dims:w.dims,dataType:Vn(w.dataType)})),kernelId:d,kernelType:p,kernelName:o,programName:r,startTime:m,endTime:b});else{let w="";i.forEach((_,S)=>{w+=`input[${S}]: [${_.dims}] | ${Vn(_.dataType)}, `});let x="";s.forEach((_,S)=>{x+=`output[${S}]: [${_.dims}] | ${Vn(_.dataType)}, `}),console.log(`[profiling] kernel "${d}|${p}|${o}|${r}" ${w}${x}start time: ${m} ns, execution time: ${b-m} ns`)}di("GPU",`${r}::${c}::${h}`)}e.unmap(),this.pendingQueries.delete(e)}),yt()}run(e,t,n,a,u,d){$t(e.name);let l=[];for(let _=0;_<t.length;++_){let S=t[_].data;if(S===0)continue;let I=this.gpuDataManager.get(S);if(!I)throw new Error(`no GPU data for input: ${S}`);l.push(I)}let{outputs:p,dispatchGroup:o,programUniforms:r}=e.getRunData(t),i=n.length===0?p.map((_,S)=>S):n;if(i.length!==p.length)throw new Error(`Output size ${i.length} must be equal to ${p.length}.`);let s=[],c=[];for(let _=0;_<p.length;++_){if(!Number.isInteger(i[_])||i[_]<-3||i[_]>=d)throw new Error(`Invalid output index: ${i[_]}`);if(i[_]===-3)continue;let S=i[_]===-1,I=i[_]===-2,O=S||I?u(p[_].dataType,p[_].dims):a(i[_],p[_].dataType,p[_].dims);if(s.push(O),O.data===0)continue;let A=this.gpuDataManager.get(O.data);if(!A)throw new Error(`no GPU data for output: ${O.data}`);if(S&&this.temporaryData.push(A),I){let k=this.kernelPersistentData.get(this.currentKernelId);k||(k=[],this.kernelPersistentData.set(this.currentKernelId,k)),k.push(A)}c.push(A)}if(l.length!==t.length||c.length!==s.length){if(c.length===0)return yt(e.name),s;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let h;if(r){let _=0,S=[];r.forEach(k=>{let T=typeof k.data=="number"?[k.data]:k.data;if(T.length===0)return;let R=k.type===10?2:4,j,ee;k.type===10?(ee=T.length>4?16:T.length>2?8:T.length*R,j=T.length>4?16:R*T.length):(ee=T.length<=2?T.length*R:16,j=16),_=Math.ceil(_/ee)*ee,S.push(_);let W=k.type===10?8:4;_+=T.length>4?Math.ceil(T.length/W)*j:T.length*R});let I=16;_=Math.ceil(_/I)*I;let O=new ArrayBuffer(_);r.forEach((k,T)=>{let R=S[T],j=typeof k.data=="number"?[k.data]:k.data;if(k.type===6)new Int32Array(O,R,j.length).set(j);else if(k.type===12)new Uint32Array(O,R,j.length).set(j);else if(k.type===10)new Uint16Array(O,R,j.length).set(j);else if(k.type===1)new Float32Array(O,R,j.length).set(j);else throw new Error(`Unsupported uniform type: ${Vn(k.type)}`)});let A=this.gpuDataManager.create(_,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(A.buffer,0,O,0,_),this.gpuDataManager.release(A.id),h={offset:0,size:_,buffer:A.buffer}}let m=this.programManager.normalizeDispatchGroupSize(o),b=m[1]===1&&m[2]===1,w=xD(e,t,b),x=this.programManager.getArtifact(w);if(x||(x=this.programManager.build(e,m),this.programManager.setArtifact(w,x),be("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),r&&x.uniformVariablesInfo){if(r.length!==x.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${x.uniformVariablesInfo.length}, got ${r.length} in program "${x.programInfo.name}".`);for(let _=0;_<r.length;_++){let S=r[_],I=S.type,O=typeof S.data=="number"?1:S.data.length,[A,k]=x.uniformVariablesInfo[_];if(I!==A||O!==k)throw new Error(`Uniform variable ${_} mismatch: expect type ${A} with size ${k}, got type ${I} with size ${O} in program "${x.programInfo.name}".`)}}if(be("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let _={kernelId:this.currentKernelId,programName:x.programInfo.name,inputTensorViews:t,outputTensorViews:s};this.pendingKernels.push(_),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(_)}return this.programManager.run(x,l,c,m,h),yt(e.name),s}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,a){let u=Tx.get(e);if(!u)throw new Error(`kernel not implemented: ${e}`);let d={kernelType:e,kernelName:a,kernelEntry:u[0],attributes:[u[1],n]};this.kernels.set(t,d)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let a=this.kernels.get(e);if(!a)throw new Error(`kernel not created: ${e}`);let u=a.kernelType,d=a.kernelName,l=a.kernelEntry,p=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${u}] ${d}" is not allowed to be called recursively`);this.currentKernelId=e,p[0]&&(p[1]=p[0](p[1]),p[0]=void 0),be("info",()=>`[WebGPU] Start to run kernel "[${u}] ${d}"...`);let o=this.env.debug;this.temporaryData=[];try{return o&&this.device.pushErrorScope("validation"),l(t,p[1]),0}catch(r){return n.push(Promise.resolve(`[WebGPU] Kernel "[${u}] ${d}" failed. ${r}`)),1}finally{o&&n.push(this.device.popErrorScope().then(r=>r?`GPU validation error for kernel "[${u}] ${d}": ${r.message}`:null));for(let r of this.temporaryData)this.gpuDataManager.release(r.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,a){let u=this.sessionExternalDataMapping.get(e);u||(u=new Map,this.sessionExternalDataMapping.set(e,u));let d=u.get(t),l=this.gpuDataManager.registerExternalBuffer(n,a,d);return u.set(t,[l,n]),l}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let a=await yc(this,e,t);return Ca(a.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){be("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){be("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){be("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let a=0;a<n;a++){let u=this.getComputePassEncoder(),d=e[a];this.writeTimestamp(this.pendingDispatchNumber*2),u.setPipeline(d.computePipeline),u.setBindGroup(0,d.bindGroup),u.dispatchWorkgroups(...d.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Ox={};Sr(Ox,{init:()=>TD});var jo,Uc,TD,Px=N(()=>{ue(),Gn(),fe(),T_(),jo=class wd{constructor(t,n,a,u){this.module=t,this.dataType=n,this.data=a,this.dims=u}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(D.size(t)!==D.size(this.dims))throw new Error("Invalid new shape");return new wd(this.module,this.dataType,this.data,t)}},Uc=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let a=e.PTR_SIZE,u=n/e.PTR_SIZE,d=a===4?"i32":"i64";this.opKernelContext=Number(e.getValue(a*u++,d));let l=Number(e.getValue(a*u++,d));this.outputCount=Number(e.getValue(a*u++,d)),this.customDataOffset=Number(e.getValue(a*u++,"*")),this.customDataSize=Number(e.getValue(a*u++,d));let p=[];for(let o=0;o<l;o++){let r=Number(e.getValue(a*u++,d)),i=Number(e.getValue(a*u++,"*")),s=Number(e.getValue(a*u++,d)),c=[];for(let h=0;h<s;h++)c.push(Number(e.getValue(a*u++,d)));p.push(new jo(e,r,i,c))}this.inputs=p}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let n=t?.inputs?.map(l=>typeof l=="number"?this.inputs[l]:l)??this.inputs,a=t?.outputs??[],u=(l,p,o)=>new jo(this.module,p,this.output(l,o),o),d=(l,p)=>{let o=_r(l,p);if(!o)throw new Error(`Unsupported data type: ${l}`);let r=o>0?this.backend.gpuDataManager.create(o).id:0;return new jo(this.module,l,r,p)};return this.backend.run(e,n,a,u,d,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let a=this.module.PTR_SIZE,u=a===4?"i32":"i64",d=this.module.stackAlloc((1+t.length)*a);this.module.setValue(d,t.length,u);for(let l=0;l<t.length;l++)this.module.setValue(d+a*(l+1),t[l],u);return this.module._JsepOutput(this.opKernelContext,e,d)}catch(a){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(n)}}},TD=async(e,t,n,a)=>{let u=t.jsepInit;if(!u)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let d=(Ax(),Xr($x)).WebGpuBackend,l=new d;await l.initialize(n,a),u("webgpu",[l,p=>l.alloc(Number(p)),p=>l.free(p),(p,o,r,i=!1)=>{if(i)be("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(p)}, dst=${Number(o)}, size=${Number(r)}`),l.memcpy(Number(p),Number(o));else{be("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(p)}, gpuDataId=${Number(o)}, size=${Number(r)}`);let s=t.HEAPU8.subarray(Number(p>>>0),Number(p>>>0)+Number(r));l.upload(Number(o),s)}},async(p,o,r)=>{be("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${p}, dataOffset=${o}, size=${r}`),await l.download(Number(p),()=>t.HEAPU8.subarray(Number(o)>>>0,Number(o+r)>>>0))},(p,o,r)=>l.createKernel(p,Number(o),r,t.UTF8ToString(t._JsepGetNodeName(Number(o)))),p=>l.releaseKernel(p),(p,o,r,i)=>{be("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${r}, kernel=${p}, contextDataOffset=${o}`);let s=new Uc(t,l,Number(o));return l.computeKernel(Number(p),s,i)},()=>l.captureBegin(),()=>l.captureEnd(),()=>l.replay()])}else{let d=new La(n);u("webnn",[d,()=>d.reserveTensorId(),l=>d.releaseTensorId(l),async(l,p,o,r,i)=>d.ensureTensor(l,p,o,r,i),(l,p)=>{d.uploadTensor(l,p)},async(l,p)=>d.downloadTensor(l,p),(l,p)=>d.registerMLContext(l,p),!!n.trace])}}}),ID,ba,ya,Hr,SD,Ex,Bo,_a,wa,Cx,va,xa,Ta,oc=N(()=>{pt(),c_(),p_(),ue(),br(),Sa(),cc(),ID=(e,t)=>{Re()._OrtInit(e,t)!==0&&Oe("Can't initialize onnxruntime.")},ba=async e=>{ID(e.wasm.numThreads,Vo(e.logLevel))},ya=async(e,t)=>{Re().asyncInit?.();let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let u=e.webgpu.forceFallbackAdapter;if(u!==void 0&&typeof u!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${u}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:u}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(Px(),Xr(Ox)).init;t==="webgpu"&&await a("webgpu",Re(),e,n),t==="webnn"&&await a("webnn",Re(),e)}},Hr=new Map,SD=e=>{let t=Re(),n=t.stackSave();try{let a=t.PTR_SIZE,u=t.stackAlloc(2*a);t._OrtGetInputOutputCount(e,u,u+a)!==0&&Oe("Can't get session input/output count.");let d=a===4?"i32":"i64";return[Number(t.getValue(u,d)),Number(t.getValue(u+a,d))]}finally{t.stackRestore(n)}},Ex=(e,t)=>{let n=Re(),a=n.stackSave(),u=0;try{let d=n.PTR_SIZE,l=n.stackAlloc(2*d);n._OrtGetInputOutputMetadata(e,t,l,l+d)!==0&&Oe("Can't get session input/output metadata.");let p=Number(n.getValue(l,"*"));u=Number(n.getValue(l+d,"*"));let o=n.HEAP32[u/4];if(o===0)return[p,0];let r=n.HEAPU32[u/4+1],i=[];for(let s=0;s<r;s++){let c=Number(n.getValue(u+8+s*d,"*"));i.push(c!==0?n.UTF8ToString(c):Number(n.getValue(u+8+(s+r)*d,"*")))}return[p,o,i]}finally{n.stackRestore(a),u!==0&&n._OrtFree(u)}},Bo=e=>{let t=Re(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},_a=async(e,t)=>{let n,a,u=Re();Array.isArray(e)?[n,a]=e:e.buffer===u.HEAPU8.buffer?[n,a]=[e.byteOffset,e.byteLength]:[n,a]=Bo(e);let d=0,l=0,p=0,o=[],r=[],i=[];try{if([l,o]=await d_(t),t?.externalData&&u.mountExternalData){let I=[];for(let O of t.externalData){let A=typeof O=="string"?O:O.path;I.push(Go(typeof O=="string"?O:O.data).then(k=>{u.mountExternalData(A,k)}))}await Promise.all(I)}for(let I of t?.executionProviders??[])if((typeof I=="string"?I:I.name)==="webnn"){if(u.shouldTransferToMLTensor=!1,typeof I!="string"){let O=I,A=O?.context,k=O?.gpuDevice,T=O?.deviceType,R=O?.powerPreference;A?u.currentContext=A:k?u.currentContext=await u.webnnCreateMLContext(k):u.currentContext=await u.webnnCreateMLContext({deviceType:T,powerPreference:R})}else u.currentContext=await u.webnnCreateMLContext();break}d=await u._OrtCreateSession(n,a,l),u.webgpuOnCreateSession?.(d),d===0&&Oe("Can't create a session."),u.jsepOnCreateSession?.(),u.currentContext&&(u.webnnRegisterMLContext(d,u.currentContext),u.currentContext=void 0,u.shouldTransferToMLTensor=!0);let[s,c]=SD(d),h=!!t?.enableGraphCapture,m=[],b=[],w=[],x=[],_=[];for(let I=0;I<s;I++){let[O,A,k]=Ex(d,I);O===0&&Oe("Can't get an input name."),r.push(O);let T=u.UTF8ToString(O);m.push(T),w.push(A===0?{name:T,isTensor:!1}:{name:T,isTensor:!0,type:Vn(A),shape:k})}for(let I=0;I<c;I++){let[O,A,k]=Ex(d,I+s);O===0&&Oe("Can't get an output name."),i.push(O);let T=u.UTF8ToString(O);b.push(T),x.push(A===0?{name:T,isTensor:!1}:{name:T,isTensor:!0,type:Vn(A),shape:k});{if(h&&t?.preferredOutputLocation===void 0){_.push("gpu-buffer");continue}let R=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[T]??"cpu",j=u.webnnIsGraphOutput;if(R==="cpu"&&j&&j(d,T)){_.push("ml-tensor-cpu-output");continue}if(R!=="cpu"&&R!=="cpu-pinned"&&R!=="gpu-buffer"&&R!=="ml-tensor")throw new Error(`Not supported preferred output location: ${R}.`);if(h&&R!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${R}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);_.push(R)}}let S=null;return _.some(I=>I==="gpu-buffer"||I==="ml-tensor"||I==="ml-tensor-cpu-output")&&(p=u._OrtCreateBinding(d),p===0&&Oe("Can't create IO binding."),S={handle:p,outputPreferredLocations:_,outputPreferredLocationsEncoded:_.map(I=>I==="ml-tensor-cpu-output"?"ml-tensor":I).map(I=>lc(I))}),Hr.set(d,[d,r,i,S,h,!1]),[d,m,b,w,x]}catch(s){throw r.forEach(c=>u._OrtFree(c)),i.forEach(c=>u._OrtFree(c)),p!==0&&u._OrtReleaseBinding(p)!==0&&Oe("Can't release IO binding."),d!==0&&u._OrtReleaseSession(d)!==0&&Oe("Can't release session."),s}finally{u._free(n),l!==0&&u._OrtReleaseSessionOptions(l)!==0&&Oe("Can't release session options."),o.forEach(s=>u._free(s)),u.unmountExternalData?.()}},wa=e=>{let t=Re(),n=Hr.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[a,u,d,l,p]=n;l&&(p&&t._OrtClearBoundOutputs(l.handle)!==0&&Oe("Can't clear bound outputs."),t._OrtReleaseBinding(l.handle)!==0&&Oe("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),u.forEach(o=>t._OrtFree(o)),d.forEach(o=>t._OrtFree(o)),t._OrtReleaseSession(a)!==0&&Oe("Can't release session."),Hr.delete(e)},Cx=async(e,t,n,a,u,d,l=!1)=>{if(!e){t.push(0);return}let p=Re(),o=p.PTR_SIZE,r=e[0],i=e[1],s=e[3],c=s,h,m;if(r==="string"&&(s==="gpu-buffer"||s==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(l&&s!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${d} when enableGraphCapture is true.`);if(s==="gpu-buffer"){let x=e[2].gpuBuffer;m=_r(yr(r),i);{let _=p.jsepRegisterBuffer;if(!_)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');h=_(a,d,x,m)}}else if(s==="ml-tensor"){let x=e[2].mlTensor;m=_r(yr(r),i);let _=p.webnnRegisterMLTensor;if(!_)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');h=_(a,x,yr(r),i)}else{let x=e[2];if(Array.isArray(x)){m=o*x.length,h=p._malloc(m),n.push(h);for(let _=0;_<x.length;_++){if(typeof x[_]!="string")throw new TypeError(`tensor data at index ${_} is not a string`);p.setValue(h+_*o,Pt(x[_],n),"*")}}else{let _=p.webnnIsGraphInput,S=p.webnnIsGraphOutput;if(r!=="string"&&_&&S){let I=p.UTF8ToString(u);if(_(a,I)||S(a,I)){let O=yr(r);m=_r(O,i),c="ml-tensor";let A=p.webnnCreateTemporaryTensor,k=p.webnnUploadTensor;if(!A||!k)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let T=await A(a,O,i);k(T,new Uint8Array(x.buffer,x.byteOffset,x.byteLength)),h=T}else m=x.byteLength,h=p._malloc(m),n.push(h),p.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,m),h)}else m=x.byteLength,h=p._malloc(m),n.push(h),p.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,m),h)}}let b=p.stackSave(),w=p.stackAlloc(4*i.length);try{i.forEach((_,S)=>p.setValue(w+S*o,_,o===4?"i32":"i64"));let x=p._OrtCreateTensor(yr(r),h,m,w,i.length,lc(c));x===0&&Oe(`Can't create tensor for input/output. session=${a}, index=${d}.`),t.push(x)}finally{p.stackRestore(b)}},va=async(e,t,n,a,u,d)=>{let l=Re(),p=l.PTR_SIZE,o=Hr.get(e);if(!o)throw new Error(`cannot run inference. invalid session id: ${e}`);let r=o[0],i=o[1],s=o[2],c=o[3],h=o[4],m=o[5],b=t.length,w=a.length,x=0,_=[],S=[],I=[],O=[],A=[],k=l.stackSave(),T=l.stackAlloc(b*p),R=l.stackAlloc(b*p),j=l.stackAlloc(w*p),ee=l.stackAlloc(w*p);try{[x,_]=l_(d),sr("wasm prepareInputOutputTensor");for(let M=0;M<b;M++)await Cx(n[M],S,O,e,i[t[M]],t[M],h);for(let M=0;M<w;M++)await Cx(u[M],I,O,e,s[a[M]],b+a[M],h);ur("wasm prepareInputOutputTensor");for(let M=0;M<b;M++)l.setValue(T+M*p,S[M],"*"),l.setValue(R+M*p,i[t[M]],"*");for(let M=0;M<w;M++)l.setValue(j+M*p,I[M],"*"),l.setValue(ee+M*p,s[a[M]],"*");if(c&&!m){let{handle:M,outputPreferredLocations:q,outputPreferredLocationsEncoded:Y}=c;if(i.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${i.length}).`);sr("wasm bindInputsOutputs");for(let J=0;J<b;J++){let re=t[J];await l._OrtBindInput(M,i[re],S[J])!==0&&Oe(`Can't bind input[${J}] for session=${e}.`)}for(let J=0;J<w;J++){let re=a[J];u[J]?.[3]?(A.push(I[J]),l._OrtBindOutput(M,s[re],I[J],0)!==0&&Oe(`Can't bind pre-allocated output[${J}] for session=${e}.`)):l._OrtBindOutput(M,s[re],0,Y[re])!==0&&Oe(`Can't bind output[${J}] to ${q[J]} for session=${e}.`)}ur("wasm bindInputsOutputs"),Hr.set(e,[r,i,s,c,h,!0])}l.jsepOnRunStart?.(r),l.webnnOnRunStart?.(r);let W;c?W=await l._OrtRunWithBinding(r,c.handle,w,j,x):W=await l._OrtRun(r,R,T,b,ee,w,j,x),W!==0&&Oe("failed to call OrtRun().");let Q=[],C=[];sr("wasm ProcessOutputTensor");for(let M=0;M<w;M++){let q=Number(l.getValue(j+M*p,"*"));if(q===I[M]||A.includes(I[M])){Q.push(u[M]),q!==I[M]&&l._OrtReleaseTensor(q)!==0&&Oe("Can't release tensor.");continue}let Y=l.stackSave(),J=l.stackAlloc(4*p),re=!1,me,B=0;try{l._OrtGetTensorData(q,J,J+p,J+2*p,J+3*p)!==0&&Oe(`Can't access output tensor data on index ${M}.`);let G=p===4?"i32":"i64",ne=Number(l.getValue(J,G));B=l.getValue(J+p,"*");let ce=l.getValue(J+p*2,"*"),Ve=Number(l.getValue(J+p*3,G)),Ue=[];for(let Ee=0;Ee<Ve;Ee++)Ue.push(Number(l.getValue(ce+Ee*p,G)));l._OrtFree(ce)!==0&&Oe("Can't free memory for tensor dims.");let qe=Ue.reduce((Ee,$e)=>Ee*$e,1);me=Vn(ne);let ht=c?.outputPreferredLocations[a[M]];if(me==="string"){if(ht==="gpu-buffer"||ht==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ee=[];for(let $e=0;$e<qe;$e++){let Fe=l.getValue(B+$e*p,"*"),un=l.getValue(B+($e+1)*p,"*"),Ye=$e===qe-1?void 0:un-Fe;Ee.push(l.UTF8ToString(Fe,Ye))}Q.push([me,Ue,Ee,"cpu"])}else if(ht==="gpu-buffer"&&qe>0){let Ee=l.jsepGetBuffer;if(!Ee)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let $e=Ee(B),Fe=_r(ne,qe);if(Fe===void 0||!Aa(me))throw new Error(`Unsupported data type: ${me}`);re=!0,Q.push([me,Ue,{gpuBuffer:$e,download:l.jsepCreateDownloader($e,Fe,me),dispose:()=>{l._OrtReleaseTensor(q)!==0&&Oe("Can't release tensor.")}},"gpu-buffer"])}else if(ht==="ml-tensor"&&qe>0){let Ee=l.webnnEnsureTensor,$e=l.webnnIsGraphInputOutputTypeSupported;if(!Ee||!$e)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(_r(ne,qe)===void 0||!Oa(me))throw new Error(`Unsupported data type: ${me}`);if(!$e(e,me,!1))throw new Error(`preferredLocation "ml-tensor" for ${me} output is not supported by current WebNN Context.`);let Fe=await Ee(e,B,ne,Ue,!1);re=!0,Q.push([me,Ue,{mlTensor:Fe,download:l.webnnCreateMLTensorDownloader(B,me),dispose:()=>{l.webnnReleaseTensorId(B),l._OrtReleaseTensor(q)}},"ml-tensor"])}else if(ht==="ml-tensor-cpu-output"&&qe>0){let Ee=l.webnnCreateMLTensorDownloader(B,me)(),$e=Q.length;re=!0,C.push((async()=>{let Fe=[$e,await Ee];return l.webnnReleaseTensorId(B),l._OrtReleaseTensor(q),Fe})()),Q.push([me,Ue,[],"cpu"])}else{let Ee=uo(me),$e=new Ee(qe);new Uint8Array($e.buffer,$e.byteOffset,$e.byteLength).set(l.HEAPU8.subarray(B,B+$e.byteLength)),Q.push([me,Ue,$e,"cpu"])}}finally{l.stackRestore(Y),me==="string"&&B&&l._free(B),re||l._OrtReleaseTensor(q)}}c&&!h&&(l._OrtClearBoundOutputs(c.handle)!==0&&Oe("Can't clear bound outputs."),Hr.set(e,[r,i,s,c,h,!1]));for(let[M,q]of await Promise.all(C))Q[M][2]=q;return ur("wasm ProcessOutputTensor"),Q}finally{l.webnnOnRunEnd?.(r),l.stackRestore(k),S.forEach(W=>l._OrtReleaseTensor(W)),I.forEach(W=>l._OrtReleaseTensor(W)),O.forEach(W=>l._free(W)),x!==0&&l._OrtReleaseRunOptions(x),_.forEach(W=>l._free(W))}},xa=e=>{let t=Re(),n=Hr.get(e);if(!n)throw new Error("invalid session id");let a=n[0],u=t._OrtEndProfiling(a);u===0&&Oe("Can't get an profile file name."),t._OrtFree(u)},Ta=e=>{let t=[];for(let n of e){let a=n[2];!Array.isArray(a)&&"buffer"in a&&t.push(a.buffer)}return t}}),qr,Ft,Ko,ns,rs,ts,Wc,Hc,fo,ho,AD,Dx,kx,Nx,Lx,Rx,zx,Mx,qc=N(()=>{pt(),oc(),br(),ma(),qr=()=>!!pe.wasm.proxy&&typeof document<"u",Ko=!1,ns=!1,rs=!1,Hc=new Map,fo=(e,t)=>{let n=Hc.get(e);n?n.push(t):Hc.set(e,[t])},ho=()=>{if(Ko||!ns||rs||!Ft)throw new Error("worker not ready")},AD=e=>{switch(e.data.type){case"init-wasm":Ko=!1,e.data.err?(rs=!0,Wc[1](e.data.err)):(ns=!0,Wc[0]()),ts&&(URL.revokeObjectURL(ts),ts=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Hc.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Dx=async()=>{if(!ns){if(Ko)throw new Error("multiple calls to 'initWasm()' detected.");if(rs)throw new Error("previous call to 'initWasm()' failed.");if(Ko=!0,qr())return new Promise((e,t)=>{Ft?.terminate(),a_().then(([n,a])=>{try{Ft=a,Ft.onerror=d=>t(d),Ft.onmessage=AD,Wc=[e,t];let u={type:"init-wasm",in:pe};!u.in.wasm.wasmPaths&&(n||ac)&&(u.in.wasm.wasmPaths={wasm:new URL("/webai-client-inference-poc/assets/ort-wasm-simd-threaded.jsep-CVw3nYo7.wasm",import.meta.url).href}),Ft.postMessage(u),ts=n}catch(u){t(u)}},t)});try{await ga(pe.wasm),await ba(pe),ns=!0}catch(e){throw rs=!0,e}finally{Ko=!1}}},kx=async e=>{if(qr())return ho(),new Promise((t,n)=>{fo("init-ep",[t,n]);let a={type:"init-ep",in:{epName:e,env:pe}};Ft.postMessage(a)});await ya(pe,e)},Nx=async e=>qr()?(ho(),new Promise((t,n)=>{fo("copy-from",[t,n]);let a={type:"copy-from",in:{buffer:e}};Ft.postMessage(a,[e.buffer])})):Bo(e),Lx=async(e,t)=>{if(qr()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return ho(),new Promise((n,a)=>{fo("create",[n,a]);let u={type:"create",in:{model:e,options:{...t}}},d=[];e instanceof Uint8Array&&d.push(e.buffer),Ft.postMessage(u,d)})}else return _a(e,t)},Rx=async e=>{if(qr())return ho(),new Promise((t,n)=>{fo("release",[t,n]);let a={type:"release",in:e};Ft.postMessage(a)});wa(e)},zx=async(e,t,n,a,u,d)=>{if(qr()){if(n.some(l=>l[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(u.some(l=>l))throw new Error("pre-allocated output tensor is not supported for proxy.");return ho(),new Promise((l,p)=>{fo("run",[l,p]);let o=n,r={type:"run",in:{sessionId:e,inputIndices:t,inputs:o,outputIndices:a,options:d}};Ft.postMessage(r,Ta(o))})}else return va(e,t,n,a,u,d)},Mx=async e=>{if(qr())return ho(),new Promise((t,n)=>{fo("end-profiling",[t,n]);let a={type:"end-profiling",in:e};Ft.postMessage(a)});xa(e)}}),Bx,OD,os,Fx=N(()=>{pt(),qc(),ue(),ha(),cc(),Bx=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},OD=e=>{switch(e[3]){case"cpu":return new St(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Aa(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:a,dispose:u}=e[2];return St.fromGpuBuffer(n,{dataType:t,dims:e[1],download:a,dispose:u})}case"ml-tensor":{let t=e[0];if(!Oa(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:a,dispose:u}=e[2];return St.fromMLTensor(n,{dataType:t,dims:e[1],download:a,dispose:u})}default:throw new Error(`invalid data location: ${e[3]}`)}},os=class{async fetchModelAndCopyToWasmMemory(e){return Nx(await Go(e))}async loadModel(e,t){$t();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Lx(n,t),yt()}async dispose(){return Rx(this.sessionId)}async run(e,t,n){$t();let a=[],u=[];Object.entries(e).forEach(s=>{let c=s[0],h=s[1],m=this.inputNames.indexOf(c);if(m===-1)throw new Error(`invalid input '${c}'`);a.push(h),u.push(m)});let d=[],l=[];Object.entries(t).forEach(s=>{let c=s[0],h=s[1],m=this.outputNames.indexOf(c);if(m===-1)throw new Error(`invalid output '${c}'`);d.push(h),l.push(m)});let p=a.map((s,c)=>Bx(s,()=>`input "${this.inputNames[u[c]]}"`)),o=d.map((s,c)=>s?Bx(s,()=>`output "${this.outputNames[l[c]]}"`):null),r=await zx(this.sessionId,u,p,l,o,n),i={};for(let s=0;s<r.length;s++)i[this.outputNames[l[s]]]=d[s]??OD(r[s]);return yt(),i}startProfiling(){}endProfiling(){Mx(this.sessionId)}}}),Gx={};Sr(Gx,{OnnxruntimeWebAssemblyBackend:()=>is,initializeFlags:()=>Vx,wasmBackend:()=>PD});var Vx,is,PD,Ux=N(()=>{pt(),qc(),Fx(),Vx=()=>{(typeof pe.wasm.initTimeout!="number"||pe.wasm.initTimeout<0)&&(pe.wasm.initTimeout=0);let e=pe.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),pe.wasm.simd=!1),typeof pe.wasm.proxy!="boolean"&&(pe.wasm.proxy=!1),typeof pe.wasm.trace!="boolean"&&(pe.wasm.trace=!1),typeof pe.wasm.numThreads!="number"||!Number.isInteger(pe.wasm.numThreads)||pe.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)pe.wasm.numThreads=1;else{let t=typeof navigator>"u"?Ps("node:os").cpus().length:navigator.hardwareConcurrency;pe.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},is=class{async init(e){Vx(),await Dx(),await kx(e)}async createInferenceSessionHandler(e,t){let n=new os;return await n.loadModel(e,t),n}},PD=new is});pt();pt();pt();var gf="1.24.2";{let e=(jy(),Xr(qy)).onnxjsBackend;ar("webgl",e,-10)}{let e=(Ux(),Xr(Gx)).wasmBackend;ar("webgpu",e,5),ar("webnn",e,5),ar("cpu",e,10),ar("wasm",e,10)}Object.defineProperty(pe.versions,"web",{value:gf,enumerable:!0});const V1_CONFIG={name:"v1",description:"Smoke benchmark (MNIST tiny model)",modelUrl:"/mnist-8.onnx",inputFallbackDims:[1,1,28,28],warmupRuns:0,measuredRuns:20,createTimeoutMs:12e3,runTimeoutMs:1e4,providers:["webgpu","wasm","webnn"]},V2_CONFIG={name:"v2",description:"Extended benchmark (SqueezeNet medium model + warmup + p95)",modelUrl:"/squeezenet1.1-7.onnx",inputFallbackDims:[1,3,224,224],warmupRuns:3,measuredRuns:30,createTimeoutMs:25e3,runTimeoutMs:15e3,providers:["webgpu","wasm","webnn"]},V3_CONFIG={name:"v3",description:"Practical stress benchmark (same model, scaled workload)",modelUrl:"/squeezenet1.1-7.onnx",inputFallbackDims:[1,3,224,224],warmupRuns:3,measuredRuns:10,createTimeoutMs:3e4,runTimeoutMs:2e4,providers:["webgpu","wasm","webnn"]},V4_CONFIG={name:"v4",description:"Fast Style Transfer demo + provider benchmark",modelUrl:"/mosaic-9.onnx",inputFallbackDims:[1,3,224,224],warmupRuns:1,measuredRuns:1,createTimeoutMs:3e4,runTimeoutMs:3e4,providers:["webgpu","wasm","webnn"]},V5_CONFIG={name:"v5",description:"YOLO Tiny webcam object detection + realtime performance",modelUrl:"https://raw.githubusercontent.com/microsoft/onnxruntime-web-demo/main/public/yolo.onnx",inputFallbackDims:[1,3,416,416],warmupRuns:1,measuredRuns:1,createTimeoutMs:45e3,runTimeoutMs:45e3,providers:["webgpu","wasm","webnn"]},V6_CONFIG={name:"v6",description:"Chrome Built-in AI (Gemini Nano) probe + latency PoC",modelUrl:"/mnist-8.onnx",inputFallbackDims:[1,1,28,28],warmupRuns:0,measuredRuns:1,createTimeoutMs:12e3,runTimeoutMs:12e3,providers:["wasm"]},V7_CONFIG={name:"v7",description:"Unified comparison: ONNX runtime paths + Built-in AI",modelUrl:"/mnist-8.onnx",inputFallbackDims:[1,1,28,28],warmupRuns:0,measuredRuns:10,createTimeoutMs:12e3,runTimeoutMs:12e3,providers:["wasm","webgpu","webnn"]},V8_CONFIG={name:"v8",description:"Tokenizer + ONNX summarization vs Built-in AI summarization",modelUrl:"/mnist-8.onnx",inputFallbackDims:[1,1,28,28],warmupRuns:0,measuredRuns:10,createTimeoutMs:12e3,runTimeoutMs:12e3,providers:["wasm"]},V9_CONFIG={name:"v9",description:"Built-in AI use-case bundle: summarize, prompt, detect+translate",modelUrl:"/mnist-8.onnx",inputFallbackDims:[1,1,28,28],warmupRuns:0,measuredRuns:1,createTimeoutMs:12e3,runTimeoutMs:12e3,providers:["wasm"]},V3_WORKLOADS=[1,4,8,16],YOLO_CLASSES=["aeroplane","bicycle","bird","boat","bottle","bus","car","cat","chair","cow","diningtable","dog","horse","motorbike","person","pottedplant","sheep","sofa","train","tvmonitor"],YOLO_ANCHORS=[1.08,1.19,3.42,4.41,6.63,11.38,9.42,5.11,16.62,10.52];function getModeFromPath(){const e=window.location.pathname.toLowerCase();return e.includes("/v9")?"v9":e.includes("/v8")?"v8":e.includes("/v7")?"v7":e.includes("/v6")?"v6":e.includes("/v5")?"v5":e.includes("/v4")?"v4":e.includes("/v3")?"v3":e.includes("/v2")?"v2":"v1"}function getConfig(e){return e==="v2"?V2_CONFIG:e==="v3"?V3_CONFIG:e==="v4"?V4_CONFIG:e==="v5"?V5_CONFIG:e==="v6"?V6_CONFIG:e==="v7"?V7_CONFIG:e==="v8"?V8_CONFIG:e==="v9"?V9_CONFIG:V1_CONFIG}const mode=getModeFromPath(),config=getConfig(mode);pe.wasm.wasmPaths="https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/";const app=document.querySelector("#app"),baseUrl="/webai-client-inference-poc/";function resolveModelUrl(e){return/^https?:\/\//i.test(e)?e:e.startsWith("/")?`${baseUrl}${e.slice(1)}`:`${baseUrl}${e}`}const modelUrl=resolveModelUrl(config.modelUrl),v4Extra=mode==="v4"?`
  <div style="margin: 12px 0; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
    <p><strong>V4 Demo:</strong> Upload an image and apply style transfer with each provider.</p>
    <input id="imageInput" type="file" accept="image/*" />
    <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:10px;">
      <div><p>Input (resized)</p><canvas id="inputCanvas" width="224" height="224" style="border:1px solid #ccc;"></canvas></div>
      <div><p>WebGPU</p><canvas id="out-webgpu" width="224" height="224" style="border:1px solid #ccc;"></canvas></div>
      <div><p>WASM</p><canvas id="out-wasm" width="224" height="224" style="border:1px solid #ccc;"></canvas></div>
      <div><p>WebNN</p><canvas id="out-webnn" width="224" height="224" style="border:1px solid #ccc;"></canvas></div>
    </div>
  </div>
`:"",v5Extra=mode==="v5"?`
  <div style="margin: 12px 0; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
    <p><strong>V5 Demo:</strong> Webcam YOLO detection (choose provider, then start).</p>
    <p style="margin:4px 0 8px; color:#444;">Try: person, bottle, chair, dog, cat, car, bus, train, tvmonitor (VOC classes).</p>
    <label>Provider:
      <select id="v5Provider">
        <option value="webgpu">webgpu</option>
        <option value="wasm">wasm</option>
        <option value="webnn">webnn</option>
      </select>
    </label>
    <label style="margin-left:8px;">Conf
      <input id="v5Conf" type="range" min="0.05" max="0.8" step="0.01" value="0.3" />
      <span id="v5ConfVal">0.30</span>
    </label>
    <label style="margin-left:8px;">IoU
      <input id="v5Iou" type="range" min="0.1" max="0.8" step="0.01" value="0.35" />
      <span id="v5IouVal">0.35</span>
    </label>
    <label style="margin-left:8px;">MaxBox
      <input id="v5Max" type="number" min="1" max="50" step="1" value="10" style="width:56px;" />
    </label>
    <button id="v5StartCam">Start Camera</button>
    <button id="v5StartDetect">Start Detection</button>
    <button id="v5StopDetect">Stop</button>
    <div style="margin-top:8px; font-family:monospace;" id="v5Metrics">fps: -, infer: -ms</div>
    <div style="position:relative; width:416px; height:416px; margin-top:10px; border:1px solid #ccc;">
      <video id="v5Video" width="416" height="416" autoplay muted playsinline style="position:absolute; left:0; top:0; object-fit:cover;"></video>
      <canvas id="v5Overlay" width="416" height="416" style="position:absolute; left:0; top:0;"></canvas>
    </div>
  </div>
`:"",v6Extra=mode==="v6"?`
  <div style="margin: 12px 0; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
    <p><strong>V6 Demo:</strong> Chrome Built-in AI (Gemini Nano) probe.</p>
    <p style="margin:4px 0 8px; color:#444;">Runs a simple Korean summary task and reports latency/availability.</p>
    <textarea id="v6Input" rows="4" style="width:100%;">클라이언트 사이드 AI PoC를 통해 WebGPU, WASM, WebNN 성능을 비교했습니다. 초기 지연은 WebGPU와 WebNN이 더 클 수 있지만, 반복 추론에서는 유리할 수 있습니다.</textarea>
    <button id="v6Run">Run Built-in AI Test</button>
    <button id="v6Batch" style="margin-left:8px;">Run 10-case Batch Test</button>
  </div>
`:"",v7Extra=mode==="v7"?`
  <div style="margin: 12px 0; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
    <p><strong>V7 Demo:</strong> Unified test (ONNX runtime paths + Built-in AI).</p>
    <p style="margin:4px 0 8px; color:#444;">ONNX paths use same ONNX model runtime probe; Built-in AI uses summarization task.</p>
    <button id="v7Run">Run Unified Comparison</button>
  </div>
`:"",v8Extra=mode==="v8"?`
  <div style="margin: 12px 0; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
    <p><strong>V8 Demo:</strong> Tokenizer+ONNX summarization vs Built-in AI summarization.</p>
    <p style="margin:4px 0 8px; color:#444;">English summary model for fast setup: Xenova/distilbart-cnn-6-6</p>
    <textarea id="v8Input" rows="5" style="width:100%;">Client-side AI allows inference directly in browser, improving privacy and responsiveness. However, runtime compatibility and model size can affect startup latency. Teams should evaluate both raw latency and operational complexity when choosing between ONNX runtime paths and built-in browser AI APIs.</textarea>
    <button id="v8OnnxRun">Run ONNX Summary</button>
    <button id="v8BuiltInRun" style="margin-left:8px;">Run Built-in Summary</button>
    <button id="v8CompareRun" style="margin-left:8px;">Run 10-case Unified Compare</button>
  </div>
`:"",v9Extra=mode==="v9"?`
  <div style="margin: 12px 0; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
    <p><strong>V9 Demo:</strong> Built-in AI practical bundle (3 use cases)</p>
    <textarea id="v9Input" rows="8" style="width:100%;">Meeting Minutes (English)
Date: 2026-03-14
Topic: Mobile shopping app checkout performance review

Discussion Summary:
- The team reviewed increased checkout drop-offs on mobile devices during peak hours.
- Backend logs indicate intermittent payment API latency spikes above 2.5 seconds.
- UX recordings show users abandoning the flow when address validation takes too long.

Planned Action Items:
1) Run load tests for payment and address services under 3x peak traffic.
2) Add client-side timeout handling and user-friendly retry messages.
3) Prioritize caching for shipping options and coupon validation responses.
4) Define KPI targets: checkout completion rate, p95 response time, and error rate.

Decisions:
- Launch a two-week optimization sprint with daily KPI monitoring.
- Share a weekly status update with product, engineering, and operations teams.</textarea>
    <div style="margin-top:8px;">
      <button id="v9Summarize">1) Summarize Minutes</button>
      <button id="v9Prompt" style="margin-left:8px;">2) Generate Action Plan</button>
      <button id="v9Translate" style="margin-left:8px;">3) Translate Minutes (KO)</button>
      <button id="v9RunAll" style="margin-left:8px;">Run All</button>
    </div>
  </div>
`:"";app.innerHTML=`
  <h1>WebAI Client Inference PoC (${config.name.toUpperCase()})</h1>
  <p>${config.description}</p>
  <p>Model: ${modelUrl}</p>
  <p>Providers: ${config.providers.join(" → ")}</p>
  <p>Warmup: ${config.warmupRuns}, Measured runs: ${config.measuredRuns}</p>
  ${mode==="v3"?`<p>V3 workloads (sequential inferences per sample): ${V3_WORKLOADS.join(", ")}</p>`:""}
  <p>
    <a href="${baseUrl}v1">/v1</a> |
    <a href="${baseUrl}v2">/v2</a> |
    <a href="${baseUrl}v3">/v3</a> |
    <a href="${baseUrl}v4">/v4</a> |
    <a href="${baseUrl}v5">/v5</a> |
    <a href="${baseUrl}v6">/v6</a> |
    <a href="${baseUrl}v7">/v7</a> |
    <a href="${baseUrl}v8">/v8</a> |
    <a href="${baseUrl}v9">/v9</a> |
    <a href="${window.location.pathname}?autorun=1">autorun</a>
  </p>
  ${v4Extra}
  ${v5Extra}
  ${v6Extra}
  ${v7Extra}
  ${v8Extra}
  ${v9Extra}
  <button id="run">Run Benchmark (${config.name.toUpperCase()})</button>
  <pre id="out" style="margin-top:10px; padding:12px; background:#111; color:#eaeaea; border-radius:8px; white-space:pre-wrap; overflow-wrap:anywhere; word-break:break-word; max-height:420px; overflow:auto; line-height:1.45;"></pre>
`;const out=document.querySelector("#out"),runBtn=document.querySelector("#run");function log(e){out.textContent+=`${e}
`}function prettyText(e){return e&&e.replace(/\s*•\s*/g,`
• `).replace(/\s*-\s+/g,`
- `).replace(/\s*(\d+\.)\s+/g,`
$1 `).replace(/\.\s+(?=[A-Z])/g,`.
`).trim()}function now(){return performance.now()}function percentile(e,t){if(e.length===0)return 0;const n=[...e].sort((u,d)=>u-d),a=Math.min(n.length-1,Math.max(0,Math.ceil(t/100*n.length)-1));return n[a]}function normalizeDims(e,t){if(!e||e.length===0)return t;const n=e.map((a,u)=>typeof a=="number"&&a>0?a:t[u]??1);return n.some(a=>!Number.isFinite(a)||a<=0)?t:n}function makeRandomTensor(e,t){const n=normalizeDims(e?.dimensions,t),a=n.reduce((l,p)=>l*p,1);if(e?.type==="int64"){const l=new BigInt64Array(a);for(let p=0;p<a;p++)l[p]=BigInt(1);return new St("int64",l,n)}const d=new Float32Array(a);for(let l=0;l<a;l++)d[l]=Math.random();return new St("float32",d,n)}function tensorFromCanvas(e){const t=e.getContext("2d");if(!t)throw new Error("canvas context not available");const{width:n,height:a}=e,u=t.getImageData(0,0,n,a).data,d=new Float32Array(3*a*n),l=n*a;for(let p=0;p<a;p++)for(let o=0;o<n;o++){const r=(p*n+o)*4,i=p*n+o;d[i]=u[r],d[l+i]=u[r+1],d[l*2+i]=u[r+2]}return new St("float32",d,[1,3,a,n])}function renderTensorToCanvas(e,t){const n=t.getContext("2d");if(!n)throw new Error("canvas context not available");const a=e.dims;if(a.length!==4)throw new Error(`Unexpected output dims: ${a.join("x")}`);const[,u,d,l]=a;if(u!==3)throw new Error(`Expected 3 channels output, got ${u}`);t.width=l,t.height=d;const p=e.data,o=n.createImageData(l,d),r=l*d;for(let i=0;i<d;i++)for(let s=0;s<l;s++){const c=i*l+s,h=c*4,m=Math.max(0,Math.min(255,Math.round(p[c]))),b=Math.max(0,Math.min(255,Math.round(p[r+c]))),w=Math.max(0,Math.min(255,Math.round(p[r*2+c])));o.data[h]=m,o.data[h+1]=b,o.data[h+2]=w,o.data[h+3]=255}n.putImageData(o,0,0)}function sigmoid(e){return 1/(1+Math.exp(-e))}function softmax(e){const t=Math.max(...e),n=e.map(u=>Math.exp(u-t)),a=n.reduce((u,d)=>u+d,0);return n.map(u=>u/a)}function iou(e,t){const n=Math.max(e.x1,t.x1),a=Math.max(e.y1,t.y1),u=Math.min(e.x2,t.x2),d=Math.min(e.y2,t.y2),l=Math.max(0,u-n),p=Math.max(0,d-a),o=l*p,r=(e.x2-e.x1)*(e.y2-e.y1)+(t.x2-t.x1)*(t.y2-t.y1)-o;return r>0?o/r:0}function nms(e,t=.35){const n=[],a=[...e].sort((u,d)=>d.score-u.score);for(;a.length;){const u=a.shift();n.push(u);for(let d=a.length-1;d>=0;d--)u.cls===a[d].cls&&iou(u,a[d])>t&&a.splice(d,1)}return n}function decodeTinyYoloV2(e,t=.3,n=.35,a=10){const u=e.data,d=e.dims;if(d.length!==4)return[];let l=0,p=0,o=0,r;if(d[1]===125)l=d[1],p=d[2],o=d[3],r=(m,b,w)=>u[m*p*o+b*o+w];else if(d[3]===125)p=d[1],o=d[2],l=d[3],r=(m,b,w)=>u[(b*o+w)*l+m];else return[];const i=20,s=5,c=i+5,h=[];for(let m=0;m<p;m++)for(let b=0;b<o;b++)for(let w=0;w<s;w++){const x=w*c,_=r(x+0,m,b),S=r(x+1,m,b),I=r(x+2,m,b),O=r(x+3,m,b),A=r(x+4,m,b),k=[];for(let Y=0;Y<i;Y++)k.push(r(x+5+Y,m,b));const T=softmax(k);let R=0,j=T[0];for(let Y=1;Y<i;Y++)T[Y]>j&&(j=T[Y],R=Y);const W=sigmoid(A)*j;if(W<t)continue;const Q=(b+sigmoid(_))/o,C=(m+sigmoid(S))/p,M=Math.exp(I)*YOLO_ANCHORS[w*2]/o,q=Math.exp(O)*YOLO_ANCHORS[w*2+1]/p;h.push({x1:Math.max(0,(Q-M/2)*416),y1:Math.max(0,(C-q/2)*416),x2:Math.min(416,(Q+M/2)*416),y2:Math.min(416,(C+q/2)*416),score:W,cls:R})}return nms(h,n).slice(0,a)}function drawDetections(e,t){const n=e.getContext("2d");if(n){n.clearRect(0,0,e.width,e.height),n.lineWidth=2,n.font="12px sans-serif";for(const a of t){n.strokeStyle="#00ff90",n.fillStyle="rgba(0,255,144,0.15)";const u=a.x2-a.x1,d=a.y2-a.y1;n.fillRect(a.x1,a.y1,u,d),n.strokeRect(a.x1,a.y1,u,d);const l=`${YOLO_CLASSES[a.cls]??a.cls} ${(a.score*100).toFixed(1)}%`;n.fillStyle="#00ff90",n.fillRect(a.x1,Math.max(0,a.y1-16),n.measureText(l).width+8,16),n.fillStyle="#000",n.fillText(l,a.x1+4,Math.max(11,a.y1-4))}}}function frameToYoloTensor(e){const t=document.createElement("canvas");t.width=416,t.height=416;const n=t.getContext("2d");if(!n)throw new Error("temp canvas ctx failed");n.drawImage(e,0,0,416,416);const a=n.getImageData(0,0,416,416).data,u=new Float32Array(3*416*416),d=416*416;for(let l=0;l<d;l++){const p=l*4;u[l]=a[p],u[d+l]=a[p+1],u[d*2+l]=a[p+2]}return new St("float32",u,[1,3,416,416])}async function withTimeout(e,t,n){let a;const u=new Promise((d,l)=>{a=setTimeout(()=>l(new Error(`${n} timed out after ${t}ms`)),t)});try{return await Promise.race([e,u])}finally{a&&clearTimeout(a)}}async function createSession(e){return withTimeout(sI.create(modelUrl,{executionProviders:[e],graphOptimizationLevel:"all"}),config.createTimeoutMs,`${e} session create`)}async function benchProvider(e){try{const t=now(),n=await createSession(e),a=now()-t,u=n.inputNames[0];if(!u)throw new Error("No input name found in model");const d=n.inputMetadata?.[u],l=makeRandomTensor(d,config.inputFallbackDims),p={[u]:l},o=now();await withTimeout(n.run(p),config.runTimeoutMs,`${e} first run`);const r=now()-o;for(let s=0;s<config.warmupRuns;s++)await withTimeout(n.run(p),config.runTimeoutMs,`${e} warmup ${s+1}`);const i=[];for(let s=0;s<config.measuredRuns;s++){const c=now();await withTimeout(n.run(p),config.runTimeoutMs,`${e} run ${s+1}`),i.push(now()-c)}return{provider:e,ok:!0,initMs:a,firstRunMs:r,avgRunMs:i.reduce((s,c)=>s+c,0)/i.length,p95RunMs:percentile(i,95)}}catch(t){return{provider:e,ok:!1,error:t instanceof Error?t.message:String(t)}}}async function runV3Stress(e){try{const t=await createSession(e),n=t.inputNames[0];if(!n)throw new Error("No input name found in model");const a=t.inputMetadata?.[n],u=makeRandomTensor(a,config.inputFallbackDims),d={[n]:u};for(let p=0;p<config.warmupRuns;p++)await withTimeout(t.run(d),config.runTimeoutMs,`${e} warmup ${p+1}`);const l=[];for(const p of V3_WORKLOADS){const o=now();for(let i=0;i<p;i++)await withTimeout(t.run(d),config.runTimeoutMs,`${e} workload ${p} run ${i+1}`);const r=now()-o;l.push({provider:e,workload:p,totalMs:r,perInferMs:r/p})}return l}catch(t){return{error:t instanceof Error?t.message:String(t)}}}function printSummaryTable(e){log("---"),log("V3 Stress Summary (provider | workload | totalMs | perInferMs)");for(const t of e)log(`${t.provider.padEnd(6)} | ${String(t.workload).padStart(2)} | ${t.totalMs.toFixed(2).padStart(8)} | ${t.perInferMs.toFixed(3).padStart(8)}`)}async function runStyleTransferV4(){out.textContent="",log(`Mode: ${config.name}`),log(`UA: ${navigator.userAgent}`),log(`WebGPU API: ${"gpu"in navigator?"yes":"no"}`),log(`WebNN API: ${"ml"in navigator?"maybe (navigator.ml)":"no"}`),log(`Model URL: ${modelUrl}`),log("---");const e=document.querySelector("#inputCanvas");if(!e)throw new Error("V4 input canvas not found");const t=tensorFromCanvas(e);for(const n of config.providers){log(`Running ${n} ...`);try{const a=document.querySelector(`#out-${n}`);if(!a)throw new Error(`Output canvas missing for ${n}`);const u=now(),d=await createSession(n),l=now()-u,p=d.inputNames[0],o=now(),r=await withTimeout(d.run({[p]:t}),config.runTimeoutMs,`${n} style run`),i=now()-o,s=d.outputNames[0],c=r[s];renderTensorToCanvas(c,a),log(`✅ ${n}: init=${l.toFixed(1)}ms, styleRun=${i.toFixed(1)}ms`)}catch(a){log(`❌ ${n}: ${a instanceof Error?a.message:String(a)}`)}}}async function runYoloV5(){const e=document.querySelector("#v5Video"),t=document.querySelector("#v5Overlay"),n=document.querySelector("#v5Metrics"),a=document.querySelector("#v5Provider"),u=document.querySelector("#v5Conf"),d=document.querySelector("#v5Iou"),l=document.querySelector("#v5Max"),p=document.querySelector("#v5ConfVal"),o=document.querySelector("#v5IouVal");if(!e||!t||!n||!a||!u||!d||!l||!p||!o)throw new Error("V5 UI not found");let r=null,i=!1,s=0,c=0,h=0,m=performance.now(),b=Number(u.value)||.3,w=Number(d.value)||.35,x=Number(l.value)||10;const _=()=>{p.textContent=b.toFixed(2),o.textContent=w.toFixed(2)};_(),u.addEventListener("input",()=>{b=Number(u.value)||b,_()}),d.addEventListener("input",()=>{w=Number(d.value)||w,_()}),l.addEventListener("input",()=>{x=Math.max(1,Math.min(50,Number(l.value)||x))});const S=document.querySelector("#v5StartCam"),I=document.querySelector("#v5StartDetect"),O=document.querySelector("#v5StopDetect");async function A(){if(e.srcObject)return;const R=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1});e.srcObject=R,await e.play()}async function k(R){const j=now();r=await createSession(R);const ee=now()-j;log(`✅ v5 ${R} session ready in ${ee.toFixed(1)}ms`)}async function T(R){if(!i||!r)return;const j=frameToYoloTensor(e),ee=r.inputNames[0],W=now(),Q=await withTimeout(r.run({[ee]:j}),config.runTimeoutMs,`v5 ${R} frame run`);s=now()-W;const C=r.outputNames[0],M=Q[C],q=decodeTinyYoloV2(M,b,w,x);drawDetections(t,q),h+=1;const Y=now();if(Y-m>=1e3){c=h*1e3/(Y-m),h=0,m=Y;const J=q.length>0?q[0]:null,re=J?`${YOLO_CLASSES[J.cls]??J.cls}:${(J.score*100).toFixed(1)}%`:"-";n.textContent=`fps: ${c.toFixed(1)}, infer: ${s.toFixed(1)}ms, dets: ${q.length}, top: ${re}, conf:${b.toFixed(2)}, iou:${w.toFixed(2)}, max:${x}, outShape: [${M.dims.join(",")}]`}requestAnimationFrame(()=>{T(R).catch(J=>{i=!1,log(`❌ v5 loop error: ${J instanceof Error?J.message:String(J)}`)})})}S?.addEventListener("click",async()=>{try{await A(),log("✅ v5 camera started")}catch(R){log(`❌ v5 camera error: ${R instanceof Error?R.message:String(R)}`)}}),I?.addEventListener("click",async()=>{try{await A();const R=a.value;await k(R),i=!0,m=now(),h=0,log(`▶️ v5 detection started (${R})`),await T(R)}catch(R){i=!1,log(`❌ v5 start error: ${R instanceof Error?R.message:String(R)}`)}}),O?.addEventListener("click",()=>{i=!1,n.textContent="fps: -, infer: -ms",log("⏹️ v5 detection stopped")}),log("V5 ready. Click Start Camera, then Start Detection.")}function getV6ApiSurface(e){return{LanguageModel:typeof e.LanguageModel<"u",Summarizer:typeof e.Summarizer<"u",Writer:typeof e.Writer<"u",Rewriter:typeof e.Rewriter<"u",Proofreader:typeof e.Proofreader<"u","window.ai":typeof e.ai<"u","ai.languageModel":!!e.ai?.languageModel,"ai.summarizer":!!e.ai?.summarizer}}async function runBuiltInAISingle(e,t=!0){const n=window,a=`다음 문장을 한국어로 2문장 이내로 요약해 주세요.

${e}`;if(n.Summarizer?.create){if(n.Summarizer.availability){const r=await n.Summarizer.availability();if(t&&log(`Summarizer.availability: ${r}`),r==="unavailable")throw new Error("Summarizer is unavailable on this device/profile")}const u=now(),d=await n.Summarizer.create({type:"tldr",format:"plain-text",length:"short"}),l=now(),p=await d.summarize(e),o=now();return{apiPath:"Summarizer",createMs:l-u,inferMs:o-l,totalMs:o-u,output:p}}if(n.LanguageModel?.create){const u=now(),d=await n.LanguageModel.create(),l=now(),p=await d.prompt(a),o=now();return{apiPath:"LanguageModel",createMs:l-u,inferMs:o-l,totalMs:o-u,output:p}}if(n.Writer?.create){const u=now(),d=await n.Writer.create({tone:"neutral",format:"plain-text"}),l=now(),p=await d.write(`다음 내용을 한국어 2문장으로 요약해 주세요: ${e}`),o=now();return{apiPath:"Writer",createMs:l-u,inferMs:o-l,totalMs:o-u,output:p}}if(n.ai?.summarizer?.create){const u=now(),d=await n.ai.summarizer.create({type:"tldr",format:"plain-text",length:"short"}),l=now(),p=await d.summarize(e),o=now();return{apiPath:"legacy ai.summarizer",createMs:l-u,inferMs:o-l,totalMs:o-u,output:p}}if(n.ai?.languageModel?.create){const u=now(),d=await n.ai.languageModel.create(),l=now(),p=await d.prompt(a),o=now();return{apiPath:"legacy ai.languageModel",createMs:l-u,inferMs:o-l,totalMs:o-u,output:p}}throw new Error("API surface is partially exposed, but no callable create() path found.")}async function runBuiltInAIV6(){out.textContent="";const e=document.querySelector("#v6Input")?.value?.trim()||"";log("Mode: v6"),log(`UA: ${navigator.userAgent}`),log("Experiment: Built-in AI API availability + latency probe"),log("Task: Korean short summarization (2 sentences)"),log(`Input length: ${e.length} chars`),log("Note: This is API-level PoC (not direct WASM/WebGPU/WebNN backend comparison)."),log("--- Built-in AI capability probe (new API surface first) ---");const n=getV6ApiSurface(window);for(const[u,d]of Object.entries(n))log(`${u}: ${d?"yes":"no"}`);if(!Object.values(n).some(Boolean)){log("❌ Built-in AI API not available in this environment."),log("Tip: Chrome channel/rollout, flags, and policy can affect API exposure.");return}try{const u=await runBuiltInAISingle(e,!0);log("--- V6 Result (Built-in AI) ---"),log(`API path: ${u.apiPath}`),log(`create latency: ${u.createMs.toFixed(1)}ms`),log(`inference latency: ${u.inferMs.toFixed(1)}ms`),log(`total latency: ${u.totalMs.toFixed(1)}ms`),log("--- Output ---"),log(u.output||"(empty)"),log("--- Comparison Hint ---"),log("- Compare this V6 latency with V2/V3 summary-like tasks manually."),log("- V6 is API-level benchmark (Built-in AI), V2/V3 are runtime/backend-level benchmark (ORT).")}catch(u){log(`❌ Built-in AI execution failed: ${u instanceof Error?u.message:String(u)}`)}}async function runBuiltInAIV6Batch(){out.textContent="";const e=["클라이언트 AI는 네트워크 없이도 일부 추론이 가능해 프라이버시와 응답성을 개선할 수 있습니다. 다만 기기 성능과 브라우저 지원 편차를 고려해야 합니다.","WASM은 호환성이 높고 안정적이지만 대규모 반복 추론에서는 GPU 계열 대비 한계가 나타날 수 있습니다.","WebGPU는 초기 준비 비용이 있지만 반복 추론에서 지연시간을 낮출 수 있는 가능성이 큽니다.","WebNN은 플랫폼 의존성이 존재하지만 일부 환경에서 매우 빠른 추론 경로를 제공할 수 있습니다.","Built-in AI는 구현 속도가 빠르지만 API 노출 여부와 기능 롤아웃 상태를 먼저 확인해야 합니다.","온디바이스 추론은 서버 비용 절감에 도움이 되지만, 모델 배포 크기와 업데이트 전략이 중요합니다.","프론트엔드 팀은 정확도뿐 아니라 지연시간, 실패율, 지원 범위를 함께 측정해야 합니다.","PoC 단계에서는 단일 성능 수치보다 재현 가능한 측정 절차를 먼저 확립하는 것이 좋습니다.","요약 태스크 비교에서는 출력 형식 제약을 동일하게 맞춰야 실사용 관점 해석이 가능합니다.","최종 도입 판단은 모델 성능보다도 운영 난이도와 사용자 경험을 함께 고려해야 합니다."];log("Mode: v6-batch"),log("Experiment: Built-in AI 10-case summarization batch");const t=[];for(let o=0;o<e.length;o++){const r=e[o];try{const i=await runBuiltInAISingle(r,!1);t.push({ok:!0,totalMs:i.totalMs,path:i.apiPath}),log(`✅ case ${o+1}: ${i.totalMs.toFixed(1)}ms (${i.apiPath})`)}catch(i){const s=i instanceof Error?i.message:String(i);t.push({ok:!1,err:s}),log(`❌ case ${o+1}: ${s}`)}}const n=t.filter(o=>o.ok&&typeof o.totalMs=="number"),a=n.length/t.length*100,u=n.length?n.reduce((o,r)=>o+r.totalMs,0)/n.length:0,d=n.map(o=>o.totalMs).sort((o,r)=>o-r),l=d.length?d[Math.max(0,Math.ceil(d.length*.95)-1)]:0,p=n[0]?.path??"-";log("--- V6 Batch Summary ---"),log(`cases: ${t.length}`),log(`success: ${n.length}/${t.length} (${a.toFixed(1)}%)`),log(`api path: ${p}`),log(`avg total latency: ${u.toFixed(1)}ms`),log(`p95 total latency: ${l.toFixed(1)}ms`)}async function runUnifiedV7(){out.textContent="",log("Mode: v7"),log("Experiment: Unified comparison across ONNX runtime paths and Built-in AI"),log("Note: ONNX and Built-in AI are different model/API layers, so interpret as practical-path comparison."),log("--- ONNX runtime path probe ---");const e=["wasm","webgpu","webnn"],t=[];for(const o of e){const r=await benchProvider(o);r.ok?(t.push({provider:o,ok:!0,latency:r.avgRunMs}),log(`✅ ONNX ${o}: avg=${(r.avgRunMs??0).toFixed(2)}ms`)):(t.push({provider:o,ok:!1,error:r.error}),log(`❌ ONNX ${o}: ${r.error}`))}log("--- Built-in AI 10-case batch ---");const n=["클라이언트 AI는 네트워크 없이도 일부 추론이 가능해 프라이버시와 응답성을 개선할 수 있습니다. 다만 기기 성능과 브라우저 지원 편차를 고려해야 합니다.","WASM은 호환성이 높고 안정적이지만 대규모 반복 추론에서는 GPU 계열 대비 한계가 나타날 수 있습니다.","WebGPU는 초기 준비 비용이 있지만 반복 추론에서 지연시간을 낮출 수 있는 가능성이 큽니다.","WebNN은 플랫폼 의존성이 존재하지만 일부 환경에서 매우 빠른 추론 경로를 제공할 수 있습니다.","Built-in AI는 구현 속도가 빠르지만 API 노출 여부와 기능 롤아웃 상태를 먼저 확인해야 합니다.","온디바이스 추론은 서버 비용 절감에 도움이 되지만, 모델 배포 크기와 업데이트 전략이 중요합니다.","프론트엔드 팀은 정확도뿐 아니라 지연시간, 실패율, 지원 범위를 함께 측정해야 합니다.","PoC 단계에서는 단일 성능 수치보다 재현 가능한 측정 절차를 먼저 확립하는 것이 좋습니다.","요약 태스크 비교에서는 출력 형식 제약을 동일하게 맞춰야 실사용 관점 해석이 가능합니다.","최종 도입 판단은 모델 성능보다도 운영 난이도와 사용자 경험을 함께 고려해야 합니다."],a=[];for(let o=0;o<n.length;o++)try{const r=await runBuiltInAISingle(n[o],!1);a.push({ok:!0,totalMs:r.totalMs,path:r.apiPath}),log(`✅ Built-in case ${o+1}: ${r.totalMs.toFixed(1)}ms (${r.apiPath})`)}catch(r){const i=r instanceof Error?r.message:String(r);a.push({ok:!1,err:i}),log(`❌ Built-in case ${o+1}: ${i}`)}const u=a.filter(o=>o.ok&&typeof o.totalMs=="number"),d=u.length?u.reduce((o,r)=>o+r.totalMs,0)/u.length:0,l=u.map(o=>o.totalMs).sort((o,r)=>o-r),p=l.length?l[Math.max(0,Math.ceil(l.length*.95)-1)]:0;log("--- V7 Unified Summary ---");for(const o of t)o.ok?log(`ONNX-${o.provider}: success, avg=${(o.latency??0).toFixed(2)}ms`):log(`ONNX-${o.provider}: fail, reason=${o.error}`);log(`Built-in AI: success=${u.length}/${a.length}, avg=${d.toFixed(1)}ms, p95=${p.toFixed(1)}ms, path=${u[0]?.path??"-"}`),log("Interpretation: ONNX rows compare runtime backends on one model, Built-in row compares API-level summarization path.")}let v8OnnxSummarizer=null;async function getV8OnnxSummarizer(){if(v8OnnxSummarizer)return v8OnnxSummarizer;const e=await __vitePreload(()=>import("./transformers-CDI63PUD.js"),[]);return e.env.allowLocalModels=!1,e.env.useBrowserCache=!0,v8OnnxSummarizer=await e.pipeline("summarization","Xenova/distilbart-cnn-6-6"),v8OnnxSummarizer}async function runV8OnnxSingle(e){const t=now(),n=await getV8OnnxSummarizer(),a=now(),u=await n(e,{max_new_tokens:60,min_new_tokens:15}),d=now(),l=Array.isArray(u)?u[0]?.summary_text??"":u?.summary_text??"";return{createMs:a-t,inferMs:d-a,totalMs:d-t,output:l}}async function runV8OnnxSummary(){out.textContent="";const e=document.querySelector("#v8Input")?.value?.trim()||"";log("Mode: v8 (ONNX summarization)"),log(`Input length: ${e.length} chars`);try{const t=await runV8OnnxSingle(e);log("--- Result ---"),log("Path: Tokenizer + ONNX (transformers.js + ORT)"),log(`create latency: ${t.createMs.toFixed(1)}ms`),log(`inference latency: ${t.inferMs.toFixed(1)}ms`),log(`total latency: ${t.totalMs.toFixed(1)}ms`),log("--- Output ---"),log(t.output||"(empty)")}catch(t){log(`❌ ONNX summarization failed: ${t instanceof Error?t.message:String(t)}`)}}async function runV8BuiltInSummary(){out.textContent="";const e=document.querySelector("#v8Input")?.value?.trim()||"";log("Mode: v8 (Built-in AI summarization)"),log(`Input length: ${e.length} chars`);try{const t=await runBuiltInAISingle(e,!0);log("--- Result ---"),log(`Path: Built-in AI (${t.apiPath})`),log(`create latency: ${t.createMs.toFixed(1)}ms`),log(`inference latency: ${t.inferMs.toFixed(1)}ms`),log(`total latency: ${t.totalMs.toFixed(1)}ms`),log("--- Output ---"),log(t.output||"(empty)")}catch(t){log(`❌ Built-in summarization failed: ${t instanceof Error?t.message:String(t)}`)}}async function runV8UnifiedCompare(){out.textContent="",log("Mode: v8 unified compare"),log("Task: 10-case summarization comparison (ONNX tokenizer+runtime vs Built-in AI)");const e=["Client-side AI can improve privacy by processing text locally, but model size and device capability strongly affect startup and runtime latency.","WebGPU often has initialization overhead, while repeated inference can become efficient once the pipeline is warmed up.","WASM is widely compatible and stable, but may show slower throughput on larger generation workloads.","Built-in AI APIs can reduce implementation complexity, though API availability may vary by browser channel and policy.","Teams should compare not only latency but also reproducibility, fallback strategy, and deployment complexity.","A practical benchmark should fix the same prompt style and output constraints across all paths.","Operational reliability often matters more than peak speed in user-facing browser applications.","Hybrid design can combine built-in AI for convenience and ONNX paths for deterministic control.","Performance interpretation must separate backend-level tests from API-level product tests.","Final architecture decisions should include quality, cost, latency, and platform coverage."],t=[];let n=0;for(let r=0;r<e.length;r++)try{const i=await runV8OnnxSingle(e[r]);n++,t.push(i.totalMs),log(`✅ ONNX case ${r+1}: ${i.totalMs.toFixed(1)}ms`)}catch(i){log(`❌ ONNX case ${r+1}: ${i instanceof Error?i.message:String(i)}`)}const a=[];let u=0,d="-";for(let r=0;r<e.length;r++)try{const i=await runBuiltInAISingle(e[r],!1);u++,a.push(i.totalMs),d=i.apiPath,log(`✅ Built-in case ${r+1}: ${i.totalMs.toFixed(1)}ms (${i.apiPath})`)}catch(i){log(`❌ Built-in case ${r+1}: ${i instanceof Error?i.message:String(i)}`)}const l=r=>{if(!r.length)return{avg:0,p95:0};const i=r.reduce((h,m)=>h+m,0)/r.length,s=[...r].sort((h,m)=>h-m),c=s[Math.max(0,Math.ceil(s.length*.95)-1)];return{avg:i,p95:c}},p=l(t),o=l(a);log("--- V8 Unified Summary ---"),log(`ONNX summarization: success=${n}/${e.length}, avg=${p.avg.toFixed(1)}ms, p95=${p.p95.toFixed(1)}ms`),log(`Built-in summarization: success=${u}/${e.length}, avg=${o.avg.toFixed(1)}ms, p95=${o.p95.toFixed(1)}ms, path=${d}`),log("Note: Same task, different model/API layers. Use as practical-path comparison, not absolute model benchmark.")}async function runV9Summarize(e){const t=await runBuiltInAISingle(e,!0);log("--- V9 Summarize ---"),log(`path: ${t.apiPath}`),log(`latency(total): ${t.totalMs.toFixed(1)}ms`),log(prettyText(t.output||"(empty)"))}async function runV9Prompt(e){const t=window,n=`Based on the following meeting minutes, generate a practical action plan with 5 bullet points. Each bullet must include: owner role, task, and expected outcome.

${e}`;log("--- V9 Action Plan (Prompt/Write) ---");try{if(t.LanguageModel?.create){const a=now(),u=await t.LanguageModel.create(),d=now(),l=await u.prompt(n),p=now();log("path: LanguageModel"),log(`latency(total): ${(p-a).toFixed(1)}ms`),log(prettyText(l||"(empty)"));return}if(t.Writer?.create){const a=now(),u=await t.Writer.create({tone:"neutral",format:"plain-text"}),d=now(),l=await u.write(n),p=now();log("path: Writer"),log(`latency(total): ${(p-a).toFixed(1)}ms`),log(prettyText(l||"(empty)"));return}throw new Error("LanguageModel/Writer API not available")}catch(a){log(`❌ prompt/write failed: ${a instanceof Error?a.message:String(a)}`)}}function pickDetectedLanguage(e){return e?.detectedLanguage||e?.language||e?.lang||"unknown"}async function runV9DetectTranslate(e){const t=window;log("--- V9 Detect + Translate ---");try{if(!t.LanguageDetector?.create||!t.Translator?.create)throw new Error("LanguageDetector/Translator API not available");const n=now(),u=await(await t.LanguageDetector.create()).detect(e),d=Array.isArray(u)?u[0]:u,l=pickDetectedLanguage(d),o=await(await t.Translator.create({sourceLanguage:l,targetLanguage:"ko"})).translate(e),r=now();log(`detected language: ${l}`),log(`latency(total): ${(r-n).toFixed(1)}ms`),log(prettyText(o||"(empty)"))}catch(n){log(`❌ detect+translate failed: ${n instanceof Error?n.message:String(n)}`)}}async function runV9All(){out.textContent="";const e=document.querySelector("#v9Input")?.value?.trim()||"";log("Mode: v9"),log(`Input length: ${e.length} chars`),log("Use cases: summarize / prompt-write / detect-translate"),await runV9Summarize(e),await runV9Prompt(e),await runV9DetectTranslate(e)}async function runBenchmark(){out.textContent="",log(`Mode: ${config.name}`),log(`UA: ${navigator.userAgent}`),log(`WebGPU API: ${"gpu"in navigator?"yes":"no"}`),log(`WebNN API: ${"ml"in navigator?"maybe (navigator.ml)":"no"}`),log("ORT loaded: onnxruntime-web/all"),log(`Model URL: ${modelUrl}`),log(`Warmup runs: ${config.warmupRuns}, Measured runs: ${config.measuredRuns}`),mode==="v3"&&log(`Workloads: ${V3_WORKLOADS.join(", ")}`),log("---");const e=[];for(const t of config.providers){log(`Running ${t} ...`);const n=await benchProvider(t);if(e.push(n),!n.ok){log(`❌ ${t}: ${n.error}`);continue}log(`✅ ${t}: init=${n.initMs.toFixed(1)}ms, first=${n.firstRunMs.toFixed(1)}ms, avg=${n.avgRunMs.toFixed(2)}ms, p95=${n.p95RunMs.toFixed(2)}ms`)}if(mode==="v3"){log("---"),log("Running V3 stress test ...");const t=[];for(const n of config.providers){const a=await runV3Stress(n);"error"in a?log(`❌ stress ${n}: ${a.error}`):(log(`✅ stress ${n}: ${a.length} rows`),t.push(...a))}t.length>0&&printSummaryTable(t)}log("---"),log("Summary (JSON)"),log(JSON.stringify(e,null,2))}if(mode==="v4"){const e=document.querySelector("#imageInput"),t=document.querySelector("#inputCanvas");if(e&&t){const n=t.getContext("2d");n&&(n.fillStyle="#f0f0f0",n.fillRect(0,0,t.width,t.height),n.fillStyle="#333",n.font="14px sans-serif",n.fillText("Upload image",60,112)),e.addEventListener("change",()=>{const a=e.files?.[0];if(!a||!t)return;const u=URL.createObjectURL(a),d=new Image;d.onload=()=>{const l=t.getContext("2d");l&&(l.clearRect(0,0,t.width,t.height),l.drawImage(d,0,0,t.width,t.height),URL.revokeObjectURL(u))},d.src=u})}}mode==="v5"&&runYoloV5().catch(e=>log(`error: ${String(e)}`));if(mode==="v6"){const e=document.querySelector("#v6Run"),t=document.querySelector("#v6Batch");e?.addEventListener("click",()=>{runBuiltInAIV6().catch(n=>log(`error: ${String(n)}`))}),t?.addEventListener("click",()=>{runBuiltInAIV6Batch().catch(n=>log(`error: ${String(n)}`))})}mode==="v7"&&document.querySelector("#v7Run")?.addEventListener("click",()=>{runUnifiedV7().catch(t=>log(`error: ${String(t)}`))});if(mode==="v8"){const e=document.querySelector("#v8OnnxRun"),t=document.querySelector("#v8BuiltInRun"),n=document.querySelector("#v8CompareRun");e?.addEventListener("click",()=>runV8OnnxSummary().catch(a=>log(`error: ${String(a)}`))),t?.addEventListener("click",()=>runV8BuiltInSummary().catch(a=>log(`error: ${String(a)}`))),n?.addEventListener("click",()=>runV8UnifiedCompare().catch(a=>log(`error: ${String(a)}`)))}if(mode==="v9"){const e=document.querySelector("#v9Input"),t=()=>e?.value?.trim()||"";document.querySelector("#v9Summarize")?.addEventListener("click",()=>{out.textContent="",runV9Summarize(t()).catch(n=>log(`error: ${String(n)}`))}),document.querySelector("#v9Prompt")?.addEventListener("click",()=>{out.textContent="",runV9Prompt(t()).catch(n=>log(`error: ${String(n)}`))}),document.querySelector("#v9Translate")?.addEventListener("click",()=>{out.textContent="",runV9DetectTranslate(t()).catch(n=>log(`error: ${String(n)}`))}),document.querySelector("#v9RunAll")?.addEventListener("click",()=>{runV9All().catch(n=>log(`error: ${String(n)}`))})}runBtn.addEventListener("click",()=>{if(mode==="v4"){runStyleTransferV4().catch(e=>log(`error: ${String(e)}`));return}if(mode==="v5"){log("Use V5 camera controls (Start Camera / Start Detection).");return}if(mode==="v6"){runBuiltInAIV6().catch(e=>log(`error: ${String(e)}`));return}if(mode==="v7"){runUnifiedV7().catch(e=>log(`error: ${String(e)}`));return}if(mode==="v8"){runV8UnifiedCompare().catch(e=>log(`error: ${String(e)}`));return}if(mode==="v9"){runV9All().catch(e=>log(`error: ${String(e)}`));return}runBenchmark().catch(e=>log(`error: ${String(e)}`))});const params=new URLSearchParams(window.location.search);params.get("autorun")==="1"&&mode!=="v4"&&mode!=="v5"&&mode!=="v6"&&mode!=="v7"&&mode!=="v8"&&mode!=="v9"&&runBenchmark().catch(e=>log(`error: ${String(e)}`));
