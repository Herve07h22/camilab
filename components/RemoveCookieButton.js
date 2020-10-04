const RemoveCookieButton = () => {
  const removeCookies = () => {
    var _hsp = (window._hsp = window._hsp || []);
    _hsp.push(["revokeCookieConsent"]);
  };

  return (
    <button type="button" id="hs_remove_cookie_button" className="p-2 text-grey-darker" onClick={() => removeCookies()}>
      Supprimer les cookies
    </button>
  );
};

export default RemoveCookieButton;
