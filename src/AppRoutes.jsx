import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './apps/comercio/Dashboard';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/comercio" element={<Dashboard />} />
      {/* Aquí podés agregar más rutas para otras secciones */}
    </Routes>
  );
}

export default AppRoutes;
