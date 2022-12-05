import emailjs from '@emailjs/browser';
import { Mail } from '../types/types';

export const sendEmail = async (mail: Mail) => {
  try {
    const response = await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, mail as any, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    return response;
  } catch (e) {
    console.error(e);
    return null;
  }
};
