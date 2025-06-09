import "./globals.css"

export const metadata = {
  title: "I miss you so badly",
  description: "Something made with tears",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
