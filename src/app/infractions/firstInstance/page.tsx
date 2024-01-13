"use client";

import InfractionLayout from "@/components/infractions/infractionLayout";
import MainApp from "@/components/UI/mainApp";
import PrimaryLayout from "@/components/UI/primaryLayout";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <PrimaryLayout>
        <MainApp title="Primeira Instância">
          <InfractionLayout></InfractionLayout>
        </MainApp>
      </PrimaryLayout>
    </NextUIProvider>
  );
}
