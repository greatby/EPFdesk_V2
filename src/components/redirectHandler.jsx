import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function RedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get("redirect");
    if (redirect) {
      // preserve query params (needed for signInWithEmailLink)
      navigate(redirect + location.search, { replace: true });
    }
  }, [location, navigate]);

  return null;
}
