// Tentative browser agnostic PAC file
// Some say returning SOCKS and SOCKS5 would work for Safari + Firefox but this does not seem to be the case
function FindProxyForURL(url, host) {
  if (isPlainHostName(host)) {
    return "DIRECT";
  } else if (dnsDomainIs(host, ".proxy")) {
    return "SOCKS localhost:4000; SOCKS5 localhost:4000;";
  } else {
    return "DIRECT";
  }
}
