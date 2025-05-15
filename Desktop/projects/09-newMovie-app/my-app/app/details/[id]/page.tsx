import { Detail } from "@/app/_components/DetailPage";
import { GetCreditApi } from "@/hooks/GetCreditApi";
// import { useRouter } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}
const DetailPage = async ({ params }: PageProps) => {
  const { id } = params;

  const result = await GetCreditApi(id);
  return <Detail id={id} />;
};

export default DetailPage;
