import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdSenseProps {
  client: string;
}

const AdSense: React.FC<AdSenseProps> = ({ client }) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: client,
      enable_page_level_ads: true,
    });
  }, [client]);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-adtest="on"
      data-ad-client={client}
    />
  );
};

export default AdSense;
