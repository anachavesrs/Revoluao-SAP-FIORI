sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
	JSONModel) {
        "use strict";

        return Controller.extend("revolucao.controller.Main", {
            onInit: function () {
                var ImageList = {
                    Images:[
                        {
                            title: "Google",
                            url: "https://www.google.com"
                        }
                    ]
                };
                
            var ImageModel = new JSONModel(ImageList);
            this.getView().setModel(ImageModel, "ModeloImagem");

            },

            onPressBuscar: function() {
			alert("começou a revolução do SAP FIORI")
		}
        });
    });
