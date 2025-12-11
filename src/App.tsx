import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation, Router as WouterRouter } from "wouter";
import { useEffect } from "react";
import { ErrorBoundary } from "@/components/common";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Home, Med, Beauty, Auto, PostPurchaseForm, NotFound } from "@/pages";

function Router() {
  const [location, setLocation] = useLocation();

  // Handle GitHub Pages 404 redirect
  useEffect(() => {
    if (typeof window !== "undefined") {
      const query = window.location.search;
      if (query.startsWith("?/")) {
        const newPath = query.slice(2).replace(/~and~/g, "&").split("&")[0];
        if (newPath && newPath !== location) {
          setLocation(newPath);
          // Clean URL
          window.history.replaceState({}, "", `${import.meta.env.BASE_URL}${newPath}`);
        }
      }
    }
  }, []);

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
  const basePath = import.meta.env.BASE_URL;
  
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <WouterRouter base={basePath}>
            <Toaster />
            <Router />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
