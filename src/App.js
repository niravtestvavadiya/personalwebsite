import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// Pages import here
import ScrollToTop from "./components/sharedPages/ScrollToTop";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./components/Home";
import About from "./components/About";
import LoginPage from "./components/Login";
import SendOtpPage from "./components/SendOtp";
import RegistrationPageView from "./components/Registration";
import OtherEventView from "./components/OtherEvent";
import PodcastsView from "./components/Podcasts";
import PodcastsDetailView from "./components/PodcastDetails";
// new pages
// import MetaAwakeningEventView from "./components/MetaAwakeningEvent";
// import ChaitanyaYogKriyaEventView from "./components/ChaitanyaYogKriyaEvent";
import BooksView from "./components/Books";
import BlogsViewPage from "./components/Blogs";
import BlogDetailView from "./components/BlogDetail";
// Style
import "./asstes/styles/global.scss";
import PrivateRoute from "./routes/privateRoutes";
import PaymentStatus from "./components/PaymentStatus";
import InitiativeSoulFoundation from "./components/InitiativeSoulFoundation";
import InitiativeInduskargha from "./components/InitiativeInduskargha";
import InitiativeCircleOf from "./components/InitiativeCircleOf";
// import BQFEvents from "./components/BQFEvent";
import InTheNewsPage from "./components/InTheNewsPage";
import ContactUsPage from "./components/ContactUsPage";
import CorporateTraining from "./components/CorporateTrainingPage";
import InstitutionTraining from "./components/InstitutionTrainingPage";
import TrainingV2Page from "./components/TrainingV2";
import MetaAwekingEventNew from "./components/MetaAwekingEvent_New";
import ChaitanyaYogKriyaEventNew from "./components/ChaitanyaYogKriyaEventNew";
import BQFEventNew from "./components/BQFEventNew";
import PrivateCouncil from "./components/PrivateCouncil";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/sign-in" || location.pathname === "/otp-sent";

  return (
    <>
      {!isAuthPage && <Header />}
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/soul-foundation" element={<InitiativeSoulFoundation />} />
          <Route path="/circle-of-consciousness-and-happiness" element={<InitiativeCircleOf />} />
          <Route path="/induskargha" element={<InitiativeInduskargha />} />
          <Route path="/corporate" element={<CorporateTraining />} />
          <Route path="/institutions" element={<InstitutionTraining />} />
          <Route path="/another-training" element={<TrainingV2Page />} />
          <Route element={<PrivateRoute />}>
            <Route path="/sign-in" element={<LoginPage />} />
            <Route path="/otp-sent" element={<SendOtpPage />} />
            <Route path="/registration" element={<RegistrationPageView />} />
          </Route>
          <Route path="/all-events" element={<OtherEventView />} />
          <Route path="/podcasts" element={<PodcastsView />} />
          <Route path="/podcast-details" element={<PodcastsDetailView />} />
          {/* <Route path="/meta-awakening" element={<MetaAwakeningEventView />} /> */}
          {/* <Route path="/chaitanya-yog-kriya" element={<ChaitanyaYogKriyaEventView />} /> */}
          {/* <Route path="/bhupendraz-quantumforce" element={<BQFEvents />} /> */}
          <Route path="/meta-awakening" element={<MetaAwekingEventNew />} />
          <Route path="/chaitanya-yog-kriya" element={<ChaitanyaYogKriyaEventNew />} />
          <Route path="/quantumforce" element={<BQFEventNew />} />
          <Route path="/in-the-news" element={<InTheNewsPage />} />
          <Route path="/private-council" element={<PrivateCouncil />} />
          <Route path="/books" element={<BooksView />} />
          <Route path="/blogs" element={<BlogsViewPage />} />
          <Route path="/blog-detail/:id" element={<BlogDetailView />} />
          <Route path="/payment-status" element={<PaymentStatus />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
