/*
 * #%L
 * Adobe AEM6 demo for authoring extension point: MSM Layer
 * %%
 * Copyright (C) 2014 Adobe
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
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
