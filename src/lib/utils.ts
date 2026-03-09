import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, "");
  
  // Format as +1 XXX-XXX-XXXX
  if (cleaned.length === 10) {
    return `+1 ${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else if (cleaned.length === 11 && cleaned[0] === "1") {
    return `+1 ${cleaned.slice(1, 4)}-${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  
  return phone;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map(part => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
