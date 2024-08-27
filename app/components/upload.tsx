"use client"
import React, { useState } from 'react';

export default function UploadForm() {
  const [file, setFile] = useState<File|null>(null);

  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
        setFile(e.target.files[0]);
      }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log(result);
    } else {
      console.error('No file selected');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}
