import type { Metadata, Viewport } from "next";
import { DM_Sans, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "700"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-body", display: "swap" });

const description =
  "Páginas web, tiendas en línea, apps, automatización de WhatsApp y chatbots con IA para negocios locales. Más clientes, más ventas y menos trabajo manual.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} · ${site.role} | Páginas web, apps y chatbots de WhatsApp`,
  description,
  keywords: ["páginas web", "tienda online", "chatbot WhatsApp", "automatización WhatsApp", "apps móviles", "sistemas para negocios", "desarrollador web México"],
  openGraph: { title: `${site.brand} · ${site.slogan}`, description, url: site.url, siteName: site.brand, locale: "es_MX", type: "website" },
  twitter: { card: "summary_large_image", title: site.brand, description },
};

export const viewport: Viewport = { themeColor: "#0d0c11", width: "device-width", initialScale: 1, viewportFit: "cover" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.brand,
  founder: { "@type": "Person", name: site.name, jobTitle: site.role },
  description,
  url: site.url,
  areaServed: "MX",
  email: site.email,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
