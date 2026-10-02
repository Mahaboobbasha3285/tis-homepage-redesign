import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata = {
  title: "Tula's International School | The Modern Gurukul",
  description:
    "Tula's International School is a co-educational residential school in Dehradun, blending academic excellence with holistic development."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}