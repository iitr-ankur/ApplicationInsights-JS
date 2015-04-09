﻿module Microsoft.ApplicationInsights.Context {
    "use strict";

    export class Device {

        /**
         * The type for the current device.
         */
        public type: string;

        /**
         * A device unique ID.
         */
        public id: string;

        /**
         * The device OEM for the current device.
         */
        public oemName: string;

        /**
         * The device model for the current device.
         */
        public model: string;

        /**
         * The IANA interface type for the internet connected network adapter.
         */
        public network: number;

        /**
         * The application screen resolution.
         */
        public resolution: string;

        /**
         * The current display language of the operating system.
         */
        public locale: string;
        
        /**
         * The device id.
         */
        public ip: string;

        /**
         * The device language.
         */
        public language: string;

        /**
         * The OS name.
         */
        public os: string;

        /**
         * The OS version.
         */
        public osversion: string;

        /**
         * Constructs a new instance of the Device class
         */
        constructor() {
            // don't attempt to fingerprint browsers
            this.id = "browser";

            //get resolution
            if (typeof screen !== "undefined" && screen.width && screen.height) {
                this.resolution = screen.width + "X" + screen.height;
            }

            //get locale
            this.locale = (typeof screen !== "undefined" && navigator.browserLanguage) ? navigator.browserLanguage : "unknown";
        }
    }
}
