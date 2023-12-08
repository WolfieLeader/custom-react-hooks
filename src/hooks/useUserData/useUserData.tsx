import { useState, useEffect } from "react";

const useUserData = () => {
  type OSType = "Windows" | "Mac" | "Linux" | "Android" | "IOS" | "unknown";
  type BrowserType = "Chrome" | "Firefox" | "Safari" | "Opera" | "Edge" | "IE" | "unknown";
  type TimezoneType = {
    location: string;
    utc: number;
  };

  const [os, setOS] = useState<OSType>("unknown");
  const [browser, setBrowser] = useState<BrowserType>("unknown");
  const [timezone, setTimezone] = useState<TimezoneType>({ location: "", utc: 0 });

  const userAgent = window.navigator.userAgent.toLowerCase();

  const detectOS = (): OSType => {
    if (userAgent.includes("android")) return "Android";
    else if (userAgent.includes("iphone") || userAgent.includes("ipad")) return "IOS";
    else if (userAgent.includes("win")) return "Windows";
    else if (userAgent.includes("mac")) return "Mac";
    else if (userAgent.includes("linux")) return "Linux";
    else return "unknown";
  };

  const detectBrowser = (): BrowserType => {
    if (userAgent.includes("chrome")) return "Chrome";
    else if (userAgent.includes("firefox")) return "Firefox";
    else if (userAgent.includes("safari")) return "Safari";
    else if (userAgent.includes("opera")) return "Opera";
    else if (userAgent.includes("edge")) return "Edge";
    else if (userAgent.includes("msie")) return "IE";
    else return "unknown";
  };

  const detectTimezone = (): TimezoneType => {
    const timezone = {
      location: Intl.DateTimeFormat().resolvedOptions().timeZone,
      utc: -(new Date().getTimezoneOffset() / 60),
    };
    return timezone;
  };

  useEffect(() => {
    setOS(detectOS());
    setBrowser(detectBrowser());
    setTimezone(detectTimezone());
  }, []);

  return { os, browser, timezone };
};

export default useUserData;
