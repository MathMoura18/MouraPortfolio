import type { L } from "./content";

/**
 * Trabalho de Conclusão de Curso. Cada texto tem uma versão para leigos (`lay`) e um
 * complemento técnico (`tech`), exibido quando o visitante liga "Detalhes técnicos".
 */
export type Layered = { lay: L; tech: L };

export type PipelineStep = Layered & {
  id: "ai" | "rules" | "reconcile" | "human";
  title: L;
};

export type CycleStage = { title: L; does: L; generates: L };

export const tcc = {
  name: "PortOps Intelligence",
  title: {
    pt: "Sistema inteligente para gestão de operações logísticas portuárias",
    en: "Intelligent system for port logistics operations management",
  },
  status: { pt: "Proposta · outubro de 2026", en: "Proposal · October 2026" },
  modality: {
    pt: "Tecnológico – Produto · MVP avaliado por experimentos comparativos",
    en: "Technological – Product · MVP evaluated through comparative experiments",
  },
  advisor: "Michael Douglas Cabral Alves",

  summary: {
    lay: {
      pt: "Meu TCC é um sistema que confere, de ponta a ponta, se o que aconteceu com um contêiner no porto bate com o que está nos documentos, nas notas fiscais e na cobrança. Quando algo não fecha — um peso diferente, um serviço feito e não cobrado — ele emite um alerta com as evidências, e uma pessoa confirma ou rejeita.",
      en: "My thesis is a system that checks, end to end, whether what happened to a container at the port matches the documents, tax invoices and billing. When something doesn't add up — a different weight, a service performed but not billed — it raises an alert with the evidence, and a person confirms or rejects it.",
    },
    tech: {
      pt: "Abordagem híbrida de IA e regras de negócio para reconciliação de dados e detecção de inconsistências operacionais: OCR e leitura de documentos por IA, validação por regras (ex.: dígito verificador ISO 6346), mineração de processos e conciliação entre etapas.",
      en: "A hybrid AI and business-rules approach to data reconciliation and operational inconsistency detection: OCR and AI document reading, rule-based validation (e.g., ISO 6346 check digit), process mining and cross-stage reconciliation.",
    },
  } satisfies Layered,

  cycle: [
    {
      title: { pt: "Gate e balança", en: "Gate and scale" },
      does: { pt: "Contêiner entra, é identificado e pesado", en: "Container enters, is identified and weighed" },
      generates: { pt: "placa, nº do contêiner, peso, lacre", en: "plate, container no., weight, seal" },
    },
    {
      title: { pt: "Pátio e armazenagem", en: "Yard and storage" },
      does: { pt: "Fica no pátio e recebe serviços, como reparo", en: "Stays in the yard and receives services, such as repairs" },
      generates: { pt: "posição, permanência, OS", en: "position, dwell time, work order" },
    },
    {
      title: { pt: "Embarque e navegação", en: "Loading and navigation" },
      does: { pt: "Carregado no navio ou na balsa da viagem", en: "Loaded onto the ship or barge for the voyage" },
      generates: { pt: "viagem, data e hora, embarcação", en: "voyage, date and time, vessel" },
    },
    {
      title: { pt: "Documentos: BL e VGM", en: "Documents: BL and VGM" },
      does: { pt: "O BL é emitido e o peso bruto (VGM) declarado", en: "The BL is issued and the gross weight (VGM) declared" },
      generates: { pt: "peso declarado, mercadoria, partes", en: "declared weight, cargo, parties" },
    },
    {
      title: { pt: "Fiscal: CT-e e NFS-e", en: "Tax: CT-e and NFS-e" },
      does: { pt: "Transporte e serviços geram notas eletrônicas", en: "Transport and services generate electronic invoices" },
      generates: { pt: "valores, peso, tomador", en: "amounts, weight, payer" },
    },
    {
      title: { pt: "Serviços e faturamento", en: "Services and billing" },
      does: { pt: "O que foi executado vira cobrança ao cliente", en: "What was performed becomes a charge to the customer" },
      generates: { pt: "faturas, tarifas, recebíveis", en: "invoices, rates, receivables" },
    },
  ] satisfies CycleStage[],

  problems: [
    { pt: "Dados fragmentados", en: "Fragmented data" },
    { pt: "Peso que não bate", en: "Weights that don't match" },
    { pt: "Identificação errada", en: "Wrong identification" },
    { pt: "Serviço sem cobrança", en: "Service not billed" },
    { pt: "Fluxo fora de ordem", en: "Out-of-order flow" },
    { pt: "Nível dos rios", en: "River levels" },
  ] satisfies L[],

  pipeline: [
    {
      id: "ai",
      title: { pt: "Inteligência artificial", en: "Artificial intelligence" },
      lay: {
        pt: "Lê imagens e documentos e liga cada dado ao registro certo.",
        en: "Reads images and documents and links each piece of data to the right record.",
      },
      tech: {
        pt: "OCR lê o número do contêiner na foto do gate e o liga à movimentação.",
        en: "OCR reads the container number from the gate photo and links it to the movement.",
      },
    },
    {
      id: "rules",
      title: { pt: "Regras de negócio", en: "Business rules" },
      lay: {
        pt: "Verificam condições objetivas e obrigatórias do processo.",
        en: "Check objective, mandatory conditions of the process.",
      },
      tech: {
        pt: "O dígito verificador da ISO 6346 confirma se a leitura do número está correta.",
        en: "The ISO 6346 check digit confirms whether the number was read correctly.",
      },
    },
    {
      id: "reconcile",
      title: { pt: "Conciliação", en: "Reconciliation" },
      lay: {
        pt: "Compara os dados de cada etapa e confere se o fluxo seguiu a ordem certa.",
        en: "Compares the data from each stage and checks that the flow followed the right order.",
      },
      tech: {
        pt: "Cruza peso, VGM, BL, CT-e e faturamento; mineração de processos aponta desvios de fluxo.",
        en: "Cross-checks weight, VGM, BL, CT-e and billing; process mining flags flow deviations.",
      },
    },
    {
      id: "human",
      title: { pt: "Profissional", en: "Professional" },
      lay: {
        pt: "Analisa o alerta com as evidências de cada etapa e decide.",
        en: "Reviews the alert with the evidence from each stage and decides.",
      },
      tech: {
        pt: "Confirma ou rejeita; a resposta vira dado rotulado para a avaliação do sistema.",
        en: "Confirms or rejects; the answer becomes labeled data for evaluating the system.",
      },
    },
  ] satisfies PipelineStep[],

  alertExample: {
    lay: {
      pt: "O contêiner foi pesado em 28,4 t na balança, mas o peso declarado foi de 24,0 t. A diferença passa da tolerância, então o sistema levanta um alerta.",
      en: "The container weighed 28.4 t on the scale, but the declared weight was 24.0 t. The difference exceeds the tolerance, so the system raises an alert.",
    },
    tech: {
      pt: "Divergência balança × VGM acima da tolerância configurada. O VGM é exigido pela convenção SOLAS; o alerta carrega as evidências de cada etapa para a confirmação humana.",
      en: "Scale × VGM divergence above the configured tolerance. The VGM is required by the SOLAS convention; the alert carries the evidence from each stage for human confirmation.",
    },
  } satisfies Layered,

  approaches: [
    {
      name: { pt: "Só regras de negócio", en: "Business rules only" },
      strength: { pt: "Preciso e auditável em condições conhecidas", en: "Precise and auditable for known conditions" },
      limit: {
        pt: "Não interpreta texto livre nem nomes escritos de formas diferentes",
        en: "Can't interpret free text or names written in different ways",
      },
    },
    {
      name: { pt: "Só um LLM", en: "LLM only" },
      strength: {
        pt: "Interpreta documentos, e-mails e variações de escrita",
        en: "Interprets documents, emails and spelling variations",
      },
      limit: { pt: "Pode errar ou inventar dados; difícil de auditar", en: "May err or invent data; hard to audit" },
    },
    {
      name: { pt: "Híbrida (PortOps)", en: "Hybrid (PortOps)" },
      strength: {
        pt: "IA na ambiguidade, regras na certeza, evidência em cada alerta",
        en: "AI for ambiguity, rules for certainty, evidence in every alert",
      },
      limit: { pt: "Hipótese a ser testada no TCC", en: "Hypothesis to be tested in the thesis" },
    },
  ],

  researchQuestion: {
    pt: "A abordagem híbrida detecta inconsistências com maior precisão e menos falsos alertas do que regras convencionais ou um LLM isolado?",
    en: "Does the hybrid approach detect inconsistencies with higher precision and fewer false alerts than conventional rules or a standalone LLM?",
  },

  whyItMatters: {
    lay: {
      pt: "Peso declarado errado é risco de segurança, nota fiscal divergente gera retrabalho e serviço executado e não cobrado é receita perdida. O sistema funciona sobre os sistemas atuais, sem substituí-los.",
      en: "A wrongly declared weight is a safety risk, a mismatched tax document causes rework, and a service performed but not billed is lost revenue. The system works on top of the current systems, without replacing them.",
    },
    tech: {
      pt: "Contribuição científica: comparação entre regras, LLM e abordagem híbrida com dados reais, mineração de processos aplicada à conformidade do ciclo da carga e uma base anonimizada de casos validados por especialistas.",
      en: "Scientific contribution: a comparison of rules, LLM and the hybrid approach on real data, process mining applied to cargo-cycle compliance, and an anonymized base of expert-validated cases.",
    },
  } satisfies Layered,

  scope: {
    inside: [
      { pt: "Ciclo do contêiner, do gate ao faturamento", en: "Container cycle, from gate to billing" },
      { pt: "Dados autorizados de 2 ou 3 módulos", en: "Authorized data from 2 or 3 modules" },
      { pt: "Conciliação de peso, VGM, BL, CT-e e faturamento", en: "Reconciliation of weight, VGM, BL, CT-e and billing" },
      { pt: "Linha do tempo e conformidade do fluxo", en: "Timeline and flow compliance" },
      { pt: "Número do contêiner: OCR + dígito ISO 6346", en: "Container number: OCR + ISO 6346 digit" },
      { pt: "Alertas com evidências e confirmação humana", en: "Alerts with evidence and human confirmation" },
    ] satisfies L[],
    outside: [
      { pt: "Alertas pelo nível dos rios (evolução)", en: "River-level alerts (future work)" },
      { pt: "Assistente em linguagem natural (evolução)", en: "Natural-language assistant (future work)" },
      { pt: "Substituir os sistemas atuais", en: "Replacing the current systems" },
    ] satisfies L[],
  },

  objectives: {
    general: {
      pt: "Desenvolver uma aplicação inteligente para a conciliação de dados e a detecção de inconsistências no ciclo da carga em terminais portuários, baseada em uma abordagem híbrida de inteligência artificial e regras de negócio.",
      en: "Develop an intelligent application for data reconciliation and inconsistency detection in the cargo cycle at port terminals, based on a hybrid approach of artificial intelligence and business rules.",
    },
    specific: [
      { pt: "Modelar o ciclo do contêiner e suas inconsistências", en: "Model the container cycle and its inconsistencies" },
      { pt: "Implementar um modelo de dados unificado", en: "Implement a unified data model" },
      { pt: "Desenvolver o mecanismo de conciliação híbrido", en: "Develop the hybrid reconciliation engine" },
      { pt: "Construir um painel de alertas com evidências", en: "Build an alert dashboard with evidence" },
      { pt: "Avaliar a abordagem híbrida frente a regras e a um LLM", en: "Evaluate the hybrid approach against rules and an LLM" },
    ] satisfies L[],
  },

  evaluation: {
    pt: "Precisão, recall, F1, falsos alertas e tempo de processamento, com casos confirmados por especialistas da operação.",
    en: "Precision, recall, F1, false alerts and processing time, with cases confirmed by operations specialists.",
  },

  keywords: ["Reconciliação de dados", "Abordagem híbrida", "LLM", "OCR", "Mineração de processos", "ISO 6346", "Logística portuária"],

  disclaimer: {
    pt: "Proposta de TCC em fase inicial. Os valores do exemplo são ilustrativos, com dados fictícios.",
    en: "Early-stage thesis proposal. Example values are illustrative, with fictitious data.",
  },
};
