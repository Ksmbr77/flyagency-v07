
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load pages for better initial load performance
const Index = lazy(() => import("./pages/Index"));
const Diagnostico = lazy(() => import("./pages/Diagnostico"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Create QueryClient once
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Improve performance by not refetching on window focus
      retry: 1, // Reduce number of retries
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="flex h-screen w-screen items-center justify-center bg-primary-dark text-white">Carregando...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/diagnostico" element={<Diagnostico />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
