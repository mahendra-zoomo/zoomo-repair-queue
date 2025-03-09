import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const CustomerQueue = () => {
  const [repairs, setRepairs] = useState([]);

  useEffect(() => {
    const fetchRepairs = async () => {
      const q = query(collection(db, "repairs"), orderBy("timestamp"));
      const querySnapshot = await getDocs(q);
      const repairsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRepairs(repairsList);
    };

    fetchRepairs();
  }, []);

  return (
    <div>
      <h1>E-Bike Repair Queue</h1>
      <ul>
        {repairs.map((repair) => (
          <li key={repair.id}>
            Bike ID: {repair.bikeId} | Status: {repair.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerQueue;