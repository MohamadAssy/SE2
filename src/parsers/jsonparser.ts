/*import fs from 'fs/promises';
import { getSystemErrorMessage } from 'util';

export async function parseJSON(filePath: string): Promise<any> {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error: any) {
    throw new Error(`Error parsing JSON: ${error.message}`);
  }
}*/
export function parseJSON(jsonData: string): any[] {
  if (!jsonData.trim()) return []; // Handle empty input safely

  try {
    const parsed = JSON.parse(jsonData);

    if (!Array.isArray(parsed)) {
      throw new Error('Expected JSON array');
    }

    return parsed;
  } catch (error: any) {
    throw new Error(`Error parsing JSON: ${error.message}`);
  }
}

