import React, { useState, useEffect } from 'react';
import DigitalClock from './components/Clock/DigitalClock';
import TodoList from './components/TodoList/TodoList';
import TransferForm from './components/TransferForm/TransferForm';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [syncStatus, setSyncStatus] = useState('syncing...');

  useEffect(() => {
    const fetchSyncStatus = async () => {
      try {
        const response = await fetch('/api/sync/status');
        const data = await response.json();
        setSyncStatus(data.status || 'synced');
      } catch (error) {
        console.error('Sync error:', error);
      }
    };

    fetchSyncStatus();
    const interval = setInterval(fetchSyncStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>🌍 Western Union Integrated System</h1>
        <div className="sync-status">Status: {syncStatus}</div>
      </header>

      <nav className="app-nav">
        <button onClick={() => setActiveTab('dashboard')} className={activeTab === 'dashboard' ? 'active' : ''}>Dashboard</button>
        <button onClick={() => setActiveTab('transfer')} className={activeTab === 'transfer' ? 'active' : ''}>Transfer</button>
        <button onClick={() => setActiveTab('tasks')} className={activeTab === 'tasks' ? 'active' : ''}>Tasks</button>
      </nav>

      <main className="app-main">
        {activeTab === 'dashboard' && (
          <section className="dashboard">
            <div className="clock-widget"><DigitalClock timezone="UTC" /></div>
            <div className="clock-widget"><DigitalClock timezone="Asia/Amman" /></div>
            <div className="clock-widget"><DigitalClock timezone="America/New_York" /></div>
          </section>
        )}
        {activeTab === 'transfer' && <TransferForm />}
        {activeTab === 'tasks' && <TodoList />}
      </main>

      <footer className="app-footer">
        <p>© 2026 Western Union - FUADMOHAMED022</p>
      </footer>
    </div>
  );
}

export default App;