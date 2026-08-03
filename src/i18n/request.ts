export default async function requestConfig({
  requestLocale,
}: {
  requestLocale: Promise<string>;
}) {
  const locale = await requestLocale;
  return {
    locale,
    messages: {},
  };
}
