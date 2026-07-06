import type { GuideFaq } from '@/data/paintalbum/types';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export function FaqSection({
  title = 'FAQ',
  items,
  className,
}: {
  title?: string;
  items: GuideFaq[];
  className?: string;
}) {
  return (
    <section
      id="faq"
      className={cn(
        'rounded-lg border border-[#3B303F] bg-[#201824] p-6 shadow-sm',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#FFF2B0]">
        {title}
      </h2>
      <Accordion
        type="single"
        collapsible
        className="mt-6 w-full rounded-lg border border-[#3B303F] bg-[#140F17] px-5"
      >
        {items.map((item, index) => (
          <AccordionItem
            key={item.question}
            value={`faq-${index}`}
            className="border-[#3B303F]"
          >
            <AccordionTrigger className="cursor-pointer py-4 text-left text-base font-semibold text-[#FFF8E8] hover:text-[#3ED7B5] hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-[#D8C7D8] text-sm leading-7">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
