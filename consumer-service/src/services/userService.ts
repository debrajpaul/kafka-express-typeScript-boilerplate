import numeral from "numeral";
import log from "../utils/logger";
import kafka from "kafka-node";

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
     * @name comsumerEventCall
     * @returns success Object or error object.
     * @description user signup function
     */
    comsumerEventCall = async () => {
        try {
            let consumer = new kafka.Consumer(
                new kafka.KafkaClient(),
                [
                    { topic: "cat", partition: 0 },
                    { topic: "getData", partition: 0 }
                ],
                {
                    autoCommit: false,
                    fromOffset: true
                }
            );

            consumer.on("message", function(message) {
                log("app:users:userSignup", message);

                /** { topic: 'cat', value: 'I have 385 cats', offset: 412, partition: 0, highWaterOffset: 413, key: null } */
            });
            return {};
        } catch (ex) {
            throw { result: ex };
        }
    };
}
