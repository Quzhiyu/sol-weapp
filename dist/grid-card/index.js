"use strict";function runAsync(e){return new Promise(function(t,n){var r=setTimeout(function(){t(),clearTimeout(r)},e)})}Component({properties:{card:{type:Array,value:[]}},data:{move:""},methods:{start:function(r){var e=this,t=this.data,a=t.card;t.mode;runAsync(100).then(function(){for(var t=0;t<3;t++)a[t].status=1;return e.setData({card:a}),runAsync(200)}).then(function(){for(var t=3;t<6;t++)a[t].status=1;return e.setData({card:a}),runAsync(200)}).then(function(){for(var t=6;t<=8;t++)a[t].status=1;return e.setData({card:a}),runAsync(800)}).then(function(){for(var t=0;t<9;t++)a[t].status=0;return e.setData({card:a}),runAsync(1e3)}).then(function(){for(var t=function(t){runAsync(40*t).then(function(){return a[t].isMove=!0,e.setData({card:a}),runAsync(40*t+1200)}).then(function(){return a[t].isMove=!1,e.setData({card:a}),runAsync(1600)}).then(function(){"function"==typeof r&&r()})},n=0;n<9;n++)t(n)})},openCard:function(t){var n=t.currentTarget.dataset,r=n.item,e=n.index;this.triggerEvent("open",{item:r,index:e})}}});