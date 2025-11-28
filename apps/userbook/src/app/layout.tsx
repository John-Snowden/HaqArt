import { RootClientContext } from "@/context";
import { Alert, Header, Screen, UIToast } from "@/ui";

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
          <Screen>
            <Header />
            {children}
            <Alert />
            <UIToast />
          </Screen>
        </RootClientContext>
      </body>
    </html>
  );
}
