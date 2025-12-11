import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header, Footer } from "@/components/layout";
import { ArrowLeft, MessageCircle, CheckCircle, Shield, Calendar, Users, TrendingUp, FileText } from "lucide-react";
import { Link } from "wouter";

export default function Med() {
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
                <Shield className="w-4 h-4" />
                <span className="text-sm font-semibold">Solução para Saúde</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Quick AI <span className="text-primary">Med</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Sistema inteligente de automação de atendimento para clínicas médicas, consultórios e laboratórios. 
                Otimize sua agenda, reduza faltas e melhore a experiência dos seus pacientes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/554497251731?text=Olá! Gostaria de saber mais sobre a Quick AI Med" 
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

        {/* Problemas que Resolve */}
        <section className="py-20 bg-card/50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Problemas que a Quick AI Med resolve
              </h2>
              <p className="text-muted-foreground text-lg mb-12 text-center">
                Entendemos os desafios do dia a dia de clínicas e consultórios
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-destructive/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Secretárias Sobrecarregadas</CardTitle>
                    <CardDescription>
                      Atendimento lento e inconsistente devido ao volume de ligações e mensagens
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="border-destructive/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Perda de Pacientes</CardTitle>
                    <CardDescription>
                      Falta de follow-up adequado resulta em baixa taxa de retorno
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="border-destructive/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Agendamentos Mal Geridos</CardTitle>
                    <CardDescription>
                      Consultas esquecidas, horários duplicados e desorganização
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="border-destructive/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Baixa Taxa de Retorno</CardTitle>
                    <CardDescription>
                      Pacientes não retornam por falta de comunicação eficiente
                    </CardDescription>
                  </CardHeader>
                </Card>
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
                Tudo que você precisa para automatizar e profissionalizar o atendimento
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <MessageCircle className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Atendimento Automático 24/7</CardTitle>
                  <CardDescription>
                    Responde pacientes via WhatsApp a qualquer hora, com linguagem personalizada da clínica
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Calendar className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Confirmações Automáticas</CardTitle>
                  <CardDescription>
                    Envia lembretes e confirmações de consultas automaticamente, reduzindo faltas
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CheckCircle className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Agendamento Integrado</CardTitle>
                  <CardDescription>
                    Sincronizado com o sistema próprio da clínica para gestão unificada
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Users className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Mini CRM Simples</CardTitle>
                  <CardDescription>
                    Organiza dados dos pacientes, status do atendimento e histórico completo
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Shield className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Conformidade LGPD</CardTitle>
                  <CardDescription>
                    Comunicação segura com pacientes, respeitando todas as regulamentações de saúde
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <TrendingUp className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Escalação Inteligente</CardTitle>
                  <CardDescription>
                    Transfere para atendimento humano quando necessário, de forma automática
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 bg-card/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Benefícios para sua Clínica
              </h2>
              <p className="text-muted-foreground text-lg mb-12 text-center">
                Resultados comprovados que fazem diferença no dia a dia
              </p>
              
              <div className="space-y-6">
                <Card className="border-primary/30">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">Aumento de Agendamentos</CardTitle>
                        <CardDescription className="text-base">
                          Atendimento rápido e eficiente converte mais leads em consultas marcadas
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
                
                <Card className="border-primary/30">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">Redução de Carga da Secretária</CardTitle>
                        <CardDescription className="text-base">
                          Equipe focada em atividades de maior valor, sem sobrecarga operacional
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
                
                <Card className="border-primary/30">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">Atendimento Profissional e Padronizado</CardTitle>
                        <CardDescription className="text-base">
                          Comunicação sempre coerente com a marca, transmitindo organização e cuidado
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
                
                <Card className="border-primary/30">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">Mais Pacientes Fidelizados</CardTitle>
                        <CardDescription className="text-base">
                          Paciente percebe organização, exclusividade e cuidado, aumentando a percepção de valor
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Modelo Comercial */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Modelo Comercial
              </h2>
              <p className="text-muted-foreground text-lg mb-12 text-center">
                Investimento acessível com resultados rápidos
              </p>
              
              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Plano Premium para Clínicas</CardTitle>
                  <CardDescription className="text-center text-base">
                    Solução completa com implantação personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Implantação</h4>
                      <p className="text-muted-foreground">
                        Configuração, personalização, treinamento da IA, integração com agenda e mini CRM
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Contrato</h4>
                      <p className="text-muted-foreground">
                        12 meses com primeiro mês gratuito
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Prazo de Entrega</h4>
                      <p className="text-muted-foreground">
                        7 dias após envio do questionário (Q&A)
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Rescisão</h4>
                      <p className="text-muted-foreground">
                        Pode pausar ou cancelar sem multa; retomada sem nova implantação
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-border">
                    <p className="text-center text-sm text-muted-foreground mb-6">
                      O treinamento da IA é feito pela Quick a partir de questionário personalizado sobre sua clínica
                    </p>
                    <a 
                      href="https://wa.me/554497251731?text=Olá! Gostaria de solicitar uma proposta da Quick AI Med" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button size="lg" className="w-full text-lg">
                        <MessageCircle className="mr-2 w-5 h-5" />
                        Solicitar Proposta Personalizada
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto para transformar o atendimento da sua clínica?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Entre em contato conosco e descubra como a Quick AI Med pode aumentar seus agendamentos, 
                reduzir faltas e melhorar a experiência dos seus pacientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/554497251731?text=Olá! Gostaria de agendar uma demonstração da Quick AI Med" 
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
                    <FileText className="mr-2 w-5 h-5" />
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
