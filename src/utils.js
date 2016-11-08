const moment = require('moment');

function toJSON(textRequest) {
  if (textRequest) {
    const rangeData = textRequest.split("/");
    if (rangeData.length > 1) { //Update the whole range
      const fromDate = moment(rangeData[0]);
      const fromYear = fromDate.year();
      const fromMonth = fromDate.month() + 1;
      const toDate = moment(rangeData[1]);
      const toYear = toDate.year();
      const toMonth = toDate.month() + 1;
      return {
        fromYear: fromYear,
        fromMonth: fromMonth,
        toYear: toYear,
        toMonth: toMonth
      }
    } else { //Update just one part of the range
      const formatted = moment(textRequest);
      return {
        fromYear: formatted.year(),
        fromMonth: formatted.month() + 1,
        toYear: formatted.year(),
        toMonth: formatted.month() + 1
      }
    }
  }
  return {};
}

module.exports = {
  //Takes a string (textRequest) and a JSON (currentContext)
  //Return a JSON with the merged context of these two
  mergeContext(textRequest, currentContext) {
    const nextContext = toJSON(textRequest);
    return nextContext;
  }
}
