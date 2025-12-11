import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header, Footer } from "@/components/layout";
import { ArrowLeft, MessageCircle, CheckCircle, Calendar, Users, TrendingUp, FileText as FileTextIcon, Car } from "lucide-react";
import { Link } from "wouter";

export default function Auto() {
  useEffect(() => {
    // Scroll para o topo quando a página carregar
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container relative">
            <Link href="/">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Voltar
              </Button>
            </Link>
            
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Car className="w-4 h-4" />
                <span className="text-sm font-semibold">Solução para Setor Automotivo</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Quick AI <span className="text-primary">Auto</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Automação inteligente para concessionárias, oficinas mecânicas e lojas de autopeças. 
                Agilize agendamentos de revisão, forneça orçamentos instantâneos e acompanhe serviços em tempo real.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/554497251731?text=Olá! Gostaria de saber mais sobre a Quick AI Auto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="text-lg px-8">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Solicitar Demonstração
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Funcionalidades */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Funcionalidades Principais
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Tudo que você precisa para automatizar e profissionalizar o atendimento automotivo
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Calendar className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Agendamentos de Revisão</CardTitle>
                  <CardDescription>
                    Automatize agendamentos de manutenção e revisão com lembretes personalizados
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <FileTextIcon className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Orçamentos Instantâneos</CardTitle>
                  <CardDescription>
                    Forneça orçamentos rápidos via WhatsApp baseados no catálogo de serviços e peças
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CheckCircle className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Acompanhamento em Tempo Real</CardTitle>
                  <CardDescription>
                    Cliente acompanha o status do serviço e recebe atualizações automáticas
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Car className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Catálogo de Veículos</CardTitle>
                  <CardDescription>
                    Consulta inteligente ao catálogo de carros disponíveis com informações detalhadas
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <TrendingUp className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Avaliação de Intenção de Compra</CardTitle>
                  <CardDescription>
                    IA avalia interesse do cliente e encaminha leads qualificados para vendedores
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Users className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Gestão de Clientes</CardTitle>
                  <CardDescription>
                    Sistema integrado de gestão com histórico completo de serviços e interações
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-20 bg-card/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Como Funciona
              </h2>
              <p className="text-muted-foreground text-lg mb-12 text-center">
                Processo inteligente para atendimento automotivo
              </p>
              
              <div className="space-y-6">
                <Card className="border-primary/30">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-primary">1</span>
                      </div>
                      <div>
                        <CardTitle className="mb-2">Cliente Entra em Contato</CardTitle>
                        <CardDescription className="text-base">
                          Cliente envia mensagem via WhatsApp (texto, áudio ou imagem) com dúvidas ou solicitações
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
                
                <Card className="border-primary/30">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-primary">2</span>
                      </div>
                      <div>
                        <CardTitle className="mb-2">Processamento Inteligente</CardTitle>
                        <CardDescription className="text-base">
                          Sistema transcreve áudios, analisa imagens e processa a solicitação com IA
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
                
                <Card className="border-primary/30">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-primary">3</span>
                      </div>
                      <div>
                        <CardTitle className="mb-2">Consulta ao Catálogo</CardTitle>
                        <CardDescription className="text-base">
                          Para dúvidas sobre veículos, consulta automaticamente o catálogo com modelos, preços e especificações
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
                
                <Card className="border-primary/30">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-primary">4</span>
                      </div>
                      <div>
                        <CardTitle className="mb-2">Resposta Personalizada</CardTitle>
                        <CardDescription className="text-base">
                          Fornece informações detalhadas, orçamentos ou agenda serviços conforme a necessidade
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
                
                <Card className="border-primary/30">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-primary">5</span>
                      </div>
                      <div>
                        <CardTitle className="mb-2">Encaminhamento Qualificado</CardTitle>
                        <CardDescription className="text-base">
                          Se detectar alta intenção de compra (nota 6+), encaminha automaticamente para vendedor humano
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Benefícios para seu Negócio
              </h2>
              <p className="text-muted-foreground text-lg mb-12 text-center">
                Resultados que impactam vendas e eficiência operacional
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-primary/30">
                  <CardHeader>
                    <CheckCircle className="w-8 h-8 text-primary mb-3" />
                    <CardTitle>Atendimento Rápido e Eficiente</CardTitle>
                    <CardDescription className="text-base">
                      Respostas instantâneas 24/7 aumentam satisfação e conversão de leads
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="border-primary/30">
                  <CardHeader>
                    <CheckCircle className="w-8 h-8 text-primary mb-3" />
                    <CardTitle>Leads Qualificados</CardTitle>
                    <CardDescription className="text-base">
                      IA identifica clientes com alta intenção de compra e encaminha para vendedores
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="border-primary/30">
                  <CardHeader>
                    <CheckCircle className="w-8 h-8 text-primary mb-3" />
                    <CardTitle>Redução de Carga Operacional</CardTitle>
                    <CardDescription className="text-base">
                      Equipe focada em vendas e atendimentos complexos, sem sobrecarga com perguntas básicas
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="border-primary/30">
                  <CardHeader>
                    <CheckCircle className="w-8 h-8 text-primary mb-3" />
                    <CardTitle>Histórico Completo</CardTitle>
                    <CardDescription className="text-base">
                      Mantém registro de todas as interações, facilitando follow-up e vendas futuras
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-20 bg-card/50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Diferenciais da Quick AI Auto
              </h2>
              <p className="text-muted-foreground text-lg mb-12 text-center">
                Tecnologia avançada para o setor automotivo
              </p>
              
              <div className="space-y-4">
                <Card className="border-primary/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="text-primary">✓</span>
                      Processamento de Múltiplas Mídias
                    </CardTitle>
                    <CardDescription className="text-base ml-8">
                      Transcreve áudios automaticamente e analisa imagens de veículos enviadas pelos clientes
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="border-primary/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="text-primary">✓</span>
                      Integração com Sistema de Gestão
                    </CardTitle>
                    <CardDescription className="text-base ml-8">
                      Conecta-se ao seu sistema de gestão de veículos e serviços para informações sempre atualizadas
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="border-primary/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="text-primary">✓</span>
                      Bloqueio Inteligente
                    </CardTitle>
                    <CardDescription className="text-base ml-8">
                      Detecta quando vendedor assume o atendimento e bloqueia automação para evitar interferências
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="border-primary/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="text-primary">✓</span>
                      Cadastro de Novos Veículos
                    </CardTitle>
                    <CardDescription className="text-base ml-8">
                      Administradores podem cadastrar novos veículos no sistema de forma simples
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto para revolucionar o atendimento automotivo?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Entre em contato conosco e descubra como a Quick AI Auto pode aumentar suas vendas, 
                otimizar processos e melhorar a experiência dos seus clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/554497251731?text=Olá! Gostaria de agendar uma demonstração da Quick AI Auto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="text-lg px-8">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Agendar Demonstração
                  </Button>
                </a>
                <Link href="/">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Ver Outras Soluções
                  </Button>
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Já efetuou sua compra?
                </p>
                <Link href="/cadastro">
                  <Button size="lg" variant="secondary" className="text-lg px-8">
                    <FileTextIcon className="mr-2 w-5 h-5" />
                    Complete seu Cadastro
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
