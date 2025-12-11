import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header, Footer } from "@/components/layout";
import { ArrowLeft, MessageCircle, CheckCircle, Calendar, Users, TrendingUp, Bell, Sparkles, FileText } from "lucide-react";
import { Link } from "wouter";

export default function Beauty() {
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
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Solução para Beleza & Estética</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Quick AI <span className="text-primary">Beauty</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Solução inteligente de automação de atendimento para salões de beleza, clínicas estéticas e spas. 
                Simplifique agendamentos, envie lembretes automáticos e gerencie horários com eficiência.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/554497251731?text=Olá! Gostaria de saber mais sobre a Quick AI Beauty" 
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
                Tudo que você precisa para automatizar e profissionalizar o atendimento do seu salão ou clínica
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Calendar className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Agendamentos Sem Complicação</CardTitle>
                  <CardDescription>
                    Sistema intuitivo que permite aos clientes agendarem serviços rapidamente via WhatsApp
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Bell className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Lembretes Automáticos</CardTitle>
                  <CardDescription>
                    Envia lembretes personalizados para clientes, reduzindo faltas e otimizando a agenda
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CheckCircle className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Gestão Inteligente de Horários</CardTitle>
                  <CardDescription>
                    Organiza e otimiza a agenda automaticamente, evitando conflitos e maximizando ocupação
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <MessageCircle className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Atendimento 24/7</CardTitle>
                  <CardDescription>
                    Responde dúvidas e agenda serviços a qualquer hora, com linguagem personalizada do seu negócio
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Users className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Cadastro de Clientes</CardTitle>
                  <CardDescription>
                    Cadastra novos clientes automaticamente e mantém histórico completo de atendimentos
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <TrendingUp className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Reagendamento Facilitado</CardTitle>
                  <CardDescription>
                    Permite que clientes remarquem horários de forma simples e rápida pelo WhatsApp
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
                Processo simples e eficiente para seus clientes
              </p>
              
              <div className="space-y-6">
                <Card className="border-primary/30">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-primary">1</span>
                      </div>
                      <div>
                        <CardTitle className="mb-2">Cliente Envia Mensagem</CardTitle>
                        <CardDescription className="text-base">
                          Cliente entra em contato via WhatsApp para agendar um serviço ou tirar dúvidas
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
                        <CardTitle className="mb-2">IA Processa e Responde</CardTitle>
                        <CardDescription className="text-base">
                          Sistema analisa a mensagem (texto, áudio ou imagem) e fornece informações sobre serviços e valores
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
                        <CardTitle className="mb-2">Cadastro Automático</CardTitle>
                        <CardDescription className="text-base">
                          Se for novo cliente, o sistema coleta informações necessárias e cadastra automaticamente
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
                        <CardTitle className="mb-2">Link de Agendamento</CardTitle>
                        <CardDescription className="text-base">
                          Cliente recebe link personalizado para escolher horário disponível de forma prática
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
                        <CardTitle className="mb-2">Confirmação e Lembretes</CardTitle>
                        <CardDescription className="text-base">
                          Sistema envia confirmação do agendamento e lembretes automáticos antes do horário marcado
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
                Resultados que fazem diferença no dia a dia
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-primary/30">
                  <CardHeader>
                    <CheckCircle className="w-8 h-8 text-primary mb-3" />
                    <CardTitle>Redução de Faltas</CardTitle>
                    <CardDescription className="text-base">
                      Lembretes automáticos diminuem significativamente o número de clientes que não comparecem
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="border-primary/30">
                  <CardHeader>
                    <CheckCircle className="w-8 h-8 text-primary mb-3" />
                    <CardTitle>Mais Tempo para o que Importa</CardTitle>
                    <CardDescription className="text-base">
                      Equipe focada no atendimento presencial, sem sobrecarga com agendamentos
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="border-primary/30">
                  <CardHeader>
                    <CheckCircle className="w-8 h-8 text-primary mb-3" />
                    <CardTitle>Experiência Premium</CardTitle>
                    <CardDescription className="text-base">
                      Cliente percebe organização e profissionalismo, aumentando a percepção de valor
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="border-primary/30">
                  <CardHeader>
                    <CheckCircle className="w-8 h-8 text-primary mb-3" />
                    <CardTitle>Agenda Otimizada</CardTitle>
                    <CardDescription className="text-base">
                      Gestão inteligente maximiza ocupação e reduz horários ociosos
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
                Pronto para elevar o atendimento do seu salão ou clínica?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Entre em contato conosco e descubra como a Quick AI Beauty pode otimizar sua agenda, 
                reduzir faltas e melhorar a experiência dos seus clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/554497251731?text=Olá! Gostaria de agendar uma demonstração da Quick AI Beauty" 
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
