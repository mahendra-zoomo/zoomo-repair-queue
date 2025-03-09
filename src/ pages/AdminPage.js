import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query, updateDoc, doc } from "firebase/firestore";

const AdminPage = () => {
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

  const updateStatus = async (id, status) => {
    await updateDoc(doc(db, "repairs", id), { status });
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <ul>
        {repairs.map((repair) => (
          <li key={repair.id}>
            Bike ID: {repair.bikeId} | Status: {repair.status}
            <button onClick={() => updateStatus(repair.id, "Repair In Process")}>
              Start Repair
            </button>
            <button onClick={() => updateStatus(repair.id, "Ready to Pick-Up")}>
              Complete Repair
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;