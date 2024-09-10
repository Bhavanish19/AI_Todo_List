import type { Metadata } from "next";
import {Inter} from "next/font/google";
import ".globals.css";
import ConvexClientProvider from "./providers";

export const metadata: Metadata = {
  title: "ai_todolist",
  description:
    "Todolist seamlessly organizes your tasks and predicts what's next using AI.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    //  <body className={Inter.className}>{children}
      </body>
    </html>
  );
}
//   icons: {
//     icon: "/icon.ico",
//   },
//   metadataBase: new URL(ORIGIN_URL),
//   alternates: {
//     canonical: ORIGIN_URL,
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={defaultFont.className}>
//         {children}
//         <Toaster />
//       </body>
//     </html>
//   );
// }

