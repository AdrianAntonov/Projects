import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Form from './components/Form';
import Layout from './components/Layout';
import Users from './components/Users/Users';

function App() {
  const queryClient = new QueryClient();
  const [showUsers, setShowUsers] = useState(false);

  const toggleShowUsers = () => {
    setShowUsers((prev) => !prev);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Form toggle={toggleShowUsers} show={showUsers} />
        {showUsers && <Users />}
        {/* <Users /> */}
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
