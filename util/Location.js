import { REACT_APP_GOOGLE_API_KEY } from '@env';

const GOOGLE_API_KEY = REACT_APP_GOOGLE_API_KEY;

export function getMapPreview(latitude, longitude) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:C%7C${latitude},${longitude}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}
