import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, LegalPages } from "../Pages";
import { CookiePolicy, PrivacyPolicy, TermsOfUse } from "../Components";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      
      <Route path="/legal" element={<LegalPages />}>
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route index element={<LegalPages />} /> 
        </Route>
    </Routes>
  );
};

export default Router;
