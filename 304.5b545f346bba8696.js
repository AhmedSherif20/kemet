"use strict";(self.webpackChunkGPv15=self.webpackChunkGPv15||[]).push([[304],{4304:(A,_,t)=>{t.r(_),t.d(_,{CurrencyModule:()=>D});var a=t(6895),l=t(11),g=t(5861),y=t(433),h=t(3905),c=t(1571),s=t(529);let C=(()=>{class r{constructor(e){this._HttpClient=e,this.apiKey="854fb0ab714558c7f5c20b40"}getCurrency(e){return this._HttpClient.get(`\n    https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/${e}`)}static#c=this.\u0275fac=function(n){return new(n||r)(c.LFG(s.eN))};static#r=this.\u0275prov=c.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var i=t(8796);function m(r,u){if(1&r&&(c.TgZ(0,"ng-option",10),c._uU(1),c.TgZ(2,"span",11),c._uU(3),c.qZA()()),2&r){const e=u.$implicit;c.Q6J("value",e.currency_code),c.xp6(1),c.hij(" ",e.currency_code," "),c.xp6(2),c.hij("( ",e.country," )")}}function p(r,u){if(1&r&&(c.TgZ(0,"ng-option",10),c._uU(1),c.TgZ(2,"span",11),c._uU(3),c.qZA()()),2&r){const e=u.$implicit;c.Q6J("value",e.currency_code),c.xp6(1),c.hij(" ",e.currency_code," "),c.xp6(2),c.hij("( ",e.country," )")}}function M(r,u){if(1&r&&(c.TgZ(0,"section",12)(1,"h3"),c._uU(2),c.qZA(),c._UZ(3,"i",13),c.TgZ(4,"h3"),c._uU(5),c.qZA()()),2&r){const e=c.oxw();c.xp6(2),c.hij(" 1 ",e.baseCurrency,""),c.xp6(3),c.AsE(" ",e.otherCurrValue," ",e.otherCurrency,"")}}function U(r,u){if(1&r&&(c.TgZ(0,"div",14)(1,"h2"),c._uU(2),c.ALo(3,"date"),c.qZA(),c.TgZ(4,"h2"),c._uU(5),c.ALo(6,"date"),c.qZA()()),2&r){const e=c.oxw();c.xp6(2),c.hij("Last Time Update: ",c.xi3(3,2,e.lastTimeUpdate,"long"),""),c.xp6(3),c.hij("Next Time Update: ",c.xi3(6,5,e.nextTimeUpdate,"long"),"")}}function S(r,u){1&r&&(c.TgZ(0,"div",15)(1,"div",16),c.O4$(),c.TgZ(2,"svg",17),c._UZ(3,"path",18)(4,"path",19),c.qZA()(),c.kcU(),c.TgZ(5,"p"),c._uU(6,"Loading "),c.qZA()())}const f=[{path:"",pathMatch:"full",component:(()=>{class r{constructor(e){this._CurrencyApiService=e,this.countriesData=[{country:"Afghanistan",currency_code:"AFN"},{country:"Albania",currency_code:"ALL"},{country:"Algeria",currency_code:"DZD"},{country:"American Samoa",currency_code:"USD"},{country:"Andorra",currency_code:"EUR"},{country:"Angola",currency_code:"AOA"},{country:"Anguilla",currency_code:"XCD"},{country:"Antarctica",currency_code:"XCD"},{country:"Antigua and Barbuda",currency_code:"XCD"},{country:"Argentina",currency_code:"ARS"},{country:"Armenia",currency_code:"AMD"},{country:"Aruba",currency_code:"AWG"},{country:"Australia",currency_code:"AUD"},{country:"Austria",currency_code:"EUR"},{country:"Azerbaijan",currency_code:"AZN"},{country:"Bahamas",currency_code:"BSD"},{country:"Bahrain",currency_code:"BHD"},{country:"Bangladesh",currency_code:"BDT"},{country:"Barbados",currency_code:"BBD"},{country:"Belarus",currency_code:"BYR"},{country:"Belgium",currency_code:"EUR"},{country:"Belize",currency_code:"BZD"},{country:"Benin",currency_code:"XOF"},{country:"Bermuda",currency_code:"BMD"},{country:"Bhutan",currency_code:"BTN"},{country:"Bolivia",currency_code:"BOB"},{country:"Bosnia and Herzegovina",currency_code:"BAM"},{country:"Botswana",currency_code:"BWP"},{country:"Bouvet Island",currency_code:"NOK"},{country:"Brazil",currency_code:"BRL"},{country:"British Indian Ocean Territory",currency_code:"USD"},{country:"Brunei",currency_code:"BND"},{country:"Bulgaria",currency_code:"BGN"},{country:"Burkina Faso",currency_code:"XOF"},{country:"Burundi",currency_code:"BIF"},{country:"Cambodia",currency_code:"KHR"},{country:"Cameroon",currency_code:"XAF"},{country:"Canada",currency_code:"CAD"},{country:"Cape Verde",currency_code:"CVE"},{country:"Cayman Islands",currency_code:"KYD"},{country:"Central African Republic",currency_code:"XAF"},{country:"Chad",currency_code:"XAF"},{country:"Chile",currency_code:"CLP"},{country:"China",currency_code:"CNY"},{country:"Christmas Island",currency_code:"AUD"},{country:"Cocos (Keeling) Islands",currency_code:"AUD"},{country:"Colombia",currency_code:"COP"},{country:"Comoros",currency_code:"KMF"},{country:"Congo",currency_code:"XAF"},{country:"Cook Islands",currency_code:"NZD"},{country:"Costa Rica",currency_code:"CRC"},{country:"Croatia",currency_code:"EUR"},{country:"Cuba",currency_code:"CUP"},{country:"Cyprus",currency_code:"EUR"},{country:"Czech Republic",currency_code:"CZK"},{country:"Denmark",currency_code:"DKK"},{country:"Djibouti",currency_code:"DJF"},{country:"Dominica",currency_code:"XCD"},{country:"Dominican Republic",currency_code:"DOP"},{country:"East Timor",currency_code:"USD"},{country:"Ecuador",currency_code:"ECS"},{country:"Egypt",currency_code:"EGP"},{country:"El Salvador",currency_code:"SVC"},{country:"England",currency_code:"GBP"},{country:"Equatorial Guinea",currency_code:"XAF"},{country:"Eritrea",currency_code:"ERN"},{country:"Estonia",currency_code:"EUR"},{country:"Ethiopia",currency_code:"ETB"},{country:"Falkland Islands",currency_code:"FKP"},{country:"Faroe Islands",currency_code:"DKK"},{country:"Fiji Islands",currency_code:"FJD"},{country:"Finland",currency_code:"EUR"},{country:"France",currency_code:"EUR"},{country:"French Guiana",currency_code:"EUR"},{country:"French Polynesia",currency_code:"XPF"},{country:"French Southern territories",currency_code:"EUR"},{country:"Gabon",currency_code:"XAF"},{country:"Gambia",currency_code:"GMD"},{country:"Georgia",currency_code:"GEL"},{country:"Germany",currency_code:"EUR"},{country:"Ghana",currency_code:"GHS"},{country:"Gibraltar",currency_code:"GIP"},{country:"Greece",currency_code:"EUR"},{country:"Greenland",currency_code:"DKK"},{country:"Grenada",currency_code:"XCD"},{country:"Guadeloupe",currency_code:"EUR"},{country:"Guam",currency_code:"USD"},{country:"Guatemala",currency_code:"QTQ"},{country:"Guinea",currency_code:"GNF"},{country:"Guinea-Bissau",currency_code:"CFA"},{country:"Guyana",currency_code:"GYD"},{country:"Haiti",currency_code:"HTG"},{country:"Heard Island and McDonald Islands",currency_code:"AUD"},{country:"Holy See (Vatican City State)",currency_code:"EUR"},{country:"Honduras",currency_code:"HNL"},{country:"Hong Kong",currency_code:"HKD"},{country:"Hungary",currency_code:"HUF"},{country:"Iceland",currency_code:"ISK"},{country:"India",currency_code:"INR"},{country:"Indonesia",currency_code:"IDR"},{country:"Iran",currency_code:"IRR"},{country:"Iraq",currency_code:"IQD"},{country:"Ireland",currency_code:"EUR"},{country:"Israel",currency_code:"ILS"},{country:"Italy",currency_code:"EUR"},{country:"Ivory Coast",currency_code:"XOF"},{country:"Jamaica",currency_code:"JMD"},{country:"Japan",currency_code:"JPY"},{country:"Jordan",currency_code:"JOD"},{country:"Kazakhstan",currency_code:"KZT"},{country:"Kenya",currency_code:"KES"},{country:"Kiribati",currency_code:"AUD"},{country:"Kuwait",currency_code:"KWD"},{country:"Kyrgyzstan",currency_code:"KGS"},{country:"Laos",currency_code:"LAK"},{country:"Latvia",currency_code:"EUR"},{country:"Lebanon",currency_code:"LBP"},{country:"Lesotho",currency_code:"LSL"},{country:"Liberia",currency_code:"LRD"},{country:"Libyan Arab Jamahiriya",currency_code:"LYD"},{country:"Liechtenstein",currency_code:"CHF"},{country:"Lithuania",currency_code:"EUR"},{country:"Luxembourg",currency_code:"EUR"},{country:"Macau",currency_code:"MOP"},{country:"North Macedonia",currency_code:"MKD"},{country:"Madagascar",currency_code:"MGF"},{country:"Malawi",currency_code:"MWK"},{country:"Malaysia",currency_code:"MYR"},{country:"Maldives",currency_code:"MVR"},{country:"Mali",currency_code:"XOF"},{country:"Malta",currency_code:"EUR"},{country:"Marshall Islands",currency_code:"USD"},{country:"Martinique",currency_code:"EUR"},{country:"Mauritania",currency_code:"MRO"},{country:"Mauritius",currency_code:"MUR"},{country:"Mayotte",currency_code:"EUR"},{country:"Mexico",currency_code:"MXN"},{country:"Micronesia, Federated States of",currency_code:"USD"},{country:"Moldova",currency_code:"MDL"},{country:"Monaco",currency_code:"EUR"},{country:"Mongolia",currency_code:"MNT"},{country:"Montserrat",currency_code:"XCD"},{country:"Morocco",currency_code:"MAD"},{country:"Mozambique",currency_code:"MZN"},{country:"Myanmar",currency_code:"MMR"},{country:"Namibia",currency_code:"NAD"},{country:"Nauru",currency_code:"AUD"},{country:"Nepal",currency_code:"NPR"},{country:"Netherlands",currency_code:"EUR"},{country:"Netherlands Antilles",currency_code:"ANG"},{country:"New Caledonia",currency_code:"XPF"},{country:"New Zealand",currency_code:"NZD"},{country:"Nicaragua",currency_code:"NIO"},{country:"Niger",currency_code:"XOF"},{country:"Nigeria",currency_code:"NGN"},{country:"Niue",currency_code:"NZD"},{country:"Norfolk Island",currency_code:"AUD"},{country:"North Korea",currency_code:"KPW"},{country:"Northern Ireland",currency_code:"GBP"},{country:"Northern Mariana Islands",currency_code:"USD"},{country:"Norway",currency_code:"NOK"},{country:"Oman",currency_code:"OMR"},{country:"Pakistan",currency_code:"PKR"},{country:"Palau",currency_code:"USD"},{country:"Palestine",currency_code:null},{country:"Panama",currency_code:"PAB"},{country:"Papua New Guinea",currency_code:"PGK"},{country:"Paraguay",currency_code:"PYG"},{country:"Peru",currency_code:"PEN"},{country:"Philippines",currency_code:"PHP"},{country:"Pitcairn Islands",currency_code:"NZD"},{country:"Poland",currency_code:"PLN"},{country:"Portugal",currency_code:"EUR"},{country:"Puerto Rico",currency_code:"USD"},{country:"Qatar",currency_code:"QAR"},{country:"Reunion",currency_code:"EUR"},{country:"Romania",currency_code:"RON"},{country:"Russia",currency_code:"RUB"},{country:"Rwanda",currency_code:"RWF"},{country:"Saint Helena",currency_code:"SHP"},{country:"Saint Kitts and Nevis",currency_code:"XCD"},{country:"Saint Lucia",currency_code:"XCD"},{country:"Saint Pierre and Miquelon",currency_code:"EUR"},{country:"Saint Vincent and the Grenadines",currency_code:"XCD"},{country:"Samoa",currency_code:"WST"},{country:"San Marino",currency_code:"EUR"},{country:"Sao Tome and Principe",currency_code:"STD"},{country:"Saudi Arabia",currency_code:"SAR"},{country:"Scotland",currency_code:"GBP"},{country:"Senegal",currency_code:"XOF"},{country:"Serbia",currency_code:"RSD"},{country:"Seychelles",currency_code:"SCR"},{country:"Sierra Leone",currency_code:"SLL"},{country:"Singapore",currency_code:"SGD"},{country:"Slovakia",currency_code:"EUR"},{country:"Slovenia",currency_code:"EUR"},{country:"Solomon Islands",currency_code:"SBD"},{country:"Somalia",currency_code:"SOS"},{country:"South Africa",currency_code:"ZAR"},{country:"South Georgia and the South Sandwich Islands",currency_code:"GBP"},{country:"South Korea",currency_code:"KRW"},{country:"South Sudan",currency_code:"SSP"},{country:"Spain",currency_code:"EUR"},{country:"Sri Lanka",currency_code:"LKR"},{country:"Sudan",currency_code:"SDG"},{country:"Suriname",currency_code:"SRD"},{country:"Svalbard and Jan Mayen",currency_code:"NOK"},{country:"Swaziland",currency_code:"SZL"},{country:"Sweden",currency_code:"SEK"},{country:"Switzerland",currency_code:"CHF"},{country:"Syria",currency_code:"SYP"},{country:"Tajikistan",currency_code:"TJS"},{country:"Tanzania",currency_code:"TZS"},{country:"Thailand",currency_code:"THB"},{country:"The Democratic Republic of Congo",currency_code:"CDF"},{country:"Togo",currency_code:"XOF"},{country:"Tokelau",currency_code:"NZD"},{country:"Tonga",currency_code:"TOP"},{country:"Trinidad and Tobago",currency_code:"TTD"},{country:"Tunisia",currency_code:"TND"},{country:"Turkey",currency_code:"TRY"},{country:"Turkmenistan",currency_code:"TMT"},{country:"Turks and Caicos Islands",currency_code:"USD"},{country:"Tuvalu",currency_code:"AUD"},{country:"Uganda",currency_code:"UGX"},{country:"Ukraine",currency_code:"UAH"},{country:"United Arab Emirates",currency_code:"AED"},{country:"United Kingdom",currency_code:"GBP"},{country:"United States",currency_code:"USD"},{country:"United States Minor Outlying Islands",currency_code:"USD"},{country:"Uruguay",currency_code:"UYU"},{country:"Uzbekistan",currency_code:"UZS"},{country:"Vanuatu",currency_code:"VUV"},{country:"Venezuela",currency_code:"VEF"},{country:"Vietnam",currency_code:"VND"},{country:"Virgin Islands, British",currency_code:"USD"},{country:"Virgin Islands, U.S.",currency_code:"USD"},{country:"Wales",currency_code:"GBP"},{country:"Wallis and Futuna",currency_code:"XPF"},{country:"Western Sahara",currency_code:"MAD"},{country:"Yemen",currency_code:"YER"},{country:"Zambia",currency_code:"ZMW"},{country:"Zimbabwe",currency_code:"ZWD"}],this.baseCurrControl=new y.NI(null),this.otherCurrControl=new y.NI(null),this.loading=!1,this.currencies=void 0,this.baseCurrency="",this.otherCurrency="",this.otherCurrValue=0,this.lastTimeUpdate="",this.nextTimeUpdate=""}baseCurrChange(e){var n=this;return(0,g.Z)(function*(){if(n.currencies=void 0,e){n.loading=!0,n.baseCurrency=e;let o=yield(0,h.z)(n._CurrencyApiService.getCurrency(e));n.currencies=o.conversion_rates??{},n.lastTimeUpdate=o.time_last_update_utc,n.nextTimeUpdate=o.time_next_update_utc,n.otherCurrency.length&&n.otherCurrChange(n.otherCurrency),n.loading=!1}})()}otherCurrChange(e){e&&(this.otherCurrency=e,this.otherCurrValue=this.currencies[e])}static#c=this.\u0275fac=function(n){return new(n||r)(c.Y36(C))};static#r=this.\u0275cmp=c.Xpm({type:r,selectors:[["app-curr-converter"]],decls:19,vars:11,consts:[[1,"layout"],[1,"selection"],[1,"control"],["for","Payment_Methods",1,"block","mb-2","text-sm","font-medium","text-gray-900"],["appearance","outline","labelForId","Payment_Methods",3,"searchable","clearable","placeholder","change"],[3,"value",4,"ngFor","ngForOf"],[1,"fa-solid","fa-arrow-right-arrow-left"],["class","result",4,"ngIf"],["class","time",4,"ngIf"],["class","loading",4,"ngIf"],[3,"value"],[1,"text-sm"],[1,"result"],[1,"fa-solid","fa-equals"],[1,"time"],[1,"loading"],[1,"spinner"],["aria-hidden","true","viewBox","0 0 100 101","fill","none","xmlns","http://www.w3.org/2000/svg",1,"w-16","h-16"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","currentColor"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentFill"]],template:function(n,o){1&n&&(c.TgZ(0,"header")(1,"div",0)(2,"h2"),c._uU(3,"Currencies"),c.qZA()()(),c.TgZ(4,"section",1)(5,"div",2)(6,"label",3),c._uU(7," Base Currency "),c.qZA(),c.TgZ(8,"ng-select",4),c.NdJ("change",function(d){return o.baseCurrChange(d)}),c.YNc(9,m,4,3,"ng-option",5),c.qZA()(),c._UZ(10,"i",6),c.TgZ(11,"div",2)(12,"label",3),c._uU(13," Other Currency "),c.qZA(),c.TgZ(14,"ng-select",4),c.NdJ("change",function(d){return o.otherCurrChange(d)}),c.YNc(15,p,4,3,"ng-option",5),c.qZA()()(),c.YNc(16,M,6,3,"section",7),c.YNc(17,U,7,8,"div",8),c.YNc(18,S,7,0,"div",9)),2&n&&(c.xp6(8),c.Q6J("searchable",!0)("clearable",!0)("placeholder","Select Base Currency"),c.xp6(1),c.Q6J("ngForOf",o.countriesData),c.xp6(5),c.Q6J("searchable",!0)("clearable",!0)("placeholder","Select Other Currency"),c.xp6(1),c.Q6J("ngForOf",o.countriesData),c.xp6(1),c.Q6J("ngIf",!o.loading&&o.currencies&&o.otherCurrency.length),c.xp6(1),c.Q6J("ngIf",!o.loading&&o.currencies&&o.otherCurrency.length),c.xp6(1),c.Q6J("ngIf",o.loading))},dependencies:[a.sg,a.O5,i.w9,i.jq,a.uU],styles:["header[_ngcontent-%COMP%]{position:relative;margin-bottom:2rem;height:8rem;--tw-bg-opacity: 1;background-color:rgb(17 72 126 / var(--tw-bg-opacity));background-size:cover;background-position:bottom}@media (min-width: 768px){header[_ngcontent-%COMP%]{height:12rem}}@media (min-width: 1024px){header[_ngcontent-%COMP%]{height:15rem}}header[_ngcontent-%COMP%]{background-image:url(cover.bc4599dfa1e987d2.webp)}header[_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity: .7;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}header[_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.875rem;line-height:2.25rem;font-weight:500;text-transform:uppercase;letter-spacing:.1em}@media (min-width: 768px){header[_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.25rem;line-height:2.5rem}}@media (min-width: 1024px){header[_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:3rem;line-height:1}}.selection[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;margin-top:1.25rem;margin-bottom:1.25rem;display:flex;width:100%;flex-direction:column;align-items:center;justify-content:space-evenly;border-bottom-width:1px;padding-bottom:1.25rem}@media (min-width: 768px){.selection[_ngcontent-%COMP%]{width:75%;flex-direction:row;align-items:flex-end}}.selection[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]{margin-bottom:.75rem;width:225px;max-width:100%}@media (min-width: 640px){.selection[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]{width:300px}}@media (min-width: 768px){.selection[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]{margin-bottom:0}}@media (min-width: 1024px){.selection[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]{width:375px}}.selection[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{text-transform:uppercase;--tw-text-opacity: 1;color:rgb(17 72 126 / var(--tw-text-opacity))}.selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:none;font-size:1.875rem;line-height:2.25rem;--tw-text-opacity: 1;color:rgb(17 72 126 / var(--tw-text-opacity))}@media (min-width: 768px){.selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:block}}.result[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;margin-bottom:.25rem;display:flex;width:100%;flex-direction:column;align-items:center;justify-content:space-evenly;border-bottom-width:1px;padding-top:1.25rem;padding-bottom:1.25rem}@media (min-width: 768px){.result[_ngcontent-%COMP%]{width:75%;flex-direction:row}}.result[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font-size:3rem;line-height:1;font-weight:600;letter-spacing:.05em;opacity:.8}@media (min-width: 1024px){.result[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{min-width:30%}}.result[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.875rem;line-height:2.25rem;--tw-text-opacity: 1;color:rgb(17 72 126 / var(--tw-text-opacity))}.time[_ngcontent-%COMP%]{margin-bottom:.75rem;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;font-size:.75rem;line-height:1rem;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}@media (min-width: 768px){.time[_ngcontent-%COMP%]{flex-direction:row}}"]})}return r})()}];let P=(()=>{class r{static#c=this.\u0275fac=function(n){return new(n||r)};static#r=this.\u0275mod=c.oAB({type:r});static#e=this.\u0275inj=c.cJS({imports:[l.Bz.forChild(f),l.Bz]})}return r})(),D=(()=>{class r{static#c=this.\u0275fac=function(n){return new(n||r)};static#r=this.\u0275mod=c.oAB({type:r});static#e=this.\u0275inj=c.cJS({imports:[a.ez,P,i.A0,y.u5,y.UX,s.JF]})}return r})()}}]);