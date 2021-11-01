(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"7ca0":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{staticClass:"row q-my-sm"},[t("q-btn",{staticClass:"col q-ml-md q-mr-sm",attrs:{color:"teal",label:"扫描本地音声库",disable:"running"===e.state||!(e.loggedIn||e.$socket.connected)},on:{click:function(s){return e.performScan()}}}),t("q-btn",{staticClass:"col q-ml-sm q-mr-md",attrs:{color:"negative",label:"终止扫描进程",disable:"running"!==e.state||!(e.loggedIn||e.$socket.connected)},on:{click:function(s){return e.killScanProceess()}}})],1),t("q-card",{directives:[{name:"show",rawName:"v-show",value:e.state,expression:"state"}],staticClass:"q-ma-md"},[t("q-expansion-item",{attrs:{"expand-separator":""},scopedSlots:e._u([{key:"header",fn:function(){return[t("q-item-section",{attrs:{avatar:""}},["running"===e.state?t("q-spinner-gears",{attrs:{color:"primary",size:"2em"}}):"finished"===e.state?t("q-icon",{attrs:{name:"done",color:"positive",size:"2em"}}):"error"===e.state?t("q-icon",{attrs:{name:"bug_report",color:"red",size:"2em"}}):e._e()],1),t("q-item-section",[e.allLogs.length>1?t("q-item-label",{staticClass:"ellipsis"},[e._v(e._s(e.allLogs[e.allLogs.length-2].message))]):e._e(),e.allLogs.length>0?t("q-item-label",{staticClass:"ellipsis"},[e._v(e._s(e.allLogs[e.allLogs.length-1].message))]):e._e()],1)]},proxy:!0}])},[t("q-scroll-area",{staticClass:"bg-dark text-white q-pa-md",staticStyle:{height:"256px"}},e._l(e.allLogs,(function(s,a){return t("div",{key:a},[t("span",{class:"error"===s.level?"text-red":""},[e._v("➜ "+e._s(s.message))])])})),0)],1)],1),t("q-card",{directives:[{name:"show",rawName:"v-show",value:e.tasks.length>0||e.failedTasks.length>0,expression:"(tasks.length > 0) || (failedTasks.length > 0)"}],staticClass:"q-ma-md"},[t("q-tabs",{staticClass:"text-grey",attrs:{dense:"","inline-label":"","active-color":"white","active-bg-color":"brown","indicator-color":"yellow",align:"justify","narrow-indicator":""},model:{value:e.tab,callback:function(s){e.tab=s},expression:"tab"}},[t("q-tab",{attrs:{name:"tasks",icon:"hourglass_full",label:"处理中"}},[t("q-badge",{directives:[{name:"show",rawName:"v-show",value:e.tasks.length>0,expression:"tasks.length > 0"}],attrs:{color:"primary",floating:""}},[e._v(e._s(e.tasks.length))])],1),t("q-tab",{attrs:{name:"failedTasks",icon:"error_outline",label:"处理失败"}},[t("q-badge",{directives:[{name:"show",rawName:"v-show",value:e.failedTasks.length>0,expression:"failedTasks.length > 0"}],attrs:{color:"red",floating:""}},[e._v(e._s(e.failedTasks.length))])],1)],1),t("q-separator"),t("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(s){e.tab=s},expression:"tab"}},[t("q-tab-panel",{staticClass:"q-pa-none",attrs:{name:"tasks"}},[t("q-virtual-scroll",{staticStyle:{"max-height":"313px"},attrs:{separator:"",items:e.tasks,"virtual-scroll-item-size":52},scopedSlots:e._u([{key:"default",fn:function(s){var a=s.item,l=s.index;return[t("q-expansion-item",{key:l,attrs:{"expand-separator":""},scopedSlots:e._u([{key:"header",fn:function(){return[t("q-item-section",{attrs:{avatar:""}},[t("q-spinner-hourglass",{attrs:{color:"primary",size:"2em"}})],1),t("q-item-section",[a.logs.length>0?t("q-item-label",{staticClass:"ellipsis"},[e._v(e._s(a.logs[a.logs.length-1].message))]):e._e(),t("q-item-label",{attrs:{caption:""}},[e._v(e._s("RJ"+a.rjcode))])],1)]},proxy:!0}],null,!0)},[t("q-card",[t("q-card-section",{staticClass:"bg-dark text-white"},e._l(a.logs,(function(s,a){return t("div",{key:a},[t("span",{class:"error"===s.level?"text-red":""},[e._v("➜ "+e._s(s.message))])])})),0)],1)],1)]}}])})],1),t("q-tab-panel",{staticClass:"q-pa-none",attrs:{name:"failedTasks"}},[t("q-virtual-scroll",{staticStyle:{"max-height":"313px"},attrs:{separator:"",items:e.failedTasks,"virtual-scroll-item-size":52},scopedSlots:e._u([{key:"default",fn:function(s){var a=s.item,l=s.index;return[t("q-expansion-item",{key:l,attrs:{"expand-separator":"","expand-icon-class":"text-white","header-class":"bg-negative"},scopedSlots:e._u([{key:"header",fn:function(){return[t("q-item-section",{attrs:{avatar:""}},[t("q-icon",{attrs:{name:"bug_report",color:"white",size:"2em"}})],1),t("q-item-section",[t("q-item-label",{staticClass:"text-white ellipsis"},[e._v("\n                    "+e._s(a.logs[a.logs.length-1].message)+"\n                  ")]),t("q-item-label",{staticClass:"text-white",attrs:{caption:""}},[e._v("\n                    "+e._s("RJ"+a.rjcode)+"\n                  ")])],1)]},proxy:!0}],null,!0)},[t("q-card",[t("q-card-section",{staticClass:"bg-dark text-white"},e._l(a.logs,(function(s,a){return t("div",{key:a},[t("span",{class:"error"===s.level?"text-red":""},[e._v("➜ "+e._s(s.message))])])})),0)],1)],1)]}}])})],1)],1)],1)],1)},l=[],i=t("2d97"),n={name:"Scanner",mixins:[i["a"]],data(){return{tab:"tasks",state:null,loggedIn:!1,tasks:[],failedTasks:[],mainLogs:[],results:[]}},sockets:{SCAN_TASKS(e){this.tasks=e.tasks},SCAN_FAILED_TASKS(e){this.failedTasks=e.failedTasks},SCAN_MAIN_LOGS(e){this.mainLogs=e.mainLogs},SCAN_RESULTS(e){this.results=e.results},SCAN_INIT_STATE(e){this.state="running",this.tasks=e.tasks,this.failedTasks=e.failedTasks,this.mainLogs=e.mainLogs,this.results=e.results},SCAN_FINISHED(e){this.state="finished",this.allLogs.push({level:"info",message:e.message})},SCAN_ERROR(){this.state="error"},success(){this.loggedIn=!0}},methods:{performScan(){this.tasks=[],this.failedTasks=[],this.mainLogs=[],this.results=[],this.state="running",this.$socket.emit("PERFORM_SCAN")},killScanProceess(){this.$socket.emit("KILL_SCAN_PROCESS")}},computed:{allLogs(){const e=this.results.map(e=>"added"===e.result?{level:"info",message:`[RJ${e.rjcode}] 添加成功! Added: ${e.count}`}:"updated"===e.result?{level:"info",message:`[RJ${e.rjcode}] 更新成功! Updated: ${e.count}`}:{level:"error",message:`[RJ${e.rjcode}] 添加失败! Failed: ${e.count}`});return this.mainLogs.concat(e)}},mounted(){this.$socket.emit("ON_SCANNER_PAGE"),this.$socket.on("connect_error",()=>{this.showErrNotif("连接Socket失败")})}},r=n,o=t("2877"),c=t("9c40"),d=t("f09f"),m=t("3b73"),g=t("4074"),u=t("cf57"),h=t("0016"),p=t("0170"),k=t("4983"),_=t("429b"),b=t("7460"),v=t("58a8"),f=t("eb85"),q=t("adad"),S=t("823b"),x=t("a12b"),w=t("9149"),C=t("a370"),T=t("eebe"),y=t.n(T),L=Object(o["a"])(r,a,l,!1,null,null,null);s["default"]=L.exports;y()(L,"components",{QBtn:c["a"],QCard:d["a"],QExpansionItem:m["a"],QItemSection:g["a"],QSpinnerGears:u["a"],QIcon:h["a"],QItemLabel:p["a"],QScrollArea:k["a"],QTabs:_["a"],QTab:b["a"],QBadge:v["a"],QSeparator:f["a"],QTabPanels:q["a"],QTabPanel:S["a"],QVirtualScroll:x["a"],QSpinnerHourglass:w["a"],QCardSection:C["a"]})}}]);