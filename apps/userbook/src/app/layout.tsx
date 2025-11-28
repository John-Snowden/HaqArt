import { RootClientContext } from "@/context";
import { UIAlert, UIHeader, UIScreen, UIToast } from "@/ui";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <RootClientContext>
          <UIScreen>
            <UIHeader />
            {children}
            <UIAlert />
            <UIToast />
          </UIScreen>
        </RootClientContext>
      </body>
    </html>
  );
}
