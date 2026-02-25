import { useRef, useState, type ChangeEvent } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

import styles from "./ProfilePhotoSelector.module.css";

interface ProfilePhotoSelectorProps {
  image: File | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
}

const ProfilePhotoSelector = ({
  image,
  setImage,
}: ProfilePhotoSelectorProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // update the image
      setImage(file);

      // generate preview URL from file
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current?.click();
  };

  return (
    <div className={styles["profile-img-content"]}>
      <input
        className={styles["profile-img-input"]}
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
      />
      {!image ? (
        <div className={styles["profile-img-user"]}>
          <LuUser className={styles["profile-user-icon"]} />
          <button className={styles["profile-upload-btn"]} type="button" onClick={onChooseFile}>
            <LuUpload />
          </button>
        </div>
      ) : (
        <div className={styles["profile-img-upload"]}>
          <img className={styles["profile-img"]} src={previewUrl as string} alt="profile photo" />
          <button className={styles["profile-remove-btn"]} type="button" onClick={handleRemoveImage}>
            <LuTrash />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
