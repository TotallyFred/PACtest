function FindProxyForURL(url, host) {
  if (isPlainHostName(host)) {
    return "DIRECT";
  } else if (dnsDomainIs(host, ".proxy")) {
    return "PROXY localhost:4001;";
  } else {
    return "DIRECT";
  }
}
