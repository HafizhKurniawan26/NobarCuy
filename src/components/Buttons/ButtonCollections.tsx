"use client";
import React, { useState, useEffect } from "react";
import { BsBookmarkCheckFill, BsFillBookmarkPlusFill } from "react-icons/bs";

const ButtonCollections = ({
  mal_id,
  user_email,
  img,
  title,
  aktif,
}: {
  mal_id: string;
  user_email: string | undefined | null;
  img: string;
  title: string;
  aktif: boolean;
}) => {
  const [active, setActive] = useState(aktif);

  useEffect(() => {
    setActive(aktif);
  }, [aktif]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { mal_id, user_email, img, title };

    if (active) {
      // Jika sudah aktif, hapus dari koleksi
      const response = await fetch(`/api/v1/collections/${mal_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          user_email, // Kirim user_email via header
        },
      });
      const result = await response.json();
      if (response.ok) {
        setActive(false); // Toggle state jika berhasil dihapus
      }
      console.log(result);
    } else {
      // Jika belum aktif, tambahkan ke koleksi
      const response = await fetch("/api/v1/collections", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        setActive(true); // Toggle state jika berhasil ditambahkan
      }
      console.log(result);
    }
  };

  return (
    <div>
      <button onClick={handleSubmit} className="flex items-center">
        {active ? (
          <BsBookmarkCheckFill className="text-2xl text-yellow-400" />
        ) : (
          <BsFillBookmarkPlusFill className="text-2xl" />
        )}
      </button>
    </div>
  );
};

export default ButtonCollections;
