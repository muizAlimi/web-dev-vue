import Vue from "vue";
import { format, formatRelative } from "date-fns";

Vue.filter("formatDateRel", value => {
  return formatRelative(new Date(value), new Date());
});

Vue.filter("formatDateForTable", value => {
  return format(new Date(value), "dd-MMM-yyyy HH:mm:ss");
});

Vue.filter("getInitials", value => {
  let parts = value.split(" ");
  let initials = "";
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].length > 0 && parts[i] !== "") {
      initials += parts[i][0];
    }
  }
  if (initials.length === 2) {
    return initials;
  } else if (initials.length < 2) {
    initials = initials + initials;

    return initials;
  } else {
    return initials.substring(0, 2);
  }
});

Vue.filter("trimLastReturn", value => {
  if (!value) return "";
  return value.replace(/^\s+|\s+$/g, "");
});

Vue.filter("moneyFormat", value => {
  if (!value) return "0";
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

Vue.filter("nairaAmountFilter", value => {
  if (value && value !== 0 && value !== "") {
    value = value.replace(/,/g, "");

    let outgoingAmount = parseFloat(value)
      .toFixed(2)
      .toString();
    let indexOfThePoint = outgoingAmount.indexOf(".");

    String.prototype.insert = function(index, string) {
      if (index > 0)
        return (
          this.substring(0, index) + string + this.substring(index, this.length)
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
});

Vue.filter("firstNameFromFullName", value => {
  if (!value) return "";
  value = value.toString();
  return value
    .split(" ")
    .slice(0, -1)
    .join(" ")
    .toLowerCase();
});

Vue.filter("toUppercase", value => {
  if (!value) return "";
  value = value.toUpperCase();
  return value;
});

Vue.filter("toLowercase", value => {
  if (!value) return "";
  value = value.toLowerCase();
  return value;
});

Vue.filter("firstCaseCapital", value => {
  if (!value) return "";
  value = value.toLowerCase();
  if (!value.includes(" ")) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  } else {
    const titleCase = str => {
      let splitStr = str.toLowerCase().split(" ");
      for (let i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] =
          splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      // Directly return the joined string
      return splitStr.join(" ");
    };

    value = titleCase(value);
  }

  return value;
});
// export default instance
