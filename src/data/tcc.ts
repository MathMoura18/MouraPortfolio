import type { L } from "./content";

/**
 * Trabalho de Conclusão de Curso. Cada texto tem uma versão para leigos (`lay`) e um
 * complemento técnico (`tech`), exibido quando o visitante liga "Detalhes técnicos".
 */
export type Layered = { lay: L; tech: L };

export type PipelineStep = Layered & {
  id: "input" | "preprocess" | "vit" | "classify" | "explain";
  title: L;
};

export const tcc = {
  title: {
    pt: "IA explicável para detectar e localizar lesões suspeitas em mamografias",
    en: "Explainable AI to detect and locate suspicious lesions in mammograms",
  },
  status: { pt: "Em desenvolvimento · previsão 2027", en: "In progress · expected 2027" },

  summary: {
    lay: {
      pt: "Meu TCC é uma inteligência artificial que analisa mamografias para apoiar o diagnóstico precoce do câncer de mama. Ela não só diz se um exame parece suspeito, como também aponta onde está a área que chamou a atenção — assim o médico entende e confere o motivo da resposta.",
      en: "My thesis is an artificial intelligence that analyzes mammograms to support early breast cancer diagnosis. It not only says whether an exam looks suspicious, but also points to the area that caught its attention — so the doctor can understand and verify the reason behind the answer.",
    },
    tech: {
      pt: "O modelo é um Vision Transformer (ViT) com duas tarefas — classificação (normal × suspeito) e localização — combinado com técnicas de Explainable AI, como attention maps e Grad-CAM adaptado a Transformers, que geram mapas de calor sobre a imagem.",
      en: "The model is a Vision Transformer (ViT) with two tasks — classification (normal × suspicious) and localization — combined with Explainable AI techniques such as attention maps and Grad-CAM adapted to Transformers, which produce heatmaps over the image.",
    },
  } satisfies Layered,

  pipeline: [
    {
      id: "input",
      title: { pt: "Mamografia", en: "Mammogram" },
      lay: { pt: "A imagem do exame entra no sistema.", en: "The exam image enters the system." },
      tech: {
        pt: "Imagens de alta resolução (ex.: 1024 × 1024 px ou maiores) vindas de bases públicas rotuladas.",
        en: "High-resolution images (e.g., 1024 × 1024 px or larger) from labeled public datasets.",
      },
    },
    {
      id: "preprocess",
      title: { pt: "Pré-processamento", en: "Pre-processing" },
      lay: {
        pt: "A imagem é limpa e padronizada: tons de cinza, sem fundo e sempre do mesmo tamanho.",
        en: "The image is cleaned and standardized: grayscale, no background, always the same size.",
      },
      tech: {
        pt: "Grayscale, normalização das intensidades para [0, 1], remoção de fundo e ruído, resize/crop e data augmentation no treino.",
        en: "Grayscale, intensity normalization to [0, 1], background and noise removal, resize/crop, and data augmentation during training.",
      },
    },
    {
      id: "vit",
      title: { pt: "Vision Transformer", en: "Vision Transformer" },
      lay: {
        pt: "A IA olha a imagem em pequenos pedaços e aprende quais regiões se relacionam.",
        en: "The AI looks at the image in small pieces and learns which regions relate to each other.",
      },
      tech: {
        pt: "A imagem vira patches (ex.: 16 × 16), cada um projetado em um embedding com posição; camadas de self-attention extraem as características.",
        en: "The image becomes patches (e.g., 16 × 16), each projected into a positional embedding; self-attention layers extract the features.",
      },
    },
    {
      id: "classify",
      title: { pt: "Classificação", en: "Classification" },
      lay: {
        pt: "A IA responde se o exame parece normal ou suspeito, com uma porcentagem de confiança.",
        en: "The AI answers whether the exam looks normal or suspicious, with a confidence percentage.",
      },
      tech: {
        pt: "Classifier head (MLP sobre o token [CLS]) com softmax: Normal / Suspeito — ou Benigno / Maligno, conforme os rótulos do dataset.",
        en: "Classifier head (MLP on the [CLS] token) with softmax: Normal / Suspicious — or Benign / Malignant, depending on the dataset labels.",
      },
    },
    {
      id: "explain",
      title: { pt: "Mapa de calor", en: "Heatmap" },
      lay: {
        pt: "Ela pinta a área que motivou a decisão, mostrando onde o médico deve olhar.",
        en: "It highlights the area that drove the decision, showing the doctor where to look.",
      },
      tech: {
        pt: "Attention rollout / attention maps e Grad-CAM geram um heatmap sobreposto; o pico indica as coordenadas (x, y) da região suspeita.",
        en: "Attention rollout / attention maps and Grad-CAM produce an overlaid heatmap; its peak gives the (x, y) coordinates of the suspicious region.",
      },
    },
  ] satisfies PipelineStep[],

  imageAsNumbers: {
    lay: {
      pt: "Para o computador, uma imagem é uma grande tabela de números: cada pixel vale de 0 (preto) a 1 (branco).",
      en: "To a computer, an image is a big table of numbers: each pixel goes from 0 (black) to 1 (white).",
    },
    tech: {
      pt: "Matriz H × W de intensidades em [0, 1]. O ViT não recebe a matriz como um único vetor: ela é dividida em patches, achatados e projetados linearmente em embeddings.",
      en: "An H × W matrix of intensities in [0, 1]. The ViT doesn't take the matrix as a single vector: it is split into patches, flattened, and linearly projected into embeddings.",
    },
  } satisfies Layered,

  whyItMatters: {
    lay: {
      pt: "Em vez de apenas “a IA disse que tem câncer”, o resultado vira “a IA encontrou uma região suspeita aqui, com 91% de confiança” — algo que o especialista consegue verificar.",
      en: "Instead of just “the AI said it's cancer”, the result becomes “the AI found a suspicious region here, with 91% confidence” — something a specialist can verify.",
    },
    tech: {
      pt: "Explicabilidade é essencial em saúde: o mapa de atenção permite auditar se o modelo se baseou na lesão e não em artefatos da imagem (marcações, bordas, rótulos).",
      en: "Explainability is essential in healthcare: the attention map lets us audit whether the model relied on the lesion rather than image artifacts (markers, borders, labels).",
    },
  } satisfies Layered,

  datasets: [
    { name: "CBIS-DDSM", note: { pt: "massas e calcificações com ROI", en: "masses and calcifications with ROIs" } },
    { name: "INbreast", note: { pt: "anotações precisas, digital", en: "precise annotations, digital" } },
    { name: "VinDr-Mammo", note: { pt: "grande e com bounding boxes", en: "large, with bounding boxes" } },
    { name: "DDSM", note: { pt: "base clássica digitalizada", en: "classic digitized dataset" } },
    { name: "MIAS", note: { pt: "pequena, boa para validação", en: "small, good for validation" } },
  ],
  datasetNote: {
    pt: "Em avaliação. A preferência é por bases que tragam não só o rótulo da imagem, mas também a marcação da região da lesão — o que permite medir a qualidade da localização.",
    en: "Under evaluation. The preference is for datasets that include not only the image label but also the lesion region annotation — which allows measuring localization quality.",
  },

  keywords: ["Vision Transformer", "Explainable AI", "Grad-CAM", "Attention maps", "Mamografia", "Deep Learning"],

  disclaimer: {
    pt: "Projeto acadêmico de apoio à decisão — não substitui o diagnóstico médico. Os valores do exemplo são ilustrativos.",
    en: "Academic decision-support project — it does not replace medical diagnosis. Example values are illustrative.",
  },
};
