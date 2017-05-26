/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2017 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */
;(function ($, ns) {
    "use strict";

    /**
    * To simplify the example, we are extending the configuration and layer of the edit mode
    * to get a simple and functionnal initial configuration.
    *
    * <i>Feel free to override any fields of the configuration object and layer class</i>
    */

    var CONFIG = $.extend(true, {}, ns.edit.CONFIG, {
        name:                   "My Layer",
        title:                  Granite.I18n.get("My Layer", "Title of my layer")
    });

    var myNamespace = myNamespace || {};

    myNamespace.MyLayer = ns.util.extendClass(ns.edit.Layer, {
        /**
         * @constructor
         */
        constructor: function MyLayer(config) {
            // Call super constructor
            myNamespace.MyLayer.super_.constructor.apply(this, arguments);
        },

        /**
         * @inheritDoc
         */
        config: CONFIG,

        /**
         * @override
         */
        isAvailable: function () {
            return true;
        }
    });

    ns.layerManager.registerLayer(new myNamespace.MyLayer());

}(jQuery, Granite.author));
