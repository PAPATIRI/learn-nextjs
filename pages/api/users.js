export default function users(req, res) {
  res.status(200).json([
    {
      name: "syarif taufik",
      prodi: "teknik informatika",
    },
    {
      name: "septian eka",
      prodi: "kedokteran",
    },
  ]);
}
