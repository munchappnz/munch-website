import type { ReactNode } from "react";

export function LegalLayout({
  title,
  meta,
  children,
}: {
  title: string;
  meta?: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-extrabold text-munch-black sm:text-4xl">
        {title}
      </h1>
      {meta && <p className="mt-2 text-sm text-munch-muted">{meta}</p>}
      <div className="legal-content mt-8 space-y-6 text-[15px] leading-relaxed text-munch-black/90">
        {children}
      </div>
    </article>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-bold text-munch-black">{heading}</h2>
      <div className="mt-2 space-y-3 text-munch-muted [&_a]:font-semibold [&_a]:text-munch-orange [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-munch-black [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

export function ConfigPlaceholder({ children }: { children: ReactNode }) {
  return (
    <strong className="rounded bg-munch-orange-soft px-1.5 py-0.5 font-mono text-[13px] font-semibold text-munch-orange-dark">
      {children}
    </strong>
  );
}
