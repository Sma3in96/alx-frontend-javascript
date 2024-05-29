export default async function loadBalancer(chinaDownload, USDownload) {
  const res = await Promise.race([chinaDownload, USDownload]);
  return res;
}
