import React, { useState } from "react";

function ProfileImageForm({ user, newProfileImage }) {
  const [url, setUrl] = useState("");

  function handleSubmit(url) {
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ avatar: url }),
    })
      .then((r) => r.json())
      .then((data) => newProfileImage(data));
  }

  function handleUrlChange(e) {
    setUrl(e.target.value);
  }

  return (
    <form input="text" id="avatar-form">
      <input placeholder="Image URL" onChange={handleUrlChange} value={url} />
      <button variant="contained" color="success" onClick={() => { handleSubmit(url) }}>Change</button>
    </form>
  );
}

export default ProfileImageForm;