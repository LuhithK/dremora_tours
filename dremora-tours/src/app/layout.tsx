@@ .. @@
 import type { Metadata } from 'next'
-import { Inter } from 'next/font/google'
+import { GeistSans } from 'geist/font/sans'
 import './globals.css'
 import Header from '@/components/layout/Header'
 import Footer from '@/components/layout/Footer'
 import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
 import { Toaster } from '@/components/ui/toaster'

-const inter = Inter({ subsets: ['latin'] })

 export const metadata: Metadata = {
 }
@@ .. @@
 export default function RootLayout({
   children,
 }: {
   children: React.ReactNode
 }) {
   return (
   )
 }
-    <html lang="en" className={inter.className}>
+    <html lang="en" className={GeistSans.className}>
       <body>
         <Header />
         <main>{children}</main>