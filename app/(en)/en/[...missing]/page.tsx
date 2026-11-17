import { notFound } from "next/navigation";

// Unknown addresses end here, so they get this language's 404 page inside the site shell.
export default function Missing() {
  notFound();
}
