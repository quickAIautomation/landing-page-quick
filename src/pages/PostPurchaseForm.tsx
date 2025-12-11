import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header, Footer } from "@/components/layout";
import { CheckCircle, ArrowLeft, Loader2, MessageCircle, Building2, User, Mail, Phone, FileText } from "lucide-react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";

export default function PostPurchaseForm() {
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    telefone: "",
    whatsapp: "",
    empresa: "",
    segmento: "",
    tipoNegocio: "",
    quantidadeFuncionarios: "",
    sistemaAtual: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatPhoneNumber = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, "");
    // Formata como (XX) XXXXX-XXXX
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").trim();
    } else {
      return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trim();
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, [field]: formatted }));
  };

  const validateForm = () => {
    if (!formData.nomeCompleto.trim()) {
      toast.error("Por favor, preencha seu nome completo");
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast.error("Por favor, preencha um email válido");
      return false;
    }
    if (!formData.telefone.trim()) {
      toast.error("Por favor, preencha seu telefone");
      return false;
    }
    if (!formData.whatsapp.trim()) {
      toast.error("Por favor, preencha seu WhatsApp");
      return false;
    }
    if (!formData.empresa.trim()) {
      toast.error("Por favor, preencha o nome da sua empresa");
      return false;
    }
    if (!formData.segmento) {
      toast.error("Por favor, selecione o segmento");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Formata a mensagem para enviar via WhatsApp
      const mensagemWhatsApp = `🎉 *Nova Compra - Formulário de Cadastro*\n\n` +
        `*Dados do Cliente:*\n` +
        `👤 Nome: ${formData.nomeCompleto}\n` +
        `📧 Email: ${formData.email}\n` +
        `📞 Telefone: ${formData.telefone}\n` +
        `💬 WhatsApp: ${formData.whatsapp}\n` +
        `🏢 Empresa: ${formData.empresa}\n` +
        `📊 Segmento: ${formData.segmento}\n` +
        `💼 Tipo de Negócio: ${formData.tipoNegocio || "Não informado"}\n` +
        `👥 Funcionários: ${formData.quantidadeFuncionarios || "Não informado"}\n` +
        `💻 Sistema Atual: ${formData.sistemaAtual || "Não informado"}\n` +
        (formData.mensagem ? `\n*Mensagem Adicional:*\n${formData.mensagem}` : "");

      // Remove caracteres especiais do WhatsApp para URL
      const whatsappNumber = "5521999999999"; // Substitua pelo número real
      const encodedMessage = encodeURIComponent(mensagemWhatsApp);
      
      // Abre WhatsApp Web/App com a mensagem pré-formatada
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");

      // Simula envio (aqui você pode integrar com sua API)
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSuccess(true);
      toast.success("Formulário enviado com sucesso! Redirecionando...");

      // Limpa o formulário após 3 segundos
      setTimeout(() => {
        setFormData({
          nomeCompleto: "",
          email: "",
          telefone: "",
          whatsapp: "",
          empresa: "",
          segmento: "",
          tipoNegocio: "",
          quantidadeFuncionarios: "",
          sistemaAtual: "",
          mensagem: "",
        });
        setIsSuccess(false);
        setLocation("/");
      }, 3000);

    } catch (error) {
      toast.error("Erro ao enviar formulário. Tente novamente.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20 flex items-center justify-center">
          <Card className="max-w-md w-full mx-4">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">Cadastro Realizado!</CardTitle>
              <CardDescription className="text-base mt-2">
                Obrigado por escolher a Quick AI. Nossa equipe entrará em contato em breve para iniciar a configuração da sua solução.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link href="/">
                <Button className="w-full">
                  Voltar para Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 md:py-16 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container relative">
            <Link href="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Voltar
              </Button>
            </Link>
            
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">Parabéns pela sua compra!</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Complete seu <span className="text-primary">Cadastro</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Preencha os dados abaixo para que nossa equipe possa configurar sua solução Quick AI de forma personalizada e eficiente.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    Informações do Cliente
                  </CardTitle>
                  <CardDescription>
                    Todos os campos marcados com * são obrigatórios
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Dados Pessoais */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2 text-primary">
                        <User className="w-5 h-5" />
                        Dados Pessoais
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nomeCompleto">
                            Nome Completo <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="nomeCompleto"
                            name="nomeCompleto"
                            type="text"
                            placeholder="Seu nome completo"
                            value={formData.nomeCompleto}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">
                            Email <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="seu@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="telefone">
                            Telefone <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="telefone"
                            name="telefone"
                            type="tel"
                            placeholder="(00) 00000-0000"
                            value={formData.telefone}
                            onChange={(e) => handlePhoneChange(e, "telefone")}
                            required
                            disabled={isSubmitting}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="whatsapp">
                            WhatsApp <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="whatsapp"
                            name="whatsapp"
                            type="tel"
                            placeholder="(00) 00000-0000"
                            value={formData.whatsapp}
                            onChange={(e) => handlePhoneChange(e, "whatsapp")}
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Dados da Empresa */}
                    <div className="space-y-4 pt-6 border-t border-border">
                      <h3 className="text-lg font-semibold flex items-center gap-2 text-primary">
                        <Building2 className="w-5 h-5" />
                        Dados da Empresa
                      </h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="empresa">
                          Nome da Empresa/Negócio <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="empresa"
                          name="empresa"
                          type="text"
                          placeholder="Nome da sua empresa"
                          value={formData.empresa}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="segmento">
                            Segmento <span className="text-destructive">*</span>
                          </Label>
                          <Select
                            value={formData.segmento}
                            onValueChange={(value) => handleSelectChange("segmento", value)}
                            disabled={isSubmitting}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o segmento" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="med">Quick AI Med (Saúde)</SelectItem>
                              <SelectItem value="beauty">Quick AI Beauty (Beleza & Estética)</SelectItem>
                              <SelectItem value="auto">Quick AI Auto (Automotivo)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="tipoNegocio">
                            Tipo de Negócio
                          </Label>
                          <Select
                            value={formData.tipoNegocio}
                            onValueChange={(value) => handleSelectChange("tipoNegocio", value)}
                            disabled={isSubmitting}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="clinica">Clínica</SelectItem>
                              <SelectItem value="consultorio">Consultório</SelectItem>
                              <SelectItem value="laboratorio">Laboratório</SelectItem>
                              <SelectItem value="salao">Salão de Beleza</SelectItem>
                              <SelectItem value="clinica-estetica">Clínica Estética</SelectItem>
                              <SelectItem value="spa">Spa</SelectItem>
                              <SelectItem value="concessionaria">Concessionária</SelectItem>
                              <SelectItem value="oficina">Oficina</SelectItem>
                              <SelectItem value="autopeca">Autopeça</SelectItem>
                              <SelectItem value="outro">Outro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="quantidadeFuncionarios">
                            Quantidade de Funcionários
                          </Label>
                          <Select
                            value={formData.quantidadeFuncionarios}
                            onValueChange={(value) => handleSelectChange("quantidadeFuncionarios", value)}
                            disabled={isSubmitting}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-5">1 a 5 funcionários</SelectItem>
                              <SelectItem value="6-10">6 a 10 funcionários</SelectItem>
                              <SelectItem value="11-20">11 a 20 funcionários</SelectItem>
                              <SelectItem value="21-50">21 a 50 funcionários</SelectItem>
                              <SelectItem value="50+">Mais de 50 funcionários</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="sistemaAtual">
                            Sistema/Gestão Atual
                          </Label>
                          <Input
                            id="sistemaAtual"
                            name="sistemaAtual"
                            type="text"
                            placeholder="Ex: TOTVS, Senior, etc."
                            value={formData.sistemaAtual}
                            onChange={handleChange}
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Mensagem Adicional */}
                    <div className="space-y-2 pt-6 border-t border-border">
                      <Label htmlFor="mensagem">
                        Mensagem Adicional (Opcional)
                      </Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        placeholder="Conte-nos mais sobre suas necessidades ou informações relevantes..."
                        value={formData.mensagem}
                        onChange={handleChange}
                        rows={4}
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <MessageCircle className="mr-2 w-5 h-5" />
                            Enviar Cadastro
                          </>
                        )}
                      </Button>
                      <p className="text-sm text-muted-foreground text-center mt-4">
                        Ao enviar, você será redirecionado para o WhatsApp para finalizar o processo.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

