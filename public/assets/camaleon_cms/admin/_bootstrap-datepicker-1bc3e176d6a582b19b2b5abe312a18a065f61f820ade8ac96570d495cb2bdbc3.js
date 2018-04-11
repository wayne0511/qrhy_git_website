!function(e){"use strict";if("function"==typeof define&&define.amd)define(["jquery","moment"],e);else if("object"==typeof exports)e(require("jquery"),require("moment"));else{if("undefined"==typeof jQuery)throw"bootstrap-datetimepicker requires jQuery to be loaded first";if("undefined"==typeof moment)throw"bootstrap-datetimepicker requires Moment.js to be loaded first";e(jQuery,moment)}}(function(fe,me){"use strict";if(!me)throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");var n=function(i,p){var d,s,n,o,a,l,r,c={},u=!0,f=!1,m=!1,h=0,t=[{clsName:"days",navFnc:"M",navStep:1},{clsName:"months",navFnc:"y",navStep:1},{clsName:"years",navFnc:"y",navStep:10},{clsName:"decades",navFnc:"y",navStep:100}],y=["days","months","years","decades"],b=["top","bottom","auto"],g=["left","right","auto"],w=["default","top","bottom"],v={up:38,38:"up",down:40,40:"down",left:37,37:"left",right:39,39:"right",tab:9,9:"tab",escape:27,27:"escape",enter:13,13:"enter",pageUp:33,33:"pageUp",pageDown:34,34:"pageDown",shift:16,16:"shift",control:17,17:"control",space:32,32:"space",t:84,84:"t","delete":46,46:"delete"},k={},C=function(e){var t,n,a,r,i=!1;return me.tz!==undefined&&p.timeZone!==undefined&&null!==p.timeZone&&""!==p.timeZone&&(i=!0),e===undefined||null===e?t=i?me().tz(p.timeZone).startOf("d"):me().startOf("d"):i?(n=me().tz(p.timeZone).utcOffset(),me(e,l,p.useStrict).utcOffset()!==n?(a=me().tz(p.timeZone).format("Z"),r=me(e,l,p.useStrict).format("YYYY-MM-DD[T]HH:mm:ss")+a,t=me(r,l,p.useStrict).tz(p.timeZone)):t=me(e,l,p.useStrict).tz(p.timeZone)):t=me(e,l,p.useStrict),t},D=function(e){if("string"!=typeof e||1<e.length)throw new TypeError("isEnabled expects a single character string parameter");switch(e){case"y":return-1!==a.indexOf("Y");case"M":return-1!==a.indexOf("M");case"d":return-1!==a.toLowerCase().indexOf("d");case"h":case"H":return-1!==a.toLowerCase().indexOf("h");case"m":return-1!==a.indexOf("m");case"s":return-1!==a.indexOf("s");default:return!1}},x=function(){return D("h")||D("m")||D("s")},T=function(){return D("y")||D("M")||D("d")},M=function(){var e=fe("<thead>").append(fe("<tr>").append(fe("<th>").addClass("prev").attr("data-action","previous").append(fe("<span>").addClass(p.icons.previous))).append(fe("<th>").addClass("picker-switch").attr("data-action","pickerSwitch").attr("colspan",p.calendarWeeks?"6":"5")).append(fe("<th>").addClass("next").attr("data-action","next").append(fe("<span>").addClass(p.icons.next)))),t=fe("<tbody>").append(fe("<tr>").append(fe("<td>").attr("colspan",p.calendarWeeks?"8":"7")));return[fe("<div>").addClass("datepicker-days").append(fe("<table>").addClass("table-condensed").append(e).append(fe("<tbody>"))),fe("<div>").addClass("datepicker-months").append(fe("<table>").addClass("table-condensed").append(e.clone()).append(t.clone())),fe("<div>").addClass("datepicker-years").append(fe("<table>").addClass("table-condensed").append(e.clone()).append(t.clone())),fe("<div>").addClass("datepicker-decades").append(fe("<table>").addClass("table-condensed").append(e.clone()).append(t.clone()))]},S=function(){var e=fe("<tr>"),t=fe("<tr>"),n=fe("<tr>");return D("h")&&(e.append(fe("<td>").append(fe("<a>").attr({href:"#",tabindex:"-1",title:p.tooltips.incrementHour}).addClass("btn").attr("data-action","incrementHours").append(fe("<span>").addClass(p.icons.up)))),t.append(fe("<td>").append(fe("<span>").addClass("timepicker-hour").attr({"data-time-component":"hours",title:p.tooltips.pickHour}).attr("data-action","showHours"))),n.append(fe("<td>").append(fe("<a>").attr({href:"#",tabindex:"-1",title:p.tooltips.decrementHour}).addClass("btn").attr("data-action","decrementHours").append(fe("<span>").addClass(p.icons.down))))),D("m")&&(D("h")&&(e.append(fe("<td>").addClass("separator")),t.append(fe("<td>").addClass("separator").html(":")),n.append(fe("<td>").addClass("separator"))),e.append(fe("<td>").append(fe("<a>").attr({href:"#",tabindex:"-1",title:p.tooltips.incrementMinute}).addClass("btn").attr("data-action","incrementMinutes").append(fe("<span>").addClass(p.icons.up)))),t.append(fe("<td>").append(fe("<span>").addClass("timepicker-minute").attr({"data-time-component":"minutes",title:p.tooltips.pickMinute}).attr("data-action","showMinutes"))),n.append(fe("<td>").append(fe("<a>").attr({href:"#",tabindex:"-1",title:p.tooltips.decrementMinute}).addClass("btn").attr("data-action","decrementMinutes").append(fe("<span>").addClass(p.icons.down))))),D("s")&&(D("m")&&(e.append(fe("<td>").addClass("separator")),t.append(fe("<td>").addClass("separator").html(":")),n.append(fe("<td>").addClass("separator"))),e.append(fe("<td>").append(fe("<a>").attr({href:"#",tabindex:"-1",title:p.tooltips.incrementSecond}).addClass("btn").attr("data-action","incrementSeconds").append(fe("<span>").addClass(p.icons.up)))),t.append(fe("<td>").append(fe("<span>").addClass("timepicker-second").attr({"data-time-component":"seconds",title:p.tooltips.pickSecond}).attr("data-action","showSeconds"))),n.append(fe("<td>").append(fe("<a>").attr({href:"#",tabindex:"-1",title:p.tooltips.decrementSecond}).addClass("btn").attr("data-action","decrementSeconds").append(fe("<span>").addClass(p.icons.down))))),o||(e.append(fe("<td>").addClass("separator")),t.append(fe("<td>").append(fe("<button>").addClass("btn btn-primary").attr({"data-action":"togglePeriod",tabindex:"-1",title:p.tooltips.togglePeriod}))),n.append(fe("<td>").addClass("separator"))),fe("<div>").addClass("timepicker-picker").append(fe("<table>").addClass("table-condensed").append([e,t,n]))},O=function(){var e=fe("<div>").addClass("timepicker-hours").append(fe("<table>").addClass("table-condensed")),t=fe("<div>").addClass("timepicker-minutes").append(fe("<table>").addClass("table-condensed")),n=fe("<div>").addClass("timepicker-seconds").append(fe("<table>").addClass("table-condensed")),a=[S()];return D("h")&&a.push(e),D("m")&&a.push(t),D("s")&&a.push(n),a},P=function(){var e=[];return p.showTodayButton&&e.push(fe("<td>").append(fe("<a>").attr({"data-action":"today",title:p.tooltips.today}).append(fe("<span>").addClass(p.icons.today)))),!p.sideBySide&&T()&&x()&&e.push(fe("<td>").append(fe("<a>").attr({"data-action":"togglePicker",title:p.tooltips.selectTime}).append(fe("<span>").addClass(p.icons.time)))),p.showClear&&e.push(fe("<td>").append(fe("<a>").attr({"data-action":"clear",title:p.tooltips.clear}).append(fe("<span>").addClass(p.icons.clear)))),p.showClose&&e.push(fe("<td>").append(fe("<a>").attr({"data-action":"close",title:p.tooltips.close}).append(fe("<span>").addClass(p.icons.close)))),fe("<table>").addClass("table-condensed").append(fe("<tbody>").append(fe("<tr>").append(e)))},E=function(){var e=fe("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),t=fe("<div>").addClass("datepicker").append(M()),n=fe("<div>").addClass("timepicker").append(O()),a=fe("<ul>").addClass("list-unstyled"),r=fe("<li>").addClass("picker-switch"+(p.collapse?" accordion-toggle":"")).append(P());return p.inline&&e.removeClass("dropdown-menu"),o&&e.addClass("usetwentyfour"),D("s")&&!o&&e.addClass("wider"),p.sideBySide&&T()&&x()?(e.addClass("timepicker-sbs"),"top"===p.toolbarPlacement&&e.append(r),e.append(fe("<div>").addClass("row").append(t.addClass("col-md-6")).append(n.addClass("col-md-6"))),"bottom"===p.toolbarPlacement&&e.append(r),e):("top"===p.toolbarPlacement&&a.append(r),T()&&a.append(fe("<li>").addClass(p.collapse&&x()?"collapse in":"").append(t)),"default"===p.toolbarPlacement&&a.append(r),x()&&a.append(fe("<li>").addClass(p.collapse&&T()?"collapse":"").append(n)),"bottom"===p.toolbarPlacement&&a.append(r),e.append(a))},e=function(){var n,a={};return(n=i.is("input")||p.inline?i.data():i.find("input").data()).dateOptions&&n.dateOptions instanceof Object&&(a=fe.extend(!0,a,n.dateOptions)),fe.each(p,function(e){var t="date"+e.charAt(0).toUpperCase()+e.slice(1);n[t]!==undefined&&(a[e]=n[t])}),a},H=function(){var e,t=(f||i).position(),n=(f||i).offset(),a=p.widgetPositioning.vertical,r=p.widgetPositioning.horizontal;if(p.widgetParent)e=p.widgetParent.append(m);else if(i.is("input"))e=i.after(m).parent();else{if(p.inline)return void(e=i.append(m));(e=i).children().first().after(m)}if("auto"===a&&(a=n.top+1.5*m.height()>=fe(window).height()+fe(window).scrollTop()&&m.height()+i.outerHeight()<n.top?"top":"bottom"),"auto"===r&&(r=e.width()<n.left+m.outerWidth()/2&&n.left+m.outerWidth()>fe(window).width()?"right":"left"),"top"===a?m.addClass("top").removeClass("bottom"):m.addClass("bottom").removeClass("top"),"right"===r?m.addClass("pull-right"):m.removeClass("pull-right"),"relative"!==e.css("position")&&(e=e.parents().filter(function(){return"relative"===fe(this).css("position")}).first()),0===e.length)throw new Error("datetimepicker component should be placed within a relative positioned container");m.css({top:"top"===a?"auto":t.top+i.outerHeight(),bottom:"top"===a?t.top+i.outerHeight():"auto",left:"left"===r?e===i?0:t.left:"auto",right:"left"===r?"auto":e.outerWidth()-i.outerWidth()-(e===i?0:t.left)})},I=function(e){"dp.change"===e.type&&(e.date&&e.date.isSame(e.oldDate)||!e.date&&!e.oldDate)||i.trigger(e)},Y=function(e){"y"===e&&(e="YYYY"),I({type:"dp.update",change:e,viewDate:s.clone()})},q=function(e){m&&(e&&(r=Math.max(h,Math.min(3,r+e))),m.find(".datepicker > div").hide().filter(".datepicker-"+t[r].clsName).show())},B=function(){var e=fe("<tr>"),t=s.clone().startOf("w").startOf("d");for(!0===p.calendarWeeks&&e.append(fe("<th>").addClass("cw").text("#"));t.isBefore(s.clone().endOf("w"));)e.append(fe("<th>").addClass("dow").text(t.format("dd"))),t.add(1,"d");m.find(".datepicker-days thead").append(e)},j=function(e){return!0===p.disabledDates[e.format("YYYY-MM-DD")]},L=function(e){return!0===p.enabledDates[e.format("YYYY-MM-DD")]},F=function(e){return!0===p.disabledHours[e.format("H")]},W=function(e){return!0===p.enabledHours[e.format("H")]},z=function(e,t){if(!e.isValid())return!1;if(p.disabledDates&&"d"===t&&j(e))return!1;if(p.enabledDates&&"d"===t&&!L(e))return!1;if(p.minDate&&e.isBefore(p.minDate,t))return!1;if(p.maxDate&&e.isAfter(p.maxDate,t))return!1;if(p.daysOfWeekDisabled&&"d"===t&&-1!==p.daysOfWeekDisabled.indexOf(e.day()))return!1;if(p.disabledHours&&("h"===t||"m"===t||"s"===t)&&F(e))return!1;if(p.enabledHours&&("h"===t||"m"===t||"s"===t)&&!W(e))return!1;if(p.disabledTimeIntervals&&("h"===t||"m"===t||"s"===t)){var n=!1;if(fe.each(p.disabledTimeIntervals,function(){if(e.isBetween(this[0],this[1]))return n=!0,!1}),n)return!1}return!0},A=function(){for(var e=[],t=s.clone().startOf("y").startOf("d");t.isSame(s,"y");)e.push(fe("<span>").attr("data-action","selectMonth").addClass("month").text(t.format("MMM"))),t.add(1,"M");m.find(".datepicker-months td").empty().append(e)},N=function(){var e=m.find(".datepicker-months"),t=e.find("th"),n=e.find("tbody").find("span");t.eq(0).find("span").attr("title",p.tooltips.prevYear),t.eq(1).attr("title",p.tooltips.selectYear),t.eq(2).find("span").attr("title",p.tooltips.nextYear),e.find(".disabled").removeClass("disabled"),z(s.clone().subtract(1,"y"),"y")||t.eq(0).addClass("disabled"),t.eq(1).text(s.year()),z(s.clone().add(1,"y"),"y")||t.eq(2).addClass("disabled"),n.removeClass("active"),d.isSame(s,"y")&&!u&&n.eq(d.month()).addClass("active"),n.each(function(e){z(s.clone().month(e),"M")||fe(this).addClass("disabled")})},Z=function(){var e=m.find(".datepicker-years"),t=e.find("th"),n=s.clone().subtract(5,"y"),a=s.clone().add(6,"y"),r="";for(t.eq(0).find("span").attr("title",p.tooltips.prevDecade),t.eq(1).attr("title",p.tooltips.selectDecade),t.eq(2).find("span").attr("title",p.tooltips.nextDecade),e.find(".disabled").removeClass("disabled"),p.minDate&&p.minDate.isAfter(n,"y")&&t.eq(0).addClass("disabled"),t.eq(1).text(n.year()+"-"+a.year()),p.maxDate&&p.maxDate.isBefore(a,"y")&&t.eq(2).addClass("disabled");!n.isAfter(a,"y");)r+='<span data-action="selectYear" class="year'+(n.isSame(d,"y")&&!u?" active":"")+(z(n,"y")?"":" disabled")+'">'+n.year()+"</span>",n.add(1,"y");e.find("td").html(r)},V=function(){var e=m.find(".datepicker-decades"),t=e.find("th"),n=me({y:s.year()-s.year()%100-1}),a=n.clone().add(100,"y"),r=n.clone(),i="";for(t.eq(0).find("span").attr("title",p.tooltips.prevCentury),t.eq(2).find("span").attr("title",p.tooltips.nextCentury),e.find(".disabled").removeClass("disabled"),(n.isSame(me({y:1900}))||p.minDate&&p.minDate.isAfter(n,"y"))&&t.eq(0).addClass("disabled"),t.eq(1).text(n.year()+"-"+a.year()),(n.isSame(me({y:2e3}))||p.maxDate&&p.maxDate.isBefore(a,"y"))&&t.eq(2).addClass("disabled");!n.isAfter(a,"y");)i+='<span data-action="selectDecade" class="decade'+(n.isSame(d,"y")?" active":"")+(z(n,"y")?"":" disabled")+'" data-selection="'+(n.year()+6)+'">'+(n.year()+1)+" - "+(n.year()+12)+"</span>",n.add(12,"y");i+="<span></span><span></span><span></span>",e.find("td").html(i),t.eq(1).text(r.year()+1+"-"+n.year())},R=function(){var e,t,n,a,r=m.find(".datepicker-days"),i=r.find("th"),o=[];if(T()){for(i.eq(0).find("span").attr("title",p.tooltips.prevMonth),i.eq(1).attr("title",p.tooltips.selectMonth),i.eq(2).find("span").attr("title",p.tooltips.nextMonth),r.find(".disabled").removeClass("disabled"),i.eq(1).text(s.format(p.dayViewHeaderFormat)),z(s.clone().subtract(1,"M"),"M")||i.eq(0).addClass("disabled"),z(s.clone().add(1,"M"),"M")||i.eq(2).addClass("disabled"),e=s.clone().startOf("M").startOf("w").startOf("d"),a=0;a<42;a++)0===e.weekday()&&(t=fe("<tr>"),p.calendarWeeks&&t.append('<td class="cw">'+e.week()+"</td>"),o.push(t)),n="",e.isBefore(s,"M")&&(n+=" old"),e.isAfter(s,"M")&&(n+=" new"),e.isSame(d,"d")&&!u&&(n+=" active"),z(e,"d")||(n+=" disabled"),e.isSame(C(),"d")&&(n+=" today"),0!==e.day()&&6!==e.day()||(n+=" weekend"),t.append('<td data-action="selectDay" data-day="'+e.format("L")+'" class="day'+n+'">'+e.date()+"</td>"),e.add(1,"d");r.find("tbody").empty().append(o),N(),Z(),V()}},U=function(){var e=m.find(".timepicker-hours table"),t=s.clone().startOf("d"),n=[],a=fe("<tr>");for(11<s.hour()&&!o&&t.hour(12);t.isSame(s,"d")&&(o||s.hour()<12&&t.hour()<12||11<s.hour());)t.hour()%4==0&&(a=fe("<tr>"),n.push(a)),a.append('<td data-action="selectHour" class="hour'+(z(t,"h")?"":" disabled")+'">'+t.format(o?"HH":"hh")+"</td>"),t.add(1,"h");e.empty().append(n)},Q=function(){for(var e=m.find(".timepicker-minutes table"),t=s.clone().startOf("h"),n=[],a=fe("<tr>"),r=1===p.stepping?5:p.stepping;s.isSame(t,"h");)t.minute()%(4*r)==0&&(a=fe("<tr>"),n.push(a)),a.append('<td data-action="selectMinute" class="minute'+(z(t,"m")?"":" disabled")+'">'+t.format("mm")+"</td>"),t.add(r,"m");e.empty().append(n)},G=function(){for(var e=m.find(".timepicker-seconds table"),t=s.clone().startOf("m"),n=[],a=fe("<tr>");s.isSame(t,"m");)t.second()%20==0&&(a=fe("<tr>"),n.push(a)),a.append('<td data-action="selectSecond" class="second'+(z(t,"s")?"":" disabled")+'">'+t.format("ss")+"</td>"),t.add(5,"s");e.empty().append(n)},_=function(){var e,t,n=m.find(".timepicker span[data-time-component]");o||(e=m.find(".timepicker [data-action=togglePeriod]"),t=d.clone().add(12<=d.hours()?-12:12,"h"),e.text(d.format("A")),z(t,"h")?e.removeClass("disabled"):e.addClass("disabled")),n.filter("[data-time-component=hours]").text(d.format(o?"HH":"hh")),n.filter("[data-time-component=minutes]").text(d.format("mm")),n.filter("[data-time-component=seconds]").text(d.format("ss")),U(),Q(),G()},J=function(){m&&(R(),_())},K=function(e){var t=u?null:d;if(!e)return u=!0,n.val(""),i.data("date",""),I({type:"dp.change",date:!1,oldDate:t}),void J();e=e.clone().locale(p.locale),1!==p.stepping&&e.minutes(Math.round(e.minutes()/p.stepping)*p.stepping%60).seconds(0),z(e)?(s=(d=e).clone(),n.val(d.format(a)),i.data("date",d.format(a)),u=!1,J(),I({type:"dp.change",date:d.clone(),oldDate:t})):(p.keepInvalid||n.val(u?"":d.format(a)),I({type:"dp.error",date:e}))},X=function(){var t=!1;return m?(m.find(".collapse").each(function(){var e=fe(this).data("collapse");return!e||!e.transitioning||(t=!0,!1)}),t||(f&&f.hasClass("btn")&&f.toggleClass("active"),m.hide(),fe(window).off("resize",H),m.off("click","[data-action]"),m.off("mousedown",!1),m.remove(),m=!1,I({type:"dp.hide",date:d.clone()}),n.blur()),c):c},$=function(){K(null)},ee={next:function(){var e=t[r].navFnc;s.add(t[r].navStep,e),R(),Y(e)},previous:function(){var e=t[r].navFnc;s.subtract(t[r].navStep,e),R(),Y(e)},pickerSwitch:function(){q(1)},selectMonth:function(e){var t=fe(e.target).closest("tbody").find("span").index(fe(e.target));s.month(t),r===h?(K(d.clone().year(s.year()).month(s.month())),p.inline||X()):(q(-1),R()),Y("M")},selectYear:function(e){var t=parseInt(fe(e.target).text(),10)||0;s.year(t),r===h?(K(d.clone().year(s.year())),p.inline||X()):(q(-1),R()),Y("YYYY")},selectDecade:function(e){var t=parseInt(fe(e.target).data("selection"),10)||0;s.year(t),r===h?(K(d.clone().year(s.year())),p.inline||X()):(q(-1),R()),Y("YYYY")},selectDay:function(e){var t=s.clone();fe(e.target).is(".old")&&t.subtract(1,"M"),fe(e.target).is(".new")&&t.add(1,"M"),K(t.date(parseInt(fe(e.target).text(),10))),x()||p.keepOpen||p.inline||X()},incrementHours:function(){var e=d.clone().add(1,"h");z(e,"h")&&K(e)},incrementMinutes:function(){var e=d.clone().add(p.stepping,"m");z(e,"m")&&K(e)},incrementSeconds:function(){var e=d.clone().add(1,"s");z(e,"s")&&K(e)},decrementHours:function(){var e=d.clone().subtract(1,"h");z(e,"h")&&K(e)},decrementMinutes:function(){var e=d.clone().subtract(p.stepping,"m");z(e,"m")&&K(e)},decrementSeconds:function(){var e=d.clone().subtract(1,"s");z(e,"s")&&K(e)},togglePeriod:function(){K(d.clone().add(12<=d.hours()?-12:12,"h"))},togglePicker:function(e){var t,n=fe(e.target),a=n.closest("ul"),r=a.find(".in"),i=a.find(".collapse:not(.in)");if(r&&r.length){if((t=r.data("collapse"))&&t.transitioning)return;r.collapse?(r.collapse("hide"),i.collapse("show")):(r.removeClass("in"),i.addClass("in")),n.is("span")?n.toggleClass(p.icons.time+" "+p.icons.date):n.find("span").toggleClass(p.icons.time+" "+p.icons.date)}},showPicker:function(){m.find(".timepicker > div:not(.timepicker-picker)").hide(),m.find(".timepicker .timepicker-picker").show()},showHours:function(){m.find(".timepicker .timepicker-picker").hide(),m.find(".timepicker .timepicker-hours").show()},showMinutes:function(){m.find(".timepicker .timepicker-picker").hide(),m.find(".timepicker .timepicker-minutes").show()},showSeconds:function(){m.find(".timepicker .timepicker-picker").hide(),m.find(".timepicker .timepicker-seconds").show()},selectHour:function(e){var t=parseInt(fe(e.target).text(),10);o||(12<=d.hours()?12!==t&&(t+=12):12===t&&(t=0)),K(d.clone().hours(t)),ee.showPicker.call(c)},selectMinute:function(e){K(d.clone().minutes(parseInt(fe(e.target).text(),10))),ee.showPicker.call(c)},selectSecond:function(e){K(d.clone().seconds(parseInt(fe(e.target).text(),10))),ee.showPicker.call(c)},clear:$,today:function(){var e=C();z(e,"d")&&K(e)},close:X},te=function(e){return fe(e.currentTarget).is(".disabled")||ee[fe(e.currentTarget).data("action")].apply(c,arguments),!1},ne=function(){var e,t={year:function(e){return e.month(0).date(1).hours(0).seconds(0).minutes(0)},month:function(e){return e.date(1).hours(0).seconds(0).minutes(0)},day:function(e){return e.hours(0).seconds(0).minutes(0)},hour:function(e){return e.seconds(0).minutes(0)},minute:function(e){return e.seconds(0)}};return n.prop("disabled")||!p.ignoreReadonly&&n.prop("readonly")||m||(n.val()!==undefined&&0!==n.val().trim().length?K(re(n.val().trim())):p.useCurrent&&u&&(n.is("input")&&0===n.val().trim().length||p.inline)&&(e=C(),"string"==typeof p.useCurrent&&(e=t[p.useCurrent](e)),K(e)),m=E(),B(),A(),m.find(".timepicker-hours").hide(),m.find(".timepicker-minutes").hide(),m.find(".timepicker-seconds").hide(),J(),q(),fe(window).on("resize",H),m.on("click","[data-action]",te),m.on("mousedown",!1),f&&f.hasClass("btn")&&f.toggleClass("active"),m.show(),H(),p.focusOnShow&&!n.is(":focus")&&n.focus(),I({type:"dp.show"})),c},ae=function(){return m?X():ne()},re=function(e){return(e=p.parseInputDate===undefined?me.isMoment(e)||e instanceof Date?me(e):C(e):p.parseInputDate(e)).locale(p.locale),e},ie=function(e){var t,n,a,r,i=null,o=[],d={},s=e.which,l="p";for(t in k[s]=l,k)k.hasOwnProperty(t)&&k[t]===l&&(o.push(t),parseInt(t,10)!==s&&(d[t]=!0));for(t in p.keyBinds)if(p.keyBinds.hasOwnProperty(t)&&"function"==typeof p.keyBinds[t]&&(a=t.split(" ")).length===o.length&&v[s]===a[a.length-1]){for(r=!0,n=a.length-2;0<=n;n--)if(!(v[a[n]]in d)){r=!1;break}if(r){i=p.keyBinds[t];break}}i&&(i.call(c,m),e.stopPropagation(),e.preventDefault())},oe=function(e){k[e.which]="r",e.stopPropagation(),e.preventDefault()},de=function(e){var t=fe(e.target).val().trim(),n=t?re(t):null;return K(n),e.stopImmediatePropagation(),!1},se=function(){n.on({change:de,blur:p.debug?"":X,keydown:ie,keyup:oe,focus:p.allowInputToggle?ne:""}),i.is("input")?n.on({focus:ne}):f&&(f.on("click",ae),f.on("mousedown",!1))},le=function(){n.off({change:de,blur:blur,keydown:ie,keyup:oe,focus:p.allowInputToggle?X:""}),i.is("input")?n.off({focus:ne}):f&&(f.off("click",ae),f.off("mousedown",!1))},pe=function(e){var t={};return fe.each(e,function(){var e=re(this);e.isValid()&&(t[e.format("YYYY-MM-DD")]=!0)}),!!Object.keys(t).length&&t},ce=function(e){var t={};return fe.each(e,function(){t[this]=!0}),!!Object.keys(t).length&&t},ue=function(){var e=p.format||"L LT";a=e.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(e){return(d.localeData().longDateFormat(e)||e).replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(e){return d.localeData().longDateFormat(e)||e})}),(l=p.extraFormats?p.extraFormats.slice():[]).indexOf(e)<0&&l.indexOf(a)<0&&l.push(a),o=a.toLowerCase().indexOf("a")<1&&a.replace(/\[.*?\]/g,"").indexOf("h")<1,D("y")&&(h=2),D("M")&&(h=1),D("d")&&(h=0),r=Math.max(h,r),u||K(d)};if(c.destroy=function(){X(),le(),i.removeData("DateTimePicker"),i.removeData("date")},c.toggle=ae,c.show=ne,c.hide=X,c.disable=function(){return X(),f&&f.hasClass("btn")&&f.addClass("disabled"),n.prop("disabled",!0),c},c.enable=function(){return f&&f.hasClass("btn")&&f.removeClass("disabled"),n.prop("disabled",!1),c},c.ignoreReadonly=function(e){if(0===arguments.length)return p.ignoreReadonly;if("boolean"!=typeof e)throw new TypeError("ignoreReadonly () expects a boolean parameter");return p.ignoreReadonly=e,c},c.options=function(e){if(0===arguments.length)return fe.extend(!0,{},p);if(!(e instanceof Object))throw new TypeError("options() options parameter should be an object");return fe.extend(!0,p,e),fe.each(p,function(e,t){c[e]!==undefined&&c[e](t)}),c},c.date=function(e){if(0===arguments.length)return u?null:d.clone();if(!(null===e||"string"==typeof e||me.isMoment(e)||e instanceof Date))throw new TypeError("date() parameter must be one of [null, string, moment or Date]");return K(null===e?null:re(e)),c},c.format=function(e){if(0===arguments.length)return p.format;if("string"!=typeof e&&("boolean"!=typeof e||!1!==e))throw new TypeError("format() expects a sting or boolean:false parameter "+e);return p.format=e,a&&ue(),c},c.timeZone=function(e){return 0===arguments.length?p.timeZone:(p.timeZone=e,c)},c.dayViewHeaderFormat=function(e){if(0===arguments.length)return p.dayViewHeaderFormat;if("string"!=typeof e)throw new TypeError("dayViewHeaderFormat() expects a string parameter");return p.dayViewHeaderFormat=e,c},c.extraFormats=function(e){if(0===arguments.length)return p.extraFormats;if(!1!==e&&!(e instanceof Array))throw new TypeError("extraFormats() expects an array or false parameter");return p.extraFormats=e,l&&ue(),c},c.disabledDates=function(e){if(0===arguments.length)return p.disabledDates?fe.extend({},p.disabledDates):p.disabledDates;if(!e)return p.disabledDates=!1,J(),c;if(!(e instanceof Array))throw new TypeError("disabledDates() expects an array parameter");return p.disabledDates=pe(e),p.enabledDates=!1,J(),c},c.enabledDates=function(e){if(0===arguments.length)return p.enabledDates?fe.extend({},p.enabledDates):p.enabledDates;if(!e)return p.enabledDates=!1,J(),c;if(!(e instanceof Array))throw new TypeError("enabledDates() expects an array parameter");return p.enabledDates=pe(e),p.disabledDates=!1,J(),c},c.daysOfWeekDisabled=function(e){if(0===arguments.length)return p.daysOfWeekDisabled.splice(0);if("boolean"==typeof e&&!e)return p.daysOfWeekDisabled=!1,J(),c;if(!(e instanceof Array))throw new TypeError("daysOfWeekDisabled() expects an array parameter");if(p.daysOfWeekDisabled=e.reduce(function(e,t){return 6<(t=parseInt(t,10))||t<0||isNaN(t)||-1===e.indexOf(t)&&e.push(t),e},[]).sort(),p.useCurrent&&!p.keepInvalid){for(var t=0;!z(d,"d");){if(d.add(1,"d"),7===t)throw"Tried 7 times to find a valid date";t++}K(d)}return J(),c},c.maxDate=function(e){if(0===arguments.length)return p.maxDate?p.maxDate.clone():p.maxDate;if("boolean"==typeof e&&!1===e)return p.maxDate=!1,J(),c;"string"==typeof e&&("now"!==e&&"moment"!==e||(e=C()));var t=re(e);if(!t.isValid())throw new TypeError("maxDate() Could not parse date parameter: "+e);if(p.minDate&&t.isBefore(p.minDate))throw new TypeError("maxDate() date parameter is before options.minDate: "+t.format(a));return p.maxDate=t,p.useCurrent&&!p.keepInvalid&&d.isAfter(e)&&K(p.maxDate),s.isAfter(t)&&(s=t.clone().subtract(p.stepping,"m")),J(),c},c.minDate=function(e){if(0===arguments.length)return p.minDate?p.minDate.clone():p.minDate;if("boolean"==typeof e&&!1===e)return p.minDate=!1,J(),c;"string"==typeof e&&("now"!==e&&"moment"!==e||(e=C()));var t=re(e);if(!t.isValid())throw new TypeError("minDate() Could not parse date parameter: "+e);if(p.maxDate&&t.isAfter(p.maxDate))throw new TypeError("minDate() date parameter is after options.maxDate: "+t.format(a));return p.minDate=t,p.useCurrent&&!p.keepInvalid&&d.isBefore(e)&&K(p.minDate),s.isBefore(t)&&(s=t.clone().add(p.stepping,"m")),J(),c},c.defaultDate=function(e){if(0===arguments.length)return p.defaultDate?p.defaultDate.clone():p.defaultDate;if(!e)return p.defaultDate=!1,c;"string"==typeof e&&("now"!==e&&"moment"!==e||(e=C()));var t=re(e);if(!t.isValid())throw new TypeError("defaultDate() Could not parse date parameter: "+e);if(!z(t))throw new TypeError("defaultDate() date passed is invalid according to component setup validations");return p.defaultDate=t,(p.defaultDate&&p.inline||""===n.val().trim())&&K(p.defaultDate),c},c.locale=function(e){if(0===arguments.length)return p.locale;if(!me.localeData(e))throw new TypeError("locale() locale "+e+" is not loaded from moment locales!");return p.locale=e,d.locale(p.locale),s.locale(p.locale),a&&ue(),m&&(X(),ne()),c},c.stepping=function(e){return 0===arguments.length?p.stepping:(e=parseInt(e,10),(isNaN(e)||e<1)&&(e=1),p.stepping=e,c)},c.useCurrent=function(e){var t=["year","month","day","hour","minute"];if(0===arguments.length)return p.useCurrent;if("boolean"!=typeof e&&"string"!=typeof e)throw new TypeError("useCurrent() expects a boolean or string parameter");if("string"==typeof e&&-1===t.indexOf(e.toLowerCase()))throw new TypeError("useCurrent() expects a string parameter of "+t.join(", "));return p.useCurrent=e,c},c.collapse=function(e){if(0===arguments.length)return p.collapse;if("boolean"!=typeof e)throw new TypeError("collapse() expects a boolean parameter");return p.collapse===e||(p.collapse=e,m&&(X(),ne())),c},c.icons=function(e){if(0===arguments.length)return fe.extend({},p.icons);if(!(e instanceof Object))throw new TypeError("icons() expects parameter to be an Object");return fe.extend(p.icons,e),m&&(X(),ne()),c},c.tooltips=function(e){if(0===arguments.length)return fe.extend({},p.tooltips);if(!(e instanceof Object))throw new TypeError("tooltips() expects parameter to be an Object");return fe.extend(p.tooltips,e),m&&(X(),ne()),c},c.useStrict=function(e){if(0===arguments.length)return p.useStrict;if("boolean"!=typeof e)throw new TypeError("useStrict() expects a boolean parameter");return p.useStrict=e,c},c.sideBySide=function(e){if(0===arguments.length)return p.sideBySide;if("boolean"!=typeof e)throw new TypeError("sideBySide() expects a boolean parameter");return p.sideBySide=e,m&&(X(),ne()),c},c.viewMode=function(e){if(0===arguments.length)return p.viewMode;if("string"!=typeof e)throw new TypeError("viewMode() expects a string parameter");if(-1===y.indexOf(e))throw new TypeError("viewMode() parameter must be one of ("+y.join(", ")+") value");return p.viewMode=e,r=Math.max(y.indexOf(e),h),q(),c},c.toolbarPlacement=function(e){if(0===arguments.length)return p.toolbarPlacement;if("string"!=typeof e)throw new TypeError("toolbarPlacement() expects a string parameter");if(-1===w.indexOf(e))throw new TypeError("toolbarPlacement() parameter must be one of ("+w.join(", ")+") value");return p.toolbarPlacement=e,m&&(X(),ne()),c},c.widgetPositioning=function(e){if(0===arguments.length)return fe.extend({},p.widgetPositioning);if("[object Object]"!=={}.toString.call(e))throw new TypeError("widgetPositioning() expects an object variable");if(e.horizontal){if("string"!=typeof e.horizontal)throw new TypeError("widgetPositioning() horizontal variable must be a string");if(e.horizontal=e.horizontal.toLowerCase(),-1===g.indexOf(e.horizontal))throw new TypeError("widgetPositioning() expects horizontal parameter to be one of ("+g.join(", ")+")");p.widgetPositioning.horizontal=e.horizontal}if(e.vertical){if("string"!=typeof e.vertical)throw new TypeError("widgetPositioning() vertical variable must be a string");if(e.vertical=e.vertical.toLowerCase(),-1===b.indexOf(e.vertical))throw new TypeError("widgetPositioning() expects vertical parameter to be one of ("+b.join(", ")+")");p.widgetPositioning.vertical=e.vertical}return J(),c},c.calendarWeeks=function(e){if(0===arguments.length)return p.calendarWeeks;if("boolean"!=typeof e)throw new TypeError("calendarWeeks() expects parameter to be a boolean value");return p.calendarWeeks=e,J(),c},c.showTodayButton=function(e){if(0===arguments.length)return p.showTodayButton;if("boolean"!=typeof e)throw new TypeError("showTodayButton() expects a boolean parameter");return p.showTodayButton=e,m&&(X(),ne()),c},c.showClear=function(e){if(0===arguments.length)return p.showClear;if("boolean"!=typeof e)throw new TypeError("showClear() expects a boolean parameter");return p.showClear=e,m&&(X(),ne()),c},c.widgetParent=function(e){if(0===arguments.length)return p.widgetParent;if("string"==typeof e&&(e=fe(e)),null!==e&&"string"!=typeof e&&!(e instanceof fe))throw new TypeError("widgetParent() expects a string or a jQuery object parameter");return p.widgetParent=e,m&&(X(),ne()),c},c.keepOpen=function(e){if(0===arguments.length)return p.keepOpen;if("boolean"!=typeof e)throw new TypeError("keepOpen() expects a boolean parameter");return p.keepOpen=e,c},c.focusOnShow=function(e){if(0===arguments.length)return p.focusOnShow;if("boolean"!=typeof e)throw new TypeError("focusOnShow() expects a boolean parameter");return p.focusOnShow=e,c},c.inline=function(e){if(0===arguments.length)return p.inline;if("boolean"!=typeof e)throw new TypeError("inline() expects a boolean parameter");return p.inline=e,c},c.clear=function(){return $(),c},c.keyBinds=function(e){return p.keyBinds=e,c},c.getMoment=function(e){return C(e)},c.debug=function(e){if("boolean"!=typeof e)throw new TypeError("debug() expects a boolean parameter");return p.debug=e,c},c.allowInputToggle=function(e){if(0===arguments.length)return p.allowInputToggle;if("boolean"!=typeof e)throw new TypeError("allowInputToggle() expects a boolean parameter");return p.allowInputToggle=e,c},c.showClose=function(e){if(0===arguments.length)return p.showClose;if("boolean"!=typeof e)throw new TypeError("showClose() expects a boolean parameter");return p.showClose=e,c},c.keepInvalid=function(e){if(0===arguments.length)return p.keepInvalid;if("boolean"!=typeof e)throw new TypeError("keepInvalid() expects a boolean parameter");return p.keepInvalid=e,c},c.datepickerInput=function(e){if(0===arguments.length)return p.datepickerInput;if("string"!=typeof e)throw new TypeError("datepickerInput() expects a string parameter");return p.datepickerInput=e,c},c.parseInputDate=function(e){if(0===arguments.length)return p.parseInputDate;if("function"!=typeof e)throw new TypeError("parseInputDate() sholud be as function");return p.parseInputDate=e,c},c.disabledTimeIntervals=function(e){if(0===arguments.length)return p.disabledTimeIntervals?fe.extend({},p.disabledTimeIntervals):p.disabledTimeIntervals;if(!e)return p.disabledTimeIntervals=!1,J(),c;if(!(e instanceof Array))throw new TypeError("disabledTimeIntervals() expects an array parameter");return p.disabledTimeIntervals=e,J(),c},c.disabledHours=function(e){if(0===arguments.length)return p.disabledHours?fe.extend({},p.disabledHours):p.disabledHours;if(!e)return p.disabledHours=!1,J(),c;if(!(e instanceof Array))throw new TypeError("disabledHours() expects an array parameter")
;if(p.disabledHours=ce(e),p.enabledHours=!1,p.useCurrent&&!p.keepInvalid){for(var t=0;!z(d,"h");){if(d.add(1,"h"),24===t)throw"Tried 24 times to find a valid date";t++}K(d)}return J(),c},c.enabledHours=function(e){if(0===arguments.length)return p.enabledHours?fe.extend({},p.enabledHours):p.enabledHours;if(!e)return p.enabledHours=!1,J(),c;if(!(e instanceof Array))throw new TypeError("enabledHours() expects an array parameter");if(p.enabledHours=ce(e),p.disabledHours=!1,p.useCurrent&&!p.keepInvalid){for(var t=0;!z(d,"h");){if(d.add(1,"h"),24===t)throw"Tried 24 times to find a valid date";t++}K(d)}return J(),c},c.viewDate=function(e){if(0===arguments.length)return s.clone();if(!e)return s=d.clone(),c;if(!("string"==typeof e||me.isMoment(e)||e instanceof Date))throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");return s=re(e),Y(),c},i.is("input"))n=i;else if(0===(n=i.find(p.datepickerInput)).length)n=i.find("input");else if(!n.is("input"))throw new Error('CSS class "'+p.datepickerInput+'" cannot be applied to non input element');if(i.hasClass("input-group")&&(f=0===i.find(".datepickerbutton").length?i.find(".input-group-addon"):i.find(".datepickerbutton")),!p.inline&&!n.is("input"))throw new Error("Could not initialize DateTimePicker without an input element");return d=C(),s=d.clone(),fe.extend(!0,p,e()),c.options(p),ue(),se(),n.prop("disabled")&&c.disable(),n.is("input")&&0!==n.val().trim().length?K(re(n.val().trim())):p.defaultDate&&n.attr("placeholder")===undefined&&K(p.defaultDate),p.inline&&ne(),c};fe.fn.datetimepicker=function(t){return this.each(function(){var e=fe(this);e.data("DateTimePicker")||(t=fe.extend(!0,{},fe.fn.datetimepicker.defaults,t),e.data("DateTimePicker",n(e,t)))})},fe.fn.datetimepicker.defaults={timeZone:"Etc/UTC",format:!1,dayViewHeaderFormat:"MMMM YYYY",extraFormats:!1,stepping:1,minDate:!1,maxDate:!1,useCurrent:!0,collapse:!0,locale:CURRENT_LOCALE||me.locale(),defaultDate:!1,disabledDates:!1,enabledDates:!1,icons:{time:"glyphicon glyphicon-time",date:"glyphicon glyphicon-calendar",up:"glyphicon glyphicon-chevron-up",down:"glyphicon glyphicon-chevron-down",previous:"glyphicon glyphicon-chevron-left",next:"glyphicon glyphicon-chevron-right",today:"glyphicon glyphicon-screenshot",clear:"glyphicon glyphicon-trash",close:"glyphicon glyphicon-remove"},tooltips:{today:"Go to today",clear:"Clear selection",close:"Close the picker",selectMonth:"Select Month",prevMonth:"Previous Month",nextMonth:"Next Month",selectYear:"Select Year",prevYear:"Previous Year",nextYear:"Next Year",selectDecade:"Select Decade",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevCentury:"Previous Century",nextCentury:"Next Century",pickHour:"Pick Hour",incrementHour:"Increment Hour",decrementHour:"Decrement Hour",pickMinute:"Pick Minute",incrementMinute:"Increment Minute",decrementMinute:"Decrement Minute",pickSecond:"Pick Second",incrementSecond:"Increment Second",decrementSecond:"Decrement Second",togglePeriod:"Toggle Period",selectTime:"Select Time"},useStrict:!1,sideBySide:!1,daysOfWeekDisabled:!1,calendarWeeks:!1,viewMode:"days",toolbarPlacement:"default",showTodayButton:!1,showClear:!1,showClose:!1,widgetPositioning:{horizontal:"auto",vertical:"auto"},widgetParent:null,ignoreReadonly:!1,keepOpen:!1,focusOnShow:!0,inline:!1,keepInvalid:!1,datepickerInput:".datepickerinput",keyBinds:{up:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")?this.date(t.clone().subtract(7,"d")):this.date(t.clone().add(this.stepping(),"m"))}},down:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")?this.date(t.clone().add(7,"d")):this.date(t.clone().subtract(this.stepping(),"m"))}else this.show()},"control up":function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")?this.date(t.clone().subtract(1,"y")):this.date(t.clone().add(1,"h"))}},"control down":function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")?this.date(t.clone().add(1,"y")):this.date(t.clone().subtract(1,"h"))}},left:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")&&this.date(t.clone().subtract(1,"d"))}},right:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")&&this.date(t.clone().add(1,"d"))}},pageUp:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")&&this.date(t.clone().subtract(1,"M"))}},pageDown:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")&&this.date(t.clone().add(1,"M"))}},enter:function(){this.hide()},escape:function(){this.hide()},"control space":function(e){e.find(".timepicker").is(":visible")&&e.find('.btn[data-action="togglePeriod"]').click()},t:function(){this.date(this.getMoment())},"delete":function(){this.clear()}},debug:!1,allowInputToggle:!1,disabledTimeIntervals:!1,disabledHours:!1,enabledHours:!1,viewDate:!1},fe.fn.datepicker=function(e){(e=e||{}).format||(e.format="YYYY-MM-DD"),fe(this).datetimepicker(e)}});