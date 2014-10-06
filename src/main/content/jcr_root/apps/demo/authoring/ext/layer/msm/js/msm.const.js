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
