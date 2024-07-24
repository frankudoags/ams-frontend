import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (dateString: string): string =>  {
  const date = new Date(dateString);

  // Define options for formatting the date
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true
  };

  // Format the date using Intl.DateTimeFormat
  const formattedDatetime = new Intl.DateTimeFormat('en-US', options).format(date);

  // Replace comma with ' -' to match the desired format
  const finalFormattedDatetime = formattedDatetime.replace('at', ' -');

  return finalFormattedDatetime;
}