import type { MetadataRoute } from "next";

const BASE_URL = "https://www.drmanishaggarwal.com";

const routes = [
  // Main pages
  {
    path: "/",
    changeFrequency: "weekly" as const,
    priority: 1.0,
  },
  {
    path: "/about",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/contact",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/case-studies",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    path: "/blogs",
    changeFrequency: "weekly" as const,
    priority: 0.7,
  },
  {
    path: "/terms",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
  {
    path: "/privacy-policy",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },

  // Symptoms
  {
    path: "/reason-for-cough",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/causes-of-sputum",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/reason-for-breathlessness",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/causes-of-wheezing",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/reason-for-blood-in-spit",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/reason-for-chest-pain",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/reason-for-unintentional-weight-loss",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/reasons-for-prolonged-fever",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },

  // Diseases
  {
    path: "/copd",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/allergic-bronchitis",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/allergic-bronchopulmonary-aspergillosis",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/uncontrolled-asthma-vs-severe-asthma",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/viral-pneumonia",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/bacterial-pneumonia",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/tubercular-pneumonia",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/fungal-pneumonia",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/bronchiectasis",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/interstitial-lung-disease",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/non-small-cell-lung-carcinoma",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/small-cell-lung-carcinoma",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/bronchial-carcinoid-tumor",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/lung-nodule-evaluation",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/pleural-effusion",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/pneumothorax",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/pleural-tumor",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/pleural-thickening",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/pulmonary-embolism",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/pulmonary-artery-hypertension",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/pulmonary-edema",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/acute-respiratory-distress-syndrome",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/aspiration-pneumonia",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/type-1-respiratory-failure",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/type-2-respiratory-failure",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/diseases-of-mediastinum",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/tobacco-addiction",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },

  // Procedures
  {
    path: "/procedures/bronchoscopy-in-delhi",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/procedures/ebus-endobronchial-ultrasound-in-delhi",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/procedures/transbronchial-lung-biopsy-in-delhi",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/procedures/bronchoalveolar-lavage-bal-in-delhi",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/procedures/pleural-aspiration-in-delhi",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/procedures/intercostal-drainage-icd-in-delhi",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/procedures/medical-thoracoscopy-in-delhi",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/procedures/pleural-biopsy-in-delhi",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/procedures/spirometry-test-in-delhi",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/procedures/pulmonary-function-test-pft-in-delhi",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/procedures/feno-test-in-delhi",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/procedures/6-minute-walk-test-in-delhi",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },

  // Sleep
  {
    path: "/insomnia-treatment",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/hypersomnia-treatment",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/parasomnia-treatment",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/central-disorders-of-hypersomnolence",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/circadian-rhythm-sleep-disorder-treatment",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/sleep-related-movement-disorders",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/sleep-related-breathing-disorders",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/level-1-sleep-study-polysomnography",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/level-2-level-3-home-sleep-apnoea-test",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/mslt-mwt-sleep-test",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/actigraphy",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/sleep-diary",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/cognitive-behavioral-therapy-insomnia",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/pap-therapy-cpap-bipap",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/sleep-apnoea-surgery",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/dental-appliances-for-sleep-apnoea",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-05");

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
