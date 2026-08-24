import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://clinica-vitta-saude.vercel.app"),
  title: "Clínica Vitta Saúde | Cuidado que escuta",
  description: "Clínica multidisciplinar com atendimento humanizado e agendamento online.",
  openGraph: { title: "Clínica Vitta Saúde", description: "Cuidado que escuta.", images: ["/clinic-og.webp"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
