import React, { useState } from 'react';

export default function Dashboard() {
  const [isStockAvailable, setIsStockAvailable] = useState(true);

  const toggleStock = () => setIsStockAvailable(!isStockAvailable);

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Panel de Control - Rixa</h1>
        <p className="text-gray-600">Bienvenido, administra tu local y stock en tiempo real.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-2">Pedidos de hoy</h2>
          <p className="text-3xl font-bold text-gray-900">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-2">Ventas totales</h2>
          <p className="text-3xl font-bold text-gray-900">$150.000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-2">Estado del local</h2>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Abierto</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Gestión de Inventario</h2>
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div>
            <p className="font-medium text-gray-900">Alfajores de chocolate</p>
            <p className="text-sm text-gray-500">Precio: $1.200</p>
          </div>
          <div className="flex items-center">
            <span className={`mr-3 px-2 py-1 rounded text-xs font-medium ${isStockAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {isStockAvailable ? 'Stock disponible' : 'Sin stock'}
            </span>
            <button
              onClick={toggleStock}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${isStockAvailable ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              {isStockAvailable ? 'Marcar como sin stock' : 'Reponer stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
