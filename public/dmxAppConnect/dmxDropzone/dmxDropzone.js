/*!
 App Connect Dropzone
 Version: 2.0.5
 (c) 2024 Wappler.io
 @build 2024-07-04 14:13:42
 */
dmx.Component("dropzone",{extends:"form-element",initialData:{file:null,files:[],lastError:""},attributes:{accept:{type:String,default:""},required:{type:Boolean,default:!1},message:{type:String,default:"Drop files here or click to browse."},thumbs:{type:Boolean,default:!0},thumbsWidth:{type:Number,default:100},thumbsHeight:{type:Number,default:100},imageMaxWidth:{type:Number,default:null},imageMaxHeight:{type:Number,default:null},imageType:{type:String,default:null,enum:["png","jpeg","webp"]},imageQuality:{type:Number,default:null}},methods:{remove(e){this._remove(e)},reset(){this._reset()}},init(e){this._clickHandler=this._clickHandler.bind(this),this._dragoverHandler=this._dragoverHandler.bind(this),this._dragenterHandler=this._dragenterHandler.bind(this),this._dragleaveHandler=this._dragleaveHandler.bind(this),this._dropHandler=this._dropHandler.bind(this),this._changeHandler=this._changeHandler.bind(this),this._resetHandler=this._resetHandler.bind(this),this._imageTypes={png:"image/png",jpeg:"image/jpeg",webp:"image/webp","image/png":"image/png","image/jpeg":"image/jpeg","image/webp":"image/webp"},this._imageExtensions={"image/png":"png","image/jpeg":"jpg","image/webp":"webp"},this._form=e.form,this._cnt=0},render(e){this._dropzoneElement=document.createElement("div");for(let t of e.attributes)this._dropzoneElement.setAttribute(t.name,t.value);this._dropzoneElement.classList.add("dmxDropzone"),Object.defineProperties(this._dropzoneElement,{willValidate:{get:()=>!0,set:()=>{}},files:{get:()=>{const e=this._form.dmxExtraData[this.$node.name];return Array.isArray(e)?e:e?[e]:[]},set:()=>{}},value:{get:()=>this.data.file||String(this.data.files),set:()=>{}}}),this._dropzoneElement.type="file",this._dropzoneElement.required=this.props.required,this._dropzoneElement.multiple=e.multiple,this._dropzoneElement.accept=this.props.accept,this._dropzoneElement.name=e.name,this._dropzoneElement.disabled=e.disabled,this._dropzoneElement.setCustomValidity=e=>{this.set("isinvalid",""!=e),this.set("validityMessage",e||"")},this._messageElement=document.createElement("div"),this._messageElement.className="dmxDropzoneMessage",this._messageElement.innerHTML=this.props.message,this._dropzoneElement.append(this._messageElement),this._dropzoneElement.addEventListener("click",this._clickHandler),this._dropzoneElement.addEventListener("dragover",this._dragoverHandler),this._dropzoneElement.addEventListener("dragenter",this._dragenterHandler),this._dropzoneElement.addEventListener("dragleave",this._dragleaveHandler),this._dropzoneElement.addEventListener("drop",this._dropHandler),e.addEventListener("change",this._changeHandler),e.accept=this.props.accept,dmx.dom.replace(e,this._dropzoneElement),this._form&&(Array.isArray(this._form.dmxExtraElements)&&this._form.dmxExtraElements.push(this._dropzoneElement),this._form.addEventListener("reset",this._resetHandler))},performUpdate(e){e.has("accept")&&(this.$node.accept=this.props.accept),e.has("message")&&this._updateMessage()},destroy(){this._dropzoneElement.removeEventListener("click",this._clickHandler),this._dropzoneElement.removeEventListener("dragover",this._dragoverHandler),this._dropzoneElement.removeEventListener("dragenter",this._dragenterHandler),this._dropzoneElement.removeEventListener("dragleave",this._dragleaveHandler),this._dropzoneElement.removeEventListener("drop",this._dropHandler),this.$node.removeEventListener("change",this._changeHandler),this._form&&this._form.removeEventListener("reset",this._resetHandler),dmx.dom.replace(this._dropzoneElement,this.$node)},_validate(){dmx.validate(this._dropzoneElement),this.$node.dirty&&this.set({invalid:!this.$node.validity.valid,validationMessage:this.$node.validationMessage})},_reset(){dmx.validateReset(this._dropzoneElement),this._dropzoneElement.dirty=!1,this.$node.dirty=!1,this.set({invalid:!1,validationMessage:""}),this._remove(),dmx.nextTick((()=>this.dispatchEvent("updated")))},_updateMessage(){let e=this.props.message;this.data.files.length?e+=` (${this.data.files.length} files)`:this.data.file&&(e+=` (${this.data.file.name})`),this._messageElement.innerHTML=e},_addItems(e){for(let t=0;t<e.length;t++){const i=e[t].webkitGetAsEntry();i.isFile?this._addFile(e[t].getAsFile()):i.isDirectory&&this._addDirectory(i)}},_addDirectory(e,t=""){e.createReader().readEntries((e=>{for(let i=0;i<e.length;i++){const s=e[i];s.isFile?s.file((e=>{e.fullPath=t+e.name,this._addFile(e)})):s.isDirectory&&this._addDirectory(s,t+s.name+"/")}}))},_addFiles(e){for(let t=0;t<e.length;t++)this._addFile(e[t])},_addFile(e){if((this.props.imageMaxWidth||this.props.imageMaxHeight||this.props.imageType)&&!e.resized)return void this._resizeImage(e).then((e=>{this._addFile(e)}));this.$node.multiple?(this._form.dmxExtraData[this.$node.name]=this._form.dmxExtraData[this.$node.name]||[],this._form.dmxExtraData[this.$node.name].push(e)):(this._remove(),this._form.dmxExtraData[this.$node.name]=e),e._id=++this._cnt;const t=this,i={id:e._id,date:(e.lastModified?new Date(e.lastModified):e.lastModifiedDate).toISOString(),name:e.name,size:e.size,type:e.type,get dataUrl(){return e._reader||e._dataUrl||dmx.fileUtils.blobToDataURL(e).then((s=>{e._dataUrl=s,t.$node.multiple?t.set("files",t.data.files.map((e=>e.id==i.id?{...e,dataUrl:s}:e))):t.set("file",{...i,dataUrl:s})})).catch((e=>{console.error(e)})),null}};this.props.thumbs&&this._createThumb(e),e.type.includes("image/")&&!e._reader&&(e._reader=new FileReader,e._reader.onload=()=>{this.$node.multiple?this.set("files",this.data.files.map((t=>t.id==i.id?{...t,dataUrl:e._reader.result}:t))):this.set("file",{...i,dataUrl:e._reader.result})},e._reader.readAsDataURL(e)),this.$node.multiple?this.set("files",[...this.data.files,i]):this.set("file",i),this._dropzoneElement.dirty&&this._validate()},_remove(e){if(this.$node.multiple)if(e){const t=this.data.files.findIndex((t=>t.id==e));if(-1!=t){const e=this._form.dmxExtraData[this.$node.name][t]._thumb;e&&(e.remove(),URL.revokeObjectURL(e._objectURL)),this._form.dmxExtraData[this.$node.name].splice(t,1),this.set("files",[...this.data.files.slice(0,t),...this.data.files.slice(t+1)])}}else{if(Array.isArray(this._form.dmxExtraData[this.$node.name]))for(let e of this._form.dmxExtraData[this.$node.name]){const t=e._thumb;t&&(t.remove(),URL.revokeObjectURL(t._objectURL))}delete this._form.dmxExtraData[this.$node.name],this.set("files",[])}else if(this.data.file){const e=this._form.dmxExtraData[this.$node.name]._thumb;e&&(e.remove(),URL.revokeObjectURL(e._objectURL)),delete this._form.dmxExtraData[this.$node.name],this.set("file",null)}this._dropzoneElement.dirty&&this._validate()},_createThumb(e){const t=document.createElement("div");t.id="dmxDropzoneThumb"+e._id,t.className="dmxDropzoneThumb",t.style.width=this.props.thumbsWidth+"px",t.style.height=this.props.thumbsHeight+"px",t.title=e.name,t._objectURL=URL.createObjectURL(e),t.style.backgroundImage=`url(${t._objectURL})`,t.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation(),this._remove(e._id)}));const i=document.createElement("div");i.className="dmxDropzoneFilename",i.textContent=e.name,t.append(i);const s=document.createElement("div");s.className="dmxDropzoneFilesize",s.textContent=this._formatBytes(e.size),t.append(s),e._thumb=t,this._dropzoneElement.append(t)},_resizeImage(e){return e.resized=!0,new Promise((t=>{if(!e.type.startsWith("image/"))return void t(e);const i=URL.createObjectURL(e),s=new Image;s.src=i,s.onerror=()=>URL.revokeObjectURL(i),s.onload=()=>{URL.revokeObjectURL(i);const{imageMaxWidth:a,imageMaxHeight:r,imageType:n,imageQuality:d}=this.props;let o=s.width,l=s.height,h=o/l,m=!1;a&&o>a&&(o=a,l=~~(o/h),m=!0),r&&l>r&&(l=r,o=~~(l*h),m=!0);const p=n?this._imageTypes[n]:e.type;if(p!==e.type||m){const i=document.createElement("canvas"),a=i.getContext("2d");i.width=o,i.height=l,a.drawImage(s,0,0,o,l),i.toBlob((i=>{if(null==i)return console.error("Could not resize image!");const s=e.name.replace(/\.\w+$/,"."+this._imageExtensions[i.type]),a=new File([i],s,{type:i.type});t(a)}),p,d?d/100:void 0)}else t(e)}}))},_formatBytes(e){let t=0;for(;e>=1e3;)e/=1e3,t++;return e.toFixed(1)+["B","KB","MB","GB","TB"][t]},_clickHandler(e){this.$node.click()},_changeHandler(e){this._addFiles(e.target.files),this.$node.value="",this.$node.type="",this.$node.type="file",e&&this.dispatchEvent("changed"),dmx.nextTick((()=>this.dispatchEvent("updated")))},_dragoverHandler(e){e.preventDefault(),e.stopPropagation()},_dragenterHandler(e){e.preventDefault(),e.stopPropagation(),this._dropzoneElement.classList.add("dmxDropzoneHover")},_dragleaveHandler(e){this._dropzoneElement.classList.remove("dmxDropzoneHover")},_dropHandler(e){e.preventDefault(),e.stopPropagation(),this._dropzoneElement.classList.remove("dmxDropzoneHover"),e.dataTransfer.files.length&&(e.dataTransfer.items.length&&e.dataTransfer.items[0].webkitGetAsEntry?this._addItems(e.dataTransfer.items):this._addFiles(e.dataTransfer.files),this.dispatchEvent("change"))},_resetHandler(e){this._reset(),this.dispatchEvent("changed")}});
//# sourceMappingURL=dmxDropzone.js.map
