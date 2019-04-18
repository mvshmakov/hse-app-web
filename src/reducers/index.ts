import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import loading from "@/reducers/loading";
import example from "@/reducers/example";
import users from "@/reducers/users";

export default (history) => combineReducers({
    example,
    loading,
    users,
    router: connectRouter(history),
});
