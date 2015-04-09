﻿/// <reference path="../Contracts/Generated/SessionStateData.ts" />
/// <reference path="../Contracts/Generated/SessionState.ts"/>
/// <reference path="./Common/DataSanitizer.ts"/>

module Microsoft.ApplicationInsights.Telemetry {
    "use strict";

    export class SessionTelemetry extends AI.SessionStateData implements ISerializable {

        public static envelopeType = "Microsoft.ApplicationInsights.SessionState";
        public static dataType = "SessionStateData";

        public aiDataContract = {
            ver: true,
            state: true
        }

        constructor(state: AI.SessionState) {
            super();

            this.state = state;
        }
    }
}