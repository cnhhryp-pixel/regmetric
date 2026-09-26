import type { MetadataRoute } from 'next';

const siteUrl = 'https://regmetric.com';

const routes = [
  '/',
  '/search/',
  '/assessment/',
  '/reports/',
  '/regulations/',
  '/regulations/gpsr/',
  '/regulations/ce-marking/',
  '/regulations/rohs/',
  '/regulations/reach/',
  '/regulations/emc/',
  '/regulations/lvd/',
  '/regulations/weee/',
  '/regulations/batteries/',
  '/regulations/machinery-regulation/',
  '/regulations/red/',
  '/industries/',
  '/industries/electronics/',
  '/industries/toys/',
  '/industries/machinery/',
  '/industries/automotive/',
  '/industries/medical-devices/',
  '/industries/consumer-products/',
  '/products/',
  '/products/electronics/',
  '/products/toys/',
  '/products/machinery/',
  '/products/automotive/',
  '/products/bluetooth-speaker/',
  '/products/power-adapter/',
  '/products/led-light/',
  '/products/battery-powered-device/',
  '/products/electronic-toy/',
  '/products/usb-charger/',
  '/products/wireless-charger/',
  '/products/smartwatch/',
  '/products/bluetooth-headphones/',
  '/products/power-bank/',
  '/products/led-driver/',
  '/products/smart-plug/',
  '/products/wifi-camera/',
  '/products/hair-dryer/',
  '/products/portable-fan/',
  '/products/electric-power-tool/',
  '/products/kitchen-appliance/',
  '/products/electric-scooter/',
  '/products/ebike-charger/',
  '/products/cordless-drill/',
  '/products/angle-grinder/',
  '/products/air-fryer/',
  '/products/electric-kettle/',
  '/products/desk-lamp/',
  '/products/smart-bulb/'
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-09-26T00:00:00.000Z');

  return routes.map((path) => {
    const depth = path === '/' ? 0 : path.split('/').filter(Boolean).length;

    return {
      url: siteUrl + path,
      lastModified,
      changeFrequency: depth <= 1 ? 'weekly' : 'monthly',
      priority: path === '/' ? 1 : depth === 1 ? 0.9 : 0.7,
    };
  });
}
