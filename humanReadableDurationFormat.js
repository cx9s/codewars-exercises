function formatDuration(seconds) {
  const timeUnits = {
    year: 365 * 24 * 60 * 60 * 1,
    day: 24 * 60 * 60 * 1,
    hour: 60 * 60 * 1,
    minute: 60 * 1,
    second: 1,
  };
  const duration = [];
  for (let unit in timeUnits) {
    const digit = Math.floor(seconds / timeUnits[unit]);
    seconds -= digit * timeUnits[unit];
    if (digit > 1) {
      duration.push(`${digit} ${unit}s`);
    } else if (digit === 1) {
      duration.push(`${digit} ${unit}`);
    }
  }

  return duration.length === 0
    ? `now`
    : duration.join(`, `).replace(/,(?=[^,]+$)/, " and");
}

console.log(formatDuration(3662));
