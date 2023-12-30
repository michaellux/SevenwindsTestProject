import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/app.css';
import AppRouter from './AppRouter';
import { containerBuilder } from './app.container';
import './app.i18n';
containerBuilder();

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <AppRouter />
      </div>
    </QueryClientProvider>
  );
}
