import BaseService from "./BaseService";
import AppUtils from "../utils/BaseUtils/AppUtils";

class TodoService extends BaseService {
  fetchTodoList(
    payload,
    successAction,
    loaderType,
    errorType,
    showSuccessMessage,
    successCondition,
    getErrorMessage
  ) {
    return this.makePostRequest(
      AppUtils.urls.todo.FETCH_TODO_LIST,
      payload,
      successAction,
      loaderType,
      errorType,
      showSuccessMessage,
      successCondition,
      getErrorMessage
    );
  }

  createTodo(
    payload,
    successAction,
    loaderType,
    errorType,
    showSuccessMessage,
    successCondition,
    getErrorMessage
  ) {
    return this.makePostRequest(
      AppUtils.urls.todo.CREATE_TODO,
      payload,
      successAction,
      loaderType,
      errorType,
      showSuccessMessage,
      successCondition,
      getErrorMessage
    );
  }

  deleteTodo(
    payload,
    successAction,
    loaderType,
    errorType,
    showSuccessMessage,
    successCondition,
    getErrorMessage
  ) {
    return this.makePostRequest(
      AppUtils.urls.todo.DELETE_TODO,
      payload,
      successAction,
      loaderType,
      errorType,
      showSuccessMessage,
      successCondition,
      getErrorMessage
    );
  }
}

export default TodoService;
