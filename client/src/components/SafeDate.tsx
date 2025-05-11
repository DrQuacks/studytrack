'use client';

import { useEffect, useState } from 'react';

export default function SafeDate({ iso }: { iso: string }) {
  const [formatted, setFormatted] = useState('Loading...');

  useEffect(() => {
    setFormatted(new Date(iso).toLocaleDateString());
  }, [iso]);

  if (typeof window === "undefined") {
    console.log("Server-rendered date:", iso);
  } else {
    console.log("Client-rendered date:", formatted);
  }

  return <>{formatted}</>;
}