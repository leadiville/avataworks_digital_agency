export function cleanMongoShape<T>(mongoData: T): T {
  const data = JSON.parse(JSON.stringify(mongoData));
  return data;
}
