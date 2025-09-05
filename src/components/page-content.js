// Guide 07 React Components' Lifecycle

import React from "react";
import { Switch, Route } from "react-router-dom";

import Discussion from "./discussions";
import Rules from "./rules";
import Workflow from "./workflow";

// EJERCICIO AVANZADO Discussion-Advanbced
import DiscussionAdvanced from './components-avanzado'

// EJERCICIO AVANZADO 2 OptimisedCounter
import OptimisedCounter from './optimised-counter'



export default function() {

    return(

        <div>

            <Switch>

                <Route exact path="/" component={Discussion} />
                <Route exact path="/rules" component={Rules} />
                <Route exact path="/workflow" component={Workflow} />
                
                {/* NUEVA RUTA PARA EL EJERCICIO AVANZADO */}
                <Route exact path="/advanced" component={DiscussionAdvanced} />

                {/* NUEVA RUTA PARA EL EJERCICIO AVANZADO 2 */}
                <Route exact path="/optimised" component={OptimisedCounter} />
            </Switch>

        </div>
    );
}
