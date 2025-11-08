import { Alert, Header, Screen } from "@/ui";

import "./globals.css";
import { RootClientContext } from "./RootClientContext";

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
          </Screen>
        </RootClientContext>
      </body>
    </html>
  );
}
