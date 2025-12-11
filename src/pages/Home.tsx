import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header, Footer } from "@/components/layout";
import { Link } from "wouter";
import { TechnologyIcons } from "@/components/TechnologyIcons";
import { ICON_MED, ICON_BEAUTY, ICON_AUTO } from "@/config/constants";
import {
  MessageCircle,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  Zap,
  Star,
  Crown,
  Quote,
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    // Scroll para seção quando há hash na URL
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary px-5 py-2.5 rounded-full mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-semibold tracking-wide">
                  Automação Inteligente de Atendimento
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                Transforme o atendimento ao cliente com{" "}
                <span className="text-primary">Inteligência Artificial</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                Atendimento automático via WhatsApp 24h/dia, personalizado,
                integrado ao seu sistema e com linguagem natural que aumenta a
                percepção de valor do seu negócio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                <a href="#solucoes">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 hover:scale-105"
                  >
                    Conheça as Soluções
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <a 
                  href="https://wa.me/554497251731" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-2 hover:bg-primary/10 transition-all duration-200 hover:scale-105"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Fale Conosco
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 bg-card/30 border-y border-border/50">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">
                  Atendimento Contínuo
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  Automatizado
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  +50%
                </div>
                <div className="text-sm text-muted-foreground">
                  Aumento em Conversão
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  LGPD
                </div>
                <div className="text-sm text-muted-foreground">
                  Compliance Total
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios Section */}
        <section
          id="beneficios"
          className="py-20 md:py-28 bg-gradient-to-b from-background via-card/30 to-background"
        >
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Por que escolher a{" "}
                <span className="text-primary">Quick AI?</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Não vendemos "bot". Vendemos experiência de atendimento que
                aumenta a percepção de valor da sua empresa.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="group border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-3">
                    Atendimento 24/7
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Atendimento sem espera, personalizado e padronizado, sem
                    depender da disponibilidade da equipe.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="group border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-3">
                    Conversão Maior
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Padrão de comunicação profissional e coerente com a marca,
                    convertendo mais leads em agendamentos.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="group border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-3">
                    Integração Completa
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Agendamento integrado ao sistema próprio, mini CRM para
                    organizar dados, status e histórico.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Soluções Section */}
        <section id="solucoes" className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Soluções especializadas para cada{" "}
                <span className="text-primary">segmento</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Escolha a solução ideal para o seu negócio e transforme seu
                atendimento
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Quick AI Med */}
              <Card className="group border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 bg-card/50 backdrop-blur-sm flex flex-col">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <img 
                      src={ICON_MED} 
                      alt="Med" 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl mb-3">Quick AI Med</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Sistema para clínicas médicas, consultórios e laboratórios
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Confirmações automáticas de consultas
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Redução de faltas e otimização de agenda
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Comunicação segura com pacientes (LGPD)
                      </span>
                    </li>
                  </ul>
                  <Link href="/med" className="mt-auto">
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200 shadow-lg group-hover:shadow-xl">
                      Saiba Mais
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Quick AI Beauty */}
              <Card className="group border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 bg-card/50 backdrop-blur-sm flex flex-col">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <img 
                      src={ICON_BEAUTY} 
                      alt="Beauty" 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl mb-3">
                    Quick AI Beauty
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Solução para salões de beleza, clínicas estéticas e spas
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Agendamentos sem complicação
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Lembretes automáticos para clientes
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Gestão inteligente de horários
                      </span>
                    </li>
                  </ul>
                  <Link href="/beauty" className="mt-auto">
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200 shadow-lg group-hover:shadow-xl">
                      Saiba Mais
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Quick AI Auto */}
              <Card className="group border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 bg-card/50 backdrop-blur-sm flex flex-col">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <img 
                      src={ICON_AUTO} 
                      alt="Auto" 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl mb-3">Quick AI Auto</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Automação para concessionárias, oficinas e autopeças
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Agendamentos de revisão automatizados
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Orçamentos instantâneos via WhatsApp
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Acompanhamento de serviços em tempo real
                      </span>
                    </li>
                  </ul>
                  <Link href="/auto" className="mt-auto">
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200 shadow-lg group-hover:shadow-xl">
                      Saiba Mais
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Planos Section */}
        <section id="planos" className="py-20 md:py-28 bg-gradient-to-b from-background via-card/30 to-background border-t border-border/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Escolha o plano ideal para seu <span className="text-primary">negócio</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Soluções flexíveis que crescem com você
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Starter Plan */}
              <Card className="group border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 bg-card/50 backdrop-blur-sm relative flex flex-col">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Starter</CardTitle>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-primary">$400</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                  <CardDescription className="text-base">
                    Ideal para pequenos negócios que estão começando
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">2.500 mensagens</strong> incluídas
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Suporte em <strong className="text-foreground">dias úteis</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Atendimento em <strong className="text-foreground">horário comercial</strong>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="https://wa.me/554497251731?text=Olá! Gostaria de contratar o plano Starter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                      Contratar Agora
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Business Plan */}
              <Card className="group border-primary/50 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 bg-card/80 backdrop-blur-sm relative border-2 flex flex-col">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                    Mais Popular
                  </span>
                </div>
                <CardHeader className="pb-4 pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Business</CardTitle>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-primary">$890</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                  <CardDescription className="text-base">
                    Solução completa para empresas em crescimento de todos os segmentos
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">10.000 mensagens</strong> incluídas
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Suporte prioritário 24/7</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Integrações CRM</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Multi-workflows</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Treinamentos personalizados</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Manutenção mensal</strong>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="https://wa.me/554497251731?text=Olá! Gostaria de contratar o plano Business"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-200">
                      Contratar Agora
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="group border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 bg-card/50 backdrop-blur-sm relative flex flex-col">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Crown className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Enterprise</CardTitle>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-primary">Personalizado</span>
                  </div>
                  <CardDescription className="text-base">
                    Solução enterprise com recursos avançados e customização total
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Mensagens ilimitadas</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Tudo que o <strong className="text-foreground">Business possui</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Multi-agente IA</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Automação de agendamento</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Integrações com sistemas</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Aplicações web personalizadas</strong> integradas ao agente
                      </span>
                    </li>
                  </ul>
                  <a
                    href="https://wa.me/554497251731?text=Olá! Gostaria de saber mais sobre o plano Enterprise"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                      Falar com Vendas
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Informações sobre Setup Inicial e Mensalidades */}
            <div className="mt-20 max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Informações <span className="text-primary">Importantes</span>
                </h3>
                <p className="text-muted-foreground text-lg">
                  Entenda como funciona nosso processo de implementação
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Setup Inicial */}
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Sparkles className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">Setup Inicial</CardTitle>
                    <CardDescription className="text-sm">
                      Personalizado para seu negócio
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Valor personalizado conforme as necessidades do seu negócio
                    </p>
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-xs font-semibold text-primary mb-2">Inclui:</p>
                      <ul className="space-y-2 text-xs text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Configuração e personalização completa</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Treinamento da IA personalizado</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Integração com sistemas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Configuração do mini CRM</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Prazo de Entrega */}
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Clock className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">Prazo de Entrega</CardTitle>
                    <CardDescription className="text-sm">
                      Implementação rápida
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-4">
                      <div className="text-4xl font-bold text-primary mb-2">14</div>
                      <p className="text-sm text-muted-foreground">
                        dias após envio do questionário (Q&A) personalizado
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Mensalidades */}
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <TrendingUp className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">Mensalidades</CardTitle>
                    <CardDescription className="text-sm">
                      Flexível e transparente
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                      <p className="text-sm font-semibold text-primary mb-1">
                        Primeiro mês gratuito
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Para todos os planos
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                      Após o primeiro mês, mensalidade varia conforme o <strong className="text-foreground">plano contratado</strong>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Tecnologias Section */}
        <section id="tecnologias" className="py-20 md:py-28 bg-card/30 border-t border-border/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Tecnologias <span className="text-primary">Utilizadas</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Construído com as melhores ferramentas e plataformas do mercado
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
              {/* n8n */}
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 bg-card rounded-xl flex items-center justify-center border border-border/50 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <TechnologyIcons.n8n />
                </div>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">n8n</span>
              </div>

              {/* JavaScript */}
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 bg-card rounded-xl flex items-center justify-center border border-border/50 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <TechnologyIcons.javascript />
                </div>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">JavaScript</span>
              </div>

              {/* PHP */}
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 bg-card rounded-xl flex items-center justify-center border border-border/50 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <TechnologyIcons.php />
                </div>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">PHP</span>
              </div>

              {/* OpenAI */}
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 bg-card rounded-xl flex items-center justify-center border border-border/50 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <TechnologyIcons.openai />
                </div>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">OpenAI</span>
              </div>

              {/* PostgreSQL */}
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 bg-card rounded-xl flex items-center justify-center border border-border/50 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <TechnologyIcons.postgresql />
                </div>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">PostgreSQL</span>
              </div>

              {/* Supabase */}
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 bg-card rounded-xl flex items-center justify-center border border-border/50 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <TechnologyIcons.supabase />
                </div>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Supabase</span>
              </div>

              {/* Redis */}
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 bg-card rounded-xl flex items-center justify-center border border-border/50 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <TechnologyIcons.redis />
                </div>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Redis</span>
              </div>

              {/* META API */}
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 bg-card rounded-xl flex items-center justify-center border border-border/50 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <TechnologyIcons.meta />
                </div>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">META API</span>
              </div>

              {/* Cloudflare */}
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 bg-card rounded-xl flex items-center justify-center border border-border/50 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <TechnologyIcons.cloudflare />
                </div>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Cloudflare</span>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos Section */}
        <section id="depoimentos" className="py-20 md:py-28 bg-gradient-to-b from-card/30 via-background to-background border-t border-b border-border/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                O que nossos <span className="text-primary">clientes</span> dizem
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Depoimentos reais de empresas que transformaram seu atendimento com a Quick AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Depoimento 1 */}
              <Card className="group border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">Dr. Carlos Silva</CardTitle>
                      <CardDescription className="text-sm">
                        Diretor Clínico
                      </CardDescription>
                      <CardDescription className="text-xs text-primary font-semibold mt-1">
                        Clínica Saúde & Vida
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    "A Quick AI revolucionou nosso atendimento. Reduzimos faltas em 40% e nossos pacientes adoram a agilidade. O sistema é intuitivo e a equipe da Quick AI sempre está disponível para ajudar."
                  </p>
                </CardContent>
              </Card>

              {/* Depoimento 2 */}
              <Card className="group border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">Ana Paula Costa</CardTitle>
                      <CardDescription className="text-sm">
                        Proprietária
                      </CardDescription>
                      <CardDescription className="text-xs text-primary font-semibold mt-1">
                        Salão Beleza Pura
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    "Incrível como a automação melhorou nossa gestão de horários. Agora conseguimos atender mais clientes sem sobrecarregar a equipe. Os lembretes automáticos reduziram muito as faltas."
                  </p>
                </CardContent>
              </Card>

              {/* Depoimento 3 */}
              <Card className="group border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">Roberto Mendes</CardTitle>
                      <CardDescription className="text-sm">
                        Gerente Geral
                      </CardDescription>
                      <CardDescription className="text-xs text-primary font-semibold mt-1">
                        AutoCenter Premium
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    "A avaliação de intenção de compra da Quick AI Auto é fantástica! Conseguimos qualificar melhor nossos leads e aumentar as vendas. O sistema de agendamento de revisões funciona perfeitamente."
                  </p>
                </CardContent>
              </Card>

              {/* Depoimento 4 */}
              <Card className="group border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">Rayana</CardTitle>
                      <CardDescription className="text-sm">
                        Vendedora
                      </CardDescription>
                      <CardDescription className="text-xs text-primary font-semibold mt-1">
                        Amour Cirurgia Plástica
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    "Ajuda a responder o volume dos anúncios e aumentou os agendamentos. O agente de IA é ótimo!"
                  </p>
                </CardContent>
              </Card>

              {/* Depoimento 5 */}
              <Card className="group border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">Juliana Santos</CardTitle>
                      <CardDescription className="text-sm">
                        Gerente de Operações
                      </CardDescription>
                      <CardDescription className="text-xs text-primary font-semibold mt-1">
                        Clínica Estética Harmony
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    "Implementação rápida e suporte excepcional. Em uma semana já estávamos operando. A personalização do atendimento para nosso segmento foi perfeita. Recomendo sem hesitação!"
                  </p>
                </CardContent>
              </Card>

              {/* Depoimento 6 */}
              <Card className="group border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">Fernando Alves</CardTitle>
                      <CardDescription className="text-sm">
                        Diretor Comercial
                      </CardDescription>
                      <CardDescription className="text-xs text-primary font-semibold mt-1">
                        Concessionária AutoMax
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    "O sistema de encaminhamento inteligente de leads qualificados aumentou nossa taxa de conversão em 35%. A integração com nosso CRM foi simples e eficiente. Excelente investimento!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pronto para transformar seu{" "}
                <span className="text-primary">atendimento?</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Entre em contato conosco e descubra como a Quick AI pode
                aumentar seus agendamentos e melhorar a experiência dos seus
                clientes.
              </p>
              <a 
                href="https://wa.me/554497251731" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="text-lg px-10 py-6 shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-all duration-200 hover:scale-105"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Fale com um Especialista
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
