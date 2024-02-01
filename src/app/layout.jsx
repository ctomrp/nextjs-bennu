import 'bootstrap/dist/css/bootstrap.css'
import BootstrapClient from '@/components/bootstrapClient/BootstrapClient';
import ico from '@/app/icon.ico'
import png from '@/app/apple-icon.png'

export const metadata = {
  title: "Bennu",
  description: "Consultora Bennu ofrece servicios de desarrollo, mantención, consultoría, DevOps y capacitación",
  siteName: 'Bennu',
  url: 'https://bennu.cl/',
  locale: 'es-CL',
  type: 'website',
  keywords: [
    'optimización de procesos',
    'consultora tecnológica',
    'innovación tecnológica',
    'actualización de sistemas',
    'cloud computing',
    'gestión de proyectos de TI',
    'integración de sistemas',
    'servicio de consultoría',
  ],
  icons: {
    icon: ico,
    apple: png,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
