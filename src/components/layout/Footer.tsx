import { APP_LOGO } from "@/config/constants";

import { MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card/80 backdrop-blur-sm border-t border-border/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <img src={APP_LOGO} alt="Quick AI" className="h-20 w-auto mb-6 md:h-24" />
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md">
              Automação Inteligente de Atendimento via WhatsApp. Transforme seu negócio com tecnologia de ponta.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground">Soluções</h3>
            <ul className="space-y-3">
              <li>
                <a href="/med" className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Quick AI Med
                </a>
              </li>
              <li>
                <a href="/beauty" className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Quick AI Beauty
                </a>
              </li>
              <li>
                <a href="/auto" className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Quick AI Auto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:contato@quickai.com.br" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4" />
                  contato@quickai.com.br
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/554497251731" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Quick AI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
