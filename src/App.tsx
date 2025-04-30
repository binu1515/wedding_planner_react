import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import PlannersList from "./pages/PlannersList";
import PlannerDetail from "./pages/PlannerDetail";
import PlannerLogin from "./pages/PlannerLogin";
import PlannerRegister from "./pages/PlannerRegister";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/planners" element={<PlannersList />} />
          <Route path="/planner/:id" element={<PlannerDetail />} />
          <Route path="/planner/login" element={<PlannerLogin />} />
          <Route path="/planner/register" element={<PlannerRegister />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;