(this.webpackJsonpindahash=this.webpackJsonpindahash||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t(23)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),i=t(4),o=t.n(i),r=(t(15),t(16),t(5)),s=(t(17),function(e){var a=e.employees,t=e.onClick;return n.a.createElement("div",{className:"employees-mosaic"},a.map((function(e){return n.a.createElement("div",{key:e.id,className:"employees-mosaic__employee"},n.a.createElement("button",{type:"button",className:"employees-mosaic__employee__profile",onClick:function(){t&&t(e)}},n.a.createElement("div",{className:"employees-mosaic__employee__profile__image",style:{backgroundImage:e.profileImage?"url('".concat(e.profileImage,"')"):void 0}}),n.a.createElement("div",{className:"employees-mosaic__employee__profile__image--filter",style:{backgroundImage:e.profileImageFiltered?"url('".concat(e.profileImageFiltered,"')"):void 0}})),n.a.createElement("a",{href:e.email?"mailto:".concat(e.email):"#",className:"employees-mosaic__employee__mail"},n.a.createElement("svg",{viewBox:"0 0 100 110"},n.a.createElement("path",{className:"employees-mosaic__employee__mail__back",d:" M 0 40 L 0 100 L 100 100 L 100 40 Z "}),n.a.createElement("path",{className:"employees-mosaic__employee__mail__top",d:" M 0 40 L 100 40 L 50 80 Z "}),n.a.createElement("path",{className:"employees-mosaic__employee__mail__bottom",d:" M 0 50 L 0 110 L 100 110 L 100 50 L 50 90 Z "}))),n.a.createElement("div",{className:"employees-mosaic__employee__name"},e.fullName),n.a.createElement("div",{className:"employees-mosaic__employee__position"},e.position),n.a.createElement("div",{className:"employees-mosaic__employee__location"},e.location))})),n.a.createElement("svg",{id:"employee-filter-svg",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("filter",{id:"employeeFilter"},n.a.createElement("feColorMatrix",{type:"saturate",values:"0.0"}),n.a.createElement("feColorMatrix",{type:"matrix",values:" 1.1 0 0 0 0.1 0 1.1 0 0 0.1 0 0 1.1 0 0.1 0 0 0 1 0 "}),n.a.createElement("feComponentTransfer",{in:"colormatrix",result:"componentTransfer"},n.a.createElement("feFuncR",{type:"table",tableValues:"0.14 0.26"}),n.a.createElement("feFuncG",{type:"table",tableValues:"0.35 0.76"}),n.a.createElement("feFuncB",{type:"table",tableValues:"0.49 0.87"}),n.a.createElement("feFuncA",{type:"table",tableValues:"0 1"})),n.a.createElement("feColorMatrix",{type:"matrix",values:" 1.2 0 0 0 -0.12 0 1.2 0 0 -0.12 0 0 1.2 0 -0.12 0 0 0 1 0 "}))))});s.defaultProps={};var m,c,p,d,g=s;!function(e){e.warsaw="Warsaw",e.london="London",e.loasAngeles="Los Angeles"}(m||(m={})),function(e){e.headOfCommunication="Head of Communication",e.creationManager="Creation Manager",e.internationalClientServiceManager="International Client Service Manager",e.chiefBusinessDevelopmentOfficer="Chief Business Development Officer (CBDO)",e.businessDevelopmentDirectorUS="Business Development Director US",e.businessDevelopment="Business Development",e.chiefGrowthOfficer="Chief Growth Officer (CGO)",e.headofHumanResources="Head of Human Resources",e.founder="Founder"}(c||(c={})),function(e){e.p0="/images/team/person_0.png",e.p1="/images/team/person_1.png",e.p2="/images/team/person_2.png",e.p3="/images/team/person_3.png",e.p4="/images/team/person_4.png"}(p||(p={})),function(e){e.p0="/images/team/person_0_filtered.png",e.p1="/images/team/person_1_filtered.png",e.p2="/images/team/person_2_filtered.png",e.p3="/images/team/person_3_filtered.png",e.p4="/images/team/person_4_filtered.png"}(d||(d={}));var u=[{id:0,fullName:"Basia So\u0142tysi\u0144ska",location:m.warsaw,position:c.founder,profileImage:p.p4,profileImageFiltered:d.p4,backgroundImage:"/images/slider_bg.png",email:"bs@test.pl"},{id:1,fullName:"W\u0142as Chorowiec",location:m.warsaw,position:c.founder,profileImage:p.p3,profileImageFiltered:d.p3,backgroundImage:"/images/slider_bg.png",email:"wc@test.pl"},{id:2,fullName:"Edyta Le\u015bniewska",location:m.warsaw,position:c.headofHumanResources,profileImage:p.p2,profileImageFiltered:d.p2,backgroundImage:"/images/slider_bg.png",email:"el@test.pl"},{id:3,fullName:"Joanna Pawluk",location:m.london,position:c.chiefGrowthOfficer,profileImage:p.p1,profileImageFiltered:d.p1,backgroundImage:"/images/slider_bg.png",email:"jp@test.pl"},{id:4,fullName:"David Saunders",location:m.london,position:c.businessDevelopment,profileImage:p.p0,profileImageFiltered:d.p0,backgroundImage:"/images/slider_bg.png",email:"ds@test.pl"},{id:5,fullName:"Adam Eldridge",location:m.loasAngeles,position:c.businessDevelopmentDirectorUS,profileImage:p.p4,profileImageFiltered:d.p4,backgroundImage:"/images/slider_bg.png",email:"ae@test.pl"},{id:6,fullName:"Maha Mahda",location:m.warsaw,position:c.chiefBusinessDevelopmentOfficer,profileImage:p.p3,profileImageFiltered:d.p3,backgroundImage:"/images/slider_bg.png",email:"mm@test.pl"},{id:7,fullName:"El\u017cbieta Kami\u0144ska",location:m.warsaw,position:c.internationalClientServiceManager,profileImage:p.p2,profileImageFiltered:d.p2,backgroundImage:"/images/slider_bg.png",email:"ek@test.pl"},{id:8,fullName:"Karolina Makuch",location:m.warsaw,position:c.creationManager,profileImage:p.p1,profileImageFiltered:d.p1,backgroundImage:"/images/slider_bg.png",email:"km@test.pl"},{id:9,fullName:"Kamil Bolek",location:m.warsaw,position:c.headOfCommunication,profileImage:p.p0,profileImageFiltered:d.p0,backgroundImage:"/images/slider_bg.png",email:"kb@test.pl"}],f=(t(18),t(30)),_=t(27),v=t(28),b=t(26),w=(t(19),t(29));t(20);v.a.use([b.a]);var E=function(e){var a=e.slides,t=e.visible,i=e.onClose,o=Object(l.useRef)(null),s=Object(l.useState)(),m=Object(r.a)(s,2),c=m[0],p=m[1];Object(l.useEffect)((function(){var e=a.filter((function(e){return e.selected})).pop();c&&e&&c.slideTo(a.indexOf(e)+1,0)}),[c,a]);var d=n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{type:"button",className:"slider__next",onClick:function(){null===c||void 0===c||c.slideNext()}},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 42 71"},n.a.createElement("path",{d:"M9.12,3.18L41,36L9.29,67.71c-1.24,1.24-3.26,1.16-4.4-0.17l-2.05-2.39c-1.03-1.21-0.95-3.01,0.2-4.11L29,36L3.05,9.12 C1.91,7.94,1.93,6.07,3.08,4.92l1.76-1.76C6.03,1.97,7.95,1.98,9.12,3.18z"}))),n.a.createElement("button",{type:"button",className:"slider__prev",onClick:function(){null===c||void 0===c||c.slidePrev()}},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 42 71"},n.a.createElement("path",{d:"M34,3.18L2.12,36l31.71,31.71c1.24,1.24,3.26,1.16,4.4-0.17l2.05-2.39c1.03-1.21,0.95-3.01-0.2-4.11L14.12,36L40.07,9.12 c1.14-1.18,1.12-3.05-0.04-4.21l-1.76-1.76C37.09,1.97,35.16,1.98,34,3.18z"}))),n.a.createElement("button",{type:"button",className:"slider__exit",onClick:function(){i&&i()}},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 59 59"},n.a.createElement("path",{d:"M15.83,3.83L29.5,17.5L43.17,3.83c1.56-1.56,4.09-1.56,5.66,0l6.34,6.34c1.56,1.56,1.56,4.09,0,5.66L41.5,29.5l13.67,13.67 c1.56,1.56,1.56,4.09,0,5.66l-6.34,6.34c-1.56,1.56-4.09,1.56-5.66,0L29.5,41.5L15.83,55.17c-1.56,1.56-4.09,1.56-5.66,0l-6.34-6.34 c-1.56-1.56-1.56-4.09,0-5.66L17.5,29.5L3.83,15.83c-1.56-1.56-1.56-4.09,0-5.66l6.34-6.34C11.73,2.27,14.27,2.27,15.83,3.83z"}))));return n.a.createElement(w.a,{nodeRef:o,classNames:"slider-wrapper",className:"slider-wrapper",appear:!0,in:t,timeout:600},n.a.createElement("div",{ref:o},n.a.createElement(f.a,{className:"slider",slidesPerView:1,loop:!0,onSwiper:p,controller:{control:c},simulateTouch:!1},a.map((function(e){return n.a.createElement(_.a,{key:e.key,style:{backgroundImage:e.backgroundImage?"url('".concat(e.backgroundImage,"')"):void 0},className:"slider__slide"},n.a.createElement("div",{className:"slider__slide__data"},n.a.createElement("span",{className:"slider__slide__data__header"},e.header),n.a.createElement("span",{className:"slider__slide__data__content"},e.content)))})),d)))};E.defaultProps={};var h=E,y=function(){var e=Object(l.useState)(!1),a=Object(r.a)(e,2),t=a[0],i=a[1],o=Object(l.useCallback)((function(){return u.map((function(e){return{key:e.id,header:e.position,content:e.fullName,selected:!!t&&t.id===e.id,backgroundImage:e.backgroundImage}}))}),[t]);return n.a.createElement("div",{className:"homepage"},n.a.createElement("div",{className:"homepage_wrapper"},n.a.createElement("h1",{className:"homepage__header"},"Meet our team"),n.a.createElement(g,{employees:u,onClick:function(e){i(e)}}),n.a.createElement(h,{visible:!1!==t,slides:o(),onClose:function(){i(!1)}})))};y.defaultProps={};var I=y;var k=function(){return n.a.createElement("div",{className:"app"},n.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.146139d6.chunk.js.map