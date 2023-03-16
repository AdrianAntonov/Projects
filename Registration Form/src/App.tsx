import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Form from './components/Form';
import Layout from './components/Layout';
import Users from './components/Users/Users';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
