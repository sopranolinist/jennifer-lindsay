import './globals.css'
import AppShell from '../components/AppShell'

export const metadata = {
  title: "Jennifer Lindsay",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
        <footer>
          <div>© 2026 Jennifer Lindsay | All Rights Reserved</div>
          <div>v 1.0.1</div>
        </footer>
      </body>
    </html>
  )
}
