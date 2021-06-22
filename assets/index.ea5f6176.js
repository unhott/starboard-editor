import{r as e,s as n,g as a,c as o,v as t,a as s,t as l,f as r,i,d as c,e as d,b as u,h,j as f,F as v,k as b,w,p as m,l as g,o as p,m as _,n as k,T as C,q as y,u as F,S,x as U,y as A,z as D,A as N}from"./vendor.34f6841c.js";const P=e(),x=n(new Map),T=e(!1),E=e(!1),M=Promise.allSettled([a("notebook-files").then((e=>{if(e)for(const n of e.entries())x.set(n[0],n[1])}))]).then((e=>(T.value=!0,e)));function I(){async function e(e){var n;const a=e.id?x.get(e.id):void 0,o=/\.nb|\.sb/.test(e.name);await r(new Blob([e.content],{type:"text/plain"}),{fileName:o?e.name:e.name+".sb",extensions:[".sb",".nb"]},null==(n=null==a?void 0:a.fileHandle)?void 0:n.handle)}return{isLoaded:T,addFile:async function(e){if(await M,e.handle)for(const a of x.values())if(a.fileHandle.handle&&e.handle.isSameEntry(a.fileHandle.handle))return a.id;const n=t();return x.set(n,{id:n,name:e.name,fileHandle:e}),await s("notebook-files",l(x)),n},showFile:async function(e){await M;const n=x.get(e);if(!n)return;const a={id:n.id,name:n.name,content:await n.fileHandle.text()};P.value=a},saveFile:e,saveShownFile:async function(){try{const n=P.value;n&&(E.value=!1,await e(n))}catch(n){if("AbortError"===n.name)return;throw n}},shownNotebook:P,files:o((()=>Array.from(x.values()).map((e=>({id:e.id,name:e.name}))))),hasUnsavedChanges:E}}
/*!
License for brotli-wasm
@license
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

*/async function L(){const e=await i({"./brotli_wasm_bg.js":{__wbindgen_string_new:function(e,n){return r(t(e,n))},__wbg_new_59cb74e423758ede:function(){return r(new Error)},__wbg_stack_558ba5917b466edd:function(n,a){var t=function(e,n,a){var t;if(void 0===a){const a=g.encode(e),t=n(a.length);return o().subarray(t,t+a.length).set(a),u=a.length,t}let s=e.length,l=n(s);const r=o();let i=0;for(;i<s;i++){const n=e.charCodeAt(i);if(n>127)break;r[l+i]=n}if(i!==s){0!==i&&(e=e.slice(i)),l=a(l,s,s=i+3*e.length);const n=o().subarray(l+i,l+s);i+=null!=(t=p(e,n).written)?t:0}return u=i,l}(c(a).stack,e.__wbindgen_malloc,e.__wbindgen_realloc),s=u;v()[n/4+1]=s,v()[n/4+0]=t},__wbg_error_4bb6c2a97407129a:function(n,a){try{console.error(t(n,a))}finally{e.__wbindgen_free(n,a)}},__wbindgen_object_drop_ref:function(e){d(e)},__wbindgen_rethrow:function(e){throw d(e)}}});let n=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),a=null;function o(){return null!==a&&a.buffer===e.memory.buffer||(a=new Uint8Array(e.memory.buffer)),a}function t(e,a){return n.decode(o().subarray(e,e+a))}const s=new Array(32).fill(void 0);s.push(void 0,null,!0,!1);let l=s.length;function r(e){l===s.length&&s.push(s.length+1);const n=l;return l=s[n],s[n]=e,n}function c(e){return s[e]}function d(e){const n=c(e);return function(e){e<36||(s[e]=l,l=e)}(e),n}let u=0;function h(e,n){const a=n(1*e.length);return o().set(e,a/1),u=e.length,a}let f=null;function v(){return null!==f&&f.buffer===e.memory.buffer||(f=new Int32Array(e.memory.buffer)),f}function b(e,n){return o().subarray(e/1,e/1+n)}function w(n){try{const r=e.__wbindgen_add_to_stack_pointer(-16);var a=h(n,e.__wbindgen_malloc),o=u;e.compress(r,a,o);var t=v()[r/4+0],s=v()[r/4+1],l=b(t,s).slice();return e.__wbindgen_free(t,1*s),l}finally{e.__wbindgen_add_to_stack_pointer(16)}}function m(n){try{const r=e.__wbindgen_add_to_stack_pointer(-16);var a=h(n,e.__wbindgen_malloc),o=u;e.decompress(r,a,o);var t=v()[r/4+0],s=v()[r/4+1],l=b(t,s).slice();return e.__wbindgen_free(t,1*s),l}finally{e.__wbindgen_add_to_stack_pointer(16)}}let g=new TextEncoder;const p=g.encodeInto;const _=function(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-",n="_",a=new Uint8Array(256);for(let s=0;s<e.length;s++)a[e.charCodeAt(s)]=s;function o(a){let o="";for(let n=0;n<a.length;n+=3){const t=a[n+0],s=a[n+1],l=a[n+2];o+=e.charAt(t>>>2),o+=e.charAt((3&t)<<4|s>>>4),o+=e.charAt((15&s)<<2|l>>>6),o+=e.charAt(63&l)}return a.length%3==2?o=o.substring(0,o.length-1)+n:a.length%3==1&&(o=o.substring(0,o.length-2)+n),o}function t(e){let o=3*e.length>>>2;e.charCodeAt(e.length-1)===n.charCodeAt(0)&&o--,e.charCodeAt(e.length-2)===n.charCodeAt(0)&&o--;const t=new Uint8Array(o);for(let n=0,s=0;n<e.length;n+=4){const o=a[e.charCodeAt(n+0)],l=a[e.charCodeAt(n+1)],r=a[e.charCodeAt(n+2)],i=a[e.charCodeAt(n+3)];if(void 0===o||void 0===l||void 0===r||void 0===i)throw new Error("Non-base64 character");t[s++]=o<<2|l>>4,t[s++]=(15&l)<<4|r>>2,t[s++]=(3&r)<<6|63&i}return t}return{encode:o,decode:t}}(),k="bw1";return{name:k,compress:w,decompress:m,compressForUrl:function(e){const n=w((new TextEncoder).encode(e));return"bw1@"+_.encode(n)},decompressFromUrl:function(e){const n=e.indexOf("@");if(-1==n)return"";const a=e.substring(0,n),o=e.substring(n+1);if(a===k){const e=m(_.decode(o));return new TextDecoder("utf-8").decode(e)}return""}}}const H=e(!1);let O=null,j=null;function R(){function e(){return new Promise(((e,n)=>{O=e,j=n,H.value=!0}))}return{isShowing:H,closeCallback:function(e){if(H.value=!1,"ok"===e&&O)O(e);else if("discard"===e&&O)O(e);else if("cancel"===e&&O)O(e);else{if(!j)throw new Error("Something went wrong with the unsaved changes modal");j("Unknown status "+e)}},showModal:e,showIfUnsavedChanges:async function(n){if(n.hasUnsavedChanges.value){const a=await e();if("ok"===a)await n.saveShownFile();else if("discard"===a);else if("cancel"===a)return!1}return!0}}}var B=c({components:{},setup(n,a){d||console.log("Native Filesystem API not supported, please nicely ask your local browser vendor");const o=I(),t=R();let s=null;const l=e(!1);return{openFile:async function(){if(await t.showIfUnsavedChanges(o))try{const e=await u({extensions:[".md",".sb",".nb"],multiple:!0}),n=await Promise.allSettled(e.map((e=>o.addFile(e)))),a=n.find((e=>"fulfilled"===e.status));"fulfilled"===(null==a?void 0:a.status)?await o.showFile(a.value):console.warn(n)}catch(e){if("AbortError"!==e.name)return console.error(e);console.warn(e)}},saveShownFile:function(){return o.saveShownFile()},files:o.files,showFile:async function(e){await t.showIfUnsavedChanges(o)&&await o.showFile(e)},shareNotebook:async function(){const e=o.shownNotebook.value;if(null===s&&(s=await L()),e){const n=s.compressForUrl(e.content);let a=new URLSearchParams(window.location.search);a.set("notebook",n),a.set("c","true"),a.set("name",e.name);const o=location.protocol+"//"+location.host+location.pathname+"?"+a+location.hash;navigator.clipboard.writeText(o).then((function(){l.value=!0,setTimeout((()=>{l.value&&(l.value=!1)}),1e3)}),(function(){}))}},showSharePopup:l}}});const z=w();m("data-v-d2fd87be");const W={class:"menu sidebar"},q=f("p",{class:"menu-label"},"General",-1),G={class:"menu-list"},V=f("p",{class:"menu-label"},"Files",-1),J={class:"menu-list"};g();const K=z(((e,n,a,o,t,s)=>(p(),h("div",null,[f("aside",W,[q,f("ul",G,[f("li",null,[f("button",{class:"button is-small is-fullwidth",onClick:n[1]||(n[1]=(...n)=>e.openFile&&e.openFile(...n))}," Open File ")]),f("li",null,[f("button",{class:"button is-small is-fullwidth",onClick:n[2]||(n[2]=(...n)=>e.saveShownFile&&e.saveShownFile(...n))}," Save File ")]),f("li",null,[f("button",{class:["button is-small is-fullwidth",{"share-popup":e.showSharePopup}],onClick:n[3]||(n[3]=(...n)=>e.shareNotebook&&e.shareNotebook(...n))}," Share Notebook ",2)])]),V,f("ul",J,[(p(!0),h(v,null,b(e.files,(n=>(p(),h("li",{key:n.id},[f("a",{onClick:a=>e.showFile(n.id)},_(n.name),9,["onClick"])])))),128))])])]))));B.render=K,B.__scopeId="data-v-d2fd87be";var Q=c({components:{},emits:{close:e=>!0},setup:(e,n)=>({emit:n.emit})});const X=w();m("data-v-063995ba");const Y={class:"modal is-active"},Z={class:"modal-card"},$=f("header",{class:"modal-card-head"},[f("p",{class:"modal-card-title"},"Unsaved Changes")],-1),ee=f("section",{class:"modal-card-body"}," Do you want to save the changes to this notebook? ",-1),ne={class:"modal-card-foot"},ae=f("div",{style:{"flex-grow":"1"}},null,-1);g();const oe=X(((e,n,a,o,t,s)=>(p(),h(C,{to:"#modal"},[f("div",Y,[f("div",{class:"modal-background",onClick:n[1]||(n[1]=k((n=>e.emit("close","cancel")),["self"]))}),f("div",Z,[$,ee,f("footer",ne,[f("button",{class:"button is-success",onClick:n[2]||(n[2]=n=>e.emit("close","ok"))}," Save "),f("button",{class:"button is-danger",onClick:n[3]||(n[3]=n=>e.emit("close","discard"))}," Discard "),ae,f("button",{class:"button",onClick:n[4]||(n[4]=n=>e.emit("close","cancel"))}," Cancel ")])])])]))));Q.render=oe,Q.__scopeId="data-v-063995ba";let te=!1;window.addEventListener("beforeunload",(function(e){te&&(e.preventDefault(),e.returnValue="Unsaved Changes")}));var se=c({components:{SideBar:B,UnsavedChangesModal:Q},setup(){const n=e(),o=e(!0),t=e(!1),r=R(),i={getParam:function(e){return new URLSearchParams(window.location.search).get(e)},setParam:function(e,n){let a=new URLSearchParams(window.location.search);n?a.set(e,n):a.delete(e),history.pushState(void 0,"",location.protocol+"//"+location.host+location.pathname+"?"+a+location.hash)}};let c=async function(e){var n,o,t;const s=e.getParam("c");let l={name:null!=(n=e.getParam("name"))?n:"Untitled",content:""};if(s){const n=await L();l.content=n.decompressFromUrl(null!=(o=e.getParam("notebook"))?o:"")}else l.content=null!=(t=e.getParam("notebook"))?t:"";if(!l.content){const e=await a("last-notebook");e&&e.name&&e.content&&(l.name=e.name+"",l.content=e.content+"")}return l}(i);const d=I();c.then((e=>{d.shownNotebook.value=e})),y((()=>te=d.hasUnsavedChanges.value)),F([n,d.shownNotebook],(([e,n])=>{var a;!function(e,n){e&&(e.innerHTML="",e.appendChild(new S({notebookContent:n,autoResize:!1,onSaveMessage:e=>{d.shownNotebook.value&&e.content&&(d.shownNotebook.value.content=e.content),d.saveShownFile()},onContentUpdateMessage:e=>{d.hasUnsavedChanges.value=!0,i.setParam("notebook",void 0),i.setParam("c",void 0),i.setParam("name",void 0),d.shownNotebook.value&&e.content&&(d.shownNotebook.value.content=e.content)},src:"https://unpkg.com/starboard-notebook@0.12.1/dist/index.html"})))}(e,null!=(a=null==n?void 0:n.content)?a:"")}),{immediate:!0});const u=U((e=>{s("last-notebook",l(e))}),500,{middle:!1});return F(d.shownNotebook,(e=>{u(e)}),{immediate:!0,deep:!0}),{starboardWrapContainer:n,showSidebar:o,newFile:async function(){await r.showIfUnsavedChanges(d)&&(d.shownNotebook.value={name:"Untitled",content:""},d.hasUnsavedChanges.value=!1)},unsavedChangesModal:r,saveShownFile:function(){return d.saveShownFile()},onDragEnter:function(e){t.value=!0,e.preventDefault()},onDragLeave:function(e){t.value=!1,e.preventDefault()},onDragDrop:function(e){if(t.value=!1,e.preventDefault(),e.dataTransfer)if(console.log(e.dataTransfer),e.dataTransfer.items){for(let a=0;a<e.dataTransfer.items.length;a++)if("file"===e.dataTransfer.items[a].kind){var n=e.dataTransfer.items[a].getAsFile();console.log("... file["+a+"].name = "+(null==n?void 0:n.name))}}else for(let a=0;a<e.dataTransfer.files.length;a++)console.log("... file["+a+"].name = "+e.dataTransfer.files[a].name)},isDraggingOver:t}}});const le=w();m("data-v-79d0594c");const re={class:"navbar is-transparent"},ie=f("span",{"aria-hidden":"true"},null,-1),ce=f("span",{"aria-hidden":"true"},null,-1),de=f("span",{"aria-hidden":"true"},null,-1),ue={class:"navbar-item has-dropdown is-hoverable"},he=f("a",{class:"navbar-link"}," File ",-1),fe={class:"navbar-dropdown is-boxed"},ve=f("a",{class:"navbar-item"}," Open File ",-1),be=f("hr",{class:"navbar-divider"},null,-1),we=f("a",{class:"navbar-item"}," Share ",-1),me=f("hr",{class:"navbar-divider"},null,-1),ge=f("a",{class:"navbar-item"}," Export Markdown ",-1),pe={ref:"starboardWrapContainer",class:"starboard-container column"};g();const _e=le(((e,n,a,o,t,s)=>{const l=D("side-bar"),r=D("unsaved-changes-modal");return p(),h(v,null,[f("nav",re,[f("a",{role:"button",class:["navbar-burger menu-burger",{"is-active":e.showSidebar}],onClick:n[1]||(n[1]=n=>e.showSidebar=!e.showSidebar),"aria-label":"menu","aria-expanded":"false"},[ie,ce,de],2),f("div",ue,[he,f("div",fe,[f("a",{class:"navbar-item",onClick:n[2]||(n[2]=n=>e.newFile())}," New File "),ve,be,f("a",{class:"navbar-item",onClick:n[3]||(n[3]=(...n)=>e.saveShownFile&&e.saveShownFile(...n))}," Save "),we,me,ge])])]),f("div",{class:["columns is-gapless full-height",[e.isDraggingOver?"dragover":""]],onDragover:[n[4]||(n[4]=(...n)=>e.onDragEnter&&e.onDragEnter(...n)),n[6]||(n[6]=k((()=>{}),["prevent"]))],onDragleave:n[5]||(n[5]=(...n)=>e.onDragLeave&&e.onDragLeave(...n)),onDrop:n[7]||(n[7]=(...n)=>e.onDragDrop&&e.onDragDrop(...n))},[f(l,{class:["column is-one-fifth side-bar",{"show-sidebar":e.showSidebar}]},null,8,["class"]),f("div",pe,null,512),f("div",{class:["column is-one-fifth",{"is-hidden":!e.showSidebar}]},null,2)],34),e.unsavedChangesModal.isShowing.value?(p(),h(r,{key:0,onClose:n[8]||(n[8]=n=>e.unsavedChangesModal.closeCallback(n))})):A("",!0)],64)}));se.render=_e,se.__scopeId="data-v-79d0594c";console.log("starboard-editor - 0.0.6"),N(se).mount("#app");
