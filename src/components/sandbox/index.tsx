/*
 * For designing and displaying components in isolation
 * */
import { ButtonSandbox } from "@/components/sandbox/button.sandbox.tsx";
import { ReviewItemSandbox } from "@/components/sandbox/review-item.sandbox.tsx";
import { ReactNode } from "react";

export const Sandbox = () => {
  return (
    <main className="p-4">
      <section className="mb-10">
        <h1 className="text-3xl font-bold">Sandbox</h1>
        <p className="mt-4 text-lg">
          This is a playground for designing and displaying components in
          isolation.
        </p>
      </section>
      <Section title="Button">
        <ButtonSandbox />
      </Section>
      <Section title="Review Item">
        <ReviewItemSandbox />
      </Section>
    </main>
  );
};

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="mb-10">
      <h2 className="mb-5 text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
};
