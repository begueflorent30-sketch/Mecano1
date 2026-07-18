// api/mollie-webhook.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Méthode non autorisée');
  }

  try {
    console.log('Webhook Mollie reçu');
    return res.status(200).send('OK');
  } catch (error) {
    return res.status(500).send('Erreur serveur');
  }
}
