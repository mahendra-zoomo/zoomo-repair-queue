import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const TrackRepair = () => {
  const { id } = useParams();
  const [repair, setRepair] = useState(null);

  useEffect(() => {
    const fetchRepair = async () => {
      const repairDoc = await getDoc(doc(db, "repairs", id));
      if (repairDoc.exists()) {
        setRepair({ id: repairDoc.id, ...repairDoc.data() });
      }
    };

    fetchRepair();
  }, [id]);

  if (!repair) return <div>Loading...</div>;

  return (
    <div>
      <h1>Track Your Repair</h1>
      <p>Bike ID: {repair.bikeId}</p>
      <p>Status: {repair.status}</p>
    </div>
  );
};

export default TrackRepair;