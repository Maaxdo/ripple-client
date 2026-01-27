import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { getProgram, getPrograms } from "@/helpers/programs";

export function usePrograms() {
  const searchParams = useSearchParams();
  const fetcher = () =>
    getPrograms(searchParams.get("page"), searchParams.get("search"));

  return useQuery({
    queryKey: ["programs"],
    queryFn: fetcher,
  });
}

export function useProgram() {
  const { slug } = useParams();
  const fetcher = () => getProgram(slug as string);

  return useQuery({
    queryKey: ["program", slug],
    queryFn: fetcher,
  });
}
