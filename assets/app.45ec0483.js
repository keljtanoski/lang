import{d as s,r as f,a as S,b as w,c as P,i as c,e as x,f as H,g as z,o as D,h as d,j as p,k as L,l as $,m as N,n as F,R as B,p as j,q as M,S as U,u as q,w as K,s as W,t as G,v as J}from"./framework.a4476b81.js";const Y="modulepreload",Z=function(t){return"/"+t},A={},e=function(_,r,a){if(!r||r.length===0)return _();const i=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=Z(o),o in A)return;A[o]=!0;const u=o.endsWith(".css"),v=u?'[rel="stylesheet"]':"";if(!!a)for(let h=i.length-1;h>=0;h--){const T=i[h];if(T.href===o&&(!u||T.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${v}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":Y,u||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),u)return new Promise((h,T)=>{l.addEventListener("load",h),l.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>_())},Q={"v-606dbee4":()=>e(()=>import("./code-of-conduct.html.f7962df2.js"),[]).then(({data:t})=>t),"v-6ce48554":()=>e(()=>import("./contributing.html.496b88ae.js"),[]).then(({data:t})=>t),"v-8daa1a0e":()=>e(()=>import("./index.html.b663f752.js"),[]).then(({data:t})=>t),"v-5fbc6baa":()=>e(()=>import("./referents.html.6c09e810.js"),[]).then(({data:t})=>t),"v-0a4580e4":()=>e(()=>import("./status.html.82f14a11.js"),[]).then(({data:t})=>t),"v-646b6f91":()=>e(()=>import("./usage.html.66e8e130.js"),[]).then(({data:t})=>t),"v-239bf7bc":()=>e(()=>import("./10.x.html.44e55c3a.js"),[]).then(({data:t})=>t),"v-e905b6ca":()=>e(()=>import("./11.x.html.c8df7793.js"),[]).then(({data:t})=>t),"v-19435d0c":()=>e(()=>import("./12.x.html.5a468bab.js"),[]).then(({data:t})=>t),"v-6828d1cc":()=>e(()=>import("./7.x.html.ff98d2f5.js"),[]).then(({data:t})=>t),"v-5fec02aa":()=>e(()=>import("./8.x.html.f8ec38ee.js"),[]).then(({data:t})=>t),"v-37eb2b8a":()=>e(()=>import("./9.x.html.da225a5b.js"),[]).then(({data:t})=>t),"v-510ed0d4":()=>e(()=>import("./index.html.84db589d.js"),[]).then(({data:t})=>t),"v-4e429576":()=>e(()=>import("./compatibility.html.aaec9db0.js"),[]).then(({data:t})=>t),"v-385a267a":()=>e(()=>import("./github.html.cee15eee.js"),[]).then(({data:t})=>t),"v-08a5d2dc":()=>e(()=>import("./index.html.5d55293f.js"),[]).then(({data:t})=>t),"v-1ef1c652":()=>e(()=>import("./managers.html.eb64b0f6.js"),[]).then(({data:t})=>t),"v-139aa9de":()=>e(()=>import("./af.html.116e6ced.js"),[]).then(({data:t})=>t),"v-2814d152":()=>e(()=>import("./ar.html.67f2223a.js"),[]).then(({data:t})=>t),"v-35bb964a":()=>e(()=>import("./az.html.c7b61915.js"),[]).then(({data:t})=>t),"v-46cc0c80":()=>e(()=>import("./be.html.f64befc0.js"),[]).then(({data:t})=>t),"v-4a35bdbe":()=>e(()=>import("./bg.html.6ccf286f.js"),[]).then(({data:t})=>t),"v-5627aa17":()=>e(()=>import("./bn.html.084b61df.js"),[]).then(({data:t})=>t),"v-5eafe532":()=>e(()=>import("./bs.html.ef24d66b.js"),[]).then(({data:t})=>t),"v-74dee545":()=>e(()=>import("./ca.html.078eaef9.js"),[]).then(({data:t})=>t),"v-d8d3bf1a":()=>e(()=>import("./cs.html.e448bd2c.js"),[]).then(({data:t})=>t),"v-c45997a6":()=>e(()=>import("./cy.html.c39f230e.js"),[]).then(({data:t})=>t),"v-ac75bef4":()=>e(()=>import("./da.html.2601ac8d.js"),[]).then(({data:t})=>t),"v-9ecef9fc":()=>e(()=>import("./de.html.b9465176.js"),[]).then(({data:t})=>t),"v-db8910e8":()=>e(()=>import("./de_CH.html.ee271e9d.js"),[]).then(({data:t})=>t),"v-1d1eaac8":()=>e(()=>import("./el.html.20c2615b.js"),[]).then(({data:t})=>t),"v-053ad216":()=>e(()=>import("./es.html.d9bd67c7.js"),[]).then(({data:t})=>t),"v-01d120d8":()=>e(()=>import("./et.html.920459ea.js"),[]).then(({data:t})=>t),"v-00cc4833":()=>e(()=>import("./eu.html.708374a0.js"),[]).then(({data:t})=>t),"v-13919708":()=>e(()=>import("./fa.html.c5cd9b1f.js"),[]).then(({data:t})=>t),"v-21385c00":()=>e(()=>import("./fi.html.41a253e8.js"),[]).then(({data:t})=>t),"v-6c68eda6":()=>e(()=>import("./fil.html.6f54a81f.js"),[]).then(({data:t})=>t),"v-3093f997":()=>e(()=>import("./fr.html.d2e7fa1d.js"),[]).then(({data:t})=>t),"v-5b3d211e":()=>e(()=>import("./gl.html.5e4ea38b.js"),[]).then(({data:t})=>t),"v-6a98beb5":()=>e(()=>import("./gu.html.83a94a4e.js"),[]).then(({data:t})=>t),"v-f79d1ff4":()=>e(()=>import("./he.html.0fa2b5fe.js"),[]).then(({data:t})=>t),"v-e9f65afc":()=>e(()=>import("./hi.html.947d7027.js"),[]).then(({data:t})=>t),"v-cb3f1fce":()=>e(()=>import("./hr.html.77f4d5e9.js"),[]).then(({data:t})=>t),"v-c1020c14":()=>e(()=>import("./hu.html.d9722400.js"),[]).then(({data:t})=>t),"v-b35b471c":()=>e(()=>import("./hy.html.03cce228.js"),[]).then(({data:t})=>t),"v-913a5ab0":()=>e(()=>import("./id.html.a8e3faa0.js"),[]).then(({data:t})=>t),"v-5e08f80e":()=>e(()=>import("./is.html.849fa7ab.js"),[]).then(({data:t})=>t),"v-5a9f46d0":()=>e(()=>import("./it.html.3856cb89.js"),[]).then(({data:t})=>t),"v-31aaf7e8":()=>e(()=>import("./ja.html.eb78f092.js"),[]).then(({data:t})=>t),"v-1c10bf4d":()=>e(()=>import("./ka.html.460cc7b2.js"),[]).then(({data:t})=>t),"v-2d213583":()=>e(()=>import("./kk.html.6cf239ca.js"),[]).then(({data:t})=>t),"v-308ae6c1":()=>e(()=>import("./km.html.2a548f27.js"),[]).then(({data:t})=>t),"v-323fbf60":()=>e(()=>import("./kn.html.e6a31234.js"),[]).then(({data:t})=>t),"v-33f497ff":()=>e(()=>import("./ko.html.b51f26a6.js"),[]).then(({data:t})=>t),"v-71630e5b":()=>e(()=>import("./lt.html.ce09d6f2.js"),[]).then(({data:t})=>t),"v-74ccbf99":()=>e(()=>import("./lv.html.af6b549a.js"),[]).then(({data:t})=>t),"v-d224a7f6":()=>e(()=>import("./mk.html.7dcb04d4.js"),[]).then(({data:t})=>t),"v-c7e7943c":()=>e(()=>import("./mn.html.e098b264.js"),[]).then(({data:t})=>t),"v-ba40cf44":()=>e(()=>import("./mr.html.4e3d7d9b.js"),[]).then(({data:t})=>t),"v-b6d71e06":()=>e(()=>import("./ms.html.3bd05abd.js"),[]).then(({data:t})=>t),"v-870f6ca2":()=>e(()=>import("./nb.html.4168de79.js"),[]).then(({data:t})=>t),"v-7cd258e8":()=>e(()=>import("./ne.html.af364ab2.js"),[]).then(({data:t})=>t),"v-64ee8036":()=>e(()=>import("./nl.html.67d54c72.js"),[]).then(({data:t})=>t),"v-5e1b1dba":()=>e(()=>import("./nn.html.4639d388.js"),[]).then(({data:t})=>t),"v-19d944e2":()=>e(()=>import("./oc.html.2ad45a8b.js"),[]).then(({data:t})=>t),"v-37553667":()=>e(()=>import("./pl.html.27a20c85.js"),[]).then(({data:t})=>t),"v-434722c0":()=>e(()=>import("./ps.html.e765a4f9.js"),[]).then(({data:t})=>t),"v-44fbfb5f":()=>e(()=>import("./pt.html.5863b2d7.js"),[]).then(({data:t})=>t),"v-dc4cfdf8":()=>e(()=>import("./pt_BR.html.111e3567.js"),[]).then(({data:t})=>t),"v-b37f9274":()=>e(()=>import("./ro.html.e2b0b068.js"),[]).then(({data:t})=>t),"v-9f056b00":()=>e(()=>import("./ru.html.96b0d365.js"),[]).then(({data:t})=>t),"v-72a76ada":()=>e(()=>import("./sc.html.318652a8.js"),[]).then(({data:t})=>t),"v-5e2d4366":()=>e(()=>import("./si.html.96379a0f.js"),[]).then(({data:t})=>t),"v-5759e0ea":()=>e(()=>import("./sk.html.9301b1d2.js"),[]).then(({data:t})=>t),"v-53f02fac":()=>e(()=>import("./sl.html.15463f2c.js"),[]).then(({data:t})=>t),"v-42dfb976":()=>e(()=>import("./sq.html.b21df99e.js"),[]).then(({data:t})=>t),"v-330c9042":()=>e(()=>import("./sr_Cyrl.html.fb0cf5bb.js"),[]).then(({data:t})=>t),"v-6608dc80":()=>e(()=>import("./sr_Latn.html.8b8b781b.js"),[]).then(({data:t})=>t),"v-098bcebb":()=>e(()=>import("./sr_Latn_ME.html.bf5409b6.js"),[]).then(({data:t})=>t),"v-31cf4340":()=>e(()=>import("./sv.html.a5422b36.js"),[]).then(({data:t})=>t),"v-2e659202":()=>e(()=>import("./sw.html.efbb1d18.js"),[]).then(({data:t})=>t),"v-0265e850":()=>e(()=>import("./tg.html.3fdb4e6e.js"),[]).then(({data:t})=>t),"v-041ac0ef":()=>e(()=>import("./th.html.a99889b8.js"),[]).then(({data:t})=>t),"v-09394acc":()=>e(()=>import("./tk.html.a707ec62.js"),[]).then(({data:t})=>t),"v-0aee236b":()=>e(()=>import("./tl.html.219e4ae8.js"),[]).then(({data:t})=>t),"v-152b3725":()=>e(()=>import("./tr.html.b06408ea.js"),[]).then(({data:t})=>t),"v-374c2391":()=>e(()=>import("./ug.html.4c7c3c9b.js"),[]).then(({data:t})=>t),"v-3e1f860d":()=>e(()=>import("./uk.html.d23ff220.js"),[]).then(({data:t})=>t),"v-4a117266":()=>e(()=>import("./ur.html.07e1da11.js"),[]).then(({data:t})=>t),"v-c5faceb6":()=>e(()=>import("./uz_Cyrl.html.9007d04b.js"),[]).then(({data:t})=>t),"v-f8f71af4":()=>e(()=>import("./uz_Latn.html.52f48e8f.js"),[]).then(({data:t})=>t),"v-6f9c1010":()=>e(()=>import("./vi.html.eb77a284.js"),[]).then(({data:t})=>t),"v-579590f3":()=>e(()=>import("./zh_CN.html.5c3c2e6e.js"),[]).then(({data:t})=>t),"v-5af62f5b":()=>e(()=>import("./zh_HK.html.782dd36b.js"),[]).then(({data:t})=>t),"v-2b89c44a":()=>e(()=>import("./zh_TW.html.d082340b.js"),[]).then(({data:t})=>t),"v-3706649a":()=>e(()=>import("./404.html.d2dc3323.js"),[]).then(({data:t})=>t)},X=JSON.parse('{"base":"/","lang":"en-US","title":"Laravel Lang","description":"List of 78 languages for Laravel Framework 4-9, Jetstream, Fortify, Breeze, Cashier, Nova, Spark and UI.","head":[["link",{"rel":"icon","href":"https://laravel-lang.com/images/logo.svg"}],["meta",{"name":"twitter:image","content":"https://laravel-lang.com/images/social-logo.png"}]],"locales":{}}'),O={"v-606dbee4":s(()=>e(()=>import("./code-of-conduct.html.dafb676a.js"),["assets/code-of-conduct.html.dafb676a.js","assets/framework.a4476b81.js"])),"v-6ce48554":s(()=>e(()=>import("./contributing.html.e96696ee.js"),["assets/contributing.html.e96696ee.js","assets/framework.a4476b81.js"])),"v-8daa1a0e":s(()=>e(()=>import("./index.html.d41a1abb.js"),["assets/index.html.d41a1abb.js","assets/framework.a4476b81.js"])),"v-5fbc6baa":s(()=>e(()=>import("./referents.html.b11cc374.js"),["assets/referents.html.b11cc374.js","assets/framework.a4476b81.js"])),"v-0a4580e4":s(()=>e(()=>import("./status.html.6e7829ae.js"),["assets/status.html.6e7829ae.js","assets/framework.a4476b81.js"])),"v-646b6f91":s(()=>e(()=>import("./usage.html.a7415bd4.js"),["assets/usage.html.a7415bd4.js","assets/framework.a4476b81.js"])),"v-239bf7bc":s(()=>e(()=>import("./10.x.html.1e693446.js"),["assets/10.x.html.1e693446.js","assets/framework.a4476b81.js"])),"v-e905b6ca":s(()=>e(()=>import("./11.x.html.7b18d793.js"),["assets/11.x.html.7b18d793.js","assets/framework.a4476b81.js"])),"v-19435d0c":s(()=>e(()=>import("./12.x.html.b4d6321f.js"),["assets/12.x.html.b4d6321f.js","assets/framework.a4476b81.js"])),"v-6828d1cc":s(()=>e(()=>import("./7.x.html.d517094b.js"),["assets/7.x.html.d517094b.js","assets/framework.a4476b81.js"])),"v-5fec02aa":s(()=>e(()=>import("./8.x.html.18a11a8a.js"),["assets/8.x.html.18a11a8a.js","assets/framework.a4476b81.js"])),"v-37eb2b8a":s(()=>e(()=>import("./9.x.html.fb099926.js"),["assets/9.x.html.fb099926.js","assets/framework.a4476b81.js"])),"v-510ed0d4":s(()=>e(()=>import("./index.html.84cc7e81.js"),["assets/index.html.84cc7e81.js","assets/framework.a4476b81.js"])),"v-4e429576":s(()=>e(()=>import("./compatibility.html.e30d6209.js"),["assets/compatibility.html.e30d6209.js","assets/framework.a4476b81.js"])),"v-385a267a":s(()=>e(()=>import("./github.html.227b47f3.js"),["assets/github.html.227b47f3.js","assets/framework.a4476b81.js"])),"v-08a5d2dc":s(()=>e(()=>import("./index.html.e96e116c.js"),["assets/index.html.e96e116c.js","assets/framework.a4476b81.js"])),"v-1ef1c652":s(()=>e(()=>import("./managers.html.8259fdfd.js"),["assets/managers.html.8259fdfd.js","assets/framework.a4476b81.js"])),"v-139aa9de":s(()=>e(()=>import("./af.html.4522486c.js"),["assets/af.html.4522486c.js","assets/framework.a4476b81.js"])),"v-2814d152":s(()=>e(()=>import("./ar.html.00b0cb29.js"),["assets/ar.html.00b0cb29.js","assets/framework.a4476b81.js"])),"v-35bb964a":s(()=>e(()=>import("./az.html.b37576b5.js"),["assets/az.html.b37576b5.js","assets/framework.a4476b81.js"])),"v-46cc0c80":s(()=>e(()=>import("./be.html.97849b97.js"),["assets/be.html.97849b97.js","assets/framework.a4476b81.js"])),"v-4a35bdbe":s(()=>e(()=>import("./bg.html.bbbde06c.js"),["assets/bg.html.bbbde06c.js","assets/framework.a4476b81.js"])),"v-5627aa17":s(()=>e(()=>import("./bn.html.026f3b7b.js"),["assets/bn.html.026f3b7b.js","assets/framework.a4476b81.js"])),"v-5eafe532":s(()=>e(()=>import("./bs.html.2c926c92.js"),["assets/bs.html.2c926c92.js","assets/framework.a4476b81.js"])),"v-74dee545":s(()=>e(()=>import("./ca.html.6cb6fdbb.js"),["assets/ca.html.6cb6fdbb.js","assets/framework.a4476b81.js"])),"v-d8d3bf1a":s(()=>e(()=>import("./cs.html.19294225.js"),["assets/cs.html.19294225.js","assets/framework.a4476b81.js"])),"v-c45997a6":s(()=>e(()=>import("./cy.html.33b18543.js"),["assets/cy.html.33b18543.js","assets/framework.a4476b81.js"])),"v-ac75bef4":s(()=>e(()=>import("./da.html.35ec7479.js"),["assets/da.html.35ec7479.js","assets/framework.a4476b81.js"])),"v-9ecef9fc":s(()=>e(()=>import("./de.html.4e378cc0.js"),["assets/de.html.4e378cc0.js","assets/framework.a4476b81.js"])),"v-db8910e8":s(()=>e(()=>import("./de_CH.html.093ce066.js"),["assets/de_CH.html.093ce066.js","assets/framework.a4476b81.js"])),"v-1d1eaac8":s(()=>e(()=>import("./el.html.13eee0b6.js"),["assets/el.html.13eee0b6.js","assets/framework.a4476b81.js"])),"v-053ad216":s(()=>e(()=>import("./es.html.3980d4b4.js"),["assets/es.html.3980d4b4.js","assets/framework.a4476b81.js"])),"v-01d120d8":s(()=>e(()=>import("./et.html.1f1d0fac.js"),["assets/et.html.1f1d0fac.js","assets/framework.a4476b81.js"])),"v-00cc4833":s(()=>e(()=>import("./eu.html.f2733a7c.js"),["assets/eu.html.f2733a7c.js","assets/framework.a4476b81.js"])),"v-13919708":s(()=>e(()=>import("./fa.html.60413c2b.js"),["assets/fa.html.60413c2b.js","assets/framework.a4476b81.js"])),"v-21385c00":s(()=>e(()=>import("./fi.html.e2ed65f0.js"),["assets/fi.html.e2ed65f0.js","assets/framework.a4476b81.js"])),"v-6c68eda6":s(()=>e(()=>import("./fil.html.d30600ab.js"),["assets/fil.html.d30600ab.js","assets/framework.a4476b81.js"])),"v-3093f997":s(()=>e(()=>import("./fr.html.cffcc1f0.js"),["assets/fr.html.cffcc1f0.js","assets/framework.a4476b81.js"])),"v-5b3d211e":s(()=>e(()=>import("./gl.html.ec6367cd.js"),["assets/gl.html.ec6367cd.js","assets/framework.a4476b81.js"])),"v-6a98beb5":s(()=>e(()=>import("./gu.html.5fb14cdb.js"),["assets/gu.html.5fb14cdb.js","assets/framework.a4476b81.js"])),"v-f79d1ff4":s(()=>e(()=>import("./he.html.ac621b35.js"),["assets/he.html.ac621b35.js","assets/framework.a4476b81.js"])),"v-e9f65afc":s(()=>e(()=>import("./hi.html.65d60a2a.js"),["assets/hi.html.65d60a2a.js","assets/framework.a4476b81.js"])),"v-cb3f1fce":s(()=>e(()=>import("./hr.html.840f6089.js"),["assets/hr.html.840f6089.js","assets/framework.a4476b81.js"])),"v-c1020c14":s(()=>e(()=>import("./hu.html.65499a4d.js"),["assets/hu.html.65499a4d.js","assets/framework.a4476b81.js"])),"v-b35b471c":s(()=>e(()=>import("./hy.html.36cd7464.js"),["assets/hy.html.36cd7464.js","assets/framework.a4476b81.js"])),"v-913a5ab0":s(()=>e(()=>import("./id.html.0cb5e669.js"),["assets/id.html.0cb5e669.js","assets/framework.a4476b81.js"])),"v-5e08f80e":s(()=>e(()=>import("./is.html.ba430d4d.js"),["assets/is.html.ba430d4d.js","assets/framework.a4476b81.js"])),"v-5a9f46d0":s(()=>e(()=>import("./it.html.900b90c6.js"),["assets/it.html.900b90c6.js","assets/framework.a4476b81.js"])),"v-31aaf7e8":s(()=>e(()=>import("./ja.html.6138a68c.js"),["assets/ja.html.6138a68c.js","assets/framework.a4476b81.js"])),"v-1c10bf4d":s(()=>e(()=>import("./ka.html.d6436736.js"),["assets/ka.html.d6436736.js","assets/framework.a4476b81.js"])),"v-2d213583":s(()=>e(()=>import("./kk.html.5731be17.js"),["assets/kk.html.5731be17.js","assets/framework.a4476b81.js"])),"v-308ae6c1":s(()=>e(()=>import("./km.html.d0057550.js"),["assets/km.html.d0057550.js","assets/framework.a4476b81.js"])),"v-323fbf60":s(()=>e(()=>import("./kn.html.1a6a36d3.js"),["assets/kn.html.1a6a36d3.js","assets/framework.a4476b81.js"])),"v-33f497ff":s(()=>e(()=>import("./ko.html.b66fef61.js"),["assets/ko.html.b66fef61.js","assets/framework.a4476b81.js"])),"v-71630e5b":s(()=>e(()=>import("./lt.html.71013985.js"),["assets/lt.html.71013985.js","assets/framework.a4476b81.js"])),"v-74ccbf99":s(()=>e(()=>import("./lv.html.b418ec23.js"),["assets/lv.html.b418ec23.js","assets/framework.a4476b81.js"])),"v-d224a7f6":s(()=>e(()=>import("./mk.html.eba85a00.js"),["assets/mk.html.eba85a00.js","assets/framework.a4476b81.js"])),"v-c7e7943c":s(()=>e(()=>import("./mn.html.1ec2d914.js"),["assets/mn.html.1ec2d914.js","assets/framework.a4476b81.js"])),"v-ba40cf44":s(()=>e(()=>import("./mr.html.ec609dea.js"),["assets/mr.html.ec609dea.js","assets/framework.a4476b81.js"])),"v-b6d71e06":s(()=>e(()=>import("./ms.html.5f5f257e.js"),["assets/ms.html.5f5f257e.js","assets/framework.a4476b81.js"])),"v-870f6ca2":s(()=>e(()=>import("./nb.html.44355f0a.js"),["assets/nb.html.44355f0a.js","assets/framework.a4476b81.js"])),"v-7cd258e8":s(()=>e(()=>import("./ne.html.d5243f60.js"),["assets/ne.html.d5243f60.js","assets/framework.a4476b81.js"])),"v-64ee8036":s(()=>e(()=>import("./nl.html.78f92d10.js"),["assets/nl.html.78f92d10.js","assets/framework.a4476b81.js"])),"v-5e1b1dba":s(()=>e(()=>import("./nn.html.8d4a4ddc.js"),["assets/nn.html.8d4a4ddc.js","assets/framework.a4476b81.js"])),"v-19d944e2":s(()=>e(()=>import("./oc.html.57aad5be.js"),["assets/oc.html.57aad5be.js","assets/framework.a4476b81.js"])),"v-37553667":s(()=>e(()=>import("./pl.html.bf5d6b88.js"),["assets/pl.html.bf5d6b88.js","assets/framework.a4476b81.js"])),"v-434722c0":s(()=>e(()=>import("./ps.html.b4d97353.js"),["assets/ps.html.b4d97353.js","assets/framework.a4476b81.js"])),"v-44fbfb5f":s(()=>e(()=>import("./pt.html.0ea2f3ef.js"),["assets/pt.html.0ea2f3ef.js","assets/framework.a4476b81.js"])),"v-dc4cfdf8":s(()=>e(()=>import("./pt_BR.html.a2bed5e0.js"),["assets/pt_BR.html.a2bed5e0.js","assets/framework.a4476b81.js"])),"v-b37f9274":s(()=>e(()=>import("./ro.html.15f2102c.js"),["assets/ro.html.15f2102c.js","assets/framework.a4476b81.js"])),"v-9f056b00":s(()=>e(()=>import("./ru.html.43e9c67e.js"),["assets/ru.html.43e9c67e.js","assets/framework.a4476b81.js"])),"v-72a76ada":s(()=>e(()=>import("./sc.html.ca76f522.js"),["assets/sc.html.ca76f522.js","assets/framework.a4476b81.js"])),"v-5e2d4366":s(()=>e(()=>import("./si.html.775d1027.js"),["assets/si.html.775d1027.js","assets/framework.a4476b81.js"])),"v-5759e0ea":s(()=>e(()=>import("./sk.html.41305302.js"),["assets/sk.html.41305302.js","assets/framework.a4476b81.js"])),"v-53f02fac":s(()=>e(()=>import("./sl.html.8b8564dc.js"),["assets/sl.html.8b8564dc.js","assets/framework.a4476b81.js"])),"v-42dfb976":s(()=>e(()=>import("./sq.html.6ed46937.js"),["assets/sq.html.6ed46937.js","assets/framework.a4476b81.js"])),"v-330c9042":s(()=>e(()=>import("./sr_Cyrl.html.1bf1170c.js"),["assets/sr_Cyrl.html.1bf1170c.js","assets/framework.a4476b81.js"])),"v-6608dc80":s(()=>e(()=>import("./sr_Latn.html.fd642bef.js"),["assets/sr_Latn.html.fd642bef.js","assets/framework.a4476b81.js"])),"v-098bcebb":s(()=>e(()=>import("./sr_Latn_ME.html.0c6f663c.js"),["assets/sr_Latn_ME.html.0c6f663c.js","assets/framework.a4476b81.js"])),"v-31cf4340":s(()=>e(()=>import("./sv.html.06d69d0c.js"),["assets/sv.html.06d69d0c.js","assets/framework.a4476b81.js"])),"v-2e659202":s(()=>e(()=>import("./sw.html.bb246227.js"),["assets/sw.html.bb246227.js","assets/framework.a4476b81.js"])),"v-0265e850":s(()=>e(()=>import("./tg.html.399ace4f.js"),["assets/tg.html.399ace4f.js","assets/framework.a4476b81.js"])),"v-041ac0ef":s(()=>e(()=>import("./th.html.b17cd042.js"),["assets/th.html.b17cd042.js","assets/framework.a4476b81.js"])),"v-09394acc":s(()=>e(()=>import("./tk.html.04f5e90b.js"),["assets/tk.html.04f5e90b.js","assets/framework.a4476b81.js"])),"v-0aee236b":s(()=>e(()=>import("./tl.html.d9f41a95.js"),["assets/tl.html.d9f41a95.js","assets/framework.a4476b81.js"])),"v-152b3725":s(()=>e(()=>import("./tr.html.7e6368a7.js"),["assets/tr.html.7e6368a7.js","assets/framework.a4476b81.js"])),"v-374c2391":s(()=>e(()=>import("./ug.html.30faab14.js"),["assets/ug.html.30faab14.js","assets/framework.a4476b81.js"])),"v-3e1f860d":s(()=>e(()=>import("./uk.html.ddd3f8c4.js"),["assets/uk.html.ddd3f8c4.js","assets/framework.a4476b81.js"])),"v-4a117266":s(()=>e(()=>import("./ur.html.4ea26bc0.js"),["assets/ur.html.4ea26bc0.js","assets/framework.a4476b81.js"])),"v-c5faceb6":s(()=>e(()=>import("./uz_Cyrl.html.61f66243.js"),["assets/uz_Cyrl.html.61f66243.js","assets/framework.a4476b81.js"])),"v-f8f71af4":s(()=>e(()=>import("./uz_Latn.html.747fa3d0.js"),["assets/uz_Latn.html.747fa3d0.js","assets/framework.a4476b81.js"])),"v-6f9c1010":s(()=>e(()=>import("./vi.html.3362867b.js"),["assets/vi.html.3362867b.js","assets/framework.a4476b81.js"])),"v-579590f3":s(()=>e(()=>import("./zh_CN.html.0d0196e7.js"),["assets/zh_CN.html.0d0196e7.js","assets/framework.a4476b81.js"])),"v-5af62f5b":s(()=>e(()=>import("./zh_HK.html.bd8b1b6b.js"),["assets/zh_HK.html.bd8b1b6b.js","assets/framework.a4476b81.js"])),"v-2b89c44a":s(()=>e(()=>import("./zh_TW.html.41ba0533.js"),["assets/zh_TW.html.41ba0533.js","assets/framework.a4476b81.js"])),"v-3706649a":s(()=>e(()=>import("./404.html.be86b751.js"),["assets/404.html.be86b751.js","assets/framework.a4476b81.js"]))};var tt=f(Q),V=S({key:"",path:"",title:"",lang:"",frontmatter:{},excerpt:"",headers:[]}),n=f(V),b=()=>n,I=Symbol(""),Dt=()=>{const t=L(I);if(!t)throw new Error("usePageFrontmatter() is called without provider.");return t},g=Symbol(""),et=()=>{const t=L(g);if(!t)throw new Error("usePageHead() is called without provider.");return t},st=Symbol(""),y=Symbol(""),_t=()=>{const t=L(y);if(!t)throw new Error("usePageLang() is called without provider.");return t},k=Symbol(""),Ot=()=>{const t=L(k);if(!t)throw new Error("useRouteLocale() is called without provider.");return t},E=f(X),at=()=>E,C=Symbol(""),Vt=()=>{const t=L(C);if(!t)throw new Error("useSiteLocaleData() is called without provider.");return t},rt=Symbol(""),m=w({resolvePageData:async t=>{const _=tt.value[t],r=await(_==null?void 0:_());return r!=null?r:V},resolvePageFrontmatter:t=>t.frontmatter,resolvePageHead:(t,_,r)=>{const a=c(_.description)?_.description:r.description,i=[...x(_.head)?_.head:[],...r.head,["title",{},t],["meta",{name:"description",content:a}]];return H(i)},resolvePageHeadTitle:(t,_)=>`${t.title?`${t.title}`:""}${_.title?` | ${_.title}`:""}`,resolvePageLang:t=>t.lang||"en",resolveRouteLocale:(t,_)=>z(t,_),resolveSiteLocaleData:(t,_)=>({...t,...t.locales[_]})}),ot=P({name:"ClientOnly",setup(t,_){const r=f(!1);return D(()=>{r.value=!0}),()=>{var a,i;return r.value?(i=(a=_.slots).default)==null?void 0:i.call(a):null}}}),it=P({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(t){const _=b(),r=d(()=>O[t.pageKey||_.value.key]);return()=>r.value?p(r.value):p("div","404 Not Found")}}),ut=t=>$(t)?t:`${at().value.base}${N(t)}`;const vt=[["v-606dbee4","/code-of-conduct.html",{title:"Contributor Covenant Code of Conduct"},["/code-of-conduct","/code-of-conduct.md"]],["v-6ce48554","/contributing.html",{title:"Contributing"},["/contributing","/contributing.md"]],["v-8daa1a0e","/",{title:"Getting Started"},["/index.html","/index.md"]],["v-5fbc6baa","/referents.html",{title:"Referents by language"},["/referents","/referents.md"]],["v-0a4580e4","/status.html",{title:"Completion Status"},["/status","/status.md"]],["v-646b6f91","/usage.html",{title:"Basic Usage"},["/usage","/usage.md"]],["v-239bf7bc","/changelog/10.x.html",{title:"10.x"},["/changelog/10.x","/changelog/10.x.md"]],["v-e905b6ca","/changelog/11.x.html",{title:"11.x"},["/changelog/11.x","/changelog/11.x.md"]],["v-19435d0c","/changelog/12.x.html",{title:"12.x"},["/changelog/12.x","/changelog/12.x.md"]],["v-6828d1cc","/changelog/7.x.html",{title:"7.x"},["/changelog/7.x","/changelog/7.x.md"]],["v-5fec02aa","/changelog/8.x.html",{title:"8.x"},["/changelog/8.x","/changelog/8.x.md"]],["v-37eb2b8a","/changelog/9.x.html",{title:"9.x"},["/changelog/9.x","/changelog/9.x.md"]],["v-510ed0d4","/changelog/",{title:"Changelog"},["/changelog/index.html","/changelog/index.md"]],["v-4e429576","/installation/compatibility.html",{title:"Compatibility"},["/installation/compatibility","/installation/compatibility.md"]],["v-385a267a","/installation/github.html",{title:"GitHub"},["/installation/github","/installation/github.md"]],["v-08a5d2dc","/installation/",{title:"Installation"},["/installation/index.html","/installation/index.md"]],["v-1ef1c652","/installation/managers.html",{title:"Translation Managers"},["/installation/managers","/installation/managers.md"]],["v-139aa9de","/statuses/af.html",{title:"af"},["/statuses/af","/statuses/af.md"]],["v-2814d152","/statuses/ar.html",{title:"ar"},["/statuses/ar","/statuses/ar.md"]],["v-35bb964a","/statuses/az.html",{title:"az"},["/statuses/az","/statuses/az.md"]],["v-46cc0c80","/statuses/be.html",{title:"be"},["/statuses/be","/statuses/be.md"]],["v-4a35bdbe","/statuses/bg.html",{title:"bg"},["/statuses/bg","/statuses/bg.md"]],["v-5627aa17","/statuses/bn.html",{title:"bn"},["/statuses/bn","/statuses/bn.md"]],["v-5eafe532","/statuses/bs.html",{title:"bs"},["/statuses/bs","/statuses/bs.md"]],["v-74dee545","/statuses/ca.html",{title:"ca"},["/statuses/ca","/statuses/ca.md"]],["v-d8d3bf1a","/statuses/cs.html",{title:"cs"},["/statuses/cs","/statuses/cs.md"]],["v-c45997a6","/statuses/cy.html",{title:"cy"},["/statuses/cy","/statuses/cy.md"]],["v-ac75bef4","/statuses/da.html",{title:"da"},["/statuses/da","/statuses/da.md"]],["v-9ecef9fc","/statuses/de.html",{title:"de"},["/statuses/de","/statuses/de.md"]],["v-db8910e8","/statuses/de_CH.html",{title:"de_CH"},["/statuses/de_CH","/statuses/de_CH.md"]],["v-1d1eaac8","/statuses/el.html",{title:"el"},["/statuses/el","/statuses/el.md"]],["v-053ad216","/statuses/es.html",{title:"es"},["/statuses/es","/statuses/es.md"]],["v-01d120d8","/statuses/et.html",{title:"et"},["/statuses/et","/statuses/et.md"]],["v-00cc4833","/statuses/eu.html",{title:"eu"},["/statuses/eu","/statuses/eu.md"]],["v-13919708","/statuses/fa.html",{title:"fa"},["/statuses/fa","/statuses/fa.md"]],["v-21385c00","/statuses/fi.html",{title:"fi"},["/statuses/fi","/statuses/fi.md"]],["v-6c68eda6","/statuses/fil.html",{title:"fil"},["/statuses/fil","/statuses/fil.md"]],["v-3093f997","/statuses/fr.html",{title:"fr"},["/statuses/fr","/statuses/fr.md"]],["v-5b3d211e","/statuses/gl.html",{title:"gl"},["/statuses/gl","/statuses/gl.md"]],["v-6a98beb5","/statuses/gu.html",{title:"gu"},["/statuses/gu","/statuses/gu.md"]],["v-f79d1ff4","/statuses/he.html",{title:"he"},["/statuses/he","/statuses/he.md"]],["v-e9f65afc","/statuses/hi.html",{title:"hi"},["/statuses/hi","/statuses/hi.md"]],["v-cb3f1fce","/statuses/hr.html",{title:"hr"},["/statuses/hr","/statuses/hr.md"]],["v-c1020c14","/statuses/hu.html",{title:"hu"},["/statuses/hu","/statuses/hu.md"]],["v-b35b471c","/statuses/hy.html",{title:"hy"},["/statuses/hy","/statuses/hy.md"]],["v-913a5ab0","/statuses/id.html",{title:"id"},["/statuses/id","/statuses/id.md"]],["v-5e08f80e","/statuses/is.html",{title:"is"},["/statuses/is","/statuses/is.md"]],["v-5a9f46d0","/statuses/it.html",{title:"it"},["/statuses/it","/statuses/it.md"]],["v-31aaf7e8","/statuses/ja.html",{title:"ja"},["/statuses/ja","/statuses/ja.md"]],["v-1c10bf4d","/statuses/ka.html",{title:"ka"},["/statuses/ka","/statuses/ka.md"]],["v-2d213583","/statuses/kk.html",{title:"kk"},["/statuses/kk","/statuses/kk.md"]],["v-308ae6c1","/statuses/km.html",{title:"km"},["/statuses/km","/statuses/km.md"]],["v-323fbf60","/statuses/kn.html",{title:"kn"},["/statuses/kn","/statuses/kn.md"]],["v-33f497ff","/statuses/ko.html",{title:"ko"},["/statuses/ko","/statuses/ko.md"]],["v-71630e5b","/statuses/lt.html",{title:"lt"},["/statuses/lt","/statuses/lt.md"]],["v-74ccbf99","/statuses/lv.html",{title:"lv"},["/statuses/lv","/statuses/lv.md"]],["v-d224a7f6","/statuses/mk.html",{title:"mk"},["/statuses/mk","/statuses/mk.md"]],["v-c7e7943c","/statuses/mn.html",{title:"mn"},["/statuses/mn","/statuses/mn.md"]],["v-ba40cf44","/statuses/mr.html",{title:"mr"},["/statuses/mr","/statuses/mr.md"]],["v-b6d71e06","/statuses/ms.html",{title:"ms"},["/statuses/ms","/statuses/ms.md"]],["v-870f6ca2","/statuses/nb.html",{title:"nb"},["/statuses/nb","/statuses/nb.md"]],["v-7cd258e8","/statuses/ne.html",{title:"ne"},["/statuses/ne","/statuses/ne.md"]],["v-64ee8036","/statuses/nl.html",{title:"nl"},["/statuses/nl","/statuses/nl.md"]],["v-5e1b1dba","/statuses/nn.html",{title:"nn"},["/statuses/nn","/statuses/nn.md"]],["v-19d944e2","/statuses/oc.html",{title:"oc"},["/statuses/oc","/statuses/oc.md"]],["v-37553667","/statuses/pl.html",{title:"pl"},["/statuses/pl","/statuses/pl.md"]],["v-434722c0","/statuses/ps.html",{title:"ps"},["/statuses/ps","/statuses/ps.md"]],["v-44fbfb5f","/statuses/pt.html",{title:"pt"},["/statuses/pt","/statuses/pt.md"]],["v-dc4cfdf8","/statuses/pt_BR.html",{title:"pt_BR"},["/statuses/pt_BR","/statuses/pt_BR.md"]],["v-b37f9274","/statuses/ro.html",{title:"ro"},["/statuses/ro","/statuses/ro.md"]],["v-9f056b00","/statuses/ru.html",{title:"ru"},["/statuses/ru","/statuses/ru.md"]],["v-72a76ada","/statuses/sc.html",{title:"sc"},["/statuses/sc","/statuses/sc.md"]],["v-5e2d4366","/statuses/si.html",{title:"si"},["/statuses/si","/statuses/si.md"]],["v-5759e0ea","/statuses/sk.html",{title:"sk"},["/statuses/sk","/statuses/sk.md"]],["v-53f02fac","/statuses/sl.html",{title:"sl"},["/statuses/sl","/statuses/sl.md"]],["v-42dfb976","/statuses/sq.html",{title:"sq"},["/statuses/sq","/statuses/sq.md"]],["v-330c9042","/statuses/sr_Cyrl.html",{title:"sr_Cyrl"},["/statuses/sr_Cyrl","/statuses/sr_Cyrl.md"]],["v-6608dc80","/statuses/sr_Latn.html",{title:"sr_Latn"},["/statuses/sr_Latn","/statuses/sr_Latn.md"]],["v-098bcebb","/statuses/sr_Latn_ME.html",{title:"sr_Latn_ME"},["/statuses/sr_Latn_ME","/statuses/sr_Latn_ME.md"]],["v-31cf4340","/statuses/sv.html",{title:"sv"},["/statuses/sv","/statuses/sv.md"]],["v-2e659202","/statuses/sw.html",{title:"sw"},["/statuses/sw","/statuses/sw.md"]],["v-0265e850","/statuses/tg.html",{title:"tg"},["/statuses/tg","/statuses/tg.md"]],["v-041ac0ef","/statuses/th.html",{title:"th"},["/statuses/th","/statuses/th.md"]],["v-09394acc","/statuses/tk.html",{title:"tk"},["/statuses/tk","/statuses/tk.md"]],["v-0aee236b","/statuses/tl.html",{title:"tl"},["/statuses/tl","/statuses/tl.md"]],["v-152b3725","/statuses/tr.html",{title:"tr"},["/statuses/tr","/statuses/tr.md"]],["v-374c2391","/statuses/ug.html",{title:"ug"},["/statuses/ug","/statuses/ug.md"]],["v-3e1f860d","/statuses/uk.html",{title:"uk"},["/statuses/uk","/statuses/uk.md"]],["v-4a117266","/statuses/ur.html",{title:"ur"},["/statuses/ur","/statuses/ur.md"]],["v-c5faceb6","/statuses/uz_Cyrl.html",{title:"uz_Cyrl"},["/statuses/uz_Cyrl","/statuses/uz_Cyrl.md"]],["v-f8f71af4","/statuses/uz_Latn.html",{title:"uz_Latn"},["/statuses/uz_Latn","/statuses/uz_Latn.md"]],["v-6f9c1010","/statuses/vi.html",{title:"vi"},["/statuses/vi","/statuses/vi.md"]],["v-579590f3","/statuses/zh_CN.html",{title:"zh_CN"},["/statuses/zh_CN","/statuses/zh_CN.md"]],["v-5af62f5b","/statuses/zh_HK.html",{title:"zh_HK"},["/statuses/zh_HK","/statuses/zh_HK.md"]],["v-2b89c44a","/statuses/zh_TW.html",{title:"zh_TW"},["/statuses/zh_TW","/statuses/zh_TW.md"]],["v-3706649a","/404.html",{title:""},["/404"]]];var dt="Layout",lt="NotFound",mt=async()=>{const{clientConfigs:t}=await e(()=>import("./clientConfigs.e5cfa177.js"),["assets/clientConfigs.e5cfa177.js","assets/framework.a4476b81.js"]),_=t.reduce((a,i)=>({...a,...i.layouts}),{});return P({name:"Vuepress",setup(){const a=b(),i=d(()=>{let o;if(a.value.path){const u=a.value.frontmatter.layout;c(u)?o=u:o=dt}else o=lt;return _[o]});return()=>p(i.value)}})},nt=async()=>{const t=await mt();return vt.reduce((_,[r,a,i,o])=>(_.push({name:r,path:a,component:t,meta:i},...o.map(u=>({path:u,redirect:a}))),_),[{name:"404",path:"/:catchAll(.*)",component:t}])},Et=W,ct=async()=>{const t=j({history:Et(M(E.value.base)),routes:await nt(),scrollBehavior:(_,r,a)=>a||(_.hash?{el:_.hash}:{top:0})});return t.beforeResolve(async(_,r)=>{var a;(_.path!==r.path||r===U)&&([n.value]=await Promise.all([m.resolvePageData(_.name),(a=O[_.name])==null?void 0:a.__asyncLoader()]))}),t},ht=t=>{t.component("ClientOnly",ot),t.component("Content",it)},pt=(t,_)=>{const r=d(()=>m.resolveRouteLocale(E.value.locales,_.currentRoute.value.path)),a=d(()=>m.resolveSiteLocaleData(E.value,r.value)),i=d(()=>m.resolvePageFrontmatter(n.value)),o=d(()=>m.resolvePageHeadTitle(n.value,a.value)),u=d(()=>m.resolvePageHead(o.value,i.value,a.value)),v=d(()=>m.resolvePageLang(n.value));return t.provide(k,r),t.provide(C,a),t.provide(I,i),t.provide(st,o),t.provide(g,u),t.provide(y,v),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get:()=>i.value},$head:{get:()=>u.value},$headTitle:{get:()=>o.value},$lang:{get:()=>v.value},$page:{get:()=>n.value},$routeLocale:{get:()=>r.value},$site:{get:()=>E.value},$siteLocale:{get:()=>a.value},$withBase:{get:()=>ut}}),{pageData:n,pageFrontmatter:i,pageHead:u,pageHeadTitle:o,pageLang:v,routeLocale:r,siteData:E,siteLocaleData:a}},ft=()=>{const t=q(),_=et(),r=_t(),a=f([]),i=()=>{_.value.forEach(u=>{const v=Lt(u);v&&a.value.push(v)})},o=()=>{document.documentElement.lang=r.value,a.value.forEach(u=>{u.parentNode===document.head&&document.head.removeChild(u)}),a.value.splice(0,a.value.length),_.value.forEach(u=>{const v=Rt(u);v!==null&&(document.head.appendChild(v),a.value.push(v))})};J(rt,o),D(()=>{i(),o(),K(()=>t.path,()=>o())})},Lt=([t,_,r=""])=>{const a=Object.entries(_).map(([v,R])=>c(R)?`[${v}=${JSON.stringify(R)}]`:R===!0?`[${v}]`:"").join(""),i=`head > ${t}${a}`;return Array.from(document.querySelectorAll(i)).find(v=>v.innerText===r)||null},Rt=([t,_,r])=>{if(!c(t))return null;const a=document.createElement(t);return G(_)&&Object.entries(_).forEach(([i,o])=>{c(o)?a.setAttribute(i,o):o===!0&&a.setAttribute(i,"")}),c(r)&&a.appendChild(document.createTextNode(r)),a},Tt=F,Pt=async()=>{var a;const{clientConfigs:t}=await e(()=>import("./clientConfigs.e5cfa177.js"),["assets/clientConfigs.e5cfa177.js","assets/framework.a4476b81.js"]),_=Tt({name:"VuepressApp",setup(){var i;ft();for(const o of t)(i=o.setup)==null||i.call(o);return()=>[p(B),...t.flatMap(({rootComponents:o=[]})=>o.map(u=>p(u)))]}}),r=await ct();ht(_),pt(_,r);for(const i of t)await((a=i.enhance)==null?void 0:a.call(i,{app:_,router:r,siteData:E}));return _.use(r),{app:_,router:r}};Pt().then(({app:t,router:_})=>{_.isReady().then(()=>{t.mount("#app")})});export{ot as C,Dt as a,b,at as c,Pt as createVueApp,Vt as d,_t as e,k as r,Ot as u,ut as w};
