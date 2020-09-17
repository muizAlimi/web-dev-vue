import { format } from "date-fns";

class DateFormatterUtils {
  static formatDate(date, dateFormat) {
    return format(new Date(date), dateFormat);
  }
}
export default DateFormatterUtils;
