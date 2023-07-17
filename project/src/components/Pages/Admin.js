import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth";
import Footer from "../Footer";
import EventAndAnouncement from "../Admin/EventAndAnouncement";

function Admin() {
  const { currentUser, logOut } = useContext(AuthContext);

  const [activeEvent, setActiveEvent] = useState(false);
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const EventAndAnnouncements = () => {
    setActiveEvent(!activeEvent);
  };

  return (
    <div>
      <div className="pt-24 ">
        <div className="w-3/4 mx-auto ">
          <div className=" mt-4 px-4 flex gap-2">
            <button
              className="w-full text-center hover:opacity-60 bg-sky-100 py-2 px-2 text-sky-800 font-semibold  text-xl mt-4"
              onClick={EventAndAnnouncements}>
              Events and Announcements
            </button>
            <button className="w-full text-center hover:opacity-60 bg-sky-100 py-2 px-2 text-sky-800 font-semibold  text-xl mt-4">
              Sermon Achieve
            </button>
            <button className="w-full text-center hover:opacity-60 bg-sky-100 py-2 px-2 text-sky-800 font-semibold  text-xl mt-4">
              Pray Requests
            </button>
            <button className="w-full text-center hover:opacity-60 bg-sky-100 py-2 px-2 text-sky-800 font-semibold  text-xl mt-4">
              Online Membership
            </button>
          </div>
        </div>
        <div className="w-full h-[70vh] mb-12 overflow-visible">
          {activeEvent && <EventAndAnouncement />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Admin;
