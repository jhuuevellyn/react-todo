import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-400 p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative m-6">
          <button
            onClick={() => navigate(-1)}
            className="text-slate-100 absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>

          <Title>Detalhes da Tarefa</Title>
        </div>
      </div>
      <div className="bg-slate-300 p-4 rounded-md">
        <h2 className="text-xl font-bold text-slate-500">{title}</h2>
        <p className="text-slate-500">{description}</p>
      </div>
    </div>
  );
}
export default TaskPage;
