
import { parseStringPromise } from 'xml2js';

export async function parseXML(xmlData: string): Promise<any[]> {
  if (!xmlData.trim()) return []; // Handle empty input safely

  try {
    const parsed = await parseStringPromise(xmlData, {
      explicitArray: false,
    });

    // Navigate to toy orders
    const orders = parsed?.orders?.order;

    if (!orders) return [];

    return Array.isArray(orders) ? orders : [orders];
  } catch (error: any) {
    throw new Error(`Error parsing XML: ${error.message}`);
  }
}
