// Guide 07 React Components' Lifecycle

import React, { Component } from "react";
// Difiere, importación del componente PROPIO de router
import { NavLink } from "react-router-dom";

export default function(){

    return(

        <div>
            
            <div>
                <NavLink exact to="/">
                    Discussion
                </NavLink>
            </div>

            <div>
                <NavLink to="/rules">
                    Rules
                </NavLink>
            </div>

            <div>
                <NavLink to="/workflow">
                    Workflow
                </NavLink>
            </div>

            <div>
                <NavLink to="/advanced">
                    Advanced
                </NavLink>
            </div>

        </div>

    );
}