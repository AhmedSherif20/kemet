"use strict";(self.webpackChunkGPv15=self.webpackChunkGPv15||[]).push([[729],{1532:(le,_,s)=>{s.r(_),s.d(_,{AuthModule:()=>se});var g=s(6895),l=s(3350),f=s(5861),o=s(433),h=s(3905),e=s(1571),w=s(6311),u=s(893),Z=s(4505),P=s(529);let x=(()=>{class r{constructor(t){this._HttpClient=t,this.baseUrl=Z.h.baseUrl}userLogin(t){return this._HttpClient.post(`${this.baseUrl}/login`,t)}userRegister(t){return this._HttpClient.post(`${this.baseUrl}/register`,t)}static#e=this.\u0275fac=function(n){return new(n||r)(e.LFG(P.eN))};static#t=this.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var b=s(5068),y=s(5134);function A(r,i){1&r&&(e.TgZ(0,"p",21),e._uU(1,"email is required"),e.qZA())}function q(r,i){1&r&&(e.TgZ(0,"p",21),e._uU(1,"email is invalid"),e.qZA())}function M(r,i){1&r&&(e.TgZ(0,"p",21),e._uU(1,"password is required"),e.qZA())}function T(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"section",2)(1,"div",3)(2,"div",4)(3,"h2",5),e._uU(4," Login "),e.qZA(),e.TgZ(5,"form",6)(6,"div",7)(7,"label",8),e._uU(8,"Email address"),e.qZA(),e._UZ(9,"input",9),e.YNc(10,A,2,0,"p",10),e.YNc(11,q,2,0,"p",10),e.qZA(),e.TgZ(12,"div",11)(13,"label",12),e._uU(14,"password "),e.qZA(),e._UZ(15,"input",13),e.TgZ(16,"i",14),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.togglePassword())}),e.qZA(),e.YNc(17,M,2,0,"p",10),e.qZA(),e.TgZ(18,"div",15)(19,"button",16),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.submitLogin())}),e._uU(20,"Login "),e._UZ(21,"i",17),e.qZA()()(),e.TgZ(22,"div",18)(23,"a",19),e._uU(24,"Forget Password?"),e.qZA(),e.TgZ(25,"a",20),e._uU(26,"First Time? Register Now!"),e.qZA()()()()()}if(2&r){const t=e.oxw();e.xp6(5),e.Q6J("formGroup",t.loginForm),e.xp6(5),e.Q6J("ngIf",t.hasError("email","required")),e.xp6(1),e.Q6J("ngIf",t.hasError("email","email")),e.xp6(4),e.Q6J("type",t.showPassword?"text":"password"),e.xp6(1),e.Q6J("ngClass",t.showPassword?"fa-eye-slash":"fa-eye"),e.xp6(1),e.Q6J("ngIf",t.hasError("password","required"))}}function N(r,i){1&r&&(e.TgZ(0,"div",22)(1,"div",23),e.O4$(),e.TgZ(2,"svg",24),e._UZ(3,"path",25)(4,"path",26),e.qZA()(),e.kcU(),e.TgZ(5,"p"),e._uU(6,"Loading "),e.qZA()())}let C=(()=>{class r{constructor(t,n,a,c,p,ce){this.formsService=t,this.swalAlertService=n,this.router=a,this.authApiService=c,this.userStatusService=p,this._SecureLsService=ce,this.loginForm=new o.cw({email:new o.NI(null,[o.kI.required,o.kI.email]),password:new o.NI(null,[o.kI.required])}),this.loading=!1,this.showPassword=!1}hasError(t,n){return this.formsService.checkFormControlError(this.loginForm,t,n)}togglePassword(){this.showPassword=!this.showPassword}submitLogin(){var t=this;return(0,f.Z)(function*(){if(t.loginForm.invalid)return void t.swalAlertService.showToast("warning","All Inputs Required","Please be sure all inputs filled");t.loading=!0;const n=t.loginForm.value,a=yield(0,h.z)(t.authApiService.userLogin(n));"success"==a.status?(t._SecureLsService.encryptData("userId",a.user_id),t.userStatusService.userLogged.next(!0),t.userStatusService.userToken.next(a.token),t.userStatusService.setToken(a.token),t.router.navigate(["home"]),t.swalAlertService.showToast("success","logged successfully"),console.log("user logged =>",t.userStatusService.userLogged.getValue()),console.log("user token =>",t.userStatusService.userToken.getValue())):(t.swalAlertService.fireAlert("error",a.message??"something error happen please try again later","Please Try again Carefully"),console.log("user logged =>",t.userStatusService.userLogged.getValue()),console.log("user token =>",t.userStatusService.userToken.getValue()),t.loading=!1),console.log(a)})()}static#e=this.\u0275fac=function(n){return new(n||r)(e.Y36(w.s),e.Y36(u.W),e.Y36(l.F0),e.Y36(x),e.Y36(b.d),e.Y36(y.H))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-login"]],decls:2,vars:2,consts:[["class","auth-page",4,"ngIf"],["class","loading min-h-[60vh]",4,"ngIf"],[1,"auth-page"],[1,"layout"],[1,"form-box"],[1,"title"],[3,"formGroup"],[1,"control"],["for","email"],["type","email","id","email","placeholder","john.doe@company.com","formControlName","email"],["class","error",4,"ngIf"],[1,"control","password"],["for","password"],["id","password","placeholder","**********","formControlName","password",3,"type"],[1,"fa-solid",3,"ngClass","click"],[1,"submit-btn"],["type","button",1,"btn-blue",3,"click"],[1,"fa-solid","fa-right-to-bracket"],[1,"links"],["routerLink","#"],["routerLink","/auth/register"],[1,"error"],[1,"loading","min-h-[60vh]"],[1,"spinner"],["aria-hidden","true","viewBox","0 0 100 101","fill","none","xmlns","http://www.w3.org/2000/svg",1,"w-16","h-16"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","currentColor"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentFill"]],template:function(n,a){1&n&&(e.YNc(0,T,27,6,"section",0),e.YNc(1,N,7,0,"div",1)),2&n&&(e.Q6J("ngIf",!a.loading),e.xp6(1),e.Q6J("ngIf",a.loading))},dependencies:[g.mk,g.O5,l.rH,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:[".auth-page[_ngcontent-%COMP%]{position:relative;min-height:85vh;background-size:cover;background-image:url(login.b87285519dec1b91.webp)}.auth-page[_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity: .6;padding-left:.5rem;padding-right:.5rem}.form-box[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;width:500px;max-width:100%;border-radius:.375rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:2rem 1.5rem 3rem;--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.form-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:2rem;text-align:center;font-size:2.25rem;line-height:2.5rem;font-weight:500;text-transform:uppercase;letter-spacing:.1em;--tw-text-opacity: 1;color:rgb(17 72 126 / var(--tw-text-opacity))}.form-box[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]{position:relative;margin-bottom:1.5rem}.form-box[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:.5rem;display:block;font-size:.875rem;line-height:1.25rem;font-weight:500;text-transform:capitalize;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.form-box[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:block;width:100%;border-radius:.5rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity));padding:.625rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px}.form-box[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{--tw-border-opacity: 1;border-color:rgb(17 72 126 / var(--tw-border-opacity));--tw-ring-opacity: 1;--tw-ring-color: rgb(17 72 126 / var(--tw-ring-opacity)) }.form-box[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{margin-bottom:0;text-align:center;font-size:.875rem;line-height:1.25rem;font-weight:500;text-transform:capitalize;--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.form-box[_ngcontent-%COMP%]   .control.password[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;right:.75rem;top:2.5rem;cursor:pointer;--tw-text-opacity: 1;color:rgb(17 72 126 / var(--tw-text-opacity))}.form-box[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{margin-bottom:1.5rem;display:flex;align-items:center}.form-box[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:1rem;width:1rem;border-radius:.25rem;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(17 72 126 / var(--tw-text-opacity))}.form-box[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(17 72 126 / var(--tw-ring-opacity)) }.form-box[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-inline-start:.5rem;font-size:1rem;line-height:1.5rem;font-weight:500;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.form-box[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.form-box[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse;align-items:center;justify-content:space-between}@media (min-width: 768px){.form-box[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{flex-direction:row}}.form-box[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-top:1.5rem;font-size:.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity: 1;color:rgb(17 72 126 / var(--tw-text-opacity))}.form-box[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration-line:underline}"]})}return r})();var m=s(4530),d=s(8796);function O(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"First name is required"),e.qZA())}function k(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"Last name is required"),e.qZA())}function I(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"email is required"),e.qZA())}function U(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"email is invalid"),e.qZA())}function J(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"password is required"),e.qZA())}function F(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"password Minimum length is 3"),e.qZA())}function L(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"password is required"),e.qZA())}function Q(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"password Minimum length is 3"),e.qZA())}function Y(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"Phone Number is required"),e.qZA())}function S(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"Phone Number invalid"),e.qZA())}function R(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"Address is required"),e.qZA())}function E(r,i){if(1&r&&(e.TgZ(0,"ng-option",56)(1,"span",57),e._uU(2),e.qZA()()),2&r){const t=i.$implicit;e.Q6J("value",t),e.xp6(2),e.Oqu(t)}}function z(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"Country is required"),e.qZA())}function G(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"Date of birth is required"),e.qZA())}function D(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"Gender is required"),e.qZA())}function j(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"Arrival Date is required"),e.qZA())}function H(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"departure Date is required"),e.qZA())}function B(r,i){if(1&r&&(e.TgZ(0,"ng-option",56)(1,"span",57),e._uU(2),e.qZA()()),2&r){const t=i.$implicit;e.Q6J("value",t),e.xp6(2),e.Oqu(t)}}function $(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"Arrival Airport is required"),e.qZA())}function V(r,i){if(1&r&&(e.TgZ(0,"ng-option",56)(1,"span",57),e._uU(2),e.qZA()()),2&r){const t=i.$implicit;e.Q6J("value",t),e.xp6(2),e.Oqu(t)}}function K(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"departure Airport is required"),e.qZA())}function W(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"Profile Picture invalid"),e.qZA())}function X(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"Passport Number is required"),e.qZA())}function ee(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"Passport Number invalid"),e.qZA())}function te(r,i){1&r&&(e.TgZ(0,"p",55),e._uU(1,"Payment Methods is required"),e.qZA())}function re(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"section",4)(1,"div",5)(2,"h2",6),e._uU(3," Register "),e.qZA(),e.TgZ(4,"form",7)(5,"div",8)(6,"label",9),e._uU(7,"First Name"),e.qZA(),e._UZ(8,"input",10),e.YNc(9,O,2,0,"p",11),e.qZA(),e.TgZ(10,"div",8)(11,"label",12),e._uU(12,"Last Name"),e.qZA(),e._UZ(13,"input",13),e.YNc(14,k,2,0,"p",11),e.qZA(),e.TgZ(15,"div",8)(16,"label",14),e._uU(17,"Email address"),e.qZA(),e._UZ(18,"input",15),e.YNc(19,I,2,0,"p",11),e.YNc(20,U,2,0,"p",11),e.qZA(),e.TgZ(21,"div",16)(22,"label",17),e._uU(23,"password"),e.qZA(),e._UZ(24,"input",18),e.TgZ(25,"i",19),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.togglePassword())}),e.qZA(),e.YNc(26,J,2,0,"p",11),e.YNc(27,F,2,0,"p",11),e.qZA(),e.TgZ(28,"div",16)(29,"label",20),e._uU(30,"Confirm password"),e.qZA(),e._UZ(31,"input",21),e.TgZ(32,"i",19),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.toggleConfirmPassword())}),e.qZA(),e.YNc(33,L,2,0,"p",11),e.YNc(34,Q,2,0,"p",11),e.qZA(),e.TgZ(35,"div",8)(36,"label",22),e._uU(37,"Phone Number"),e.qZA(),e._UZ(38,"input",23),e.YNc(39,Y,2,0,"p",11),e.YNc(40,S,2,0,"p",11),e.qZA(),e.TgZ(41,"div",8)(42,"label",24),e._uU(43,"Address"),e.qZA(),e._UZ(44,"input",25),e.YNc(45,R,2,0,"p",11),e.qZA(),e.TgZ(46,"div",8)(47,"label",26),e._uU(48,"Country"),e.qZA(),e.TgZ(49,"ng-select",27),e.YNc(50,E,3,2,"ng-option",28),e.qZA(),e.YNc(51,z,2,0,"p",11),e.qZA(),e.TgZ(52,"div",8)(53,"label",29),e._uU(54,"Date of birth"),e.qZA(),e._UZ(55,"input",30),e.YNc(56,G,2,0,"p",11),e.qZA(),e.TgZ(57,"div",8)(58,"label",31),e._uU(59," Select Your gender "),e.qZA(),e.TgZ(60,"ng-select",32)(61,"ng-option",33),e._uU(62," Male "),e.qZA(),e.TgZ(63,"ng-option",34),e._uU(64," Female "),e.qZA()(),e.YNc(65,D,2,0,"p",11),e.qZA(),e.TgZ(66,"div",8)(67,"label",35),e._uU(68,"Arrival Date"),e.qZA(),e._UZ(69,"input",36),e.YNc(70,j,2,0,"p",11),e.qZA(),e.TgZ(71,"div",8)(72,"label",37),e._uU(73,"departure Date"),e.qZA(),e._UZ(74,"input",38),e.YNc(75,H,2,0,"p",11),e.qZA(),e.TgZ(76,"div",8)(77,"label",39),e._uU(78,"Arrival Airport"),e.qZA(),e.TgZ(79,"ng-select",40),e.YNc(80,B,3,2,"ng-option",28),e.qZA(),e.YNc(81,$,2,0,"p",11),e.qZA(),e.TgZ(82,"div",8)(83,"label",41),e._uU(84,"departure Airport"),e.qZA(),e.TgZ(85,"ng-select",42),e.YNc(86,V,3,2,"ng-option",28),e.qZA(),e.YNc(87,K,2,0,"p",11),e.qZA(),e.TgZ(88,"div",8)(89,"label",43),e._uU(90,"Profile Picture"),e.qZA(),e._UZ(91,"input",44),e.YNc(92,W,2,0,"p",11),e.qZA(),e.TgZ(93,"div",8)(94,"label",45),e._uU(95,"Passport Number"),e.qZA(),e._UZ(96,"input",46),e.YNc(97,X,2,0,"p",11),e.YNc(98,ee,2,0,"p",11),e.qZA(),e.TgZ(99,"div",8)(100,"label",47),e._uU(101,"Select Your Payment Methods "),e.qZA(),e.TgZ(102,"ng-select",48)(103,"ng-option",49),e._uU(104," Visa "),e.qZA(),e.TgZ(105,"ng-option",50),e._uU(106," MasterCard "),e.qZA()(),e.YNc(107,te,2,0,"p",11),e.qZA(),e.TgZ(108,"div",51)(109,"button",52),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.submitRegister())}),e._uU(110,"Register Now"),e.qZA()()(),e.TgZ(111,"div",53)(112,"a",54),e._uU(113,"Have an account? Login Now!"),e.qZA()()()()}if(2&r){const t=e.oxw();e.xp6(4),e.Q6J("formGroup",t.registerForm),e.xp6(5),e.Q6J("ngIf",t.hasError("First_Name","required")),e.xp6(5),e.Q6J("ngIf",t.hasError("Last_Name","required")),e.xp6(5),e.Q6J("ngIf",t.hasError("email","required")),e.xp6(1),e.Q6J("ngIf",t.hasError("email","email")),e.xp6(4),e.Q6J("type",t.showPassword?"text":"password"),e.xp6(1),e.Q6J("ngClass",t.showPassword?"fa-eye-slash":"fa-eye"),e.xp6(1),e.Q6J("ngIf",t.hasError("password","required")),e.xp6(1),e.Q6J("ngIf",t.hasError("password","minlength")),e.xp6(4),e.Q6J("type",t.showConfirmPassword?"text":"password"),e.xp6(1),e.Q6J("ngClass",t.showConfirmPassword?"fa-eye-slash":"fa-eye"),e.xp6(1),e.Q6J("ngIf",t.hasError("cPassword","required")),e.xp6(1),e.Q6J("ngIf",t.hasError("cPassword","minlength")),e.xp6(5),e.Q6J("ngIf",t.hasError("Phone_Number","required")),e.xp6(1),e.Q6J("ngIf",t.hasError("Phone_Number","pattern")),e.xp6(5),e.Q6J("ngIf",t.hasError("Address","required")),e.xp6(4),e.Q6J("searchable",!0)("clearable",!0),e.xp6(1),e.Q6J("ngForOf",t.countryList),e.xp6(1),e.Q6J("ngIf",t.hasError("Country","required")),e.xp6(5),e.Q6J("ngIf",t.hasError("Date_of_Birth","required")),e.xp6(4),e.Q6J("searchable",!1)("clearable",!0),e.xp6(5),e.Q6J("ngIf",t.hasError("Gender","required")),e.xp6(5),e.Q6J("ngIf",t.hasError("arrival_time","required")),e.xp6(5),e.Q6J("ngIf",t.hasError("departure_time","required")),e.xp6(4),e.Q6J("searchable",!0)("clearable",!0),e.xp6(1),e.Q6J("ngForOf",t.airportList),e.xp6(1),e.Q6J("ngIf",t.hasError("arrival_airport","required")),e.xp6(4),e.Q6J("searchable",!0)("clearable",!0),e.xp6(1),e.Q6J("ngForOf",t.egyptAirportList),e.xp6(1),e.Q6J("ngIf",t.hasError("departure_airport","required")),e.xp6(5),e.Q6J("ngIf",t.hasError("Profile_Picture","pattern")),e.xp6(5),e.Q6J("ngIf",t.hasError("Passport_Number","required")),e.xp6(1),e.Q6J("ngIf",t.hasError("Passport_Number","pattern")),e.xp6(4),e.Q6J("searchable",!1)("clearable",!0),e.xp6(5),e.Q6J("ngIf",t.hasError("Gender","required"))}}function oe(r,i){1&r&&(e.TgZ(0,"div",58)(1,"div",59),e.O4$(),e.TgZ(2,"svg",60),e._UZ(3,"path",61)(4,"path",62),e.qZA()(),e.kcU(),e.TgZ(5,"p"),e._uU(6,"Loading "),e.qZA()())}let ne=(()=>{class r{constructor(t,n,a,c){this.formsService=t,this.swalAlertService=n,this.router=a,this._AuthApiService=c,this.registerForm=new o.cw({email:new o.NI(null,[o.kI.required,o.kI.email]),password:new o.NI(null,[o.kI.required,o.kI.minLength(3)]),First_Name:new o.NI(null,[o.kI.required]),Last_Name:new o.NI(null,[o.kI.required]),cPassword:new o.NI(null,[o.kI.required,o.kI.minLength(3)]),Phone_Number:new o.NI(null,[o.kI.required,o.kI.pattern(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/)]),Address:new o.NI(null,[o.kI.required]),Country:new o.NI(null,[o.kI.required]),Date_of_Birth:new o.NI(null,[o.kI.required]),Gender:new o.NI(null,[o.kI.required]),Passport_Number:new o.NI(null,[o.kI.required,o.kI.pattern(/^[A-Za-z0-9]{6,20}$/)]),arrival_time:new o.NI(null,[o.kI.required]),departure_time:new o.NI(null,[o.kI.required]),arrival_airport:new o.NI(null,[o.kI.required]),departure_airport:new o.NI(null,[o.kI.required]),Profile_Picture:new o.NI(null,[o.kI.pattern(/^(https?:\/\/)?((([a-zA-Z0-9\-]+)\.)+([a-zA-Z]{2,})(:[0-9]{2,5})?(\/[^\s]*)?)$/)]),Payment_Methods:new o.NI(null,[o.kI.required])}),this.countryList=m.Jm,this.egyptAirportList=m.Lh,this.airportList=m.nf,this.showPassword=!1,this.showConfirmPassword=!1,this.loading=!1}hasError(t,n){return this.formsService.checkFormControlError(this.registerForm,t,n)}togglePassword(){this.showPassword=!this.showPassword}toggleConfirmPassword(){this.showConfirmPassword=!this.showConfirmPassword}passwordMatchValidator(t){return t.get("password").value===t.get("cPassword").value}submitRegister(){var t=this;return(0,f.Z)(function*(){try{if(t.loading=!0,!t.passwordMatchValidator(t.registerForm))return t.swalAlertService.showToast("warning","Password not match","Password don't match confirm password"),void(t.loading=!1);if(t.registerForm.invalid)return t.swalAlertService.showToast("warning","All Inputs Required","Please be sure all inputs filled"),console.log(t.registerForm),void(t.loading=!1);t.registerForm.get("Profile_Picture").value||t.registerForm.get("Profile_Picture")?.setValue("https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg");const a=t.registerForm.value;delete a.cPassword;const c=a;console.log(c,"register data");const p=yield(0,h.z)(t._AuthApiService.userRegister(c));console.log(p),"success"==p.status&&(t.swalAlertService.fireAlert("success","registered successfully \u2705","will be redirect to login page"),t.router.navigate(["/auth/login"]),t.loading=!1),t.loading=!1}catch(n){t.swalAlertService.fireAlert("error",n.error.message??"something happen wrong","please try again"),t.loading=!1}})()}static#e=this.\u0275fac=function(n){return new(n||r)(e.Y36(w.s),e.Y36(u.W),e.Y36(l.F0),e.Y36(x))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-register"]],decls:4,vars:2,consts:[["class","auth-page",4,"ngIf"],["class","loading min-h-[60vh]",4,"ngIf"],["src","../../../../../assets/images/auth/register.svg","alt","",1,"svg-bg"],["src","../../../../../assets/images/auth/register2.svg","alt","",1,"svg-bg2"],[1,"auth-page"],[1,"form-box"],[1,"title"],[3,"formGroup"],[1,"control"],["for","First_Name"],["type","text","id","First_Name","placeholder","John","formControlName","First_Name"],["class","error",4,"ngIf"],["for","Last_Name"],["type","text","id","Last_Name","placeholder","Micheal","formControlName","Last_Name"],["for","email"],["type","email","id","email","placeholder","john.doe@company.com","formControlName","email"],[1,"control","password"],["for","password"],["id","password","placeholder","**********","formControlName","password","autocomplete","false",3,"type"],[1,"fa-solid",3,"ngClass","click"],["for","cPassword"],["id","cPassword","placeholder","**********","formControlName","cPassword","autocomplete","false",3,"type"],["for","Phone_Number"],["type","text","id","Phone_Number","placeholder","Ex: 002 0123456789","formControlName","Phone_Number"],["for","Address"],["type","text","id","Address","placeholder","**********","formControlName","Address"],["for","Country"],["appearance","outline","labelForId","Country","formControlName","Country",3,"searchable","clearable"],[3,"value",4,"ngFor","ngForOf"],["for","Date_of_Birth"],["type","date","id","Date_of_Birth","placeholder","12/12/2020","formControlName","Date_of_Birth"],["for","Gender",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["appearance","outline","labelForId","Gender","formControlName","Gender",3,"searchable","clearable"],["value","male"],["value","female"],["for","arrival_time"],["type","datetime-local","id","arrival_time","placeholder","12/12/2020","formControlName","arrival_time"],["for","departure_time"],["type","datetime-local","id","departure_time","placeholder","12/12/2020","formControlName","departure_time"],["for","arrival_airport"],["appearance","outline","labelForId","arrival_airport","formControlName","arrival_airport",3,"searchable","clearable"],["for","departure_airport"],["appearance","outline","labelForId","departure_airport","formControlName","departure_airport",3,"searchable","clearable"],["for","Profile_Picture"],["type","text","id","Profile_Picture","placeholder","paste photo url","formControlName","Profile_Picture"],["for","Passport_Number"],["type","text","id","Passport_Number","placeholder","Ex: 002 0123456789","formControlName","Passport_Number"],["for","Payment_Methods",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["appearance","outline","labelForId","Payment_Methods","formControlName","Payment_Methods",3,"searchable","clearable"],["value","visa"],["value","mastercard"],[1,"submit-btn","w-full"],[1,"btn-blue",3,"click"],[1,"links"],["routerLink","/auth/login"],[1,"error"],[3,"value"],[1,"capitalize"],[1,"loading","min-h-[60vh]"],[1,"spinner"],["aria-hidden","true","viewBox","0 0 100 101","fill","none","xmlns","http://www.w3.org/2000/svg",1,"w-16","h-16"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","currentColor"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentFill"]],template:function(n,a){1&n&&(e.YNc(0,re,114,40,"section",0),e.YNc(1,oe,7,0,"div",1),e._UZ(2,"img",2)(3,"img",3)),2&n&&(e.Q6J("ngIf",!a.loading),e.xp6(1),e.Q6J("ngIf",a.loading))},dependencies:[g.mk,g.sg,g.O5,l.rH,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,d.w9,d.jq],styles:['.auth-page[_ngcontent-%COMP%]{position:relative;background-size:cover;padding-top:3rem;padding-bottom:3rem}.form-box[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;width:500px;max-width:100%;border-radius:.375rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:2rem 1.5rem 3rem;--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.form-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:2rem;text-align:center;font-size:2.25rem;line-height:2.5rem;font-weight:500;text-transform:uppercase;letter-spacing:.1em;--tw-text-opacity: 1;color:rgb(17 72 126 / var(--tw-text-opacity))}.form-box[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]{position:relative;margin-bottom:1.5rem;width:100%}.form-box[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:.5rem;display:block;font-size:.875rem;line-height:1.25rem;font-weight:500;text-transform:capitalize;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.form-box[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after{margin-inline-start:.25rem;font-weight:700;--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity));--tw-content: "*";content:var(--tw-content)}.form-box[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:block;width:100%;border-radius:.5rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity));padding:.625rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px}.form-box[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{--tw-border-opacity: 1;border-color:rgb(17 72 126 / var(--tw-border-opacity));--tw-ring-opacity: 1;--tw-ring-color: rgb(17 72 126 / var(--tw-ring-opacity)) }.form-box[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{margin-bottom:0;text-align:center;font-size:.875rem;line-height:1.25rem;font-weight:500;text-transform:capitalize;--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.form-box[_ngcontent-%COMP%]   .control.password[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;right:.75rem;top:2.5rem;cursor:pointer;--tw-text-opacity: 1;color:rgb(17 72 126 / var(--tw-text-opacity))}.form-box[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{margin-bottom:1.5rem;display:flex;align-items:center}.form-box[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:1rem;width:1rem;border-radius:.25rem;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(17 72 126 / var(--tw-text-opacity))}.form-box[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(17 72 126 / var(--tw-ring-opacity)) }.form-box[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-inline-start:.5rem;font-size:1rem;line-height:1.5rem;font-weight:500;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.form-box[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.form-box[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse;align-items:center;justify-content:center}@media (min-width: 768px){.form-box[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{flex-direction:row}}.form-box[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-top:1.5rem;font-size:.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity: 1;color:rgb(17 72 126 / var(--tw-text-opacity))}.form-box[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration-line:underline}.svg-bg[_ngcontent-%COMP%]{position:fixed;top:170px;left:20px;display:none;width:400px}@media (min-width: 1024px){.svg-bg[_ngcontent-%COMP%]{display:block}}.svg-bg2[_ngcontent-%COMP%]{position:fixed;top:170px;right:20px;display:none;width:400px}@media (min-width: 1024px){.svg-bg2[_ngcontent-%COMP%]{display:block}}']})}return r})(),v=(()=>{class r{constructor(t,n,a){this.userStatusService=t,this.router=n,this.swalAlertService=a}canActivate(){return!this.userStatusService.isLoggedIn()||(this.router.navigate(["/home"]),this.swalAlertService.fireAlert("warning","user already logged","The login page cannot be seen when you are already logged in"),!1)}static#e=this.\u0275fac=function(n){return new(n||r)(e.LFG(b.d),e.LFG(l.F0),e.LFG(u.W))};static#t=this.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();const ie=[{path:"",pathMatch:"full",component:C,canActivate:[v]},{path:"login",component:C,canActivate:[v]},{path:"register",component:ne}];let ae=(()=>{class r{static#e=this.\u0275fac=function(n){return new(n||r)};static#t=this.\u0275mod=e.oAB({type:r});static#r=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(ie),l.Bz]})}return r})(),se=(()=>{class r{static#e=this.\u0275fac=function(n){return new(n||r)};static#t=this.\u0275mod=e.oAB({type:r});static#r=this.\u0275inj=e.cJS({imports:[g.ez,ae,o.UX,d.A0,o.u5]})}return r})()}}]);