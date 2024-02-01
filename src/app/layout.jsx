import 'bootstrap/dist/css/bootstrap.css'
import BootstrapClient from '@/components/bootstrapClient/BootstrapClient';

export const metadata = {
  title: "Bennu",
  description: "Consultora Bennu",
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
