import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { getUser } from "@/helpers/auth";

export function useAuth() {
  const bearer = Cookies.get("bearer_key");

  const fetcher = () => getUser(bearer);

  const user = useQuery({
    queryFn: fetcher,
    queryKey: ["user"],
    enabled: !!bearer,
    retry: false,
  });

  return { user };
}
