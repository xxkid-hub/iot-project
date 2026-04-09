let sensorData = {
  moisture: 0,
  pump: "OFF"
};

export default function handler(req, res) {
  if (req.method === "POST") {
    const { moisture, pump } = req.body;

    sensorData.moisture = moisture;
    sensorData.pump = pump;

    return res.status(200).json({ message: "Updated" });
  }

  if (req.method === "GET") {
    return res.status(200).json(sensorData);
  }
}