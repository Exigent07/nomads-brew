import "./globals.css";

export const metadata = {
  title: "Nomads Brew",
  description: "Brewed for 'Nomads' like you!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
