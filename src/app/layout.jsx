import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import Bootstrap from "@/components/bootstrap/Bootstrap";

export const metadata = {
  title: "Bennu",
  description: "Consultora Bennu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <Bootstrap />
      </body>
    </html>
  );
}
