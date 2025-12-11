import { useState } from "react";
import { APP_LOGO } from "@/config/constants";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location !== "/") {
      // Se não estiver na home, navega primeiro
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <img 
                src={APP_LOGO} 
                alt="Quick AI" 
                className="h-24 w-auto md:h-32 transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => {
                if (location !== "/") {
                  window.location.href = "/#solucoes";
                } else {
                  scrollToSection("solucoes");
                }
              }}
              className="text-foreground/90 hover:text-primary transition-all duration-200 font-semibold text-sm uppercase tracking-wide relative group"
            >
              Soluções
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => {
                if (location !== "/") {
                  window.location.href = "/#beneficios";
                } else {
                  scrollToSection("beneficios");
                }
              }}
              className="text-foreground/90 hover:text-primary transition-all duration-200 font-semibold text-sm uppercase tracking-wide relative group"
            >
              Benefícios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => {
                if (location !== "/") {
                  window.location.href = "/#planos";
                } else {
                  scrollToSection("planos");
                }
              }}
              className="text-foreground/90 hover:text-primary transition-all duration-200 font-semibold text-sm uppercase tracking-wide relative group"
            >
              Planos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => {
                if (location !== "/") {
                  window.location.href = "/#tecnologias";
                } else {
                  scrollToSection("tecnologias");
                }
              }}
              className="text-foreground/90 hover:text-primary transition-all duration-200 font-semibold text-sm uppercase tracking-wide relative group"
            >
              Tecnologias
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => {
                if (location !== "/") {
                  window.location.href = "/#depoimentos";
                } else {
                  scrollToSection("depoimentos");
                }
              }}
              className="text-foreground/90 hover:text-primary transition-all duration-200 font-semibold text-sm uppercase tracking-wide relative group"
            >
              Depoimentos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <a 
              href="https://wa.me/5521999999999" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105">
                Fale Conosco
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-6 pt-4 border-t border-border/50 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  if (location !== "/") {
                    window.location.href = "/#solucoes";
                  } else {
                    scrollToSection("solucoes");
                  }
                }}
                className="text-foreground/90 hover:text-primary transition-colors font-semibold block py-2 text-left"
              >
                Soluções
              </button>
              <button
                onClick={() => {
                  if (location !== "/") {
                    window.location.href = "/#beneficios";
                  } else {
                    scrollToSection("beneficios");
                  }
                }}
                className="text-foreground/90 hover:text-primary transition-colors font-semibold block py-2 text-left"
              >
                Benefícios
              </button>
              <button
                onClick={() => {
                  if (location !== "/") {
                    window.location.href = "/#planos";
                  } else {
                    scrollToSection("planos");
                  }
                }}
                className="text-foreground/90 hover:text-primary transition-colors font-semibold block py-2 text-left"
              >
                Planos
              </button>
              <button
                onClick={() => {
                  if (location !== "/") {
                    window.location.href = "/#tecnologias";
                  } else {
                    scrollToSection("tecnologias");
                  }
                }}
                className="text-foreground/90 hover:text-primary transition-colors font-semibold block py-2 text-left"
              >
                Tecnologias
              </button>
              <button
                onClick={() => {
                  if (location !== "/") {
                    window.location.href = "/#depoimentos";
                  } else {
                    scrollToSection("depoimentos");
                  }
                }}
                className="text-foreground/90 hover:text-primary transition-colors font-semibold block py-2 text-left"
              >
                Depoimentos
              </button>
              <a 
                href="https://wa.me/5521999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-2">
                  Fale Conosco
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
