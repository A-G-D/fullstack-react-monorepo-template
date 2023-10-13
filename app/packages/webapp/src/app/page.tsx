import { getSiteInfos } from "../utils/api/siteInfos";
import { assertNot404 } from "../utils/assertNot404";

export default async function Home() {
  const { status, data: infos } = await getSiteInfos();

  assertNot404(status);

  return (
    <div className="p-8">
      <h2 className="text-lg font-semibold uppercase text-gray-900">Home</h2>
      <p className="text-gray-700">{infos.about}</p>
    </div>
  );
}
