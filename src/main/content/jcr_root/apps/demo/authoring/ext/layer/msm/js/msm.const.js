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
(function (msm, window, undefined) {

    /**
     * Constants for edit configuration access
     * @type {Object}
     */
    msm.const = {
        SOURCEPATH: "msm:sourcePath",
        STATUS: "msm:status",

        IS_CANCELLED: "msm:isCancelled",
        IS_TARGET_EXISTING: "msm:isTargetExisting",
        IS_TARGET_DELETED: "msm:isTargetDeleted",
        IS_TARGET_MODIFIED: "msm:isTargetModified",
        IS_TARGET_CANCELLED_CHILD: "msm:isTargetCancelledChild",
        IS_TARGET_CANCELLED_PROPERTY: "msm:isTargetCancelledProperty",
        IS_TARGET_MANUALLY_CREATED: "msm:isTargetManuallyCreated",
        IS_TARGET_SKIPPED: "msm:isTargetSkipped",
        IS_SOURCE_EXISTING: "msm:isSourceExisting",
        IS_SOURCE_DELETED: "msm:isSourceDeleted",
        IS_SOURCE_MODIFIED: "msm:isSourceModified"
    };

}(adobe.demo.ext.msm, this));
