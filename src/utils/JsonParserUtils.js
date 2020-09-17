class JsonParserUtils {
  static objIsEmpty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }
}
export default JsonParserUtils;
