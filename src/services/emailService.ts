export const sendEmail = async (quotation: unknown): Promise<unknown> => {
  const response = await fetch("https://formspree.io/f/xpzkwzab", {
    body: JSON.stringify(quotation),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });
  return response.json();
};
