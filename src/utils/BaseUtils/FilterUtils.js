import StoreUtils from "./StoreUtils";
import router from "../../router/router";

class FilterUtils {
  static nairaAmountFilter(value) {
    if (value && value !== 0 && value !== "") {
      value = value.replace(/,/g, "");

      let outgoingAmount = parseFloat(value)
        .toFixed(2)
        .toString();
      let indexOfThePoint = outgoingAmount.indexOf(".");

      String.prototype.insert = function(index, string) {
        if (index > 0)
          return (
            this.substring(0, index) +
            string +
            this.substring(index, this.length)
          );
        return string + this;
      };
      let answer = outgoingAmount;
      let count = 0;
      for (let i = indexOfThePoint; i >= 1; i--) {
        if (count === 3) {
          count = 1;
          answer = answer.insert(i, ",");
        } else {
          count++;
        }
      }
      return answer;
    } else {
      return 0;
    }
  }
}
export default FilterUtils;
