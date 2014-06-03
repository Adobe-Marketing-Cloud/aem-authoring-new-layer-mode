/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2014 Adobe Systems Incorporated
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
(function ($, author, msm, channel, window, undefined) {

    var LIVE_RELATIONSHIP_STATUS_CLASS =  'cq-LiveRelationshipStatus';

    /**
     * [MsmOverlay description]
     * @param {Editable} editable
     * @param {jQuery} container DOM element where the overlay should be rendered
     */
    var MsmOverlay = function (editable, container) {
        // never save reference for editable
        if (!editable || !container) { // allows the constructor to be used seamlessly as prototype
            return;
        }

        var dom = this.render(editable);

        container.append(dom);
    };

    // inherit from default Overlay
    MsmOverlay.prototype = new author.Overlay();

    /**
     * custom rendering for the Overlay
     * @param  {Editable} editable
     * @return {jQuery} created DOM element for Overlay
     */
    MsmOverlay.prototype.render = function (editable) {
        var icon,
            msmStatus = msm.getRelationStatus(editable.config['msm:liveRelationship']),
            dom = this.constructor.prototype.render.apply(this, arguments);

        if (msmStatus) {
            dom.addClass(LIVE_RELATIONSHIP_STATUS_CLASS);
            dom.addClass(LIVE_RELATIONSHIP_STATUS_CLASS + '--' + msmStatus);

            // add icons
            if (msmStatus === 'synchronized' || msmStatus === 'cancelled') {
                // add icon to the overlay
                $('<i/>', {
                    'class': 'cq-LiveRelationshipStatus-icon coral-Icon ' +
                        (msmStatus === 'synchronized' ? 'coral-Icon--lockOn' : 'coral-Icon--lockOff')
                }).appendTo(dom);
            }
        }


        return dom;
    };

    /**
     * Custom positioning (unused in this example - we call the prototypes default)
     * @param  {Editable} editable
     * @param  {Editable} parent
     */
    MsmOverlay.prototype.position = function (editable, parent) {
        this.constructor.prototype.position.apply(this, arguments);
    };

    /**
     * Custom remove (unused in this example - we call the prototypes default)
     */
    MsmOverlay.prototype.remove = function () {
        this.constructor.prototype.remove.apply(this, arguments);
    };

    // expose to namespace
    msm.Overlay = MsmOverlay;

}(jQuery, Granite.author, window.adobe.demo.ext.msm, jQuery(document), this));
