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
(function ($, author, msm, window, undefined) {

    /**
     * resolves the current MSM status based on the msm:liveRelationship
     * @param  {String} rel passed from msm:liveRelationship
     * @return {String}
     */
    msm.getRelationStatus = function (rel) {

        function _isTargetCancelled(msmStatus) {
            return msmStatus[msm.const.IS_TARGET_CANCELLED_CHILD] || msmStatus[msm.const.IS_TARGET_CANCELLED_PROPERTY];
        }

        var result;

        if (rel && rel[msm.const.SOURCEPATH] && rel[msm.const.STATUS]) {
            var msmStatus = rel[msm.const.STATUS];

            if (!msmStatus[msm.const.IS_CANCELLED]) {
                // Live relationship is not cancelled

                if (msmStatus[msm.const.IS_TARGET_EXISTING] && msmStatus[msm.const.IS_SOURCE_EXISTING] && !msmStatus[msm.const.IS_TARGET_MANUALLY_CREATED]) {
                    // Target and source exist, and target hasn't been created manually

                    if (msmStatus[msm.const.IS_SOURCE_MODIFIED]) {
                        // Source has been modified
                        if (_isTargetCancelled(msmStatus)) {
                            result = 'sourceModifiedCancelledPar';
                        } else {
                            result = 'sourceModified';
                        }

                    } else {
                        if (msmStatus[msm.const.IS_TARGET_MODIFIED]) {
                            // Target has been modified
                            if (_isTargetCancelled(msmStatus)) {
                                result = 'targetModifiedCancelledPar';
                            } else {
                                // only modified
                                result = 'targetModified';
                            }

                        } else {
                            // Source and target are identical
                            if (_isTargetCancelled(msmStatus)) {
                                result = 'synchronizedCancelledPar';
                            } else {
                                result = 'synchronized';
                            }
                        }
                    }

                } else {
                    // Target or source not existing, or target manually created
                    if (msmStatus[msm.const.IS_SOURCE_EXISTING]) {
                        // Source exists
                        if (msmStatus[msm.const.IS_TARGET_DELETED]) {
                            // but target doesn't
                            result = 'targetDeleted';
                        } else if (msmStatus[msm.const.IS_TARGET_MANUALLY_CREATED]) {
                            // but target has been manually created
                            result = 'new';
                        } else if (msmStatus[msm.const.IS_TARGET_SKIPPED]) {
                            // but target is skipped
                            result = 'skipped';
                        } else {
                            result = 'neverCreated';
                        }

                    } else if (msmStatus[msm.const.IS_SOURCE_DELETED]) {
                        // Source doesn't exist
                        result = 'sourceDeleted';
                    }
                }

            } else {
                // Cancelled live relationship
                if (msmStatus[msm.const.IS_SOURCE_EXISTING] || msmStatus[msm.const.IS_SOURCE_DELETED]) {
                    result = 'cancelled';
                }
            }
        }

        return result;
    }


}(jQuery, Granite.author, adobe.demo.ext.msm, this));
