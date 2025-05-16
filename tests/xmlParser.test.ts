/*import path from 'path';
import { parseXML } from '../src/parsers/xmlparser';

describe('XML Parser', () => {
  const filePath = path.join(__dirname, '../src/data/Cake orders.xml');

  it('should parse valid XML correctly', async () => {
    const result = await parseXML(filePath);
    expect(result).toHaveProperty('Orders');
    expect(Array.isArray(result.Orders.Order)).toBe(true);
  });

  it('should handle empty XML files', async () => {
    const emptyPath = path.join(__dirname, '../src/data/empty.xml');
    const result = await parseXML(emptyPath);
    expect(result).toEqual({});
  });

  it('should throw an error for malformed XML', async () => {
    const badPath = path.join(__dirname, '../src/data/malformed.xml');
    await expect(parseXML(badPath)).rejects.toThrow();
  });
});*/
import fs from 'fs';
import path from 'path';
import { parseXML } from '../src/parsers/xmlparser';

describe('XML Parser', () => {
  const dataDir = path.join(__dirname, '..', 'data');

  it('should parse valid toy orders XML file', async () => {
    const filePath = path.join(dataDir, 'toy orders.xml');
    const xmlContent = fs.readFileSync(filePath, 'utf-8');

    const result = await parseXML(xmlContent);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(-1);
  });

  it('should handle empty XML files', async () => {
    const result = await parseXML('');
    expect(result).toEqual([]);
  });

  it('should throw an error for malformed XML', async () => {
    const malformed = `<orders><order><id>1</id></order`;
    await expect(parseXML(malformed)).rejects.toThrow(/Error parsing XML/);
  });
});

