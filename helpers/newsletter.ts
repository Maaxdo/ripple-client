import { axiosInstance } from "@/lib/utils";
import { NewsletterSchemaType } from "@/schema/newsletter";

export const subscribeToNewsletter = async (data: NewsletterSchemaType) => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: "/newsletter/subscribe",
    method: "POST",
    data,
  }).then((res) => res.data);
};
