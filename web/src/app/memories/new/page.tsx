import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewMemoriy() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link href="/" className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100">
        <ChevronLeft className="h-4 w-4"/>
        Voltar a Timeline
      </Link>
      <form action="" className="flex flex-1 flex-col gap-2 ">
        <div className="flex items-center gap-4">
          <label htmlFor="media">Anexar Mídia</label>
          <input type="file" id="media" className="invisible" />

        </div>
      </form>
    </div>
  )
}