import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ElCircuito from "./pages/ElCircuito";
import Circuitos from "./pages/Circuitos";
import CircuitoDetail from "./pages/CircuitoDetail";
import Destinos from "./pages/Destinos";
import TuBase from "./pages/TuBase";
import Paquetes from "./pages/Paquetes";
import Nosotros from "./pages/Nosotros";
import PaqueteDetail from "./pages/PaqueteDetail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/el-circuito" component={ElCircuito} />
      <Route path="/circuitos" component={Circuitos} />
      <Route path="/circuitos/:id" component={CircuitoDetail} />
      <Route path="/destinos" component={Destinos} />
      <Route path="/tu-base" component={TuBase} />
      <Route path="/paquetes" component={Paquetes} />
      <Route path="/paquete/:id" component={PaqueteDetail} />
      <Route path="/nosotros" component={Nosotros} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
