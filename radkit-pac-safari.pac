function FindProxyForURL(url, host) {
  if (isPlainHostName(host)) {
    return "DIRECT";
  } else if (dnsDomainIs(host, ".proxy")) {
    return "SOCKS localhost:4000;";
  } else {
    return "DIRECT";
  }
}
