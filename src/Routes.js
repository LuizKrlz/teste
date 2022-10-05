import {
    Routes as RoutesRouter,
    Route,
  } from "react-router-dom";

import { Home } from './components/Home'
import { RecoveryPassword } from './components/RecoveryPassword'

export const Routes = () => {
    return (
        <RoutesRouter>
            <Route path="/" element={<Home />} />
            <Route path="/recuperar-senha" element={<RecoveryPassword />} />
        </RoutesRouter>
    )
}