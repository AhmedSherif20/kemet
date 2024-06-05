"use strict";(self.webpackChunkGPv15=self.webpackChunkGPv15||[]).push([[663],{3663:(P,s,a)=>{a.r(s),a.d(s,{WeatherModule:()=>M});var g=a(6895),i=a(11),c=a(433),t=a(1571),p=a(893);let d=(()=>{class n{constructor(e,o){this.router=e,this._SwalAlertService=o,this.searchInput=new c.NI(null)}ngOnInit(){}getCityValue(){const e=this.searchInput.value;e?(console.log(e,"after check"),this.router.navigate(["/weather",e??""])):this._SwalAlertService.fireAlert("warning","city name required","please try again!")}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(i.F0),t.Y36(p.W))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-weather-home"]],decls:11,vars:1,consts:[["id","weatherHome"],[1,"layout"],[1,"relative","w-[540px]","max-w-[100%]"],[1,"absolute","inset-y-0","start-0","flex","items-center","ps-3","pointer-events-none"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 20",1,"w-4","h-4","text-gray-500","dark:text-gray-400"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"],["type","search","id","default-search","placeholder","Search With City Name ex:London ...",1,"block","w-full","p-4","ps-10","text-sm","capitalize","border","border-gray-300","rounded-lg","bg-gray-50","focus:ring-blue","focus:border-blue","outline-none","text-blue",3,"formControl","keyup.enter"],["type","submit",1,"text-white","absolute","end-2.5","bottom-2.5","bg-blue","hover:bg-blue","focus:ring-4","focus:outline-none","focus:ring-blue","font-medium","rounded-lg","text-sm","px-4","py-2",3,"click"]],template:function(o,r){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2"),t._uU(3," discover your favorite city weather \u{1f609} "),t.qZA(),t.TgZ(4,"div",2)(5,"div",3),t.O4$(),t.TgZ(6,"svg",4),t._UZ(7,"path",5),t.qZA()(),t.kcU(),t.TgZ(8,"input",6),t.NdJ("keyup.enter",function(){return r.getCityValue()}),t.qZA(),t.TgZ(9,"button",7),t.NdJ("click",function(){return r.getCityValue()}),t._uU(10,"Search"),t.qZA()()()()),2&o&&(t.xp6(8),t.Q6J("formControl",r.searchInput))},dependencies:[c.Fj,c.JJ,c.oH],styles:["#weatherHome[_ngcontent-%COMP%]{position:relative;min-height:75vh;background-size:cover;background-repeat:no-repeat;background-image:url(home-bg.ebc464c7709ca65c.jpg)}#weatherHome[_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity: .6;padding-left:.5rem;padding-right:.5rem}#weatherHome[_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:1.75rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;text-transform:capitalize;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}@media (min-width: 640px){#weatherHome[_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.875rem;line-height:2.25rem}}@media (min-width: 768px){#weatherHome[_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.25rem;line-height:2.5rem}}@media (min-width: 1024px){#weatherHome[_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:3rem;line-height:1}}#weatherHome[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{width:100%;background-color:red}"]})}return n})();var m=a(5861),u=a(3905),l=a(529);let f=(()=>{class n{constructor(e){this._HttpClient=e,this.apiKey="eaa4e5be81fc4312969104114220102"}getCityWeather(e){return this._HttpClient.get(`\n    https://api.weatherapi.com/v1/forecast.json?q=${e}&days=6&lang=en&key=${this.apiKey}`)}static#t=this.\u0275fac=function(o){return new(o||n)(t.LFG(l.eN))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function y(n,O){if(1&n&&(t.TgZ(0,"section",2)(1,"div",3)(2,"div",4)(3,"p"),t._UZ(4,"i",5),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._UZ(7,"i",6),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"p"),t._UZ(11,"i",7),t._uU(12),t.ALo(13,"date"),t.qZA()(),t.TgZ(14,"div",8)(15,"h2"),t._uU(16),t.TgZ(17,"div",9)(18,"p"),t._UZ(19,"i",10),t._uU(20),t.qZA(),t.TgZ(21,"p"),t._UZ(22,"i",11),t._uU(23),t.qZA()()(),t.TgZ(24,"p"),t._uU(25),t.qZA()(),t.TgZ(26,"div",12)(27,"div")(28,"h4"),t._uU(29,"Tomorrow"),t.qZA(),t.TgZ(30,"h5"),t._uU(31),t.qZA(),t.TgZ(32,"p"),t._uU(33),t.qZA()(),t.TgZ(34,"div")(35,"h4"),t._uU(36,"After Tomorrow"),t.qZA(),t.TgZ(37,"h5"),t._uU(38),t.qZA(),t.TgZ(39,"p"),t._uU(40),t.qZA()()()(),t.TgZ(41,"div",13)(42,"h2"),t._uU(43,"Day Forecast"),t.qZA(),t.TgZ(44,"p")(45,"span"),t._uU(46,"Max Temperature"),t.qZA(),t._uU(47),t.qZA(),t.TgZ(48,"p")(49,"span"),t._uU(50,"Min Temperature"),t.qZA(),t._uU(51),t.qZA(),t.TgZ(52,"p")(53,"span"),t._uU(54,"Average Temperature"),t.qZA(),t._uU(55),t.qZA(),t.TgZ(56,"p")(57,"span"),t._uU(58,"Max Wind Speed"),t.qZA(),t._uU(59),t.qZA(),t.TgZ(60,"p")(61,"span"),t._uU(62,"Will It Rain"),t.qZA(),t._uU(63),t.qZA(),t.TgZ(64,"p")(65,"span"),t._uU(66,"Rainfall rate"),t.qZA(),t._uU(67),t.qZA(),t.TgZ(68,"button",14),t._uU(69,"search Other city"),t.qZA()()()),2&n){const e=t.oxw();t.xp6(5),t.hij(" ",e.weatherData.location.name+", "+e.weatherData.location.country," "),t.xp6(3),t.hij(" ",t.xi3(9,17,e.weatherData.location.localtime,"shortTime")," "),t.xp6(4),t.hij(" ",t.xi3(13,20,e.weatherData.location.localtime,"dd/MM/yyyy")," "),t.xp6(4),t.hij(" ",e.weatherData.current.temp_c," "),t.xp6(4),t.hij(" ",e.weatherData.current.wind_mph," mph "),t.xp6(3),t.hij(" ",e.weatherData.forecast.forecastday[0].day.daily_chance_of_rain,"% "),t.xp6(2),t.Oqu(e.weatherData.current.condition.text),t.xp6(6),t.hij("",e.weatherData.forecast.forecastday[1].day.avgtemp_c,"\xb0"),t.xp6(2),t.Oqu(e.weatherData.forecast.forecastday[1].day.condition.text),t.xp6(5),t.hij("",e.weatherData.forecast.forecastday[2].day.avgtemp_c,"\xb0"),t.xp6(2),t.Oqu(e.weatherData.forecast.forecastday[2].day.condition.text),t.xp6(7),t.hij(" ",e.weatherData.forecast.forecastday[0].day.maxtemp_c,"\xb0 "),t.xp6(4),t.hij(" ",e.weatherData.forecast.forecastday[0].day.mintemp_c,"\xb0\xb0 "),t.xp6(4),t.hij(" ",e.weatherData.forecast.forecastday[0].day.avgtemp_c,"\xb0 "),t.xp6(4),t.hij(" ",e.weatherData.forecast.forecastday[0].day.maxwind_mph," KM/H "),t.xp6(4),t.hij(" ",e.weatherData.forecast.forecastday[0].day.daily_will_it_rain?"Yes":"No"," "),t.xp6(4),t.hij(" ",e.weatherData.forecast.forecastday[0].day.daily_chance_of_rain,"% ")}}function C(n,O){1&n&&(t.TgZ(0,"div",15)(1,"div",16),t.O4$(),t.TgZ(2,"svg",17),t._UZ(3,"path",18)(4,"path",19),t.qZA()(),t.kcU(),t.TgZ(5,"p"),t._uU(6,"Loading "),t.qZA()())}const _=[{path:"",component:d},{path:":city",component:(()=>{class n{constructor(e,o,r,h){this._ActivatedRoute=e,this._Router=o,this._WeatherApiService=r,this._SwalAlertService=h,this.cityName=null,this.loading=!0}ngOnInit(){this.getCityWeather()}getCityWeather(){var e=this;return(0,m.Z)(function*(){e.cityName=e._ActivatedRoute.snapshot.params.city,e.cityName||e._Router.navigate(["/weather"]),e.weatherData=yield(0,u.z)(e._WeatherApiService.getCityWeather(e.cityName??"")).catch(o=>{e.weatherData||(e.loading=!1,e._Router.navigate(["/weather"]),e._SwalAlertService.fireAlert("error","error","City Name Incorrect!"))}),e.loading=!1})()}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(i.gz),t.Y36(i.F0),t.Y36(f),t.Y36(p.W))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-weather-search"]],decls:2,vars:2,consts:[["id","ciyWeatherBox",4,"ngIf"],["class","loading",4,"ngIf"],["id","ciyWeatherBox"],[1,"content"],[1,"head"],[1,"fa-solid","fa-location-dot"],[1,"fa-solid","fa-clock"],[1,"fa-solid","fa-calendar"],[1,"current"],[1,"info"],[1,"fa-solid","fa-wind"],[1,"fa-solid","fa-droplet"],[1,"next"],[1,"side"],["routerLink","/weather",1,"btn-outline-blue"],[1,"loading"],[1,"spinner"],["aria-hidden","true","viewBox","0 0 100 101","fill","none","xmlns","http://www.w3.org/2000/svg",1,"w-16","h-16"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","currentColor"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentFill"]],template:function(o,r){1&o&&(t.YNc(0,y,70,23,"section",0),t.YNc(1,C,7,0,"div",1)),2&o&&(t.Q6J("ngIf",!r.loading&&r.weatherData),t.xp6(1),t.Q6J("ngIf",r.loading))},dependencies:[g.O5,i.rH,g.uU],styles:['@charset "UTF-8";#ciyWeatherBox[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;margin-top:2.5rem;margin-bottom:2.5rem;display:flex;width:1200px;max-width:100%;justify-content:space-between;border-radius:.5rem;border-width:1px;border-color:rgb(17 72 126 / var(--tw-border-opacity));--tw-border-opacity: .2;padding:1.5rem}#ciyWeatherBox[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:66.666667%;padding-left:.5rem;padding-right:.5rem}#ciyWeatherBox[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}#ciyWeatherBox[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;text-transform:capitalize;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}#ciyWeatherBox[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type{font-weight:500;--tw-text-opacity: 1;color:rgb(17 72 126 / var(--tw-text-opacity))}#ciyWeatherBox[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover:first-of-type{letter-spacing:.05em}#ciyWeatherBox[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-inline-end:.25rem;--tw-text-opacity: 1;color:rgb(177 145 95 / var(--tw-text-opacity))}#ciyWeatherBox[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]{margin-top:2.5rem;margin-bottom:2.5rem;margin-left:auto;margin-right:auto;width:-moz-fit-content;width:fit-content;text-align:center}#ciyWeatherBox[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{position:relative;margin-left:auto;margin-right:auto;width:-moz-fit-content;width:fit-content;font-size:150px;font-weight:500;--tw-text-opacity: 1;color:rgb(17 72 126 / var(--tw-text-opacity))}#ciyWeatherBox[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after{position:absolute;right:-1.25rem;top:-2.5rem;--tw-content: "\\b0";content:var(--tw-content)}#ciyWeatherBox[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{position:absolute;right:-8rem;top:33.333333%;width:-moz-fit-content;width:fit-content;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(177 145 95 / var(--tw-text-opacity))}#ciyWeatherBox[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.5rem;display:flex;width:120px;flex-direction:row;align-items:center;justify-content:flex-start;font-size:1rem;line-height:1.5rem;text-transform:lowercase}#ciyWeatherBox[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-inline-end:1rem}#ciyWeatherBox[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.875rem;line-height:2.25rem;font-weight:500;text-transform:capitalize;letter-spacing:.05em;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}#ciyWeatherBox[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]{display:flex;justify-content:space-around;padding-top:.5rem;padding-bottom:.5rem}#ciyWeatherBox[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:200px;border-radius:.5rem;border-width:1px;border-color:rgb(17 72 126 / var(--tw-border-opacity));--tw-border-opacity: .2;padding-top:.25rem;padding-bottom:.25rem;text-align:center;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}#ciyWeatherBox[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.25rem;line-height:1.75rem}#ciyWeatherBox[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-top:.25rem;margin-bottom:.25rem;font-size:1.875rem;line-height:2.25rem;--tw-text-opacity: 1;color:rgb(17 72 126 / var(--tw-text-opacity))}#ciyWeatherBox[_ngcontent-%COMP%]   .side[_ngcontent-%COMP%]{width:25%;border-left-width:1px;border-color:rgb(107 114 128 / var(--tw-border-opacity));--tw-border-opacity: .4;padding-left:.5rem;padding-right:.5rem;text-align:center}#ciyWeatherBox[_ngcontent-%COMP%]   .side[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:1.875rem;line-height:2.25rem;font-weight:500;text-transform:capitalize;--tw-text-opacity: 1;color:rgb(17 72 126 / var(--tw-text-opacity))}#ciyWeatherBox[_ngcontent-%COMP%]   .side[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;width:240px;max-width:100%;text-align:start;--tw-text-opacity: 1;color:rgb(17 72 126 / var(--tw-text-opacity))}#ciyWeatherBox[_ngcontent-%COMP%]   .side[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type{margin-bottom:1.75rem}#ciyWeatherBox[_ngcontent-%COMP%]   .side[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-inline-end:.625rem;margin-bottom:1rem;display:inline-block;max-width:100%;text-transform:capitalize;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}#ciyWeatherBox[_ngcontent-%COMP%]   .side[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"\\f178";font-family:"Font Awesome 6 Free";font-weight:900;margin-left:4px;--tw-text-opacity: 1;color:rgb(177 145 95 / var(--tw-text-opacity))}']})}return n})()}];let w=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[i.Bz.forChild(_),i.Bz]})}return n})();var x=a(9325);let M=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[g.ez,w,c.UX,l.JF,x.q]})}return n})()}}]);