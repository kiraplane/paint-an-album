import { CalendarDays } from 'lucide-react';

export function LastUpdated({ date }: { date: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-[#27415F] bg-[#101827] px-3 py-2 font-medium text-[#B8C8D8] text-xs">
      <CalendarDays className="size-4 text-[#67F7D3]" />
      Last checked {date}
    </div>
  );
}
