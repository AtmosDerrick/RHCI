import React from "react";

function EventAndAnouncement() {
  const events = [
    {
      event: "Meeting",
      date: "2023-07-15",
      time: "14:00",
    },
    {
      event: "Conference",
      date: "2023-08-05",
      time: "09:30",
    },
    {
      event: "Workshop",
      date: "2023-09-10",
      time: "13:45",
    },
    {
      event: "Training Session",
      date: "2023-07-25",
      time: "10:00",
    },
    {
      event: "Product Launch",
      date: "2023-08-18",
      time: "15:30",
    },
    {
      event: "Team Building Activity",
      date: "2023-09-02",
      time: "11:00",
    },
    {
      event: "Webinar",
      date: "2023-07-28",
      time: "16:00",
    },
    {
      event: "Networking Event",
      date: "2023-08-12",
      time: "18:00",
    },
    {
      event: "Project Deadline",
      date: "2023-09-20",
      time: "23:59",
    },
    {
      event: "Company Anniversary Celebration",
      date: "2023-08-30",
      time: "19:30",
    },
  ];

  console.log("lllll");
  return (
    <div className="w-3/4 mx-auto mt-4 p-4  ">
      {events.map((event) => (
        <div className="flex justify-between py-2 text-lg border-b-2  ">
          <div className="flex justify-between gap-4 w-1/2">
            <div className="w-full">{event.date}</div>
            <div className="w-full">{event.time}</div>
          </div>
          <div className="w-full text-right">{event.event}</div>
          <div className="flex gap-4 ml-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </div>
        </div>
      ))}
      <div className="flex justify-end mt-4 gap-8">
        <button className="bg-sky-700 py-2 px-4 text-lg font-medium text-white hover:opacity-60 flex gap-4">
          Create Event{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>
        </button>
        <button className="bg-white shadow-md py-2 px-4 text-lg font-medium text-sky-700 hover:opacity-60 flex gap-4">
          Announcements{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default EventAndAnouncement;
