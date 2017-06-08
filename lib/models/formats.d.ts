declare const Formats: {
    dateTime: string;
    email: string;
    hostname: string;
    ipv4: string;
    ipv6: string;
    uri: string;
    uriReference: string;
    uriTemplate: string;
    jsonPointer: string;
};
declare type Formats = (typeof Formats)[keyof typeof Formats];
export { Formats };
