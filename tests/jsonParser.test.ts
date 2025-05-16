import path from 'path';
import { parseJSON } from '../src/parsers/jsonparser';

/*describe('JSON Parser', () => {
  const filePath = path.join(__dirname, '../src/data/Cake orders.json');

  it('should parse valid JSON correctly', async () => {
    const result = await parseJSON(filePath);
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty('OrderID');
  });

  it('should handle empty JSON files', async () => {
    const emptyPath = path.join(__dirname, '../src/data/empty.json');
    const result = await parseJSON(emptyPath);
    expect(result).toEqual({});
  });

  it('should throw an error for malformed JSON', async () => {
    const badPath = path.join(__dirname, '../src/data/malformed.json');
    await expect(parseJSON(badPath)).rejects.toThrow();
  });
});*/
import fs from 'fs';

describe('JSON Parser', () => {
  const dataDir = path.join(__dirname, '..', 'data');

  it('should parse valid book orders JSON file', () => {
    const filePath = path.join(dataDir, 'book orders.json');
    const jsonContent = fs.readFileSync(filePath, 'utf-8');

    const result = parseJSON(jsonContent);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);

  });

  it('should handle empty JSON files', () => {
    const result = parseJSON('');
    expect(result).toEqual([]);
  });

  it('should throw an error for malformed JSON', () => {
    const malformed = '{"id": 1, "title": "Book Title"'; // missing closing brace
    expect(() => parseJSON(malformed)).toThrow(/Error parsing JSON/);
  });

  it('should throw an error if JSON is not an array', () => {
    const notArray = '{"id": 1, "title": "Book Title"}';
    expect(() => parseJSON(notArray)).toThrow('Expected JSON array');
  });
});

