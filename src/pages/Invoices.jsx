import data from "../data.json";
import Card from "../Components/Card";
export default function Invoices() {
  console.log(data);
  return (
    <div className="div flex w-full justify-center items-center flex-wrap gap-[5px]">
      {data.map((id, idx) => {
        return <Card key={idx} invoice={id} />;
      })}
    </div>
  );
}
