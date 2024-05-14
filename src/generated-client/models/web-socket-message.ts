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


import { InboundWebSocketMessage } from './inbound-web-socket-message';
import { OutboundWebSocketMessage } from './outbound-web-socket-message';
import { SessionMessageType } from './session-message-type';
import { UserDto } from './user-dto';

/**
 * @type WebSocketMessage
 * Represents the possible websocket types
 * @export
 */
export type WebSocketMessage = InboundWebSocketMessage | OutboundWebSocketMessage;

