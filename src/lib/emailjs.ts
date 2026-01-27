import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (templateParams: {
  subject: string;
  name: string;
  email: string;
  tel: string;
  company: string;
  message: string;
  sent_date?: string;
}) => {
  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey,
    );
    return response;
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw error;
  }
};
