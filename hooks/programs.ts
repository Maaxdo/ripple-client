import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import {
  getProgram,
  getProgramReviews,
  getPrograms,
  getRelatedPrograms,
} from "@/helpers/programs";

export function usePrograms() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const search = searchParams.get("search");
  const fetcher = () => getPrograms(page, search);

  return useQuery({
    queryKey: ["programs", page, search],
    queryFn: fetcher,
  });
}

export function useRelatedPrograms() {
  const { slug } = useParams();
  const fetcher = () => getRelatedPrograms(slug as string);

  return useQuery({
    queryKey: ["related-programs", slug],
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

export function useProgramReview() {
  const { slug } = useParams();
  const fetcher = () => getProgramReviews(slug as string);

  return useQuery({
    queryKey: ["program-reviews", slug],
    queryFn: fetcher,
  });
}
