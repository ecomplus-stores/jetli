/*! For license information please see chunk.8440a7c5067f400b5fc7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{175:function(t,e,s){"use strict";s(185)},182:function(t,e,s){"use strict";var a={name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter(){return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find((({path:t})=>t===this.href))))}}},i=s(50),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.isRouter?"router-link":"a",{tag:"component",attrs:{href:t.isRouter?null:t.href,to:t.isRouter?t.to||t.href:null}},[t._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},183:function(t,e,s){"use strict";s(12);var a=s(25),i=s(87),r=s(66);var n={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:()=>({zoom:null,big:800,[a.$ecomConfig.get("default_img_size")||"normal"]:400})},lozadOptions:{type:Object,default:()=>({rootMargin:"350px 0px",threshold:0})}},data:()=>({sources:[],height:null,opacity:null}),computed:{defaultImgObj(){return"object"==typeof this.src&&this.src?Object(i.a)(this.src)||this.src:{}},localFallbackSrc(){const{src:t,defaultImgObj:e,fallbackSrc:s}=this;if(s)return s;const a="object"==typeof t?t.zoom?t.zoom.url:e.url:t;return a?a.replace(/\.webp$/,""):this.placeholder},localAlt(){const{alt:t,src:e,defaultImgObj:s}=this;return t||(e?s.alt||"Product":"No image")}},methods:{updateSources(){const t=[];let e;if("object"==typeof this.src){const{clientWidth:t,clientHeight:s}=this.$el,a=((t,e,s,a)=>{let i,r;for(const n in a){const o=a[n];if(void 0!==o&&t[n]){if(void 0!==r)if(null===o){if(r>=e)continue}else if(o<e||o-50<=s||null!==r&&o>r)continue;i=n,r=o}}return i})(this.src,t,s,this.containerBreakpoints),i=this.src[a],{url:r,size:n}=i||this.defaultImgObj;if(e=r,t&&n&&this.canCalcHeight){const[e,s]=n.split("x").map((t=>parseInt(t,10)));s&&(this.height=`${t>=e?s:t*s/e}px`)}}else e=this.src;e&&(e.endsWith(".webp")?t.push({srcset:e,type:"image/webp"},{srcset:/\/imgs\/[0-9]{3}px/.test(e)?e.replace(/\/imgs\/[0-9]{3}px/,""):e.replace(/\.webp$/,""),type:"image/"+(".png"===e.substr(-9,4)?"png":"jpeg")}):t.push({srcset:e})),this.sources=t}},mounted(){this.updateSources(),this.$nextTick((()=>{const t=this.$el;Object(r.a)(t,{...this.lozadOptions,loaded:t=>{const{localFallbackSrc:e}=this,s="IMG"===t.tagName?t:t.lastChild;s.style.opacity=0,s.onerror=function(){console.error(new Error("Image load error"),this),t.style.display="none";const s=document.createElement("IMG");s.src=e,t.parentNode.insertBefore(s,t.nextSibling)},s.onload=()=>{this.opacity=0,t.classList.add("loaded"),this.$nextTick((()=>{this.opacity=s.style.opacity=null,this.$emit("load")}))}}}).observe()}))}},o=(s(175),s(50)),l=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var a=t.srcset,i=t.type;return s("source",{key:e,attrs:{srcset:a,type:i}})})):s("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null);e.a=l.exports},184:function(t,e,s){"use strict";var a=s(26),i=s(42),r=s(43),n=s(44),o=s(78);const l=(t,e)=>{const{type:s,value:a}=e;if(a)return"percentage"===s?t*(100-a)/100:t-a};var c={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,isAmountTotal:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""}},data(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0},discountLabel:this.discountText}},computed:{i19asOf:()=>Object(i.a)(a.n),i19from:()=>Object(i.a)(a.tb),i19interestFree:()=>Object(i.a)(a.Fb),i19of:()=>Object(i.a)(a.lc),i19to:()=>Object(i.a)(a.zd),i19upTo:()=>Object(i.a)(a.Hd),price(){const t=Object(r.a)(this.product);return this.extraDiscount.value?l(t,this.extraDiscount):t},comparePrice(){return Object(n.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(r.a)(this.product):void 0},hasVariedPrices(){const{variations:t}=this.product;if(t){const e=Object(r.a)(this.product);for(let s=0;s<t.length;s++){if(Object(r.a)({...this.product,...t[s]})>e)return!0}}return!1},priceWithDiscount(){return l(this.price,this.discount)},installmentValue(){if(this.installmentsNumber>=2){if(this.monthlyInterest){const t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:o.a,updateInstallments(t){if(t){this.monthlyInterest=t.monthly_interest;const e=t.min_installment||5,s=parseInt(this.price/e,10);this.installmentsNumber=Math.min(s,t.max_number)}},updateDiscount(t){!t||t.min_amount&&!(t.min_amount<=this.price)||this.isAmountTotal&&"total"!==t.apply_at||(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel=`via ${t.label}`))}},watch:{price:{handler(t){this.$emit("fix-price",t)},immediate:!0}},created(){const t="object"==typeof window&&window.storefront;if(this.discountOption)this.updateDiscount(this.discountOption);else if(t){const e=()=>{const e=t.info&&t.info.apply_discount;if(e){const t=e.available_extra_discount;return t&&(this.extraDiscount=t),Object.keys(e).length>0}return!1};e()||t.on("info:apply_discount",e)}if(this.installmentsOption)this.updateInstallments(this.installmentsOption);else if(t){const e=()=>{const e=t.info&&t.info.list_payments;return!!e&&(this.updateInstallments(e.installments_option),this.updateDiscount(e.discount_option),Object.keys(e).length>0)};e()||t.on("info:list_payments",e)}}},d=(s(175),s(50)),u=Object(d.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?s("span",{staticClass:"prices__compare"},[t.isLiteral?[s("small",[t._v(" "+t._s(t.i19from)+" ")]),s("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),s("small",[t._v(" "+t._s(t.i19to)+" ")])]:s("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),s("strong",{staticClass:"prices__value"},[t.hasVariedPrices?s("small",[t._v(" "+t._s(t.i19asOf)+" ")]):t._e(),t._v(" "+t._s(t.formatMoney(t.price))+" ")]),s("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.installmentsNumber>1?s("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?s("small",[t._v(" "+t._s(t.i19upTo)+" ")]):t._e(),t._v(" "+t._s(t.installmentsNumber)+"x "),t.isLiteral?s("small",[t._v(" "+t._s(t.i19of)+" ")]):t._e(),s("span",[t._v(" "+t._s(t.formatMoney(t.installmentValue))+" ")]),!t.monthlyInterest&&t.isLiteral?s("small",[t._v(" "+t._s(t.i19interestFree)+" ")]):t._e()]):t._e(),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?s("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[s("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")]),s("small",{staticClass:"prices__discount-label"},[t._v(" "+t._s(t.discountLabel)+" ")])]:[s("small",[t._v(" "+t._s(t.i19asOf)+" ")]),s("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")])]],2):t._e()])],1)}),[],!1,null,null,null);e.a=u.exports},185:function(t,e,s){var a=s(208);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(174).default)("fd5c67d2",a,!0,{})},208:function(t,e,s){(e=s(173)(!1)).push([t.i,"",""]),t.exports=e},236:function(t,e,s){var a=s(249);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(174).default)("47fe50f4",a,!0,{})},248:function(t,e,s){"use strict";s(236)},249:function(t,e,s){(e=s(173)(!1)).push([t.i,".summary__item{display:flex;align-items:flex-start;overflow-x:hidden;margin-bottom:.5rem}.summary__item a{color:inherit}.summary__item picture{flex:0 0 70px;width:70px;height:auto;margin-right:.5rem}.summary__item picture img{border-radius:var(--border-radius)}.summary__item small{line-height:1.3;display:inline-block}.summary__amount{margin:1rem 0 1.5rem;padding:.75rem 0;border-top:1px dotted var(--gray)}.summary__amount:last-child{margin-bottom:0;padding-bottom:0}.summary__amount__row{display:flex;justify-content:space-between;align-items:center;margin-top:.25rem}.summary__amount__row>span{font-weight:300}.summary__amount__row>span small{display:block;line-height:1.15;color:var(--gray)}.summary__amount__row--total{margin-top:.5rem;font-size:1.25rem}.summary__amount__row--total>div{font-weight:700}.summary__amount__row--total strong{color:var(--secondary)}.summary .prices{text-align:right}",""]),t.exports=e},254:function(t,e,s){"use strict";var a=s(26),i=s(42),r=s(78),n=s(45),o=s(3),l=s(51),c=s(7),d=s(64),u=s(233),_=s(255),m={name:"EcOrderInfo",components:{ShippingLine:u.a,EcSummary:_.a},props:{order:{type:Object,required:!0},isNew:Boolean,skipDataLoad:Boolean,skipFirstDataLoad:Boolean,skipCustomerUpdate:Boolean,accountOrdersUrl:{type:String,default:"/app/#/account/orders"},cartUrl:{type:String,default:"/app/#/cart"},ecomCart:{type:Object,default:()=>c.a},ecomPassport:{type:Object,default:()=>l.a}},data(){return{isLoaded:this.skipDataLoad||this.skipFirstDataLoad,isUpdating:!1,reloadInterval:null,orderBody:this.order,canReopenOrder:!1}},computed:{i19buyAgain:()=>Object(i.a)(a.t),i19cancelOrder:()=>Object(i.a)(a.z),i19codeCopied:()=>Object(i.a)(a.K),i19copyCode:()=>Object(i.a)(a.T),i19copyErrorMsg:()=>Object(i.a)(a.U),i19doPaymentMsg:()=>Object(i.a)(a.cb),i19freight:()=>Object(i.a)(a.sb),i19login:()=>Object(i.a)(a.Ob),i19loginForOrderDetailsMsg:()=>Object(i.a)(a.Qb),i19myOrders:()=>Object(i.a)(a.Yb),i19of:()=>Object(i.a)(a.lc),i19orderConfirmationMsg:()=>Object(i.a)(a.sc),i19orderNumber:()=>Object(i.a)(a.uc),i19printBillet:()=>Object(i.a)(a.Fc),i19redirectToPayment:()=>Object(i.a)(a.Mc),i19referenceCode:()=>Object(i.a)(a.Oc),i19reopenOrder:()=>Object(i.a)(a.Uc),i19shippingAddress:()=>Object(i.a)(a.qd),i19transactionCode:()=>Object(i.a)(a.Cd),i19ticketCode:()=>Object(i.a)(a.yd),i19trackDelivery:()=>Object(i.a)(a.Bd),i19zipCode:()=>Object(i.a)(a.Od),localOrder:{get(){return this.orderBody},set(t){this.orderBody=t,this.$emit("update:order",t),this.saveCustomerOrder()}},hasManyTransactions(){const{transactions:t}=this.localOrder;return t&&t.length>1},transaction(){const{transactions:t}=this.localOrder;return t&&t.length?t[0]:{}},shippingAddress(){const{localOrder:t}=this;if(t.shipping_lines&&t.shipping_lines.length)return t.shipping_lines[0].to},canShowShippingAddress(){const{localOrder:t,shippingAddress:e}=this;return!(!e||!e.street)&&!/(retira|pick\s?up|e-?mail)/i.test(t.shipping_method_label)},status(){return this.localOrder.status},financialStatus(){const{localOrder:t,transaction:e}=this;if(t.payments_history){let e;if(t.payments_history.forEach((t=>{t&&(!e||!t.date_time||t.date_time>=e.date_time)&&(e=t)})),e)return e.status}const s=t.financial_status&&t.financial_status.current;return s||(e&&e.status?e.status.current:"pending")},fulfillmentStatus(){const{localOrder:t}=this,e=t.fulfillment_status&&t.fulfillment_status.current;if(e)return e;{const e=t.shipping_lines&&t.shipping_lines[0];if(e&&e.status)return e.status.current}return null},statusEntries(){const t=[];let e=[];return["payments_history","fulfillments"].forEach((t=>{Array.isArray(this.localOrder[t])&&(e=e.concat(this.localOrder[t]))})),e.length&&(e=e=e.sort(((t,e)=>t.date_time&&e.date_time?t.date_time>e.date_time?-1:1:0)),e.forEach(((s,a)=>{a>0&&s.status===e[a-1].status||t.push(s)}))),t},isAuthenticated(){return this.ecomPassport.checkAuthorization()}},methods:{i19FinancialStatus:t=>Object(i.a)(a.a)[t],i19FulfillmentStatus:t=>Object(i.a)(a.b)[t],i19OrderStatus:t=>Object(i.a)(a.e)[t],formatMoney:r.a,formatDate:n.a,formatTime(t){const e=Date.parse(t);return new Date(e).toLocaleTimeString()},toClipboard(t){this.$copyText(t).then((()=>{this.$toast({title:this.i19codeCopied,body:t,variant:"success",delay:2e3})}),(e=>{console.error(e),this.$toast({title:"Oops",body:`${this.i19copyErrorMsg}: <i>${t}</i>`,variant:"warning",delay:3e3})}))},saveCustomerOrder(){const{localOrder:t,ecomPassport:e}=this;!this.skipCustomerUpdate&&t.number&&e.checkAuthorization()&&e.requestApi("/me.json").then((({data:s})=>{const a=s.orders||[],i={};["_id","created_at","number","currency_id","currency_symbol","amount","payment_method_label","shipping_method_label"].forEach((e=>{t[e]&&(i[e]=t[e])}));const r=a.findIndex((({_id:e,number:s})=>e===t._id||s===t.number));r>-1?Object.assign(a[r],i):a.push(i),e.requestApi("/me.json","patch",{orders:a})}))},buyAgain(){const{localOrder:t}=this;if(t.items){const{items:e}=t;c.a.clear(),e.forEach(((t,s)=>{c.a.addItem(t,!1),s+1===e.length&&(c.a.save(),window.location=this.cartUrl)}))}},toggle(){this.isUpdating=!0;const t="open"===this.localOrder.status?{status:"cancelled",cancel_reason:"customer"}:{status:"open"};l.a.requestApi(`/orders/${this.order._id}.json`,"patch",t).then((()=>{this.localOrder={...this.localOrder,...t}})).finally((()=>{this.isUpdating=!1}))}},watch:{isLoaded:{handler(t){if(t&&this.isAuthenticated&&"cancelled"===this.status){const{items:t}=this.localOrder;if(t&&t.length){const e=t.map((t=>t.product_id)),s=new d.a;s.setPageSize(e.length).setProductIds(e).fetch(!0).then((()=>{for(let e=0;e<t.length;e++){const a=t[e],i=s.getItems().find((({_id:t})=>t===a.product_id));if(i){if(a.variation_id&&i.variations){const t=i.variations.find((({sku:t})=>t===a.sku));if(t&&t.quantity>=a.quantity)continue}if(i.quantity>=a.quantity)continue}return void(this.canReopenOrder=!1)}this.canReopenOrder=!0})).catch(console.error)}}},immediate:!0}},created(){if(this.order._id&&(this.isNew&&this.saveCustomerOrder(),!this.skipDataLoad)){const t=`/orders/${this.order._id}.json`,e=()=>(this.ecomPassport.checkAuthorization()?this.ecomPassport.requestApi(t):Object(o.g)({url:t})).then((({data:t})=>{this.localOrder={...this.localOrder,...t}})).catch((t=>{console.error(t)}));this.reloadInterval=setInterval(e,9e3),this.skipFirstDataLoad||setTimeout((()=>{e().finally((()=>{this.isLoaded=!0}))}),this.isNew?1e3:3e3)}},beforeDestroy(){clearInterval(this.reloadInterval)}},p=(s(340),s(50)),f=Object(p.a)(m,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order-info py-4"},[t.isNew?s("div",{staticClass:"order-info__new"},[t._v(" "+t._s(t.i19orderConfirmationMsg)+"! ")]):t._e(),s("transition-group",{attrs:{"enter-active-class":"animated fadeInDown slower"}},[t.isLoaded?s("div",{key:"loaded"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-5 col-lg-3"},[s("h2",{staticClass:"order-info__number"},[s("small",[t._v(t._s(t.i19orderNumber)+":")]),t._v(" #"),s("span",[t._v(t._s(t.localOrder.number))])]),s("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp fast"}},[t.isUpdating||"cancelled"!==t.status?t._e():s("p",{staticClass:"order-info__cancelled h3"},[t._v(" "+t._s(t.i19OrderStatus(t.status))+" "),s("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[t.canReopenOrder?s("button",{staticClass:"order-info__toggle btn",class:"cancelled"===t.status?"btn-success":"btn-info",on:{click:t.toggle}},[s("i",{staticClass:"fas fa-check-circle mr-1"}),t._v(" "+t._s(t.i19reopenOrder)+" ")]):t._e()])],1)]),t.statusEntries.length?s("ul",{staticClass:"order-info__timeline"},t._l(t.statusEntries,(function(e,a){return s("li",{key:"status-"+a,staticClass:"order-info__timeline-status",class:"order-info__timeline-status--"+e.status},[e.date_time?s("div",{staticClass:"order-info__timeline-date"},[t._v(" "+t._s(t.formatDate(e.date_time))+" "+t._s(t.formatTime(e.date_time))+" ")]):t._e(),t._v(" "+t._s(t.i19FinancialStatus(e.status)||t.i19FulfillmentStatus(e.status))+" ")])})),0):t._e(),t.accountOrdersUrl?s("a",{staticClass:"order-info__orders-link d-none d-md-block btn btn-light",attrs:{href:t.accountOrdersUrl}},[s("i",{staticClass:"fas fa-chevron-left mr-1"}),t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1),s("div",{staticClass:"col-md-7 col-lg-9"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("article",[t.transaction.status&&"pending"===t.transaction.status.current?[t.transaction.banking_billet?s("div",{staticClass:"order-info__billet"},[s("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19doPaymentMsg)+" ")]),t.transaction.banking_billet.code?[s("p",[t._v(" "+t._s(t.i19ticketCode)+": "),s("br"),s("samp",[t._v(t._s(t.transaction.banking_billet.code))])]),s("button",{staticClass:"btn btn-outline-primary mr-3",on:{click:function(){return t.toClipboard(t.transaction.banking_billet.code)}}},[s("i",{staticClass:"fas fa-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]:t._e(),t.transaction.banking_billet.link?s("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",href:t.transaction.banking_billet.link}},[s("i",{staticClass:"fas fa-print mr-1"}),t._v(" "+t._s(t.i19printBillet)+" ")]):t._e()],2):t.transaction.payment_link?s("div",{staticClass:"order-info__redirect"},[s("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19doPaymentMsg)+" ")]),s("a",{staticClass:"btn btn-lg btn-success",attrs:{target:"_blank",href:t.transaction.payment_link}},[s("i",{staticClass:"fas fa-arrow-right mr-1"}),t._v(" "+t._s(t.i19redirectToPayment)+" ")])]):t._e()]:t._e(),s("div",{staticClass:"order-info__details"},[t._t("payment",[s("div",{staticClass:"order-info__payment card"},[s("div",{staticClass:"card-header"},[s("span",{staticClass:"order-info__financial-status",class:"order-info__financial-status--"+t.financialStatus},[s("i",{staticClass:"fas fa-money-check mr-1"}),t._v(" "+t._s(t.i19FinancialStatus(t.financialStatus))+" ")])]),t._l(t.localOrder.transactions,(function(e){return s("div",{key:"t-"+e._id,staticClass:"card-body"},[s("p",{staticClass:"order-info__payment-value"},[e.payment_method.name?[t._v(" "+t._s(e.payment_method.name)+": ")]:t.localOrder.payment_method_label?[t._v(" "+t._s(t.localOrder.payment_method_label)+": ")]:t._e(),e.installments&&e.installments.value?s("strong",[t._v(" "+t._s(e.installments.number)+"x "+t._s(t.i19of.toLowerCase())+" "+t._s(t.formatMoney(e.installments.value))+" ")]):s("strong",[t._v(" "+t._s(t.formatMoney(e.amount||t.localOrder.amount.total))+" ")]),t.hasManyTransactions&&e.status?[s("br"),s("span",{staticClass:"text-muted"},[t._v(" "+t._s(t.i19FinancialStatus(e.status.current))+" ")])]:t._e()],2),e.notes?s("p",{staticClass:"order-info__payment-notes alert alert-warning",attrs:{role:"alert"},domProps:{innerHTML:t._s(e.notes)}}):t._e(),e.credit_card?s("p",{staticClass:"order-info__credit-card"},[t._v(" "+t._s(e.credit_card.company)+" "),e.credit_card.last_digits?s("span",[e.credit_card.company?t._e():s("span",[t._v(" "+t._s(t.i19cardNumber)+" ")]),t._v(" **** "+t._s(e.credit_card.last_digits)+" ")]):t._e()]):t._e(),e.intermediator?[e.intermediator.transaction_code?s("div",{staticClass:"order-info__transaction-code"},[s("small",[t._v(t._s(t.i19transactionCode))]),s("br"),s("code",[t._v(t._s(e.intermediator.transaction_code))]),s("br"),s("button",{staticClass:"btn btn-sm btn-light",on:{click:function(){return t.toClipboard(e.intermediator.transaction_code)}}},[s("i",{staticClass:"fas fa-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]):t._e(),e.intermediator.transaction_reference?s("div",{staticClass:"order-info__transaction-reference"},[s("small",[t._v(t._s(t.i19referenceCode))]),s("br"),t._v(" "+t._s(e.intermediator.transaction_reference)+" ")]):t._e()]:t._e()],2)}))],2)],null,{order:t.localOrder,transaction:t.transaction,financialStatus:t.financialStatus}),t._t("shipping",[s("div",{staticClass:"order-info__shipping"},[t._l(t.localOrder.shipping_lines,(function(e){return s("div",{key:"s-"+e._id,staticClass:"order-info__shipping-freight card"},[s("div",{staticClass:"card-header"},[t.fulfillmentStatus?s("span",{staticClass:"order-info__fulfillment-status",class:"order-info__fulfillment-status--"+t.fulfillmentStatus},[s("i",{staticClass:"fas fa-truck mr-1"}),t._v(" "+t._s(t.i19FulfillmentStatus(t.fulfillmentStatus))+" ")]):[s("i",{staticClass:"fas fa-truck mr-1"}),t._v(" "+t._s(t.i19freight)+" ")]],2),s("div",{staticClass:"card-body"},[e.app?s("span",[t._v(" "+t._s(e.app.label)+" ")]):t._e(),s("shipping-line",{attrs:{"shipping-line":e}}),e.tracking_codes?s("div",{staticClass:"order-info__shipping-tracking"},[s("hr"),s("div",{staticClass:"text-muted"},[t._v(" "+t._s(t.i19trackDelivery)+": ")]),t._l(e.tracking_codes,(function(e,a){return s("samp",{key:"track-"+a},[e.link?s("a",{attrs:{href:""+e.link,target:"_blank"}},[t._v(" "+t._s(e.code)+" ")]):s("span",[t._v(" "+t._s(e.code)+" ")])])}))],2):t._e()],1)])})),t.canShowShippingAddress?s("div",{staticClass:"order-info__shipping-address card"},[s("div",{staticClass:"card-header"},[s("i",{staticClass:"fas fa-map-marked-alt mr-1"}),t._v(" "+t._s(t.i19shippingAddress)+" ")]),s("address",{staticClass:"card-body mb-0"},[t._v(" "+t._s(t.shippingAddress.street)+" "),t.shippingAddress.number?[t._v(" "+t._s(t.shippingAddress.number)+" ")]:t._e(),s("br"),t._l(["borough","city","province_code"],(function(e,a){return t.shippingAddress[e]?s("span",{key:e},[t._v(" "+t._s(t.shippingAddress[e]+(2===a?".":","))+" ")]):t._e()})),s("br"),s("span",[t._v(" "+t._s(t.i19zipCode)+": "),s("samp",[t._v(t._s(t.shippingAddress.zip))])])],2)]):t._e()],2)],null,{order:t.localOrder,shippingAddress:t.shippingAddress,fulfillmentStatus:t.fulfillmentStatus})],2),t.isAuthenticated?t._e():s("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19loginForOrderDetailsMsg)+" "),s("br"),s("a",{staticClass:"btn btn-primary mt-2",attrs:{href:t.accountOrdersUrl}},[s("i",{staticClass:"fas fa-user mr-1"}),t._v(" "+t._s(t.i19login)+" ")])])],2)]),t.localOrder.amount?s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"order-info__summary card"},[s("div",{staticClass:"card-body"},[s("ec-summary",{attrs:{amount:t.localOrder.amount,items:t.localOrder.items,buyer:t.localOrder.buyer&&t.localOrder.buyer[0],shippingAddress:t.shippingAddress}})],1)]),t.isUpdating||"open"!==t.status||t.fulfillmentStatus?t._e():s("button",{staticClass:"order-info__toggle btn btn-danger",on:{click:t.toggle}},[s("i",{staticClass:"fas fa-exclamation-triangle mr-1"}),t._v(" "+t._s(t.i19cancelOrder)+" ")]),t._t("buy",[s("button",{staticClass:"order-info__buy-again btn",class:t.isNew?"btn-outline-secondary":"btn-primary",attrs:{type:"button"},on:{click:t.buyAgain}},[s("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" "+t._s(t.i19buyAgain)+" ")])])],2):t._e()])])])]):s("div",{key:"loading"},[s("div",{staticClass:"spinner-border",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])])])]),t.accountOrdersUrl?s("a",{staticClass:"order-info__orders-link d-md-none btn btn-light",attrs:{href:t.accountOrdersUrl}},[s("i",{staticClass:"fas fa-chevron-left mr-1"}),t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1)}),[],!1,null,null,null);e.a=f.exports},255:function(t,e,s){"use strict";var a=s(26),i=s(42),r=s(89),n=s(21),o=s(43),l=s(78),c=s(87),d=s(182),u=s(183),_=s(184),m={name:"EcSummary",components:{ALink:d.a,APicture:u.a,APrices:_.a},props:{amount:{type:Object,required:!0},items:Array,buyer:Object,shippingAddress:Object,canShowPriceOptions:Boolean},computed:{i19buyer:()=>Object(i.a)(a.w),i19contactPhone:()=>Object(i.a)(a.P),i19discount:()=>Object(i.a)(a.Z),i19docNumber:()=>Object(i.a)(a.db),i19freebie:()=>Object(i.a)(a.rb),i19freight:()=>Object(i.a)(a.sb),i19myAccount:()=>Object(i.a)(a.Xb),i19subtotal:()=>Object(i.a)(a.wd),i19summary:()=>Object(i.a)(a.xd),i19total:()=>Object(i.a)(a.Ad),buyerName(){if(!this.buyer)return"";const{name:t}=this.buyer;return`${t.given_name} ${t.middle_name||""} ${t.family_name}`},buyerPhone(){return Object(r.a)(this.buyer)}},methods:{getName:n.a,getPrice:o.a,formatMoney:l.a,getImg:t=>Object(c.a)(t,null,"small")}},p=(s(248),s(50)),f=Object(p.a)(m,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"summary"},[s("h5",{staticClass:"summary__title"},[t._v(" "+t._s(t.i19summary)+" ")]),t._t("list",[t.items?s("div",{staticClass:"summary__list"},t._l(t.items,(function(e){return e.quantity>0?s("div",{key:e._id,staticClass:"summary__item"},[t.getImg(e)?s("a-picture",{attrs:{src:t.getImg(e).url,alt:t.getImg(e).alt||e.name}}):t._e(),s("div",[s("span",{staticClass:"badge badge-secondary"},[t._v(" "+t._s(e.quantity)+" ")]),Array.isArray(e.flags)&&e.flags.includes("freebie")?[s("s",[t._v(t._s(t.formatMoney(t.getPrice(e))))]),s("small",{staticClass:"text-muted"},[s("i",{staticClass:"fas fa-gift ml-2 mr-1"}),t._v(" "+t._s(t.i19freebie)+" ")])]:[t._v(" "+t._s(t.formatMoney(t.getPrice(e)))+" ")],s("br"),e.slug?s("a-link",{attrs:{href:"/"+e.slug,target:"_blank"}},[s("small",[t._v(t._s(t.getName(e)))])]):s("small",[t._v(" "+t._s(t.getName(e))+" ")])],2)],1):t._e()})),0):t._e()]),t._t("more-offers"),t._t("amount",[s("div",{staticClass:"summary__amount"},[s("div",{staticClass:"summary__amount__row"},[s("span",[t._v(t._s(t.i19subtotal))]),s("div",[t._v(t._s(t.formatMoney(t.amount.subtotal)))])]),s("div",{staticClass:"summary__amount__row"},[s("span",[t._v(" "+t._s(t.i19freight)+" "),t.shippingAddress?s("small",[t._v(" "+t._s(t.shippingAddress.street)+" "),t.shippingAddress.number?[t._v(" "+t._s(t.shippingAddress.number)+" ")]:t._e(),t._v(" "+t._s(t.shippingAddress.city)+" "+t._s(t.shippingAddress.province_code)+" ")],2):t._e()]),s("div",[t._v(t._s(t.formatMoney(t.amount.freight)))])]),t.amount.discount?s("div",{staticClass:"summary__amount__row"},[s("span",[t._v(t._s(t.i19discount))]),s("div",[t._v(t._s(t.formatMoney(t.amount.discount)))])]):t._e(),s("div",{staticClass:"summary__amount__row summary__amount__row--total"},[s("span",[t._v(t._s(t.i19total))]),t.canShowPriceOptions?s("a-prices",{attrs:{product:{price:t.amount.total},"discount-option":{value:t.amount.discount},"is-literal":!0,"is-amount-total":!0}}):s("div",[t._v(" "+t._s(t.formatMoney(t.amount.total))+" ")])],1)])]),t._t("default"),t._t("buyer",[t.buyer?s("div",{staticClass:"summary__buyer"},[s("h5",[t._v(t._s(t.i19buyer))]),s("p",[t._v(" "+t._s(t.buyerName)+" "),s("br"),s("small",[t._v(t._s(t.i19docNumber)+":")]),t._v(" "+t._s(t.buyer.doc_number)+" "),s("br"),s("small",[t._v(t._s(t.i19contactPhone)+":")]),t._v(" "+t._s(t.buyerPhone)+" ")]),s("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return t.$emit("click:account")}}},[s("i",{staticClass:"fas fa-pencil-alt mr-1"}),t._v(" "+t._s(t.i19myAccount)+" ")])]):t._e()])],2)}),[],!1,null,null,null);e.a=f.exports},278:function(t,e,s){var a=s(341);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(174).default)("0cb08df4",a,!0,{})},340:function(t,e,s){"use strict";s(278)},341:function(t,e,s){(e=s(173)(!1)).push([t.i,".order-info__number{color:var(--secondary);margin-top:var(--spacer-2);font-weight:var(--font-light)}.order-info__number span{font-weight:var(--font-bold)}.order-info__number small{color:var(--gray);font-size:var(--font-size-sm);display:block}.order-info__timeline{list-style:none;display:flex;flex-wrap:nowrap;overflow-x:auto;padding:0;margin:var(--spacer-4) 0;font-size:var(--font-size-sm)}@media (min-width:768px){.order-info__timeline{display:block}}.order-info__timeline-status{padding:var(--spacer-2);margin-right:var(--spacer-1);min-width:165px;border:solid var(--border-color);border-width:0 0 5px}@media (min-width:768px){.order-info__timeline-status{padding-left:var(--spacer-3);margin-right:0;margin-bottom:var(--spacer-1);min-width:0;border-bottom-width:0;border-left-width:5px}}.order-info__timeline-status--pending,.order-info__timeline-status--under_analysis{border-color:var(--warning)}.order-info__timeline-status--shipped{border-color:var(--info)}.order-info__timeline-status--in_dispute,.order-info__timeline-status--unauthorized,.order-info__timeline-status--voided{border-color:var(--danger)}.order-info__timeline-status--delivered,.order-info__timeline-status--paid{border-color:var(--success)}.order-info__timeline-date{font-size:85%;color:var(--text-muted)}.order-info__details:not(:first-child){margin-top:var(--spacer-4)}.order-info__payment,.order-info__shipping-address,.order-info__shipping-freight{margin-bottom:var(--spacer-3)}.order-info__financial-status,.order-info__fulfillment-status{font-weight:var(--font-bold);color:var(--info)}.order-info__financial-status--pending{color:var(--warning)}.order-info__financial-status--under_analysis{color:var(--info)}.order-info__financial-status--in_dispute,.order-info__financial-status--unauthorized,.order-info__financial-status--voided{color:var(--danger)}.order-info__financial-status--paid,.order-info__fulfillment-status--delivered,.order-info__new{color:var(--success)}.order-info__new{text-align:center;font-size:var(--font-size-lg);margin-bottom:var(--spacer-5)}.order-info__orders-link{margin-left:auto;margin-top:var(--spacer-4)}.order-info__summary{background:var(--light);margin-bottom:var(--spacer-3)}.order-info__buy-again,.order-info__toggle{margin-top:var(--spacer-3);margin-right:var(--spacer-3)}.order-info__cancelled{color:var(--danger)}",""]),t.exports=e},66:function(t,e,s){"use strict";const a="undefined"!=typeof document&&document.documentMode,i={rootMargin:"0px",threshold:0,load(t){if("picture"===t.nodeName.toLowerCase()){let e=t.querySelector("img"),s=!1;null===e&&(e=document.createElement("img"),s=!0),a&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),s&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){const e=t.children;let s;for(let t=0;t<=e.length-1;t++)s=e[t].getAttribute("data-src"),s&&(e[t].src=s);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));let e=",";if(t.getAttribute("data-background-delimiter")&&(e=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage=`url('${t.getAttribute("data-background-image").split(e).join("'),url('")}')`;else if(t.getAttribute("data-background-image-set")){const s=t.getAttribute("data-background-image-set").split(e);let a=s[0].substr(0,s[0].indexOf(" "))||s[0];a=-1===a.indexOf("url(")?`url(${a})`:a,1===s.length?t.style.backgroundImage=a:t.setAttribute("style",(t.getAttribute("style")||"")+`background-image: ${a}; background-image: -webkit-image-set(${s}); background-image: image-set(${s})`)}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded(){}};function r(t){t.setAttribute("data-loaded",!0)}const n=t=>"true"===t.getAttribute("data-loaded"),o=(t,e=document)=>t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t);e.a=function(t=".lozad",e={}){const{root:s,rootMargin:a,threshold:l,load:c,loaded:d}=Object.assign({},i,e);let u;"undefined"!=typeof window&&window.IntersectionObserver&&(u=new IntersectionObserver(((t,e)=>(s,a)=>{s.forEach((s=>{(s.intersectionRatio>0||s.isIntersecting)&&(a.unobserve(s.target),n(s.target)||(t(s.target),r(s.target),e(s.target)))}))})(c,d),{root:s,rootMargin:a,threshold:l}));const _=o(t,s);for(let t=0;t<_.length;t++)(m=_[t]).getAttribute("data-placeholder-background")&&(m.style.background=m.getAttribute("data-placeholder-background"));var m;return{observe(){const e=o(t,s);for(let t=0;t<e.length;t++)n(e[t])||(u?u.observe(e[t]):(c(e[t]),r(e[t]),d(e[t])))},triggerLoad(t){n(t)||(c(t),r(t),d(t))},observer:u}}}}]);
//# sourceMappingURL=chunk.8440a7c5067f400b5fc7.js.map