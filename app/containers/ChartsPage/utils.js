export function transformDataForChart(sourceData, apiLabel, reportsLabel) {
  const results = [];

  Object.keys(sourceData).forEach(country => {
    const data = {
      x: 'x',
      columns: [],
    };

    const dates = [
      ...new Set([
        ...Object.keys(sourceData[country].API),
        ...Object.keys(sourceData[country].report),
      ]),
    ].sort((a, b) => new Date(a) - new Date(b));

    // Add labels
    const apiData = dates.map(date => sourceData[country].API[date] || null);
    const reportData = dates.map(
      date => sourceData[country].report[date] || null,
    );

    apiData.unshift(apiLabel);
    reportData.unshift(reportsLabel);
    dates.unshift('x');

    data.columns.push(dates);
    data.columns.push(apiData);
    data.columns.push(reportData);
    data.colors = {
      [apiLabel]: '#A500A2',
      [reportsLabel]: '#00AFAA',
    };

    results.push({
      title: country,
      data,
      country,
    });
  });

  return results;
}
