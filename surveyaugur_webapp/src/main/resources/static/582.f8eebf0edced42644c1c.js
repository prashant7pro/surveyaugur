(self.webpackChunksurveyaugur_webapp=self.webpackChunksurveyaugur_webapp||[]).push([[582],{9582:(t,e,n)=>{"use strict";n.r(e),n.d(e,{questiongroupsModule:()=>L});var o=n(8583),a=n(8295),i=n(4655),r=n(6461),c=n(7716),u=n(2238),s=n(3679),l=n(3166),m=n(8341),p=n(1095),d=n(6627);function g(t,e){1&t&&(c.TgZ(0,"mat-icon",17),c._uU(1,"cancel"),c.qZA())}function f(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"mat-chip",15),c.NdJ("removed",function(){const e=c.CHM(t).$implicit;return c.oxw().remove(e)}),c._uU(1),c.YNc(2,g,2,0,"mat-icon",16),c.qZA()}if(2&t){const t=e.$implicit,n=c.oxw();c.Q6J("selectable",n.selectable)("removable",n.removable),c.xp6(1),c.hij(" ",t.name," "),c.xp6(1),c.Q6J("ngIf",n.removable)}}let Z=(()=>{class t{constructor(){this.selectable=!0,this.removable=!0,this.addOnBlur=!0,this.separatorKeysCodes=[r.K5,r.OC],this.tags=[],this.questionGroupDetails={}}add(t){const e=(t.value||"").trim();e&&this.tags.push({name:e}),t.chipInput.clear()}remove(t){const e=this.tags.indexOf(t);e>=0&&this.tags.splice(e,1)}ngOnInit(){}getData(t){console.warn(t),this.questionGroupDetails=t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-addquestiongroup"]],decls:27,vars:6,consts:[["mat-dialog-title","",2,"background-color","#f7703f","text-align","center"],[1,"mat-typography",2,"height","500px","width","500px"],[1,"example-form",3,"ngSubmit"],["basicForm","ngForm"],["cellspacing","0",1,"example-full-width",2,"margin-top","30px"],["appearance","fill",1,"example-full-width"],["matInput","","type","text","ngModel","","name","questionGroupName"],["appearance","fill",1,"example-chip-list"],["aria-label","Tag selection"],["chipList",""],[3,"selectable","removable","removed",4,"ngFor","ngForOf"],["type","text","name","questionTags","placeholder","New Tag",3,"ngModel","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["align","end"],["mat-button","","mat-dialog-close",""],["type","submit","mat-button","","cdkFocusInitial","",3,"mat-dialog-close"],[3,"selectable","removable","removed"],["matChipRemove","",4,"ngIf"],["matChipRemove",""]],template:function(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"h2",0),c._uU(1,"ADD QuestionGroup"),c.qZA(),c._UZ(2,"hr"),c.TgZ(3,"mat-dialog-content",1),c.TgZ(4,"form",2,3),c.NdJ("ngSubmit",function(){c.CHM(t);const n=c.MAs(5);return e.getData(n.value)}),c.TgZ(6,"table",4),c.TgZ(7,"tr"),c.TgZ(8,"td"),c.TgZ(9,"mat-form-field",5),c.TgZ(10,"mat-label"),c._uU(11,"QuestionGroup Name:"),c.qZA(),c._UZ(12,"input",6),c.qZA(),c.qZA(),c.qZA(),c.TgZ(13,"tr"),c.TgZ(14,"td"),c.TgZ(15,"mat-form-field",7),c.TgZ(16,"mat-label"),c._uU(17,"Question Tags"),c.qZA(),c.TgZ(18,"mat-chip-list",8,9),c.YNc(20,f,3,4,"mat-chip",10),c.TgZ(21,"input",11),c.NdJ("matChipInputTokenEnd",function(t){return e.add(t)}),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(22,"mat-dialog-actions",12),c.TgZ(23,"button",13),c._uU(24,"Cancel"),c.qZA(),c.TgZ(25,"button",14),c._uU(26,"Submit"),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=c.MAs(19);c.xp6(20),c.Q6J("ngForOf",e.tags),c.xp6(1),c.s9C("ngModel",e.tags),c.Q6J("matChipInputFor",t)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes)("matChipInputAddOnBlur",e.addOnBlur),c.xp6(4),c.Q6J("mat-dialog-close",!0)}},directives:[u.uh,u.xY,s._Y,s.JL,s.F,a.KE,a.hX,l.Nt,s.Fj,s.JJ,s.On,m.qn,o.sg,m.oH,u.H8,p.lW,u.ZT,m.HS,o.O5,d.Hw,m.qH],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%;font-size:medium;color:#f7703f}td[_ngcontent-%COMP%]{padding-right:8px}.example-chip-list[_ngcontent-%COMP%]{width:100%}"]}),t})();var h=n(2789),w=n(8590);function A(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"div"),c.TgZ(1,"h2"),c._uU(2,"QuestionGroup-Home "),c.qZA(),c._UZ(3,"hr"),c._UZ(4,"br"),c._UZ(5,"br"),c._UZ(6,"br"),c.TgZ(7,"div"),c.TgZ(8,"h2",1),c._uU(9,"Create Your First QuestionGroup"),c.qZA(),c.qZA(),c._UZ(10,"br"),c._UZ(11,"br"),c._UZ(12,"br"),c.TgZ(13,"div",2),c.TgZ(14,"div",3),c.TgZ(15,"button",4),c.NdJ("click",function(){return c.CHM(t),c.oxw().openDialog()}),c.TgZ(16,"mat-icon",5),c._uU(17,"add"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()}}function T(t,e){1&t&&(c.TgZ(0,"mat-header-cell",20),c._uU(1," SNo. "),c.qZA())}function b(t,e){if(1&t&&(c.TgZ(0,"mat-cell",21),c.TgZ(1,"b"),c._uU(2),c.qZA(),c.qZA()),2&t){const t=e.$implicit;c.xp6(2),c.Oqu(t.position+".")}}function q(t,e){1&t&&(c.TgZ(0,"mat-header-cell",20),c._uU(1," QuestionGroup Name "),c.qZA())}const C=function(t){return["questiongrouphome",t]};function _(t,e){if(1&t&&(c.TgZ(0,"mat-cell",22),c.TgZ(1,"a",23),c._uU(2),c.qZA(),c._UZ(3,"router-outlet"),c.qZA()),2&t){const t=e.$implicit;c.xp6(1),c.Q6J("routerLink",c.VKq(2,C,t.position)),c.xp6(1),c.Oqu(t.name)}}function x(t,e){1&t&&(c.TgZ(0,"mat-header-cell",20),c._uU(1," Created On "),c.qZA())}function y(t,e){if(1&t&&(c.TgZ(0,"mat-cell",22),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.xp6(1),c.hij(" ",t.createdOn," ")}}function O(t,e){1&t&&(c.TgZ(0,"mat-header-cell",20),c._uU(1," Actions "),c.qZA())}function k(t,e){1&t&&(c.TgZ(0,"mat-cell"),c.TgZ(1,"mat-icon",24),c._uU(2,"edit"),c.qZA(),c.qZA())}function U(t,e){1&t&&c._UZ(0,"mat-header-row")}function v(t,e){1&t&&c._UZ(0,"mat-row")}function N(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"div"),c.TgZ(1,"h2"),c._uU(2,"QuestionGroup-Home "),c.qZA(),c._UZ(3,"hr"),c.TgZ(4,"div",6),c.TgZ(5,"mat-table",7),c.ynx(6,8),c.YNc(7,T,2,0,"mat-header-cell",9),c.YNc(8,b,3,1,"mat-cell",10),c.BQk(),c.ynx(9,11),c.YNc(10,q,2,0,"mat-header-cell",9),c.YNc(11,_,4,4,"mat-cell",12),c.BQk(),c.ynx(12,13),c.YNc(13,x,2,0,"mat-header-cell",9),c.YNc(14,y,2,1,"mat-cell",12),c.BQk(),c.ynx(15,14),c.YNc(16,O,2,0,"mat-header-cell",9),c.YNc(17,k,3,0,"mat-cell",15),c.BQk(),c.YNc(18,U,1,0,"mat-header-row",16),c.YNc(19,v,1,0,"mat-row",17),c.qZA(),c.qZA(),c.TgZ(20,"div",18),c.TgZ(21,"button",19),c.NdJ("click",function(){return c.CHM(t),c.oxw().openDialog()}),c.TgZ(22,"mat-icon"),c._uU(23,"add"),c.qZA(),c.qZA(),c.qZA(),c._UZ(24,"router-outlet"),c.qZA()}if(2&t){const t=c.oxw();c.xp6(5),c.Q6J("dataSource",t.dataSource),c.xp6(13),c.Q6J("matHeaderRowDef",t.displayedColumns),c.xp6(1),c.Q6J("matRowDefColumns",t.displayedColumns)}}const D=[{position:1,name:"Hydrogen",createdOn:"sun Aug 15 20:52:25 IST 2021"},{position:2,name:"Helium",createdOn:"sun Aug 15 20:52:25 IST 2021"},{position:3,name:"Lithium",createdOn:"sun Aug 15 20:52:25 IST 2021"},{position:4,name:"Beryllium",createdOn:"sun Aug 15 20:52:25 IST 2021"},{position:5,name:"Boron",createdOn:"sun Aug 15 20:52:25 IST 2021"},{position:6,name:"Carbon",createdOn:"sun Aug 15 20:52:25 IST 2021"},{position:7,name:"Nitrogen",createdOn:"sun Aug 15 20:52:25 IST 2021"},{position:8,name:"Oxygen",createdOn:"sun Aug 15 20:52:25 IST 2021"},{position:9,name:"Fluorine",createdOn:"sun Aug 15 20:52:25 IST 2021"},{position:10,name:"Neon",createdOn:"sun Aug 15 20:52:25 IST 2021"},{position:10,name:"Neon",createdOn:"sun Aug 15 20:52:25 IST 2021"},{position:10,name:"Neon",createdOn:"sun Aug 15 20:52:25 IST 2021"},{position:10,name:"Neon",createdOn:"sun Aug 15 20:52:25 IST 2021"},{position:10,name:"Neon",createdOn:"sun Aug 15 20:52:25 IST 2021"},{position:10,name:"Neon",createdOn:"sun Aug 15 20:52:25 IST 2021"},{position:10,name:"Neon",createdOn:"sun Aug 15 20:52:25 IST 2021"}];function I(t,e){1&t&&(c.TgZ(0,"mat-header-cell",16),c._uU(1," SNo. "),c.qZA())}function Q(t,e){if(1&t&&(c.TgZ(0,"mat-cell",17),c.TgZ(1,"b"),c._uU(2),c.qZA(),c.qZA()),2&t){const t=e.$implicit;c.xp6(2),c.Oqu(t.position+".")}}function M(t,e){1&t&&(c.TgZ(0,"mat-header-cell",16),c._uU(1," Question Body "),c.qZA())}function S(t,e){if(1&t&&(c.TgZ(0,"mat-cell",18),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.xp6(1),c.hij("",t.questionBody," ")}}function B(t,e){1&t&&(c.TgZ(0,"mat-header-cell",16),c._uU(1," Question Type "),c.qZA())}function H(t,e){if(1&t&&(c.TgZ(0,"mat-cell",18),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.xp6(1),c.hij(" ",t.questionType," ")}}function Y(t,e){1&t&&(c.TgZ(0,"mat-header-cell",16),c._uU(1," Actions "),c.qZA())}function J(t,e){1&t&&(c.TgZ(0,"mat-cell"),c.TgZ(1,"mat-icon",19),c._uU(2,"edit"),c.qZA(),c.TgZ(3,"mat-icon",20),c._uU(4,"delete"),c.qZA(),c.qZA())}function P(t,e){1&t&&c._UZ(0,"mat-header-row")}function z(t,e){1&t&&c._UZ(0,"mat-row")}const F=function(){return["questions"]},j=[{position:1,questionBody:"Is Java Object Oriented Language?",questionType:"Java"},{position:2,questionBody:"What is Spring?",questionType:"Spring"}],G=[{path:"",component:(()=>{class t{constructor(t,e){this.dialog=t,this.router=e,this.show=!1,this.displayedColumns=["position","name","createdOn","Actions"],this.dataSource=D}ngOnInit(){}openDialog(){this.dialog.open(Z).afterClosed().subscribe(t=>{console.log(`Dialog result: ${t}`)})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(u.uw),c.Y36(i.F0))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-questiongroups"]],decls:2,vars:2,consts:[[4,"ngIf"],[2,"text-align","center"],[1,"container"],[1,"center"],["mat-fab","","title","Click to ADD QuestionGroup",2,"background-color","#f7703f","height","130px","width","130px",3,"click"],[2,"font-size","30px","text-align","center"],[2,"margin-top","20px"],[1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["class","tableHeader",4,"matHeaderCellDef"],["class","change","style","font-size: medium;width: 20px",4,"matCellDef"],["matColumnDef","name"],["style","font-size: medium",4,"matCellDef"],["matColumnDef","createdOn"],["matColumnDef","Actions"],[4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[1,"downright"],["mat-fab","","title","Click to ADD QuestionGroup",2,"background-color","#f7703f",3,"click"],[1,"tableHeader"],[1,"change",2,"font-size","medium","width","20px"],[2,"font-size","medium"],[2,"text-decoration","none",3,"routerLink"],["matTooltip","Edit",1,"myIcons"]],template:function(t,e){1&t&&(c.YNc(0,A,18,0,"div",0),c.YNc(1,N,25,3,"div",0)),2&t&&(c.Q6J("ngIf",e.show),c.xp6(1),c.Q6J("ngIf",!e.show))},directives:[o.O5,p.lW,d.Hw,h.BZ,h.w1,h.fO,h.Dz,h.as,h.nj,i.lC,h.ge,h.ev,i.yS,w.gM,h.XQ,h.Gk],styles:[".container[_ngcontent-%COMP%]{height:200px;position:relative}.center[_ngcontent-%COMP%]{margin:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.demo-table[_ngcontent-%COMP%]{width:100%}.downright[_ngcontent-%COMP%]{position:absolute;bottom:100px;right:40px}.tableHeader[_ngcontent-%COMP%]{background-color:#1e90ff;font-size:medium;justify-content:center}.myIcons[_ngcontent-%COMP%]{cursor:pointer;padding:3px}.mat-column-position[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 5%!important;width:5%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-name[_ngcontent-%COMP%]{justify-content:center}.mat-column-createdOn[_ngcontent-%COMP%]{flex:0 0 20%!important;width:20%!important}.mat-column-Actions[_ngcontent-%COMP%], .mat-column-createdOn[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-Actions[_ngcontent-%COMP%]{flex:0 0 7%!important;width:7%!important;justify-content:center}"]}),t})()},{path:"questiongrouphome/:id",component:(()=>{class t{constructor(){this.displayedColumns=["position","questionBody","questionType","Actions"],this.dataSource=j}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-questiongrouphome"]],decls:33,vars:5,consts:[["xmlns","http://www.w3.org/1999/html"],[1,"contents"],[1,"txtSize"],[1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["class","tableHeader",4,"matHeaderCellDef"],["class","change","style","font-size: medium;width: 20px",4,"matCellDef"],["matColumnDef","questionBody"],["style","font-size: medium",4,"matCellDef"],["matColumnDef","questionType"],["matColumnDef","Actions"],[4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[1,"downright"],["mat-fab","","matTooltip","Click to Add Questions",2,"background-color","#f7703f",3,"routerLink"],[1,"tableHeader"],[1,"change",2,"font-size","medium","width","20px"],[2,"font-size","medium"],["matTooltip","Edit",1,"myIcons"],["matTooltip","Delete",1,"myIcons"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"h2"),c._uU(2,"Question Group Name"),c.qZA(),c._UZ(3,"hr"),c.qZA(),c.TgZ(4,"div",1),c._UZ(5,"br"),c.TgZ(6,"b",2),c._uU(7,"Question Group Tags :"),c.qZA(),c._UZ(8,"br"),c._UZ(9,"br"),c._UZ(10,"br"),c.TgZ(11,"b",2),c._uU(12,"Question Group creation Date :"),c.qZA(),c.qZA(),c.TgZ(13,"div"),c.TgZ(14,"mat-table",3),c.ynx(15,4),c.YNc(16,I,2,0,"mat-header-cell",5),c.YNc(17,Q,3,1,"mat-cell",6),c.BQk(),c.ynx(18,7),c.YNc(19,M,2,0,"mat-header-cell",5),c.YNc(20,S,2,1,"mat-cell",8),c.BQk(),c.ynx(21,9),c.YNc(22,B,2,0,"mat-header-cell",5),c.YNc(23,H,2,1,"mat-cell",8),c.BQk(),c.ynx(24,10),c.YNc(25,Y,2,0,"mat-header-cell",5),c.YNc(26,J,5,0,"mat-cell",11),c.BQk(),c.YNc(27,P,1,0,"mat-header-row",12),c.YNc(28,z,1,0,"mat-row",13),c.qZA(),c.qZA(),c.TgZ(29,"div",14),c.TgZ(30,"button",15),c.TgZ(31,"mat-icon"),c._uU(32,"add"),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(14),c.Q6J("dataSource",e.dataSource),c.xp6(13),c.Q6J("matHeaderRowDef",e.displayedColumns),c.xp6(1),c.Q6J("matRowDefColumns",e.displayedColumns),c.xp6(2),c.Q6J("routerLink",c.DdM(4,F)))},directives:[h.BZ,h.w1,h.fO,h.Dz,h.as,h.nj,p.lW,w.gM,i.rH,d.Hw,h.ge,h.ev,h.XQ,h.Gk],styles:[".contents[_ngcontent-%COMP%]{height:20%;width:100%;background-color:#d3d3d3}.txtSize[_ngcontent-%COMP%]{font-size:medium;padding-left:40px}.myIcons[_ngcontent-%COMP%]{cursor:pointer;padding:3px}.tableHeader[_ngcontent-%COMP%]{background-color:#1e90ff;font-size:medium;justify-content:center}.mat-column-position[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 10%!important;width:10%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-position[_ngcontent-%COMP%], .mat-column-questionBody[_ngcontent-%COMP%]{justify-content:center}.mat-column-Actions[_ngcontent-%COMP%], .mat-column-questionType[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 10%!important;width:10%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;justify-content:center;-webkit-hyphens:auto;hyphens:auto}.mat-elevation-z8[_ngcontent-%COMP%]{margin-left:30px;margin-right:30px;margin-top:20px}.downright[_ngcontent-%COMP%]{position:absolute;bottom:100px;right:40px}"]}),t})()}];let R=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[i.Bz.forChild(G)],i.Bz]}),t})();var E=n(3738),$=n(1841);let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[o.ez,R,p.ot,d.Ps,u.Is,s.UX,a.lN,E.QW,l.c,m.Hi,s.u5,h.p0,w.AV,i.Bz,$.JF],i.Bz]}),t})()}}]);