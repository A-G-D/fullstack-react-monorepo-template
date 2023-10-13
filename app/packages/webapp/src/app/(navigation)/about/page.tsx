import { getSiteInfos } from "../../../utils/api/siteInfos";
import { assertNot404 } from "../../../utils/assertNot404";

export default async function AboutPage() {
  const { status, data: siteInfos } = await getSiteInfos();

  assertNot404(status);

  return (
    <div className="flex flex-col gap-4 text-gray-800">
      <h2 className="text-lg font-semibold uppercase">About</h2>
      <p className="">{siteInfos.about}</p>
      <p className="text-xs italic">{siteInfos.author}</p>
    </div>
  );
}
