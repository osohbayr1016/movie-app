import { DetailPage } from "@/app/_components/DetailPage";

interface PageProps {
  params: {
    id: string;
  };
}
const Detail = ({ params }: PageProps) => {
  const { id } = params;
  return (
    <div>
      <DetailPage id={id} />
    </div>
  );
};
export default Detail;
