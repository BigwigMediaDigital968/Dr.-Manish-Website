import type { Metadata } from "next";

const BASE_URL = process.env.SITE_URL;

const PAGE_URL = `${BASE_URL}/mslt-mwt-sleep-test`;

export const metadata: Metadata = {
  title: "MSLT & MWT Sleep Testing in Delhi | Dr. Manish Aggarwal",

  description:
    "Sleepy all day despite a full night's sleep? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, offers MSLT and MWT testing to diagnose the cause. Book a consultation.",

  keywords: [
    "MSLT test",
    "MWT test",
    "multiple sleep latency test",
    "maintenance of wakefulness test",
    "narcolepsy diagnosis",
    "excessive daytime sleepiness test",
    "sleep specialist Delhi",
    "Dr. Manish Aggarwal",
  ],

  authors: [
    {
      name: "Dr. Manish Aggarwal",
    },
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    type: "website",
    siteName: "Delhi Lung & Bronchoscopy Center",
    title: "MSLT & MWT Sleep Testing in Delhi | Dr. Manish Aggarwal",
    description:
      "Sleepy all day despite a full night's sleep? Dr. Manish Aggarwal, pulmonologist & sleep specialist in Delhi, offers MSLT and MWT testing to diagnose the cause. Book a consultation.",
    url: PAGE_URL,
    locale: "en_IN",
    images: [
      {
        url: `${BASE_URL}/images/mslt-mwt-og.jpg`,
        width: 1200,
        height: 630,
        alt: "MSLT and MWT Sleep Testing - Dr. Manish Aggarwal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MSLT & MWT Sleep Testing in Delhi | Dr. Manish Aggarwal",
    description:
      "Pulmonologist & sleep specialist Dr. Manish Aggarwal explains the Multiple Sleep Latency Test and Maintenance of Wakefulness Test — what to expect and why they're used.",
    images: [`${BASE_URL}/images/mslt-mwt-og.jpg`],
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "MSLT & MWT: Sleep Tests for Diagnosing Excessive Daytime Sleepiness",
  url: PAGE_URL,
  description:
    "A guide to the Multiple Sleep Latency Test (MSLT) and Maintenance of Wakefulness Test (MWT) — what they measure, who needs them, how to prepare, and what the results mean, by Dr. Manish Aggarwal, Pulmonologist and Sleep Specialist.",
  medicalAudience: {
    "@type": "MedicalAudience",
    audienceType: "Patient",
  },
  mainContentOfPage: {
    "@type": "WebPageElement",
    about: [
      {
        "@type": "MedicalTest",
        name: "Multiple Sleep Latency Test (MSLT)",
      },
      {
        "@type": "MedicalTest",
        name: "Maintenance of Wakefulness Test (MWT)",
      },
    ],
  },
  lastReviewed: "2026-07-30",
  reviewedBy: {
    "@type": "Person",
    name: "Dr. Manish Aggarwal",
    jobTitle: "Pulmonologist & Sleep Specialist",
  },
  publisher: {
    "@type": "MedicalOrganization",
    name: "Delhi Lung & Bronchoscopy Center",
  },
};

const msltSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalTest",
  name: "Multiple Sleep Latency Test (MSLT)",
  alternateName: "MSLT",
  usedToDiagnose: [
    {
      "@type": "MedicalCondition",
      name: "Narcolepsy",
    },
    {
      "@type": "MedicalCondition",
      name: "Idiopathic Hypersomnia",
    },
  ],
  affectedBy: {
    "@type": "MedicalProcedure",
    name: "Overnight Polysomnography",
    description:
      "Usually performed the night before an MSLT to ensure adequate sleep and rule out other causes of sleepiness.",
  },
  howPerformed:
    "A series of four to five scheduled 20-minute nap opportunities spaced about two hours apart, over roughly 6-8 hours, while brain activity, eye movement, and muscle activity are monitored.",
};

const mwtSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalTest",
  name: "Maintenance of Wakefulness Test (MWT)",
  alternateName: "MWT",
  usedToDiagnose: {
    "@type": "MedicalCondition",
    name: "Excessive Daytime Sleepiness / Treatment Effectiveness",
  },
  howPerformed:
    "Four wakefulness sessions spaced about two hours apart, over roughly 4-5 hours, during which the patient sits in a quiet, low-stimulation setting and attempts to remain awake without active stimulation.",
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Manish Aggarwal",
  medicalSpecialty: ["Pulmonology", "Sleep Medicine"],
  url: `${BASE_URL}/about-us`,
  worksFor: {
    "@type": "MedicalOrganization",
    name: "Delhi Lung & Bronchoscopy Center",
    address: {
      "@type": "PostalAddress",
      streetAddress: "J1-12A, Pitampura",
      addressLocality: "Delhi",
      postalCode: "110034",
      addressCountry: "IN",
    },
    telephone: "+91-99895-54095",
    email: "Aggarwal54095@gmail.com",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${BASE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sleep",
      item: `${BASE_URL}/sleep`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "MSLT & MWT",
      item: PAGE_URL,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an MSLT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Multiple Sleep Latency Test (MSLT) is a daytime sleep test that measures how quickly you fall asleep during a series of scheduled nap opportunities. It is commonly used to diagnose narcolepsy and other disorders of hypersomnolence.",
      },
    },
    {
      "@type": "Question",
      name: "What is an MWT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Maintenance of Wakefulness Test (MWT) measures how well you can stay awake in a quiet setting during the day. It is often used to check how well treatment is working or to assess fitness for safety-sensitive occupations.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between MSLT and MWT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The MSLT measures how quickly you fall asleep, while the MWT measures how long you can stay awake. Both involve multiple sessions during the day but are used for different clinical purposes.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an MSLT take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An MSLT typically takes about 6 to 8 hours, involving four to five nap opportunities spaced roughly two hours apart.",
      },
    },
    {
      "@type": "Question",
      name: "Is the MSLT painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The MSLT is completely painless. Sensors are placed gently on your scalp, face, and chin to record activity, and there are no needles or invasive steps involved.",
      },
    },
    {
      "@type": "Question",
      name: "Can I drive after the test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because the test itself involves periods of intentional napping or prolonged sitting, it is advisable to arrange for someone to drive you home afterwards, or to plan for alternate transport, especially if you still feel drowsy.",
      },
    },
    {
      "@type": "Question",
      name: "How should I prepare for an MSLT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maintain a regular sleep schedule for one to two weeks beforehand, avoid caffeine and alcohol on the test day, avoid extra naps before the test, and follow any specific instructions from your doctor regarding medications.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need an overnight sleep study before an MSLT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most cases, yes. An overnight polysomnography is usually performed the night before an MSLT to ensure you had adequate sleep before the daytime test and to rule out other causes of sleepiness, such as sleep apnea.",
      },
    },
  ],
};

const faqs = [
  {
    question: "What is an MSLT?",
    answer:
      "The Multiple Sleep Latency Test (MSLT) is a daytime sleep test that measures how quickly you fall asleep during a series of scheduled nap opportunities. It is commonly used to diagnose narcolepsy and other disorders of hypersomnolence.",
  },
  {
    question: "What is an MWT?",
    answer:
      "The Maintenance of Wakefulness Test (MWT) measures how well you can stay awake in a quiet setting during the day. It is often used to check how well treatment is working or to assess fitness for safety-sensitive occupations.",
  },
  {
    question: "What is the difference between MSLT and MWT?",
    answer:
      "The MSLT measures how quickly you fall asleep, while the MWT measures how long you can stay awake. Both involve multiple sessions during the day but are used for different clinical purposes.",
  },
  {
    question: "How long does an MSLT take?",
    answer:
      "An MSLT typically takes about 6 to 8 hours, involving four to five nap opportunities spaced roughly two hours apart.",
  },
  {
    question: "Is the MSLT painful?",
    answer:
      "No. The MSLT is completely painless. Sensors are placed gently on your scalp, face, and chin to record activity, and there are no needles or invasive steps involved.",
  },
  {
    question: "Can I drive after the test?",
    answer:
      "Because the test itself involves periods of intentional napping or prolonged sitting, it is advisable to arrange for someone to drive you home afterwards, or to plan for alternate transport, especially if you still feel drowsy.",
  },
  {
    question: "How should I prepare for an MSLT?",
    answer:
      "Maintain a regular sleep schedule for one to two weeks beforehand, avoid caffeine and alcohol on the test day, avoid extra naps before the test, and follow any specific instructions from your doctor regarding medications.",
  },
  {
    question: "Do I need an overnight sleep study before an MSLT?",
    answer:
      "In most cases, yes. An overnight polysomnography is usually performed the night before an MSLT to ensure you had adequate sleep before the daytime test and to rule out other causes of sleepiness, such as sleep apnea.",
  },
];

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export default function MSLTMWTSleepTestPage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={medicalWebPageSchema} />
      <JsonLd data={msltSchema} />
      <JsonLd data={mwtSchema} />
      <JsonLd data={physicianSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <main>
        {/* Hero Section */}
        <section>
          <div>
            <span>Sleep Testing</span>

            <h1>
              MSLT &amp; MWT Sleep Testing in Delhi
            </h1>

            <p>
              Understanding excessive daytime sleepiness starts with
              identifying how your brain regulates sleep and wakefulness.
              Dr. Manish Aggarwal, Pulmonologist &amp; Sleep Specialist,
              provides specialised evaluation using MSLT and MWT testing.
            </p>

            <a href="/contact-us">
              Book a Consultation
            </a>
          </div>
        </section>

        {/* Introduction */}
        <section>
          <div>
            <h2>
              MSLT &amp; MWT: Tests for Excessive Daytime Sleepiness
            </h2>

            <p>
              Persistent daytime sleepiness despite getting enough sleep
              can be a sign of an underlying sleep disorder. Two specialised
              daytime tests, the Multiple Sleep Latency Test (MSLT) and the
              Maintenance of Wakefulness Test (MWT), help sleep specialists
              understand how easily you fall asleep and how well you can
              remain awake.
            </p>

            <p>
              These tests are particularly useful when evaluating conditions
              such as narcolepsy, idiopathic hypersomnia and other disorders
              associated with excessive daytime sleepiness.
            </p>
          </div>
        </section>

        {/* MSLT */}
        <section>
          <div>
            <h2>What Is an MSLT?</h2>

            <p>
              The Multiple Sleep Latency Test measures how quickly you fall
              asleep during several scheduled opportunities to nap during
              the daytime.
            </p>

            <p>
              It is commonly used when a sleep specialist needs to evaluate
              unexplained excessive daytime sleepiness and investigate
              conditions such as narcolepsy or idiopathic hypersomnia.
            </p>

            <h3>How the MSLT Works</h3>

            <ul>
              <li>
                You are given several scheduled opportunities to sleep.
              </li>
              <li>
                Each nap opportunity generally lasts around 20 minutes.
              </li>
              <li>
                Sessions are usually spaced approximately two hours apart.
              </li>
              <li>
                Brain activity, eye movements and muscle activity are
                monitored using non-invasive sensors.
              </li>
              <li>
                The complete test generally takes around 6–8 hours.
              </li>
            </ul>
          </div>
        </section>

        {/* MWT */}
        <section>
          <div>
            <h2>What Is an MWT?</h2>

            <p>
              The Maintenance of Wakefulness Test measures your ability to
              remain awake during the daytime when sitting in a quiet,
              low-stimulation environment.
            </p>

            <p>
              Unlike the MSLT, which evaluates how quickly you fall asleep,
              the MWT evaluates how effectively you can maintain wakefulness.
            </p>

            <h3>How the MWT Works</h3>

            <ul>
              <li>
                You sit comfortably in a quiet testing environment.
              </li>
              <li>
                You are asked to remain awake without actively stimulating
                yourself.
              </li>
              <li>
                Multiple sessions are performed during the day.
              </li>
              <li>
                Sleep and wakefulness are monitored using specialised
                recording equipment.
              </li>
              <li>
                The test generally takes several hours.
              </li>
            </ul>
          </div>
        </section>

        {/* Difference */}
        <section>
          <div>
            <h2>MSLT vs MWT: What Is the Difference?</h2>

            <div>
              <div>
                <h3>MSLT</h3>
                <p>
                  Measures how quickly you fall asleep.
                </p>
                <p>
                  Primarily used to evaluate pathological sleepiness and
                  disorders such as narcolepsy.
                </p>
              </div>

              <div>
                <h3>MWT</h3>
                <p>
                  Measures how well you can remain awake.
                </p>
                <p>
                  Often used to assess wakefulness, treatment effectiveness
                  and safety in appropriate clinical situations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs Testing */}
        <section>
          <div>
            <h2>Who May Need MSLT or MWT Testing?</h2>

            <p>
              Your sleep specialist may recommend these tests if you have
              persistent or unexplained daytime sleepiness despite apparently
              adequate nighttime sleep.
            </p>

            <ul>
              <li>Suspected narcolepsy</li>
              <li>Possible idiopathic hypersomnia</li>
              <li>Persistent excessive daytime sleepiness</li>
              <li>Unintentional daytime sleep episodes</li>
              <li>Sleepiness affecting work or studies</li>
              <li>Sleepiness affecting driving or safety</li>
              <li>Assessment of response to treatment</li>
            </ul>
          </div>
        </section>

        {/* Overnight PSG */}
        <section>
          <div>
            <h2>Why Is an Overnight Sleep Study Often Needed Before MSLT?</h2>

            <p>
              An overnight polysomnography is usually performed before an
              MSLT. This helps confirm that you had an adequate opportunity
              for sleep and allows the sleep specialist to identify other
              possible causes of excessive daytime sleepiness, including
              sleep-related breathing disorders.
            </p>

            <p>
              The results of the overnight study are important when
              interpreting the following day's MSLT.
            </p>
          </div>
        </section>

        {/* Preparation */}
        <section>
          <div>
            <h2>How Should You Prepare for an MSLT?</h2>

            <p>
              Proper preparation helps ensure that the results accurately
              reflect your normal sleep and wake pattern.
            </p>

            <ul>
              <li>
                Maintain a regular sleep schedule before the test.
              </li>
              <li>
                Keep a sleep diary if recommended by your doctor.
              </li>
              <li>
                Follow instructions regarding caffeine and alcohol.
              </li>
              <li>
                Avoid unnecessary daytime naps before testing.
              </li>
              <li>
                Discuss all medications with your sleep specialist.
              </li>
              <li>
                Follow any specific instructions provided by the sleep
                testing centre.
              </li>
            </ul>
          </div>
        </section>

        {/* What to Expect */}
        <section>
          <div>
            <h2>What Should You Expect During the Test?</h2>

            <p>
              Both MSLT and MWT are non-invasive tests. Small sensors are
              placed on areas such as the scalp, face and chin to monitor
              brain activity, eye movements and muscle activity.
            </p>

            <p>
              There are no needles or painful procedures involved. You will
              be monitored throughout the testing sessions by trained
              professionals.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div>
            <h2>Frequently Asked Questions</h2>

            <div>
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div>
            <h2>
              Experiencing Excessive Daytime Sleepiness?
            </h2>

            <p>
              Persistent daytime sleepiness should not be ignored, especially
              when it affects your concentration, work, studies or safety.
              A comprehensive sleep evaluation can help identify the
              underlying cause.
            </p>

            <a href="/contact-us">
              Book a Sleep Consultation
            </a>
          </div>
        </section>
      </main>
    </>
  );
}