"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8439],{8439:(b,u,a)=>{a.r(u),a.d(u,{CreatePetPageModule:()=>f});var g=a(177),o=a(4341),n=a(7863),c=a(70),e=a(4438),d=a(3656),p=a(4796);const P=[{path:"",component:(()=>{var t;class i{constructor(r,l,m){this.formBuilder=r,this.navCtrl=l,this.petService=m,this.petForm=this.formBuilder.group({nombre:["",o.k0.required],especie:["",o.k0.required],raza:["",o.k0.required],sexo:["",o.k0.required],edad:["",o.k0.required],peso:["",o.k0.required]})}ngOnInit(){}onSubmit(){this.petForm.valid?(this.petService.addPet(this.petForm.value),console.log("mascota:",this.petForm.value),this.navCtrl.navigateRoot("/auth/my-pets")):console.log("mascota erronea")}goBack(){this.navCtrl.back()}}return(t=i).\u0275fac=function(r){return new(r||t)(e.rXU(o.ok),e.rXU(d.q9),e.rXU(p.Tl))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-create-pet"]],decls:34,vars:1,consts:[[3,"ngSubmit","formGroup"],["position","floating"],["formControlName","nombre"],["formControlName","especie"],["formControlName","raza"],["formControlName","sexo"],["formControlName","edad"],["formControlName","peso"],["type","submit","color","success"],["type","submit","color","medium",3,"click"]],template:function(r,l){1&r&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"Ingrese datos de la mascota"),e.k0s()()(),e.j41(4,"ion-content")(5,"form",0),e.bIt("ngSubmit",function(){return l.onSubmit()}),e.j41(6,"ion-item")(7,"ion-label",1),e.EFF(8,"Nombre"),e.k0s(),e.nrm(9,"ion-input",2),e.k0s(),e.j41(10,"ion-item")(11,"ion-label",1),e.EFF(12,"Especie"),e.k0s(),e.nrm(13,"ion-input",3),e.k0s(),e.j41(14,"ion-item")(15,"ion-label",1),e.EFF(16,"Raza"),e.k0s(),e.nrm(17,"ion-input",4),e.k0s(),e.j41(18,"ion-item")(19,"ion-label",1),e.EFF(20,"Sexo"),e.k0s(),e.nrm(21,"ion-input",5),e.k0s(),e.j41(22,"ion-item")(23,"ion-label",1),e.EFF(24,"Edad"),e.k0s(),e.nrm(25,"ion-input",6),e.k0s(),e.j41(26,"ion-item")(27,"ion-label",1),e.EFF(28,"Peso (kg)"),e.k0s(),e.nrm(29,"ion-input",7),e.k0s(),e.j41(30,"ion-button",8),e.EFF(31,"Guardar"),e.k0s(),e.j41(32,"ion-button",9),e.bIt("click",function(){return l.goBack()}),e.EFF(33,"Volver"),e.k0s()()()),2&r&&(e.R7$(5),e.Y8G("formGroup",l.petForm))},dependencies:[o.qT,o.BC,o.cb,n.Jm,n.W9,n.eU,n.$w,n.uz,n.he,n.BC,n.ai,n.Gw,o.j4,o.JD],styles:['@charset "UTF-8";ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: rgb(2, 0, 36);--background: linear-gradient(180deg, rgb(224, 230, 225) 0%, rgba(12, 159, 18, 1) 0%, rgb(9, 43, 0) 100%)}ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{color:#fff;font-weight:700;display:block;width:100%;padding:10px 0;box-sizing:border-box;text-align:center}ion-content[_ngcontent-%COMP%]{margin-top:20px}ion-item[_ngcontent-%COMP%]{--color-focused: black;--background-focused: #e0f7fa;--border-radius: 8px;margin:10px 0}ion-label[_ngcontent-%COMP%]{color:#000}ion-input[_ngcontent-%COMP%]{color:#000}ion-button[_ngcontent-%COMP%]{font-size:1rem;padding:.75rem 1.5rem;margin-top:20px;--border-radius: 8px}']}),i})()}];let C=(()=>{var t;class i{}return(t=i).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[c.iI.forChild(P),c.iI]}),i})(),f=(()=>{var t;class i{}return(t=i).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[g.MD,o.YN,n.bv,C,o.X1]}),i})()}}]);