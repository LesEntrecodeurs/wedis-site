import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { JsonLd } from '@/components/site/JsonLd';
import { faqLd } from '@/lib/seo';
import { SectionHeading } from '@/components/site/SectionHeading';

export type Faq = { question: string; answer: string };

export function PageFaq({
  items,
  heading = 'Questions fréquentes'
}: {
  items: Faq[];
  heading?: string;
}) {
  if (!items.length) return null;
  return (
    <section className="container-x py-14 md:py-20">
      <JsonLd data={faqLd(items)} />
      <SectionHeading eyebrow="FAQ" title={heading} align="center" />
      <Accordion type="single" collapsible className="mx-auto mt-8 max-w-3xl">
        {items.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left text-base font-medium text-[var(--brand-slate)]">
              {f.question}
            </AccordionTrigger>
            <AccordionContent className="text-[15px] leading-relaxed text-neutral-600">
              {f.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
