import { Tag } from "../tag";

export function Card() {
  return (
    <div className="p-4 max-w-lg rounded bg-slate-200 flex flex-col gap-3">
      <div className="flex justify-between">
        <Tag text="Prioridade" color="red" />
        <Tag text="status" color="red" />
        <p className="text-sm font-bold">01/01/2025</p>
      </div>

      <div className="flex justify-between">
        <p className="text-xs font-bold">Solicitante: Dave</p>
        <p className="text-xs font-bold ">Responsável: José</p>
      </div>

      <div className="flex flex-col gap-1 mt-2">
        <h3 className="text-lg font-bold text-slate-950">
          Instabilidade na tela de vendas
        </h3>
        <p className="text-sm text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
      </div>
    </div>
  );
}
