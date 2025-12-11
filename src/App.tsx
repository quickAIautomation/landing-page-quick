import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import { ErrorBoundary } from "@/components/common";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Home, Med, Beauty, Auto, PostPurchaseForm, NotFound } from "@/pages";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/med"} component={Med} />
      <Route path="/beauty" component={Beauty} />
      <Route path="/auto" component={Auto} />
      <Route path="/cadastro" component={PostPurchaseForm} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
