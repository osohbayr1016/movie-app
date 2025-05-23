import { SeeMore } from "@/app/_components/SeeMore";

interface PageProps {
  params: {
    id: string;
  };
}
const seeMore = ({ params }: PageProps) => {
  const { id } = params;
  return (
    <div>
      <SeeMore id={id} />
    </div>
  );
};
export default seeMore;
