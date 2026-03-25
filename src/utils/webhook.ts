const WEBHOOK_URL = 'https://webhook.site/b9b312be-3321-49f6-92b1-848af8547776';

export interface FormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  investment?: string;
}

export const sendToWebhook = async (data: FormData): Promise<boolean> => {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        source: 'SoloBrand Landing Page',
        ...data,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending to webhook:', error);
    return false;
  }
};