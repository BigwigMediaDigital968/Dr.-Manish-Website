This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Business Details (Constants)

All clinic / business details live in one file: [`app/lib/constants/business.ts`](app/lib/constants/business.ts).
Use these constants instead of hardcoding contact info in pages and components. If a detail changes (phone, address, timings, socials), update it there only.

```tsx
import { BUSINESS, PHONE, EMAIL, ADDRESS, HOURS } from "@/app/lib/constants/business";

<a href={PHONE.tel}>{PHONE.display}</a>
<a href={EMAIL.mailto}>{EMAIL.address}</a>
<p>{ADDRESS.full}</p>
```

| Export      | What it holds                                                        | Common usage                               |
| ----------- | -------------------------------------------------------------------- | ------------------------------------------ |
| `SITE_URL`  | Base URL (`SITE_URL` env, falls back to `https://www.drmanishaggarwal.com`) | Canonical URLs, Open Graph, sitemap   |
| `DOCTOR`    | `name`, `title`                                                      | Headings, schema `Physician`               |
| `BUSINESS`  | Clinic `name` (Delhi Lung & Bronchoscopy Centre), `siteName`, `logo`, `locale` | Metadata, footer, schema     |
| `PHONE`     | `display` (+91 98995 54095), `e164`, `tel`                           | Text → `display`, links → `tel`            |
| `EMAIL`     | `address`, `mailto`                                                  | Footer, contact, policy pages              |
| `WHATSAPP`  | `number` (no `+`), `url` (wa.me)                                     | Append `?text=` for prefilled messages     |
| `ADDRESS`   | `street`, `locality`, `city`, `region`, `postalCode`, `country`, `full` | Text → `full`, schema → split fields   |
| `MAP`       | `directionsUrl`, `embedUrl`, `latitude`, `longitude`                 | "Directions" button, map iframe, schema    |
| `HOURS`     | Array of `{ days, time }`                                            | Timings list on contact / location blocks  |
| `SOCIALS`   | `youtube`, `linkedin`, `facebook`, `instagram`                       | Footer social icons                        |

Existing pages still have these values hardcoded; migrate them to the constants as pages are touched. Values currently in use that do **not** match the constants and should be replaced when migrating:

- Clinic name variants: "Delhi Lung & Bronchoscopy Center" (US spelling), "Delhi Lung & Sleep Centre", "Dr. Manish Aggarwal Clinic" (schema publisher)
- Phone formats: `+91-9899554095`, `+91 9899554095`, `+91-98995 54095`
- Emails: `info@delhilungandsleep.com` (`app/contact/component/ContactFeatures.tsx`), `Aggarwal54095@gmail.com`
- `app/data.ts` → `contactData` duplicates `DOCTOR.name` / `PHONE.e164`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
