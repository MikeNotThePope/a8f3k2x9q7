"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./Button";

export type ICalendarProps = React.ComponentProps<typeof DayPicker>;

const Calendar = React.forwardRef<HTMLDivElement, ICalendarProps>(
  ({ className, classNames, showOutsideDays = true, ...props }, ref) => (
    <div ref={ref}>
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(
          "border-2 border-border bg-background p-3 font-head shadow-md",
          className,
        )}
        classNames={{
          months: "flex flex-col sm:flex-row gap-2",
          month: "flex flex-col gap-4",
          month_caption:
            "flex justify-center pt-1 relative items-center w-full text-foreground",
          caption_label: "text-sm font-head",
          nav: "gap-1 flex items-center",
          button_previous: cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "size-7 bg-transparent p-0 absolute left-1",
          ),
          button_next: cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "size-7 bg-transparent p-0 absolute right-1",
          ),
          month_grid: "w-full border-collapse space-y-1",
          weekdays: "flex",
          weekday: "text-muted-foreground w-9 font-sans text-[0.8rem]",
          week: "flex w-full mt-2",
          day: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
          day_button: cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "size-9 p-0 font-sans aria-selected:opacity-100",
          ),
          selected: "bg-primary text-primary-foreground!",
          today: "bg-muted text-foreground!",
          outside: "text-muted-foreground opacity-50",
          disabled: "text-muted-foreground opacity-50",
          range_middle:
            "aria-selected:bg-primary/50! aria-selected:text-primary-foreground",
          range_start:
            "aria-selected:bg-primary! aria-selected:text-primary-foreground",
          range_end:
            "aria-selected:bg-primary! aria-selected:text-primary-foreground",
          hidden: "invisible",
          ...classNames,
        }}
        components={{
          Chevron: ({ orientation, className: chevronClassName, ...chevronProps }) => {
            const Icon = orientation === "left" ? ChevronLeft : ChevronRight;
            return (
              <Icon
                className={cn("size-4", chevronClassName)}
                {...chevronProps}
              />
            );
          },
        }}
        {...props}
      />
    </div>
  ),
);
Calendar.displayName = "Calendar";

export { Calendar };
