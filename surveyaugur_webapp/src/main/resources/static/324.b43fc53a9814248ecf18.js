(self.webpackChunksurveyaugur_webapp=self.webpackChunksurveyaugur_webapp||[]).push([[324],{768:(t,e,n)=>{"use strict";n.r(e),n.d(e,{SurveysModule:()=>_});var o=n(8583),a=n(1095),r=n(4655),i=n(2789),c=n(7716),u=n(1841),s=n(2199),l=n(5939);function d(t,e){1&t&&(c.TgZ(0,"th",14),c._uU(1,"SNo. "),c.qZA())}function h(t,e){if(1&t&&(c.TgZ(0,"td",15),c._uU(1),c.qZA()),2&t){const t=e.index;c.xp6(1),c.hij(" ",t+1," ")}}function m(t,e){1&t&&(c.TgZ(0,"th",14),c._uU(1," SurveyTitle "),c.qZA())}function p(t,e){if(1&t&&(c.TgZ(0,"td",15),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.xp6(1),c.hij(" ",t.surveyTitle," ")}}function g(t,e){1&t&&(c.TgZ(0,"th",14),c._uU(1," Actions "),c.qZA())}function b(t,e){1&t&&(c.TgZ(0,"td",15),c.TgZ(1,"button",16),c._uU(2,"Preview"),c.qZA(),c._uU(3,"\xa0\xa0\xa0 "),c.TgZ(4,"button",17),c._uU(5,"DeActivate"),c.qZA(),c.qZA())}function v(t,e){1&t&&c._UZ(0,"tr",18)}function w(t,e){1&t&&c._UZ(0,"tr",19)}function Z(t,e){if(1&t&&(c.TgZ(0,"tr"),c.TgZ(1,"td"),c._uU(2),c.qZA(),c._uU(3,"\xa0\xa0\xa0\xa0\xa0\xa0 "),c.TgZ(4,"td"),c._uU(5),c.qZA(),c._uU(6,"\xa0\xa0\xa0 "),c.TgZ(7,"td"),c.TgZ(8,"button",16),c._uU(9,"Preview"),c.qZA(),c._uU(10,"\xa0\xa0\xa0 "),c.TgZ(11,"button",17),c._uU(12,"Activate"),c.qZA(),c.qZA(),c.qZA()),2&t){const t=e.$implicit,n=e.index;c.xp6(2),c.hij(" ",n+1," "),c.xp6(3),c.hij(" ",t.title," ")}}const f=[{path:"",component:(()=>{class t{constructor(t,e){this.http=t,this.user=e,this.displayedColumns=["position","name","Actions"],this.activeById=[],this.inactiveSurvey=[],this.activeSurvey=[],this.id="ca9dac86-f327-4491-9e46-3400a3a996b4"}ngOnInit(){this.http.get("/surveyauthor/api/v1/surveys/users/ca9dac86-f327-4491-9e46-3400a3a996b4").subscribe(t=>{this.inactiveSurvey=t.result,console.log(t),console.log(this.inactiveSurvey)}),this.http.get("/surveyengine/api/v1/surveys").subscribe(t=>{console.log(t.result),this.activeSurvey=t.result,console.log(this.activeSurvey),this.getById(),console.log(this.activeById),this.dataSource=new i.by(this.activeById)})}getById(){for(let t=0;t<this.activeSurvey.length;t++)this.activeSurvey[t].createdBy.toString()===this.id.toString()&&this.activeById.push(this.activeSurvey[t])}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(u.eN),c.Y36(s._))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-surveys"]],decls:33,vars:4,consts:[[1,"sub-heading"],[2,"width","100%"],["label","Active Surveys"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","","class","tableHeader",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","Actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["label","InActive Surveys"],[1,"table","table-stripe"],[4,"ngFor","ngForIn"],["mat-header-cell","",1,"tableHeader"],["mat-cell",""],["mat-raised-button","","color","accent",2,"width","6em"],["mat-raised-button","","color","primary",2,"width","7em"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(c.TgZ(0,"p",0),c._uU(1,"Surveys"),c.qZA(),c._UZ(2,"hr",1),c.TgZ(3,"mat-tab-group"),c.TgZ(4,"mat-tab",2),c._UZ(5,"br"),c._UZ(6,"br"),c.TgZ(7,"table",3),c.ynx(8,4),c.YNc(9,d,2,0,"th",5),c.YNc(10,h,2,1,"td",6),c.BQk(),c.ynx(11,7),c.YNc(12,m,2,0,"th",5),c.YNc(13,p,2,1,"td",6),c.BQk(),c.ynx(14,8),c.YNc(15,g,2,0,"th",5),c.YNc(16,b,6,0,"td",6),c.BQk(),c.YNc(17,v,1,0,"tr",9),c.YNc(18,w,1,0,"tr",10),c.qZA(),c.qZA(),c.TgZ(19,"mat-tab",11),c._UZ(20,"br"),c._UZ(21,"br"),c.TgZ(22,"table",12),c.TgZ(23,"tr"),c.TgZ(24,"th"),c._uU(25,"S no"),c.qZA(),c._uU(26,"\xa0\xa0\xa0 "),c.TgZ(27,"th"),c._uU(28,"SurveyTitle"),c.qZA(),c._uU(29,"\xa0\xa0\xa0 "),c.TgZ(30,"th"),c._uU(31,"Actions"),c.qZA(),c.qZA(),c.YNc(32,Z,13,2,"tr",13),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(7),c.Q6J("dataSource",e.dataSource),c.xp6(10),c.Q6J("matHeaderRowDef",e.displayedColumns),c.xp6(1),c.Q6J("matRowDefColumns",e.displayedColumns),c.xp6(14),c.Q6J("ngForIn",e.inactiveSurvey))},directives:[l.SP,l.uX,i.BZ,i.w1,i.fO,i.Dz,i.as,i.nj,i.ge,i.ev,a.lW,i.XQ,i.Gk],styles:[".sub-heading[_ngcontent-%COMP%]{font-size:18px;font-weight:700;font-family:Roboto}.mat-tab-lables[_ngcontent-%COMP%]{flex:50%;flex-wrap:wrap;justify-content:space-around;align-content:stretch;align-items:baseline;flex-direction:row}.Active[_ngcontent-%COMP%]   Surveys[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-color:blue}table[_ngcontent-%COMP%]{width:100%}.tableHeader[_ngcontent-%COMP%]{background-color:#1e90ff;font-size:medium;justify-content:center}.mat-column-position[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 5%!important;width:5%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-Actions[_ngcontent-%COMP%], .mat-column-name[_ngcontent-%COMP%]{justify-content:center}.mat-column-Actions[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 10%!important;width:5%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}"]}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[r.Bz.forChild(f)],r.Bz]}),t})(),_=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[o.ez,y,l.Nh,u.JF,a.ot,i.p0]]}),t})()}}]);