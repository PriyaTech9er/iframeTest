import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { cookies, headers } from "next/headers";

export default function SharedWidgetsPage({ params, searchParams }) {
  const router = useRouter();
  const referer = headers().get("Referer");

  if (referer === "http://third.party.com/") {
    return <div>I am widget</div>;
  }
  return <div>Content Not Available.</div>;
}
