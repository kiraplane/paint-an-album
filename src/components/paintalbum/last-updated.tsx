import { CalendarDays } from 'lucide-react';

export function LastUpdated({ date }: { date: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-[#3B303F] bg-[#201824] px-3 py-2 font-medium text-[#D8C7D8] text-xs">
      <CalendarDays className="size-4 text-[#3ED7B5]" />
      Last checked {date}
    </div>
  );
}
