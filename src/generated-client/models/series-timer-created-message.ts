/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 *
 * Jellyfin API
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */


import { SessionMessageType } from './session-message-type';
import { TimerEventInfo } from './timer-event-info';

/**
 * Series timer created message.
 * @export
 * @interface SeriesTimerCreatedMessage
 */
export interface SeriesTimerCreatedMessage {
    /**
     * 
     * @type {TimerEventInfo}
     * @memberof SeriesTimerCreatedMessage
     */
    'Data'?: TimerEventInfo;
    /**
     * Gets or sets the message id.
     * @type {string}
     * @memberof SeriesTimerCreatedMessage
     */
    'MessageId'?: string;
    /**
     * 
     * @type {SessionMessageType}
     * @memberof SeriesTimerCreatedMessage
     */
    'MessageType'?: SessionMessageType;
}
