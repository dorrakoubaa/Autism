
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutAutism from "./pages/AboutAutism";
import ForTeachers from "./pages/ForTeachers";
import ForParents from "./pages/ForParents";
import Contact from "./pages/Contact";
import Questionnaire from "./pages/Questionnaire";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about-autism" element={<AboutAutism />} />
            <Route path="for-teachers" element={<ForTeachers />} />
            <Route path="for-parents" element={<ForParents />} />
            <Route path="contact" element={<Contact />} />
            <Route path="questionnaire" element={<Questionnaire />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
