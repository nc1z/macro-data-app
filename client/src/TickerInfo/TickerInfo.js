const tickerInfo = (tickerSymbol) => {
  switch (tickerSymbol) {
    case "CPIUS":
      return "The Consumer Price Index (CPI) measures the monthly change in prices paid by U.S. consumers. It is among the most common measures of inflation, indicating the health and direction of the economy. In short, a higher CPI indicates higher inflation, while a falling CPI indicates lower inflation, or even deflation.";
    case "URATEUS":
      return "The unemployment rate is the proportion of the labor force that is not currently employed but could be. Low unemployment is usually regarded as a positive sign for the economy. A very low a rate of unemployment, however, can have negative consequences, such as inflation and reduced productivity.";
    case "RGFCFUS":
      return "Capital formation is the net accumulation of capital goods, such as equipment, tools, transportation assets, and electricity, during an accounting period for a particular country. Generally, the higher the capital formation of an economy, the faster an economy can grow its aggregate income.";
    case "RPUCUS":
      return "The amount of resources allocated by the government for the functioning of public services, such as the purchases in consumer goods, salaries, social transfers, and so forth.";
    case "RETAUS":
      return "The U.S. Census Bureau conducts the Advance Monthly Retail Trade and Food Services Survey to provide an early estimate of monthly sales by kind of business for retail and food service firms located in the United States. Estimates are often used as an input for estimating Gross Domestic Product.";
    case "IPUS":
      return "Industrial production refers to the output of industrial establishments and covers sectors such as mining, manufacturing, electricity, gas and steam and air-conditioning. The data provides insight into consumer and business demand, helping investors get a big-picture view of the economy.";
    case "RGDPUS":
      return "Real GDP is the total of all value added created in an economy, adjusted for inflation. The value added means the value of goods and services that have been produced minus the value of the goods and services needed to produce them.";
    case "CONFUS":
      return "The Consumer Confidence Index (CCI) is a survey that measures how optimistic or pessimistic consumers are regarding their expected financial situation. The CCI is based on the premise that if consumers are optimistic, they will spend more and stimulate the economy but if they are pessimistic then their spending patterns could lead to an economic slowdown or recession.";
    case "PPIUS":
      return "The Producer Price Index measures change in the prices paid to U.S. producers of goods and services. The PPI is a measure of wholesale inflation, while the Consumer Price Index measures the prices paid by consumers.";
    case "GDEBTUS":
      return "This refers to the outstanding financial obligations of a country. Economists tend to focus on the ratio of debt to a nation’s gross domestic product as an indicator of its sustainability. Americans living with high levels of government and private debt tend to see saving in a positive light, while treating borrowing as a problem.";
    default:
      return "No data available.";
  }
};

export default tickerInfo;
