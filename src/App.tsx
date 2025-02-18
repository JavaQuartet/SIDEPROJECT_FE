import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRouter from './router.tsx';
import './assets/styles/index.scss';

function App() {

    const queryClient = new QueryClient();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AppRouter/>
            </QueryClientProvider>
        </>
    );
}

export default App;
