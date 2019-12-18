import debug from "debug";

export default function log(scope: any, ...args: any) {
    debug(scope)(args);
}
