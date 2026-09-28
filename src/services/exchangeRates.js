const API_URL = 'https://open.er-api.com/v6/latest/USD';

export async function fetchExchangeRates() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Erro ao buscar taxas de câmbio');
  }

  const data = await response.json();

  if (!data?.rates) {
    throw new Error('Resposta da API inválida');
  }

  return { USD: 1, ...data.rates };
}