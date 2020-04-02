import React from 'react'
import { Route} from "react-router-dom";

import UserContainer from "./../userContainer";


export default function UserRoutes() {
    return (
        <Route path="/user" >
          <UserContainer />
        </Route>
    )
}
