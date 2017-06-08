const Formats = {
    dateTime: "date-time",
    email: "email",
    hostname: "hostname",
    ipv4: "ipv4",
    ipv6: "ipv6",
    uri: "uri",
    uriReference: "uri-reference",
    uriTemplate: "uri-template",
    jsonPointer: "json-pointer"
};

type Formats = (typeof Formats)[keyof typeof Formats];

export { Formats };