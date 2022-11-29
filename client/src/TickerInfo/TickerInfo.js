const tickerInfo = (tickerSymbol) => {
  switch (tickerSymbol) {
    case "CPIUS":
      return "Hello CPIUS";
    case "URATEUS":
      return "Hello URATEUS";
    case "RGFCFUS":
      return "Hello RGFCFUS";
    case "RPUCUS":
      return "Hello RPUCUS";
    case "RETAUS":
      return "Hello RETAUS";
    case "IPUS":
      return "Hello IPUS";
    case "RGDPUS":
      return "Hello RGDPUS";
    case "CONFUS":
      return "Hello CONFUS";
    case "PPIUS":
      return "Hello PPIUS";
    case "GDEBTUS":
      return "Hello GDEBTUS";
    default:
      return "No ticker selected.";
  }
};

export default tickerInfo;
