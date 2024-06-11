//@ui5-bundle applogsample/Component-preload.js
sap.ui.require.preload({
	"applogsample/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","applogsample/model/models"],function(e,t,i){"use strict";return e.extend("applogsample.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"applogsample/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("applogsample.controller.App",{onInit:function(){}})});
},
	"applogsample/controller/testView.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("applogsample.controller.testView",{onInit:function(){}})});
},
	"applogsample/i18n/i18n.properties":'# This is the resource bundle for applogsample\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Application Log\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=Application Log',
	"applogsample/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"applogsample","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.13.6","toolsId":"4dc1af84-96f4-4b64-a89c-37482b19ee5e"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.124.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"applogsample.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"applogsample.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RoutetestView","pattern":":?query:","target":["TargettestView"]}],"targets":{"TargettestView":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"testView","viewName":"testView"}}},"rootView":{"viewName":"applogsample.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"appLogSampler"}}',
	"applogsample/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"applogsample/view/App.view.xml":'<mvc:View controllerName="applogsample.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"applogsample/view/testView.view.xml":'<mvc:View controllerName="applogsample.controller.testView"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"><content><Text text="Hello world!"></Text></content></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
