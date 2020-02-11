import numeral from "numeral";
import log from "../utils/logger";
import kafka from "kafka-node";
import snappy from "snappy";
import { stringify } from "querystring";

/**
 * @class
 * @name UsersService
 * @description The User provider class.
 */

export default class UsersService {
    /**
     * @function
     * @instance
     * @memberof Users
     * @name getMemoryUsage
     * @param { String } username end_user usermane
     * @returns success Object or error object.
     * @description validate username exit or what.
     */
    getMemoryUsageDetails = async () => {
        debugger;
        try {
            const result = await new Promise((resolve, reject) => {
                setInterval(async () => {
                    log(
                        "app:borrower:digiSignSignaturePageAPICall",
                        "wait for 5 sec"
                    );
                    const { rss, heapTotal } = process.memoryUsage();
                    log(
                        "app:borrower:digiSignSignaturePageAPICall",
                        `ress--> ${numeral(rss).format(
                            "0.0 ib"
                        )} heapTotal--> ${numeral(heapTotal).format("0.0 ib")}`
                    );
                    resolve(
                        `ress--> ${numeral(rss).format(
                            "0.0 ib"
                        )} heapTotal--> ${numeral(heapTotal).format("0.0 ib")}`
                    );
                }, 5000);
            });
            return { result };
        } catch (ex) {
            log("app:users:getMemoryUsageDetails", ex);
        }
    };
    /**
     * @function
     * @instance
     * @memberof Users
     * @name producerEventCall
     * @returns success Object or error object.
     * @description user signup function
     */
    producerEventCall = async () => {
        try {
            let producer = new kafka.Producer(new kafka.KafkaClient());
            let count = 0;
            producer.on("ready", function() {
                log("app:users:producerEventCall", "ready");
                setInterval(function() {
                    let payloads = [
                        {
                            topic: "remoteCall",
                            messages: `data ${count}`,
                            partition: 0,
                            timestamp: Date.now()
                        },
                        {
                            topic: "getData",
                            messages: `getdata from an event call--> ${count}`,
                            partition: 0,
                            timestamp: Date.now()
                        }
                    ];

                    producer.send(payloads, (err: any, data: any) => {
                        log("app:users:producerEventCall", data);
                        count += 1;
                    });
                }, 5000);
            });

            producer.on("error", err => {
                log("app:users:producerEventCall", err);
            });
            return {};
        } catch (ex) {
            throw { result: ex };
        }
    };

    /**
     * @function
     * @instance
     * @memberof Users
     * @name userSignup
     * @returns success Object or error object.
     * @description user signup function
     */
    producerEventCalls = async () => {
        try {
            let producer = new kafka.Producer(new kafka.KafkaClient());
            let count = 0;
            const compressData: string = this.compressDataEncy(count);
            producer.on("ready", function() {
                log("app:users:userSignup", "ready");
                setInterval(function() {
                    let payloads = [
                        {
                            topic: "cat",
                            messages: compressData,
                            partition: 0,
                            timestamp: Date.now()
                        },
                        {
                            topic: "getData",
                            messages: `getdata from an event call--> ${count}`,
                            partition: 0,
                            timestamp: Date.now()
                        }
                    ];

                    producer.send(payloads, (err: any, data: any) => {
                        log("app:users:userSignup", data);
                        count += 1;
                    });
                }, 5000);
            });

            producer.on("error", err => {
                log("app:users:userSignup", err);
            });
            return {};
        } catch (ex) {
            throw { result: ex };
        }
    };

    compressDataEncy = (count: any): string => {
        new Promise((resolve, reject) => {
            snappy.compress(`I have ${count} cats`, function(err, compressed) {
                if (err) return reject(err);
                console.log("compressed is a Buffer", compressed);
                // return it as a string
                return resolve(compressed.toString());
            });
        }).then((data: any) => {
            return data.toString();
        });
        return "";
    };
}
