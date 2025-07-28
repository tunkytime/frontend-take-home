import { format } from "date-fns";

import { DATE_FORMAT } from "../constants";

export function formatDate(date: string | Date) {
  if (typeof date === "string") {
    return format(new Date(date), DATE_FORMAT);
  }

  return format(date, DATE_FORMAT);
}
